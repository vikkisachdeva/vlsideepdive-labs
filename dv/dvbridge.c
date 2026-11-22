/* dvbridge: system functions that hand values to the JavaScript DV engine
 * (concurrent assertions, functional coverage, constrained randomization).
 *   $__dv("T", id, $time, sig...)  assertion tick: sig values are sampled
 *                                  in the Preponed region (value at the
 *                                  end of the previous time step)
 *   $__dv(op, id, args...)         any other op: current values
 *   $__dvget()                     next 64-bit value produced by the engine
 *   $__dvr(op, id, args...)        real result (coverage percentages)      */
#include "sv_vpi_user.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>

__attribute__((import_module("env"), import_name("dv_call"))) extern int dv_call(const char *buf, int len);
__attribute__((import_module("env"), import_name("dv_real"))) extern double dv_real(const char *buf, int len);
__attribute__((import_module("env"), import_name("dv_get"))) extern int dv_get(char *out, int cap);

typedef struct trk { vpiHandle h; char *last, *prev; PLI_UINT64 stamp; int tracked; } trk;
typedef struct site { int n; trk *t; } site;

static char *buf = 0; static int cap = 0, len = 0;
static void put(const char *s) { int l = strlen(s); if (len + l + 2 > cap) { cap = (len + l + 2) * 2; buf = realloc(buf, cap); } memcpy(buf + len, s, l); len += l; buf[len] = 0; }
static PLI_UINT64 now(void) { s_vpi_time t; t.type = vpiSimTime; vpi_get_time(0, &t); return ((PLI_UINT64)t.high << 32) | t.low; }

static int is_signal(int ty) {
  switch (ty) { case vpiNet: case vpiReg: case vpiIntegerVar: case vpiBitVar: case vpiByteVar: case vpiShortIntVar:
    case vpiIntVar: case vpiLongIntVar: case vpiTimeVar: case vpiRealVar: case vpiMemoryWord: case vpiPartSelect: case vpiNetBit: case vpiRegBit: return 1; }
  return 0;
}
static char *getbits(vpiHandle h) {
  s_vpi_value v; int ty = vpi_get(vpiType, h);
  char tmp[64];
  int ct = ty == vpiConstant ? vpi_get(vpiConstType, h) : 0;
  if (ty == vpiRealVar || ct == vpiRealConst || (ty == vpiSysFuncCall && vpi_get(vpiFuncType, h) == vpiRealFunc)) { v.format = vpiRealVal; vpi_get_value(h, &v); snprintf(tmp, sizeof tmp, "r%.17g", v.value.real); return strdup(tmp); }
  if (ty == vpiStringVar || ct == vpiStringConst) {
    v.format = vpiStringVal; vpi_get_value(h, &v); size_t l = strlen(v.value.str); char *r = malloc(l + 2); r[0] = 's'; memcpy(r + 1, v.value.str, l + 1); return r; }
  v.format = vpiBinStrVal; vpi_get_value(h, &v);
  const char *s = v.value.str ? v.value.str : "x";
  size_t l = strlen(s); char *r = malloc(l + 3);
  int sg = vpi_get(vpiSigned, h);
  int two = ty == vpiBitVar || ty == vpiByteVar || ty == vpiShortIntVar || ty == vpiIntVar || ty == vpiLongIntVar;
  int konst = ty == vpiParameter || ty == vpiConstant || ty == vpiEnumConst;
  r[0] = konst ? (sg ? 'K' : 'k') : two ? (sg ? 'i' : 'u') : (sg ? 'S' : 'b'); memcpy(r + 1, s, l + 1); return r;
}
static PLI_INT32 on_change(p_cb_data cb) {
  trk *t = (trk *)cb->user_data; PLI_UINT64 n = now();
  if (t->stamp != n) { free(t->prev); t->prev = t->last; t->last = 0; t->stamp = n; } else { free(t->last); t->last = 0; }
  t->last = getbits(t->h);
  return 0;
}
static site *make_site(vpiHandle call) {
  vpiHandle it = vpi_iterate(vpiArgument, call), a; int n = 0;
  site *s = calloc(1, sizeof *s); s->t = calloc(64, sizeof(trk));
  int tick = 0;
  while (it && (a = vpi_scan(it))) {
    if (n == 0 && vpi_get(vpiType, a) == vpiConstant && vpi_get(vpiConstType, a) == vpiStringConst) {
      s_vpi_value v; v.format = vpiStringVal; vpi_get_value(a, &v); tick = v.value.str && strcmp(v.value.str, "T") == 0; }
    if (n < 64) { trk *t = &s->t[n]; t->h = a; t->stamp = (PLI_UINT64)-1;
      if (tick && n >= 3 && is_signal(vpi_get(vpiType, a))) {
        s_cb_data cb; s_vpi_time tm; s_vpi_value vv; memset(&cb, 0, sizeof cb);
        tm.type = vpiSuppressTime; vv.format = vpiSuppressVal;
        cb.reason = cbValueChange; cb.cb_rtn = on_change; cb.obj = a; cb.time = &tm; cb.value = &vv; cb.user_data = (PLI_BYTE8 *)t;
        vpi_register_cb(&cb); t->tracked = 1; t->last = getbits(a);
      } }
    n++;
  }
  s->n = n > 64 ? 64 : n; return s;
}
static int collect(vpiHandle call) {
  site *s = (site *)vpi_get_userdata(call);
  if (!s) { s = make_site(call); vpi_put_userdata(call, s); }
  len = 0; put("");
  vpiHandle sc = vpi_handle(vpiScope, call);
  char *sn = sc ? vpi_get_str(vpiFullName, sc) : 0;
  put(sn ? sn : "?"); put("\n");
  PLI_UINT64 n = now(); { char tb[32]; snprintf(tb, sizeof tb, "%llu\n", (unsigned long long)n); put(tb); }
  int tick = 0;
  for (int i = 0; i < s->n; i++) {
    trk *t = &s->t[i]; char *v;
    if (i == 0) { v = getbits(t->h); tick = (v[0] == 's' && v[1] == 'T'); }
    else if (tick && t->tracked) {
      /* Preponed value: if this signal changed earlier in the current time step, use its value from before. */
      char *cur = getbits(t->h);
      if (t->stamp == n && t->prev) { size_t a = strlen(t->prev), b = strlen(cur); v = malloc(a + b + 2); memcpy(v, t->prev, a); v[a] = '|'; memcpy(v + a + 1, cur, b + 1); free(cur); }
      else v = cur;
    } else v = getbits(t->h);
    put(v); put("\n"); free(v);
  }
  return len;
}
static PLI_INT32 dv_calltf(PLI_BYTE8 *ud) {
  (void)ud; vpiHandle call = vpi_handle(vpiSysTfCall, 0);
  int l = collect(call); int r = dv_call(buf, l);
  s_vpi_value v; v.format = vpiIntVal; v.value.integer = r; vpi_put_value(call, &v, 0, vpiNoDelay); return 0;
}
static PLI_INT32 dvr_calltf(PLI_BYTE8 *ud) {
  (void)ud; vpiHandle call = vpi_handle(vpiSysTfCall, 0);
  int l = collect(call); double r = dv_real(buf, l);
  s_vpi_value v; v.format = vpiRealVal; v.value.real = r; vpi_put_value(call, &v, 0, vpiNoDelay); return 0;
}
static PLI_INT32 dvget_calltf(PLI_BYTE8 *ud) {
  (void)ud; vpiHandle call = vpi_handle(vpiSysTfCall, 0);
  char out[80]; int l = dv_get(out, 79); if (l < 0) l = 0; out[l] = 0;
  s_vpi_vecval vec[2]; memset(vec, 0, sizeof vec);
  for (int i = 0; i < l && i < 64; i++) { char c = out[l - 1 - i]; int w = i / 32, b = i % 32;
    if (c == '1') vec[w].aval |= 1u << b; else if (c == 'x') { vec[w].aval |= 1u << b; vec[w].bval |= 1u << b; } else if (c == 'z') vec[w].bval |= 1u << b; }
  s_vpi_value v; v.format = vpiVectorVal; v.value.vector = vec; vpi_put_value(call, &v, 0, vpiNoDelay); return 0;
}
static PLI_INT32 dv_compiletf(PLI_BYTE8 *ud) {
  (void)ud; vpiHandle call = vpi_handle(vpiSysTfCall, 0);
  if (!vpi_get_userdata(call)) vpi_put_userdata(call, make_site(call));
  return 0;
}
static PLI_INT32 size64(PLI_BYTE8 *ud) { (void)ud; return 64; }
static void dv_register(void) {
  s_vpi_systf_data tf; memset(&tf, 0, sizeof tf);
  tf.type = vpiSysFunc; tf.sysfunctype = vpiIntFunc; tf.tfname = "$__dv"; tf.calltf = dv_calltf; tf.compiletf = dv_compiletf; vpi_register_systf(&tf);
  tf.sysfunctype = vpiRealFunc; tf.tfname = "$__dvr"; tf.calltf = dvr_calltf; tf.compiletf = 0; vpi_register_systf(&tf);
  tf.sysfunctype = vpiSizedFunc; tf.tfname = "$__dvget"; tf.calltf = dvget_calltf; tf.sizetf = size64; vpi_register_systf(&tf);
}
void (*dvbridge_vlog_startup_routines[])(void) = { dv_register, 0 };
