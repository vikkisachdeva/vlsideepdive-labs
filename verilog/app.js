(()=>{var S=[{id:"counter",title:"4-bit up counter",tag:"Sequential",std:"2005",design:`\`timescale 1ns/1ps

// Parameterised up counter with async active-low reset and enable
module counter #(parameter WIDTH = 4) (
  input  wire             clk,
  input  wire             rst_n,
  input  wire             en,
  output reg  [WIDTH-1:0] count
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)  count <= {WIDTH{1'b0}};
    else if (en) count <= count + 1'b1;
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  reg        clk = 0, rst_n = 0, en = 0;
  wire [3:0] count;

  counter #(.WIDTH(4)) dut (.clk(clk), .rst_n(rst_n), .en(en), .count(count));

  always #5 clk = ~clk;            // 100 MHz clock

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    #12 rst_n = 1;                 // release reset
    #10 en = 1;                    // start counting
    repeat (18) @(posedge clk);    // count past 15 to see the wrap-around
    en = 0;
    #20 $display("Final count = %0d", count);
    $finish;
  end

  always @(posedge clk)
    if (en) $display("%5d ns   count = %2d", $time, count);
endmodule
`},{id:"mux",title:"4:1 multiplexer",tag:"Combinational",std:"2005",design:`\`timescale 1ns/1ps

// 4-to-1 multiplexer, 8 bits wide
module mux4 (
  input  wire [7:0] a, b, c, d,
  input  wire [1:0] sel,
  output reg  [7:0] y
);
  always @(*)
    case (sel)
      2'd0: y = a;
      2'd1: y = b;
      2'd2: y = c;
      default: y = d;
    endcase
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  reg  [7:0] a = 8'hA1, b = 8'hB2, c = 8'hC3, d = 8'hD4;
  reg  [1:0] sel;
  wire [7:0] y;
  integer i;

  mux4 dut (.a(a), .b(b), .c(c), .d(d), .sel(sel), .y(y));

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    for (i = 0; i < 4; i = i + 1) begin
      sel = i;
      #10 $display("sel = %0d  ->  y = %h", sel, y);
    end
    $finish;
  end
endmodule
`},{id:"adder",title:"Ripple-carry adder (self-checking)",tag:"Combinational",std:"2005",design:`\`timescale 1ns/1ps

// 1-bit full adder
module full_adder (input wire a, b, cin, output wire sum, cout);
  assign sum  = a ^ b ^ cin;
  assign cout = (a & b) | (cin & (a ^ b));
endmodule

// 4-bit ripple-carry adder built from full adders
module rca4 (
  input  wire [3:0] a, b,
  input  wire       cin,
  output wire [3:0] sum,
  output wire       cout
);
  wire [4:0] c;
  assign c[0] = cin;
  genvar i;
  generate
    for (i = 0; i < 4; i = i + 1) begin : stage
      full_adder fa (.a(a[i]), .b(b[i]), .cin(c[i]), .sum(sum[i]), .cout(c[i+1]));
    end
  endgenerate
  assign cout = c[4];
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  reg  [3:0] a, b;
  reg        cin;
  wire [3:0] sum;
  wire       cout;
  integer i, errors = 0;

  rca4 dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    // Exhaustive test: every a, b and carry-in (512 cases)
    for (i = 0; i < 512; i = i + 1) begin
      {cin, a, b} = i;
      #1;
      if ({cout, sum} !== a + b + cin) begin
        errors = errors + 1;
        $display("MISMATCH: %0d + %0d + %0d = %0d (expected %0d)", a, b, cin, {cout, sum}, a + b + cin);
      end
    end
    if (errors == 0) $display("PASS: all 512 cases correct");
    else             $display("FAIL: %0d mismatches", errors);
    $finish;
  end
endmodule
`},{id:"fsm",title:"Sequence detector FSM (1011)",tag:"FSM",std:"2005",design:`\`timescale 1ns/1ps

// Moore FSM that raises 'found' after the bit pattern 1011 (overlapping)
module seq1011 (
  input  wire clk,
  input  wire rst,
  input  wire din,
  output wire found
);
  localparam S0 = 3'd0, S1 = 3'd1, S10 = 3'd2, S101 = 3'd3, S1011 = 3'd4;
  reg [2:0] state, next;

  always @(posedge clk)
    if (rst) state <= S0;
    else     state <= next;

  always @(*) begin
    case (state)
      S0:    next = din ? S1    : S0;
      S1:    next = din ? S1    : S10;
      S10:   next = din ? S101  : S0;
      S101:  next = din ? S1011 : S10;
      S1011: next = din ? S1    : S10;
      default: next = S0;
    endcase
  end

  assign found = (state == S1011);
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  reg  clk = 0, rst = 1, din = 0;
  wire found;
  reg  [15:0] pattern = 16'b1011_0110_1101_1000;
  integer i;

  seq1011 dut (.clk(clk), .rst(rst), .din(din), .found(found));

  always #5 clk = ~clk;

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    @(negedge clk) rst = 0;
    for (i = 15; i >= 0; i = i - 1) begin
      din = pattern[i];
      @(negedge clk);
      if (found) $display("%4d ns  pattern 1011 detected", $time);
    end
    $finish;
  end
endmodule
`},{id:"cdc",title:"Two-flop synchronizer (CDC)",tag:"CDC",std:"2005",design:`\`timescale 1ns/1ps

// Classic two-flop synchronizer for a single-bit level signal
// crossing from an asynchronous domain into clk_dst.
module sync2 (
  input  wire clk_dst,
  input  wire rst_n,
  input  wire d_async,
  output wire q_sync
);
  reg meta, sync;
  always @(posedge clk_dst or negedge rst_n)
    if (!rst_n) {sync, meta} <= 2'b00;
    else        {sync, meta} <= {meta, d_async};
  assign q_sync = sync;
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  reg  clk_src = 0, clk_dst = 0, rst_n = 0;
  reg  level_src = 0;
  wire level_dst;

  sync2 dut (.clk_dst(clk_dst), .rst_n(rst_n), .d_async(level_src), .q_sync(level_dst));

  always #5   clk_src = ~clk_src;   // 100 MHz source domain
  always #7.5 clk_dst = ~clk_dst;   // ~66 MHz destination domain

  // Toggle the source-domain level every 6 source cycles
  always @(posedge clk_src) if (rst_n) begin
    if (($time / 10) % 6 == 0) level_src <= ~level_src;
  end

  always @(level_dst) if (rst_n)
    $display("%6.1f ns  level_dst = %b  (2 dst clocks after the change)", $realtime, level_dst);

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    #20 rst_n = 1;
    #400 $finish;
  end
endmodule
`},{id:"fifo",title:"Synchronous FIFO",tag:"Memory",std:"2005",design:`\`timescale 1ns/1ps

// Synchronous FIFO, 8 entries x 8 bits, with full/empty flags
module sync_fifo #(parameter DW = 8, parameter AW = 3) (
  input  wire          clk,
  input  wire          rst,
  input  wire          wr_en,
  input  wire [DW-1:0] wr_data,
  input  wire          rd_en,
  output reg  [DW-1:0] rd_data,
  output wire          full,
  output wire          empty
);
  reg [DW-1:0] mem [0:(1<<AW)-1];
  reg [AW:0]   wptr, rptr;     // one extra bit tells full from empty

  assign empty = (wptr == rptr);
  assign full  = (wptr[AW] != rptr[AW]) && (wptr[AW-1:0] == rptr[AW-1:0]);

  always @(posedge clk) begin
    if (rst) begin
      wptr <= 0;
      rptr <= 0;
    end else begin
      if (wr_en && !full) begin
        mem[wptr[AW-1:0]] <= wr_data;
        wptr <= wptr + 1'b1;
      end
      if (rd_en && !empty) begin
        rd_data <= mem[rptr[AW-1:0]];
        rptr <= rptr + 1'b1;
      end
    end
  end
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  reg        clk = 0, rst = 1, wr_en = 0, rd_en = 0;
  reg  [7:0] wr_data = 0;
  wire [7:0] rd_data;
  wire       full, empty;
  integer i;

  sync_fifo dut (.clk(clk), .rst(rst), .wr_en(wr_en), .wr_data(wr_data),
                 .rd_en(rd_en), .rd_data(rd_data), .full(full), .empty(empty));

  always #5 clk = ~clk;

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    @(negedge clk) rst = 0;

    // Write 10 values: the last two are dropped because the FIFO is full
    for (i = 0; i < 10; i = i + 1) begin
      @(negedge clk) begin wr_en = 1; wr_data = 8'h10 + i; end
      $display("write %h   full=%b", wr_data, full);
    end
    @(negedge clk) wr_en = 0;

    // Read everything back
    while (!empty) begin
      @(negedge clk) rd_en = 1;
      @(posedge clk) #1 $display("read  %h   empty=%b", rd_data, empty);
    end
    @(negedge clk) rd_en = 0;
    #20 $finish;
  end
endmodule
`},{id:"sv",title:"SystemVerilog: enum FSM + assertions",tag:"SystemVerilog",std:"2012",design:`\`timescale 1ns/1ps

// Traffic-light controller in SystemVerilog: typedef enum, always_ff, always_comb
module traffic_light (
  input  logic clk,
  input  logic rst_n,
  output logic red, yellow, green
);
  typedef enum logic [1:0] {RED, GREEN, YELLOW} state_t;
  state_t     state, next;
  logic [3:0] timer;

  always_ff @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      state <= RED;
      timer <= '0;
    end else if (timer == 0) begin
      state <= next;
      timer <= (next == YELLOW) ? 4'd2 : 4'd5;
    end else begin
      timer <= timer - 1'b1;
    end
  end

  always_comb begin
    case (state)
      RED:    next = GREEN;
      GREEN:  next = YELLOW;
      YELLOW: next = RED;
      default: next = RED;
    endcase
  end

  assign red    = (state == RED);
  assign yellow = (state == YELLOW);
  assign green  = (state == GREEN);
endmodule
`,tb:`\`timescale 1ns/1ps
module tb;
  logic clk = 0, rst_n = 0;
  logic red, yellow, green;

  traffic_light dut (.*);

  always #5 clk = ~clk;

  // Exactly one light must be on at every clock edge
  always @(posedge clk) if (rst_n)
    assert (int'(red) + int'(yellow) + int'(green) == 1)
    else $error("More than one light is on!");

  initial begin
    $dumpfile("dump.vcd");
    $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (30) begin
      @(posedge clk);
      #1 $display("%4d ns  %-6s  R=%b Y=%b G=%b", $time, dut.state.name(), red, yellow, green);
    end
    $finish;
  end
endmodule
`}];function Z(s){let e=[],t=new Map,n=[],r="",a=0,d=s.split(/\s+/),i=!0,C=0,D=0;for(;a<d.length;){let p=d[a++];if(!p)continue;if(i){if(p==="$scope"){for(a++,n.push(d[a++]);d[a]!=="$end";)a++;a++}else if(p==="$upscope"){for(n.pop();d[a]!=="$end";)a++;a++}else if(p==="$timescale"){let m=[];for(;d[a]!=="$end";)m.push(d[a++]);a++,r=m.join("")}else if(p==="$var"){let m=d[a++],c=parseInt(d[a++],10),f=d[a++],x=[];for(;d[a]!=="$end";)x.push(d[a++]);a++;let w=x[0];x[1]&&x[1].startsWith("[")&&(w+=x[1]);let v=[...n,w].join(".");if(m==="parameter")continue;if(t.has(f)){t.get(f).aliases.push(v);continue}let k=[...n.slice(1),w].join("."),z={id:f,name:v,short:k||w,depth:n.length,width:c,type:m,changes:[],aliases:[]};t.set(f,z),e.push(z)}else if(p==="$enddefinitions"){for(;d[a]!=="$end";)a++;a++,i=!1}else if(p.startsWith("$")){for(;a<d.length&&d[a]!=="$end";)a++;a++}continue}let g=p[0];if(g==="#")C=Number(p.slice(1)),C>D&&(D=C);else if(g!=="$")if(g==="b"||g==="B"||g==="r"||g==="R"){let m=p.slice(1),c=d[a++],f=t.get(c);f&&J(f,C,g==="r"||g==="R"?Number(m):m)}else{let m=t.get(p.slice(1));m&&J(m,C,g.toLowerCase())}}return{signals:e,timescale:r,endTime:D}}function J(s,e,t){let n=s.changes;n.length&&n[n.length-1][0]===e?n[n.length-1][1]=t:(!n.length||n[n.length-1][1]!==t)&&n.push([e,t])}function ee(s,e){let t=s.changes,n=0,r=t.length-1,a=-1;for(;n<=r;){let d=n+r>>1;t[d][0]<=e?(a=d,n=d+1):r=d-1}return a<0?null:t[a][1]}function U(s,e,t){if(e==null)return"";if(typeof e=="number")return String(+e.toPrecision(6));if(s.width===1)return e;let n=e.padStart(s.width,e[0]==="x"||e[0]==="z"?e[0]:"0");if(/[xz]/i.test(n))return/^x+$/i.test(n)?"x":/^z+$/i.test(n)?"z":t==="bin"?n:"x";if(t==="bin")return n;let r=BigInt("0b"+n);if(t==="dec")return r.toString(10);if(t==="sdec"){let a=BigInt(s.width);return(n[0]==="1"?r-(1n<<a):r).toString(10)}return r.toString(16).toUpperCase().padStart(Math.ceil(s.width/4),"0")}var F=class{constructor(e,t){this.c=e,this.ctx=e.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=t.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=t.theme,e.addEventListener("mousedown",n=>this.click(n)),e.addEventListener("wheel",n=>this.wheel(n),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(e.parentElement)}setData(e){this.data=e,this.cursor=null,this.t0=0,this.t1=Math.max(1,e.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(e,t){if(!this.data)return;let n=this.t1-this.t0,r=t??this.cursor??this.t0+n/2,a=Math.min(Math.max(n*e,2),Math.max(1,this.data.endTime)*1.05),d=r-(r-this.t0)*(a/n);d=Math.max(0,Math.min(d,Math.max(0,this.data.endTime-a))),this.t0=d,this.t1=d+a,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(e){if(!this.data)return;let t=this.t1-this.t0,n=this.t0+t*e;n=Math.max(0,Math.min(n,Math.max(0,this.data.endTime-t))),this.t0=n,this.t1=n+t,this.draw()}xOf(e,t){return this.nameW+(e-this.t0)/(this.t1-this.t0)*(t-this.nameW-8)}tOf(e,t){return this.t0+(e-this.nameW)/(t-this.nameW-8)*(this.t1-this.t0)}click(e){if(!this.data)return;let t=this.c.getBoundingClientRect(),n=e.clientX-t.left;n<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(n,t.width))),this.draw(),this.onCursor(this.cursor))}wheel(e){if(!this.data)return;let t=this.c.getBoundingClientRect();e.ctrlKey||e.metaKey||Math.abs(e.deltaY)>Math.abs(e.deltaX)&&e.shiftKey===!1&&e.altKey?(e.preventDefault(),this.zoom(e.deltaY>0?1.25:.8,this.tOf(e.clientX-t.left,t.width))):(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey)&&(e.preventDefault(),this.pan((e.deltaX||e.deltaY)/600))}draw(){let e=this.theme(),n=this.c.parentElement.clientWidth;this.nameW=n<640?112:190;let r=this.data?this.data.signals:[],a=this.axisH+Math.max(r.length,3)*this.rowH+8,d=window.devicePixelRatio||1;this.c.style.width=n+"px",this.c.style.height=a+"px",this.c.width=Math.round(n*d),this.c.height=Math.round(a*d);let i=this.ctx;if(i.setTransform(d,0,0,d,0,0),i.fillStyle=e.bg,i.fillRect(0,0,n,a),i.font="12px 'JetBrains Mono', ui-monospace, monospace",i.textBaseline="middle",!this.data){i.fillStyle=e.muted,i.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,a/2);return}let C=this.t1-this.t0,D=(n-this.nameW)/110,p=C/Math.max(1,D),g=Math.pow(10,Math.floor(Math.log10(p))),m=[1,2,5,10].map(c=>c*g).find(c=>c>=p)||g*10;i.strokeStyle=e.grid,i.fillStyle=e.muted,i.lineWidth=1;for(let c=Math.ceil(this.t0/m)*m;c<=this.t1;c+=m){let f=Math.round(this.xOf(c,n))+.5;i.beginPath(),i.moveTo(f,this.axisH-6),i.lineTo(f,a),i.stroke(),i.fillText(P(c,this.data.timescale),f+3,11)}if(i.strokeStyle=e.line,i.beginPath(),i.moveTo(0,this.axisH+.5),i.lineTo(n,this.axisH+.5),i.stroke(),r.forEach((c,f)=>{let x=this.axisH+f*this.rowH,w=x+6,v=x+this.rowH-6,k=(w+v)/2;i.fillStyle=f%2?e.rowAlt:e.bg,i.fillRect(0,x+1,n,this.rowH-1),i.fillStyle=e.text;let z=c.short+(c.width>1&&!c.short.includes("[")?` [${c.width-1}:0]`:"");i.fillText(Q(i,z,this.nameW-16),10,k),i.save(),i.beginPath(),i.rect(this.nameW,x,n-this.nameW,this.rowH),i.clip();let R=c.changes;for(let _=0;_<R.length;_++){let X=R[_][0],G=_+1<R.length?R[_+1][0]:this.data.endTime;if(G<this.t0||X>this.t1)continue;let y=this.xOf(X,n),$=this.xOf(G,n),T=R[_][1];if(c.width===1&&typeof T=="string"){let H=T==="x"?e.x:T==="z"?e.z:e.wave;i.strokeStyle=H,i.lineWidth=1.5,T==="x"&&(i.fillStyle=e.xFill,i.fillRect(y,w,$-y,v-w));let A=T==="1"?w:T==="0"?v:k;if(i.beginPath(),_>0){let M=R[_-1][1],N=M==="1"?w:M==="0"?v:k;i.moveTo(y,N)}else i.moveTo(y,A);i.lineTo(y,A),i.lineTo($,A),i.stroke()}else{let H=U(c,T,this.radix),A=H==="x"||H==="z";i.strokeStyle=A?e.x:e.wave,i.lineWidth=1.2,i.fillStyle=A?e.xFill:e.busFill;let M=Math.min(4,($-y)/2);i.beginPath(),i.moveTo(y,k),i.lineTo(y+M,w),i.lineTo($-M,w),i.lineTo($,k),i.lineTo($-M,v),i.lineTo(y+M,v),i.closePath(),i.fill(),i.stroke();let N=$-y-10;N>14&&(i.fillStyle=e.text,i.fillText(Q(i,H,N),Math.max(y,this.nameW)+6,k))}}i.restore()}),i.strokeStyle=e.line,i.beginPath(),i.moveTo(this.nameW+.5,0),i.lineTo(this.nameW+.5,a),i.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let c=Math.round(this.xOf(this.cursor,n))+.5;i.strokeStyle=e.cursor,i.lineWidth=1.5,i.beginPath(),i.moveTo(c,0),i.lineTo(c,a),i.stroke()}}};function Q(s,e,t){if(s.measureText(e).width<=t)return e;for(;e.length>1&&s.measureText(e+"\u2026").width>t;)e=e.slice(0,-1);return e+"\u2026"}function P(s,e){let t=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(e||"");if(!t)return String(s);let n=["fs","ps","ns","us","ms","s"],r=s*Number(t[1]),a=n.indexOf(t[2]);for(;a<n.length-1&&Math.abs(r)>=1e3&&r%1e3===0;)r/=1e3,a++;return a<2&&Math.abs(r)>=1e3&&(r/=1e3,a++,r=+r.toFixed(3)),`${r} ${n[a]}`}var o=s=>document.querySelector(s),te=15e3,ie="vdd-playground-v1",l={example:S[0].id,std:S[0].std,running:!1,worker:null,ready:!1,timer:null,startedAt:0,lastVcd:null};function ne(s){let e=s.querySelector("textarea");if(window.CodeMirror){let t=window.CodeMirror.fromTextArea(e,{mode:"verilog",lineNumbers:!0,indentUnit:2,tabSize:2,smartIndent:!0,matchBrackets:!0,viewportMargin:1/0,extraKeys:{Tab:n=>n.replaceSelection("  ")}});return{get:()=>t.getValue(),set:n=>{t.setValue(n),t.clearHistory()},onChange:n=>t.on("change",n),refresh:()=>t.refresh(),goto:n=>{t.focus(),t.setCursor({line:n-1,ch:0}),t.addLineClass(n-1,"background","cm-errline"),setTimeout(()=>t.removeLineClass(n-1,"background","cm-errline"),2500),t.scrollIntoView({line:n-1,ch:0},80)},addKeys:n=>t.addKeyMap(n)}}return e.classList.add("plain-editor"),{get:()=>e.value,set:t=>{e.value=t},onChange:t=>e.addEventListener("input",t),refresh(){},goto:t=>{let n=e.value.split(`
`),r=0;for(let a=0;a<t-1&&a<n.length;a++)r+=n[a].length+1;e.focus(),e.setSelectionRange(r,r+(n[t-1]||"").length)},addKeys(){}}}var u={design:ne(o("#ed-design")),tb:ne(o("#ed-tb"))};function I(){return l.std==="2012"?{design:"design.sv",tb:"testbench.sv"}:{design:"design.v",tb:"testbench.v"}}function B(){let s=I();o("#name-design").textContent=s.design,o("#name-tb").textContent=s.tb}function ae(){let s=o("#examples");s.innerHTML="";for(let t of S){let n=document.createElement("button");n.type="button",n.className="ex"+(t.id===l.example?" active":""),n.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',n.querySelector(".ex-tag").textContent=t.tag,n.querySelector(".ex-title").textContent=t.title,n.addEventListener("click",()=>K(t.id)),s.appendChild(n)}let e=o("#ex-select");e.innerHTML=S.map(t=>`<option value="${t.id}">${t.title}</option>`).join(""),e.value=l.example}function K(s){let e=S.find(t=>t.id===s)||S[0];l.example=e.id,l.std=e.std,o("#std").value=e.std,u.design.set(e.design),u.tb.set(e.tb),B(),ae(),O(),re(),h.clear(),o("#wave-values").textContent="",W("Ready","idle")}function O(){try{localStorage.setItem(ie,JSON.stringify({example:l.example,std:l.std,design:u.design.get(),tb:u.tb.get()}))}catch{}}function oe(){try{let s=JSON.parse(localStorage.getItem(ie)||"null");if(s&&s.design!=null)return s}catch{}return null}async function de(){let s=JSON.stringify({s:l.std,d:u.design.get(),t:u.tb.get()}),e=new Blob([s]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=new Uint8Array(await new Response(e).arrayBuffer()),n="";for(let r of t)n+=String.fromCharCode(r);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ce(s){let e=atob(s.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(e,r=>r.charCodeAt(0)),n=new Blob([t]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function V(s,e){let t=!1;try{await navigator.clipboard.writeText(s),t=!0}catch{let r=document.createElement("textarea");r.value=s,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{t=document.execCommand("copy")}catch{}r.remove()}if(e){let n=e.dataset.label||e.textContent;e.dataset.label=n,e.textContent=t?"Copied":"Press Ctrl+C",e.classList.toggle("ok",t),setTimeout(()=>{e.textContent=n,e.classList.remove("ok")},1600)}}function se(s,e){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),t.download=s,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},500)}var L=o("#console");function re(){L.textContent=""}function E(s,e){let t=document.createElement("div");t.className="ln "+(e||"");let n=/^(?:\/work\/)?([\w.-]+\.s?v):(\d+):/.exec(s);if(n){let r=n[1]===I().design?"design":n[1]===I().tb?"tb":null,a=document.createElement("button");a.type="button",a.className="loc",a.textContent=`${n[1]}:${n[2]}`,r&&a.addEventListener("click",()=>u[r].goto(+n[2])),t.appendChild(a),t.appendChild(document.createTextNode(":"+s.slice(n[0].length)))}else t.textContent=s;/\berror\b|ERROR|sorry|FAIL|MISMATCH|Internal error|Unable to/.test(s)?t.classList.add("err"):/\bwarning\b/i.test(s)?t.classList.add("warn"):/\bPASS\b/.test(s)&&t.classList.add("pass"),L.appendChild(t),L.childElementCount>6e3&&L.firstChild.remove(),L.scrollTop=L.scrollHeight}function W(s,e){let t=o("#status");t.textContent=s,t.dataset.kind=e}function ue(){return new URL("worker.js",location.href).href}function Y(){l.worker&&l.worker.terminate(),l.ready=!1;let s=new Worker(ue());s.onmessage=e=>he(e.data),s.onerror=e=>{E("Simulator failed to start: "+(e.message||"worker error"),"err"),j(!1)},s.postMessage({type:"load",base:new URL(".",location.href).href}),l.worker=s}function he(s){if(s.type==="ready")l.ready=!0,l.running||W("Ready","idle");else if(s.type==="stage")W(s.stage+"\u2026","busy"),s.stage==="Simulating"&&E("\u2500\u2500 simulation output \u2500\u2500","meta");else if(s.type==="line")E(s.line.replace(/\/work\//g,""),s.stream==="err"?"stderr":"");else if(s.type==="done"){if(s.ok){E(`\u2500\u2500 finished in ${s.ms} ms \u2500\u2500`,"meta");let e=(s.vcd||[])[0];if(e){l.lastVcd=e;try{let t=Z(e.text);h.setData(t),o("#wave-meta").textContent=`${t.signals.length} signals \xB7 ${P(t.endTime,t.timescale)}`}catch(t){E("Could not read waveform: "+t.message,"err")}}else h.clear(),o("#wave-meta").textContent='No waveform: add $dumpfile("dump.vcd"); $dumpvars(0, tb);'}else s.phase==="compile"?E("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):s.phase==="sim"&&E(`\u2500\u2500 simulation exited with code ${s.rc} \u2500\u2500`,"meta err");j(s.ok,s.phase)}}function q(){if(l.running)return;window.vddSubscribe&&window.vddSubscribe(),l.worker||Y(),O(),re(),o("#wave-values").textContent="",l.running=!0,l.startedAt=performance.now(),o("#run").disabled=!0,o("#stop").disabled=!1,W(l.ready?"Compiling\u2026":"Loading simulator\u2026","busy");let s=I(),e={[s.design]:u.design.get(),[s.tb]:u.tb.get()},t=o("#top").value.trim();l.worker.postMessage({type:"run",files:e,std:l.std,top:t,base:new URL(".",location.href).href}),clearTimeout(l.timer),l.timer=setTimeout(()=>le(`Stopped after ${te/1e3} s. Does your testbench call $finish?`),te)}function le(s){l.running&&(E(s||"Stopped.","meta err"),j(!1,"stopped"),Y())}function j(s,e){clearTimeout(l.timer),l.running=!1,o("#run").disabled=!1,o("#stop").disabled=!0,e==="stopped"?W("Stopped","err"):W(s?"Done":e==="compile"?"Compile errors":"Error",s?"ok":"err")}var b=s=>getComputedStyle(document.documentElement).getPropertyValue(s).trim(),h=new F(o("#wave"),{theme:()=>({bg:b("--wave-bg"),rowAlt:b("--wave-row"),grid:b("--wave-grid"),line:b("--line"),text:b("--text"),muted:b("--muted"),wave:b("--wave"),busFill:b("--wave-bus"),x:b("--wave-x"),xFill:b("--wave-xfill"),z:b("--wave-z"),cursor:b("--accent")}),onCursor:s=>{let e=o("#wave-values");if(s===null||!h.data){e.textContent="";return}e.innerHTML="";let t=document.createElement("div");t.className="cur-time",t.textContent="Cursor @ "+P(s,h.data.timescale),e.appendChild(t);for(let n of h.data.signals){let r=document.createElement("div");r.className="cur-row";let a=document.createElement("span");a.textContent=n.name;let d=document.createElement("span");d.textContent=U(n,ee(n,s),h.radix),r.append(a,d),e.appendChild(r)}}});me().addEventListener?.("change",()=>h.draw());function me(){return window.matchMedia("(prefers-color-scheme: dark)")}function pe(){o("#run").addEventListener("click",q),o("#stop").addEventListener("click",()=>le()),o("#std").addEventListener("change",e=>{l.std=e.target.value,B(),O()}),o("#ex-select").addEventListener("change",e=>K(e.target.value)),document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>V(u[e.dataset.copy].get(),e))),document.querySelectorAll("[data-download]").forEach(e=>e.addEventListener("click",()=>se(I()[e.dataset.download],u[e.dataset.download].get()))),o("#copy-output").addEventListener("click",e=>V(L.innerText,e.currentTarget)),o("#reset").addEventListener("click",()=>K(l.example)),o("#share").addEventListener("click",async e=>{let t=e.currentTarget;try{let n=await de(),r=location.href.split("#")[0]+"#code="+n;history.replaceState(null,"","#code="+n),V(r,t)}catch{V(location.href,t)}}),o("#zoom-in").addEventListener("click",()=>h.zoom(.5)),o("#zoom-out").addEventListener("click",()=>h.zoom(2)),o("#zoom-fit").addEventListener("click",()=>h.fit()),o("#pan-left").addEventListener("click",()=>h.pan(-.4)),o("#pan-right").addEventListener("click",()=>h.pan(.4)),o("#radix").addEventListener("change",e=>{h.radix=e.target.value,h.draw(),h.onCursor(h.cursor)}),o("#dl-vcd").addEventListener("click",()=>{l.lastVcd&&se("dump.vcd",l.lastVcd.text)});let s={"Ctrl-Enter":q,"Cmd-Enter":q};u.design.addKeys(s),u.tb.addKeys(s),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),q())}),u.design.onChange(()=>O()),u.tb.onChange(()=>O())}async function fe(){pe();let s=!1,e=new URLSearchParams(location.hash.slice(1)).get("code");if(e)try{let t=await ce(e);l.std=t.s==="2012"?"2012":"2005",l.example=null,o("#std").value=l.std,u.design.set(t.d||""),u.tb.set(t.t||""),s=!0}catch{}if(!s){let t=oe();t&&(l.example=t.example,l.std=t.std||"2005",o("#std").value=l.std,u.design.set(t.design),u.tb.set(t.tb),s=!0)}ae(),s||K(S[0].id),B(),W("Loading simulator\u2026","busy"),Y(),h.clear()}fe();})();
