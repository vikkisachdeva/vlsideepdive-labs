G = ("iq-arith", "Arithmetic and bit tricks")
LABS = [
dict(id="iq-mul-const", title="Multiply by a constant: x5 and x47",
 q=r"multipl(y|ies).{0,30}(by|times) ?(5|47|a constant)|by 47|square of a number|multiply a 2-bit",
 problem="NVIDIA asked for a circuit that multiplies by 47; Marvell for x5. Constant multipliers are built from shifts and adds, not a multiplier.",
 tasks=["y5 = x * 5 and y47 = x * 47 for an 8-bit unsigned x.", "Use shifts, + and - only: no * operator.", "Pick output widths that never overflow."],
 learn="x * 47 = (x << 5) + (x << 4) - x: one add and one subtract instead of four adds.",
 design="""module mulconst (input wire [7:0] x, output wire [10:0] y5, output wire [13:0] y47);
  // TODO: y5  = x * 5   using shifts and adds
  // TODO: y47 = x * 47  using shifts, adds and subtracts (47 = 48 - 1)
endmodule
""",
 sol="""module mulconst (input wire [7:0] x, output wire [10:0] y5, output wire [13:0] y47);
  assign y5  = (x << 2) + x;
  assign y47 = ({6'd0, x} << 5) + ({6'd0, x} << 4) - {6'd0, x};
endmodule
""",
 tb="""module tb;
  reg [7:0] x; wire [10:0] y5; wire [13:0] y47; integer i, errors = 0;
  mulconst dut (.x(x), .y5(y5), .y47(y47));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 256; i = i + 1) begin
      x = i; #2;
      if (y5 !== i * 5 || y47 !== i * 47) begin errors = errors + 1; if (errors <= 5) $display("  x=%0d y5=%0d y47=%0d", x, y5, y47); end
    end
    if (errors == 0) $display("PASS: x*5 and x*47 correct for all 256 inputs");
    else $display("FAIL: %0d of 256 wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-bcd-x5", title="BCD digit times 5",
 q=r"bcd.{0,30}(times 5|multiplied by 5|x ?5)|bcd input and outputs",
 problem="From an Intel CPU verification interview: take a 4-bit BCD digit (0 to 9) and output the result times 5 as two BCD digits.",
 tasks=["tens and ones are BCD digits of d * 5 (0 to 45).", "There is a trick that needs no adder at all: look at d * 5 for even and odd d.", "Run until PASS."],
 learn="d * 5 = (d / 2) * 10 + (d odd ? 5 : 0): tens = d >> 1, ones = d[0] ? 5 : 0.",
 design="""module bcd_x5 (input wire [3:0] d, output wire [3:0] tens, ones);
  // TODO
endmodule
""",
 sol="""module bcd_x5 (input wire [3:0] d, output wire [3:0] tens, ones);
  assign tens = {1'b0, d[3:1]};
  assign ones = d[0] ? 4'd5 : 4'd0;
endmodule
""",
 tb="""module tb;
  reg [3:0] d; wire [3:0] tens, ones; integer i, errors = 0;
  bcd_x5 dut (.d(d), .tens(tens), .ones(ones));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 10; i = i + 1) begin
      d = i; #5;
      $display("d=%0d -> %0d%0d", d, tens, ones);
      if (tens * 10 + ones !== i * 5 || ones > 9) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 10 BCD digits correct");
    else $display("FAIL: %0d of 10 wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-widths", title="Bit widths, signed multiply and sign extension",
 q=r"bits are needed to hold|bit width needed|sign-extend|truncate|multiply two signed|negative numbers stored|two's complement|smallest positive and negative|signed 16-bit",
 problem="Marvell asked how many bits A*B+C needs for 8-bit operands, and how to truncate and sign-extend. Get the widths and signedness right.",
 tasks=["mac: y = a * b + c for unsigned 8-bit a, b, c. Give y the smallest width that never overflows.", "smul: product of two signed 8-bit numbers.", "sext: sign-extend an 8-bit value to 16 bits."],
 learn="255*255+255 = 65280 < 2^16, so 16 bits; signed math needs every operand declared signed.",
 design="""module widths (
  input  wire        [7:0] a, b, c,
  output wire        [7:0] y,      // TODO: fix the width so a*b+c never overflows
  input  wire        [7:0] sa, sb, // TODO: these are two's complement numbers
  output wire       [15:0] sp,     // TODO: signed product
  input  wire        [7:0] v,
  output wire       [15:0] vx      // TODO: v sign-extended to 16 bits
);
  assign y  = a * b + c;
  assign sp = sa * sb;
  assign vx = v;
endmodule
""",
 sol="""module widths (
  input  wire        [7:0] a, b, c,
  output wire       [15:0] y,
  input  wire signed [7:0] sa, sb,
  output wire signed[15:0] sp,
  input  wire        [7:0] v,
  output wire       [15:0] vx
);
  assign y  = a * b + c;
  assign sp = sa * sb;
  assign vx = {{8{v[7]}}, v};
endmodule
""",
 tb="""module tb;
  reg [7:0] a, b, c, sa, sb, v; wire [15:0] sp, vx; integer i, errors = 0;
  wire [31:0] y;  // wide enough to see overflow
  widths dut (.a(a), .b(b), .c(c), .y(y), .sa(sa), .sb(sb), .sp(sp), .v(v), .vx(vx));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 400; i = i + 1) begin
      {a, b, c, sa, sb, v} = {$random, $random};
      if (i == 0) {a, b, c} = {8'hFF, 8'hFF, 8'hFF};
      #2;
      if (y !== a * b + c) begin errors = errors + 1; if (errors <= 3) $display("  a*b+c: %0d*%0d+%0d = %0d, got %0d", a, b, c, a * b + c, y); end
      if ($signed(sp) !== $signed(sa) * $signed(sb)) begin errors = errors + 1; if (errors <= 3) $display("  signed %0d * %0d, got %0d", $signed(sa), $signed(sb), $signed(sp)); end
      if ($signed(vx) !== $signed(v)) begin errors = errors + 1; if (errors <= 3) $display("  sext %0d, got %0d", $signed(v), $signed(vx)); end
    end
    if (errors == 0) $display("PASS: widths, signed product and sign extension correct");
    else $display("FAIL: %0d wrong results", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-bit-tricks", title="Bit tricks: power of 2, bit reverse, lowest set bit, min without if",
 q=r"power of 2|power of two|reverses the bit|reverse.{0,10}bits|bit manipulation|extract bits|position of every 1|smaller of two integers without|without (an|using) if|lowest set bit|swap two (variables|values)",
 problem="One-liners interviewers love (Maxlinear, Micron, Marvell, Intel, Cadence): power-of-2 check, bit reversal, isolating the lowest 1, and min of two numbers without if.",
 tasks=["pow2 = 1 when x is a power of 2 (x != 0 and x & (x - 1) == 0).", "rev = x with its bit order reversed.", "low1 = x with only its lowest 1 kept (x & -x).", "mn = min(x, z) without if or ?: (use a mask)."],
 learn="x & (x-1) clears the lowest set bit; x & -x keeps only it.",
 design="""module bit_tricks (input wire [7:0] x, z, output wire pow2, output wire [7:0] rev, low1, mn);
  // TODO: pow2
  // TODO: rev (a for loop in an always block, or a generate)
  // TODO: low1
  // TODO: mn without if or ?:   hint: mask = {8{x < z}}
endmodule
""",
 sol="""module bit_tricks (input wire [7:0] x, z, output wire pow2, output wire [7:0] rev, low1, mn);
  assign pow2 = (x != 0) && ((x & (x - 8'd1)) == 0);
  genvar i;
  generate for (i = 0; i < 8; i = i + 1) begin : g
    assign rev[i] = x[7 - i];
  end endgenerate
  assign low1 = x & (~x + 8'd1);
  wire [7:0] m = {8{x < z}};
  assign mn = z ^ ((x ^ z) & m);
endmodule
""",
 tb="""module tb;
  reg [7:0] x, z, r, l; wire pow2; wire [7:0] rev, low1, mn; integer i, k, errors = 0;
  bit_tricks dut (.x(x), .z(z), .pow2(pow2), .rev(rev), .low1(low1), .mn(mn));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 256; i = i + 1) begin
      x = i; z = $random; #2;
      for (k = 0; k < 8; k = k + 1) r[k] = x[7 - k];
      l = 0; for (k = 7; k >= 0; k = k - 1) if (x[k]) l = 8'd1 << k;
      if (pow2 !== (x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128)) errors = errors + 1;
      if (rev !== r || low1 !== l || mn !== ((x < z) ? x : z)) begin errors = errors + 1; if (errors <= 4) $display("  x=%b z=%0d: rev=%b low1=%b mn=%0d", x, z, rev, low1, mn); end
    end
    if (errors == 0) $display("PASS: all four tricks correct for every x");
    else $display("FAIL: %0d wrong results", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-add64-32", title="Add 64-bit numbers with one 32-bit adder",
 q=r"64-bit.{0,30}32-bit adder|32-bit adder.{0,30}64|using a 32-bit adder",
 problem="AMD asked how to add two 64-bit numbers when you only have a 32-bit adder. Do it in two cycles, carrying between them.",
 tasks=["On start, latch a and b. Cycle 1 adds the low halves; cycle 2 adds the high halves plus the saved carry.", "Raise done for one cycle with the 65-bit result in sum (bit 64 is the carry out).", "Use a single 32-bit add expression, reused in both cycles."],
 learn="Time-multiplexing an adder trades latency for area; the carry is the only state that crosses cycles.",
 design="""module add64 (input wire clk, rst, start, input wire [63:0] a, b, output reg done, output reg [64:0] sum);
  reg [63:0] ra, rb; reg c; reg [1:0] st;
  wire [31:0] x = (st == 2'd1) ? ra[31:0] : ra[63:32];
  wire [31:0] y = (st == 2'd1) ? rb[31:0] : rb[63:32];
  wire [32:0] s = x + y + ((st == 2'd2) ? c : 1'b0);   // the only adder
  always @(posedge clk) begin
    done <= 1'b0;
    if (rst) st <= 2'd0;
    else case (st)
      2'd0: if (start) begin ra <= a; rb <= b; st <= 2'd1; end
      2'd1: begin
        // TODO: save the low 32 bits of the result and the carry, go to st 2
      end
      2'd2: begin
        // TODO: write the high half and carry out into sum, pulse done, back to st 0
      end
    endcase
  end
endmodule
""",
 sol="""module add64 (input wire clk, rst, start, input wire [63:0] a, b, output reg done, output reg [64:0] sum);
  reg [63:0] ra, rb; reg c; reg [1:0] st;
  wire [31:0] x = (st == 2'd1) ? ra[31:0] : ra[63:32];
  wire [31:0] y = (st == 2'd1) ? rb[31:0] : rb[63:32];
  wire [32:0] s = x + y + ((st == 2'd2) ? c : 1'b0);
  always @(posedge clk) begin
    done <= 1'b0;
    if (rst) st <= 2'd0;
    else case (st)
      2'd0: if (start) begin ra <= a; rb <= b; st <= 2'd1; end
      2'd1: begin sum[31:0] <= s[31:0]; c <= s[32]; st <= 2'd2; end
      2'd2: begin sum[64:32] <= s; done <= 1'b1; st <= 2'd0; end
    endcase
  end
endmodule
""",
 tb="""module tb;
  reg clk = 0, rst = 1, start = 0; reg [63:0] a, b; wire done; wire [64:0] sum; integer i, errors = 0;
  add64 dut (.clk(clk), .rst(rst), .start(start), .a(a), .b(b), .done(done), .sum(sum));
  always #5 clk = ~clk;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(posedge clk); rst <= 0;
    for (i = 0; i < 50; i = i + 1) begin
      a = {$random, $random}; b = {$random, $random};
      if (i == 0) begin a = 64'hFFFF_FFFF_FFFF_FFFF; b = 64'd1; end
      if (i == 1) begin a = 64'h0000_0000_FFFF_FFFF; b = 64'd1; end
      @(negedge clk) start = 1; @(negedge clk) start = 0;
      wait (done === 1'b1); @(negedge clk);
      if (sum !== {1'b0, a} + {1'b0, b}) begin errors = errors + 1; if (errors <= 3) $display("  %h + %h = %h, got %h", a, b, {1'b0, a} + {1'b0, b}, sum); end
    end
    if (errors == 0) $display("PASS: 50 additions correct, including carries between the halves");
    else $display("FAIL: %0d of 50 wrong", errors);
    $finish;
  end
  initial begin #20000 $display("FAIL: done never came"); $finish; end
endmodule
"""),
]
