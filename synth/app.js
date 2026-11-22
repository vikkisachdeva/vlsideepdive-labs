(()=>{var Be={"syn-mux":{problem:"You write behavioural RTL (if/else). Synthesis must turn it into real gates from a cell library. How does that happen, and what does the result look like?",tasks:["Run show_rtl.ys and read the RTL diagram.","Run show_cmos.ys to map the design to the cells in mycells.lib.","Open the gate-level netlist and compare it with the RTL."],learn:"The basic Yosys flow: read, elaborate, map to a library, write a netlist and report area."},"syn-adder":{problem:"An adder written as a + b must become gates. Which gates, and how many?",tasks:["Run show_rtl.ys, then show_cmos.ys.","Read the cell count and area.","Change the width and see how the gate count grows."],learn:"How arithmetic operators are synthesized, and how area scales with width."},"syn-alu":{problem:"An ALU has many operations behind one case statement. The RTL is short, the gate netlist is not.",tasks:["Run both scripts and compare the RTL operators with the gate count.","Find which operations cost the most area."],learn:"How case statements and many operators turn into muxes and logic, and what drives area."},"syn-counter":{problem:"Sequential logic adds flip-flops. Where do they come from in the netlist, and how are reset and enable built?",tasks:["Run both scripts and find the flip-flops in the netlist.","See how synchronous reset and enable are made from gates."],learn:"How always @(posedge clk) becomes flip-flops, and how flops are mapped to library cells."},"syn-shift_register":{problem:"A shift register is mostly flip-flops. How much of the area is sequential, and how much is the logic around it?",tasks:["Run both scripts and read the sequential area.","Compare the flop count with the logic cells."],learn:"Read sequential versus combinational area in a synthesis report."},"syn-det_1011":{problem:"A state machine compiles and simulates, but synthesis warns about it. Ignoring synthesis warnings is how latches and bugs reach silicon.",tasks:["Run show_rtl.ys and read the warnings first.","Fix the cause in det_1011.v.","Compare the cell count before and after the fix."],learn:"Spot an inferred latch from a missing default, and fix it."},"syn-ibex":{problem:"Real designs are thousands of cells. Can you synthesize a full RISC-V CPU core and make sense of the result?",tasks:["Run synthesis (30 to 90 seconds).","Read the statistics: cells, flip-flops, buffers and chip area.","Answer the quiz from the report."],learn:"Synthesize a real CPU to SkyWater 130 nm cells and read a production-size area report."}};var ct="http://www.w3.org/2000/svg",w=(e,t,n)=>{let s=document.createElementNS(ct,e);for(let[i,l]of Object.entries(t||{}))s.setAttribute(i,l);return n&&n.appendChild(s),s};function dt(e){let t=e.trim(),n="port",s="",i=/^([\s\S]*?)([!+])?$/.exec(t),l=u=>{let y=/^([\s\S]*?)([!+])$/.exec(u);return y?(s=s||y[2],y[1]):u};t=l(i[0]);let d=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[u,y,_]of d)if(t.startsWith(u)&&t.endsWith(y)){n=_,t=t.slice(1,-1);break}n==="port"&&t.startsWith("@")&&(n="clk",t=t.slice(1)),t=l(t);let b=null,g=t.lastIndexOf("|");g>0&&(b=t.slice(g+1).trim(),t=t.slice(0,g));let m=t.indexOf("#"),h=t.trim();m>=0&&(t=t.slice(0,m));let c=t.replace(/\\n/g,`
`).trim();return{id:n+":"+h,label:c,kind:n,dom:b,mark:s}}function ut(e){let t=new Map,n=[],s=i=>{if(!t.has(i.id))t.set(i.id,{...i,order:t.size});else{let l=t.get(i.id);l.dom=l.dom||i.dom,l.mark=l.mark||i.mark}return t.get(i.id)};for(let i of e.split(";").map(l=>l.trim()).filter(Boolean)){let l=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,d=0,b=null,g=null,m,h=[];for(;m=l.exec(i);)h.push([i.slice(d,m.index),m]),d=l.lastIndex;h.push([i.slice(d),null]);for(let[c,u]of h){let y=s(dt(c));if(b&&g&&n.push({a:b,b:y,...g}),b=y,u){let _=u[1]||"";g={label:(u[2]||"").trim(),kind:_==="~"?"bad":_==="+"?"good":_==="."?"dash":"plain"}}}}return{nodes:[...t.values()],edges:n}}function pt(e){let t=e.label.split(`
`),n=Math.max(...t.map(s=>s.length))*6.9;return e.kind==="port"||e.kind==="clk"?{w:Math.max(28,n+(e.kind==="clk"?26:12)),h:Math.max(24,t.length*15+6),lines:t}:e.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,t.length*15+22),lines:t}:{w:Math.max(54,n+24),h:Math.max(34,t.length*15+16),lines:t}}function Qe(e){let t=typeof e=="string"?ut(e):e,{nodes:n,edges:s}=t;if(!n.length)return null;let i=new Map(n.map(a=>[a,[]]));for(let a of s)a.a!==a.b&&i.get(a.a).push(a);let l=new Map,d=new Set,b=a=>{l.set(a,1);for(let r of i.get(a)){let p=l.get(r.b);p===1?d.add(r):p||b(r.b)}l.set(a,2)};for(let a of n)l.get(a)||b(a);let g=new Set(s.filter(a=>a.kind==="dash"&&s.some(r=>r.b===a.b&&r.kind!=="dash"))),m=new Map(n.map(a=>[a,0]));for(let a=0;a<n.length;a++){let r=!1;for(let p of s)p.a!==p.b&&!d.has(p)&&!g.has(p)&&m.get(p.b)<m.get(p.a)+1&&(m.set(p.b,m.get(p.a)+1),r=!0);if(!r)break}let h=Math.max(...m.values());for(let a of n)a.kind==="port"&&!i.get(a).length&&s.some(r=>r.b===a)&&m.get(a)<h&&m.set(a,h);let c=[];for(let a of n){let r=m.get(a);(c[r]=c[r]||[]).push(a)}let u=[...new Set(n.map(a=>a.dom).filter(Boolean))],y=a=>a.dom?u.indexOf(a.dom):-1;for(let a of c)a&&a.sort((r,p)=>y(r)-y(p)||r.order-p.order);for(let a of n)Object.assign(a,pt(a));let _=22,v=18,H=c.map((a,r)=>Math.max(46,...s.filter(p=>m.get(p.a)===r&&m.get(p.b)>r&&p.label).map(p=>p.label.length*6.2+30))),ie=new Map;for(let a of n){let r=a.dom;if(!r){let p=s.find(k=>k.a===a&&k.b.dom||k.b===a&&k.a.dom);r=p?p.a===a?p.b.dom:p.a.dom:null}ie.set(a,r||"")}let I=[...new Set(n.map(a=>ie.get(a)))];I.includes("")&&(I.splice(I.indexOf(""),1),I.unshift(""));let V=u.length>0,rt=V?34:0,me=I.map(a=>Math.max(0,...c.map(r=>{let p=(r||[]).filter(k=>ie.get(k)===a);return p.reduce((k,S)=>k+S.h,0)+Math.max(0,p.length-1)*_}))),se=[],ye=v+(V?22:14);I.forEach((a,r)=>{se[r]=ye,ye+=me[r]+(r<I.length-1?rt:0)});let ze=ye-v-(V?22:14),be=v,j=new Map,He=0;c.forEach((a,r)=>{if(!a)return;let p=Math.max(...a.map(k=>k.w));I.forEach((k,S)=>{let C=a.filter(E=>ie.get(E)===k),A=C.reduce((E,N)=>E+N.h,0)+Math.max(0,C.length-1)*_,L=se[S]+(me[S]-A)/2;for(let E of C)j.set(E,{x:be+(p-E.w)/2,y:L,w:E.w,h:E.h}),L+=E.h+_}),be+=p+H[r]});let at=d.size>0,oe=be-(H[c.length-1]||46)+v;He=v*2+(V?22:14)+ze+(at?26:0);let O=w("svg",{viewBox:`0 0 ${oe} ${He}`,class:"dg dg-block",role:"img"});O.style.maxWidth=oe+"px",O.style.minWidth=Math.round(Math.min(oe,Math.max(oe*.72,320)))+"px";let lt=w("defs",{},O);for(let a of["plain","bad","good","dash"]){let r=w("marker",{id:"dg-ar-"+a,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},lt);w("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+a},r)}u.forEach((a,r)=>{let p=n.filter(N=>N.dom===a).map(N=>j.get(N)),k=I.indexOf(a),S=Math.min(...p.map(N=>N.x))-10,C=se[k]-22,A=Math.max(...p.map(N=>N.x+N.w))+10,L=se[k]+me[k]+8;w("rect",{x:S,y:C,width:A-S,height:L-C,rx:10,class:`dg-dom dg-d${r%4}`},O);let E=w("text",{x:S+8,y:C+13,class:`dg-domlabel dg-d${r%4}`},O);E.textContent=a});let ge=v+(V?22:14)+ze+10,we=w("g",{},O);for(let a of s){let r=j.get(a.a),p=j.get(a.b),k,S,C;if(a.a===a.b)k=`M${r.x+r.w-10},${r.y} C${r.x+r.w+20},${r.y-26} ${r.x+10},${r.y-26} ${r.x+14},${r.y}`,S=r.x+r.w/2,C=r.y-22;else if(d.has(a)||m.get(a.b)<=m.get(a.a)){let A=r.x+r.w/2,L=p.x+p.w/2;k=`M${A},${r.y+r.h} C${A},${ge+14} ${L},${ge+14} ${L},${p.y+p.h}`,S=(A+L)/2,C=ge+8}else{let A=r.x+r.w,L=r.y+r.h/2,E=p.x,N=p.y+p.h/2,re=(A+E)/2;k=`M${A},${L} C${re},${L} ${re},${N} ${E},${N}`;let Oe=m.get(a.b)-m.get(a.a),T=Oe>1?.5/Oe:.5,R=1-T;S=R*R*R*A+3*R*R*T*re+3*R*T*T*re+T*T*T*E,C=R*R*R*L+3*R*R*T*L+3*R*T*T*N+T*T*T*N}if(w("path",{d:k,class:"dg-edge dg-"+a.kind,"marker-end":`url(#dg-ar-${a.kind})`},we),a.label){let A=a.label.length*6.2+8;w("rect",{x:S-A/2,y:C-9,width:A,height:14,rx:3,class:"dg-elbg"},we);let L=w("text",{x:S,y:C+2,class:"dg-elabel dg-"+a.kind,"text-anchor":"middle"},we);L.textContent=a.label}}for(let a of n){let r=j.get(a),p=w("g",{class:`dg-node dg-k-${a.kind}${a.mark==="!"?" dg-bad":a.mark==="+"?" dg-good":""}`},O);if(a.kind==="reg")w("rect",{x:r.x,y:r.y,width:r.w,height:r.h,rx:3,class:"dg-shape"},p),w("path",{d:`M${r.x},${r.y+r.h-12} L${r.x+7},${r.y+r.h-7} L${r.x},${r.y+r.h-2}`,class:"dg-tri"},p);else if(a.kind==="logic")w("rect",{x:r.x,y:r.y,width:r.w,height:r.h,rx:Math.min(16,r.h/2),class:"dg-shape"},p);else if(a.kind==="block")w("rect",{x:r.x,y:r.y,width:r.w,height:r.h,rx:6,class:"dg-shape"},p);else if(a.kind==="mux")w("path",{d:`M${r.x},${r.y} L${r.x+r.w},${r.y+10} L${r.x+r.w},${r.y+r.h-10} L${r.x},${r.y+r.h} z`,class:"dg-shape"},p);else if(a.kind==="clk"){let C=r.y+r.h/2;w("path",{d:`M${r.x+2},${C+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},p)}let k=a.lines,S=a.kind==="clk"?r.x+24:r.x+r.w/2;k.forEach((C,A)=>{let L=w("text",{x:S,y:r.y+r.h/2+(A-(k.length-1)/2)*15+4,"text-anchor":a.kind==="clk"?"start":"middle",class:"dg-label"},p);L.textContent=C})}return O}function ht(e,t){let n=e.split(/\s+/),s=[],i="";for(let l of n)i&&(i+" "+l).length>t?(s.push(i),i=l):i=i?i+" "+l:l;return i&&s.push(i),s}var ft={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function We(e){if(!e||!e.length)return null;let t=300,n=12,s=42,i=18,l=e.map(c=>{let u=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(c)||[null,"S",c],y=ht(u[2],s),_=ft[u[1]];return{k:u[1],lines:y,tag:_,h:y.length*15+(_?30:16)}}),d=l.reduce((c,u)=>c+u.h,0)+i*(l.length-1)+16,b=w("svg",{viewBox:`0 0 ${t+16} ${d}`,class:"dg dg-flow",role:"img"});b.style.maxWidth=t+16+"px";let g=w("defs",{},b),m=w("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},g);w("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},m);let h=8;return l.forEach((c,u)=>{let y=w("g",{class:"dg-fl dg-fl-"+c.k},b);c.k==="Q"?w("path",{d:`M22,${h} H${8+t-14} L${8+t},${h+c.h/2} L${8+t-14},${h+c.h} H22 L8,${h+c.h/2} z`,class:"dg-shape"},y):w("rect",{x:8,y:h,width:t,height:c.h,rx:c.k==="S"?6:10,class:"dg-shape"},y);let _=h+18;if(c.tag){let v=w("text",{x:8+n+(c.k==="Q"?10:0),y:_,class:"dg-ftag"},y);v.textContent=c.tag.toUpperCase(),_+=16}for(let v of c.lines){let H=w("text",{x:8+n+(c.k==="Q"?10:0),y:_,class:"dg-ftext"},y);H.textContent=v,_+=15}h+=c.h,u<l.length-1&&(w("path",{d:`M${8+t/2},${h+1} V${h+i-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},b),h+=i)}),b}function Ye(e,t,n){let s=document.getElementById("lab-brief");if(!s)return;let i=e[t];if(!i){s.hidden=!0;return}s.querySelector(".brief-problem").textContent=i.problem;let l=s.querySelector(".brief-tasks");l.innerHTML="";for(let h of i.tasks){let c=document.createElement("li");c.textContent=h,l.appendChild(c)}s.querySelector(".brief-learn").textContent=i.learn;let d=s.querySelector(".brief-fig"),b=i.images||(i.image?[{src:i.image,alt:i.imageAlt||""}]:[]);if(b.length||i.html){if(d||(d=document.createElement("figure"),d.className="brief-fig",s.appendChild(d)),d.innerHTML="",b.length){let h=document.createElement("div");h.className="brief-imgs";for(let c of b){let u=document.createElement("a");u.href=c.src,u.target="_blank",u.rel="noopener";let y=document.createElement("img");y.src=c.src,y.alt=c.alt||"",y.loading="lazy",u.appendChild(y),h.appendChild(u)}d.appendChild(h)}if(i.html){let h=document.createElement("div");h.className="brief-html",h.innerHTML=i.html,d.appendChild(h)}if(i.caption){let h=document.createElement("figcaption");h.textContent=i.caption,d.appendChild(h)}}else d&&d.remove();let g=s.querySelector(".brief-dg"),m=n&&n[t];if(m&&(m.b||m.f)){g||(g=document.createElement("div"),g.className="brief-dg",s.querySelector(".brief-body").after(g)),g.innerHTML="";let h=(c,u)=>{if(!u)return;let y=document.createElement("div");y.className="brief-dgp";let _=document.createElement("h3");_.textContent=c,y.appendChild(_);let v=document.createElement("div");v.className="brief-dgs",v.appendChild(u),y.appendChild(v),g.appendChild(y)};try{h(m.bt||"Design",m.b?Qe(m.b):null)}catch(c){console.warn("diagram",t,c)}try{h(m.ft||"Problem \u2192 solution",m.f?We(m.f):null)}catch(c){console.warn("flow",t,c)}g.classList.toggle("one",g.children.length===1)}else g&&g.remove();s.hidden=!1}var K=(e,t,n)=>["P: "+e,"S: read_verilog \u2192 proc \u2192 opt: the RTL becomes generic cells (show_rtl.ys).","S: techmap \u2192 dfflibmap \u2192 abc: map to the cells in the .lib (show_cmos.ys).",...t?["Q: "+t]:[],"OK: "+n],Ue={"syn-mux":{b:"mux2to1.v > {Yosys\\nproc, opt} > (RTL: $mux) > {map to\\nmycells.lib} > mux2to1_synth.v",f:K("An if/else in RTL must become real gates from a cell library.","Remove the else branch: what does synthesis infer? (a latch)","The mux becomes NAND/NOR/NOT cells you can count in the netlist.")},"syn-adder":{b:"a[7:0] > (a + b + cin) > {sum, cout}; b[7:0] > (a + b + cin); cin > (a + b + cin)",f:K("a + b must become gates. Which ones, and how many?","Compare 2 operators in RTL with the gate count.","One + becomes a chain of full-adder logic: the cell count shows the cost.")},"syn-alu":{b:"a > (arithmetic\\nunit) > <op mux> > y; b > (logic\\nunit) > <op mux>; op .select.> <op mux>",f:K("Sixteen operations behind one case statement: short RTL, big netlist.","Which operators cost the most cells?","Arithmetic, logic and the output mux each become gates; the statistics show where the area goes.")},"syn-counter":{b:"[count 3 bits] > (+1) > <en / rst mux> > [count 3 bits]; en .> <en / rst mux>; rst .sync.> <en / rst mux>",f:K("Where do flip-flops come from, and how are reset and enable built?","Find the DFF cells: how many, and what drives their D?","3 flops from the always @(posedge clk), with reset and enable as logic in front of D.")},"syn-shift_register":{b:"[shift reg 8 bits] > <up / down mux> > [shift reg 8 bits]; (feedback) > <up / down mux>; [shift reg 8 bits] > (feedback)",f:K("A shift register is mostly flip-flops. How much area is logic?","Compare flop area with the area of the mux and feedback logic.","8 flops plus a mux per bit: sequential area dominates.")},"syn-det_1011":{b:"din > (next-state logic)! > [state] > (output logic) > found; [state] > (next-state logic)!",f:["P: The FSM simulates, but synthesis warns about it.","S: Read the log: an incomplete case or a missing default.","X: Ignored warnings put latches or extra logic into silicon.","F: Fix the RTL (default assignments, full case).","OK: The warning is gone and the cell count drops."]},"syn-ibex":{b:"ibex_rtl.v > {synth -top ibex_top} > {dfflibmap\\nsky130 .lib} > {abc\\nsky130 .lib} > ibex_top_synth.v; {sky130 HD .lib} .> {abc\\nsky130 .lib}",f:["P: Synthesize a full 32-bit RISC-V core in the browser.","S: Elaborate, optimise and map to SkyWater 130 nm cells.","Q: Read the statistics: cells, flip-flops, buffers, area.","OK: About 14,000 cells: the netlist the STA labs time."]}};var z=[{id:"synth",group:"Synthesis workshop",title:"Synthesis workshop",note:"7 labs from a 2-to-1 mux to a RISC-V CPU core. Each lab has a quiz."}],$=[{id:"syn-mux",group:"Synthesis workshop",tag:"Lab 1",title:"Synthesis of a mux",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 1: a 2-to-1 multiplexer.
# Run show_rtl.ys and look at the RTL diagram, then pick show_cmos.ys next to Run and run again
# to map the design to the gates in mycells.lib. Open mux2to1_synth.v: what differs from the RTL?
# Exercise: comment out the else branch in mux2to1.v and run both scripts again.

# read design
read_verilog mux2to1.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./mux2to1_rtl
`,"show_cmos.ys":`# read design
read_verilog mux2to1.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib mycells.lib
dfflibmap -liberty mycells.lib
abc -liberty mycells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog mux2to1_synth.v

# write the internal representation (RTLIL)
write_rtlil mux2to1.rtlil

# report the cells and area
stat -liberty mycells.lib

# show
show -format dot  -prefix ./mux2to1_cmos
`,"mux2to1.v":`module mux2to1(f, a, b, sel);
  output f;
  input a, b, sel;
// Needed when assigned in a sequential logic block (like always)
// A reg behaves like memory: holds its value until
// imperatively assigned otherwise
  reg f;
  
// Modules may contain one or more always blocks
// Sensitivity list contains signals whose change makes the block execute
  always @(a or b or sel)
// Body of an always block contains traditional imperative code
  begin
    if (sel)
      f = b;
    else
      f = a;
  end
  
endmodule
`,"mycells.lib":`library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
}
`},quiz:[{type:"choice",q:"In the RTL diagram (show_rtl.ys), which cell implements the if/else?",options:["$and","$mux","$dff","$pmux"],answer:1,explain:"proc turns the if/else in the always block into a $mux cell with select input sel.",try:!1},{type:"number",q:"Run show_cmos.ys. How many cells does the gate-level design have?",answer:4,tol:0,unit:"",explain:"From stat: 3 NAND and 1 NOT.",try:!1},{type:"number",q:"What is the chip area reported by stat?",answer:15,tol:.001,unit:"",explain:"3 NAND \xD7 4 + 1 NOT \xD7 3 = 15 (area units from mycells.lib).",try:!1},{type:"choice",q:"In mux2to1_synth.v, what is _6_?",options:["A wire","The NAND gate instance that drives output f","An input port","The NOT gate on sel"],answer:1,explain:"Yosys names the cells it creates _N_. _6_ is a NAND instance whose output Y is connected to f.",try:!1},{type:"choice",q:"Try it: comment out the else branch (//else and // f = a;) and run show_rtl.ys. Which new cell appears?",options:["$dff","$dlatch","$adff","No change"],answer:1,explain:"Without an else, f must keep its value when sel is 0, so Yosys infers a latch and warns: Latch inferred for signal f.",try:!0},{type:"choice",q:"Now run show_cmos.ys with the else still commented out. What happens?",options:["It maps the latch to a DFF","It fails: D latches are not supported, because mycells.lib has no latch cell","It removes the latch","It works the same as before"],answer:1,explain:"dfflibmap can only use sequential cells that exist in the library. Unintended latches are a classic RTL bug: always cover every branch.",try:!0}]},{id:"syn-adder",group:"Synthesis workshop",tag:"Lab 2",title:"Synthesis of an adder",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 2: an 8-bit adder with carry in and carry out.
# Run show_rtl.ys, then show_cmos.ys. Notice how the tool turns two + operators into gates for you.

# read design
read_verilog adder.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./adder_rtl
`,"show_cmos.ys":`# read design
read_verilog adder.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib mycells.lib
dfflibmap -liberty mycells.lib
abc -liberty mycells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog adder_synth.v

# write the internal representation (RTLIL)
write_rtlil adder.rtlil

# report the cells and area
stat -liberty mycells.lib

# show
show -format dot -lib adder_synth.v -prefix ./adder_cmos
`,"adder.v":`module adder(a, b, ci, sum, co);
  input        ci;
  input  [7:0] a;
  input  [7:0] b;
  output [7:0] sum;
  output       co;
  wire   [8:0] tmp;

  assign tmp = a + b + ci;
  assign sum = tmp [7:0];
  assign co  = tmp [8];
endmodule
`,"mycells.lib":`library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
}
`},quiz:[{type:"number",q:"How many $add cells are in the RTL diagram?",answer:2,tol:0,unit:"",explain:"a + b + ci is two additions.",try:!1},{type:"number",q:"After show_cmos.ys, how many cells are there?",answer:135,tol:0,unit:"",explain:"From stat.",try:!1},{type:"number",q:"How many NOR cells?",answer:70,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:506,tol:.001,unit:"",explain:"31 NAND \xD7 4 + 70 NOR \xD7 4 + 34 NOT \xD7 3.",try:!1},{type:"choice",q:"Why is there no adder cell in the netlist?",options:["Yosys failed to map it","mycells.lib has only BUF, NOT, NAND, NOR and DFF, so the adder is built from those gates","Adders are always removed","The adder was optimised away"],answer:1,explain:"techmap breaks the $add into simple logic, and abc maps that logic to the gates the library offers.",try:!1}]},{id:"syn-alu",group:"Synthesis workshop",tag:"Lab 3",title:"Synthesis of an ALU",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 3: an 8-bit ALU with eight arithmetic and eight logic operations.
# Run show_rtl.ys, then show_cmos.ys. Compare the RTL operators with the gate count.

# read design
read_verilog alu.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./alu_rtl
`,"show_cmos.ys":`# read design
read_verilog alu.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib mycells.lib
dfflibmap -liberty mycells.lib
abc -liberty mycells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog alu_synth.v

# write the internal representation (RTLIL)
write_rtlil alu.rtlil

# report the cells and area
stat -liberty mycells.lib

# show
show -format dot -lib alu_synth.v -prefix ./alu_cmos
`,"alu.v":`module alu(a, b, cin, sel, y);
  input [7:0] a, b;
  input cin;
  input [3:0] sel;
  output [7:0] y;
  reg [7:0] y;
  reg [7:0] arithval;
  reg [7:0] logicval;

  // Arithmetic unit
  always @(a or b or cin or sel) begin
    case (sel[2:0])
      3'b000  : arithval = a;
      3'b001  : arithval = a + 1;
      3'b010  : arithval = a - 1;
      3'b011  : arithval = b;
      3'b100  : arithval = b + 1;
      3'b101  : arithval = b - 1;
      3'b110  : arithval = a + b;
      default : arithval = a + b + cin;
    endcase
  end

  // Logic unit
  always @(a or b or sel) begin
    case (sel[2:0])
      3'b000  : logicval =  ~a;
      3'b001  : logicval =  ~b;
      3'b010  : logicval = a & b;
      3'b011  : logicval = a | b;
      3'b100  : logicval =  ~((a & b));
      3'b101  : logicval =  ~((a | b));
      3'b110  : logicval = a ^ b;
      default : logicval =  ~(a ^ b);
    endcase
  end

  // Multiplexer
  always @(arithval or logicval or sel) begin
    case (sel[3])
      1'b0    : y = arithval;
      default : y = logicval;
    endcase
  end

endmodule
`,"mycells.lib":`library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
}
`},quiz:[{type:"number",q:"How many $add cells are in the RTL diagram?",answer:4,tol:0,unit:"",explain:"a + 1, b + 1, a + b, and the + cin of a + b + cin.",try:!1},{type:"number",q:"How many $sub cells?",answer:2,tol:0,unit:"",explain:"a \u2212 1 and b \u2212 1.",try:!1},{type:"number",q:"After show_cmos.ys, how many cells are there?",answer:512,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:1998,tol:.001,unit:"",explain:"",try:!1},{type:"choice",q:"Which cell type does the ALU use most?",options:["NAND","NOR","NOT","BUF"],answer:1,explain:"236 NOR, 226 NAND, 50 NOT.",try:!1}]},{id:"syn-counter",group:"Synthesis workshop",tag:"Lab 4",title:"Synthesis of a counter",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 4: a 3-bit counter with synchronous reset and enable.
# Run show_rtl.ys, then show_cmos.ys. Find the flip-flops in the gate-level netlist.

# read design
read_verilog counter.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./counter_rtl
`,"show_cmos.ys":`# read design
read_verilog counter.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib cmos_cells.lib
dfflibmap -liberty cmos_cells.lib
abc -liberty cmos_cells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog counter_synth.v

# write the internal representation (RTLIL)
write_rtlil counter.rtlil

# report the cells and area
stat -liberty cmos_cells.lib

# show
show -format dot -lib counter_synth.v -prefix ./counter_cmos
`,"counter.v":`module counter (clk, rst, en, count);

   input clk, rst, en;
   output reg [2:0] count;

   always @(posedge clk)
      if (rst)
         count <= 3'd0;
      else if (en)
         count <= count + 3'd1;

endmodule
`,"cmos_cells.lib":`// test comment
/* test comment */
library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
  cell(DFFSR) {
    area: 18;
    ff("IQ", "IQN") { clocked_on: C;
                  next_state: D;
                      preset: S;
                       clear: R; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
    pin(S) { direction: input; }
    pin(R) { direction: input; }
    ; // empty statement
  }
}
`},quiz:[{type:"choice",q:"In the RTL diagram, which flip-flop type does Yosys infer for count?",options:["$dff (plain)","$adff (async reset)","$sdffe (sync reset + enable)","$dlatch"],answer:2,explain:"The reset is checked inside always @(posedge clk), so it is synchronous, and en gives the enable: $sdffe.",try:!1},{type:"number",q:"How many DFF cells are in the gate-level netlist?",answer:3,tol:0,unit:"",explain:"One per bit of the 3-bit counter.",try:!1},{type:"number",q:"How many cells in total?",answer:17,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:108,tol:.001,unit:"",explain:"",try:!1},{type:"number",q:"What percentage of the area is sequential (flip-flops)?",answer:50,tol:.01,unit:"%",explain:"54 of 108.",try:!1}]},{id:"syn-shift_register",group:"Synthesis workshop",tag:"Lab 5",title:"Synthesis of a shift register",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 5: an 8-bit LFSR-style shift register that shifts up or down.
# Run show_rtl.ys, then show_cmos.ys. How much of the area is flip-flops?

# read design
read_verilog shift_register.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./shift_register_rtl
`,"show_cmos.ys":`# read design
read_verilog shift_register.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib cmos_cells.lib
dfflibmap -liberty cmos_cells.lib
abc -liberty cmos_cells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog shift_register_synth.v

# write the internal representation (RTLIL)
write_rtlil shift_register.rtlil

# report the cells and area
stat -liberty cmos_cells.lib

# show
show -format dot -lib shift_register_synth.v -prefix ./shift_register_cmos
`,"shift_register.v":`\`default_nettype none
module shift_register (
clk       ,   // Clock input
reset     ,   // Reset input
enable    ,   // Enable input
up_down   ,   // Up Down input
count     ,   // Count output
overflow      // Overflow output
);

 input clk;
 input reset;
 input enable; 
 input up_down;

 output [7 : 0] count;
 output overflow;

 reg [7 : 0] count;

 assign overflow = (up_down) ? (count == {{7{1'b0}}, 1'b1}) : 
                               (count == {1'b1, {7{1'b0}}}) ;

 always @(posedge clk)
 if (reset) 
    count <= {7{1'b0}};
 else if (enable) begin
    if (up_down) begin
      count <= {~(^(count & 8'b01100011)),count[7:1]};
    end else begin
      count <= {count[5:0],~(^(count &  8'b10110001))};
    end
 end

endmodule
`,"cmos_cells.lib":`// test comment
/* test comment */
library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
  cell(DFFSR) {
    area: 18;
    ff("IQ", "IQN") { clocked_on: C;
                  next_state: D;
                      preset: S;
                       clear: R; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
    pin(S) { direction: input; }
    pin(R) { direction: input; }
    ; // empty statement
  }
}
`},quiz:[{type:"number",q:"How many DFF cells?",answer:8,tol:0,unit:"",explain:"One per bit of count.",try:!1},{type:"number",q:"How many cells in total?",answer:101,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:504,tol:.001,unit:"",explain:"",try:!1},{type:"number",q:"What percentage of the area is sequential?",answer:28.57,tol:.01,unit:"%",explain:"144 of 504.",try:!1},{type:"number",q:"How many $reduce_xor cells are in the RTL diagram?",answer:2,tol:0,unit:"",explain:"One for each direction: ^(count & mask).",try:!1}]},{id:"syn-det_1011",group:"Synthesis workshop",tag:"Lab 6",title:"Synthesis of a sequence detector",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 6: a finite state machine that detects the sequence 1011.
# Run show_rtl.ys and read the warnings in the log first. Then run show_cmos.ys.
# Exercise: fix the warning in det_1011.v and compare the cell count before and after.

# read design
read_verilog det_1011.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./det_1011_rtl
`,"show_cmos.ys":`# read design
read_verilog det_1011.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib cmos_cells.lib
dfflibmap -liberty cmos_cells.lib
abc -liberty cmos_cells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog det_1011_synth.v

# write the internal representation (RTLIL)
write_rtlil det_1011.rtlil

# report the cells and area
stat -liberty cmos_cells.lib

# show
show -format dot -lib det_1011_synth.v -prefix ./det_1011_cmos
`,"det_1011.v":`module det_1011 ( input clk,
                  input rstn,
                  input in,
                  output out );
  
  parameter IDLE 	= 0,
  			S1 		= 1,
  			S10 	= 2,
  			S101 	= 3,
  			S1011 	= 4;
  
  reg [2:0] cur_state, next_state;
  
  assign out = cur_state == S1011 ? 1 : 0;
  
  always @ (posedge clk) begin
    if (!rstn)
      	cur_state <= IDLE;
     else 
     	cur_state <= next_state;
  end
  
  always @ (cur_state or in) begin
    case (cur_state)
      IDLE : begin
        if (in) next_state = S1;
        else next_state = IDLE;
      end
      
      S1: begin
        if (in) next_state = IDLE;
        else 	next_state = S10;
      end
      
      S10 : begin
        if (in) next_state = S101;
        else 	next_state = IDLE;
      end
      
      S101 : begin
        if (in) next_state = S1011;
        else 	next_state = IDLE;
      end
      
      S1011: begin
        next_state = IDLE;
      end
    endcase
  end
endmodule
`,"cmos_cells.lib":`// test comment
/* test comment */
library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
  cell(DFFSR) {
    area: 18;
    ff("IQ", "IQN") { clocked_on: C;
                  next_state: D;
                      preset: S;
                       clear: R; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
    pin(S) { direction: input; }
    pin(R) { direction: input; }
    ; // empty statement
  }
}
`},quiz:[{type:"choice",q:"What warning does show_rtl.ys print?",options:["Multiple drivers on cur_state","Latch inferred for signal next_state","Combinational loop","No warnings"],answer:1,explain:"The case statement covers only 5 of the 8 values of the 3-bit cur_state and has no default, so next_state keeps its value for the other 3: a latch.",try:!1},{type:"number",q:"How many cells does the gate-level design have?",answer:34,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:213,tol:.001,unit:"",explain:"",try:!1},{type:"number",q:"Try it: add default: next_state = IDLE; before endcase and run show_cmos.ys. How many cells now?",answer:19,tol:0,unit:"",explain:"No latch: Yosys reports No latch inferred for signal next_state.",try:!0},{type:"number",q:"And the chip area?",answer:115,tol:.001,unit:"",explain:"Almost half the area: the unintended latch logic is gone.",try:!0}]},{id:"syn-ibex",group:"Synthesis workshop",tag:"Lab 7",title:"Synthesis of the ibex RISC-V core",script:"synth.ys",files:{"synth.ys":`# Lab 7: the lowRISC ibex 32-bit RISC-V core, synthesised to SkyWater 130 nm standard cells.
# Press Run: synthesis takes 30 to 90 seconds in the browser. Then read the statistics at the end of the log:
# number of wires, cells, buffers and flip-flops, and the chip area of ibex_top.
# The netlist ibex_top_synth.v (about 2.5 MB) can be downloaded below the log.

# Synthesis of the lowRISC ibex RISC-V core to the SkyWater 130 nm HD library
# ibex_rtl.v (about 450 kB of Verilog) and the library load from the server.

# read design (deferred so the parameters below take effect)
read_verilog -defer ibex_rtl.v
chparam -set RV32B 0 ibex_top
chparam -set RV32M 2 ibex_top
chparam -set RegFile 2 ibex_top

# generic synthesis: elaborate, optimise, map to internal gates
synth -flatten -top ibex_top

# map the register file latches and the flip-flops to Sky130 cells
techmap -map latch_map.v
dfflibmap -liberty sky130_fd_sc_hd__tt_025C_1v80_synth.lib
opt

# map the logic to Sky130 cells with ABC (target delay 8000 ps)
abc -liberty sky130_fd_sc_hd__tt_025C_1v80_synth.lib -D 8000
clean

# drive constant 0/1 nets from tie cells (one shared tie cell for each value)
hilomap -singleton -hicell sky130_fd_sc_hd__conb_1 HI -locell sky130_fd_sc_hd__conb_1 LO
clean

# remove debug-only scope markers left by -flatten, then report cells, wires and area
delete t:$scopeinfo
stat -liberty sky130_fd_sc_hd__tt_025C_1v80_synth.lib

# write the gate-level netlist
write_verilog -noattr ibex_top_synth.v
`,"latch_map.v":`module \\$_DLATCH_P_ (input E, input D, output Q);
  sky130_fd_sc_hd__dlxtp_1 _TECHMAP_REPLACE_ (.GATE(E), .D(D), .Q(Q));
endmodule
module \\$_DLATCH_N_ (input E, input D, output Q);
  sky130_fd_sc_hd__dlxtn_1 _TECHMAP_REPLACE_ (.GATE_N(E), .D(D), .Q(Q));
endmodule
`},quiz:[{type:"number",q:"How many wires does ibex_top have after synthesis?",answer:11257,tol:0,unit:"",explain:"The wires line of the final stat report.",try:!1},{type:"number",q:"How many cells?",answer:12255,tol:0,unit:"",explain:"The cells line of the final stat report.",try:!1},{type:"number",q:"How many flip-flops? (Add up the dfrtp, dfstp and dfxtp cells.)",answer:982,tol:0,unit:"",explain:"700 dfrtp_1 + 9 dfstp_1 + 273 dfxtp_1.",try:!1},{type:"number",q:"How many latches? (dlxtp and dlxtn: the register file is latch-based, RegFile = 2.)",answer:1025,tol:0,unit:"",explain:"992 dlxtp_1 + 33 dlxtn_1.",try:!1},{type:"number",q:"How many buffers?",answer:0,tol:0,unit:"",explain:"Synthesis does not add buffers here: buffering for fanout and wire load comes later, in placement and timing repair.",try:!1},{type:"number",q:"What is the chip area of ibex_top?",answer:102872.41,tol:1,unit:"\xB5m\xB2",explain:"In square micrometres, from the Sky130 cell areas.",try:!1}]}],Pe=["ibex_rtl.v","sky130_fd_sc_hd__tt_025C_1v80_synth.lib"],Ve=[["mycells.lib","Demo library: BUF, NOT, NAND, NOR, DFF (in the lab tabs)"],["cmos_cells.lib","Demo library with DFFSR (in the lab tabs)"],["sky130_fd_sc_hd__tt_025C_1v80_synth.lib","SkyWater 130 nm HD, typical; cells usable for synthesis"],["ibex_rtl.v","lowRISC ibex RTL, converted to Verilog-2005 with sv2v"]];var f=e=>document.querySelector(e),je=3e5,Ze="vdd-synth-lab-v1",F="show_rtl.ys",o={example:$[0].id,track:z[0].id,script:F,files:{},order:[],current:F,running:!1,ready:!1,worker:null,timer:null},et=()=>o.order.filter(e=>/\.ys$/i.test(e));function X(){return o.files[o.script]!==void 0?o.script:o.files[F]!==void 0?F:et()[0]||F}function mt(){let e=f("#script-wrap"),t=f("#script"),n=et(),s=X();e.hidden=!(n.length>1||n.length===1&&s!==F),t.innerHTML="";for(let i of n){let l=document.createElement("option");l.value=i,l.textContent=i,t.appendChild(l)}t.value=s}var q=new Map,x=null,D=f("#editor textarea");function Ae(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(x=window.CodeMirror.fromTextArea(D,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),x.on("change",()=>{o.files[o.current]=x.getValue(),ce()})):(D.classList.add("plain-editor"),D.addEventListener("input",()=>{o.files[o.current]=D.value,ce()}));function de(e){x?o.files[o.current]=x.getValue():o.files[o.current]=D.value,o.current=e,x?(q.has(e)||q.set(e,window.CodeMirror.Doc(o.files[e]??"",Ae(e))),x.swapDoc(q.get(e)),setTimeout(()=>x.refresh(),0)):D.value=o.files[e]??"",ue()}function yt(e,t){de(e),x&&(x.focus(),x.setCursor({line:t-1,ch:0}),x.addLineClass(t-1,"background","cm-errline"),setTimeout(()=>x.removeLineClass(t-1,"background","cm-errline"),2500),x.scrollIntoView({line:t-1,ch:0},80))}function xe(e,t,n){q.clear(),o.files={...e},o.order=t||Object.keys(e),o.current=n&&o.order.includes(n)?n:o.order.includes(X())?X():o.order[0],x?(q.set(o.current,window.CodeMirror.Doc(o.files[o.current]??"",Ae(o.current))),x.swapDoc(q.get(o.current))):D.value=o.files[o.current]??"",ue()}function ue(){let e=f("#tabs");e.innerHTML="";for(let t of o.order){let n=document.createElement("button");if(n.type="button",n.className="tab"+(t===o.current?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t===o.current?"true":"false"),n.textContent=t,n.addEventListener("click",()=>de(t)),e.appendChild(n),t===o.current&&o.order.length>1){let s=document.createElement("button");s.type="button",s.className="tab-x",s.textContent="\xD7",s.title="Remove "+t,s.setAttribute("aria-label","Remove file "+t),s.addEventListener("click",()=>bt(t)),e.appendChild(s)}}mt()}function tt(e,t,n){o.files[e]===void 0&&o.order.push(e),o.files[e]=t,q.delete(e),n?ue():de(e),ce()}function bt(e){x&&(o.files[o.current]=x.getValue()),delete o.files[e],q.delete(e),o.order=o.order.filter(t=>t!==e),o.current=o.order[0],x?(q.has(o.current)||q.set(o.current,window.CodeMirror.Doc(o.files[o.current]??"",Ae(o.current))),x.swapDoc(q.get(o.current))):D.value=o.files[o.current]??"",ue(),ce()}function gt(){let e=(window.prompt("New file name (for example top.v, my_flow.ys):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){M("File names can use letters, digits, dot, dash and underscore only.","err");return}if(o.files[e]!==void 0){de(e);return}tt(e,"")}}var J=e=>{let t=$.find(n=>n.id===e);return t?(z.find(n=>n.group===t.group)||z[0]).id:null},B=()=>z.find(e=>e.id===o.track)||z[0];function Ee(){let e=f("#tracks");e.innerHTML="",e.hidden=z.length<2;for(let n of z){let s=document.createElement("button");s.type="button",s.className="track"+(n.id===B().id?" active":""),s.setAttribute("role","tab"),s.setAttribute("aria-selected",n.id===B().id?"true":"false");let i=$.filter(l=>l.group===n.group).length;s.innerHTML='<span class="track-t"></span><span class="track-n"></span>',s.querySelector(".track-t").textContent=n.title,s.querySelector(".track-n").textContent=i+" labs",s.addEventListener("click",()=>wt(n.id)),e.appendChild(s)}let t=f("#track-note");if(t.textContent=B().note+" ",B().id==="workshop"){let n=document.createElement("a");n.href="STA_Workshop_Labs.pdf",n.target="_blank",n.rel="noopener",n.className="btn small",n.textContent="Workshop slides (PDF)",t.appendChild(n)}}async function wt(e,t){o.track=e;try{let n=new URL(location.href);n.searchParams.set("track",e),history.replaceState(null,"",n.pathname+n.search+location.hash)}catch{}Ee(),!t&&J(o.example)!==e?await Z($.find(n=>n.group===B().group).id):te()}function te(){let e=f("#examples");e.innerHTML="";for(let n of $.filter(s=>s.group===B().group)){let s=document.createElement("button");s.type="button",s.className="ex"+(n.id===o.example?" active":""),s.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',s.querySelector(".ex-tag").textContent=n.tag;let i=n.quiz&&n.quiz.length?ne()[n.id]:null;if(i&&i.checked){let l=document.createElement("span");l.className="ex-done",l.textContent=(i.score===i.total?"\u2713 ":"")+`quiz ${i.score}/${i.total}`,s.querySelector(".ex-tag").appendChild(l)}s.querySelector(".ex-title").textContent=n.title,s.addEventListener("click",()=>Z(n.id)),e.appendChild(s)}let t=f("#ex-select");t.innerHTML=$.filter(n=>n.group===B().group).map(n=>`<option value="${n.id}">${n.group!=="Basic labs"?n.tag+" \xB7 ":""}${n.title}</option>`).join(""),o.example&&(t.value=o.example)}async function Z(e){let t=$.find(i=>i.id===e)||$[0];o.example=t.id,J(t.id)!==o.track&&(o.track=J(t.id),Ee()),o.script=t.script||F;let n={};for(let[i,l]of Object.entries(t.files))if(l!==null)n[i]=l;else try{let d=await fetch(new URL("data/"+(t.load||{})[i],location.href));n[i]=d.ok?await d.text():`// Could not load ${t.load[i]}`}catch{n[i]=`// Could not load ${t.load[i]}`}let s=Object.keys(t.files).sort((i,l)=>Ge(i)-Ge(l));xe(n,s,o.script),Y.clear(),ee.clear(),qe(),Me(),te(),Re(),he(),it(),$e(null),P(o.ready?"Ready":"Loading Yosys\u2026",o.ready?"idle":"busy")}var Ne="vdd-synth-quiz-v1";function ne(){try{return JSON.parse(localStorage.getItem(Ne)||"{}")||{}}catch{return{}}}function Te(e){try{localStorage.setItem(Ne,JSON.stringify(e))}catch{}}var pe=()=>$.find(e=>e.id===o.example&&e.quiz&&e.quiz.length);function xt(e){let t=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return t?parseFloat(t[0]):NaN}function _t(e,t){if(e.type==="choice")return t!=null&&+t===e.answer;let n=xt(t);return isFinite(n)&&Math.abs(n-e.answer)<=(e.tol??.01)+1e-9}var vt=e=>e.type==="choice"?e.options[e.answer]:`${Number.isInteger(e.answer)?e.answer:e.answer.toFixed(2)}${e.unit?" "+e.unit:""}`;function Re(){Ye(Be,o.example,Ue);let e=f("#quiz"),t=f("#quiz-list"),n=pe();if(!n){e.hidden=!0;return}e.hidden=!1;let s=ne()[n.id]||{},i=s.a||[];t.innerHTML="",n.quiz.forEach((l,d)=>{let b=document.createElement("li"),g=document.createElement("div");if(g.className="quiz-q",l.try){let c=document.createElement("span");c.className="quiz-try",c.textContent="Try it",g.appendChild(c)}let m=l.q.replace(/^Try it: /,"");if(g.appendChild(document.createTextNode(m.charAt(0).toUpperCase()+m.slice(1))),b.appendChild(g),l.type==="choice"){let c=document.createElement("div");c.className="quiz-opts",c.setAttribute("role","radiogroup"),l.options.forEach((u,y)=>{let _=document.createElement("label"),v=document.createElement("input");v.type="radio",v.name=`q${d}`,v.value=y,i[d]!==void 0&&+i[d]===y&&(v.checked=!0),v.addEventListener("change",()=>Ke(n,d,y));let H=document.createElement("span");H.textContent=u,_.append(v,H),c.appendChild(_)}),b.appendChild(c)}else{let c=document.createElement("div");c.className="quiz-num";let u=document.createElement("input");if(u.type="text",u.inputMode="decimal",u.autocomplete="off",u.setAttribute("aria-label","Answer to question "+(d+1)),u.placeholder="e.g. -1.23",i[d]!==void 0&&(u.value=i[d]),u.addEventListener("input",()=>Ke(n,d,u.value)),u.addEventListener("keydown",y=>{y.key==="Enter"&&_e()}),c.appendChild(u),l.unit){let y=document.createElement("span");y.className="unit",y.textContent=l.unit,c.appendChild(y)}b.appendChild(c)}let h=document.createElement("div");h.className="quiz-fb",h.hidden=!0,h.setAttribute("aria-live","polite"),b.appendChild(h),t.appendChild(b)}),s.checked?_e(!0):nt(null)}function Ke(e,t,n){let s=ne(),i=s[e.id]||{a:[]};i.a=i.a||[],i.a[t]=n,i.checked=!1,s[e.id]=i,Te(s);let l=f("#quiz-list").children[t]?.querySelector(".quiz-fb");l&&(l.hidden=!0)}function nt(e,t){let n=f("#quiz-score");if(e===null){n.textContent="",n.classList.remove("done");return}n.textContent=`${e} / ${t} correct`,n.classList.toggle("done",e===t)}function _e(e){let t=pe();if(!t)return;let n=ne(),s=n[t.id]||{a:[]},i=0;t.quiz.forEach((l,d)=>{let b=f("#quiz-list").children[d],g=l.type==="choice"?(b.querySelector("input:checked")||{}).value:b.querySelector("input").value;s.a[d]=g;let m=b.querySelector(".quiz-fb"),h=g===void 0||g==="",c=!h&&_t(l,g);c&&i++,m.hidden=!1,m.className="quiz-fb "+(c?"ok":"bad"),m.innerHTML="";let u=document.createElement("b");u.textContent=c?"Correct.":h?"Not answered yet.":"Not quite.",m.appendChild(u),c&&l.explain?m.appendChild(document.createTextNode(l.explain)):!c&&!h&&m.appendChild(document.createTextNode(l.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),s.checked=!0,s.score=i,s.total=t.quiz.length,n[t.id]=s,Te(n),nt(i,t.quiz.length),e||te()}function kt(){let e=pe();if(e){try{let t=JSON.parse(localStorage.getItem("vdd-revealed-v1")||"{}");t[Ne+":"+e.id]=Date.now(),localStorage.setItem("vdd-revealed-v1",JSON.stringify(t))}catch{}e.quiz.forEach((t,n)=>{let s=f("#quiz-list").children[n].querySelector(".quiz-fb");s.hidden=!1,s.className="quiz-fb shown",s.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+vt(t)+".",s.appendChild(i),t.explain&&s.appendChild(document.createTextNode(t.explain))})}}function Ct(){let e=pe();if(!e)return;let t=ne();delete t[e.id],Te(t),Re(),te()}function Ge(e){return e===o.script?-1:/\.ys$/.test(e)?0:/\.s?v$/.test(e)?1:/\.lib$/.test(e)?3:2}var Xe=null;function ce(){clearTimeout(Xe),Xe=setTimeout(he,400)}function he(){try{localStorage.setItem(Ze,JSON.stringify({example:o.example,script:o.script,files:o.files,order:o.order,current:o.current}))}catch{}}function Lt(){try{let e=JSON.parse(localStorage.getItem(Ze)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function St(){let e=JSON.stringify({f:o.files,o:o.order,s:X()}),t=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(t).arrayBuffer()),s="";for(let i of n)s+=String.fromCharCode(i);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function At(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=new Blob([Uint8Array.from(t,s=>s.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function G(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{n=document.execCommand("copy")}catch{}i.remove()}if(t){let s=t.dataset.label||t.textContent;t.dataset.label=s,t.textContent=n?"Copied":"Press Ctrl+C",t.classList.toggle("ok",n),setTimeout(()=>{t.textContent=s,t.classList.remove("ok")},1600)}}function ve(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var U=f("#console"),fe=[];function it(){U.textContent="",fe=[]}function M(e,t){fe.push(e);let n=document.createElement("div");n.className="ln "+(t||"");let s=/\b([\w.-]+\.(?:v|sv|ys|lib)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|lib)),? line (\d+)\b/.exec(e);if(s&&o.files[s[1]]!==void 0){let i=e.indexOf(s[0]);n.appendChild(document.createTextNode(e.slice(0,i)));let l=document.createElement("button");l.type="button",l.className="loc",l.textContent=s[0],l.addEventListener("click",()=>yt(s[1],+s[2])),n.appendChild(l),n.appendChild(document.createTextNode(e.slice(i+s[0].length)))}else n.textContent=e;/^ERROR|\bError:|Internal error/.test(e)?n.classList.add("err"):/^Warning/.test(e)?n.classList.add("warn"):/^\d+\. [A-Z]/.test(e)?n.classList.add("sec"):/Chip area for module|^\s+\d+\s+(?:[\d.E+-]+\s+)?cells$/.test(e)&&n.classList.add("met"),U.appendChild(n),U.childElementCount>2e4&&U.firstChild.remove()}function $e(e){let t=f("#summary");if(!e){t.innerHTML="",t.hidden=!0;return}let n=[],s=h=>{let c,u=null,y=new RegExp(h.source,"gm");for(;c=y.exec(e);)u=c;return u},i=s(/^\s+(\d+)\s+(?:[\d.E+-]+\s+)?cells$/),l=s(/Chip area for module '[^']*': ([\d.]+)/),d=s(/of which used for sequential elements: ([\d.]+) \(([\d.]+)%\)/),b=s(/^\s+(\d+)\s+(?:-\s+)?wires$/),g=(e.match(/^Warning: Latch inferred/gm)||[]).length,m=(e.match(/^ERROR/gm)||[]).length;i&&n.push(["Cells",i[1],""]),l&&n.push(["Chip area",(+l[1]).toLocaleString("en-US",{maximumFractionDigits:2}),""]),d&&n.push(["Sequential area",d[2]+"%",""]),b&&n.push(["Wires",b[1],""]),g&&n.push(["Latches inferred",String(g),"bad"]),m&&n.push(["Errors",String(m),"bad"]),t.innerHTML="";for(let[h,c,u]of n){let y=document.createElement("div");y.className="chip "+u;let _=document.createElement("span");_.className="k",_.textContent=h;let v=document.createElement("span");v.className="v",v.textContent=c,y.append(_,v),t.appendChild(y)}t.hidden=n.length===0}function P(e,t){let n=f("#status");n.textContent=e,n.dataset.kind=t}var Y=new Map,ee=new Map,ke=!1,Q=null,W=1,ae=null;function Et(){return ae||(ae=new Promise((e,t)=>{let n=document.createElement("script");n.src="viz-global.js",n.onload=()=>window.Viz.instance().then(e,t),n.onerror=()=>t(new Error("Could not load Viz.js")),document.head.appendChild(n)}),ae)}function qe(){ke=!1;let e=f("#diagram"),t=f("#diagram-tabs"),n=f("#diagram-view");if(!Y.size){e.hidden=!0,t.innerHTML="",n.innerHTML="";return}e.hidden=!1;let s=[...Y.keys()].sort();Y.has(Q)||(Q=s[s.length-1]),t.innerHTML="";for(let l of s){let d=document.createElement("button");d.type="button",d.className="tab"+(l===Q?" active":""),d.textContent=l.replace(/\.dot$/,""),d.addEventListener("click",()=>{Q=l,qe()}),t.appendChild(d)}let i=Y.get(Q);if(i.length>6e5){n.textContent="This diagram is too large to draw in the browser. Download the .dot file instead.";return}n.textContent="Drawing\u2026",Et().then(l=>{let d=l.renderSVGElement(i),b=(d.getAttribute("viewBox")||"").split(/\s+/).map(Number);De=b.length===4&&b[2]>0?b[2]:800,d.removeAttribute("width"),d.removeAttribute("height"),n.innerHTML="",n.appendChild(d),st()}).catch(l=>{n.textContent="Could not draw the diagram: "+(l.message||l)})}var De=800;function Ce(){let e=f("#diagram-view svg");e&&(e.style.width=Math.round(De*W)+"px"),f("#zoom-level").textContent=Math.round(W*100)+"%"}function st(){let e=f("#diagram-view").clientWidth-24;W=Math.min(1,e>0?e/De:1),Ce()}function Me(){let e=f("#outputs");if(e.innerHTML="",!ee.size){e.hidden=!0;return}e.hidden=!1;let t=document.createElement("span");t.className="k",t.textContent="Files written:",e.appendChild(t);for(let[n,s]of ee){let i=document.createElement("button");i.type="button",i.className="btn small",i.textContent=`${n} (${s.length>1e6?(s.length/1e6).toFixed(1)+" MB":Math.max(1,Math.round(s.length/1e3))+" kB"})`,i.title="Download "+n,i.addEventListener("click",()=>ve(n,s)),e.appendChild(i)}}function Fe(){o.worker&&o.worker.terminate(),o.ready=!1;let e=new Worker(new URL("worker.js",location.href).href,{type:"module"});e.onmessage=t=>Nt(t.data),e.onerror=t=>{M("Yosys failed to start: "+(t.message||"worker error"),"err"),Ie(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),o.worker=e}var Le=[],Se=null;function le(){Se=null;for(let[e,t]of Le)M(e,t);Le=[],U.scrollTop=U.scrollHeight}function Nt(e){if(e.type==="ready")o.ready=!0,o.running||P("Ready","idle");else if(e.type==="stage")P(e.stage+"\u2026","busy");else if(e.type==="file")if(le(),ee.set(e.name,e.content),/\.dot$/i.test(e.name))Y.set(e.name,e.content),Q=e.name,ke=!0;else if(e.content.length<=1e6){let t=o.files[e.name]===void 0;tt(e.name,e.content,!0),M(`\u2500\u2500 Yosys ${t?"wrote":"updated"} ${e.name}: open its tab to read it \u2500\u2500`,"meta")}else M(`\u2500\u2500 Yosys wrote ${e.name} (${(e.content.length/1e6).toFixed(1)} MB): too big for the editor, download it below the report \u2500\u2500`,"meta");else e.type==="line"?(Le.push([e.line,e.stream==="err"?"stderr":""]),Se||(Se=requestAnimationFrame(le))):e.type==="done"&&(le(),e.ok?M(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):M(e.rc===-1?"\u2500\u2500 Yosys stopped with an internal error \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),$e(fe.join(`
`)),Me(),ke&&qe(),Ie(e.ok))}function Je(){if(o.running)return;window.vddSubscribe&&window.vddSubscribe(),x?o.files[o.current]=x.getValue():o.files[o.current]=D.value;let e=X();if(o.files[e]===void 0){M(`Add a Yosys script (for example ${F}): it is what Yosys runs.`,"err");return}o.worker||Fe(),he(),it(),$e(null),ee.clear(),Me(),o.running=!0,f("#run").disabled=!0,f("#stop").disabled=!1,P(o.ready?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),M(`$ yosys -s ${e}`,"meta"),o.worker.postMessage({type:"run",files:{...o.files},script:e,dataFiles:Pe,base:new URL(".",location.href).href}),clearTimeout(o.timer),o.timer=setTimeout(()=>ot(`Stopped after ${je/1e3} s.`),je)}function ot(e){o.running&&(le(),M(e||"Stopped.","meta err"),Ie(!1,!0),Fe())}function Ie(e,t){clearTimeout(o.timer),o.running=!1,f("#run").disabled=!1,f("#stop").disabled=!0,P(t?"Stopped":e?"Done":"Errors",t||!e?"err":"ok")}function Tt(){f("#run").addEventListener("click",Je),f("#stop").addEventListener("click",()=>ot()),f("#script").addEventListener("change",t=>{o.script=t.target.value,he()}),f("#new-file").addEventListener("click",gt),f("#zoom-in").addEventListener("click",()=>{W=Math.min(W*1.25,8),Ce()}),f("#zoom-out").addEventListener("click",()=>{W=Math.max(W/1.25,.25),Ce()}),f("#zoom-fit").addEventListener("click",st),f("#diagram-svg").addEventListener("click",()=>{let t=f("#diagram-view svg");t&&ve((Q||"diagram.dot").replace(/\.dot$/,".svg"),new XMLSerializer().serializeToString(t))}),f("#quiz-check").addEventListener("click",()=>_e()),f("#quiz-reveal").addEventListener("click",kt),f("#quiz-reset").addEventListener("click",Ct),f("#ex-select").addEventListener("change",t=>Z(t.target.value)),f("#reset").addEventListener("click",()=>Z(o.example||$[0].id)),f("#copy-file").addEventListener("click",t=>G(x?x.getValue():D.value,t.currentTarget)),f("#download-file").addEventListener("click",()=>ve(o.current,x?x.getValue():D.value)),f("#copy-output").addEventListener("click",t=>G(fe.join(`
`),t.currentTarget)),f("#share").addEventListener("click",async t=>{let n=t.currentTarget;x&&(o.files[o.current]=x.getValue());try{let s=await St();history.replaceState(null,"","#code="+s),G(location.href.split("#")[0]+"#code="+s,n)}catch{G(location.href,n)}}),document.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&(t.preventDefault(),Je())});let e=f("#libs");e.innerHTML="";for(let[t,n]of Ve){let s=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="libname",i.textContent=t,i.title="Copy file name",i.addEventListener("click",()=>G(t,null));let l=document.createElement("span");l.textContent=n,s.append(i,l),e.appendChild(s)}}async function Rt(){Tt();let e=!1,t=new URLSearchParams(location.hash.slice(1)).get("code");if(t)try{let i=await At(t);o.example=null,o.script=i.s||F,o.order=i.o,o.files=i.f,xe(i.f,i.o,o.script),e=!0}catch{}if(!e){let i=Lt();i&&(o.example=i.example,o.script=i.script||F,o.files=i.files,o.order=i.order,xe(i.files,i.order,i.current),e=!0)}let n=new URLSearchParams(location.search).get("track"),s=z.some(i=>i.id===n);o.track=s?n:J(o.example)||"basic",Ee(),!e||s&&J(o.example)!==n&&!t?await Z($.find(i=>i.group===B().group).id):(te(),Re()),P("Loading Yosys\u2026","busy"),Fe()}Rt();})();
