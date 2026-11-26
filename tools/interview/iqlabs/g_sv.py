G = ("iq-sv", "SystemVerilog testbench puzzles")
EMPTY = """// Nothing to design: this lab is all testbench. See the Testbench pane.
module dummy;
endmodule
"""
LABS = [
dict(id="iq-fork-kill", title="fork/join: kill B when any finishes",
 q=r"fork|join_any|join_none|disable only one|four processes|kill b",
 problem="Amazon asked: four processes A, B, C, D run in parallel. When any of them finishes, kill B; when all the others have finished, print Done. Qualcomm and NXP ask the fork-join variants.",
 tasks=["Start A to D with fork ... join_any so you resume at the first finish.", "Stop B with disable on its named block, then wait fork for the rest.", "The testbench checks B never finishes and Done comes after A, C and D."],
 learn="join_any returns at the first finish; disable kills a named block; wait fork waits for every child still running.",
 design=EMPTY,
 tb="""module tb;
  bit doneA, doneB, doneC, doneD, done; time tdone;
  initial begin
    // TODO: fork A (#30), B (#100), C (#50), D (#70) with join_any,
    //       then kill B, then wait for the others, then print Done.
    fork
      begin : A #30 doneA = 1; $display("%0t: A finished", $time); end
      begin : B #100 doneB = 1; $display("%0t: B finished", $time); end
      begin : C #50 doneC = 1; $display("%0t: C finished", $time); end
      begin : D #70 doneD = 1; $display("%0t: D finished", $time); end
    join
    done = 1; tdone = $time; $display("%0t: Done", $time);
  end
  initial begin
    #200;
    if (done && !doneB && doneA && doneC && doneD && tdone == 70) $display("PASS: B was killed at the first finish and Done came at 70");
    else $display("FAIL: done=%0b at %0t, B finished=%0b", done, tdone, doneB);
    $finish;
  end
endmodule
""",
 sol=EMPTY,
 soltb="""module tb;
  bit doneA, doneB, doneC, doneD, done; time tdone;
  initial begin
    fork
      begin : A #30 doneA = 1; $display("%0t: A finished", $time); end
      begin : B #100 doneB = 1; $display("%0t: B finished", $time); end
      begin : C #50 doneC = 1; $display("%0t: C finished", $time); end
      begin : D #70 doneD = 1; $display("%0t: D finished", $time); end
    join_any
    disable B;
    $display("%0t: first finish, B killed", $time);
    wait fork;
    done = 1; tdone = $time; $display("%0t: Done", $time);
  end
  initial begin
    #200;
    if (done && !doneB && doneA && doneC && doneD && tdone == 70) $display("PASS: B was killed at the first finish and Done came at 70");
    else $display("FAIL: done=%0b at %0t, B finished=%0b", done, tdone, doneB);
    $finish;
  end
endmodule
"""),
dict(id="iq-randc-manual", title="randc by hand: a shuffled deck",
 q=r"randc|shuffle|random permutation",
 problem="NVIDIA and Arm asked to implement randc without the keyword; Qualcomm asked to shuffle an array fairly. Build a class that returns 0 to N-1 once each per round, in random order.",
 tasks=["fill a deck with 0..N-1, shuffle it with Fisher-Yates using $urandom_range.", "next() returns the next card; when the deck runs out, reshuffle.", "The testbench draws 5 rounds and checks every round is a permutation, and that rounds differ."],
 learn="Fisher-Yates: for i from N-1 down to 1, swap a[i] with a[j], j random in 0..i. Every permutation is equally likely.",
 design=EMPTY,
 tb="""class deck;
  int n, pos; int a[$];
  function new(int n); this.n = n; pos = n; endfunction
  function void shuffle();
    a.delete();
    for (int i = 0; i < n; i++) a.push_back(i);
    // TODO: Fisher-Yates shuffle of a
    pos = 0;
  endfunction
  function int next();
    if (pos == n) shuffle();
    pos++;
    return a[pos - 1];
  endfunction
endclass

module tb;
  initial begin
    deck d = new(8); int seen[8]; int r, k, v, errors = 0, same = 0; int first[8];
    for (r = 0; r < 5; r++) begin
      foreach (seen[k]) seen[k] = 0;
      for (k = 0; k < 8; k++) begin v = d.next(); seen[v]++; if (r == 0) first[k] = v; else if (r == 1 && first[k] == v) same++; end
      foreach (seen[k]) if (seen[k] != 1) errors++;
    end
    if (errors == 0 && same < 8) $display("PASS: every round is a permutation and the order changes");
    else $display("FAIL: %0d repeated or missing values, %0d positions identical between rounds", errors, same);
    $finish;
  end
endmodule
""",
 sol=EMPTY,
 soltb="""class deck;
  int n, pos; int a[$];
  function new(int n); this.n = n; pos = n; endfunction
  function void shuffle();
    int j, t;
    a.delete();
    for (int i = 0; i < n; i++) a.push_back(i);
    for (int i = n - 1; i > 0; i--) begin
      j = $urandom_range(i, 0);
      t = a[i]; a[i] = a[j]; a[j] = t;
    end
    pos = 0;
  endfunction
  function int next();
    if (pos == n) shuffle();
    pos++;
    return a[pos - 1];
  endfunction
endclass

module tb;
  initial begin
    deck d = new(8); int seen[8]; int r, k, v, errors = 0, same = 0; int first[8];
    for (r = 0; r < 5; r++) begin
      foreach (seen[k]) seen[k] = 0;
      for (k = 0; k < 8; k++) begin v = d.next(); seen[v]++; if (r == 0) first[k] = v; else if (r == 1 && first[k] == v) same++; end
      foreach (seen[k]) if (seen[k] != 1) errors++;
    end
    if (errors == 0 && same < 8) $display("PASS: every round is a permutation and the order changes");
    else $display("FAIL: %0d repeated or missing values, %0d positions identical between rounds", errors, same);
    $finish;
  end
endmodule
"""),
dict(id="iq-constraints", title="Constraint puzzles: unique, sum, alternate even/odd",
 q=r"^(?!.*timing)(?!.*\bsdc\b).*(constraint|unique values|phone number|add k elements|even and odd|randomi[sz])",
 problem="Constraint coding is in almost every DV interview (Cadence, Meta, Qualcomm, Intel, Amazon). Solve four classics in one class.",
 tasks=["u: 6 values in 0..15, all different, without the unique keyword (compare every pair).", "s: 5 values in 0..20 whose sum is exactly 40.", "eo: 8 values in 0..99 alternating even, odd, even...", "phone: 10 digits, first digit 6 to 9."],
 learn="Pairwise inequality is how unique is written by hand: foreach (a[i]) foreach (a[j]) if (i < j) a[i] != a[j];",
 design=EMPTY,
 tb="""class puzzles;
  rand bit [3:0] u[6];
  rand bit [7:0] s[5];
  rand bit [7:0] eo[8];
  rand bit [3:0] phone[10];
  constraint c_u  { foreach (u[i]) u[i] <= 15; }        // TODO: all different, no 'unique'
  constraint c_s  { foreach (s[i]) s[i] <= 20; }        // TODO: sum is 40
  constraint c_eo { foreach (eo[i]) eo[i] < 100; }      // TODO: even at even index, odd at odd index
  constraint c_ph { foreach (phone[i]) phone[i] <= 9; } // TODO: first digit 6..9
endclass

module tb;
  initial begin
    puzzles p = new(); int n, i, j, sum, errors = 0;
    for (n = 0; n < 20; n++) begin
      if (!p.randomize()) begin $display("FAIL: randomize() failed"); $finish; end
      for (i = 0; i < 6; i++) for (j = i + 1; j < 6; j++) if (p.u[i] == p.u[j]) errors++;
      sum = 0; for (i = 0; i < 5; i++) begin sum += p.s[i]; if (p.s[i] > 20) errors++; end
      if (sum != 40) errors++;
      for (i = 0; i < 8; i++) if (p.eo[i] % 2 != i % 2 || p.eo[i] > 99) errors++;
      if (p.phone[0] < 6 || p.phone[0] > 9) errors++;
      if (n == 0) $display("u=%p s=%p eo=%p phone=%p", p.u, p.s, p.eo, p.phone);
    end
    if (errors == 0) $display("PASS: all four constraint puzzles hold over 20 randomizations");
    else $display("FAIL: %0d violations", errors);
    $finish;
  end
endmodule
""",
 sol=EMPTY,
 soltb="""class puzzles;
  rand bit [3:0] u[6];
  rand bit [7:0] s[5];
  rand bit [7:0] eo[8];
  rand bit [3:0] phone[10];
  constraint c_u  { foreach (u[i]) foreach (u[j]) if (i < j) u[i] != u[j]; }
  constraint c_s  { foreach (s[i]) s[i] <= 20; s[0] + s[1] + s[2] + s[3] + s[4] == 40; }
  constraint c_eo { foreach (eo[i]) { eo[i] < 100; eo[i] % 2 == i % 2; } }
  constraint c_ph { foreach (phone[i]) phone[i] <= 9; phone[0] >= 6; }
endclass

module tb;
  initial begin
    puzzles p = new(); int n, i, j, sum, errors = 0;
    for (n = 0; n < 20; n++) begin
      if (!p.randomize()) begin $display("FAIL: randomize() failed"); $finish; end
      for (i = 0; i < 6; i++) for (j = i + 1; j < 6; j++) if (p.u[i] == p.u[j]) errors++;
      sum = 0; for (i = 0; i < 5; i++) begin sum += p.s[i]; if (p.s[i] > 20) errors++; end
      if (sum != 40) errors++;
      for (i = 0; i < 8; i++) if (p.eo[i] % 2 != i % 2 || p.eo[i] > 99) errors++;
      if (p.phone[0] < 6 || p.phone[0] > 9) errors++;
      if (n == 0) $display("u=%p s=%p eo=%p phone=%p", p.u, p.s, p.eo, p.phone);
    end
    if (errors == 0) $display("PASS: all four constraint puzzles hold over 20 randomizations");
    else $display("FAIL: %0d violations", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-ooo-scoreboard", title="Scoreboard for an out-of-order DUT",
 q=r"scoreboard|out-of-order dut|reference model",
 problem="Amazon asked for a scoreboard for an out-of-order DUT; Apple for a scoreboard against a reference model. Responses come back in any order, matched by ID.",
 tasks=["expect_item(id, data) records an outstanding transaction.", "check(id, data) finds it by ID in any order, counts a match, a data mismatch or an unexpected ID, and removes it.", "report() flags transactions that never came back."],
 learn="In-order DUTs need one queue; out-of-order ones need lookup by transaction ID (an associative array, or a searched queue as here).",
 design=EMPTY,
 tb='class scoreboard;\n  int id_q[$];             // outstanding ids\n  int unsigned data_q[$];  // their expected data, same index\n  int n_match, errors;\n  function void expect_item(int id, int unsigned data);\n    // TODO: remember it\n  endfunction\n  function void check(int id, int unsigned data);\n    // TODO: find id in id_q. Not found -> error. Data differs -> error, else n_match++.\n    //       Remove the found entry from both queues (q.delete(index)).\n  endfunction\n  function void report();\n    // TODO: every entry still outstanding never arrived: count each as an error\n    $display("matches=%0d errors=%0d", n_match, errors);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    scoreboard sb = new(); int ids[$]; int i, k, t;\n    for (i = 0; i < 20; i++) begin sb.expect_item(i, i * 3); ids.push_back(i); end\n    for (i = 19; i > 0; i--) begin k = $urandom_range(i, 0); t = ids[i]; ids[i] = ids[k]; ids[k] = t; end\n    for (i = 0; i < 18; i++) sb.check(ids[i], ids[i] * 3);    // 18 correct, out of order\n    sb.check(ids[18], 999);                                      // one bad data\n    sb.check(77, 0);                                             // one unexpected id\n    sb.report();                                                 // ids[19] never came\n    if (sb.n_match == 18 && sb.errors == 3) $display("PASS: 18 matches, 1 mismatch, 1 unexpected and 1 missing item found");\n    else $display("FAIL: expected 18 matches and 3 errors, got %0d and %0d", sb.n_match, sb.errors);\n    $finish;\n  end\nendmodule\n',
 sol=EMPTY,
 soltb='class scoreboard;\n  int id_q[$];\n  int unsigned data_q[$];\n  int n_match, errors;\n  function void expect_item(int id, int unsigned data);\n    id_q.push_back(id); data_q.push_back(data);\n  endfunction\n  function void check(int id, int unsigned data);\n    int found = -1;\n    for (int i = 0; i < id_q.size(); i++) if (found < 0 && id_q[i] == id) found = i;\n    if (found < 0) begin errors++; $display("unexpected id %0d", id); end\n    else begin\n      if (data_q[found] != data) begin errors++; $display("id %0d: got %0d, expected %0d", id, data, data_q[found]); end\n      else n_match++;\n      id_q.delete(found); data_q.delete(found);\n    end\n  endfunction\n  function void report();\n    foreach (id_q[i]) begin errors++; $display("id %0d never arrived", id_q[i]); end\n    $display("matches=%0d errors=%0d", n_match, errors);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    scoreboard sb = new(); int ids[$]; int i, k, t;\n    for (i = 0; i < 20; i++) begin sb.expect_item(i, i * 3); ids.push_back(i); end\n    for (i = 19; i > 0; i--) begin k = $urandom_range(i, 0); t = ids[i]; ids[i] = ids[k]; ids[k] = t; end\n    for (i = 0; i < 18; i++) sb.check(ids[i], ids[i] * 3);    // 18 correct, out of order\n    sb.check(ids[18], 999);                                      // one bad data\n    sb.check(77, 0);                                             // one unexpected id\n    sb.report();                                                 // ids[19] never came\n    if (sb.n_match == 18 && sb.errors == 3) $display("PASS: 18 matches, 1 mismatch, 1 unexpected and 1 missing item found");\n    else $display("FAIL: expected 18 matches and 3 errors, got %0d and %0d", sb.n_match, sb.errors);\n    $finish;\n  end\nendmodule\n'),
dict(id="iq-merge-sorted", title="Merge two sorted arrays",
 q=r"merge.{0,20}sorted|sorted arrays",
 problem="NVIDIA: write SystemVerilog that merges two sorted arrays into one sorted array, in one pass.",
 tasks=["merge() fills queue c with every element of a and b in ascending order.", "Walk both with two indexes; take the smaller head each time.", "Do not call sort()."],
 learn="Two-pointer merge is O(n + m); it is the core of merge sort and of ordered scoreboards.",
 design=EMPTY,
 tb='module tb;\n  int a[$], b[$], c[$], r[$];\n  function automatic void merge();   // merges a and b into c\n    int i = 0, j = 0;\n    c.delete();\n    // TODO: two-pointer merge of a and b into c\n  endfunction\n  initial begin\n    int n, k, m, bad, errors = 0;\n    for (n = 0; n < 30; n++) begin\n      a.delete(); b.delete(); r.delete();\n      m = $urandom_range(8, 0); for (k = 0; k < m; k++) a.push_back($urandom_range(50, 0));\n      m = $urandom_range(8, 0); for (k = 0; k < m; k++) b.push_back($urandom_range(50, 0));\n      a.sort(); b.sort();\n      merge();\n      foreach (a[k]) r.push_back(a[k]); foreach (b[k]) r.push_back(b[k]); r.sort();\n      bad = (c.size() != r.size());\n      if (!bad) foreach (r[k]) if (c[k] != r[k]) bad = 1;\n      if (bad) begin errors++; if (errors <= 2) $display("a=%p b=%p got %p", a, b, c); end\n    end\n    if (errors == 0) $display("PASS: 30 merges correct");\n    else $display("FAIL: %0d merges wrong", errors);\n    $finish;\n  end\nendmodule\n',
 sol=EMPTY,
 soltb='module tb;\n  int a[$], b[$], c[$], r[$];\n  function automatic void merge();   // merges a and b into c\n    int i = 0, j = 0;\n    c.delete();\n    while (i < a.size() || j < b.size()) begin\n      if (j >= b.size() || (i < a.size() && a[i] <= b[j])) begin c.push_back(a[i]); i++; end\n      else begin c.push_back(b[j]); j++; end\n    end\n  endfunction\n  initial begin\n    int n, k, m, bad, errors = 0;\n    for (n = 0; n < 30; n++) begin\n      a.delete(); b.delete(); r.delete();\n      m = $urandom_range(8, 0); for (k = 0; k < m; k++) a.push_back($urandom_range(50, 0));\n      m = $urandom_range(8, 0); for (k = 0; k < m; k++) b.push_back($urandom_range(50, 0));\n      a.sort(); b.sort();\n      merge();\n      foreach (a[k]) r.push_back(a[k]); foreach (b[k]) r.push_back(b[k]); r.sort();\n      bad = (c.size() != r.size());\n      if (!bad) foreach (r[k]) if (c[k] != r[k]) bad = 1;\n      if (bad) begin errors++; if (errors <= 2) $display("a=%p b=%p got %p", a, b, c); end\n    end\n    if (errors == 0) $display("PASS: 30 merges correct");\n    else $display("FAIL: %0d merges wrong", errors);\n    $finish;\n  end\nendmodule\n'),
]
