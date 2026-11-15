(()=>{var h=`// Two flops feeding a third through a buffer and an AND gate.
// Cells come from the open-source SkyWater 130 nm high-density library.
module top (in1, in2, clk1, clk2, clk3, out);
  input  in1, in2, clk1, clk2, clk3;
  output out;
  wire   r1q, r2q, u1x, u2x;

  sky130_fd_sc_hd__dfxtp_1 r1 (.D(in1), .CLK(clk1), .Q(r1q));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(in2), .CLK(clk2), .Q(r2q));
  sky130_fd_sc_hd__buf_1   u1 (.A(r2q), .X(u1x));
  sky130_fd_sc_hd__and2_1  u2 (.A(r1q), .B(u1x), .X(u2x));
  sky130_fd_sc_hd__dfxtp_1 r3 (.D(u2x), .CLK(clk3), .Q(out));
endmodule
`,Z=`# One 10 ns clock drives all three flops
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,y=`read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc
`,M=`// The same three-flop circuit built from ASAP7 7 nm predictive cells.
module top (in1, in2, clk1, clk2, clk3, out);
  input  in1, in2, clk1, clk2, clk3;
  output out;
  wire   r1q, r2q, u1z, u2z;

  DFFHQx4_ASAP7_75t_R r1 (.D(in1), .CLK(clk1), .Q(r1q));
  DFFHQx4_ASAP7_75t_R r2 (.D(in2), .CLK(clk2), .Q(r2q));
  BUFx2_ASAP7_75t_R   u1 (.A(r2q), .Y(u1z));
  AND2x2_ASAP7_75t_R  u2 (.A(r1q), .B(u1z), .Y(u2z));
  DFFHQx4_ASAP7_75t_R r3 (.D(u2z), .CLK(clk3), .Q(out));
endmodule
`,u=[{id:"basic",title:"Setup & hold checks",tag:"Basics",files:{"netlist.v":h,"constraints.sdc":Z,"run.tcl":`# Load the library, the netlist and the constraints
${y}
# Worst setup (max) path
report_checks -path_delay max

# Worst hold (min) path. in1 -> r1 has almost no hold margin because the
# input changes at the same instant as the clock edge (input delay 0).
# Try set_input_delay -min 0.2 ... in constraints.sdc and run again.
report_checks -path_delay min

report_wns
report_tns
`}},{id:"violation",title:"Setup violation: fast clock",tag:"Basics",files:{"netlist.v":h,"constraints.sdc":`# Squeeze the clock to 0.5 ns (2 GHz): the r2 -> r3 path no longer fits
create_clock -name clk -period 0.5 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`${y}
# Show slew, load and fanout at every stage of the failing path
report_checks -path_delay max -fields {slew cap fanout} -digits 3

# Every failing endpoint, worst first
report_checks -path_delay max -group_path_count 10 -endpoint_path_count 1 -format end -slack_max 0

report_worst_slack -max
report_tns
`}},{id:"io",title:"Input & output delays",tag:"Constraints",files:{"netlist.v":h,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}

# The block's neighbours use part of the cycle
set_input_delay  0.6 -clock clk {in1 in2}
set_output_delay 0.8 -clock clk [get_ports out]

# Realistic edges and loads at the boundary
set_input_transition 0.1 {in1 in2}
set_load 0.02 [get_ports out]
`,"run.tcl":`${y}
puts "### Input to register"
report_checks -from [get_ports in1] -fields {slew cap}

puts "\\n### Register to output"
report_checks -to [get_ports out] -fields {slew cap}
`}},{id:"exceptions",title:"False & multicycle paths",tag:"Constraints",files:{"netlist.v":h,"constraints.sdc":`create_clock -name clk -period 0.45 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}

# r2 only launches new data every 2 cycles
set_multicycle_path -setup 2 -from [get_cells r2] -to [get_cells r3]
set_multicycle_path -hold  1 -from [get_cells r2] -to [get_cells r3]

# in1 is a static configuration pin: ignore it
set_false_path -from [get_ports in1]
`,"run.tcl":`${y}
# A 0.45 ns clock: without exceptions both paths into r3 would fail.
# r2 -> r3 now passes thanks to the multicycle path...
report_checks -from [get_cells r2] -to [get_cells r3]

# ...but r1 -> r3 still fails. Add a multicycle path for it too and run again.
report_checks -from [get_cells r1] -to [get_cells r3]
report_wns
`}},{id:"ocv",title:"Clock latency, uncertainty & OCV",tag:"Clocks",files:{"netlist.v":h,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}
set_input_delay 0.3 -clock clk {in1 in2}

# Clock tree not built yet: model it
set_clock_latency -source 0.30 [get_clocks clk]
set_clock_latency        0.20 [get_clocks clk]
set_clock_uncertainty -setup 0.10 [get_clocks clk]
set_clock_uncertainty -hold  0.05 [get_clocks clk]
`,"run.tcl":`${y}
# On-chip variation: for setup, data is slowed by 8% and the capture clock sped up by 8%
set_timing_derate -early 0.92
set_timing_derate -late  1.08

report_checks -path_delay min_max -fields {slew}
`}},{id:"corners",title:"Multi-corner: slow & fast",tag:"Corners",files:{"netlist.v":M,"constraints.sdc":`# ASAP7 libraries use picoseconds: a 300 ps clock
create_clock -name clk -period 300 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`# Slow (ss) and fast (ff) corners of the ASAP7 library
read_liberty asap7_small_ss.lib.gz
read_liberty asap7_small_ff.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc

define_scene ss -liberty asap7_small_ss
define_scene ff -liberty asap7_small_ff

# Worst setup and hold across both corners.
# in1 -> r1 fails hold: the input changes exactly at the clock edge (input delay 0).
report_checks -path_delay min_max

foreach s {ss ff} {
  puts "\\n### Scene $s"
  report_checks -scene $s -path_delay min_max -format summary
}
`}},{id:"spef",title:"Wire parasitics from SPEF",tag:"Parasitics",files:{"netlist.v":M,"constraints.sdc":`create_clock -name clk -period 300 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"parasitics.spef":null,"run.tcl":`read_liberty asap7_small_ss.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc

puts "### Without wire parasitics"
report_checks -fields {cap slew}

read_spef parasitics.spef
puts "\\n### With wire parasitics from SPEF"
report_checks -fields {cap slew}
`},load:{"parasitics.spef":"reg1_asap7.spef"}},{id:"gcd",title:"GCD block (Sky130): SPEF + power",tag:"Real design",files:{"netlist.v":null,"constraints.sdc":`set period 5
create_clock -period $period [get_ports clk]

set clk_period_factor .2
set delay [expr $period * $clk_period_factor]
set_input_delay $delay -clock clk {req_val reset resp_rdy req_msg[*]}
set_output_delay $delay -clock clk [all_outputs]

set_input_transition .1 [all_inputs]
`,"run.tcl":`# A synthesised and routed GCD block from the open-source SkyWater 130 nm flow
read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design gcd
read_sdc constraints.sdc
set_propagated_clock clk
read_spef gcd_sky130hd.spef.gz

report_checks -fields {slew cap fanout} -digits 3
report_wns
report_tns

set_power_activity -input -activity 0.1
set_power_activity -input_port reset -activity 0
report_power
`},load:{"netlist.v":"gcd_sky130hd.v"}}],P=["sky130hd_tt.lib.gz","asap7_small_ss.lib.gz","asap7_small_ff.lib.gz","gcd_sky130hd.spef.gz"],q=[["sky130hd_tt.lib.gz","SkyWater 130 nm HD, typical (ns, pF)"],["asap7_small_ss.lib.gz","ASAP7 7 nm, slow; 3 cells (ps, fF)"],["asap7_small_ff.lib.gz","ASAP7 7 nm, fast; 3 cells (ps, fF)"],["gcd_sky130hd.spef.gz","Parasitics for the GCD block"]];var o=e=>document.querySelector(e),I=6e4,j="vdd-sta-lab-v1",d="run.tcl",n={example:u[0].id,files:{},order:[],current:d,running:!1,ready:!1,worker:null,timer:null},f=new Map,c=null,i=o("#editor textarea");function K(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(c=window.CodeMirror.fromTextArea(i,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),c.on("change",()=>{n.files[n.current]=c.getValue(),U()})):(i.classList.add("plain-editor"),i.addEventListener("input",()=>{n.files[n.current]=i.value,U()}));function V(e){c?n.files[n.current]=c.getValue():n.files[n.current]=i.value,n.current=e,c?(f.has(e)||f.set(e,window.CodeMirror.Doc(n.files[e]??"",K(e))),c.swapDoc(f.get(e)),setTimeout(()=>c.refresh(),0)):i.value=n.files[e]??"",Q()}function ee(e,s){V(e),c&&(c.focus(),c.setCursor({line:s-1,ch:0}),c.addLineClass(s-1,"background","cm-errline"),setTimeout(()=>c.removeLineClass(s-1,"background","cm-errline"),2500),c.scrollIntoView({line:s-1,ch:0},80))}function L(e,s,t){f.clear(),n.files={...e},n.order=s||Object.keys(e),n.current=t&&n.order.includes(t)?t:n.order.includes(d)?d:n.order[0],c?(f.set(n.current,window.CodeMirror.Doc(n.files[n.current]??"",K(n.current))),c.swapDoc(f.get(n.current))):i.value=n.files[n.current]??"",Q()}function Q(){let e=o("#tabs");e.innerHTML="";for(let s of n.order){let t=document.createElement("button");t.type="button",t.className="tab"+(s===n.current?" active":""),t.setAttribute("role","tab"),t.setAttribute("aria-selected",s===n.current?"true":"false"),t.textContent=s,t.addEventListener("click",()=>V(s)),e.appendChild(t)}}function G(){let e=o("#examples");e.innerHTML="";for(let t of u){let r=document.createElement("button");r.type="button",r.className="ex"+(t.id===n.example?" active":""),r.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',r.querySelector(".ex-tag").textContent=t.tag,r.querySelector(".ex-title").textContent=t.title,r.addEventListener("click",()=>w(t.id)),e.appendChild(r)}let s=o("#ex-select");s.innerHTML=u.map(t=>`<option value="${t.id}">${t.title}</option>`).join(""),n.example&&(s.value=n.example)}async function w(e){let s=u.find(l=>l.id===e)||u[0];n.example=s.id;let t={};for(let[l,a]of Object.entries(s.files))if(a!==null)t[l]=a;else try{let p=await fetch(new URL("data/"+s.load[l],location.href));t[l]=p.ok?await p.text():`// Could not load ${s.load[l]}`}catch{t[l]=`// Could not load ${s.load[l]}`}let r=Object.keys(s.files).sort((l,a)=>W(l)-W(a));L(t,r,d),G(),D(),J(),O(null),m(n.ready?"Ready":"Loading OpenSTA\u2026",n.ready?"idle":"busy")}function W(e){return e===d?0:/\.s?v$/.test(e)?1:/\.sdc$/.test(e)?2:3}var H=null;function U(){clearTimeout(H),H=setTimeout(D,400)}function D(){try{localStorage.setItem(j,JSON.stringify({example:n.example,files:n.files,order:n.order,current:n.current}))}catch{}}function te(){try{let e=JSON.parse(localStorage.getItem(j)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function se(){let e=JSON.stringify({f:n.files,o:n.order}),s=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=new Uint8Array(await new Response(s).arrayBuffer()),r="";for(let l of t)r+=String.fromCharCode(l);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ne(e){let s=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=new Blob([Uint8Array.from(s,r=>r.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(t).text())}async function g(e,s){let t=!1;try{await navigator.clipboard.writeText(e),t=!0}catch{let l=document.createElement("textarea");l.value=e,l.style.position="fixed",l.style.opacity="0",document.body.appendChild(l),l.select();try{t=document.execCommand("copy")}catch{}l.remove()}if(s){let r=s.dataset.label||s.textContent;s.dataset.label=r,s.textContent=t?"Copied":"Press Ctrl+C",s.classList.toggle("ok",t),setTimeout(()=>{s.textContent=r,s.classList.remove("ok")},1600)}}function re(e,s){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([s],{type:"text/plain"})),t.download=e,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},500)}var _=o("#console"),v=[];function J(){_.textContent="",v=[]}function k(e,s){v.push(e);let t=document.createElement("div");t.className="ln "+(s||"");let r=/\b([\w.-]+\.(?:v|sdc|tcl|spef)),? (?:line )?(\d+)\b/.exec(e);if(r&&n.files[r[1]]!==void 0){let l=e.indexOf(r[0]);t.appendChild(document.createTextNode(e.slice(0,l)));let a=document.createElement("button");a.type="button",a.className="loc",a.textContent=r[0],a.addEventListener("click",()=>ee(r[1],+r[2])),t.appendChild(a),t.appendChild(document.createTextNode(e.slice(l+r[0].length)))}else t.textContent=e;/slack \(VIOLATED\)/.test(e)?t.classList.add("viol"):/slack \(MET\)/.test(e)?t.classList.add("met"):/^(Error|ERROR)|\bError:|Internal error/.test(e)?t.classList.add("err"):/^Warning/.test(e)?t.classList.add("warn"):/^(Startpoint|Endpoint):/.test(e)?t.classList.add("head"):/^###/.test(e)&&t.classList.add("sec"),_.appendChild(t),_.childElementCount>2e4&&_.firstChild.remove()}function O(e){let s=o("#summary");if(!e){s.innerHTML="",s.hidden=!0;return}let t=[],r=x=>{let b=x.exec(e);return b?parseFloat(b[1]):null},l=r(/^wns(?: max)? (-?[\d.eE+-]+)/m)??r(/^worst slack max (-?[\d.eE+-]+)/m),a=r(/^tns(?: max)? (-?[\d.eE+-]+)/m),p=(e.match(/slack \(VIOLATED\)/g)||[]).length,z=(e.match(/slack \(MET\)/g)||[]).length;l!==null&&t.push(["WNS",l.toFixed(3),l<0?"bad":"good"]),a!==null&&t.push(["TNS",a.toFixed(3),a<0?"bad":"good"]),p+z&&t.push(["Paths reported",`${z} met \xB7 ${p} violated`,p?"bad":"good"]);let N=/^Total\s+\S+\s+\S+\s+\S+\s+(\S+)/m.exec(e);N&&t.push(["Total power",le(parseFloat(N[1])),""]),s.innerHTML="";for(let[x,b,Y]of t){let S=document.createElement("div");S.className="chip "+Y;let C=document.createElement("span");C.className="k",C.textContent=x;let T=document.createElement("span");T.className="v",T.textContent=b,S.append(C,T),s.appendChild(S)}s.hidden=t.length===0}function le(e){return isFinite(e)?e>=1?e.toFixed(3)+" W":e>=.001?(e*1e3).toFixed(3)+" mW":(e*1e6).toFixed(2)+" \xB5W":"\u2013"}function m(e,s){let t=o("#status");t.textContent=e,t.dataset.kind=s}function $(){n.worker&&n.worker.terminate(),n.ready=!1;let e=new Worker(new URL("worker.js",location.href).href);e.onmessage=s=>ce(s.data),e.onerror=s=>{k("OpenSTA failed to start: "+(s.message||"worker error"),"err"),R(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),n.worker=e}var A=[],E=null;function F(){E=null;for(let[e,s]of A)k(e,s);A=[],_.scrollTop=_.scrollHeight}function ce(e){e.type==="ready"?(n.ready=!0,n.running||m("Ready","idle")):e.type==="stage"?m(e.stage+"\u2026","busy"):e.type==="line"?(A.push([e.line,e.stream==="err"?"stderr":""]),E||(E=requestAnimationFrame(F))):e.type==="done"&&(F(),e.ok?k(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):k(e.rc===-1?"\u2500\u2500 OpenSTA stopped with an internal error \u2500\u2500":`\u2500\u2500 OpenSTA exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),O(v.join(`
`)),R(e.ok))}function B(){if(!n.running){if(c?n.files[n.current]=c.getValue():n.files[n.current]=i.value,!n.files[d]){k(`Add a file called ${d}: it is the script OpenSTA runs.`,"err");return}n.worker||$(),D(),J(),O(null),n.running=!0,o("#run").disabled=!0,o("#stop").disabled=!1,m(n.ready?"Running OpenSTA\u2026":"Loading OpenSTA\u2026","busy"),n.worker.postMessage({type:"run",files:{...n.files},script:d,dataFiles:P,base:new URL(".",location.href).href}),clearTimeout(n.timer),n.timer=setTimeout(()=>X(`Stopped after ${I/1e3} s.`),I)}}function X(e){n.running&&(F(),k(e||"Stopped.","meta err"),R(!1,!0),$())}function R(e,s){clearTimeout(n.timer),n.running=!1,o("#run").disabled=!1,o("#stop").disabled=!0,m(s?"Stopped":e?"Done":"Errors",s||!e?"err":"ok")}function oe(){o("#run").addEventListener("click",B),o("#stop").addEventListener("click",()=>X()),o("#ex-select").addEventListener("change",s=>w(s.target.value)),o("#reset").addEventListener("click",()=>w(n.example||u[0].id)),o("#copy-file").addEventListener("click",s=>g(c?c.getValue():i.value,s.currentTarget)),o("#download-file").addEventListener("click",()=>re(n.current,c?c.getValue():i.value)),o("#copy-output").addEventListener("click",s=>g(v.join(`
`),s.currentTarget)),o("#share").addEventListener("click",async s=>{let t=s.currentTarget;c&&(n.files[n.current]=c.getValue());try{let r=await se();history.replaceState(null,"","#code="+r),g(location.href.split("#")[0]+"#code="+r,t)}catch{g(location.href,t)}}),document.addEventListener("keydown",s=>{(s.ctrlKey||s.metaKey)&&s.key==="Enter"&&(s.preventDefault(),B())});let e=o("#libs");e.innerHTML="";for(let[s,t]of q){let r=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="libname",l.textContent=s,l.title="Copy file name",l.addEventListener("click",()=>g(s,null));let a=document.createElement("span");a.textContent=t,r.append(l,a),e.appendChild(r)}}async function ae(){oe();let e=!1,s=new URLSearchParams(location.hash.slice(1)).get("code");if(s)try{let t=await ne(s);n.example=null,L(t.f,t.o,d),e=!0}catch{}if(!e){let t=te();t&&(n.example=t.example,L(t.files,t.order,t.current),e=!0)}G(),e||await w(u[0].id),m("Loading OpenSTA\u2026","busy"),$()}ae();})();
