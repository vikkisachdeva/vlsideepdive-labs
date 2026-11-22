(()=>{var Ke={"cdc-clocks":{problem:"A chip has many clocks. Before you can check any crossing you must know which clocks are related (same source) and which are asynchronous. A wrong guess hides real bugs or floods you with false ones.",tasks:["Run the CDC check and read the clock table.","Find out why clk_sys \u2192 clk_div2 is not a crossing.","Declare clk_ext asynchronous in clocks.sdc and run again."],learn:"Sort clocks into domains, read set_clock_groups, and tell a real crossing from a synchronous path."},"cdc-find":{problem:"A CPU-to-peripheral bridge passes a write strobe, a data bus, a busy flag and an interrupt between clocks. Some crossings are safe, some can go metastable. Your job is to review it like a design reviewer.",tasks:["Read soc_bridge.v and decide which of the four crossings are safe.","Run the CDC check and compare with your answer.","Work out the MTBF of a synchronizer in the quiz."],learn:"Spot unsynchronized crossings, and estimate how often a synchronizer fails (MTBF)."},"cdc-fix":{problem:"Three signals are synchronized, yet each one is built wrong: logic before the synchronizer, a first stage that fans out, and a single flop. They pass simulation and fail in silicon.",tasks:["Run the CDC check and read the three violations.","Fix status_sync.v one mistake at a time.","Run until the report is clean."],learn:"The rules every synchronizer must follow, and how to fix the three most common mistakes."},"cdc-pulse":{problem:"A one-cycle pulse from a fast clock can fall between two edges of a slow clock and be lost. Two flops alone do not fix this.",tasks:["Run the CDC check on the toggle synchronizer.","Simulate and watch tog, s1, s2 and pulse_out in the waveform.","Send pulses closer together (GAP = 1) and count how many are lost."],learn:"How a toggle (pulse) synchronizer works, and how fast the source may send pulses."},"cdc-bus":{problem:"An 8-bit bus cannot go through eight separate synchronizers: bits arrive in different cycles and the destination reads a value that was never sent.",tasks:["Run the CDC check: see how the bus is qualified by one synchronized signal.","Simulate and check that all words arrive.","Shorten the gap between words and find where it breaks."],learn:"Pass a multi-bit bus safely with a synchronized enable, and why the source must hold the data stable."},"cdc-reset":{problem:"Asynchronous reset may assert at any time, but if it releases asynchronously, flops leave reset in different cycles and the design starts in a broken state.",tasks:["Run the CDC check: one reset is synchronized, one is not, one borrows another clock's reset.","Simulate and read when each register leaves reset.","Decide how to fix rb_q and rx_q."],learn:"Build a reset synchronizer: assert asynchronously, release synchronously, one per clock domain."},"cdc-handshake":{problem:"You need to send data between two clocks whose ratio you do not know, or that may change. Open-loop schemes need you to know the clocks; a handshake does not.",tasks:["Run the CDC check: only req and ack are synchronized.","Simulate and follow one word through req, ack and dout.","Change the destination clock and see the handshake adapt."],learn:"The 4-phase req/ack handshake: safe for any clock ratio, and what it costs in throughput."},"cdc-fifo":{problem:"A handshake moves one word every few cycles. To stream one word per clock between two clocks you need an asynchronous FIFO, and its pointers must cross safely.",tasks:["Run the CDC check: find out why the pointer crossings are only cautions.","Simulate and watch the full and empty flags.","Make the reader faster and see the FIFO never fill."],learn:"How an async FIFO works: Gray-coded pointers, synchronized full and empty."},"cdc-assert":{problem:"A CDC check looks at structure. It cannot see a protocol bug: data that changes while it is being captured, or a request that is too short to cross. These bugs only show up in simulation, if you check for them.",tasks:["Simulate with BUG = 0: all three assertions pass.","Turn on BUG = 1, then BUG = 2, and see which assertion fires.","Read the waveform where each assertion fails."],learn:"Write CDC assertions: data stability, request/acknowledge order and pulse width."},"x-consolidate":{problem:"Two control signals that must act together are synchronized separately. Each crossing is clean, but they can arrive one cycle apart, and the destination sees a state the source never sent. Plain RTL simulation hides it.",tasks:["Run the CDC check: find the reconvergence caution.","Simulate with the metastability model and count b_partial cycles.","Turn the model off, then fix the design with CONSOLIDATE = 1."],learn:"Consolidate control signals before crossing, and use a simulation model that exposes synchronizer delays."},"x-mcp":{problem:"You need to pass a bus without synchronizing every bit, and the source must know when it may send the next word.",tasks:["Run the CDC check: the data is qualified by one toggle.","Simulate and measure the time for 12 words.","Remove the acknowledge and see what breaks."],learn:"Multi-cycle path (MCP) formulation with a 2-phase toggle and acknowledge feedback."},"x-gray":{problem:"A counter must be passed to another clock, for example a FIFO pointer. Binary counters change many bits at once, so the destination can read a value the counter never had.",tasks:["Run the CDC check: it cannot tell binary from Gray.","Simulate with GRAY = 0 and count the impossible values.","Switch to GRAY = 1 and simulate again."],learn:"Gray code counters: why one-bit-per-step changes make a multi-bit crossing safe."},"x-fifo":{problem:"A real 2-clock FIFO must be easy to synthesize and time: only a few clearly named signals may cross, and full and empty must never be wrong.",tasks:["Read how fifo2.sv is split into single-clock modules.","Run the CDC check and simulate.","Switch the pointers to binary and watch the impossible pointer values appear."],learn:"Partition a 2-clock FIFO, generate full and empty correctly, and name signals by clock domain."}};function Qe(e,t){let n=document.getElementById("lab-brief");if(!n)return;let s=e[t];if(!s){n.hidden=!0;return}n.querySelector(".brief-problem").textContent=s.problem;let i=n.querySelector(".brief-tasks");i.innerHTML="";for(let r of s.tasks){let f=document.createElement("li");f.textContent=r,i.appendChild(f)}n.querySelector(".brief-learn").textContent=s.learn;let o=n.querySelector(".brief-fig"),c=s.images||(s.image?[{src:s.image,alt:s.imageAlt||""}]:[]);if(c.length||s.html){if(o||(o=document.createElement("figure"),o.className="brief-fig",n.appendChild(o)),o.innerHTML="",c.length){let r=document.createElement("div");r.className="brief-imgs";for(let f of c){let k=document.createElement("a");k.href=f.src,k.target="_blank",k.rel="noopener";let _=document.createElement("img");_.src=f.src,_.alt=f.alt||"",_.loading="lazy",k.appendChild(_),r.appendChild(k)}o.appendChild(r)}if(s.html){let r=document.createElement("div");r.className="brief-html",r.innerHTML=s.html,o.appendChild(r)}if(s.caption){let r=document.createElement("figcaption");r.textContent=s.caption,o.appendChild(r)}}else o&&o.remove();n.hidden=!1}var Z=[{id:"cdc",group:"CDC workshop",title:"CDC workshop",note:"9 labs that follow the 5-day clock domain crossing workshop: clocks, synchronizers, MTBF, pulse and bus synchronizers, reset, handshake, async FIFO and assertions. Each lab has a quiz."},{id:"expert",group:"Expert CDC & FIFO",title:"Expert CDC & FIFO (SystemVerilog)",note:"4 expert labs in SystemVerilog: consolidation with a metastability simulation model, MCP formulation with acknowledge, Gray code counters, and a partitioned 2-clock FIFO. Each lab has a quiz."}],L=[{id:"cdc-clocks",group:"CDC workshop",tag:"Day 1 \xB7 Lab 1",title:"Clocks and clock domains",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 1: identify the clocks. Day 1, synchronous and asynchronous clocks.
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
`},quiz:[{type:"number",q:"How many bits does each pointer have (depth 16)?",answer:5,tol:0,unit:"",explain:"ASIZE = 4 address bits, plus one wrap bit.",try:!1},{type:"number",q:"How many synchronizers does the CDC check count?",answer:10,tol:0,unit:"",explain:"5 bits of rptr into wclk and 5 bits of wptr into rclk.",try:!1},{type:"choice",q:"When is the FIFO full, with Gray pointers?",options:["wptr == rptr","The top two bits of wptr are the inverse of the synchronized rptr and the rest are equal","The top bit differs only","wptr is all ones"],answer:1,explain:"The write pointer has wrapped once more than the read pointer. In Gray code that inverts the two most significant bits.",try:!1},{type:"number",q:"Simulate with GRAY = 1: how many impossible write pointer values are seen in rclk?",answer:0,tol:0,unit:"",explain:"The synchronized pointer may lag, but it is always a value the write pointer really had.",try:!1},{type:"number",q:"Try it: set GRAY = 0 in fifo2.sv and simulate. How many impossible write pointer values are seen?",answer:5,tol:0,unit:"",explain:"A binary pointer changes several bits at once, so rclk can see a pointer that is ahead of the real one: the FIFO could read a word that was never written. This run got lucky with the data, but the design is wrong.",try:!0},{type:"choice",q:"Why do the empty flag and the full flag each live in one clock domain?",options:["They are cheaper","Empty must be correct for the reader (rclk) and full for the writer (wclk); a stale synchronized pointer only makes them pessimistic, never wrong","Yosys needs it","Gray codes need it"],answer:1,explain:"Empty and full may clear a few cycles late: the FIFO stays safe, only a little slower.",try:!1}]}];var ye=new Set(["$dff","$dffe","$adff","$adffe","$sdff","$sdffe","$sdffce","$dffsr","$dffsre","$aldff","$aldffe","$dlatch","$adlatch","$dlatchsr"]),Xe=new Set(["$pos","$buf","$_BUF_"]);function wt(e){let t={clocks:new Map,generated:[],groups:[],inputs:new Map,notes:[]},n=(e||"").replace(/\\\n/g," ").split(`
`),s=o=>(o||"").replace(/[{}]/g," ").trim().split(/\s+/).filter(Boolean),i=(o,c)=>{let r=[],f=new RegExp("\\[\\s*"+c+"\\s+([^\\]]+)\\]","g"),k;for(;k=f.exec(o);)r.push(...s(k[1]));return r};return n.forEach((o,c)=>{let r=o.replace(/#.*$/,"").trim();if(!r)return;let f=r.split(/\s+/)[0],k=_=>{let p=new RegExp("-"+_+"\\s+(\\{[^}]*\\}|\\S+)").exec(r);return p?p[1].replace(/[{}]/g,"").trim():null};if(f==="create_clock"){let _=i(r,"get_ports"),p=k("name")||_[0];if(!p||!_.length){t.notes.push(`line ${c+1}: create_clock needs [get_ports ...]`);return}t.clocks.set(p,{name:p,port:_[0],period:parseFloat(k("period"))||null})}else if(f==="create_generated_clock"){let _=i(r,"get_ports")[0],p=[...i(r,"get_pins"),...i(r,"get_nets")],b=k("name")||p[0];t.generated.push({name:b,sourcePort:_,pin:(p[0]||"").replace(/\/Q$/,"")})}else if(f==="set_clock_groups"){let _=[],p=/-group\s+(\{[^}]*\}|\S+)/g,b;for(;b=p.exec(r);)_.push(s(b[1]));t.groups.push({type:/-asynchronous/.test(r)?"async":/-physically_exclusive|-logically_exclusive/.test(r)?"exclusive":"async",groups:_})}else if(f==="set_input_delay"){let _=k("clock");for(let p of i(r,"get_ports"))t.inputs.set(p,_)}else/^(set_output_delay|set_false_path|set_max_delay|set_min_delay|set_multicycle_path|set_load|set_driving_cell|set_input_transition|set_clock_uncertainty|set_clock_latency|set_bus_skew)$/.test(f)||t.notes.push(`line ${c+1}: ${f} is not used by the CDC check`)}),t}function vt(e){let t=new Map,n=r=>r.startsWith("$")?9:0;for(let[r,f]of Object.entries(e.netnames||{})){if(f.hide_name)continue;let k=f.offset||0,_=f.bits.length;f.bits.forEach((p,b)=>{if(typeof p!="number")return;let v=_>1||k?`${r}[${f.upto?k+_-1-b:k+b}]`:r,E=t.get(p);(!E||n(r)<n(E.n)||n(r)===n(E.n)&&qt(r,E.n,e,p))&&t.set(p,{n:r,nm:v})})}let s=new Map;for(let[r,f]of Object.entries(e.ports||{}))f.bits.forEach((k,_)=>{typeof k=="number"&&s.set(k,{port:r,dir:f.direction,nm:f.bits.length>1?`${r}[${_}]`:r})});let i=new Map,o=new Map,c=(r,f)=>{o.has(r)||o.set(r,[]),o.get(r).push(f)};for(let[r,f]of Object.entries(e.cells||{})){let k=f.port_directions||{};for(let[_,p]of Object.entries(f.connections)){let b=k[_]?k[_]==="output":/^(Y|Q|X)$/.test(_);p.forEach((v,E)=>{typeof v=="number"&&(b?i.set(v,{cell:r,pin:_,i:E}):c(v,{cell:r,pin:_,i:E}))})}}for(let[r,f]of s)f.dir==="input"?i.set(r,{port:f.port,nm:f.nm}):c(r,{port:f.port,nm:f.nm});return{names:t,portBits:s,driver:i,sinks:o}}function qt(e,t,n,s){let i=o=>!!(n.ports||{})[o];return i(e)!==i(t)?!i(e):e.length<t.length}function et(e,t,n){let s=wt(t),i=n&&e.modules[n]?n:Object.keys(e.modules).find(a=>e.modules[a].attributes&&e.modules[a].attributes.top)||Object.keys(e.modules)[0],o=e.modules[i],c=vt(o),r=o.cells||{},f=a=>typeof a!="number"?`1'b${a}`:(c.names.get(a)||{}).nm||(c.portBits.get(a)||{}).nm||`net${a}`,k=[],_=[...s.notes],p=[],b=new Map;for(let[a,h]of Object.entries(r)){if(!ye.has(h.type))continue;let d=h.connections,u=h.parameters||{},y=d.CLK?"CLK":"EN",w=h.type.includes("latch");(d.Q||[]).forEach((x,g)=>{let q={cell:a,type:h.type,i:g,q:x,d:(d.D||[])[g],clk:d[y]&&d[y][0],en:!w&&d.EN?d.EN[0]:null,arst:d.ARST?d.ARST[0]:d.CLR?d.CLR[g]:null,srst:d.SRST?d.SRST[0]:null,latch:w,name:f(x)};p.push(q),b.set(x,q)})}let v=(a,h=new Set)=>{if(h.has(a))return null;h.add(a);let d=c.driver.get(a);if(!d)return null;if(d.port)return{port:d.port,inverted:!1};let u=r[d.cell];if(Xe.has(u.type)||u.type==="$not"||u.type==="$_NOT_"){let y=v(u.connections.A[d.i]??u.connections.A[0],h);return y&&{...y,inverted:y.inverted!==(u.type.includes("NOT")||u.type==="$not")}}return b.has(a)?{reg:b.get(a)}:{gate:d.cell}},E=new Map([...s.clocks.values()].map(a=>[a.port,a.name])),C=new Map;for(let a of s.clocks.values())C.set(a.name,{name:a.name,kind:"primary",port:a.port,period:a.period});let T=new Map,N=new Set,M=(a,h=0)=>{if(T.has(a))return T.get(a);let d=null,u=a.clk!==void 0?v(a.clk):null;if(u&&u.port)d=E.get(u.port)||null,d||(N.add(u.port),d="unclocked:"+u.port,C.has(d)||C.set(d,{name:d,kind:"unclocked",port:u.port}));else if(u&&u.reg&&h<8){let y=M(u.reg,h+1),w=s.generated.find(g=>g.pin===u.reg.name||g.pin===u.reg.name.replace(/\[\d+\]$/,"")),x=w?w.name:u.reg.name;C.has(x)||C.set(x,{name:x,kind:w?"generated":"inferred",master:y,from:u.reg.name}),!w&&!_.some(g=>g.includes(u.reg.name))&&_.push(`${u.reg.name} drives clock pins: treated as a clock generated from ${y} (add create_generated_clock to name it)`),d=x}else u&&u.gate&&(d="gated:"+u.gate,C.has(d)||C.set(d,{name:d,kind:"unknown"}));return T.set(a,d),d};p.forEach(a=>a.dom=M(a));for(let a of N)k.push({sev:"violation",rule:"Missing clock",dst:a,msg:`Port ${a} clocks registers but has no create_clock. Define the clock so its crossings can be checked.`});let K=a=>{let h=C.get(a),d=0;for(;h&&h.master&&d++<10;)h=C.get(h.master);return h?h.name:a},U=new Set,I=(a,h)=>{if(a===h)return!0;let d=K(a),u=K(h);if(d===u)return!0;for(let w of s.groups){let x=w.groups.findIndex(q=>q.includes(a)||q.includes(d)),g=w.groups.findIndex(q=>q.includes(h)||q.includes(u));if(x>=0&&g>=0)return x===g}let y=[d,u].sort().join(" / ");return U.has(y)||(U.add(y),k.push({sev:"caution",rule:"Clock relationship assumed",dst:y,msg:`No set_clock_groups relates ${d} and ${u}: treated as asynchronous (the safe CDC default).`})),!1},te=a=>s.inputs.get(a)||null,O=(a,h=!0)=>{let d={regs:new Set,ports:new Set,logic:!1,muxSel:[],gates:0},u=new Set,y=w=>{if(typeof w!="number"||u.has(w))return;if(u.add(w),b.has(w)&&h){d.regs.add(b.get(w));return}let x=c.driver.get(w);if(!x)return;if(x.port){d.ports.add(x.port);return}let g=r[x.cell];if(!ye.has(g.type)){if(Xe.has(g.type)||(d.logic=!0,d.gates++),g.type==="$mux"||g.type==="$_MUX_"||g.type==="$pmux"){d.muxSel.push(...g.connections.S||[]);let q=g.parameters&&parseInt(g.parameters.WIDTH,2)||1;for(let A of["A","B"]){let H=g.connections[A]||[];g.type==="$pmux"?H.forEach(y):y(H[x.i]!==void 0?H[x.i]:H[0])}(g.connections.S||[]).forEach(y);return}for(let[q,A]of Object.entries(g.connections)){if((g.port_directions||{})[q]==="output"||/^(Y|Q)$/.test(q))continue;/^\$(and|or|xor|xnor|not|pos|buf|_AND_|_OR_|_XOR_|_NOT_)$/.test(g.type)&&A.length>x.i?y(A[x.i]):A.forEach(y)}}};return y(a),d},R=(a,h)=>{if(a.reg)return a.reg.dom&&h&&!I(a.reg.dom,h);let d=te(a.port);return d?!I(d,h):!0},F=a=>a.reg?a.reg.dom:te(a.port)||`async input ${a.port}`,Y=a=>{let h=c.sinks.get(a.q)||[],d=h.map(u=>u.cell&&r[u.cell]&&ye.has(r[u.cell].type)&&u.pin==="D"?p.find(y=>y.cell===u.cell&&y.i===u.i):null);return{all:h,sameClock:d.filter(u=>u&&u.dom===a.dom&&u.clk===a.clk),other:h.length-d.filter(Boolean).length}},Q=new Map,G=new Map,B=[];for(let a of p){if(!a.dom||a.latch)continue;let h=O(a.d),d=[...[...h.regs].map(q=>({reg:q})),...[...h.ports].map(q=>({port:q}))].filter(q=>R(q,a.dom));if(!d.length)continue;let u=Y(a),y=u.sameClock.find(q=>{let A=O(q.d);return!A.logic&&A.regs.size===1&&[...A.regs][0]===a});if(!y)continue;let w=[a],x=y;for(;x&&w.length<6;){let q=O(x.d);if(q.logic||q.regs.size!==1||[...q.regs][0]!==w[w.length-1])break;w.push(x);let A=Y(x);x=A.sameClock.length===1&&A.all.length===1?A.sameClock[0]:null}let g={first:a,stages:w,srcs:d,cone:h,fanout:u.all.length};B.push(g),Q.set(a,g),w.slice(1).forEach(q=>G.set(q.q,g))}let X=a=>{let h=new Set,d=new Set,u=y=>{if(typeof y!="number"||d.has(y)||(d.add(y),G.has(y)&&h.add(G.get(y)),b.has(y)))return;let w=c.driver.get(y);if(!w||w.port)return;let x=r[w.cell];if(!ye.has(x.type))for(let[g,q]of Object.entries(x.connections))(x.port_directions||{})[g]==="output"||/^(Y|Q)$/.test(g)||q.forEach(u)};return u(a),h},J=[];for(let a of p){if(!a.dom)continue;let h=O(a.d),d=a.en!==null&&a.en!==void 0?O(a.en):null,y=[...[...h.regs].map(S=>({reg:S})),...[...h.ports].map(S=>({port:S})),...d?[...d.regs].map(S=>({reg:S})):[]].filter(S=>!(S.reg&&G.has(S.reg.q)&&S.reg.dom===a.dom)).filter(S=>R(S,a.dom)&&!(S.port&&/rst|reset/i.test(S.port)&&!1));if(!y.length)continue;let w=[...new Set(y.map(S=>S.reg?S.reg.name:S.port))],x=[...new Set(y.map(F))],g=Q.get(a),q={src:w.join(", "),dst:a.name,srcDom:x.join(", "),dstDom:a.dom,srcBase:w.map(se).join(","),dstBase:se(a.name)};if(g){h.logic?J.push({...q,sev:"violation",rule:"Logic before synchronizer",msg:`Combinational logic (${h.gates} gate${h.gates>1?"s":""}) drives the first synchronizer stage. A glitch can be captured as a false pulse. Register the signal in the source domain first.`}):g.fanout>1?J.push({...q,sev:"violation",rule:"First stage fans out",msg:`The first synchronizer stage also drives other logic (${g.fanout} loads). Its output can be metastable: only the next flop may use it.`}):g.stages.length<2?J.push({...q,sev:"violation",rule:"Single-flop synchronizer",msg:"Only one flop: not enough time for metastability to resolve."}):J.push({...q,sev:"ok",rule:`${g.stages.length}-flop synchronizer`,msg:`Synchronized by ${g.stages.map(S=>S.name).join(" \u2192 ")}.`});continue}let A=new Set;for(let S of h.muxSel)for(let _e of X(S))A.add(_e);if(a.en!==null&&a.en!==void 0)for(let S of X(a.en))A.add(S);let H=Y(a);if(A.size){let S=[...A].map(_e=>_e.stages[_e.stages.length-1].name);J.push({...q,sev:"ok",rule:"Qualified by synchronized enable",msg:`Captured only when ${[...new Set(S)].join(", ")} (synchronized) says the data is stable. Keep the data stable while the enable is active: check it in simulation.`})}else H.sameClock.length===1&&H.all.length===1?J.push({...q,sev:"violation",rule:"Logic before synchronizer",msg:"This register starts a synchronizer chain, but its input comes through logic. Register the signal in the source domain first."}):J.push({...q,sev:"violation",rule:"Unsynchronized crossing",msg:`Asynchronous data is used directly in ${a.dom}. The flop can go metastable and pass a wrong value on. Add a synchronizer, a handshake or a FIFO.`})}let je=B.filter(a=>a.stages.length>=2),ge=new Map;for(let a of je){let h=a.srcs[0],d=h.reg?h.reg.name:h.port,u=`${se(d)}|${F(h)}|${a.first.dom}`;ge.has(u)||ge.set(u,[]),ge.get(u).push(a)}let Pe=new Map;for(let[a,h]of ge){if(h.length<2)continue;let[d,u,y]=a.split("|");h.forEach(w=>Pe.set(w,a)),k.push({sev:"caution",rule:"Bus synchronized bit by bit",src:`${d} (${h.length} bits)`,dst:se(h[0].first.name),srcDom:u,dstDom:y,msg:`${h.length} bits of ${d} each have their own synchronizer. Bits can arrive in different cycles, so this is only safe if ${d} changes one bit at a time (Gray code). Otherwise use a handshake or a FIFO.`})}let Ue=new Set,bt=[...p.map(a=>({bit:a.d,name:a.name,dom:a.dom})),...[...c.portBits.values()].filter(a=>a.dir==="output").map(a=>({bit:[...c.portBits.entries()].find(([,h])=>h===a)[0],name:a.nm,dom:null}))];for(let a of bt){let h=[...X(a.bit)],d=new Map;for(let u of h){let y=u.first.dom+"|"+F(u.srcs[0]);d.has(y)||d.set(y,new Set),d.get(y).add(u)}for(let[u,y]of d){if(y.size<2)continue;let w=[...y];if(new Set(w.map(S=>Pe.get(S)||S)).size<2)continue;let g=w.map(S=>S.stages[S.stages.length-1].name).sort(),q=g.join(",");if(Ue.has(q))continue;Ue.add(q);let[A,H]=u.split("|");k.push({sev:"caution",rule:"Reconvergence",src:g.join(", "),dst:a.name,srcDom:H,dstDom:A,msg:`Separately synchronized signals meet in logic at ${a.name}. They can arrive one cycle apart, so the combination can be briefly wrong. Synchronize one control signal instead, or use Gray coding.`})}}let ne=new Set;for(let a of p){if(a.arst===null||a.arst===void 0)continue;let h=O(a.arst),d=h.ports.size&&!h.regs.size,u=O(a.d),y=typeof a.d!="number"||!u.regs.size&&!u.ports.size||u.regs.size&&!u.ports.size&&[...u.regs].every(w=>ne.has(w)&&w.dom===a.dom);d&&y&&ne.add(a)}for(let a=0;a<3;a++)for(let h of p){if(ne.has(h)||h.arst==null)continue;let d=O(h.arst),u=O(h.d);d.ports.size&&!d.regs.size&&[...u.regs].length&&[...u.regs].every(y=>ne.has(y)&&y.dom===h.dom)&&ne.add(h)}let le=new Map;for(let a of p){if(a.arst===null||a.arst===void 0||ne.has(a))continue;let h=O(a.arst),d=[...h.regs],u;if(d.length&&d.every(g=>ne.has(g)&&g.dom===a.dom))u={sev:"ok",rule:"Synchronized reset",msg:`Reset deasserts in step with ${a.dom} through the reset synchronizer ${d.map(g=>g.name).join(", ")}.`};else if(d.some(g=>g.dom&&a.dom&&!I(g.dom,a.dom)))u={sev:"violation",rule:"Reset crosses domains",msg:`The reset comes from ${d.map(g=>g.name).join(", ")} in another clock domain (${d[0].dom}). Use a reset synchronizer in ${a.dom}.`};else{if(h.ports.size&&[...h.ports].every(g=>te(g)&&a.dom&&I(te(g),a.dom)))continue;h.ports.size&&(u={sev:"caution",rule:"Reset not synchronized",msg:`Asynchronous reset ${[...h.ports].join(", ")} goes straight to these registers. Its release is not synchronized to ${a.dom}, so flops can leave reset in different cycles. Use a reset synchronizer, or, if the reset comes from a synchronizer outside this block, say so with set_input_delay -clock ${a.dom} on the reset port.`})}if(!u)continue;let y=u.rule==="Reset not synchronized",w=u.rule+"|"+(y?[...h.ports].join(","):se(a.name))+"|"+a.dom,x=d.length?d.map(g=>g.name).join(", "):[...h.ports].join(", ");le.has(w)||le.set(w,{...u,src:x,dst:a.name,dstDom:a.dom,srcDom:d.length?d[0].dom:"reset input",bits:0,dstBase:se(a.name),bases:new Set}),le.get(w).bits++,le.get(w).bases.add(se(a.name))}let fe=new Map;for(let a of J){let h=[a.sev,a.rule,a.dstBase,a.srcBase,a.dstDom].join("|");fe.has(h)||fe.set(h,{...a,bits:0,srcSet:new Set,dstSet:new Set});let d=fe.get(h);d.bits++,a.src.split(", ").forEach(u=>d.srcSet.add(u)),d.dstSet.add(a.dst)}let Re=[...fe.values()].map(a=>({...a,src:Je([...a.srcSet]),dst:Je([...a.dstSet])})),kt=[...le.values()].map(a=>({...a,dst:a.bases.size>1?`${a.bits} flops (${[...a.bases].slice(0,4).join(", ")}${a.bases.size>4?", \u2026":""})`:a.bits>1?`${a.dstBase} (${a.bits} bits)`:a.dst})),Le=[...Re,...k.filter(a=>a.rule!=="Clock relationship assumed"),...kt,...k.filter(a=>a.rule==="Clock relationship assumed")],Ze={violation:0,caution:1,ok:2};Le.sort((a,h)=>Ze[a.sev]-Ze[h.sev]);let Ie=new Map;for(let a of p)a.dom&&Ie.set(a.dom,(Ie.get(a.dom)||0)+1);let Ve=[...C.values()].map(a=>({...a,regs:Ie.get(a.name)||0,root:K(a.name)})),Oe=a=>Le.filter(h=>h.sev===a).length;return{top:i,clocks:Ve,rows:Le,notes:_,summary:{domains:Ve.filter(a=>a.regs>0).length,crossings:Re.reduce((a,h)=>a+h.bits,0),crossingRegs:Re.length,violations:Oe("violation"),cautions:Oe("caution"),ok:Oe("ok"),synchronizers:je.length}}}function se(e){return String(e).replace(/\[\d+\]$/,"")}function Je(e){let t=new Map;for(let n of e){let s=/^(.*)\[(\d+)\]$/.exec(n),i=s?s[1]:n;t.has(i)||t.set(i,[]),s&&t.get(i).push(+s[2])}return[...t.entries()].map(([n,s])=>s.length>1?`${n}[${Math.max(...s)}:${Math.min(...s)}]`:s.length===1?`${n}[${s[0]}]`:n).join(", ")}function tt(e){let t=[],n=(c,r)=>String(c).padEnd(r);t.push(`CDC report for ${e.top}`),t.push(""),t.push("Clock domains"),t.push("  "+n("Clock",16)+n("Kind",12)+n("Source",18)+"Registers");for(let c of e.clocks)t.push("  "+n(c.name,16)+n(c.kind,12)+n(c.port||(c.master?"from "+c.master:"-"),18)+c.regs);t.push("");let s=e.summary;t.push(`Summary: ${s.crossings} crossing bit(s) into ${s.crossingRegs} register group(s), ${s.synchronizers} synchronizer(s)`),t.push(`         ${s.violations} violation(s), ${s.cautions} caution(s), ${s.ok} OK`),t.push("");let i={violation:"VIOLATION",caution:"CAUTION  ",ok:"OK       "},o=0;for(let c of e.rows)o++,t.push(`${i[c.sev]} ${o}. ${c.rule}`),c.src&&t.push(`    from ${c.src}${c.srcDom?"  ("+c.srcDom+")":""}`),c.dst&&t.push(`    to   ${c.dst}${c.dstDom?"  ("+c.dstDom+")":""}`),t.push(`    ${c.msg}`),t.push("");if(e.rows.length||t.push("No clock domain crossings found."),e.notes.length){t.push("Notes");for(let c of e.notes)t.push("  - "+c)}return t}function at(e){let t=[],n=new Map,s=[],i="",o=0,c=e.split(/\s+/),r=!0,f=0,k=0;for(;o<c.length;){let _=c[o++];if(!_)continue;if(r){if(_==="$scope"){for(o++,s.push(c[o++]);c[o]!=="$end";)o++;o++}else if(_==="$upscope"){for(s.pop();c[o]!=="$end";)o++;o++}else if(_==="$timescale"){let b=[];for(;c[o]!=="$end";)b.push(c[o++]);o++,i=b.join("")}else if(_==="$var"){let b=c[o++],v=parseInt(c[o++],10),E=c[o++],C=[];for(;c[o]!=="$end";)C.push(c[o++]);o++;let T=C[0];C[1]&&C[1].startsWith("[")&&(T+=C[1]);let N=[...s,T].join(".");if(b==="parameter")continue;if(n.has(E)){n.get(E).aliases.push(N);continue}let M=[...s.slice(1),T].join("."),K={id:E,name:N,short:M||T,depth:s.length,width:v,type:b,changes:[],aliases:[]};n.set(E,K),t.push(K)}else if(_==="$enddefinitions"){for(;c[o]!=="$end";)o++;o++,r=!1}else if(_.startsWith("$")){for(;o<c.length&&c[o]!=="$end";)o++;o++}continue}let p=_[0];if(p==="#")f=Number(_.slice(1)),f>k&&(k=f);else if(p!=="$")if(p==="b"||p==="B"||p==="r"||p==="R"){let b=_.slice(1),v=c[o++],E=n.get(v);E&&nt(E,f,p==="r"||p==="R"?Number(b):b)}else{let b=n.get(_.slice(1));b&&nt(b,f,p.toLowerCase())}}return{signals:t,timescale:i,endTime:k}}function nt(e,t,n){let s=e.changes;s.length&&s[s.length-1][0]===t?s[s.length-1][1]=n:(!s.length||s[s.length-1][1]!==n)&&s.push([t,n])}function rt(e,t){let n=e.changes,s=0,i=n.length-1,o=-1;for(;s<=i;){let c=s+i>>1;n[c][0]<=t?(o=c,s=c+1):i=c-1}return o<0?null:n[o][1]}function Ne(e,t,n){if(t==null)return"";if(typeof t=="number")return String(+t.toPrecision(6));if(e.width===1)return t;let s=t.padStart(e.width,t[0]==="x"||t[0]==="z"?t[0]:"0");if(/[xz]/i.test(s))return/^x+$/i.test(s)?"x":/^z+$/i.test(s)?"z":n==="bin"?s:"x";if(n==="bin")return s;let i=BigInt("0b"+s);if(n==="dec")return i.toString(10);if(n==="sdec"){let o=BigInt(e.width);return(s[0]==="1"?i-(1n<<o):i).toString(10)}return i.toString(16).toUpperCase().padStart(Math.ceil(e.width/4),"0")}var me=class{constructor(t,n){this.c=t,this.ctx=t.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=n.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=n.theme,t.addEventListener("mousedown",s=>this.click(s)),t.addEventListener("wheel",s=>this.wheel(s),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(t.parentElement)}setData(t){this.data=t,this.cursor=null,this.t0=0,this.t1=Math.max(1,t.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(t,n){if(!this.data)return;let s=this.t1-this.t0,i=n??this.cursor??this.t0+s/2,o=Math.min(Math.max(s*t,2),Math.max(1,this.data.endTime)*1.05),c=i-(i-this.t0)*(o/s);c=Math.max(0,Math.min(c,Math.max(0,this.data.endTime-o))),this.t0=c,this.t1=c+o,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(t){if(!this.data)return;let n=this.t1-this.t0,s=this.t0+n*t;s=Math.max(0,Math.min(s,Math.max(0,this.data.endTime-n))),this.t0=s,this.t1=s+n,this.draw()}xOf(t,n){return this.nameW+(t-this.t0)/(this.t1-this.t0)*(n-this.nameW-8)}tOf(t,n){return this.t0+(t-this.nameW)/(n-this.nameW-8)*(this.t1-this.t0)}click(t){if(!this.data)return;let n=this.c.getBoundingClientRect(),s=t.clientX-n.left;s<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(s,n.width))),this.draw(),this.onCursor(this.cursor))}wheel(t){if(!this.data)return;let n=this.c.getBoundingClientRect();t.ctrlKey||t.metaKey||Math.abs(t.deltaY)>Math.abs(t.deltaX)&&t.shiftKey===!1&&t.altKey?(t.preventDefault(),this.zoom(t.deltaY>0?1.25:.8,this.tOf(t.clientX-n.left,n.width))):(Math.abs(t.deltaX)>Math.abs(t.deltaY)||t.shiftKey)&&(t.preventDefault(),this.pan((t.deltaX||t.deltaY)/600))}draw(){let t=this.theme(),s=this.c.parentElement.clientWidth;this.nameW=s<640?112:190;let i=this.data?this.data.signals:[],o=this.axisH+Math.max(i.length,3)*this.rowH+8,c=window.devicePixelRatio||1;this.c.style.width=s+"px",this.c.style.height=o+"px",this.c.width=Math.round(s*c),this.c.height=Math.round(o*c);let r=this.ctx;if(r.setTransform(c,0,0,c,0,0),r.fillStyle=t.bg,r.fillRect(0,0,s,o),r.font="12px 'JetBrains Mono', ui-monospace, monospace",r.textBaseline="middle",!this.data){r.fillStyle=t.muted,r.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,o/2);return}let f=this.t1-this.t0,k=(s-this.nameW)/110,_=f/Math.max(1,k),p=Math.pow(10,Math.floor(Math.log10(_))),b=[1,2,5,10].map(v=>v*p).find(v=>v>=_)||p*10;r.strokeStyle=t.grid,r.fillStyle=t.muted,r.lineWidth=1;for(let v=Math.ceil(this.t0/b)*b;v<=this.t1;v+=b){let E=Math.round(this.xOf(v,s))+.5;r.beginPath(),r.moveTo(E,this.axisH-6),r.lineTo(E,o),r.stroke(),r.fillText(be(v,this.data.timescale),E+3,11)}if(r.strokeStyle=t.line,r.beginPath(),r.moveTo(0,this.axisH+.5),r.lineTo(s,this.axisH+.5),r.stroke(),i.forEach((v,E)=>{let C=this.axisH+E*this.rowH,T=C+6,N=C+this.rowH-6,M=(T+N)/2;r.fillStyle=E%2?t.rowAlt:t.bg,r.fillRect(0,C+1,s,this.rowH-1),r.fillStyle=t.text;let K=v.short+(v.width>1&&!v.short.includes("[")?` [${v.width-1}:0]`:"");r.fillText(st(r,K,this.nameW-16),10,M),r.save(),r.beginPath(),r.rect(this.nameW,C,s-this.nameW,this.rowH),r.clip();let U=v.changes;for(let I=0;I<U.length;I++){let te=U[I][0],O=I+1<U.length?U[I+1][0]:this.data.endTime;if(O<this.t0||te>this.t1)continue;let R=this.xOf(te,s),F=this.xOf(O,s),Y=U[I][1];if(v.width===1&&typeof Y=="string"){let Q=Y==="x"?t.x:Y==="z"?t.z:t.wave;r.strokeStyle=Q,r.lineWidth=1.5,Y==="x"&&(r.fillStyle=t.xFill,r.fillRect(R,T,F-R,N-T));let G=Y==="1"?T:Y==="0"?N:M;if(r.beginPath(),I>0){let B=U[I-1][1],X=B==="1"?T:B==="0"?N:M;r.moveTo(R,X)}else r.moveTo(R,G);r.lineTo(R,G),r.lineTo(F,G),r.stroke()}else{let Q=Ne(v,Y,this.radix),G=Q==="x"||Q==="z";r.strokeStyle=G?t.x:t.wave,r.lineWidth=1.2,r.fillStyle=G?t.xFill:t.busFill;let B=Math.min(4,(F-R)/2);r.beginPath(),r.moveTo(R,M),r.lineTo(R+B,T),r.lineTo(F-B,T),r.lineTo(F,M),r.lineTo(F-B,N),r.lineTo(R+B,N),r.closePath(),r.fill(),r.stroke();let X=F-R-10;X>14&&(r.fillStyle=t.text,r.fillText(st(r,Q,X),Math.max(R,this.nameW)+6,M))}}r.restore()}),r.strokeStyle=t.line,r.beginPath(),r.moveTo(this.nameW+.5,0),r.lineTo(this.nameW+.5,o),r.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let v=Math.round(this.xOf(this.cursor,s))+.5;r.strokeStyle=t.cursor,r.lineWidth=1.5,r.beginPath(),r.moveTo(v,0),r.lineTo(v,o),r.stroke()}}};function st(e,t,n){if(e.measureText(t).width<=n)return t;for(;t.length>1&&e.measureText(t+"\u2026").width>n;)t=t.slice(0,-1);return t+"\u2026"}function be(e,t){let n=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(t||"");if(!n)return String(e);let s=["fs","ps","ns","us","ms","s"],i=e*Number(n[1]),o=s.indexOf(n[2]);for(;o<s.length-1&&Math.abs(i)>=1e3&&i%1e3===0;)i/=1e3,o++;return o<2&&Math.abs(i)>=1e3&&(i/=1e3,o++,i=+i.toFixed(3)),`${i} ${s[o]}`}var m=e=>document.querySelector(e),ot=3e5,ht="vdd-cdc-lab-v1",ut="vdd-cdc-quiz-v1",ee="check_cdc.ys",de=new URL("/",location.href).href,l={example:L[0].id,track:Z[0].id,script:ee,files:{},order:[],current:ee,running:!1,mode:null,timer:null,lastVcd:null},ae={yosys:null,sim:null},ue={yosys:!1,sim:!1},xt=e=>/\.s?v$/i.test(e)&&/\$finish\b/.test(l.files[e]||""),pt=()=>[...l.order.filter(e=>/\.ys$/i.test(e)).map(e=>({value:e,label:`CDC check (${e})`})),...l.order.filter(xt).map(e=>({value:"sim:"+e,label:`Simulate (${e})`}))];function Fe(){let e=pt();return e.find(t=>t.value===l.script)||e[0]||null}function gt(){let e=m("#script"),t=pt(),n=Fe();e.innerHTML="";for(let s of t){let i=document.createElement("option");i.value=s.value,i.textContent=s.label,e.appendChild(i)}n&&(e.value=n.value),m("#script-wrap").hidden=t.length<2,m("#run-label").textContent=n&&n.value.startsWith("sim:")?"Simulate":"Run CDC check"}var j=new Map,$=null,P=m("#editor textarea"),Ye=e=>/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain";window.CodeMirror?($=window.CodeMirror.fromTextArea(P,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),$.on("change",()=>{l.files[l.current]=$.getValue(),Ce()})):(P.classList.add("plain-editor"),P.addEventListener("input",()=>{l.files[l.current]=P.value,Ce()}));var $e=()=>{l.files[l.current]=$?$.getValue():P.value};function Ge(e){$e(),l.current=e,$?(j.has(e)||j.set(e,window.CodeMirror.Doc(l.files[e]??"",Ye(e))),$.swapDoc(j.get(e)),setTimeout(()=>$.refresh(),0)):P.value=l.files[e]??"",Be()}function St(e,t){Ge(e),$&&($.focus(),$.setCursor({line:t-1,ch:0}),$.addLineClass(t-1,"background","cm-errline"),setTimeout(()=>$.removeLineClass(t-1,"background","cm-errline"),2500),$.scrollIntoView({line:t-1,ch:0},80))}function We(e,t,n){j.clear(),l.files={...e},l.order=t||Object.keys(e),l.current=n&&l.order.includes(n)?n:l.order[0],$?(j.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",Ye(l.current))),$.swapDoc(j.get(l.current))):P.value=l.files[l.current]??"",Be()}function Be(){let e=m("#tabs");e.innerHTML="";for(let t of l.order){let n=document.createElement("button");if(n.type="button",n.className="tab"+(t===l.current?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t===l.current?"true":"false"),n.textContent=t,n.addEventListener("click",()=>Ge(t)),e.appendChild(n),t===l.current&&l.order.length>1){let s=document.createElement("button");s.type="button",s.className="tab-x",s.textContent="\xD7",s.title="Remove "+t,s.setAttribute("aria-label","Remove file "+t),s.addEventListener("click",()=>Ct(t)),e.appendChild(s)}}gt()}function Ct(e){$e(),delete l.files[e],j.delete(e),l.order=l.order.filter(t=>t!==e),l.current=l.order[0],$?(j.has(l.current)||j.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",Ye(l.current))),$.swapDoc(j.get(l.current))):P.value=l.files[l.current]??"",Be(),Ce()}function Et(){let e=(window.prompt("New file name (for example top.v, extra.sdc):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){z("File names can use letters, digits, dot, dash and underscore only.","err");return}l.files[e]===void 0&&(l.order.push(e),l.files[e]=""),Ge(e),Ce()}}var qe=e=>{let t=L.find(n=>n.id===e);return t?(Z.find(n=>n.group===t.group)||Z[0]).id:null},re=()=>Z.find(e=>e.id===l.track)||Z[0];function xe(){let e=m("#tracks");e.innerHTML="";for(let t of Z){let n=document.createElement("button");n.type="button",n.className="track"+(t.id===re().id?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",t.id===re().id?"true":"false"),n.innerHTML='<span class="track-t"></span><span class="track-n"></span>',n.querySelector(".track-t").textContent=t.title,n.querySelector(".track-n").textContent=L.filter(s=>s.group===t.group).length+" labs",n.addEventListener("click",()=>$t(t.id)),e.appendChild(n)}m("#track-note").textContent=re().note}function $t(e){l.track=e,xe(),qe(l.example)!==e?ce(L.find(t=>t.group===re().group).id):ie()}function ie(){let e=m("#examples");e.innerHTML="";for(let n of L.filter(s=>s.group===re().group)){let s=document.createElement("button");s.type="button",s.className="ex"+(n.id===l.example?" active":""),s.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',s.querySelector(".ex-tag").textContent=n.tag;let i=n.quiz&&n.quiz.length?pe()[n.id]:null;if(i&&i.checked){let o=document.createElement("span");o.className="ex-done",o.textContent=(i.score===i.total?"\u2713 ":"")+`quiz ${i.score}/${i.total}`,s.querySelector(".ex-tag").appendChild(o)}s.querySelector(".ex-title").textContent=n.title,s.addEventListener("click",()=>ce(n.id)),e.appendChild(s)}let t=m("#ex-select");t.innerHTML=L.filter(n=>n.group===re().group).map(n=>`<option value="${n.id}">${n.tag} \xB7 ${n.title}</option>`).join(""),l.example&&(t.value=l.example)}function ce(e){let t=L.find(n=>n.id===e)||L[0];l.example=t.id,qe(t.id)!==l.track&&(l.track=qe(t.id),xe()),l.script=t.script||ee,We(t.files,Object.keys(t.files),ee),ie(),Se(),Te(),_t(),De(null),yt(!1),V("Ready","idle");try{let n=new URL(location.href);n.searchParams.set("lab",t.id),n.searchParams.delete("track"),history.replaceState(null,"",n.pathname+n.search)}catch{}}function pe(){try{return JSON.parse(localStorage.getItem(ut)||"{}")||{}}catch{return{}}}function He(e){try{localStorage.setItem(ut,JSON.stringify(e))}catch{}}var Ae=()=>L.find(e=>e.id===l.example&&e.quiz&&e.quiz.length);function At(e){let t=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return t?parseFloat(t[0]):NaN}function Tt(e,t){if(e.type==="choice")return t!=null&&+t===e.answer;let n=At(t);return isFinite(n)&&Math.abs(n-e.answer)<=(e.tol??.01)+1e-9}var zt=e=>e.type==="choice"?e.options[e.answer]:`${e.answer}${e.unit?" "+e.unit:""}`;function Se(){Qe(Ke,l.example);let e=m("#quiz"),t=m("#quiz-list"),n=Ae();if(!n){e.hidden=!0;return}e.hidden=!1;let s=pe()[n.id]||{},i=s.a||[];t.innerHTML="",n.quiz.forEach((o,c)=>{let r=document.createElement("li"),f=document.createElement("div");if(f.className="quiz-q",o.try){let p=document.createElement("span");p.className="quiz-try",p.textContent="Try it",f.appendChild(p)}let k=o.q.replace(/^Try it: /,"");if(f.appendChild(document.createTextNode(k.charAt(0).toUpperCase()+k.slice(1))),r.appendChild(f),o.type==="choice"){let p=document.createElement("div");p.className="quiz-opts",p.setAttribute("role","radiogroup"),o.options.forEach((b,v)=>{let E=document.createElement("label"),C=document.createElement("input");C.type="radio",C.name=`q${c}`,C.value=v,i[c]!==void 0&&+i[c]===v&&(C.checked=!0),C.addEventListener("change",()=>it(n,c,v));let T=document.createElement("span");T.textContent=b,E.append(C,T),p.appendChild(E)}),r.appendChild(p)}else{let p=document.createElement("div");p.className="quiz-num";let b=document.createElement("input");if(b.type="text",b.inputMode="decimal",b.autocomplete="off",b.setAttribute("aria-label","Answer to question "+(c+1)),b.placeholder="e.g. 3",i[c]!==void 0&&(b.value=i[c]),b.addEventListener("input",()=>it(n,c,b.value)),b.addEventListener("keydown",v=>{v.key==="Enter"&&Me()}),p.appendChild(b),o.unit){let v=document.createElement("span");v.className="unit",v.textContent=o.unit,p.appendChild(v)}r.appendChild(p)}let _=document.createElement("div");_.className="quiz-fb",_.hidden=!0,_.setAttribute("aria-live","polite"),r.appendChild(_),t.appendChild(r)}),s.checked?Me(!0):ft(null)}function it(e,t,n){let s=pe(),i=s[e.id]||{a:[]};i.a=i.a||[],i.a[t]=n,i.checked=!1,s[e.id]=i,He(s);let o=m("#quiz-list").children[t]?.querySelector(".quiz-fb");o&&(o.hidden=!0)}function ft(e,t){let n=m("#quiz-score");if(e===null){n.textContent="",n.classList.remove("done");return}n.textContent=`${e} / ${t} correct`,n.classList.toggle("done",e===t)}function Me(e){let t=Ae();if(!t)return;let n=pe(),s=n[t.id]||{a:[]};s.a=s.a||[];let i=0;t.quiz.forEach((o,c)=>{let r=m("#quiz-list").children[c],f=o.type==="choice"?(r.querySelector("input:checked")||{}).value:r.querySelector("input").value;s.a[c]=f;let k=r.querySelector(".quiz-fb"),_=f===void 0||f==="",p=!_&&Tt(o,f);p&&i++,k.hidden=!1,k.className="quiz-fb "+(p?"ok":"bad"),k.innerHTML="";let b=document.createElement("b");b.textContent=p?"Correct.":_?"Not answered yet.":"Not quite.",k.appendChild(b),p&&o.explain?k.appendChild(document.createTextNode(o.explain)):!p&&!_&&k.appendChild(document.createTextNode(o.type==="number"?"Check the report or the simulation output again.":"Look at the report and the code again and try another option."))}),s.checked=!0,s.score=i,s.total=t.quiz.length,n[t.id]=s,He(n),ft(i,t.quiz.length),e||ie()}function Dt(){let e=Ae();e&&e.quiz.forEach((t,n)=>{let s=m("#quiz-list").children[n].querySelector(".quiz-fb");s.hidden=!1,s.className="quiz-fb shown",s.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+zt(t)+".",s.appendChild(i),t.explain&&s.appendChild(document.createTextNode(t.explain))})}function Rt(){let e=Ae();if(!e)return;let t=pe();delete t[e.id],He(t),Se(),ie()}var ct=null;function Ce(){clearTimeout(ct),ct=setTimeout(Te,400)}function Te(){try{localStorage.setItem(ht,JSON.stringify({example:l.example,script:l.script,files:l.files,order:l.order,current:l.current}))}catch{}}function Lt(){try{let e=JSON.parse(localStorage.getItem(ht)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function It(){let e=JSON.stringify({f:l.files,o:l.order,s:l.script}),t=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(t).arrayBuffer()),s="";for(let i of n)s+=String.fromCharCode(i);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Ot(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=new Blob([Uint8Array.from(t,s=>s.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(n).text())}async function ke(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{n=document.execCommand("copy")}catch{}i.remove()}if(t){let s=t.dataset.label||t.textContent;t.dataset.label=s,t.textContent=n?"Copied":"Press Ctrl+C",t.classList.toggle("ok",n),setTimeout(()=>{t.textContent=s,t.classList.remove("ok")},1600)}}function lt(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var he=m("#console"),ze=[];function _t(){he.textContent="",ze=[]}function z(e,t){ze.push(e);let n=document.createElement("div");n.className="ln "+(t||"");let s=/\b([\w.-]+\.(?:v|sv|ys|sdc)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|sdc)),? line (\d+)\b/.exec(e);if(s&&l.files[s[1]]!==void 0){let i=e.indexOf(s[0]);n.appendChild(document.createTextNode(e.slice(0,i)));let o=document.createElement("button");o.type="button",o.className="loc",o.textContent=s[0],o.addEventListener("click",()=>St(s[1],+s[2])),n.appendChild(o),n.appendChild(document.createTextNode(e.slice(i+s[0].length)))}else n.textContent=e;t||(/^VIOLATION|\bERROR\b|\berror\b|Error:|\bFAIL\b|Internal error/.test(e)?n.classList.add("err"):/^CAUTION|^Warning|\bwarning\b/i.test(e)?n.classList.add("warn"):/^OK\s|\bPASS\b/.test(e)?n.classList.add("pass"):/^(Clock domains|Summary|CDC report|Notes)/.test(e)&&n.classList.add("sec")),he.appendChild(n),he.childElementCount>2e4&&he.firstChild.remove()}function De(e){let t=m("#summary");if(t.innerHTML="",!e||!e.length){t.hidden=!0;return}for(let[n,s,i]of e){let o=document.createElement("div");o.className="chip "+(i||"");let c=document.createElement("span");c.className="k",c.textContent=n;let r=document.createElement("span");r.className="v",r.textContent=s,o.append(c,r),t.appendChild(o)}t.hidden=!1}function V(e,t){let n=m("#status");n.textContent=e,n.dataset.kind=t}var W=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),D=new me(m("#wave"),{theme:()=>({bg:W("--wave-bg"),rowAlt:W("--wave-row"),grid:W("--wave-grid"),line:W("--line"),text:W("--text"),muted:W("--muted"),wave:W("--wave"),busFill:W("--wave-bus"),x:W("--wave-x"),xFill:W("--wave-xfill"),z:W("--wave-z"),cursor:W("--accent")}),onCursor:e=>{let t=m("#wave-values");if(e===null||!D.data){t.textContent="";return}t.innerHTML="";let n=document.createElement("div");n.className="cur-time",n.textContent="Cursor @ "+be(e,D.data.timescale),t.appendChild(n);for(let s of D.data.signals){let i=document.createElement("div");i.className="cur-row";let o=document.createElement("span");o.textContent=s.name;let c=document.createElement("span");c.textContent=Ne(s,rt(s,e),D.radix),i.append(o,c),t.appendChild(i)}}});window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>D.draw());function yt(e){m("#wave-pane").hidden=!e,e||(D.clear(),m("#wave-values").textContent="",m("#wave-meta").textContent="")}function Ee(e){ae[e]&&ae[e].terminate(),ue[e]=!1;let t=e==="yosys"?new Worker(new URL("synth/worker.js",de).href,{type:"module"}):new Worker(new URL("verilog/worker.js",de).href),n=new URL(e==="yosys"?"synth/":"verilog/",de).href;t.onmessage=s=>e==="yosys"?Nt(s.data):Wt(s.data),t.onerror=s=>{z((e==="yosys"?"Yosys":"The simulator")+" failed to start: "+(s.message||"worker error"),"err"),oe(!1)},t.postMessage({type:"load",base:n}),ae[e]=t}var we=[],ve={};function Nt(e){if(e.type==="ready")ue.yosys=!0,!l.running&&m("#status").dataset.kind==="busy"&&V("Ready","idle");else if(e.type==="stage")l.mode==="yosys"&&V(e.stage+"\u2026","busy");else if(e.type==="line")we.push(e.line);else if(e.type==="file")ve[e.name]=e.content;else if(e.type==="done"&&l.mode==="yosys"){if(!e.ok||!ve["design.json"]){for(let n of we)z(n,/ERROR/.test(n)?"err":"");z(e.ok?"\u2500\u2500 The script did not write design.json: keep the write_json design.json line \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),oe(!1);return}let t=we.filter(n=>/^Warning/.test(n));for(let n of t)z(n);z(`\u2500\u2500 Yosys read the design in ${e.ms} ms; checking clock domain crossings \u2500\u2500`,"meta");try{let n=l.order.find(c=>/\.sdc$/i.test(c)),s=(/-top\s+(\S+)/.exec(l.files[Fe().value]||"")||[])[1],i=et(JSON.parse(ve["design.json"]),n?l.files[n]:"",s);n||z("No .sdc file: every clock is treated as its own asynchronous domain.","warn");for(let c of tt(i))z(c);let o=i.summary;De([["Clock domains",String(o.domains)],["Crossing bits",String(o.crossings)],["Synchronizers",String(o.synchronizers)],["Violations",String(o.violations),o.violations?"bad":"good"],["Cautions",String(o.cautions),o.cautions?"warn":""]]),oe(!0)}catch(n){z("CDC check failed: "+(n.message||n),"err"),oe(!1)}}}function Wt(e){if(e.type==="ready")ue.sim=!0,!l.running&&m("#status").dataset.kind==="busy"&&V("Ready","idle");else if(e.type==="stage"){if(l.mode!=="sim")return;V(e.stage+"\u2026","busy"),e.stage==="Simulating"&&z("\u2500\u2500 simulation output \u2500\u2500","meta")}else if(e.type==="line")z(e.line.replace(/\/work\//g,""),e.stream==="err"&&/error/i.test(e.line)?"err":"");else if(e.type==="done"&&l.mode==="sim"){if(e.ok){z(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta");let t=ze.join(`
`),n=/^PASS\b/m.test(t),s=/\bFAIL\b/.test(t),i=(t.match(/\bA[1-9] (data|req)/g)||[]).length,o=[];(n||s)&&o.push(["Result",s?"FAIL":"PASS",s?"bad":"good"]),i&&o.push(["Assertion failures",String(i),"bad"]),De(o);let c=(e.vcd||[])[0];if(c){l.lastVcd=c,yt(!0);try{let r=at(c.text);D.setData(r),m("#wave-meta").textContent=`${r.signals.length} signals \xB7 ${be(r.endTime,r.timescale)}`}catch(r){z("Could not read waveform: "+r.message,"err")}}}else e.phase==="compile"?z("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):e.phase==="sim"&&z(`\u2500\u2500 simulation exited with code ${e.rc} \u2500\u2500`,"meta err");oe(e.ok)}}function dt(){if(l.running)return;window.vddSubscribe&&window.vddSubscribe(),$e(),Te();let e=Fe();if(!e){z(`Add a Yosys script (${ee}) or a testbench to run.`,"err");return}if(_t(),De(null),l.running=!0,m("#run").disabled=!0,m("#stop").disabled=!1,e.value.startsWith("sim:")){l.mode="sim";let t=e.value.slice(4),n=(/^\s*module\s+(\w+)/m.exec(l.files[t])||[])[1]||"";ae.sim||Ee("sim"),V(ue.sim?"Compiling\u2026":"Loading simulator\u2026","busy"),z(`$ iverilog -g2012 -s ${n} ${l.order.filter(i=>/\.s?v$/i.test(i)).join(" ")} && vvp`,"meta");let s={};for(let i of l.order)/\.(s?v|vh|svh)$/i.test(i)&&(s[i]=l.files[i]);ae.sim.postMessage({type:"run",files:s,std:"2012",top:n,base:new URL("verilog/",de).href})}else{l.mode="yosys",we=[],ve={},ae.yosys||Ee("yosys"),V(ue.yosys?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),z(`$ yosys -s ${e.value}   then the CDC check with ${l.order.find(n=>/\.sdc$/i.test(n))||"no SDC"}`,"meta");let t={};for(let n of l.order)/\.vcd$/i.test(n)||(t[n]=l.files[n]);ae.yosys.postMessage({type:"run",files:t,script:e.value,dataFiles:[],base:new URL("synth/",de).href})}clearTimeout(l.timer),l.timer=setTimeout(()=>mt(`Stopped after ${ot/1e3} s.`),ot)}function mt(e){if(!l.running)return;z(e||"Stopped.","meta err");let t=l.mode;oe(!1,!0),Ee(t)}function oe(e,t){clearTimeout(l.timer),l.running=!1,m("#run").disabled=!1,m("#stop").disabled=!0,he.scrollTop=0,V(t?"Stopped":e?"Done":"Errors",t||!e?"err":"ok")}function Mt(){m("#run").addEventListener("click",dt),m("#stop").addEventListener("click",()=>mt()),m("#script").addEventListener("change",e=>{l.script=e.target.value,gt(),Te()}),m("#new-file").addEventListener("click",Et),m("#quiz-check").addEventListener("click",()=>Me()),m("#quiz-reveal").addEventListener("click",Dt),m("#quiz-reset").addEventListener("click",Rt),m("#ex-select").addEventListener("change",e=>ce(e.target.value)),m("#reset").addEventListener("click",()=>ce(l.example||L[0].id)),m("#copy-file").addEventListener("click",e=>ke($?$.getValue():P.value,e.currentTarget)),m("#download-file").addEventListener("click",()=>lt(l.current,$?$.getValue():P.value)),m("#copy-output").addEventListener("click",e=>ke(ze.join(`
`),e.currentTarget)),m("#share").addEventListener("click",async e=>{let t=e.currentTarget;$e();try{let n=await It();history.replaceState(null,"","#code="+n),ke(location.href.split("#")[0]+"#code="+n,t)}catch{ke(location.href,t)}}),m("#zoom-in").addEventListener("click",()=>D.zoom(.5)),m("#zoom-out").addEventListener("click",()=>D.zoom(2)),m("#zoom-fit").addEventListener("click",()=>D.fit()),m("#pan-left").addEventListener("click",()=>D.pan(-.4)),m("#pan-right").addEventListener("click",()=>D.pan(.4)),m("#radix").addEventListener("change",e=>{D.radix=e.target.value,D.draw(),D.onCursor(D.cursor)}),m("#dl-vcd").addEventListener("click",()=>{l.lastVcd&&lt("waves.vcd",l.lastVcd.text)}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),dt())})}async function Ft(){Mt();let e=!1,t=new URLSearchParams(location.search),n=new URLSearchParams(location.hash.slice(1)).get("code"),s=t.get("lab"),i=t.get("track");if(l.track=Z.some(o=>o.id===i)?i:Z[0].id,xe(),n)try{let o=await Ot(n);l.example=null,l.script=o.s||ee,We(o.f,o.o,ee),ie(),Se(),e=!0}catch{}if(!e&&s&&L.some(o=>o.id===s)&&(ce(s),e=!0),!e&&!i){let o=Lt();o&&L.some(c=>c.id===o.example)&&(l.example=o.example,l.track=qe(o.example),xe(),l.script=o.script||ee,We(o.files,o.order,o.current),ie(),Se(),e=!0)}e||ce(L.find(o=>o.group===re().group).id),V("Loading Yosys\u2026","busy"),Ee("yosys")}Ft();})();
