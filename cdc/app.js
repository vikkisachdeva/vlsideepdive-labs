(()=>{var st={"cdc-clocks":{problem:"A chip has many clocks. Before you can check any crossing you must know which clocks are related (same source) and which are asynchronous. A wrong guess hides real bugs or floods you with false ones.",tasks:["Run the CDC check and read the clock table.","Find out why clk_sys \u2192 clk_div2 is not a crossing.","Declare clk_ext asynchronous in clocks.sdc and run again."],learn:"Sort clocks into domains, read set_clock_groups, and tell a real crossing from a synchronous path."},"cdc-find":{problem:"A CPU-to-peripheral bridge passes a write strobe, a data bus, a busy flag and an interrupt between clocks. Some crossings are safe, some can go metastable. Your job is to review it like a design reviewer.",tasks:["Read soc_bridge.v and decide which of the four crossings are safe.","Run the CDC check and compare with your answer.","Work out the MTBF of a synchronizer in the quiz."],learn:"Spot unsynchronized crossings, and estimate how often a synchronizer fails (MTBF)."},"cdc-fix":{problem:"Three signals are synchronized, yet each one is built wrong: logic before the synchronizer, a first stage that fans out, and a single flop. They pass simulation and fail in silicon.",tasks:["Run the CDC check and read the three violations.","Fix status_sync.v one mistake at a time.","Run until the report is clean."],learn:"The rules every synchronizer must follow, and how to fix the three most common mistakes."},"cdc-pulse":{problem:"A one-cycle pulse from a fast clock can fall between two edges of a slow clock and be lost. Two flops alone do not fix this.",tasks:["Run the CDC check on the toggle synchronizer.","Simulate and watch tog, s1, s2 and pulse_out in the waveform.","Send pulses closer together (GAP = 1) and count how many are lost."],learn:"How a toggle (pulse) synchronizer works, and how fast the source may send pulses."},"cdc-bus":{problem:"An 8-bit bus cannot go through eight separate synchronizers: bits arrive in different cycles and the destination reads a value that was never sent.",tasks:["Run the CDC check: see how the bus is qualified by one synchronized signal.","Simulate and check that all words arrive.","Shorten the gap between words and find where it breaks."],learn:"Pass a multi-bit bus safely with a synchronized enable, and why the source must hold the data stable."},"cdc-reset":{problem:"Asynchronous reset may assert at any time, but if it releases asynchronously, flops leave reset in different cycles and the design starts in a broken state.",tasks:["Run the CDC check: one reset is synchronized, one is not, one borrows another clock's reset.","Simulate and read when each register leaves reset.","Decide how to fix rb_q and rx_q."],learn:"Build a reset synchronizer: assert asynchronously, release synchronously, one per clock domain."},"cdc-handshake":{problem:"You need to send data between two clocks whose ratio you do not know, or that may change. Open-loop schemes need you to know the clocks; a handshake does not.",tasks:["Run the CDC check: only req and ack are synchronized.","Simulate and follow one word through req, ack and dout.","Change the destination clock and see the handshake adapt."],learn:"The 4-phase req/ack handshake: safe for any clock ratio, and what it costs in throughput."},"cdc-fifo":{problem:"A handshake moves one word every few cycles. To stream one word per clock between two clocks you need an asynchronous FIFO, and its pointers must cross safely.",tasks:["Run the CDC check: find out why the pointer crossings are only cautions.","Simulate and watch the full and empty flags.","Make the reader faster and see the FIFO never fill."],learn:"How an async FIFO works: Gray-coded pointers, synchronized full and empty."},"cdc-assert":{problem:"A CDC check looks at structure. It cannot see a protocol bug: data that changes while it is being captured, or a request that is too short to cross. These bugs only show up in simulation, if you check for them.",tasks:["Simulate with BUG = 0: all three assertions pass.","Turn on BUG = 1, then BUG = 2, and see which assertion fires.","Read the waveform where each assertion fails."],learn:"Write CDC assertions: data stability, request/acknowledge order and pulse width."},"x-consolidate":{problem:"Two control signals that must act together are synchronized separately. Each crossing is clean, but they can arrive one cycle apart, and the destination sees a state the source never sent. Plain RTL simulation hides it.",tasks:["Run the CDC check: find the reconvergence caution.","Simulate with the metastability model and count b_partial cycles.","Turn the model off, then fix the design with CONSOLIDATE = 1."],learn:"Consolidate control signals before crossing, and use a simulation model that exposes synchronizer delays."},"x-mcp":{problem:"You need to pass a bus without synchronizing every bit, and the source must know when it may send the next word.",tasks:["Run the CDC check: the data is qualified by one toggle.","Simulate and measure the time for 12 words.","Remove the acknowledge and see what breaks."],learn:"Multi-cycle path (MCP) formulation with a 2-phase toggle and acknowledge feedback."},"x-gray":{problem:"A counter must be passed to another clock, for example a FIFO pointer. Binary counters change many bits at once, so the destination can read a value the counter never had.",tasks:["Run the CDC check: it cannot tell binary from Gray.","Simulate with GRAY = 0 and count the impossible values.","Switch to GRAY = 1 and simulate again."],learn:"Gray code counters: why one-bit-per-step changes make a multi-bit crossing safe."},"x-fifo":{problem:"A real 2-clock FIFO must be easy to synthesize and time: only a few clearly named signals may cross, and full and empty must never be wrong.",tasks:["Read how fifo2.sv is split into single-clock modules.","Run the CDC check and simulate.","Switch the pointers to binary and watch the impossible pointer values appear."],learn:"Partition a 2-clock FIFO, generate full and empty correctly, and name signals by clock domain."},"x-gls-sdf":{problem:"In gate-level simulation with SDF, the first flop of every synchronizer samples an asynchronous input, so its setup/hold check fails now and then. The notifier makes Q unknown and the X spreads through the design, although silicon would just settle to 0 or 1.",tasks:["Simulate and read the timing violations and the X on b_cnt.","Turn timing checks off on sync1_reg only, with `define IGNORE_SYNC_TCHECK.","Simulate again: no X, and every other flop is still checked."],learn:"Why synchronizer first stages need a timing-check exception in GLS, and why only those."},"x-recon":{problem:"Two separately synchronized controls meet in a state machine. The CDC check flagged the reconvergence and the designer waived it with a reason that turns out to be false. Zero-delay simulation passes; metastability injection makes the FSM take the wrong branch.",tasks:["Run the CDC check and read the WAIVED entry.","Simulate with the metastability model and count wrong branches.","Turn the model off, then read what A_WAIVER says."],learn:"How a wrong waiver hides a real CDC bug, and why every waiver needs an assertion."},"x-recon-fix":{problem:"The same command, designed so nothing can reconverge: one control signal crosses, and the mode is qualified data loaded when that control arrives.",tasks:["Run the CDC check: clean, no waiver.","Simulate with the same commands and seed as lab 6.","Read A_STABLE: the condition that keeps the qualified capture safe."],learn:"Fix reconvergence with one synchronized control and qualified data (or consolidation, or Gray coding)."}};var Lt="http://www.w3.org/2000/svg",L=(e,t,n)=>{let s=document.createElementNS(Lt,e);for(let[r,o]of Object.entries(t||{}))s.setAttribute(r,o);return n&&n.appendChild(s),s};function Rt(e){let t=e.trim(),n="port",s="",r=/^([\s\S]*?)([!+])?$/.exec(t),o=f=>{let k=/^([\s\S]*?)([!+])$/.exec(f);return k?(s=s||k[2],k[1]):f};t=o(r[0]);let c=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[f,k,q]of c)if(t.startsWith(f)&&t.endsWith(k)){n=q,t=t.slice(1,-1);break}n==="port"&&t.startsWith("@")&&(n="clk",t=t.slice(1)),t=o(t);let i=null,m=t.lastIndexOf("|");m>0&&(i=t.slice(m+1).trim(),t=t.slice(0,m));let y=t.indexOf("#"),u=t.trim();y>=0&&(t=t.slice(0,y));let l=t.replace(/\\n/g,`
`).trim();return{id:n+":"+u,label:l,kind:n,dom:i,mark:s}}function It(e){let t=new Map,n=[],s=r=>{if(!t.has(r.id))t.set(r.id,{...r,order:t.size});else{let o=t.get(r.id);o.dom=o.dom||r.dom,o.mark=o.mark||r.mark}return t.get(r.id)};for(let r of e.split(";").map(o=>o.trim()).filter(Boolean)){let o=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,c=0,i=null,m=null,y,u=[];for(;y=o.exec(r);)u.push([r.slice(c,y.index),y]),c=o.lastIndex;u.push([r.slice(c),null]);for(let[l,f]of u){let k=s(Rt(l));if(i&&m&&n.push({a:i,b:k,...m}),i=k,f){let q=f[1]||"";m={label:(f[2]||"").trim(),kind:q==="~"?"bad":q==="+"?"good":q==="."?"dash":"plain"}}}}return{nodes:[...t.values()],edges:n}}function Wt(e){let t=e.label.split(`
`),n=Math.max(...t.map(s=>s.length))*6.9;return e.kind==="port"||e.kind==="clk"?{w:Math.max(28,n+(e.kind==="clk"?26:12)),h:Math.max(24,t.length*15+6),lines:t}:e.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,t.length*15+22),lines:t}:{w:Math.max(54,n+24),h:Math.max(34,t.length*15+16),lines:t}}function at(e){let t=typeof e=="string"?It(e):e,{nodes:n,edges:s}=t;if(!n.length)return null;let r=new Map(n.map(g=>[g,[]]));for(let g of s)g.a!==g.b&&r.get(g.a).push(g);let o=new Map,c=new Set,i=g=>{o.set(g,1);for(let h of r.get(g)){let x=o.get(h.b);x===1?c.add(h):x||i(h.b)}o.set(g,2)};for(let g of n)o.get(g)||i(g);let m=new Set(s.filter(g=>g.kind==="dash"&&s.some(h=>h.b===g.b&&h.kind!=="dash"))),y=new Map(n.map(g=>[g,0]));for(let g=0;g<n.length;g++){let h=!1;for(let x of s)x.a!==x.b&&!c.has(x)&&!m.has(x)&&y.get(x.b)<y.get(x.a)+1&&(y.set(x.b,y.get(x.a)+1),h=!0);if(!h)break}let u=Math.max(...y.values());for(let g of n)g.kind==="port"&&!r.get(g).length&&s.some(h=>h.b===g)&&y.get(g)<u&&y.set(g,u);let l=[];for(let g of n){let h=y.get(g);(l[h]=l[h]||[]).push(g)}let f=[...new Set(n.map(g=>g.dom).filter(Boolean))],k=g=>g.dom?f.indexOf(g.dom):-1;for(let g of l)g&&g.sort((h,x)=>k(h)-k(x)||h.order-x.order);for(let g of n)Object.assign(g,Wt(g));let q=22,T=18,D=l.map((g,h)=>Math.max(46,...s.filter(x=>y.get(x.a)===h&&y.get(x.b)>h&&x.label).map(x=>x.label.length*6.2+30))),G=new Map;for(let g of n){let h=g.dom;if(!h){let x=s.find($=>$.a===g&&$.b.dom||$.b===g&&$.a.dom);h=x?x.a===g?x.b.dom:x.a.dom:null}G.set(g,h||"")}let I=[...new Set(n.map(g=>G.get(g)))];I.includes("")&&(I.splice(I.indexOf(""),1),I.unshift(""));let ee=f.length>0,te=ee?34:0,J=I.map(g=>Math.max(0,...l.map(h=>{let x=(h||[]).filter($=>G.get($)===g);return x.reduce(($,W)=>$+W.h,0)+Math.max(0,x.length-1)*q}))),ne=[],re=T+(ee?22:14);I.forEach((g,h)=>{ne[h]=re,re+=J[h]+(h<I.length-1?te:0)});let R=re-T-(ee?22:14),K=T,V=new Map,se=0;l.forEach((g,h)=>{if(!g)return;let x=Math.max(...g.map($=>$.w));I.forEach(($,W)=>{let O=g.filter(F=>G.get(F)===$),M=O.reduce((F,U)=>F+U.h,0)+Math.max(0,O.length-1)*q,H=ne[W]+(J[W]-M)/2;for(let F of O)V.set(F,{x:K+(x-F.w)/2,y:H,w:F.w,h:F.h}),H+=F.h+q}),K+=x+D[h]});let ie=c.size>0,B=K-(D[l.length-1]||46)+T;se=T*2+(ee?22:14)+R+(ie?26:0);let ae=L("svg",{viewBox:`0 0 ${B} ${se}`,class:"dg dg-block",role:"img"});ae.style.maxWidth=B+"px",ae.style.minWidth=Math.round(Math.min(B,Math.max(B*.72,320)))+"px";let ce=L("defs",{},ae);for(let g of["plain","bad","good","dash"]){let h=L("marker",{id:"dg-ar-"+g,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},ce);L("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+g},h)}f.forEach((g,h)=>{let x=n.filter(U=>U.dom===g).map(U=>V.get(U)),$=I.indexOf(g),W=Math.min(...x.map(U=>U.x))-10,O=ne[$]-22,M=Math.max(...x.map(U=>U.x+U.w))+10,H=ne[$]+J[$]+8;L("rect",{x:W,y:O,width:M-W,height:H-O,rx:10,class:`dg-dom dg-d${h%4}`},ae);let F=L("text",{x:W+8,y:O+13,class:`dg-domlabel dg-d${h%4}`},ae);F.textContent=g});let we=T+(ee?22:14)+R+10,_e=L("g",{},ae);for(let g of s){let h=V.get(g.a),x=V.get(g.b),$,W,O;if(g.a===g.b)$=`M${h.x+h.w-10},${h.y} C${h.x+h.w+20},${h.y-26} ${h.x+10},${h.y-26} ${h.x+14},${h.y}`,W=h.x+h.w/2,O=h.y-22;else if(c.has(g)||y.get(g.b)<=y.get(g.a)){let M=h.x+h.w/2,H=x.x+x.w/2;$=`M${M},${h.y+h.h} C${M},${we+14} ${H},${we+14} ${H},${x.y+x.h}`,W=(M+H)/2,O=we+8}else{let M=h.x+h.w,H=h.y+h.h/2,F=x.x,U=x.y+x.h/2,me=(M+F)/2;$=`M${M},${H} C${me},${H} ${me},${U} ${F},${U}`;let ve=y.get(g.b)-y.get(g.a),Z=ve>1?.5/ve:.5,Q=1-Z;W=Q*Q*Q*M+3*Q*Q*Z*me+3*Q*Z*Z*me+Z*Z*Z*F,O=Q*Q*Q*H+3*Q*Q*Z*H+3*Q*Z*Z*U+Z*Z*Z*U}if(L("path",{d:$,class:"dg-edge dg-"+g.kind,"marker-end":`url(#dg-ar-${g.kind})`},_e),g.label){let M=g.label.length*6.2+8;L("rect",{x:W-M/2,y:O-9,width:M,height:14,rx:3,class:"dg-elbg"},_e);let H=L("text",{x:W,y:O+2,class:"dg-elabel dg-"+g.kind,"text-anchor":"middle"},_e);H.textContent=g.label}}for(let g of n){let h=V.get(g),x=L("g",{class:`dg-node dg-k-${g.kind}${g.mark==="!"?" dg-bad":g.mark==="+"?" dg-good":""}`},ae);if(g.kind==="reg")L("rect",{x:h.x,y:h.y,width:h.w,height:h.h,rx:3,class:"dg-shape"},x),L("path",{d:`M${h.x},${h.y+h.h-12} L${h.x+7},${h.y+h.h-7} L${h.x},${h.y+h.h-2}`,class:"dg-tri"},x);else if(g.kind==="logic")L("rect",{x:h.x,y:h.y,width:h.w,height:h.h,rx:Math.min(16,h.h/2),class:"dg-shape"},x);else if(g.kind==="block")L("rect",{x:h.x,y:h.y,width:h.w,height:h.h,rx:6,class:"dg-shape"},x);else if(g.kind==="mux")L("path",{d:`M${h.x},${h.y} L${h.x+h.w},${h.y+10} L${h.x+h.w},${h.y+h.h-10} L${h.x},${h.y+h.h} z`,class:"dg-shape"},x);else if(g.kind==="clk"){let O=h.y+h.h/2;L("path",{d:`M${h.x+2},${O+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},x)}let $=g.lines,W=g.kind==="clk"?h.x+24:h.x+h.w/2;$.forEach((O,M)=>{let H=L("text",{x:W,y:h.y+h.h/2+(M-($.length-1)/2)*15+4,"text-anchor":g.kind==="clk"?"start":"middle",class:"dg-label"},x);H.textContent=O})}return ae}function Ot(e,t){let n=e.split(/\s+/),s=[],r="";for(let o of n)r&&(r+" "+o).length>t?(s.push(r),r=o):r=r?r+" "+o:o;return r&&s.push(r),s}var Nt={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function ot(e){if(!e||!e.length)return null;let t=300,n=12,s=42,r=18,o=e.map(l=>{let f=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(l)||[null,"S",l],k=Ot(f[2],s),q=Nt[f[1]];return{k:f[1],lines:k,tag:q,h:k.length*15+(q?30:16)}}),c=o.reduce((l,f)=>l+f.h,0)+r*(o.length-1)+16,i=L("svg",{viewBox:`0 0 ${t+16} ${c}`,class:"dg dg-flow",role:"img"});i.style.maxWidth=t+16+"px";let m=L("defs",{},i),y=L("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},m);L("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},y);let u=8;return o.forEach((l,f)=>{let k=L("g",{class:"dg-fl dg-fl-"+l.k},i);l.k==="Q"?L("path",{d:`M22,${u} H${8+t-14} L${8+t},${u+l.h/2} L${8+t-14},${u+l.h} H22 L8,${u+l.h/2} z`,class:"dg-shape"},k):L("rect",{x:8,y:u,width:t,height:l.h,rx:l.k==="S"?6:10,class:"dg-shape"},k);let q=u+18;if(l.tag){let T=L("text",{x:8+n+(l.k==="Q"?10:0),y:q,class:"dg-ftag"},k);T.textContent=l.tag.toUpperCase(),q+=16}for(let T of l.lines){let D=L("text",{x:8+n+(l.k==="Q"?10:0),y:q,class:"dg-ftext"},k);D.textContent=T,q+=15}u+=l.h,f<o.length-1&&(L("path",{d:`M${8+t/2},${u+1} V${u+r-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},i),u+=r)}),i}var rt={adder:["i-46z3tTYGM",10200,10800],basic:["za2o93ldrVQ",3240,3840],"cdc-bus":["akitv2i4Nxw",3720,4320],"cdc-clocks":["akitv2i4Nxw",0,600],"cdc-fifo":["akitv2i4Nxw",5310,5910],"cdc-find":["akitv2i4Nxw",1200,1800],"cdc-fix":["akitv2i4Nxw",1110,1710],"cdc-handshake":["akitv2i4Nxw",2940,3540],"cdc-pulse":["akitv2i4Nxw",2370,2970],"cdc-reset":["akitv2i4Nxw",5535,6135],counter:["i-46z3tTYGM",20400,21e3],"cov-1":["9SxAZWWVeJc",11373,11973],"cov-2":["9SxAZWWVeJc",11373,11973],"cov-3":["9SxAZWWVeJc",11373,11973],"cov-4":["9SxAZWWVeJc",11373,11973],"cov-5":["9SxAZWWVeJc",11373,11973],"cov-6":["9SxAZWWVeJc",11373,11973],"cov-7":["9SxAZWWVeJc",11040,11640],"cov-8":["9SxAZWWVeJc",11040,11640],"cov-9":["9SxAZWWVeJc",11040,11640],"dv-17":["9SxAZWWVeJc",11040,11640],"dv-18":["9SxAZWWVeJc",11040,11640],"dv-19":["9SxAZWWVeJc",10800,11400],"dv-4":["9SxAZWWVeJc",1031,1631],exceptions:["za2o93ldrVQ",8520,9120],fifo:["i-46z3tTYGM",22800,23400],fsm:["i-46z3tTYGM",24600,25200],"l01-gates":["8bmt4UJmJ_k",3347,3947],"l02-nand":["8bmt4UJmJ_k",3347,3947],"l03-nor":["8bmt4UJmJ_k",3347,3947],"l04-sop-pos":["8bmt4UJmJ_k",5100,5700],"l05-demorgan":["8bmt4UJmJ_k",4704,5304],"l06-kmap":["8bmt4UJmJ_k",5659,6259],"l07-dontcare":["8bmt4UJmJ_k",6900,7500],"l10-sub":["8bmt4UJmJ_k",7200,7800],"l11-dec-fa":["8bmt4UJmJ_k",7200,7800],"l12-mux-fn":["8bmt4UJmJ_k",7500,8100],"l13-mux-demux":["8bmt4UJmJ_k",7500,8100],"l14-dec38":["8bmt4UJmJ_k",7200,7800],"l15-enc83":["8bmt4UJmJ_k",7200,7800],"l18-addsub":["8bmt4UJmJ_k",2700,3300],"l19-bcdadd":["8bmt4UJmJ_k",7200,7800],"l21-srlatch":["8bmt4UJmJ_k",7500,8100],"l22-ffs":["8bmt4UJmJ_k",7500,8100],"l29-rca":["8bmt4UJmJ_k",7200,7800],mux:["i-46z3tTYGM",10800,11400],"p1-c2f":["i-46z3tTYGM",9900,10500],"p1-fa-bh":["i-46z3tTYGM",3900,4500],"p1-fa-df":["i-46z3tTYGM",3600,4200],"p1-fa-st":["i-46z3tTYGM",3900,4500],"p1-ha-bh":["i-46z3tTYGM",2400,3e3],"p1-ha-df":["i-46z3tTYGM",2100,2700],"p1-ha-st":["i-46z3tTYGM",1500,2100],"p1-ops":["i-46z3tTYGM",8400,9e3],"p2-add4":["i-46z3tTYGM",10200,10800],"p2-alu":["i-46z3tTYGM",12900,13500],"p2-bshift8":["i-46z3tTYGM",13500,14100],"p2-cmp4":["i-46z3tTYGM",12600,13200],"p2-dec24":["i-46z3tTYGM",11400,12e3],"p2-enc42":["i-46z3tTYGM",12300,12900],"p2-mux2":["i-46z3tTYGM",10800,11400],"p2-mux4":["i-46z3tTYGM",10800,11400],"p2-penc42":["i-46z3tTYGM",12300,12900],"p3-dff":["i-46z3tTYGM",15900,16500],"p3-dff-arh":["i-46z3tTYGM",18300,18900],"p3-dff-arl":["i-46z3tTYGM",17400,18e3],"p3-dff-ash":["i-46z3tTYGM",18600,19200],"p3-dff-neg-arh":["i-46z3tTYGM",17100,17700],"p3-dff-srh":["i-46z3tTYGM",18e3,18600],"p3-dff-srl":["i-46z3tTYGM",18e3,18600],"p3-dff-srs":["i-46z3tTYGM",18e3,18600],"p3-dlatch":["i-46z3tTYGM",15300,15900],"p3-dlatch-rst":["i-46z3tTYGM",15600,16200],"p3-sync-async":["i-46z3tTYGM",18300,18900],"p4-afifo":["i-46z3tTYGM",24e3,24600],"p4-cnt":["i-46z3tTYGM",20400,21e3],"p4-cnt-load":["i-46z3tTYGM",20700,21300],"p4-cnt-tb":["i-46z3tTYGM",20400,21e3],"p4-div2":["i-46z3tTYGM",22200,22800],"p4-div3":["i-46z3tTYGM",22200,22800],"p4-div4":["i-46z3tTYGM",22200,22800],"p4-fifo":["i-46z3tTYGM",22800,23400],"p4-mealy-nov":["i-46z3tTYGM",24600,25200],"p4-mealy-ov":["i-46z3tTYGM",24600,25200],"p4-mod":["i-46z3tTYGM",21300,21900],"p4-moore-nov":["i-46z3tTYGM",24600,25200],"p4-moore-ov":["i-46z3tTYGM",24600,25200],"p4-range":["i-46z3tTYGM",21600,22200],"p4-range-udl":["i-46z3tTYGM",21900,22500],"p4-sr5":["i-46z3tTYGM",19200,19800],"p4-updown":["i-46z3tTYGM",21e3,21600],"p4-usr5":["i-46z3tTYGM",19800,20400],"pd-b0":["somgoTERlmw",540,1140],"pd-b1":["somgoTERlmw",3900,4500],"pd-c1":["somgoTERlmw",8820,9420],"pd-c2":["somgoTERlmw",8820,9420],"pd-c3":["somgoTERlmw",8850,9450],"pd-f3":["somgoTERlmw",6600,7200],"pd-f4":["somgoTERlmw",7320,7920],"pd-p1":["somgoTERlmw",7950,8550],"pd-p3":["somgoTERlmw",7980,8580],"pd-p4":["somgoTERlmw",7950,8550],"pd-r1":["somgoTERlmw",9960,10560],"pd-r2":["somgoTERlmw",9960,10560],"pd-s2":["somgoTERlmw",7410,8010],"pd-s4":["somgoTERlmw",1700,2300],"s01-reg":["TIZwEGRvhBU",7200,7800],"s02-mux":["TIZwEGRvhBU",8400,9e3],"s03-cnt":["TIZwEGRvhBU",7200,7800],"s04-ctrl":["TIZwEGRvhBU",4500,5100],"s05-alu":["TIZwEGRvhBU",9e3,9600],"s06-memtb":["TIZwEGRvhBU",7500,8100],"s07-struct":["TIZwEGRvhBU",5100,5700],"s10-gen":["TIZwEGRvhBU",8100,8700],"s12-uart":["TIZwEGRvhBU",4500,5100],"sdc-c1":["VGQp99ArgSE",1620,2220],"sdc-c10":["VGQp99ArgSE",9510,10110],"sdc-c11":["VGQp99ArgSE",10530,11130],"sdc-c12":["VGQp99ArgSE",11070,11670],"sdc-c13":["VGQp99ArgSE",4530,5130],"sdc-c14":["VGQp99ArgSE",7020,7620],"sdc-c15":["VGQp99ArgSE",6e3,6600],"sdc-c16":["VGQp99ArgSE",4830,5430],"sdc-c2":["VGQp99ArgSE",4830,5430],"sdc-c20":["VGQp99ArgSE",8730,9330],"sdc-c3":["VGQp99ArgSE",2610,3210],"sdc-c4":["VGQp99ArgSE",3360,3960],"sdc-c5":["VGQp99ArgSE",4740,5340],"sdc-c6":["VGQp99ArgSE",6600,7200],"sdc-c7":["VGQp99ArgSE",8460,9060],"sdc-c8":["VGQp99ArgSE",8460,9060],"sdc-c9":["VGQp99ArgSE",8670,9270],"so-s3":["za2o93ldrVQ",6330,6930],"so-s4":["za2o93ldrVQ",8100,8700],"so-s7":["za2o93ldrVQ",2820,3420],"sva-a1":["9SxAZWWVeJc",9600,10200],"sva-a6":["9SxAZWWVeJc",6e3,6600],"sva-b1":["9SxAZWWVeJc",1784,2384],"sva-b10":["9SxAZWWVeJc",4500,5100],"sva-b2":["9SxAZWWVeJc",2710,3310],"sva-b3":["9SxAZWWVeJc",3600,4200],"sva-b4":["9SxAZWWVeJc",5400,6e3],"sva-b5":["9SxAZWWVeJc",6e3,6600],"sva-b6":["9SxAZWWVeJc",4200,4800],"sva-b7":["9SxAZWWVeJc",2400,3e3],"sva-b8":["9SxAZWWVeJc",10800,11400],"sva-b9":["9SxAZWWVeJc",10800,11400],"sva-p1":["9SxAZWWVeJc",6300,6900],"sva-p2":["9SxAZWWVeJc",6300,6900],"sva-p3":["9SxAZWWVeJc",9600,10200],"sva-p5":["9SxAZWWVeJc",9900,10500],"sva-p6":["9SxAZWWVeJc",9900,10500],"sva-p8":["9SxAZWWVeJc",3600,4200],"sva-s1":["9SxAZWWVeJc",6600,7200],"sva-s2":["9SxAZWWVeJc",7200,7800],"sva-s3":["9SxAZWWVeJc",7500,8100],"sva-s4":["9SxAZWWVeJc",9300,9900],"sva-s5":["9SxAZWWVeJc",8700,9300],"sva-s6":["9SxAZWWVeJc",9e3,9600],"syn-adder":["97q0N3DCZTw",555,1155],"syn-alu":["97q0N3DCZTw",959,1559],"syn-counter":["97q0N3DCZTw",5790,6390],"syn-det_1011":["97q0N3DCZTw",5580,6180],"syn-ibex":["97q0N3DCZTw",1490,2090],"syn-mux":["97q0N3DCZTw",30,630],"syn-shift_register":["97q0N3DCZTw",1889,2489],"ver-v1":["VGQp99ArgSE",8730,9330],"ver-v10":["VGQp99ArgSE",4830,5430],"ver-v11":["VGQp99ArgSE",4890,5490],"ver-v12":["VGQp99ArgSE",4890,5490],"ver-v2":["VGQp99ArgSE",8670,9270],"ver-v3":["VGQp99ArgSE",8670,9270],"ver-v4":["VGQp99ArgSE",8730,9330],"ver-v5":["VGQp99ArgSE",8670,9270],"ver-v6":["VGQp99ArgSE",8760,9360],"ver-v9":["VGQp99ArgSE",4830,5430],violation:["za2o93ldrVQ",1020,1620],"ws-lab1":["za2o93ldrVQ",4500,5100],"ws-lab12":["za2o93ldrVQ",1020,1620],"ws-lab13":["za2o93ldrVQ",8670,9270],"ws-lab14":["za2o93ldrVQ",3540,4140],"ws-lab3":["za2o93ldrVQ",1020,1620],"ws-lab6":["za2o93ldrVQ",2430,3030],"ws-lab7":["za2o93ldrVQ",2070,2670],"x-consolidate":["akitv2i4Nxw",3720,4320],"x-fifo":["akitv2i4Nxw",5310,5910],"x-gray":["akitv2i4Nxw",4710,5310],"x-mcp":["akitv2i4Nxw",5220,5820],"x-recon":["akitv2i4Nxw",3420,4020],"x-recon-fix":["akitv2i4Nxw",4170,4770]};var it={_note:"One YouTube course per topic, used for the study plans' daily watch slices. d = length in seconds.",logic:{id:"8bmt4UJmJ_k",title:"Digital Logic Design Full Course",d:8504},verilog:{id:"i-46z3tTYGM",title:"Complete Verilog Course",d:26621},systemverilog:{id:"TIZwEGRvhBU",title:"Complete SystemVerilog Course for Digital Design",d:10300},vhdl:{id:"musL2Y95Ei0",title:"Complete VHDL Course",d:14677},sva:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},dv:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},synth:{id:"97q0N3DCZTw",title:"VLSI Logic Synthesis",d:8583},cdc:{id:"akitv2i4Nxw",title:"Clock Domain Crossing (CDC) Full Course",d:6135},sta:{id:"za2o93ldrVQ",title:"Static Timing Analysis Full Course",d:9332},sdc:{id:"VGQp99ArgSE",title:"Complete SDC Timing Constraints Course",d:12024},pd:{id:"somgoTERlmw",title:"Physical Design Full Course",d:12047}};var lt={};for(let e of Object.values(it))e&&e.id&&(lt[e.id]=e.title);var ct=e=>{let t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=e%60;return(t?t+":"+String(n).padStart(2,"0"):n)+":"+String(s).padStart(2,"0")};function Yt(e,t){let n=e.querySelector(".brief-watch"),s=rt[t];if(!s){n&&n.remove();return}let[r,o,c]=s,i=lt[r]||"the course video";n||(n=document.createElement("div"),n.className="brief-watch",e.querySelector(".brief-body").before(n)),n.innerHTML=`<div class="bw-row"><span class="bw-ic" aria-hidden="true">\u{1F4FA}</span><span class="bw-txt"><b>Watch for this lab:</b> <span class="bw-t"></span> of <a target="_blank" rel="noopener"></a> <span class="bw-min"></span></span>
    <button type="button" class="bw-play">\u25B6 Play this part</button></div><span class="vbadge"></span><div class="bw-player" hidden></div>`,n.querySelector(".bw-t").textContent=ct(o)+" \u2192 "+ct(c);let m=n.querySelector("a");m.textContent=i,m.href=`https://www.youtube.com/watch?v=${r}&t=${o}s`,n.querySelector(".bw-min").textContent=`(${Math.max(1,Math.round((c-o)/60))} min)`;let y=n.querySelector(".vbadge");window.vddVideo&&window.vddVideo.label(y,r),n.querySelector(".bw-play").addEventListener("click",u=>{let l=n.querySelector(".bw-player");l.hidden=!1,l.innerHTML="";let f=document.createElement("button");l.appendChild(f),u.currentTarget.hidden=!0,window.vddVideo&&window.vddVideo.play(f,{id:r,title:i,start:o,end:c},"video-frame",y)})}function dt(e,t,n){let s=document.getElementById("lab-brief");if(!s)return;let r=e[t];if(!r){s.hidden=!0;return}try{Yt(s,t)}catch(u){console.warn("watch",u)}s.querySelector(".brief-problem").textContent=r.problem;let o=s.querySelector(".brief-tasks");o.innerHTML="";for(let u of r.tasks){let l=document.createElement("li");l.textContent=u,o.appendChild(l)}s.querySelector(".brief-learn").textContent=r.learn;let c=s.querySelector(".brief-fig"),i=r.images||(r.image?[{src:r.image,alt:r.imageAlt||""}]:[]);if(i.length||r.html){if(c||(c=document.createElement("figure"),c.className="brief-fig",s.appendChild(c)),c.innerHTML="",i.length){let u=document.createElement("div");u.className="brief-imgs";for(let l of i){let f=document.createElement("a");f.href=l.src,f.target="_blank",f.rel="noopener";let k=document.createElement("img");k.src=l.src,k.alt=l.alt||"",k.loading="lazy",f.appendChild(k),u.appendChild(f)}c.appendChild(u)}if(r.html){let u=document.createElement("div");u.className="brief-html",u.innerHTML=r.html,c.appendChild(u)}if(r.caption){let u=document.createElement("figcaption");u.textContent=r.caption,c.appendChild(u)}}else c&&c.remove();let m=s.querySelector(".brief-dg"),y=n&&n[t];if(y&&(y.b||y.f)){m||(m=document.createElement("div"),m.className="brief-dg",s.querySelector(".brief-body").after(m)),m.innerHTML="";let u=(l,f)=>{if(!f)return;let k=document.createElement("div");k.className="brief-dgp";let q=document.createElement("h3");q.textContent=l,k.appendChild(q);let T=document.createElement("div");T.className="brief-dgs",T.appendChild(f),k.appendChild(T),m.appendChild(k)};try{u(y.bt||"Design",y.b?at(y.b):null)}catch(l){console.warn("diagram",t,l)}try{u(y.ft||"Problem \u2192 solution",y.f?ot(y.f):null)}catch(l){console.warn("flow",t,l)}m.classList.toggle("one",m.children.length===1)}else m&&m.remove();s.hidden=!1}var ht={"cdc-clocks":{b:"d_in > [a_sys|clk_sys] > [b_div|clk_div2] > q_div; [div_reg\\n\xF72|clk_sys] .clk_div2.> [b_div|clk_div2]; [a_sys|clk_sys] > [io_s1|clk_io] > [io_s2|clk_io] > q_io; [io_s2|clk_io] ~no sync~> [ext_q|clk_ext]! > q_ext",f:["P: Four clocks. Which paths are real clock domain crossings?","S: clk_div2 comes from clk_sys: same source, so clk_sys \u2192 clk_div2 is synchronous.","Q: Do clk_io and clk_ext have a common source? No: asynchronous.","X: io_s2 \u2192 ext_q crosses with no synchronizer.","F: Declare the clock relationships in the SDC and synchronize every asynchronous crossing."]},"cdc-find":{b:"wr > [wr_q|clk_cpu] > [wr_s1|clk_per] > [wr_s2|clk_per] > [busy_per|clk_per] ~direct~> [busy_c|clk_cpu]! > busy_cpu; wdata > [data_q|clk_cpu] ~direct~> [per_q|clk_per]! > per_data; irq_in > [irq_sh 3 flops|clk_cpu] > irq_sync",f:["P: Review a CPU \u2194 peripheral bridge like a design reviewer.","S: Find every signal that goes from one clock to the other.","Q: Is each one synchronized, or held stable while it is sampled?","X: data_q \u2192 per_q and busy_per \u2192 busy_c are captured directly: metastable.","F: Qualify the data with the synchronized strobe and synchronize busy."]},"cdc-fix":{b:"[err_q|clk_a] > (OR)! ~glitch~> [alarm_s1|clk_b] > [alarm_s2|clk_b]; [done_q|clk_a] > [done_s1|clk_b] > [done_s2|clk_b]; [done_s1|clk_b] ~fans out~> [seen_q|clk_b]!; [start_q|clk_a] ~1 flop~> [start_s1|clk_b]!",f:["P: Three synchronizers, each built wrong. They pass simulation.","X: Logic before the first stage can glitch; a first stage that fans out passes metastability on; one flop is not enough.","F: Register in the source domain, use only the last stage, use two flops.","OK: The CDC check shows 3 clean 2-flop synchronizers."]},"cdc-pulse":{b:"pulse_in > [tog|clk_src] > [s1|clk_dst] > [s2|clk_dst] > [s3|clk_dst]; [s2|clk_dst] > (XOR) > pulse_out; [s3|clk_dst] > (XOR)",f:["P: A one-cycle pulse from a fast clock can fall between two slow clock edges and be lost.","S: Each pulse flips a level (toggle) in the source clock.","S: The level crosses through 2 flops; it stays until the next pulse.","F: An XOR of two synchronized stages turns each level change back into one pulse.","Q: Pulses must be at least 2\u20133 destination cycles apart."]},"cdc-bus":{b:"din > [hold\\n8 bits|clk_src] -stable-> <load mux|clk_dst> > [dout|clk_dst]; send > [tog|clk_src] > [s1|clk_dst] > [s2|clk_dst] > (s2 XOR s3|clk_dst) .load.> <load mux|clk_dst>",f:["P: 8 bits through 8 synchronizers arrive in different cycles: dout can be a value never sent.","F: Hold the bus stable in the source domain; send only a 1-bit 'new data' toggle.","S: The destination loads the whole bus when the synchronized toggle changes.","OK: Every bit is stable when loaded: a multi-cycle path, not a synchronizer per bit."]},"cdc-reset":{b:"rst_n > [ra1|clk_a] > [ra2|clk_a] .rst_a_n.> [ra_q|clk_a]; rst_n ~async release~> [rb_q|clk_b]!; [ra2|clk_a] ~wrong domain~> [rx_q|clk_b]!",f:["P: An asynchronous reset may release close to a clock edge: flops leave reset in different cycles.","S: A reset synchronizer asserts at once and releases in step with its own clock.","X: rb_q uses the raw pin; rx_q uses clk_a's synchronized reset in clk_b.","F: Give every clock domain its own reset synchronizer."]},"cdc-handshake":{b:"din > [data|clk_src] -stable while req-> [dout|clk_dst]; start > {src FSM|clk_src} > [req|clk_src] > [req_s1, req_s2|clk_dst] > {take = rise|clk_dst} > [ack|clk_dst] > [ack_s1, ack_s2|clk_src] > {src FSM|clk_src}",f:["P: Send data between clocks whose ratio you do not know.","S: Source holds data and raises req.","S: Destination sees req (synchronized), takes data, raises ack.","S: Source sees ack, drops req; destination drops ack.","OK: Works for any clock ratio: only req and ack cross, the data is stable."]},"cdc-fifo":{b:"wdata > {memory 8\xD78} > rdata; [wbin \u2192 wptr Gray|wclk] > [rq1, rq2_wptr|rclk] > (empty?|rclk); [rbin \u2192 rptr Gray|rclk] > [wq1, wq2_rptr|wclk] > (full?|wclk); [wbin \u2192 wptr Gray|wclk] .waddr.> {memory 8\xD78}",f:["P: Stream one word per clock between two clocks.","S: Write and read pointers live in their own clocks.","S: Each pointer crosses as a Gray code through 2 flops: only one bit changes per step.","OK: A synchronized pointer is old or new, never wrong: full and empty are safe (maybe late)."]},"cdc-assert":{b:"din > [data|clk_src]! ~changes? (BUG 1)> [dout|clk_dst]; [req|clk_src]! ~too short? (BUG 2)> [req sync|clk_dst] > [ack|clk_dst] > [ack sync|clk_src]",f:["P: The CDC check only sees structure. Protocol bugs pass it.","S: A1: data must not change while req is high.","S: A2: req drops only after ack. A3: req lasts at least 2 destination clocks.","X: BUG = 1 or 2: the structure is the same, the assertions fail.","OK: Structural CDC check + assertions in simulation catch both kinds of bugs."]},"x-consolidate":{b:"a_load > [a_load_q|aclk] > [sync|bclk] > (AND|bclk) > b_go; a_en > [a_en_q|aclk] > [sync #2|bclk] ~1 cycle apart?~> (AND|bclk); [a_go_q = load&en|aclk]+ +CONSOLIDATE=1+> [one sync|bclk]+",f:["P: load and enable must act together, but cross through separate synchronizers.","X: They can arrive one cycle apart: b_partial, a state the source never sent.","Q: Plain RTL simulation hides it; the metastability model in sync2 shows it.","F: Consolidate: combine in aclk, register, and synchronize one bit."]},"x-mcp":{b:"a_data > [a_data held|aclk] -stable (MCP)> [b_data|bclk]; [a_en toggle|aclk] > [sync2|bclk] > (b_load = edge|bclk) .load.> [b_data|bclk]; (b_load = edge|bclk) > [b_ack toggle|bclk] > [sync2 #2|aclk] > (a_ready|aclk)",f:["P: Pass a bus without a synchronizer per bit, and know when to send the next word.","S: Hold a_data stable; toggle a_en once per word (2-phase).","S: bclk sees the toggle, loads the data, toggles b_ack back.","OK: Each data bit is a multi-cycle path; the acknowledge tells aclk when it may change."]},"x-gray":{b:"[a_bin counter|aclk] > (bin2gray|aclk) > [a_ptr|aclk] > [4 \xD7 sync2|bclk] > (gray2bin|bclk) > b_count",f:["P: A binary counter changes several bits at once (0111 \u2192 1000).","X: The bits arrive in different cycles: bclk sees a count that never existed.","F: Cross a Gray code from a register: exactly one bit changes per count.","OK: bclk sees the old or the new value, never a mix."]},"x-fifo":{b:"wdata > {fifomem} > rdata; {wptr_full|wclk} .waddr.> {fifomem}; {rptr_empty|rclk} .raddr.> {fifomem}; {wptr_full|wclk} -wptr Gray-> {sync2 \u2192 rclk|rclk} > {rptr_empty|rclk}; {rptr_empty|rclk} -rptr Gray-> {sync2 \u2192 wclk|wclk} > {wptr_full|wclk}",f:["P: A 2-clock FIFO must be easy to synthesize, time and review.","S: Split it into single-clock modules; only two sync2 modules cross.","S: Pointers have one extra bit and cross as Gray codes.","OK: Full is exact in wclk, empty in rclk; a late pointer only makes them pessimistic."]},"x-gls-sdf":{b:"[a_tog_reg|aclk] -async-> [sync1_reg|bclk]! > [sync2_reg|bclk] > [sync3_reg|bclk] > (XOR edge|bclk) > [b_cnt|bclk]; {sync_cnt.sdf} .delays.> [sync1_reg|bclk]!",f:["P: Gate-level simulation with SDF: sync1_reg samples an asynchronous input.","X: Its setup/hold check fails, the notifier makes Q = X, and the X reaches the counter for good.","Q: Is it a real bug? No: the synchronizer exists exactly for this.","F: Turn off timing checks on the first synchronizer stage only.","OK: No X; every other flop is still checked."]},"x-recon":{b:"[a_start|aclk] > [s1|bclk] > [b_start_s|bclk] > {FSM\\nIDLE\u2192FAST/SLOW|bclk}!; [a_mode|aclk] > [m1|bclk] > [b_mode_s|bclk] ~1 cycle late?~> {FSM\\nIDLE\u2192FAST/SLOW|bclk}!; {fsm_recon.waive}! .waived.> {FSM\\nIDLE\u2192FAST/SLOW|bclk}!",f:["P: start and mode are synchronized separately and meet in the FSM (reconvergence).",'S: The CDC check flags it; the designer waives it: "mode is set before start".',"Q: Is the waiver's claim true? A_WAIVER checks it in simulation.","X: With metastability injected, mode can arrive a cycle after start: the FSM takes the wrong branch.","F: Synchronize one control (start) and load mode as qualified data (lab 7)."]},"x-recon-fix":{b:"[a_start|aclk] > [sync2|bclk] > (b_load = rise|bclk) > {FSM\\nIDLE\u2192DECIDE\u2192FAST/SLOW|bclk}+; [a_mode held|aclk] -stable (qualified)> [b_mode_q|bclk]+ > {FSM\\nIDLE\u2192DECIDE\u2192FAST/SLOW|bclk}+; (b_load = rise|bclk) .load.> [b_mode_q|bclk]+",f:["P: Remove the reconvergence instead of waiving it.","F: Only a_start is synchronized.","F: a_mode is held stable and loaded once, when bclk sees start rise.","Q: A_STABLE checks a_mode is stable when it is loaded.","OK: CDC check clean without a waiver; 0 wrong branches with metastability injected."]}};var pe=[{id:"cdc",group:"CDC workshop",title:"CDC workshop",note:"9 labs that follow the 5-day clock domain crossing workshop: clocks, synchronizers, MTBF, pulse and bus synchronizers, reset, handshake, async FIFO and assertions. Each lab has a quiz."},{id:"expert",group:"Expert CDC & FIFO",title:"Expert CDC & FIFO (SystemVerilog)",note:"7 expert labs: consolidation with a metastability simulation model, MCP formulation with acknowledge, Gray code counters, a partitioned 2-clock FIFO, gate-level simulation with SDF and synchronizer timing checks, and reconvergence in a state machine (waived by mistake, then fixed). Each lab has a quiz."}],X=[{id:"cdc-clocks",group:"CDC workshop",tag:"Day 1 \xB7 Lab 1",title:"Clocks and clock domains",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 1: identify the clocks. Day 1, synchronous and asynchronous clocks.
# Run the CDC check. The checker finds every clock, decides which clocks are related
# (same source, or listed in the same set_clock_groups group) and lists each crossing.
# Open clocks.sdc: clk_div2 is generated from clk_sys, and clk_ext is in no group.
# Exercise: add  -group {clk_ext}  to set_clock_groups and run again.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog clocks_top.v
hierarchy -check -top clocks_top
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"clocks_top.v":`// Lab 1: four clocks. Which crossings are clock domain crossings?
module clocks_top (
  input  clk_sys, clk_io, clk_ext,
  input  d_in,
  output q_io, q_ext, q_div
);
  // clk_div2 = clk_sys / 2, made by a toggle flop
  reg div_reg;
  always @(posedge clk_sys) div_reg <= ~div_reg;
  wire clk_div2 = div_reg;

  // Source register in the clk_sys domain
  reg a_sys;
  always @(posedge clk_sys) a_sys <= d_in;

  // 1) clk_sys -> clk_div2: same source clock
  reg b_div;
  always @(posedge clk_div2) b_div <= a_sys;
  assign q_div = b_div;

  // 2) clk_sys -> clk_io: two-flop synchronizer
  reg io_s1, io_s2;
  always @(posedge clk_io) begin io_s1 <= a_sys; io_s2 <= io_s1; end
  assign q_io = io_s2;

  // 3) clk_io -> clk_ext: direct
  reg ext_q;
  always @(posedge clk_ext) ext_q <= io_s2;
  assign q_ext = ext_q;
endmodule
`,"clocks.sdc":`create_clock -name clk_sys -period 10 [get_ports clk_sys]
create_clock -name clk_io  -period 13 [get_ports clk_io]
create_clock -name clk_ext -period 40 [get_ports clk_ext]
create_generated_clock -name clk_div2 -source [get_ports clk_sys] -divide_by 2 [get_pins div_reg/Q]
set_clock_groups -asynchronous -group {clk_sys clk_div2} -group {clk_io}
set_input_delay 2 -clock clk_sys [get_ports d_in]
`},quiz:[{type:"number",q:"How many clock domains does the checker find?",answer:4,tol:0,unit:"",explain:"clk_sys, clk_io, clk_ext and the generated clock clk_div2.",try:!1},{type:"choice",q:"a_sys (clk_sys) is captured by b_div (clk_div2). Why is this not reported as a crossing?",options:["b_div has no reset","clk_div2 is generated from clk_sys, so the two clocks are synchronous","The SDC sets a false path","b_div drives an output port"],answer:1,explain:"A clock divided from clk_sys has a fixed phase relationship with it. Static timing analysis checks that path; no synchronizer is needed.",try:!1},{type:"number",q:"How many violations does the report show?",answer:1,tol:0,unit:"",explain:"io_s2 (clk_io) is captured directly by ext_q (clk_ext).",try:!1},{type:"choice",q:'Why is there a caution called "Clock relationship assumed"?',options:["clk_ext has no period","clk_ext and clk_io are not related by any set_clock_groups, so the checker assumes they are asynchronous","clk_io is generated from clk_ext","The design has a latch"],answer:1,explain:"Every pair of clocks must be either related or declared asynchronous. The checker never assumes two unrelated clocks are safe.",try:!1},{type:"number",q:"Try it: add -group {clk_ext} to set_clock_groups and run again. How many cautions are left?",answer:0,tol:0,unit:"",explain:"Now all three clock groups are declared asynchronous to each other. The violation stays: declaring clocks asynchronous does not add a synchronizer.",try:!0}]},{id:"cdc-find",group:"CDC workshop",tag:"Day 1 \xB7 Lab 2",title:"Find the metastability",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 2: review a small CPU-to-peripheral bridge. Day 1, metastability and MTBF.
# Before you run, read soc_bridge.v and decide which of the four crossings are safe.
# Then run the CDC check and compare.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog soc_bridge.v
hierarchy -check -top soc_bridge
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"soc_bridge.v":`// Lab 2: a small bridge between a CPU clock and a peripheral clock.
// Review it: which crossings can go metastable?
module soc_bridge (
  input        clk_cpu, clk_per,
  input        irq_in,          // interrupt from the outside world (no clock)
  input  [7:0] wdata,
  input        wr,
  output       irq_sync, busy_cpu,
  output [7:0] per_data
);
  // CPU domain
  reg       wr_q;
  reg [7:0] data_q;
  always @(posedge clk_cpu) begin
    wr_q   <= wr;
    if (wr) data_q <= wdata;
  end

  // 1) Write strobe to the peripheral: two-flop synchronizer
  reg wr_s1, wr_s2;
  always @(posedge clk_per) begin wr_s1 <= wr_q; wr_s2 <= wr_s1; end

  // 2) Data bus to the peripheral: captured directly
  reg [7:0] per_q;
  always @(posedge clk_per) per_q <= data_q;
  assign per_data = per_q;

  // 3) Busy flag back to the CPU: captured directly
  reg busy_per, busy_c;
  always @(posedge clk_per) busy_per <= ~wr_s2;   // busy flag: the inverted write strobe
  always @(posedge clk_cpu) busy_c <= busy_per;
  assign busy_cpu = busy_c;

  // 4) Interrupt input: three-flop synchronizer
  reg [2:0] irq_sh;
  always @(posedge clk_cpu) irq_sh <= {irq_sh[1:0], irq_in};
  assign irq_sync = irq_sh[2];
endmodule
`,"bridge.sdc":`create_clock -name clk_cpu -period 5  [get_ports clk_cpu]
create_clock -name clk_per -period 12 [get_ports clk_per]
set_clock_groups -asynchronous -group {clk_cpu} -group {clk_per}
set_input_delay 1 -clock clk_cpu [get_ports {wdata wr}]
`},quiz:[{type:"number",q:"How many bits cross between clock domains (the 'crossing bits' in the summary)?",answer:11,tol:0,unit:"",explain:"wr_q (1) + data_q (8) + busy_per (1) + the asynchronous input irq_in (1) = 11.",try:!1},{type:"number",q:"How many violations are there?",answer:2,tol:0,unit:"",explain:"busy_per \u2192 busy_c and data_q[7:0] \u2192 per_q[7:0] are captured directly.",try:!1},{type:"choice",q:"How is irq_in synchronized?",options:["Not at all","A 2-flop synchronizer","A 3-flop synchronizer (irq_sh)","A handshake"],answer:2,explain:"irq_sh is a 3-stage shift register in clk_cpu. A third flop gives more time to resolve, for a longer MTBF.",try:!1},{type:"choice",q:"wr_q is synchronized, so why is data_q \u2192 per_q still a violation?",options:["data_q has no reset","per_q samples data_q on every clk_per edge, not only when the synchronized write says the data is stable","data_q is too wide for a synchronizer","per_q is in the same domain as data_q"],answer:1,explain:"Synchronizing a control signal does not make the data safe on its own. The data must be captured only when the synchronized control says it is stable (lab 5).",try:!1},{type:"number",q:"MTBF of a synchronizer: MTBF = e^(tr/\u03C4) / (T0 \xD7 fclk \xD7 fdata). With tr = 9 ns, \u03C4 = 0.3 ns, T0 = 0.1 ns, fclk = 100 MHz and fdata = 10 MHz, what is the MTBF in years? (1 year = 3.156e7 s)",answer:3.39,tol:.1,unit:"years",explain:"e^30 = 1.07e13; T0 \xD7 fclk \xD7 fdata = 1e-10 \xD7 1e8 \xD7 1e7 = 1e5 per second; MTBF = 1.07e8 s = 3.39 years. Too short for a product: add a stage or slow the data.",try:!1}]},{id:"cdc-fix",group:"CDC workshop",tag:"Day 1 \xB7 Lab 3",title:"Fix the synchronizers",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 3: three synchronizers, three classic mistakes. Day 1, synchronizer rules.
# Run the CDC check, read each violation, then fix status_sync.v until the report is clean.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog status_sync.v
hierarchy -check -top status_sync
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"status_sync.v":`// Lab 3: three synchronizers, three mistakes. Find them and fix them.
module status_sync (
  input  clk_a, clk_b,
  input  a_err, a_done, a_start,
  output b_alarm, b_done, b_start, b_seen
);
  // Source registers in clk_a
  reg err_q, done_q, start_q;
  always @(posedge clk_a) begin err_q <= a_err; done_q <= a_done; start_q <= a_start; end

  // Mistake 1? An alarm made from two flags, then synchronized
  wire alarm = err_q | done_q;
  reg alarm_s1, alarm_s2;
  always @(posedge clk_b) begin alarm_s1 <= alarm; alarm_s2 <= alarm_s1; end
  assign b_alarm = alarm_s2;

  // Mistake 2? done is synchronized, but the first stage is also used
  reg done_s1, done_s2, seen_q;
  always @(posedge clk_b) begin done_s1 <= done_q; done_s2 <= done_s1; seen_q <= done_s1; end
  assign b_done = done_s2;
  assign b_seen = seen_q;

  // Mistake 3? start goes through a single flop
  reg start_s1;
  always @(posedge clk_b) start_s1 <= start_q;
  assign b_start = start_s1;
endmodule
`,"status.sdc":`create_clock -name clk_a -period 4 [get_ports clk_a]
create_clock -name clk_b -period 9 [get_ports clk_b]
set_clock_groups -asynchronous -group {clk_a} -group {clk_b}
set_input_delay 1 -clock clk_a [get_ports {a_err a_done a_start}]
`},quiz:[{type:"number",q:"How many violations does the original design have?",answer:3,tol:0,unit:"",explain:"One per mistake.",try:!1},{type:"choice",q:"What is wrong with the alarm synchronizer?",options:["It has only one stage","An OR gate drives the first stage: a glitch can be captured as a false alarm","alarm_s2 fans out","It has no reset"],answer:1,explain:"Never put combinational logic in front of a synchronizer. Register err_q | done_q in clk_a first.",try:!1},{type:"choice",q:"Why is seen_q <= done_s1 a problem?",options:["done_s1 can still be metastable; only the second stage may use it","seen_q is in clk_a","done_s1 has two drivers","It is not a problem"],answer:0,explain:"The first stage is where metastability settles. Use done_s2 (the synchronized output) instead.",try:!1},{type:"choice",q:"How do you fix start_s1?",options:["Add a second flop: start_s1 \u2192 start_s2, and use start_s2","Add a reset","Move it to clk_a","Invert it"],answer:0,explain:"A single flop gives no time to resolve metastability.",try:!1},{type:"number",q:"Try it: fix all three (register the OR in clk_a, use done_s2 for seen_q, add start_s2). How many synchronizers does the checker count now?",answer:3,tol:0,unit:"",explain:"alarm, done and start each have a clean 2-flop synchronizer, and the report shows 0 violations.",try:!0}]},{id:"cdc-pulse",group:"CDC workshop",tag:"Day 2 \xB7 Lab 4",title:"Pulse synchronizer",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 4: open-loop pulse synchronizer (toggle synchronizer). Day 2.
# A one-cycle pulse in a fast clock would be missed by a slow clock. The source turns each
# pulse into a level change; the destination synchronizes the level and detects edges.
# Run the CDC check, then pick Simulate (tb_pulse_sync.v) next to Run and look at the waveform.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog pulse_sync.v
hierarchy -check -top pulse_sync
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"pulse_sync.v":`// Lab 4: open-loop pulse synchronizer (toggle synchronizer).
// A one-cycle pulse in clk_src becomes a one-cycle pulse in clk_dst.
\`timescale 1ns/1ps
module pulse_sync (
  input  clk_src, rst_src,      // rst_src is synchronous to clk_src
  input  clk_dst, rst_dst,      // rst_dst is synchronous to clk_dst
  input  pulse_in,
  output pulse_out
);
  // Source: each pulse flips a level
  reg tog;
  always @(posedge clk_src)
    if (rst_src) tog <= 1'b0;
    else if (pulse_in) tog <= ~tog;

  // Destination: synchronize the level, then detect its edges
  reg s1, s2, s3;
  always @(posedge clk_dst)
    if (rst_dst) {s1, s2, s3} <= 3'b000;
    else         {s1, s2, s3} <= {tog, s1, s2};
  assign pulse_out = s2 ^ s3;
endmodule
`,"tb_pulse_sync.v":`// Self-checking testbench: sends pulses from a 100 MHz clock to a 37 MHz clock
// and counts what arrives. GAP is the number of source cycles between pulses.
\`timescale 1ns/1ps
module tb_pulse_sync;
  parameter N = 20, GAP = 12;
  reg clk_src = 0, clk_dst = 0, rst_src = 1, rst_dst = 1, pulse_in = 0;
  wire pulse_out;
  always #5    clk_src = ~clk_src;   // 10 ns
  always #13.5 clk_dst = ~clk_dst;   // 27 ns
  pulse_sync dut (.*);

  integer sent = 0, got = 0;
  always @(posedge clk_dst) if (!rst_dst && pulse_out) got = got + 1;

  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_pulse_sync);
    repeat (3) @(posedge clk_dst); rst_src = 0; rst_dst = 0;
    repeat (N) begin
      @(posedge clk_src) pulse_in <= 1; sent = sent + 1;
      @(posedge clk_src) pulse_in <= 0;
      repeat (GAP - 1) @(posedge clk_src);
    end
    repeat (10) @(posedge clk_dst);
    $display("Sent %0d pulses, received %0d", sent, got);
    if (got == sent) $display("PASS"); else $display("FAIL: %0d pulse(s) lost", sent - got);
    $finish;
  end
endmodule
`,"pulse.sdc":`create_clock -name clk_src -period 10 [get_ports clk_src]
create_clock -name clk_dst -period 27 [get_ports clk_dst]
set_clock_groups -asynchronous -group {clk_src} -group {clk_dst}
set_input_delay 1 -clock clk_src [get_ports {pulse_in rst_src}]
set_input_delay 1 -clock clk_dst [get_ports {rst_dst}]
`},quiz:[{type:"number",q:"How many violations does the CDC check report?",answer:0,tol:0,unit:"",explain:"Only tog crosses, through s1 \u2192 s2.",try:!1},{type:"choice",q:"Which signal actually crosses the clock domain?",options:["pulse_in","tog","pulse_out","s3"],answer:1,explain:"tog is a level that flips once per pulse. A level is safe to synchronize; a 1-cycle pulse is not.",try:!1},{type:"number",q:"Simulate: how many pulses does clk_dst receive?",answer:20,tol:0,unit:"",explain:"All 20 arrive: the pulses are far enough apart.",try:!1},{type:"number",q:"Try it: set GAP = 1 in tb_pulse_sync.v and simulate. How many pulses arrive now?",answer:10,tol:0,unit:"",explain:"Pulses 20 ns apart toggle tog twice within one 27 ns clk_dst period, so pairs of toggles cancel. Open-loop synchronizers need the source to slow down: here at least about two destination cycles between pulses.",try:!0}]},{id:"cdc-bus",group:"CDC workshop",tag:"Day 2 \xB7 Lab 5",title:"Bus with synchronized enable",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 5: passing a multi-bit bus. Day 2, consolidation and synchronized enable.
# An 8-bit bus cannot go through 8 separate synchronizers: bits can arrive in different
# cycles. Here the data is held stable and only one "new data" level is synchronized; the
# destination loads the bus when it changes (MUX recirculation).
# Run the CDC check, then simulate.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog bus_sync.v
hierarchy -check -top bus_sync
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"bus_sync.v":`// Lab 5: passing an 8-bit bus with a synchronized enable (MUX recirculation).
// The data is held stable in the source domain; only a 1-bit "new data" level crosses
// through a synchronizer. The destination loads the bus when the synchronized level changes.
\`timescale 1ns/1ps
module bus_sync (
  input            clk_src, rst_src, clk_dst, rst_dst,
  input            send,          // one-cycle request in clk_src
  input      [7:0] din,
  output reg [7:0] dout,
  output           dvalid         // one-cycle pulse in clk_dst when dout is new
);
  reg [7:0] hold;
  reg       tog;
  always @(posedge clk_src)
    if (rst_src) begin hold <= 8'h00; tog <= 1'b0; end
    else if (send) begin hold <= din; tog <= ~tog; end

  reg s1, s2, s3;
  always @(posedge clk_dst)
    if (rst_dst) {s1, s2, s3} <= 3'b000;
    else         {s1, s2, s3} <= {tog, s1, s2};
  wire load = s2 ^ s3;            // synchronized "new data" pulse

  always @(posedge clk_dst)
    if (rst_dst) dout <= 8'h00;
    else         dout <= load ? hold : dout;   // recirculate until load
  reg v;
  always @(posedge clk_dst) v <= rst_dst ? 1'b0 : load;
  assign dvalid = v;
endmodule
`,"tb_bus_sync.v":`\`timescale 1ns/1ps
module tb_bus_sync;
  parameter N = 16, GAP = 14;
  reg clk_src = 0, clk_dst = 0, rst_src = 1, rst_dst = 1, send = 0;
  reg [7:0] din = 0;
  wire [7:0] dout; wire dvalid;
  always #5    clk_src = ~clk_src;   // 10 ns
  always #11.5 clk_dst = ~clk_dst;   // 23 ns
  bus_sync dut (.*);

  reg [7:0] sent [0:N-1];
  integer i, got = 0, errors = 0, seed = 7;
  always @(posedge clk_dst) if (dvalid) begin
    if (dout !== sent[got]) begin errors = errors + 1; $display("ERROR: word %0d expected %h, got %h", got, sent[got], dout); end
    got = got + 1;
  end
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_bus_sync);
    repeat (3) @(posedge clk_dst); rst_src = 0; rst_dst = 0;
    for (i = 0; i < N; i = i + 1) begin
      sent[i] = $random(seed);
      @(posedge clk_src) begin send <= 1; din <= sent[i]; end
      @(posedge clk_src) send <= 0;
      repeat (GAP - 1) @(posedge clk_src);
    end
    repeat (12) @(posedge clk_dst);
    $display("Sent %0d words, received %0d, %0d error(s)", N, got, errors);
    if (got == N && errors == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"bus.sdc":`create_clock -name clk_src -period 10 [get_ports clk_src]
create_clock -name clk_dst -period 23 [get_ports clk_dst]
set_clock_groups -asynchronous -group {clk_src} -group {clk_dst}
set_input_delay 1 -clock clk_src [get_ports {send din rst_src}]
set_input_delay 1 -clock clk_dst [get_ports {rst_dst}]
`},quiz:[{type:"choice",q:"How does the checker classify hold[7:0] \u2192 dout[7:0]?",options:["Unsynchronized crossing","Qualified by synchronized enable","Bus synchronized bit by bit","Reconvergence"],answer:1,explain:"dout only loads when load (from the synchronized tog) is 1. Until then it recirculates its own value.",try:!1},{type:"number",q:"How many synchronizers does the checker count?",answer:1,tol:0,unit:"",explain:"One: tog \u2192 s1 \u2192 s2. The 8 data bits need none.",try:!1},{type:"number",q:"Simulate: how many words are received with errors?",answer:0,tol:0,unit:"",explain:"16 words sent, 16 received, 0 errors.",try:!1},{type:"number",q:"Try it: set GAP = 5 in tb_bus_sync.v. How many errors are there now?",answer:6,tol:0,unit:"",explain:"The checker still says OK, but the source now changes hold before the destination has loaded it. A structural check cannot prove that the data is stable: simulation and assertions (lab 9) check the protocol.",try:!0},{type:"choice",q:"What is the smallest GAP that still passes?",options:["2","4","6","14"],answer:2,explain:"GAP = 6 passes and GAP = 5 fails. The hold time must cover the synchronizer latency (about 2 to 3 destination cycles of 23 ns).",try:!1}]},{id:"cdc-reset",group:"CDC workshop",tag:"Day 2 \xB7 Lab 6",title:"Reset synchronizer",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 6: reset synchronizer. Day 2.
# An asynchronous reset may assert at any time, but it must release in step with the clock,
# or flops leave reset in different cycles. ra1/ra2 form a reset synchronizer for clk_a.
# rb_q uses the pin directly and rx_q borrows clk_a's reset. Run the check, then simulate.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog rst_sync.v
hierarchy -check -top rst_sync_top
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"rst_sync.v":`// Lab 6: reset synchronizers.
// rst_n is an asynchronous, active-low reset from a pin. Each clock domain needs its own
// reset synchronizer: assert at once, release (deassert) in step with that domain's clock.
\`timescale 1ns/1ps
module rst_sync_top (
  input        rst_n, clk_a, clk_b,
  input  [3:0] da, db,
  output [3:0] qa, qb, qx
);
  // Reset synchronizer for clk_a
  reg ra1, ra2;
  always @(posedge clk_a or negedge rst_n)
    if (!rst_n) {ra1, ra2} <= 2'b00;
    else        {ra1, ra2} <= {1'b1, ra1};
  wire rst_a_n = ra2;

  reg [3:0] ra_q;
  always @(posedge clk_a or negedge rst_a_n)
    if (!rst_a_n) ra_q <= 4'h0; else ra_q <= da;
  assign qa = ra_q;

  // clk_b registers: reset straight from the pin
  reg [3:0] rb_q;
  always @(posedge clk_b or negedge rst_n)
    if (!rst_n) rb_q <= 4'h0; else rb_q <= db;
  assign qb = rb_q;

  // clk_b registers that borrow clk_a's synchronized reset
  reg [3:0] rx_q;
  always @(posedge clk_b or negedge rst_a_n)
    if (!rst_a_n) rx_q <= 4'h0; else rx_q <= db;
  assign qx = rx_q;
endmodule
`,"tb_rst_sync.v":`// Shows when each register leaves reset, relative to its own clock edges.
\`timescale 1ns/1ps
module tb_rst_sync;
  reg rst_n = 1, clk_a = 0, clk_b = 0;
  reg [3:0] da = 4'hA, db = 4'h5;
  wire [3:0] qa, qb, qx;
  always #5   clk_a = ~clk_a;   // 10 ns: rising edges at 5, 15, 25, ...
  always #8.5 clk_b = ~clk_b;   // 17 ns: rising edges at 8.5, 25.5, 42.5, ...
  rst_sync_top dut (.*);
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_rst_sync);
    #1    rst_n = 0;            // assert reset (asynchronous)
    #42.2 rst_n = 1;            // release at 43.2 ns, 0.7 ns after a clk_b edge
    $display("rst_n released at %t", $realtime);
    #200 $finish;
  end
  always @(posedge dut.rst_a_n) $display("clk_a reset synchronizer output rises at %t", $realtime);
  always @(qa) if (qa === da) $display("qa leaves reset at %t", $realtime);
  always @(qb) if (qb === db) $display("qb leaves reset at %t", $realtime);
  always @(qx) if (qx === db) $display("qx leaves reset at %t", $realtime);
endmodule
`,"rst.sdc":`create_clock -name clk_a -period 10 [get_ports clk_a]
create_clock -name clk_b -period 17 [get_ports clk_b]
set_clock_groups -asynchronous -group {clk_a} -group {clk_b}
set_input_delay 1 -clock clk_a [get_ports da]
set_input_delay 1 -clock clk_b [get_ports db]
`},quiz:[{type:"number",q:"How many violations does the CDC check report?",answer:1,tol:0,unit:"",explain:"rx_q (clk_b) is reset by ra2 from clk_a: Reset crosses domains.",try:!1},{type:"choice",q:"How is rb_q reported?",options:["OK: synchronized reset","Caution: reset not synchronized (rst_n goes straight to the flops)","Violation: unsynchronized crossing","Not reported"],answer:1,explain:"Its reset release is not synchronized to clk_b. Add a second reset synchronizer clocked by clk_b.",try:!1},{type:"number",q:"Simulate: how many ns after rst_n is released does the clk_a reset synchronizer output rise?",answer:11.8,tol:.15,unit:"ns",explain:"rst_n is released at 43.2 ns; rst_a_n rises at 55.0 ns, on the second clk_a edge after release.",try:!1},{type:"choice",q:"qb and qx leave reset at the same time here. Why is qx still wrong?",options:["It is not wrong","Its reset releases on a clk_a edge, which is asynchronous to clk_b: the release can violate recovery/removal and go metastable","qx has no clock","qx is not reset"],answer:1,explain:"The simulation shows one lucky case. In silicon the clk_a edge can land anywhere in the clk_b period.",try:!1}]},{id:"cdc-handshake",group:"CDC workshop",tag:"Day 3 \xB7 Lab 7",title:"Closed-loop handshake",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 7: closed-loop 4-phase req/ack handshake. Day 3.
# The source holds the data and raises req; the destination takes the data and raises ack;
# the source drops req; the destination drops ack. Only req and ack cross, each through a
# synchronizer. It works for any clock ratio. Run the check, then simulate.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog handshake.v
hierarchy -check -top handshake
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"handshake.v":`// Lab 7: closed-loop 4-phase handshake carrying an 8-bit word.
//   source: hold data, raise req;  destination: see req, take data, raise ack
//   source: see ack, drop req;     destination: see req low, drop ack
// Only req and ack cross through synchronizers; data is stable while req is high.
\`timescale 1ns/1ps
module handshake (
  input            clk_src, rst_src, clk_dst, rst_dst,
  input            start,              // request to send din (clk_src)
  input      [7:0] din,
  output           busy,               // high until the transfer completes
  output reg [7:0] dout,
  output reg       dvalid
);
  // ---------------- source side ----------------
  reg [7:0] data;
  reg       req;
  reg       ack_s1, ack_s2;
  always @(posedge clk_src) begin
    if (rst_src) {ack_s1, ack_s2} <= 2'b00;
    else         {ack_s1, ack_s2} <= {ack, ack_s1};
  end
  localparam IDLE = 2'd0, REQ = 2'd1, WAIT_LOW = 2'd2;
  reg [1:0] st;
  always @(posedge clk_src)
    if (rst_src) begin st <= IDLE; req <= 1'b0; data <= 8'h00; end
    else case (st)
      IDLE:     if (start) begin data <= din; req <= 1'b1; st <= REQ; end
      REQ:      if (ack_s2) begin req <= 1'b0; st <= WAIT_LOW; end
      WAIT_LOW: if (!ack_s2) st <= IDLE;
      default:  st <= IDLE;
    endcase
  assign busy = (st != IDLE);

  // ---------------- destination side ----------------
  reg req_s1, req_s2, req_s3;
  reg ack;
  always @(posedge clk_dst)
    if (rst_dst) {req_s1, req_s2, req_s3} <= 3'b000;
    else         {req_s1, req_s2, req_s3} <= {req, req_s1, req_s2};
  wire take = req_s2 & ~req_s3;          // rising edge of the synchronized req
  always @(posedge clk_dst)
    if (rst_dst) begin dout <= 8'h00; dvalid <= 1'b0; ack <= 1'b0; end
    else begin
      dvalid <= take;
      if (take) dout <= data;            // data has been stable since req rose
      ack <= req_s2;                     // ack follows the synchronized req
    end
endmodule
`,"tb_handshake.v":`\`timescale 1ns/1ps
module tb_handshake;
  parameter N = 12;
  parameter real TSRC = 10.0, TDST = 31.0;   // try other clock periods
  reg clk_src = 0, clk_dst = 0, rst_src = 1, rst_dst = 1, start = 0;
  reg [7:0] din = 0;
  wire busy, dvalid; wire [7:0] dout;
  always #(TSRC/2) clk_src = ~clk_src;
  always #(TDST/2) clk_dst = ~clk_dst;
  handshake dut (.*);

  reg [7:0] sent [0:N-1];
  integer i, got = 0, errors = 0, seed = 11;
  always @(posedge clk_dst) if (dvalid) begin
    if (dout !== sent[got]) begin errors = errors + 1; $display("ERROR: word %0d expected %h, got %h", got, sent[got], dout); end
    got = got + 1;
  end
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_handshake);
    repeat (3) @(posedge clk_dst); rst_src = 0; rst_dst = 0;
    for (i = 0; i < N; i = i + 1) begin
      sent[i] = $random(seed);
      @(posedge clk_src); while (busy) @(posedge clk_src);
      start <= 1; din <= sent[i];
      @(posedge clk_src) start <= 0;
      @(posedge clk_src);
    end
    while (busy) @(posedge clk_src);
    repeat (6) @(posedge clk_dst);
    $display("Sent %0d words in %t, received %0d, %0d error(s)", N, $time, got, errors);
    if (got == N && errors == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"handshake.sdc":`create_clock -name clk_src -period 10 [get_ports clk_src]
create_clock -name clk_dst -period 31 [get_ports clk_dst]
set_clock_groups -asynchronous -group {clk_src} -group {clk_dst}
set_input_delay 1 -clock clk_src [get_ports {start din rst_src}]
set_input_delay 1 -clock clk_dst [get_ports {rst_dst}]
`},quiz:[{type:"number",q:"How many synchronizers does the CDC check count?",answer:2,tol:0,unit:"",explain:"req \u2192 req_s1 \u2192 req_s2 in clk_dst, ack \u2192 ack_s1 \u2192 ack_s2 in clk_src.",try:!1},{type:"choice",q:"Why is data \u2192 dout OK?",options:["data is Gray coded","dout loads only on take, which comes from the synchronized req","data has a reset","data is 8 bits"],answer:1,explain:"Qualified by synchronized enable: the data is stable while req is high.",try:!1},{type:"number",q:"Simulate: how long does one transfer take on average (total time / 12 words)?",answer:239,tol:1,unit:"ns",explain:"2868.0 ns / 12 = 239 ns, about 7.7 destination cycles of 31 ns.",try:!1},{type:"number",q:"Try it: set TDST = 10.0 in tb_handshake.v. How long do the 12 words take now?",answer:1775,tol:1,unit:"ns",explain:"1775.0 ns: a faster destination closes the loop sooner. The handshake adapts to any clock ratio without changes.",try:!0},{type:"choice",q:"What is the main cost of a 4-phase handshake?",options:["It needs a FIFO","Low throughput: each word waits for two round trips through synchronizers","It needs related clocks","It cannot carry a bus"],answer:1,explain:"Use a FIFO when you need one word per clock.",try:!1}]},{id:"cdc-fifo",group:"CDC workshop",tag:"Day 4 \xB7 Lab 8",title:"Asynchronous FIFO",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 8: asynchronous FIFO with Gray-coded pointers. Day 4.
# The write and read pointers cross to the other clock as Gray codes, each bit through a
# 2-flop synchronizer. Run the check: why are the pointers only cautions? Then simulate.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog async_fifo.v
hierarchy -check -top async_fifo
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"async_fifo.v":`// Lab 8: asynchronous FIFO with Gray-coded pointers (depth 8, width 8).
// Each pointer crosses to the other clock as a Gray code through a 2-flop synchronizer:
// only one bit changes per increment, so a pointer can never be read as a wrong value,
// only as the old one or the new one.
\`timescale 1ns/1ps
module async_fifo #(parameter W = 8, A = 3) (
  input              wclk, wrst, winc,
  input      [W-1:0] wdata,
  output reg         wfull,
  input              rclk, rrst, rinc,
  output     [W-1:0] rdata,
  output reg         rempty
);
  reg [W-1:0] mem [0:(1<<A)-1];

  // ---------- write side ----------
  reg  [A:0] wbin, wptr;                 // binary and Gray write pointers
  reg  [A:0] wq1_rptr, wq2_rptr;         // read pointer synchronized into wclk
  wire [A:0] wbin_next  = wbin + (winc & ~wfull);
  wire [A:0] wgray_next = (wbin_next >> 1) ^ wbin_next;
  always @(posedge wclk)
    if (wrst) begin wbin <= 0; wptr <= 0; wfull <= 1'b0; end
    else begin
      wbin <= wbin_next; wptr <= wgray_next;
      wfull <= (wgray_next == {~wq2_rptr[A:A-1], wq2_rptr[A-2:0]});
    end
  always @(posedge wclk)
    if (winc && !wfull) mem[wbin[A-1:0]] <= wdata;
  always @(posedge wclk)
    if (wrst) {wq2_rptr, wq1_rptr} <= 0; else {wq2_rptr, wq1_rptr} <= {wq1_rptr, rptr};

  // ---------- read side ----------
  reg  [A:0] rbin, rptr;
  reg  [A:0] rq1_wptr, rq2_wptr;         // write pointer synchronized into rclk
  wire [A:0] rbin_next  = rbin + (rinc & ~rempty);
  wire [A:0] rgray_next = (rbin_next >> 1) ^ rbin_next;
  always @(posedge rclk)
    if (rrst) begin rbin <= 0; rptr <= 0; rempty <= 1'b1; end
    else begin
      rbin <= rbin_next; rptr <= rgray_next;
      rempty <= (rgray_next == rq2_wptr);
    end
  always @(posedge rclk)
    if (rrst) {rq2_wptr, rq1_wptr} <= 0; else {rq2_wptr, rq1_wptr} <= {rq1_wptr, wptr};
  assign rdata = mem[rbin[A-1:0]];
endmodule
`,"tb_async_fifo.v":`\`timescale 1ns/1ps
module tb_async_fifo;
  parameter N = 60;
  reg wclk = 0, rclk = 0, wrst = 1, rrst = 1, winc = 0, rinc = 0;
  reg [7:0] wdata = 0;
  wire [7:0] rdata; wire wfull, rempty;
  always #3.5 wclk = ~wclk;    //  7 ns
  always #5.5 rclk = ~rclk;    // 11 ns
  async_fifo dut (.*);

  reg [7:0] model [0:N-1];
  integer nw = 0, nr = 0, errors = 0, seed = 3, full_seen = 0, empty_seen = 0;
  // Writer: random gaps, never writes when full
  always @(posedge wclk) if (!wrst) begin
    if (wfull) full_seen = full_seen + 1;
    if (nw < N && !wfull && ($random(seed) & 1)) begin winc <= 1; wdata <= $random(seed); end
    else winc <= 0;
    if (winc && !wfull) begin model[nw] = wdata; nw = nw + 1; end
  end
  // Reader: random gaps, never reads when empty
  always @(posedge rclk) if (!rrst) begin
    if (rempty) empty_seen = empty_seen + 1;
    if (rinc && !rempty) begin
      if (rdata !== model[nr]) begin errors = errors + 1; $display("ERROR: word %0d expected %h, got %h", nr, model[nr], rdata); end
      nr = nr + 1;
    end
    rinc <= ($random(seed) % 3 == 0);
  end
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_async_fifo);
    repeat (3) @(posedge rclk); wrst = 0; rrst = 0;
    wait (nr == N);
    repeat (4) @(posedge rclk);
    $display("Wrote %0d, read %0d, %0d error(s); full seen %0d cycles, empty seen %0d cycles", nw, nr, errors, full_seen, empty_seen);
    if (nr == N && errors == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
  initial begin #200000 $display("FAIL: timeout"); $finish; end
endmodule
`,"fifo.sdc":`create_clock -name wclk -period 7  [get_ports wclk]
create_clock -name rclk -period 11 [get_ports rclk]
set_clock_groups -asynchronous -group {wclk} -group {rclk}
set_input_delay 1 -clock wclk [get_ports {wrst winc wdata}]
set_input_delay 1 -clock rclk [get_ports {rrst rinc}]
`},quiz:[{type:"number",q:"How many cautions does the CDC check report?",answer:2,tol:0,unit:"",explain:"One per pointer: wptr \u2192 rq1_wptr and rptr \u2192 wq1_rptr, each bit synchronized separately.",try:!1},{type:"choice",q:"Why is a bus synchronized bit by bit safe for these pointers?",options:["The pointers are binary","They are Gray coded: only one bit changes per increment, so the destination sees the old or the new value","The pointers have a reset","The clocks are related"],answer:1,explain:"With a binary pointer, 0111 \u2192 1000 changes four bits; a skewed capture could read any mix, such as 1111.",try:!1},{type:"number",q:"How many bits wide is each pointer (address bits plus one)?",answer:4,tol:0,unit:"",explain:"A = 3 for depth 8, plus one wrap bit to tell full from empty.",try:!1},{type:"number",q:"Simulate: for how many write-clock cycles is the FIFO full?",answer:102,tol:0,unit:"",explain:"The 7 ns writer is faster than the 11 ns reader, so the FIFO fills up and the writer waits.",try:!1},{type:"number",q:"Try it: make the read clock 5 ns (always #2.5 rclk = ~rclk). How many cycles is the FIFO full now?",answer:0,tol:0,unit:"",explain:"The reader is now faster than the writer, so the FIFO never fills; empty is seen for 42 cycles instead.",try:!0}]},{id:"cdc-assert",group:"CDC workshop",tag:"Day 5 \xB7 Lab 9",title:"CDC assertions",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 9: CDC assertions. Day 5.
# Structural checks cannot see protocol bugs. tb_assertions.v adds three checks to the
# handshake from lab 7: A1 data stable while req is high, A2 req falls only after ack,
# A3 req holds for at least 2 destination clock periods (pulse width).
# Simulate with BUG = 0, then set BUG = 1 and BUG = 2 in tb_assertions.v.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog handshake_bug.v
hierarchy -check -top handshake_bug
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"handshake_bug.v":`// Lab 9: the handshake from lab 7, with two bugs you can switch on (parameter BUG).
//   BUG = 1: the source keeps loading din while req is high (data not stable)
//   BUG = 2: the source drops req after one cycle without waiting for ack
//   source: hold data, raise req;  destination: see req, take data, raise ack
//   source: see ack, drop req;     destination: see req low, drop ack
// Only req and ack cross through synchronizers; data is stable while req is high.
\`timescale 1ns/1ps
module handshake_bug #(parameter BUG = 0) (
  input            clk_src, rst_src, clk_dst, rst_dst,
  input            start,              // request to send din (clk_src)
  input      [7:0] din,
  output           busy,               // high until the transfer completes
  output reg [7:0] dout,
  output reg       dvalid
);
  // ---------------- source side ----------------
  reg [7:0] data;
  reg       req;
  reg       ack_s1, ack_s2;
  always @(posedge clk_src) begin
    if (rst_src) {ack_s1, ack_s2} <= 2'b00;
    else         {ack_s1, ack_s2} <= {ack, ack_s1};
  end
  localparam IDLE = 2'd0, REQ = 2'd1, WAIT_LOW = 2'd2;
  reg [1:0] st;
  always @(posedge clk_src)
    if (rst_src) begin st <= IDLE; req <= 1'b0; data <= 8'h00; end
    else case (st)
      IDLE:     if (start) begin data <= din; req <= 1'b1; st <= REQ; end
      REQ: begin
                  if (BUG == 1) data <= din;                          // bug 1
                  if (ack_s2 || BUG == 2) begin req <= 1'b0; st <= WAIT_LOW; end   // bug 2
                end
      WAIT_LOW: if (!ack_s2) st <= IDLE;
      default:  st <= IDLE;
    endcase
  assign busy = (st != IDLE);

  // ---------------- destination side ----------------
  reg req_s1, req_s2, req_s3;
  reg ack;
  always @(posedge clk_dst)
    if (rst_dst) {req_s1, req_s2, req_s3} <= 3'b000;
    else         {req_s1, req_s2, req_s3} <= {req, req_s1, req_s2};
  wire take = req_s2 & ~req_s3;          // rising edge of the synchronized req
  always @(posedge clk_dst)
    if (rst_dst) begin dout <= 8'h00; dvalid <= 1'b0; ack <= 1'b0; end
    else begin
      dvalid <= take;
      if (take) dout <= data;            // data has been stable since req rose
      ack <= req_s2;                     // ack follows the synchronized req
    end
endmodule
`,"tb_assertions.v":`// Lab 9: CDC assertions. Three checks watch the handshake while the test runs.
// Change BUG to 1 or 2 and run again: which assertion catches each bug?
\`timescale 1ns/1ps
module tb_assertions;
  parameter BUG = 0;
  parameter N = 10;
  parameter real TSRC = 10.0, TDST = 31.0;
  reg clk_src = 0, clk_dst = 0, rst_src = 1, rst_dst = 1, start = 0;
  reg [7:0] din = 0;
  wire busy, dvalid; wire [7:0] dout;
  always #(TSRC/2) clk_src = ~clk_src;
  always #(TDST/2) clk_dst = ~clk_dst;
  handshake_bug #(.BUG(BUG)) dut (.*);

  integer fails1 = 0, fails2 = 0, fails3 = 0;

  // A1 data stability: while req stays high, the data crossing to clk_dst must not change
  reg req_q = 0; reg [7:0] data_q = 0;
  always @(posedge clk_src) begin
    if (!rst_src && req_q && dut.req)
      assert (dut.data == data_q) else begin fails1 = fails1 + 1; $error("A1 data changed while req is high at %t", $realtime); end
    req_q <= dut.req; data_q <= dut.data;
  end

  // A2 protocol: req may only fall after the synchronized ack has risen
  reg req_q2 = 0, ack_q2 = 0;
  always @(posedge clk_src) begin
    if (!rst_src && req_q2 && !dut.req)
      assert (ack_q2) else begin fails2 = fails2 + 1; $error("A2 req dropped before ack at %t", $realtime); end
    req_q2 <= dut.req; ack_q2 <= dut.ack_s2;
  end

  // A3 pulse width: a level crossing into clk_dst must hold for at least 2 clk_dst periods,
  // or the synchronizer may never see it
  realtime last_change = 0;
  always @(dut.req) if (!rst_src) begin
    if ($realtime - last_change < 2 * TDST)
      begin fails3 = fails3 + 1; $error("A3 req held only %0.1f ns (needs %0.1f ns) at %t", $realtime - last_change, 2 * TDST, $realtime); end
    last_change = $realtime;
  end

  // Stimulus: din changes every cycle; start whenever the handshake is idle
  integer i, seed = 5, got = 0;
  always @(posedge clk_src) din <= $random(seed);
  always @(posedge clk_dst) if (dvalid) got = got + 1;
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_assertions);
    repeat (3) @(posedge clk_dst); rst_src = 0; rst_dst = 0;
    for (i = 0; i < N; i = i + 1) begin
      @(posedge clk_src); while (busy) @(posedge clk_src);
      start <= 1; @(posedge clk_src) start <= 0;
    end
    while (busy) @(posedge clk_src);
    repeat (6) @(posedge clk_dst);
    $display("BUG=%0d: %0d transfers received. Assertion failures: A1=%0d A2=%0d A3=%0d", BUG, got, fails1, fails2, fails3);
    if (fails1 + fails2 + fails3 == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"handshake_bug.sdc":`create_clock -name clk_src -period 10 [get_ports clk_src]
create_clock -name clk_dst -period 31 [get_ports clk_dst]
set_clock_groups -asynchronous -group {clk_src} -group {clk_dst}
set_input_delay 1 -clock clk_src [get_ports {start din rst_src}]
set_input_delay 1 -clock clk_dst [get_ports {rst_dst}]
`},quiz:[{type:"choice",q:"Run the CDC check. What does it report for the buggy design?",options:["Violations on data","0 violations: the structure is the same as lab 7","A reset violation","A caution on req"],answer:1,explain:"The bugs are in the protocol (when signals change), not in the structure. That is why we need assertions.",try:!1},{type:"number",q:"Simulate with BUG = 0: how many assertion failures are there in total?",answer:0,tol:0,unit:"",explain:"PASS: all three assertions hold.",try:!1},{type:"number",q:"Try it: set BUG = 1. How many times does A1 fail?",answer:93,tol:0,unit:"",explain:"The source keeps loading din while req is high, so data changes while the destination may be sampling it.",try:!0},{type:"number",q:"Try it: set BUG = 2. How many transfers does the destination receive?",answer:2,tol:0,unit:"",explain:"req drops after one cycle, too short for the synchronizer to see reliably: A2 fails 8 times and A3 19 times, and most words are lost.",try:!0},{type:"choice",q:"Which assertion catches a pulse that is too short to cross?",options:["A1 data stability","A2 req after ack","A3 pulse width","None"],answer:2,explain:"A3 checks that req holds for at least 2 destination clock periods.",try:!1}]},{id:"x-consolidate",group:"Expert CDC & FIFO",tag:"Expert lab 1",title:"Consolidation and the metastability model",script:"check_cdc.ys",files:{"check_cdc.ys":`# Expert lab 1: passing multiple control signals. Consolidation.
# sync2.sv is a 2-flop synchronizer with a simulation model of metastability: a bit that
# changes less than 2 ns before the clock edge may arrive one cycle late. Plain RTL
# simulation hides most CDC bugs; this model exposes them.
# Run the CDC check, then simulate. Then set CONSOLIDATE = 1 in consolidate.sv and run both again.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog -sv sync2.sv consolidate.sv
hierarchy -check -top consolidate
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"consolidate.sv":`// Expert lab 1: passing two control signals. Consolidation.
// Naming convention: every signal starts with the letter of its clock domain
// (a_* is in aclk, b_* is in bclk), so each crossing is visible in the code.
// a_load and a_en must act together in bclk: b_go = load AND enable.
//   CONSOLIDATE = 0: both bits are synchronized separately, then combined in bclk.
//   CONSOLIDATE = 1: they are combined in aclk and ONE bit is synchronized.
\`timescale 1ns/1ps
module consolidate #(parameter bit CONSOLIDATE = 0) (
  input  logic aclk, arst_n, a_load, a_en,
  input  logic bclk, brst_n,
  output logic b_go,        // both commands seen together
  output logic b_partial    // only one of the two seen: a broken state
);
  logic a_load_q, a_en_q, a_go_q;
  always_ff @(posedge aclk or negedge arst_n)
    if (!arst_n) {a_load_q, a_en_q, a_go_q} <= '0;
    else begin
      a_load_q <= a_load;
      a_en_q   <= a_en;
      a_go_q   <= a_load & a_en;
    end

  if (CONSOLIDATE) begin : g_one
    logic b_go_s;
    sync2 #(.W(1), .SEED(11)) u_go (.clk(bclk), .rst_n(brst_n), .d(a_go_q), .q(b_go_s));
    assign b_go = b_go_s;
    assign b_partial = 1'b0;
  end else begin : g_two
    logic b_load_s, b_en_s;
    sync2 #(.W(1), .SEED(11)) u_load (.clk(bclk), .rst_n(brst_n), .d(a_load_q), .q(b_load_s));
    sync2 #(.W(1), .SEED(23)) u_en   (.clk(bclk), .rst_n(brst_n), .d(a_en_q),   .q(b_en_s));
    assign b_go      = b_load_s & b_en_s;
    assign b_partial = b_load_s ^ b_en_s;
  end
endmodule
`,"sync2.sv":`// sync2: two-flop synchronizer with a simulation model of metastability.
// Synthesis (Yosys defines SYNTHESIS) sees two plain flops per bit.
\`timescale 1ns/1ps
module sync2 #(parameter int W = 1, parameter int SEED = 1) (
  input  logic         clk, rst_n,
  input  logic [W-1:0] d,
  output logic [W-1:0] q
);
  logic [W-1:0] s1;
\`ifdef SYNTHESIS
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else        {q, s1} <= {s1, d};
\`else
  // A real flop whose input changes just before the clock edge (inside its setup/hold
  // window) can go metastable and settle to the old OR the new value. Zero-delay RTL
  // simulation never shows this. With RANDOM_DELAY = 1, a bit that changed less than
  // WINDOW ns before the edge is captured, at random, one cycle late. Designs that need
  // two bits to arrive in the same cycle then fail in simulation too.
  // Set RANDOM_DELAY = 0 to see the ideal behaviour.
  localparam bit  RANDOM_DELAY = 1;
  localparam real WINDOW = 2.0;
  integer  seed = SEED;
  realtime t_change [W];
  for (genvar i = 0; i < W; i++) begin : g_watch
    initial t_change[i] = -1000.0;
    always @(d[i]) t_change[i] = $realtime;
  end
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else begin
      for (int i = 0; i < W; i++)
        s1[i] <= (RANDOM_DELAY && $realtime - t_change[i] < WINDOW && ($random(seed) & 1)) ? s1[i] : d[i];
      q <= s1;
    end
\`endif
endmodule
`,"tb_consolidate.sv":`// Sends N commands. Each command raises a_load and a_en together for 6 aclk cycles.
\`timescale 1ns/1ps
module tb_consolidate;
  parameter int N = 40;
  logic aclk = 0, bclk = 0, arst_n = 0, brst_n = 0, a_load = 0, a_en = 0;
  logic b_go, b_partial;
  always #5 aclk = ~aclk;     // 10 ns
  always #6.85 bclk = ~bclk;  // 13.7 ns
  consolidate dut (.*);           // CONSOLIDATE comes from consolidate.sv

  int gos = 0, partial = 0; logic go_q = 0;
  always @(posedge bclk) begin
    if (b_go && !go_q) gos++;
    if (b_partial) partial++;
    go_q <= b_go;
  end
  initial begin
    $dumpfile("waves.vcd"); $dumpvars(0, tb_consolidate);
    repeat (3) @(posedge bclk); arst_n = 1; brst_n = 1;
    repeat (N) begin
      @(posedge aclk) {a_load, a_en} <= 2'b11;
      repeat (6) @(posedge aclk);
      {a_load, a_en} <= 2'b00;
      repeat (6) @(posedge aclk);
    end
    repeat (6) @(posedge bclk);
    $display("Sent %0d commands, b_go rose %0d times, b_partial high for %0d bclk cycles", N, gos, partial);
    if (gos == N && partial == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"consolidate.sdc":`create_clock -name aclk -period 10 [get_ports aclk]
create_clock -name bclk -period 13.7 [get_ports bclk]
set_clock_groups -asynchronous -group {aclk} -group {bclk}
set_input_delay 1 -clock aclk [get_ports {a_load a_en}]
# arst_n and brst_n come from reset synchronizers outside this block
set_input_delay 0 -clock aclk [get_ports arst_n]
set_input_delay 0 -clock bclk [get_ports brst_n]
`},quiz:[{type:"choice",q:"What does the CDC check report for b_go = b_load_s & b_en_s?",options:["Unsynchronized crossing","Reconvergence caution","Nothing: both bits are synchronized","Logic before synchronizer"],answer:1,explain:"Each bit is safely synchronized, but the two can arrive one cycle apart, so their AND can be briefly wrong.",try:!1},{type:"number",q:"Simulate: for how many bclk cycles is b_partial high?",answer:5,tol:0,unit:"",explain:"Five cycles where only one of the two commands had arrived: a state the source never sent.",try:!1},{type:"number",q:"Try it: set RANDOM_DELAY = 0 in sync2.sv and simulate. For how many cycles is b_partial high now?",answer:0,tol:0,unit:"",explain:"The bug is still in the design, but zero-delay simulation hides it. That is why a metastability model belongs in the synchronizer model used for simulation.",try:!0},{type:"number",q:"Try it: put RANDOM_DELAY back to 1 and set CONSOLIDATE = 1 in consolidate.sv. How many cautions does the CDC check show?",answer:0,tol:0,unit:"",explain:"a_load & a_en is computed and registered in aclk, and one bit crosses. One signal cannot arrive in two different cycles.",try:!0},{type:"choice",q:"Why does every signal name start with a_ or b_?",options:["Synthesis needs it","It shows the clock domain of each signal, so a crossing is visible wherever an a_ signal is used in a bclk block","It is required by SystemVerilog","It sets the clock in SDC"],answer:1,explain:"A naming convention by clock domain makes crossings easy to review, and simple to find with scripts for timing constraints.",try:!1},{type:"choice",q:"The synchronizer flops in sync2 have a reset. What would you see in simulation without it?",options:["Nothing different","q is X until real data has passed through both stages, and the X can spread into the logic it feeds","A compile error","The synchronizer would add a cycle"],answer:1,explain:"X-propagation: un-reset flops start as X in simulation. Reset synchronizer flops, or make sure nothing uses their output before it is known.",try:!1}]},{id:"x-mcp",group:"Expert CDC & FIFO",tag:"Expert lab 2",title:"MCP formulation with acknowledge",script:"check_cdc.ys",files:{"check_cdc.ys":`# Expert lab 2: controlled multi-cycle path (MCP) formulation with feedback.
# The 8-bit data is not synchronized. It is held stable in aclk while one toggle (a_en)
# crosses to bclk and tells it to load. bclk answers with a toggle (b_ack) that crosses back.
# Each change of a toggle is one event (2-phase), so there is no return-to-zero step.
# Run the CDC check, then simulate.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog -sv sync2.sv mcp.sv
hierarchy -check -top mcp
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"mcp.sv":`// Expert lab 2: multi-cycle path (MCP) formulation with acknowledge feedback.
// The data bus a_data is NOT synchronized. It is held stable in aclk, and a single
// control bit tells bclk when to load it. The control is a toggle (2-phase): each change
// means "new data". bclk answers with its own toggle (the acknowledge), so aclk knows
// when it may change the data again. Every data bit is a multi-cycle path.
\`timescale 1ns/1ps
module mcp (
  // aclk side
  input  logic       aclk, arst_n,
  input  logic       a_send,          // one-cycle request; only accepted when a_ready
  input  logic [7:0] a_datain,
  output logic       a_ready,         // high when a new word can be sent
  // bclk side
  input  logic       bclk, brst_n,
  output logic [7:0] b_data,
  output logic       b_valid          // one-cycle pulse when b_data is new
);
  // ---------- aclk: hold the data, toggle a_en ----------
  logic [7:0] a_data;
  logic       a_en, a_ack;            // a_ack: b_ack synchronized into aclk
  logic       a_ack_q;
  wire        a_load = a_send & a_ready;
  always_ff @(posedge aclk or negedge arst_n)
    if (!arst_n) begin a_data <= '0; a_en <= 1'b0; a_ready <= 1'b1; a_ack_q <= 1'b0; end
    else begin
      a_ack_q <= a_ack;
      if (a_load) begin a_data <= a_datain; a_en <= ~a_en; a_ready <= 1'b0; end
      else if (a_ack != a_ack_q) a_ready <= 1'b1;      // acknowledge toggled: free again
    end

  // ---------- bclk: see the toggle, load the data, toggle b_ack back ----------
  logic b_en, b_en_q, b_ack;
  sync2 #(.W(1), .SEED(5)) u_a2b (.clk(bclk), .rst_n(brst_n), .d(a_en), .q(b_en));
  wire b_load = b_en ^ b_en_q;                         // the toggle changed
  always_ff @(posedge bclk or negedge brst_n)
    if (!brst_n) begin b_en_q <= 1'b0; b_data <= '0; b_valid <= 1'b0; b_ack <= 1'b0; end
    else begin
      b_en_q  <= b_en;
      b_valid <= b_load;
      if (b_load) begin b_data <= a_data; b_ack <= ~b_ack; end   // a_data has been stable for 2+ bclk cycles
    end
  sync2 #(.W(1), .SEED(9)) u_b2a (.clk(aclk), .rst_n(arst_n), .d(b_ack), .q(a_ack));
endmodule
`,"sync2.sv":`// sync2: two-flop synchronizer with a simulation model of metastability.
// Synthesis (Yosys defines SYNTHESIS) sees two plain flops per bit.
\`timescale 1ns/1ps
module sync2 #(parameter int W = 1, parameter int SEED = 1) (
  input  logic         clk, rst_n,
  input  logic [W-1:0] d,
  output logic [W-1:0] q
);
  logic [W-1:0] s1;
\`ifdef SYNTHESIS
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else        {q, s1} <= {s1, d};
\`else
  // A real flop whose input changes just before the clock edge (inside its setup/hold
  // window) can go metastable and settle to the old OR the new value. Zero-delay RTL
  // simulation never shows this. With RANDOM_DELAY = 1, a bit that changed less than
  // WINDOW ns before the edge is captured, at random, one cycle late. Designs that need
  // two bits to arrive in the same cycle then fail in simulation too.
  // Set RANDOM_DELAY = 0 to see the ideal behaviour.
  localparam bit  RANDOM_DELAY = 1;
  localparam real WINDOW = 2.0;
  integer  seed = SEED;
  realtime t_change [W];
  for (genvar i = 0; i < W; i++) begin : g_watch
    initial t_change[i] = -1000.0;
    always @(d[i]) t_change[i] = $realtime;
  end
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else begin
      for (int i = 0; i < W; i++)
        s1[i] <= (RANDOM_DELAY && $realtime - t_change[i] < WINDOW && ($random(seed) & 1)) ? s1[i] : d[i];
      q <= s1;
    end
\`endif
endmodule
`,"tb_mcp.sv":`// Sends N random words as fast as a_ready allows and checks every word in bclk.
\`timescale 1ns/1ps
module tb_mcp;
  parameter int N = 12;
  parameter real TA = 10.0, TB = 31.0;    // same clocks as the 4-phase handshake lab
  logic aclk = 0, bclk = 0, arst_n = 0, brst_n = 0, a_send = 0;
  logic [7:0] a_datain = 0, b_data; logic a_ready, b_valid;
  always #(TA/2) aclk = ~aclk;
  always #(TB/2) bclk = ~bclk;
  mcp dut (.*);

  logic [7:0] sent [$];
  int got = 0, errors = 0, seed = 3; realtime t0;
  always @(posedge bclk) if (b_valid) begin
    if (b_data !== sent[got]) begin errors++; $display("ERROR: word %0d expected %h, got %h", got, sent[got], b_data); end
    got++;
  end
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_mcp);
    repeat (3) @(posedge bclk); arst_n = 1; brst_n = 1;
    @(posedge aclk); t0 = $realtime;
    for (int i = 0; i < N; i++) begin
      while (!a_ready) @(posedge aclk);
      a_datain <= $random(seed); a_send <= 1;
      @(posedge aclk); sent.push_back(a_datain); a_send <= 0;
      @(posedge aclk);
    end
    fork
      while (got < N) @(posedge bclk);
      repeat (40) @(posedge bclk);        // give up if words are lost
    join_any
    disable fork;
    $display("Sent %0d words in %t, received %0d, %0d error(s)", N, $realtime - t0, got, errors);
    if (got == N && errors == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"mcp.sdc":`create_clock -name aclk -period 10 [get_ports aclk]
create_clock -name bclk -period 31 [get_ports bclk]
set_clock_groups -asynchronous -group {aclk} -group {bclk}
set_input_delay 1 -clock aclk [get_ports {a_send a_datain}]
# arst_n and brst_n come from reset synchronizers outside this block
set_input_delay 0 -clock aclk [get_ports arst_n]
set_input_delay 0 -clock bclk [get_ports brst_n]
`},quiz:[{type:"choice",q:"How does the checker classify a_data \u2192 b_data?",options:["Unsynchronized crossing","Bus synchronized bit by bit","Qualified by synchronized enable","Reconvergence"],answer:2,explain:"b_data loads only on b_load, which comes from the synchronized toggle. The data bits are multi-cycle paths: stable for 2+ bclk cycles before they are used.",try:!1},{type:"number",q:"Simulate: how long do the 12 words take?",answer:1480.5,tol:1,unit:"ns",explain:"1480.5 ns. The 4-phase handshake in lab 7 needed 2868 ns with the same 10 ns / 31 ns clocks: 2-phase needs one round trip per word instead of two.",try:!1},{type:"number",q:"Try it: set TB = 10.0 in tb_mcp.sv. How long do the 12 words take now?",answer:930,tol:1,unit:"ns",explain:"930.0 ns: the feedback loop is shorter with a faster destination clock.",try:!0},{type:"number",q:"Try it: in mcp.sv, replace  else if (a_ack != a_ack_q) a_ready <= 1'b1;  with  else a_ready <= 1'b1;  (do not wait for the acknowledge). How many words arrive with errors?",answer:11,tol:0,unit:"",explain:"Without feedback the source changes a_data while bclk may still be loading it, and toggles can be missed. The CDC check still shows 0 violations: only simulation catches it.",try:!0}]},{id:"x-gray",group:"Expert CDC & FIFO",tag:"Expert lab 3",title:"Gray code counters",script:"check_cdc.ys",files:{"check_cdc.ys":`# Expert lab 3: Gray codes and Gray code counters.
# A 4-bit count crosses to bclk with one synchronizer per bit. With GRAY = 0 the binary
# count crosses; with GRAY = 1 the Gray code crosses and bclk converts it back.
# The testbench checks that every value bclk sees is the last value or one more.
# Run the CDC check, simulate, then set GRAY = 1 in gray_cross.sv and simulate again.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog -sv sync2.sv gray_cross.sv
hierarchy -check -top gray_cross
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"gray_cross.sv":`// Expert lab 3: Gray codes and Gray code counters.
// A 4-bit counter in aclk is passed to bclk through one 2-flop synchronizer per bit.
//   GRAY = 0: the binary count crosses. 0111 -> 1000 changes 4 bits at once.
//   GRAY = 1: the Gray code crosses. Exactly one bit changes per count.
// bclk converts back to binary. If the bits of one count arrive in different cycles,
// bclk can see a value the counter never had.
\`timescale 1ns/1ps
module gray_cross #(parameter bit GRAY = 0, parameter int W = 4) (
  input  logic         aclk, arst_n, a_inc,
  input  logic         bclk, brst_n,
  output logic [W-1:0] b_count          // the count as seen in bclk (binary)
);
  function automatic logic [W-1:0] bin2gray(input logic [W-1:0] b);
    bin2gray = b ^ (b >> 1);
  endfunction
  function automatic logic [W-1:0] gray2bin(input logic [W-1:0] g);
    gray2bin[W-1] = g[W-1];
    for (int i = W - 2; i >= 0; i--) gray2bin[i] = gray2bin[i+1] ^ g[i];
  endfunction

  // aclk: binary counter and a registered copy of what crosses (no logic after the flop)
  logic [W-1:0] a_bin, a_ptr;
  always_ff @(posedge aclk or negedge arst_n)
    if (!arst_n) begin a_bin <= '0; a_ptr <= '0; end
    else if (a_inc) begin
      a_bin <= a_bin + 1'b1;
      a_ptr <= GRAY ? bin2gray(a_bin + 1'b1) : a_bin + 1'b1;
    end

  logic [W-1:0] b_ptr;
  sync2 #(.W(W), .SEED(17)) u_sync (.clk(bclk), .rst_n(brst_n), .d(a_ptr), .q(b_ptr));
  assign b_count = GRAY ? gray2bin(b_ptr) : b_ptr;
endmodule
`,"sync2.sv":`// sync2: two-flop synchronizer with a simulation model of metastability.
// Synthesis (Yosys defines SYNTHESIS) sees two plain flops per bit.
\`timescale 1ns/1ps
module sync2 #(parameter int W = 1, parameter int SEED = 1) (
  input  logic         clk, rst_n,
  input  logic [W-1:0] d,
  output logic [W-1:0] q
);
  logic [W-1:0] s1;
\`ifdef SYNTHESIS
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else        {q, s1} <= {s1, d};
\`else
  // A real flop whose input changes just before the clock edge (inside its setup/hold
  // window) can go metastable and settle to the old OR the new value. Zero-delay RTL
  // simulation never shows this. With RANDOM_DELAY = 1, a bit that changed less than
  // WINDOW ns before the edge is captured, at random, one cycle late. Designs that need
  // two bits to arrive in the same cycle then fail in simulation too.
  // Set RANDOM_DELAY = 0 to see the ideal behaviour.
  localparam bit  RANDOM_DELAY = 1;
  localparam real WINDOW = 2.0;
  integer  seed = SEED;
  realtime t_change [W];
  for (genvar i = 0; i < W; i++) begin : g_watch
    initial t_change[i] = -1000.0;
    always @(d[i]) t_change[i] = $realtime;
  end
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else begin
      for (int i = 0; i < W; i++)
        s1[i] <= (RANDOM_DELAY && $realtime - t_change[i] < WINDOW && ($random(seed) & 1)) ? s1[i] : d[i];
      q <= s1;
    end
\`endif
endmodule
`,"tb_gray_cross.sv":`// Counts in aclk every other cycle and checks every value bclk sees: it must be the same
// as last time or one more (bclk is faster, so it never misses a count).
\`timescale 1ns/1ps
module tb_gray_cross;
  parameter int N = 200;
  logic aclk = 0, bclk = 0, arst_n = 0, brst_n = 0, a_inc = 0;
  logic [3:0] b_count, last = 0;
  always #5 aclk = ~aclk;     // 10 ns
  always #3.15 bclk = ~bclk;  //  6.3 ns
  gray_cross dut (.*);            // GRAY comes from gray_cross.sv

  int bad = 0, samples = 0;
  always @(posedge bclk) if (brst_n) begin
    samples++;
    if (b_count != last && b_count != last + 4'd1) begin
      bad++;
      if (bad <= 5) $display("ERROR at %t: bclk saw %0d after %0d", $realtime, b_count, last);
    end
    last <= b_count;
  end
  initial begin
    $timeformat(-9, 1, " ns", 0);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_gray_cross);
    repeat (3) @(posedge aclk); arst_n = 1; brst_n = 1;
    repeat (N) begin @(posedge aclk) a_inc <= 1; @(posedge aclk) a_inc <= 0; end
    repeat (5) @(posedge bclk);
    $display("%0d bclk samples, %0d impossible value(s)", samples, bad);
    if (bad == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"gray_cross.sdc":`create_clock -name aclk -period 10 [get_ports aclk]
create_clock -name bclk -period 6.3 [get_ports bclk]
set_clock_groups -asynchronous -group {aclk} -group {bclk}
set_input_delay 1 -clock aclk [get_ports a_inc]
# arst_n and brst_n come from reset synchronizers outside this block
set_input_delay 0 -clock aclk [get_ports arst_n]
set_input_delay 0 -clock bclk [get_ports brst_n]
`},quiz:[{type:"choice",q:"The CDC check gives the same caution for GRAY = 0 and GRAY = 1. Why?",options:["It is a bug in the checker","A structural check sees 4 bits with 4 synchronizers; it cannot tell whether only one bit changes at a time","Gray codes need a FIFO","The SDC is wrong"],answer:1,explain:"Whether a bus is Gray coded is a property of how it changes over time. Prove it with simulation or a formal assertion.",try:!1},{type:"number",q:"Simulate with GRAY = 0: how many impossible values does bclk see?",answer:50,tol:0,unit:"",explain:"50 of 639 samples: bits of one count arrive in different cycles, for example 0111 \u2192 1000 read as 1111 for one cycle.",try:!1},{type:"number",q:"Try it: set GRAY = 1. How many impossible values now?",answer:0,tol:0,unit:"",explain:"Only one bit changes per count, so bclk sees either the old or the new value, never a mix.",try:!0},{type:"number",q:"What is the 4-bit Gray code of decimal 11 (binary 1011)? Answer in decimal.",answer:14,tol:0,unit:"",explain:"1011 ^ 0101 = 1110 = 14.",try:!1},{type:"choice",q:"Why is a_ptr a register, and not bin2gray(a_bin) computed after the flop?",options:["To save area","A combinational converter can glitch and change several bits on the way; the crossing signal must come straight from a flop","Yosys requires it","It makes the counter faster"],answer:1,explain:"The same rule as lab 3: no logic between the source flop and the synchronizer.",try:!1}]},{id:"x-fifo",group:"Expert CDC & FIFO",tag:"Expert lab 4",title:"2-clock FIFO, partitioned",script:"check_cdc.ys",files:{"check_cdc.ys":`# Expert lab 4: a 2-clock FIFO in SystemVerilog, partitioned into modules.
# Only the two sync2 instances cross clocks; every other module has a single clock. That
# keeps synthesis and timing scripts simple: each module is constrained by one clock.
# Each pointer has one extra bit to tell full from empty, and crosses as a Gray code.
# Run the CDC check, simulate, then set GRAY = 0 in fifo2.sv and simulate again.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog -sv sync2.sv fifo2.sv
hierarchy -check -top fifo2
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"fifo2.sv":`// Expert lab 4: a 2-clock FIFO, partitioned into small modules.
//   fifomem     the memory: written in wclk, read combinationally with the read address
//   wptr_full   write pointer and full flag (wclk only)
//   rptr_empty  read pointer and empty flag (rclk only)
//   sync2       the only modules that cross clocks: rptr into wclk, wptr into rclk
// Naming: w* signals are in wclk, r* signals are in rclk, wq2_* / rq2_* are synchronized.
// Each pointer has one extra bit (ASIZE+1) to tell full from empty.
//   GRAY = 1: pointers cross as Gray codes (one bit changes per step).
//   GRAY = 0: pointers cross as binary. Try it and simulate.
\`timescale 1ns/1ps
module fifo2 #(parameter int DSIZE = 8, ASIZE = 4, parameter bit GRAY = 1) (
  input  logic             wclk, wrst_n, winc,
  input  logic [DSIZE-1:0] wdata,
  output logic             wfull,
  input  logic             rclk, rrst_n, rinc,
  output logic [DSIZE-1:0] rdata,
  output logic             rempty
);
  logic [ASIZE-1:0] waddr, raddr;
  logic [ASIZE:0]   wptr, rptr, wq2_rptr, rq2_wptr;

  sync2 #(.W(ASIZE+1), .SEED(31)) sync_r2w (.clk(wclk), .rst_n(wrst_n), .d(rptr), .q(wq2_rptr));
  sync2 #(.W(ASIZE+1), .SEED(47)) sync_w2r (.clk(rclk), .rst_n(rrst_n), .d(wptr), .q(rq2_wptr));
  fifomem    #(DSIZE, ASIZE)       u_mem   (.*, .wclken(winc & ~wfull));
  rptr_empty #(ASIZE, GRAY)        u_rptr  (.*);
  wptr_full  #(ASIZE, GRAY)        u_wptr  (.*);
endmodule

module fifomem #(parameter int DSIZE = 8, ASIZE = 4) (
  input  logic             wclk, wclken,
  input  logic [ASIZE-1:0] waddr, raddr,
  input  logic [DSIZE-1:0] wdata,
  output logic [DSIZE-1:0] rdata
);
  logic [DSIZE-1:0] mem [0:(1<<ASIZE)-1];
  assign rdata = mem[raddr];
  always_ff @(posedge wclk) if (wclken) mem[waddr] <= wdata;
endmodule

module rptr_empty #(parameter int ASIZE = 4, parameter bit GRAY = 1) (
  input  logic             rclk, rrst_n, rinc,
  input  logic [ASIZE:0]   rq2_wptr,
  output logic             rempty,
  output logic [ASIZE-1:0] raddr,
  output logic [ASIZE:0]   rptr
);
  logic [ASIZE:0] rbin, rbinnext, rptrnext;
  assign rbinnext = rbin + (rinc & ~rempty);
  assign rptrnext = GRAY ? (rbinnext >> 1) ^ rbinnext : rbinnext;
  assign raddr    = rbin[ASIZE-1:0];
  always_ff @(posedge rclk or negedge rrst_n)
    if (!rrst_n) begin rbin <= '0; rptr <= '0; rempty <= 1'b1; end
    else begin
      rbin   <= rbinnext;
      rptr   <= rptrnext;
      rempty <= (rptrnext == rq2_wptr);          // empty: pointers equal
    end
endmodule

module wptr_full #(parameter int ASIZE = 4, parameter bit GRAY = 1) (
  input  logic             wclk, wrst_n, winc,
  input  logic [ASIZE:0]   wq2_rptr,
  output logic             wfull,
  output logic [ASIZE-1:0] waddr,
  output logic [ASIZE:0]   wptr
);
  logic [ASIZE:0] wbin, wbinnext, wptrnext, rfull;
  assign wbinnext = wbin + (winc & ~wfull);
  assign wptrnext = GRAY ? (wbinnext >> 1) ^ wbinnext : wbinnext;
  assign waddr    = wbin[ASIZE-1:0];
  // full: write pointer has wrapped once more than the read pointer.
  // Gray: top two bits inverted, the rest equal. Binary: top bit inverted, the rest equal.
  assign rfull = GRAY ? {~wq2_rptr[ASIZE:ASIZE-1], wq2_rptr[ASIZE-2:0]}
                      : {~wq2_rptr[ASIZE], wq2_rptr[ASIZE-1:0]};
  always_ff @(posedge wclk or negedge wrst_n)
    if (!wrst_n) begin wbin <= '0; wptr <= '0; wfull <= 1'b0; end
    else begin
      wbin  <= wbinnext;
      wptr  <= wptrnext;
      wfull <= (wptrnext == rfull);
    end
endmodule
`,"sync2.sv":`// sync2: two-flop synchronizer with a simulation model of metastability.
// Synthesis (Yosys defines SYNTHESIS) sees two plain flops per bit.
\`timescale 1ns/1ps
module sync2 #(parameter int W = 1, parameter int SEED = 1) (
  input  logic         clk, rst_n,
  input  logic [W-1:0] d,
  output logic [W-1:0] q
);
  logic [W-1:0] s1;
\`ifdef SYNTHESIS
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else        {q, s1} <= {s1, d};
\`else
  // A real flop whose input changes just before the clock edge (inside its setup/hold
  // window) can go metastable and settle to the old OR the new value. Zero-delay RTL
  // simulation never shows this. With RANDOM_DELAY = 1, a bit that changed less than
  // WINDOW ns before the edge is captured, at random, one cycle late. Designs that need
  // two bits to arrive in the same cycle then fail in simulation too.
  // Set RANDOM_DELAY = 0 to see the ideal behaviour.
  localparam bit  RANDOM_DELAY = 1;
  localparam real WINDOW = 2.0;
  integer  seed = SEED;
  realtime t_change [W];
  for (genvar i = 0; i < W; i++) begin : g_watch
    initial t_change[i] = -1000.0;
    always @(d[i]) t_change[i] = $realtime;
  end
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else begin
      for (int i = 0; i < W; i++)
        s1[i] <= (RANDOM_DELAY && $realtime - t_change[i] < WINDOW && ($random(seed) & 1)) ? s1[i] : d[i];
      q <= s1;
    end
\`endif
endmodule
`,"tb_fifo2.sv":`// Random writes in wclk, random reads in rclk, and a queue as the reference model.
\`timescale 1ns/1ps
module tb_fifo2;
  parameter int N = 300;
  logic wclk = 0, rclk = 0, wrst_n = 0, rrst_n = 0, winc = 0, rinc = 0;
  logic [7:0] wdata = 0, rdata; logic wfull, rempty;
  always #3.5 wclk = ~wclk;    //  7 ns
  always #5.5 rclk = ~rclk;    // 11 ns
  fifo2 dut (.*);                 // GRAY comes from fifo2.sv

  logic [7:0] model [$];
  int nw = 0, nr = 0, errors = 0, overflow = 0, underflow = 0, seed = 21;
  always @(posedge wclk) if (wrst_n) begin
    if (winc && !wfull) begin
      if (model.size() >= 16) overflow++;      // the FIFO already holds 16 words
      model.push_back(wdata); nw++;
    end
    winc  <= (nw < N) && ($random(seed) % 4 != 0);
    wdata <= $random(seed);
  end
  always @(posedge rclk) if (rrst_n) begin
    if (rinc && !rempty) begin
      if (model.size() == 0) underflow++;
      else begin
        logic [7:0] exp; exp = model.pop_front();
        if (rdata !== exp) begin errors++; if (errors <= 5) $display("ERROR: read %0d expected %h, got %h", nr, exp, rdata); end
      end
      nr++;
    end
    rinc <= ($random(seed) % 3 != 0);
  end
  // Watch the synchronized write pointer in rclk. It may lag the real write pointer, but it
  // must never run ahead of it or go backwards: such a value is one the pointer never had.
  function automatic logic [4:0] tobin(input logic [4:0] p);
    tobin = p;
    if (dut.GRAY) for (int i = 3; i >= 0; i--) tobin[i] = tobin[i+1] ^ p[i];
  endfunction
  logic [4:0] last_w = 0, now_w; int badptr = 0;
  always @(posedge rclk) if (rrst_n) begin
    now_w = tobin(dut.rq2_wptr);
    if (5'(now_w - last_w) > 5'(dut.u_wptr.wbin - last_w)) badptr++;
    last_w <= now_w;
  end
  initial begin
    $dumpfile("waves.vcd"); $dumpvars(0, tb_fifo2);
    repeat (3) @(posedge rclk); wrst_n = 1; rrst_n = 1;
    fork
      wait (nw == N && nr >= N);
      #20000;
    join_any
    repeat (4) @(posedge rclk);
    $display("Wrote %0d, read %0d: %0d data error(s), %0d overflow(s), %0d underflow(s)", nw, nr, errors, overflow, underflow);
    $display("Impossible write pointer values seen in rclk: %0d", badptr);
    if (nr == N && errors == 0 && overflow == 0 && underflow == 0 && badptr == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"fifo2.sdc":`create_clock -name wclk -period 7  [get_ports wclk]
create_clock -name rclk -period 11 [get_ports rclk]
set_clock_groups -asynchronous -group {wclk} -group {rclk}
set_input_delay 1 -clock wclk [get_ports {winc wdata}]
set_input_delay 1 -clock rclk [get_ports rinc]
# wrst_n and rrst_n come from reset synchronizers outside this block
set_input_delay 0 -clock wclk [get_ports wrst_n]
set_input_delay 0 -clock rclk [get_ports rrst_n]
`},quiz:[{type:"number",q:"How many bits does each pointer have (depth 16)?",answer:5,tol:0,unit:"",explain:"ASIZE = 4 address bits, plus one wrap bit.",try:!1},{type:"number",q:"How many synchronizers does the CDC check count?",answer:10,tol:0,unit:"",explain:"5 bits of rptr into wclk and 5 bits of wptr into rclk.",try:!1},{type:"choice",q:"When is the FIFO full, with Gray pointers?",options:["wptr == rptr","The top two bits of wptr are the inverse of the synchronized rptr and the rest are equal","The top bit differs only","wptr is all ones"],answer:1,explain:"The write pointer has wrapped once more than the read pointer. In Gray code that inverts the two most significant bits.",try:!1},{type:"number",q:"Simulate with GRAY = 1: how many impossible write pointer values are seen in rclk?",answer:0,tol:0,unit:"",explain:"The synchronized pointer may lag, but it is always a value the write pointer really had.",try:!1},{type:"number",q:"Try it: set GRAY = 0 in fifo2.sv and simulate. How many impossible write pointer values are seen?",answer:5,tol:0,unit:"",explain:"A binary pointer changes several bits at once, so rclk can see a pointer that is ahead of the real one: the FIFO could read a word that was never written. This run got lucky with the data, but the design is wrong.",try:!0},{type:"choice",q:"Why do the empty flag and the full flag each live in one clock domain?",options:["They are cheaper","Empty must be correct for the reader (rclk) and full for the writer (wclk); a stale synchronized pointer only makes them pessimistic, never wrong","Yosys needs it","Gray codes need it"],answer:1,explain:"Empty and full may clear a few cycles late: the FIFO stays safe, only a little slower.",try:!1}]},{id:"x-gls-sdf",group:"Expert CDC & FIFO",tag:"Expert lab 5",title:"Gate-level simulation with SDF: synchronizers and timing checks",script:"sim:tb_gls.v",files:{"tb_gls.v":`// Gate-level simulation of sync_cnt with SDF timing.
// aclk and bclk are asynchronous, so a_tog sometimes changes inside the setup/hold
// window of sync1_reg. In silicon the flop goes metastable for a moment and settles to 0
// or 1: that is exactly what the synchronizer is there for. In simulation the timing
// check fires and Q becomes X, the X passes through sync2_reg and the counter stays X.
//
// The fix is NOT to switch off timing checks everywhere (that hides real violations).
// Switch them off only on the first stage of each synchronizer. Remove the // below.
// In commercial simulators the same is done with a timing-check control file
// (VCS -optconfigfile, Xcelium -tfile) or by deleting the TIMINGCHECK of those
// instances from the SDF.
// \`define IGNORE_SYNC_TCHECK
\`timescale 1ns/1ps
module tb_gls;
  reg aclk = 0, bclk = 0, arst_n = 0, brst_n = 0, a_run = 1;
  wire [1:0] b_cnt;
  always #11.53 aclk = a_run ? ~aclk : 1'b0; // 23.06 ns, stopped at the end
  initial #3 forever #5 bclk = ~bclk;       // 10 ns, asynchronous to aclk
  sync_cnt dut (.aclk(aclk), .arst_n(arst_n), .bclk(bclk), .brst_n(brst_n), .b_cnt(b_cnt));

\`ifdef IGNORE_SYNC_TCHECK
  defparam dut.sync1_reg.TCHECK = 0;        // no setup/hold check on the synchronizer's first stage
\`endif

  integer a_edges = 0, x_cycles = 0, errors = 0;
  real t_first_x = -1;
  always @(posedge aclk) if (arst_n) a_edges = a_edges + 1;
  always @(posedge bclk) if (brst_n) begin
    if (^b_cnt === 1'bx) begin x_cycles = x_cycles + 1; if (t_first_x < 0) t_first_x = $realtime; end
  end
  initial begin
    $sdf_annotate("sync_cnt.sdf", dut);
    $dumpfile("waves.vcd"); $dumpvars(0, tb_gls);
    #20 arst_n = 1; brst_n = 1;
    #2400 a_run = 0;
    #60;                                     // let the last events pass the synchronizer
    $display("aclk toggled a_tog %0d times; b_cnt = %b (expected %0d mod 4 = %0d)", a_edges, b_cnt, a_edges, a_edges % 4);
    if (x_cycles) $display("b_cnt was X for %0d bclk cycles, first at %0.1f ns", x_cycles, t_first_x);
    if (x_cycles == 0 && b_cnt === a_edges % 4) $display("PASS");
    else $display("FAIL");
    $finish;
  end
endmodule
`,"sync_cnt.v":`// Gate-level netlist of sync_cnt (after synthesis and place and route).
// aclk: a_tog_reg toggles on every aclk edge (one event per edge).
// bclk: sync1_reg -> sync2_reg is the 2-flop synchronizer, sync3_reg + XOR detect each
//       toggle, and b_cnt counts the events (2 bits).
\`timescale 1ns/1ps
module sync_cnt (aclk, arst_n, bclk, brst_n, b_cnt);
  input  aclk, arst_n, bclk, brst_n;
  output [1:0] b_cnt;
  wire a_tog, a_tog_n, b_s1, b_s2, b_s3, b_pulse, n0, n1, c0;

  DFFR a_tog_reg (.CLK(aclk), .D(a_tog_n), .RN(arst_n), .Q(a_tog));
  INV  u_inv     (.A(a_tog), .Y(a_tog_n));

  DFFR sync1_reg (.CLK(bclk), .D(a_tog), .RN(brst_n), .Q(b_s1));   // first stage: D is asynchronous
  DFFR sync2_reg (.CLK(bclk), .D(b_s1),  .RN(brst_n), .Q(b_s2));
  DFFR sync3_reg (.CLK(bclk), .D(b_s2),  .RN(brst_n), .Q(b_s3));
  XOR2 u_edge    (.A(b_s2), .B(b_s3), .Y(b_pulse));

  XOR2 u_x0      (.A(b_cnt[0]), .B(b_pulse), .Y(n0));
  AND2 u_c0      (.A(b_cnt[0]), .B(b_pulse), .Y(c0));
  XOR2 u_x1      (.A(b_cnt[1]), .B(c0), .Y(n1));
  DFFR cnt0_reg  (.CLK(bclk), .D(n0), .RN(brst_n), .Q(b_cnt[0]));
  DFFR cnt1_reg  (.CLK(bclk), .D(n1), .RN(brst_n), .Q(b_cnt[1]));
endmodule
`,"cells.v":`// Simulation models of the standard cells used by sync_cnt.v, written the way a
// vendor cell library writes them: a functional model, a specify block with the
// timing arcs that the SDF file overwrites, and setup/hold checks that drive Q to X
// when they fail (the "notifier").
// Commercial simulators do the checks with $setuphold(posedge CLK, D, tsu, th, notifier)
// in the specify block. Icarus Verilog ignores timing checks, so DFFR spells them out.
\`timescale 1ns/1ps

\`celldefine
module DFFR (input CLK, D, RN, output Q);      // D flip-flop, active-low async reset
  parameter TCHECK = 1;                         // 1: setup/hold checks on; 0: off for this instance
  parameter real TSU = 0.15, TH = 0.10;         // setup and hold time, ns
  reg q;
  realtime t_d = -1.0e9, t_clk = -1.0e9;
  always @(D) begin
    t_d = $realtime;
    if (TCHECK && RN === 1'b1 && $realtime - t_clk < TH) begin
      $display("%0.3f ns: Timing violation $hold(posedge CLK, D) in %m: D changed %0.3f ns after CLK, hold is %0.2f", $realtime, $realtime - t_clk, TH);
      q <= 1'bx;                                // the notifier: Q becomes unknown
    end
  end
  always @(posedge CLK or negedge RN)
    if (RN !== 1'b1) q <= 1'b0;
    else begin
      t_clk = $realtime;
      if (TCHECK && $realtime - t_d < TSU) begin
        $display("%0.3f ns: Timing violation $setup(D, posedge CLK) in %m: D changed %0.3f ns before CLK, setup is %0.2f", $realtime, $realtime - t_d, TSU);
        q <= 1'bx;
      end else q <= D;
    end
  assign Q = q;
  specify
    (posedge CLK => (Q +: D)) = (0.30, 0.30);
    (negedge RN => (Q +: 1'b0)) = (0.20, 0.20);
  endspecify
endmodule
\`endcelldefine

\`celldefine
module INV (input A, output Y);
  assign Y = ~A;
  specify (A => Y) = (0.05, 0.05); endspecify
endmodule
\`endcelldefine

\`celldefine
module XOR2 (input A, B, output Y);
  assign Y = A ^ B;
  specify (A => Y) = (0.10, 0.10); (B => Y) = (0.10, 0.10); endspecify
endmodule
\`endcelldefine

\`celldefine
module AND2 (input A, B, output Y);
  assign Y = A & B;
  specify (A => Y) = (0.08, 0.08); (B => Y) = (0.08, 0.08); endspecify
endmodule
\`endcelldefine
`,"sync_cnt.sdf":`(DELAYFILE
  (SDFVERSION "3.0")
  (DESIGN "sync_cnt")
  (VENDOR "vlsideepdive")
  (PROGRAM "example STA tool")
  (DIVIDER /)
  (TIMESCALE 1ns)
  (CELL (CELLTYPE "DFFR") (INSTANCE a_tog_reg)
    (DELAY (ABSOLUTE (IOPATH (posedge CLK) Q (0.349:0.349:0.349) (0.349:0.349:0.349)) (IOPATH (negedge RN) Q (0.22:0.22:0.22) (0.22:0.22:0.22))))
    (TIMINGCHECK (SETUPHOLD D (posedge CLK) (0.15:0.15:0.15) (0.10:0.10:0.10))))
  (CELL (CELLTYPE "INV") (INSTANCE u_inv)
    (DELAY (ABSOLUTE (IOPATH A Y (0.063:0.063:0.063) (0.063:0.063:0.063)))))
  (CELL (CELLTYPE "DFFR") (INSTANCE sync1_reg)
    (DELAY (ABSOLUTE (IOPATH (posedge CLK) Q (0.356:0.356:0.356) (0.356:0.356:0.356)) (IOPATH (negedge RN) Q (0.22:0.22:0.22) (0.22:0.22:0.22))))
    (TIMINGCHECK (SETUPHOLD D (posedge CLK) (0.15:0.15:0.15) (0.10:0.10:0.10))))
  (CELL (CELLTYPE "DFFR") (INSTANCE sync2_reg)
    (DELAY (ABSOLUTE (IOPATH (posedge CLK) Q (0.346:0.346:0.346) (0.346:0.346:0.346)) (IOPATH (negedge RN) Q (0.22:0.22:0.22) (0.22:0.22:0.22))))
    (TIMINGCHECK (SETUPHOLD D (posedge CLK) (0.15:0.15:0.15) (0.10:0.10:0.10))))
  (CELL (CELLTYPE "DFFR") (INSTANCE sync3_reg)
    (DELAY (ABSOLUTE (IOPATH (posedge CLK) Q (0.343:0.343:0.343) (0.343:0.343:0.343)) (IOPATH (negedge RN) Q (0.22:0.22:0.22) (0.22:0.22:0.22))))
    (TIMINGCHECK (SETUPHOLD D (posedge CLK) (0.15:0.15:0.15) (0.10:0.10:0.10))))
  (CELL (CELLTYPE "XOR2") (INSTANCE u_edge)
    (DELAY (ABSOLUTE (IOPATH A Y (0.152:0.152:0.152) (0.152:0.152:0.152)) (IOPATH B Y (0.152:0.152:0.152) (0.152:0.152:0.152)))))
  (CELL (CELLTYPE "XOR2") (INSTANCE u_x0)
    (DELAY (ABSOLUTE (IOPATH A Y (0.168:0.168:0.168) (0.168:0.168:0.168)) (IOPATH B Y (0.168:0.168:0.168) (0.168:0.168:0.168)))))
  (CELL (CELLTYPE "AND2") (INSTANCE u_c0)
    (DELAY (ABSOLUTE (IOPATH A Y (0.134:0.134:0.134) (0.134:0.134:0.134)) (IOPATH B Y (0.134:0.134:0.134) (0.134:0.134:0.134)))))
  (CELL (CELLTYPE "XOR2") (INSTANCE u_x1)
    (DELAY (ABSOLUTE (IOPATH A Y (0.163:0.163:0.163) (0.163:0.163:0.163)) (IOPATH B Y (0.163:0.163:0.163) (0.163:0.163:0.163)))))
  (CELL (CELLTYPE "DFFR") (INSTANCE cnt0_reg)
    (DELAY (ABSOLUTE (IOPATH (posedge CLK) Q (0.349:0.349:0.349) (0.349:0.349:0.349)) (IOPATH (negedge RN) Q (0.22:0.22:0.22) (0.22:0.22:0.22))))
    (TIMINGCHECK (SETUPHOLD D (posedge CLK) (0.15:0.15:0.15) (0.10:0.10:0.10))))
  (CELL (CELLTYPE "DFFR") (INSTANCE cnt1_reg)
    (DELAY (ABSOLUTE (IOPATH (posedge CLK) Q (0.361:0.361:0.361) (0.361:0.361:0.361)) (IOPATH (negedge RN) Q (0.22:0.22:0.22) (0.22:0.22:0.22))))
    (TIMINGCHECK (SETUPHOLD D (posedge CLK) (0.15:0.15:0.15) (0.10:0.10:0.10))))
)
`},quiz:[{type:"number",q:"Simulate as given. How many timing violations are reported?",answer:4,tol:0,unit:"",explain:"All four are on sync1_reg, the first synchronizer stage, whose D is asynchronous to bclk.",try:!1},{type:"choice",q:"Why does b_cnt stay X until the end?",options:["The SDF delays are wrong","The notifier makes sync1_reg X, the X passes through sync2_reg, and the counter keeps feeding X back to itself","The reset is missing","aclk stops"],answer:1,explain:"One X from a timing check on an asynchronous input poisons everything downstream that has feedback.",try:!1},{type:"choice",q:"Is the setup violation on sync1_reg a real bug in the design?",options:["Yes: fix the timing","No: a synchronizer's first stage is expected to sample a changing input. It may go metastable and the second stage gives it time to settle","Yes: add a third flop","Only at slow corners"],answer:1,explain:"STA does not time this path either: it is a CDC path, cut with set_clock_groups -asynchronous or set_false_path.",try:!1},{type:"number",q:"Try it: remove the // in front of `define IGNORE_SYNC_TCHECK in tb_gls.v. How many timing violations now?",answer:0,tol:0,unit:"",explain:"The check is off only on sync1_reg; every other flop in the design keeps its setup and hold checks.",try:!0},{type:"choice",q:"Why not just run the whole gate-level simulation with timing checks off?",options:["It is slower","Real setup and hold violations on synchronous paths would be hidden too: that is what gate-level simulation is meant to catch","The SDF would not load","No reason"],answer:1,explain:"",try:!1},{type:"choice",q:"Which instances should get the timing-check exception?",options:["Every flop in bclk","Only the first stage of each synchronizer (sync1_reg here)","The second stage","The counter"],answer:1,explain:"List them from the CDC report (the synchronizer chains), not by hand, so the list stays right when the netlist changes.",try:!1}]},{id:"x-recon",group:"Expert CDC & FIFO",tag:"Expert lab 6",title:"Reconvergence in a state machine, waived by mistake",script:"check_cdc.ys",files:{"check_cdc.ys":`# Expert lab 6: a command (start + mode) crosses to bclk and drives a state machine.
# a_start and a_mode are synchronized separately and meet in the FSM: the CDC check reports
# Reconvergence. The designer waived it in fsm_recon.waive. Run the check and read the WAIVED
# entry, then simulate with the metastability model in sync2.sv.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog -sv sync2.sv fsm_recon.sv
hierarchy -check -top fsm_recon
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"fsm_recon.sv":`// Reconvergence lab: a command (start + mode) crosses from aclk to bclk.
// a_start and a_mode are synchronized SEPARATELY and both drive the bclk state machine.
// The CDC check reports "Reconvergence". The designer waived it in fsm_recon.waive:
// "a_mode is always set before a_start". Is that true? Simulate and see.
//   IDLE: wait for start, then go to FAST (mode = 1) or SLOW (mode = 0)
//   FAST: 2 cycles, SLOW: 6 cycles, then DONE until start drops
\`timescale 1ns/1ps
module fsm_recon (
  input  logic       aclk, arst_n, a_cmd, a_fast,   // a_cmd: a command is requested; a_fast: its mode
  input  logic       bclk, brst_n,
  output logic [1:0] b_state,
  output logic       b_took_fast                    // which branch the FSM took for the last command
);
  // Source domain: start and mode registered in aclk. Both change on the same aclk edge.
  logic a_start, a_mode;
  always_ff @(posedge aclk or negedge arst_n)
    if (!arst_n) begin a_start <= 1'b0; a_mode <= 1'b0; end
    else begin a_start <= a_cmd; a_mode <= a_fast; end

  // Destination domain: two separate synchronizers
  logic b_start_s, b_mode_s;
  sync2 #(.W(1), .SEED(5))  u_start (.clk(bclk), .rst_n(brst_n), .d(a_start), .q(b_start_s));
  sync2 #(.W(1), .SEED(17)) u_mode  (.clk(bclk), .rst_n(brst_n), .d(a_mode),  .q(b_mode_s));

  typedef enum logic [1:0] {IDLE, FAST, SLOW, DONE} state_t;
  state_t     state;
  logic [2:0] b_cnt;
  assign b_state = state;
  always_ff @(posedge bclk or negedge brst_n)
    if (!brst_n) begin state <= IDLE; b_cnt <= '0; b_took_fast <= 1'b0; end
    else case (state)
      IDLE: if (b_start_s) begin                       // start and mode meet here: reconvergence
              state <= b_mode_s ? FAST : SLOW; b_took_fast <= b_mode_s; b_cnt <= '0;
            end
      FAST: if (b_cnt == 3'd1) state <= DONE; else b_cnt <= b_cnt + 3'd1;
      SLOW: if (b_cnt == 3'd5) state <= DONE; else b_cnt <= b_cnt + 3'd1;
      DONE: if (!b_start_s) state <= IDLE;
    endcase

\`ifndef SYNTHESIS
  // A_WAIVER: the waiver's claim written as an assertion. When b_start_s rises,
  // b_mode_s must already be stable (it did not change in the same cycle).
  //   SVA: assert property (@(posedge bclk) disable iff (!brst_n) $rose(b_start_s) |-> $stable(b_mode_s));
  logic b_start_q = 1'b0, b_mode_q = 1'b0;
  int   waiver_checks = 0, waiver_fails = 0;
  always @(posedge bclk) begin
    if (brst_n && b_start_s && !b_start_q) begin
      waiver_checks++;
      assert (b_mode_s === b_mode_q)
      else begin
        waiver_fails++;
        if (waiver_fails <= 3) $display("%0t: ASSERTION FAILED A_WAIVER: b_mode_s changed in the same cycle as b_start_s rose", $time);
      end
    end
    b_start_q <= b_start_s; b_mode_q <= b_mode_s;
  end
\`endif
endmodule
`,"sync2.sv":`// sync2: two-flop synchronizer with a simulation model of metastability.
// Synthesis (Yosys defines SYNTHESIS) sees two plain flops per bit.
\`timescale 1ns/1ps
module sync2 #(parameter int W = 1, parameter int SEED = 1) (
  input  logic         clk, rst_n,
  input  logic [W-1:0] d,
  output logic [W-1:0] q
);
  logic [W-1:0] s1;
\`ifdef SYNTHESIS
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else        {q, s1} <= {s1, d};
\`else
  // A real flop whose input changes just before the clock edge (inside its setup/hold
  // window) can go metastable and settle to the old OR the new value. Zero-delay RTL
  // simulation never shows this. With RANDOM_DELAY = 1, a bit that changed less than
  // WINDOW ns before the edge is captured, at random, one cycle late. Designs that need
  // two bits to arrive in the same cycle then fail in simulation too.
  // Set RANDOM_DELAY = 0 to see the ideal behaviour.
  localparam bit  RANDOM_DELAY = 1;
  localparam real WINDOW = 2.0;
  integer  seed = SEED;
  realtime t_change [W];
  for (genvar i = 0; i < W; i++) begin : g_watch
    initial t_change[i] = -1000.0;
    always @(d[i]) t_change[i] = $realtime;
  end
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else begin
      for (int i = 0; i < W; i++)
        s1[i] <= (RANDOM_DELAY && $realtime - t_change[i] < WINDOW && ($random(seed) & 1)) ? s1[i] : d[i];
      q <= s1;
    end
\`endif
endmodule
`,"tb_fsm_recon.sv":`// Sends N commands with a random mode. For each command a_cmd and a_fast change on the
// same aclk edge, then a_cmd stays high for 8 aclk cycles. The testbench checks that the
// FSM took the branch that was requested, with the metastability model in sync2 on.
\`timescale 1ns/1ps
module tb_fsm_recon;
  parameter int N = 100;
  logic aclk = 0, bclk = 0, arst_n = 0, brst_n = 0, a_cmd = 0, a_fast = 0;
  logic [1:0] b_state; logic b_took_fast;
  always #5 aclk = ~aclk;      // 10 ns
  always #6.85 bclk = ~bclk;   // 13.7 ns
  fsm_recon dut (.*);

  int wrong = 0, cmds = 0, seed = 3; logic want_fast;
  logic [1:0] st_q = 0;
  always @(posedge bclk) begin
    if (st_q == 2'd0 && b_state != 2'd0) begin          // the FSM just left IDLE
      cmds++;
      if (b_took_fast !== want_fast) begin
        wrong++;
        if (wrong <= 5) $display("%0t: command %0d asked for %s, the FSM went %s", $time, cmds, want_fast ? "FAST" : "SLOW", b_took_fast ? "FAST" : "SLOW");
      end
    end
    st_q <= b_state;
  end
  initial begin
    $dumpfile("waves.vcd"); $dumpvars(0, tb_fsm_recon);
    repeat (3) @(posedge bclk); arst_n = 1; brst_n = 1;
    repeat (N) begin
      @(posedge aclk) begin a_fast <= $random(seed); a_cmd <= 1; end
      @(posedge aclk) want_fast = a_fast;
      repeat (7) @(posedge aclk);
      a_cmd <= 0;
      repeat (8) @(posedge aclk);
    end
    repeat (6) @(posedge bclk);
    $display("Sent %0d commands, the FSM started %0d, %0d took the wrong branch", N, cmds, wrong);
    $display("A_WAIVER: %0d checks, %0d failed", dut.waiver_checks, dut.waiver_fails);
    if (cmds == N && wrong == 0 && dut.waiver_fails == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"fsm_recon.sdc":`create_clock -name aclk -period 10 [get_ports aclk]
create_clock -name bclk -period 13.7 [get_ports bclk]
set_clock_groups -asynchronous -group {aclk} -group {bclk}
set_input_delay 1 -clock aclk [get_ports {a_cmd a_fast}]
# arst_n and brst_n come from reset synchronizers outside this block
set_input_delay 0 -clock aclk [get_ports arst_n]
set_input_delay 0 -clock bclk [get_ports brst_n]
`,"fsm_recon.waive":`# CDC waivers: each one says why a reported issue is safe. The CDC check keeps it in the
# report as WAIVED, with the reason. A waiver is a claim about the design: verify it.
#   waive -rule "<rule>" [-from <glob>] [-to <glob>] -reason "<why it is safe>"
waive -rule "Reconvergence" -to state* -reason "a_mode is always set before a_start, so b_mode_s is stable when b_start_s rises"
`},quiz:[{type:"choice",q:"What does the CDC check report now?",options:["A Reconvergence violation","0 cautions: the reconvergence is listed as WAIVED with the designer's reason","Unsynchronized crossing","Nothing about the FSM"],answer:1,explain:"",try:!1},{type:"number",q:"Try it: delete the waive line in fsm_recon.waive and run the check. How many cautions?",answer:1,tol:0,unit:"",explain:"The reconvergence of b_mode_s and b_start_s at the state register.",try:!0},{type:"number",q:"Simulate. How many of the 100 commands take the wrong branch?",answer:3,tol:0,unit:"",explain:"The mode bit sometimes arrives one bclk cycle after start, so IDLE sees start with the old mode.",try:!1},{type:"number",q:"Try it: set RANDOM_DELAY = 0 in sync2.sv. How many commands take the wrong branch?",answer:0,tol:0,unit:"",explain:"Zero-delay simulation never injects metastability, so the FSM looks correct. The A_WAIVER assertion still fails: the waiver's claim is false even here.",try:!0},{type:"number",q:"How many times does A_WAIVER fail (RANDOM_DELAY = 1)?",answer:48,tol:0,unit:"",explain:"Every time the mode changes with the start, it is not stable when start rises: the claim in the waiver is false.",try:!1},{type:"choice",q:"What should a reconvergence waiver come with?",options:["Nothing: the reason is enough","An assertion that proves its claim in simulation (or formally)","A second waiver","A longer synchronizer"],answer:1,explain:"A_WAIVER is that assertion. Without it the waiver is an unchecked assumption, and this one was wrong.",try:!1}]},{id:"x-recon-fix",group:"Expert CDC & FIFO",tag:"Expert lab 7",title:"Fixing reconvergence: one control crosses, the rest is qualified data",script:"check_cdc.ys",files:{"check_cdc.ys":`# Expert lab 7: the same command, fixed. Only a_start is synchronized. a_mode is held stable
# while a_start is high and bclk loads it once, when it sees a_start rise. Nothing reconverges,
# so no waiver is needed. Run the check, then simulate with the metastability model on.

# Yosys reads the RTL and writes a netlist; the CDC checker then reads the netlist
# and the .sdc file. You can edit both and run again.
read_verilog -sv sync2.sv fsm_fixed.sv
hierarchy -check -top fsm_fixed
proc; flatten; opt_dff; opt_clean
write_json design.json
`,"fsm_fixed.sv":`// Reconvergence fixed: only ONE control signal crosses, so nothing can reconverge.
// a_start is synchronized. a_mode is not synchronized at all: it is data, held stable
// in aclk while a_start is high, and bclk loads it once, when it sees a_start rise
// (by then a_mode has been stable for more than a bclk cycle). This is the MCP
// formulation from Expert lab 2 used for the command's mode bit.
// The FSM then decides from b_mode_q, a bclk register, one cycle later (DECIDE).
\`timescale 1ns/1ps
module fsm_fixed (
  input  logic       aclk, arst_n, a_cmd, a_fast,
  input  logic       bclk, brst_n,
  output logic [2:0] b_state,
  output logic       b_took_fast                    // 1 while the FSM is in FAST
);
  logic a_start, a_mode;
  always_ff @(posedge aclk or negedge arst_n)
    if (!arst_n) begin a_start <= 1'b0; a_mode <= 1'b0; end
    else begin a_start <= a_cmd; a_mode <= a_fast; end

  logic b_start_s, b_start_q, b_mode_q;
  sync2 #(.W(1), .SEED(5)) u_start (.clk(bclk), .rst_n(brst_n), .d(a_start), .q(b_start_s));
  wire b_load = b_start_s & ~b_start_q;                 // a_start has just risen in bclk
  always_ff @(posedge bclk or negedge brst_n)
    if (!brst_n) begin b_start_q <= 1'b0; b_mode_q <= 1'b0; end
    else begin
      b_start_q <= b_start_s;
      if (b_load) b_mode_q <= a_mode;                   // qualified capture: a_mode is stable now
    end

  typedef enum logic [2:0] {IDLE, DECIDE, FAST, SLOW, DONE} state_t;
  state_t     state;
  logic [2:0] b_cnt;
  assign b_state = state;
  assign b_took_fast = (state == FAST);
  always_ff @(posedge bclk or negedge brst_n)
    if (!brst_n) begin state <= IDLE; b_cnt <= '0; end
    else case (state)
      IDLE:   if (b_load) state <= DECIDE;
      DECIDE: begin state <= b_mode_q ? FAST : SLOW; b_cnt <= '0; end
      FAST:   if (b_cnt == 3'd1) state <= DONE; else b_cnt <= b_cnt + 3'd1;
      SLOW:   if (b_cnt == 3'd5) state <= DONE; else b_cnt <= b_cnt + 3'd1;
      default: if (!b_start_s) state <= IDLE;           // DONE
    endcase

\`ifndef SYNTHESIS
  // A_STABLE: the qualified data must be stable when bclk loads it: a_mode has not
  // changed during the last bclk period.
  //   SVA: assert property (@(posedge bclk) disable iff (!brst_n) b_load |-> $stable(a_mode));
  realtime t_mode = 0;
  int stable_checks = 0, stable_fails = 0;
  always @(a_mode) t_mode = $realtime;
  always @(posedge bclk)
    if (brst_n && b_load) begin
      stable_checks++;
      assert ($realtime - t_mode >= 13.7) else begin
        stable_fails++;
        if (stable_fails <= 3) $display("%0t: ASSERTION FAILED A_STABLE: a_mode changed %0.1f ns before it was loaded", $time, $realtime - t_mode);
      end
    end
\`endif
endmodule
`,"sync2.sv":`// sync2: two-flop synchronizer with a simulation model of metastability.
// Synthesis (Yosys defines SYNTHESIS) sees two plain flops per bit.
\`timescale 1ns/1ps
module sync2 #(parameter int W = 1, parameter int SEED = 1) (
  input  logic         clk, rst_n,
  input  logic [W-1:0] d,
  output logic [W-1:0] q
);
  logic [W-1:0] s1;
\`ifdef SYNTHESIS
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else        {q, s1} <= {s1, d};
\`else
  // A real flop whose input changes just before the clock edge (inside its setup/hold
  // window) can go metastable and settle to the old OR the new value. Zero-delay RTL
  // simulation never shows this. With RANDOM_DELAY = 1, a bit that changed less than
  // WINDOW ns before the edge is captured, at random, one cycle late. Designs that need
  // two bits to arrive in the same cycle then fail in simulation too.
  // Set RANDOM_DELAY = 0 to see the ideal behaviour.
  localparam bit  RANDOM_DELAY = 1;
  localparam real WINDOW = 2.0;
  integer  seed = SEED;
  realtime t_change [W];
  for (genvar i = 0; i < W; i++) begin : g_watch
    initial t_change[i] = -1000.0;
    always @(d[i]) t_change[i] = $realtime;
  end
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q, s1} <= '0;
    else begin
      for (int i = 0; i < W; i++)
        s1[i] <= (RANDOM_DELAY && $realtime - t_change[i] < WINDOW && ($random(seed) & 1)) ? s1[i] : d[i];
      q <= s1;
    end
\`endif
endmodule
`,"tb_fsm_fixed.sv":`// Sends N commands with a random mode. For each command a_cmd and a_fast change on the
// same aclk edge, then a_cmd stays high for 8 aclk cycles. The testbench checks that the
// FSM took the branch that was requested, with the metastability model in sync2 on.
// (Same commands and seed as the reconvergence lab.)
\`timescale 1ns/1ps
module tb_fsm_fixed;
  parameter int N = 100;
  logic aclk = 0, bclk = 0, arst_n = 0, brst_n = 0, a_cmd = 0, a_fast = 0;
  logic [2:0] b_state; logic b_took_fast;
  always #5 aclk = ~aclk;      // 10 ns
  always #6.85 bclk = ~bclk;   // 13.7 ns
  fsm_fixed dut (.*);

  int wrong = 0, cmds = 0, seed = 3; logic want_fast;
  logic [2:0] st_q = 0;
  always @(posedge bclk) begin
    if (st_q == 3'd1 && b_state != 3'd1) begin          // the FSM just left DECIDE
      cmds++;
      if (b_took_fast !== want_fast) begin
        wrong++;
        if (wrong <= 5) $display("%0t: command %0d asked for %s, the FSM went %s", $time, cmds, want_fast ? "FAST" : "SLOW", b_took_fast ? "FAST" : "SLOW");
      end
    end
    st_q <= b_state;
  end
  initial begin
    $dumpfile("waves.vcd"); $dumpvars(0, tb_fsm_fixed);
    repeat (3) @(posedge bclk); arst_n = 1; brst_n = 1;
    repeat (N) begin
      @(posedge aclk) begin a_fast <= $random(seed); a_cmd <= 1; end
      @(posedge aclk) want_fast = a_fast;
      repeat (7) @(posedge aclk);
      a_cmd <= 0;
      repeat (8) @(posedge aclk);
    end
    repeat (6) @(posedge bclk);
    $display("Sent %0d commands, the FSM started %0d, %0d took the wrong branch", N, cmds, wrong);
    $display("A_STABLE: %0d checks, %0d failed", dut.stable_checks, dut.stable_fails);
    if (cmds == N && wrong == 0 && dut.stable_fails == 0) $display("PASS"); else $display("FAIL");
    $finish;
  end
endmodule
`,"fsm_fixed.sdc":`create_clock -name aclk -period 10 [get_ports aclk]
create_clock -name bclk -period 13.7 [get_ports bclk]
set_clock_groups -asynchronous -group {aclk} -group {bclk}
set_input_delay 1 -clock aclk [get_ports {a_cmd a_fast}]
# arst_n and brst_n come from reset synchronizers outside this block
set_input_delay 0 -clock aclk [get_ports arst_n]
set_input_delay 0 -clock bclk [get_ports brst_n]
`},quiz:[{type:"number",q:"How many cautions and violations does the CDC check report?",answer:0,tol:0,unit:"",explain:"a_mode is now qualified data, loaded by an enable from the one synchronized signal.",try:!1},{type:"choice",q:"How is a_mode \u2192 b_mode_q classified?",options:["2-flop synchronizer","Qualified by synchronized enable","Reconvergence","Unsynchronized crossing"],answer:1,explain:"",try:!1},{type:"number",q:"Simulate. How many commands take the wrong branch, with the same commands and seed as lab 6?",answer:0,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does A_STABLE check?",options:["The clock period","That a_mode has not changed in the last bclk period when bclk loads it: the condition that makes the qualified capture safe","That start is synchronized","The FSM encoding"],answer:1,explain:"",try:!1},{type:"choice",q:"Which other fix would also remove this reconvergence?",options:["Encode start and mode so only one bit changes per step (Gray coded command), or consolidate them into one signal in aclk","Add a third synchronizer flop","Waive it","Use a faster bclk"],answer:0,explain:"Consolidation (Expert lab 1) and Gray coding (Expert lab 3) both make one change cross at a time.",try:!1}]}];var ze=new Set(["$dff","$dffe","$adff","$adffe","$sdff","$sdffe","$sdffce","$dffsr","$dffsre","$aldff","$aldffe","$dlatch","$adlatch","$dlatchsr"]),pt=new Set(["$pos","$buf","$_BUF_"]);function Gt(e){let t={clocks:new Map,generated:[],groups:[],inputs:new Map,notes:[]},n=(e||"").replace(/\\\n/g," ").split(`
`),s=o=>(o||"").replace(/[{}]/g," ").trim().split(/\s+/).filter(Boolean),r=(o,c)=>{let i=[],m=new RegExp("\\[\\s*"+c+"\\s+([^\\]]+)\\]","g"),y;for(;y=m.exec(o);)i.push(...s(y[1]));return i};return n.forEach((o,c)=>{let i=o.replace(/#.*$/,"").trim();if(!i)return;let m=i.split(/\s+/)[0],y=u=>{let l=new RegExp("-"+u+"\\s+(\\{[^}]*\\}|\\S+)").exec(i);return l?l[1].replace(/[{}]/g,"").trim():null};if(m==="create_clock"){let u=r(i,"get_ports"),l=y("name")||u[0];if(!l||!u.length){t.notes.push(`line ${c+1}: create_clock needs [get_ports ...]`);return}t.clocks.set(l,{name:l,port:u[0],period:parseFloat(y("period"))||null})}else if(m==="create_generated_clock"){let u=r(i,"get_ports")[0],l=[...r(i,"get_pins"),...r(i,"get_nets")],f=y("name")||l[0];t.generated.push({name:f,sourcePort:u,pin:(l[0]||"").replace(/\/Q$/,"")})}else if(m==="set_clock_groups"){let u=[],l=/-group\s+(\{[^}]*\}|\S+)/g,f;for(;f=l.exec(i);)u.push(s(f[1]));t.groups.push({type:/-asynchronous/.test(i)?"async":/-physically_exclusive|-logically_exclusive/.test(i)?"exclusive":"async",groups:u})}else if(m==="set_input_delay"){let u=y("clock");for(let l of r(i,"get_ports"))t.inputs.set(l,u)}else/^(set_output_delay|set_false_path|set_max_delay|set_min_delay|set_multicycle_path|set_load|set_driving_cell|set_input_transition|set_clock_uncertainty|set_clock_latency|set_bus_skew)$/.test(m)||t.notes.push(`line ${c+1}: ${m} is not used by the CDC check`)}),t}function Ht(e){let t=new Map,n=i=>i.startsWith("$")?9:0;for(let[i,m]of Object.entries(e.netnames||{})){if(m.hide_name)continue;let y=m.offset||0,u=m.bits.length;m.bits.forEach((l,f)=>{if(typeof l!="number")return;let k=u>1||y?`${i}[${m.upto?y+u-1-f:y+f}]`:i,q=t.get(l);(!q||n(i)<n(q.n)||n(i)===n(q.n)&&Pt(i,q.n,e,l))&&t.set(l,{n:i,nm:k})})}let s=new Map;for(let[i,m]of Object.entries(e.ports||{}))m.bits.forEach((y,u)=>{typeof y=="number"&&s.set(y,{port:i,dir:m.direction,nm:m.bits.length>1?`${i}[${u}]`:i})});let r=new Map,o=new Map,c=(i,m)=>{o.has(i)||o.set(i,[]),o.get(i).push(m)};for(let[i,m]of Object.entries(e.cells||{})){let y=m.port_directions||{};for(let[u,l]of Object.entries(m.connections)){let f=y[u]?y[u]==="output":/^(Y|Q|X)$/.test(u);l.forEach((k,q)=>{typeof k=="number"&&(f?r.set(k,{cell:i,pin:u,i:q}):c(k,{cell:i,pin:u,i:q}))})}}for(let[i,m]of s)m.dir==="input"?r.set(i,{port:m.port,nm:m.nm}):c(i,{port:m.port,nm:m.nm});return{names:t,portBits:s,driver:r,sinks:o}}function Pt(e,t,n,s){let r=o=>!!(n.ports||{})[o];return r(e)!==r(t)?!r(e):e.length<t.length}function _t(e,t,n,s){let r=Gt(t),o=n&&e.modules[n]?n:Object.keys(e.modules).find(a=>e.modules[a].attributes&&e.modules[a].attributes.top)||Object.keys(e.modules)[0],c=e.modules[o],i=Ht(c),m=c.cells||{},y=a=>typeof a!="number"?`1'b${a}`:(i.names.get(a)||{}).nm||(i.portBits.get(a)||{}).nm||`net${a}`,u=[],l=[...r.notes],f=[],k=new Map;for(let[a,p]of Object.entries(m)){if(!ze.has(p.type))continue;let _=p.connections,b=p.parameters||{},v=_.CLK?"CLK":"EN",E=p.type.includes("latch");(_.Q||[]).forEach((C,w)=>{let A={cell:a,type:p.type,i:w,q:C,d:(_.D||[])[w],clk:_[v]&&_[v][0],en:!E&&_.EN?_.EN[0]:null,arst:_.ARST?_.ARST[0]:_.CLR?_.CLR[w]:null,srst:_.SRST?_.SRST[0]:null,latch:E,name:y(C)};f.push(A),k.set(C,A)})}let q=(a,p=new Set)=>{if(p.has(a))return null;p.add(a);let _=i.driver.get(a);if(!_)return null;if(_.port)return{port:_.port,inverted:!1};let b=m[_.cell];if(pt.has(b.type)||b.type==="$not"||b.type==="$_NOT_"){let v=q(b.connections.A[_.i]??b.connections.A[0],p);return v&&{...v,inverted:v.inverted!==(b.type.includes("NOT")||b.type==="$not")}}return k.has(a)?{reg:k.get(a)}:{gate:_.cell}},T=new Map([...r.clocks.values()].map(a=>[a.port,a.name])),D=new Map;for(let a of r.clocks.values())D.set(a.name,{name:a.name,kind:"primary",port:a.port,period:a.period});let G=new Map,I=new Set,ee=(a,p=0)=>{if(G.has(a))return G.get(a);let _=null,b=a.clk!==void 0?q(a.clk):null;if(b&&b.port)_=T.get(b.port)||null,_||(I.add(b.port),_="unclocked:"+b.port,D.has(_)||D.set(_,{name:_,kind:"unclocked",port:b.port}));else if(b&&b.reg&&p<8){let v=ee(b.reg,p+1),E=r.generated.find(w=>w.pin===b.reg.name||w.pin===b.reg.name.replace(/\[\d+\]$/,"")),C=E?E.name:b.reg.name;D.has(C)||D.set(C,{name:C,kind:E?"generated":"inferred",master:v,from:b.reg.name}),!E&&!l.some(w=>w.includes(b.reg.name))&&l.push(`${b.reg.name} drives clock pins: treated as a clock generated from ${v} (add create_generated_clock to name it)`),_=C}else b&&b.gate&&(_="gated:"+b.gate,D.has(_)||D.set(_,{name:_,kind:"unknown"}));return G.set(a,_),_};f.forEach(a=>a.dom=ee(a));for(let a of I)u.push({sev:"violation",rule:"Missing clock",dst:a,msg:`Port ${a} clocks registers but has no create_clock. Define the clock so its crossings can be checked.`});let te=a=>{let p=D.get(a),_=0;for(;p&&p.master&&_++<10;)p=D.get(p.master);return p?p.name:a},J=new Set,ne=(a,p)=>{if(a===p)return!0;let _=te(a),b=te(p);if(_===b)return!0;for(let E of r.groups){let C=E.groups.findIndex(A=>A.includes(a)||A.includes(_)),w=E.groups.findIndex(A=>A.includes(p)||A.includes(b));if(C>=0&&w>=0)return C===w}let v=[_,b].sort().join(" / ");return J.has(v)||(J.add(v),u.push({sev:"caution",rule:"Clock relationship assumed",dst:v,msg:`No set_clock_groups relates ${_} and ${b}: treated as asynchronous (the safe CDC default).`})),!1},re=a=>r.inputs.get(a)||null,R=(a,p=!0)=>{let _={regs:new Set,ports:new Set,logic:!1,muxSel:[],gates:0},b=new Set,v=E=>{if(typeof E!="number"||b.has(E))return;if(b.add(E),k.has(E)&&p){_.regs.add(k.get(E));return}let C=i.driver.get(E);if(!C)return;if(C.port){_.ports.add(C.port);return}let w=m[C.cell];if(!ze.has(w.type)){if(pt.has(w.type)||(_.logic=!0,_.gates++),w.type==="$mux"||w.type==="$_MUX_"||w.type==="$pmux"){_.muxSel.push(...w.connections.S||[]);let A=w.parameters&&parseInt(w.parameters.WIDTH,2)||1;for(let Y of["A","B"]){let le=w.connections[Y]||[];w.type==="$pmux"?le.forEach(v):v(le[C.i]!==void 0?le[C.i]:le[0])}(w.connections.S||[]).forEach(v);return}for(let[A,Y]of Object.entries(w.connections)){if((w.port_directions||{})[A]==="output"||/^(Y|Q)$/.test(A))continue;/^\$(and|or|xor|xnor|not|pos|buf|_AND_|_OR_|_XOR_|_NOT_)$/.test(w.type)&&Y.length>C.i?v(Y[C.i]):Y.forEach(v)}}};return v(a),_},K=(a,p)=>{if(a.reg)return a.reg.dom&&p&&!ne(a.reg.dom,p);let _=re(a.port);return _?!ne(_,p):!0},V=a=>a.reg?a.reg.dom:re(a.port)||`async input ${a.port}`,se=a=>{let p=i.sinks.get(a.q)||[],_=p.map(b=>b.cell&&m[b.cell]&&ze.has(m[b.cell].type)&&b.pin==="D"?f.find(v=>v.cell===b.cell&&v.i===b.i):null);return{all:p,sameClock:_.filter(b=>b&&b.dom===a.dom&&b.clk===a.clk),other:p.length-_.filter(Boolean).length}},ie=new Map,B=new Map,ge=[];for(let a of f){if(!a.dom||a.latch)continue;let p=R(a.d),_=[...[...p.regs].map(A=>({reg:A})),...[...p.ports].map(A=>({port:A}))].filter(A=>K(A,a.dom));if(!_.length)continue;let b=se(a),v=b.sameClock.find(A=>{let Y=R(A.d);return!Y.logic&&Y.regs.size===1&&[...Y.regs][0]===a});if(!v)continue;let E=[a],C=v;for(;C&&E.length<6;){let A=R(C.d);if(A.logic||A.regs.size!==1||[...A.regs][0]!==E[E.length-1])break;E.push(C);let Y=se(C);C=Y.sameClock.length===1&&Y.all.length===1?Y.sameClock[0]:null}let w={first:a,stages:E,srcs:_,cone:p,fanout:b.all.length};ge.push(w),ie.set(a,w),E.slice(1).forEach(A=>B.set(A.q,w))}let ae=a=>{let p=new Set,_=new Set,b=v=>{if(typeof v!="number"||_.has(v)||(_.add(v),B.has(v)&&p.add(B.get(v)),k.has(v)))return;let E=i.driver.get(v);if(!E||E.port)return;let C=m[E.cell];if(!ze.has(C.type))for(let[w,A]of Object.entries(C.connections))(C.port_directions||{})[w]==="output"||/^(Y|Q)$/.test(w)||A.forEach(b)};return b(a),p},ce=[];for(let a of f){if(!a.dom)continue;let p=R(a.d),_=a.en!==null&&a.en!==void 0?R(a.en):null,v=[...[...p.regs].map(z=>({reg:z})),...[...p.ports].map(z=>({port:z})),..._?[..._.regs].map(z=>({reg:z})):[]].filter(z=>!(z.reg&&B.has(z.reg.q)&&z.reg.dom===a.dom)).filter(z=>K(z,a.dom)&&!(z.port&&/rst|reset/i.test(z.port)&&!1));if(!v.length)continue;let E=[...new Set(v.map(z=>z.reg?z.reg.name:z.port))],C=[...new Set(v.map(V))],w=ie.get(a),A={src:E.join(", "),dst:a.name,srcDom:C.join(", "),dstDom:a.dom,srcBase:E.map(ye).join(","),dstBase:ye(a.name)};if(w){p.logic?ce.push({...A,sev:"violation",rule:"Logic before synchronizer",msg:`Combinational logic (${p.gates} gate${p.gates>1?"s":""}) drives the first synchronizer stage. A glitch can be captured as a false pulse. Register the signal in the source domain first.`}):w.fanout>1?ce.push({...A,sev:"violation",rule:"First stage fans out",msg:`The first synchronizer stage also drives other logic (${w.fanout} loads). Its output can be metastable: only the next flop may use it.`}):w.stages.length<2?ce.push({...A,sev:"violation",rule:"Single-flop synchronizer",msg:"Only one flop: not enough time for metastability to resolve."}):ce.push({...A,sev:"ok",rule:`${w.stages.length}-flop synchronizer`,msg:`Synchronized by ${w.stages.map(z=>z.name).join(" \u2192 ")}.`});continue}let Y=new Set;for(let z of p.muxSel)for(let $e of ae(z))Y.add($e);if(a.en!==null&&a.en!==void 0)for(let z of ae(a.en))Y.add(z);let le=se(a);if(Y.size){let z=[...Y].map($e=>$e.stages[$e.stages.length-1].name);ce.push({...A,sev:"ok",rule:"Qualified by synchronized enable",msg:`Captured only when ${[...new Set(z)].join(", ")} (synchronized) says the data is stable. Keep the data stable while the enable is active: check it in simulation.`})}else le.sameClock.length===1&&le.all.length===1?ce.push({...A,sev:"violation",rule:"Logic before synchronizer",msg:"This register starts a synchronizer chain, but its input comes through logic. Register the signal in the source domain first."}):ce.push({...A,sev:"violation",rule:"Unsynchronized crossing",msg:`Asynchronous data is used directly in ${a.dom}. The flop can go metastable and pass a wrong value on. Add a synchronizer, a handshake or a FIFO.`})}let we=ge.filter(a=>a.stages.length>=2),_e=new Map;for(let a of we){let p=a.srcs[0],_=p.reg?p.reg.name:p.port,b=`${ye(_)}|${V(p)}|${a.first.dom}`;_e.has(b)||_e.set(b,[]),_e.get(b).push(a)}let g=new Map;for(let[a,p]of _e){if(p.length<2)continue;let[_,b,v]=a.split("|");p.forEach(E=>g.set(E,a)),u.push({sev:"caution",rule:"Bus synchronized bit by bit",src:`${_} (${p.length} bits)`,dst:ye(p[0].first.name),srcDom:b,dstDom:v,msg:`${p.length} bits of ${_} each have their own synchronizer. Bits can arrive in different cycles, so this is only safe if ${_} changes one bit at a time (Gray code). Otherwise use a handshake or a FIFO.`})}let h=new Set,x=[...f.map(a=>({bit:a.d,name:a.name,dom:a.dom})),...[...i.portBits.values()].filter(a=>a.dir==="output").map(a=>({bit:[...i.portBits.entries()].find(([,p])=>p===a)[0],name:a.nm,dom:null}))];for(let a of x){let p=[...ae(a.bit)],_=new Map;for(let b of p){let v=b.first.dom+"|"+V(b.srcs[0]);_.has(v)||_.set(v,new Set),_.get(v).add(b)}for(let[b,v]of _){if(v.size<2)continue;let E=[...v];if(new Set(E.map(z=>g.get(z)||z)).size<2)continue;let w=E.map(z=>z.stages[z.stages.length-1].name).sort(),A=w.join(",");if(h.has(A))continue;h.add(A);let[Y,le]=b.split("|");u.push({sev:"caution",rule:"Reconvergence",src:w.join(", "),dst:a.name,srcDom:le,dstDom:Y,msg:`Separately synchronized signals meet in logic at ${a.name}. They can arrive one cycle apart, so the combination can be briefly wrong. Synchronize one control signal instead, or use Gray coding.`})}}let $=new Set;for(let a of f){if(a.arst===null||a.arst===void 0)continue;let p=R(a.arst),_=p.ports.size&&!p.regs.size,b=R(a.d),v=typeof a.d!="number"||!b.regs.size&&!b.ports.size||b.regs.size&&!b.ports.size&&[...b.regs].every(E=>$.has(E)&&E.dom===a.dom);_&&v&&$.add(a)}for(let a=0;a<3;a++)for(let p of f){if($.has(p)||p.arst==null)continue;let _=R(p.arst),b=R(p.d);_.ports.size&&!_.regs.size&&[...b.regs].length&&[...b.regs].every(v=>$.has(v)&&v.dom===p.dom)&&$.add(p)}let W=new Map;for(let a of f){if(a.arst===null||a.arst===void 0||$.has(a))continue;let p=R(a.arst),_=[...p.regs],b;if(_.length&&_.every(w=>$.has(w)&&w.dom===a.dom))b={sev:"ok",rule:"Synchronized reset",msg:`Reset deasserts in step with ${a.dom} through the reset synchronizer ${_.map(w=>w.name).join(", ")}.`};else if(_.some(w=>w.dom&&a.dom&&!ne(w.dom,a.dom)))b={sev:"violation",rule:"Reset crosses domains",msg:`The reset comes from ${_.map(w=>w.name).join(", ")} in another clock domain (${_[0].dom}). Use a reset synchronizer in ${a.dom}.`};else{if(p.ports.size&&[...p.ports].every(w=>re(w)&&a.dom&&ne(re(w),a.dom)))continue;p.ports.size&&(b={sev:"caution",rule:"Reset not synchronized",msg:`Asynchronous reset ${[...p.ports].join(", ")} goes straight to these registers. Its release is not synchronized to ${a.dom}, so flops can leave reset in different cycles. Use a reset synchronizer, or, if the reset comes from a synchronizer outside this block, say so with set_input_delay -clock ${a.dom} on the reset port.`})}if(!b)continue;let v=b.rule==="Reset not synchronized",E=b.rule+"|"+(v?[...p.ports].join(","):ye(a.name))+"|"+a.dom,C=_.length?_.map(w=>w.name).join(", "):[...p.ports].join(", ");W.has(E)||W.set(E,{...b,src:C,dst:a.name,dstDom:a.dom,srcDom:_.length?_[0].dom:"reset input",bits:0,dstBase:ye(a.name),bases:new Set}),W.get(E).bits++,W.get(E).bases.add(ye(a.name))}let O=new Map;for(let a of ce){let p=[a.sev,a.rule,a.dstBase,a.srcBase,a.dstDom].join("|");O.has(p)||O.set(p,{...a,bits:0,srcSet:new Set,dstSet:new Set});let _=O.get(p);_.bits++,a.src.split(", ").forEach(b=>_.srcSet.add(b)),_.dstSet.add(a.dst)}let M=[...O.values()].map(a=>({...a,src:gt([...a.srcSet]),dst:gt([...a.dstSet])})),H=[...W.values()].map(a=>({...a,dst:a.bases.size>1?`${a.bits} flops (${[...a.bases].slice(0,4).join(", ")}${a.bases.size>4?", \u2026":""})`:a.bits>1?`${a.dstBase} (${a.bits} bits)`:a.dst})),F=[...M,...u.filter(a=>a.rule!=="Clock relationship assumed"),...H,...u.filter(a=>a.rule==="Clock relationship assumed")],U=Vt(s||"");for(let a of U){for(let p of F)p.sev==="ok"||p.sev==="waived"||p.rule.toLowerCase()===a.rule.toLowerCase()&&(a.from&&!ut(a.from,p.src)||a.to&&!ut(a.to,p.dst)||(p.waivedFrom=p.sev,p.sev="waived",p.reason=a.reason,a.used=(a.used||0)+1));a.used||l.push(`Waiver on line ${a.line} (${a.rule}) matched nothing: remove it or fix its -from/-to.`)}let me={violation:0,caution:1,waived:2,ok:3};F.sort((a,p)=>me[a.sev]-me[p.sev]);let ve=new Map;for(let a of f)a.dom&&ve.set(a.dom,(ve.get(a.dom)||0)+1);let Z=[...D.values()].map(a=>({...a,regs:ve.get(a.name)||0,root:te(a.name)})),Q=a=>F.filter(p=>p.sev===a).length;return{top:o,clocks:Z,rows:F,notes:l,summary:{domains:Z.filter(a=>a.regs>0).length,crossings:M.reduce((a,p)=>a+p.bits,0),crossingRegs:M.length,violations:Q("violation"),cautions:Q("caution"),ok:Q("ok"),waived:Q("waived"),synchronizers:we.length}}}function Vt(e){let t=[];return e.split(`
`).forEach((n,s)=>{let r=n.replace(/#.*$/,"").trim();if(!/^waive\b/.test(r))return;let o=i=>{let m=new RegExp(`-${i}\\s+(?:"([^"]*)"|\\{([^}]*)\\}|(\\S+))`).exec(r);return m?m[1]??m[2]??m[3]:null},c=o("rule");c&&t.push({rule:c,from:o("from"),to:o("to"),reason:o("reason")||"(no reason given)",line:s+1})}),t}function ut(e,t){return new RegExp("(^|[\\s,(/])"+e.split("*").map(s=>s.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join("[^\\s,]*")+"($|[\\s,)\\[])").test(String(t||""))}function ye(e){return String(e).replace(/\[\d+\]$/,"")}function gt(e){let t=new Map;for(let n of e){let s=/^(.*)\[(\d+)\]$/.exec(n),r=s?s[1]:n;t.has(r)||t.set(r,[]),s&&t.get(r).push(+s[2])}return[...t.entries()].map(([n,s])=>s.length>1?`${n}[${Math.max(...s)}:${Math.min(...s)}]`:s.length===1?`${n}[${s[0]}]`:n).join(", ")}function ft(e){let t=[],n=(c,i)=>String(c).padEnd(i);t.push(`CDC report for ${e.top}`),t.push(""),t.push("Clock domains"),t.push("  "+n("Clock",16)+n("Kind",12)+n("Source",18)+"Registers");for(let c of e.clocks)t.push("  "+n(c.name,16)+n(c.kind,12)+n(c.port||(c.master?"from "+c.master:"-"),18)+c.regs);t.push("");let s=e.summary;t.push(`Summary: ${s.crossings} crossing bit(s) into ${s.crossingRegs} register group(s), ${s.synchronizers} synchronizer(s)`),t.push(`         ${s.violations} violation(s), ${s.cautions} caution(s), ${s.waived?s.waived+" waived, ":""}${s.ok} OK`),t.push("");let r={violation:"VIOLATION",caution:"CAUTION  ",waived:"WAIVED   ",ok:"OK       "},o=0;for(let c of e.rows)o++,t.push(`${r[c.sev]} ${o}. ${c.rule}`),c.src&&t.push(`    from ${c.src}${c.srcDom?"  ("+c.srcDom+")":""}`),c.dst&&t.push(`    to   ${c.dst}${c.dstDom?"  ("+c.dstDom+")":""}`),t.push(`    ${c.msg}`),c.sev==="waived"&&t.push(`    Waived (was ${c.waivedFrom}): ${c.reason}`),t.push("");if(e.rows.length||t.push("No clock domain crossings found."),e.notes.length){t.push("Notes");for(let c of e.notes)t.push("  - "+c)}return t}function mt(e){return/[uwlh-]/i.test(e)?e.toLowerCase().replace(/[uw-]/g,"x").replace(/l/g,"0").replace(/h/g,"1"):e.toLowerCase()}function bt(e){let t=[],n=new Map,s=[],r="",o=0,c=e.split(/\s+/),i=!0,m=0,y=0;for(;o<c.length;){let u=c[o++];if(!u)continue;if(i){if(u==="$scope"){for(o++,s.push(c[o++]);c[o]!=="$end";)o++;o++}else if(u==="$upscope"){for(s.pop();c[o]!=="$end";)o++;o++}else if(u==="$timescale"){let f=[];for(;c[o]!=="$end";)f.push(c[o++]);o++,r=f.join("")}else if(u==="$var"){let f=c[o++],k=parseInt(c[o++],10),q=c[o++],T=[];for(;c[o]!=="$end";)T.push(c[o++]);o++;let D=T[0];T[1]&&T[1].startsWith("[")&&(D+=T[1]);let G=[...s,D].join(".");if(f==="parameter")continue;if(n.has(q)){n.get(q).aliases.push(G);continue}let I=[...s.slice(1),D].join("."),ee={id:q,name:G,short:I||D,depth:s.length,width:k,type:f,changes:[],aliases:[]};n.set(q,ee),t.push(ee)}else if(u==="$enddefinitions"){for(;c[o]!=="$end";)o++;o++,i=!1}else if(u.startsWith("$")){for(;o<c.length&&c[o]!=="$end";)o++;o++}continue}let l=u[0];if(l==="#")m=Number(u.slice(1)),m>y&&(y=m);else if(l!=="$")if(l==="b"||l==="B"||l==="r"||l==="R"){let f=u.slice(1),k=c[o++],q=n.get(k);q&&Ue(q,m,l==="r"||l==="R"?Number(f):mt(f))}else if(l==="s"||l==="S"){let f=c[o++],k=n.get(f);k&&Ue(k,m,{str:u.slice(1)})}else{let f=n.get(u.slice(1));f&&Ue(f,m,mt(l))}}return{signals:t,timescale:r,endTime:y}}function Ue(e,t,n){let s=e.changes;s.length&&s[s.length-1][0]===t?s[s.length-1][1]=n:(!s.length||s[s.length-1][1]!==n)&&s.push([t,n])}function kt(e,t){let n=e.changes,s=0,r=n.length-1,o=-1;for(;s<=r;){let c=s+r>>1;n[c][0]<=t?(o=c,s=c+1):r=c-1}return o<0?null:n[o][1]}function Qe(e,t,n){if(t==null)return"";if(typeof t=="number")return String(+t.toPrecision(6));if(typeof t=="object")return t.str;if(e.width===1)return t;let s=t.padStart(e.width,t[0]==="x"||t[0]==="z"?t[0]:"0");if(/[xz]/i.test(s))return/^x+$/i.test(s)?"x":/^z+$/i.test(s)?"z":n==="bin"?s:"x";if(n==="bin")return s;let r=BigInt("0b"+s);if(n==="dec")return r.toString(10);if(n==="sdec"){let o=BigInt(e.width);return(s[0]==="1"?r-(1n<<o):r).toString(10)}return r.toString(16).toUpperCase().padStart(Math.ceil(e.width/4),"0")}var Ee=class{constructor(t,n){this.c=t,this.ctx=t.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=n.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=n.theme,t.addEventListener("mousedown",s=>this.click(s)),t.addEventListener("wheel",s=>this.wheel(s),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(t.parentElement)}setData(t){this.data=t,this.cursor=null,this.t0=0,this.t1=Math.max(1,t.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(t,n){if(!this.data)return;let s=this.t1-this.t0,r=n??this.cursor??this.t0+s/2,o=Math.min(Math.max(s*t,2),Math.max(1,this.data.endTime)*1.05),c=r-(r-this.t0)*(o/s);c=Math.max(0,Math.min(c,Math.max(0,this.data.endTime-o))),this.t0=c,this.t1=c+o,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(t){if(!this.data)return;let n=this.t1-this.t0,s=this.t0+n*t;s=Math.max(0,Math.min(s,Math.max(0,this.data.endTime-n))),this.t0=s,this.t1=s+n,this.draw()}xOf(t,n){return this.nameW+(t-this.t0)/(this.t1-this.t0)*(n-this.nameW-8)}tOf(t,n){return this.t0+(t-this.nameW)/(n-this.nameW-8)*(this.t1-this.t0)}click(t){if(!this.data)return;let n=this.c.getBoundingClientRect(),s=t.clientX-n.left;s<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(s,n.width))),this.draw(),this.onCursor(this.cursor))}wheel(t){if(!this.data)return;let n=this.c.getBoundingClientRect();t.ctrlKey||t.metaKey||Math.abs(t.deltaY)>Math.abs(t.deltaX)&&t.shiftKey===!1&&t.altKey?(t.preventDefault(),this.zoom(t.deltaY>0?1.25:.8,this.tOf(t.clientX-n.left,n.width))):(Math.abs(t.deltaX)>Math.abs(t.deltaY)||t.shiftKey)&&(t.preventDefault(),this.pan((t.deltaX||t.deltaY)/600))}draw(){let t=this.theme(),s=this.c.parentElement.clientWidth;this.nameW=s<640?112:190;let r=this.data?this.data.signals:[],o=this.axisH+Math.max(r.length,3)*this.rowH+8,c=window.devicePixelRatio||1;this.c.style.width=s+"px",this.c.style.height=o+"px",this.c.width=Math.round(s*c),this.c.height=Math.round(o*c);let i=this.ctx;if(i.setTransform(c,0,0,c,0,0),i.fillStyle=t.bg,i.fillRect(0,0,s,o),i.font="12px 'JetBrains Mono', ui-monospace, monospace",i.textBaseline="middle",!this.data){i.fillStyle=t.muted,i.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,o/2);return}let m=this.t1-this.t0,y=(s-this.nameW)/110,u=m/Math.max(1,y),l=Math.pow(10,Math.floor(Math.log10(u))),f=[1,2,5,10].map(k=>k*l).find(k=>k>=u)||l*10;i.strokeStyle=t.grid,i.fillStyle=t.muted,i.lineWidth=1;for(let k=Math.ceil(this.t0/f)*f;k<=this.t1;k+=f){let q=Math.round(this.xOf(k,s))+.5;i.beginPath(),i.moveTo(q,this.axisH-6),i.lineTo(q,o),i.stroke(),i.fillText(Le(k,this.data.timescale),q+3,11)}if(i.strokeStyle=t.line,i.beginPath(),i.moveTo(0,this.axisH+.5),i.lineTo(s,this.axisH+.5),i.stroke(),r.forEach((k,q)=>{let T=this.axisH+q*this.rowH,D=T+6,G=T+this.rowH-6,I=(D+G)/2;i.fillStyle=q%2?t.rowAlt:t.bg,i.fillRect(0,T+1,s,this.rowH-1),i.fillStyle=t.text;let ee=k.short+(k.width>1&&!k.short.includes("[")?` [${k.width-1}:0]`:"");if(i.fillText(yt(i,ee,this.nameW-16),10,I),i.save(),i.beginPath(),i.rect(this.nameW,T,s-this.nameW,this.rowH),i.clip(),k.kind==="assert"){this.drawAssert(i,k,s,D,G,I,t),i.restore();return}let te=k.changes;for(let J=0;J<te.length;J++){let ne=te[J][0],re=J+1<te.length?te[J+1][0]:this.data.endTime;if(re<this.t0||ne>this.t1)continue;let R=this.xOf(ne,s),K=this.xOf(re,s),V=te[J][1];if(k.width===1&&typeof V=="string"){let se=V==="x"?t.x:V==="z"?t.z:t.wave;i.strokeStyle=se,i.lineWidth=1.5,V==="x"&&(i.fillStyle=t.xFill,i.fillRect(R,D,K-R,G-D));let ie=V==="1"?D:V==="0"?G:I;if(i.beginPath(),J>0){let B=te[J-1][1],ge=B==="1"?D:B==="0"?G:I;i.moveTo(R,ge)}else i.moveTo(R,ie);i.lineTo(R,ie),i.lineTo(K,ie),i.stroke()}else{let se=Qe(k,V,this.radix),ie=se==="x"||se==="z";i.strokeStyle=ie?t.x:t.wave,i.lineWidth=1.2,i.fillStyle=ie?t.xFill:t.busFill;let B=Math.min(4,(K-R)/2);i.beginPath(),i.moveTo(R,I),i.lineTo(R+B,D),i.lineTo(K-B,D),i.lineTo(K,I),i.lineTo(K-B,G),i.lineTo(R+B,G),i.closePath(),i.fill(),i.stroke();let ge=K-R-10;ge>14&&(i.fillStyle=t.text,i.fillText(yt(i,se,ge),Math.max(R,this.nameW)+6,I))}}i.restore()}),i.strokeStyle=t.line,i.beginPath(),i.moveTo(this.nameW+.5,0),i.lineTo(this.nameW+.5,o),i.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let k=Math.round(this.xOf(this.cursor,s))+.5;i.strokeStyle=t.cursor,i.lineWidth=1.5,i.beginPath(),i.moveTo(k,0),i.lineTo(k,o),i.stroke()}}};Ee.prototype.drawAssert=function(e,t,n,s,r,o,c){let i={pass:c.pass||"#2e9d5b",fail:c.fail||"#d64545",cover:c.coverc||"#3b7dd8",incomplete:c.muted,disabled:c.muted};e.strokeStyle=c.grid,e.lineWidth=1,e.beginPath(),e.moveTo(this.nameW,o),e.lineTo(n,o),e.stroke();let m=t.events||[];for(let y of m){if(y.s1<this.t0||y.s0>this.t1)continue;let u=this.xOf(y.s0,n),l=this.xOf(y.s1,n),f=i[y.kind]||c.muted;(y.kind==="fail"||y.kind==="incomplete"||l-u>3&&m.length<400)&&(e.globalAlpha=y.kind==="fail"?.28:.14,e.fillStyle=f,e.fillRect(u,s+3,Math.max(1,l-u),r-s-6),e.globalAlpha=1),e.fillStyle=f,e.beginPath(),y.kind==="pass"?(e.moveTo(l,s),e.lineTo(l+5,r),e.lineTo(l-5,r)):y.kind==="fail"?(e.moveTo(l-6,s),e.lineTo(l+6,s),e.lineTo(l,r)):y.kind==="cover"?(e.moveTo(l,s),e.lineTo(l+5,o),e.lineTo(l,r),e.lineTo(l-5,o)):e.arc(l,o,4,0,2*Math.PI),e.closePath(),e.fill()}};function yt(e,t,n){if(e.measureText(t).width<=n)return t;for(;t.length>1&&e.measureText(t+"\u2026").width>n;)t=t.slice(0,-1);return t+"\u2026"}function Le(e,t){let n=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(t||"");if(!n)return String(e);let s=["fs","ps","ns","us","ms","s"],r=e*Number(n[1]),o=s.indexOf(n[2]);for(;o<s.length-1&&Math.abs(r)>=1e3&&r%1e3===0;)r/=1e3,o++;return o<2&&Math.abs(r)>=1e3&&(r/=1e3,o++,r=+r.toFixed(3)),`${r} ${s[o]}`}var S=e=>document.querySelector(e),wt=3e5,Et="vdd-cdc-lab-v1",Je="vdd-cdc-quiz-v1",fe="check_cdc.ys",Ae=new URL("/",location.href).href,d={example:X[0].id,track:pe[0].id,script:fe,files:{},order:[],current:fe,running:!1,mode:null,timer:null,lastVcd:null},be={yosys:null,sim:null},Ce={yosys:!1,sim:!1},Bt=e=>/\.s?v$/i.test(e)&&/\$finish\b/.test(d.files[e]||""),At=()=>[...d.order.filter(e=>/\.ys$/i.test(e)).map(e=>({value:e,label:`CDC check (${e})`})),...d.order.filter(Bt).map(e=>({value:"sim:"+e,label:`Simulate (${e})`}))];function Ke(){let e=At();return e.find(t=>t.value===d.script)||e[0]||null}function Tt(){let e=S("#script"),t=At(),n=Ke();e.innerHTML="";for(let s of t){let r=document.createElement("option");r.value=s.value,r.textContent=s.label,e.appendChild(r)}n&&(e.value=n.value),S("#script-wrap").hidden=t.length<2,S("#run-label").textContent=n&&n.value.startsWith("sim:")?"Simulate":"Run CDC check"}var de=new Map,N=null,he=S("#editor textarea"),Xe=e=>/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain";window.CodeMirror?(N=window.CodeMirror.fromTextArea(he,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),N.on("change",()=>{d.files[d.current]=N.getValue(),Fe()})):(he.classList.add("plain-editor"),he.addEventListener("input",()=>{d.files[d.current]=he.value,Fe()}));var Ge=()=>{d.files[d.current]=N?N.getValue():he.value};function et(e){Ge(),d.current=e,N?(de.has(e)||de.set(e,window.CodeMirror.Doc(d.files[e]??"",Xe(e))),N.swapDoc(de.get(e)),setTimeout(()=>N.refresh(),0)):he.value=d.files[e]??"",tt()}function Ut(e,t){et(e),N&&(N.focus(),N.setCursor({line:t-1,ch:0}),N.addLineClass(t-1,"background","cm-errline"),setTimeout(()=>N.removeLineClass(t-1,"background","cm-errline"),2500),N.scrollIntoView({line:t-1,ch:0},80))}function Ze(e,t,n){de.clear(),d.files={...e},d.order=t||Object.keys(e),d.current=n&&d.order.includes(n)?n:d.order[0],N?(de.set(d.current,window.CodeMirror.Doc(d.files[d.current]??"",Xe(d.current))),N.swapDoc(de.get(d.current))):he.value=d.files[d.current]??"",tt()}function tt(){let e=S("#tabs");e.innerHTML="";for(let t of d.order){let n=document.createElement("button");if(n.type="button",n.className="tab"+(t===d.current?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t===d.current?"true":"false"),n.textContent=t,n.addEventListener("click",()=>et(t)),e.appendChild(n),t===d.current&&d.order.length>1){let s=document.createElement("button");s.type="button",s.className="tab-x",s.textContent="\xD7",s.title="Remove "+t,s.setAttribute("aria-label","Remove file "+t),s.addEventListener("click",()=>Qt(t)),e.appendChild(s)}}Tt()}function Qt(e){Ge(),delete d.files[e],de.delete(e),d.order=d.order.filter(t=>t!==e),d.current=d.order[0],N?(de.has(d.current)||de.set(d.current,window.CodeMirror.Doc(d.files[d.current]??"",Xe(d.current))),N.swapDoc(de.get(d.current))):he.value=d.files[d.current]??"",tt(),Fe()}function Zt(){let e=(window.prompt("New file name (for example top.v, extra.sdc):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){P("File names can use letters, digits, dot, dash and underscore only.","err");return}d.files[e]===void 0&&(d.order.push(e),d.files[e]=""),et(e),Fe()}}var Oe=e=>{let t=X.find(n=>n.id===e);return t?(pe.find(n=>n.group===t.group)||pe[0]).id:null},ke=()=>pe.find(e=>e.id===d.track)||pe[0];function Ne(){let e=S("#tracks");e.innerHTML="";for(let t of pe){let n=document.createElement("button");n.type="button",n.className="track"+(t.id===ke().id?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t.id===ke().id?"true":"false"),n.innerHTML='<span class="track-t"></span><span class="track-n"></span>',n.querySelector(".track-t").textContent=t.title,n.querySelector(".track-n").textContent=X.filter(s=>s.group===t.group).length+" labs",n.addEventListener("click",()=>jt(t.id)),e.appendChild(n)}S("#track-note").textContent=ke().note}function jt(e){d.track=e,Ne(),Oe(d.example)!==e?qe(X.find(t=>t.group===ke().group).id):Se()}function Se(){let e=S("#examples");e.innerHTML="";for(let n of X.filter(s=>s.group===ke().group)){let s=document.createElement("button");s.type="button",s.className="ex"+(n.id===d.example?" active":""),s.dataset.id=n.id,s.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',s.querySelector(".ex-tag").textContent=n.tag;let r=n.quiz&&n.quiz.length?De()[n.id]:null;if(r&&r.checked){let o=document.createElement("span");o.className="ex-done",o.textContent=(r.score===r.total?"\u2713 ":"")+`quiz ${r.score}/${r.total}`,s.querySelector(".ex-tag").appendChild(o)}s.querySelector(".ex-title").textContent=n.title,s.addEventListener("click",()=>qe(n.id)),e.appendChild(s)}let t=S("#ex-select");t.innerHTML=X.filter(n=>n.group===ke().group).map(n=>`<option value="${n.id}">${n.tag} \xB7 ${n.title}</option>`).join(""),d.example&&(t.value=d.example)}function qe(e){let t=X.find(n=>n.id===e)||X[0];d.example=t.id,Oe(t.id)!==d.track&&(d.track=Oe(t.id),Ne()),d.script=t.script||fe,Ze(t.files,Object.keys(t.files),fe),Se(),Me(),Pe(),Dt(),Be(null),$t(!1),ue("Ready","idle");try{let n=new URL(location.href);n.searchParams.set("lab",t.id),n.searchParams.delete("track"),history.replaceState(null,"",n.pathname+n.search)}catch{}}function De(){try{return JSON.parse(localStorage.getItem(Je)||"{}")||{}}catch{return{}}}function nt(e){try{localStorage.setItem(Je,JSON.stringify(e))}catch{}}var He=()=>X.find(e=>e.id===d.example&&e.quiz&&e.quiz.length);function Jt(e){let t=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return t?parseFloat(t[0]):NaN}function Kt(e,t){if(e.type==="choice")return t!=null&&+t===e.answer;let n=Jt(t);return isFinite(n)&&Math.abs(n-e.answer)<=(e.tol??.01)+1e-9}var Xt=e=>e.type==="choice"?e.options[e.answer]:`${e.answer}${e.unit?" "+e.unit:""}`;function Me(){window.vddCurrentLab=d.example,dt(st,d.example,ht);let e=S("#quiz"),t=S("#quiz-list"),n=He();if(!n){e.hidden=!0;return}e.hidden=!1;let s=De()[n.id]||{},r=s.a||[];t.innerHTML="",n.quiz.forEach((o,c)=>{let i=document.createElement("li"),m=document.createElement("div");if(m.className="quiz-q",o.try){let l=document.createElement("span");l.className="quiz-try",l.textContent="Try it",m.appendChild(l)}let y=o.q.replace(/^Try it: /,"");if(m.appendChild(document.createTextNode(y.charAt(0).toUpperCase()+y.slice(1))),i.appendChild(m),o.type==="choice"){let l=document.createElement("div");l.className="quiz-opts",l.setAttribute("role","radiogroup"),o.options.forEach((f,k)=>{let q=document.createElement("label"),T=document.createElement("input");T.type="radio",T.name=`q${c}`,T.value=k,r[c]!==void 0&&+r[c]===k&&(T.checked=!0),T.addEventListener("change",()=>vt(n,c,k));let D=document.createElement("span");D.textContent=f,q.append(T,D),l.appendChild(q)}),i.appendChild(l)}else{let l=document.createElement("div");l.className="quiz-num";let f=document.createElement("input");if(f.type="text",f.inputMode="decimal",f.autocomplete="off",f.setAttribute("aria-label","Answer to question "+(c+1)),f.placeholder="e.g. 3",r[c]!==void 0&&(f.value=r[c]),f.addEventListener("input",()=>vt(n,c,f.value)),f.addEventListener("keydown",k=>{k.key==="Enter"&&je()}),l.appendChild(f),o.unit){let k=document.createElement("span");k.className="unit",k.textContent=o.unit,l.appendChild(k)}i.appendChild(l)}let u=document.createElement("div");u.className="quiz-fb",u.hidden=!0,u.setAttribute("aria-live","polite"),i.appendChild(u),t.appendChild(i)}),s.checked?je(!0):Ct(null)}function vt(e,t,n){let s=De(),r=s[e.id]||{a:[]};r.a=r.a||[],r.a[t]=n,r.checked=!1,s[e.id]=r,nt(s);let o=S("#quiz-list").children[t]?.querySelector(".quiz-fb");o&&(o.hidden=!0)}function Ct(e,t){let n=S("#quiz-score");if(e===null){n.textContent="",n.classList.remove("done");return}n.textContent=`${e} / ${t} correct`,n.classList.toggle("done",e===t)}function je(e){let t=He();if(!t)return;let n=De(),s=n[t.id]||{a:[]};s.a=s.a||[];let r=0;t.quiz.forEach((o,c)=>{let i=S("#quiz-list").children[c],m=o.type==="choice"?(i.querySelector("input:checked")||{}).value:i.querySelector("input").value;s.a[c]=m;let y=i.querySelector(".quiz-fb"),u=m===void 0||m==="",l=!u&&Kt(o,m);l&&r++,y.hidden=!1,y.className="quiz-fb "+(l?"ok":"bad"),y.innerHTML="";let f=document.createElement("b");f.textContent=l?"Correct.":u?"Not answered yet.":"Not quite.",y.appendChild(f),l&&o.explain?y.appendChild(document.createTextNode(o.explain)):!l&&!u&&y.appendChild(document.createTextNode(o.type==="number"?"Check the report or the simulation output again.":"Look at the report and the code again and try another option."))}),s.checked=!0,s.score=r,s.total=t.quiz.length,n[t.id]=s,nt(n),Ct(r,t.quiz.length),e||Se()}function en(){let e=He();if(e){try{let t=JSON.parse(localStorage.getItem("vdd-revealed-v1")||"{}");t[Je+":"+e.id]=Date.now(),localStorage.setItem("vdd-revealed-v1",JSON.stringify(t))}catch{}e.quiz.forEach((t,n)=>{let s=S("#quiz-list").children[n].querySelector(".quiz-fb");s.hidden=!1,s.className="quiz-fb shown",s.innerHTML="";let r=document.createElement("b");r.textContent="Answer: "+Xt(t)+".",s.appendChild(r),t.explain&&s.appendChild(document.createTextNode(t.explain))})}}function tn(){let e=He();if(!e)return;let t=De();delete t[e.id],nt(t),Me(),Se()}var xt=null;function Fe(){clearTimeout(xt),xt=setTimeout(Pe,400)}function Pe(){try{localStorage.setItem(Et,JSON.stringify({example:d.example,script:d.script,files:d.files,order:d.order,current:d.current}))}catch{}}function nn(){try{let e=JSON.parse(localStorage.getItem(Et)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function sn(){let e=JSON.stringify({f:d.files,o:d.order,s:d.script}),t=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(t).arrayBuffer()),s="";for(let r of n)s+=String.fromCharCode(r);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function an(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=new Blob([Uint8Array.from(t,s=>s.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function Re(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{n=document.execCommand("copy")}catch{}r.remove()}if(t){let s=t.dataset.label||t.textContent;t.dataset.label=s,t.textContent=n?"Copied":"Press Ctrl+C",t.classList.toggle("ok",n),setTimeout(()=>{t.textContent=s,t.classList.remove("ok")},1600)}}function St(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var Te=S("#console"),Ve=[];function Dt(){Te.textContent="",Ve=[]}function P(e,t){Ve.push(e);let n=document.createElement("div");n.className="ln "+(t||"");let s=/\b([\w.-]+\.(?:v|sv|ys|sdc)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|sdc)),? line (\d+)\b/.exec(e);if(s&&d.files[s[1]]!==void 0){let r=e.indexOf(s[0]);n.appendChild(document.createTextNode(e.slice(0,r)));let o=document.createElement("button");o.type="button",o.className="loc",o.textContent=s[0],o.addEventListener("click",()=>Ut(s[1],+s[2])),n.appendChild(o),n.appendChild(document.createTextNode(e.slice(r+s[0].length)))}else n.textContent=e;t||(/^VIOLATION|\bERROR\b|\berror\b|Error:|\bFAIL\b|Internal error/.test(e)?n.classList.add("err"):/^CAUTION|^Warning|\bwarning\b/i.test(e)?n.classList.add("warn"):/^OK\s|\bPASS\b/.test(e)?n.classList.add("pass"):/^(Clock domains|Summary|CDC report|Notes)/.test(e)&&n.classList.add("sec")),Te.appendChild(n),Te.childElementCount>2e4&&Te.firstChild.remove()}function Be(e){let t=S("#summary");if(t.innerHTML="",!e||!e.length){t.hidden=!0;return}for(let[n,s,r]of e){let o=document.createElement("div");o.className="chip "+(r||"");let c=document.createElement("span");c.className="k",c.textContent=n;let i=document.createElement("span");i.className="v",i.textContent=s,o.append(c,i),t.appendChild(o)}t.hidden=!1}function ue(e,t){let n=S("#status");n.textContent=e,n.dataset.kind=t}var oe=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),j=new Ee(S("#wave"),{theme:()=>({bg:oe("--wave-bg"),rowAlt:oe("--wave-row"),grid:oe("--wave-grid"),line:oe("--line"),text:oe("--text"),muted:oe("--muted"),wave:oe("--wave"),busFill:oe("--wave-bus"),x:oe("--wave-x"),xFill:oe("--wave-xfill"),z:oe("--wave-z"),cursor:oe("--accent")}),onCursor:e=>{let t=S("#wave-values");if(e===null||!j.data){t.textContent="";return}t.innerHTML="";let n=document.createElement("div");n.className="cur-time",n.textContent="Cursor @ "+Le(e,j.data.timescale),t.appendChild(n);for(let s of j.data.signals){let r=document.createElement("div");r.className="cur-row";let o=document.createElement("span");o.textContent=s.name;let c=document.createElement("span");c.textContent=Qe(s,kt(s,e),j.radix),r.append(o,c),t.appendChild(r)}}});window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>j.draw());function $t(e){S("#wave-pane").hidden=!e,e||(j.clear(),S("#wave-values").textContent="",S("#wave-meta").textContent="")}function Ye(e){be[e]&&be[e].terminate(),Ce[e]=!1;let t=e==="yosys"?new Worker(new URL("synth/worker.js",Ae).href,{type:"module"}):new Worker(new URL("verilog/worker.js",Ae).href),n=new URL(e==="yosys"?"synth/":"verilog/",Ae).href;t.onmessage=s=>e==="yosys"?on(s.data):rn(s.data),t.onerror=s=>{P((e==="yosys"?"Yosys":"The simulator")+" failed to start: "+(s.message||"worker error"),"err"),xe(!1)},t.postMessage({type:"load",base:n}),be[e]=t}var Ie=[],We={};function on(e){if(e.type==="ready")Ce.yosys=!0,!d.running&&S("#status").dataset.kind==="busy"&&ue("Ready","idle");else if(e.type==="stage")d.mode==="yosys"&&ue(e.stage+"\u2026","busy");else if(e.type==="line")Ie.push(e.line);else if(e.type==="file")We[e.name]=e.content;else if(e.type==="done"&&d.mode==="yosys"){if(!e.ok||!We["design.json"]){for(let n of Ie)P(n,/ERROR/.test(n)?"err":"");P(e.ok?"\u2500\u2500 The script did not write design.json: keep the write_json design.json line \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),xe(!1);return}let t=Ie.filter(n=>/^Warning/.test(n));for(let n of t)P(n);P(`\u2500\u2500 Yosys read the design in ${e.ms} ms; checking clock domain crossings \u2500\u2500`,"meta");try{let n=d.order.find(i=>/\.sdc$/i.test(i)),s=(/-top\s+(\S+)/.exec(d.files[Ke().value]||"")||[])[1],r=d.order.find(i=>/\.waive$/i.test(i)),o=_t(JSON.parse(We["design.json"]),n?d.files[n]:"",s,r?d.files[r]:"");n||P("No .sdc file: every clock is treated as its own asynchronous domain.","warn");for(let i of ft(o))P(i);let c=o.summary;Be([["Clock domains",String(c.domains)],["Crossing bits",String(c.crossings)],["Synchronizers",String(c.synchronizers)],["Violations",String(c.violations),c.violations?"bad":"good"],["Cautions",String(c.cautions),c.cautions?"warn":""],...c.waived?[["Waived",String(c.waived),"warn"]]:[]]),xe(!0)}catch(n){P("CDC check failed: "+(n.message||n),"err"),xe(!1)}}}function rn(e){if(e.type==="ready")Ce.sim=!0,!d.running&&S("#status").dataset.kind==="busy"&&ue("Ready","idle");else if(e.type==="stage"){if(d.mode!=="sim")return;ue(e.stage+"\u2026","busy"),e.stage==="Simulating"&&P("\u2500\u2500 simulation output \u2500\u2500","meta")}else if(e.type==="line")P(e.line.replace(/\/work\//g,""),e.stream==="err"&&/error/i.test(e.line)?"err":"");else if(e.type==="done"&&d.mode==="sim"){if(e.ok){P(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta");let t=Ve.join(`
`),n=/^PASS\b/m.test(t),s=/\bFAIL\b/.test(t),r=(t.match(/\bA[1-9] (data|req)/g)||[]).length,o=[];(n||s)&&o.push(["Result",s?"FAIL":"PASS",s?"bad":"good"]),r&&o.push(["Assertion failures",String(r),"bad"]),Be(o);let c=(e.vcd||[])[0];if(c){d.lastVcd=c,$t(!0);try{let i=bt(c.text);j.setData(i),S("#wave-meta").textContent=`${i.signals.length} signals \xB7 ${Le(i.endTime,i.timescale)}`}catch(i){P("Could not read waveform: "+i.message,"err")}}}else e.phase==="compile"?P("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):e.phase==="sim"&&P(`\u2500\u2500 simulation exited with code ${e.rc} \u2500\u2500`,"meta err");xe(e.ok)}}function qt(){if(d.running)return;window.vddSubscribe&&window.vddSubscribe(),Ge(),Pe();let e=Ke();if(!e){P(`Add a Yosys script (${fe}) or a testbench to run.`,"err");return}if(Dt(),Be(null),d.running=!0,S("#run").disabled=!0,S("#stop").disabled=!1,e.value.startsWith("sim:")){d.mode="sim";let t=e.value.slice(4),n=(/^\s*module\s+(\w+)/m.exec(d.files[t])||[])[1]||"";be.sim||Ye("sim"),ue(Ce.sim?"Compiling\u2026":"Loading simulator\u2026","busy"),P(`$ iverilog -g2012 -s ${n} ${d.order.filter(r=>/\.s?v$/i.test(r)).join(" ")} && vvp`,"meta");let s={};for(let r of d.order)/\.(s?v|vh|svh|sdf)$/i.test(r)&&(s[r]=d.files[r]);(window.vddQ=window.vddQ||[]).push("sim"),be.sim.postMessage({type:"run",files:s,std:"2012",top:n,base:new URL("verilog/",Ae).href})}else{d.mode="yosys",Ie=[],We={},be.yosys||Ye("yosys"),ue(Ce.yosys?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),P(`$ yosys -s ${e.value}   then the CDC check with ${d.order.find(n=>/\.sdc$/i.test(n))||"no SDC"}`,"meta");let t={};for(let n of d.order)/\.vcd$/i.test(n)||(t[n]=d.files[n]);(window.vddQ=window.vddQ||[]).push("cdc"),be.yosys.postMessage({type:"run",files:t,script:e.value,dataFiles:[],base:new URL("synth/",Ae).href})}clearTimeout(d.timer),d.timer=setTimeout(()=>zt(`Stopped after ${wt/1e3} s.`),wt)}function zt(e){if(!d.running)return;P(e||"Stopped.","meta err");let t=d.mode;xe(!1,!0),Ye(t)}function xe(e,t){clearTimeout(d.timer),d.running=!1,S("#run").disabled=!1,S("#stop").disabled=!0,Te.scrollTop=0,ue(t?"Stopped":e?"Done":"Errors",t||!e?"err":"ok")}function cn(){S("#run").addEventListener("click",qt),S("#stop").addEventListener("click",()=>zt()),S("#script").addEventListener("change",e=>{d.script=e.target.value,Tt(),Pe()}),S("#new-file").addEventListener("click",Zt),S("#quiz-check").addEventListener("click",()=>je()),S("#quiz-reveal").addEventListener("click",en),S("#quiz-reset").addEventListener("click",tn),S("#ex-select").addEventListener("change",e=>qe(e.target.value)),S("#reset").addEventListener("click",()=>qe(d.example||X[0].id)),S("#copy-file").addEventListener("click",e=>Re(N?N.getValue():he.value,e.currentTarget)),S("#download-file").addEventListener("click",()=>St(d.current,N?N.getValue():he.value)),S("#copy-output").addEventListener("click",e=>Re(Ve.join(`
`),e.currentTarget)),S("#share").addEventListener("click",async e=>{let t=e.currentTarget;Ge();try{let n=await sn();history.replaceState(null,"","#code="+n),Re(location.href.split("#")[0]+"#code="+n,t)}catch{Re(location.href,t)}}),S("#zoom-in").addEventListener("click",()=>j.zoom(.5)),S("#zoom-out").addEventListener("click",()=>j.zoom(2)),S("#zoom-fit").addEventListener("click",()=>j.fit()),S("#pan-left").addEventListener("click",()=>j.pan(-.4)),S("#pan-right").addEventListener("click",()=>j.pan(.4)),S("#radix").addEventListener("change",e=>{j.radix=e.target.value,j.draw(),j.onCursor(j.cursor)}),S("#dl-vcd").addEventListener("click",()=>{d.lastVcd&&St("waves.vcd",d.lastVcd.text)}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),qt())})}async function ln(){cn();let e=!1,t=new URLSearchParams(location.search),n=new URLSearchParams(location.hash.slice(1)).get("code"),s=t.get("lab"),r=t.get("track");if(d.track=pe.some(o=>o.id===r)?r:pe[0].id,Ne(),n)try{let o=await an(n);d.example=null,d.script=o.s||fe,Ze(o.f,o.o,fe),Se(),Me(),e=!0}catch{}if(!e&&s&&X.some(o=>o.id===s)&&(qe(s),e=!0),!e&&!r){let o=nn();o&&X.some(c=>c.id===o.example)&&(d.example=o.example,d.track=Oe(o.example),Ne(),d.script=o.script||fe,Ze(o.files,o.order,o.current),Se(),Me(),e=!0)}e||qe(X.find(o=>o.group===ke().group).id),ue("Loading Yosys\u2026","busy"),Ye("yosys")}ln();})();
