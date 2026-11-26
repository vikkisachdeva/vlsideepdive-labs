G = ("iq-mem", "Caches, memories and FIFOs")
CLKTB = """  reg clk = 0, rst = 1;
  always #5 clk = ~clk;
"""
LABS = [
dict(id="iq-fifo-depth", title="FIFO depth: size it from the traffic",
 q=r"fifo depth|depth of (the )?(fifo|buffer)|deep must (the )?(fifo|buffer)|size (them|a fifo)|width of a buffer|how deep|fifo sizes",
 problem="FIFO depth calculation is asked at AMD, Juniper, NVIDIA and Marvell. A writer bursts 80 words, one per clock; the reader takes one word every 2 clocks. Find the smallest depth that never overflows.",
 tasks=["The FIFO is given. Only change DEPTH.", "Too small: the testbench reports an overflow. Too big: it reports wasted entries.", "Work it out first: words written during the burst minus words read in the same time."],
 learn="Depth = burst - burst * (read rate / write rate) = 80 - 80/2 = 40, plus anything for read latency.",
 design="""module fifo #(parameter DEPTH = 16) (input wire clk, rst, wr, rd, input wire [7:0] din, output wire [7:0] dout, output wire full, empty, output reg [7:0] count);
  reg [7:0] mem [0:255]; reg [7:0] wp, rp;
  assign full = (count == DEPTH); assign empty = (count == 0); assign dout = mem[rp];
  always @(posedge clk) begin
    if (rst) begin wp <= 0; rp <= 0; count <= 0; end
    else begin
      if (wr && (!full || rd)) begin mem[wp] <= din; wp <= (wp == DEPTH - 1) ? 0 : wp + 1; end
      if (rd && !empty) rp <= (rp == DEPTH - 1) ? 0 : rp + 1;
      count <= count + (wr && (!full || rd)) - (rd && !empty);
    end
  end
endmodule

module top (input wire clk, rst, wr, rd, input wire [7:0] din, output wire [7:0] dout, output wire full, empty, output wire [7:0] count);
  localparam DEPTH = 16;   // TODO: the smallest depth that never overflows
  fifo #(DEPTH) f (.clk(clk), .rst(rst), .wr(wr), .rd(rd), .din(din), .dout(dout), .full(full), .empty(empty), .count(count));
endmodule
""",
 sol="""module fifo #(parameter DEPTH = 16) (input wire clk, rst, wr, rd, input wire [7:0] din, output wire [7:0] dout, output wire full, empty, output reg [7:0] count);
  reg [7:0] mem [0:255]; reg [7:0] wp, rp;
  assign full = (count == DEPTH); assign empty = (count == 0); assign dout = mem[rp];
  always @(posedge clk) begin
    if (rst) begin wp <= 0; rp <= 0; count <= 0; end
    else begin
      if (wr && (!full || rd)) begin mem[wp] <= din; wp <= (wp == DEPTH - 1) ? 0 : wp + 1; end
      if (rd && !empty) rp <= (rp == DEPTH - 1) ? 0 : rp + 1;
      count <= count + (wr && (!full || rd)) - (rd && !empty);
    end
  end
endmodule

module top (input wire clk, rst, wr, rd, input wire [7:0] din, output wire [7:0] dout, output wire full, empty, output wire [7:0] count);
  localparam DEPTH = 40;   // 80 written, 40 read during the burst
  fifo #(DEPTH) f (.clk(clk), .rst(rst), .wr(wr), .rd(rd), .din(din), .dout(dout), .full(full), .empty(empty), .count(count));
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg wr = 0, rd = 0; reg [7:0] din = 0, exp = 0; wire [7:0] dout, count; wire full, empty;
  integer i, peak = 0, overflow = 0, errors = 0, got = 0;
  top dut (.clk(clk), .rst(rst), .wr(wr), .rd(rd), .din(din), .dout(dout), .full(full), .empty(empty), .count(count));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 200; i = i + 1) begin
      wr = (i < 80); din = i; rd = (i % 2 == 1) && !empty;
      if (wr && full && !rd) overflow = overflow + 1;
      if (rd) begin if (dout !== exp) errors = errors + 1; exp = exp + 1; got = got + 1; end
      @(negedge clk);
      if (count > peak) peak = count;
    end
    $display("peak occupancy %0d, depth %0d, overflows %0d, words read %0d", peak, dut.DEPTH, overflow, got);
    if (overflow) $display("FAIL: the FIFO overflowed %0d times: DEPTH is too small", overflow);
    else if (dut.DEPTH > peak) $display("FAIL: never more than %0d words: DEPTH %0d wastes %0d entries", peak, dut.DEPTH, dut.DEPTH - peak);
    else if (errors) $display("FAIL: %0d words out of order", errors);
    else $display("PASS: DEPTH %0d is the minimum for this traffic", dut.DEPTH);
    $finish;
  end
endmodule
"""),
dict(id="iq-cache-addr", title="Cache address split: tag, index, offset",
 q=r"tag, index|tag,? index and offset|bits are tag|bits of a memory address|address into tag|cache bits",
 problem="Asked at Intel, Qualcomm, AMD and SiFive: for a given cache size, line size and associativity, how many bits are tag, index and offset? Make the hardware compute the split.",
 tasks=["OFF_W = log2(line bytes); sets = size / (line * ways); IDX_W = log2(sets); TAG_W = 32 - IDX_W - OFF_W.", "Split addr into tag, idx and off with those widths.", "The testbench checks a 1 MB 8-way 64 B cache and a 32 KB 2-way 64 B cache."],
 learn="1 MB, 8-way, 64 B lines: 2048 sets, so 6 offset bits, 11 index bits and 15 tag bits.",
 design="""module cache_addr #(parameter SIZE = 32768, LINE = 64, WAYS = 2)
  (input wire [31:0] addr, output wire [31:0] tag, idx, off, output wire [5:0] tag_w, idx_w, off_w);
  localparam OFF_W = 1;   // TODO: $clog2(...)
  localparam IDX_W = 1;   // TODO
  localparam TAG_W = 32 - IDX_W - OFF_W;
  assign off_w = OFF_W; assign idx_w = IDX_W; assign tag_w = TAG_W;
  assign off = addr & ((32'd1 << OFF_W) - 1);
  assign idx = 0;   // TODO
  assign tag = 0;   // TODO
endmodule
""",
 sol="""module cache_addr #(parameter SIZE = 32768, LINE = 64, WAYS = 2)
  (input wire [31:0] addr, output wire [31:0] tag, idx, off, output wire [5:0] tag_w, idx_w, off_w);
  localparam OFF_W = $clog2(LINE);
  localparam IDX_W = $clog2(SIZE / (LINE * WAYS));
  localparam TAG_W = 32 - IDX_W - OFF_W;
  assign off_w = OFF_W; assign idx_w = IDX_W; assign tag_w = TAG_W;
  assign off = addr & ((32'd1 << OFF_W) - 1);
  assign idx = (addr >> OFF_W) & ((32'd1 << IDX_W) - 1);
  assign tag = addr >> (OFF_W + IDX_W);
endmodule
""",
 tb="""module tb;
  reg [31:0] addr; wire [31:0] t1, i1, o1, t2, i2, o2; wire [5:0] tw1, iw1, ow1, tw2, iw2, ow2; integer k, errors = 0;
  cache_addr #(1048576, 64, 8) c_big (.addr(addr), .tag(t1), .idx(i1), .off(o1), .tag_w(tw1), .idx_w(iw1), .off_w(ow1));
  cache_addr #(32768, 64, 2)   c_small (.addr(addr), .tag(t2), .idx(i2), .off(o2), .tag_w(tw2), .idx_w(iw2), .off_w(ow2));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    addr = 0; #1;
    $display("1 MB 8-way 64 B : tag %0d, index %0d, offset %0d bits", tw1, iw1, ow1);
    $display("32 KB 2-way 64 B: tag %0d, index %0d, offset %0d bits", tw2, iw2, ow2);
    if (tw1 != 15 || iw1 != 11 || ow1 != 6 || tw2 != 18 || iw2 != 8 || ow2 != 6) errors = errors + 1;
    for (k = 0; k < 100; k = k + 1) begin
      addr = $random; #1;
      if (o1 !== addr[5:0] || i1 !== addr[16:6] || t1 !== addr[31:17]) errors = errors + 1;
      if (o2 !== addr[5:0] || i2 !== addr[13:6] || t2 !== addr[31:14]) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: widths and address split correct for both caches");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-dm-cache", title="Direct-mapped cache with dirty bits",
 q=r"build a cache|implement a cache|how a cache works|cache works|dirty (bit|line)|write-back|cache hit|cache memory|cache system|what is (a )?cache|cache, and why|cache line",
 problem="'How would you build a cache?' (Marvell, NVIDIA, Arm). Build the tag store of a 16-line direct-mapped write-back cache: hit/miss, valid and dirty bits, and write-backs.",
 tasks=["Address: 4-bit offset, 4-bit index, 8-bit tag (16-bit addresses).", "On each access: hit = valid and tag match. On a miss, allocate the line; if the old line was valid and dirty, pulse wb (write-back).", "Writes set dirty; reads of a newly filled line leave it clean."],
 learn="Write-back caches only write a line to memory when a dirty line is evicted.",
 design="""module dm_cache (input wire clk, rst, req, we, input wire [15:0] addr, output wire hit, output reg wb, output reg [7:0] wb_tag);
  reg [7:0] tags [0:15]; reg [15:0] valid, dirty;
  wire [3:0] idx = addr[7:4]; wire [7:0] tag = addr[15:8];
  assign hit = 1'b0;   // TODO
  always @(posedge clk) begin
    wb <= 1'b0;
    if (rst) begin valid <= 0; dirty <= 0; end
    else if (req) begin
      // TODO: on a hit, a write sets dirty
      // TODO: on a miss, write back a dirty victim, fill the line, set dirty = we
    end
  end
endmodule
""",
 sol="""module dm_cache (input wire clk, rst, req, we, input wire [15:0] addr, output wire hit, output reg wb, output reg [7:0] wb_tag);
  reg [7:0] tags [0:15]; reg [15:0] valid, dirty;
  wire [3:0] idx = addr[7:4]; wire [7:0] tag = addr[15:8];
  assign hit = valid[idx] && tags[idx] == tag;
  always @(posedge clk) begin
    wb <= 1'b0;
    if (rst) begin valid <= 0; dirty <= 0; end
    else if (req) begin
      if (hit) begin if (we) dirty[idx] <= 1'b1; end
      else begin
        if (valid[idx] && dirty[idx]) begin wb <= 1'b1; wb_tag <= tags[idx]; end
        tags[idx] <= tag; valid[idx] <= 1'b1; dirty[idx] <= we;
      end
    end
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg req = 0, we = 0; reg [15:0] addr = 0; wire hit, wb; wire [7:0] wb_tag;
  reg [7:0] mt [0:15]; reg [15:0] mv = 0, md = 0; integer i, errors = 0, hits = 0, wbs = 0; reg eh, ewb; reg [7:0] et, tg; reg [3:0] x, ix;
  dm_cache dut (.clk(clk), .rst(rst), .req(req), .we(we), .addr(addr), .hit(hit), .wb(wb), .wb_tag(wb_tag));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); rst = 0;
    for (i = 0; i < 400; i = i + 1) begin
      req = 1; we = $random; tg = $random & 8'h03; ix = i % 16; addr = {tg, ix, 4'h0} | ($random & 16'h000F);
      x = addr[7:4]; eh = mv[x] && mt[x] == addr[15:8]; #1;
      if (hit !== eh) begin errors = errors + 1; if (errors <= 3) $display("  addr %h: hit=%b expected %b", addr, hit, eh); end
      ewb = !eh && mv[x] && md[x]; et = mt[x];
      if (eh) begin if (we) md[x] = 1; end else begin mt[x] = addr[15:8]; mv[x] = 1; md[x] = we; end
      @(posedge clk); #1;
      if (wb !== ewb || (ewb && wb_tag !== et)) begin errors = errors + 1; if (errors <= 3) $display("  addr %h: wb=%b expected %b", addr, wb, ewb); end
      if (eh) hits = hits + 1; if (ewb) wbs = wbs + 1;
      @(negedge clk);
    end
    if (errors == 0) $display("PASS: %0d hits and %0d write-backs, all correct", hits, wbs);
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-mesi", title="MESI coherence state machine",
 q=r"mesi|moesi|cache coherenc|coherence protocol|coherency",
 problem="MESI is asked at Apple, Arm, Intel, NVIDIA and Qualcomm. Build the per-line state machine for one cache on a snooping bus.",
 tasks=["Local: rd (with shared = another cache has it) and wr. Snooped: bus_rd and bus_rdx (another cache wants to write).", "I -rd-> E or S (shared); I -wr-> M; E -wr-> M; S -wr-> M (sends an upgrade).", "Snooped bus_rd: M and E go to S (M flushes). Snooped bus_rdx: everything goes to I (M flushes)."],
 learn="E exists so a private line can be written without a bus transaction; M must flush before anyone else reads it.",
 design="""module mesi (input wire clk, rst, rd, wr, shared, bus_rd, bus_rdx, output reg [1:0] st, output reg flush);
  localparam I = 2'd0, S = 2'd1, E = 2'd2, M = 2'd3;
  always @(posedge clk) begin
    flush <= 1'b0;
    if (rst) st <= I;
    else if (bus_rdx) begin
      // TODO
    end else if (bus_rd) begin
      // TODO
    end else if (wr) st <= M;
    else if (rd && st == I) st <= shared ? S : E;
  end
endmodule
""",
 sol="""module mesi (input wire clk, rst, rd, wr, shared, bus_rd, bus_rdx, output reg [1:0] st, output reg flush);
  localparam I = 2'd0, S = 2'd1, E = 2'd2, M = 2'd3;
  always @(posedge clk) begin
    flush <= 1'b0;
    if (rst) st <= I;
    else if (bus_rdx) begin
      if (st == M) flush <= 1'b1;
      st <= I;
    end else if (bus_rd) begin
      if (st == M) flush <= 1'b1;
      if (st == M || st == E) st <= S;
    end else if (wr) st <= M;
    else if (rd && st == I) st <= shared ? S : E;
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg rd = 0, wr = 0, shared = 0, bus_rd = 0, bus_rdx = 0; wire [1:0] st; wire flush;
  integer errors = 0; reg [8*8-1:0] nm [0:3];
  mesi dut (.clk(clk), .rst(rst), .rd(rd), .wr(wr), .shared(shared), .bus_rd(bus_rd), .bus_rdx(bus_rdx), .st(st), .flush(flush));
  task step(input r, w, sh, br, bx, input [1:0] exp, input ef); begin
    @(negedge clk) begin rd = r; wr = w; shared = sh; bus_rd = br; bus_rdx = bx; end
    @(posedge clk); #1;
    if (st !== exp || flush !== ef) begin errors = errors + 1; $display("  after rd=%b wr=%b shared=%b bus_rd=%b bus_rdx=%b: %0s flush=%b, expected %0s flush=%b", r, w, sh, br, bx, nm[st], flush, nm[exp], ef); end
  end endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    nm[0] = "I"; nm[1] = "S"; nm[2] = "E"; nm[3] = "M";
    @(negedge clk); rst = 0;
    step(1,0,0,0,0, 2'd2, 0);   // I -> E (no sharer)
    step(0,1,0,0,0, 2'd3, 0);   // E -> M (silent)
    step(0,0,0,1,0, 2'd1, 1);   // M -> S on snooped read, flush
    step(0,1,0,0,0, 2'd3, 0);   // S -> M (upgrade)
    step(0,0,0,0,1, 2'd0, 1);   // M -> I on snooped write, flush
    step(1,0,1,0,0, 2'd1, 0);   // I -> S (shared)
    step(0,0,0,0,1, 2'd0, 0);   // S -> I
    step(1,0,0,0,0, 2'd2, 0);   // I -> E
    step(0,0,0,1,0, 2'd1, 0);   // E -> S, no flush
    step(1,0,0,0,0, 2'd1, 0);   // S read hit stays S
    if (errors == 0) $display("PASS: all MESI transitions and flushes correct");
    else $display("FAIL: %0d transitions wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-lru", title="LRU replacement for a 4-way set",
 q=r"lru|replacement (policy|algorithm)|eviction",
 problem="AMD asked to code LRU for a cache; NVIDIA asked about eviction algorithms. Track recency of 4 ways and always point at the least recently used one.",
 tasks=["Each way has a 2-bit age; 0 = most recent, 3 = least recent.", "On an access to way w: ways younger than w age by one, w becomes 0.", "victim = the way whose age is 3."],
 learn="True LRU with age counters needs log2(N) bits per way; pseudo-LRU trees use N-1 bits total.",
 design="""module lru4 (input wire clk, rst, access, input wire [1:0] way, output reg [1:0] victim);
  reg [1:0] age [0:3]; integer k;
  always @(posedge clk) begin
    if (rst) begin age[0] <= 0; age[1] <= 1; age[2] <= 2; age[3] <= 3; end
    else if (access) begin
      for (k = 0; k < 4; k = k + 1) begin
        // TODO: age[way] -> 0; ways younger than age[way] get one older
      end
    end
  end
  always @(*) begin
    victim = 0;
    // TODO: the way with age 3
  end
endmodule
""",
 sol="""module lru4 (input wire clk, rst, access, input wire [1:0] way, output reg [1:0] victim);
  reg [1:0] age [0:3]; integer k;
  always @(posedge clk) begin
    if (rst) begin age[0] <= 0; age[1] <= 1; age[2] <= 2; age[3] <= 3; end
    else if (access) begin
      for (k = 0; k < 4; k = k + 1) begin
        if (k == way) age[k] <= 0;
        else if (age[k] < age[way]) age[k] <= age[k] + 1;
      end
    end
  end
  always @(*) begin
    victim = 0;
    for (k = 0; k < 4; k = k + 1) if (age[k] == 3) victim = k;
  end
endmodule
""",
 tb="""module tb;
""" + CLKTB + """  reg access = 0; reg [1:0] way = 0; wire [1:0] victim; integer i, k, errors = 0;
  integer order [0:3]; integer pos, t;
  lru4 dut (.clk(clk), .rst(rst), .access(access), .way(way), .victim(victim));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (k = 0; k < 4; k = k + 1) order[k] = k;   // order[0] = most recent
    @(negedge clk); rst = 0;
    for (i = 0; i < 300; i = i + 1) begin
      access = 1; way = $random;
      pos = 0; for (k = 0; k < 4; k = k + 1) if (order[k] == way) pos = k;
      for (k = pos; k > 0; k = k - 1) order[k] = order[k - 1];
      order[0] = way;
      @(negedge clk); #1;
      if (victim !== order[3]) begin errors = errors + 1; if (errors <= 3) $display("  after way %0d: victim %0d, expected %0d", way, victim, order[3]); end
    end
    if (errors == 0) $display("PASS: victim is always the least recently used way");
    else $display("FAIL: %0d wrong victims", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-ram-1w2r", title="1-write 2-read RAM from two 1W1R RAMs",
 q=r"1w2r|1-write 1-read|two read ports|dual-port memory|block ram|memory primitive|ram module|memory designed",
 problem="AMD platform emulation: combine two 1-write 1-read block RAMs into a RAM with one write port and two read ports.",
 tasks=["Write the same data to both copies on every write.", "Read port A uses copy 0, port B uses copy 1.", "Reads are synchronous (data one clock after the address)."],
 learn="Replication gives extra read ports for free in area; extra write ports need banking or a live-value table.",
 design="""module ram1w1r (input wire clk, we, input wire [3:0] wa, ra, input wire [7:0] wd, output reg [7:0] rd);
  reg [7:0] m [0:15];
  always @(posedge clk) begin if (we) m[wa] <= wd; rd <= m[ra]; end
endmodule

module ram1w2r (input wire clk, we, input wire [3:0] wa, ra_a, ra_b, input wire [7:0] wd, output wire [7:0] rd_a, rd_b);
  // TODO: two ram1w1r instances
endmodule
""",
 sol="""module ram1w1r (input wire clk, we, input wire [3:0] wa, ra, input wire [7:0] wd, output reg [7:0] rd);
  reg [7:0] m [0:15];
  always @(posedge clk) begin if (we) m[wa] <= wd; rd <= m[ra]; end
endmodule

module ram1w2r (input wire clk, we, input wire [3:0] wa, ra_a, ra_b, input wire [7:0] wd, output wire [7:0] rd_a, rd_b);
  ram1w1r c0 (.clk(clk), .we(we), .wa(wa), .ra(ra_a), .wd(wd), .rd(rd_a));
  ram1w1r c1 (.clk(clk), .we(we), .wa(wa), .ra(ra_b), .wd(wd), .rd(rd_b));
endmodule
""",
 tb="""module tb;
  reg clk = 0; always #5 clk = ~clk;
  reg we = 0; reg [3:0] wa = 0, ra_a = 0, ra_b = 0; reg [7:0] wd = 0; wire [7:0] rd_a, rd_b;
  reg [7:0] m [0:15]; reg [7:0] ea, eb; integer i, errors = 0;
  ram1w2r dut (.clk(clk), .we(we), .wa(wa), .ra_a(ra_a), .ra_b(ra_b), .wd(wd), .rd_a(rd_a), .rd_b(rd_b));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 16; i = i + 1) begin @(negedge clk) begin we = 1; wa = i; wd = i * 7; end @(posedge clk) m[i] = i * 7; end
    for (i = 0; i < 200; i = i + 1) begin
      @(negedge clk) begin we = $random; wa = $random; wd = $random; ra_a = $random; ra_b = $random; end
      @(posedge clk) begin ea = m[ra_a]; eb = m[ra_b]; if (we) m[wa] = wd; end
      #1 if (rd_a !== ea || rd_b !== eb) begin errors = errors + 1; if (errors <= 3) $display("  read %0d,%0d: %0d,%0d expected %0d,%0d", ra_a, ra_b, rd_a, rd_b, ea, eb); end
    end
    if (errors == 0) $display("PASS: both read ports correct over 200 cycles");
    else $display("FAIL: %0d wrong reads", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-crc8", title="CRC-8 checker",
 q=r"crc|codeword has an error|error.{0,20}(detect|check)|hamming|bit flips|secded",
 problem="Intel asked for a CRC error checker in Verilog; Marvell asked how a receiver knows a codeword is bad. Build a serial CRC-8 (polynomial x^8 + x^2 + x + 1).",
 tasks=["Bits arrive MSB first, one per clock with valid.", "crc <= {crc[6:0], 1'b0} ^ (fb ? 8'h07 : 0) where fb = crc[7] ^ bit.", "After a message followed by its CRC, the register is 0: ok = 1."],
 learn="A CRC is division by a polynomial; appending the remainder makes the whole frame divisible, so the checker ends at zero.",
 design="""module crc8 (input wire clk, rst, valid, din, output reg [7:0] crc, output wire ok);
  wire fb = crc[7] ^ din;
  always @(posedge clk) begin
    if (rst) crc <= 8'h00;
    else if (valid) crc <= crc;   // TODO
  end
  assign ok = (crc == 8'h00);
endmodule
""",
 sol="""module crc8 (input wire clk, rst, valid, din, output reg [7:0] crc, output wire ok);
  wire fb = crc[7] ^ din;
  always @(posedge clk) begin
    if (rst) crc <= 8'h00;
    else if (valid) crc <= {crc[6:0], 1'b0} ^ (fb ? 8'h07 : 8'h00);
  end
  assign ok = (crc == 8'h00);
endmodule
""",
 tb="""module tb;
  reg clk = 0, rst = 1, valid = 0, din = 0; always #5 clk = ~clk;
  wire [7:0] crc; wire ok; integer m, k, errors = 0; reg [7:0] msg [0:3]; reg [7:0] r; reg f;
  crc8 dut (.clk(clk), .rst(rst), .valid(valid), .din(din), .crc(crc), .ok(ok));
  task send(input b); begin @(negedge clk) begin valid = 1; din = b; end end endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (m = 0; m < 6; m = m + 1) begin
      @(negedge clk) rst = 1; @(negedge clk) rst = 0;
      r = 0;
      for (k = 0; k < 32; k = k + 1) begin
        if (k % 8 == 0) msg[k/8] = $random;
        f = r[7] ^ msg[k/8][7 - k % 8]; r = {r[6:0], 1'b0} ^ (f ? 8'h07 : 8'h00);
        send(msg[k/8][7 - k % 8]);
      end
      @(negedge clk) valid = 0; #1;
      if (crc !== r) begin errors = errors + 1; $display("  message %0d: crc %h, expected %h", m, crc, r); end
      for (k = 7; k >= 0; k = k - 1) send(r[k] ^ (m == 5 && k == 3));   // message 5 has a corrupted CRC bit
      @(negedge clk) valid = 0; #1;
      if (ok !== (m != 5)) begin errors = errors + 1; $display("  message %0d: ok=%b", m, ok); end
    end
    if (errors == 0) $display("PASS: CRC correct, good frames ok = 1, corrupted frame ok = 0");
    else $display("FAIL: %0d wrong", errors);
    $finish;
  end
endmodule
"""),
dict(id="iq-intc", title="Interrupt controller",
 q=r"interrupt controller|interrupt|isr",
 problem="Qualcomm asked how to design an interrupt controller; Infineon, TI and Arm asked how a CPU handles several interrupts. Build an 8-source controller with mask, priority and acknowledge.",
 tasks=["A rising edge on src[i] sets pending[i] (pending stays set until acknowledged).", "irq = 1 when any pending & ~mask; id = the lowest-numbered such source (highest priority).", "ack clears pending[id]."],
 learn="Edge-latched pending bits mean a short pulse is never lost; masking hides it without clearing it.",
 design="""module intc (input wire clk, rst, ack, input wire [7:0] src, mask, output wire irq, output reg [2:0] id, output reg [7:0] pending);
  reg [7:0] prev; integer k;
  wire [7:0] act = pending & ~mask;
  assign irq = |act;
  always @(*) begin id = 0; for (k = 7; k >= 0; k = k - 1) if (act[k]) id = k; end
  always @(posedge clk) begin
    if (rst) begin prev <= 0; pending <= 0; end
    else begin
      prev <= src;
      // TODO: set pending on rising edges of src, clear pending[id] on ack
    end
  end
endmodule
""",
 sol="""module intc (input wire clk, rst, ack, input wire [7:0] src, mask, output wire irq, output reg [2:0] id, output reg [7:0] pending);
  reg [7:0] prev; integer k;
  wire [7:0] act = pending & ~mask;
  assign irq = |act;
  always @(*) begin id = 0; for (k = 7; k >= 0; k = k - 1) if (act[k]) id = k; end
  always @(posedge clk) begin
    if (rst) begin prev <= 0; pending <= 0; end
    else begin
      prev <= src;
      pending <= (pending | (src & ~prev)) & ~((ack && irq) ? (8'd1 << id) : 8'd0);
    end
  end
endmodule
""",
 tb="""module tb;
  reg clk = 0, rst = 1, ack = 0; reg [7:0] src = 0, mask = 0; always #5 clk = ~clk;
  wire irq; wire [2:0] id; wire [7:0] pending; reg [7:0] mp = 0, pv = 0, act; integer i, k, eid, errors = 0, acks = 0;
  intc dut (.clk(clk), .rst(rst), .ack(ack), .src(src), .mask(mask), .irq(irq), .id(id), .pending(pending));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk) rst = 0;
    for (i = 0; i < 300; i = i + 1) begin
      src = $random & $random; mask = (i % 50 < 10) ? 8'hF0 : 8'h00; ack = $random;
      act = mp & ~mask; eid = 0; for (k = 7; k >= 0; k = k - 1) if (act[k]) eid = k;
      #1 if (irq !== (act != 0) || (act != 0 && id !== eid) || pending !== mp) begin errors = errors + 1; if (errors <= 3) $display("  cycle %0d: irq=%b id=%0d pending=%b, expected %b %0d %b", i, irq, id, pending, act != 0, eid, mp); end
      @(posedge clk) begin mp = (mp | (src & ~pv)) & ~((ack && act != 0) ? (8'd1 << eid) : 8'd0); if (ack && act != 0) acks = acks + 1; pv = src; end
      @(negedge clk);
    end
    if (errors == 0 && acks > 20) $display("PASS: pending, mask, priority and acknowledge correct (%0d interrupts served)", acks);
    else $display("FAIL: %0d wrong cycles", errors);
    $finish;
  end
endmodule
"""),
]
