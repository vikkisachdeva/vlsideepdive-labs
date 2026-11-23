(()=>{var Fe={"syn-mux":{problem:"You write behavioural RTL (if/else). Synthesis must turn it into real gates from a cell library. How does that happen, and what does the result look like?",tasks:["Run show_rtl.ys and read the RTL diagram.","Run show_cmos.ys to map the design to the cells in mycells.lib.","Open the gate-level netlist and compare it with the RTL."],learn:"The basic Yosys flow: read, elaborate, map to a library, write a netlist and report area."},"syn-adder":{problem:"An adder written as a + b must become gates. Which gates, and how many?",tasks:["Run show_rtl.ys, then show_cmos.ys.","Read the cell count and area.","Change the width and see how the gate count grows."],learn:"How arithmetic operators are synthesized, and how area scales with width."},"syn-alu":{problem:"An ALU has many operations behind one case statement. The RTL is short, the gate netlist is not.",tasks:["Run both scripts and compare the RTL operators with the gate count.","Find which operations cost the most area."],learn:"How case statements and many operators turn into muxes and logic, and what drives area."},"syn-counter":{problem:"Sequential logic adds flip-flops. Where do they come from in the netlist, and how are reset and enable built?",tasks:["Run both scripts and find the flip-flops in the netlist.","See how synchronous reset and enable are made from gates."],learn:"How always @(posedge clk) becomes flip-flops, and how flops are mapped to library cells."},"syn-shift_register":{problem:"A shift register is mostly flip-flops. How much of the area is sequential, and how much is the logic around it?",tasks:["Run both scripts and read the sequential area.","Compare the flop count with the logic cells."],learn:"Read sequential versus combinational area in a synthesis report."},"syn-det_1011":{problem:"A state machine compiles and simulates, but synthesis warns about it. Ignoring synthesis warnings is how latches and bugs reach silicon.",tasks:["Run show_rtl.ys and read the warnings first.","Fix the cause in det_1011.v.","Compare the cell count before and after the fix."],learn:"Spot an inferred latch from a missing default, and fix it."},"syn-ibex":{problem:"Real designs are thousands of cells. Can you synthesize a full RISC-V CPU core and make sense of the result?",tasks:["Run synthesis (30 to 90 seconds).","Read the statistics: cells, flip-flops, buffers and chip area.","Answer the quiz from the report."],learn:"Synthesize a real CPU to SkyWater 130 nm cells and read a production-size area report."}};var ht="http://www.w3.org/2000/svg",w=(e,t,n)=>{let i=document.createElementNS(ht,e);for(let[s,r]of Object.entries(t||{}))i.setAttribute(s,r);return n&&n.appendChild(i),i};function ft(e){let t=e.trim(),n="port",i="",s=/^([\s\S]*?)([!+])?$/.exec(t),r=f=>{let m=/^([\s\S]*?)([!+])$/.exec(f);return m?(i=i||m[2],m[1]):f};t=r(s[0]);let u=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[f,m,v]of u)if(t.startsWith(f)&&t.endsWith(m)){n=v,t=t.slice(1,-1);break}n==="port"&&t.startsWith("@")&&(n="clk",t=t.slice(1)),t=r(t);let p=null,g=t.lastIndexOf("|");g>0&&(p=t.slice(g+1).trim(),t=t.slice(0,g));let h=t.indexOf("#"),d=t.trim();h>=0&&(t=t.slice(0,h));let c=t.replace(/\\n/g,`
`).trim();return{id:n+":"+d,label:c,kind:n,dom:p,mark:i}}function mt(e){let t=new Map,n=[],i=s=>{if(!t.has(s.id))t.set(s.id,{...s,order:t.size});else{let r=t.get(s.id);r.dom=r.dom||s.dom,r.mark=r.mark||s.mark}return t.get(s.id)};for(let s of e.split(";").map(r=>r.trim()).filter(Boolean)){let r=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,u=0,p=null,g=null,h,d=[];for(;h=r.exec(s);)d.push([s.slice(u,h.index),h]),u=r.lastIndex;d.push([s.slice(u),null]);for(let[c,f]of d){let m=i(ft(c));if(p&&g&&n.push({a:p,b:m,...g}),p=m,f){let v=f[1]||"";g={label:(f[2]||"").trim(),kind:v==="~"?"bad":v==="+"?"good":v==="."?"dash":"plain"}}}}return{nodes:[...t.values()],edges:n}}function bt(e){let t=e.label.split(`
`),n=Math.max(...t.map(i=>i.length))*6.9;return e.kind==="port"||e.kind==="clk"?{w:Math.max(28,n+(e.kind==="clk"?26:12)),h:Math.max(24,t.length*15+6),lines:t}:e.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,t.length*15+22),lines:t}:{w:Math.max(54,n+24),h:Math.max(34,t.length*15+16),lines:t}}function Je(e){let t=typeof e=="string"?mt(e):e,{nodes:n,edges:i}=t;if(!n.length)return null;let s=new Map(n.map(l=>[l,[]]));for(let l of i)l.a!==l.b&&s.get(l.a).push(l);let r=new Map,u=new Set,p=l=>{r.set(l,1);for(let a of s.get(l)){let b=r.get(a.b);b===1?u.add(a):b||p(a.b)}r.set(l,2)};for(let l of n)r.get(l)||p(l);let g=new Set(i.filter(l=>l.kind==="dash"&&i.some(a=>a.b===l.b&&a.kind!=="dash"))),h=new Map(n.map(l=>[l,0]));for(let l=0;l<n.length;l++){let a=!1;for(let b of i)b.a!==b.b&&!u.has(b)&&!g.has(b)&&h.get(b.b)<h.get(b.a)+1&&(h.set(b.b,h.get(b.a)+1),a=!0);if(!a)break}let d=Math.max(...h.values());for(let l of n)l.kind==="port"&&!s.get(l).length&&i.some(a=>a.b===l)&&h.get(l)<d&&h.set(l,d);let c=[];for(let l of n){let a=h.get(l);(c[a]=c[a]||[]).push(l)}let f=[...new Set(n.map(l=>l.dom).filter(Boolean))],m=l=>l.dom?f.indexOf(l.dom):-1;for(let l of c)l&&l.sort((a,b)=>m(a)-m(b)||a.order-b.order);for(let l of n)Object.assign(l,bt(l));let v=22,_=18,I=c.map((l,a)=>Math.max(46,...i.filter(b=>h.get(b.a)===a&&h.get(b.b)>a&&b.label).map(b=>b.label.length*6.2+30))),ie=new Map;for(let l of n){let a=l.dom;if(!a){let b=i.find(k=>k.a===l&&k.b.dom||k.b===l&&k.a.dom);a=b?b.a===l?b.b.dom:b.a.dom:null}ie.set(l,a||"")}let D=[...new Set(n.map(l=>ie.get(l)))];D.includes("")&&(D.splice(D.indexOf(""),1),D.unshift(""));let U=f.length>0,dt=U?34:0,ge=D.map(l=>Math.max(0,...c.map(a=>{let b=(a||[]).filter(k=>ie.get(k)===l);return b.reduce((k,C)=>k+C.h,0)+Math.max(0,b.length-1)*v}))),se=[],ye=_+(U?22:14);D.forEach((l,a)=>{se[a]=ye,ye+=ge[a]+(a<D.length-1?dt:0)});let Ye=ye-_-(U?22:14),we=_,Z=new Map,Ge=0;c.forEach((l,a)=>{if(!l)return;let b=Math.max(...l.map(k=>k.w));D.forEach((k,C)=>{let S=l.filter(E=>ie.get(E)===k),A=S.reduce((E,L)=>E+L.h,0)+Math.max(0,S.length-1)*v,T=se[C]+(ge[C]-A)/2;for(let E of S)Z.set(E,{x:we+(b-E.w)/2,y:T,w:E.w,h:E.h}),T+=E.h+v}),we+=b+I[a]});let pt=u.size>0,oe=we-(I[c.length-1]||46)+_;Ge=_*2+(U?22:14)+Ye+(pt?26:0);let Y=w("svg",{viewBox:`0 0 ${oe} ${Ge}`,class:"dg dg-block",role:"img"});Y.style.maxWidth=oe+"px",Y.style.minWidth=Math.round(Math.min(oe,Math.max(oe*.72,320)))+"px";let ut=w("defs",{},Y);for(let l of["plain","bad","good","dash"]){let a=w("marker",{id:"dg-ar-"+l,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},ut);w("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+l},a)}f.forEach((l,a)=>{let b=n.filter(L=>L.dom===l).map(L=>Z.get(L)),k=D.indexOf(l),C=Math.min(...b.map(L=>L.x))-10,S=se[k]-22,A=Math.max(...b.map(L=>L.x+L.w))+10,T=se[k]+ge[k]+8;w("rect",{x:C,y:S,width:A-C,height:T-S,rx:10,class:`dg-dom dg-d${a%4}`},Y);let E=w("text",{x:C+8,y:S+13,class:`dg-domlabel dg-d${a%4}`},Y);E.textContent=l});let xe=_+(U?22:14)+Ye+10,ve=w("g",{},Y);for(let l of i){let a=Z.get(l.a),b=Z.get(l.b),k,C,S;if(l.a===l.b)k=`M${a.x+a.w-10},${a.y} C${a.x+a.w+20},${a.y-26} ${a.x+10},${a.y-26} ${a.x+14},${a.y}`,C=a.x+a.w/2,S=a.y-22;else if(u.has(l)||h.get(l.b)<=h.get(l.a)){let A=a.x+a.w/2,T=b.x+b.w/2;k=`M${A},${a.y+a.h} C${A},${xe+14} ${T},${xe+14} ${T},${b.y+b.h}`,C=(A+T)/2,S=xe+8}else{let A=a.x+a.w,T=a.y+a.h/2,E=b.x,L=b.y+b.h/2,re=(A+E)/2;k=`M${A},${T} C${re},${T} ${re},${L} ${E},${L}`;let Qe=h.get(l.b)-h.get(l.a),N=Qe>1?.5/Qe:.5,M=1-N;C=M*M*M*A+3*M*M*N*re+3*M*N*N*re+N*N*N*E,S=M*M*M*T+3*M*M*N*T+3*M*N*N*L+N*N*N*L}if(w("path",{d:k,class:"dg-edge dg-"+l.kind,"marker-end":`url(#dg-ar-${l.kind})`},ve),l.label){let A=l.label.length*6.2+8;w("rect",{x:C-A/2,y:S-9,width:A,height:14,rx:3,class:"dg-elbg"},ve);let T=w("text",{x:C,y:S+2,class:"dg-elabel dg-"+l.kind,"text-anchor":"middle"},ve);T.textContent=l.label}}for(let l of n){let a=Z.get(l),b=w("g",{class:`dg-node dg-k-${l.kind}${l.mark==="!"?" dg-bad":l.mark==="+"?" dg-good":""}`},Y);if(l.kind==="reg")w("rect",{x:a.x,y:a.y,width:a.w,height:a.h,rx:3,class:"dg-shape"},b),w("path",{d:`M${a.x},${a.y+a.h-12} L${a.x+7},${a.y+a.h-7} L${a.x},${a.y+a.h-2}`,class:"dg-tri"},b);else if(l.kind==="logic")w("rect",{x:a.x,y:a.y,width:a.w,height:a.h,rx:Math.min(16,a.h/2),class:"dg-shape"},b);else if(l.kind==="block")w("rect",{x:a.x,y:a.y,width:a.w,height:a.h,rx:6,class:"dg-shape"},b);else if(l.kind==="mux")w("path",{d:`M${a.x},${a.y} L${a.x+a.w},${a.y+10} L${a.x+a.w},${a.y+a.h-10} L${a.x},${a.y+a.h} z`,class:"dg-shape"},b);else if(l.kind==="clk"){let S=a.y+a.h/2;w("path",{d:`M${a.x+2},${S+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},b)}let k=l.lines,C=l.kind==="clk"?a.x+24:a.x+a.w/2;k.forEach((S,A)=>{let T=w("text",{x:C,y:a.y+a.h/2+(A-(k.length-1)/2)*15+4,"text-anchor":l.kind==="clk"?"start":"middle",class:"dg-label"},b);T.textContent=S})}return Y}function gt(e,t){let n=e.split(/\s+/),i=[],s="";for(let r of n)s&&(s+" "+r).length>t?(i.push(s),s=r):s=s?s+" "+r:r;return s&&i.push(s),i}var yt={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function Oe(e){if(!e||!e.length)return null;let t=300,n=12,i=42,s=18,r=e.map(c=>{let f=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(c)||[null,"S",c],m=gt(f[2],i),v=yt[f[1]];return{k:f[1],lines:m,tag:v,h:m.length*15+(v?30:16)}}),u=r.reduce((c,f)=>c+f.h,0)+s*(r.length-1)+16,p=w("svg",{viewBox:`0 0 ${t+16} ${u}`,class:"dg dg-flow",role:"img"});p.style.maxWidth=t+16+"px";let g=w("defs",{},p),h=w("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},g);w("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},h);let d=8;return r.forEach((c,f)=>{let m=w("g",{class:"dg-fl dg-fl-"+c.k},p);c.k==="Q"?w("path",{d:`M22,${d} H${8+t-14} L${8+t},${d+c.h/2} L${8+t-14},${d+c.h} H22 L8,${d+c.h/2} z`,class:"dg-shape"},m):w("rect",{x:8,y:d,width:t,height:c.h,rx:c.k==="S"?6:10,class:"dg-shape"},m);let v=d+18;if(c.tag){let _=w("text",{x:8+n+(c.k==="Q"?10:0),y:v,class:"dg-ftag"},m);_.textContent=c.tag.toUpperCase(),v+=16}for(let _ of c.lines){let I=w("text",{x:8+n+(c.k==="Q"?10:0),y:v,class:"dg-ftext"},m);I.textContent=_,v+=15}d+=c.h,f<r.length-1&&(w("path",{d:`M${8+t/2},${d+1} V${d+s-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},p),d+=s)}),p}var ae={adder:["i-46z3tTYGM",10200,10800],basic:["za2o93ldrVQ",3240,3840],"cdc-bus":["akitv2i4Nxw",3720,4320],"cdc-clocks":["akitv2i4Nxw",0,600],"cdc-fifo":["akitv2i4Nxw",5310,5910],"cdc-find":["akitv2i4Nxw",1200,1800],"cdc-fix":["akitv2i4Nxw",1110,1710],"cdc-handshake":["akitv2i4Nxw",2940,3540],"cdc-pulse":["akitv2i4Nxw",2370,2970],"cdc-reset":["akitv2i4Nxw",5535,6135],counter:["i-46z3tTYGM",20400,21e3],"cov-1":["9SxAZWWVeJc",11373,11973],"cov-2":["9SxAZWWVeJc",11373,11973],"cov-3":["9SxAZWWVeJc",11373,11973],"cov-4":["9SxAZWWVeJc",11373,11973],"cov-5":["9SxAZWWVeJc",11373,11973],"cov-6":["9SxAZWWVeJc",11373,11973],"cov-7":["9SxAZWWVeJc",11040,11640],"cov-8":["9SxAZWWVeJc",11040,11640],"cov-9":["9SxAZWWVeJc",11040,11640],"dv-17":["9SxAZWWVeJc",11040,11640],"dv-18":["9SxAZWWVeJc",11040,11640],"dv-19":["9SxAZWWVeJc",10800,11400],"dv-4":["9SxAZWWVeJc",1031,1631],exceptions:["za2o93ldrVQ",8520,9120],fifo:["i-46z3tTYGM",22800,23400],fsm:["i-46z3tTYGM",24600,25200],"l01-gates":["8bmt4UJmJ_k",3347,3947],"l02-nand":["8bmt4UJmJ_k",3347,3947],"l03-nor":["8bmt4UJmJ_k",3347,3947],"l04-sop-pos":["8bmt4UJmJ_k",5100,5700],"l05-demorgan":["8bmt4UJmJ_k",4704,5304],"l06-kmap":["8bmt4UJmJ_k",5659,6259],"l07-dontcare":["8bmt4UJmJ_k",6900,7500],"l10-sub":["8bmt4UJmJ_k",7200,7800],"l11-dec-fa":["8bmt4UJmJ_k",7200,7800],"l12-mux-fn":["8bmt4UJmJ_k",7500,8100],"l13-mux-demux":["8bmt4UJmJ_k",7500,8100],"l14-dec38":["8bmt4UJmJ_k",7200,7800],"l15-enc83":["8bmt4UJmJ_k",7200,7800],"l18-addsub":["8bmt4UJmJ_k",2700,3300],"l19-bcdadd":["8bmt4UJmJ_k",7200,7800],"l21-srlatch":["8bmt4UJmJ_k",7500,8100],"l22-ffs":["8bmt4UJmJ_k",7500,8100],"l29-rca":["8bmt4UJmJ_k",7200,7800],mux:["i-46z3tTYGM",10800,11400],"p1-c2f":["i-46z3tTYGM",9900,10500],"p1-fa-bh":["i-46z3tTYGM",3900,4500],"p1-fa-df":["i-46z3tTYGM",3600,4200],"p1-fa-st":["i-46z3tTYGM",3900,4500],"p1-ha-bh":["i-46z3tTYGM",2400,3e3],"p1-ha-df":["i-46z3tTYGM",2100,2700],"p1-ha-st":["i-46z3tTYGM",1500,2100],"p1-ops":["i-46z3tTYGM",8400,9e3],"p2-add4":["i-46z3tTYGM",10200,10800],"p2-alu":["i-46z3tTYGM",12900,13500],"p2-bshift8":["i-46z3tTYGM",13500,14100],"p2-cmp4":["i-46z3tTYGM",12600,13200],"p2-dec24":["i-46z3tTYGM",11400,12e3],"p2-enc42":["i-46z3tTYGM",12300,12900],"p2-mux2":["i-46z3tTYGM",10800,11400],"p2-mux4":["i-46z3tTYGM",10800,11400],"p2-penc42":["i-46z3tTYGM",12300,12900],"p3-dff":["i-46z3tTYGM",15900,16500],"p3-dff-arh":["i-46z3tTYGM",18300,18900],"p3-dff-arl":["i-46z3tTYGM",17400,18e3],"p3-dff-ash":["i-46z3tTYGM",18600,19200],"p3-dff-neg-arh":["i-46z3tTYGM",17100,17700],"p3-dff-srh":["i-46z3tTYGM",18e3,18600],"p3-dff-srl":["i-46z3tTYGM",18e3,18600],"p3-dff-srs":["i-46z3tTYGM",18e3,18600],"p3-dlatch":["i-46z3tTYGM",15300,15900],"p3-dlatch-rst":["i-46z3tTYGM",15600,16200],"p3-sync-async":["i-46z3tTYGM",18300,18900],"p4-afifo":["i-46z3tTYGM",24e3,24600],"p4-cnt":["i-46z3tTYGM",20400,21e3],"p4-cnt-load":["i-46z3tTYGM",20700,21300],"p4-cnt-tb":["i-46z3tTYGM",20400,21e3],"p4-div2":["i-46z3tTYGM",22200,22800],"p4-div3":["i-46z3tTYGM",22200,22800],"p4-div4":["i-46z3tTYGM",22200,22800],"p4-fifo":["i-46z3tTYGM",22800,23400],"p4-mealy-nov":["i-46z3tTYGM",24600,25200],"p4-mealy-ov":["i-46z3tTYGM",24600,25200],"p4-mod":["i-46z3tTYGM",21300,21900],"p4-moore-nov":["i-46z3tTYGM",24600,25200],"p4-moore-ov":["i-46z3tTYGM",24600,25200],"p4-range":["i-46z3tTYGM",21600,22200],"p4-range-udl":["i-46z3tTYGM",21900,22500],"p4-sr5":["i-46z3tTYGM",19200,19800],"p4-updown":["i-46z3tTYGM",21e3,21600],"p4-usr5":["i-46z3tTYGM",19800,20400],"pd-b0":["somgoTERlmw",540,1140],"pd-b1":["somgoTERlmw",3900,4500],"pd-c1":["somgoTERlmw",8820,9420],"pd-c2":["somgoTERlmw",8820,9420],"pd-c3":["somgoTERlmw",8850,9450],"pd-f3":["somgoTERlmw",6600,7200],"pd-f4":["somgoTERlmw",7320,7920],"pd-p1":["somgoTERlmw",7950,8550],"pd-p3":["somgoTERlmw",7980,8580],"pd-p4":["somgoTERlmw",7950,8550],"pd-r1":["somgoTERlmw",9960,10560],"pd-r2":["somgoTERlmw",9960,10560],"pd-s2":["somgoTERlmw",7410,8010],"pd-s4":["somgoTERlmw",1700,2300],"s01-reg":["TIZwEGRvhBU",7200,7800],"s02-mux":["TIZwEGRvhBU",8400,9e3],"s03-cnt":["TIZwEGRvhBU",7200,7800],"s04-ctrl":["TIZwEGRvhBU",4500,5100],"s05-alu":["TIZwEGRvhBU",9e3,9600],"s06-memtb":["TIZwEGRvhBU",7500,8100],"s07-struct":["TIZwEGRvhBU",5100,5700],"s10-gen":["TIZwEGRvhBU",8100,8700],"s12-uart":["TIZwEGRvhBU",4500,5100],"sdc-c1":["VGQp99ArgSE",1620,2220],"sdc-c10":["VGQp99ArgSE",9510,10110],"sdc-c11":["VGQp99ArgSE",10530,11130],"sdc-c12":["VGQp99ArgSE",11070,11670],"sdc-c13":["VGQp99ArgSE",4530,5130],"sdc-c14":["VGQp99ArgSE",7020,7620],"sdc-c15":["VGQp99ArgSE",6e3,6600],"sdc-c16":["VGQp99ArgSE",4830,5430],"sdc-c2":["VGQp99ArgSE",4830,5430],"sdc-c20":["VGQp99ArgSE",8730,9330],"sdc-c3":["VGQp99ArgSE",2610,3210],"sdc-c4":["VGQp99ArgSE",3360,3960],"sdc-c5":["VGQp99ArgSE",4740,5340],"sdc-c6":["VGQp99ArgSE",6600,7200],"sdc-c7":["VGQp99ArgSE",8460,9060],"sdc-c8":["VGQp99ArgSE",8460,9060],"sdc-c9":["VGQp99ArgSE",8670,9270],"so-s3":["za2o93ldrVQ",6330,6930],"so-s4":["za2o93ldrVQ",8100,8700],"so-s7":["za2o93ldrVQ",2820,3420],"sva-a1":["9SxAZWWVeJc",9600,10200],"sva-a6":["9SxAZWWVeJc",6e3,6600],"sva-b1":["9SxAZWWVeJc",1784,2384],"sva-b10":["9SxAZWWVeJc",4500,5100],"sva-b2":["9SxAZWWVeJc",2710,3310],"sva-b3":["9SxAZWWVeJc",3600,4200],"sva-b4":["9SxAZWWVeJc",5400,6e3],"sva-b5":["9SxAZWWVeJc",6e3,6600],"sva-b6":["9SxAZWWVeJc",4200,4800],"sva-b7":["9SxAZWWVeJc",2400,3e3],"sva-b8":["9SxAZWWVeJc",10800,11400],"sva-b9":["9SxAZWWVeJc",10800,11400],"sva-p1":["9SxAZWWVeJc",6300,6900],"sva-p2":["9SxAZWWVeJc",6300,6900],"sva-p3":["9SxAZWWVeJc",9600,10200],"sva-p5":["9SxAZWWVeJc",9900,10500],"sva-p6":["9SxAZWWVeJc",9900,10500],"sva-p8":["9SxAZWWVeJc",3600,4200],"sva-s1":["9SxAZWWVeJc",6600,7200],"sva-s2":["9SxAZWWVeJc",7200,7800],"sva-s3":["9SxAZWWVeJc",7500,8100],"sva-s4":["9SxAZWWVeJc",9300,9900],"sva-s5":["9SxAZWWVeJc",8700,9300],"sva-s6":["9SxAZWWVeJc",9e3,9600],"syn-adder":["97q0N3DCZTw",555,1155],"syn-alu":["97q0N3DCZTw",959,1559],"syn-counter":["97q0N3DCZTw",5790,6390],"syn-det_1011":["97q0N3DCZTw",5580,6180],"syn-ibex":["97q0N3DCZTw",1490,2090],"syn-mux":["97q0N3DCZTw",30,630],"syn-shift_register":["97q0N3DCZTw",1889,2489],"ver-v1":["VGQp99ArgSE",8730,9330],"ver-v10":["VGQp99ArgSE",4830,5430],"ver-v11":["VGQp99ArgSE",4890,5490],"ver-v12":["VGQp99ArgSE",4890,5490],"ver-v2":["VGQp99ArgSE",8670,9270],"ver-v3":["VGQp99ArgSE",8670,9270],"ver-v4":["VGQp99ArgSE",8730,9330],"ver-v5":["VGQp99ArgSE",8670,9270],"ver-v6":["VGQp99ArgSE",8760,9360],"ver-v9":["VGQp99ArgSE",4830,5430],violation:["za2o93ldrVQ",1020,1620],"ws-lab1":["za2o93ldrVQ",4500,5100],"ws-lab12":["za2o93ldrVQ",1020,1620],"ws-lab13":["za2o93ldrVQ",8670,9270],"ws-lab14":["za2o93ldrVQ",3540,4140],"ws-lab3":["za2o93ldrVQ",1020,1620],"ws-lab6":["za2o93ldrVQ",2430,3030],"ws-lab7":["za2o93ldrVQ",2070,2670],"x-consolidate":["akitv2i4Nxw",3720,4320],"x-fifo":["akitv2i4Nxw",5310,5910],"x-gray":["akitv2i4Nxw",4710,5310],"x-mcp":["akitv2i4Nxw",5220,5820],"x-recon":["akitv2i4Nxw",3420,4020],"x-recon-fix":["akitv2i4Nxw",4170,4770]};var He={_note:"One YouTube course per topic, used for the study plans' daily watch slices. d = length in seconds.",logic:{id:"8bmt4UJmJ_k",title:"Digital Logic Design Full Course",d:8504},verilog:{id:"i-46z3tTYGM",title:"Complete Verilog Course",d:26621},systemverilog:{id:"TIZwEGRvhBU",title:"Complete SystemVerilog Course for Digital Design",d:10300},vhdl:{id:"musL2Y95Ei0",title:"Complete VHDL Course",d:14677},sva:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},dv:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},synth:{id:"97q0N3DCZTw",title:"VLSI Logic Synthesis",d:8583},cdc:{id:"akitv2i4Nxw",title:"Clock Domain Crossing (CDC) Full Course",d:6135},sta:{id:"za2o93ldrVQ",title:"Static Timing Analysis Full Course",d:9332},sdc:{id:"VGQp99ArgSE",title:"Complete SDC Timing Constraints Course",d:12024},pd:{id:"somgoTERlmw",title:"Physical Design Full Course",d:12047}};var le={};for(let e of Object.values(He))e&&e.id&&(le[e.id]=e.title);var Be=e=>{let t=Math.floor(e/3600),n=Math.floor(e%3600/60),i=e%60;return(t?t+":"+String(n).padStart(2,"0"):n)+":"+String(i).padStart(2,"0")};function vt(e,t){let n=e.querySelector(".brief-watch"),i=ae[t];if(!i){n&&n.remove();return}let[s,r,u]=i,p=le[s]||"the course video";n||(n=document.createElement("div"),n.className="brief-watch",e.querySelector(".brief-body").before(n)),n.innerHTML=`<div class="bw-row"><span class="bw-ic" aria-hidden="true">\u{1F4FA}</span><span class="bw-txt"><b>Watch for this lab:</b> <span class="bw-t"></span> of <a target="_blank" rel="noopener"></a> <span class="bw-min"></span></span>
    <button type="button" class="bw-play">\u25B6 Play this part</button></div><span class="vbadge"></span><div class="bw-player" hidden></div>`,n.querySelector(".bw-t").textContent=Be(r)+" \u2192 "+Be(u);let g=n.querySelector("a");g.textContent=p,g.href=`https://www.youtube.com/watch?v=${s}&t=${r}s`,n.querySelector(".bw-min").textContent=`(${Math.max(1,Math.round((u-r)/60))} min)`;let h=n.querySelector(".vbadge");window.vddVideo&&window.vddVideo.label(h,s,null,le[s]),n.querySelector(".bw-play").addEventListener("click",d=>{let c=n.querySelector(".bw-player");c.hidden=!1,c.innerHTML="";let f=document.createElement("button");c.appendChild(f),d.currentTarget.hidden=!0,window.vddVideo&&window.vddVideo.play(f,{id:s,title:p,start:r,end:u},"video-frame",h)})}function Ue(e,t,n){let i=document.getElementById("lab-brief");if(!i)return;let s=e[t];if(!s){i.hidden=!0;return}try{vt(i,t)}catch(d){console.warn("watch",d)}i.querySelector(".brief-problem").textContent=s.problem;let r=i.querySelector(".brief-tasks");r.innerHTML="";for(let d of s.tasks){let c=document.createElement("li");c.textContent=d,r.appendChild(c)}i.querySelector(".brief-learn").textContent=s.learn;let u=i.querySelector(".brief-fig"),p=s.images||(s.image?[{src:s.image,alt:s.imageAlt||""}]:[]);if(p.length||s.html){if(u||(u=document.createElement("figure"),u.className="brief-fig",i.appendChild(u)),u.innerHTML="",p.length){let d=document.createElement("div");d.className="brief-imgs";for(let c of p){let f=document.createElement("a");f.href=c.src,f.target="_blank",f.rel="noopener";let m=document.createElement("img");m.src=c.src,m.alt=c.alt||"",m.loading="lazy",f.appendChild(m),d.appendChild(f)}u.appendChild(d)}if(s.html){let d=document.createElement("div");d.className="brief-html",d.innerHTML=s.html,u.appendChild(d)}if(s.caption){let d=document.createElement("figcaption");d.textContent=s.caption,u.appendChild(d)}}else u&&u.remove();let g=i.querySelector(".brief-dg"),h=n&&n[t];if(h&&(h.b||h.f)){g||(g=document.createElement("div"),g.className="brief-dg",i.querySelector(".brief-body").after(g)),g.innerHTML="";let d=(c,f)=>{if(!f)return;let m=document.createElement("div");m.className="brief-dgp";let v=document.createElement("h3");v.textContent=c,m.appendChild(v);let _=document.createElement("div");_.className="brief-dgs",_.appendChild(f),m.appendChild(_),g.appendChild(m)};try{d(h.bt||"Design",h.b?Je(h.b):null)}catch(c){console.warn("diagram",t,c)}try{d(h.ft||"Problem \u2192 solution",h.f?Oe(h.f):null)}catch(c){console.warn("flow",t,c)}g.classList.toggle("one",g.children.length===1)}else g&&g.remove();i.hidden=!1}(function(){if(window.__vddYtNudge)return;window.__vddYtNudge=!0;let e=Object.keys(ae),t=new Set,n={},i=u=>{let p=ae[u];return p?{vid:p[0],from:p[1],to:p[2],title:le[p[0]]||"the course video"}:null};function s(u){let p=i(u),g=e.indexOf(u);if(g<0)return null;for(let h=g+1;h<e.length;h++){let d=i(e[h]);if(d&&!(p&&d.vid===p.vid&&d.from===p.from))return d}return null}function r(u,p,g){let h=document.getElementById("quiz-nudge");if(h&&h.remove(),!document.getElementById("yt-nudge-css")){let m=document.createElement("style");m.id="yt-nudge-css",m.textContent="#yt-nudge{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:60;display:flex;align-items:center;gap:14px;max-width:calc(100% - 32px);padding:10px 10px 10px 18px;border-radius:12px;background:#0b1f2a;color:#e6ecea;box-shadow:0 10px 30px rgba(0,0,0,.25);font:500 15px/1.35 Inter,system-ui,sans-serif}#yt-nudge b{color:#fff}#yt-nudge a{display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:9px 14px;background:#f00;color:#fff;font:600 14px Inter,system-ui,sans-serif;text-decoration:none;white-space:nowrap}#yt-nudge .x{border:0;background:transparent;color:#93a5ac;padding:6px 8px;font-size:18px;cursor:pointer}@media (max-width:560px){#yt-nudge{bottom:10px;font-size:14px;gap:8px;flex-wrap:wrap}}",document.head.appendChild(m)}let d=document.getElementById("yt-nudge");d||(d=document.createElement("div"),d.id="yt-nudge",d.setAttribute("role","status"),document.body.appendChild(d));let c=Math.max(1,Math.round((p.to-p.from)/60));d.innerHTML=`<span>${u}</span><a target="_blank" rel="noopener">\u25B6 ${g} (${c} min)</a><button type="button" class="x" aria-label="Close">\xD7</button>`;let f=d.querySelector("a");f.href=`https://www.youtube.com/watch?v=${p.vid}&t=${p.from}s`,f.addEventListener("click",()=>{try{(window.vddQ=window.vddQ||[]).push("yt_clicks")}catch{}d.remove()}),d.querySelector(".x").addEventListener("click",()=>d.remove())}document.addEventListener("vdd-run",u=>{let p=u.detail||{};if(p.id)if(p.pass){if(t.has(p.id+":next"))return;let g=s(p.id);if(!g)return;t.add(p.id+":next"),setTimeout(()=>r("<b>Passed!</b> Next topic is in the course video.",g,"Watch next on YouTube"),1200)}else{if(n[p.id]=(n[p.id]||0)+1,!p.quiz&&n[p.id]<2||t.has(p.id+":stuck"))return;let g=i(p.id);if(!g)return;t.add(p.id+":stuck"),setTimeout(()=>r("<b>Stuck?</b> This part of the course explains it.",g,"Watch on YouTube"),800)}})})();var P=(e,t,n)=>["P: "+e,"S: read_verilog \u2192 proc \u2192 opt: the RTL becomes generic cells (show_rtl.ys).","S: techmap \u2192 dfflibmap \u2192 abc: map to the cells in the .lib (show_cmos.ys).",...t?["Q: "+t]:[],"OK: "+n],Ze={"syn-mux":{b:"mux2to1.v > {Yosys\\nproc, opt} > (RTL: $mux) > {map to\\nmycells.lib} > mux2to1_synth.v",f:P("An if/else in RTL must become real gates from a cell library.","Remove the else branch: what does synthesis infer? (a latch)","The mux becomes NAND/NOR/NOT cells you can count in the netlist.")},"syn-adder":{b:"a[7:0] > (a + b + cin) > {sum, cout}; b[7:0] > (a + b + cin); cin > (a + b + cin)",f:P("a + b must become gates. Which ones, and how many?","Compare 2 operators in RTL with the gate count.","One + becomes a chain of full-adder logic: the cell count shows the cost.")},"syn-alu":{b:"a > (arithmetic\\nunit) > <op mux> > y; b > (logic\\nunit) > <op mux>; op .select.> <op mux>",f:P("Sixteen operations behind one case statement: short RTL, big netlist.","Which operators cost the most cells?","Arithmetic, logic and the output mux each become gates; the statistics show where the area goes.")},"syn-counter":{b:"[count 3 bits] > (+1) > <en / rst mux> > [count 3 bits]; en .> <en / rst mux>; rst .sync.> <en / rst mux>",f:P("Where do flip-flops come from, and how are reset and enable built?","Find the DFF cells: how many, and what drives their D?","3 flops from the always @(posedge clk), with reset and enable as logic in front of D.")},"syn-shift_register":{b:"[shift reg 8 bits] > <up / down mux> > [shift reg 8 bits]; (feedback) > <up / down mux>; [shift reg 8 bits] > (feedback)",f:P("A shift register is mostly flip-flops. How much area is logic?","Compare flop area with the area of the mux and feedback logic.","8 flops plus a mux per bit: sequential area dominates.")},"syn-det_1011":{b:"din > (next-state logic)! > [state] > (output logic) > found; [state] > (next-state logic)!",f:["P: The FSM simulates, but synthesis warns about it.","S: Read the log: an incomplete case or a missing default.","X: Ignored warnings put latches or extra logic into silicon.","F: Fix the RTL (default assignments, full case).","OK: The warning is gone and the cell count drops."]},"syn-ibex":{b:"ibex_rtl.v > {synth -top ibex_top} > {dfflibmap\\nsky130 .lib} > {abc\\nsky130 .lib} > ibex_top_synth.v; {sky130 HD .lib} .> {abc\\nsky130 .lib}",f:["P: Synthesize a full 32-bit RISC-V core in the browser.","S: Elaborate, optimise and map to SkyWater 130 nm cells.","Q: Read the statistics: cells, flip-flops, buffers, area.","OK: About 14,000 cells: the netlist the STA labs time."]}};var V=[{id:"synth",group:"Synthesis workshop",title:"Synthesis workshop",note:"7 labs from a 2-to-1 mux to a RISC-V CPU core. Each lab has a quiz."}],z=[{id:"syn-mux",group:"Synthesis workshop",tag:"Lab 1",title:"Synthesis of a mux",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 1: a 2-to-1 multiplexer.
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
`},quiz:[{type:"number",q:"How many wires does ibex_top have after synthesis?",answer:11257,tol:0,unit:"",explain:"The wires line of the final stat report.",try:!1},{type:"number",q:"How many cells?",answer:12255,tol:0,unit:"",explain:"The cells line of the final stat report.",try:!1},{type:"number",q:"How many flip-flops? (Add up the dfrtp, dfstp and dfxtp cells.)",answer:982,tol:0,unit:"",explain:"700 dfrtp_1 + 9 dfstp_1 + 273 dfxtp_1.",try:!1},{type:"number",q:"How many latches? (dlxtp and dlxtn: the register file is latch-based, RegFile = 2.)",answer:1025,tol:0,unit:"",explain:"992 dlxtp_1 + 33 dlxtn_1.",try:!1},{type:"number",q:"How many buffers?",answer:0,tol:0,unit:"",explain:"Synthesis does not add buffers here: buffering for fanout and wire load comes later, in placement and timing repair.",try:!1},{type:"number",q:"What is the chip area of ibex_top?",answer:102872.41,tol:1,unit:"\xB5m\xB2",explain:"In square micrometres, from the Sky130 cell areas.",try:!1}]}],Pe=["ibex_rtl.v","sky130_fd_sc_hd__tt_025C_1v80_synth.lib"],je=[["mycells.lib","Demo library: BUF, NOT, NAND, NOR, DFF (in the lab tabs)"],["cmos_cells.lib","Demo library with DFFSR (in the lab tabs)"],["sky130_fd_sc_hd__tt_025C_1v80_synth.lib","SkyWater 130 nm HD, typical; cells usable for synthesis"],["ibex_rtl.v","lowRISC ibex RTL, converted to Verilog-2005 with sv2v"]];var y=e=>document.querySelector(e),Ke=3e5,it="vdd-synth-lab-v1",q="show_rtl.ys",o={example:z[0].id,track:V[0].id,script:q,files:{},order:[],current:q,running:!1,ready:!1,worker:null,timer:null},st=()=>o.order.filter(e=>/\.ys$/i.test(e));function K(){return o.files[o.script]!==void 0?o.script:o.files[q]!==void 0?q:st()[0]||q}function _t(){let e=y("#script-wrap"),t=y("#script"),n=st(),i=K();e.hidden=!(n.length>1||n.length===1&&i!==q),t.innerHTML="";for(let s of n){let r=document.createElement("option");r.value=s,r.textContent=s,t.appendChild(r)}t.value=i}var R=new Map,x=null,W=y("#editor textarea");function Le(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(x=window.CodeMirror.fromTextArea(W,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),x.on("change",()=>{o.files[o.current]=x.getValue(),pe()})):(W.classList.add("plain-editor"),W.addEventListener("input",()=>{o.files[o.current]=W.value,pe()}));function ue(e){x?o.files[o.current]=x.getValue():o.files[o.current]=W.value,o.current=e,x?(R.has(e)||R.set(e,window.CodeMirror.Doc(o.files[e]??"",Le(e))),x.swapDoc(R.get(e)),setTimeout(()=>x.refresh(),0)):W.value=o.files[e]??"",he()}function kt(e,t){ue(e),x&&(x.focus(),x.setCursor({line:t-1,ch:0}),x.addLineClass(t-1,"background","cm-errline"),setTimeout(()=>x.removeLineClass(t-1,"background","cm-errline"),2500),x.scrollIntoView({line:t-1,ch:0},80))}function _e(e,t,n){R.clear(),o.files={...e},o.order=t||Object.keys(e),o.current=n&&o.order.includes(n)?n:o.order.includes(K())?K():o.order[0],x?(R.set(o.current,window.CodeMirror.Doc(o.files[o.current]??"",Le(o.current))),x.swapDoc(R.get(o.current))):W.value=o.files[o.current]??"",he()}function he(){let e=y("#tabs");e.innerHTML="";for(let t of o.order){let n=document.createElement("button");if(n.type="button",n.className="tab"+(t===o.current?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t===o.current?"true":"false"),n.textContent=t,n.addEventListener("click",()=>ue(t)),e.appendChild(n),t===o.current&&o.order.length>1){let i=document.createElement("button");i.type="button",i.className="tab-x",i.textContent="\xD7",i.title="Remove "+t,i.setAttribute("aria-label","Remove file "+t),i.addEventListener("click",()=>St(t)),e.appendChild(i)}}_t()}function ot(e,t,n){o.files[e]===void 0&&o.order.push(e),o.files[e]=t,R.delete(e),n?he():ue(e),pe()}function St(e){x&&(o.files[o.current]=x.getValue()),delete o.files[e],R.delete(e),o.order=o.order.filter(t=>t!==e),o.current=o.order[0],x?(R.has(o.current)||R.set(o.current,window.CodeMirror.Doc(o.files[o.current]??"",Le(o.current))),x.swapDoc(R.get(o.current))):W.value=o.files[o.current]??"",he(),pe()}function Tt(){let e=(window.prompt("New file name (for example top.v, my_flow.ys):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){$("File names can use letters, digits, dot, dash and underscore only.","err");return}if(o.files[e]!==void 0){ue(e);return}ot(e,"")}}var X=e=>{let t=z.find(n=>n.id===e);return t?(V.find(n=>n.group===t.group)||V[0]).id:null},G=()=>V.find(e=>e.id===o.track)||V[0];function Ne(){let e=y("#tracks");e.innerHTML="",e.hidden=V.length<2;for(let n of V){let i=document.createElement("button");i.type="button",i.className="track"+(n.id===G().id?" active":""),i.setAttribute("role","tab"),i.setAttribute("aria-selected",n.id===G().id?"true":"false");let s=z.filter(r=>r.group===n.group).length;i.innerHTML='<span class="track-t"></span><span class="track-n"></span>',i.querySelector(".track-t").textContent=n.title,i.querySelector(".track-n").textContent=s+" labs",i.addEventListener("click",()=>Ct(n.id)),e.appendChild(i)}let t=y("#track-note");if(t.textContent=G().note+" ",G().id==="workshop"){let n=document.createElement("a");n.href="STA_Workshop_Labs.pdf",n.target="_blank",n.rel="noopener",n.className="btn small",n.textContent="Workshop slides (PDF)",t.appendChild(n)}}async function Ct(e,t){o.track=e;try{let n=new URL(location.href);n.searchParams.set("track",e),history.replaceState(null,"",n.pathname+n.search+location.hash)}catch{}Ne(),!t&&X(o.example)!==e?await H(z.find(n=>n.group===G().group).id):te()}function te(){let e=y("#examples");e.innerHTML="";for(let n of z.filter(i=>i.group===G().group)){let i=document.createElement("button");i.type="button",i.className="ex"+(n.id===o.example?" active":""),i.dataset.id=n.id,i.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',i.querySelector(".ex-tag").textContent=n.tag;let s=n.quiz&&n.quiz.length?ne()[n.id]:null;if(s&&s.checked){let r=document.createElement("span");r.className="ex-done",r.textContent=(s.score===s.total?"\u2713 ":"")+`quiz ${s.score}/${s.total}`,i.querySelector(".ex-tag").appendChild(r)}i.querySelector(".ex-title").textContent=n.title,i.addEventListener("click",()=>H(n.id)),e.appendChild(i)}let t=y("#ex-select");t.innerHTML=z.filter(n=>n.group===G().group).map(n=>`<option value="${n.id}">${n.group!=="Basic labs"?n.tag+" \xB7 ":""}${n.title}</option>`).join(""),o.example&&(t.value=o.example)}async function H(e){let t=z.find(s=>s.id===e)||z[0];o.example=t.id,X(t.id)!==o.track&&(o.track=X(t.id),Ne()),o.script=t.script||q;let n={};for(let[s,r]of Object.entries(t.files))if(r!==null)n[s]=r;else try{let u=await fetch(new URL("data/"+(t.load||{})[s],location.href));n[s]=u.ok?await u.text():`// Could not load ${t.load[s]}`}catch{n[s]=`// Could not load ${t.load[s]}`}let i=Object.keys(t.files).sort((s,r)=>et(s)-et(r));_e(n,i,o.script),J.clear(),ee.clear(),$e(),De(),te(),Re(),me(),at(),We(null),B(o.ready?"Ready":"Loading Yosys\u2026",o.ready?"idle":"busy")}var ze="vdd-synth-quiz-v1";function ne(){try{return JSON.parse(localStorage.getItem(ze)||"{}")||{}}catch{return{}}}function Me(e){try{localStorage.setItem(ze,JSON.stringify(e))}catch{}}var fe=()=>z.find(e=>e.id===o.example&&e.quiz&&e.quiz.length);function At(e){let t=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return t?parseFloat(t[0]):NaN}function Et(e,t){if(e.type==="choice")return t!=null&&+t===e.answer;let n=At(t);return isFinite(n)&&Math.abs(n-e.answer)<=(e.tol??.01)+1e-9}var Lt=e=>e.type==="choice"?e.options[e.answer]:`${Number.isInteger(e.answer)?e.answer:e.answer.toFixed(2)}${e.unit?" "+e.unit:""}`;function Re(){window.vddCurrentLab=o.example,Ue(Fe,o.example,Ze);let e=y("#quiz"),t=y("#quiz-list"),n=fe();if(!n){e.hidden=!0;return}e.hidden=!1;let i=ne()[n.id]||{},s=i.a||[];t.innerHTML="",n.quiz.forEach((r,u)=>{let p=document.createElement("li"),g=document.createElement("div");if(g.className="quiz-q",r.try){let c=document.createElement("span");c.className="quiz-try",c.textContent="Try it",g.appendChild(c)}let h=r.q.replace(/^Try it: /,"");if(g.appendChild(document.createTextNode(h.charAt(0).toUpperCase()+h.slice(1))),p.appendChild(g),r.type==="choice"){let c=document.createElement("div");c.className="quiz-opts",c.setAttribute("role","radiogroup"),r.options.forEach((f,m)=>{let v=document.createElement("label"),_=document.createElement("input");_.type="radio",_.name=`q${u}`,_.value=m,s[u]!==void 0&&+s[u]===m&&(_.checked=!0),_.addEventListener("change",()=>Xe(n,u,m));let I=document.createElement("span");I.textContent=f,v.append(_,I),c.appendChild(v)}),p.appendChild(c)}else{let c=document.createElement("div");c.className="quiz-num";let f=document.createElement("input");if(f.type="text",f.inputMode="decimal",f.autocomplete="off",f.setAttribute("aria-label","Answer to question "+(u+1)),f.placeholder="e.g. -1.23",s[u]!==void 0&&(f.value=s[u]),f.addEventListener("input",()=>Xe(n,u,f.value)),f.addEventListener("keydown",m=>{m.key==="Enter"&&ke()}),c.appendChild(f),r.unit){let m=document.createElement("span");m.className="unit",m.textContent=r.unit,c.appendChild(m)}p.appendChild(c)}let d=document.createElement("div");d.className="quiz-fb",d.hidden=!0,d.setAttribute("aria-live","polite"),p.appendChild(d),t.appendChild(p)}),i.checked?ke(!0):rt(null)}function Xe(e,t,n){let i=ne(),s=i[e.id]||{a:[]};s.a=s.a||[],s.a[t]=n,s.checked=!1,i[e.id]=s,Me(i);let r=y("#quiz-list").children[t]?.querySelector(".quiz-fb");r&&(r.hidden=!0)}function rt(e,t){let n=y("#quiz-score");if(e===null){n.textContent="",n.classList.remove("done");return}n.textContent=`${e} / ${t} correct`,n.classList.toggle("done",e===t)}function ke(e){let t=fe();if(!t)return;let n=ne(),i=n[t.id]||{a:[]},s=0;if(t.quiz.forEach((r,u)=>{let p=y("#quiz-list").children[u],g=r.type==="choice"?(p.querySelector("input:checked")||{}).value:p.querySelector("input").value;i.a[u]=g;let h=p.querySelector(".quiz-fb"),d=g===void 0||g==="",c=!d&&Et(r,g);c&&s++,h.hidden=!1,h.className="quiz-fb "+(c?"ok":"bad"),h.innerHTML="";let f=document.createElement("b");f.textContent=c?"Correct.":d?"Not answered yet.":"Not quite.",h.appendChild(f),c&&r.explain?h.appendChild(document.createTextNode(r.explain)):!c&&!d&&h.appendChild(document.createTextNode(r.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),i.checked=!0,i.score=s,i.total=t.quiz.length,n[t.id]=i,Me(n),rt(s,t.quiz.length),!e)try{document.dispatchEvent(new CustomEvent("vdd-run",{detail:{id:t.id,pass:s===t.quiz.length,quiz:!0}}))}catch{}e||te()}function Nt(){let e=fe();if(e){try{let t=JSON.parse(localStorage.getItem("vdd-revealed-v1")||"{}");t[ze+":"+e.id]=Date.now(),localStorage.setItem("vdd-revealed-v1",JSON.stringify(t))}catch{}e.quiz.forEach((t,n)=>{let i=y("#quiz-list").children[n].querySelector(".quiz-fb");i.hidden=!1,i.className="quiz-fb shown",i.innerHTML="";let s=document.createElement("b");s.textContent="Answer: "+Lt(t)+".",i.appendChild(s),t.explain&&i.appendChild(document.createTextNode(t.explain))})}}function zt(){let e=fe();if(!e)return;let t=ne();delete t[e.id],Me(t),Re(),te()}function et(e){return e===o.script?-1:/\.ys$/.test(e)?0:/\.s?v$/.test(e)?1:/\.lib$/.test(e)?3:2}var tt=null;function pe(){clearTimeout(tt),tt=setTimeout(me,400)}function me(){try{localStorage.setItem(it,JSON.stringify({example:o.example,script:o.script,files:o.files,order:o.order,current:o.current}))}catch{}}function Mt(){try{let e=JSON.parse(localStorage.getItem(it)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function Rt(){let e=JSON.stringify({f:o.files,o:o.order,s:K()}),t=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(t).arrayBuffer()),i="";for(let s of n)i+=String.fromCharCode(s);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Wt(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=new Blob([Uint8Array.from(t,i=>i.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function j(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select();try{n=document.execCommand("copy")}catch{}s.remove()}if(t){let i=t.dataset.label||t.textContent;t.dataset.label=i,t.textContent=n?"Copied":"Press Ctrl+C",t.classList.toggle("ok",n),setTimeout(()=>{t.textContent=i,t.classList.remove("ok")},1600)}}function Se(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var O=y("#console"),be=[];function at(){O.textContent="",be=[]}function $(e,t){be.push(e);let n=document.createElement("div");n.className="ln "+(t||"");let i=/\b([\w.-]+\.(?:v|sv|ys|lib)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|lib)),? line (\d+)\b/.exec(e);if(i&&o.files[i[1]]!==void 0){let s=e.indexOf(i[0]);n.appendChild(document.createTextNode(e.slice(0,s)));let r=document.createElement("button");r.type="button",r.className="loc",r.textContent=i[0],r.addEventListener("click",()=>kt(i[1],+i[2])),n.appendChild(r),n.appendChild(document.createTextNode(e.slice(s+i[0].length)))}else n.textContent=e;/^ERROR|\bError:|Internal error/.test(e)?n.classList.add("err"):/^Warning/.test(e)?n.classList.add("warn"):/^\d+\. [A-Z]/.test(e)?n.classList.add("sec"):/Chip area for module|^\s+\d+\s+(?:[\d.E+-]+\s+)?cells$/.test(e)&&n.classList.add("met"),O.appendChild(n),O.childElementCount>2e4&&O.firstChild.remove()}function We(e){let t=y("#summary");if(!e){t.innerHTML="",t.hidden=!0;return}let n=[],i=d=>{let c,f=null,m=new RegExp(d.source,"gm");for(;c=m.exec(e);)f=c;return f},s=i(/^\s+(\d+)\s+(?:[\d.E+-]+\s+)?cells$/),r=i(/Chip area for module '[^']*': ([\d.]+)/),u=i(/of which used for sequential elements: ([\d.]+) \(([\d.]+)%\)/),p=i(/^\s+(\d+)\s+(?:-\s+)?wires$/),g=(e.match(/^Warning: Latch inferred/gm)||[]).length,h=(e.match(/^ERROR/gm)||[]).length;s&&n.push(["Cells",s[1],""]),r&&n.push(["Chip area",(+r[1]).toLocaleString("en-US",{maximumFractionDigits:2}),""]),u&&n.push(["Sequential area",u[2]+"%",""]),p&&n.push(["Wires",p[1],""]),g&&n.push(["Latches inferred",String(g),"bad"]),h&&n.push(["Errors",String(h),"bad"]),t.innerHTML="";for(let[d,c,f]of n){let m=document.createElement("div");m.className="chip "+f;let v=document.createElement("span");v.className="k",v.textContent=d;let _=document.createElement("span");_.className="v",_.textContent=c,m.append(v,_),t.appendChild(m)}t.hidden=n.length===0}function B(e,t){let n=y("#status");n.textContent=e,n.dataset.kind=t}var J=new Map,ee=new Map,Te=!1,Q=null,F=1,ce=null;function $t(){return ce||(ce=new Promise((e,t)=>{let n=document.createElement("script");n.src="viz-global.js",n.onload=()=>window.Viz.instance().then(e,t),n.onerror=()=>t(new Error("Could not load Viz.js")),document.head.appendChild(n)}),ce)}function $e(){Te=!1;let e=y("#diagram"),t=y("#diagram-tabs"),n=y("#diagram-view");if(!J.size){e.hidden=!0,t.innerHTML="",n.innerHTML="";return}e.hidden=!1;let i=[...J.keys()].sort();J.has(Q)||(Q=i[i.length-1]),t.innerHTML="";for(let r of i){let u=document.createElement("button");u.type="button",u.className="tab"+(r===Q?" active":""),u.textContent=r.replace(/\.dot$/,""),u.addEventListener("click",()=>{Q=r,$e()}),t.appendChild(u)}let s=J.get(Q);if(s.length>6e5){n.textContent="This diagram is too large to draw in the browser. Download the .dot file instead.";return}n.textContent="Drawing\u2026",$t().then(r=>{let u=r.renderSVGElement(s),p=(u.getAttribute("viewBox")||"").split(/\s+/).map(Number);qe=p.length===4&&p[2]>0?p[2]:800,u.removeAttribute("width"),u.removeAttribute("height"),n.innerHTML="",n.appendChild(u),lt()}).catch(r=>{n.textContent="Could not draw the diagram: "+(r.message||r)})}var qe=800;function Ce(){let e=y("#diagram-view svg");e&&(e.style.width=Math.round(qe*F)+"px"),y("#zoom-level").textContent=Math.round(F*100)+"%"}function lt(){let e=y("#diagram-view").clientWidth-24;F=Math.min(1,e>0?e/qe:1),Ce()}function De(){let e=y("#outputs");if(e.innerHTML="",!ee.size){e.hidden=!0;return}e.hidden=!1;let t=document.createElement("span");t.className="k",t.textContent="Files written:",e.appendChild(t);for(let[n,i]of ee){let s=document.createElement("button");s.type="button",s.className="btn small",s.textContent=`${n} (${i.length>1e6?(i.length/1e6).toFixed(1)+" MB":Math.max(1,Math.round(i.length/1e3))+" kB"})`,s.title="Download "+n,s.addEventListener("click",()=>Se(n,i)),e.appendChild(s)}}function Ve(){o.worker&&o.worker.terminate(),o.ready=!1;let e=new Worker(new URL("worker.js",location.href).href,{type:"module"});e.onmessage=t=>qt(t.data),e.onerror=t=>{$("Yosys failed to start: "+(t.message||"worker error"),"err"),Ie(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),o.worker=e}var Ae=[],Ee=null;function de(){Ee=null;for(let[e,t]of Ae)$(e,t);Ae=[],O.scrollTop=O.scrollHeight}function qt(e){if(e.type==="ready")o.ready=!0,o.running||B("Ready","idle");else if(e.type==="stage")B(e.stage+"\u2026","busy");else if(e.type==="file")if(de(),ee.set(e.name,e.content),/\.dot$/i.test(e.name))J.set(e.name,e.content),Q=e.name,Te=!0;else if(e.content.length<=1e6){let t=o.files[e.name]===void 0;ot(e.name,e.content,!0),$(`\u2500\u2500 Yosys ${t?"wrote":"updated"} ${e.name}: open its tab to read it \u2500\u2500`,"meta")}else $(`\u2500\u2500 Yosys wrote ${e.name} (${(e.content.length/1e6).toFixed(1)} MB): too big for the editor, download it below the report \u2500\u2500`,"meta");else e.type==="line"?(Ae.push([e.line,e.stream==="err"?"stderr":""]),Ee||(Ee=requestAnimationFrame(de))):e.type==="done"&&(de(),e.ok?$(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):$(e.rc===-1?"\u2500\u2500 Yosys stopped with an internal error \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),We(be.join(`
`)),De(),Te&&$e(),Ie(e.ok))}function nt(){if(o.running)return;window.vddSubscribe&&window.vddSubscribe(),x?o.files[o.current]=x.getValue():o.files[o.current]=W.value;let e=K();if(o.files[e]===void 0){$(`Add a Yosys script (for example ${q}): it is what Yosys runs.`,"err");return}o.worker||Ve(),me(),at(),We(null),ee.clear(),De(),o.running=!0,y("#run").disabled=!0,y("#stop").disabled=!1,B(o.ready?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),$(`$ yosys -s ${e}`,"meta"),(window.vddQ=window.vddQ||[]).push("synth"),o.worker.postMessage({type:"run",files:{...o.files},script:e,dataFiles:Pe,base:new URL(".",location.href).href}),clearTimeout(o.timer),o.timer=setTimeout(()=>ct(`Stopped after ${Ke/1e3} s.`),Ke)}function ct(e){o.running&&(de(),$(e||"Stopped.","meta err"),Ie(!1,!0),Ve())}function Ie(e,t){clearTimeout(o.timer),o.running=!1,y("#run").disabled=!1,y("#stop").disabled=!0,B(t?"Stopped":e?"Done":"Errors",t||!e?"err":"ok"),e&&!t&&window.vddQuizNudge&&setTimeout(()=>window.vddQuizNudge(),600)}function Dt(){y("#run").addEventListener("click",nt),y("#stop").addEventListener("click",()=>ct()),y("#script").addEventListener("change",t=>{o.script=t.target.value,me()}),y("#new-file").addEventListener("click",Tt),y("#zoom-in").addEventListener("click",()=>{F=Math.min(F*1.25,8),Ce()}),y("#zoom-out").addEventListener("click",()=>{F=Math.max(F/1.25,.25),Ce()}),y("#zoom-fit").addEventListener("click",lt),y("#diagram-svg").addEventListener("click",()=>{let t=y("#diagram-view svg");t&&Se((Q||"diagram.dot").replace(/\.dot$/,".svg"),new XMLSerializer().serializeToString(t))}),y("#quiz-check").addEventListener("click",()=>ke()),y("#quiz-reveal").addEventListener("click",Nt),y("#quiz-reset").addEventListener("click",zt),y("#ex-select").addEventListener("change",t=>H(t.target.value)),y("#reset").addEventListener("click",()=>H(o.example||z[0].id)),y("#copy-file").addEventListener("click",t=>j(x?x.getValue():W.value,t.currentTarget)),y("#download-file").addEventListener("click",()=>Se(o.current,x?x.getValue():W.value)),y("#copy-output").addEventListener("click",t=>j(be.join(`
`),t.currentTarget)),y("#share").addEventListener("click",async t=>{let n=t.currentTarget;x&&(o.files[o.current]=x.getValue());try{let i=await Rt();history.replaceState(null,"","#code="+i),j(location.href.split("#")[0]+"#code="+i,n)}catch{j(location.href,n)}}),document.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&(t.preventDefault(),nt())});let e=y("#libs");e.innerHTML="";for(let[t,n]of je){let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="libname",s.textContent=t,s.title="Copy file name",s.addEventListener("click",()=>j(t,null));let r=document.createElement("span");r.textContent=n,i.append(s,r),e.appendChild(i)}}async function Vt(){Dt();let e=!1,t=new URLSearchParams(location.hash.slice(1)).get("code");if(t)try{let r=await Wt(t);o.example=null,o.script=r.s||q,o.order=r.o,o.files=r.f,_e(r.f,r.o,o.script),e=!0}catch{}if(!e){let r=Mt();r&&(o.example=r.example,o.script=r.script||q,o.files=r.files,o.order=r.order,_e(r.files,r.order,r.current),e=!0)}let n=new URLSearchParams(location.search).get("track"),i=V.some(r=>r.id===n);o.track=i?n:X(o.example)||"basic",Ne(),!e||i&&X(o.example)!==n&&!t?await H(z.find(r=>r.group===G().group).id):(te(),Re());let s=new URLSearchParams(location.search).get("lab");s&&!t&&s!==o.example&&z.some(r=>r.id===s)&&await H(s),B("Loading Yosys\u2026","busy"),Ve()}Vt();})();
