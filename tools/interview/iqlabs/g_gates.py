G = ("iq-gates", "Gate and MUX puzzles")
MUX2 = """// Given: a 2:1 multiplexer. y = s ? d1 : d0
module mux2 (input wire d0, d1, s, output wire y);
  assign y = s ? d1 : d0;
endmodule

"""
LABS = [
dict(id="iq-xor-mux", title="XOR and XNOR from a 2:1 MUX",
 q=r"(xor|xnor).{0,40}(mux|multiplexer)|(mux|multiplexer).{0,40}(xor|xnor)",
 problem="A favourite at Qualcomm, NVIDIA, Google and Micron: build XOR and XNOR using only 2:1 multiplexers (one inverter on b is allowed).",
 tasks=["Use mux2 instances only (plus ~b): no ^ operator.", "x = a XOR b, xn = a XNOR b.", "Run: the testbench checks all four input combinations."],
 learn="A MUX is a universal gate: the select line picks between b and ~b.",
 design=MUX2 + """module xor_mux (input wire a, b, output wire x, xn);
  wire nb = ~b;
  // TODO: x = a ^ b using one mux2 (hint: select with a)
  // TODO: xn = ~(a ^ b) using one mux2
endmodule
""",
 sol=MUX2 + """module xor_mux (input wire a, b, output wire x, xn);
  wire nb = ~b;
  mux2 m_x  (.d0(b),  .d1(nb), .s(a), .y(x));
  mux2 m_xn (.d0(nb), .d1(b),  .s(a), .y(xn));
endmodule
""",
 tb="""module tb;
  reg a, b; wire x, xn; integer i, errors = 0;
  xor_mux dut (.a(a), .b(b), .x(x), .xn(xn));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i; #10;
      $display("a=%b b=%b | x=%b xn=%b", a, b, x, xn);
      if (x !== (a ^ b) || xn !== ~(a ^ b)) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: XOR and XNOR correct for all 4 inputs");
    else $display("FAIL: %0d of 4 cases wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-gates-mux", title="AND, OR, NAND and NOT from MUXes",
 q=r"\b(and|or|nand|nor|not|inverter|gates?)\b.{0,25}\b(using|from|with)\b.{0,15}(mux|multiplexer)|(mux|multiplexer)e?s?.{0,25}\b(create|make|build|implement|design)\b.{0,20}\b(nand|and|or|gates?|inverter)\b|basic gates.{0,20}mux|gate implementation using mux|block one input of an and",
 problem="Asked at AMD, Marvell, Cadence, Broadcom and Qualcomm: build the basic gates from 2:1 multiplexers and the constants 0 and 1.",
 tasks=["Use only mux2 instances and the constants 1'b0 and 1'b1.", "and_o, or_o, nand_o and not_a.", "Run until PASS."],
 learn="Tie a data input to a constant and a MUX becomes AND, OR or NOT; chain two for NAND.",
 design=MUX2 + """module gates_mux (input wire a, b, output wire and_o, or_o, nand_o, not_a);
  // TODO: not_a  = ~a        (one mux2, data inputs are constants)
  // TODO: and_o  = a & b     (one mux2)
  // TODO: or_o   = a | b     (one mux2)
  // TODO: nand_o = ~(a & b)  (two mux2s)
endmodule
""",
 sol=MUX2 + """module gates_mux (input wire a, b, output wire and_o, or_o, nand_o, not_a);
  wire nb;
  mux2 m_not  (.d0(1'b1), .d1(1'b0), .s(a), .y(not_a));
  mux2 m_and  (.d0(1'b0), .d1(b),    .s(a), .y(and_o));
  mux2 m_or   (.d0(b),    .d1(1'b1), .s(a), .y(or_o));
  mux2 m_nb   (.d0(1'b1), .d1(1'b0), .s(b), .y(nb));
  mux2 m_nand (.d0(1'b1), .d1(nb),   .s(a), .y(nand_o));
endmodule
""",
 tb="""module tb;
  reg a, b; wire and_o, or_o, nand_o, not_a; integer i, errors = 0;
  gates_mux dut (.a(a), .b(b), .and_o(and_o), .or_o(or_o), .nand_o(nand_o), .not_a(not_a));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i; #10;
      $display("a=%b b=%b | and=%b or=%b nand=%b not_a=%b", a, b, and_o, or_o, nand_o, not_a);
      if (and_o !== (a & b) || or_o !== (a | b) || nand_o !== ~(a & b) || not_a !== ~a) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all four gates correct");
    else $display("FAIL: %0d of 4 cases wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-fa-mux", title="Full adder from 2:1 MUXes",
 q=r"full adder.{0,20}(mux|multiplexer)",
 problem="AMD and others ask: build a full adder with nothing but 2:1 multiplexers.",
 tasks=["Use only mux2 instances and constants (no ^ & | operators).", "sum = a ^ b ^ cin, cout = majority(a, b, cin).", "Hint: p = a ^ b; then sum = p ? ~cin : cin and cout = p ? cin : a."],
 learn="The propagate signal p selects between the carry-in and a generate value.",
 design=MUX2 + """module fa_mux (input wire a, b, cin, output wire sum, cout);
  wire nb, p, np;
  mux2 m_nb (.d0(1'b1), .d1(1'b0), .s(b), .y(nb));   // nb = ~b
  // TODO: p = a ^ b
  // TODO: sum = p ^ cin
  // TODO: cout
endmodule
""",
 sol=MUX2 + """module fa_mux (input wire a, b, cin, output wire sum, cout);
  wire nb, p, ncin;
  mux2 m_nb   (.d0(1'b1), .d1(1'b0), .s(b),   .y(nb));
  mux2 m_p    (.d0(b),    .d1(nb),   .s(a),   .y(p));
  mux2 m_ncin (.d0(1'b1), .d1(1'b0), .s(cin), .y(ncin));
  mux2 m_sum  (.d0(cin),  .d1(ncin), .s(p),   .y(sum));
  mux2 m_cout (.d0(a),    .d1(cin),  .s(p),   .y(cout));
endmodule
""",
 tb="""module tb;
  reg a, b, cin; wire sum, cout; integer i, errors = 0;
  fa_mux dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 8; i = i + 1) begin
      {a, b, cin} = i; #10;
      $display("a=%b b=%b cin=%b | cout sum = %b%b", a, b, cin, cout, sum);
      if ({cout, sum} !== a + b + cin) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: full adder correct for all 8 inputs");
    else $display("FAIL: %0d of 8 cases wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-xor3-mux4", title="3-input XOR from one 4:1 MUX",
 q=r"3-input xor|xor gate using a 4:1|three.input xor",
 problem="From Qualcomm: implement y = a ^ b ^ c with a single 4:1 multiplexer (an inverter on c is allowed).",
 tasks=["Drive sel with {a, b}.", "Choose each data input from c, ~c, 0 or 1.", "Run until PASS."],
 learn="Any n-input function fits one 2^(n-1):1 MUX: the last input becomes the data.",
 design="""// Given: 4:1 multiplexer
module mux4 (input wire [3:0] d, input wire [1:0] s, output wire y);
  assign y = d[s];
endmodule

module xor3 (input wire a, b, c, output wire y);
  // TODO: one mux4 with s = {a, b}
endmodule
""",
 sol="""// Given: 4:1 multiplexer
module mux4 (input wire [3:0] d, input wire [1:0] s, output wire y);
  assign y = d[s];
endmodule

module xor3 (input wire a, b, c, output wire y);
  // s = {a,b}: 00 -> c, 01 -> ~c, 10 -> ~c, 11 -> c
  mux4 m (.d({c, ~c, ~c, c}), .s({a, b}), .y(y));
endmodule
""",
 tb="""module tb;
  reg a, b, c; wire y; integer i, errors = 0;
  xor3 dut (.a(a), .b(b), .c(c), .y(y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 8; i = i + 1) begin
      {a, b, c} = i; #10;
      $display("a=%b b=%b c=%b | y=%b", a, b, c, y);
      if (y !== (a ^ b ^ c)) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: 3-input XOR correct");
    else $display("FAIL: %0d of 8 cases wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-mux-tree", title="8:1 and 16:1 MUX from 2:1 MUXes",
 q=r"(4:1|8:1|16:1|16x1|8x1|4x1|10:1).{0,30}(mux|multiplexer).{0,30}(2:1|2x1|2-1|4:1)|how many 2:1 mux|mux.{0,10}from 2:1|convert between mux sizes",
 problem="Synopsys, Samsung, Marvell and Intel all ask it: build bigger multiplexers from 2:1 MUXes, and say how many you need.",
 tasks=["mux8: 8 inputs, 3-bit select, built from mux2 instances (7 of them).", "mux16: 16 inputs, 4-bit select (15 mux2s, or two mux8s and one mux2).", "Run until PASS."],
 learn="An N:1 tree needs N-1 two-input MUXes: each one removes one input.",
 design=MUX2 + """module mux8 (input wire [7:0] d, input wire [2:0] s, output wire y);
  // TODO: three levels of mux2 (4 + 2 + 1)
endmodule

module mux16 (input wire [15:0] d, input wire [3:0] s, output wire y);
  // TODO: two mux8 and one mux2
endmodule
""",
 sol=MUX2 + """module mux8 (input wire [7:0] d, input wire [2:0] s, output wire y);
  wire [3:0] l1; wire [1:0] l2;
  genvar i;
  generate for (i = 0; i < 4; i = i + 1) begin : g1
    mux2 m (.d0(d[2*i]), .d1(d[2*i+1]), .s(s[0]), .y(l1[i]));
  end endgenerate
  mux2 m20 (.d0(l1[0]), .d1(l1[1]), .s(s[1]), .y(l2[0]));
  mux2 m21 (.d0(l1[2]), .d1(l1[3]), .s(s[1]), .y(l2[1]));
  mux2 m3  (.d0(l2[0]), .d1(l2[1]), .s(s[2]), .y(y));
endmodule

module mux16 (input wire [15:0] d, input wire [3:0] s, output wire y);
  wire lo, hi;
  mux8 ml (.d(d[7:0]),  .s(s[2:0]), .y(lo));
  mux8 mh (.d(d[15:8]), .s(s[2:0]), .y(hi));
  mux2 mt (.d0(lo), .d1(hi), .s(s[3]), .y(y));
endmodule
""",
 tb="""module tb;
  reg [15:0] d; reg [3:0] s; wire y8, y16; integer i, j, errors = 0;
  mux8  u8  (.d(d[7:0]), .s(s[2:0]), .y(y8));
  mux16 u16 (.d(d), .s(s), .y(y16));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 40; i = i + 1) begin
      d = $random;
      for (j = 0; j < 16; j = j + 1) begin
        s = j; #2;
        if (y16 !== d[s] || y8 !== d[s[2:0]]) begin
          errors = errors + 1;
          if (errors <= 5) $display("  d=%h s=%0d: y8=%b y16=%b", d, s, y8, y16);
        end
      end
    end
    if (errors == 0) $display("PASS: mux8 and mux16 correct on 640 checks");
    else $display("FAIL: %0d wrong outputs", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-universal", title="XOR from NOR only and from NAND only",
 q=r"xor.{0,20}only nor|xor.{0,20}only nand|universal gates|nor gate only from nand|nor.{0,20}from nand|or gate using nand|realize logic functions with universal",
 problem="Classic campus question: NAND and NOR are universal. Build XOR from NOR gates only, and from NAND gates only.",
 tasks=["x_nor: XOR using only the nor primitive (5 gates).", "x_nand: XOR using only the nand primitive (4 gates).", "Run until PASS."],
 learn="With NOR, the natural result is XNOR; one more NOR used as an inverter gives XOR.",
 design="""module xor_univ (input wire a, b, output wire x_nor, x_nand);
  // TODO: x_nor  = a ^ b with nor gates only, e.g. nor g1 (n1, a, b);
  // TODO: x_nand = a ^ b with nand gates only
endmodule
""",
 sol="""module xor_univ (input wire a, b, output wire x_nor, x_nand);
  wire n1, n2, n3, xn;
  nor g1 (n1, a, b);
  nor g2 (n2, a, n1);      // ~a & b
  nor g3 (n3, b, n1);      // a & ~b
  nor g4 (xn, n2, n3);     // xnor
  nor g5 (x_nor, xn, xn);  // invert
  wire m1, m2, m3;
  nand h1 (m1, a, b);
  nand h2 (m2, a, m1);
  nand h3 (m3, b, m1);
  nand h4 (x_nand, m2, m3);
endmodule
""",
 tb="""module tb;
  reg a, b; wire x1, x2; integer i, errors = 0;
  xor_univ dut (.a(a), .b(b), .x_nor(x1), .x_nand(x2));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i; #10;
      $display("a=%b b=%b | nor-only=%b nand-only=%b", a, b, x1, x2);
      if (x1 !== (a ^ b) || x2 !== (a ^ b)) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: both XORs correct");
    else $display("FAIL: %0d of 4 cases wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-latch-mux", title="D latch from a MUX",
 q=r"latch.{0,30}(mux|multiplexer)|most basic sequential|asynchronous feedback loop|level-triggered versus edge",
 problem="ARM and Intel ask how storage appears from combinational logic: feed a 2:1 MUX output back to its own input and you have a latch.",
 tasks=["q follows d while en = 1 and holds while en = 0.", "Use one mux2 whose output feeds back into one data input.", "Run until PASS."],
 learn="A latch is a MUX with feedback; a flip-flop is two such latches with opposite enables.",
 design=MUX2 + """module latch_mux (input wire d, en, output wire q);
  // TODO: one mux2 with q fed back
endmodule
""",
 sol=MUX2 + """module latch_mux (input wire d, en, output wire q);
  mux2 m (.d0(q), .d1(d), .s(en), .y(q));
endmodule
""",
 tb="""module tb;
  reg d, en; wire q; integer errors = 0;
  latch_mux dut (.d(d), .en(en), .q(q));
  task check(input exp); begin #1 if (q !== exp) begin errors = errors + 1; $display("  t=%0t en=%b d=%b q=%b expected %b", $time, en, d, q, exp); end end endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    en = 1; d = 0; #5 check(0);
    d = 1; #5 check(1);           // transparent
    en = 0; #5 d = 0; #5 check(1); // holds 1
    d = 1; #5 d = 0; #5 check(1);
    en = 1; #5 check(0);           // follows again
    en = 0; d = 1; #5 check(0);    // holds 0
    if (errors == 0) $display("PASS: transparent when en = 1, holds when en = 0");
    else $display("FAIL: %0d checks wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-popcount", title="Count the 1s with full adders",
 q=r"(count|how many).{0,20}(1s|ones|1's|logic 1).{0,40}(adder|full)|5 inputs that count|count the number of 1",
 problem="NVIDIA and Marvell ask: count how many of the inputs are 1, using only half and full adders.",
 tasks=["Five 1-bit inputs, 3-bit count.", "Use the given ha and fa modules only.", "A full adder is a 3:2 compressor: it adds three bits of the same weight."],
 learn="Popcount with adders: compress bits of equal weight, then add the carries one weight up.",
 design="""module ha (input wire a, b, output wire s, c);  assign {c, s} = a + b;      endmodule
module fa (input wire a, b, ci, output wire s, c); assign {c, s} = a + b + ci; endmodule

module pop5 (input wire [4:0] x, output wire [2:0] cnt);
  // TODO: one fa on x[2:0], one ha on x[4:3], then combine
endmodule
""",
 sol="""module ha (input wire a, b, output wire s, c);  assign {c, s} = a + b;      endmodule
module fa (input wire a, b, ci, output wire s, c); assign {c, s} = a + b + ci; endmodule

module pop5 (input wire [4:0] x, output wire [2:0] cnt);
  wire s1, c1, s2, c2, c3;
  fa f1 (.a(x[0]), .b(x[1]), .ci(x[2]), .s(s1), .c(c1));
  ha h1 (.a(x[3]), .b(x[4]), .s(s2), .c(c2));
  ha h2 (.a(s1), .b(s2), .s(cnt[0]), .c(c3));
  fa f2 (.a(c1), .b(c2), .ci(c3), .s(cnt[1]), .c(cnt[2]));
endmodule
""",
 tb="""module tb;
  reg [4:0] x; wire [2:0] cnt; integer i, errors = 0;
  pop5 dut (.x(x), .cnt(cnt));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 32; i = i + 1) begin
      x = i; #5;
      if (cnt !== x[0] + x[1] + x[2] + x[3] + x[4]) begin errors = errors + 1; $display("  x=%b cnt=%0d", x, cnt); end
    end
    if (errors == 0) $display("PASS: count correct for all 32 inputs");
    else $display("FAIL: %0d of 32 wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-compare", title="Equality and 2-bit comparator from 1-bit comparators",
 q=r"^(?!.*mbist).*(comparator|two n-bit numbers are equal|check.{0,20}equal)",
 problem="Texas Instruments and Qualcomm ask: check two N-bit numbers for equality, then build a 2-bit magnitude comparator from 1-bit comparators.",
 tasks=["eq: 1 when a == b for any WIDTH (XNOR each bit, AND them all).", "cmp2: gt, eq, lt for 2-bit numbers using two cmp1 instances and a few gates.", "Run until PASS."],
 learn="The MSB decides unless it is equal; then the next bit decides.",
 design="""module cmp1 (input wire a, b, output wire gt, eq, lt);
  assign gt = a & ~b; assign lt = ~a & b; assign eq = ~(a ^ b);
endmodule

module eqn #(parameter WIDTH = 8) (input wire [WIDTH-1:0] a, b, output wire eq);
  // TODO
endmodule

module cmp2 (input wire [1:0] a, b, output wire gt, eq, lt);
  // TODO: two cmp1 instances
endmodule
""",
 sol="""module cmp1 (input wire a, b, output wire gt, eq, lt);
  assign gt = a & ~b; assign lt = ~a & b; assign eq = ~(a ^ b);
endmodule

module eqn #(parameter WIDTH = 8) (input wire [WIDTH-1:0] a, b, output wire eq);
  assign eq = &(~(a ^ b));
endmodule

module cmp2 (input wire [1:0] a, b, output wire gt, eq, lt);
  wire g1, e1, l1, g0, e0, l0;
  cmp1 c1 (.a(a[1]), .b(b[1]), .gt(g1), .eq(e1), .lt(l1));
  cmp1 c0 (.a(a[0]), .b(b[0]), .gt(g0), .eq(e0), .lt(l0));
  assign gt = g1 | (e1 & g0);
  assign lt = l1 | (e1 & l0);
  assign eq = e1 & e0;
endmodule
""",
 tb="""module tb;
  reg [7:0] a, b; wire eq8, gt, eq, lt; integer i, errors = 0;
  eqn #(8) u_eq (.a(a), .b(b), .eq(eq8));
  cmp2 u_c (.a(a[1:0]), .b(b[1:0]), .gt(gt), .eq(eq), .lt(lt));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 300; i = i + 1) begin
      a = $random; b = (i % 3 == 0) ? a : $random; #5;
      if (eq8 !== (a == b)) errors = errors + 1;
      if (gt !== (a[1:0] > b[1:0]) || eq !== (a[1:0] == b[1:0]) || lt !== (a[1:0] < b[1:0])) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: equality and 2-bit comparator correct");
    else $display("FAIL: %0d wrong results", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-sort3", title="Max and sort of three numbers",
 q=r"maximum of (the )?three|max.{0,10}three|sort.{0,20}three|sorts three|sort 6 numbers|largest value",
 problem="ARM asks for the maximum of three numbers in hardware, and AMD asks to sort with 2-input sorters. Build a 3-input sorting network.",
 tasks=["lo <= mid <= hi for unsigned 8-bit a, b, c.", "Use three compare-and-swap stages (a sorting network), no loops.", "max is hi."],
 learn="A sorting network is a fixed set of compare-and-swap blocks: 3 for 3 inputs, 12 for 6.",
 design="""module sort3 (input wire [7:0] a, b, c, output wire [7:0] lo, mid, hi);
  // TODO: stage 1 sort (a, b), stage 2 sort (larger, c), stage 3 sort the two smaller
endmodule
""",
 sol="""module sort3 (input wire [7:0] a, b, c, output wire [7:0] lo, mid, hi);
  wire [7:0] s1l = (a < b) ? a : b, s1h = (a < b) ? b : a;
  wire [7:0] s2l = (s1h < c) ? s1h : c;
  assign hi  = (s1h < c) ? c : s1h;
  assign lo  = (s1l < s2l) ? s1l : s2l;
  assign mid = (s1l < s2l) ? s2l : s1l;
endmodule
""",
 tb="""module tb;
  reg [7:0] a, b, c; wire [7:0] lo, mid, hi; integer i, errors = 0;
  reg [7:0] x, y, z, t;
  sort3 dut (.a(a), .b(b), .c(c), .lo(lo), .mid(mid), .hi(hi));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 500; i = i + 1) begin
      a = $random; b = (i % 7 == 0) ? a : $random; c = $random; #5;
      x = a; y = b; z = c;
      if (x > y) begin t = x; x = y; y = t; end
      if (y > z) begin t = y; y = z; z = t; end
      if (x > y) begin t = x; x = y; y = t; end
      if (lo !== x || mid !== y || hi !== z) begin errors = errors + 1; if (errors <= 5) $display("  %0d %0d %0d -> %0d %0d %0d", a, b, c, lo, mid, hi); end
    end
    if (errors == 0) $display("PASS: 500 random triples sorted");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
]
