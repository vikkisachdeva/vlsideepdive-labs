G = ("iq-seq", "Clocks, counters and datapaths")
CLKTB = """  reg clk = 0, rst = 1;
  always #5 clk = ~clk;
"""
LABS = [
dict(id="iq-edge", title="Edge detectors and a one-cycle delay",
 q=r"edge.?trigger.{0,30}variation|rising edge|falling edge|detects a rising|edge detect|delays a signal by one clock|pulse detector",
 problem="Cadence, Apple and NVIDIA ask for edge detection: delay a signal by one clock, then pulse on its rising edge, falling edge or any edge.",
 tasks=["d1 is sig delayed by one clock.", "rise, fall and any are one-cycle pulses from sig and d1.", "Run until PASS."],
 learn="Every edge detector is one flop plus one gate: rise = sig & ~d1.",
 design="""module edges (input wire clk, rst, sig, output reg d1, output wire rise, fall, any);
  always @(posedge clk) begin
    // TODO: d1 follows sig one clock later (0 in reset)
  end
  // TODO: rise, fall, any
endmodule
""",
 sol="""module edges (input wire clk, rst, sig, output reg d1, output wire rise, fall, any);
  always @(posedge clk) d1 <= rst ? 1'b0 : sig;
  assign rise = sig & ~d1;
  assign fall = ~sig & d1;
  assign any  = sig ^ d1;
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg sig = 0, prev = 0; wire d1, rise, fall, any; integer i, errors = 0, nr = 0;
  edges dut (.clk(clk), .rst(rst), .sig(sig), .d1(d1), .rise(rise), .fall(fall), .any(any));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 60; i = i + 1) begin
      @(posedge clk); prev = sig; #1;
      if (d1 !== prev) errors = errors + 1;
      @(negedge clk); sig = $random;
      #1 if (rise !== (sig & ~prev) || fall !== (~sig & prev) || any !== (sig ^ prev)) errors = errors + 1;
      if (rise) nr = nr + 1;
    end
    if (errors == 0 && nr > 3) $display("PASS: delay and edge pulses correct over 60 cycles");
    else $display("FAIL: %0d wrong checks", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-sticky", title="Sticky register",
 q=r"sticky",
 problem="NVIDIA's new-grad screen: design a sticky register that goes to 1 when set and stays 1 until reset, whatever set does afterwards.",
 tasks=["q = 0 in reset.", "q becomes 1 the clock after set = 1, then holds 1.", "Run until PASS."],
 learn="A sticky bit is an OR feedback loop: q <= q | set.",
 design="""module sticky (input wire clk, rst, set, output reg q);
  always @(posedge clk) begin
    // TODO
  end
endmodule
""",
 sol="""module sticky (input wire clk, rst, set, output reg q);
  always @(posedge clk) q <= rst ? 1'b0 : (q | set);
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg set = 0, model = 0; wire q; integer i, errors = 0;
  sticky dut (.clk(clk), .rst(rst), .set(set), .q(q));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 80; i = i + 1) begin
      @(negedge clk);
      rst = (i < 2) || (i == 40); set = (i == 10) || (i == 50) || (i == 51);
      @(posedge clk); model = rst ? 0 : (model | set); #1;
      if (q !== model) begin errors = errors + 1; if (errors <= 3) $display("  cycle %0d: q=%b expected %b", i, q, model); end
    end
    if (errors == 0) $display("PASS: q sticks at 1 until reset");
    else $display("FAIL: %0d wrong cycles", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-div-odd", title="Odd clock divider with 50% duty cycle",
 q=r"divide.{0,12}(by )?(3|5|7|three)|divided by three|divide-by-[357]|clock divider|clock dividers|frequency divider|divide a 500|duty cycle",
 problem="Divide-by-3 with 50% duty is one of the most reported questions (Marvell, Broadcom, NXP, TI, Cadence). Build a general odd divider: N = 3, 5, 7...",
 tasks=["clk_out period = N input clocks, high for exactly N/2 clocks (half-cycle resolution).", "Count on the rising edge; use one extra flop on the falling edge.", "The testbench runs N = 3 and N = 5 and measures high and low time."],
 learn="An odd divider is high for (N-1)/2 cycles from posedge logic, then OR with the same signal delayed by half a cycle on negedge.",
 design="""module div_odd #(parameter N = 3) (input wire clk, rst, output wire clk_out);
  reg [7:0] cnt; reg p, n;
  always @(posedge clk) begin
    if (rst) begin cnt <= 0; p <= 0; end
    else begin
      cnt <= (cnt == N - 1) ? 0 : cnt + 1;
      // TODO: p high for (N-1)/2 cycles of each N-cycle period
    end
  end
  // TODO: n = p delayed by half a cycle (negedge flop)
  assign clk_out = p;   // TODO: combine p and n for 50% duty
endmodule
""",
 sol="""module div_odd #(parameter N = 3) (input wire clk, rst, output wire clk_out);
  reg [7:0] cnt; reg p, n;
  always @(posedge clk) begin
    if (rst) begin cnt <= 0; p <= 0; end
    else begin
      cnt <= (cnt == N - 1) ? 0 : cnt + 1;
      p <= ((cnt == N - 1) ? 0 : cnt + 1) < (N - 1) / 2;
    end
  end
  always @(negedge clk) n <= rst ? 1'b0 : p;
  assign clk_out = p | n;
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  wire o3, o5; integer errors = 0;
  div_odd #(3) d3 (.clk(clk), .rst(rst), .clk_out(o3));
  div_odd #(5) d5 (.clk(clk), .rst(rst), .clk_out(o5));
  task measure(input integer n);
    realtime r1, f1, r2;
    begin
      if (n == 3) begin @(posedge o3); r1 = $realtime; @(negedge o3); f1 = $realtime; @(posedge o3); r2 = $realtime; end
      else        begin @(posedge o5); r1 = $realtime; @(negedge o5); f1 = $realtime; @(posedge o5); r2 = $realtime; end
      $display("N=%0d: period %0.1f ns (expect %0d), high %0.1f ns (expect %0.1f)", n, r2 - r1, n * 10, f1 - r1, n * 5.0);
      if (r2 - r1 != n * 10 || f1 - r1 != n * 5.0) errors = errors + 1;
    end
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #22 rst = 0;
    #100; measure(3); measure(3); measure(5); measure(5);
    if (errors == 0) $display("PASS: divide-by-3 and divide-by-5 with 50%% duty");
    else $display("FAIL: %0d measurements wrong", errors);
    $finish;
  end
  initial begin #3000 $display("FAIL: output never toggled"); $finish; end
endmodule
"""),
dict(id="iq-skip-count", title="Counters that skip values or count a range",
 q=r"skip|counts from 7 to 11|count(s|er)? (from )?7 to 11|mod-15|mod 15|mod-n counter|modulo-50|mod-3 counter|count-to-5|up/down counter|counter.{0,20}minimum number of flops|wrapping counter|parameterized counter",
 problem="Micron asked for a mod-15 counter that skips 0, 3, 4, 5 and 8; Samsung for a counter from 7 to 11. Build both.",
 tasks=["skip: counts 1, 2, 6, 7, 9, 10, 11, 12, 13, 14 and wraps to 1. Reset value 1.", "range: counts 7, 8, 9, 10, 11 and wraps to 7. Reset value 7.", "Run until PASS."],
 learn="A counter with skips is an FSM: next = f(current). Write the next-state rule, not a plus-one.",
 design="""module counters (input wire clk, rst, output reg [3:0] skip, output reg [3:0] range);
  always @(posedge clk) begin
    if (rst) begin skip <= 1; range <= 7; end
    else begin
      // TODO: skip goes 1,2,6,7,9,...,14,1
      // TODO: range goes 7,8,9,10,11,7
    end
  end
endmodule
""",
 sol="""module counters (input wire clk, rst, output reg [3:0] skip, output reg [3:0] range);
  always @(posedge clk) begin
    if (rst) begin skip <= 1; range <= 7; end
    else begin
      case (skip)
        4'd2:  skip <= 4'd6;
        4'd7:  skip <= 4'd9;
        4'd14: skip <= 4'd1;
        default: skip <= skip + 1;
      endcase
      range <= (range == 11) ? 4'd7 : range + 1;
    end
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  wire [3:0] skip, range; integer i, errors = 0;
  reg [3:0] es [0:9]; reg [3:0] er [0:4];
  counters dut (.clk(clk), .rst(rst), .skip(skip), .range(range));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    es[0]=1; es[1]=2; es[2]=6; es[3]=7; es[4]=9; es[5]=10; es[6]=11; es[7]=12; es[8]=13; es[9]=14;
    er[0]=7; er[1]=8; er[2]=9; er[3]=10; er[4]=11;
    @(negedge clk); rst = 0;
    for (i = 0; i < 30; i = i + 1) begin
      if (skip !== es[i % 10] || range !== er[i % 5]) begin errors = errors + 1; if (errors <= 4) $display("  step %0d: skip=%0d (exp %0d) range=%0d (exp %0d)", i, skip, es[i % 10], range, er[i % 5]); end
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: both counters follow their sequences");
    else $display("FAIL: %0d wrong steps", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-fib", title="Fibonacci generator: one number per cycle",
 q=r"fibonacci",
 problem="Fibonacci in hardware came up at Marvell, Juniper, TI and Intel: output the next Fibonacci number every clock.",
 tasks=["After reset, f outputs 0, 1, 1, 2, 3, 5, 8, ... one per clock.", "Use two registers; no memory, no loop.", "16-bit output: the testbench checks the first 24 numbers."],
 learn="Two registers (a, b) and one adder: a <= b; b <= a + b.",
 design="""module fib (input wire clk, rst, output wire [15:0] f);
  reg [15:0] a, b;
  always @(posedge clk) begin
    if (rst) begin a <= 0; b <= 1; end
    else begin
      // TODO
    end
  end
  assign f = a;
endmodule
""",
 sol="""module fib (input wire clk, rst, output wire [15:0] f);
  reg [15:0] a, b;
  always @(posedge clk) begin
    if (rst) begin a <= 0; b <= 1; end
    else begin a <= b; b <= a + b; end
  end
  assign f = a;
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  wire [15:0] f; integer i, x = 0, y = 1, t, errors = 0;
  fib dut (.clk(clk), .rst(rst), .f(f));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 24; i = i + 1) begin
      if (f !== x) begin errors = errors + 1; if (errors <= 3) $display("  n=%0d: f=%0d expected %0d", i, f, x); end
      t = x + y; x = y; y = t;
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: first 24 Fibonacci numbers correct");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-moving-avg", title="Moving average of the last 4 samples",
 q=r"moving average|average of the values|average between",
 problem="Groq asked for a moving average in Verilog. Keep the last four 8-bit samples and output their average every clock.",
 tasks=["Shift in x on every clock (window starts as zeros after reset).", "avg = (sum of the last 4 samples) / 4.", "Keep a running sum: add the new sample, subtract the one that leaves. No 4-input adder needed."],
 learn="A running sum makes a moving average O(1) per sample: sum <= sum + x - oldest.",
 design="""module movavg (input wire clk, rst, input wire [7:0] x, output wire [7:0] avg);
  reg [7:0] w0, w1, w2, w3;   // w0 = newest
  reg [9:0] sum;
  always @(posedge clk) begin
    if (rst) begin {w0, w1, w2, w3} <= 0; sum <= 0; end
    else begin
      // TODO: shift the window and update the running sum
    end
  end
  assign avg = sum >> 2;
endmodule
""",
 sol="""module movavg (input wire clk, rst, input wire [7:0] x, output wire [7:0] avg);
  reg [7:0] w0, w1, w2, w3;
  reg [9:0] sum;
  always @(posedge clk) begin
    if (rst) begin {w0, w1, w2, w3} <= 0; sum <= 0; end
    else begin
      {w0, w1, w2, w3} <= {x, w0, w1, w2};
      sum <= sum + x - w3;
    end
  end
  assign avg = sum >> 2;
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg [7:0] x = 0; reg [7:0] h0 = 0, h1 = 0, h2 = 0, h3 = 0; wire [7:0] avg; integer i, errors = 0;
  movavg dut (.clk(clk), .rst(rst), .x(x), .avg(avg));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 100; i = i + 1) begin
      x = $random;
      @(posedge clk); {h0, h1, h2, h3} = {x, h0, h1, h2};
      @(negedge clk);
      if (avg !== (h0 + h1 + h2 + h3) / 4) begin errors = errors + 1; if (errors <= 3) $display("  %0d %0d %0d %0d -> %0d, got %0d", h0, h1, h2, h3, (h0 + h1 + h2 + h3) / 4, avg); end
    end
    if (errors == 0) $display("PASS: moving average correct for 100 samples");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-stream-sum", title="Sum of the previous two inputs, and a running sum",
 q=r"sum of the previous two|running sum|accumulator|cumulative sum",
 problem="From a Texas Instruments interview: for a stream A0, A1, A2..., output A(k-1) + A(k-2) while A(k) arrives, then the sum of all previous inputs.",
 tasks=["s2 = sum of the two inputs before the current one (0 for missing ones).", "run = sum of all inputs before the current one.", "Both come from registers: no combinational path from x."],
 learn="Each output is a register stage: two delay flops and one accumulator.",
 design="""module stream_sum (input wire clk, rst, input wire [7:0] x, output wire [8:0] s2, output reg [15:0] run);
  reg [7:0] p1, p2;   // previous input, the one before
  always @(posedge clk) begin
    if (rst) begin p1 <= 0; p2 <= 0; run <= 0; end
    else begin
      // TODO
    end
  end
  assign s2 = 0;   // TODO
endmodule
""",
 sol="""module stream_sum (input wire clk, rst, input wire [7:0] x, output wire [8:0] s2, output reg [15:0] run);
  reg [7:0] p1, p2;
  always @(posedge clk) begin
    if (rst) begin p1 <= 0; p2 <= 0; run <= 0; end
    else begin p1 <= x; p2 <= p1; run <= run + x; end
  end
  assign s2 = p1 + p2;
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg [7:0] x = 0; wire [8:0] s2; wire [15:0] run; integer i, errors = 0, a1 = 0, a2 = 0, acc = 0;
  stream_sum dut (.clk(clk), .rst(rst), .x(x), .s2(s2), .run(run));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 60; i = i + 1) begin
      x = $random; #1;
      if (s2 !== a1 + a2 || run !== acc) begin errors = errors + 1; if (errors <= 3) $display("  k=%0d: s2=%0d (exp %0d) run=%0d (exp %0d)", i, s2, a1 + a2, run, acc); end
      @(posedge clk); a2 = a1; a1 = x; acc = acc + x;
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: both outputs correct over 60 inputs");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-lfsr", title="8-bit maximal-length LFSR",
 q=r"lfsr|pseudo.?random|sequence generator",
 problem="AMD asked to explain an LFSR. Build an 8-bit Fibonacci LFSR with taps 8, 6, 5, 4 that cycles through all 255 non-zero states.",
 tasks=["Shift left; the new LSB is q[7] ^ q[5] ^ q[4] ^ q[3].", "Reset to 8'h01 (never all zeros: the LFSR would lock).", "The testbench checks the period is exactly 255."],
 learn="With primitive-polynomial taps, an n-bit LFSR visits all 2^n - 1 non-zero states.",
 design="""module lfsr8 (input wire clk, rst, output reg [7:0] q);
  always @(posedge clk) begin
    if (rst) q <= 8'h01;
    else q <= {q[6:0], 1'b0};   // TODO: feedback bit instead of 1'b0
  end
endmodule
""",
 sol="""module lfsr8 (input wire clk, rst, output reg [7:0] q);
  always @(posedge clk) begin
    if (rst) q <= 8'h01;
    else q <= {q[6:0], q[7] ^ q[5] ^ q[4] ^ q[3]};
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  wire [7:0] q; reg [255:0] seen = 0; integer i, period = 0, errors = 0;
  lfsr8 dut (.clk(clk), .rst(rst), .q(q));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 1; i <= 300 && period == 0; i = i + 1) begin
      @(negedge clk);
      if (q == 0) errors = errors + 1;
      if (q == 8'h01) period = i;
      seen[q] = 1'b1;
    end
    $display("period = %0d", period);
    if (errors == 0 && period == 255) $display("PASS: maximal length, 255 states");
    else $display("FAIL: period %0d (expected 255)", period);
    $finish;
  end
endmodule
"""),
dict(id="iq-acc-addr", title="Accumulate data per address",
 q=r"accumulates data per address|per address",
 problem="NVIDIA asked for RTL that accumulates incoming data per address. Keep 8 running totals and add each valid input to its address.",
 tasks=["On valid, total[addr] <= total[addr] + data (same clock).", "Back-to-back writes to the same address must both count.", "rd_addr reads a total combinationally."],
 learn="A read-modify-write in one cycle avoids the hazard of a pipelined accumulate (which needs forwarding).",
 design="""module acc_addr (input wire clk, rst, valid, input wire [2:0] addr, rd_addr, input wire [7:0] data, output wire [15:0] total);
  reg [15:0] mem [0:7]; integer i;
  always @(posedge clk) begin
    if (rst) for (i = 0; i < 8; i = i + 1) mem[i] <= 0;
    // TODO: else accumulate
  end
  assign total = mem[rd_addr];
endmodule
""",
 sol="""module acc_addr (input wire clk, rst, valid, input wire [2:0] addr, rd_addr, input wire [7:0] data, output wire [15:0] total);
  reg [15:0] mem [0:7]; integer i;
  always @(posedge clk) begin
    if (rst) for (i = 0; i < 8; i = i + 1) mem[i] <= 0;
    else if (valid) mem[addr] <= mem[addr] + data;
  end
  assign total = mem[rd_addr];
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg valid = 0; reg [2:0] addr = 0, rd_addr = 0; reg [7:0] data = 0; wire [15:0] total;
  integer rf [0:7]; integer i, errors = 0;
  acc_addr dut (.clk(clk), .rst(rst), .valid(valid), .addr(addr), .rd_addr(rd_addr), .data(data), .total(total));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 8; i = i + 1) rf[i] = 0;
    @(negedge clk); rst = 0;
    for (i = 0; i < 200; i = i + 1) begin
      valid = $random; addr = (i % 5 < 2) ? 3'd3 : $random; data = $random;
      @(posedge clk); if (valid) rf[addr] = rf[addr] + data;
      @(negedge clk);
    end
    valid = 0;
    for (i = 0; i < 8; i = i + 1) begin
      rd_addr = i; #1;
      $display("total[%0d] = %0d (expected %0d)", i, total, rf[i]);
      if (total !== rf[i]) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 8 totals correct");
    else $display("FAIL: %0d totals wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-clkgen", title="Testbench clocks: 2 GHz, start after 100 ns",
 q=r"^(?!.*divid).*(generate.{0,20}clock|clock (signal )?at a (given|certain) frequency|2 ghz|clock that stays off|clock generator|skewed clock|always, and using forever|timescale)",
 problem="Writing clocks is a classic screen question (AMD, Qualcomm, Meta, Synopsys): a 2 GHz clock, and a clock that stays low until 100 ns and then toggles.",
 tasks=["clk_a: 2 GHz (0.5 ns period) from time 0, starting low. Mind the timescale precision.", "clk_b: 100 MHz, held at 0 until 100 ns, then toggling (first rising edge at 105 ns).", "Write them in the clkgen module; the testbench measures both."],
 learn="`timescale 1ns/1ps lets #0.25 mean 250 ps; with 1ns/1ns precision it rounds to 0 and the clock breaks.",
 design="""`timescale 1ns/1ps
module clkgen (output reg clk_a, output reg clk_b);
  // TODO: clk_a, 2 GHz
  // TODO: clk_b, 0 until 100 ns, then 100 MHz
endmodule
""",
 sol="""`timescale 1ns/1ps
module clkgen (output reg clk_a, output reg clk_b);
  initial clk_a = 0;
  always #0.25 clk_a = ~clk_a;
  initial begin
    clk_b = 0;
    #100;
    forever #5 clk_b = ~clk_b;
  end
endmodule
""",
 tb="""`timescale 1ns/1ps
module tb;
  wire clk_a, clk_b; realtime t1, t2, tb1, tb2; integer errors = 0;
  clkgen dut (.clk_a(clk_a), .clk_b(clk_b));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #10; @(posedge clk_a); t1 = $realtime; @(posedge clk_a); t2 = $realtime;
    $display("clk_a period = %0.3f ns", t2 - t1);
    if (t2 - t1 != 0.5) errors = errors + 1;
    @(posedge clk_b); tb1 = $realtime; @(posedge clk_b); tb2 = $realtime;
    $display("clk_b first rise %0.1f ns, period %0.1f ns", tb1, tb2 - tb1);
    if (tb1 != 105 || tb2 - tb1 != 10) errors = errors + 1;
    if (errors == 0) $display("PASS: both clocks correct");
    else $display("FAIL: %0d clock checks wrong", errors);
    $finish;
  end
  initial begin #400 $display("FAIL: clocks not toggling"); $finish; end
endmodule
"""),
]
