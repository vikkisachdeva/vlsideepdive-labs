(()=>{var Ve={"cdc-clocks":{problem:"A chip has many clocks. Before you can check any crossing you must know which clocks are related (same source) and which are asynchronous. A wrong guess hides real bugs or floods you with false ones.",tasks:["Run the CDC check and read the clock table.","Find out why clk_sys \u2192 clk_div2 is not a crossing.","Declare clk_ext asynchronous in clocks.sdc and run again."],learn:"Sort clocks into domains, read set_clock_groups, and tell a real crossing from a synchronous path."},"cdc-find":{problem:"A CPU-to-peripheral bridge passes a write strobe, a data bus, a busy flag and an interrupt between clocks. Some crossings are safe, some can go metastable. Your job is to review it like a design reviewer.",tasks:["Read soc_bridge.v and decide which of the four crossings are safe.","Run the CDC check and compare with your answer.","Work out the MTBF of a synchronizer in the quiz."],learn:"Spot unsynchronized crossings, and estimate how often a synchronizer fails (MTBF)."},"cdc-fix":{problem:"Three signals are synchronized, yet each one is built wrong: logic before the synchronizer, a first stage that fans out, and a single flop. They pass simulation and fail in silicon.",tasks:["Run the CDC check and read the three violations.","Fix status_sync.v one mistake at a time.","Run until the report is clean."],learn:"The rules every synchronizer must follow, and how to fix the three most common mistakes."},"cdc-pulse":{problem:"A one-cycle pulse from a fast clock can fall between two edges of a slow clock and be lost. Two flops alone do not fix this.",tasks:["Run the CDC check on the toggle synchronizer.","Simulate and watch tog, s1, s2 and pulse_out in the waveform.","Send pulses closer together (GAP = 1) and count how many are lost."],learn:"How a toggle (pulse) synchronizer works, and how fast the source may send pulses."},"cdc-bus":{problem:"An 8-bit bus cannot go through eight separate synchronizers: bits arrive in different cycles and the destination reads a value that was never sent.",tasks:["Run the CDC check: see how the bus is qualified by one synchronized signal.","Simulate and check that all words arrive.","Shorten the gap between words and find where it breaks."],learn:"Pass a multi-bit bus safely with a synchronized enable, and why the source must hold the data stable."},"cdc-reset":{problem:"Asynchronous reset may assert at any time, but if it releases asynchronously, flops leave reset in different cycles and the design starts in a broken state.",tasks:["Run the CDC check: one reset is synchronized, one is not, one borrows another clock's reset.","Simulate and read when each register leaves reset.","Decide how to fix rb_q and rx_q."],learn:"Build a reset synchronizer: assert asynchronously, release synchronously, one per clock domain."},"cdc-handshake":{problem:"You need to send data between two clocks whose ratio you do not know, or that may change. Open-loop schemes need you to know the clocks; a handshake does not.",tasks:["Run the CDC check: only req and ack are synchronized.","Simulate and follow one word through req, ack and dout.","Change the destination clock and see the handshake adapt."],learn:"The 4-phase req/ack handshake: safe for any clock ratio, and what it costs in throughput."},"cdc-fifo":{problem:"A handshake moves one word every few cycles. To stream one word per clock between two clocks you need an asynchronous FIFO, and its pointers must cross safely.",tasks:["Run the CDC check: find out why the pointer crossings are only cautions.","Simulate and watch the full and empty flags.","Make the reader faster and see the FIFO never fill."],learn:"How an async FIFO works: Gray-coded pointers, synchronized full and empty."},"cdc-assert":{problem:"A CDC check looks at structure. It cannot see a protocol bug: data that changes while it is being captured, or a request that is too short to cross. These bugs only show up in simulation, if you check for them.",tasks:["Simulate with BUG = 0: all three assertions pass.","Turn on BUG = 1, then BUG = 2, and see which assertion fires.","Read the waveform where each assertion fails."],learn:"Write CDC assertions: data stability, request/acknowledge order and pulse width."},"x-consolidate":{problem:"Two control signals that must act together are synchronized separately. Each crossing is clean, but they can arrive one cycle apart, and the destination sees a state the source never sent. Plain RTL simulation hides it.",tasks:["Run the CDC check: find the reconvergence caution.","Simulate with the metastability model and count b_partial cycles.","Turn the model off, then fix the design with CONSOLIDATE = 1."],learn:"Consolidate control signals before crossing, and use a simulation model that exposes synchronizer delays."},"x-mcp":{problem:"You need to pass a bus without synchronizing every bit, and the source must know when it may send the next word.",tasks:["Run the CDC check: the data is qualified by one toggle.","Simulate and measure the time for 12 words.","Remove the acknowledge and see what breaks."],learn:"Multi-cycle path (MCP) formulation with a 2-phase toggle and acknowledge feedback."},"x-gray":{problem:"A counter must be passed to another clock, for example a FIFO pointer. Binary counters change many bits at once, so the destination can read a value the counter never had.",tasks:["Run the CDC check: it cannot tell binary from Gray.","Simulate with GRAY = 0 and count the impossible values.","Switch to GRAY = 1 and simulate again."],learn:"Gray code counters: why one-bit-per-step changes make a multi-bit crossing safe."},"x-fifo":{problem:"A real 2-clock FIFO must be easy to synthesize and time: only a few clearly named signals may cross, and full and empty must never be wrong.",tasks:["Read how fifo2.sv is split into single-clock modules.","Run the CDC check and simulate.","Switch the pointers to binary and watch the impossible pointer values appear."],learn:"Partition a 2-clock FIFO, generate full and empty correctly, and name signals by clock domain."},"x-gls-sdf":{problem:"In gate-level simulation with SDF, the first flop of every synchronizer samples an asynchronous input, so its setup/hold check fails now and then. The notifier makes Q unknown and the X spreads through the design, although silicon would just settle to 0 or 1.",tasks:["Simulate and read the timing violations and the X on b_cnt.","Turn timing checks off on sync1_reg only, with `define IGNORE_SYNC_TCHECK.","Simulate again: no X, and every other flop is still checked."],learn:"Why synchronizer first stages need a timing-check exception in GLS, and why only those."},"x-recon":{problem:"Two separately synchronized controls meet in a state machine. The CDC check flagged the reconvergence and the designer waived it with a reason that turns out to be false. Zero-delay simulation passes; metastability injection makes the FSM take the wrong branch.",tasks:["Run the CDC check and read the WAIVED entry.","Simulate with the metastability model and count wrong branches.","Turn the model off, then read what A_WAIVER says."],learn:"How a wrong waiver hides a real CDC bug, and why every waiver needs an assertion."},"x-recon-fix":{problem:"The same command, designed so nothing can reconverge: one control signal crosses, and the mode is qualified data loaded when that control arrives.",tasks:["Run the CDC check: clean, no waiver.","Simulate with the same commands and seed as lab 6.","Read A_STABLE: the condition that keeps the qualified capture safe."],learn:"Fix reconvergence with one synchronized control and qualified data (or consolidation, or Gray coding)."}};function Xe(e,n){let t=document.getElementById("lab-brief");if(!t)return;let a=e[n];if(!a){t.hidden=!0;return}t.querySelector(".brief-problem").textContent=a.problem;let i=t.querySelector(".brief-tasks");i.innerHTML="";for(let o of a.tasks){let u=document.createElement("li");u.textContent=o,i.appendChild(u)}t.querySelector(".brief-learn").textContent=a.learn;let r=t.querySelector(".brief-fig"),c=a.images||(a.image?[{src:a.image,alt:a.imageAlt||""}]:[]);if(c.length||a.html){if(r||(r=document.createElement("figure"),r.className="brief-fig",t.appendChild(r)),r.innerHTML="",c.length){let o=document.createElement("div");o.className="brief-imgs";for(let u of c){let v=document.createElement("a");v.href=u.src,v.target="_blank",v.rel="noopener";let _=document.createElement("img");_.src=u.src,_.alt=u.alt||"",_.loading="lazy",v.appendChild(_),o.appendChild(v)}r.appendChild(o)}if(a.html){let o=document.createElement("div");o.className="brief-html",o.innerHTML=a.html,r.appendChild(o)}if(a.caption){let o=document.createElement("figcaption");o.textContent=a.caption,r.appendChild(o)}}else r&&r.remove();t.hidden=!1}var K=[{id:"cdc",group:"CDC workshop",title:"CDC workshop",note:"9 labs that follow the 5-day clock domain crossing workshop: clocks, synchronizers, MTBF, pulse and bus synchronizers, reset, handshake, async FIFO and assertions. Each lab has a quiz."},{id:"expert",group:"Expert CDC & FIFO",title:"Expert CDC & FIFO (SystemVerilog)",note:"7 expert labs: consolidation with a metastability simulation model, MCP formulation with acknowledge, Gray code counters, a partitioned 2-clock FIFO, gate-level simulation with SDF and synchronizer timing checks, and reconvergence in a state machine (waived by mistake, then fixed). Each lab has a quiz."}],I=[{id:"cdc-clocks",group:"CDC workshop",tag:"Day 1 \xB7 Lab 1",title:"Clocks and clock domains",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 1: identify the clocks. Day 1, synchronous and asynchronous clocks.
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
`},quiz:[{type:"number",q:"How many cautions and violations does the CDC check report?",answer:0,tol:0,unit:"",explain:"a_mode is now qualified data, loaded by an enable from the one synchronized signal.",try:!1},{type:"choice",q:"How is a_mode \u2192 b_mode_q classified?",options:["2-flop synchronizer","Qualified by synchronized enable","Reconvergence","Unsynchronized crossing"],answer:1,explain:"",try:!1},{type:"number",q:"Simulate. How many commands take the wrong branch, with the same commands and seed as lab 6?",answer:0,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does A_STABLE check?",options:["The clock period","That a_mode has not changed in the last bclk period when bclk loads it: the condition that makes the qualified capture safe","That start is synchronized","The FSM encoding"],answer:1,explain:"",try:!1},{type:"choice",q:"Which other fix would also remove this reconvergence?",options:["Encode start and mode so only one bit changes per step (Gray coded command), or consolidate them into one signal in aclk","Add a third synchronizer flop","Waive it","Use a faster bclk"],answer:0,explain:"Consolidation (Expert lab 1) and Gray coding (Expert lab 3) both make one change cross at a time.",try:!1}]}];var be=new Set(["$dff","$dffe","$adff","$adffe","$sdff","$sdffe","$sdffce","$dffsr","$dffsre","$aldff","$aldffe","$dlatch","$adlatch","$dlatchsr"]),Je=new Set(["$pos","$buf","$_BUF_"]);function En(e){let n={clocks:new Map,generated:[],groups:[],inputs:new Map,notes:[]},t=(e||"").replace(/\\\n/g," ").split(`
`),a=r=>(r||"").replace(/[{}]/g," ").trim().split(/\s+/).filter(Boolean),i=(r,c)=>{let o=[],u=new RegExp("\\[\\s*"+c+"\\s+([^\\]]+)\\]","g"),v;for(;v=u.exec(r);)o.push(...a(v[1]));return o};return t.forEach((r,c)=>{let o=r.replace(/#.*$/,"").trim();if(!o)return;let u=o.split(/\s+/)[0],v=_=>{let g=new RegExp("-"+_+"\\s+(\\{[^}]*\\}|\\S+)").exec(o);return g?g[1].replace(/[{}]/g,"").trim():null};if(u==="create_clock"){let _=i(o,"get_ports"),g=v("name")||_[0];if(!g||!_.length){n.notes.push(`line ${c+1}: create_clock needs [get_ports ...]`);return}n.clocks.set(g,{name:g,port:_[0],period:parseFloat(v("period"))||null})}else if(u==="create_generated_clock"){let _=i(o,"get_ports")[0],g=[...i(o,"get_pins"),...i(o,"get_nets")],y=v("name")||g[0];n.generated.push({name:y,sourcePort:_,pin:(g[0]||"").replace(/\/Q$/,"")})}else if(u==="set_clock_groups"){let _=[],g=/-group\s+(\{[^}]*\}|\S+)/g,y;for(;y=g.exec(o);)_.push(a(y[1]));n.groups.push({type:/-asynchronous/.test(o)?"async":/-physically_exclusive|-logically_exclusive/.test(o)?"exclusive":"async",groups:_})}else if(u==="set_input_delay"){let _=v("clock");for(let g of i(o,"get_ports"))n.inputs.set(g,_)}else/^(set_output_delay|set_false_path|set_max_delay|set_min_delay|set_multicycle_path|set_load|set_driving_cell|set_input_transition|set_clock_uncertainty|set_clock_latency|set_bus_skew)$/.test(u)||n.notes.push(`line ${c+1}: ${u} is not used by the CDC check`)}),n}function xn(e){let n=new Map,t=o=>o.startsWith("$")?9:0;for(let[o,u]of Object.entries(e.netnames||{})){if(u.hide_name)continue;let v=u.offset||0,_=u.bits.length;u.bits.forEach((g,y)=>{if(typeof g!="number")return;let k=_>1||v?`${o}[${u.upto?v+_-1-y:v+y}]`:o,x=n.get(g);(!x||t(o)<t(x.n)||t(o)===t(x.n)&&Cn(o,x.n,e,g))&&n.set(g,{n:o,nm:k})})}let a=new Map;for(let[o,u]of Object.entries(e.ports||{}))u.bits.forEach((v,_)=>{typeof v=="number"&&a.set(v,{port:o,dir:u.direction,nm:u.bits.length>1?`${o}[${_}]`:o})});let i=new Map,r=new Map,c=(o,u)=>{r.has(o)||r.set(o,[]),r.get(o).push(u)};for(let[o,u]of Object.entries(e.cells||{})){let v=u.port_directions||{};for(let[_,g]of Object.entries(u.connections)){let y=v[_]?v[_]==="output":/^(Y|Q|X)$/.test(_);g.forEach((k,x)=>{typeof k=="number"&&(y?i.set(k,{cell:o,pin:_,i:x}):c(k,{cell:o,pin:_,i:x}))})}}for(let[o,u]of a)u.dir==="input"?i.set(o,{port:u.port,nm:u.nm}):c(o,{port:u.port,nm:u.nm});return{names:n,portBits:a,driver:i,sinks:r}}function Cn(e,n,t,a){let i=r=>!!(t.ports||{})[r];return i(e)!==i(n)?!i(e):e.length<n.length}function tn(e,n,t,a){let i=En(n),r=t&&e.modules[t]?t:Object.keys(e.modules).find(s=>e.modules[s].attributes&&e.modules[s].attributes.top)||Object.keys(e.modules)[0],c=e.modules[r],o=xn(c),u=c.cells||{},v=s=>typeof s!="number"?`1'b${s}`:(o.names.get(s)||{}).nm||(o.portBits.get(s)||{}).nm||`net${s}`,_=[],g=[...i.notes],y=[],k=new Map;for(let[s,d]of Object.entries(u)){if(!be.has(d.type))continue;let h=d.connections,p=d.parameters||{},m=h.CLK?"CLK":"EN",w=d.type.includes("latch");(h.Q||[]).forEach((S,f)=>{let q={cell:s,type:d.type,i:f,q:S,d:(h.D||[])[f],clk:h[m]&&h[m][0],en:!w&&h.EN?h.EN[0]:null,arst:h.ARST?h.ARST[0]:h.CLR?h.CLR[f]:null,srst:h.SRST?h.SRST[0]:null,latch:w,name:v(S)};y.push(q),k.set(S,q)})}let x=(s,d=new Set)=>{if(d.has(s))return null;d.add(s);let h=o.driver.get(s);if(!h)return null;if(h.port)return{port:h.port,inverted:!1};let p=u[h.cell];if(Je.has(p.type)||p.type==="$not"||p.type==="$_NOT_"){let m=x(p.connections.A[h.i]??p.connections.A[0],d);return m&&{...m,inverted:m.inverted!==(p.type.includes("NOT")||p.type==="$not")}}return k.has(s)?{reg:k.get(s)}:{gate:h.cell}},L=new Map([...i.clocks.values()].map(s=>[s.port,s.name])),C=new Map;for(let s of i.clocks.values())C.set(s.name,{name:s.name,kind:"primary",port:s.port,period:s.period});let z=new Map,W=new Set,X=(s,d=0)=>{if(z.has(s))return z.get(s);let h=null,p=s.clk!==void 0?x(s.clk):null;if(p&&p.port)h=L.get(p.port)||null,h||(W.add(p.port),h="unclocked:"+p.port,C.has(h)||C.set(h,{name:h,kind:"unclocked",port:p.port}));else if(p&&p.reg&&d<8){let m=X(p.reg,d+1),w=i.generated.find(f=>f.pin===p.reg.name||f.pin===p.reg.name.replace(/\[\d+\]$/,"")),S=w?w.name:p.reg.name;C.has(S)||C.set(S,{name:S,kind:w?"generated":"inferred",master:m,from:p.reg.name}),!w&&!g.some(f=>f.includes(p.reg.name))&&g.push(`${p.reg.name} drives clock pins: treated as a clock generated from ${m} (add create_generated_clock to name it)`),h=S}else p&&p.gate&&(h="gated:"+p.gate,C.has(h)||C.set(h,{name:h,kind:"unknown"}));return z.set(s,h),h};y.forEach(s=>s.dom=X(s));for(let s of W)_.push({sev:"violation",rule:"Missing clock",dst:s,msg:`Port ${s} clocks registers but has no create_clock. Define the clock so its crossings can be checked.`});let M=s=>{let d=C.get(s),h=0;for(;d&&d.master&&h++<10;)d=C.get(d.master);return d?d.name:s},F=new Set,J=(s,d)=>{if(s===d)return!0;let h=M(s),p=M(d);if(h===p)return!0;for(let w of i.groups){let S=w.groups.findIndex(q=>q.includes(s)||q.includes(h)),f=w.groups.findIndex(q=>q.includes(d)||q.includes(p));if(S>=0&&f>=0)return S===f}let m=[h,p].sort().join(" / ");return F.has(m)||(F.add(m),_.push({sev:"caution",rule:"Clock relationship assumed",dst:m,msg:`No set_clock_groups relates ${h} and ${p}: treated as asynchronous (the safe CDC default).`})),!1},ee=s=>i.inputs.get(s)||null,A=(s,d=!0)=>{let h={regs:new Set,ports:new Set,logic:!1,muxSel:[],gates:0},p=new Set,m=w=>{if(typeof w!="number"||p.has(w))return;if(p.add(w),k.has(w)&&d){h.regs.add(k.get(w));return}let S=o.driver.get(w);if(!S)return;if(S.port){h.ports.add(S.port);return}let f=u[S.cell];if(!be.has(f.type)){if(Je.has(f.type)||(h.logic=!0,h.gates++),f.type==="$mux"||f.type==="$_MUX_"||f.type==="$pmux"){h.muxSel.push(...f.connections.S||[]);let q=f.parameters&&parseInt(f.parameters.WIDTH,2)||1;for(let D of["A","B"]){let G=f.connections[D]||[];f.type==="$pmux"?G.forEach(m):m(G[S.i]!==void 0?G[S.i]:G[0])}(f.connections.S||[]).forEach(m);return}for(let[q,D]of Object.entries(f.connections)){if((f.port_directions||{})[q]==="output"||/^(Y|Q)$/.test(q))continue;/^\$(and|or|xor|xnor|not|pos|buf|_AND_|_OR_|_XOR_|_NOT_)$/.test(f.type)&&D.length>S.i?m(D[S.i]):D.forEach(m)}}};return m(s),h},H=(s,d)=>{if(s.reg)return s.reg.dom&&d&&!J(s.reg.dom,d);let h=ee(s.port);return h?!J(h,d):!0},Y=s=>s.reg?s.reg.dom:ee(s.port)||`async input ${s.port}`,j=s=>{let d=o.sinks.get(s.q)||[],h=d.map(p=>p.cell&&u[p.cell]&&be.has(u[p.cell].type)&&p.pin==="D"?y.find(m=>m.cell===p.cell&&m.i===p.i):null);return{all:d,sameClock:h.filter(p=>p&&p.dom===s.dom&&p.clk===s.clk),other:d.length-h.filter(Boolean).length}},U=new Map,N=new Map,ne=[];for(let s of y){if(!s.dom||s.latch)continue;let d=A(s.d),h=[...[...d.regs].map(q=>({reg:q})),...[...d.ports].map(q=>({port:q}))].filter(q=>H(q,s.dom));if(!h.length)continue;let p=j(s),m=p.sameClock.find(q=>{let D=A(q.d);return!D.logic&&D.regs.size===1&&[...D.regs][0]===s});if(!m)continue;let w=[s],S=m;for(;S&&w.length<6;){let q=A(S.d);if(q.logic||q.regs.size!==1||[...q.regs][0]!==w[w.length-1])break;w.push(S);let D=j(S);S=D.sameClock.length===1&&D.all.length===1?D.sameClock[0]:null}let f={first:s,stages:w,srcs:h,cone:d,fanout:p.all.length};ne.push(f),U.set(s,f),w.slice(1).forEach(q=>N.set(q.q,f))}let ze=s=>{let d=new Set,h=new Set,p=m=>{if(typeof m!="number"||h.has(m)||(h.add(m),N.has(m)&&d.add(N.get(m)),k.has(m)))return;let w=o.driver.get(m);if(!w||w.port)return;let S=u[w.cell];if(!be.has(S.type))for(let[f,q]of Object.entries(S.connections))(S.port_directions||{})[f]==="output"||/^(Y|Q)$/.test(f)||q.forEach(p)};return p(s),d},Z=[];for(let s of y){if(!s.dom)continue;let d=A(s.d),h=s.en!==null&&s.en!==void 0?A(s.en):null,m=[...[...d.regs].map(E=>({reg:E})),...[...d.ports].map(E=>({port:E})),...h?[...h.regs].map(E=>({reg:E})):[]].filter(E=>!(E.reg&&N.has(E.reg.q)&&E.reg.dom===s.dom)).filter(E=>H(E,s.dom)&&!(E.port&&/rst|reset/i.test(E.port)&&!1));if(!m.length)continue;let w=[...new Set(m.map(E=>E.reg?E.reg.name:E.port))],S=[...new Set(m.map(Y))],f=U.get(s),q={src:w.join(", "),dst:s.name,srcDom:S.join(", "),dstDom:s.dom,srcBase:w.map(se).join(","),dstBase:se(s.name)};if(f){d.logic?Z.push({...q,sev:"violation",rule:"Logic before synchronizer",msg:`Combinational logic (${d.gates} gate${d.gates>1?"s":""}) drives the first synchronizer stage. A glitch can be captured as a false pulse. Register the signal in the source domain first.`}):f.fanout>1?Z.push({...q,sev:"violation",rule:"First stage fans out",msg:`The first synchronizer stage also drives other logic (${f.fanout} loads). Its output can be metastable: only the next flop may use it.`}):f.stages.length<2?Z.push({...q,sev:"violation",rule:"Single-flop synchronizer",msg:"Only one flop: not enough time for metastability to resolve."}):Z.push({...q,sev:"ok",rule:`${f.stages.length}-flop synchronizer`,msg:`Synchronized by ${f.stages.map(E=>E.name).join(" \u2192 ")}.`});continue}let D=new Set;for(let E of d.muxSel)for(let ye of ze(E))D.add(ye);if(s.en!==null&&s.en!==void 0)for(let E of ze(s.en))D.add(E);let G=j(s);if(D.size){let E=[...D].map(ye=>ye.stages[ye.stages.length-1].name);Z.push({...q,sev:"ok",rule:"Qualified by synchronized enable",msg:`Captured only when ${[...new Set(E)].join(", ")} (synchronized) says the data is stable. Keep the data stable while the enable is active: check it in simulation.`})}else G.sameClock.length===1&&G.all.length===1?Z.push({...q,sev:"violation",rule:"Logic before synchronizer",msg:"This register starts a synchronizer chain, but its input comes through logic. Register the signal in the source domain first."}):Z.push({...q,sev:"violation",rule:"Unsynchronized crossing",msg:`Asynchronous data is used directly in ${s.dom}. The flop can go metastable and pass a wrong value on. Add a synchronizer, a handshake or a FIFO.`})}let je=ne.filter(s=>s.stages.length>=2),_e=new Map;for(let s of je){let d=s.srcs[0],h=d.reg?d.reg.name:d.port,p=`${se(h)}|${Y(d)}|${s.first.dom}`;_e.has(p)||_e.set(p,[]),_e.get(p).push(s)}let Ue=new Map;for(let[s,d]of _e){if(d.length<2)continue;let[h,p,m]=s.split("|");d.forEach(w=>Ue.set(w,s)),_.push({sev:"caution",rule:"Bus synchronized bit by bit",src:`${h} (${d.length} bits)`,dst:se(d[0].first.name),srcDom:p,dstDom:m,msg:`${d.length} bits of ${h} each have their own synchronizer. Bits can arrive in different cycles, so this is only safe if ${h} changes one bit at a time (Gray code). Otherwise use a handshake or a FIFO.`})}let Ke=new Set,vn=[...y.map(s=>({bit:s.d,name:s.name,dom:s.dom})),...[...o.portBits.values()].filter(s=>s.dir==="output").map(s=>({bit:[...o.portBits.entries()].find(([,d])=>d===s)[0],name:s.nm,dom:null}))];for(let s of vn){let d=[...ze(s.bit)],h=new Map;for(let p of d){let m=p.first.dom+"|"+Y(p.srcs[0]);h.has(m)||h.set(m,new Set),h.get(m).add(p)}for(let[p,m]of h){if(m.size<2)continue;let w=[...m];if(new Set(w.map(E=>Ue.get(E)||E)).size<2)continue;let f=w.map(E=>E.stages[E.stages.length-1].name).sort(),q=f.join(",");if(Ke.has(q))continue;Ke.add(q);let[D,G]=p.split("|");_.push({sev:"caution",rule:"Reconvergence",src:f.join(", "),dst:s.name,srcDom:G,dstDom:D,msg:`Separately synchronized signals meet in logic at ${s.name}. They can arrive one cycle apart, so the combination can be briefly wrong. Synchronize one control signal instead, or use Gray coding.`})}}let te=new Set;for(let s of y){if(s.arst===null||s.arst===void 0)continue;let d=A(s.arst),h=d.ports.size&&!d.regs.size,p=A(s.d),m=typeof s.d!="number"||!p.regs.size&&!p.ports.size||p.regs.size&&!p.ports.size&&[...p.regs].every(w=>te.has(w)&&w.dom===s.dom);h&&m&&te.add(s)}for(let s=0;s<3;s++)for(let d of y){if(te.has(d)||d.arst==null)continue;let h=A(d.arst),p=A(d.d);h.ports.size&&!h.regs.size&&[...p.regs].length&&[...p.regs].every(m=>te.has(m)&&m.dom===d.dom)&&te.add(d)}let le=new Map;for(let s of y){if(s.arst===null||s.arst===void 0||te.has(s))continue;let d=A(s.arst),h=[...d.regs],p;if(h.length&&h.every(f=>te.has(f)&&f.dom===s.dom))p={sev:"ok",rule:"Synchronized reset",msg:`Reset deasserts in step with ${s.dom} through the reset synchronizer ${h.map(f=>f.name).join(", ")}.`};else if(h.some(f=>f.dom&&s.dom&&!J(f.dom,s.dom)))p={sev:"violation",rule:"Reset crosses domains",msg:`The reset comes from ${h.map(f=>f.name).join(", ")} in another clock domain (${h[0].dom}). Use a reset synchronizer in ${s.dom}.`};else{if(d.ports.size&&[...d.ports].every(f=>ee(f)&&s.dom&&J(ee(f),s.dom)))continue;d.ports.size&&(p={sev:"caution",rule:"Reset not synchronized",msg:`Asynchronous reset ${[...d.ports].join(", ")} goes straight to these registers. Its release is not synchronized to ${s.dom}, so flops can leave reset in different cycles. Use a reset synchronizer, or, if the reset comes from a synchronizer outside this block, say so with set_input_delay -clock ${s.dom} on the reset port.`})}if(!p)continue;let m=p.rule==="Reset not synchronized",w=p.rule+"|"+(m?[...d.ports].join(","):se(s.name))+"|"+s.dom,S=h.length?h.map(f=>f.name).join(", "):[...d.ports].join(", ");le.has(w)||le.set(w,{...p,src:S,dst:s.name,dstDom:s.dom,srcDom:h.length?h[0].dom:"reset input",bits:0,dstBase:se(s.name),bases:new Set}),le.get(w).bits++,le.get(w).bases.add(se(s.name))}let ge=new Map;for(let s of Z){let d=[s.sev,s.rule,s.dstBase,s.srcBase,s.dstDom].join("|");ge.has(d)||ge.set(d,{...s,bits:0,srcSet:new Set,dstSet:new Set});let h=ge.get(d);h.bits++,s.src.split(", ").forEach(p=>h.srcSet.add(p)),h.dstSet.add(s.dst)}let Ne=[...ge.values()].map(s=>({...s,src:nn([...s.srcSet]),dst:nn([...s.dstSet])})),qn=[...le.values()].map(s=>({...s,dst:s.bases.size>1?`${s.bits} flops (${[...s.bases].slice(0,4).join(", ")}${s.bases.size>4?", \u2026":""})`:s.bits>1?`${s.dstBase} (${s.bits} bits)`:s.dst})),fe=[...Ne,..._.filter(s=>s.rule!=="Clock relationship assumed"),...qn,..._.filter(s=>s.rule==="Clock relationship assumed")],Sn=An(a||"");for(let s of Sn){for(let d of fe)d.sev==="ok"||d.sev==="waived"||d.rule.toLowerCase()===s.rule.toLowerCase()&&(s.from&&!en(s.from,d.src)||s.to&&!en(s.to,d.dst)||(d.waivedFrom=d.sev,d.sev="waived",d.reason=s.reason,s.used=(s.used||0)+1));s.used||g.push(`Waiver on line ${s.line} (${s.rule}) matched nothing: remove it or fix its -from/-to.`)}let Qe={violation:0,caution:1,waived:2,ok:3};fe.sort((s,d)=>Qe[s.sev]-Qe[d.sev]);let Oe=new Map;for(let s of y)s.dom&&Oe.set(s.dom,(Oe.get(s.dom)||0)+1);let Ze=[...C.values()].map(s=>({...s,regs:Oe.get(s.name)||0,root:M(s.name)})),me=s=>fe.filter(d=>d.sev===s).length;return{top:r,clocks:Ze,rows:fe,notes:g,summary:{domains:Ze.filter(s=>s.regs>0).length,crossings:Ne.reduce((s,d)=>s+d.bits,0),crossingRegs:Ne.length,violations:me("violation"),cautions:me("caution"),ok:me("ok"),waived:me("waived"),synchronizers:je.length}}}function An(e){let n=[];return e.split(`
`).forEach((t,a)=>{let i=t.replace(/#.*$/,"").trim();if(!/^waive\b/.test(i))return;let r=o=>{let u=new RegExp(`-${o}\\s+(?:"([^"]*)"|\\{([^}]*)\\}|(\\S+))`).exec(i);return u?u[1]??u[2]??u[3]:null},c=r("rule");c&&n.push({rule:c,from:r("from"),to:r("to"),reason:r("reason")||"(no reason given)",line:a+1})}),n}function en(e,n){return new RegExp("(^|[\\s,(/])"+e.split("*").map(a=>a.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join("[^\\s,]*")+"($|[\\s,)\\[])").test(String(n||""))}function se(e){return String(e).replace(/\[\d+\]$/,"")}function nn(e){let n=new Map;for(let t of e){let a=/^(.*)\[(\d+)\]$/.exec(t),i=a?a[1]:t;n.has(i)||n.set(i,[]),a&&n.get(i).push(+a[2])}return[...n.entries()].map(([t,a])=>a.length>1?`${t}[${Math.max(...a)}:${Math.min(...a)}]`:a.length===1?`${t}[${a[0]}]`:t).join(", ")}function sn(e){let n=[],t=(c,o)=>String(c).padEnd(o);n.push(`CDC report for ${e.top}`),n.push(""),n.push("Clock domains"),n.push("  "+t("Clock",16)+t("Kind",12)+t("Source",18)+"Registers");for(let c of e.clocks)n.push("  "+t(c.name,16)+t(c.kind,12)+t(c.port||(c.master?"from "+c.master:"-"),18)+c.regs);n.push("");let a=e.summary;n.push(`Summary: ${a.crossings} crossing bit(s) into ${a.crossingRegs} register group(s), ${a.synchronizers} synchronizer(s)`),n.push(`         ${a.violations} violation(s), ${a.cautions} caution(s), ${a.waived?a.waived+" waived, ":""}${a.ok} OK`),n.push("");let i={violation:"VIOLATION",caution:"CAUTION  ",waived:"WAIVED   ",ok:"OK       "},r=0;for(let c of e.rows)r++,n.push(`${i[c.sev]} ${r}. ${c.rule}`),c.src&&n.push(`    from ${c.src}${c.srcDom?"  ("+c.srcDom+")":""}`),c.dst&&n.push(`    to   ${c.dst}${c.dstDom?"  ("+c.dstDom+")":""}`),n.push(`    ${c.msg}`),c.sev==="waived"&&n.push(`    Waived (was ${c.waivedFrom}): ${c.reason}`),n.push("");if(e.rows.length||n.push("No clock domain crossings found."),e.notes.length){n.push("Notes");for(let c of e.notes)n.push("  - "+c)}return n}function rn(e){let n=[],t=new Map,a=[],i="",r=0,c=e.split(/\s+/),o=!0,u=0,v=0;for(;r<c.length;){let _=c[r++];if(!_)continue;if(o){if(_==="$scope"){for(r++,a.push(c[r++]);c[r]!=="$end";)r++;r++}else if(_==="$upscope"){for(a.pop();c[r]!=="$end";)r++;r++}else if(_==="$timescale"){let y=[];for(;c[r]!=="$end";)y.push(c[r++]);r++,i=y.join("")}else if(_==="$var"){let y=c[r++],k=parseInt(c[r++],10),x=c[r++],L=[];for(;c[r]!=="$end";)L.push(c[r++]);r++;let C=L[0];L[1]&&L[1].startsWith("[")&&(C+=L[1]);let z=[...a,C].join(".");if(y==="parameter")continue;if(t.has(x)){t.get(x).aliases.push(z);continue}let W=[...a.slice(1),C].join("."),X={id:x,name:z,short:W||C,depth:a.length,width:k,type:y,changes:[],aliases:[]};t.set(x,X),n.push(X)}else if(_==="$enddefinitions"){for(;c[r]!=="$end";)r++;r++,o=!1}else if(_.startsWith("$")){for(;r<c.length&&c[r]!=="$end";)r++;r++}continue}let g=_[0];if(g==="#")u=Number(_.slice(1)),u>v&&(v=u);else if(g!=="$")if(g==="b"||g==="B"||g==="r"||g==="R"){let y=_.slice(1),k=c[r++],x=t.get(k);x&&an(x,u,g==="r"||g==="R"?Number(y):y)}else{let y=t.get(_.slice(1));y&&an(y,u,g.toLowerCase())}}return{signals:n,timescale:i,endTime:v}}function an(e,n,t){let a=e.changes;a.length&&a[a.length-1][0]===n?a[a.length-1][1]=t:(!a.length||a[a.length-1][1]!==t)&&a.push([n,t])}function cn(e,n){let t=e.changes,a=0,i=t.length-1,r=-1;for(;a<=i;){let c=a+i>>1;t[c][0]<=n?(r=c,a=c+1):i=c-1}return r<0?null:t[r][1]}function We(e,n,t){if(n==null)return"";if(typeof n=="number")return String(+n.toPrecision(6));if(e.width===1)return n;let a=n.padStart(e.width,n[0]==="x"||n[0]==="z"?n[0]:"0");if(/[xz]/i.test(a))return/^x+$/i.test(a)?"x":/^z+$/i.test(a)?"z":t==="bin"?a:"x";if(t==="bin")return a;let i=BigInt("0b"+a);if(t==="dec")return i.toString(10);if(t==="sdec"){let r=BigInt(e.width);return(a[0]==="1"?i-(1n<<r):i).toString(10)}return i.toString(16).toUpperCase().padStart(Math.ceil(e.width/4),"0")}var ke=class{constructor(n,t){this.c=n,this.ctx=n.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=t.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=t.theme,n.addEventListener("mousedown",a=>this.click(a)),n.addEventListener("wheel",a=>this.wheel(a),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(n.parentElement)}setData(n){this.data=n,this.cursor=null,this.t0=0,this.t1=Math.max(1,n.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(n,t){if(!this.data)return;let a=this.t1-this.t0,i=t??this.cursor??this.t0+a/2,r=Math.min(Math.max(a*n,2),Math.max(1,this.data.endTime)*1.05),c=i-(i-this.t0)*(r/a);c=Math.max(0,Math.min(c,Math.max(0,this.data.endTime-r))),this.t0=c,this.t1=c+r,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(n){if(!this.data)return;let t=this.t1-this.t0,a=this.t0+t*n;a=Math.max(0,Math.min(a,Math.max(0,this.data.endTime-t))),this.t0=a,this.t1=a+t,this.draw()}xOf(n,t){return this.nameW+(n-this.t0)/(this.t1-this.t0)*(t-this.nameW-8)}tOf(n,t){return this.t0+(n-this.nameW)/(t-this.nameW-8)*(this.t1-this.t0)}click(n){if(!this.data)return;let t=this.c.getBoundingClientRect(),a=n.clientX-t.left;a<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(a,t.width))),this.draw(),this.onCursor(this.cursor))}wheel(n){if(!this.data)return;let t=this.c.getBoundingClientRect();n.ctrlKey||n.metaKey||Math.abs(n.deltaY)>Math.abs(n.deltaX)&&n.shiftKey===!1&&n.altKey?(n.preventDefault(),this.zoom(n.deltaY>0?1.25:.8,this.tOf(n.clientX-t.left,t.width))):(Math.abs(n.deltaX)>Math.abs(n.deltaY)||n.shiftKey)&&(n.preventDefault(),this.pan((n.deltaX||n.deltaY)/600))}draw(){let n=this.theme(),a=this.c.parentElement.clientWidth;this.nameW=a<640?112:190;let i=this.data?this.data.signals:[],r=this.axisH+Math.max(i.length,3)*this.rowH+8,c=window.devicePixelRatio||1;this.c.style.width=a+"px",this.c.style.height=r+"px",this.c.width=Math.round(a*c),this.c.height=Math.round(r*c);let o=this.ctx;if(o.setTransform(c,0,0,c,0,0),o.fillStyle=n.bg,o.fillRect(0,0,a,r),o.font="12px 'JetBrains Mono', ui-monospace, monospace",o.textBaseline="middle",!this.data){o.fillStyle=n.muted,o.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,r/2);return}let u=this.t1-this.t0,v=(a-this.nameW)/110,_=u/Math.max(1,v),g=Math.pow(10,Math.floor(Math.log10(_))),y=[1,2,5,10].map(k=>k*g).find(k=>k>=_)||g*10;o.strokeStyle=n.grid,o.fillStyle=n.muted,o.lineWidth=1;for(let k=Math.ceil(this.t0/y)*y;k<=this.t1;k+=y){let x=Math.round(this.xOf(k,a))+.5;o.beginPath(),o.moveTo(x,this.axisH-6),o.lineTo(x,r),o.stroke(),o.fillText(we(k,this.data.timescale),x+3,11)}if(o.strokeStyle=n.line,o.beginPath(),o.moveTo(0,this.axisH+.5),o.lineTo(a,this.axisH+.5),o.stroke(),i.forEach((k,x)=>{let L=this.axisH+x*this.rowH,C=L+6,z=L+this.rowH-6,W=(C+z)/2;o.fillStyle=x%2?n.rowAlt:n.bg,o.fillRect(0,L+1,a,this.rowH-1),o.fillStyle=n.text;let X=k.short+(k.width>1&&!k.short.includes("[")?` [${k.width-1}:0]`:"");o.fillText(on(o,X,this.nameW-16),10,W),o.save(),o.beginPath(),o.rect(this.nameW,L,a-this.nameW,this.rowH),o.clip();let M=k.changes;for(let F=0;F<M.length;F++){let J=M[F][0],ee=F+1<M.length?M[F+1][0]:this.data.endTime;if(ee<this.t0||J>this.t1)continue;let A=this.xOf(J,a),H=this.xOf(ee,a),Y=M[F][1];if(k.width===1&&typeof Y=="string"){let j=Y==="x"?n.x:Y==="z"?n.z:n.wave;o.strokeStyle=j,o.lineWidth=1.5,Y==="x"&&(o.fillStyle=n.xFill,o.fillRect(A,C,H-A,z-C));let U=Y==="1"?C:Y==="0"?z:W;if(o.beginPath(),F>0){let N=M[F-1][1],ne=N==="1"?C:N==="0"?z:W;o.moveTo(A,ne)}else o.moveTo(A,U);o.lineTo(A,U),o.lineTo(H,U),o.stroke()}else{let j=We(k,Y,this.radix),U=j==="x"||j==="z";o.strokeStyle=U?n.x:n.wave,o.lineWidth=1.2,o.fillStyle=U?n.xFill:n.busFill;let N=Math.min(4,(H-A)/2);o.beginPath(),o.moveTo(A,W),o.lineTo(A+N,C),o.lineTo(H-N,C),o.lineTo(H,W),o.lineTo(H-N,z),o.lineTo(A+N,z),o.closePath(),o.fill(),o.stroke();let ne=H-A-10;ne>14&&(o.fillStyle=n.text,o.fillText(on(o,j,ne),Math.max(A,this.nameW)+6,W))}}o.restore()}),o.strokeStyle=n.line,o.beginPath(),o.moveTo(this.nameW+.5,0),o.lineTo(this.nameW+.5,r),o.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let k=Math.round(this.xOf(this.cursor,a))+.5;o.strokeStyle=n.cursor,o.lineWidth=1.5,o.beginPath(),o.moveTo(k,0),o.lineTo(k,r),o.stroke()}}};function on(e,n,t){if(e.measureText(n).width<=t)return n;for(;n.length>1&&e.measureText(n+"\u2026").width>t;)n=n.slice(0,-1);return n+"\u2026"}function we(e,n){let t=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(n||"");if(!t)return String(e);let a=["fs","ps","ns","us","ms","s"],i=e*Number(t[1]),r=a.indexOf(t[2]);for(;r<a.length-1&&Math.abs(i)>=1e3&&i%1e3===0;)i/=1e3,r++;return r<2&&Math.abs(i)>=1e3&&(i/=1e3,r++,i=+i.toFixed(3)),`${i} ${a[r]}`}var b=e=>document.querySelector(e),ln=3e5,_n="vdd-cdc-lab-v1",gn="vdd-cdc-quiz-v1",V="check_cdc.ys",de=new URL("/",location.href).href,l={example:I[0].id,track:K[0].id,script:V,files:{},order:[],current:V,running:!1,mode:null,timer:null,lastVcd:null},ae={yosys:null,sim:null},pe={yosys:!1,sim:!1},Tn=e=>/\.s?v$/i.test(e)&&/\$finish\b/.test(l.files[e]||""),fn=()=>[...l.order.filter(e=>/\.ys$/i.test(e)).map(e=>({value:e,label:`CDC check (${e})`})),...l.order.filter(Tn).map(e=>({value:"sim:"+e,label:`Simulate (${e})`}))];function Me(){let e=fn();return e.find(n=>n.value===l.script)||e[0]||null}function mn(){let e=b("#script"),n=fn(),t=Me();e.innerHTML="";for(let a of n){let i=document.createElement("option");i.value=a.value,i.textContent=a.label,e.appendChild(i)}t&&(e.value=t.value),b("#script-wrap").hidden=n.length<2,b("#run-label").textContent=t&&t.value.startsWith("sim:")?"Simulate":"Run CDC check"}var P=new Map,T=null,B=b("#editor textarea"),He=e=>/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain";window.CodeMirror?(T=window.CodeMirror.fromTextArea(B,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),T.on("change",()=>{l.files[l.current]=T.getValue(),Ae()})):(B.classList.add("plain-editor"),B.addEventListener("input",()=>{l.files[l.current]=B.value,Ae()}));var De=()=>{l.files[l.current]=T?T.getValue():B.value};function Ge(e){De(),l.current=e,T?(P.has(e)||P.set(e,window.CodeMirror.Doc(l.files[e]??"",He(e))),T.swapDoc(P.get(e)),setTimeout(()=>T.refresh(),0)):B.value=l.files[e]??"",Pe()}function Dn(e,n){Ge(e),T&&(T.focus(),T.setCursor({line:n-1,ch:0}),T.addLineClass(n-1,"background","cm-errline"),setTimeout(()=>T.removeLineClass(n-1,"background","cm-errline"),2500),T.scrollIntoView({line:n-1,ch:0},80))}function Fe(e,n,t){P.clear(),l.files={...e},l.order=n||Object.keys(e),l.current=t&&l.order.includes(t)?t:l.order[0],T?(P.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",He(l.current))),T.swapDoc(P.get(l.current))):B.value=l.files[l.current]??"",Pe()}function Pe(){let e=b("#tabs");e.innerHTML="";for(let n of l.order){let t=document.createElement("button");if(t.type="button",t.className="tab"+(n===l.current?" active":""),t.setAttribute("role","tab"),t.setAttribute("aria-selected",n===l.current?"true":"false"),t.textContent=n,t.addEventListener("click",()=>Ge(n)),e.appendChild(t),n===l.current&&l.order.length>1){let a=document.createElement("button");a.type="button",a.className="tab-x",a.textContent="\xD7",a.title="Remove "+n,a.setAttribute("aria-label","Remove file "+n),a.addEventListener("click",()=>Ln(n)),e.appendChild(a)}}mn()}function Ln(e){De(),delete l.files[e],P.delete(e),l.order=l.order.filter(n=>n!==e),l.current=l.order[0],T?(P.has(l.current)||P.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",He(l.current))),T.swapDoc(P.get(l.current))):B.value=l.files[l.current]??"",Pe(),Ae()}function $n(){let e=(window.prompt("New file name (for example top.v, extra.sdc):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){$("File names can use letters, digits, dot, dash and underscore only.","err");return}l.files[e]===void 0&&(l.order.push(e),l.files[e]=""),Ge(e),Ae()}}var Ee=e=>{let n=I.find(t=>t.id===e);return n?(K.find(t=>t.group===n.group)||K[0]).id:null},oe=()=>K.find(e=>e.id===l.track)||K[0];function xe(){let e=b("#tracks");e.innerHTML="";for(let n of K){let t=document.createElement("button");t.type="button",t.className="track"+(n.id===oe().id?" active":""),t.setAttribute("role","tab"),t.setAttribute("aria-selected",n.id===oe().id?"true":"false"),t.innerHTML='<span class="track-t"></span><span class="track-n"></span>',t.querySelector(".track-t").textContent=n.title,t.querySelector(".track-n").textContent=I.filter(a=>a.group===n.group).length+" labs",t.addEventListener("click",()=>Rn(n.id)),e.appendChild(t)}b("#track-note").textContent=oe().note}function Rn(e){l.track=e,xe(),Ee(l.example)!==e?ce(I.find(n=>n.group===oe().group).id):ie()}function ie(){let e=b("#examples");e.innerHTML="";for(let t of I.filter(a=>a.group===oe().group)){let a=document.createElement("button");a.type="button",a.className="ex"+(t.id===l.example?" active":""),a.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',a.querySelector(".ex-tag").textContent=t.tag;let i=t.quiz&&t.quiz.length?ue()[t.id]:null;if(i&&i.checked){let r=document.createElement("span");r.className="ex-done",r.textContent=(i.score===i.total?"\u2713 ":"")+`quiz ${i.score}/${i.total}`,a.querySelector(".ex-tag").appendChild(r)}a.querySelector(".ex-title").textContent=t.title,a.addEventListener("click",()=>ce(t.id)),e.appendChild(a)}let n=b("#ex-select");n.innerHTML=I.filter(t=>t.group===oe().group).map(t=>`<option value="${t.id}">${t.tag} \xB7 ${t.title}</option>`).join(""),l.example&&(n.value=l.example)}function ce(e){let n=I.find(t=>t.id===e)||I[0];l.example=n.id,Ee(n.id)!==l.track&&(l.track=Ee(n.id),xe()),l.script=n.script||V,Fe(n.files,Object.keys(n.files),V),ie(),Ce(),$e(),bn(),Ie(null),kn(!1),Q("Ready","idle");try{let t=new URL(location.href);t.searchParams.set("lab",n.id),t.searchParams.delete("track"),history.replaceState(null,"",t.pathname+t.search)}catch{}}function ue(){try{return JSON.parse(localStorage.getItem(gn)||"{}")||{}}catch{return{}}}function Be(e){try{localStorage.setItem(gn,JSON.stringify(e))}catch{}}var Le=()=>I.find(e=>e.id===l.example&&e.quiz&&e.quiz.length);function In(e){let n=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return n?parseFloat(n[0]):NaN}function zn(e,n){if(e.type==="choice")return n!=null&&+n===e.answer;let t=In(n);return isFinite(t)&&Math.abs(t-e.answer)<=(e.tol??.01)+1e-9}var Nn=e=>e.type==="choice"?e.options[e.answer]:`${e.answer}${e.unit?" "+e.unit:""}`;function Ce(){Xe(Ve,l.example);let e=b("#quiz"),n=b("#quiz-list"),t=Le();if(!t){e.hidden=!0;return}e.hidden=!1;let a=ue()[t.id]||{},i=a.a||[];n.innerHTML="",t.quiz.forEach((r,c)=>{let o=document.createElement("li"),u=document.createElement("div");if(u.className="quiz-q",r.try){let g=document.createElement("span");g.className="quiz-try",g.textContent="Try it",u.appendChild(g)}let v=r.q.replace(/^Try it: /,"");if(u.appendChild(document.createTextNode(v.charAt(0).toUpperCase()+v.slice(1))),o.appendChild(u),r.type==="choice"){let g=document.createElement("div");g.className="quiz-opts",g.setAttribute("role","radiogroup"),r.options.forEach((y,k)=>{let x=document.createElement("label"),L=document.createElement("input");L.type="radio",L.name=`q${c}`,L.value=k,i[c]!==void 0&&+i[c]===k&&(L.checked=!0),L.addEventListener("change",()=>dn(t,c,k));let C=document.createElement("span");C.textContent=y,x.append(L,C),g.appendChild(x)}),o.appendChild(g)}else{let g=document.createElement("div");g.className="quiz-num";let y=document.createElement("input");if(y.type="text",y.inputMode="decimal",y.autocomplete="off",y.setAttribute("aria-label","Answer to question "+(c+1)),y.placeholder="e.g. 3",i[c]!==void 0&&(y.value=i[c]),y.addEventListener("input",()=>dn(t,c,y.value)),y.addEventListener("keydown",k=>{k.key==="Enter"&&Ye()}),g.appendChild(y),r.unit){let k=document.createElement("span");k.className="unit",k.textContent=r.unit,g.appendChild(k)}o.appendChild(g)}let _=document.createElement("div");_.className="quiz-fb",_.hidden=!0,_.setAttribute("aria-live","polite"),o.appendChild(_),n.appendChild(o)}),a.checked?Ye(!0):yn(null)}function dn(e,n,t){let a=ue(),i=a[e.id]||{a:[]};i.a=i.a||[],i.a[n]=t,i.checked=!1,a[e.id]=i,Be(a);let r=b("#quiz-list").children[n]?.querySelector(".quiz-fb");r&&(r.hidden=!0)}function yn(e,n){let t=b("#quiz-score");if(e===null){t.textContent="",t.classList.remove("done");return}t.textContent=`${e} / ${n} correct`,t.classList.toggle("done",e===n)}function Ye(e){let n=Le();if(!n)return;let t=ue(),a=t[n.id]||{a:[]};a.a=a.a||[];let i=0;n.quiz.forEach((r,c)=>{let o=b("#quiz-list").children[c],u=r.type==="choice"?(o.querySelector("input:checked")||{}).value:o.querySelector("input").value;a.a[c]=u;let v=o.querySelector(".quiz-fb"),_=u===void 0||u==="",g=!_&&zn(r,u);g&&i++,v.hidden=!1,v.className="quiz-fb "+(g?"ok":"bad"),v.innerHTML="";let y=document.createElement("b");y.textContent=g?"Correct.":_?"Not answered yet.":"Not quite.",v.appendChild(y),g&&r.explain?v.appendChild(document.createTextNode(r.explain)):!g&&!_&&v.appendChild(document.createTextNode(r.type==="number"?"Check the report or the simulation output again.":"Look at the report and the code again and try another option."))}),a.checked=!0,a.score=i,a.total=n.quiz.length,t[n.id]=a,Be(t),yn(i,n.quiz.length),e||ie()}function On(){let e=Le();e&&e.quiz.forEach((n,t)=>{let a=b("#quiz-list").children[t].querySelector(".quiz-fb");a.hidden=!1,a.className="quiz-fb shown",a.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+Nn(n)+".",a.appendChild(i),n.explain&&a.appendChild(document.createTextNode(n.explain))})}function Wn(){let e=Le();if(!e)return;let n=ue();delete n[e.id],Be(n),Ce(),ie()}var hn=null;function Ae(){clearTimeout(hn),hn=setTimeout($e,400)}function $e(){try{localStorage.setItem(_n,JSON.stringify({example:l.example,script:l.script,files:l.files,order:l.order,current:l.current}))}catch{}}function Fn(){try{let e=JSON.parse(localStorage.getItem(_n)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function Yn(){let e=JSON.stringify({f:l.files,o:l.order,s:l.script}),n=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=new Uint8Array(await new Response(n).arrayBuffer()),a="";for(let i of t)a+=String.fromCharCode(i);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Mn(e){let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=new Blob([Uint8Array.from(n,a=>a.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(t).text())}async function ve(e,n){let t=!1;try{await navigator.clipboard.writeText(e),t=!0}catch{let i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{t=document.execCommand("copy")}catch{}i.remove()}if(n){let a=n.dataset.label||n.textContent;n.dataset.label=a,n.textContent=t?"Copied":"Press Ctrl+C",n.classList.toggle("ok",t),setTimeout(()=>{n.textContent=a,n.classList.remove("ok")},1600)}}function pn(e,n){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([n],{type:"text/plain"})),t.download=e,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},500)}var he=b("#console"),Re=[];function bn(){he.textContent="",Re=[]}function $(e,n){Re.push(e);let t=document.createElement("div");t.className="ln "+(n||"");let a=/\b([\w.-]+\.(?:v|sv|ys|sdc)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|sdc)),? line (\d+)\b/.exec(e);if(a&&l.files[a[1]]!==void 0){let i=e.indexOf(a[0]);t.appendChild(document.createTextNode(e.slice(0,i)));let r=document.createElement("button");r.type="button",r.className="loc",r.textContent=a[0],r.addEventListener("click",()=>Dn(a[1],+a[2])),t.appendChild(r),t.appendChild(document.createTextNode(e.slice(i+a[0].length)))}else t.textContent=e;n||(/^VIOLATION|\bERROR\b|\berror\b|Error:|\bFAIL\b|Internal error/.test(e)?t.classList.add("err"):/^CAUTION|^Warning|\bwarning\b/i.test(e)?t.classList.add("warn"):/^OK\s|\bPASS\b/.test(e)?t.classList.add("pass"):/^(Clock domains|Summary|CDC report|Notes)/.test(e)&&t.classList.add("sec")),he.appendChild(t),he.childElementCount>2e4&&he.firstChild.remove()}function Ie(e){let n=b("#summary");if(n.innerHTML="",!e||!e.length){n.hidden=!0;return}for(let[t,a,i]of e){let r=document.createElement("div");r.className="chip "+(i||"");let c=document.createElement("span");c.className="k",c.textContent=t;let o=document.createElement("span");o.className="v",o.textContent=a,r.append(c,o),n.appendChild(r)}n.hidden=!1}function Q(e,n){let t=b("#status");t.textContent=e,t.dataset.kind=n}var O=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),R=new ke(b("#wave"),{theme:()=>({bg:O("--wave-bg"),rowAlt:O("--wave-row"),grid:O("--wave-grid"),line:O("--line"),text:O("--text"),muted:O("--muted"),wave:O("--wave"),busFill:O("--wave-bus"),x:O("--wave-x"),xFill:O("--wave-xfill"),z:O("--wave-z"),cursor:O("--accent")}),onCursor:e=>{let n=b("#wave-values");if(e===null||!R.data){n.textContent="";return}n.innerHTML="";let t=document.createElement("div");t.className="cur-time",t.textContent="Cursor @ "+we(e,R.data.timescale),n.appendChild(t);for(let a of R.data.signals){let i=document.createElement("div");i.className="cur-row";let r=document.createElement("span");r.textContent=a.name;let c=document.createElement("span");c.textContent=We(a,cn(a,e),R.radix),i.append(r,c),n.appendChild(i)}}});window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>R.draw());function kn(e){b("#wave-pane").hidden=!e,e||(R.clear(),b("#wave-values").textContent="",b("#wave-meta").textContent="")}function Te(e){ae[e]&&ae[e].terminate(),pe[e]=!1;let n=e==="yosys"?new Worker(new URL("synth/worker.js",de).href,{type:"module"}):new Worker(new URL("verilog/worker.js",de).href),t=new URL(e==="yosys"?"synth/":"verilog/",de).href;n.onmessage=a=>e==="yosys"?Hn(a.data):Gn(a.data),n.onerror=a=>{$((e==="yosys"?"Yosys":"The simulator")+" failed to start: "+(a.message||"worker error"),"err"),re(!1)},n.postMessage({type:"load",base:t}),ae[e]=n}var qe=[],Se={};function Hn(e){if(e.type==="ready")pe.yosys=!0,!l.running&&b("#status").dataset.kind==="busy"&&Q("Ready","idle");else if(e.type==="stage")l.mode==="yosys"&&Q(e.stage+"\u2026","busy");else if(e.type==="line")qe.push(e.line);else if(e.type==="file")Se[e.name]=e.content;else if(e.type==="done"&&l.mode==="yosys"){if(!e.ok||!Se["design.json"]){for(let t of qe)$(t,/ERROR/.test(t)?"err":"");$(e.ok?"\u2500\u2500 The script did not write design.json: keep the write_json design.json line \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),re(!1);return}let n=qe.filter(t=>/^Warning/.test(t));for(let t of n)$(t);$(`\u2500\u2500 Yosys read the design in ${e.ms} ms; checking clock domain crossings \u2500\u2500`,"meta");try{let t=l.order.find(o=>/\.sdc$/i.test(o)),a=(/-top\s+(\S+)/.exec(l.files[Me().value]||"")||[])[1],i=l.order.find(o=>/\.waive$/i.test(o)),r=tn(JSON.parse(Se["design.json"]),t?l.files[t]:"",a,i?l.files[i]:"");t||$("No .sdc file: every clock is treated as its own asynchronous domain.","warn");for(let o of sn(r))$(o);let c=r.summary;Ie([["Clock domains",String(c.domains)],["Crossing bits",String(c.crossings)],["Synchronizers",String(c.synchronizers)],["Violations",String(c.violations),c.violations?"bad":"good"],["Cautions",String(c.cautions),c.cautions?"warn":""],...c.waived?[["Waived",String(c.waived),"warn"]]:[]]),re(!0)}catch(t){$("CDC check failed: "+(t.message||t),"err"),re(!1)}}}function Gn(e){if(e.type==="ready")pe.sim=!0,!l.running&&b("#status").dataset.kind==="busy"&&Q("Ready","idle");else if(e.type==="stage"){if(l.mode!=="sim")return;Q(e.stage+"\u2026","busy"),e.stage==="Simulating"&&$("\u2500\u2500 simulation output \u2500\u2500","meta")}else if(e.type==="line")$(e.line.replace(/\/work\//g,""),e.stream==="err"&&/error/i.test(e.line)?"err":"");else if(e.type==="done"&&l.mode==="sim"){if(e.ok){$(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta");let n=Re.join(`
`),t=/^PASS\b/m.test(n),a=/\bFAIL\b/.test(n),i=(n.match(/\bA[1-9] (data|req)/g)||[]).length,r=[];(t||a)&&r.push(["Result",a?"FAIL":"PASS",a?"bad":"good"]),i&&r.push(["Assertion failures",String(i),"bad"]),Ie(r);let c=(e.vcd||[])[0];if(c){l.lastVcd=c,kn(!0);try{let o=rn(c.text);R.setData(o),b("#wave-meta").textContent=`${o.signals.length} signals \xB7 ${we(o.endTime,o.timescale)}`}catch(o){$("Could not read waveform: "+o.message,"err")}}}else e.phase==="compile"?$("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):e.phase==="sim"&&$(`\u2500\u2500 simulation exited with code ${e.rc} \u2500\u2500`,"meta err");re(e.ok)}}function un(){if(l.running)return;window.vddSubscribe&&window.vddSubscribe(),De(),$e();let e=Me();if(!e){$(`Add a Yosys script (${V}) or a testbench to run.`,"err");return}if(bn(),Ie(null),l.running=!0,b("#run").disabled=!0,b("#stop").disabled=!1,e.value.startsWith("sim:")){l.mode="sim";let n=e.value.slice(4),t=(/^\s*module\s+(\w+)/m.exec(l.files[n])||[])[1]||"";ae.sim||Te("sim"),Q(pe.sim?"Compiling\u2026":"Loading simulator\u2026","busy"),$(`$ iverilog -g2012 -s ${t} ${l.order.filter(i=>/\.s?v$/i.test(i)).join(" ")} && vvp`,"meta");let a={};for(let i of l.order)/\.(s?v|vh|svh|sdf)$/i.test(i)&&(a[i]=l.files[i]);ae.sim.postMessage({type:"run",files:a,std:"2012",top:t,base:new URL("verilog/",de).href})}else{l.mode="yosys",qe=[],Se={},ae.yosys||Te("yosys"),Q(pe.yosys?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),$(`$ yosys -s ${e.value}   then the CDC check with ${l.order.find(t=>/\.sdc$/i.test(t))||"no SDC"}`,"meta");let n={};for(let t of l.order)/\.vcd$/i.test(t)||(n[t]=l.files[t]);ae.yosys.postMessage({type:"run",files:n,script:e.value,dataFiles:[],base:new URL("synth/",de).href})}clearTimeout(l.timer),l.timer=setTimeout(()=>wn(`Stopped after ${ln/1e3} s.`),ln)}function wn(e){if(!l.running)return;$(e||"Stopped.","meta err");let n=l.mode;re(!1,!0),Te(n)}function re(e,n){clearTimeout(l.timer),l.running=!1,b("#run").disabled=!1,b("#stop").disabled=!0,he.scrollTop=0,Q(n?"Stopped":e?"Done":"Errors",n||!e?"err":"ok")}function Pn(){b("#run").addEventListener("click",un),b("#stop").addEventListener("click",()=>wn()),b("#script").addEventListener("change",e=>{l.script=e.target.value,mn(),$e()}),b("#new-file").addEventListener("click",$n),b("#quiz-check").addEventListener("click",()=>Ye()),b("#quiz-reveal").addEventListener("click",On),b("#quiz-reset").addEventListener("click",Wn),b("#ex-select").addEventListener("change",e=>ce(e.target.value)),b("#reset").addEventListener("click",()=>ce(l.example||I[0].id)),b("#copy-file").addEventListener("click",e=>ve(T?T.getValue():B.value,e.currentTarget)),b("#download-file").addEventListener("click",()=>pn(l.current,T?T.getValue():B.value)),b("#copy-output").addEventListener("click",e=>ve(Re.join(`
`),e.currentTarget)),b("#share").addEventListener("click",async e=>{let n=e.currentTarget;De();try{let t=await Yn();history.replaceState(null,"","#code="+t),ve(location.href.split("#")[0]+"#code="+t,n)}catch{ve(location.href,n)}}),b("#zoom-in").addEventListener("click",()=>R.zoom(.5)),b("#zoom-out").addEventListener("click",()=>R.zoom(2)),b("#zoom-fit").addEventListener("click",()=>R.fit()),b("#pan-left").addEventListener("click",()=>R.pan(-.4)),b("#pan-right").addEventListener("click",()=>R.pan(.4)),b("#radix").addEventListener("change",e=>{R.radix=e.target.value,R.draw(),R.onCursor(R.cursor)}),b("#dl-vcd").addEventListener("click",()=>{l.lastVcd&&pn("waves.vcd",l.lastVcd.text)}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),un())})}async function Bn(){Pn();let e=!1,n=new URLSearchParams(location.search),t=new URLSearchParams(location.hash.slice(1)).get("code"),a=n.get("lab"),i=n.get("track");if(l.track=K.some(r=>r.id===i)?i:K[0].id,xe(),t)try{let r=await Mn(t);l.example=null,l.script=r.s||V,Fe(r.f,r.o,V),ie(),Ce(),e=!0}catch{}if(!e&&a&&I.some(r=>r.id===a)&&(ce(a),e=!0),!e&&!i){let r=Fn();r&&I.some(c=>c.id===r.example)&&(l.example=r.example,l.track=Ee(r.example),xe(),l.script=r.script||V,Fe(r.files,r.order,r.current),ie(),Ce(),e=!0)}e||ce(I.find(r=>r.group===oe().group).id),Q("Loading Yosys\u2026","busy"),Te("yosys")}Bn();})();
