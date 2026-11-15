/* Static replacement for dlopen/dlsym so Icarus's VPI modules and the
 * vvp code generator can be linked into one WebAssembly binary. */
#include <string.h>
#include <stddef.h>
typedef void (*startup_t)(void);
#define W __attribute__((weak))
extern startup_t system_vlog_startup_routines[] W;
extern startup_t v2005_math_vlog_startup_routines[] W;
extern startup_t va_math_vlog_startup_routines[] W;
extern startup_t v2009_vlog_startup_routines[] W;
extern int vvp_target_design(void*) W;
extern const char* vvp_target_query(const char*) W;
struct mod { const char*name; void*startup; void*design; void*query; };
static struct mod mods[] = {
  {"system.vpi", 0,0,0}, {"v2005_math.vpi",0,0,0}, {"va_math.vpi",0,0,0},
  {"v2009.vpi",0,0,0}, {"vvp.tgt",0,0,0},
};
static const char*last_err = "";
static void init(void){
  mods[0].startup = (void*)system_vlog_startup_routines;
  mods[1].startup = (void*)v2005_math_vlog_startup_routines;
  mods[2].startup = (void*)va_math_vlog_startup_routines;
  mods[3].startup = (void*)v2009_vlog_startup_routines;
  mods[4].design = (void*)vvp_target_design;
  mods[4].query = (void*)vvp_target_query;
}
void* dlopen(const char*path, int flags){
  (void)flags; init();
  const char*b = strrchr(path, '/'); b = b ? b+1 : path;
  for (size_t i=0;i<sizeof mods/sizeof mods[0];i++)
    if (strcmp(b, mods[i].name)==0 && (mods[i].startup||mods[i].design)) return &mods[i];
  last_err = "module is not built into this WebAssembly simulator";
  return 0;
}
void* dlsym(void*h, const char*nm){
  struct mod*m = (struct mod*)h; if (!m) return 0;
  if (nm[0]=='_') nm++;
  if (!strcmp(nm,"vlog_startup_routines")) return m->startup;
  if (!strcmp(nm,"target_design")) return m->design;
  if (!strcmp(nm,"target_query")) return m->query;
  return 0;
}
int dlclose(void*h){ (void)h; return 0; }
char* dlerror(void){ return (char*)last_err; }
