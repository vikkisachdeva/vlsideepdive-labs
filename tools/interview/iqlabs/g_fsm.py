G = ("iq-fsm", "State machine classics")
CLKTB = """  reg clk = 0, rst = 1;
  always #5 clk = ~clk;
"""
DET_TB = """module tb;
""" + CLKTB + """  reg din = 0; reg [3:0] hist = 0; wire det; integer i, errors = 0, hits = 0;
  DUT dut (.clk(clk), .rst(rst), .din(din), .det(det));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 300; i = i + 1) begin
      din = (i < 12) ? (12'b1011_011_0110 >> (11 - i)) : $random;
      CHECK
      @(posedge clk); hist = {hist[2:0], din};
      @(negedge clk);
    end
    if (errors == 0 && hits > 5) $display("PASS: 1011 detected with overlaps (%0d hits)", hits);
    else $display("FAIL: %0d wrong cycles", errors);
    $finish;
  end
endmodule
"""
LABS = [
dict(id="iq-det1011-mealy", title="1011 detector, Mealy, overlapping",
 q=r"(detect|detector|sequence|pattern|seen|stream).{0,40}\b(1011|1101|101|10110|01101|10101|0110)\b|sequence detector|pattern detector|detects? (a )?(given|certain|binary)? ?sequence|three 3-bit packets",
 problem="The single most reported FSM question: detect 1011 on a serial input, allowing overlaps (101011 contains one, 1011011 contains two).",
 tasks=["Mealy: det = 1 in the same cycle the final 1 arrives.", "Overlapping: after a hit, continue from the matched suffix 1, not from the start.", "Four states: S0, S1 (1), S10, S101."],
 learn="On a hit in S101, the trailing 1 is also a leading 1: go to S1, not S0.",
 design="""module det1011 (input wire clk, rst, din, output wire det);
  localparam S0 = 2'd0, S1 = 2'd1, S10 = 2'd2, S101 = 2'd3;
  reg [1:0] st, nx;
  always @(posedge clk) st <= rst ? S0 : nx;
  always @(*) begin
    case (st)
      S0:   nx = din ? S1 : S0;
      S1:   nx = din ? S1 : S10;
      // TODO: S10 and S101
      default: nx = S0;
    endcase
  end
  assign det = 1'b0;   // TODO: Mealy output
endmodule
""",
 sol="""module det1011 (input wire clk, rst, din, output wire det);
  localparam S0 = 2'd0, S1 = 2'd1, S10 = 2'd2, S101 = 2'd3;
  reg [1:0] st, nx;
  always @(posedge clk) st <= rst ? S0 : nx;
  always @(*) begin
    case (st)
      S0:   nx = din ? S1 : S0;
      S1:   nx = din ? S1 : S10;
      S10:  nx = din ? S101 : S0;
      S101: nx = din ? S1 : S10;
      default: nx = S0;
    endcase
  end
  assign det = (st == S101) && din;
endmodule
""",
 tb=DET_TB.replace("DUT", "det1011").replace("CHECK", "#1 if (det !== ({hist[2:0], din} == 4'b1011)) begin errors = errors + 1; if (errors <= 3) $display(\"  cycle %0d: det=%b\", i, det); end if (det) hits = hits + 1;")),
dict(id="iq-det1011-moore", title="1011 detector, Moore, overlapping",
 q=r"moore.{0,40}(detect|sequence|1011)|mealy and moore|moore machines? that detect|draw a mealy|mealy or moore|types of finite state|mealy versus moore|between mealy and moore|between moore and mealy|convert one into the other|advantages of mealy",
 problem="The follow-up every interviewer asks: now make it Moore. The output depends only on the state, so you need one more state and det comes one cycle later.",
 tasks=["Five states; det = 1 while in the 'seen 1011' state.", "det is high in the cycle after the final 1.", "Keep overlaps: from S1011, a 0 goes to S10 and a 1 to S1."],
 learn="Moore = output from state only: glitch-free, one cycle later, one extra state.",
 design="""module det1011m (input wire clk, rst, din, output wire det);
  localparam S0 = 3'd0, S1 = 3'd1, S10 = 3'd2, S101 = 3'd3, S1011 = 3'd4;
  reg [2:0] st, nx;
  always @(posedge clk) st <= rst ? S0 : nx;
  always @(*) begin
    case (st)
      S0:  nx = din ? S1 : S0;
      S1:  nx = din ? S1 : S10;
      S10: nx = din ? S101 : S0;
      // TODO: S101 and S1011
      default: nx = S0;
    endcase
  end
  assign det = 1'b0;   // TODO: Moore output
endmodule
""",
 sol="""module det1011m (input wire clk, rst, din, output wire det);
  localparam S0 = 3'd0, S1 = 3'd1, S10 = 3'd2, S101 = 3'd3, S1011 = 3'd4;
  reg [2:0] st, nx;
  always @(posedge clk) st <= rst ? S0 : nx;
  always @(*) begin
    case (st)
      S0:    nx = din ? S1 : S0;
      S1:    nx = din ? S1 : S10;
      S10:   nx = din ? S101 : S0;
      S101:  nx = din ? S1011 : S10;
      S1011: nx = din ? S1 : S10;
      default: nx = S0;
    endcase
  end
  assign det = (st == S1011);
endmodule
""",
 tb=DET_TB.replace("DUT", "det1011m").replace("CHECK", "#1 if (det !== (hist == 4'b1011)) begin errors = errors + 1; if (errors <= 3) $display(\"  cycle %0d: det=%b\", i, det); end if (det) hits = hits + 1;")),
dict(id="iq-divisible", title="Serial divisible-by-5 and by-3 checker",
 q=r"divisible by (5|five|3|three)|detects modulo 5|modulo 3|module 3|mod(ulo)? ?3 of|divisib",
 problem="Apple and NVIDIA ask: bits arrive MSB first; after each bit, say whether the number so far is divisible by 5 (and by 3).",
 tasks=["Keep the remainder, not the number: r_new = (2*r + bit) mod 5.", "div5 = 1 when the remainder after this bit is 0 (Mealy).", "Same for div3 with 3 states."],
 learn="A remainder FSM needs only N states for divide-by-N, however long the number gets.",
 design="""module divisible (input wire clk, rst, din, output wire div5, div3);
  reg [2:0] r5; reg [1:0] r3;
  wire [2:0] n5 = 0;   // TODO: (2*r5 + din) mod 5
  wire [1:0] n3 = 0;   // TODO: (2*r3 + din) mod 3
  always @(posedge clk) if (rst) begin r5 <= 0; r3 <= 0; end else begin r5 <= n5; r3 <= n3; end
  assign div5 = (n5 == 0);
  assign div3 = (n3 == 0);
endmodule
""",
 sol="""module divisible (input wire clk, rst, din, output wire div5, div3);
  reg [2:0] r5; reg [1:0] r3;
  wire [3:0] t5 = {r5, din};          // 2*r5 + din, 0..9
  wire [2:0] t3 = {r3, din};          // 2*r3 + din, 0..5
  wire [2:0] n5 = (t5 >= 5) ? t5 - 5 : t5;
  wire [1:0] n3 = (t3 >= 3) ? t3 - 3 : t3;
  always @(posedge clk) if (rst) begin r5 <= 0; r3 <= 0; end else begin r5 <= n5; r3 <= n3; end
  assign div5 = (n5 == 0);
  assign div3 = (n3 == 0);
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg din = 0; wire div5, div3; integer i, val = 0, errors = 0;
  divisible dut (.clk(clk), .rst(rst), .din(din), .div5(div5), .div3(div3));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 400; i = i + 1) begin
      if (i % 20 == 0) begin rst = 1; @(negedge clk); rst = 0; val = 0; end
      din = $random; val = (val * 2 + din) % 15; #1;
      if (div5 !== (val % 5 == 0) || div3 !== (val % 3 == 0)) begin errors = errors + 1; if (errors <= 3) $display("  value mod 15 = %0d: div5=%b div3=%b", val, div5, div3); end
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: divisibility correct after every bit");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-vending", title="Vending machine",
 q=r"vending",
 problem="NVIDIA asked for a vending machine module. An item costs 15. Coins are 5 and 10. Vend when 15 or more is inserted and return 5 change on 20.",
 tasks=["One coin per cycle at most: n5 or n10 pulses.", "vend pulses with the coin that reaches 15 or more; change = 1 when 20 was paid.", "Credit returns to 0 after a vend."],
 learn="The state is the credit (0, 5, 10); vend and change are Mealy outputs of the coin that completes it.",
 design="""module vending (input wire clk, rst, n5, n10, output wire vend, change);
  reg [4:0] credit;
  wire [4:0] total = credit + (n5 ? 5 : 0) + (n10 ? 10 : 0);
  assign vend = 1'b0;     // TODO
  assign change = 1'b0;   // TODO
  always @(posedge clk) begin
    if (rst) credit <= 0;
    // TODO: keep the total, or clear it after a vend
  end
endmodule
""",
 sol="""module vending (input wire clk, rst, n5, n10, output wire vend, change);
  reg [4:0] credit;
  wire [4:0] total = credit + (n5 ? 5 : 0) + (n10 ? 10 : 0);
  assign vend = (total >= 15);
  assign change = (total == 20);
  always @(posedge clk) begin
    if (rst) credit <= 0;
    else credit <= vend ? 5'd0 : total;
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg n5 = 0, n10 = 0; wire vend, change; integer i, c = 0, t, errors = 0, vends = 0, changes = 0;
  vending dut (.clk(clk), .rst(rst), .n5(n5), .n10(n10), .vend(vend), .change(change));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 300; i = i + 1) begin
      t = $random % 3; if (t < 0) t = -t; n5 = (t == 1); n10 = (t == 2);
      t = c + (n5 ? 5 : 0) + (n10 ? 10 : 0); #1;
      if (vend !== (t >= 15) || change !== (t == 20)) begin errors = errors + 1; if (errors <= 3) $display("  credit %0d + coin: vend=%b change=%b", c, vend, change); end
      if (vend) vends = vends + 1; if (change) changes = changes + 1;
      @(posedge clk); c = (t >= 15) ? 0 : t;
      @(negedge clk);
    end
    if (errors == 0 && vends > 10 && changes > 2) $display("PASS: %0d vends, %0d with change", vends, changes);
    else $display("FAIL: %0d wrong cycles", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-rr-arbiter", title="Round-robin arbiter, 4 requesters",
 q=r"round.robin|arbitration|arbiter",
 problem="Round-robin arbiters came up at Qualcomm, Cisco, SiFive, Marvell and AMD. Four requesters share one resource; the last winner gets lowest priority next time.",
 tasks=["grant is one-hot (or 0 when nobody requests), registered.", "Search from the requester after the last winner, wrapping around.", "The testbench checks fairness: a waiting requester is served within 4 grants."],
 learn="Keep a pointer to the last winner; rotate the request vector, pick the first 1, rotate back.",
 design="""module rr_arb (input wire clk, rst, input wire [3:0] req, output reg [3:0] grant);
  reg [1:0] last;   // index of the last winner
  reg [3:0] g; integer k; reg found; reg [1:0] idx;
  always @(*) begin
    g = 0; found = 0;
    for (k = 1; k <= 4; k = k + 1) begin
      idx = last + k;
      // TODO: take the first requester after 'last'
    end
  end
  always @(posedge clk) begin
    if (rst) begin grant <= 0; last <= 2'd3; end
    else begin
      grant <= g;
      // TODO: update last when something was granted
    end
  end
endmodule
""",
 sol="""module rr_arb (input wire clk, rst, input wire [3:0] req, output reg [3:0] grant);
  reg [1:0] last;
  reg [3:0] g; integer k; reg found; reg [1:0] idx, win;
  always @(*) begin
    g = 0; found = 0; win = last;
    for (k = 1; k <= 4; k = k + 1) begin
      idx = last + k;
      if (!found && req[idx]) begin g[idx] = 1'b1; found = 1; win = idx; end
    end
  end
  always @(posedge clk) begin
    if (rst) begin grant <= 0; last <= 2'd3; end
    else begin
      grant <= g;
      if (found) last <= win;
    end
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg [3:0] req = 0; wire [3:0] grant; integer i, k, errors = 0, lastw = 3, w, exp, grants = 0;
  integer waited [0:3];
  rr_arb dut (.clk(clk), .rst(rst), .req(req), .grant(grant));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (k = 0; k < 4; k = k + 1) waited[k] = 0;
    @(negedge clk); rst = 0;
    for (i = 0; i < 300; i = i + 1) begin
      req = (i < 40) ? 4'b1111 : $random;
      exp = -1; for (k = 1; k <= 4; k = k + 1) if (exp < 0 && req[(lastw + k) % 4]) exp = (lastw + k) % 4;
      @(posedge clk); #1;
      if (exp < 0) begin if (grant !== 0) errors = errors + 1; end
      else begin
        if (grant !== (4'b1 << exp)) begin errors = errors + 1; if (errors <= 3) $display("  req=%b last=%0d: grant=%b expected %b", req, lastw, grant, 4'b1 << exp); end
        lastw = exp; grants = grants + 1;
      end
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: %0d grants, all in round-robin order", grants);
    else $display("FAIL: %0d wrong grants", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-prio-arbiter", title="Fixed-priority arbiter with async reset",
 q=r"r1 (has the )?highest priority|fixed.priority|priority (arbiter|encoder)|fixed priority",
 problem="AMD: requests R1 to R4 with R1 highest priority drive grants G1 to G4, with an asynchronous reset. Qualcomm asks for it next to round-robin.",
 tasks=["grant is registered and one-hot: the lowest-numbered active request wins.", "Asynchronous active-high reset clears grant immediately.", "Run until PASS."],
 learn="Fixed priority is a priority encoder plus a register; req & -req finds the winner in one line.",
 design="""module prio_arb (input wire clk, rst, input wire [3:0] req, output reg [3:0] grant);
  wire [3:0] g = 4'b0;   // TODO: lowest set bit of req (bit 0 = R1)
  always @(posedge clk) begin   // TODO: asynchronous reset
    if (rst) grant <= 0; else grant <= g;
  end
endmodule
""",
 sol="""module prio_arb (input wire clk, rst, input wire [3:0] req, output reg [3:0] grant);
  wire [3:0] g = req & (~req + 4'd1);
  always @(posedge clk or posedge rst) begin
    if (rst) grant <= 0; else grant <= g;
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg [3:0] req = 0, e; wire [3:0] grant; integer i, k, errors = 0;
  prio_arb dut (.clk(clk), .rst(rst), .req(req), .grant(grant));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 100; i = i + 1) begin
      req = $random;
      e = 0; for (k = 3; k >= 0; k = k - 1) if (req[k]) e = 4'b1 << k;
      @(posedge clk); #1;
      if (grant !== e) begin errors = errors + 1; if (errors <= 3) $display("  req=%b grant=%b expected %b", req, grant, e); end
      if (i == 50) begin #2 rst = 1; #1 if (grant !== 0) begin errors = errors + 1; $display("  reset is not asynchronous"); end #2 rst = 0; end
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: fixed priority and asynchronous reset correct");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-safe-lock", title="Combination lock with alarm",
 q=r"\bsafe\b|\block\b with|\bcombination\b|\bunlock",
 problem="MaxLinear: unlock a safe on code 1011 and sound an alarm after three wrong tries. Intel added: let the owner change the code once it is open.",
 tasks=["On enter, compare code with the stored key (reset value 4'b1011).", "Right code: unlocked = 1 and the wrong count clears. Wrong code: count; on the third wrong try alarm = 1 and stays 1 until reset.", "While unlocked, set_key stores code as the new key and locks again."],
 learn="Lock FSMs are mostly registers: key, wrong count and a sticky alarm.",
 design="""module safe (input wire clk, rst, enter, set_key, input wire [3:0] code, output reg unlocked, alarm);
  reg [3:0] key; reg [1:0] wrong;
  always @(posedge clk) begin
    if (rst) begin key <= 4'b1011; wrong <= 0; unlocked <= 0; alarm <= 0; end
    else if (unlocked && set_key) begin key <= code; unlocked <= 0; end
    else if (enter && !alarm) begin
      // TODO: right code unlocks and clears wrong; wrong code counts, the 3rd sets alarm
    end
  end
endmodule
""",
 sol="""module safe (input wire clk, rst, enter, set_key, input wire [3:0] code, output reg unlocked, alarm);
  reg [3:0] key; reg [1:0] wrong;
  always @(posedge clk) begin
    if (rst) begin key <= 4'b1011; wrong <= 0; unlocked <= 0; alarm <= 0; end
    else if (unlocked && set_key) begin key <= code; unlocked <= 0; end
    else if (enter && !alarm) begin
      if (code == key) begin unlocked <= 1; wrong <= 0; end
      else begin
        unlocked <= 0;
        if (wrong == 2) alarm <= 1;
        wrong <= wrong + 1;
      end
    end
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg enter = 0, set_key = 0; reg [3:0] code = 0; wire unlocked, alarm; integer errors = 0;
  safe dut (.clk(clk), .rst(rst), .enter(enter), .set_key(set_key), .code(code), .unlocked(unlocked), .alarm(alarm));
  task try(input [3:0] c); begin @(negedge clk) begin code = c; enter = 1; end @(negedge clk) enter = 0; end endtask
  task chk(input u, input a, input [8*24-1:0] what); begin #1 if (unlocked !== u || alarm !== a) begin errors = errors + 1; $display("  %0s: unlocked=%b alarm=%b", what, unlocked, alarm); end end endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    try(4'b0000); chk(0, 0, "one wrong try");
    try(4'b1011); chk(1, 0, "right code");
    @(negedge clk) begin code = 4'b0110; set_key = 1; end @(negedge clk) set_key = 0; chk(0, 0, "new key stored");
    try(4'b1011); chk(0, 0, "old code now wrong");
    try(4'b0110); chk(1, 0, "new code opens");
    @(negedge clk) begin code = 4'b0110; set_key = 1; end @(negedge clk) set_key = 0;
    try(1); try(2); chk(0, 0, "two wrong tries");
    try(3); chk(0, 1, "third wrong try");
    try(4'b0110); chk(0, 1, "alarm stays on");
    if (errors == 0) $display("PASS: unlock, change key and alarm all correct");
    else $display("FAIL: %0d checks wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-clk-switch", title="Glitch-free clock switch",
 q=r"glitch.free clock|clock switch|clock mux",
 problem="Intel SoC integration: switch between two unrelated clocks without producing a glitch (a pulse shorter than either clock's half period).",
 tasks=["Each clock gets an enable flop clocked on its own falling edge.", "A clock's enable may only rise after the other clock's enable has fallen (cross-coupled).", "clk_out = (clk0 & en0) | (clk1 & en1). The testbench measures every pulse."],
 learn="Negedge enable flops change only while their clock is low, and the cross-coupling makes it break-before-make.",
 design="""module clk_switch (input wire clk0, clk1, rst, sel, output wire clk_out);
  reg en0, en1;
  // a naive mux glitches: assign clk_out = sel ? clk1 : clk0;
  always @(negedge clk0 or posedge rst) if (rst) en0 <= 1'b1; else en0 <= ~sel;   // TODO: also wait for en1 to be off
  always @(negedge clk1 or posedge rst) if (rst) en1 <= 1'b0; else en1 <= sel;    // TODO: also wait for en0 to be off
  assign clk_out = sel ? clk1 : clk0;   // TODO: gate each clock with its enable
endmodule
""",
 sol="""module clk_switch (input wire clk0, clk1, rst, sel, output wire clk_out);
  reg en0, en1;
  always @(negedge clk0 or posedge rst) if (rst) en0 <= 1'b1; else en0 <= ~sel & ~en1;
  always @(negedge clk1 or posedge rst) if (rst) en1 <= 1'b0; else en1 <= sel & ~en0;
  assign clk_out = (clk0 & en0) | (clk1 & en1);
endmodule
""",
 tb="""`timescale 1ns/1ps
module tb;
  reg clk0 = 0, clk1 = 0, rst = 1, sel = 0; wire clk_out;
  realtime last = 0, w, minw = 1e9; integer i, errors = 0;
  always #5 clk0 = ~clk0;      // 100 MHz, half period 5 ns
  always #3.7 clk1 = ~clk1;    // ~135 MHz, half period 3.7 ns
  clk_switch dut (.clk0(clk0), .clk1(clk1), .rst(rst), .sel(sel), .clk_out(clk_out));
  always @(clk_out) begin
    w = $realtime - last; last = $realtime;
    if (!rst && $realtime > 20 && w < 3.69) begin errors = errors + 1; if (errors <= 3) $display("  glitch: %0.2f ns pulse at %0.2f ns", w, $realtime); end
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst = 0;
    for (i = 0; i < 40; i = i + 1) begin #(17.3 + i * 1.9) sel = ~sel; end
    #50;
    if (errors == 0) $display("PASS: 40 switches, no pulse shorter than a half period");
    else $display("FAIL: %0d glitches", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-pattern-shift", title="Pattern detector with a shift register",
 q=r"shift register|constant your state machine compares|grows from 6 to 100|implement a system that outputs 1",
 problem="IMC asked what happens to a state machine when the pattern grows from 6 bits to 100. Answer: use a shift register and a comparator. Build a parameterized one.",
 tasks=["Shift din into a LEN-bit register each clock.", "det = 1 when the last LEN bits equal PATTERN (after at least LEN bits).", "The testbench uses LEN = 6 and LEN = 11."],
 learn="An FSM grows with the pattern; a shift register plus compare is LEN flops and one comparator, for any pattern.",
 design="""module pat_det #(parameter LEN = 6, parameter [LEN-1:0] PATTERN = 6'b101100)
  (input wire clk, rst, din, output wire det);
  reg [LEN-1:0] sr; reg [7:0] n;   // n counts bits received, saturating at LEN
  always @(posedge clk) begin
    if (rst) begin sr <= 0; n <= 0; end
    else begin
      // TODO: shift din in, count up to LEN
    end
  end
  assign det = 1'b0;   // TODO
endmodule
""",
 sol="""module pat_det #(parameter LEN = 6, parameter [LEN-1:0] PATTERN = 6'b101100)
  (input wire clk, rst, din, output wire det);
  reg [LEN-1:0] sr; reg [7:0] n;
  always @(posedge clk) begin
    if (rst) begin sr <= 0; n <= 0; end
    else begin
      sr <= {sr[LEN-2:0], din};
      if (n < LEN) n <= n + 1;
    end
  end
  assign det = (n >= LEN) && (sr == PATTERN);
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg din = 0; reg [31:0] h = 0; wire d6, d11; integer i, errors = 0, hits = 0;
  pat_det #(6, 6'b101100) u6 (.clk(clk), .rst(rst), .din(din), .det(d6));
  pat_det #(11, 11'b10110011101) u11 (.clk(clk), .rst(rst), .din(din), .det(d11));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 3000; i = i + 1) begin
      din = (i % 300 < 11) ? (11'b10110011101 >> (10 - i % 300)) : $random;
      @(posedge clk); h = {h[30:0], din};
      @(negedge clk);
      if (d6 !== (i >= 5 && h[5:0] == 6'b101100) || d11 !== (i >= 10 && h[10:0] == 11'b10110011101)) begin errors = errors + 1; if (errors <= 3) $display("  cycle %0d: d6=%b d11=%b", i, d6, d11); end
      if (d11) hits = hits + 1;
    end
    if (errors == 0 && hits >= 10) $display("PASS: 6-bit and 11-bit patterns detected (%0d long hits)", hits);
    else $display("FAIL: %0d wrong cycles", errors);
    $finish;
  end
endmodule
"""),
]
