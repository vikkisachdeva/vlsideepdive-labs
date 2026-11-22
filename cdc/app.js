(()=>{var tt={"cdc-clocks":{problem:"A chip has many clocks. Before you can check any crossing you must know which clocks are related (same source) and which are asynchronous. A wrong guess hides real bugs or floods you with false ones.",tasks:["Run the CDC check and read the clock table.","Find out why clk_sys \u2192 clk_div2 is not a crossing.","Declare clk_ext asynchronous in clocks.sdc and run again."],learn:"Sort clocks into domains, read set_clock_groups, and tell a real crossing from a synchronous path."},"cdc-find":{problem:"A CPU-to-peripheral bridge passes a write strobe, a data bus, a busy flag and an interrupt between clocks. Some crossings are safe, some can go metastable. Your job is to review it like a design reviewer.",tasks:["Read soc_bridge.v and decide which of the four crossings are safe.","Run the CDC check and compare with your answer.","Work out the MTBF of a synchronizer in the quiz."],learn:"Spot unsynchronized crossings, and estimate how often a synchronizer fails (MTBF)."},"cdc-fix":{problem:"Three signals are synchronized, yet each one is built wrong: logic before the synchronizer, a first stage that fans out, and a single flop. They pass simulation and fail in silicon.",tasks:["Run the CDC check and read the three violations.","Fix status_sync.v one mistake at a time.","Run until the report is clean."],learn:"The rules every synchronizer must follow, and how to fix the three most common mistakes."},"cdc-pulse":{problem:"A one-cycle pulse from a fast clock can fall between two edges of a slow clock and be lost. Two flops alone do not fix this.",tasks:["Run the CDC check on the toggle synchronizer.","Simulate and watch tog, s1, s2 and pulse_out in the waveform.","Send pulses closer together (GAP = 1) and count how many are lost."],learn:"How a toggle (pulse) synchronizer works, and how fast the source may send pulses."},"cdc-bus":{problem:"An 8-bit bus cannot go through eight separate synchronizers: bits arrive in different cycles and the destination reads a value that was never sent.",tasks:["Run the CDC check: see how the bus is qualified by one synchronized signal.","Simulate and check that all words arrive.","Shorten the gap between words and find where it breaks."],learn:"Pass a multi-bit bus safely with a synchronized enable, and why the source must hold the data stable."},"cdc-reset":{problem:"Asynchronous reset may assert at any time, but if it releases asynchronously, flops leave reset in different cycles and the design starts in a broken state.",tasks:["Run the CDC check: one reset is synchronized, one is not, one borrows another clock's reset.","Simulate and read when each register leaves reset.","Decide how to fix rb_q and rx_q."],learn:"Build a reset synchronizer: assert asynchronously, release synchronously, one per clock domain."},"cdc-handshake":{problem:"You need to send data between two clocks whose ratio you do not know, or that may change. Open-loop schemes need you to know the clocks; a handshake does not.",tasks:["Run the CDC check: only req and ack are synchronized.","Simulate and follow one word through req, ack and dout.","Change the destination clock and see the handshake adapt."],learn:"The 4-phase req/ack handshake: safe for any clock ratio, and what it costs in throughput."},"cdc-fifo":{problem:"A handshake moves one word every few cycles. To stream one word per clock between two clocks you need an asynchronous FIFO, and its pointers must cross safely.",tasks:["Run the CDC check: find out why the pointer crossings are only cautions.","Simulate and watch the full and empty flags.","Make the reader faster and see the FIFO never fill."],learn:"How an async FIFO works: Gray-coded pointers, synchronized full and empty."},"cdc-assert":{problem:"A CDC check looks at structure. It cannot see a protocol bug: data that changes while it is being captured, or a request that is too short to cross. These bugs only show up in simulation, if you check for them.",tasks:["Simulate with BUG = 0: all three assertions pass.","Turn on BUG = 1, then BUG = 2, and see which assertion fires.","Read the waveform where each assertion fails."],learn:"Write CDC assertions: data stability, request/acknowledge order and pulse width."},"x-consolidate":{problem:"Two control signals that must act together are synchronized separately. Each crossing is clean, but they can arrive one cycle apart, and the destination sees a state the source never sent. Plain RTL simulation hides it.",tasks:["Run the CDC check: find the reconvergence caution.","Simulate with the metastability model and count b_partial cycles.","Turn the model off, then fix the design with CONSOLIDATE = 1."],learn:"Consolidate control signals before crossing, and use a simulation model that exposes synchronizer delays."},"x-mcp":{problem:"You need to pass a bus without synchronizing every bit, and the source must know when it may send the next word.",tasks:["Run the CDC check: the data is qualified by one toggle.","Simulate and measure the time for 12 words.","Remove the acknowledge and see what breaks."],learn:"Multi-cycle path (MCP) formulation with a 2-phase toggle and acknowledge feedback."},"x-gray":{problem:"A counter must be passed to another clock, for example a FIFO pointer. Binary counters change many bits at once, so the destination can read a value the counter never had.",tasks:["Run the CDC check: it cannot tell binary from Gray.","Simulate with GRAY = 0 and count the impossible values.","Switch to GRAY = 1 and simulate again."],learn:"Gray code counters: why one-bit-per-step changes make a multi-bit crossing safe."},"x-fifo":{problem:"A real 2-clock FIFO must be easy to synthesize and time: only a few clearly named signals may cross, and full and empty must never be wrong.",tasks:["Read how fifo2.sv is split into single-clock modules.","Run the CDC check and simulate.","Switch the pointers to binary and watch the impossible pointer values appear."],learn:"Partition a 2-clock FIFO, generate full and empty correctly, and name signals by clock domain."},"x-gls-sdf":{problem:"In gate-level simulation with SDF, the first flop of every synchronizer samples an asynchronous input, so its setup/hold check fails now and then. The notifier makes Q unknown and the X spreads through the design, although silicon would just settle to 0 or 1.",tasks:["Simulate and read the timing violations and the X on b_cnt.","Turn timing checks off on sync1_reg only, with `define IGNORE_SYNC_TCHECK.","Simulate again: no X, and every other flop is still checked."],learn:"Why synchronizer first stages need a timing-check exception in GLS, and why only those."},"x-recon":{problem:"Two separately synchronized controls meet in a state machine. The CDC check flagged the reconvergence and the designer waived it with a reason that turns out to be false. Zero-delay simulation passes; metastability injection makes the FSM take the wrong branch.",tasks:["Run the CDC check and read the WAIVED entry.","Simulate with the metastability model and count wrong branches.","Turn the model off, then read what A_WAIVER says."],learn:"How a wrong waiver hides a real CDC bug, and why every waiver needs an assertion."},"x-recon-fix":{problem:"The same command, designed so nothing can reconverge: one control signal crosses, and the mode is qualified data loaded when that control arrives.",tasks:["Run the CDC check: clean, no waiver.","Simulate with the same commands and seed as lab 6.","Read A_STABLE: the condition that keeps the qualified capture safe."],learn:"Fix reconvergence with one synchronized control and qualified data (or consolidation, or Gray coding)."}};var At="http://www.w3.org/2000/svg",z=(t,e,n)=>{let s=document.createElementNS(At,t);for(let[i,o]of Object.entries(e||{}))s.setAttribute(i,o);return n&&n.appendChild(s),s};function Tt(t){let e=t.trim(),n="port",s="",i=/^([\s\S]*?)([!+])?$/.exec(e),o=y=>{let b=/^([\s\S]*?)([!+])$/.exec(y);return b?(s=s||b[2],b[1]):y};e=o(i[0]);let c=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[y,b,q]of c)if(e.startsWith(y)&&e.endsWith(b)){n=q,e=e.slice(1,-1);break}n==="port"&&e.startsWith("@")&&(n="clk",e=e.slice(1)),e=o(e);let r=null,m=e.lastIndexOf("|");m>0&&(r=e.slice(m+1).trim(),e=e.slice(0,m));let k=e.indexOf("#"),g=e.trim();k>=0&&(e=e.slice(0,k));let h=e.replace(/\\n/g,`
`).trim();return{id:n+":"+g,label:h,kind:n,dom:r,mark:s}}function Dt(t){let e=new Map,n=[],s=i=>{if(!e.has(i.id))e.set(i.id,{...i,order:e.size});else{let o=e.get(i.id);o.dom=o.dom||i.dom,o.mark=o.mark||i.mark}return e.get(i.id)};for(let i of t.split(";").map(o=>o.trim()).filter(Boolean)){let o=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,c=0,r=null,m=null,k,g=[];for(;k=o.exec(i);)g.push([i.slice(c,k.index),k]),c=o.lastIndex;g.push([i.slice(c),null]);for(let[h,y]of g){let b=s(Tt(h));if(r&&m&&n.push({a:r,b,...m}),r=b,y){let q=y[1]||"";m={label:(y[2]||"").trim(),kind:q==="~"?"bad":q==="+"?"good":q==="."?"dash":"plain"}}}}return{nodes:[...e.values()],edges:n}}function $t(t){let e=t.label.split(`
`),n=Math.max(...e.map(s=>s.length))*6.9;return t.kind==="port"||t.kind==="clk"?{w:Math.max(28,n+(t.kind==="clk"?26:12)),h:Math.max(24,e.length*15+6),lines:e}:t.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,e.length*15+22),lines:e}:{w:Math.max(54,n+24),h:Math.max(34,e.length*15+16),lines:e}}function nt(t){let e=typeof t=="string"?Dt(t):t,{nodes:n,edges:s}=e;if(!n.length)return null;let i=new Map(n.map(u=>[u,[]]));for(let u of s)u.a!==u.b&&i.get(u.a).push(u);let o=new Map,c=new Set,r=u=>{o.set(u,1);for(let d of i.get(u)){let x=o.get(d.b);x===1?c.add(d):x||r(d.b)}o.set(u,2)};for(let u of n)o.get(u)||r(u);let m=new Set(s.filter(u=>u.kind==="dash"&&s.some(d=>d.b===u.b&&d.kind!=="dash"))),k=new Map(n.map(u=>[u,0]));for(let u=0;u<n.length;u++){let d=!1;for(let x of s)x.a!==x.b&&!c.has(x)&&!m.has(x)&&k.get(x.b)<k.get(x.a)+1&&(k.set(x.b,k.get(x.a)+1),d=!0);if(!d)break}let g=Math.max(...k.values());for(let u of n)u.kind==="port"&&!i.get(u).length&&s.some(d=>d.b===u)&&k.get(u)<g&&k.set(u,g);let h=[];for(let u of n){let d=k.get(u);(h[d]=h[d]||[]).push(u)}let y=[...new Set(n.map(u=>u.dom).filter(Boolean))],b=u=>u.dom?y.indexOf(u.dom):-1;for(let u of h)u&&u.sort((d,x)=>b(d)-b(x)||d.order-x.order);for(let u of n)Object.assign(u,$t(u));let q=22,A=18,D=h.map((u,d)=>Math.max(46,...s.filter(x=>k.get(x.a)===d&&k.get(x.b)>d&&x.label).map(x=>x.label.length*6.2+30))),G=new Map;for(let u of n){let d=u.dom;if(!d){let x=s.find($=>$.a===u&&$.b.dom||$.b===u&&$.a.dom);d=x?x.a===u?x.b.dom:x.a.dom:null}G.set(u,d||"")}let W=[...new Set(n.map(u=>G.get(u)))];W.includes("")&&(W.splice(W.indexOf(""),1),W.unshift(""));let ee=y.length>0,te=ee?34:0,Z=W.map(u=>Math.max(0,...h.map(d=>{let x=(d||[]).filter($=>G.get($)===u);return x.reduce(($,I)=>$+I.h,0)+Math.max(0,x.length-1)*q}))),ne=[],re=A+(ee?22:14);W.forEach((u,d)=>{ne[d]=re,re+=Z[d]+(d<W.length-1?te:0)});let R=re-A-(ee?22:14),V=A,B=new Map,se=0;h.forEach((u,d)=>{if(!u)return;let x=Math.max(...u.map($=>$.w));W.forEach(($,I)=>{let O=u.filter(M=>G.get(M)===$),F=O.reduce((M,U)=>M+U.h,0)+Math.max(0,O.length-1)*q,H=ne[I]+(Z[I]-F)/2;for(let M of O)B.set(M,{x:V+(x-M.w)/2,y:H,w:M.w,h:M.h}),H+=M.h+q}),V+=x+D[d]});let ie=c.size>0,j=V-(D[h.length-1]||46)+A;se=A*2+(ee?22:14)+R+(ie?26:0);let ae=z("svg",{viewBox:`0 0 ${j} ${se}`,class:"dg dg-block",role:"img"});ae.style.maxWidth=j+"px",ae.style.minWidth=Math.round(Math.min(j,Math.max(j*.72,320)))+"px";let ce=z("defs",{},ae);for(let u of["plain","bad","good","dash"]){let d=z("marker",{id:"dg-ar-"+u,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},ce);z("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+u},d)}y.forEach((u,d)=>{let x=n.filter(U=>U.dom===u).map(U=>B.get(U)),$=W.indexOf(u),I=Math.min(...x.map(U=>U.x))-10,O=ne[$]-22,F=Math.max(...x.map(U=>U.x+U.w))+10,H=ne[$]+Z[$]+8;z("rect",{x:I,y:O,width:F-I,height:H-O,rx:10,class:`dg-dom dg-d${d%4}`},ae);let M=z("text",{x:I+8,y:O+13,class:`dg-domlabel dg-d${d%4}`},ae);M.textContent=u});let we=A+(ee?22:14)+R+10,ge=z("g",{},ae);for(let u of s){let d=B.get(u.a),x=B.get(u.b),$,I,O;if(u.a===u.b)$=`M${d.x+d.w-10},${d.y} C${d.x+d.w+20},${d.y-26} ${d.x+10},${d.y-26} ${d.x+14},${d.y}`,I=d.x+d.w/2,O=d.y-22;else if(c.has(u)||k.get(u.b)<=k.get(u.a)){let F=d.x+d.w/2,H=x.x+x.w/2;$=`M${F},${d.y+d.h} C${F},${we+14} ${H},${we+14} ${H},${x.y+x.h}`,I=(F+H)/2,O=we+8}else{let F=d.x+d.w,H=d.y+d.h/2,M=x.x,U=x.y+x.h/2,me=(F+M)/2;$=`M${F},${H} C${me},${H} ${me},${U} ${M},${U}`;let ve=k.get(u.b)-k.get(u.a),X=ve>1?.5/ve:.5,K=1-X;I=K*K*K*F+3*K*K*X*me+3*K*X*X*me+X*X*X*M,O=K*K*K*H+3*K*K*X*H+3*K*X*X*U+X*X*X*U}if(z("path",{d:$,class:"dg-edge dg-"+u.kind,"marker-end":`url(#dg-ar-${u.kind})`},ge),u.label){let F=u.label.length*6.2+8;z("rect",{x:I-F/2,y:O-9,width:F,height:14,rx:3,class:"dg-elbg"},ge);let H=z("text",{x:I,y:O+2,class:"dg-elabel dg-"+u.kind,"text-anchor":"middle"},ge);H.textContent=u.label}}for(let u of n){let d=B.get(u),x=z("g",{class:`dg-node dg-k-${u.kind}${u.mark==="!"?" dg-bad":u.mark==="+"?" dg-good":""}`},ae);if(u.kind==="reg")z("rect",{x:d.x,y:d.y,width:d.w,height:d.h,rx:3,class:"dg-shape"},x),z("path",{d:`M${d.x},${d.y+d.h-12} L${d.x+7},${d.y+d.h-7} L${d.x},${d.y+d.h-2}`,class:"dg-tri"},x);else if(u.kind==="logic")z("rect",{x:d.x,y:d.y,width:d.w,height:d.h,rx:Math.min(16,d.h/2),class:"dg-shape"},x);else if(u.kind==="block")z("rect",{x:d.x,y:d.y,width:d.w,height:d.h,rx:6,class:"dg-shape"},x);else if(u.kind==="mux")z("path",{d:`M${d.x},${d.y} L${d.x+d.w},${d.y+10} L${d.x+d.w},${d.y+d.h-10} L${d.x},${d.y+d.h} z`,class:"dg-shape"},x);else if(u.kind==="clk"){let O=d.y+d.h/2;z("path",{d:`M${d.x+2},${O+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},x)}let $=u.lines,I=u.kind==="clk"?d.x+24:d.x+d.w/2;$.forEach((O,F)=>{let H=z("text",{x:I,y:d.y+d.h/2+(F-($.length-1)/2)*15+4,"text-anchor":u.kind==="clk"?"start":"middle",class:"dg-label"},x);H.textContent=O})}return ae}function Lt(t,e){let n=t.split(/\s+/),s=[],i="";for(let o of n)i&&(i+" "+o).length>e?(s.push(i),i=o):i=i?i+" "+o:o;return i&&s.push(i),s}var zt={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function st(t){if(!t||!t.length)return null;let e=300,n=12,s=42,i=18,o=t.map(h=>{let y=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(h)||[null,"S",h],b=Lt(y[2],s),q=zt[y[1]];return{k:y[1],lines:b,tag:q,h:b.length*15+(q?30:16)}}),c=o.reduce((h,y)=>h+y.h,0)+i*(o.length-1)+16,r=z("svg",{viewBox:`0 0 ${e+16} ${c}`,class:"dg dg-flow",role:"img"});r.style.maxWidth=e+16+"px";let m=z("defs",{},r),k=z("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},m);z("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},k);let g=8;return o.forEach((h,y)=>{let b=z("g",{class:"dg-fl dg-fl-"+h.k},r);h.k==="Q"?z("path",{d:`M22,${g} H${8+e-14} L${8+e},${g+h.h/2} L${8+e-14},${g+h.h} H22 L8,${g+h.h/2} z`,class:"dg-shape"},b):z("rect",{x:8,y:g,width:e,height:h.h,rx:h.k==="S"?6:10,class:"dg-shape"},b);let q=g+18;if(h.tag){let A=z("text",{x:8+n+(h.k==="Q"?10:0),y:q,class:"dg-ftag"},b);A.textContent=h.tag.toUpperCase(),q+=16}for(let A of h.lines){let D=z("text",{x:8+n+(h.k==="Q"?10:0),y:q,class:"dg-ftext"},b);D.textContent=A,q+=15}g+=h.h,y<o.length-1&&(z("path",{d:`M${8+e/2},${g+1} V${g+i-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},r),g+=i)}),r}function at(t,e,n){let s=document.getElementById("lab-brief");if(!s)return;let i=t[e];if(!i){s.hidden=!0;return}s.querySelector(".brief-problem").textContent=i.problem;let o=s.querySelector(".brief-tasks");o.innerHTML="";for(let g of i.tasks){let h=document.createElement("li");h.textContent=g,o.appendChild(h)}s.querySelector(".brief-learn").textContent=i.learn;let c=s.querySelector(".brief-fig"),r=i.images||(i.image?[{src:i.image,alt:i.imageAlt||""}]:[]);if(r.length||i.html){if(c||(c=document.createElement("figure"),c.className="brief-fig",s.appendChild(c)),c.innerHTML="",r.length){let g=document.createElement("div");g.className="brief-imgs";for(let h of r){let y=document.createElement("a");y.href=h.src,y.target="_blank",y.rel="noopener";let b=document.createElement("img");b.src=h.src,b.alt=h.alt||"",b.loading="lazy",y.appendChild(b),g.appendChild(y)}c.appendChild(g)}if(i.html){let g=document.createElement("div");g.className="brief-html",g.innerHTML=i.html,c.appendChild(g)}if(i.caption){let g=document.createElement("figcaption");g.textContent=i.caption,c.appendChild(g)}}else c&&c.remove();let m=s.querySelector(".brief-dg"),k=n&&n[e];if(k&&(k.b||k.f)){m||(m=document.createElement("div"),m.className="brief-dg",s.querySelector(".brief-body").after(m)),m.innerHTML="";let g=(h,y)=>{if(!y)return;let b=document.createElement("div");b.className="brief-dgp";let q=document.createElement("h3");q.textContent=h,b.appendChild(q);let A=document.createElement("div");A.className="brief-dgs",A.appendChild(y),b.appendChild(A),m.appendChild(b)};try{g(k.bt||"Design",k.b?nt(k.b):null)}catch(h){console.warn("diagram",e,h)}try{g(k.ft||"Problem \u2192 solution",k.f?st(k.f):null)}catch(h){console.warn("flow",e,h)}m.classList.toggle("one",m.children.length===1)}else m&&m.remove();s.hidden=!1}var ot={"cdc-clocks":{b:"d_in > [a_sys|clk_sys] > [b_div|clk_div2] > q_div; [div_reg\\n\xF72|clk_sys] .clk_div2.> [b_div|clk_div2]; [a_sys|clk_sys] > [io_s1|clk_io] > [io_s2|clk_io] > q_io; [io_s2|clk_io] ~no sync~> [ext_q|clk_ext]! > q_ext",f:["P: Four clocks. Which paths are real clock domain crossings?","S: clk_div2 comes from clk_sys: same source, so clk_sys \u2192 clk_div2 is synchronous.","Q: Do clk_io and clk_ext have a common source? No: asynchronous.","X: io_s2 \u2192 ext_q crosses with no synchronizer.","F: Declare the clock relationships in the SDC and synchronize every asynchronous crossing."]},"cdc-find":{b:"wr > [wr_q|clk_cpu] > [wr_s1|clk_per] > [wr_s2|clk_per] > [busy_per|clk_per] ~direct~> [busy_c|clk_cpu]! > busy_cpu; wdata > [data_q|clk_cpu] ~direct~> [per_q|clk_per]! > per_data; irq_in > [irq_sh 3 flops|clk_cpu] > irq_sync",f:["P: Review a CPU \u2194 peripheral bridge like a design reviewer.","S: Find every signal that goes from one clock to the other.","Q: Is each one synchronized, or held stable while it is sampled?","X: data_q \u2192 per_q and busy_per \u2192 busy_c are captured directly: metastable.","F: Qualify the data with the synchronized strobe and synchronize busy."]},"cdc-fix":{b:"[err_q|clk_a] > (OR)! ~glitch~> [alarm_s1|clk_b] > [alarm_s2|clk_b]; [done_q|clk_a] > [done_s1|clk_b] > [done_s2|clk_b]; [done_s1|clk_b] ~fans out~> [seen_q|clk_b]!; [start_q|clk_a] ~1 flop~> [start_s1|clk_b]!",f:["P: Three synchronizers, each built wrong. They pass simulation.","X: Logic before the first stage can glitch; a first stage that fans out passes metastability on; one flop is not enough.","F: Register in the source domain, use only the last stage, use two flops.","OK: The CDC check shows 3 clean 2-flop synchronizers."]},"cdc-pulse":{b:"pulse_in > [tog|clk_src] > [s1|clk_dst] > [s2|clk_dst] > [s3|clk_dst]; [s2|clk_dst] > (XOR) > pulse_out; [s3|clk_dst] > (XOR)",f:["P: A one-cycle pulse from a fast clock can fall between two slow clock edges and be lost.","S: Each pulse flips a level (toggle) in the source clock.","S: The level crosses through 2 flops; it stays until the next pulse.","F: An XOR of two synchronized stages turns each level change back into one pulse.","Q: Pulses must be at least 2\u20133 destination cycles apart."]},"cdc-bus":{b:"din > [hold\\n8 bits|clk_src] -stable-> <load mux|clk_dst> > [dout|clk_dst]; send > [tog|clk_src] > [s1|clk_dst] > [s2|clk_dst] > (s2 XOR s3|clk_dst) .load.> <load mux|clk_dst>",f:["P: 8 bits through 8 synchronizers arrive in different cycles: dout can be a value never sent.","F: Hold the bus stable in the source domain; send only a 1-bit 'new data' toggle.","S: The destination loads the whole bus when the synchronized toggle changes.","OK: Every bit is stable when loaded: a multi-cycle path, not a synchronizer per bit."]},"cdc-reset":{b:"rst_n > [ra1|clk_a] > [ra2|clk_a] .rst_a_n.> [ra_q|clk_a]; rst_n ~async release~> [rb_q|clk_b]!; [ra2|clk_a] ~wrong domain~> [rx_q|clk_b]!",f:["P: An asynchronous reset may release close to a clock edge: flops leave reset in different cycles.","S: A reset synchronizer asserts at once and releases in step with its own clock.","X: rb_q uses the raw pin; rx_q uses clk_a's synchronized reset in clk_b.","F: Give every clock domain its own reset synchronizer."]},"cdc-handshake":{b:"din > [data|clk_src] -stable while req-> [dout|clk_dst]; start > {src FSM|clk_src} > [req|clk_src] > [req_s1, req_s2|clk_dst] > {take = rise|clk_dst} > [ack|clk_dst] > [ack_s1, ack_s2|clk_src] > {src FSM|clk_src}",f:["P: Send data between clocks whose ratio you do not know.","S: Source holds data and raises req.","S: Destination sees req (synchronized), takes data, raises ack.","S: Source sees ack, drops req; destination drops ack.","OK: Works for any clock ratio: only req and ack cross, the data is stable."]},"cdc-fifo":{b:"wdata > {memory 8\xD78} > rdata; [wbin \u2192 wptr Gray|wclk] > [rq1, rq2_wptr|rclk] > (empty?|rclk); [rbin \u2192 rptr Gray|rclk] > [wq1, wq2_rptr|wclk] > (full?|wclk); [wbin \u2192 wptr Gray|wclk] .waddr.> {memory 8\xD78}",f:["P: Stream one word per clock between two clocks.","S: Write and read pointers live in their own clocks.","S: Each pointer crosses as a Gray code through 2 flops: only one bit changes per step.","OK: A synchronized pointer is old or new, never wrong: full and empty are safe (maybe late)."]},"cdc-assert":{b:"din > [data|clk_src]! ~changes? (BUG 1)> [dout|clk_dst]; [req|clk_src]! ~too short? (BUG 2)> [req sync|clk_dst] > [ack|clk_dst] > [ack sync|clk_src]",f:["P: The CDC check only sees structure. Protocol bugs pass it.","S: A1: data must not change while req is high.","S: A2: req drops only after ack. A3: req lasts at least 2 destination clocks.","X: BUG = 1 or 2: the structure is the same, the assertions fail.","OK: Structural CDC check + assertions in simulation catch both kinds of bugs."]},"x-consolidate":{b:"a_load > [a_load_q|aclk] > [sync|bclk] > (AND|bclk) > b_go; a_en > [a_en_q|aclk] > [sync #2|bclk] ~1 cycle apart?~> (AND|bclk); [a_go_q = load&en|aclk]+ +CONSOLIDATE=1+> [one sync|bclk]+",f:["P: load and enable must act together, but cross through separate synchronizers.","X: They can arrive one cycle apart: b_partial, a state the source never sent.","Q: Plain RTL simulation hides it; the metastability model in sync2 shows it.","F: Consolidate: combine in aclk, register, and synchronize one bit."]},"x-mcp":{b:"a_data > [a_data held|aclk] -stable (MCP)> [b_data|bclk]; [a_en toggle|aclk] > [sync2|bclk] > (b_load = edge|bclk) .load.> [b_data|bclk]; (b_load = edge|bclk) > [b_ack toggle|bclk] > [sync2 #2|aclk] > (a_ready|aclk)",f:["P: Pass a bus without a synchronizer per bit, and know when to send the next word.","S: Hold a_data stable; toggle a_en once per word (2-phase).","S: bclk sees the toggle, loads the data, toggles b_ack back.","OK: Each data bit is a multi-cycle path; the acknowledge tells aclk when it may change."]},"x-gray":{b:"[a_bin counter|aclk] > (bin2gray|aclk) > [a_ptr|aclk] > [4 \xD7 sync2|bclk] > (gray2bin|bclk) > b_count",f:["P: A binary counter changes several bits at once (0111 \u2192 1000).","X: The bits arrive in different cycles: bclk sees a count that never existed.","F: Cross a Gray code from a register: exactly one bit changes per count.","OK: bclk sees the old or the new value, never a mix."]},"x-fifo":{b:"wdata > {fifomem} > rdata; {wptr_full|wclk} .waddr.> {fifomem}; {rptr_empty|rclk} .raddr.> {fifomem}; {wptr_full|wclk} -wptr Gray-> {sync2 \u2192 rclk|rclk} > {rptr_empty|rclk}; {rptr_empty|rclk} -rptr Gray-> {sync2 \u2192 wclk|wclk} > {wptr_full|wclk}",f:["P: A 2-clock FIFO must be easy to synthesize, time and review.","S: Split it into single-clock modules; only two sync2 modules cross.","S: Pointers have one extra bit and cross as Gray codes.","OK: Full is exact in wclk, empty in rclk; a late pointer only makes them pessimistic."]},"x-gls-sdf":{b:"[a_tog_reg|aclk] -async-> [sync1_reg|bclk]! > [sync2_reg|bclk] > [sync3_reg|bclk] > (XOR edge|bclk) > [b_cnt|bclk]; {sync_cnt.sdf} .delays.> [sync1_reg|bclk]!",f:["P: Gate-level simulation with SDF: sync1_reg samples an asynchronous input.","X: Its setup/hold check fails, the notifier makes Q = X, and the X reaches the counter for good.","Q: Is it a real bug? No: the synchronizer exists exactly for this.","F: Turn off timing checks on the first synchronizer stage only.","OK: No X; every other flop is still checked."]},"x-recon":{b:"[a_start|aclk] > [s1|bclk] > [b_start_s|bclk] > {FSM\\nIDLE\u2192FAST/SLOW|bclk}!; [a_mode|aclk] > [m1|bclk] > [b_mode_s|bclk] ~1 cycle late?~> {FSM\\nIDLE\u2192FAST/SLOW|bclk}!; {fsm_recon.waive}! .waived.> {FSM\\nIDLE\u2192FAST/SLOW|bclk}!",f:["P: start and mode are synchronized separately and meet in the FSM (reconvergence).",'S: The CDC check flags it; the designer waives it: "mode is set before start".',"Q: Is the waiver's claim true? A_WAIVER checks it in simulation.","X: With metastability injected, mode can arrive a cycle after start: the FSM takes the wrong branch.","F: Synchronize one control (start) and load mode as qualified data (lab 7)."]},"x-recon-fix":{b:"[a_start|aclk] > [sync2|bclk] > (b_load = rise|bclk) > {FSM\\nIDLE\u2192DECIDE\u2192FAST/SLOW|bclk}+; [a_mode held|aclk] -stable (qualified)> [b_mode_q|bclk]+ > {FSM\\nIDLE\u2192DECIDE\u2192FAST/SLOW|bclk}+; (b_load = rise|bclk) .load.> [b_mode_q|bclk]+",f:["P: Remove the reconvergence instead of waiving it.","F: Only a_start is synchronized.","F: a_mode is held stable and loaded once, when bclk sees start rise.","Q: A_STABLE checks a_mode is stable when it is loaded.","OK: CDC check clean without a waiver; 0 wrong branches with metastability injected."]}};var pe=[{id:"cdc",group:"CDC workshop",title:"CDC workshop",note:"9 labs that follow the 5-day clock domain crossing workshop: clocks, synchronizers, MTBF, pulse and bus synchronizers, reset, handshake, async FIFO and assertions. Each lab has a quiz."},{id:"expert",group:"Expert CDC & FIFO",title:"Expert CDC & FIFO (SystemVerilog)",note:"7 expert labs: consolidation with a metastability simulation model, MCP formulation with acknowledge, Gray code counters, a partitioned 2-clock FIFO, gate-level simulation with SDF and synchronizer timing checks, and reconvergence in a state machine (waived by mistake, then fixed). Each lab has a quiz."}],J=[{id:"cdc-clocks",group:"CDC workshop",tag:"Day 1 \xB7 Lab 1",title:"Clocks and clock domains",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 1: identify the clocks. Day 1, synchronous and asynchronous clocks.
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
`},quiz:[{type:"number",q:"How many cautions and violations does the CDC check report?",answer:0,tol:0,unit:"",explain:"a_mode is now qualified data, loaded by an enable from the one synchronized signal.",try:!1},{type:"choice",q:"How is a_mode \u2192 b_mode_q classified?",options:["2-flop synchronizer","Qualified by synchronized enable","Reconvergence","Unsynchronized crossing"],answer:1,explain:"",try:!1},{type:"number",q:"Simulate. How many commands take the wrong branch, with the same commands and seed as lab 6?",answer:0,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does A_STABLE check?",options:["The clock period","That a_mode has not changed in the last bclk period when bclk loads it: the condition that makes the qualified capture safe","That start is synchronized","The FSM encoding"],answer:1,explain:"",try:!1},{type:"choice",q:"Which other fix would also remove this reconvergence?",options:["Encode start and mode so only one bit changes per step (Gray coded command), or consolidate them into one signal in aclk","Add a third synchronizer flop","Waive it","Use a faster bclk"],answer:0,explain:"Consolidation (Expert lab 1) and Gray coding (Expert lab 3) both make one change cross at a time.",try:!1}]}];var $e=new Set(["$dff","$dffe","$adff","$adffe","$sdff","$sdffe","$sdffce","$dffsr","$dffsre","$aldff","$aldffe","$dlatch","$adlatch","$dlatchsr"]),rt=new Set(["$pos","$buf","$_BUF_"]);function Rt(t){let e={clocks:new Map,generated:[],groups:[],inputs:new Map,notes:[]},n=(t||"").replace(/\\\n/g," ").split(`
`),s=o=>(o||"").replace(/[{}]/g," ").trim().split(/\s+/).filter(Boolean),i=(o,c)=>{let r=[],m=new RegExp("\\[\\s*"+c+"\\s+([^\\]]+)\\]","g"),k;for(;k=m.exec(o);)r.push(...s(k[1]));return r};return n.forEach((o,c)=>{let r=o.replace(/#.*$/,"").trim();if(!r)return;let m=r.split(/\s+/)[0],k=g=>{let h=new RegExp("-"+g+"\\s+(\\{[^}]*\\}|\\S+)").exec(r);return h?h[1].replace(/[{}]/g,"").trim():null};if(m==="create_clock"){let g=i(r,"get_ports"),h=k("name")||g[0];if(!h||!g.length){e.notes.push(`line ${c+1}: create_clock needs [get_ports ...]`);return}e.clocks.set(h,{name:h,port:g[0],period:parseFloat(k("period"))||null})}else if(m==="create_generated_clock"){let g=i(r,"get_ports")[0],h=[...i(r,"get_pins"),...i(r,"get_nets")],y=k("name")||h[0];e.generated.push({name:y,sourcePort:g,pin:(h[0]||"").replace(/\/Q$/,"")})}else if(m==="set_clock_groups"){let g=[],h=/-group\s+(\{[^}]*\}|\S+)/g,y;for(;y=h.exec(r);)g.push(s(y[1]));e.groups.push({type:/-asynchronous/.test(r)?"async":/-physically_exclusive|-logically_exclusive/.test(r)?"exclusive":"async",groups:g})}else if(m==="set_input_delay"){let g=k("clock");for(let h of i(r,"get_ports"))e.inputs.set(h,g)}else/^(set_output_delay|set_false_path|set_max_delay|set_min_delay|set_multicycle_path|set_load|set_driving_cell|set_input_transition|set_clock_uncertainty|set_clock_latency|set_bus_skew)$/.test(m)||e.notes.push(`line ${c+1}: ${m} is not used by the CDC check`)}),e}function It(t){let e=new Map,n=r=>r.startsWith("$")?9:0;for(let[r,m]of Object.entries(t.netnames||{})){if(m.hide_name)continue;let k=m.offset||0,g=m.bits.length;m.bits.forEach((h,y)=>{if(typeof h!="number")return;let b=g>1||k?`${r}[${m.upto?k+g-1-y:k+y}]`:r,q=e.get(h);(!q||n(r)<n(q.n)||n(r)===n(q.n)&&Ot(r,q.n,t,h))&&e.set(h,{n:r,nm:b})})}let s=new Map;for(let[r,m]of Object.entries(t.ports||{}))m.bits.forEach((k,g)=>{typeof k=="number"&&s.set(k,{port:r,dir:m.direction,nm:m.bits.length>1?`${r}[${g}]`:r})});let i=new Map,o=new Map,c=(r,m)=>{o.has(r)||o.set(r,[]),o.get(r).push(m)};for(let[r,m]of Object.entries(t.cells||{})){let k=m.port_directions||{};for(let[g,h]of Object.entries(m.connections)){let y=k[g]?k[g]==="output":/^(Y|Q|X)$/.test(g);h.forEach((b,q)=>{typeof b=="number"&&(y?i.set(b,{cell:r,pin:g,i:q}):c(b,{cell:r,pin:g,i:q}))})}}for(let[r,m]of s)m.dir==="input"?i.set(r,{port:m.port,nm:m.nm}):c(r,{port:m.port,nm:m.nm});return{names:e,portBits:s,driver:i,sinks:o}}function Ot(t,e,n,s){let i=o=>!!(n.ports||{})[o];return i(t)!==i(e)?!i(t):t.length<e.length}function lt(t,e,n,s){let i=Rt(e),o=n&&t.modules[n]?n:Object.keys(t.modules).find(a=>t.modules[a].attributes&&t.modules[a].attributes.top)||Object.keys(t.modules)[0],c=t.modules[o],r=It(c),m=c.cells||{},k=a=>typeof a!="number"?`1'b${a}`:(r.names.get(a)||{}).nm||(r.portBits.get(a)||{}).nm||`net${a}`,g=[],h=[...i.notes],y=[],b=new Map;for(let[a,p]of Object.entries(m)){if(!$e.has(p.type))continue;let _=p.connections,f=p.parameters||{},v=_.CLK?"CLK":"EN",E=p.type.includes("latch");(_.Q||[]).forEach((T,w)=>{let C={cell:a,type:p.type,i:w,q:T,d:(_.D||[])[w],clk:_[v]&&_[v][0],en:!E&&_.EN?_.EN[0]:null,arst:_.ARST?_.ARST[0]:_.CLR?_.CLR[w]:null,srst:_.SRST?_.SRST[0]:null,latch:E,name:k(T)};y.push(C),b.set(T,C)})}let q=(a,p=new Set)=>{if(p.has(a))return null;p.add(a);let _=r.driver.get(a);if(!_)return null;if(_.port)return{port:_.port,inverted:!1};let f=m[_.cell];if(rt.has(f.type)||f.type==="$not"||f.type==="$_NOT_"){let v=q(f.connections.A[_.i]??f.connections.A[0],p);return v&&{...v,inverted:v.inverted!==(f.type.includes("NOT")||f.type==="$not")}}return b.has(a)?{reg:b.get(a)}:{gate:_.cell}},A=new Map([...i.clocks.values()].map(a=>[a.port,a.name])),D=new Map;for(let a of i.clocks.values())D.set(a.name,{name:a.name,kind:"primary",port:a.port,period:a.period});let G=new Map,W=new Set,ee=(a,p=0)=>{if(G.has(a))return G.get(a);let _=null,f=a.clk!==void 0?q(a.clk):null;if(f&&f.port)_=A.get(f.port)||null,_||(W.add(f.port),_="unclocked:"+f.port,D.has(_)||D.set(_,{name:_,kind:"unclocked",port:f.port}));else if(f&&f.reg&&p<8){let v=ee(f.reg,p+1),E=i.generated.find(w=>w.pin===f.reg.name||w.pin===f.reg.name.replace(/\[\d+\]$/,"")),T=E?E.name:f.reg.name;D.has(T)||D.set(T,{name:T,kind:E?"generated":"inferred",master:v,from:f.reg.name}),!E&&!h.some(w=>w.includes(f.reg.name))&&h.push(`${f.reg.name} drives clock pins: treated as a clock generated from ${v} (add create_generated_clock to name it)`),_=T}else f&&f.gate&&(_="gated:"+f.gate,D.has(_)||D.set(_,{name:_,kind:"unknown"}));return G.set(a,_),_};y.forEach(a=>a.dom=ee(a));for(let a of W)g.push({sev:"violation",rule:"Missing clock",dst:a,msg:`Port ${a} clocks registers but has no create_clock. Define the clock so its crossings can be checked.`});let te=a=>{let p=D.get(a),_=0;for(;p&&p.master&&_++<10;)p=D.get(p.master);return p?p.name:a},Z=new Set,ne=(a,p)=>{if(a===p)return!0;let _=te(a),f=te(p);if(_===f)return!0;for(let E of i.groups){let T=E.groups.findIndex(C=>C.includes(a)||C.includes(_)),w=E.groups.findIndex(C=>C.includes(p)||C.includes(f));if(T>=0&&w>=0)return T===w}let v=[_,f].sort().join(" / ");return Z.has(v)||(Z.add(v),g.push({sev:"caution",rule:"Clock relationship assumed",dst:v,msg:`No set_clock_groups relates ${_} and ${f}: treated as asynchronous (the safe CDC default).`})),!1},re=a=>i.inputs.get(a)||null,R=(a,p=!0)=>{let _={regs:new Set,ports:new Set,logic:!1,muxSel:[],gates:0},f=new Set,v=E=>{if(typeof E!="number"||f.has(E))return;if(f.add(E),b.has(E)&&p){_.regs.add(b.get(E));return}let T=r.driver.get(E);if(!T)return;if(T.port){_.ports.add(T.port);return}let w=m[T.cell];if(!$e.has(w.type)){if(rt.has(w.type)||(_.logic=!0,_.gates++),w.type==="$mux"||w.type==="$_MUX_"||w.type==="$pmux"){_.muxSel.push(...w.connections.S||[]);let C=w.parameters&&parseInt(w.parameters.WIDTH,2)||1;for(let Y of["A","B"]){let le=w.connections[Y]||[];w.type==="$pmux"?le.forEach(v):v(le[T.i]!==void 0?le[T.i]:le[0])}(w.connections.S||[]).forEach(v);return}for(let[C,Y]of Object.entries(w.connections)){if((w.port_directions||{})[C]==="output"||/^(Y|Q)$/.test(C))continue;/^\$(and|or|xor|xnor|not|pos|buf|_AND_|_OR_|_XOR_|_NOT_)$/.test(w.type)&&Y.length>T.i?v(Y[T.i]):Y.forEach(v)}}};return v(a),_},V=(a,p)=>{if(a.reg)return a.reg.dom&&p&&!ne(a.reg.dom,p);let _=re(a.port);return _?!ne(_,p):!0},B=a=>a.reg?a.reg.dom:re(a.port)||`async input ${a.port}`,se=a=>{let p=r.sinks.get(a.q)||[],_=p.map(f=>f.cell&&m[f.cell]&&$e.has(m[f.cell].type)&&f.pin==="D"?y.find(v=>v.cell===f.cell&&v.i===f.i):null);return{all:p,sameClock:_.filter(f=>f&&f.dom===a.dom&&f.clk===a.clk),other:p.length-_.filter(Boolean).length}},ie=new Map,j=new Map,_e=[];for(let a of y){if(!a.dom||a.latch)continue;let p=R(a.d),_=[...[...p.regs].map(C=>({reg:C})),...[...p.ports].map(C=>({port:C}))].filter(C=>V(C,a.dom));if(!_.length)continue;let f=se(a),v=f.sameClock.find(C=>{let Y=R(C.d);return!Y.logic&&Y.regs.size===1&&[...Y.regs][0]===a});if(!v)continue;let E=[a],T=v;for(;T&&E.length<6;){let C=R(T.d);if(C.logic||C.regs.size!==1||[...C.regs][0]!==E[E.length-1])break;E.push(T);let Y=se(T);T=Y.sameClock.length===1&&Y.all.length===1?Y.sameClock[0]:null}let w={first:a,stages:E,srcs:_,cone:p,fanout:f.all.length};_e.push(w),ie.set(a,w),E.slice(1).forEach(C=>j.set(C.q,w))}let ae=a=>{let p=new Set,_=new Set,f=v=>{if(typeof v!="number"||_.has(v)||(_.add(v),j.has(v)&&p.add(j.get(v)),b.has(v)))return;let E=r.driver.get(v);if(!E||E.port)return;let T=m[E.cell];if(!$e.has(T.type))for(let[w,C]of Object.entries(T.connections))(T.port_directions||{})[w]==="output"||/^(Y|Q)$/.test(w)||C.forEach(f)};return f(a),p},ce=[];for(let a of y){if(!a.dom)continue;let p=R(a.d),_=a.en!==null&&a.en!==void 0?R(a.en):null,v=[...[...p.regs].map(L=>({reg:L})),...[...p.ports].map(L=>({port:L})),..._?[..._.regs].map(L=>({reg:L})):[]].filter(L=>!(L.reg&&j.has(L.reg.q)&&L.reg.dom===a.dom)).filter(L=>V(L,a.dom)&&!(L.port&&/rst|reset/i.test(L.port)&&!1));if(!v.length)continue;let E=[...new Set(v.map(L=>L.reg?L.reg.name:L.port))],T=[...new Set(v.map(B))],w=ie.get(a),C={src:E.join(", "),dst:a.name,srcDom:T.join(", "),dstDom:a.dom,srcBase:E.map(ye).join(","),dstBase:ye(a.name)};if(w){p.logic?ce.push({...C,sev:"violation",rule:"Logic before synchronizer",msg:`Combinational logic (${p.gates} gate${p.gates>1?"s":""}) drives the first synchronizer stage. A glitch can be captured as a false pulse. Register the signal in the source domain first.`}):w.fanout>1?ce.push({...C,sev:"violation",rule:"First stage fans out",msg:`The first synchronizer stage also drives other logic (${w.fanout} loads). Its output can be metastable: only the next flop may use it.`}):w.stages.length<2?ce.push({...C,sev:"violation",rule:"Single-flop synchronizer",msg:"Only one flop: not enough time for metastability to resolve."}):ce.push({...C,sev:"ok",rule:`${w.stages.length}-flop synchronizer`,msg:`Synchronized by ${w.stages.map(L=>L.name).join(" \u2192 ")}.`});continue}let Y=new Set;for(let L of p.muxSel)for(let De of ae(L))Y.add(De);if(a.en!==null&&a.en!==void 0)for(let L of ae(a.en))Y.add(L);let le=se(a);if(Y.size){let L=[...Y].map(De=>De.stages[De.stages.length-1].name);ce.push({...C,sev:"ok",rule:"Qualified by synchronized enable",msg:`Captured only when ${[...new Set(L)].join(", ")} (synchronized) says the data is stable. Keep the data stable while the enable is active: check it in simulation.`})}else le.sameClock.length===1&&le.all.length===1?ce.push({...C,sev:"violation",rule:"Logic before synchronizer",msg:"This register starts a synchronizer chain, but its input comes through logic. Register the signal in the source domain first."}):ce.push({...C,sev:"violation",rule:"Unsynchronized crossing",msg:`Asynchronous data is used directly in ${a.dom}. The flop can go metastable and pass a wrong value on. Add a synchronizer, a handshake or a FIFO.`})}let we=_e.filter(a=>a.stages.length>=2),ge=new Map;for(let a of we){let p=a.srcs[0],_=p.reg?p.reg.name:p.port,f=`${ye(_)}|${B(p)}|${a.first.dom}`;ge.has(f)||ge.set(f,[]),ge.get(f).push(a)}let u=new Map;for(let[a,p]of ge){if(p.length<2)continue;let[_,f,v]=a.split("|");p.forEach(E=>u.set(E,a)),g.push({sev:"caution",rule:"Bus synchronized bit by bit",src:`${_} (${p.length} bits)`,dst:ye(p[0].first.name),srcDom:f,dstDom:v,msg:`${p.length} bits of ${_} each have their own synchronizer. Bits can arrive in different cycles, so this is only safe if ${_} changes one bit at a time (Gray code). Otherwise use a handshake or a FIFO.`})}let d=new Set,x=[...y.map(a=>({bit:a.d,name:a.name,dom:a.dom})),...[...r.portBits.values()].filter(a=>a.dir==="output").map(a=>({bit:[...r.portBits.entries()].find(([,p])=>p===a)[0],name:a.nm,dom:null}))];for(let a of x){let p=[...ae(a.bit)],_=new Map;for(let f of p){let v=f.first.dom+"|"+B(f.srcs[0]);_.has(v)||_.set(v,new Set),_.get(v).add(f)}for(let[f,v]of _){if(v.size<2)continue;let E=[...v];if(new Set(E.map(L=>u.get(L)||L)).size<2)continue;let w=E.map(L=>L.stages[L.stages.length-1].name).sort(),C=w.join(",");if(d.has(C))continue;d.add(C);let[Y,le]=f.split("|");g.push({sev:"caution",rule:"Reconvergence",src:w.join(", "),dst:a.name,srcDom:le,dstDom:Y,msg:`Separately synchronized signals meet in logic at ${a.name}. They can arrive one cycle apart, so the combination can be briefly wrong. Synchronize one control signal instead, or use Gray coding.`})}}let $=new Set;for(let a of y){if(a.arst===null||a.arst===void 0)continue;let p=R(a.arst),_=p.ports.size&&!p.regs.size,f=R(a.d),v=typeof a.d!="number"||!f.regs.size&&!f.ports.size||f.regs.size&&!f.ports.size&&[...f.regs].every(E=>$.has(E)&&E.dom===a.dom);_&&v&&$.add(a)}for(let a=0;a<3;a++)for(let p of y){if($.has(p)||p.arst==null)continue;let _=R(p.arst),f=R(p.d);_.ports.size&&!_.regs.size&&[...f.regs].length&&[...f.regs].every(v=>$.has(v)&&v.dom===p.dom)&&$.add(p)}let I=new Map;for(let a of y){if(a.arst===null||a.arst===void 0||$.has(a))continue;let p=R(a.arst),_=[...p.regs],f;if(_.length&&_.every(w=>$.has(w)&&w.dom===a.dom))f={sev:"ok",rule:"Synchronized reset",msg:`Reset deasserts in step with ${a.dom} through the reset synchronizer ${_.map(w=>w.name).join(", ")}.`};else if(_.some(w=>w.dom&&a.dom&&!ne(w.dom,a.dom)))f={sev:"violation",rule:"Reset crosses domains",msg:`The reset comes from ${_.map(w=>w.name).join(", ")} in another clock domain (${_[0].dom}). Use a reset synchronizer in ${a.dom}.`};else{if(p.ports.size&&[...p.ports].every(w=>re(w)&&a.dom&&ne(re(w),a.dom)))continue;p.ports.size&&(f={sev:"caution",rule:"Reset not synchronized",msg:`Asynchronous reset ${[...p.ports].join(", ")} goes straight to these registers. Its release is not synchronized to ${a.dom}, so flops can leave reset in different cycles. Use a reset synchronizer, or, if the reset comes from a synchronizer outside this block, say so with set_input_delay -clock ${a.dom} on the reset port.`})}if(!f)continue;let v=f.rule==="Reset not synchronized",E=f.rule+"|"+(v?[...p.ports].join(","):ye(a.name))+"|"+a.dom,T=_.length?_.map(w=>w.name).join(", "):[...p.ports].join(", ");I.has(E)||I.set(E,{...f,src:T,dst:a.name,dstDom:a.dom,srcDom:_.length?_[0].dom:"reset input",bits:0,dstBase:ye(a.name),bases:new Set}),I.get(E).bits++,I.get(E).bases.add(ye(a.name))}let O=new Map;for(let a of ce){let p=[a.sev,a.rule,a.dstBase,a.srcBase,a.dstDom].join("|");O.has(p)||O.set(p,{...a,bits:0,srcSet:new Set,dstSet:new Set});let _=O.get(p);_.bits++,a.src.split(", ").forEach(f=>_.srcSet.add(f)),_.dstSet.add(a.dst)}let F=[...O.values()].map(a=>({...a,src:ct([...a.srcSet]),dst:ct([...a.dstSet])})),H=[...I.values()].map(a=>({...a,dst:a.bases.size>1?`${a.bits} flops (${[...a.bases].slice(0,4).join(", ")}${a.bases.size>4?", \u2026":""})`:a.bits>1?`${a.dstBase} (${a.bits} bits)`:a.dst})),M=[...F,...g.filter(a=>a.rule!=="Clock relationship assumed"),...H,...g.filter(a=>a.rule==="Clock relationship assumed")],U=Nt(s||"");for(let a of U){for(let p of M)p.sev==="ok"||p.sev==="waived"||p.rule.toLowerCase()===a.rule.toLowerCase()&&(a.from&&!it(a.from,p.src)||a.to&&!it(a.to,p.dst)||(p.waivedFrom=p.sev,p.sev="waived",p.reason=a.reason,a.used=(a.used||0)+1));a.used||h.push(`Waiver on line ${a.line} (${a.rule}) matched nothing: remove it or fix its -from/-to.`)}let me={violation:0,caution:1,waived:2,ok:3};M.sort((a,p)=>me[a.sev]-me[p.sev]);let ve=new Map;for(let a of y)a.dom&&ve.set(a.dom,(ve.get(a.dom)||0)+1);let X=[...D.values()].map(a=>({...a,regs:ve.get(a.name)||0,root:te(a.name)})),K=a=>M.filter(p=>p.sev===a).length;return{top:o,clocks:X,rows:M,notes:h,summary:{domains:X.filter(a=>a.regs>0).length,crossings:F.reduce((a,p)=>a+p.bits,0),crossingRegs:F.length,violations:K("violation"),cautions:K("caution"),ok:K("ok"),waived:K("waived"),synchronizers:we.length}}}function Nt(t){let e=[];return t.split(`
`).forEach((n,s)=>{let i=n.replace(/#.*$/,"").trim();if(!/^waive\b/.test(i))return;let o=r=>{let m=new RegExp(`-${r}\\s+(?:"([^"]*)"|\\{([^}]*)\\}|(\\S+))`).exec(i);return m?m[1]??m[2]??m[3]:null},c=o("rule");c&&e.push({rule:c,from:o("from"),to:o("to"),reason:o("reason")||"(no reason given)",line:s+1})}),e}function it(t,e){return new RegExp("(^|[\\s,(/])"+t.split("*").map(s=>s.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join("[^\\s,]*")+"($|[\\s,)\\[])").test(String(e||""))}function ye(t){return String(t).replace(/\[\d+\]$/,"")}function ct(t){let e=new Map;for(let n of t){let s=/^(.*)\[(\d+)\]$/.exec(n),i=s?s[1]:n;e.has(i)||e.set(i,[]),s&&e.get(i).push(+s[2])}return[...e.entries()].map(([n,s])=>s.length>1?`${n}[${Math.max(...s)}:${Math.min(...s)}]`:s.length===1?`${n}[${s[0]}]`:n).join(", ")}function dt(t){let e=[],n=(c,r)=>String(c).padEnd(r);e.push(`CDC report for ${t.top}`),e.push(""),e.push("Clock domains"),e.push("  "+n("Clock",16)+n("Kind",12)+n("Source",18)+"Registers");for(let c of t.clocks)e.push("  "+n(c.name,16)+n(c.kind,12)+n(c.port||(c.master?"from "+c.master:"-"),18)+c.regs);e.push("");let s=t.summary;e.push(`Summary: ${s.crossings} crossing bit(s) into ${s.crossingRegs} register group(s), ${s.synchronizers} synchronizer(s)`),e.push(`         ${s.violations} violation(s), ${s.cautions} caution(s), ${s.waived?s.waived+" waived, ":""}${s.ok} OK`),e.push("");let i={violation:"VIOLATION",caution:"CAUTION  ",waived:"WAIVED   ",ok:"OK       "},o=0;for(let c of t.rows)o++,e.push(`${i[c.sev]} ${o}. ${c.rule}`),c.src&&e.push(`    from ${c.src}${c.srcDom?"  ("+c.srcDom+")":""}`),c.dst&&e.push(`    to   ${c.dst}${c.dstDom?"  ("+c.dstDom+")":""}`),e.push(`    ${c.msg}`),c.sev==="waived"&&e.push(`    Waived (was ${c.waivedFrom}): ${c.reason}`),e.push("");if(t.rows.length||e.push("No clock domain crossings found."),t.notes.length){e.push("Notes");for(let c of t.notes)e.push("  - "+c)}return e}function ut(t){let e=[],n=new Map,s=[],i="",o=0,c=t.split(/\s+/),r=!0,m=0,k=0;for(;o<c.length;){let g=c[o++];if(!g)continue;if(r){if(g==="$scope"){for(o++,s.push(c[o++]);c[o]!=="$end";)o++;o++}else if(g==="$upscope"){for(s.pop();c[o]!=="$end";)o++;o++}else if(g==="$timescale"){let y=[];for(;c[o]!=="$end";)y.push(c[o++]);o++,i=y.join("")}else if(g==="$var"){let y=c[o++],b=parseInt(c[o++],10),q=c[o++],A=[];for(;c[o]!=="$end";)A.push(c[o++]);o++;let D=A[0];A[1]&&A[1].startsWith("[")&&(D+=A[1]);let G=[...s,D].join(".");if(y==="parameter")continue;if(n.has(q)){n.get(q).aliases.push(G);continue}let W=[...s.slice(1),D].join("."),ee={id:q,name:G,short:W||D,depth:s.length,width:b,type:y,changes:[],aliases:[]};n.set(q,ee),e.push(ee)}else if(g==="$enddefinitions"){for(;c[o]!=="$end";)o++;o++,r=!1}else if(g.startsWith("$")){for(;o<c.length&&c[o]!=="$end";)o++;o++}continue}let h=g[0];if(h==="#")m=Number(g.slice(1)),m>k&&(k=m);else if(h!=="$")if(h==="b"||h==="B"||h==="r"||h==="R"){let y=g.slice(1),b=c[o++],q=n.get(b);q&&ht(q,m,h==="r"||h==="R"?Number(y):y)}else{let y=n.get(g.slice(1));y&&ht(y,m,h.toLowerCase())}}return{signals:e,timescale:i,endTime:k}}function ht(t,e,n){let s=t.changes;s.length&&s[s.length-1][0]===e?s[s.length-1][1]=n:(!s.length||s[s.length-1][1]!==n)&&s.push([e,n])}function _t(t,e){let n=t.changes,s=0,i=n.length-1,o=-1;for(;s<=i;){let c=s+i>>1;n[c][0]<=e?(o=c,s=c+1):i=c-1}return o<0?null:n[o][1]}function Ue(t,e,n){if(e==null)return"";if(typeof e=="number")return String(+e.toPrecision(6));if(t.width===1)return e;let s=e.padStart(t.width,e[0]==="x"||e[0]==="z"?e[0]:"0");if(/[xz]/i.test(s))return/^x+$/i.test(s)?"x":/^z+$/i.test(s)?"z":n==="bin"?s:"x";if(n==="bin")return s;let i=BigInt("0b"+s);if(n==="dec")return i.toString(10);if(n==="sdec"){let o=BigInt(t.width);return(s[0]==="1"?i-(1n<<o):i).toString(10)}return i.toString(16).toUpperCase().padStart(Math.ceil(t.width/4),"0")}var Le=class{constructor(e,n){this.c=e,this.ctx=e.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=n.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=n.theme,e.addEventListener("mousedown",s=>this.click(s)),e.addEventListener("wheel",s=>this.wheel(s),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(e.parentElement)}setData(e){this.data=e,this.cursor=null,this.t0=0,this.t1=Math.max(1,e.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(e,n){if(!this.data)return;let s=this.t1-this.t0,i=n??this.cursor??this.t0+s/2,o=Math.min(Math.max(s*e,2),Math.max(1,this.data.endTime)*1.05),c=i-(i-this.t0)*(o/s);c=Math.max(0,Math.min(c,Math.max(0,this.data.endTime-o))),this.t0=c,this.t1=c+o,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(e){if(!this.data)return;let n=this.t1-this.t0,s=this.t0+n*e;s=Math.max(0,Math.min(s,Math.max(0,this.data.endTime-n))),this.t0=s,this.t1=s+n,this.draw()}xOf(e,n){return this.nameW+(e-this.t0)/(this.t1-this.t0)*(n-this.nameW-8)}tOf(e,n){return this.t0+(e-this.nameW)/(n-this.nameW-8)*(this.t1-this.t0)}click(e){if(!this.data)return;let n=this.c.getBoundingClientRect(),s=e.clientX-n.left;s<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(s,n.width))),this.draw(),this.onCursor(this.cursor))}wheel(e){if(!this.data)return;let n=this.c.getBoundingClientRect();e.ctrlKey||e.metaKey||Math.abs(e.deltaY)>Math.abs(e.deltaX)&&e.shiftKey===!1&&e.altKey?(e.preventDefault(),this.zoom(e.deltaY>0?1.25:.8,this.tOf(e.clientX-n.left,n.width))):(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey)&&(e.preventDefault(),this.pan((e.deltaX||e.deltaY)/600))}draw(){let e=this.theme(),s=this.c.parentElement.clientWidth;this.nameW=s<640?112:190;let i=this.data?this.data.signals:[],o=this.axisH+Math.max(i.length,3)*this.rowH+8,c=window.devicePixelRatio||1;this.c.style.width=s+"px",this.c.style.height=o+"px",this.c.width=Math.round(s*c),this.c.height=Math.round(o*c);let r=this.ctx;if(r.setTransform(c,0,0,c,0,0),r.fillStyle=e.bg,r.fillRect(0,0,s,o),r.font="12px 'JetBrains Mono', ui-monospace, monospace",r.textBaseline="middle",!this.data){r.fillStyle=e.muted,r.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,o/2);return}let m=this.t1-this.t0,k=(s-this.nameW)/110,g=m/Math.max(1,k),h=Math.pow(10,Math.floor(Math.log10(g))),y=[1,2,5,10].map(b=>b*h).find(b=>b>=g)||h*10;r.strokeStyle=e.grid,r.fillStyle=e.muted,r.lineWidth=1;for(let b=Math.ceil(this.t0/y)*y;b<=this.t1;b+=y){let q=Math.round(this.xOf(b,s))+.5;r.beginPath(),r.moveTo(q,this.axisH-6),r.lineTo(q,o),r.stroke(),r.fillText(ze(b,this.data.timescale),q+3,11)}if(r.strokeStyle=e.line,r.beginPath(),r.moveTo(0,this.axisH+.5),r.lineTo(s,this.axisH+.5),r.stroke(),i.forEach((b,q)=>{let A=this.axisH+q*this.rowH,D=A+6,G=A+this.rowH-6,W=(D+G)/2;r.fillStyle=q%2?e.rowAlt:e.bg,r.fillRect(0,A+1,s,this.rowH-1),r.fillStyle=e.text;let ee=b.short+(b.width>1&&!b.short.includes("[")?` [${b.width-1}:0]`:"");r.fillText(pt(r,ee,this.nameW-16),10,W),r.save(),r.beginPath(),r.rect(this.nameW,A,s-this.nameW,this.rowH),r.clip();let te=b.changes;for(let Z=0;Z<te.length;Z++){let ne=te[Z][0],re=Z+1<te.length?te[Z+1][0]:this.data.endTime;if(re<this.t0||ne>this.t1)continue;let R=this.xOf(ne,s),V=this.xOf(re,s),B=te[Z][1];if(b.width===1&&typeof B=="string"){let se=B==="x"?e.x:B==="z"?e.z:e.wave;r.strokeStyle=se,r.lineWidth=1.5,B==="x"&&(r.fillStyle=e.xFill,r.fillRect(R,D,V-R,G-D));let ie=B==="1"?D:B==="0"?G:W;if(r.beginPath(),Z>0){let j=te[Z-1][1],_e=j==="1"?D:j==="0"?G:W;r.moveTo(R,_e)}else r.moveTo(R,ie);r.lineTo(R,ie),r.lineTo(V,ie),r.stroke()}else{let se=Ue(b,B,this.radix),ie=se==="x"||se==="z";r.strokeStyle=ie?e.x:e.wave,r.lineWidth=1.2,r.fillStyle=ie?e.xFill:e.busFill;let j=Math.min(4,(V-R)/2);r.beginPath(),r.moveTo(R,W),r.lineTo(R+j,D),r.lineTo(V-j,D),r.lineTo(V,W),r.lineTo(V-j,G),r.lineTo(R+j,G),r.closePath(),r.fill(),r.stroke();let _e=V-R-10;_e>14&&(r.fillStyle=e.text,r.fillText(pt(r,se,_e),Math.max(R,this.nameW)+6,W))}}r.restore()}),r.strokeStyle=e.line,r.beginPath(),r.moveTo(this.nameW+.5,0),r.lineTo(this.nameW+.5,o),r.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let b=Math.round(this.xOf(this.cursor,s))+.5;r.strokeStyle=e.cursor,r.lineWidth=1.5,r.beginPath(),r.moveTo(b,0),r.lineTo(b,o),r.stroke()}}};function pt(t,e,n){if(t.measureText(e).width<=n)return e;for(;e.length>1&&t.measureText(e+"\u2026").width>n;)e=e.slice(0,-1);return e+"\u2026"}function ze(t,e){let n=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(e||"");if(!n)return String(t);let s=["fs","ps","ns","us","ms","s"],i=t*Number(n[1]),o=s.indexOf(n[2]);for(;o<s.length-1&&Math.abs(i)>=1e3&&i%1e3===0;)i/=1e3,o++;return o<2&&Math.abs(i)>=1e3&&(i/=1e3,o++,i=+i.toFixed(3)),`${i} ${s[o]}`}var S=t=>document.querySelector(t),gt=3e5,kt="vdd-cdc-lab-v1",wt="vdd-cdc-quiz-v1",fe="check_cdc.ys",Ee=new URL("/",location.href).href,l={example:J[0].id,track:pe[0].id,script:fe,files:{},order:[],current:fe,running:!1,mode:null,timer:null,lastVcd:null},be={yosys:null,sim:null},Ae={yosys:!1,sim:!1},Wt=t=>/\.s?v$/i.test(t)&&/\$finish\b/.test(l.files[t]||""),vt=()=>[...l.order.filter(t=>/\.ys$/i.test(t)).map(t=>({value:t,label:`CDC check (${t})`})),...l.order.filter(Wt).map(t=>({value:"sim:"+t,label:`Simulate (${t})`}))];function Qe(){let t=vt();return t.find(e=>e.value===l.script)||t[0]||null}function xt(){let t=S("#script"),e=vt(),n=Qe();t.innerHTML="";for(let s of e){let i=document.createElement("option");i.value=s.value,i.textContent=s.label,t.appendChild(i)}n&&(t.value=n.value),S("#script-wrap").hidden=e.length<2,S("#run-label").textContent=n&&n.value.startsWith("sim:")?"Simulate":"Run CDC check"}var de=new Map,N=null,he=S("#editor textarea"),Ze=t=>/\.s?v$/i.test(t)?"verilog":/\.(tcl|sdc|ys)$/i.test(t)?"tcl":"text/plain";window.CodeMirror?(N=window.CodeMirror.fromTextArea(he,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:t=>t.replaceSelection("  ")}}),N.on("change",()=>{l.files[l.current]=N.getValue(),Me()})):(he.classList.add("plain-editor"),he.addEventListener("input",()=>{l.files[l.current]=he.value,Me()}));var He=()=>{l.files[l.current]=N?N.getValue():he.value};function Ve(t){He(),l.current=t,N?(de.has(t)||de.set(t,window.CodeMirror.Doc(l.files[t]??"",Ze(t))),N.swapDoc(de.get(t)),setTimeout(()=>N.refresh(),0)):he.value=l.files[t]??"",Je()}function Ft(t,e){Ve(t),N&&(N.focus(),N.setCursor({line:e-1,ch:0}),N.addLineClass(e-1,"background","cm-errline"),setTimeout(()=>N.removeLineClass(e-1,"background","cm-errline"),2500),N.scrollIntoView({line:e-1,ch:0},80))}function Ke(t,e,n){de.clear(),l.files={...t},l.order=e||Object.keys(t),l.current=n&&l.order.includes(n)?n:l.order[0],N?(de.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",Ze(l.current))),N.swapDoc(de.get(l.current))):he.value=l.files[l.current]??"",Je()}function Je(){let t=S("#tabs");t.innerHTML="";for(let e of l.order){let n=document.createElement("button");if(n.type="button",n.className="tab"+(e===l.current?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",e===l.current?"true":"false"),n.textContent=e,n.addEventListener("click",()=>Ve(e)),t.appendChild(n),e===l.current&&l.order.length>1){let s=document.createElement("button");s.type="button",s.className="tab-x",s.textContent="\xD7",s.title="Remove "+e,s.setAttribute("aria-label","Remove file "+e),s.addEventListener("click",()=>Mt(e)),t.appendChild(s)}}xt()}function Mt(t){He(),delete l.files[t],de.delete(t),l.order=l.order.filter(e=>e!==t),l.current=l.order[0],N?(de.has(l.current)||de.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",Ze(l.current))),N.swapDoc(de.get(l.current))):he.value=l.files[l.current]??"",Je(),Me()}function Yt(){let t=(window.prompt("New file name (for example top.v, extra.sdc):","")||"").trim();if(t){if(!/^[\w.+-]+$/.test(t)){P("File names can use letters, digits, dot, dash and underscore only.","err");return}l.files[t]===void 0&&(l.order.push(t),l.files[t]=""),Ve(t),Me()}}var Ne=t=>{let e=J.find(n=>n.id===t);return e?(pe.find(n=>n.group===e.group)||pe[0]).id:null},ke=()=>pe.find(t=>t.id===l.track)||pe[0];function We(){let t=S("#tracks");t.innerHTML="";for(let e of pe){let n=document.createElement("button");n.type="button",n.className="track"+(e.id===ke().id?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",e.id===ke().id?"true":"false"),n.innerHTML='<span class="track-t"></span><span class="track-n"></span>',n.querySelector(".track-t").textContent=e.title,n.querySelector(".track-n").textContent=J.filter(s=>s.group===e.group).length+" labs",n.addEventListener("click",()=>Ht(e.id)),t.appendChild(n)}S("#track-note").textContent=ke().note}function Ht(t){l.track=t,We(),Ne(l.example)!==t?qe(J.find(e=>e.group===ke().group).id):Se()}function Se(){let t=S("#examples");t.innerHTML="";for(let n of J.filter(s=>s.group===ke().group)){let s=document.createElement("button");s.type="button",s.className="ex"+(n.id===l.example?" active":""),s.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',s.querySelector(".ex-tag").textContent=n.tag;let i=n.quiz&&n.quiz.length?Te()[n.id]:null;if(i&&i.checked){let o=document.createElement("span");o.className="ex-done",o.textContent=(i.score===i.total?"\u2713 ":"")+`quiz ${i.score}/${i.total}`,s.querySelector(".ex-tag").appendChild(o)}s.querySelector(".ex-title").textContent=n.title,s.addEventListener("click",()=>qe(n.id)),t.appendChild(s)}let e=S("#ex-select");e.innerHTML=J.filter(n=>n.group===ke().group).map(n=>`<option value="${n.id}">${n.tag} \xB7 ${n.title}</option>`).join(""),l.example&&(e.value=l.example)}function qe(t){let e=J.find(n=>n.id===t)||J[0];l.example=e.id,Ne(e.id)!==l.track&&(l.track=Ne(e.id),We()),l.script=e.script||fe,Ke(e.files,Object.keys(e.files),fe),Se(),Fe(),Ge(),qt(),je(null),Et(!1),ue("Ready","idle");try{let n=new URL(location.href);n.searchParams.set("lab",e.id),n.searchParams.delete("track"),history.replaceState(null,"",n.pathname+n.search)}catch{}}function Te(){try{return JSON.parse(localStorage.getItem(wt)||"{}")||{}}catch{return{}}}function et(t){try{localStorage.setItem(wt,JSON.stringify(t))}catch{}}var Pe=()=>J.find(t=>t.id===l.example&&t.quiz&&t.quiz.length);function Pt(t){let e=String(t||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return e?parseFloat(e[0]):NaN}function Gt(t,e){if(t.type==="choice")return e!=null&&+e===t.answer;let n=Pt(e);return isFinite(n)&&Math.abs(n-t.answer)<=(t.tol??.01)+1e-9}var Bt=t=>t.type==="choice"?t.options[t.answer]:`${t.answer}${t.unit?" "+t.unit:""}`;function Fe(){at(tt,l.example,ot);let t=S("#quiz"),e=S("#quiz-list"),n=Pe();if(!n){t.hidden=!0;return}t.hidden=!1;let s=Te()[n.id]||{},i=s.a||[];e.innerHTML="",n.quiz.forEach((o,c)=>{let r=document.createElement("li"),m=document.createElement("div");if(m.className="quiz-q",o.try){let h=document.createElement("span");h.className="quiz-try",h.textContent="Try it",m.appendChild(h)}let k=o.q.replace(/^Try it: /,"");if(m.appendChild(document.createTextNode(k.charAt(0).toUpperCase()+k.slice(1))),r.appendChild(m),o.type==="choice"){let h=document.createElement("div");h.className="quiz-opts",h.setAttribute("role","radiogroup"),o.options.forEach((y,b)=>{let q=document.createElement("label"),A=document.createElement("input");A.type="radio",A.name=`q${c}`,A.value=b,i[c]!==void 0&&+i[c]===b&&(A.checked=!0),A.addEventListener("change",()=>ft(n,c,b));let D=document.createElement("span");D.textContent=y,q.append(A,D),h.appendChild(q)}),r.appendChild(h)}else{let h=document.createElement("div");h.className="quiz-num";let y=document.createElement("input");if(y.type="text",y.inputMode="decimal",y.autocomplete="off",y.setAttribute("aria-label","Answer to question "+(c+1)),y.placeholder="e.g. 3",i[c]!==void 0&&(y.value=i[c]),y.addEventListener("input",()=>ft(n,c,y.value)),y.addEventListener("keydown",b=>{b.key==="Enter"&&Xe()}),h.appendChild(y),o.unit){let b=document.createElement("span");b.className="unit",b.textContent=o.unit,h.appendChild(b)}r.appendChild(h)}let g=document.createElement("div");g.className="quiz-fb",g.hidden=!0,g.setAttribute("aria-live","polite"),r.appendChild(g),e.appendChild(r)}),s.checked?Xe(!0):St(null)}function ft(t,e,n){let s=Te(),i=s[t.id]||{a:[]};i.a=i.a||[],i.a[e]=n,i.checked=!1,s[t.id]=i,et(s);let o=S("#quiz-list").children[e]?.querySelector(".quiz-fb");o&&(o.hidden=!0)}function St(t,e){let n=S("#quiz-score");if(t===null){n.textContent="",n.classList.remove("done");return}n.textContent=`${t} / ${e} correct`,n.classList.toggle("done",t===e)}function Xe(t){let e=Pe();if(!e)return;let n=Te(),s=n[e.id]||{a:[]};s.a=s.a||[];let i=0;e.quiz.forEach((o,c)=>{let r=S("#quiz-list").children[c],m=o.type==="choice"?(r.querySelector("input:checked")||{}).value:r.querySelector("input").value;s.a[c]=m;let k=r.querySelector(".quiz-fb"),g=m===void 0||m==="",h=!g&&Gt(o,m);h&&i++,k.hidden=!1,k.className="quiz-fb "+(h?"ok":"bad"),k.innerHTML="";let y=document.createElement("b");y.textContent=h?"Correct.":g?"Not answered yet.":"Not quite.",k.appendChild(y),h&&o.explain?k.appendChild(document.createTextNode(o.explain)):!h&&!g&&k.appendChild(document.createTextNode(o.type==="number"?"Check the report or the simulation output again.":"Look at the report and the code again and try another option."))}),s.checked=!0,s.score=i,s.total=e.quiz.length,n[e.id]=s,et(n),St(i,e.quiz.length),t||Se()}function jt(){let t=Pe();t&&t.quiz.forEach((e,n)=>{let s=S("#quiz-list").children[n].querySelector(".quiz-fb");s.hidden=!1,s.className="quiz-fb shown",s.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+Bt(e)+".",s.appendChild(i),e.explain&&s.appendChild(document.createTextNode(e.explain))})}function Ut(){let t=Pe();if(!t)return;let e=Te();delete e[t.id],et(e),Fe(),Se()}var mt=null;function Me(){clearTimeout(mt),mt=setTimeout(Ge,400)}function Ge(){try{localStorage.setItem(kt,JSON.stringify({example:l.example,script:l.script,files:l.files,order:l.order,current:l.current}))}catch{}}function Kt(){try{let t=JSON.parse(localStorage.getItem(kt)||"null");if(t&&t.files&&t.order)return t}catch{}return null}async function Xt(){let t=JSON.stringify({f:l.files,o:l.order,s:l.script}),e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(e).arrayBuffer()),s="";for(let i of n)s+=String.fromCharCode(i);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Qt(t){let e=atob(t.replace(/-/g,"+").replace(/_/g,"/")),n=new Blob([Uint8Array.from(e,s=>s.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function Re(t,e){let n=!1;try{await navigator.clipboard.writeText(t),n=!0}catch{let i=document.createElement("textarea");i.value=t,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{n=document.execCommand("copy")}catch{}i.remove()}if(e){let s=e.dataset.label||e.textContent;e.dataset.label=s,e.textContent=n?"Copied":"Press Ctrl+C",e.classList.toggle("ok",n),setTimeout(()=>{e.textContent=s,e.classList.remove("ok")},1600)}}function yt(t,e){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var Ce=S("#console"),Be=[];function qt(){Ce.textContent="",Be=[]}function P(t,e){Be.push(t);let n=document.createElement("div");n.className="ln "+(e||"");let s=/\b([\w.-]+\.(?:v|sv|ys|sdc)):(\d+)\b/.exec(t)||/\b([\w.-]+\.(?:v|sv|ys|sdc)),? line (\d+)\b/.exec(t);if(s&&l.files[s[1]]!==void 0){let i=t.indexOf(s[0]);n.appendChild(document.createTextNode(t.slice(0,i)));let o=document.createElement("button");o.type="button",o.className="loc",o.textContent=s[0],o.addEventListener("click",()=>Ft(s[1],+s[2])),n.appendChild(o),n.appendChild(document.createTextNode(t.slice(i+s[0].length)))}else n.textContent=t;e||(/^VIOLATION|\bERROR\b|\berror\b|Error:|\bFAIL\b|Internal error/.test(t)?n.classList.add("err"):/^CAUTION|^Warning|\bwarning\b/i.test(t)?n.classList.add("warn"):/^OK\s|\bPASS\b/.test(t)?n.classList.add("pass"):/^(Clock domains|Summary|CDC report|Notes)/.test(t)&&n.classList.add("sec")),Ce.appendChild(n),Ce.childElementCount>2e4&&Ce.firstChild.remove()}function je(t){let e=S("#summary");if(e.innerHTML="",!t||!t.length){e.hidden=!0;return}for(let[n,s,i]of t){let o=document.createElement("div");o.className="chip "+(i||"");let c=document.createElement("span");c.className="k",c.textContent=n;let r=document.createElement("span");r.className="v",r.textContent=s,o.append(c,r),e.appendChild(o)}e.hidden=!1}function ue(t,e){let n=S("#status");n.textContent=t,n.dataset.kind=e}var oe=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim(),Q=new Le(S("#wave"),{theme:()=>({bg:oe("--wave-bg"),rowAlt:oe("--wave-row"),grid:oe("--wave-grid"),line:oe("--line"),text:oe("--text"),muted:oe("--muted"),wave:oe("--wave"),busFill:oe("--wave-bus"),x:oe("--wave-x"),xFill:oe("--wave-xfill"),z:oe("--wave-z"),cursor:oe("--accent")}),onCursor:t=>{let e=S("#wave-values");if(t===null||!Q.data){e.textContent="";return}e.innerHTML="";let n=document.createElement("div");n.className="cur-time",n.textContent="Cursor @ "+ze(t,Q.data.timescale),e.appendChild(n);for(let s of Q.data.signals){let i=document.createElement("div");i.className="cur-row";let o=document.createElement("span");o.textContent=s.name;let c=document.createElement("span");c.textContent=Ue(s,_t(s,t),Q.radix),i.append(o,c),e.appendChild(i)}}});window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>Q.draw());function Et(t){S("#wave-pane").hidden=!t,t||(Q.clear(),S("#wave-values").textContent="",S("#wave-meta").textContent="")}function Ye(t){be[t]&&be[t].terminate(),Ae[t]=!1;let e=t==="yosys"?new Worker(new URL("synth/worker.js",Ee).href,{type:"module"}):new Worker(new URL("verilog/worker.js",Ee).href),n=new URL(t==="yosys"?"synth/":"verilog/",Ee).href;e.onmessage=s=>t==="yosys"?Zt(s.data):Vt(s.data),e.onerror=s=>{P((t==="yosys"?"Yosys":"The simulator")+" failed to start: "+(s.message||"worker error"),"err"),xe(!1)},e.postMessage({type:"load",base:n}),be[t]=e}var Ie=[],Oe={};function Zt(t){if(t.type==="ready")Ae.yosys=!0,!l.running&&S("#status").dataset.kind==="busy"&&ue("Ready","idle");else if(t.type==="stage")l.mode==="yosys"&&ue(t.stage+"\u2026","busy");else if(t.type==="line")Ie.push(t.line);else if(t.type==="file")Oe[t.name]=t.content;else if(t.type==="done"&&l.mode==="yosys"){if(!t.ok||!Oe["design.json"]){for(let n of Ie)P(n,/ERROR/.test(n)?"err":"");P(t.ok?"\u2500\u2500 The script did not write design.json: keep the write_json design.json line \u2500\u2500":`\u2500\u2500 Yosys exited with code ${t.rc}: check the errors above \u2500\u2500`,"meta err"),xe(!1);return}let e=Ie.filter(n=>/^Warning/.test(n));for(let n of e)P(n);P(`\u2500\u2500 Yosys read the design in ${t.ms} ms; checking clock domain crossings \u2500\u2500`,"meta");try{let n=l.order.find(r=>/\.sdc$/i.test(r)),s=(/-top\s+(\S+)/.exec(l.files[Qe().value]||"")||[])[1],i=l.order.find(r=>/\.waive$/i.test(r)),o=lt(JSON.parse(Oe["design.json"]),n?l.files[n]:"",s,i?l.files[i]:"");n||P("No .sdc file: every clock is treated as its own asynchronous domain.","warn");for(let r of dt(o))P(r);let c=o.summary;je([["Clock domains",String(c.domains)],["Crossing bits",String(c.crossings)],["Synchronizers",String(c.synchronizers)],["Violations",String(c.violations),c.violations?"bad":"good"],["Cautions",String(c.cautions),c.cautions?"warn":""],...c.waived?[["Waived",String(c.waived),"warn"]]:[]]),xe(!0)}catch(n){P("CDC check failed: "+(n.message||n),"err"),xe(!1)}}}function Vt(t){if(t.type==="ready")Ae.sim=!0,!l.running&&S("#status").dataset.kind==="busy"&&ue("Ready","idle");else if(t.type==="stage"){if(l.mode!=="sim")return;ue(t.stage+"\u2026","busy"),t.stage==="Simulating"&&P("\u2500\u2500 simulation output \u2500\u2500","meta")}else if(t.type==="line")P(t.line.replace(/\/work\//g,""),t.stream==="err"&&/error/i.test(t.line)?"err":"");else if(t.type==="done"&&l.mode==="sim"){if(t.ok){P(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta");let e=Be.join(`
`),n=/^PASS\b/m.test(e),s=/\bFAIL\b/.test(e),i=(e.match(/\bA[1-9] (data|req)/g)||[]).length,o=[];(n||s)&&o.push(["Result",s?"FAIL":"PASS",s?"bad":"good"]),i&&o.push(["Assertion failures",String(i),"bad"]),je(o);let c=(t.vcd||[])[0];if(c){l.lastVcd=c,Et(!0);try{let r=ut(c.text);Q.setData(r),S("#wave-meta").textContent=`${r.signals.length} signals \xB7 ${ze(r.endTime,r.timescale)}`}catch(r){P("Could not read waveform: "+r.message,"err")}}}else t.phase==="compile"?P("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):t.phase==="sim"&&P(`\u2500\u2500 simulation exited with code ${t.rc} \u2500\u2500`,"meta err");xe(t.ok)}}function bt(){if(l.running)return;window.vddSubscribe&&window.vddSubscribe(),He(),Ge();let t=Qe();if(!t){P(`Add a Yosys script (${fe}) or a testbench to run.`,"err");return}if(qt(),je(null),l.running=!0,S("#run").disabled=!0,S("#stop").disabled=!1,t.value.startsWith("sim:")){l.mode="sim";let e=t.value.slice(4),n=(/^\s*module\s+(\w+)/m.exec(l.files[e])||[])[1]||"";be.sim||Ye("sim"),ue(Ae.sim?"Compiling\u2026":"Loading simulator\u2026","busy"),P(`$ iverilog -g2012 -s ${n} ${l.order.filter(i=>/\.s?v$/i.test(i)).join(" ")} && vvp`,"meta");let s={};for(let i of l.order)/\.(s?v|vh|svh|sdf)$/i.test(i)&&(s[i]=l.files[i]);be.sim.postMessage({type:"run",files:s,std:"2012",top:n,base:new URL("verilog/",Ee).href})}else{l.mode="yosys",Ie=[],Oe={},be.yosys||Ye("yosys"),ue(Ae.yosys?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),P(`$ yosys -s ${t.value}   then the CDC check with ${l.order.find(n=>/\.sdc$/i.test(n))||"no SDC"}`,"meta");let e={};for(let n of l.order)/\.vcd$/i.test(n)||(e[n]=l.files[n]);be.yosys.postMessage({type:"run",files:e,script:t.value,dataFiles:[],base:new URL("synth/",Ee).href})}clearTimeout(l.timer),l.timer=setTimeout(()=>Ct(`Stopped after ${gt/1e3} s.`),gt)}function Ct(t){if(!l.running)return;P(t||"Stopped.","meta err");let e=l.mode;xe(!1,!0),Ye(e)}function xe(t,e){clearTimeout(l.timer),l.running=!1,S("#run").disabled=!1,S("#stop").disabled=!0,Ce.scrollTop=0,ue(e?"Stopped":t?"Done":"Errors",e||!t?"err":"ok")}function Jt(){S("#run").addEventListener("click",bt),S("#stop").addEventListener("click",()=>Ct()),S("#script").addEventListener("change",t=>{l.script=t.target.value,xt(),Ge()}),S("#new-file").addEventListener("click",Yt),S("#quiz-check").addEventListener("click",()=>Xe()),S("#quiz-reveal").addEventListener("click",jt),S("#quiz-reset").addEventListener("click",Ut),S("#ex-select").addEventListener("change",t=>qe(t.target.value)),S("#reset").addEventListener("click",()=>qe(l.example||J[0].id)),S("#copy-file").addEventListener("click",t=>Re(N?N.getValue():he.value,t.currentTarget)),S("#download-file").addEventListener("click",()=>yt(l.current,N?N.getValue():he.value)),S("#copy-output").addEventListener("click",t=>Re(Be.join(`
`),t.currentTarget)),S("#share").addEventListener("click",async t=>{let e=t.currentTarget;He();try{let n=await Xt();history.replaceState(null,"","#code="+n),Re(location.href.split("#")[0]+"#code="+n,e)}catch{Re(location.href,e)}}),S("#zoom-in").addEventListener("click",()=>Q.zoom(.5)),S("#zoom-out").addEventListener("click",()=>Q.zoom(2)),S("#zoom-fit").addEventListener("click",()=>Q.fit()),S("#pan-left").addEventListener("click",()=>Q.pan(-.4)),S("#pan-right").addEventListener("click",()=>Q.pan(.4)),S("#radix").addEventListener("change",t=>{Q.radix=t.target.value,Q.draw(),Q.onCursor(Q.cursor)}),S("#dl-vcd").addEventListener("click",()=>{l.lastVcd&&yt("waves.vcd",l.lastVcd.text)}),document.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&(t.preventDefault(),bt())})}async function en(){Jt();let t=!1,e=new URLSearchParams(location.search),n=new URLSearchParams(location.hash.slice(1)).get("code"),s=e.get("lab"),i=e.get("track");if(l.track=pe.some(o=>o.id===i)?i:pe[0].id,We(),n)try{let o=await Qt(n);l.example=null,l.script=o.s||fe,Ke(o.f,o.o,fe),Se(),Fe(),t=!0}catch{}if(!t&&s&&J.some(o=>o.id===s)&&(qe(s),t=!0),!t&&!i){let o=Kt();o&&J.some(c=>c.id===o.example)&&(l.example=o.example,l.track=Ne(o.example),We(),l.script=o.script||fe,Ke(o.files,o.order,o.current),Se(),Fe(),t=!0)}t||qe(J.find(o=>o.group===ke().group).id),ue("Loading Yosys\u2026","busy"),Ye("yosys")}en();})();
