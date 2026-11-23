(()=>{var Qe={"syn-mux":{problem:"You write behavioural RTL (if/else). Synthesis must turn it into real gates from a cell library. How does that happen, and what does the result look like?",tasks:["Run show_rtl.ys and read the RTL diagram.","Run show_cmos.ys to map the design to the cells in mycells.lib.","Open the gate-level netlist and compare it with the RTL."],learn:"The basic Yosys flow: read, elaborate, map to a library, write a netlist and report area."},"syn-adder":{problem:"An adder written as a + b must become gates. Which gates, and how many?",tasks:["Run show_rtl.ys, then show_cmos.ys.","Read the cell count and area.","Change the width and see how the gate count grows."],learn:"How arithmetic operators are synthesized, and how area scales with width."},"syn-alu":{problem:"An ALU has many operations behind one case statement. The RTL is short, the gate netlist is not.",tasks:["Run both scripts and compare the RTL operators with the gate count.","Find which operations cost the most area."],learn:"How case statements and many operators turn into muxes and logic, and what drives area."},"syn-counter":{problem:"Sequential logic adds flip-flops. Where do they come from in the netlist, and how are reset and enable built?",tasks:["Run both scripts and find the flip-flops in the netlist.","See how synchronous reset and enable are made from gates."],learn:"How always @(posedge clk) becomes flip-flops, and how flops are mapped to library cells."},"syn-shift_register":{problem:"A shift register is mostly flip-flops. How much of the area is sequential, and how much is the logic around it?",tasks:["Run both scripts and read the sequential area.","Compare the flop count with the logic cells."],learn:"Read sequential versus combinational area in a synthesis report."},"syn-det_1011":{problem:"A state machine compiles and simulates, but synthesis warns about it. Ignoring synthesis warnings is how latches and bugs reach silicon.",tasks:["Run show_rtl.ys and read the warnings first.","Fix the cause in det_1011.v.","Compare the cell count before and after the fix."],learn:"Spot an inferred latch from a missing default, and fix it."},"syn-ibex":{problem:"Real designs are thousands of cells. Can you synthesize a full RISC-V CPU core and make sense of the result?",tasks:["Run synthesis (30 to 90 seconds).","Read the statistics: cells, flip-flops, buffers and chip area.","Answer the quiz from the report."],learn:"Synthesize a real CPU to SkyWater 130 nm cells and read a production-size area report."}};var ht="http://www.w3.org/2000/svg",w=(e,t,n)=>{let s=document.createElementNS(ht,e);for(let[i,l]of Object.entries(t||{}))s.setAttribute(i,l);return n&&n.appendChild(s),s};function ft(e){let t=e.trim(),n="port",s="",i=/^([\s\S]*?)([!+])?$/.exec(t),l=p=>{let b=/^([\s\S]*?)([!+])$/.exec(p);return b?(s=s||b[2],b[1]):p};t=l(i[0]);let d=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[p,b,v]of d)if(t.startsWith(p)&&t.endsWith(b)){n=v,t=t.slice(1,-1);break}n==="port"&&t.startsWith("@")&&(n="clk",t=t.slice(1)),t=l(t);let y=null,g=t.lastIndexOf("|");g>0&&(y=t.slice(g+1).trim(),t=t.slice(0,g));let f=t.indexOf("#"),u=t.trim();f>=0&&(t=t.slice(0,f));let c=t.replace(/\\n/g,`
`).trim();return{id:n+":"+u,label:c,kind:n,dom:y,mark:s}}function mt(e){let t=new Map,n=[],s=i=>{if(!t.has(i.id))t.set(i.id,{...i,order:t.size});else{let l=t.get(i.id);l.dom=l.dom||i.dom,l.mark=l.mark||i.mark}return t.get(i.id)};for(let i of e.split(";").map(l=>l.trim()).filter(Boolean)){let l=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,d=0,y=null,g=null,f,u=[];for(;f=l.exec(i);)u.push([i.slice(d,f.index),f]),d=l.lastIndex;u.push([i.slice(d),null]);for(let[c,p]of u){let b=s(ft(c));if(y&&g&&n.push({a:y,b,...g}),y=b,p){let v=p[1]||"";g={label:(p[2]||"").trim(),kind:v==="~"?"bad":v==="+"?"good":v==="."?"dash":"plain"}}}}return{nodes:[...t.values()],edges:n}}function bt(e){let t=e.label.split(`
`),n=Math.max(...t.map(s=>s.length))*6.9;return e.kind==="port"||e.kind==="clk"?{w:Math.max(28,n+(e.kind==="clk"?26:12)),h:Math.max(24,t.length*15+6),lines:t}:e.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,t.length*15+22),lines:t}:{w:Math.max(54,n+24),h:Math.max(34,t.length*15+16),lines:t}}function Fe(e){let t=typeof e=="string"?mt(e):e,{nodes:n,edges:s}=t;if(!n.length)return null;let i=new Map(n.map(a=>[a,[]]));for(let a of s)a.a!==a.b&&i.get(a.a).push(a);let l=new Map,d=new Set,y=a=>{l.set(a,1);for(let r of i.get(a)){let h=l.get(r.b);h===1?d.add(r):h||y(r.b)}l.set(a,2)};for(let a of n)l.get(a)||y(a);let g=new Set(s.filter(a=>a.kind==="dash"&&s.some(r=>r.b===a.b&&r.kind!=="dash"))),f=new Map(n.map(a=>[a,0]));for(let a=0;a<n.length;a++){let r=!1;for(let h of s)h.a!==h.b&&!d.has(h)&&!g.has(h)&&f.get(h.b)<f.get(h.a)+1&&(f.set(h.b,f.get(h.a)+1),r=!0);if(!r)break}let u=Math.max(...f.values());for(let a of n)a.kind==="port"&&!i.get(a).length&&s.some(r=>r.b===a)&&f.get(a)<u&&f.set(a,u);let c=[];for(let a of n){let r=f.get(a);(c[r]=c[r]||[]).push(a)}let p=[...new Set(n.map(a=>a.dom).filter(Boolean))],b=a=>a.dom?p.indexOf(a.dom):-1;for(let a of c)a&&a.sort((r,h)=>b(r)-b(h)||r.order-h.order);for(let a of n)Object.assign(a,bt(a));let v=22,_=18,Y=c.map((a,r)=>Math.max(46,...s.filter(h=>f.get(h.a)===r&&f.get(h.b)>r&&h.label).map(h=>h.label.length*6.2+30))),ie=new Map;for(let a of n){let r=a.dom;if(!r){let h=s.find(k=>k.a===a&&k.b.dom||k.b===a&&k.a.dom);r=h?h.a===a?h.b.dom:h.a.dom:null}ie.set(a,r||"")}let q=[...new Set(n.map(a=>ie.get(a)))];q.includes("")&&(q.splice(q.indexOf(""),1),q.unshift(""));let B=p.length>0,dt=B?34:0,me=q.map(a=>Math.max(0,...c.map(r=>{let h=(r||[]).filter(k=>ie.get(k)===a);return h.reduce((k,C)=>k+C.h,0)+Math.max(0,h.length-1)*v}))),se=[],be=_+(B?22:14);q.forEach((a,r)=>{se[r]=be,be+=me[r]+(r<q.length-1?dt:0)});let Ye=be-_-(B?22:14),ye=_,U=new Map,Ie=0;c.forEach((a,r)=>{if(!a)return;let h=Math.max(...a.map(k=>k.w));q.forEach((k,C)=>{let S=a.filter(E=>ie.get(E)===k),A=S.reduce((E,L)=>E+L.h,0)+Math.max(0,S.length-1)*v,T=se[C]+(me[C]-A)/2;for(let E of S)U.set(E,{x:ye+(h-E.w)/2,y:T,w:E.w,h:E.h}),T+=E.h+v}),ye+=h+Y[r]});let pt=d.size>0,oe=ye-(Y[c.length-1]||46)+_;Ie=_*2+(B?22:14)+Ye+(pt?26:0);let I=w("svg",{viewBox:`0 0 ${oe} ${Ie}`,class:"dg dg-block",role:"img"});I.style.maxWidth=oe+"px",I.style.minWidth=Math.round(Math.min(oe,Math.max(oe*.72,320)))+"px";let ut=w("defs",{},I);for(let a of["plain","bad","good","dash"]){let r=w("marker",{id:"dg-ar-"+a,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},ut);w("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+a},r)}p.forEach((a,r)=>{let h=n.filter(L=>L.dom===a).map(L=>U.get(L)),k=q.indexOf(a),C=Math.min(...h.map(L=>L.x))-10,S=se[k]-22,A=Math.max(...h.map(L=>L.x+L.w))+10,T=se[k]+me[k]+8;w("rect",{x:C,y:S,width:A-C,height:T-S,rx:10,class:`dg-dom dg-d${r%4}`},I);let E=w("text",{x:C+8,y:S+13,class:`dg-domlabel dg-d${r%4}`},I);E.textContent=a});let ge=_+(B?22:14)+Ye+10,we=w("g",{},I);for(let a of s){let r=U.get(a.a),h=U.get(a.b),k,C,S;if(a.a===a.b)k=`M${r.x+r.w-10},${r.y} C${r.x+r.w+20},${r.y-26} ${r.x+10},${r.y-26} ${r.x+14},${r.y}`,C=r.x+r.w/2,S=r.y-22;else if(d.has(a)||f.get(a.b)<=f.get(a.a)){let A=r.x+r.w/2,T=h.x+h.w/2;k=`M${A},${r.y+r.h} C${A},${ge+14} ${T},${ge+14} ${T},${h.y+h.h}`,C=(A+T)/2,S=ge+8}else{let A=r.x+r.w,T=r.y+r.h/2,E=h.x,L=h.y+h.h/2,re=(A+E)/2;k=`M${A},${T} C${re},${T} ${re},${L} ${E},${L}`;let Ge=f.get(a.b)-f.get(a.a),N=Ge>1?.5/Ge:.5,R=1-N;C=R*R*R*A+3*R*R*N*re+3*R*N*N*re+N*N*N*E,S=R*R*R*T+3*R*R*N*T+3*R*N*N*L+N*N*N*L}if(w("path",{d:k,class:"dg-edge dg-"+a.kind,"marker-end":`url(#dg-ar-${a.kind})`},we),a.label){let A=a.label.length*6.2+8;w("rect",{x:C-A/2,y:S-9,width:A,height:14,rx:3,class:"dg-elbg"},we);let T=w("text",{x:C,y:S+2,class:"dg-elabel dg-"+a.kind,"text-anchor":"middle"},we);T.textContent=a.label}}for(let a of n){let r=U.get(a),h=w("g",{class:`dg-node dg-k-${a.kind}${a.mark==="!"?" dg-bad":a.mark==="+"?" dg-good":""}`},I);if(a.kind==="reg")w("rect",{x:r.x,y:r.y,width:r.w,height:r.h,rx:3,class:"dg-shape"},h),w("path",{d:`M${r.x},${r.y+r.h-12} L${r.x+7},${r.y+r.h-7} L${r.x},${r.y+r.h-2}`,class:"dg-tri"},h);else if(a.kind==="logic")w("rect",{x:r.x,y:r.y,width:r.w,height:r.h,rx:Math.min(16,r.h/2),class:"dg-shape"},h);else if(a.kind==="block")w("rect",{x:r.x,y:r.y,width:r.w,height:r.h,rx:6,class:"dg-shape"},h);else if(a.kind==="mux")w("path",{d:`M${r.x},${r.y} L${r.x+r.w},${r.y+10} L${r.x+r.w},${r.y+r.h-10} L${r.x},${r.y+r.h} z`,class:"dg-shape"},h);else if(a.kind==="clk"){let S=r.y+r.h/2;w("path",{d:`M${r.x+2},${S+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},h)}let k=a.lines,C=a.kind==="clk"?r.x+24:r.x+r.w/2;k.forEach((S,A)=>{let T=w("text",{x:C,y:r.y+r.h/2+(A-(k.length-1)/2)*15+4,"text-anchor":a.kind==="clk"?"start":"middle",class:"dg-label"},h);T.textContent=S})}return I}function yt(e,t){let n=e.split(/\s+/),s=[],i="";for(let l of n)i&&(i+" "+l).length>t?(s.push(i),i=l):i=i?i+" "+l:l;return i&&s.push(i),s}var gt={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function Je(e){if(!e||!e.length)return null;let t=300,n=12,s=42,i=18,l=e.map(c=>{let p=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(c)||[null,"S",c],b=yt(p[2],s),v=gt[p[1]];return{k:p[1],lines:b,tag:v,h:b.length*15+(v?30:16)}}),d=l.reduce((c,p)=>c+p.h,0)+i*(l.length-1)+16,y=w("svg",{viewBox:`0 0 ${t+16} ${d}`,class:"dg dg-flow",role:"img"});y.style.maxWidth=t+16+"px";let g=w("defs",{},y),f=w("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},g);w("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},f);let u=8;return l.forEach((c,p)=>{let b=w("g",{class:"dg-fl dg-fl-"+c.k},y);c.k==="Q"?w("path",{d:`M22,${u} H${8+t-14} L${8+t},${u+c.h/2} L${8+t-14},${u+c.h} H22 L8,${u+c.h/2} z`,class:"dg-shape"},b):w("rect",{x:8,y:u,width:t,height:c.h,rx:c.k==="S"?6:10,class:"dg-shape"},b);let v=u+18;if(c.tag){let _=w("text",{x:8+n+(c.k==="Q"?10:0),y:v,class:"dg-ftag"},b);_.textContent=c.tag.toUpperCase(),v+=16}for(let _ of c.lines){let Y=w("text",{x:8+n+(c.k==="Q"?10:0),y:v,class:"dg-ftext"},b);Y.textContent=_,v+=15}u+=c.h,p<l.length-1&&(w("path",{d:`M${8+t/2},${u+1} V${u+i-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},y),u+=i)}),y}var He={adder:["i-46z3tTYGM",10200,10800],basic:["za2o93ldrVQ",3240,3840],"cdc-bus":["akitv2i4Nxw",3720,4320],"cdc-clocks":["akitv2i4Nxw",0,600],"cdc-fifo":["akitv2i4Nxw",5310,5910],"cdc-find":["akitv2i4Nxw",1200,1800],"cdc-fix":["akitv2i4Nxw",1110,1710],"cdc-handshake":["akitv2i4Nxw",2940,3540],"cdc-pulse":["akitv2i4Nxw",2370,2970],"cdc-reset":["akitv2i4Nxw",5535,6135],counter:["i-46z3tTYGM",20400,21e3],"cov-1":["9SxAZWWVeJc",11373,11973],"cov-2":["9SxAZWWVeJc",11373,11973],"cov-3":["9SxAZWWVeJc",11373,11973],"cov-4":["9SxAZWWVeJc",11373,11973],"cov-5":["9SxAZWWVeJc",11373,11973],"cov-6":["9SxAZWWVeJc",11373,11973],"cov-7":["9SxAZWWVeJc",11040,11640],"cov-8":["9SxAZWWVeJc",11040,11640],"cov-9":["9SxAZWWVeJc",11040,11640],"dv-17":["9SxAZWWVeJc",11040,11640],"dv-18":["9SxAZWWVeJc",11040,11640],"dv-19":["9SxAZWWVeJc",10800,11400],"dv-4":["9SxAZWWVeJc",1031,1631],exceptions:["za2o93ldrVQ",8520,9120],fifo:["i-46z3tTYGM",22800,23400],fsm:["i-46z3tTYGM",24600,25200],"l01-gates":["8bmt4UJmJ_k",3347,3947],"l02-nand":["8bmt4UJmJ_k",3347,3947],"l03-nor":["8bmt4UJmJ_k",3347,3947],"l04-sop-pos":["8bmt4UJmJ_k",5100,5700],"l05-demorgan":["8bmt4UJmJ_k",4704,5304],"l06-kmap":["8bmt4UJmJ_k",5659,6259],"l07-dontcare":["8bmt4UJmJ_k",6900,7500],"l10-sub":["8bmt4UJmJ_k",7200,7800],"l11-dec-fa":["8bmt4UJmJ_k",7200,7800],"l12-mux-fn":["8bmt4UJmJ_k",7500,8100],"l13-mux-demux":["8bmt4UJmJ_k",7500,8100],"l14-dec38":["8bmt4UJmJ_k",7200,7800],"l15-enc83":["8bmt4UJmJ_k",7200,7800],"l18-addsub":["8bmt4UJmJ_k",2700,3300],"l19-bcdadd":["8bmt4UJmJ_k",7200,7800],"l21-srlatch":["8bmt4UJmJ_k",7500,8100],"l22-ffs":["8bmt4UJmJ_k",7500,8100],"l29-rca":["8bmt4UJmJ_k",7200,7800],mux:["i-46z3tTYGM",10800,11400],"p1-c2f":["i-46z3tTYGM",9900,10500],"p1-fa-bh":["i-46z3tTYGM",3900,4500],"p1-fa-df":["i-46z3tTYGM",3600,4200],"p1-fa-st":["i-46z3tTYGM",3900,4500],"p1-ha-bh":["i-46z3tTYGM",2400,3e3],"p1-ha-df":["i-46z3tTYGM",2100,2700],"p1-ha-st":["i-46z3tTYGM",1500,2100],"p1-ops":["i-46z3tTYGM",8400,9e3],"p2-add4":["i-46z3tTYGM",10200,10800],"p2-alu":["i-46z3tTYGM",12900,13500],"p2-bshift8":["i-46z3tTYGM",13500,14100],"p2-cmp4":["i-46z3tTYGM",12600,13200],"p2-dec24":["i-46z3tTYGM",11400,12e3],"p2-enc42":["i-46z3tTYGM",12300,12900],"p2-mux2":["i-46z3tTYGM",10800,11400],"p2-mux4":["i-46z3tTYGM",10800,11400],"p2-penc42":["i-46z3tTYGM",12300,12900],"p3-dff":["i-46z3tTYGM",15900,16500],"p3-dff-arh":["i-46z3tTYGM",18300,18900],"p3-dff-arl":["i-46z3tTYGM",17400,18e3],"p3-dff-ash":["i-46z3tTYGM",18600,19200],"p3-dff-neg-arh":["i-46z3tTYGM",17100,17700],"p3-dff-srh":["i-46z3tTYGM",18e3,18600],"p3-dff-srl":["i-46z3tTYGM",18e3,18600],"p3-dff-srs":["i-46z3tTYGM",18e3,18600],"p3-dlatch":["i-46z3tTYGM",15300,15900],"p3-dlatch-rst":["i-46z3tTYGM",15600,16200],"p3-sync-async":["i-46z3tTYGM",18300,18900],"p4-afifo":["i-46z3tTYGM",24e3,24600],"p4-cnt":["i-46z3tTYGM",20400,21e3],"p4-cnt-load":["i-46z3tTYGM",20700,21300],"p4-cnt-tb":["i-46z3tTYGM",20400,21e3],"p4-div2":["i-46z3tTYGM",22200,22800],"p4-div3":["i-46z3tTYGM",22200,22800],"p4-div4":["i-46z3tTYGM",22200,22800],"p4-fifo":["i-46z3tTYGM",22800,23400],"p4-mealy-nov":["i-46z3tTYGM",24600,25200],"p4-mealy-ov":["i-46z3tTYGM",24600,25200],"p4-mod":["i-46z3tTYGM",21300,21900],"p4-moore-nov":["i-46z3tTYGM",24600,25200],"p4-moore-ov":["i-46z3tTYGM",24600,25200],"p4-range":["i-46z3tTYGM",21600,22200],"p4-range-udl":["i-46z3tTYGM",21900,22500],"p4-sr5":["i-46z3tTYGM",19200,19800],"p4-updown":["i-46z3tTYGM",21e3,21600],"p4-usr5":["i-46z3tTYGM",19800,20400],"pd-b0":["somgoTERlmw",540,1140],"pd-b1":["somgoTERlmw",3900,4500],"pd-c1":["somgoTERlmw",8820,9420],"pd-c2":["somgoTERlmw",8820,9420],"pd-c3":["somgoTERlmw",8850,9450],"pd-f3":["somgoTERlmw",6600,7200],"pd-f4":["somgoTERlmw",7320,7920],"pd-p1":["somgoTERlmw",7950,8550],"pd-p3":["somgoTERlmw",7980,8580],"pd-p4":["somgoTERlmw",7950,8550],"pd-r1":["somgoTERlmw",9960,10560],"pd-r2":["somgoTERlmw",9960,10560],"pd-s2":["somgoTERlmw",7410,8010],"pd-s4":["somgoTERlmw",1700,2300],"s01-reg":["TIZwEGRvhBU",7200,7800],"s02-mux":["TIZwEGRvhBU",8400,9e3],"s03-cnt":["TIZwEGRvhBU",7200,7800],"s04-ctrl":["TIZwEGRvhBU",4500,5100],"s05-alu":["TIZwEGRvhBU",9e3,9600],"s06-memtb":["TIZwEGRvhBU",7500,8100],"s07-struct":["TIZwEGRvhBU",5100,5700],"s10-gen":["TIZwEGRvhBU",8100,8700],"s12-uart":["TIZwEGRvhBU",4500,5100],"sdc-c1":["VGQp99ArgSE",1620,2220],"sdc-c10":["VGQp99ArgSE",9510,10110],"sdc-c11":["VGQp99ArgSE",10530,11130],"sdc-c12":["VGQp99ArgSE",11070,11670],"sdc-c13":["VGQp99ArgSE",4530,5130],"sdc-c14":["VGQp99ArgSE",7020,7620],"sdc-c15":["VGQp99ArgSE",6e3,6600],"sdc-c16":["VGQp99ArgSE",4830,5430],"sdc-c2":["VGQp99ArgSE",4830,5430],"sdc-c20":["VGQp99ArgSE",8730,9330],"sdc-c3":["VGQp99ArgSE",2610,3210],"sdc-c4":["VGQp99ArgSE",3360,3960],"sdc-c5":["VGQp99ArgSE",4740,5340],"sdc-c6":["VGQp99ArgSE",6600,7200],"sdc-c7":["VGQp99ArgSE",8460,9060],"sdc-c8":["VGQp99ArgSE",8460,9060],"sdc-c9":["VGQp99ArgSE",8670,9270],"so-s3":["za2o93ldrVQ",6330,6930],"so-s4":["za2o93ldrVQ",8100,8700],"so-s7":["za2o93ldrVQ",2820,3420],"sva-a1":["9SxAZWWVeJc",9600,10200],"sva-a6":["9SxAZWWVeJc",6e3,6600],"sva-b1":["9SxAZWWVeJc",1784,2384],"sva-b10":["9SxAZWWVeJc",4500,5100],"sva-b2":["9SxAZWWVeJc",2710,3310],"sva-b3":["9SxAZWWVeJc",3600,4200],"sva-b4":["9SxAZWWVeJc",5400,6e3],"sva-b5":["9SxAZWWVeJc",6e3,6600],"sva-b6":["9SxAZWWVeJc",4200,4800],"sva-b7":["9SxAZWWVeJc",2400,3e3],"sva-b8":["9SxAZWWVeJc",10800,11400],"sva-b9":["9SxAZWWVeJc",10800,11400],"sva-p1":["9SxAZWWVeJc",6300,6900],"sva-p2":["9SxAZWWVeJc",6300,6900],"sva-p3":["9SxAZWWVeJc",9600,10200],"sva-p5":["9SxAZWWVeJc",9900,10500],"sva-p6":["9SxAZWWVeJc",9900,10500],"sva-p8":["9SxAZWWVeJc",3600,4200],"sva-s1":["9SxAZWWVeJc",6600,7200],"sva-s2":["9SxAZWWVeJc",7200,7800],"sva-s3":["9SxAZWWVeJc",7500,8100],"sva-s4":["9SxAZWWVeJc",9300,9900],"sva-s5":["9SxAZWWVeJc",8700,9300],"sva-s6":["9SxAZWWVeJc",9e3,9600],"syn-adder":["97q0N3DCZTw",555,1155],"syn-alu":["97q0N3DCZTw",959,1559],"syn-counter":["97q0N3DCZTw",5790,6390],"syn-det_1011":["97q0N3DCZTw",5580,6180],"syn-ibex":["97q0N3DCZTw",1490,2090],"syn-mux":["97q0N3DCZTw",30,630],"syn-shift_register":["97q0N3DCZTw",1889,2489],"ver-v1":["VGQp99ArgSE",8730,9330],"ver-v10":["VGQp99ArgSE",4830,5430],"ver-v11":["VGQp99ArgSE",4890,5490],"ver-v12":["VGQp99ArgSE",4890,5490],"ver-v2":["VGQp99ArgSE",8670,9270],"ver-v3":["VGQp99ArgSE",8670,9270],"ver-v4":["VGQp99ArgSE",8730,9330],"ver-v5":["VGQp99ArgSE",8670,9270],"ver-v6":["VGQp99ArgSE",8760,9360],"ver-v9":["VGQp99ArgSE",4830,5430],violation:["za2o93ldrVQ",1020,1620],"ws-lab1":["za2o93ldrVQ",4500,5100],"ws-lab12":["za2o93ldrVQ",1020,1620],"ws-lab13":["za2o93ldrVQ",8670,9270],"ws-lab14":["za2o93ldrVQ",3540,4140],"ws-lab3":["za2o93ldrVQ",1020,1620],"ws-lab6":["za2o93ldrVQ",2430,3030],"ws-lab7":["za2o93ldrVQ",2070,2670],"x-consolidate":["akitv2i4Nxw",3720,4320],"x-fifo":["akitv2i4Nxw",5310,5910],"x-gray":["akitv2i4Nxw",4710,5310],"x-mcp":["akitv2i4Nxw",5220,5820],"x-recon":["akitv2i4Nxw",3420,4020],"x-recon-fix":["akitv2i4Nxw",4170,4770]};var Oe={_note:"One YouTube course per topic, used for the study plans' daily watch slices. d = length in seconds.",logic:{id:"8bmt4UJmJ_k",title:"Digital Logic Design Full Course",d:8504},verilog:{id:"i-46z3tTYGM",title:"Complete Verilog Course",d:26621},systemverilog:{id:"TIZwEGRvhBU",title:"Complete SystemVerilog Course for Digital Design",d:10300},vhdl:{id:"musL2Y95Ei0",title:"Complete VHDL Course",d:14677},sva:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},dv:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},synth:{id:"97q0N3DCZTw",title:"VLSI Logic Synthesis",d:8583},cdc:{id:"akitv2i4Nxw",title:"Clock Domain Crossing (CDC) Full Course",d:6135},sta:{id:"za2o93ldrVQ",title:"Static Timing Analysis Full Course",d:9332},sdc:{id:"VGQp99ArgSE",title:"Complete SDC Timing Constraints Course",d:12024},pd:{id:"somgoTERlmw",title:"Physical Design Full Course",d:12047}};var xe={};for(let e of Object.values(Oe))e&&e.id&&(xe[e.id]=e.title);var Be=e=>{let t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=e%60;return(t?t+":"+String(n).padStart(2,"0"):n)+":"+String(s).padStart(2,"0")};function vt(e,t){let n=e.querySelector(".brief-watch"),s=He[t];if(!s){n&&n.remove();return}let[i,l,d]=s,y=xe[i]||"the course video";n||(n=document.createElement("div"),n.className="brief-watch",e.querySelector(".brief-body").before(n)),n.innerHTML=`<div class="bw-row"><span class="bw-ic" aria-hidden="true">\u{1F4FA}</span><span class="bw-txt"><b>Watch for this lab:</b> <span class="bw-t"></span> of <a target="_blank" rel="noopener"></a> <span class="bw-min"></span></span>
    <button type="button" class="bw-play">\u25B6 Play this part</button></div><span class="vbadge"></span><div class="bw-player" hidden></div>`,n.querySelector(".bw-t").textContent=Be(l)+" \u2192 "+Be(d);let g=n.querySelector("a");g.textContent=y,g.href=`https://www.youtube.com/watch?v=${i}&t=${l}s`,n.querySelector(".bw-min").textContent=`(${Math.max(1,Math.round((d-l)/60))} min)`;let f=n.querySelector(".vbadge");window.vddVideo&&window.vddVideo.label(f,i,null,xe[i]),n.querySelector(".bw-play").addEventListener("click",u=>{let c=n.querySelector(".bw-player");c.hidden=!1,c.innerHTML="";let p=document.createElement("button");c.appendChild(p),u.currentTarget.hidden=!0,window.vddVideo&&window.vddVideo.play(p,{id:i,title:y,start:l,end:d},"video-frame",f)})}function Ue(e,t,n){let s=document.getElementById("lab-brief");if(!s)return;let i=e[t];if(!i){s.hidden=!0;return}try{vt(s,t)}catch(u){console.warn("watch",u)}s.querySelector(".brief-problem").textContent=i.problem;let l=s.querySelector(".brief-tasks");l.innerHTML="";for(let u of i.tasks){let c=document.createElement("li");c.textContent=u,l.appendChild(c)}s.querySelector(".brief-learn").textContent=i.learn;let d=s.querySelector(".brief-fig"),y=i.images||(i.image?[{src:i.image,alt:i.imageAlt||""}]:[]);if(y.length||i.html){if(d||(d=document.createElement("figure"),d.className="brief-fig",s.appendChild(d)),d.innerHTML="",y.length){let u=document.createElement("div");u.className="brief-imgs";for(let c of y){let p=document.createElement("a");p.href=c.src,p.target="_blank",p.rel="noopener";let b=document.createElement("img");b.src=c.src,b.alt=c.alt||"",b.loading="lazy",p.appendChild(b),u.appendChild(p)}d.appendChild(u)}if(i.html){let u=document.createElement("div");u.className="brief-html",u.innerHTML=i.html,d.appendChild(u)}if(i.caption){let u=document.createElement("figcaption");u.textContent=i.caption,d.appendChild(u)}}else d&&d.remove();let g=s.querySelector(".brief-dg"),f=n&&n[t];if(f&&(f.b||f.f)){g||(g=document.createElement("div"),g.className="brief-dg",s.querySelector(".brief-body").after(g)),g.innerHTML="";let u=(c,p)=>{if(!p)return;let b=document.createElement("div");b.className="brief-dgp";let v=document.createElement("h3");v.textContent=c,b.appendChild(v);let _=document.createElement("div");_.className="brief-dgs",_.appendChild(p),b.appendChild(_),g.appendChild(b)};try{u(f.bt||"Design",f.b?Fe(f.b):null)}catch(c){console.warn("diagram",t,c)}try{u(f.ft||"Problem \u2192 solution",f.f?Je(f.f):null)}catch(c){console.warn("flow",t,c)}g.classList.toggle("one",g.children.length===1)}else g&&g.remove();s.hidden=!1}var Z=(e,t,n)=>["P: "+e,"S: read_verilog \u2192 proc \u2192 opt: the RTL becomes generic cells (show_rtl.ys).","S: techmap \u2192 dfflibmap \u2192 abc: map to the cells in the .lib (show_cmos.ys).",...t?["Q: "+t]:[],"OK: "+n],Ze={"syn-mux":{b:"mux2to1.v > {Yosys\\nproc, opt} > (RTL: $mux) > {map to\\nmycells.lib} > mux2to1_synth.v",f:Z("An if/else in RTL must become real gates from a cell library.","Remove the else branch: what does synthesis infer? (a latch)","The mux becomes NAND/NOR/NOT cells you can count in the netlist.")},"syn-adder":{b:"a[7:0] > (a + b + cin) > {sum, cout}; b[7:0] > (a + b + cin); cin > (a + b + cin)",f:Z("a + b must become gates. Which ones, and how many?","Compare 2 operators in RTL with the gate count.","One + becomes a chain of full-adder logic: the cell count shows the cost.")},"syn-alu":{b:"a > (arithmetic\\nunit) > <op mux> > y; b > (logic\\nunit) > <op mux>; op .select.> <op mux>",f:Z("Sixteen operations behind one case statement: short RTL, big netlist.","Which operators cost the most cells?","Arithmetic, logic and the output mux each become gates; the statistics show where the area goes.")},"syn-counter":{b:"[count 3 bits] > (+1) > <en / rst mux> > [count 3 bits]; en .> <en / rst mux>; rst .sync.> <en / rst mux>",f:Z("Where do flip-flops come from, and how are reset and enable built?","Find the DFF cells: how many, and what drives their D?","3 flops from the always @(posedge clk), with reset and enable as logic in front of D.")},"syn-shift_register":{b:"[shift reg 8 bits] > <up / down mux> > [shift reg 8 bits]; (feedback) > <up / down mux>; [shift reg 8 bits] > (feedback)",f:Z("A shift register is mostly flip-flops. How much area is logic?","Compare flop area with the area of the mux and feedback logic.","8 flops plus a mux per bit: sequential area dominates.")},"syn-det_1011":{b:"din > (next-state logic)! > [state] > (output logic) > found; [state] > (next-state logic)!",f:["P: The FSM simulates, but synthesis warns about it.","S: Read the log: an incomplete case or a missing default.","X: Ignored warnings put latches or extra logic into silicon.","F: Fix the RTL (default assignments, full case).","OK: The warning is gone and the cell count drops."]},"syn-ibex":{b:"ibex_rtl.v > {synth -top ibex_top} > {dfflibmap\\nsky130 .lib} > {abc\\nsky130 .lib} > ibex_top_synth.v; {sky130 HD .lib} .> {abc\\nsky130 .lib}",f:["P: Synthesize a full 32-bit RISC-V core in the browser.","S: Elaborate, optimise and map to SkyWater 130 nm cells.","Q: Read the statistics: cells, flip-flops, buffers, area.","OK: About 14,000 cells: the netlist the STA labs time."]}};var V=[{id:"synth",group:"Synthesis workshop",title:"Synthesis workshop",note:"7 labs from a 2-to-1 mux to a RISC-V CPU core. Each lab has a quiz."}],M=[{id:"syn-mux",group:"Synthesis workshop",tag:"Lab 1",title:"Synthesis of a mux",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 1: a 2-to-1 multiplexer.
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
`},quiz:[{type:"number",q:"How many wires does ibex_top have after synthesis?",answer:11257,tol:0,unit:"",explain:"The wires line of the final stat report.",try:!1},{type:"number",q:"How many cells?",answer:12255,tol:0,unit:"",explain:"The cells line of the final stat report.",try:!1},{type:"number",q:"How many flip-flops? (Add up the dfrtp, dfstp and dfxtp cells.)",answer:982,tol:0,unit:"",explain:"700 dfrtp_1 + 9 dfstp_1 + 273 dfxtp_1.",try:!1},{type:"number",q:"How many latches? (dlxtp and dlxtn: the register file is latch-based, RegFile = 2.)",answer:1025,tol:0,unit:"",explain:"992 dlxtp_1 + 33 dlxtn_1.",try:!1},{type:"number",q:"How many buffers?",answer:0,tol:0,unit:"",explain:"Synthesis does not add buffers here: buffering for fanout and wire load comes later, in placement and timing repair.",try:!1},{type:"number",q:"What is the chip area of ibex_top?",answer:102872.41,tol:1,unit:"\xB5m\xB2",explain:"In square micrometres, from the Sky130 cell areas.",try:!1}]}],Pe=["ibex_rtl.v","sky130_fd_sc_hd__tt_025C_1v80_synth.lib"],je=[["mycells.lib","Demo library: BUF, NOT, NAND, NOR, DFF (in the lab tabs)"],["cmos_cells.lib","Demo library with DFFSR (in the lab tabs)"],["sky130_fd_sc_hd__tt_025C_1v80_synth.lib","SkyWater 130 nm HD, typical; cells usable for synthesis"],["ibex_rtl.v","lowRISC ibex RTL, converted to Verilog-2005 with sv2v"]];var m=e=>document.querySelector(e),Ke=3e5,it="vdd-synth-lab-v1",D="show_rtl.ys",o={example:M[0].id,track:V[0].id,script:D,files:{},order:[],current:D,running:!1,ready:!1,worker:null,timer:null},st=()=>o.order.filter(e=>/\.ys$/i.test(e));function j(){return o.files[o.script]!==void 0?o.script:o.files[D]!==void 0?D:st()[0]||D}function _t(){let e=m("#script-wrap"),t=m("#script"),n=st(),s=j();e.hidden=!(n.length>1||n.length===1&&s!==D),t.innerHTML="";for(let i of n){let l=document.createElement("option");l.value=i,l.textContent=i,t.appendChild(l)}t.value=s}var z=new Map,x=null,W=m("#editor textarea");function Ee(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(x=window.CodeMirror.fromTextArea(W,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),x.on("change",()=>{o.files[o.current]=x.getValue(),ce()})):(W.classList.add("plain-editor"),W.addEventListener("input",()=>{o.files[o.current]=W.value,ce()}));function de(e){x?o.files[o.current]=x.getValue():o.files[o.current]=W.value,o.current=e,x?(z.has(e)||z.set(e,window.CodeMirror.Doc(o.files[e]??"",Ee(e))),x.swapDoc(z.get(e)),setTimeout(()=>x.refresh(),0)):W.value=o.files[e]??"",pe()}function kt(e,t){de(e),x&&(x.focus(),x.setCursor({line:t-1,ch:0}),x.addLineClass(t-1,"background","cm-errline"),setTimeout(()=>x.removeLineClass(t-1,"background","cm-errline"),2500),x.scrollIntoView({line:t-1,ch:0},80))}function ve(e,t,n){z.clear(),o.files={...e},o.order=t||Object.keys(e),o.current=n&&o.order.includes(n)?n:o.order.includes(j())?j():o.order[0],x?(z.set(o.current,window.CodeMirror.Doc(o.files[o.current]??"",Ee(o.current))),x.swapDoc(z.get(o.current))):W.value=o.files[o.current]??"",pe()}function pe(){let e=m("#tabs");e.innerHTML="";for(let t of o.order){let n=document.createElement("button");if(n.type="button",n.className="tab"+(t===o.current?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t===o.current?"true":"false"),n.textContent=t,n.addEventListener("click",()=>de(t)),e.appendChild(n),t===o.current&&o.order.length>1){let s=document.createElement("button");s.type="button",s.className="tab-x",s.textContent="\xD7",s.title="Remove "+t,s.setAttribute("aria-label","Remove file "+t),s.addEventListener("click",()=>St(t)),e.appendChild(s)}}_t()}function ot(e,t,n){o.files[e]===void 0&&o.order.push(e),o.files[e]=t,z.delete(e),n?pe():de(e),ce()}function St(e){x&&(o.files[o.current]=x.getValue()),delete o.files[e],z.delete(e),o.order=o.order.filter(t=>t!==e),o.current=o.order[0],x?(z.has(o.current)||z.set(o.current,window.CodeMirror.Doc(o.files[o.current]??"",Ee(o.current))),x.swapDoc(z.get(o.current))):W.value=o.files[o.current]??"",pe(),ce()}function Tt(){let e=(window.prompt("New file name (for example top.v, my_flow.ys):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){$("File names can use letters, digits, dot, dash and underscore only.","err");return}if(o.files[e]!==void 0){de(e);return}ot(e,"")}}var K=e=>{let t=M.find(n=>n.id===e);return t?(V.find(n=>n.group===t.group)||V[0]).id:null},G=()=>V.find(e=>e.id===o.track)||V[0];function Le(){let e=m("#tracks");e.innerHTML="",e.hidden=V.length<2;for(let n of V){let s=document.createElement("button");s.type="button",s.className="track"+(n.id===G().id?" active":""),s.setAttribute("role","tab"),s.setAttribute("aria-selected",n.id===G().id?"true":"false");let i=M.filter(l=>l.group===n.group).length;s.innerHTML='<span class="track-t"></span><span class="track-n"></span>',s.querySelector(".track-t").textContent=n.title,s.querySelector(".track-n").textContent=i+" labs",s.addEventListener("click",()=>Ct(n.id)),e.appendChild(s)}let t=m("#track-note");if(t.textContent=G().note+" ",G().id==="workshop"){let n=document.createElement("a");n.href="STA_Workshop_Labs.pdf",n.target="_blank",n.rel="noopener",n.className="btn small",n.textContent="Workshop slides (PDF)",t.appendChild(n)}}async function Ct(e,t){o.track=e;try{let n=new URL(location.href);n.searchParams.set("track",e),history.replaceState(null,"",n.pathname+n.search+location.hash)}catch{}Le(),!t&&K(o.example)!==e?await X(M.find(n=>n.group===G().group).id):te()}function te(){let e=m("#examples");e.innerHTML="";for(let n of M.filter(s=>s.group===G().group)){let s=document.createElement("button");s.type="button",s.className="ex"+(n.id===o.example?" active":""),s.dataset.id=n.id,s.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',s.querySelector(".ex-tag").textContent=n.tag;let i=n.quiz&&n.quiz.length?ne()[n.id]:null;if(i&&i.checked){let l=document.createElement("span");l.className="ex-done",l.textContent=(i.score===i.total?"\u2713 ":"")+`quiz ${i.score}/${i.total}`,s.querySelector(".ex-tag").appendChild(l)}s.querySelector(".ex-title").textContent=n.title,s.addEventListener("click",()=>X(n.id)),e.appendChild(s)}let t=m("#ex-select");t.innerHTML=M.filter(n=>n.group===G().group).map(n=>`<option value="${n.id}">${n.group!=="Basic labs"?n.tag+" \xB7 ":""}${n.title}</option>`).join(""),o.example&&(t.value=o.example)}async function X(e){let t=M.find(i=>i.id===e)||M[0];o.example=t.id,K(t.id)!==o.track&&(o.track=K(t.id),Le()),o.script=t.script||D;let n={};for(let[i,l]of Object.entries(t.files))if(l!==null)n[i]=l;else try{let d=await fetch(new URL("data/"+(t.load||{})[i],location.href));n[i]=d.ok?await d.text():`// Could not load ${t.load[i]}`}catch{n[i]=`// Could not load ${t.load[i]}`}let s=Object.keys(t.files).sort((i,l)=>et(i)-et(l));ve(n,s,o.script),J.clear(),ee.clear(),We(),De(),te(),Me(),he(),at(),ze(null),O(o.ready?"Ready":"Loading Yosys\u2026",o.ready?"idle":"busy")}var Ne="vdd-synth-quiz-v1";function ne(){try{return JSON.parse(localStorage.getItem(Ne)||"{}")||{}}catch{return{}}}function Re(e){try{localStorage.setItem(Ne,JSON.stringify(e))}catch{}}var ue=()=>M.find(e=>e.id===o.example&&e.quiz&&e.quiz.length);function At(e){let t=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return t?parseFloat(t[0]):NaN}function Et(e,t){if(e.type==="choice")return t!=null&&+t===e.answer;let n=At(t);return isFinite(n)&&Math.abs(n-e.answer)<=(e.tol??.01)+1e-9}var Lt=e=>e.type==="choice"?e.options[e.answer]:`${Number.isInteger(e.answer)?e.answer:e.answer.toFixed(2)}${e.unit?" "+e.unit:""}`;function Me(){window.vddCurrentLab=o.example,Ue(Qe,o.example,Ze);let e=m("#quiz"),t=m("#quiz-list"),n=ue();if(!n){e.hidden=!0;return}e.hidden=!1;let s=ne()[n.id]||{},i=s.a||[];t.innerHTML="",n.quiz.forEach((l,d)=>{let y=document.createElement("li"),g=document.createElement("div");if(g.className="quiz-q",l.try){let c=document.createElement("span");c.className="quiz-try",c.textContent="Try it",g.appendChild(c)}let f=l.q.replace(/^Try it: /,"");if(g.appendChild(document.createTextNode(f.charAt(0).toUpperCase()+f.slice(1))),y.appendChild(g),l.type==="choice"){let c=document.createElement("div");c.className="quiz-opts",c.setAttribute("role","radiogroup"),l.options.forEach((p,b)=>{let v=document.createElement("label"),_=document.createElement("input");_.type="radio",_.name=`q${d}`,_.value=b,i[d]!==void 0&&+i[d]===b&&(_.checked=!0),_.addEventListener("change",()=>Xe(n,d,b));let Y=document.createElement("span");Y.textContent=p,v.append(_,Y),c.appendChild(v)}),y.appendChild(c)}else{let c=document.createElement("div");c.className="quiz-num";let p=document.createElement("input");if(p.type="text",p.inputMode="decimal",p.autocomplete="off",p.setAttribute("aria-label","Answer to question "+(d+1)),p.placeholder="e.g. -1.23",i[d]!==void 0&&(p.value=i[d]),p.addEventListener("input",()=>Xe(n,d,p.value)),p.addEventListener("keydown",b=>{b.key==="Enter"&&_e()}),c.appendChild(p),l.unit){let b=document.createElement("span");b.className="unit",b.textContent=l.unit,c.appendChild(b)}y.appendChild(c)}let u=document.createElement("div");u.className="quiz-fb",u.hidden=!0,u.setAttribute("aria-live","polite"),y.appendChild(u),t.appendChild(y)}),s.checked?_e(!0):rt(null)}function Xe(e,t,n){let s=ne(),i=s[e.id]||{a:[]};i.a=i.a||[],i.a[t]=n,i.checked=!1,s[e.id]=i,Re(s);let l=m("#quiz-list").children[t]?.querySelector(".quiz-fb");l&&(l.hidden=!0)}function rt(e,t){let n=m("#quiz-score");if(e===null){n.textContent="",n.classList.remove("done");return}n.textContent=`${e} / ${t} correct`,n.classList.toggle("done",e===t)}function _e(e){let t=ue();if(!t)return;let n=ne(),s=n[t.id]||{a:[]},i=0;t.quiz.forEach((l,d)=>{let y=m("#quiz-list").children[d],g=l.type==="choice"?(y.querySelector("input:checked")||{}).value:y.querySelector("input").value;s.a[d]=g;let f=y.querySelector(".quiz-fb"),u=g===void 0||g==="",c=!u&&Et(l,g);c&&i++,f.hidden=!1,f.className="quiz-fb "+(c?"ok":"bad"),f.innerHTML="";let p=document.createElement("b");p.textContent=c?"Correct.":u?"Not answered yet.":"Not quite.",f.appendChild(p),c&&l.explain?f.appendChild(document.createTextNode(l.explain)):!c&&!u&&f.appendChild(document.createTextNode(l.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),s.checked=!0,s.score=i,s.total=t.quiz.length,n[t.id]=s,Re(n),rt(i,t.quiz.length),e||te()}function Nt(){let e=ue();if(e){try{let t=JSON.parse(localStorage.getItem("vdd-revealed-v1")||"{}");t[Ne+":"+e.id]=Date.now(),localStorage.setItem("vdd-revealed-v1",JSON.stringify(t))}catch{}e.quiz.forEach((t,n)=>{let s=m("#quiz-list").children[n].querySelector(".quiz-fb");s.hidden=!1,s.className="quiz-fb shown",s.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+Lt(t)+".",s.appendChild(i),t.explain&&s.appendChild(document.createTextNode(t.explain))})}}function Rt(){let e=ue();if(!e)return;let t=ne();delete t[e.id],Re(t),Me(),te()}function et(e){return e===o.script?-1:/\.ys$/.test(e)?0:/\.s?v$/.test(e)?1:/\.lib$/.test(e)?3:2}var tt=null;function ce(){clearTimeout(tt),tt=setTimeout(he,400)}function he(){try{localStorage.setItem(it,JSON.stringify({example:o.example,script:o.script,files:o.files,order:o.order,current:o.current}))}catch{}}function Mt(){try{let e=JSON.parse(localStorage.getItem(it)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function zt(){let e=JSON.stringify({f:o.files,o:o.order,s:j()}),t=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(t).arrayBuffer()),s="";for(let i of n)s+=String.fromCharCode(i);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Wt(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=new Blob([Uint8Array.from(t,s=>s.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function P(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{n=document.execCommand("copy")}catch{}i.remove()}if(t){let s=t.dataset.label||t.textContent;t.dataset.label=s,t.textContent=n?"Copied":"Press Ctrl+C",t.classList.toggle("ok",n),setTimeout(()=>{t.textContent=s,t.classList.remove("ok")},1600)}}function ke(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var H=m("#console"),fe=[];function at(){H.textContent="",fe=[]}function $(e,t){fe.push(e);let n=document.createElement("div");n.className="ln "+(t||"");let s=/\b([\w.-]+\.(?:v|sv|ys|lib)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|lib)),? line (\d+)\b/.exec(e);if(s&&o.files[s[1]]!==void 0){let i=e.indexOf(s[0]);n.appendChild(document.createTextNode(e.slice(0,i)));let l=document.createElement("button");l.type="button",l.className="loc",l.textContent=s[0],l.addEventListener("click",()=>kt(s[1],+s[2])),n.appendChild(l),n.appendChild(document.createTextNode(e.slice(i+s[0].length)))}else n.textContent=e;/^ERROR|\bError:|Internal error/.test(e)?n.classList.add("err"):/^Warning/.test(e)?n.classList.add("warn"):/^\d+\. [A-Z]/.test(e)?n.classList.add("sec"):/Chip area for module|^\s+\d+\s+(?:[\d.E+-]+\s+)?cells$/.test(e)&&n.classList.add("met"),H.appendChild(n),H.childElementCount>2e4&&H.firstChild.remove()}function ze(e){let t=m("#summary");if(!e){t.innerHTML="",t.hidden=!0;return}let n=[],s=u=>{let c,p=null,b=new RegExp(u.source,"gm");for(;c=b.exec(e);)p=c;return p},i=s(/^\s+(\d+)\s+(?:[\d.E+-]+\s+)?cells$/),l=s(/Chip area for module '[^']*': ([\d.]+)/),d=s(/of which used for sequential elements: ([\d.]+) \(([\d.]+)%\)/),y=s(/^\s+(\d+)\s+(?:-\s+)?wires$/),g=(e.match(/^Warning: Latch inferred/gm)||[]).length,f=(e.match(/^ERROR/gm)||[]).length;i&&n.push(["Cells",i[1],""]),l&&n.push(["Chip area",(+l[1]).toLocaleString("en-US",{maximumFractionDigits:2}),""]),d&&n.push(["Sequential area",d[2]+"%",""]),y&&n.push(["Wires",y[1],""]),g&&n.push(["Latches inferred",String(g),"bad"]),f&&n.push(["Errors",String(f),"bad"]),t.innerHTML="";for(let[u,c,p]of n){let b=document.createElement("div");b.className="chip "+p;let v=document.createElement("span");v.className="k",v.textContent=u;let _=document.createElement("span");_.className="v",_.textContent=c,b.append(v,_),t.appendChild(b)}t.hidden=n.length===0}function O(e,t){let n=m("#status");n.textContent=e,n.dataset.kind=t}var J=new Map,ee=new Map,Se=!1,Q=null,F=1,ae=null;function $t(){return ae||(ae=new Promise((e,t)=>{let n=document.createElement("script");n.src="viz-global.js",n.onload=()=>window.Viz.instance().then(e,t),n.onerror=()=>t(new Error("Could not load Viz.js")),document.head.appendChild(n)}),ae)}function We(){Se=!1;let e=m("#diagram"),t=m("#diagram-tabs"),n=m("#diagram-view");if(!J.size){e.hidden=!0,t.innerHTML="",n.innerHTML="";return}e.hidden=!1;let s=[...J.keys()].sort();J.has(Q)||(Q=s[s.length-1]),t.innerHTML="";for(let l of s){let d=document.createElement("button");d.type="button",d.className="tab"+(l===Q?" active":""),d.textContent=l.replace(/\.dot$/,""),d.addEventListener("click",()=>{Q=l,We()}),t.appendChild(d)}let i=J.get(Q);if(i.length>6e5){n.textContent="This diagram is too large to draw in the browser. Download the .dot file instead.";return}n.textContent="Drawing\u2026",$t().then(l=>{let d=l.renderSVGElement(i),y=(d.getAttribute("viewBox")||"").split(/\s+/).map(Number);$e=y.length===4&&y[2]>0?y[2]:800,d.removeAttribute("width"),d.removeAttribute("height"),n.innerHTML="",n.appendChild(d),lt()}).catch(l=>{n.textContent="Could not draw the diagram: "+(l.message||l)})}var $e=800;function Te(){let e=m("#diagram-view svg");e&&(e.style.width=Math.round($e*F)+"px"),m("#zoom-level").textContent=Math.round(F*100)+"%"}function lt(){let e=m("#diagram-view").clientWidth-24;F=Math.min(1,e>0?e/$e:1),Te()}function De(){let e=m("#outputs");if(e.innerHTML="",!ee.size){e.hidden=!0;return}e.hidden=!1;let t=document.createElement("span");t.className="k",t.textContent="Files written:",e.appendChild(t);for(let[n,s]of ee){let i=document.createElement("button");i.type="button",i.className="btn small",i.textContent=`${n} (${s.length>1e6?(s.length/1e6).toFixed(1)+" MB":Math.max(1,Math.round(s.length/1e3))+" kB"})`,i.title="Download "+n,i.addEventListener("click",()=>ke(n,s)),e.appendChild(i)}}function qe(){o.worker&&o.worker.terminate(),o.ready=!1;let e=new Worker(new URL("worker.js",location.href).href,{type:"module"});e.onmessage=t=>Dt(t.data),e.onerror=t=>{$("Yosys failed to start: "+(t.message||"worker error"),"err"),Ve(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),o.worker=e}var Ce=[],Ae=null;function le(){Ae=null;for(let[e,t]of Ce)$(e,t);Ce=[],H.scrollTop=H.scrollHeight}function Dt(e){if(e.type==="ready")o.ready=!0,o.running||O("Ready","idle");else if(e.type==="stage")O(e.stage+"\u2026","busy");else if(e.type==="file")if(le(),ee.set(e.name,e.content),/\.dot$/i.test(e.name))J.set(e.name,e.content),Q=e.name,Se=!0;else if(e.content.length<=1e6){let t=o.files[e.name]===void 0;ot(e.name,e.content,!0),$(`\u2500\u2500 Yosys ${t?"wrote":"updated"} ${e.name}: open its tab to read it \u2500\u2500`,"meta")}else $(`\u2500\u2500 Yosys wrote ${e.name} (${(e.content.length/1e6).toFixed(1)} MB): too big for the editor, download it below the report \u2500\u2500`,"meta");else e.type==="line"?(Ce.push([e.line,e.stream==="err"?"stderr":""]),Ae||(Ae=requestAnimationFrame(le))):e.type==="done"&&(le(),e.ok?$(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):$(e.rc===-1?"\u2500\u2500 Yosys stopped with an internal error \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),ze(fe.join(`
`)),De(),Se&&We(),Ve(e.ok))}function nt(){if(o.running)return;window.vddSubscribe&&window.vddSubscribe(),x?o.files[o.current]=x.getValue():o.files[o.current]=W.value;let e=j();if(o.files[e]===void 0){$(`Add a Yosys script (for example ${D}): it is what Yosys runs.`,"err");return}o.worker||qe(),he(),at(),ze(null),ee.clear(),De(),o.running=!0,m("#run").disabled=!0,m("#stop").disabled=!1,O(o.ready?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),$(`$ yosys -s ${e}`,"meta"),(window.vddQ=window.vddQ||[]).push("synth"),o.worker.postMessage({type:"run",files:{...o.files},script:e,dataFiles:Pe,base:new URL(".",location.href).href}),clearTimeout(o.timer),o.timer=setTimeout(()=>ct(`Stopped after ${Ke/1e3} s.`),Ke)}function ct(e){o.running&&(le(),$(e||"Stopped.","meta err"),Ve(!1,!0),qe())}function Ve(e,t){clearTimeout(o.timer),o.running=!1,m("#run").disabled=!1,m("#stop").disabled=!0,O(t?"Stopped":e?"Done":"Errors",t||!e?"err":"ok"),e&&!t&&window.vddQuizNudge&&setTimeout(()=>window.vddQuizNudge(),600)}function qt(){m("#run").addEventListener("click",nt),m("#stop").addEventListener("click",()=>ct()),m("#script").addEventListener("change",t=>{o.script=t.target.value,he()}),m("#new-file").addEventListener("click",Tt),m("#zoom-in").addEventListener("click",()=>{F=Math.min(F*1.25,8),Te()}),m("#zoom-out").addEventListener("click",()=>{F=Math.max(F/1.25,.25),Te()}),m("#zoom-fit").addEventListener("click",lt),m("#diagram-svg").addEventListener("click",()=>{let t=m("#diagram-view svg");t&&ke((Q||"diagram.dot").replace(/\.dot$/,".svg"),new XMLSerializer().serializeToString(t))}),m("#quiz-check").addEventListener("click",()=>_e()),m("#quiz-reveal").addEventListener("click",Nt),m("#quiz-reset").addEventListener("click",Rt),m("#ex-select").addEventListener("change",t=>X(t.target.value)),m("#reset").addEventListener("click",()=>X(o.example||M[0].id)),m("#copy-file").addEventListener("click",t=>P(x?x.getValue():W.value,t.currentTarget)),m("#download-file").addEventListener("click",()=>ke(o.current,x?x.getValue():W.value)),m("#copy-output").addEventListener("click",t=>P(fe.join(`
`),t.currentTarget)),m("#share").addEventListener("click",async t=>{let n=t.currentTarget;x&&(o.files[o.current]=x.getValue());try{let s=await zt();history.replaceState(null,"","#code="+s),P(location.href.split("#")[0]+"#code="+s,n)}catch{P(location.href,n)}}),document.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&(t.preventDefault(),nt())});let e=m("#libs");e.innerHTML="";for(let[t,n]of je){let s=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="libname",i.textContent=t,i.title="Copy file name",i.addEventListener("click",()=>P(t,null));let l=document.createElement("span");l.textContent=n,s.append(i,l),e.appendChild(s)}}async function Vt(){qt();let e=!1,t=new URLSearchParams(location.hash.slice(1)).get("code");if(t)try{let i=await Wt(t);o.example=null,o.script=i.s||D,o.order=i.o,o.files=i.f,ve(i.f,i.o,o.script),e=!0}catch{}if(!e){let i=Mt();i&&(o.example=i.example,o.script=i.script||D,o.files=i.files,o.order=i.order,ve(i.files,i.order,i.current),e=!0)}let n=new URLSearchParams(location.search).get("track"),s=V.some(i=>i.id===n);o.track=s?n:K(o.example)||"basic",Le(),!e||s&&K(o.example)!==n&&!t?await X(M.find(i=>i.group===G().group).id):(te(),Me()),O("Loading Yosys\u2026","busy"),qe()}Vt();})();
