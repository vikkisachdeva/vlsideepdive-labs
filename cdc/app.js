(()=>{var Re=[{id:"cdc",group:"CDC workshop",title:"CDC workshop",note:"9 labs that follow the 5-day clock domain crossing workshop: clocks, synchronizers, MTBF, pulse and bus synchronizers, reset, handshake, async FIFO and assertions. Each lab has a quiz."}],j=[{id:"cdc-clocks",group:"CDC workshop",tag:"Day 1 \xB7 Lab 1",title:"Clocks and clock domains",script:"check_cdc.ys",files:{"check_cdc.ys":`# Lab 1: identify the clocks. Day 1, synchronous and asynchronous clocks.
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
`},quiz:[{type:"choice",q:"Run the CDC check. What does it report for the buggy design?",options:["Violations on data","0 violations: the structure is the same as lab 7","A reset violation","A caution on req"],answer:1,explain:"The bugs are in the protocol (when signals change), not in the structure. That is why we need assertions.",try:!1},{type:"number",q:"Simulate with BUG = 0: how many assertion failures are there in total?",answer:0,tol:0,unit:"",explain:"PASS: all three assertions hold.",try:!1},{type:"number",q:"Try it: set BUG = 1. How many times does A1 fail?",answer:93,tol:0,unit:"",explain:"The source keeps loading din while req is high, so data changes while the destination may be sampling it.",try:!0},{type:"number",q:"Try it: set BUG = 2. How many transfers does the destination receive?",answer:2,tol:0,unit:"",explain:"req drops after one cycle, too short for the synchronizer to see reliably: A2 fails 8 times and A3 19 times, and most words are lost.",try:!0},{type:"choice",q:"Which assertion catches a pulse that is too short to cross?",options:["A1 data stability","A2 req after ack","A3 pulse width","None"],answer:2,explain:"A3 checks that req holds for at least 2 destination clock periods.",try:!1}]}];var ge=new Set(["$dff","$dffe","$adff","$adffe","$sdff","$sdffe","$sdffce","$dffsr","$dffsre","$aldff","$aldffe","$dlatch","$adlatch","$dlatchsr"]),Ye=new Set(["$pos","$buf","$_BUF_"]);function _t(e){let t={clocks:new Map,generated:[],groups:[],inputs:new Map,notes:[]},s=(e||"").replace(/\\\n/g," ").split(`
`),n=a=>(a||"").replace(/[{}]/g," ").trim().split(/\s+/).filter(Boolean),i=(a,c)=>{let o=[],_=new RegExp("\\[\\s*"+c+"\\s+([^\\]]+)\\]","g"),q;for(;q=_.exec(a);)o.push(...n(q[1]));return o};return s.forEach((a,c)=>{let o=a.replace(/#.*$/,"").trim();if(!o)return;let _=o.split(/\s+/)[0],q=g=>{let p=new RegExp("-"+g+"\\s+(\\{[^}]*\\}|\\S+)").exec(o);return p?p[1].replace(/[{}]/g,"").trim():null};if(_==="create_clock"){let g=i(o,"get_ports"),p=q("name")||g[0];if(!p||!g.length){t.notes.push(`line ${c+1}: create_clock needs [get_ports ...]`);return}t.clocks.set(p,{name:p,port:g[0],period:parseFloat(q("period"))||null})}else if(_==="create_generated_clock"){let g=i(o,"get_ports")[0],p=[...i(o,"get_pins"),...i(o,"get_nets")],m=q("name")||p[0];t.generated.push({name:m,sourcePort:g,pin:(p[0]||"").replace(/\/Q$/,"")})}else if(_==="set_clock_groups"){let g=[],p=/-group\s+(\{[^}]*\}|\S+)/g,m;for(;m=p.exec(o);)g.push(n(m[1]));t.groups.push({type:/-asynchronous/.test(o)?"async":/-physically_exclusive|-logically_exclusive/.test(o)?"exclusive":"async",groups:g})}else if(_==="set_input_delay"){let g=q("clock");for(let p of i(o,"get_ports"))t.inputs.set(p,g)}else/^(set_output_delay|set_false_path|set_max_delay|set_min_delay|set_multicycle_path|set_load|set_driving_cell|set_input_transition|set_clock_uncertainty|set_clock_latency|set_bus_skew)$/.test(_)||t.notes.push(`line ${c+1}: ${_} is not used by the CDC check`)}),t}function yt(e){let t=new Map,s=o=>o.startsWith("$")?9:0;for(let[o,_]of Object.entries(e.netnames||{})){if(_.hide_name)continue;let q=_.offset||0,g=_.bits.length;_.bits.forEach((p,m)=>{if(typeof p!="number")return;let b=g>1||q?`${o}[${_.upto?q+g-1-m:q+m}]`:o,z=t.get(p);(!z||s(o)<s(z.n)||s(o)===s(z.n)&&mt(o,z.n,e,p))&&t.set(p,{n:o,nm:b})})}let n=new Map;for(let[o,_]of Object.entries(e.ports||{}))_.bits.forEach((q,g)=>{typeof q=="number"&&n.set(q,{port:o,dir:_.direction,nm:_.bits.length>1?`${o}[${g}]`:o})});let i=new Map,a=new Map,c=(o,_)=>{a.has(o)||a.set(o,[]),a.get(o).push(_)};for(let[o,_]of Object.entries(e.cells||{})){let q=_.port_directions||{};for(let[g,p]of Object.entries(_.connections)){let m=q[g]?q[g]==="output":/^(Y|Q|X)$/.test(g);p.forEach((b,z)=>{typeof b=="number"&&(m?i.set(b,{cell:o,pin:g,i:z}):c(b,{cell:o,pin:g,i:z}))})}}for(let[o,_]of n)_.dir==="input"?i.set(o,{port:_.port,nm:_.nm}):c(o,{port:_.port,nm:_.nm});return{names:t,portBits:n,driver:i,sinks:a}}function mt(e,t,s,n){let i=a=>!!(s.ports||{})[a];return i(e)!==i(t)?!i(e):e.length<t.length}function Qe(e,t,s){let n=_t(t),i=s&&e.modules[s]?s:Object.keys(e.modules).find(r=>e.modules[r].attributes&&e.modules[r].attributes.top)||Object.keys(e.modules)[0],a=e.modules[i],c=yt(a),o=a.cells||{},_=r=>typeof r!="number"?`1'b${r}`:(c.names.get(r)||{}).nm||(c.portBits.get(r)||{}).nm||`net${r}`,q=[],g=[...n.notes],p=[],m=new Map;for(let[r,h]of Object.entries(o)){if(!ge.has(h.type))continue;let d=h.connections,u=h.parameters||{},f=d.CLK?"CLK":"EN",v=h.type.includes("latch");(d.Q||[]).forEach((k,w)=>{let x={cell:r,type:h.type,i:w,q:k,d:(d.D||[])[w],clk:d[f]&&d[f][0],en:!v&&d.EN?d.EN[0]:null,arst:d.ARST?d.ARST[0]:d.CLR?d.CLR[w]:null,srst:d.SRST?d.SRST[0]:null,latch:v,name:_(k)};p.push(x),m.set(k,x)})}let b=(r,h=new Set)=>{if(h.has(r))return null;h.add(r);let d=c.driver.get(r);if(!d)return null;if(d.port)return{port:d.port,inverted:!1};let u=o[d.cell];if(Ye.has(u.type)||u.type==="$not"||u.type==="$_NOT_"){let f=b(u.connections.A[d.i]??u.connections.A[0],h);return f&&{...f,inverted:f.inverted!==(u.type.includes("NOT")||u.type==="$not")}}return m.has(r)?{reg:m.get(r)}:{gate:d.cell}},z=new Map([...n.clocks.values()].map(r=>[r.port,r.name])),$=new Map;for(let r of n.clocks.values())$.set(r.name,{name:r.name,kind:"primary",port:r.port,period:r.period});let L=new Map,M=new Set,I=(r,h=0)=>{if(L.has(r))return L.get(r);let d=null,u=r.clk!==void 0?b(r.clk):null;if(u&&u.port)d=z.get(u.port)||null,d||(M.add(u.port),d="unclocked:"+u.port,$.has(d)||$.set(d,{name:d,kind:"unclocked",port:u.port}));else if(u&&u.reg&&h<8){let f=I(u.reg,h+1),v=n.generated.find(w=>w.pin===u.reg.name||w.pin===u.reg.name.replace(/\[\d+\]$/,"")),k=v?v.name:u.reg.name;$.has(k)||$.set(k,{name:k,kind:v?"generated":"inferred",master:f,from:u.reg.name}),!v&&!g.some(w=>w.includes(u.reg.name))&&g.push(`${u.reg.name} drives clock pins: treated as a clock generated from ${f} (add create_generated_clock to name it)`),d=k}else u&&u.gate&&(d="gated:"+u.gate,$.has(d)||$.set(d,{name:d,kind:"unknown"}));return L.set(r,d),d};p.forEach(r=>r.dom=I(r));for(let r of M)q.push({sev:"violation",rule:"Missing clock",dst:r,msg:`Port ${r} clocks registers but has no create_clock. Define the clock so its crossings can be checked.`});let Q=r=>{let h=$.get(r),d=0;for(;h&&h.master&&d++<10;)h=$.get(h.master);return h?h.name:r},Y=new Set,O=(r,h)=>{if(r===h)return!0;let d=Q(r),u=Q(h);if(d===u)return!0;for(let v of n.groups){let k=v.groups.findIndex(x=>x.includes(r)||x.includes(d)),w=v.groups.findIndex(x=>x.includes(h)||x.includes(u));if(k>=0&&w>=0)return k===w}let f=[d,u].sort().join(" / ");return Y.has(f)||(Y.add(f),q.push({sev:"caution",rule:"Clock relationship assumed",dst:f,msg:`No set_clock_groups relates ${d} and ${u}: treated as asynchronous (the safe CDC default).`})),!1},re=r=>n.inputs.get(r)||null,D=(r,h=!0)=>{let d={regs:new Set,ports:new Set,logic:!1,muxSel:[],gates:0},u=new Set,f=v=>{if(typeof v!="number"||u.has(v))return;if(u.add(v),m.has(v)&&h){d.regs.add(m.get(v));return}let k=c.driver.get(v);if(!k)return;if(k.port){d.ports.add(k.port);return}let w=o[k.cell];if(!ge.has(w.type)){if(Ye.has(w.type)||(d.logic=!0,d.gates++),w.type==="$mux"||w.type==="$_MUX_"||w.type==="$pmux"){d.muxSel.push(...w.connections.S||[]);let x=w.parameters&&parseInt(w.parameters.WIDTH,2)||1;for(let T of["A","B"]){let H=w.connections[T]||[];w.type==="$pmux"?H.forEach(f):f(H[k.i]!==void 0?H[k.i]:H[0])}(w.connections.S||[]).forEach(f);return}for(let[x,T]of Object.entries(w.connections)){if((w.port_directions||{})[x]==="output"||/^(Y|Q)$/.test(x))continue;/^\$(and|or|xor|xnor|not|pos|buf|_AND_|_OR_|_XOR_|_NOT_)$/.test(w.type)&&T.length>k.i?f(T[k.i]):T.forEach(f)}}};return f(r),d},R=(r,h)=>{if(r.reg)return r.reg.dom&&h&&!O(r.reg.dom,h);let d=re(r.port);return d?!O(d,h):!0},W=r=>r.reg?r.reg.dom:re(r.port)||`async input ${r.port}`,F=r=>{let h=c.sinks.get(r.q)||[],d=h.map(u=>u.cell&&o[u.cell]&&ge.has(o[u.cell].type)&&u.pin==="D"?p.find(f=>f.cell===u.cell&&f.i===u.i):null);return{all:h,sameClock:d.filter(u=>u&&u.dom===r.dom&&u.clk===r.clk),other:h.length-d.filter(Boolean).length}},V=new Map,B=new Map,U=[];for(let r of p){if(!r.dom||r.latch)continue;let h=D(r.d),d=[...[...h.regs].map(x=>({reg:x})),...[...h.ports].map(x=>({port:x}))].filter(x=>R(x,r.dom));if(!d.length)continue;let u=F(r),f=u.sameClock.find(x=>{let T=D(x.d);return!T.logic&&T.regs.size===1&&[...T.regs][0]===r});if(!f)continue;let v=[r],k=f;for(;k&&v.length<6;){let x=D(k.d);if(x.logic||x.regs.size!==1||[...x.regs][0]!==v[v.length-1])break;v.push(k);let T=F(k);k=T.sameClock.length===1&&T.all.length===1?T.sameClock[0]:null}let w={first:r,stages:v,srcs:d,cone:h,fanout:u.all.length};U.push(w),V.set(r,w),v.slice(1).forEach(x=>B.set(x.q,w))}let X=r=>{let h=new Set,d=new Set,u=f=>{if(typeof f!="number"||d.has(f)||(d.add(f),B.has(f)&&h.add(B.get(f)),m.has(f)))return;let v=c.driver.get(f);if(!v||v.port)return;let k=o[v.cell];if(!ge.has(k.type))for(let[w,x]of Object.entries(k.connections))(k.port_directions||{})[w]==="output"||/^(Y|Q)$/.test(w)||x.forEach(u)};return u(r),h},J=[];for(let r of p){if(!r.dom)continue;let h=D(r.d),d=r.en!==null&&r.en!==void 0?D(r.en):null,f=[...[...h.regs].map(C=>({reg:C})),...[...h.ports].map(C=>({port:C})),...d?[...d.regs].map(C=>({reg:C})):[]].filter(C=>!(C.reg&&B.has(C.reg.q)&&C.reg.dom===r.dom)).filter(C=>R(C,r.dom)&&!(C.port&&/rst|reset/i.test(C.port)&&!1));if(!f.length)continue;let v=[...new Set(f.map(C=>C.reg?C.reg.name:C.port))],k=[...new Set(f.map(W))],w=V.get(r),x={src:v.join(", "),dst:r.name,srcDom:k.join(", "),dstDom:r.dom,srcBase:v.map(se).join(","),dstBase:se(r.name)};if(w){h.logic?J.push({...x,sev:"violation",rule:"Logic before synchronizer",msg:`Combinational logic (${h.gates} gate${h.gates>1?"s":""}) drives the first synchronizer stage. A glitch can be captured as a false pulse. Register the signal in the source domain first.`}):w.fanout>1?J.push({...x,sev:"violation",rule:"First stage fans out",msg:`The first synchronizer stage also drives other logic (${w.fanout} loads). Its output can be metastable: only the next flop may use it.`}):w.stages.length<2?J.push({...x,sev:"violation",rule:"Single-flop synchronizer",msg:"Only one flop: not enough time for metastability to resolve."}):J.push({...x,sev:"ok",rule:`${w.stages.length}-flop synchronizer`,msg:`Synchronized by ${w.stages.map(C=>C.name).join(" \u2192 ")}.`});continue}let T=new Set;for(let C of h.muxSel)for(let fe of X(C))T.add(fe);if(r.en!==null&&r.en!==void 0)for(let C of X(r.en))T.add(C);let H=F(r);if(T.size){let C=[...T].map(fe=>fe.stages[fe.stages.length-1].name);J.push({...x,sev:"ok",rule:"Qualified by synchronized enable",msg:`Captured only when ${[...new Set(C)].join(", ")} (synchronized) says the data is stable. Keep the data stable while the enable is active: check it in simulation.`})}else H.sameClock.length===1&&H.all.length===1?J.push({...x,sev:"violation",rule:"Logic before synchronizer",msg:"This register starts a synchronizer chain, but its input comes through logic. Register the signal in the source domain first."}):J.push({...x,sev:"violation",rule:"Unsynchronized crossing",msg:`Asynchronous data is used directly in ${r.dom}. The flop can go metastable and pass a wrong value on. Add a synchronizer, a handshake or a FIFO.`})}let je=U.filter(r=>r.stages.length>=2),he=new Map;for(let r of je){let h=r.srcs[0],d=h.reg?h.reg.name:h.port,u=`${se(d)}|${W(h)}|${r.first.dom}`;he.has(u)||he.set(u,[]),he.get(u).push(r)}let Ue=new Map;for(let[r,h]of he){if(h.length<2)continue;let[d,u,f]=r.split("|");h.forEach(v=>Ue.set(v,r)),q.push({sev:"caution",rule:"Bus synchronized bit by bit",src:`${d} (${h.length} bits)`,dst:se(h[0].first.name),srcDom:u,dstDom:f,msg:`${h.length} bits of ${d} each have their own synchronizer. Bits can arrive in different cycles, so this is only safe if ${d} changes one bit at a time (Gray code). Otherwise use a handshake or a FIFO.`})}let He=new Set,ft=[...p.map(r=>({bit:r.d,name:r.name,dom:r.dom})),...[...c.portBits.values()].filter(r=>r.dir==="output").map(r=>({bit:[...c.portBits.entries()].find(([,h])=>h===r)[0],name:r.nm,dom:null}))];for(let r of ft){let h=[...X(r.bit)],d=new Map;for(let u of h){let f=u.first.dom+"|"+W(u.srcs[0]);d.has(f)||d.set(f,new Set),d.get(f).add(u)}for(let[u,f]of d){if(f.size<2)continue;let v=[...f];if(new Set(v.map(C=>Ue.get(C)||C)).size<2)continue;let w=v.map(C=>C.stages[C.stages.length-1].name).sort(),x=w.join(",");if(He.has(x))continue;He.add(x);let[T,H]=u.split("|");q.push({sev:"caution",rule:"Reconvergence",src:w.join(", "),dst:r.name,srcDom:H,dstDom:T,msg:`Separately synchronized signals meet in logic at ${r.name}. They can arrive one cycle apart, so the combination can be briefly wrong. Synchronize one control signal instead, or use Gray coding.`})}}let ee=new Set;for(let r of p){if(r.arst===null||r.arst===void 0)continue;let h=D(r.arst),d=h.ports.size&&!h.regs.size,u=D(r.d),f=typeof r.d!="number"||!u.regs.size&&!u.ports.size||u.regs.size&&!u.ports.size&&[...u.regs].every(v=>ee.has(v)&&v.dom===r.dom);d&&f&&ee.add(r)}for(let r=0;r<3;r++)for(let h of p){if(ee.has(h)||h.arst==null)continue;let d=D(h.arst),u=D(h.d);d.ports.size&&!d.regs.size&&[...u.regs].length&&[...u.regs].every(f=>ee.has(f)&&f.dom===h.dom)&&ee.add(h)}let ue=new Map;for(let r of p){if(r.arst===null||r.arst===void 0||ee.has(r))continue;let h=D(r.arst),d=[...h.regs],u;if(d.length&&d.every(k=>ee.has(k)&&k.dom===r.dom)?u={sev:"ok",rule:"Synchronized reset",msg:`Reset deasserts in step with ${r.dom} through the reset synchronizer ${d.map(k=>k.name).join(", ")}.`}:d.some(k=>k.dom&&r.dom&&!O(k.dom,r.dom))?u={sev:"violation",rule:"Reset crosses domains",msg:`The reset comes from ${d.map(k=>k.name).join(", ")} in another clock domain (${d[0].dom}). Use a reset synchronizer in ${r.dom}.`}:h.ports.size&&(u={sev:"caution",rule:"Reset not synchronized",msg:`Asynchronous reset ${[...h.ports].join(", ")} goes straight to this register. Its release is not synchronized to ${r.dom}, so flops can leave reset in different cycles. Use a reset synchronizer.`}),!u)continue;let f=u.rule+"|"+se(r.name)+"|"+r.dom,v=d.length?d.map(k=>k.name).join(", "):[...h.ports].join(", ");ue.has(f)||ue.set(f,{...u,src:v,dst:r.name,dstDom:r.dom,srcDom:d.length?d[0].dom:"reset input",bits:0,dstBase:se(r.name)}),ue.get(f).bits++}let pe=new Map;for(let r of J){let h=[r.sev,r.rule,r.dstBase,r.srcBase,r.dstDom].join("|");pe.has(h)||pe.set(h,{...r,bits:0,srcSet:new Set,dstSet:new Set});let d=pe.get(h);d.bits++,r.src.split(", ").forEach(u=>d.srcSet.add(u)),d.dstSet.add(r.dst)}let Te=[...pe.values()].map(r=>({...r,src:Ke([...r.srcSet]),dst:Ke([...r.dstSet])})),gt=[...ue.values()].map(r=>({...r,dst:r.bits>1?`${r.dstBase} (${r.bits} bits)`:r.dst})),Le=[...Te,...q.filter(r=>r.rule!=="Clock relationship assumed"),...gt,...q.filter(r=>r.rule==="Clock relationship assumed")],Pe={violation:0,caution:1,ok:2};Le.sort((r,h)=>Pe[r.sev]-Pe[h.sev]);let Ee=new Map;for(let r of p)r.dom&&Ee.set(r.dom,(Ee.get(r.dom)||0)+1);let Ge=[...$.values()].map(r=>({...r,regs:Ee.get(r.name)||0,root:Q(r.name)})),Ae=r=>Le.filter(h=>h.sev===r).length;return{top:i,clocks:Ge,rows:Le,notes:g,summary:{domains:Ge.filter(r=>r.regs>0).length,crossings:Te.reduce((r,h)=>r+h.bits,0),crossingRegs:Te.length,violations:Ae("violation"),cautions:Ae("caution"),ok:Ae("ok"),synchronizers:je.length}}}function se(e){return String(e).replace(/\[\d+\]$/,"")}function Ke(e){let t=new Map;for(let s of e){let n=/^(.*)\[(\d+)\]$/.exec(s),i=n?n[1]:s;t.has(i)||t.set(i,[]),n&&t.get(i).push(+n[2])}return[...t.entries()].map(([s,n])=>n.length>1?`${s}[${Math.max(...n)}:${Math.min(...n)}]`:n.length===1?`${s}[${n[0]}]`:s).join(", ")}function Ve(e){let t=[],s=(c,o)=>String(c).padEnd(o);t.push(`CDC report for ${e.top}`),t.push(""),t.push("Clock domains"),t.push("  "+s("Clock",16)+s("Kind",12)+s("Source",18)+"Registers");for(let c of e.clocks)t.push("  "+s(c.name,16)+s(c.kind,12)+s(c.port||(c.master?"from "+c.master:"-"),18)+c.regs);t.push("");let n=e.summary;t.push(`Summary: ${n.crossings} crossing bit(s) into ${n.crossingRegs} register group(s), ${n.synchronizers} synchronizer(s)`),t.push(`         ${n.violations} violation(s), ${n.cautions} caution(s), ${n.ok} OK`),t.push("");let i={violation:"VIOLATION",caution:"CAUTION  ",ok:"OK       "},a=0;for(let c of e.rows)a++,t.push(`${i[c.sev]} ${a}. ${c.rule}`),c.src&&t.push(`    from ${c.src}${c.srcDom?"  ("+c.srcDom+")":""}`),c.dst&&t.push(`    to   ${c.dst}${c.dstDom?"  ("+c.dstDom+")":""}`),t.push(`    ${c.msg}`),t.push("");if(e.rows.length||t.push("No clock domain crossings found."),e.notes.length){t.push("Notes");for(let c of e.notes)t.push("  - "+c)}return t}function Ze(e){let t=[],s=new Map,n=[],i="",a=0,c=e.split(/\s+/),o=!0,_=0,q=0;for(;a<c.length;){let g=c[a++];if(!g)continue;if(o){if(g==="$scope"){for(a++,n.push(c[a++]);c[a]!=="$end";)a++;a++}else if(g==="$upscope"){for(n.pop();c[a]!=="$end";)a++;a++}else if(g==="$timescale"){let m=[];for(;c[a]!=="$end";)m.push(c[a++]);a++,i=m.join("")}else if(g==="$var"){let m=c[a++],b=parseInt(c[a++],10),z=c[a++],$=[];for(;c[a]!=="$end";)$.push(c[a++]);a++;let L=$[0];$[1]&&$[1].startsWith("[")&&(L+=$[1]);let M=[...n,L].join(".");if(m==="parameter")continue;if(s.has(z)){s.get(z).aliases.push(M);continue}let I=[...n.slice(1),L].join("."),Q={id:z,name:M,short:I||L,depth:n.length,width:b,type:m,changes:[],aliases:[]};s.set(z,Q),t.push(Q)}else if(g==="$enddefinitions"){for(;c[a]!=="$end";)a++;a++,o=!1}else if(g.startsWith("$")){for(;a<c.length&&c[a]!=="$end";)a++;a++}continue}let p=g[0];if(p==="#")_=Number(g.slice(1)),_>q&&(q=_);else if(p!=="$")if(p==="b"||p==="B"||p==="r"||p==="R"){let m=g.slice(1),b=c[a++],z=s.get(b);z&&Xe(z,_,p==="r"||p==="R"?Number(m):m)}else{let m=s.get(g.slice(1));m&&Xe(m,_,p.toLowerCase())}}return{signals:t,timescale:i,endTime:q}}function Xe(e,t,s){let n=e.changes;n.length&&n[n.length-1][0]===t?n[n.length-1][1]=s:(!n.length||n[n.length-1][1]!==s)&&n.push([t,s])}function et(e,t){let s=e.changes,n=0,i=s.length-1,a=-1;for(;n<=i;){let c=n+i>>1;s[c][0]<=t?(a=c,n=c+1):i=c-1}return a<0?null:s[a][1]}function De(e,t,s){if(t==null)return"";if(typeof t=="number")return String(+t.toPrecision(6));if(e.width===1)return t;let n=t.padStart(e.width,t[0]==="x"||t[0]==="z"?t[0]:"0");if(/[xz]/i.test(n))return/^x+$/i.test(n)?"x":/^z+$/i.test(n)?"z":s==="bin"?n:"x";if(s==="bin")return n;let i=BigInt("0b"+n);if(s==="dec")return i.toString(10);if(s==="sdec"){let a=BigInt(e.width);return(n[0]==="1"?i-(1n<<a):i).toString(10)}return i.toString(16).toUpperCase().padStart(Math.ceil(e.width/4),"0")}var _e=class{constructor(t,s){this.c=t,this.ctx=t.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=s.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=s.theme,t.addEventListener("mousedown",n=>this.click(n)),t.addEventListener("wheel",n=>this.wheel(n),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(t.parentElement)}setData(t){this.data=t,this.cursor=null,this.t0=0,this.t1=Math.max(1,t.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(t,s){if(!this.data)return;let n=this.t1-this.t0,i=s??this.cursor??this.t0+n/2,a=Math.min(Math.max(n*t,2),Math.max(1,this.data.endTime)*1.05),c=i-(i-this.t0)*(a/n);c=Math.max(0,Math.min(c,Math.max(0,this.data.endTime-a))),this.t0=c,this.t1=c+a,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(t){if(!this.data)return;let s=this.t1-this.t0,n=this.t0+s*t;n=Math.max(0,Math.min(n,Math.max(0,this.data.endTime-s))),this.t0=n,this.t1=n+s,this.draw()}xOf(t,s){return this.nameW+(t-this.t0)/(this.t1-this.t0)*(s-this.nameW-8)}tOf(t,s){return this.t0+(t-this.nameW)/(s-this.nameW-8)*(this.t1-this.t0)}click(t){if(!this.data)return;let s=this.c.getBoundingClientRect(),n=t.clientX-s.left;n<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(n,s.width))),this.draw(),this.onCursor(this.cursor))}wheel(t){if(!this.data)return;let s=this.c.getBoundingClientRect();t.ctrlKey||t.metaKey||Math.abs(t.deltaY)>Math.abs(t.deltaX)&&t.shiftKey===!1&&t.altKey?(t.preventDefault(),this.zoom(t.deltaY>0?1.25:.8,this.tOf(t.clientX-s.left,s.width))):(Math.abs(t.deltaX)>Math.abs(t.deltaY)||t.shiftKey)&&(t.preventDefault(),this.pan((t.deltaX||t.deltaY)/600))}draw(){let t=this.theme(),n=this.c.parentElement.clientWidth;this.nameW=n<640?112:190;let i=this.data?this.data.signals:[],a=this.axisH+Math.max(i.length,3)*this.rowH+8,c=window.devicePixelRatio||1;this.c.style.width=n+"px",this.c.style.height=a+"px",this.c.width=Math.round(n*c),this.c.height=Math.round(a*c);let o=this.ctx;if(o.setTransform(c,0,0,c,0,0),o.fillStyle=t.bg,o.fillRect(0,0,n,a),o.font="12px 'JetBrains Mono', ui-monospace, monospace",o.textBaseline="middle",!this.data){o.fillStyle=t.muted,o.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,a/2);return}let _=this.t1-this.t0,q=(n-this.nameW)/110,g=_/Math.max(1,q),p=Math.pow(10,Math.floor(Math.log10(g))),m=[1,2,5,10].map(b=>b*p).find(b=>b>=g)||p*10;o.strokeStyle=t.grid,o.fillStyle=t.muted,o.lineWidth=1;for(let b=Math.ceil(this.t0/m)*m;b<=this.t1;b+=m){let z=Math.round(this.xOf(b,n))+.5;o.beginPath(),o.moveTo(z,this.axisH-6),o.lineTo(z,a),o.stroke(),o.fillText(ye(b,this.data.timescale),z+3,11)}if(o.strokeStyle=t.line,o.beginPath(),o.moveTo(0,this.axisH+.5),o.lineTo(n,this.axisH+.5),o.stroke(),i.forEach((b,z)=>{let $=this.axisH+z*this.rowH,L=$+6,M=$+this.rowH-6,I=(L+M)/2;o.fillStyle=z%2?t.rowAlt:t.bg,o.fillRect(0,$+1,n,this.rowH-1),o.fillStyle=t.text;let Q=b.short+(b.width>1&&!b.short.includes("[")?` [${b.width-1}:0]`:"");o.fillText(Je(o,Q,this.nameW-16),10,I),o.save(),o.beginPath(),o.rect(this.nameW,$,n-this.nameW,this.rowH),o.clip();let Y=b.changes;for(let O=0;O<Y.length;O++){let re=Y[O][0],D=O+1<Y.length?Y[O+1][0]:this.data.endTime;if(D<this.t0||re>this.t1)continue;let R=this.xOf(re,n),W=this.xOf(D,n),F=Y[O][1];if(b.width===1&&typeof F=="string"){let V=F==="x"?t.x:F==="z"?t.z:t.wave;o.strokeStyle=V,o.lineWidth=1.5,F==="x"&&(o.fillStyle=t.xFill,o.fillRect(R,L,W-R,M-L));let B=F==="1"?L:F==="0"?M:I;if(o.beginPath(),O>0){let U=Y[O-1][1],X=U==="1"?L:U==="0"?M:I;o.moveTo(R,X)}else o.moveTo(R,B);o.lineTo(R,B),o.lineTo(W,B),o.stroke()}else{let V=De(b,F,this.radix),B=V==="x"||V==="z";o.strokeStyle=B?t.x:t.wave,o.lineWidth=1.2,o.fillStyle=B?t.xFill:t.busFill;let U=Math.min(4,(W-R)/2);o.beginPath(),o.moveTo(R,I),o.lineTo(R+U,L),o.lineTo(W-U,L),o.lineTo(W,I),o.lineTo(W-U,M),o.lineTo(R+U,M),o.closePath(),o.fill(),o.stroke();let X=W-R-10;X>14&&(o.fillStyle=t.text,o.fillText(Je(o,V,X),Math.max(R,this.nameW)+6,I))}}o.restore()}),o.strokeStyle=t.line,o.beginPath(),o.moveTo(this.nameW+.5,0),o.lineTo(this.nameW+.5,a),o.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let b=Math.round(this.xOf(this.cursor,n))+.5;o.strokeStyle=t.cursor,o.lineWidth=1.5,o.beginPath(),o.moveTo(b,0),o.lineTo(b,a),o.stroke()}}};function Je(e,t,s){if(e.measureText(t).width<=s)return t;for(;t.length>1&&e.measureText(t+"\u2026").width>s;)t=t.slice(0,-1);return t+"\u2026"}function ye(e,t){let s=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(t||"");if(!s)return String(e);let n=["fs","ps","ns","us","ms","s"],i=e*Number(s[1]),a=n.indexOf(s[2]);for(;a<n.length-1&&Math.abs(i)>=1e3&&i%1e3===0;)i/=1e3,a++;return a<2&&Math.abs(i)>=1e3&&(i/=1e3,a++,i=+i.toFixed(3)),`${i} ${n[a]}`}var y=e=>document.querySelector(e),tt=3e5,at="vdd-cdc-lab-v1",it="vdd-cdc-quiz-v1",Z="check_cdc.ys",oe=new URL("/",location.href).href,l={example:j[0].id,track:Re[0].id,script:Z,files:{},order:[],current:Z,running:!1,mode:null,timer:null,lastVcd:null},te={yosys:null,sim:null},ie={yosys:!1,sim:!1},kt=e=>/\.s?v$/i.test(e)&&/^\s*(initial|\$dumpfile)|\$finish/m.test(l.files[e]||""),ct=()=>[...l.order.filter(e=>/\.ys$/i.test(e)).map(e=>({value:e,label:`CDC check (${e})`})),...l.order.filter(kt).map(e=>({value:"sim:"+e,label:`Simulate (${e})`}))];function Ne(){let e=ct();return e.find(t=>t.value===l.script)||e[0]||null}function lt(){let e=y("#script"),t=ct(),s=Ne();e.innerHTML="";for(let n of t){let i=document.createElement("option");i.value=n.value,i.textContent=n.label,e.appendChild(i)}s&&(e.value=s.value),y("#script-wrap").hidden=t.length<2,y("#run-label").textContent=s&&s.value.startsWith("sim:")?"Simulate":"Run CDC check"}var P=new Map,S=null,G=y("#editor textarea"),Ie=e=>/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain";window.CodeMirror?(S=window.CodeMirror.fromTextArea(G,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),S.on("change",()=>{l.files[l.current]=S.getValue(),ve()})):(G.classList.add("plain-editor"),G.addEventListener("input",()=>{l.files[l.current]=G.value,ve()}));var xe=()=>{l.files[l.current]=S?S.getValue():G.value};function We(e){xe(),l.current=e,S?(P.has(e)||P.set(e,window.CodeMirror.Doc(l.files[e]??"",Ie(e))),S.swapDoc(P.get(e)),setTimeout(()=>S.refresh(),0)):G.value=l.files[e]??"",Fe()}function wt(e,t){We(e),S&&(S.focus(),S.setCursor({line:t-1,ch:0}),S.addLineClass(t-1,"background","cm-errline"),setTimeout(()=>S.removeLineClass(t-1,"background","cm-errline"),2500),S.scrollIntoView({line:t-1,ch:0},80))}function Me(e,t,s){P.clear(),l.files={...e},l.order=t||Object.keys(e),l.current=s&&l.order.includes(s)?s:l.order[0],S?(P.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",Ie(l.current))),S.swapDoc(P.get(l.current))):G.value=l.files[l.current]??"",Fe()}function Fe(){let e=y("#tabs");e.innerHTML="";for(let t of l.order){let s=document.createElement("button");if(s.type="button",s.className="tab"+(t===l.current?" active":""),s.setAttribute("role","tab"),s.setAttribute("aria-selected",t===l.current?"true":"false"),s.textContent=t,s.addEventListener("click",()=>We(t)),e.appendChild(s),t===l.current&&l.order.length>1){let n=document.createElement("button");n.type="button",n.className="tab-x",n.textContent="\xD7",n.title="Remove "+t,n.setAttribute("aria-label","Remove file "+t),n.addEventListener("click",()=>bt(t)),e.appendChild(n)}}lt()}function bt(e){xe(),delete l.files[e],P.delete(e),l.order=l.order.filter(t=>t!==e),l.current=l.order[0],S?(P.has(l.current)||P.set(l.current,window.CodeMirror.Doc(l.files[l.current]??"",Ie(l.current))),S.swapDoc(P.get(l.current))):G.value=l.files[l.current]??"",Fe(),ve()}function vt(){let e=(window.prompt("New file name (for example top.v, extra.sdc):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){E("File names can use letters, digits, dot, dash and underscore only.","err");return}l.files[e]===void 0&&(l.order.push(e),l.files[e]=""),We(e),ve()}}function qt(){let e=y("#track-note");e.textContent=Re[0].note}function ce(){let e=y("#examples");e.innerHTML="";for(let s of j){let n=document.createElement("button");n.type="button",n.className="ex"+(s.id===l.example?" active":""),n.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',n.querySelector(".ex-tag").textContent=s.tag;let i=s.quiz&&s.quiz.length?de()[s.id]:null;if(i&&i.checked){let a=document.createElement("span");a.className="ex-done",a.textContent=(i.score===i.total?"\u2713 ":"")+`quiz ${i.score}/${i.total}`,n.querySelector(".ex-tag").appendChild(a)}n.querySelector(".ex-title").textContent=s.title,n.addEventListener("click",()=>le(s.id)),e.appendChild(n)}let t=y("#ex-select");t.innerHTML=j.map(s=>`<option value="${s.id}">${s.tag} \xB7 ${s.title}</option>`).join(""),l.example&&(t.value=l.example)}function le(e){let t=j.find(s=>s.id===e)||j[0];l.example=t.id,l.script=t.script||Z,Me(t.files,Object.keys(t.files),Z),ce(),be(),$e(),ht(),Se(null),ut(!1),K("Ready","idle");try{let s=new URL(location.href);s.searchParams.set("lab",t.id),history.replaceState(null,"",s.pathname+s.search)}catch{}}function de(){try{return JSON.parse(localStorage.getItem(it)||"{}")||{}}catch{return{}}}function Be(e){try{localStorage.setItem(it,JSON.stringify(e))}catch{}}var Ce=()=>j.find(e=>e.id===l.example&&e.quiz&&e.quiz.length);function xt(e){let t=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return t?parseFloat(t[0]):NaN}function Ct(e,t){if(e.type==="choice")return t!=null&&+t===e.answer;let s=xt(t);return isFinite(s)&&Math.abs(s-e.answer)<=(e.tol??.01)+1e-9}var $t=e=>e.type==="choice"?e.options[e.answer]:`${e.answer}${e.unit?" "+e.unit:""}`;function be(){let e=y("#quiz"),t=y("#quiz-list"),s=Ce();if(!s){e.hidden=!0;return}e.hidden=!1;let n=de()[s.id]||{},i=n.a||[];t.innerHTML="",s.quiz.forEach((a,c)=>{let o=document.createElement("li"),_=document.createElement("div");if(_.className="quiz-q",a.try){let p=document.createElement("span");p.className="quiz-try",p.textContent="Try it",_.appendChild(p)}let q=a.q.replace(/^Try it: /,"");if(_.appendChild(document.createTextNode(q.charAt(0).toUpperCase()+q.slice(1))),o.appendChild(_),a.type==="choice"){let p=document.createElement("div");p.className="quiz-opts",p.setAttribute("role","radiogroup"),a.options.forEach((m,b)=>{let z=document.createElement("label"),$=document.createElement("input");$.type="radio",$.name=`q${c}`,$.value=b,i[c]!==void 0&&+i[c]===b&&($.checked=!0),$.addEventListener("change",()=>st(s,c,b));let L=document.createElement("span");L.textContent=m,z.append($,L),p.appendChild(z)}),o.appendChild(p)}else{let p=document.createElement("div");p.className="quiz-num";let m=document.createElement("input");if(m.type="text",m.inputMode="decimal",m.autocomplete="off",m.setAttribute("aria-label","Answer to question "+(c+1)),m.placeholder="e.g. 3",i[c]!==void 0&&(m.value=i[c]),m.addEventListener("input",()=>st(s,c,m.value)),m.addEventListener("keydown",b=>{b.key==="Enter"&&Oe()}),p.appendChild(m),a.unit){let b=document.createElement("span");b.className="unit",b.textContent=a.unit,p.appendChild(b)}o.appendChild(p)}let g=document.createElement("div");g.className="quiz-fb",g.hidden=!0,g.setAttribute("aria-live","polite"),o.appendChild(g),t.appendChild(o)}),n.checked?Oe(!0):dt(null)}function st(e,t,s){let n=de(),i=n[e.id]||{a:[]};i.a=i.a||[],i.a[t]=s,i.checked=!1,n[e.id]=i,Be(n);let a=y("#quiz-list").children[t]?.querySelector(".quiz-fb");a&&(a.hidden=!0)}function dt(e,t){let s=y("#quiz-score");if(e===null){s.textContent="",s.classList.remove("done");return}s.textContent=`${e} / ${t} correct`,s.classList.toggle("done",e===t)}function Oe(e){let t=Ce();if(!t)return;let s=de(),n=s[t.id]||{a:[]};n.a=n.a||[];let i=0;t.quiz.forEach((a,c)=>{let o=y("#quiz-list").children[c],_=a.type==="choice"?(o.querySelector("input:checked")||{}).value:o.querySelector("input").value;n.a[c]=_;let q=o.querySelector(".quiz-fb"),g=_===void 0||_==="",p=!g&&Ct(a,_);p&&i++,q.hidden=!1,q.className="quiz-fb "+(p?"ok":"bad"),q.innerHTML="";let m=document.createElement("b");m.textContent=p?"Correct.":g?"Not answered yet.":"Not quite.",q.appendChild(m),p&&a.explain?q.appendChild(document.createTextNode(a.explain)):!p&&!g&&q.appendChild(document.createTextNode(a.type==="number"?"Check the report or the simulation output again.":"Look at the report and the code again and try another option."))}),n.checked=!0,n.score=i,n.total=t.quiz.length,s[t.id]=n,Be(s),dt(i,t.quiz.length),e||ce()}function zt(){let e=Ce();e&&e.quiz.forEach((t,s)=>{let n=y("#quiz-list").children[s].querySelector(".quiz-fb");n.hidden=!1,n.className="quiz-fb shown",n.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+$t(t)+".",n.appendChild(i),t.explain&&n.appendChild(document.createTextNode(t.explain))})}function St(){let e=Ce();if(!e)return;let t=de();delete t[e.id],Be(t),be(),ce()}var nt=null;function ve(){clearTimeout(nt),nt=setTimeout($e,400)}function $e(){try{localStorage.setItem(at,JSON.stringify({example:l.example,script:l.script,files:l.files,order:l.order,current:l.current}))}catch{}}function Tt(){try{let e=JSON.parse(localStorage.getItem(at)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function Lt(){let e=JSON.stringify({f:l.files,o:l.order,s:l.script}),t=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),s=new Uint8Array(await new Response(t).arrayBuffer()),n="";for(let i of s)n+=String.fromCharCode(i);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Et(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),s=new Blob([Uint8Array.from(t,n=>n.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(s).text())}async function me(e,t){let s=!1;try{await navigator.clipboard.writeText(e),s=!0}catch{let i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{s=document.execCommand("copy")}catch{}i.remove()}if(t){let n=t.dataset.label||t.textContent;t.dataset.label=n,t.textContent=s?"Copied":"Press Ctrl+C",t.classList.toggle("ok",s),setTimeout(()=>{t.textContent=n,t.classList.remove("ok")},1600)}}function rt(e,t){let s=document.createElement("a");s.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),s.download=e,document.body.appendChild(s),s.click(),setTimeout(()=>{URL.revokeObjectURL(s.href),s.remove()},500)}var ae=y("#console"),ze=[];function ht(){ae.textContent="",ze=[]}function E(e,t){ze.push(e);let s=document.createElement("div");s.className="ln "+(t||"");let n=/\b([\w.-]+\.(?:v|sv|ys|sdc)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|sdc)),? line (\d+)\b/.exec(e);if(n&&l.files[n[1]]!==void 0){let i=e.indexOf(n[0]);s.appendChild(document.createTextNode(e.slice(0,i)));let a=document.createElement("button");a.type="button",a.className="loc",a.textContent=n[0],a.addEventListener("click",()=>wt(n[1],+n[2])),s.appendChild(a),s.appendChild(document.createTextNode(e.slice(i+n[0].length)))}else s.textContent=e;t||(/^VIOLATION|\bERROR\b|\berror\b|Error:|\bFAIL\b|Internal error/.test(e)?s.classList.add("err"):/^CAUTION|^Warning|\bwarning\b/i.test(e)?s.classList.add("warn"):/^OK\s|\bPASS\b/.test(e)?s.classList.add("pass"):/^(Clock domains|Summary|CDC report|Notes)/.test(e)&&s.classList.add("sec")),ae.appendChild(s),ae.childElementCount>2e4&&ae.firstChild.remove()}function Se(e){let t=y("#summary");if(t.innerHTML="",!e||!e.length){t.hidden=!0;return}for(let[s,n,i]of e){let a=document.createElement("div");a.className="chip "+(i||"");let c=document.createElement("span");c.className="k",c.textContent=s;let o=document.createElement("span");o.className="v",o.textContent=n,a.append(c,o),t.appendChild(a)}t.hidden=!1}function K(e,t){let s=y("#status");s.textContent=e,s.dataset.kind=t}var N=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),A=new _e(y("#wave"),{theme:()=>({bg:N("--wave-bg"),rowAlt:N("--wave-row"),grid:N("--wave-grid"),line:N("--line"),text:N("--text"),muted:N("--muted"),wave:N("--wave"),busFill:N("--wave-bus"),x:N("--wave-x"),xFill:N("--wave-xfill"),z:N("--wave-z"),cursor:N("--accent")}),onCursor:e=>{let t=y("#wave-values");if(e===null||!A.data){t.textContent="";return}t.innerHTML="";let s=document.createElement("div");s.className="cur-time",s.textContent="Cursor @ "+ye(e,A.data.timescale),t.appendChild(s);for(let n of A.data.signals){let i=document.createElement("div");i.className="cur-row";let a=document.createElement("span");a.textContent=n.name;let c=document.createElement("span");c.textContent=De(n,et(n,e),A.radix),i.append(a,c),t.appendChild(i)}}});window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>A.draw());function ut(e){y("#wave-pane").hidden=!e,e||(A.clear(),y("#wave-values").textContent="",y("#wave-meta").textContent="")}function qe(e){te[e]&&te[e].terminate(),ie[e]=!1;let t=e==="yosys"?new Worker(new URL("synth/worker.js",oe).href,{type:"module"}):new Worker(new URL("verilog/worker.js",oe).href),s=new URL(e==="yosys"?"synth/":"verilog/",oe).href;t.onmessage=n=>e==="yosys"?At(n.data):Rt(n.data),t.onerror=n=>{E((e==="yosys"?"Yosys":"The simulator")+" failed to start: "+(n.message||"worker error"),"err"),ne(!1)},t.postMessage({type:"load",base:s}),te[e]=t}var ke=[],we={};function At(e){if(e.type==="ready")ie.yosys=!0,!l.running&&y("#status").dataset.kind==="busy"&&K("Ready","idle");else if(e.type==="stage")l.mode==="yosys"&&K(e.stage+"\u2026","busy");else if(e.type==="line")ke.push(e.line);else if(e.type==="file")we[e.name]=e.content;else if(e.type==="done"&&l.mode==="yosys"){if(!e.ok||!we["design.json"]){for(let s of ke)E(s,/ERROR/.test(s)?"err":"");E(e.ok?"\u2500\u2500 The script did not write design.json: keep the write_json design.json line \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),ne(!1);return}let t=ke.filter(s=>/^Warning/.test(s));for(let s of t)E(s);E(`\u2500\u2500 Yosys read the design in ${e.ms} ms; checking clock domain crossings \u2500\u2500`,"meta");try{let s=l.order.find(c=>/\.sdc$/i.test(c)),n=(/-top\s+(\S+)/.exec(l.files[Ne().value]||"")||[])[1],i=Qe(JSON.parse(we["design.json"]),s?l.files[s]:"",n);s||E("No .sdc file: every clock is treated as its own asynchronous domain.","warn");for(let c of Ve(i))E(c);let a=i.summary;Se([["Clock domains",String(a.domains)],["Crossing bits",String(a.crossings)],["Synchronizers",String(a.synchronizers)],["Violations",String(a.violations),a.violations?"bad":"good"],["Cautions",String(a.cautions),a.cautions?"warn":""]]),ne(!0)}catch(s){E("CDC check failed: "+(s.message||s),"err"),ne(!1)}}}function Rt(e){if(e.type==="ready")ie.sim=!0,!l.running&&y("#status").dataset.kind==="busy"&&K("Ready","idle");else if(e.type==="stage"){if(l.mode!=="sim")return;K(e.stage+"\u2026","busy"),e.stage==="Simulating"&&E("\u2500\u2500 simulation output \u2500\u2500","meta")}else if(e.type==="line")E(e.line.replace(/\/work\//g,""),e.stream==="err"&&/error/i.test(e.line)?"err":"");else if(e.type==="done"&&l.mode==="sim"){if(e.ok){E(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta");let t=ze.join(`
`),s=/^PASS\b/m.test(t),n=/\bFAIL\b/.test(t),i=(t.match(/\bA[1-9] (data|req)/g)||[]).length,a=[];(s||n)&&a.push(["Result",n?"FAIL":"PASS",n?"bad":"good"]),i&&a.push(["Assertion failures",String(i),"bad"]),Se(a);let c=(e.vcd||[])[0];if(c){l.lastVcd=c,ut(!0);try{let o=Ze(c.text);A.setData(o),y("#wave-meta").textContent=`${o.signals.length} signals \xB7 ${ye(o.endTime,o.timescale)}`}catch(o){E("Could not read waveform: "+o.message,"err")}}}else e.phase==="compile"?E("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):e.phase==="sim"&&E(`\u2500\u2500 simulation exited with code ${e.rc} \u2500\u2500`,"meta err");ne(e.ok)}}function ot(){if(l.running)return;window.vddSubscribe&&window.vddSubscribe(),xe(),$e();let e=Ne();if(!e){E(`Add a Yosys script (${Z}) or a testbench to run.`,"err");return}if(ht(),Se(null),l.running=!0,y("#run").disabled=!0,y("#stop").disabled=!1,e.value.startsWith("sim:")){l.mode="sim";let t=e.value.slice(4),s=(/^\s*module\s+(\w+)/m.exec(l.files[t])||[])[1]||"";te.sim||qe("sim"),K(ie.sim?"Compiling\u2026":"Loading simulator\u2026","busy"),E(`$ iverilog -g2012 -s ${s} ${l.order.filter(i=>/\.s?v$/i.test(i)).join(" ")} && vvp`,"meta");let n={};for(let i of l.order)/\.(s?v|vh|svh)$/i.test(i)&&(n[i]=l.files[i]);te.sim.postMessage({type:"run",files:n,std:"2012",top:s,base:new URL("verilog/",oe).href})}else{l.mode="yosys",ke=[],we={},te.yosys||qe("yosys"),K(ie.yosys?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),E(`$ yosys -s ${e.value}   then the CDC check with ${l.order.find(s=>/\.sdc$/i.test(s))||"no SDC"}`,"meta");let t={};for(let s of l.order)/\.vcd$/i.test(s)||(t[s]=l.files[s]);te.yosys.postMessage({type:"run",files:t,script:e.value,dataFiles:[],base:new URL("synth/",oe).href})}clearTimeout(l.timer),l.timer=setTimeout(()=>pt(`Stopped after ${tt/1e3} s.`),tt)}function pt(e){if(!l.running)return;E(e||"Stopped.","meta err");let t=l.mode;ne(!1,!0),qe(t)}function ne(e,t){clearTimeout(l.timer),l.running=!1,y("#run").disabled=!1,y("#stop").disabled=!0,ae.scrollTop=0,K(t?"Stopped":e?"Done":"Errors",t||!e?"err":"ok")}function Dt(){y("#run").addEventListener("click",ot),y("#stop").addEventListener("click",()=>pt()),y("#script").addEventListener("change",e=>{l.script=e.target.value,lt(),$e()}),y("#new-file").addEventListener("click",vt),y("#quiz-check").addEventListener("click",()=>Oe()),y("#quiz-reveal").addEventListener("click",zt),y("#quiz-reset").addEventListener("click",St),y("#ex-select").addEventListener("change",e=>le(e.target.value)),y("#reset").addEventListener("click",()=>le(l.example||j[0].id)),y("#copy-file").addEventListener("click",e=>me(S?S.getValue():G.value,e.currentTarget)),y("#download-file").addEventListener("click",()=>rt(l.current,S?S.getValue():G.value)),y("#copy-output").addEventListener("click",e=>me(ze.join(`
`),e.currentTarget)),y("#share").addEventListener("click",async e=>{let t=e.currentTarget;xe();try{let s=await Lt();history.replaceState(null,"","#code="+s),me(location.href.split("#")[0]+"#code="+s,t)}catch{me(location.href,t)}}),y("#zoom-in").addEventListener("click",()=>A.zoom(.5)),y("#zoom-out").addEventListener("click",()=>A.zoom(2)),y("#zoom-fit").addEventListener("click",()=>A.fit()),y("#pan-left").addEventListener("click",()=>A.pan(-.4)),y("#pan-right").addEventListener("click",()=>A.pan(.4)),y("#radix").addEventListener("change",e=>{A.radix=e.target.value,A.draw(),A.onCursor(A.cursor)}),y("#dl-vcd").addEventListener("click",()=>{l.lastVcd&&rt("waves.vcd",l.lastVcd.text)}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),ot())})}async function Mt(){Dt(),qt();let e=!1,t=new URLSearchParams(location.hash.slice(1)).get("code"),s=new URLSearchParams(location.search).get("lab");if(t)try{let n=await Et(t);l.example=null,l.script=n.s||Z,Me(n.f,n.o,Z),ce(),be(),e=!0}catch{}if(!e&&s&&j.some(n=>n.id===s)&&(le(s),e=!0),!e){let n=Tt();n&&j.some(i=>i.id===n.example)&&(l.example=n.example,l.script=n.script||Z,Me(n.files,n.order,n.current),ce(),be(),e=!0)}e||le(j[0].id),K("Loading Yosys\u2026","busy"),qe("yosys")}Mt();})();
