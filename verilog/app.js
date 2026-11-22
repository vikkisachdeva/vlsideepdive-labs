(()=>{var ke={counter:{problem:"Almost every design needs a counter: for timers, addresses, timeouts. It must reset cleanly, count only when enabled, and wrap at the right value.",tasks:["Run and watch count in the waveform.","Find the cycle where it wraps from 15 to 0.","Change WIDTH and run again."],learn:"Write a parameterised counter with reset and enable, and read it in a waveform."},mux:{problem:"Selecting one of several buses is the most common piece of logic in a datapath. It must pick the right input for every select value.",tasks:["Run and check y for each value of sel.","Change the inputs and run again."],learn:"Write combinational logic with case statements and test it with a simple testbench."},adder:{problem:"Checking results by eye does not scale. A testbench should check every case on its own and say PASS or FAIL.",tasks:["Run: the testbench tries all 512 input combinations.","Break the carry logic in the full adder and see the testbench catch it."],learn:"Build an adder from full adders, and write a self-checking, exhaustive testbench."},fsm:{problem:"Detecting a bit pattern in a serial stream is a classic state machine problem. Overlapping patterns such as 10111011 are easy to get wrong.",tasks:["Run and find each 'pattern 1011 detected' line.","Follow the state in the waveform.","Change the input stream and predict the detections."],learn:"Design a Moore FSM, including overlapping matches, and debug it from the waveform."},cdc:{problem:"A signal from another clock cannot be used directly: the flop that samples it can go metastable. Two flops in a row give it time to settle.",tasks:["Run and see level_dst follow level_src two destination clocks later.","Measure the delay in the waveform."],learn:"The two-flop synchronizer for a single-bit level, and its latency. For full CDC practice, see the CDC labs."},fifo:{problem:"Producer and consumer rarely run at the same rate. A FIFO buffers the data, and it must refuse writes when full and reads when empty.",tasks:["Run: 10 writes into an 8-entry FIFO.","Find the two dropped writes and the full flag.","Read back and check the order."],learn:"Design a synchronous FIFO with full and empty flags."},sv:{problem:"Plain Verilog FSMs use magic numbers and are hard to read. SystemVerilog adds enums, always_ff/always_comb and assertions that check the design while it runs.",tasks:["Run and follow the light sequence.","Read the assertion that exactly one light is on.","Break the FSM and see the assertion fire."],learn:"SystemVerilog enum FSMs, always_ff/always_comb and immediate assertions."},"p1-ha-df":{problem:"Add two bits. The sum is 1 when exactly one input is 1; the carry is 1 when both are.",tasks:["Use only assign statements (dataflow style).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dataflow modelling with continuous assignments."},"p1-ha-bh":{problem:"The same half adder, described by its behavior instead of its equations.",tasks:["Use an always @(*) block with a case statement or if/else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Behavioral modelling with always @(*), and why outputs are declared reg."},"p1-ha-st":{problem:"The same half adder, built from logic gates connected by wires.",tasks:["Use only Verilog gate primitives (xor, and).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural modelling with gate primitives."},"p1-fa-df":{problem:"Add three bits (a, b and a carry in) to get a sum and a carry out.",tasks:["Use only assign statements.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Full adder equations in dataflow style."},"p1-fa-bh":{problem:"The same full adder, described by its behavior.",tasks:["Use an always @(*) block. Hint: {cout, sum} = a + b + cin.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using Verilog arithmetic inside an always block."},"p1-fa-st":{problem:"Build a full adder from two half adders and an OR gate, the way it is drawn in textbooks.",tasks:["Instantiate half_adder twice and connect them with wires.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Hierarchy: instantiating modules and connecting ports by name."},"p1-ops":{problem:"Verilog has arithmetic, bitwise, logical, reduction, relational, equality, shift, concatenation, replication and conditional operators. Each output of the module uses one of them.",tasks:["Write one assign per output (see the comments for which operator), then read the $display and $monitor lines.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Every Verilog operator, and printing with $display and $monitor."},"p1-c2f":{problem:"Repeated calculations belong in a task: write it once, call it many times.",tasks:["Complete the task c_to_f. The testbench calls it with seven temperatures.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Writing and calling a Verilog task with input and output arguments."},"p2-add4":{problem:"Add two 4-bit numbers and a carry in. The result needs 5 bits: a 4-bit sum and a carry out.",tasks:["Use one assign statement with concatenation on the left.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-bit dataflow arithmetic and concatenation."},"p2-mux2":{problem:"Pick one of two inputs with a select signal: the most common block in digital design.",tasks:["y = a when sel = 0, b when sel = 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"The conditional operator ?: as a multiplexer."},"p2-mux4":{problem:"Pick one of four inputs with a 2-bit select.",tasks:["Use a case statement on sel.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Case statements and full case coverage."},"p2-dec24":{problem:"Turn a 2-bit number into four select lines, exactly one of them high, as in an address decoder.",tasks:["y[a] = 1 when en = 1; all zeros when en = 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Decoders, enables and the shift operator."},"p2-enc42":{problem:"The reverse of a decoder: find which one of four lines is high and output its number.",tasks:["valid = 1 only when exactly one bit of d is 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Encoders and handling inputs that are not allowed."},"p2-penc42":{problem:"When several requests arrive at once, the highest one wins: an interrupt controller does this.",tasks:["y is the position of the highest 1; valid = 0 when d = 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority logic with casez and don't-care bits."},"p2-cmp4":{problem:"Compare two unsigned 4-bit numbers.",tasks:["Exactly one of gt, eq and lt is 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Relational operators and comparator outputs."},"p2-bshift8":{problem:"Shift or rotate a byte by any amount from 0 to 7 in one step, as in a processor's shift unit.",tasks:["dir picks left or right; rotate = 1 brings the bits that fall off back in on the other side.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shifts, rotates and building a barrel shifter."},"p2-alu":{problem:"The arithmetic logic unit is the heart of a processor: one block, eight operations, chosen by an opcode.",tasks:["Implement the eight operations in the comment, the carry for add and subtract, and the zero flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Case-based ALU design, carry out and status flags."},"p3-dlatch":{problem:"A latch is transparent: while en = 1, q follows d. When en = 0 it holds its last value.",tasks:["Write it with always @(*) and an if without an else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How an if without else creates a latch, and when you want one."},"p3-dlatch-rst":{problem:"Add a reset that clears the latch at once, whatever en is.",tasks:["rst = 1 forces q = 0 immediately.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Reset priority in a latch."},"p3-dff":{problem:"A flip-flop samples d only at the rising edge of the clock: the basic memory element of synchronous design.",tasks:["Use always @(posedge clk) and a non-blocking assignment.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Edge-triggered storage and non-blocking assignments (<=)."},"p3-dff-arh":{problem:"Reset must work even when the clock is not running.",tasks:["rst = 1 clears q at once. Put posedge rst in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous reset: the sensitivity list and reset priority."},"p3-dff-neg-arh":{problem:"Some flops capture on the falling edge of the clock, for example in DDR interfaces.",tasks:["Sample d on negedge clk; rst = 1 clears q at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Negative-edge flip-flops."},"p3-dff-arl":{problem:"Most chips use an active-low reset (rst_n): 0 means reset.",tasks:["rst_n = 0 clears q at once. Use negedge rst_n.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low reset and the _n naming convention."},"p3-dff-ash":{problem:"Some registers must start at 1, not 0.",tasks:["set = 1 forces q = 1 at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous set."},"p3-dff-srh":{problem:"A synchronous reset only acts on a clock edge, so it is timed like any other data input.",tasks:["rst = 1 clears q on the next rising edge only. Do not put rst in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous reset, and how it differs from asynchronous reset."},"p3-dff-srl":{problem:"The same synchronous reset, active low.",tasks:["rst_n = 0 clears q on the next rising edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous active-low reset."},"p3-dff-srs":{problem:"When reset and set arrive together, one must win. Here reset has priority.",tasks:["On a rising edge: rst = 1 gives 0, else set = 1 gives 1, else q takes d.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority between synchronous controls."},"p3-sync-async":{problem:"One reset, two registers: one resets at once, the other waits for the clock. The waveform shows the difference.",tasks:["Build q_sync with a synchronous reset and q_async with an asynchronous one.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"When each reset style acts, seen side by side."},"p3-twin":{problem:"Two 8-bit registers share a data bus, clock and reset, but load independently.",tasks:["load_a loads d into qa, load_b into qb; otherwise each holds.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Registers with load enables and a shared bus."},"p4-sr5":{problem:"Serial data enters at the left and moves one bit to the right each clock, as in a serial receiver.",tasks:["On each rising edge: q <= {sin, q[4:1]}.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shift registers with concatenation."},"p4-usr5":{problem:"One register that can hold, shift right, shift left or load in parallel, chosen by a mode input.",tasks:["Implement the four modes in the comment.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-function registers with a case on mode."},"p4-cnt":{problem:"Counters are everywhere: timers, addresses, state sequencing.",tasks:["A 4-bit up counter that wraps from 15 to 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"A basic synchronous counter."},"p4-cnt-tb":{problem:"A design is only as good as its testbench. Here the design is given and you write the testbench.",tasks:["Complete the testbench: reset, count, pause with en, check every cycle and print PASS or FAIL. Then set BUG = 1 in the design: your testbench must print FAIL.","Run: your testbench should print PASS, and FAIL once BUG = 1.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Self-checking testbenches with an expected-value model."},"p4-cnt-load":{problem:"Counters often need to start from a given value.",tasks:["load = 1 loads d; otherwise count up.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous load with priority over counting."},"p4-updown":{problem:"Count in either direction, for example a FIFO level or a position.",tasks:["up = 1 counts up, up = 0 counts down; both wrap.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Up/down counters."},"p4-mod":{problem:"A modulus-N counter counts 0 to N-1 and wraps, such as a decade (mod-10) counter for a clock display.",tasks:["Count 0 to 9 and wrap to 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mod-N counters and parameters."},"p4-range":{problem:"Count only within a range, LOW to HIGH, and start again at LOW.",tasks:["After reset q = LOW (3); count to HIGH (12), then back to LOW.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameterized counter limits."},"p4-range-udl":{problem:"All the counter features together: a range, a direction and a load.",tasks:["Load has priority; up wraps HIGH \u2192 LOW; down wraps LOW \u2192 HIGH.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Combining counter features with clear priority."},"p4-div2":{problem:"Make a slower clock from a fast one.",tasks:["clk_out toggles on every rising edge of clk.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Divide-by-2 with a toggle flop."},"p4-div4":{problem:"Divide by 4 with a 50% duty cycle.",tasks:["Use a 2-bit counter; its top bit is clk / 4.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dividing by a power of 2 with a counter."},"p4-div3":{problem:"Odd dividers are harder: a counter alone gives a 33% duty cycle. The testbench requires exactly 50%.",tasks:["Hint: combine a flop on the rising edge with one on the falling edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Odd clock division with a 50% duty cycle using both clock edges."},"p4-fifo":{problem:"A FIFO buffers data between a producer and a consumer running at different rates on the same clock.",tasks:["8 words of 8 bits. Ignore writes when full and reads when empty; dout shows the word on the clock after rd_en.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"FIFO pointers, a word count, and full and empty flags."},"p4-afifo":{problem:"When producer and consumer run on different clocks, the FIFO pointers cross clock domains. They must be Gray coded and synchronized.",tasks:["8 words of 8 bits, wclk and rclk. rdata shows the oldest word; rinc takes it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous FIFOs: Gray pointers, synchronizers, full and empty. See the CDC labs for more."},"p4-mealy-nov":{problem:"Detect the bit pattern 1-0-1 in a serial stream. Mealy: the output depends on the state and the current input.",tasks:["y = 1 while x is the final 1. After a detection, start again from scratch.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mealy state machines and non-overlapping detection."},"p4-mealy-ov":{problem:"The same pattern, but the final 1 may also start the next 101: 10101 gives two detections.",tasks:["y = 1 while x is the final 1, and keep that 1 for the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Mealy machine."},"p4-moore-nov":{problem:"Moore: the output depends on the state only, so it comes one clock later than in a Mealy machine.",tasks:["y = 1 for one clock after the final 1 was clocked in. Start again from scratch after.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore state machines and their extra state."},"p4-moore-ov":{problem:"Moore and overlapping together.",tasks:["y = 1 for one clock after 101; the final 1 starts the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Moore machine."},"s01-reg":{problem:"Store a byte when enable is high, the most basic piece of a CPU datapath. Write it the SystemVerilog way.",tasks:["Use logic, ANSI ports, timeunit/timeprecision and always_ff. rst_ is asynchronous and active low.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"always_ff, the logic type, and time units in SystemVerilog."},"s02-mux":{problem:"One mux module, any width: the CPU uses it as a 5-bit address mux. The testbench uses an 8-bit and a 1-bit instance.",tasks:["out = sel_a ? in_a : in_b. Use always_comb and unique case with a default that drives X.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameters, always_comb and unique case."},"s03-cnt":{problem:"The CPU's program counter: it counts through the program, and loads a new address for a jump.",tasks:["5 bits: load has priority, then enable counts up; rst_ clears it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority in always_ff and counter wrap-around."},"s04-ctrl":{problem:"The CPU's controller steps through 8 states for every instruction and decides which blocks act in each: fetch, decode, operand fetch, execute, store.",tasks:["Use the enum types from package typedefs, state.next() for the sequence, and always_comb with unique case for the outputs in the table in the comments.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packages, enumerated types and their methods, and Mealy outputs."},"s05-alu":{problem:"The CPU's ALU combines the accumulator with memory data. Its result is registered on the falling clock edge so it is ready for the accumulator on the next rising edge.",tasks:["Compute out on negedge clk for the 8 opcodes; zero = 1 when accum is 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using package enums in a datapath, and two clock edges."},"s06-memtb":{problem:"The memory is given. Write the testbench that proves it works, with reusable tasks.",tasks:["Write tasks write_mem and read_mem with a default debug argument, a void function printstatus, and two tests. Then set BUG = 1: your testbench must report FAIL.","Run: your testbench should print PASS, and FAIL once BUG = 1.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Tasks with default arguments, void functions, and driving on the inactive clock edge."},"s07-struct":{problem:"A bus is many signals that always travel together. Bundling them keeps every module in agreement. SystemVerilog interfaces do this with modports; Icarus Verilog 12 does not support interface ports yet, so this lab uses a packed struct from a package, which every tool supports.",tasks:["Declare mem_req_t (read, write, addr, data in that order) and write the memory using req.field names.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packed structs, packages, and when to use a struct or an interface."},"s08-cpu":{problem:"Put it all together: the register, mux, counter, controller, ALU and memory make a small CPU that runs programs.",tasks:["Instantiate and connect the seven blocks in module cpu (all blocks are given above it). The testbench runs three programs: a basic test, a sum of 1 to 10, and Fibonacci up to 144.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a CPU from blocks, and debugging it from the waveform and program results."},"s09-johnson":{problem:"A Johnson counter is a shift register whose inverted output feeds back: 2N states with only one bit changing at a time.",tasks:["Shift left and feed ~q[N-1] into bit 0. The testbench checks N = 4 and N = 6.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameterized shift-register counters."},"s10-gen":{problem:"Hardware is often an array of identical blocks. A generate loop builds it for any size.",tasks:["Build rca from N full_adder instances with a for-generate loop. Do not use + in rca.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Generate loops, genvars and named generate blocks."},"s11-dpram":{problem:"Two ports let one block write while another reads, for example a frame buffer or a FIFO memory.",tasks:["Port A writes and reads, port B reads. Both reads are synchronous; port A reads the old data when it writes the same address.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Memory arrays, synchronous reads and read-before-write."},"s12-uart":{problem:"Send bytes over a single wire: a start bit, 8 data bits LSB first, a stop bit. The testbench decodes the line like a real receiver.",tasks:["Write the state machine with an enum type: IDLE, START_BIT, DATA_BITS, STOP_BIT. Each bit lasts CLKS_PER_BIT clocks.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Enum state machines with counters, and serial protocols."},"l01-gates":{problem:"Every digital circuit is built from a handful of gates: AND, OR, NOT, NAND, NOR, XOR and XNOR. You need to know each truth table by heart.",tasks:["Instantiate one gate primitive per output (and, or, not, nand, nor, xor, xnor).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Verilog gate primitives and the truth table of every basic gate."},"l02-nand":{problem:"NAND is a universal gate: any logic function can be built from NAND gates alone. Chips like the 7400 have only NANDs.",tasks:["Build NOT, AND, OR and XOR using only nand primitives. No assign, no other gates.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Why NAND is universal, and De Morgan's law in practice (OR = NAND of inverted inputs)."},"l03-nor":{problem:"NOR is the other universal gate. Building every gate from NOR shows the duality of Boolean algebra.",tasks:["Build NOT, OR, AND and XNOR using only nor primitives.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"NOR-only design, and how it mirrors NAND-only design."},"l04-sop-pos":{problem:"A Boolean function can be written as a sum of products (SOP) or a product of sums (POS). Both describe the same truth table.",tasks:["Write y1 (SOP), y2 (POS) and y3 as continuous assignments, exactly as given.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Translating SOP and POS expressions into logic, and reading a truth table."},"l05-demorgan":{problem:"De Morgan's laws let you turn ANDs into ORs and back by inverting. They are behind every NAND and NOR trick.",tasks:["Write both sides of both laws. The testbench checks that each pair is equal for every input.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"(A\xB7B)' = A' + B' and (A + B)' = A'\xB7B'."},"l06-kmap":{problem:"A minterm list gives the truth table but not the cheapest circuit. A Karnaugh map finds the simplest SOP form.",tasks:["Draw a 3-variable K-map for F1 and a 4-variable K-map for F2, then write the simplified expressions.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Grouping 1s in a K-map into the largest power-of-two rectangles, including groups that wrap around the edges."},"l07-dontcare":{problem:"Some input combinations never happen. Their outputs are don't-cares (d), and using them as 1s can make the circuit smaller.",tasks:["Simplify F = \u03A3m(1, 3, 7, 11, 15) + d(0, 2, 5) with a 4-variable K-map and write the result.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How don't-care terms enlarge K-map groups."},"l08-parity":{problem:"Parity is the simplest error detection: one extra bit makes the number of 1s even, so a single flipped bit is caught.",tasks:["Generate the even parity bit p for 4 data bits, and the error flag for a received 5-bit word.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"XOR trees and the reduction XOR operator (^d)."},"l09-majority":{problem:"Safety systems use three copies of a signal and take the majority, so that one faulty copy is outvoted.",tasks:["Fill in the truth table, simplify \u03A3m(3, 5, 6, 7) with a K-map and write y.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"From a word description to a truth table to a minimal circuit."},"l10-sub":{problem:"Subtraction needs a borrow instead of a carry. The full subtractor is the building block of a ripple-borrow subtractor.",tasks:["Write D and Bout for the half subtractor and the full subtractor.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Difference and borrow equations, and how they compare with the adder's."},"l29-rca":{problem:"To add multi-bit numbers, full adders are chained so each carry ripples into the next stage.",tasks:["Instantiate full_adder four times and connect the carries.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural hierarchy and the ripple-carry adder."},"l18-addsub":{problem:"One adder can also subtract: invert B and add 1, using two's complement. One control input picks the operation.",tasks:["Use XOR gates to invert B when M = 1, feed M in as the carry, and detect signed overflow.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Two's complement subtraction, carry out versus overflow."},"l19-bcdadd":{problem:"Calculators and clocks count in decimal digits (BCD). A binary adder gives the wrong code when a digit sum exceeds 9.",tasks:["Add the two digits in binary, then add 6 and set the carry when the sum is above 9.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Why the add-6 correction works."},"l17-cmp2":{problem:"Comparing two numbers is everywhere: in sorting, in limits, in address decoding.",tasks:["Write gt, eq and lt from the K-map equations with gates only (no >, < or ==).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a comparator from equality (XNOR) terms, from the most significant bit down."},"l30-cmp4":{problem:"Wider numbers are compared by chaining 4-bit comparators. The cascade inputs carry the result of the lower bits.",tasks:["Compare A and B; when they are equal, pass the cascade inputs through.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How cascading works, and how to tie the inputs of a single chip."},"l14-dec38":{problem:"Decoders select one of many: one memory chip, one display digit, one peripheral. Real parts have active-low outputs and several enables.",tasks:["Decode a to one active-low output when g1 = 1 and both active-low enables are 0. Otherwise all outputs are 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low signals and enable logic."},"l11-dec-fa":{problem:"A decoder produces every minterm, so any function is just an OR of the right decoder outputs.",tasks:["Instantiate the 3-to-8 decoder and OR together the minterms of S and C.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Implementing functions with a decoder and OR gates."},"l15-enc83":{problem:"An encoder does the opposite of a decoder. A priority encoder handles several active inputs, as in interrupt controllers.",tasks:["Encode a one-hot input with a valid flag, and find the position of the highest 1 with an any flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Plain versus priority encoding, and what happens with invalid inputs."},"l13-mux-demux":{problem:"Multiplexers pick one of many inputs onto one line; demultiplexers send one line to one of many outputs.",tasks:["Write the 8-to-1 mux and the 1-to-8 demux.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mux and demux as data selectors, and indexed part selects."},"l12-mux-fn":{problem:"A 2^n-to-1 multiplexer can implement any function of n + 1 variables: the extra variable goes to the data inputs.",tasks:["Work out the data inputs (0, 1, D or D') two truth-table rows at a time and instantiate mux8.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"The mux implementation method from the lab manuals."},"l16-gray":{problem:"In Gray code only one bit changes between neighbouring values. It is used in encoders and in clock domain crossing.",tasks:["Write the binary-to-Gray and Gray-to-binary converters.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Gray code, and why the reverse conversion chains XORs."},"l20-7seg":{problem:"Digital clocks and meters show digits on 7-segment displays. A decoder (like the 7447/7448) lights the right segments.",tasks:["Fill in the case statement for digits 0 to 9 and blank the display for 10 to 15. The output draws each digit.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Truth tables with many outputs, and the case statement."},"l21-srlatch":{problem:"Memory starts with feedback: two cross-coupled gates can hold a bit. This is the SR latch, the base of every flip-flop.",tasks:["Build the latch from two nand primitives with a 1 ns delay each.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Feedback, the set, reset and hold states, and why S = R = 0 is forbidden for a NAND latch."},"l22-ffs":{problem:"The four classic flip-flops differ only in their characteristic tables. Knowing them is the key to counter and FSM design.",tasks:["Write all four flip-flops in one always block, from their characteristic tables.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Characteristic tables, edge triggering and asynchronous reset."},"l23-ripple":{problem:"The simplest counter: each flip-flop toggles the next. It needs no logic, but the outputs do not change together.",tasks:["Instantiate three toggle flip-flops, each clocked by the output of the stage before.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous counters and ripple delay."},"l24-sync":{problem:"In a synchronous counter every flip-flop shares one clock, so all outputs change together.",tasks:["Derive the T inputs from the count and toggle on the clock edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous counter design with T flip-flops."},"l32-updown":{problem:"Counters that go both ways are used in positioning and in volume controls.",tasks:["Use T flip-flops: derive T0, T1 and T2 from the excitation table with the up input.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Excitation tables and K-maps for counter design."},"l27-mod6":{problem:"Clocks divide by 6 and 10 to count seconds and minutes. A MOD-N counter clears itself at N \u2212 1.",tasks:["Count 0 to 5 and go back to 0, with a terminal count output.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Truncated counters and terminal count."},"l25-ring":{problem:"Shift registers with feedback become counters. A ring counter gives one-hot outputs; a Johnson counter doubles the count with the same flops.",tasks:["Write the ring counter (reset 1000) and the Johnson counter (reset 0000) in one always block.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Ring versus twisted-ring (Johnson) counters, and how many states each has."},"l26-siso":{problem:"Shift registers move serial data, as in UARTs and SPI. The data 1001 shifted in comes out four clocks later.",tasks:["Shift sin into q[3] on every clock, with sout = q[0].","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Serial-in serial-out operation and delay in clocks."},"l31-usr":{problem:"One register that can hold, shift left, shift right or load in parallel (like the 74194) covers every shift register use.",tasks:["Pick the next value with a case on mode.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mode-controlled registers, the basis of the 74194."},"l28-fsm":{problem:"Every sequential circuit is a state machine. Given a state table, you can build it directly.",tasks:["Write the next-state logic from the table and the Moore output z.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"State tables, next-state logic and Moore outputs."},"l33-traffic":{problem:"A real-world state machine with an input (a waiting car) and a timer, the classic FSM design example.",tasks:["Write the four states, the timer for the side green, and the lights for each state.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore FSM design with a timer, from a word specification."}};var Ye="http://www.w3.org/2000/svg",$=(t,e,n)=>{let s=document.createElementNS(Ye,t);for(let[i,r]of Object.entries(e||{}))s.setAttribute(i,r);return n&&n.appendChild(s),s};function Ze(t){let e=t.trim(),n="port",s="",i=/^([\s\S]*?)([!+])?$/.exec(e),r=y=>{let h=/^([\s\S]*?)([!+])$/.exec(y);return h?(s=s||h[2],h[1]):y};e=r(i[0]);let c=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[y,h,l]of c)if(e.startsWith(y)&&e.endsWith(h)){n=l,e=e.slice(1,-1);break}n==="port"&&e.startsWith("@")&&(n="clk",e=e.slice(1)),e=r(e);let a=null,S=e.lastIndexOf("|");S>0&&(a=e.slice(S+1).trim(),e=e.slice(0,S));let _=e.indexOf("#"),g=e.trim();_>=0&&(e=e.slice(0,_));let u=e.replace(/\\n/g,`
`).trim();return{id:n+":"+g,label:u,kind:n,dom:a,mark:s}}function Qe(t){let e=new Map,n=[],s=i=>{if(!e.has(i.id))e.set(i.id,{...i,order:e.size});else{let r=e.get(i.id);r.dom=r.dom||i.dom,r.mark=r.mark||i.mark}return e.get(i.id)};for(let i of t.split(";").map(r=>r.trim()).filter(Boolean)){let r=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,c=0,a=null,S=null,_,g=[];for(;_=r.exec(i);)g.push([i.slice(c,_.index),_]),c=r.lastIndex;g.push([i.slice(c),null]);for(let[u,y]of g){let h=s(Ze(u));if(a&&S&&n.push({a,b:h,...S}),a=h,y){let l=y[1]||"";S={label:(y[2]||"").trim(),kind:l==="~"?"bad":l==="+"?"good":l==="."?"dash":"plain"}}}}return{nodes:[...e.values()],edges:n}}function en(t){let e=t.label.split(`
`),n=Math.max(...e.map(s=>s.length))*6.9;return t.kind==="port"||t.kind==="clk"?{w:Math.max(28,n+(t.kind==="clk"?26:12)),h:Math.max(24,e.length*15+6),lines:e}:t.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,e.length*15+22),lines:e}:{w:Math.max(54,n+24),h:Math.max(34,e.length*15+16),lines:e}}function Ie(t){let e=typeof t=="string"?Qe(t):t,{nodes:n,edges:s}=e;if(!n.length)return null;let i=new Map(n.map(d=>[d,[]]));for(let d of s)d.a!==d.b&&i.get(d.a).push(d);let r=new Map,c=new Set,a=d=>{r.set(d,1);for(let o of i.get(d)){let b=r.get(o.b);b===1?c.add(o):b||a(o.b)}r.set(d,2)};for(let d of n)r.get(d)||a(d);let S=new Set(s.filter(d=>d.kind==="dash"&&s.some(o=>o.b===d.b&&o.kind!=="dash"))),_=new Map(n.map(d=>[d,0]));for(let d=0;d<n.length;d++){let o=!1;for(let b of s)b.a!==b.b&&!c.has(b)&&!S.has(b)&&_.get(b.b)<_.get(b.a)+1&&(_.set(b.b,_.get(b.a)+1),o=!0);if(!o)break}let g=Math.max(..._.values());for(let d of n)d.kind==="port"&&!i.get(d).length&&s.some(o=>o.b===d)&&_.get(d)<g&&_.set(d,g);let u=[];for(let d of n){let o=_.get(d);(u[o]=u[o]||[]).push(d)}let y=[...new Set(n.map(d=>d.dom).filter(Boolean))],h=d=>d.dom?y.indexOf(d.dom):-1;for(let d of u)d&&d.sort((o,b)=>h(o)-h(b)||o.order-b.order);for(let d of n)Object.assign(d,en(d));let l=22,m=18,f=u.map((d,o)=>Math.max(46,...s.filter(b=>_.get(b.a)===o&&_.get(b.b)>o&&b.label).map(b=>b.label.length*6.2+30))),q=new Map;for(let d of n){let o=d.dom;if(!o){let b=s.find(O=>O.a===d&&O.b.dom||O.b===d&&O.a.dom);o=b?b.a===d?b.b.dom:b.a.dom:null}q.set(d,o||"")}let A=[...new Set(n.map(d=>q.get(d)))];A.includes("")&&(A.splice(A.indexOf(""),1),A.unshift(""));let R=y.length>0,F=R?34:0,L=A.map(d=>Math.max(0,...u.map(o=>{let b=(o||[]).filter(O=>q.get(O)===d);return b.reduce((O,H)=>O+H.h,0)+Math.max(0,b.length-1)*l}))),M=[],U=m+(R?22:14);A.forEach((d,o)=>{M[o]=U,U+=L[o]+(o<A.length-1?F:0)});let T=U-m-(R?22:14),v=m,D=new Map,C=0;u.forEach((d,o)=>{if(!d)return;let b=Math.max(...d.map(O=>O.w));A.forEach((O,H)=>{let E=d.filter(K=>q.get(K)===O),z=E.reduce((K,j)=>K+j.h,0)+Math.max(0,E.length-1)*l,W=M[H]+(L[H]-z)/2;for(let K of E)D.set(K,{x:v+(b-K.w)/2,y:W,w:K.w,h:K.h}),W+=K.h+l}),v+=b+f[o]});let J=c.size>0,B=v-(f[u.length-1]||46)+m;C=m*2+(R?22:14)+T+(J?26:0);let ee=$("svg",{viewBox:`0 0 ${B} ${C}`,class:"dg dg-block",role:"img"});ee.style.maxWidth=B+"px",ee.style.minWidth=Math.round(Math.min(B,Math.max(B*.72,320)))+"px";let Je=$("defs",{},ee);for(let d of["plain","bad","good","dash"]){let o=$("marker",{id:"dg-ar-"+d,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},Je);$("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+d},o)}y.forEach((d,o)=>{let b=n.filter(j=>j.dom===d).map(j=>D.get(j)),O=A.indexOf(d),H=Math.min(...b.map(j=>j.x))-10,E=M[O]-22,z=Math.max(...b.map(j=>j.x+j.w))+10,W=M[O]+L[O]+8;$("rect",{x:H,y:E,width:z-H,height:W-E,rx:10,class:`dg-dom dg-d${o%4}`},ee);let K=$("text",{x:H+8,y:E+13,class:`dg-domlabel dg-d${o%4}`},ee);K.textContent=d});let we=m+(R?22:14)+T+10,_e=$("g",{},ee);for(let d of s){let o=D.get(d.a),b=D.get(d.b),O,H,E;if(d.a===d.b)O=`M${o.x+o.w-10},${o.y} C${o.x+o.w+20},${o.y-26} ${o.x+10},${o.y-26} ${o.x+14},${o.y}`,H=o.x+o.w/2,E=o.y-22;else if(c.has(d)||_.get(d.b)<=_.get(d.a)){let z=o.x+o.w/2,W=b.x+b.w/2;O=`M${z},${o.y+o.h} C${z},${we+14} ${W},${we+14} ${W},${b.y+b.h}`,H=(z+W)/2,E=we+8}else{let z=o.x+o.w,W=o.y+o.h/2,K=b.x,j=b.y+b.h/2,ue=(z+K)/2;O=`M${z},${W} C${ue},${W} ${ue},${j} ${K},${j}`;let Le=_.get(d.b)-_.get(d.a),G=Le>1?.5/Le:.5,X=1-G;H=X*X*X*z+3*X*X*G*ue+3*X*G*G*ue+G*G*G*K,E=X*X*X*W+3*X*X*G*W+3*X*G*G*j+G*G*G*j}if($("path",{d:O,class:"dg-edge dg-"+d.kind,"marker-end":`url(#dg-ar-${d.kind})`},_e),d.label){let z=d.label.length*6.2+8;$("rect",{x:H-z/2,y:E-9,width:z,height:14,rx:3,class:"dg-elbg"},_e);let W=$("text",{x:H,y:E+2,class:"dg-elabel dg-"+d.kind,"text-anchor":"middle"},_e);W.textContent=d.label}}for(let d of n){let o=D.get(d),b=$("g",{class:`dg-node dg-k-${d.kind}${d.mark==="!"?" dg-bad":d.mark==="+"?" dg-good":""}`},ee);if(d.kind==="reg")$("rect",{x:o.x,y:o.y,width:o.w,height:o.h,rx:3,class:"dg-shape"},b),$("path",{d:`M${o.x},${o.y+o.h-12} L${o.x+7},${o.y+o.h-7} L${o.x},${o.y+o.h-2}`,class:"dg-tri"},b);else if(d.kind==="logic")$("rect",{x:o.x,y:o.y,width:o.w,height:o.h,rx:Math.min(16,o.h/2),class:"dg-shape"},b);else if(d.kind==="block")$("rect",{x:o.x,y:o.y,width:o.w,height:o.h,rx:6,class:"dg-shape"},b);else if(d.kind==="mux")$("path",{d:`M${o.x},${o.y} L${o.x+o.w},${o.y+10} L${o.x+o.w},${o.y+o.h-10} L${o.x},${o.y+o.h} z`,class:"dg-shape"},b);else if(d.kind==="clk"){let E=o.y+o.h/2;$("path",{d:`M${o.x+2},${E+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},b)}let O=d.lines,H=d.kind==="clk"?o.x+24:o.x+o.w/2;O.forEach((E,z)=>{let W=$("text",{x:H,y:o.y+o.h/2+(z-(O.length-1)/2)*15+4,"text-anchor":d.kind==="clk"?"start":"middle",class:"dg-label"},b);W.textContent=E})}return ee}function nn(t,e){let n=t.split(/\s+/),s=[],i="";for(let r of n)i&&(i+" "+r).length>e?(s.push(i),i=r):i=i?i+" "+r:r;return i&&s.push(i),s}var tn={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function Fe(t){if(!t||!t.length)return null;let e=300,n=12,s=42,i=18,r=t.map(u=>{let y=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(u)||[null,"S",u],h=nn(y[2],s),l=tn[y[1]];return{k:y[1],lines:h,tag:l,h:h.length*15+(l?30:16)}}),c=r.reduce((u,y)=>u+y.h,0)+i*(r.length-1)+16,a=$("svg",{viewBox:`0 0 ${e+16} ${c}`,class:"dg dg-flow",role:"img"});a.style.maxWidth=e+16+"px";let S=$("defs",{},a),_=$("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},S);$("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},_);let g=8;return r.forEach((u,y)=>{let h=$("g",{class:"dg-fl dg-fl-"+u.k},a);u.k==="Q"?$("path",{d:`M22,${g} H${8+e-14} L${8+e},${g+u.h/2} L${8+e-14},${g+u.h} H22 L8,${g+u.h/2} z`,class:"dg-shape"},h):$("rect",{x:8,y:g,width:e,height:u.h,rx:u.k==="S"?6:10,class:"dg-shape"},h);let l=g+18;if(u.tag){let m=$("text",{x:8+n+(u.k==="Q"?10:0),y:l,class:"dg-ftag"},h);m.textContent=u.tag.toUpperCase(),l+=16}for(let m of u.lines){let f=$("text",{x:8+n+(u.k==="Q"?10:0),y:l,class:"dg-ftext"},h);f.textContent=m,l+=15}g+=u.h,y<r.length-1&&($("path",{d:`M${8+e/2},${g+1} V${g+i-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},a),g+=i)}),a}function xe(t,e,n){let s=document.getElementById("lab-brief");if(!s)return;let i=t[e];if(!i){s.hidden=!0;return}s.querySelector(".brief-problem").textContent=i.problem;let r=s.querySelector(".brief-tasks");r.innerHTML="";for(let g of i.tasks){let u=document.createElement("li");u.textContent=g,r.appendChild(u)}s.querySelector(".brief-learn").textContent=i.learn;let c=s.querySelector(".brief-fig"),a=i.images||(i.image?[{src:i.image,alt:i.imageAlt||""}]:[]);if(a.length||i.html){if(c||(c=document.createElement("figure"),c.className="brief-fig",s.appendChild(c)),c.innerHTML="",a.length){let g=document.createElement("div");g.className="brief-imgs";for(let u of a){let y=document.createElement("a");y.href=u.src,y.target="_blank",y.rel="noopener";let h=document.createElement("img");h.src=u.src,h.alt=u.alt||"",h.loading="lazy",y.appendChild(h),g.appendChild(y)}c.appendChild(g)}if(i.html){let g=document.createElement("div");g.className="brief-html",g.innerHTML=i.html,c.appendChild(g)}if(i.caption){let g=document.createElement("figcaption");g.textContent=i.caption,c.appendChild(g)}}else c&&c.remove();let S=s.querySelector(".brief-dg"),_=n&&n[e];if(_&&(_.b||_.f)){S||(S=document.createElement("div"),S.className="brief-dg",s.querySelector(".brief-body").after(S)),S.innerHTML="";let g=(u,y)=>{if(!y)return;let h=document.createElement("div");h.className="brief-dgp";let l=document.createElement("h3");l.textContent=u,h.appendChild(l);let m=document.createElement("div");m.className="brief-dgs",m.appendChild(y),h.appendChild(m),S.appendChild(h)};try{g(_.bt||"Design",_.b?Ie(_.b):null)}catch(u){console.warn("diagram",e,u)}try{g(_.ft||"Problem \u2192 solution",_.f?Fe(_.f):null)}catch(u){console.warn("flow",e,u)}S.classList.toggle("one",S.children.length===1)}else S&&S.remove();s.hidden=!1}var x=(t,e,n,s)=>["P: "+t,...(Array.isArray(e)?e:[e]).map(i=>"S: "+i),"Q: "+(s||"The testbench drives every input combination and compares with a reference."),"OK: "+n],k=(t,e,n,s)=>["P: "+t,...(Array.isArray(e)?e:[e]).map(i=>"S: "+i),"Q: "+(s||"Every clock, the testbench compares your design with a reference model."),"OK: "+n],Se={counter:{b:"en > (+1 if en) > [count] > count; [count] > (+1 if en); rst_n .async.> [count]",f:k("Timers and addresses need a counter that resets, counts when enabled and wraps.","count <= count + 1 when en, on the rising edge; rst_n clears it at once.","A parameterised counter you can read in the waveform.","Find the cycle where it wraps from 15 to 0.")},mux:{b:"a > <4:1 mux> > y; b > <4:1 mux>; c > <4:1 mux>; d > <4:1 mux>; sel .2 bits.> <4:1 mux>",f:x("Pick one of four 8-bit buses.","A case on sel inside always @(*), with every value covered.","No latch: every sel value drives y.")},adder:{b:"a[0], b[0], cin > {FA0} -c1-> {FA1} -c2-> {FA2} -c3-> {FA3} > cout; {FA0} > sum",f:x("Checking results by eye does not scale.",["A 4-bit ripple-carry adder from full adders.","The testbench loops over all 512 inputs and compares with a + b + cin."],"The testbench prints PASS or FAIL by itself.","Does the self-checking testbench find a bug you add?")},fsm:{b:"din > (next state) > [state\\nS0..S4] > (found = S4) > found; [state\\nS0..S4] > (next state)",f:["P: Detect 1011 in a serial stream, including overlaps (10111011).","S: One state per prefix matched: S0, 1, 10, 101, 1011.","S: After 1011 the last 1 can start the next match.","Q: Count the detections in the run.","OK: A Moore FSM: found depends on the state only."]},cdc:{b:"async_in > [s1|clk_dst] > [s2|clk_dst] > sync_out",f:["P: A signal from another clock can make the sampling flop metastable.","S: The first flop may go metastable.","S: The second flop gives it a whole clock to settle.","OK: sync_out is a clean level in clk_dst, two clocks later."]},fifo:{b:"din > {memory 8\xD78} > dout; wr_en > [wptr] .> {memory 8\xD78}; rd_en > [rptr] .> {memory 8\xD78}; [wptr] > (count, full, empty); [rptr] > (count, full, empty)",f:["P: Producer and consumer run at different rates.","S: Write at wptr, read at rptr, both wrap around.","Q: Writes when full and reads when empty must be ignored.","OK: A FIFO with correct full and empty flags."]},sv:{b:"{always_ff\\nstate} > {always_comb\\nlights} > lights; {always_comb\\nnext state} > {always_ff\\nstate}; {assertions} .check.> {always_ff\\nstate}",f:["P: Plain Verilog FSMs use magic numbers and are hard to read.","S: typedef enum names the states; always_ff and always_comb show the intent.","S: Assertions check the design while it runs.","OK: A readable traffic-light FSM that checks itself."]},"p1-ha-df":{b:"a > (XOR) > sum; b > (XOR); a > (AND) > carry; b > (AND)",f:x("Add two bits.","assign sum = a ^ b; assign carry = a & b;","Dataflow: continuous assignments only.")},"p1-ha-bh":{b:"a > {always @(*)\\ncase {a, b}} > sum; b > {always @(*)\\ncase {a, b}} > carry",f:x("The same half adder, by its behavior.","An always @(*) block with a case on {a, b}; outputs are reg.","Behavioral modelling gives the same truth table.")},"p1-ha-st":{b:"a > (xor g1) > sum; b > (xor g1); a > (and g2) > carry; b > (and g2)",f:x("The same half adder from gates.","Instantiate xor and and primitives and wire them.","Structural modelling with gate primitives.")},"p1-fa-df":{b:"a > (a ^ b ^ cin) > sum; b > (a ^ b ^ cin); cin > (a ^ b ^ cin); a > (majority) > cout; b > (majority); cin > (majority)",f:x("Add three bits.","sum = a ^ b ^ cin; cout = ab + cin(a ^ b).","The full adder in two equations.")},"p1-fa-bh":{b:"a > {always @(*)\\n{cout, sum} = a+b+cin} > sum; b > {always @(*)\\n{cout, sum} = a+b+cin} > cout; cin > {always @(*)\\n{cout, sum} = a+b+cin}",f:x("The same full adder, by its behavior.","{cout, sum} = a + b + cin inside always @(*).","Verilog arithmetic does the work.")},"p1-fa-st":{b:"a > {half_adder 1} -s1-> {half_adder 2} > sum; b > {half_adder 1} -c1-> (OR) > cout; cin > {half_adder 2} -c2-> (OR)",f:x("Build a full adder the textbook way.","Two half_adder instances and an OR gate, connected by name.","Hierarchy: modules inside modules.")},"p1-ops":{b:"a[3:0] > {arithmetic, bitwise, logical,\\nreduction, relational, shift,\\nconcat, replicate, ?:} > one output per operator; b[3:0] > {arithmetic, bitwise, logical,\\nreduction, relational, shift,\\nconcat, replicate, ?:}",f:x("Know every Verilog operator group.","Each output uses one operator on a and b.","Widths and results of every operator.")},"p1-c2f":{b:"C > {task c2f\\nF = C*9/5 + 32} > F",f:["P: The same calculation is needed many times.","S: Write it once as a task with input and output arguments.","S: Call it for every temperature.","Q: Integer arithmetic: multiply before you divide.","OK: One task, many calls, the same result as the formula."]},"p2-add4":{b:"a[3:0] > (a + b + cin) > sum[3:0]; b[3:0] > (a + b + cin) > cout; cin > (a + b + cin)",f:x("Add two 4-bit numbers and a carry in.","{cout, sum} = a + b + cin: the result needs 5 bits.","Concatenation catches the carry out.")},"p2-mux2":{b:"a > <2:1> > y; b > <2:1>; sel .> <2:1>",f:x("Pick one of two inputs.","y = sel ? b : a.","The conditional operator is a mux.")},"p2-mux4":{b:"d0 > <4:1> > y; d1 > <4:1>; d2 > <4:1>; d3 > <4:1>; sel .2 bits.> <4:1>",f:x("Pick one of four inputs.","A case on sel, or nested ?:.","Every sel value selects one input.")},"p2-dec24":{b:"a[1:0] > {2-to-4 decoder} > y[3:0]; en .> {2-to-4 decoder}",f:x("Turn a 2-bit number into one-hot select lines.","y = en ? 1 << a : 0.","Exactly one line high when enabled.")},"p2-enc42":{b:"d[3:0] > {4-to-2 encoder} > y[1:0]; {4-to-2 encoder} > valid",f:x("Find which one of four lines is high.","A case on d for the four one-hot values; valid = 0 otherwise.","Encoding, and flagging illegal inputs.")},"p2-penc42":{b:"d[3:0] > {priority encoder\\nhighest 1 wins} > y[1:0]; {priority encoder\\nhighest 1 wins} > valid",f:x("Several requests at once: the highest wins.","if/else from d[3] down to d[0].","Priority comes from the order of the tests.")},"p2-cmp4":{b:"a[3:0] > {comparator} > gt; b[3:0] > {comparator} > eq; {comparator} > lt",f:x("Compare two unsigned 4-bit numbers.","gt, eq and lt with relational operators.","Exactly one output is 1 for every pair.")},"p2-bshift8":{b:"d[7:0] > {barrel shifter} > y[7:0]; amt .0 to 7.> {barrel shifter}; dir .left/right.> {barrel shifter}; rotate .> {barrel shifter}",f:x("Shift or rotate by any amount in one step.",["Shift with << or >>.","For rotate, OR in the bits that fell off the other end."],"A processor-style shift unit.")},"p2-alu":{b:"a > (add, sub, and, or,\\nxor, not, shl, shr) > <op mux> > y; b > (add, sub, and, or,\\nxor, not, shl, shr); op .3 bits.> <op mux>; <op mux> > (y == 0) > zero; (add, sub, and, or,\\nxor, not, shl, shr) > carry",f:x("Eight operations in one block, chosen by an opcode.","A case on op; zero and carry flags.","The heart of a processor datapath.")},"p3-dlatch":{b:"d > [latch\\nen = 1: q = d] > q; en .> [latch\\nen = 1: q = d]",f:k("Store a bit while en = 0, follow d while en = 1.","always @(*) if (en) q = d: the missing else makes a latch.","A transparent latch.","Does q follow d while en is high?")},"p3-dlatch-rst":{b:"d > [latch] > q; en .> [latch]; rst .async, wins.> [latch]",f:k("Clear the latch at once, whatever en is.","Test rst first, then en.","A latch with an asynchronous reset.")},"p3-dff":{b:"d > [DFF] > q; @clk .> [DFF]",f:k("Sample d only on the rising edge.","always @(posedge clk) q <= d.","The basic memory element of synchronous design.")},"p3-dff-arh":{b:"d > [DFF] > q; @clk .> [DFF]; rst .async, high.> [DFF]",f:k("Reset must work with no clock running.","always @(posedge clk or posedge rst).","rst clears q immediately.")},"p3-dff-neg-arh":{b:"d > [DFF\\nfalling edge] > q; @clk .negedge.> [DFF\\nfalling edge]; rst .async.> [DFF\\nfalling edge]",f:k("Capture on the falling edge, as in DDR.","always @(negedge clk or posedge rst).","q changes at the falling edge.")},"p3-dff-arl":{b:"d > [DFF] > q; @clk .> [DFF]; rst_n .async, low.> [DFF]",f:k("Most chips use an active-low reset.","always @(posedge clk or negedge rst_n) if (!rst_n) ...","rst_n = 0 clears q at once.")},"p3-dff-ash":{b:"d > [DFF] > q; @clk .> [DFF]; set .async, high.> [DFF]",f:k("Some registers must start at 1.","set forces q to 1 without waiting for the clock.","An asynchronous set.")},"p3-dff-srh":{b:"d > <rst ? 0 : d> > [DFF] > q; rst .> <rst ? 0 : d>; @clk .> [DFF]",f:k("A reset that is timed like data.","Only posedge clk in the sensitivity list; test rst inside.","rst acts on the next clock edge.")},"p3-dff-srl":{b:"d > <rst_n ? d : 0> > [DFF] > q; rst_n .> <rst_n ? d : 0>; @clk .> [DFF]",f:k("The same synchronous reset, active low.","if (!rst_n) q <= 0 inside always @(posedge clk).","rst_n = 0 clears q on the next edge.")},"p3-dff-srs":{b:"d > <rst, set, d\\npriority> > [DFF] > q; rst .wins.> <rst, set, d\\npriority>; set .> <rst, set, d\\npriority>",f:k("Reset and set together: one must win.","Test rst first, then set, then load d.","Priority is the order of the if/else.")},"p3-sync-async":{b:"d > [q_async] > q_async; d > [q_sync] > q_sync; rst .at once.> [q_async]; rst .next edge.> [q_sync]",f:["P: One reset, two registers: when does each clear?","S: q_async has rst in its sensitivity list; q_sync does not.","Q: In the waveform, q_async clears at rst, q_sync at the next clock edge.","OK: You can read the difference in time."]},"p3-twin":{b:"d[7:0] > [qa] > qa; d[7:0] > [qb] > qb; load_a .> [qa]; load_b .> [qb]",f:k("Two registers share a bus but load independently.","Each register loads d only when its load is high, else holds.","Shared data, separate enables.")},"p4-sr5":{b:"sin > [q4] > [q3] > [q2] > [q1] > [q0]",f:k("Serial data enters at the left and moves right.","q <= {sin, q[4:1]} every clock.","A 5-bit serial-in shift register.")},"p4-usr5":{b:"d > <mode mux\\nhold, >>, <<, load> > [q 5 bits] > q; sr_in > <mode mux\\nhold, >>, <<, load>; sl_in > <mode mux\\nhold, >>, <<, load>; [q 5 bits] > <mode mux\\nhold, >>, <<, load>; mode .2 bits.> <mode mux\\nhold, >>, <<, load>",f:k("One register for every shift job.","A case on mode chooses the next value.","Hold, shift right, shift left or load.")},"p4-cnt":{b:"[q 4 bits] > (+1) > [q 4 bits] > q; rst_n .async.> [q 4 bits]",f:k("Count 0 to 15 and wrap.","q <= q + 1 on every rising edge.","A basic counter.")},"p4-cnt-tb":{b:"{your testbench\\nstimulus + checker}+ > {counter (given)} > {your testbench\\nstimulus + checker}+; BUG .> {counter (given)}",f:["P: The design is given; you write the testbench.","S: Drive reset, enable and clock; keep a reference count.","S: Compare every clock and count mismatches.","Q: Set BUG = 1: does your testbench print FAIL?","OK: A testbench that catches a broken design."]},"p4-cnt-load":{b:"d > <load ? d : q+1> > [q] > q; [q] > (+1) > <load ? d : q+1>; load .> <load ? d : q+1>",f:k("Start counting from a given value.","load = 1 loads d, otherwise count up.","A loadable counter.")},"p4-updown":{b:"[q] > (+1 or \u22121) > [q] > q; up .> (+1 or \u22121)",f:k("Count in either direction.","up = 1 adds 1, up = 0 subtracts 1; both wrap.","An up/down counter.")},"p4-mod":{b:"[q] > (q == N\u22121 ? 0 : q+1) > [q] > q",f:k("A decade counter: 0 to 9, then 0.","Compare with N\u22121 and clear instead of adding.","A modulus-N counter.")},"p4-range":{b:"[q] > (q == HIGH ? LOW : q+1) > [q] > q",f:k("Count only from LOW to HIGH.","Reset to LOW; after HIGH go back to LOW.","A range counter.")},"p4-range-udl":{b:"d > <load / up / down> > [q] > q; [q] > <load / up / down>; load .> <load / up / down>; up .> <load / up / down>",f:k("Range, direction and load together.","load first; then up wraps HIGH \u2192 LOW, down wraps LOW \u2192 HIGH.","All counter features in one block.")},"p4-div2":{b:"[clk_out] > (NOT) > [clk_out] > clk_out; @clk .> [clk_out]",f:k("Make a clock at half the frequency.","Toggle a flop on every rising edge.","clk_out = clk / 2 with 50% duty.")},"p4-div4":{b:"[cnt 2 bits] > (+1) > [cnt 2 bits]; [cnt 2 bits] -cnt[1]-> clk_out",f:k("Divide by 4 with 50% duty.","A 2-bit counter: its top bit is clk / 4.","Counter bits are divided clocks.")},"p4-div3":{b:"[mod-3 counter\\nposedge] > (1/3 pulse) > [copy\\nnegedge] > (OR) > clk_out; (1/3 pulse) > (OR)",f:["P: An odd divider: a counter gives 33% duty, the testbench wants 50%.","S: A mod-3 counter on the rising edge makes a pulse 1 clock long.","S: A copy delayed by half a clock (falling edge).","F: OR them: the pulse becomes exactly 1.5 clocks.","OK: clk / 3 with exactly 50% duty."]},"p4-fifo":{b:"din > {memory 8\xD78} > dout; wr_en > [wptr] .> {memory 8\xD78}; rd_en > [rptr] .> {memory 8\xD78}; [wptr] > (full, empty); [rptr] > (full, empty)",f:k("Buffer data between a producer and a consumer.",["Write at wptr unless full, read at rptr unless empty.","Full and empty from the pointers and a count."],"A single-clock FIFO.")},"p4-afifo":{b:"wdata > {memory} > rdata; [wptr Gray|wclk] > [2-flop sync|rclk] > (rempty|rclk); [rptr Gray|rclk] > [2-flop sync #w|wclk] > (wfull|wclk); [wptr Gray|wclk] .> {memory}",f:["P: Producer and consumer on different clocks.","S: Each pointer is a Gray code: one bit changes per step.","S: Pointers cross through 2-flop synchronizers.","OK: Full in wclk and empty in rclk are never wrong, only late."]},"p4-mealy-nov":{b:"x > (next state) > [state\\nS0 S1 S2] > (y = S2 and x) > y; x > (y = S2 and x); [state\\nS0 S1 S2] > (next state)",f:k("Detect 1-0-1; restart after each detection.","Mealy: y depends on the state AND x.","10101 gives one detection.")},"p4-mealy-ov":{b:"x > (next state) > [state] > (y = S2 and x) > y; x > (y = S2 and x); [state] > (next state)",f:k("Detect 1-0-1, with overlap.","After a detection go to the '1 seen' state, not to the start.","10101 gives two detections.")},"p4-moore-nov":{b:"x > (next state) > [state\\nS0..S3] > (y = S3) > y; [state\\nS0..S3] > (next state)",f:k("Detect 1-0-1 with a Moore machine.","An extra state for 'found'; y depends on the state only.","y comes one clock later than in the Mealy version.")},"p4-moore-ov":{b:"x > (next state) > [state\\nS0..S3] > (y = S3) > y; [state\\nS0..S3] > (next state)",f:k("Moore and overlapping.","From the found state, a 0 goes to '10 seen'.","Two detections in 10101, one clock after each 1.")},"s01-reg":{b:"data > [register 8 bits\\nalways_ff] > out; enable .> [register 8 bits\\nalways_ff]; rst_ .async.> [register 8 bits\\nalways_ff]",f:k("Store a byte when enable is high, the SystemVerilog way.","logic, ANSI ports, timeunit and always_ff.","The CPU's register block.")},"s02-mux":{b:"in_a > <mux #(WIDTH)> > out; in_b > <mux #(WIDTH)>; sel_a .> <mux #(WIDTH)>",f:x("One mux module for any width.","A WIDTH parameter; always_comb with unique case and an X default.","Used as 5-bit in the CPU and 8/1-bit in the testbench.")},"s03-cnt":{b:"data > <load, +1 or hold> > [count 5 bits] > count; [count 5 bits] > <load, +1 or hold>; load .> <load, +1 or hold>; enable .> <load, +1 or hold>",f:k("The CPU's program counter.","load wins over enable; count wraps from 31 to 0.","A loadable counter in SystemVerilog.")},"s04-ctrl":{b:"opcode > {controller FSM\\n8 states, enum} > sel, rd, ld_ir, halt,\\ninc_pc, ld_ac, ld_pc, wr, data_e; zero > {controller FSM\\n8 states, enum}",f:k("Decide which CPU block acts in each of 8 states.","An enum for states and a package for opcodes; outputs from state, opcode and zero.","The VeriRISC sequence controller.")},"s05-alu":{b:"accum > (op: ADD, AND, XOR,\\nLDA, pass) > [out\\nfalling edge] > out; data > (op: ADD, AND, XOR,\\nLDA, pass); opcode .> (op: ADD, AND, XOR,\\nLDA, pass); accum > (accum == 0) > zero",f:k("Combine the accumulator with memory data.","A case on the opcode enum; register out on the falling edge.","The result is ready for the accumulator at the next rising edge.")},"s06-memtb":{b:"{your testbench\\ntasks write/read}+ > {memory 32\xD78 (given)} > {your testbench\\ntasks write/read}+; BUG .> {memory 32\xD78 (given)}",f:["P: The memory is given; prove it works.","S: Write tasks for write and read.","S: Fill memory, read it back, compare.","Q: With BUG = 1, does your testbench report errors?","OK: Reusable tasks make a short, strong testbench."]},"s07-struct":{b:"{testbench} -bus_t packed struct-> {memory with\\none bus port} > data_out; {package\\ntypedef struct packed} .> {memory with\\none bus port}",f:["P: Many signals travel together; every module must agree on them.","S: Put a packed struct in a package.","S: One port carries read, write, address and data.","OK: One definition, no wiring mistakes. (Interfaces do the same in other simulators.)"]},"s08-cpu":{b:"{program counter} > <address mux> > {memory} > {instruction register} > {controller\\n8-state FSM}; {instruction register} -operand address-> <address mux>; {memory} -data-> {ALU} > {accumulator}; {accumulator} > {ALU}; {controller\\n8-state FSM} .control.> {ALU}",f:["P: Put the blocks together into a CPU that runs programs.","S: Fetch: PC \u2192 memory \u2192 instruction register.","S: Execute: ALU on accumulator and memory data, controlled by the FSM.","Q: Do the test programs reach HALT at the right address?","OK: A working 8-bit VeriRISC CPU."]},"s09-johnson":{b:"[q N bits] > (shift left,\\nfeed back ~MSB) > [q N bits] > q",f:k("2N states with one bit changing at a time.","Shift left and feed the inverted MSB back in.","A Johnson counter: 8 states from 4 flops.")},"s10-gen":{b:"a, b, cin > {stage[0].fa} -c-> {stage[1].fa} -c-> {\u2026 N stages} -c-> {stage[N-1].fa} > cout",f:k("Build an array of identical blocks for any size.","A generate for loop with a genvar; each carry feeds the next stage.","An N-bit ripple-carry adder from one loop.","The testbench checks N = 4 and N = 12.")},"s11-dpram":{b:"port A: addr, din, we > {dual-port RAM} > dout_a; port B: addr > {dual-port RAM} > dout_b",f:k("Write on one port while another reads.","One array, two synchronous read ports; port A reads before it writes.","A dual-port RAM.")},"s12-uart":{b:"data, start > {UART TX FSM\\nIDLE, START, DATA, STOP} > tx; {UART TX FSM\\nIDLE, START, DATA, STOP} > busy; [tick counter] .bit time.> {UART TX FSM\\nIDLE, START, DATA, STOP}",f:k("Send bytes over one wire.",["Start bit 0, 8 data bits LSB first, stop bit 1.","Each bit lasts CLKS_PER_BIT clocks."],"A UART transmitter.","The testbench decodes tx like a receiver.")},"l01-gates":{b:"a > (AND, OR, NOT,\\nNAND, NOR, XOR, XNOR) > 7 outputs; b > (AND, OR, NOT,\\nNAND, NOR, XOR, XNOR)",f:x("Know every gate's truth table.","One gate primitive per output.","All 7 gates for all 4 inputs.")},"l02-nand":{b:"a > (NAND) > (NAND #2) > and_y; b > (NAND); a > (NAND #a) > (NAND #o) > or_y; b > (NAND #b) > (NAND #o)",f:x("Build every gate from NAND alone.",["NOT = NAND(a, a); AND = NOT of NAND.","OR = NAND(a', b') by De Morgan; XOR with 4 NANDs."],"NAND is universal.")},"l03-nor":{b:"a > (NOR) > (NOR #2) > or_y; b > (NOR); a > (NOR #a) > (NOR #o) > and_y; b > (NOR #b) > (NOR #o)",f:x("Build every gate from NOR alone.",["NOT = NOR(a, a); OR = NOT of NOR.","AND = NOR(a', b'); XNOR with 4 NORs."],"NOR is universal too.")},"l04-sop-pos":{b:"A, B, C > (y1 = AB + A'B'\\nSOP) > y1; A, B, C > (y2 = (A+B)(B+C)(A+C')\\nPOS) > y2; A, B, C > (y3 = A + BC') > y3",f:x("The same truth table in two forms.","Write each expression with assign, exactly as given.","SOP sums minterms, POS multiplies maxterms.")},"l05-demorgan":{b:"A, B > ((A\xB7B)') > l1_left; A, B > (A' + B') > l1_right; A, B > ((A+B)') > l2_left; A, B > (A'\xB7B') > l2_right",f:x("Turn ANDs into ORs by inverting.","Write both sides of both laws.","Each pair is equal for every input.")},"l06-kmap":{b:"X, Y, Z > {3-var K-map\\n\u03A3m(3,4,6,7)} > F1; A, B, C, D > {4-var K-map\\n\u03A3m(2,6,8,9,10,11,14)} > F2",f:["P: A minterm list is not the cheapest circuit.","S: Draw the K-maps (columns in Gray order).","S: Group 1s in the largest power-of-two rectangles, wrapping around edges.","Q: All 128 input combinations are checked.","OK: F1 and F2 with 2 terms each."]},"l07-dontcare":{b:"A, B, C, D > {K-map\\n\u03A3m(1,3,7,11,15)\\n+ d(0,2,5)} > F",f:["P: Some inputs never happen: their outputs are don't-cares.","S: Use a don't-care as 1 only when it makes a group bigger.","Q: The testbench skips the don't-care rows.","OK: F = C\xB7D + A'\xB7B'."]},"l08-parity":{b:"d[3:0] > (XOR tree) > p; d[3:0] > (XOR tree #2) > error; p_in > (XOR tree #2)",f:x("Detect a single flipped bit.","p = ^d makes the number of 1s even; error = ^{d, p_in}.","Parity generator and checker.")},"l09-majority":{b:"A > (AB + BC + AC) > y; B > (AB + BC + AC); C > (AB + BC + AC)",f:x("Outvote one faulty copy of three.","Truth table \u03A3m(3,5,6,7), simplified with a K-map.","y = AB + BC + AC.")},"l10-sub":{b:"A, B, Bin > (D = A ^ B ^ Bin) > D; A, B, Bin > (Bout = A'B + A'Bin + B\xB7Bin) > Bout",f:x("Subtract with a borrow.","Half and full subtractor equations.","D is the same as the adder's sum; the borrow differs.")},"l29-rca":{b:"A[0], B[0], cin > {FA0} -c1-> {FA1} -c2-> {FA2} -c3-> {FA3} > cout; {FA0} > S",f:x("Add 4-bit numbers, like the 7483.","Chain four full adders through their carries.","A ripple-carry adder: 512 inputs checked.")},"l18-addsub":{b:"B > (XOR with M) > {4-bit adder} > S; A > {4-bit adder} > cout; M .carry in.> {4-bit adder}; {4-bit adder} > (overflow) > v",f:x("One adder that also subtracts.",["M = 1 inverts B and adds 1: A \u2212 B in two's complement.","v flags signed overflow."],"An adder/subtractor with one control.")},"l19-bcdadd":{b:"a, b, cin > {binary adder} > (sum above 9?) > {add 6} > s; (sum above 9?) > cout",f:["P: A binary adder gives a wrong code when a digit sum exceeds 9.","S: Add the BCD digits in binary.","Q: Is the sum above 9?","F: Add 6 (0110) and set the carry.","OK: A correct BCD digit and decimal carry."]},"l17-cmp2":{b:"a[1], b[1] > (XNOR: equal bits) > (gt, eq, lt\\nfrom the MSB down) > gt, eq, lt; a[0], b[0] > (XNOR: equal bits)",f:x("Compare two 2-bit numbers with gates.","Equal bits from XNOR; the MSB decides unless it is equal.","gt, eq, lt from the K-map equations.")},"l30-cmp4":{b:"A[3:0], B[3:0] > {7485 comparator} > gt, eq, lt; i_gt, i_eq, i_lt .cascade.> {7485 comparator}",f:x("Compare wider numbers by chaining 4-bit comparators.","When A = B, pass the cascade inputs through.","For one chip: i_eq = 1, i_gt = i_lt = 0.")},"l14-dec38":{b:"a[2:0] > {74138 decoder} > y_n[7:0] active low; g1, g2a_n, g2b_n .enables.> {74138 decoder}",f:x("Select one of eight, as real parts do.","Enabled when g1 = 1 and both active-low enables are 0.","One output low, the rest high.")},"l11-dec-fa":{b:"A, B, Cin > {3-to-8\\ndecoder} -m1 m2 m4 m7-> (OR#s) > S; {3-to-8\\ndecoder} -m3 m5 m6 m7-> (OR#c) > C",f:["P: Build a full adder without writing its equations.","S: The decoder makes all 8 minterms of A, B, Cin.","S: S = \u03A3m(1,2,4,7), C = \u03A3m(3,5,6,7) from the truth table.","F: OR the matching decoder outputs for each function.","OK: Any 3-input function is one OR gate on a decoder."]},"l15-enc83":{b:"d[7:0] > {8-to-3 encoder} > y, valid; d[7:0] > {priority encoder} > y_p, any",f:x("Encode a one-hot input; handle many active inputs.","Plain: one-hot only, valid flags the rest. Priority: highest 1 wins.","Both encoders, 256 inputs checked.")},"l13-mux-demux":{b:"d[7:0] > <8:1 mux> > y; sel .3 bits.> <8:1 mux>; x > {1:8 demux} > o[7:0]; sel .3 bits.> {1:8 demux}",f:x("Route many inputs to one line, and one line to many.","y = d[sel]; o = x << sel.","Mux and demux, 4096 inputs checked.")},"l12-mux-fn":{b:"A, B, C .select.> <8:1 mux\\n74151> > F; 0, 1, D, D' > <8:1 mux\\n74151>",f:["P: Implement a 4-variable function with one 8:1 mux.","S: A, B, C drive the select lines.","S: For each pair of rows (D = 0, 1) the data input is 0, 1, D or D'.","OK: F = \u03A3m(1,3,4,11,12,13,14,15) with one chip."]},"l16-gray":{b:"b[3:0] > (g = b ^ b>>1) > g_out; g[3:0] > (XOR chain\\nfrom the MSB) > b_out",f:x("Only one bit changes between neighbouring Gray values.","Binary \u2192 Gray: one XOR per bit. Gray \u2192 binary: XOR all bits above.","Both converters, 256 inputs checked.")},"l20-7seg":{b:"bcd[3:0] > {7-segment decoder\\ncase} > seg = abcdefg",f:x("Light the right segments for each digit.","A case with one 7-bit pattern per digit; 10 to 15 blank.","The console draws each digit.")},"l21-srlatch":{b:"s_n > (NAND g1) > q; r_n > (NAND g2) > q_n; (NAND g1) > (NAND g2); (NAND g2) > (NAND g1)",f:["P: Memory starts with feedback.","S: Two cross-coupled NAND gates with 1 ns delay.","S: s_n = 0 sets, r_n = 0 resets, both 1 hold.","Q: Both 0 is not allowed for a NAND latch.","OK: The latch keeps its bit."]},"l22-ffs":{b:"s, r > [SR FF] > q_sr; j, k > [JK FF] > q_jk; d > [D FF] > q_d; t > [T FF] > q_t",f:k("Four flip-flops, four characteristic tables.","One always block: SR (11 holds), JK (11 toggles), D, T.","All four match the reference for 200 random cycles.")},"l23-ripple":{b:"@clk .falling.> [T0] > [T1] > [T2]; [T0] > q[0]; [T1] > q[1]; [T2] > q[2]",f:["P: The simplest counter: each flop clocks the next.","S: Each stage toggles on the falling edge of the stage before.","X: The bits change one after another (ripple).","OK: Counts 0 to 7 with no logic at all."]},"l24-sync":{b:"[q 3 bits] > (T0 = 1, T1 = Q0,\\nT2 = Q0\xB7Q1) > [q 3 bits] > q; @clk .> [q 3 bits]",f:k("All bits change on the same clock edge.","A bit toggles when all bits below it are 1.","A synchronous counter with T flip-flops.")},"l32-updown":{b:"[q 3 bits] > (T inputs\\nfrom up and Q) > [q 3 bits] > q; up .> (T inputs\\nfrom up and Q)",f:k("Count both ways with T flip-flops.","Excitation table and K-maps give T1 and T2 for up and down.","A MOD-8 up/down counter.")},"l27-mod6":{b:"[q 3 bits] > (q == 5 ? 0 : q+1) > [q 3 bits] > q; [q 3 bits] > (q == 5) > tc",f:k("Divide by 6, as in a clock's seconds counter.","Clear when the count reaches 5; flag it with tc.","A truncated counter with terminal count.")},"l25-ring":{b:"[ring 1000] > (rotate) > [ring 1000] > ring; [johnson 0000] > (shift in ~LSB) > [johnson 0000] > john",f:k("Counters made from shift registers.","Ring: rotate a single 1. Johnson: feed back the inverted bit.","4 states vs 8 states from 4 flops.")},"l26-siso":{b:"sin > [q3] > [q2] > [q1] > [q0] > sout",f:["P: Move serial data one bit per clock, as in UART or SPI.","S: On every clock each flop takes the value of the flop before it.","Q: Does 1001 come out of sout 4 clocks later, in order?","OK: A 4-flop shift register delays the stream by 4 clocks."]},"l31-usr":{b:"d > <mode mux> > [q 4 bits] > q; sr_in > <mode mux>; sl_in > <mode mux>; [q 4 bits] > <mode mux>; mode .> <mode mux>",f:k("One register for hold, shift right, shift left and load (74194).","A case on mode picks the next value.","A universal shift register.")},"l28-fsm":{b:"dir > (next state\\nfrom the table) > [state 2 bits] > (z = state 10) > z; [state 2 bits] > (next state\\nfrom the table)",f:k("Build a state machine straight from a state table.","One case item per row; a Moore output from the state.","A Gray-code up/down counter FSM.")},"l33-traffic":{b:"car > {FSM\\nS0 S1 S2 S3} > main lights; {FSM\\nS0 S1 S2 S3} > side lights; [timer] .3 clocks.> {FSM\\nS0 S1 S2 S3}",f:["P: Give the side road green only when a car waits.","S: S0 main green \u2192 S1 main yellow when car = 1.","S: S2 side green for 3 clocks (timer) \u2192 S3 side yellow \u2192 S0.","Q: Is any state green for both roads? No.","OK: A Moore FSM with a timer, from a word spec."]}};var Y=t=>document.querySelector(t);function Re({key:t,onChange:e}){let n=null,s=()=>{try{return JSON.parse(localStorage.getItem(t)||"{}")||{}}catch{return{}}},i=l=>{try{localStorage.setItem(t,JSON.stringify(l))}catch{}},r=l=>{let m=String(l||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return m?parseFloat(m[0]):NaN},c=(l,m)=>l.type==="choice"?m!=null&&m!==""&&+m===l.answer:isFinite(r(m))&&Math.abs(r(m)-l.answer)<=(l.tol??.01)+1e-9,a=l=>l.type==="choice"?l.options[l.answer]:`${l.answer}${l.unit?" "+l.unit:""}`;function S(l,m){let f=Y("#quiz-score");if(l===null){f.textContent="",f.classList.remove("done");return}f.textContent=`${l} / ${m} correct`,f.classList.toggle("done",l===m)}function _(l,m){let f=s(),q=f[n.id]||{a:[]};q.a=q.a||[],q.a[l]=m,q.checked=!1,f[n.id]=q,i(f);let A=Y("#quiz-list").children[l]?.querySelector(".quiz-fb");A&&(A.hidden=!0)}function g(l){n=l&&l.quiz&&l.quiz.length?l:null;let m=Y("#quiz"),f=Y("#quiz-list");if(!n){m.hidden=!0;return}m.hidden=!1,f.innerHTML="";let q=s()[n.id]||{},A=q.a||[];n.quiz.forEach((R,F)=>{let L=document.createElement("li"),M=document.createElement("div");if(M.className="quiz-q",R.try){let v=document.createElement("span");v.className="quiz-try",v.textContent="Try it",M.appendChild(v)}let U=R.q.replace(/^Try it: /,"");if(M.appendChild(document.createTextNode(U.charAt(0).toUpperCase()+U.slice(1))),L.appendChild(M),R.type==="choice"){let v=document.createElement("div");v.className="quiz-opts",v.setAttribute("role","radiogroup"),R.options.forEach((D,C)=>{let J=document.createElement("label"),B=document.createElement("input");B.type="radio",B.name=`q${F}`,B.value=C,A[F]!==void 0&&+A[F]===C&&(B.checked=!0),B.addEventListener("change",()=>_(F,C));let Q=document.createElement("span");Q.textContent=D,J.append(B,Q),v.appendChild(J)}),L.appendChild(v)}else{let v=document.createElement("div");v.className="quiz-num";let D=document.createElement("input");if(D.type="text",D.inputMode="decimal",D.autocomplete="off",D.setAttribute("aria-label","Answer to question "+(F+1)),D.placeholder="e.g. 3",A[F]!==void 0&&(D.value=A[F]),D.addEventListener("input",()=>_(F,D.value)),D.addEventListener("keydown",C=>{C.key==="Enter"&&u()}),v.appendChild(D),R.unit){let C=document.createElement("span");C.className="unit",C.textContent=R.unit,v.appendChild(C)}L.appendChild(v)}let T=document.createElement("div");T.className="quiz-fb",T.hidden=!0,T.setAttribute("aria-live","polite"),L.appendChild(T),f.appendChild(L)}),q.checked?u(!0):S(null)}function u(l){if(!n)return;let m=s(),f=m[n.id]||{a:[]};f.a=f.a||[];let q=0;n.quiz.forEach((A,R)=>{let F=Y("#quiz-list").children[R],L=A.type==="choice"?(F.querySelector("input:checked")||{}).value:F.querySelector("input").value;f.a[R]=L;let M=L===void 0||L==="",U=!M&&c(A,L);U&&q++;let T=F.querySelector(".quiz-fb");T.hidden=!1,T.className="quiz-fb "+(U?"ok":"bad"),T.innerHTML="";let v=document.createElement("b");v.textContent=U?"Correct.":M?"Not answered yet.":"Not quite.",T.appendChild(v),U&&A.explain?T.appendChild(document.createTextNode(A.explain)):!U&&!M&&T.appendChild(document.createTextNode(A.type==="number"?"Check the code and the simulation output again.":"Look at the code and the output again and try another option."))}),f.checked=!0,f.score=q,f.total=n.quiz.length,m[n.id]=f,i(m),S(q,n.quiz.length),!l&&e&&e()}function y(){n&&n.quiz.forEach((l,m)=>{let f=Y("#quiz-list").children[m].querySelector(".quiz-fb");f.hidden=!1,f.className="quiz-fb shown",f.innerHTML="";let q=document.createElement("b");q.textContent="Answer: "+a(l)+".",f.appendChild(q),l.explain&&f.appendChild(document.createTextNode(l.explain))})}function h(){if(!n)return;let l=s();delete l[n.id],i(l),g(n),e&&e()}return Y("#quiz-check").addEventListener("click",()=>u()),Y("#quiz-reveal").addEventListener("click",y),Y("#quiz-reset").addEventListener("click",h),{render:g,status:l=>s()[l]}}var Be={counter:[{type:"number",q:"Run it. What is the count printed at 175 ns?",answer:15,tol:0,unit:"",explain:"The counter has counted 0 to 15 by then.",try:!1},{type:"number",q:"What value comes after 15?",answer:0,tol:0,unit:"",explain:"A 4-bit counter wraps from 15 back to 0.",try:!1},{type:"choice",q:"Why does the reset use negedge rst_n in the sensitivity list?",options:["It is a synchronous reset","It is an asynchronous active-low reset: q clears as soon as rst_n falls","It saves area","It is required for counters"],answer:1,explain:"An asynchronous reset acts without waiting for the clock.",try:!1},{type:"choice",q:"Try it: change WIDTH to 3 in the testbench instance. After which value does the count wrap?",options:["7","15","3","8"],answer:0,explain:"3 bits count 0 to 7.",try:!0}],mux:[{type:"choice",q:"When sel = 2, which input reaches y?",options:["a","b","c","d"],answer:2,explain:"sel 0 \u2192 a, 1 \u2192 b, 2 \u2192 c, 3 \u2192 d.",try:!1},{type:"number",q:"How many bits wide is y?",answer:8,tol:0,unit:"",explain:"The mux is 8 bits wide.",try:!1},{type:"choice",q:"Why does a case statement inside always @(*) need every sel value (or a default)?",options:["For speed","Otherwise y keeps its old value for missing cases and synthesis infers a latch","It is a syntax rule","To save area"],answer:1,explain:"Full case coverage keeps the logic combinational.",try:!1}],adder:[{type:"number",q:"How many input combinations does the testbench check?",answer:512,tol:0,unit:"",explain:"a and b are 4 bits each, plus a carry in: 2^9 = 512.",try:!1},{type:"choice",q:"What makes this testbench self-checking?",options:["It prints every result","It compares each result with the expected a + b + cin and counts mismatches","It uses $monitor","It dumps a waveform"],answer:1,explain:"A self-checking testbench decides PASS or FAIL by itself.",try:!1},{type:"number",q:"In a 4-bit ripple-carry adder, how many full adders are chained?",answer:4,tol:0,unit:"",explain:"One per bit.",try:!1}],fsm:[{type:"number",q:"How many times is the pattern 1011 detected?",answer:4,tol:0,unit:"",explain:"The run prints four detections.",try:!1},{type:"choice",q:"Is this detector overlapping?",options:["No","Yes: the last 1 of a 1011 can be the first 1 of the next one","Only for 0s","It depends on the clock"],answer:1,explain:"Overlapping detection reuses the tail of one match.",try:!1},{type:"choice",q:"Moore or Mealy?",options:["Moore: found depends only on the state","Mealy: found depends on the state and din","Neither","Both"],answer:0,explain:"The comment says Moore: the output comes from the state.",try:!1}],cdc:[{type:"number",q:"How many destination clocks after the change does level_dst follow?",answer:2,tol:0,unit:"",explain:"Two flops in series.",try:!1},{type:"choice",q:"Why two flops and not one?",options:["To double the frequency","The first flop may go metastable; the second gives it a full clock to settle","To invert the signal","For hold timing"],answer:1,explain:"See the CDC labs for more.",try:!1},{type:"choice",q:"Can this synchronizer carry a one-cycle pulse from a much faster clock?",options:["Yes, always","No: the pulse can fall between two destination edges and be lost","Only with reset","Only in simulation"],answer:1,explain:"Pulses need a toggle synchronizer or a handshake.",try:!1}],fifo:[{type:"number",q:"How many entries does the FIFO hold?",answer:8,tol:0,unit:"",explain:"AW = 3: 2^3 = 8 entries.",try:!1},{type:"number",q:"The testbench writes 10 values. How many are stored?",answer:8,tol:0,unit:"",explain:"The last two are dropped because the FIFO is full.",try:!1},{type:"choice",q:"Why are the pointers AW + 1 bits wide?",options:["For parity","The extra bit tells a full FIFO from an empty one when the address bits are equal","To count reads","For Gray code"],answer:1,explain:"Equal pointers = empty; same address, different wrap bit = full.",try:!1}],sv:[{type:"number",q:"For how many clock cycles is the light green?",answer:6,tol:0,unit:"",explain:"The timer loads 5 and counts down to 0: 6 cycles.",try:!1},{type:"number",q:"For how many clock cycles is it yellow?",answer:3,tol:0,unit:"",explain:"The timer loads 2 for yellow.",try:!1},{type:"choice",q:"What does typedef enum give you over plain localparam states?",options:["Faster simulation","Named states that show up in the waveform and in .name(), with type checking","Less area","Nothing"],answer:1,explain:"The testbench prints state.name().",try:!1}],"p1-ha-df":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"Which Verilog construct is dataflow style?",options:["always @(*)","assign","and/xor gate primitives","initial"],answer:1,explain:"Continuous assignments describe how data flows to the outputs.",try:!1}],"p1-ha-bh":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"Why are sum and carry declared reg in the behavioral version?",options:["Because they are flip-flops","Because they are assigned inside an always block","Because they are outputs","It is optional"],answer:1,explain:"reg is a Verilog data type for procedural assignment; no flip-flop is created by always @(*).",try:!1}],"p1-ha-st":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"In 'xor g1 (sum, a, b);', which port comes first?",options:["An input","The output","The clock","Any order"],answer:1,explain:"Gate primitives list the output first.",try:!1}],"p1-fa-df":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"choice",q:"Which expression gives the carry out?",options:["a ^ b ^ cin","(a & b) | (cin & (a ^ b))","a | b | cin","~(a & b)"],answer:1,explain:"Carry when both inputs are 1, or when one is 1 and the carry in is 1.",try:!1}],"p1-fa-bh":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"choice",q:"Why does {cout, sum} = a + b + cin work?",options:["Verilog adds 1-bit values as 1 bit","The left side is 2 bits wide, so the addition is done in 2 bits and the carry lands in cout","It does not work","Because of always @(*)"],answer:1,explain:"The width of the assignment target sets the size of the result.",try:!1}],"p1-fa-st":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"number",q:"How many half_adder instances does the structural full adder use?",answer:2,tol:0,unit:"",explain:"Two half adders and an OR gate.",try:!1}],"p1-ops":[{type:"number",q:"For a = 12 and b = 5, what is a % b?",answer:2,tol:0,unit:"",explain:"12 = 2 \xD7 5 + 2.",try:!1},{type:"choice",q:"What is the difference between & and && ?",options:["None","& is bitwise and gives a vector; && is logical and gives 1 bit","&& is bitwise","& is only for 1-bit values"],answer:1,explain:"a & b ANDs each bit; a && b is true if both are non-zero.",try:!1},{type:"number",q:"For a = 4'b1011, what is the reduction ^a (as 0 or 1)?",answer:1,tol:0,unit:"",explain:"XOR of all bits: three 1s give 1.",try:!1},{type:"choice",q:"What is the difference between $display and $monitor?",options:["None","$display prints once; $monitor prints again every time one of its signals changes","$monitor prints once","$display only prints at the end"],answer:1,explain:"The testbench turns $monitor off with $monitoroff.",try:!1}],"p1-c2f":[{type:"number",q:"What does c_to_f return for 100 \xB0C?",answer:212,tol:0,unit:"",explain:"100 \xD7 9 / 5 + 32.",try:!1},{type:"number",q:"And for 37 \xB0C (integer arithmetic)?",answer:98,tol:0,unit:"",explain:"37 \xD7 9 = 333; 333 / 5 = 66 (rounded toward zero); 66 + 32 = 98.",try:!1},{type:"choice",q:"What is the main difference between a task and a function in Verilog?",options:["None","A task can take time (delays, @) and has output arguments; a function returns a value in zero time","A function can have delays","Tasks cannot have arguments"],answer:1,explain:"Functions are for expressions, tasks for procedures.",try:!1}],"p2-add4":[{type:"number",q:"What is {cout, sum} for 9 + 8 + 1?",answer:18,tol:0,unit:"",explain:"As printed by the testbench.",try:!1},{type:"number",q:"How many bits does {cout, sum} have?",answer:5,tol:0,unit:"",explain:"4 sum bits and a carry.",try:!1},{type:"number",q:"How many test cases does the testbench check?",answer:512,tol:0,unit:"",explain:"4 + 4 + 1 input bits: 2^9.",try:!1}],"p2-mux2":[{type:"choice",q:"Which input reaches y when sel = 1?",options:["a","b"],answer:1,explain:"y = sel ? b : a.",try:!1},{type:"choice",q:"How does synthesis usually build y = sel ? b : a?",options:["A flip-flop","A 2:1 multiplexer cell","A latch","An adder"],answer:1,explain:"The conditional operator maps to a mux.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:8,tol:0,unit:"",explain:"a, b and sel: 2^3.",try:!1}],"p2-mux4":[{type:"number",q:"How many select bits does a 4:1 mux need?",answer:2,tol:0,unit:"",explain:"log2(4) = 2.",try:!1},{type:"choice",q:"Why does the case statement need a default (or all 4 values)?",options:["For speed","So y is assigned in every case and no latch is inferred","It is a syntax rule","To reset y"],answer:1,explain:"Every path through always @(*) must assign y.",try:!1},{type:"number",q:"How many cases does the testbench check?",answer:64,tol:0,unit:"",explain:"4 data bits and 2 select bits: 2^6.",try:!1}],"p2-dec24":[{type:"choice",q:"With en = 1 and a = 2'b10, what is y?",options:["4'b0010","4'b0100","4'b1000","4'b0001"],answer:1,explain:"Bit 2 is set.",try:!1},{type:"choice",q:"What is y when en = 0?",options:["4'b0001","4'b0000","4'b1111","Unknown"],answer:1,explain:"A disabled decoder drives no select line.",try:!1},{type:"number",q:"How many outputs does an n-to-2^n decoder with n = 3 have?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1}],"p2-enc42":[{type:"number",q:"For d = 4'b0100, what is y?",answer:2,tol:0,unit:"",explain:"The single 1 is at position 2.",try:!1},{type:"choice",q:"What should valid be for d = 4'b0110?",options:["1","0: two bits are set, which a simple encoder cannot handle","Unknown","It depends on y"],answer:1,explain:"Use a priority encoder when several inputs can be active.",try:!1},{type:"number",q:"How many of the 16 possible inputs are legal (one-hot)?",answer:4,tol:0,unit:"",explain:"0001, 0010, 0100, 1000.",try:!1}],"p2-penc42":[{type:"number",q:"For d = 4'b0110, what is y?",answer:2,tol:0,unit:"",explain:"The highest 1 is at position 2.",try:!1},{type:"choice",q:"What does casez allow that case does not?",options:["Faster simulation","? and z bits as don't-care in the case items","Real numbers","Default branches"],answer:1,explain:"4'b01?? matches 0100 to 0111.",try:!1},{type:"choice",q:"What is valid for d = 0?",options:["1","0"],answer:1,explain:"No request: nothing to encode.",try:!1}],"p2-cmp4":[{type:"choice",q:"For a = 9 and b = 4, which output is 1?",options:["gt","eq","lt"],answer:0,explain:"9 > 4.",try:!1},{type:"number",q:"How many of gt, eq and lt can be 1 at the same time?",answer:1,tol:0,unit:"",explain:"Exactly one, for any pair.",try:!1},{type:"number",q:"How many (a, b) pairs does the testbench check?",answer:256,tol:0,unit:"",explain:"16 \xD7 16.",try:!1}],"p2-bshift8":[{type:"choice",q:"What is 8'b1001_0110 rotated left by 3?",options:["8'b1011_0100","8'b1011_0101","8'b0010_1100","8'b0001_0010"],answer:0,explain:"The three bits 100 that leave on the left come back on the right: 10110 + 100.",try:!1},{type:"choice",q:"What is 8'b1001_0110 shifted right by 3 (no rotate)?",options:["8'b0001_0010","8'b1111_0010","8'b0101_1000","8'b1100_1000"],answer:0,explain:"Zeros come in from the left.",try:!1},{type:"choice",q:"Why is it called a barrel shifter?",options:["It is round","It shifts by any amount in one clock, without stepping one bit at a time","It uses a barrel register","It only rotates"],answer:1,explain:"A log2(N)-stage mux network shifts by any amount at once.",try:!1}],"p2-alu":[{type:"number",q:"What is y for 200 + 100 (8 bits)?",answer:44,tol:0,unit:"",explain:"300 \u2212 256 = 44.",try:!1},{type:"choice",q:"And carry for 200 + 100?",options:["0","1"],answer:1,explain:"The result does not fit in 8 bits.",try:!1},{type:"choice",q:"When is zero = 1?",options:["When a = 0","When the result y is 0","When carry = 0","When op = 0"],answer:1,explain:"A status flag on the result.",try:!1},{type:"number",q:"How many operations does the 3-bit op select?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1}],"p3-dlatch":[{type:"choice",q:"What does a latch do while en = 0?",options:["Follows d","Holds its last value","Clears q","Toggles"],answer:1,explain:"It is transparent only while enabled.",try:!1},{type:"choice",q:"Which code creates a latch?",options:["always @(posedge clk) q <= d;","always @(*) if (en) q = d;  (no else)","assign q = en & d;","always @(*) q = en ? d : 1'b0;"],answer:1,explain:"With no else, q must remember its value: a latch.",try:!1},{type:"choice",q:"Why are latches usually avoided in synchronous design?",options:["They are larger","They are transparent for a whole phase, which makes timing harder and glitches pass through","They cannot be reset","They are not synthesizable"],answer:1,explain:"STA has to handle time borrowing; most flows prefer flip-flops.",try:!1}],"p3-dlatch-rst":[{type:"choice",q:"What does a latch do while en = 0?",options:["Follows d","Holds its last value","Clears q","Toggles"],answer:1,explain:"It is transparent only while enabled.",try:!1},{type:"choice",q:"If rst = 1 and en = 1 at the same time, what is q?",options:["d","0","1","Unknown"],answer:1,explain:"Reset has priority.",try:!1},{type:"choice",q:"Is this reset synchronous or asynchronous?",options:["Synchronous","Asynchronous: it acts immediately"],answer:1,explain:"A latch has no clock edge to wait for.",try:!1}],"p3-dff":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"When does q change?",options:["Whenever d changes","Only at the rising edge of clk","At both edges","When d is 1"],answer:1,explain:"Edge-triggered.",try:!1},{type:"choice",q:"What is q before the first clock edge?",options:["0","1","x (unknown): there is no reset","z"],answer:2,explain:"Without a reset, a flop starts unknown in simulation.",try:!1}],"p3-dff-arh":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["At the next rising clock edge","Immediately","Never","At the falling edge"],answer:1,explain:"Asynchronous.",try:!1}],"p3-dff-neg-arh":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"When does this flop sample d?",options:["Rising edge of clk","Falling edge of clk","Both edges","When rst falls"],answer:1,explain:"negedge clk.",try:!1},{type:"choice",q:"Where are falling-edge flops typically used?",options:["Everywhere","Half-cycle paths, such as DDR interfaces that use both edges","Only in FPGAs","For resets"],answer:1,explain:"They give half a clock period between rising and falling edge logic.",try:!1}],"p3-dff-arl":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"rst_n = 0 means\u2026",options:["Normal operation","Reset is active"],answer:1,explain:"_n marks an active-low signal.",try:!1},{type:"choice",q:"Why are resets often active low on chips?",options:["Tradition only","A reset that is 0 when the pin floats low or power ramps keeps the chip in reset safely","They are faster","No reason"],answer:1,explain:"A low-going reset is the safe default.",try:!1}],"p3-dff-ash":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"What is q right after set rises?",options:["0","1","d","x"],answer:1,explain:"Set forces 1.",try:!1},{type:"choice",q:"When is an asynchronous set used?",options:["Never","For registers that must start at 1, such as a one-hot state or an active-low enable","For counters only","To save area"],answer:1,explain:"",try:!1}],"p3-dff-srh":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["Immediately","At the next rising clock edge"],answer:1,explain:"Synchronous.",try:!1}],"p3-dff-srl":[{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"rst_n = 0 on a rising edge gives q =",options:["d","0","1","unchanged"],answer:1,explain:"",try:!1},{type:"choice",q:"What does synthesis build for a synchronous reset?",options:["A flop with an asynchronous clear pin","A plain flop with logic (an AND or mux) in front of D","A latch","Nothing"],answer:1,explain:"The reset becomes part of the data path.",try:!1}],"p3-dff-srs":[{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"rst = 1 and set = 1 on the same edge: q =",options:["1","0","d","x"],answer:1,explain:"Reset has priority here.",try:!1},{type:"choice",q:"How is the priority set in the code?",options:["By the order of the if / else if","By the port order","By the sensitivity list","It is random"],answer:0,explain:"The first true condition wins.",try:!1}],"p3-sync-async":[{type:"choice",q:"rst rises in the middle of a clock cycle. Which output clears first?",options:["q_sync","q_async","Both at the same time"],answer:1,explain:"q_async clears at once; q_sync waits for the next edge.",try:!1},{type:"choice",q:"What is a drawback of an asynchronous reset?",options:["None","Its release must be synchronized to the clock (recovery/removal), or flops leave reset in different cycles","It is slower","It needs a clock"],answer:1,explain:"See the reset synchronizer lab in the CDC labs.",try:!1},{type:"choice",q:"What is a drawback of a synchronous reset?",options:["It needs a running clock to take effect","It cannot be timed","It uses more flops","None"],answer:0,explain:"No clock, no reset.",try:!1}],"p3-twin":[{type:"choice",q:"load_a = 1 and load_b = 1 on the same edge: what happens?",options:["Only qa loads","Both qa and qb load d","Neither loads","qb loads qa"],answer:1,explain:"The loads are independent.",try:!1},{type:"number",q:"How many flip-flops does the design need?",answer:16,tol:0,unit:"",explain:"Two 8-bit registers.",try:!1},{type:"choice",q:"What does a register hold when its load is 0?",options:["0","Its previous value","d","x"],answer:1,explain:"Synthesis adds an enable (a mux or a clock-enable flop).",try:!1}],"p4-sr5":[{type:"number",q:"After 5 clocks with sin = 1, 0, 1, 1, 0 (in that order) starting from 00000, what is q in decimal?",answer:13,tol:0,unit:"",explain:"Bits enter at bit 4 and move right: q = 0 1 1 0 1 (bit 4 first) = 01101 = 13.",try:!1},{type:"number",q:"How many clocks does a bit need to travel from bit 4 to bit 0?",answer:4,tol:0,unit:"",explain:"One place per clock.",try:!1},{type:"choice",q:"Which expression shifts right with sin entering at the MSB?",options:["{q[3:0], sin}","{sin, q[4:1]}","q >> sin","{q[4:1], sin}"],answer:1,explain:"",try:!1}],"p4-usr5":[{type:"choice",q:"Which mode loads d in parallel?",options:["00","01","10","11"],answer:3,explain:"",try:!1},{type:"choice",q:"In mode 10 (shift left), where does sl_in enter?",options:["Bit 4","Bit 0"],answer:1,explain:"q <= {q[3:0], sl_in}.",try:!1},{type:"choice",q:"Where is a universal shift register used?",options:["Only in counters","Serial/parallel conversion in both directions, for example in a UART or SPI","In adders","In memories"],answer:1,explain:"",try:!1}],"p4-cnt":[{type:"number",q:"How many states does a 4-bit counter go through before repeating?",answer:16,tol:0,unit:"",explain:"0 to 15.",try:!1},{type:"number",q:"At 100 MHz, how many ns does one full cycle of the 4-bit counter take?",answer:160,tol:0,unit:"",explain:"16 states \xD7 10 ns.",try:!1},{type:"choice",q:"What happens to q after 15?",options:["It stays at 15","It wraps to 0","It goes to x"],answer:1,explain:"",try:!1}],"p4-cnt-tb":[{type:"choice",q:"Why does the testbench change en on the falling edge?",options:["It is required","So the inputs are stable around the rising edge and there is no race with the design","To save time","To test the reset"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = 1, after which value does the broken counter jump to 0?",options:["9","15","7","0"],answer:0,explain:"The bug wraps at 9; a good testbench sees 10 missing.",try:!1},{type:"choice",q:"What makes a testbench self-checking?",options:["Printing values","An expected-value model compared with the design every cycle, and a PASS/FAIL summary","A waveform","Random inputs"],answer:1,explain:"",try:!1}],"p4-cnt-load":[{type:"choice",q:"load = 1 and the counter is at 7, d = 3: next q =",options:["8","3","4","7"],answer:1,explain:"Load has priority.",try:!1},{type:"number",q:"After loading 14, what is q two clocks later (no load)?",answer:0,tol:0,unit:"",explain:"14 \u2192 15 \u2192 0.",try:!1},{type:"choice",q:"Where is a loadable counter used?",options:["Program counters (jumps load a new address), timers with a start value","Only in tests","Adders","Never"],answer:0,explain:"",try:!1}],"p4-updown":[{type:"number",q:"From 0, counting down one step gives?",answer:15,tol:0,unit:"",explain:"4-bit wrap: 0 \u2212 1 = 15.",try:!1},{type:"number",q:"From 13, three steps up give?",answer:0,tol:0,unit:"",explain:"13 \u2192 14 \u2192 15 \u2192 0.",try:!1},{type:"choice",q:"What decides the direction?",options:["The clock edge","The up input","The reset"],answer:1,explain:"",try:!1}],"p4-mod":[{type:"number",q:"What is the largest value of the mod-10 counter?",answer:9,tol:0,unit:"",explain:"0 to N\u22121.",try:!1},{type:"number",q:"How many flip-flops does a mod-10 counter need at least?",answer:4,tol:0,unit:"",explain:"2^3 = 8 < 10 \u2264 16 = 2^4.",try:!1},{type:"choice",q:"Try it: set N = 12. What is the largest value?",options:["11","12","9","15"],answer:0,explain:"",try:!0}],"p4-range":[{type:"number",q:"What is q right after reset?",answer:3,tol:0,unit:"",explain:"LOW = 3.",try:!1},{type:"number",q:"How many different values does the counter take?",answer:10,tol:0,unit:"",explain:"3 to 12 inclusive.",try:!1},{type:"number",q:"What comes after 12?",answer:3,tol:0,unit:"",explain:"Back to LOW.",try:!1}],"p4-range-udl":[{type:"number",q:"Counting down from LOW = 3 gives?",answer:12,tol:0,unit:"",explain:"Wraps to HIGH.",try:!1},{type:"choice",q:"load = 1 and up = 0 on the same edge: what happens?",options:["It counts down","It loads d","Nothing"],answer:1,explain:"Load has priority.",try:!1},{type:"number",q:"Counting up from 12 gives?",answer:3,tol:0,unit:"",explain:"",try:!1}],"p4-div2":[{type:"number",q:"With a 10 ns clk, what is the period of clk_out?",answer:20,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"What is its duty cycle in %?",answer:50,tol:0,unit:"%",explain:"It toggles on every rising edge.",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-div4":[{type:"number",q:"With a 10 ns clk, what is the period of clk_out?",answer:40,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"Which counter bit gives clk / 4 (0 = LSB)?",answer:1,tol:0,unit:"",explain:"cnt[0] is clk / 2, cnt[1] is clk / 4.",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-div3":[{type:"number",q:"With a 10 ns clk, how long must clk_out stay high for a 50% duty cycle?",answer:15,tol:0,unit:"ns",explain:"Half of 30 ns: 1.5 clock periods.",try:!1},{type:"choice",q:"Why are both clock edges needed?",options:["They are not","A half-period step is only possible with the falling edge","To save power","For reset"],answer:1,explain:"",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-fifo":[{type:"number",q:"How many words can the FIFO hold?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What happens to a write when the FIFO is full?",options:["It overwrites the oldest word","It is ignored","It stalls the clock"],answer:1,explain:"",try:!1},{type:"choice",q:"dout shows a word\u2026",options:["at once when rd_en rises","on the clock edge after rd_en","two clocks later"],answer:1,explain:"The read is registered.",try:!1}],"p4-afifo":[{type:"choice",q:"Why are the pointers Gray coded before crossing?",options:["To save flops","Only one bit changes per step, so the other clock sees the old or the new value, never a mix","For speed","To reset them"],answer:1,explain:"See the Gray code lab in the CDC labs.",try:!1},{type:"number",q:"How many flops are in each pointer synchronizer chain (per bit)?",answer:2,tol:0,unit:"",explain:"wq1/wq2 and rq1/rq2.",try:!1},{type:"choice",q:"Can the empty flag be late?",options:["No","Yes: it is computed with a synchronized (older) write pointer, so it may stay set a few cycles longer. That is safe.","Only at reset"],answer:1,explain:"",try:!1}],"p4-mealy-nov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:0,explain:"After a detection the search starts again.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:0,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:3,tol:0,unit:"",explain:"Mealy: S0, S1, S10. Moore needs an extra S101 state to hold the output.",try:!1}],"p4-mealy-ov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:1,explain:"Overlapping reuses the last 1.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:0,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:3,tol:0,unit:"",explain:"Mealy: S0, S1, S10. Moore needs an extra S101 state to hold the output.",try:!1}],"p4-moore-nov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:0,explain:"After a detection the search starts again.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:1,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:4,tol:0,unit:"",explain:"S0, S1, S10 and S101 (the output state).",try:!1}],"p4-moore-ov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:1,explain:"Overlapping reuses the last 1.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:1,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:4,tol:0,unit:"",explain:"S0, S1, S10 and S101 (the output state).",try:!1}],"s01-reg":[{type:"choice",q:"What does the logic type replace?",options:["Only wire","Both reg and wire in most code: it can be driven by assign or by a procedural block (one driver)","integer","Nothing"],answer:1,explain:"",try:!1},{type:"choice",q:"What extra check does always_ff give over always @(posedge clk)?",options:["None","Tools warn if the block does not describe flip-flops, for example a missing edge","It is faster","It adds a reset"],answer:1,explain:"",try:!1},{type:"number",q:"How many bits does '0 set for an 8-bit out?",answer:8,tol:0,unit:"",explain:"'0 fills every bit of the target with 0.",try:!1}],"s02-mux":[{type:"choice",q:"What does unique case promise?",options:["Nothing","Exactly one case item matches; tools may warn if none or several match","The case is fast","A default is not needed"],answer:1,explain:"Icarus prints a note that it ignores the check.",try:!1},{type:"number",q:"What is the width of scale_mux with no parameter override?",answer:1,tol:0,unit:"",explain:"WIDTH defaults to 1.",try:!1},{type:"choice",q:"Why drive 'x in the default branch?",options:["To save area","So an unknown select shows up as unknown in simulation instead of hiding as a valid value","It is required","To reset"],answer:1,explain:"",try:!1}],"s03-cnt":[{type:"number",q:"What value comes after 31?",answer:0,tol:0,unit:"",explain:"5 bits wrap.",try:!1},{type:"choice",q:"load = 1 and enable = 1: what happens?",options:["count increments","count loads data","Nothing"],answer:1,explain:"load is checked first.",try:!1},{type:"choice",q:"In the CPU, what does this counter become?",options:["The accumulator","The program counter","The ALU","The memory"],answer:1,explain:"",try:!1}],"s04-ctrl":[{type:"number",q:"How many clock cycles does one instruction take?",answer:8,tol:0,unit:"",explain:"8 states, one per clock.",try:!1},{type:"choice",q:"What does state.next() return after STORE?",options:["STORE","INST_ADDR: next() wraps to the first value","x","IDLE"],answer:1,explain:"",try:!1},{type:"choice",q:"In which state is halt raised for an HLT instruction?",options:["INST_ADDR","OP_ADDR","STORE","ALU_OP"],answer:1,explain:"",try:!1},{type:"choice",q:"Why is this a Mealy machine?",options:["It has 8 states","Its outputs depend on opcode and zero as well as the state","It uses enums","It has a reset"],answer:1,explain:"",try:!1}],"s05-alu":[{type:"choice",q:"For LDA, what is out?",options:["accum","data","data + accum","0"],answer:1,explain:"Load the accumulator from memory.",try:!1},{type:"number",q:"For ADD with accum = 200 and data = 100, what is out (8 bits)?",answer:44,tol:0,unit:"",explain:"300 \u2212 256.",try:!1},{type:"choice",q:"Why is out registered on the falling edge?",options:["To save power","So it is ready half a cycle later, for the accumulator to load on the next rising edge","It is a bug","For reset"],answer:1,explain:"",try:!1}],"s06-memtb":[{type:"choice",q:"Why drive the memory inputs on the falling edge?",options:["It is required","So they are stable when the memory samples them on the rising edge: no race","To test hold"],answer:1,explain:"",try:!1},{type:"choice",q:"What does 'input bit debug = 0' in a task do?",options:["Nothing","Makes debug optional: callers can leave it out","Forces debug to 0"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = 1, which addresses are written wrongly?",options:["0 to 15","16 to 31: address bit 4 is lost, so they land on 0 to 15","All","None"],answer:1,explain:"",try:!1}],"s07-struct":[{type:"number",q:"How many bits wide is mem_req_t?",answer:15,tol:0,unit:"",explain:"1 + 1 + 5 + 8.",try:!1},{type:"choice",q:"Why does the field order matter here?",options:["It does not","A packed struct is also a plain vector, and the testbench builds it as {read, write, addr, data}","For speed"],answer:1,explain:"",try:!1},{type:"choice",q:"What can an interface do that a struct cannot?",options:["Nothing","Carry signals in both directions with modports, and hold tasks and functions for the bus protocol","Be smaller","Be synthesized"],answer:1,explain:"",try:!1}],"s08-cpu":[{type:"number",q:"How many bits is the address field of an instruction?",answer:5,tol:0,unit:"",explain:"{opcode[7:5], address[4:0]}: 32 memory words.",try:!1},{type:"number",q:"At what address (hex 12 = decimal 18) does Program 1 halt? Answer in decimal.",answer:18,tol:0,unit:"",explain:"The success HLT is at 12 hex.",try:!1},{type:"number",q:"What does Program 2 leave in memory[1D]?",answer:55,tol:0,unit:"",explain:"1 + 2 + \u2026 + 10.",try:!1},{type:"number",q:"What does Program 3 leave in memory[1D]?",answer:144,tol:0,unit:"",explain:"The Fibonacci number it stops at.",try:!1},{type:"choice",q:"What does the mux select while fetch = 1?",options:["The instruction's address field","The program counter"],answer:1,explain:"",try:!1}],"s09-johnson":[{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What comes after 0111?",options:["1111","1110","0000","1000"],answer:0,explain:"Shift left and bring in ~q[3] = 1.",try:!1},{type:"number",q:"How many bits change between two neighbouring states?",answer:1,tol:0,unit:"",explain:"That is why Johnson counters decode without glitches.",try:!1}],"s10-gen":[{type:"number",q:"How many full_adder instances does rca #(N=12) contain?",answer:12,tol:0,unit:"",explain:"One per bit.",try:!1},{type:"choice",q:"What is genvar?",options:["A run-time variable","An elaboration-time loop index used by generate loops","A wire","A parameter"],answer:1,explain:"",try:!1},{type:"choice",q:"Why name the generate block (begin : stage)?",options:["It is optional decoration","It gives each instance a hierarchical name, such as stage[3].fa, for debug and constraints"],answer:1,explain:"",try:!1}],"s11-dpram":[{type:"number",q:"How many words does dpram hold with AW = 4?",answer:16,tol:0,unit:"",explain:"2^4.",try:!1},{type:"choice",q:"Port A writes address 5 with new data. What does dout_a show on that edge?",options:["The new data","The old data (read-before-write)","x"],answer:1,explain:"",try:!1},{type:"choice",q:"Can port B read while port A writes?",options:["No","Yes: that is the point of a dual-port RAM"],answer:1,explain:"",try:!1}],"s12-uart":[{type:"number",q:"How many bits does one byte take on the line (start + data + stop)?",answer:10,tol:0,unit:"",explain:"1 + 8 + 1.",try:!1},{type:"number",q:"With CLKS_PER_BIT = 4 and a 10 ns clock, how long does one byte take?",answer:400,tol:0,unit:"ns",explain:"10 bits \xD7 4 clocks \xD7 10 ns.",try:!1},{type:"choice",q:"Which data bit is sent first?",options:["data[7]","data[0]"],answer:1,explain:"UARTs send LSB first.",try:!1},{type:"choice",q:"What level does tx have when idle?",options:["0","1"],answer:1,explain:"The start bit is the 1 \u2192 0 edge.",try:!1}],"l01-gates":[{type:"choice",q:"Which gate gives 1 only when its inputs are different?",options:["AND","XOR","XNOR","NOR"],answer:1,explain:"XOR is the 'odd number of 1s' gate.",try:!1},{type:"choice",q:"Which gate gives 1 only when both inputs are 0?",options:["NAND","NOR","XOR","OR"],answer:1,explain:"NOR = NOT of OR.",try:!1},{type:"number",q:"How many rows does the truth table of a 3-input gate have?",answer:8,tol:0,unit:"",explain:"2^3 = 8.",try:!1}],"l02-nand":[{type:"number",q:"How many NAND gates make a NOT gate?",answer:1,tol:0,unit:"",explain:"Tie both inputs together: (a\xB7a)' = a'.",try:!1},{type:"number",q:"How many 2-input NAND gates does the XOR circuit in this lab use?",answer:4,tol:0,unit:"",explain:"n1 plus x1, x2 and the output gate.",try:!1},{type:"choice",q:"Why is OR built as NAND(a', b')?",options:["By De Morgan: (a'\xB7b')' = a + b","It is faster","NAND cannot invert","It uses fewer gates than AND"],answer:0,explain:"",try:!1}],"l03-nor":[{type:"number",q:"How many 2-input NOR gates make an AND gate?",answer:3,tol:0,unit:"",explain:"Two to invert a and b, one NOR of the inverted inputs.",try:!1},{type:"choice",q:"NOR(a, a) equals",options:["a","a'","0","1"],answer:1,explain:"",try:!1},{type:"choice",q:"Which pair are both universal gates?",options:["AND and OR","NAND and NOR","XOR and XNOR","NOT and AND"],answer:1,explain:"",try:!1}],"l04-sop-pos":[{type:"choice",q:"y1 = A\xB7B + A'\xB7B' is the same as which single gate of A and B?",options:["XOR","XNOR","NAND","OR"],answer:1,explain:"It is 1 when A and B are equal.",try:!1},{type:"number",q:"For how many of the 8 input combinations is y3 = A + B\xB7C' equal to 1?",answer:5,tol:0,unit:"",explain:"All four with A = 1, plus A = 0, B = 1, C = 0.",try:!1},{type:"choice",q:"In a POS expression, each sum term corresponds to",options:["A row where F = 1","A row where F = 0 (a maxterm)","A don't-care","A clock edge"],answer:1,explain:"",try:!1}],"l05-demorgan":[{type:"choice",q:"(A + B)' equals",options:["A' + B'","A'\xB7B'","A\xB7B","(A\xB7B)'"],answer:1,explain:"",try:!1},{type:"choice",q:"A NAND gate is the same as",options:["An OR gate with inverted inputs","An AND gate with inverted inputs","A NOR gate","An XOR gate"],answer:0,explain:"(A\xB7B)' = A' + B'.",try:!1},{type:"number",q:"How many input combinations make l1_left = 0?",answer:1,tol:0,unit:"",explain:"Only A = B = 1.",try:!1}],"l06-kmap":[{type:"number",q:"How many product terms does the simplified F2 have?",answer:2,tol:0,unit:"",explain:"A\xB7B' and C\xB7D'.",try:!1},{type:"number",q:"How many minterms does one group of 4 cells cover?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why do K-maps order columns 00, 01, 11, 10?",options:["Alphabetical order","Gray code: neighbouring cells differ in one variable, so they can be grouped","It saves space","It is binary order"],answer:1,explain:"",try:!1}],"l07-dontcare":[{type:"choice",q:"Which don't-cares does the answer F = C\xB7D + A'\xB7B' use as 1?",options:["0 and 2","5 only","0, 2 and 5","None"],answer:0,explain:"m0 and m2 complete the A'\xB7B' group; m5 is left as 0.",try:!1},{type:"number",q:"How many literals does F = C\xB7D + A'\xB7B' have?",answer:4,tol:0,unit:"",explain:"C, D, A', B'.",try:!1},{type:"choice",q:"May a don't-care be 1 in one group and 0 elsewhere?",options:["No","Yes: it is only covered if that helps","Only in POS","Only if it is minterm 0"],answer:1,explain:"",try:!1}],"l08-parity":[{type:"number",q:"For d = 1011, what is the even parity bit p?",answer:1,tol:0,unit:"",explain:"Three 1s, so p = 1 makes four.",try:!1},{type:"choice",q:"Can parity detect two flipped bits?",options:["Yes","No: two flips keep the parity the same"],answer:1,explain:"",try:!1},{type:"choice",q:"What does ^d mean in Verilog?",options:["Bitwise NOT","Reduction XOR of all bits of d","Power","Exclusive OR with 1"],answer:1,explain:"",try:!1}],"l09-majority":[{type:"number",q:"How many of the 8 input combinations give y = 1?",answer:4,tol:0,unit:"",explain:"m3, m5, m6, m7.",try:!1},{type:"number",q:"How many 2-input AND gates does the minimal SOP need?",answer:3,tol:0,unit:"",explain:"A\xB7B, B\xB7C, A\xB7C.",try:!1},{type:"choice",q:"Majority of three is also the carry out of",options:["A half adder","A full adder","A comparator","A decoder"],answer:1,explain:"cout = 1 when at least two of a, b, cin are 1.",try:!1}],"l10-sub":[{type:"choice",q:"Which output of the full subtractor equals the full adder's sum?",options:["Bout","D","Neither","Both"],answer:1,explain:"D = A ^ B ^ Bin, the same as the sum.",try:!1},{type:"choice",q:"For A = 0, B = 1, Bin = 1, what are D and Bout?",options:["D = 0, Bout = 1","D = 1, Bout = 0","D = 0, Bout = 0","D = 1, Bout = 1"],answer:0,explain:"0 \u2212 1 \u2212 1 = \u22122: difference 0, borrow 1.",try:!1},{type:"choice",q:"The half subtractor borrow is",options:["A\xB7B'","A'\xB7B","A\xB7B","A ^ B"],answer:1,explain:"",try:!1}],"l29-rca":[{type:"number",q:"How many full adders does a 16-bit ripple-carry adder need?",answer:16,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"If each full adder carry takes 2 ns, what is the worst carry delay through 4 bits?",answer:8,tol:0,unit:"ns",explain:"The carry ripples through all four stages.",try:!1},{type:"number",q:"A = 1111, B = 0001, cin = 0: what is cout?",answer:1,tol:0,unit:"",explain:"15 + 1 = 16 overflows 4 bits.",try:!1}],"l18-addsub":[{type:"choice",q:"Why is M also the carry in?",options:["To add 1 for two's complement: A \u2212 B = A + B' + 1","To reset the adder","For overflow","To invert A"],answer:0,explain:"",try:!1},{type:"choice",q:"5 \u2212 7 with M = 1: what is S?",options:["1110 (\u22122)","0010","1100","1111"],answer:0,explain:"\u22122 in 4-bit two's complement is 1110.",try:!1},{type:"choice",q:"Signed overflow happens when",options:["cout = 1","Two operands of the same sign give a result of the other sign","The result is 0","B is negative"],answer:1,explain:"",try:!1}],"l19-bcdadd":[{type:"number",q:"In BCD, 7 + 5 gives digit s = ?",answer:2,tol:0,unit:"",explain:"12 \u2192 digit 2, carry 1.",try:!1},{type:"number",q:"What value is added to correct a sum above 9?",answer:6,tol:0,unit:"",explain:"It skips the six unused codes 1010 to 1111.",try:!1},{type:"choice",q:"Which sums need correction?",options:["Sums above 9","Only sums above 15","Odd sums","All sums"],answer:0,explain:"Including sums 16 to 19, where the binary adder already has a carry.",try:!1}],"l17-cmp2":[{type:"choice",q:"Which gate tests whether two bits are equal?",options:["XOR","XNOR","NAND","OR"],answer:1,explain:"",try:!1},{type:"number",q:"For how many of the 16 input combinations is gt = 1?",answer:6,tol:0,unit:"",explain:"Pairs with a > b: 16 \u2212 4 equal = 12, half of them.",try:!1},{type:"choice",q:"Why does the gt equation look at bit 1 first?",options:["The most significant bit decides unless it is equal","Bit 0 is slower","It is alphabetical","No reason"],answer:0,explain:"",try:!1}],"l30-cmp4":[{type:"choice",q:"For a single 7485, how are the cascade inputs tied?",options:["i_eq = 1, i_gt = i_lt = 0","All 0","All 1","i_gt = 1"],answer:0,explain:"Equal numbers must then give eq = 1.",try:!1},{type:"number",q:"How many 4-bit comparators compare two 12-bit numbers in a cascade?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"A = B and i_gt = 1: which output is 1?",options:["eq","gt","lt","None"],answer:1,explain:"The lower bits decide.",try:!1}],"l14-dec38":[{type:"choice",q:"a = 101 and the chip is enabled: which output is 0?",options:["y_n[2]","y_n[5]","y_n[3]","All"],answer:1,explain:"",try:!1},{type:"choice",q:"g1 = 0: what are the outputs?",options:["All 0","All 1","y_n[a] = 0","High impedance"],answer:1,explain:"Disabled: every active-low output is inactive.",try:!1},{type:"number",q:"How many 74138s plus enable wiring make a 4-to-16 decoder?",answer:2,tol:0,unit:"",explain:"The fourth address bit enables one chip or the other.",try:!1}],"l11-dec-fa":[{type:"number",q:"How many decoder outputs feed the OR gate for S?",answer:4,tol:0,unit:"",explain:"Minterms 1, 2, 4 and 7.",try:!1},{type:"choice",q:"Which minterm is shared by S and C?",options:["m3","m7","m1","m0"],answer:1,explain:"1 + 1 + 1 = 3: sum 1, carry 1.",try:!1},{type:"choice",q:"Can one 3-to-8 decoder implement any number of 3-input functions?",options:["Yes: one OR gate per function","No, only one","Only two","Only with a mux"],answer:0,explain:"",try:!1}],"l15-enc83":[{type:"number",q:"d = 0010_1000: what is y_p?",answer:5,tol:0,unit:"",explain:"The highest 1 is bit 5.",try:!1},{type:"choice",q:"d = 0010_1000: what is valid from the plain encoder?",options:["0: two bits are set","1"],answer:0,explain:"",try:!1},{type:"choice",q:"What does the any flag solve?",options:["d = 0 and d = 1 both give y_p = 0","Speed","Glitches","Nothing"],answer:0,explain:"",try:!1}],"l13-mux-demux":[{type:"number",q:"How many select bits does a 16-to-1 mux need?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:4096,tol:0,unit:"",explain:"8 + 3 + 1 = 12 input bits.",try:!1},{type:"choice",q:"Demux with sel = 3 and x = 1: what is o?",options:["0000_1000","0000_0011","1000_0000","0000_0001"],answer:0,explain:"",try:!1}],"l12-mux-fn":[{type:"choice",q:"For ABC = 110, what is the data input?",options:["0","1","D","D'"],answer:1,explain:"m12 and m13 are both in F.",try:!1},{type:"choice",q:"For ABC = 010, what is the data input?",options:["0","1","D","D'"],answer:3,explain:"m4 is in F (D = 0) but m5 is not.",try:!1},{type:"number",q:"How many variables can one 8-to-1 mux implement any function of?",answer:4,tol:0,unit:"",explain:"3 select lines plus the fourth variable on the data inputs.",try:!1}],"l16-gray":[{type:"choice",q:"Binary 0110: what is the Gray code?",options:["0101","0110","0111","0100"],answer:0,explain:"g = b ^ (b >> 1) = 0110 ^ 0011.",try:!1},{type:"number",q:"How many bits change when the Gray code counts from 7 to 8?",answer:1,tol:0,unit:"",explain:"In binary all 4 bits change.",try:!1},{type:"choice",q:"Why does Gray-to-binary need a chain of XORs?",options:["Each binary bit is the XOR of all Gray bits above and including it","To save gates","It does not"],answer:0,explain:"",try:!1}],"l20-7seg":[{type:"number",q:"How many segments are lit for the digit 8?",answer:7,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which segment is off for 0?",options:["a","d","g (the middle bar)","f"],answer:2,explain:"",try:!1},{type:"choice",q:"In a common-anode display the segments are",options:["Active high","Active low (like the 7447)"],answer:1,explain:"",try:!1}],"l21-srlatch":[{type:"choice",q:"For a NAND latch, which input values hold the stored bit?",options:["s_n = r_n = 0","s_n = r_n = 1","s_n = 1, r_n = 0","s_n = 0, r_n = 1"],answer:1,explain:"",try:!1},{type:"choice",q:"Why is s_n = r_n = 0 not allowed?",options:["Both q and q_n go to 1, and the latch state is unpredictable when both are released","It burns the chip","It is a syntax error"],answer:0,explain:"",try:!1},{type:"number",q:"After s_n goes low, how many gate delays until q_n changes?",answer:2,tol:0,unit:"",explain:"q changes after one delay, then q_n one delay later.",try:!1}],"l22-ffs":[{type:"choice",q:"JK flip-flop with j = k = 1:",options:["Hold","Set","Reset","Toggle"],answer:3,explain:"",try:!1},{type:"choice",q:"Which flip-flop is a JK with J and K tied together?",options:["D","T","SR","None"],answer:1,explain:"",try:!1},{type:"choice",q:"Which flip-flop is a JK with K = J'?",options:["D","T","SR","None"],answer:0,explain:"",try:!1}],"l23-ripple":[{type:"number",q:"How many flip-flops does a ripple counter up to 255 need?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why is a ripple counter not used to drive synchronous logic?",options:["Its bits change one after another, so the outputs glitch through wrong values","It is too big","It counts down"],answer:0,explain:"",try:!1},{type:"choice",q:"In this lab, on which clk edge does the count change?",options:["Rising","Falling"],answer:1,explain:"t0 toggles on the falling edge of clk.",try:!1}],"l24-sync":[{type:"choice",q:"When does q[2] toggle?",options:["Every clock","When q[1] = q[0] = 1","When q[0] = 1","Never"],answer:1,explain:"",try:!1},{type:"number",q:"How many clocks until a 3-bit counter wraps to 0?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Main advantage over a ripple counter:",options:["All bits change on the same clock edge","Fewer gates","No clock needed"],answer:0,explain:"",try:!1}],"l32-updown":[{type:"choice",q:"Counting down, when does q[1] toggle?",options:["When q[0] = 0","When q[0] = 1","Every clock","Never"],answer:0,explain:"",try:!1},{type:"number",q:"Counting down from 0, what is the next value?",answer:7,tol:0,unit:"",explain:"It wraps around.",try:!1},{type:"number",q:"How many states does a MOD-8 counter have?",answer:8,tol:0,unit:"",explain:"",try:!1}],"l27-mod6":[{type:"number",q:"How many distinct values does the counter output show?",answer:6,tol:0,unit:"",explain:"0 to 5.",try:!1},{type:"number",q:"With a 60 MHz clock, what is the frequency of tc pulses?",answer:10,tol:0,unit:"MHz",explain:"60 / 6.",try:!1},{type:"number",q:"How many flip-flops are needed for MOD-6?",answer:3,tol:0,unit:"",explain:"2^3 = 8 \u2265 6.",try:!1}],"l25-ring":[{type:"number",q:"How many states does a 4-bit ring counter have?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What value follows 1110 in the Johnson counter?",options:["1111","0111","1100","0000"],answer:0,explain:"",try:!1}],"l26-siso":[{type:"number",q:"How many clocks does a bit take to go from sin to sout?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What is q after 1, 0, 0, 1 are shifted in (first bit first)?",options:["1001","0110","1111","0000"],answer:0,explain:"The first bit is now in q[0] and the last in q[3].",try:!1},{type:"choice",q:"Which register type converts serial data to parallel?",options:["SISO","SIPO","PISO","PIPO"],answer:1,explain:"",try:!1}],"l31-usr":[{type:"choice",q:"q = 0110, mode = 10, sl_in = 1: next q?",options:["1101","1011","0011","0110"],answer:0,explain:"Shift left: {q[2:0], sl_in}.",try:!1},{type:"choice",q:"Which mode loads d?",options:["00","01","10","11"],answer:3,explain:"",try:!1},{type:"choice",q:"Which 7400-series part is a 4-bit universal shift register?",options:["74194","7483","74138","7447"],answer:0,explain:"",try:!1}],"l28-fsm":[{type:"choice",q:"From state 01 with dir = 1, the next state is",options:["00","11","10","01"],answer:1,explain:"",try:!1},{type:"choice",q:"Is z a Moore or a Mealy output?",options:["Moore: it depends only on the state","Mealy"],answer:0,explain:"",try:!1},{type:"number",q:"How many flip-flops does a 4-state machine need with binary encoding?",answer:2,tol:0,unit:"",explain:"",try:!1}],"l33-traffic":[{type:"number",q:"How many clocks does the side road stay green?",answer:3,tol:0,unit:"",explain:"S2 lasts while timer counts 0, 1, 2.",try:!1},{type:"choice",q:"If car stays 0, what does the main road show?",options:["Green forever","It cycles anyway","Yellow"],answer:0,explain:"",try:!1},{type:"choice",q:"Can both roads be green at once?",options:["No: every state has at least one red","Yes, in S1"],answer:0,explain:"",try:!1}]};var Ce=[{id:"counter",title:"4-bit up counter",tag:"Sequential",std:"2005",design:`\`timescale 1ns/1ps

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
`}];var Pe=[{id:"part1",title:"Part 1: adders"},{id:"part2",title:"Part 2: combinational"},{id:"part3",title:"Part 3: latches and flip-flops"},{id:"part4",title:"Part 4: sequential"},{id:"sv",title:"SystemVerilog design labs"},{id:"ld-gates",title:"Gates and Boolean algebra"},{id:"ld-comb",title:"Combinational circuits"},{id:"ld-seq",title:"Flip-flops, counters and FSMs"}],Ne=[{id:"p1-ha-df",group:"part1",tag:"Part 1 \xB7 Lab 1",title:"Half adder: dataflow",std:"2005",design:`// One-bit half adder, dataflow style: continuous assignments only.
module half_adder (
  input  wire a, b,
  output wire sum, carry
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a, b;
  wire sum, carry;
  integer i, errors = 0;
  half_adder dut (.a(a), .b(b), .sum(sum), .carry(carry));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display(" a b | sum carry");
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i; #10;
      $display(" %b %b |  %b    %b", a, b, sum, carry);
      if ({carry, sum} !== a + b) begin errors = errors + 1; $display("   expected sum=%b carry=%b", (a + b) & 1, (a + b) >> 1); end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// One-bit half adder, dataflow style: continuous assignments only.
module half_adder (
  input  wire a, b,
  output wire sum, carry
);
  assign sum   = a ^ b;
  assign carry = a & b;
endmodule
`}},{id:"p1-ha-bh",group:"part1",tag:"Part 1 \xB7 Lab 2",title:"Half adder: behavioral",std:"2005",design:`// One-bit half adder, behavioral style: an always block with a case statement.
module half_adder (
  input  wire a, b,
  output reg  sum, carry
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a, b;
  wire sum, carry;
  integer i, errors = 0;
  half_adder dut (.a(a), .b(b), .sum(sum), .carry(carry));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display(" a b | sum carry");
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i; #10;
      $display(" %b %b |  %b    %b", a, b, sum, carry);
      if ({carry, sum} !== a + b) begin errors = errors + 1; $display("   expected sum=%b carry=%b", (a + b) & 1, (a + b) >> 1); end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// One-bit half adder, behavioral style: an always block with a case statement.
module half_adder (
  input  wire a, b,
  output reg  sum, carry
);
  always @(*) begin
    case ({a, b})
      2'b00: begin sum = 1'b0; carry = 1'b0; end
      2'b01: begin sum = 1'b1; carry = 1'b0; end
      2'b10: begin sum = 1'b1; carry = 1'b0; end
      default: begin sum = 1'b0; carry = 1'b1; end
    endcase
  end
endmodule
`}},{id:"p1-ha-st",group:"part1",tag:"Part 1 \xB7 Lab 3",title:"Half adder: structural",std:"2005",design:`// One-bit half adder, structural style: Verilog gate primitives.
module half_adder (
  input  wire a, b,
  output wire sum, carry
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a, b;
  wire sum, carry;
  integer i, errors = 0;
  half_adder dut (.a(a), .b(b), .sum(sum), .carry(carry));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display(" a b | sum carry");
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i; #10;
      $display(" %b %b |  %b    %b", a, b, sum, carry);
      if ({carry, sum} !== a + b) begin errors = errors + 1; $display("   expected sum=%b carry=%b", (a + b) & 1, (a + b) >> 1); end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// One-bit half adder, structural style: Verilog gate primitives.
module half_adder (
  input  wire a, b,
  output wire sum, carry
);
  xor g1 (sum, a, b);
  and g2 (carry, a, b);
endmodule
`}},{id:"p1-fa-df",group:"part1",tag:"Part 1 \xB7 Lab 4",title:"Full adder: dataflow",std:"2005",design:`// One-bit full adder, dataflow style.
module full_adder (
  input  wire a, b, cin,
  output wire sum, cout
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a, b, cin;
  wire sum, cout;
  integer i, errors = 0;
  full_adder dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display(" a b cin | sum cout");
    for (i = 0; i < 8; i = i + 1) begin
      {a, b, cin} = i; #10;
      $display(" %b %b  %b  |  %b   %b", a, b, cin, sum, cout);
      if ({cout, sum} !== a + b + cin) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// One-bit full adder, dataflow style.
module full_adder (
  input  wire a, b, cin,
  output wire sum, cout
);
  assign sum  = a ^ b ^ cin;
  assign cout = (a & b) | (cin & (a ^ b));
endmodule
`}},{id:"p1-fa-bh",group:"part1",tag:"Part 1 \xB7 Lab 5",title:"Full adder: behavioral",std:"2005",design:`// One-bit full adder, behavioral style.
module full_adder (
  input  wire a, b, cin,
  output reg  sum, cout
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a, b, cin;
  wire sum, cout;
  integer i, errors = 0;
  full_adder dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display(" a b cin | sum cout");
    for (i = 0; i < 8; i = i + 1) begin
      {a, b, cin} = i; #10;
      $display(" %b %b  %b  |  %b   %b", a, b, cin, sum, cout);
      if ({cout, sum} !== a + b + cin) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// One-bit full adder, behavioral style.
module full_adder (
  input  wire a, b, cin,
  output reg  sum, cout
);
  always @(*) begin
    {cout, sum} = a + b + cin;
  end
endmodule
`}},{id:"p1-fa-st",group:"part1",tag:"Part 1 \xB7 Lab 6",title:"Full adder: structural",std:"2005",design:`// One-bit full adder, structural style: build it from two half adders and an OR gate.
// The half adder is given. Do not use assign or always in full_adder: only instances.
module half_adder (
  input  wire a, b,
  output wire sum, carry
);
  xor g1 (sum, a, b);
  and g2 (carry, a, b);
endmodule

module full_adder (
  input  wire a, b, cin,
  output wire sum, cout
);
  // TODO: declare the internal wires, instantiate two half_adder modules and an or gate

endmodule
`,tb:`module tb;
  reg  a, b, cin;
  wire sum, cout;
  integer i, errors = 0;
  full_adder dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display(" a b cin | sum cout");
    for (i = 0; i < 8; i = i + 1) begin
      {a, b, cin} = i; #10;
      $display(" %b %b  %b  |  %b   %b", a, b, cin, sum, cout);
      if ({cout, sum} !== a + b + cin) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// One-bit full adder, structural style: two half adders and an OR gate.
module half_adder (
  input  wire a, b,
  output wire sum, carry
);
  xor g1 (sum, a, b);
  and g2 (carry, a, b);
endmodule

module full_adder (
  input  wire a, b, cin,
  output wire sum, cout
);
  wire s1, c1, c2;
  half_adder ha1 (.a(a),  .b(b),   .sum(s1),  .carry(c1));
  half_adder ha2 (.a(s1), .b(cin), .sum(sum), .carry(c2));
  or g3 (cout, c1, c2);
endmodule
`}},{id:"p1-ops",group:"part1",tag:"Part 1 \xB7 Lab 7",title:"All Verilog operators",std:"2005",design:`// Every Verilog operator group, on two 4-bit inputs.
module operators (
  input  wire [3:0] a, b,
  output wire [4:0] add,          // arithmetic
  output wire [3:0] sub, mul_lo, div, mod,
  output wire [3:0] band, bor, bxor, bxnor, bnot,   // bitwise
  output wire       land, lor, lnot,                // logical
  output wire       red_and, red_or, red_xor,       // reduction (on a)
  output wire       eq, neq, lt, gt, le, ge,        // relational and equality
  output wire       ceq,                            // case equality (===)
  output wire [3:0] shl, shr, ashr,                 // shifts by 1
  output wire [7:0] cat,                            // concatenation {a, b}
  output wire [7:0] rep,                            // replication {2{a}}
  output wire [3:0] cond                            // conditional: the larger of a and b
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] a, b;
  wire [4:0] add;
  wire [3:0] sub, mul_lo, div, mod, band, bor, bxor, bxnor, bnot, shl, shr, ashr, cond;
  wire land, lor, lnot, red_and, red_or, red_xor, eq, neq, lt, gt, le, ge, ceq;
  wire [7:0] cat, rep;
  integer i, j, errors = 0;
  operators dut (.a(a), .b(b), .add(add), .sub(sub), .mul_lo(mul_lo), .div(div), .mod(mod), .band(band), .bor(bor), .bxor(bxor), .bxnor(bxnor), .bnot(bnot), .land(land), .lor(lor), .lnot(lnot), .red_and(red_and), .red_or(red_or), .red_xor(red_xor), .eq(eq), .neq(neq), .lt(lt), .gt(gt), .le(le), .ge(ge), .ceq(ceq), .shl(shl), .shr(shr), .ashr(ashr), .cat(cat), .rep(rep), .cond(cond));

  task check(input [79:0] name, input [7:0] got, input [7:0] exp);
    if (got !== exp) begin
      errors = errors + 1;
      if (errors <= 10) $display("  wrong %0s for a=%0d b=%0d: got %0d, expected %0d", name, a, b, got, exp);
    end
  endtask

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    a = 4'd12; b = 4'd5;
    $monitor("monitor: a=%b b=%b  a+b=%0d  a&b=%b  a<<1=%b  {a,b}=%b", a, b, add, band, shl, cat);
    #1 $display("display: a=%0d b=%0d  a-b=%0d a*b(low 4 bits)=%0d a/b=%0d a%%b=%0d  &a=%b |a=%b ^a=%b", a, b, sub, mul_lo, div, mod, red_and, red_or, red_xor);
    #9 $monitoroff;
    for (i = 0; i < 16; i = i + 1)
      for (j = 0; j < 16; j = j + 1) begin
        a = i; b = j; #1;
        check("add", add, a + b);           check("sub", sub, (a - b) & 4'hf);
        check("mul_lo", mul_lo, (a * b) & 4'hf);
        check("div", div, b ? a / b : 0);   check("mod", mod, b ? a % b : 0);
        check("band", band, a & b);         check("bor", bor, a | b);
        check("bxor", bxor, a ^ b);         check("bxnor", bxnor, (a ~^ b) & 4'hf);
        check("bnot", bnot, (~a) & 4'hf);
        check("land", land, a && b);        check("lor", lor, a || b);        check("lnot", lnot, !a);
        check("red_and", red_and, &a);      check("red_or", red_or, |a);      check("red_xor", red_xor, ^a);
        check("eq", eq, a == b);  check("neq", neq, a != b); check("lt", lt, a < b);
        check("gt", gt, a > b);   check("le", le, a <= b);   check("ge", ge, a >= b);
        check("ceq", ceq, a === b);
        check("shl", shl, (a << 1) & 4'hf); check("shr", shr, a >> 1);
        check("ashr", ashr, {a[3], a[3:1]});
        check("cat", cat, {a, b});          check("rep", rep, {a, a});
        check("cond", cond, a > b ? a : b);
      end
    if (errors == 0) $display("PASS: every operator correct for all 256 input pairs");
    else             $display("FAIL: %0d wrong results", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Every Verilog operator group, on two 4-bit inputs.
module operators (
  input  wire [3:0] a, b,
  output wire [4:0] add,          // arithmetic
  output wire [3:0] sub, mul_lo, div, mod,
  output wire [3:0] band, bor, bxor, bxnor, bnot,   // bitwise
  output wire       land, lor, lnot,                // logical
  output wire       red_and, red_or, red_xor,       // reduction (on a)
  output wire       eq, neq, lt, gt, le, ge,        // relational and equality
  output wire       ceq,                            // case equality (===)
  output wire [3:0] shl, shr, ashr,                 // shifts by 1
  output wire [7:0] cat,                            // concatenation {a, b}
  output wire [7:0] rep,                            // replication {2{a}}
  output wire [3:0] cond                            // conditional: the larger of a and b
);
  assign add    = a + b;
  assign sub    = a - b;
  assign mul_lo = a * b;
  assign div    = (b != 0) ? a / b : 4'd0;
  assign mod    = (b != 0) ? a % b : 4'd0;
  assign band   = a & b;
  assign bor    = a | b;
  assign bxor   = a ^ b;
  assign bxnor  = a ~^ b;
  assign bnot   = ~a;
  assign land   = a && b;
  assign lor    = a || b;
  assign lnot   = !a;
  assign red_and = &a;
  assign red_or  = |a;
  assign red_xor = ^a;
  assign eq  = (a == b);
  assign neq = (a != b);
  assign lt  = (a < b);
  assign gt  = (a > b);
  assign le  = (a <= b);
  assign ge  = (a >= b);
  assign ceq = (a === b);
  assign shl  = a << 1;
  assign shr  = a >> 1;
  assign ashr = $signed(a) >>> 1;
  assign cat  = {a, b};
  assign rep  = {2{a}};
  assign cond = (a > b) ? a : b;
endmodule
`}},{id:"p1-c2f",group:"part1",tag:"Part 1 \xB7 Lab 8",title:"Celsius to Fahrenheit task",std:"2005",design:`// Write a task c_to_f that converts Celsius to Fahrenheit: F = C * 9 / 5 + 32.
// Use integer arithmetic (it rounds toward zero). The testbench calls it as dut.c_to_f(c, f).
module temperature;
  task c_to_f;
    input  integer celsius;
    output integer fahrenheit;
    begin
      // TODO: compute fahrenheit
    end
  endtask
endmodule
`,tb:`module tb;
  temperature dut ();
  integer c, f, errors = 0;
  integer tests [0:6];
  integer k;
  initial begin
    tests[0] = -40; tests[1] = 0; tests[2] = 37; tests[3] = 100; tests[4] = 25; tests[5] = -10; tests[6] = 200;
    for (k = 0; k < 7; k = k + 1) begin
      c = tests[k];
      dut.c_to_f(c, f);
      $display("%4d C = %4d F", c, f);
      if (f !== c * 9 / 5 + 32) begin errors = errors + 1; $display("  expected %0d", c * 9 / 5 + 32); end
    end
    if (errors == 0) $display("PASS: all 7 conversions correct");
    else             $display("FAIL: %0d conversions wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// A Verilog task that converts Celsius to Fahrenheit: F = C * 9 / 5 + 32 (integer arithmetic).
module temperature;
  task c_to_f;
    input  integer celsius;
    output integer fahrenheit;
    begin
      fahrenheit = celsius * 9 / 5 + 32;
    end
  endtask
endmodule
`}},{id:"p2-add4",group:"part2",tag:"Part 2 \xB7 Lab 1",title:"4-bit full adder: dataflow",std:"2005",design:`// 4-bit full adder, dataflow style.
module adder4 (
  input  wire [3:0] a, b,
  input  wire       cin,
  output wire [3:0] sum,
  output wire       cout
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] a, b; reg cin;
  wire [3:0] sum; wire cout;
  integer i, errors = 0;
  adder4 dut (.a(a), .b(b), .cin(cin), .sum(sum), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 512; i = i + 1) begin
      {cin, a, b} = i; #1;
      if ({cout, sum} !== a + b + cin) begin
        errors = errors + 1;
        if (errors <= 5) $display("  %0d + %0d + %0d gave %0d, expected %0d", a, b, cin, {cout, sum}, a + b + cin);
      end
    end
    a = 4'd9; b = 4'd8; cin = 1; #1 $display("example: 9 + 8 + 1 = %0d (cout=%b sum=%b)", {cout, sum}, cout, sum);
    if (errors == 0) $display("PASS: all 512 cases correct");
    else             $display("FAIL: %0d of 512 cases wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-bit full adder, dataflow style.
module adder4 (
  input  wire [3:0] a, b,
  input  wire       cin,
  output wire [3:0] sum,
  output wire       cout
);
  assign {cout, sum} = a + b + cin;
endmodule
`}},{id:"p2-mux2",group:"part2",tag:"Part 2 \xB7 Lab 2",title:"2:1 multiplexer",std:"2005",design:`// 2:1 multiplexer: y = sel ? b : a
module mux2 (
  input  wire a, b, sel,
  output wire y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg a, b, sel; wire y;
  integer i, errors = 0;
  mux2 dut (.a(a), .b(b), .sel(sel), .y(y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("sel a b | y");
    for (i = 0; i < 8; i = i + 1) begin
      {sel, a, b} = i; #10;
      $display(" %b  %b %b | %b", sel, a, b, y);
      if (y !== (sel ? b : a)) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 8 cases correct");
    else             $display("FAIL: %0d of 8 cases wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 2:1 multiplexer: y = sel ? b : a
module mux2 (
  input  wire a, b, sel,
  output wire y
);
  assign y = sel ? b : a;
endmodule
`}},{id:"p2-mux4",group:"part2",tag:"Part 2 \xB7 Lab 3",title:"4:1 multiplexer",std:"2005",design:`// 4:1 multiplexer: sel = 0 selects d0, ... sel = 3 selects d3
module mux4 (
  input  wire       d0, d1, d2, d3,
  input  wire [1:0] sel,
  output reg        y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg d0, d1, d2, d3; reg [1:0] sel; wire y;
  reg [3:0] d;
  integer i, errors = 0;
  mux4 dut (.d0(d0), .d1(d1), .d2(d2), .d3(d3), .sel(sel), .y(y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 64; i = i + 1) begin
      {sel, d} = i; {d3, d2, d1, d0} = d; #5;
      if (y !== d[sel]) begin errors = errors + 1; if (errors <= 5) $display("  sel=%0d d3..d0=%b: y=%b, expected %b", sel, d, y, d[sel]); end
    end
    if (errors == 0) $display("PASS: all 64 cases correct");
    else             $display("FAIL: %0d of 64 cases wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4:1 multiplexer: sel = 0 selects d0, ... sel = 3 selects d3
module mux4 (
  input  wire       d0, d1, d2, d3,
  input  wire [1:0] sel,
  output reg        y
);
  always @(*) begin
    case (sel)
      2'd0: y = d0;
      2'd1: y = d1;
      2'd2: y = d2;
      default: y = d3;
    endcase
  end
endmodule
`}},{id:"p2-dec24",group:"part2",tag:"Part 2 \xB7 Lab 4",title:"2\xD74 decoder",std:"2005",design:`// 2-to-4 decoder with enable: y has a single 1 at position a when en = 1, else all 0.
module decoder2x4 (
  input  wire [1:0] a,
  input  wire       en,
  output wire [3:0] y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [1:0] a; reg en; wire [3:0] y;
  integer i, errors = 0;
  decoder2x4 dut (.a(a), .en(en), .y(y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("en a  | y");
    for (i = 0; i < 8; i = i + 1) begin
      {en, a} = i; #10;
      $display(" %b %b | %b", en, a, y);
      if (y !== (en ? (4'b0001 << a) : 4'b0000)) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 8 cases correct");
    else             $display("FAIL: %0d of 8 cases wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 2-to-4 decoder with enable: y has a single 1 at position a when en = 1, else all 0.
module decoder2x4 (
  input  wire [1:0] a,
  input  wire       en,
  output wire [3:0] y
);
  assign y = en ? (4'b0001 << a) : 4'b0000;
endmodule
`}},{id:"p2-enc42",group:"part2",tag:"Part 2 \xB7 Lab 5",title:"4\xD72 encoder",std:"2005",design:`// 4-to-2 encoder: exactly one bit of d is 1; y is its position. valid = 1 for a legal (one-hot) input.
module encoder4x2 (
  input  wire [3:0] d,
  output reg  [1:0] y,
  output reg        valid
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [3:0] d; wire [1:0] y; wire valid;
  integer i, errors = 0;
  encoder4x2 dut (.d(d), .y(y), .valid(valid));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 16; i = i + 1) begin
      d = i; #10;
      if (d == 1 || d == 2 || d == 4 || d == 8) begin
        $display("d=%b -> y=%0d valid=%b", d, y, valid);
        if (valid !== 1'b1 || (4'b0001 << y) !== d) errors = errors + 1;
      end else if (valid !== 1'b0) begin errors = errors + 1; $display("d=%b is not one-hot: valid should be 0", d); end
    end
    if (errors == 0) $display("PASS: all 16 inputs handled correctly");
    else             $display("FAIL: %0d of 16 inputs wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-to-2 encoder: exactly one bit of d is 1; y is its position. valid = 1 for a legal (one-hot) input.
module encoder4x2 (
  input  wire [3:0] d,
  output reg  [1:0] y,
  output reg        valid
);
  always @(*) begin
    valid = 1'b1;
    case (d)
      4'b0001: y = 2'd0;
      4'b0010: y = 2'd1;
      4'b0100: y = 2'd2;
      4'b1000: y = 2'd3;
      default: begin y = 2'd0; valid = 1'b0; end
    endcase
  end
endmodule
`}},{id:"p2-penc42",group:"part2",tag:"Part 2 \xB7 Lab 6",title:"4\xD72 priority encoder",std:"2005",design:`// 4-to-2 priority encoder: y is the position of the highest 1 in d. valid = 0 when d = 0.
module priority_encoder4x2 (
  input  wire [3:0] d,
  output reg  [1:0] y,
  output reg        valid
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [3:0] d; wire [1:0] y; wire valid;
  integer i, k, errors = 0; reg [1:0] exp;
  priority_encoder4x2 dut (.d(d), .y(y), .valid(valid));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 16; i = i + 1) begin
      d = i; #10;
      exp = 0; for (k = 0; k < 4; k = k + 1) if (d[k]) exp = k;
      $display("d=%b -> y=%0d valid=%b", d, y, valid);
      if (valid !== (d != 0) || (d != 0 && y !== exp)) errors = errors + 1;
    end
    if (errors == 0) $display("PASS: all 16 inputs correct");
    else             $display("FAIL: %0d of 16 inputs wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-to-2 priority encoder: y is the position of the highest 1 in d. valid = 0 when d = 0.
module priority_encoder4x2 (
  input  wire [3:0] d,
  output reg  [1:0] y,
  output reg        valid
);
  always @(*) begin
    valid = 1'b1;
    casez (d)
      4'b1???: y = 2'd3;
      4'b01??: y = 2'd2;
      4'b001?: y = 2'd1;
      4'b0001: y = 2'd0;
      default: begin y = 2'd0; valid = 1'b0; end
    endcase
  end
endmodule
`}},{id:"p2-cmp4",group:"part2",tag:"Part 2 \xB7 Lab 7",title:"4-bit comparator",std:"2005",design:`// 4-bit magnitude comparator (unsigned).
module comparator4 (
  input  wire [3:0] a, b,
  output wire       gt, eq, lt
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [3:0] a, b; wire gt, eq, lt;
  integer i, errors = 0;
  comparator4 dut (.a(a), .b(b), .gt(gt), .eq(eq), .lt(lt));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 256; i = i + 1) begin
      {a, b} = i; #1;
      if ({gt, eq, lt} !== {a > b, a == b, a < b}) begin errors = errors + 1; if (errors <= 5) $display("  a=%0d b=%0d: gt=%b eq=%b lt=%b", a, b, gt, eq, lt); end
    end
    a = 9; b = 4; #1 $display("a=9, b=4: gt=%b eq=%b lt=%b", gt, eq, lt);
    if (errors == 0) $display("PASS: all 256 pairs correct");
    else             $display("FAIL: %0d of 256 pairs wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-bit magnitude comparator (unsigned).
module comparator4 (
  input  wire [3:0] a, b,
  output wire       gt, eq, lt
);
  assign gt = (a > b);
  assign eq = (a == b);
  assign lt = (a < b);
endmodule
`}},{id:"p2-bshift8",group:"part2",tag:"Part 2 \xB7 Lab 8",title:"8-bit barrel shifter",std:"2005",design:`// 8-bit barrel shifter: shifts d by amt (0 to 7) in one step.
//   dir = 0: shift left, dir = 1: shift right. rotate = 1: bits that fall off come back in.
module barrel_shifter8 (
  input  wire [7:0] d,
  input  wire [2:0] amt,
  input  wire       dir, rotate,
  output reg  [7:0] y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [7:0] d; reg [2:0] amt; reg dir, rotate; wire [7:0] y;
  reg [15:0] w; reg [7:0] exp;
  integer i, errors = 0;
  barrel_shifter8 dut (.d(d), .amt(amt), .dir(dir), .rotate(rotate), .y(y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 2000; i = i + 1) begin
      d = $random; amt = $random; dir = $random; rotate = $random; #1;
      w = {d, d};
      case ({rotate, dir})
        2'b00: exp = d << amt;
        2'b01: exp = d >> amt;
        2'b10: exp = (w << amt) >> 8;
        default: exp = w >> amt;
      endcase
      if (y !== exp) begin errors = errors + 1; if (errors <= 5) $display("  d=%b amt=%0d dir=%b rotate=%b: y=%b, expected %b", d, amt, dir, rotate, y, exp); end
    end
    d = 8'b1001_0110; amt = 3; dir = 0; rotate = 1; #1 $display("rotate 10010110 left by 3 = %b", y);
    if (errors == 0) $display("PASS: 2000 random shifts correct");
    else             $display("FAIL: %0d of 2000 shifts wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 8-bit barrel shifter: shifts d by amt (0 to 7) in one step.
//   dir = 0: shift left, dir = 1: shift right. rotate = 1: bits that fall off come back in.
module barrel_shifter8 (
  input  wire [7:0] d,
  input  wire [2:0] amt,
  input  wire       dir, rotate,
  output reg  [7:0] y
);
  always @(*) begin
    case ({rotate, dir})
      2'b00: y = d << amt;
      2'b01: y = d >> amt;
      2'b10: y = (d << amt) | (d >> (4'd8 - amt));
      default: y = (d >> amt) | (d << (4'd8 - amt));
    endcase
  end
endmodule
`}},{id:"p2-alu",group:"part2",tag:"Part 2 \xB7 Lab 9",title:"ALU",std:"2005",design:`// 8-bit ALU. op selects the operation; zero = 1 when y is 0; carry is the carry/borrow of add/sub.
//   0 add   1 sub   2 and   3 or   4 xor   5 not a   6 shift a left by 1   7 shift a right by 1
module alu8 (
  input  wire [7:0] a, b,
  input  wire [2:0] op,
  output reg  [7:0] y,
  output reg        carry,
  output wire       zero
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [7:0] a, b; reg [2:0] op; wire [7:0] y; wire carry, zero;
  reg [8:0] r;
  integer i, errors = 0;
  alu8 dut (.a(a), .b(b), .op(op), .y(y), .carry(carry), .zero(zero));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (i = 0; i < 4000; i = i + 1) begin
      a = $random; b = $random; op = $random;
      if (i % 50 == 0) b = a;               // exercise zero for sub and xor
      #1;
      case (op)
        0: r = a + b;  1: r = {1'b0, a} - {1'b0, b};
        2: r = a & b;  3: r = a | b;  4: r = a ^ b;  5: r = {1'b0, ~a};
        6: r = {1'b0, a << 1};  default: r = a >> 1;
      endcase
      if (y !== r[7:0] || zero !== (r[7:0] == 0) || (op <= 1 && carry !== r[8])) begin
        errors = errors + 1;
        if (errors <= 5) $display("  op=%0d a=%0d b=%0d: y=%0d carry=%b zero=%b, expected y=%0d carry=%b", op, a, b, y, carry, zero, r[7:0], r[8]);
      end
    end
    a = 200; b = 100; op = 0; #1 $display("200 + 100: y=%0d carry=%b", y, carry);
    if (errors == 0) $display("PASS: 4000 random operations correct");
    else             $display("FAIL: %0d of 4000 operations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 8-bit ALU. op selects the operation; zero = 1 when y is 0; carry is the carry/borrow of add/sub.
//   0 add   1 sub   2 and   3 or   4 xor   5 not a   6 shift a left by 1   7 shift a right by 1
module alu8 (
  input  wire [7:0] a, b,
  input  wire [2:0] op,
  output reg  [7:0] y,
  output reg        carry,
  output wire       zero
);
  always @(*) begin
    carry = 1'b0;
    case (op)
      3'd0: {carry, y} = a + b;
      3'd1: {carry, y} = a - b;
      3'd2: y = a & b;
      3'd3: y = a | b;
      3'd4: y = a ^ b;
      3'd5: y = ~a;
      3'd6: y = a << 1;
      default: y = a >> 1;
    endcase
  end
  assign zero = (y == 8'd0);
endmodule
`}},{id:"p3-dlatch",group:"part3",tag:"Part 3 \xB7 Lab 1",title:"D latch",std:"2005",design:`\`timescale 1ns/10ps
// D latch: q follows d while en = 1 and holds its value while en = 0.
module d_latch (
  input  wire d, en,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg d = 0, en = 0;
  wire q;
  integer errors = 0, checks = 0;
  d_latch dut (.d(d), .en(en), .q(q));

  // reference model
  reg m = 0;
  always @(*) if (en) m = d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    d = 0; en = 1; #3.2;
    repeat (80) begin #($urandom_range(1, 4) + 0.25) begin d = $random; if ($random % 3 == 0) en = ~en; end end
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// D latch: q follows d while en = 1 and holds its value while en = 0.
module d_latch (
  input  wire d, en,
  output reg  q
);
  always @(*)
    if (en) q = d;
endmodule
`}},{id:"p3-dlatch-rst",group:"part3",tag:"Part 3 \xB7 Lab 2",title:"D latch with asynchronous reset",std:"2005",design:`\`timescale 1ns/10ps
// D latch with asynchronous active-high reset: rst = 1 forces q to 0 at once.
module d_latch_rst (
  input  wire d, en, rst,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg d = 0, en = 0, rst = 1;
  wire q;
  integer errors = 0, checks = 0;
  d_latch_rst dut (.d(d), .en(en), .rst(rst), .q(q));

  // reference model
  reg m = 0;
  always @(*) if (rst) m = 0; else if (en) m = d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #3.2 rst = 0;
    repeat (100) begin #($urandom_range(1, 4) + 0.25) begin d = $random; if ($random % 3 == 0) en = ~en; if ($random % 7 == 0) rst = ~rst; end end
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// D latch with asynchronous active-high reset: rst = 1 forces q to 0 at once.
module d_latch_rst (
  input  wire d, en, rst,
  output reg  q
);
  always @(*)
    if (rst)     q = 1'b0;
    else if (en) q = d;
endmodule
`}},{id:"p3-dff",group:"part3",tag:"Part 3 \xB7 Lab 3",title:"D flip-flop",std:"2005",design:`\`timescale 1ns/10ps
// D flip-flop: q takes the value of d on every rising edge of clk.
module dff (
  input  wire clk, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff dut (.clk(clk), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk) m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; end end
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// D flip-flop: q takes the value of d on every rising edge of clk.
module dff (
  input  wire clk, d,
  output reg  q
);
  always @(posedge clk)
    q <= d;
endmodule
`}},{id:"p3-dff-arh",group:"part3",tag:"Part 3 \xB7 Lab 4",title:"DFF, async active-high reset",std:"2005",design:`\`timescale 1ns/10ps
// Rising-edge D flip-flop with asynchronous active-high reset: rst = 1 clears q at once, without waiting for clk.
module dff_async_rst (
  input  wire clk, rst, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst = 0, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_async_rst dut (.clk(clk), .rst(rst), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk or posedge rst) if (rst) m <= 0; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst = 1; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 9 == 0) rst = ~rst; end end
    rst = 0;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Rising-edge D flip-flop with asynchronous active-high reset: rst = 1 clears q at once, without waiting for clk.
module dff_async_rst (
  input  wire clk, rst, d,
  output reg  q
);
  always @(posedge clk or posedge rst)
    if (rst) q <= 1'b0;
    else     q <= d;
endmodule
`}},{id:"p3-dff-neg-arh",group:"part3",tag:"Part 3 \xB7 Lab 5",title:"Negative-edge DFF, async active-high reset",std:"2005",design:`\`timescale 1ns/10ps
// Falling-edge D flip-flop with asynchronous active-high reset.
module dff_neg_async_rst (
  input  wire clk, rst, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst = 0, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_neg_async_rst dut (.clk(clk), .rst(rst), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(negedge clk or posedge rst) if (rst) m <= 0; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst = 1; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 9 == 0) rst = ~rst; end end
    rst = 0;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Falling-edge D flip-flop with asynchronous active-high reset.
module dff_neg_async_rst (
  input  wire clk, rst, d,
  output reg  q
);
  always @(negedge clk or posedge rst)
    if (rst) q <= 1'b0;
    else     q <= d;
endmodule
`}},{id:"p3-dff-arl",group:"part3",tag:"Part 3 \xB7 Lab 6",title:"DFF, async active-low reset",std:"2005",design:`\`timescale 1ns/10ps
// Rising-edge D flip-flop with asynchronous active-low reset: rst_n = 0 clears q at once.
module dff_async_rst_n (
  input  wire clk, rst_n, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 1, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_async_rst_n dut (.clk(clk), .rst_n(rst_n), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst_n = 0; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 9 == 0) rst_n = ~rst_n; end end
    rst_n = 1;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Rising-edge D flip-flop with asynchronous active-low reset: rst_n = 0 clears q at once.
module dff_async_rst_n (
  input  wire clk, rst_n, d,
  output reg  q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 1'b0;
    else        q <= d;
endmodule
`}},{id:"p3-dff-ash",group:"part3",tag:"Part 3 \xB7 Lab 7",title:"DFF, async active-high set",std:"2005",design:`\`timescale 1ns/10ps
// Rising-edge D flip-flop with asynchronous active-high set: set = 1 forces q to 1 at once.
module dff_async_set (
  input  wire clk, set, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, set = 0, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_async_set dut (.clk(clk), .set(set), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk or posedge set) if (set) m <= 1; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 set = 1; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 9 == 0) set = ~set; end end
    set = 0;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Rising-edge D flip-flop with asynchronous active-high set: set = 1 forces q to 1 at once.
module dff_async_set (
  input  wire clk, set, d,
  output reg  q
);
  always @(posedge clk or posedge set)
    if (set) q <= 1'b1;
    else     q <= d;
endmodule
`}},{id:"p3-dff-srh",group:"part3",tag:"Part 3 \xB7 Lab 8",title:"DFF, sync active-high reset",std:"2005",design:`\`timescale 1ns/10ps
// D flip-flop with synchronous active-high reset: rst only acts on a rising edge of clk.
module dff_sync_rst (
  input  wire clk, rst, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst = 0, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_sync_rst dut (.clk(clk), .rst(rst), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk) if (rst) m <= 0; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst = 1; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 9 == 0) rst = ~rst; end end
    rst = 0;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// D flip-flop with synchronous active-high reset: rst only acts on a rising edge of clk.
module dff_sync_rst (
  input  wire clk, rst, d,
  output reg  q
);
  always @(posedge clk)
    if (rst) q <= 1'b0;
    else     q <= d;
endmodule
`}},{id:"p3-dff-srl",group:"part3",tag:"Part 3 \xB7 Lab 9",title:"DFF, sync active-low reset",std:"2005",design:`\`timescale 1ns/10ps
// D flip-flop with synchronous active-low reset: rst_n = 0 clears q on the next rising edge.
module dff_sync_rst_n (
  input  wire clk, rst_n, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 1, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_sync_rst_n dut (.clk(clk), .rst_n(rst_n), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk) if (!rst_n) m <= 0; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst_n = 0; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 9 == 0) rst_n = ~rst_n; end end
    rst_n = 1;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// D flip-flop with synchronous active-low reset: rst_n = 0 clears q on the next rising edge.
module dff_sync_rst_n (
  input  wire clk, rst_n, d,
  output reg  q
);
  always @(posedge clk)
    if (!rst_n) q <= 1'b0;
    else        q <= d;
endmodule
`}},{id:"p3-dff-srs",group:"part3",tag:"Part 3 \xB7 Lab 10",title:"DFF, sync reset and set",std:"2005",design:`\`timescale 1ns/10ps
// D flip-flop with synchronous reset and set, both active high. If both are 1, reset wins.
module dff_sync_rst_set (
  input  wire clk, rst, set, d,
  output reg  q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst = 0, set = 0, d = 0;
  wire q;
  integer errors = 0, checks = 0;
  dff_sync_rst_set dut (.clk(clk), .rst(rst), .set(set), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg m;
  always @(posedge clk) if (rst) m <= 0; else if (set) m <= 1; else m <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst = 1; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 7 == 0) rst = ~rst; if ($random % 5 == 0) set = ~set; end end
    rst = 0;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// D flip-flop with synchronous reset and set, both active high. If both are 1, reset wins.
module dff_sync_rst_set (
  input  wire clk, rst, set, d,
  output reg  q
);
  always @(posedge clk)
    if (rst)      q <= 1'b0;
    else if (set) q <= 1'b1;
    else          q <= d;
endmodule
`}},{id:"p3-sync-async",group:"part3",tag:"Part 3 \xB7 Lab 11",title:"Synchronous vs asynchronous reset",std:"2005",design:`\`timescale 1ns/10ps
// The same register built twice from one reset: q_async clears as soon as rst = 1,
// q_sync only clears on the next rising edge of clk. Watch the difference in the waveform.
module reset_compare (
  input  wire clk, rst, d,
  output reg  q_sync, q_async
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst = 0, d = 0;
  wire q_sync, q_async;
  integer errors = 0, checks = 0;
  reset_compare dut (.clk(clk), .rst(rst), .d(d), .q_sync(q_sync), .q_async(q_async));
  always #5 clk = ~clk;
  // reference model
  reg ms, ma;
  always @(posedge clk) if (rst) ms <= 0; else ms <= d;
  always @(posedge clk or posedge rst) if (rst) ma <= 0; else ma <= d;
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if ({q_sync, q_async} !== {ms, ma}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {q_sync, q_async}, {ms, ma}); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst = 1; #2.2;
    repeat (120) begin #($urandom_range(1, 3) + 0.25) begin d = $random; if ($random % 8 == 0) rst = ~rst; end end
    rst = 0;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// The same register built twice from one reset: q_async clears as soon as rst = 1,
// q_sync only clears on the next rising edge of clk. Watch the difference in the waveform.
module reset_compare (
  input  wire clk, rst, d,
  output reg  q_sync, q_async
);
  always @(posedge clk)
    if (rst) q_sync <= 1'b0;
    else     q_sync <= d;

  always @(posedge clk or posedge rst)
    if (rst) q_async <= 1'b0;
    else     q_async <= d;
endmodule
`}},{id:"p3-twin",group:"part3",tag:"Part 3 \xB7 Lab 12",title:"8-bit twin register set",std:"2005",design:`\`timescale 1ns/10ps
// Two 8-bit registers that share a clock, a reset and the data input d.
// load_a loads d into qa, load_b loads d into qb. Without a load, each register holds its value.
module twin_reg8 (
  input  wire       clk, rst_n,
  input  wire [7:0] d,
  input  wire       load_a, load_b,
  output reg  [7:0] qa, qb
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0, load_a = 0, load_b = 0; reg [7:0] d = 0;
  wire [7:0] qa, qb;
  integer errors = 0, checks = 0;
  twin_reg8 dut (.clk(clk), .rst_n(rst_n), .d(d), .load_a(load_a), .load_b(load_b), .qa(qa), .qb(qb));
  always #5 clk = ~clk;
  // reference model
  reg [7:0] ma = 0, mb = 0;
  always @(posedge clk or negedge rst_n) if (!rst_n) begin ma <= 0; mb <= 0; end else begin if (load_a) ma <= d; if (load_b) mb <= d; end
  // compare the design with the model every ns, between events
  initial begin #3.5 forever begin
    if ({qa, qb} !== {ma, mb}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {qa, qb}, {ma, mb}); end
    checks = checks + 1; #1;
  end end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12.2 rst_n = 1;
    repeat (150) begin #($urandom_range(1, 3) + 0.25) begin d = $random; load_a = $random; load_b = $random; if ($random % 40 == 0) rst_n = ~rst_n; end end
    rst_n = 1;
    if (errors == 0) $display("PASS: %0d checks, the design matches the model", checks);
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Two 8-bit registers that share a clock, a reset and the data input d.
// load_a loads d into qa, load_b loads d into qb. Without a load, each register holds its value.
module twin_reg8 (
  input  wire       clk, rst_n,
  input  wire [7:0] d,
  input  wire       load_a, load_b,
  output reg  [7:0] qa, qb
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin
      qa <= 8'd0;
      qb <= 8'd0;
    end else begin
      if (load_a) qa <= d;
      if (load_b) qb <= d;
    end
endmodule
`}},{id:"p4-sr5",group:"part4",tag:"Part 4 \xB7 Lab 1",title:"5-bit left-to-right shift register",std:"2005",design:`\`timescale 1ns/10ps
// 5-bit shift register, left to right: on each rising edge every bit moves one place
// to the right (toward bit 0) and sin enters at the left (bit 4).
module shift_right5 (
  input  wire       clk, rst_n, sin,
  output reg  [4:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg sin = 0;
  wire [4:0] q;
  integer errors = 0, checks = 0, cyc;
  shift_right5 dut (.clk(clk), .rst_n(rst_n), .sin(sin), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [4:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= {sin, m[4:1]};
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 100; cyc = cyc + 1) begin
      @(negedge clk);
      sin = $random;
      if (cyc < 12) $display("sin=%b  q=%b", sin, q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 100 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 5-bit shift register, left to right: on each rising edge every bit moves one place
// to the right (toward bit 0) and sin enters at the left (bit 4).
module shift_right5 (
  input  wire       clk, rst_n, sin,
  output reg  [4:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 5'd0;
    else        q <= {sin, q[4:1]};
endmodule
`}},{id:"p4-usr5",group:"part4",tag:"Part 4 \xB7 Lab 2",title:"5-bit universal shift register",std:"2005",design:`\`timescale 1ns/10ps
// 5-bit universal shift register.
//   mode 00: hold   01: shift right (sr_in enters bit 4)   10: shift left (sl_in enters bit 0)   11: load d
module universal_shift5 (
  input  wire       clk, rst_n,
  input  wire [1:0] mode,
  input  wire       sr_in, sl_in,
  input  wire [4:0] d,
  output reg  [4:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg [1:0] mode = 0; reg sr_in = 0, sl_in = 0; reg [4:0] d = 0;
  wire [4:0] q;
  integer errors = 0, checks = 0, cyc;
  universal_shift5 dut (.clk(clk), .rst_n(rst_n), .mode(mode), .sr_in(sr_in), .sl_in(sl_in), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [4:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else case (mode) 0: m <= m; 1: m <= {sr_in, m[4:1]}; 2: m <= {m[3:0], sl_in}; default: m <= d; endcase
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 200; cyc = cyc + 1) begin
      @(negedge clk);
      mode = $random; sr_in = $random; sl_in = $random; d = $random;
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 200 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 5-bit universal shift register.
//   mode 00: hold   01: shift right (sr_in enters bit 4)   10: shift left (sl_in enters bit 0)   11: load d
module universal_shift5 (
  input  wire       clk, rst_n,
  input  wire [1:0] mode,
  input  wire       sr_in, sl_in,
  input  wire [4:0] d,
  output reg  [4:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 5'd0;
    else case (mode)
      2'b00: q <= q;
      2'b01: q <= {sr_in, q[4:1]};
      2'b10: q <= {q[3:0], sl_in};
      default: q <= d;
    endcase
endmodule
`}},{id:"p4-cnt",group:"part4",tag:"Part 4 \xB7 Lab 3",title:"Basic counter",std:"2005",design:`\`timescale 1ns/10ps
// 4-bit up counter with asynchronous active-low reset. It wraps from 15 to 0.
module counter4 (
  input  wire       clk, rst_n,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  counter4 dut (.clk(clk), .rst_n(rst_n), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= m + 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 40; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc < 20) $display("q=%0d", q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 40 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 4-bit up counter with asynchronous active-low reset. It wraps from 15 to 0.
module counter4 (
  input  wire       clk, rst_n,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 4'd0;
    else        q <= q + 1'b1;
endmodule
`}},{id:"p4-cnt-tb",group:"part4",tag:"Part 4 \xB7 Lab 4",title:"Write a testbench for a counter",std:"2005",design:`\`timescale 1ns/10ps
// A 4-bit up counter with enable and asynchronous active-low reset (given, do not change).
// Set BUG to 1 to break it on purpose: your testbench must then print FAIL.
module counter_en #(parameter BUG = 0) (
  input  wire       clk, rst_n, en,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)  q <= 4'd0;
    else if (en) q <= (BUG && q == 4'd9) ? 4'd0 : q + 1'b1;
endmodule
`,tb:`\`timescale 1ns/10ps
// Write a testbench for counter_en (in the Design pane).
// It should: make a clock, reset the counter, count with en = 1, pause with en = 0,
// run past 15 to check the wrap-around, and compare q with the value you expect.
// Print PASS when every check passes and FAIL otherwise.
// Then set BUG to 1 in the design and run again: a good testbench prints FAIL.
module tb;
  reg clk = 0, rst_n = 0, en = 0;
  wire [3:0] q;
  counter_en dut (.clk(clk), .rst_n(rst_n), .en(en), .q(q));
  always #5 clk = ~clk;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // TODO: release the reset, drive en, and check q against the value you expect
    #200;
    $finish;
  end
endmodule
`,solution:{tb:`\`timescale 1ns/10ps
// Testbench for counter_en: drive clk, rst_n and en, predict the count, and check it every cycle.
module tb;
  reg clk = 0, rst_n = 0, en = 0;
  wire [3:0] q;
  reg  [3:0] expected;
  integer errors = 0, i;
  counter_en dut (.clk(clk), .rst_n(rst_n), .en(en), .q(q));
  always #5 clk = ~clk;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    expected = 0;
    #12 rst_n = 1;                                   // release reset between clock edges
    for (i = 0; i < 60; i = i + 1) begin
      @(negedge clk) en = (i % 7 != 3);              // mostly counting, sometimes paused
      @(posedge clk) #1;
      if (en) expected = expected + 1;
      if (q !== expected) begin errors = errors + 1; if (errors <= 5) $display("  cycle %0d: q=%0d, expected %0d", i, q, expected); end
    end
    @(negedge clk) rst_n = 0; #1;                    // asynchronous reset in the middle of a cycle
    if (q !== 0) begin errors = errors + 1; $display("  reset did not clear q"); end
    if (errors == 0) $display("PASS: counting, enable, wrap-around and reset all correct");
    else             $display("FAIL: %0d errors", errors);
    $finish;
  end
endmodule
`}},{id:"p4-cnt-load",group:"part4",tag:"Part 4 \xB7 Lab 5",title:"Up counter with load",std:"2005",design:`\`timescale 1ns/10ps
// 4-bit up counter with synchronous load: load = 1 loads d, otherwise q counts up.
module counter_load (
  input  wire       clk, rst_n, load,
  input  wire [3:0] d,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg load = 0; reg [3:0] d = 0;
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  counter_load dut (.clk(clk), .rst_n(rst_n), .load(load), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else if (load) m <= d; else m <= m + 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 200; cyc = cyc + 1) begin
      @(negedge clk);
      load = ($random % 6 == 0); d = $random;
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 200 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 4-bit up counter with synchronous load: load = 1 loads d, otherwise q counts up.
module counter_load (
  input  wire       clk, rst_n, load,
  input  wire [3:0] d,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)    q <= 4'd0;
    else if (load) q <= d;
    else           q <= q + 1'b1;
endmodule
`}},{id:"p4-updown",group:"part4",tag:"Part 4 \xB7 Lab 6",title:"Up/down counter",std:"2005",design:`\`timescale 1ns/10ps
// 4-bit up/down counter: up = 1 counts up, up = 0 counts down. It wraps both ways.
module updown4 (
  input  wire       clk, rst_n, up,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg up = 1;
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  updown4 dut (.clk(clk), .rst_n(rst_n), .up(up), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else if (up) m <= m + 1; else m <= m - 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 200; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc % 13 == 0) up = $random;
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 200 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 4-bit up/down counter: up = 1 counts up, up = 0 counts down. It wraps both ways.
module updown4 (
  input  wire       clk, rst_n, up,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)  q <= 4'd0;
    else if (up) q <= q + 1'b1;
    else         q <= q - 1'b1;
endmodule
`}},{id:"p4-mod",group:"part4",tag:"Part 4 \xB7 Lab 7",title:"Modulus counter",std:"2005",design:`\`timescale 1ns/10ps
// Modulus-N counter: counts 0, 1, ... N-1, then back to 0. N = 10 makes a decade counter.
module mod_counter #(parameter N = 10) (
  input  wire       clk, rst_n,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  mod_counter dut (.clk(clk), .rst_n(rst_n), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= (m == 9) ? 0 : m + 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 60; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc < 12) $display("q=%0d", q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 60 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Modulus-N counter: counts 0, 1, ... N-1, then back to 0. N = 10 makes a decade counter.
module mod_counter #(parameter N = 10) (
  input  wire       clk, rst_n,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)          q <= 4'd0;
    else if (q == N - 1) q <= 4'd0;
    else                 q <= q + 1'b1;
endmodule
`}},{id:"p4-range",group:"part4",tag:"Part 4 \xB7 Lab 8",title:"Range up counter",std:"2005",design:`\`timescale 1ns/10ps
// Range up counter: after reset q = LOW, then counts up to HIGH and starts again at LOW.
module range_counter #(parameter LOW = 3, HIGH = 12) (
  input  wire       clk, rst_n,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  range_counter dut (.clk(clk), .rst_n(rst_n), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 3; else m <= (m == 12) ? 3 : m + 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 60; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc < 14) $display("q=%0d", q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 60 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Range up counter: after reset q = LOW, then counts up to HIGH and starts again at LOW.
module range_counter #(parameter LOW = 3, HIGH = 12) (
  input  wire       clk, rst_n,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)        q <= LOW;
    else if (q == HIGH) q <= LOW;
    else               q <= q + 1'b1;
endmodule
`}},{id:"p4-range-udl",group:"part4",tag:"Part 4 \xB7 Lab 9",title:"Range up/down counter with load",std:"2005",design:`\`timescale 1ns/10ps
// Range up/down counter with load. q stays between LOW and HIGH:
//   load = 1: q <= d (d is always in range)
//   up = 1:   counts up, from HIGH it goes back to LOW
//   up = 0:   counts down, from LOW it goes to HIGH
module range_updown_load #(parameter LOW = 3, HIGH = 12) (
  input  wire       clk, rst_n, load, up,
  input  wire [3:0] d,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg load = 0, up = 1; reg [3:0] d = 3;
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  range_updown_load dut (.clk(clk), .rst_n(rst_n), .load(load), .up(up), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 3; else if (load) m <= d; else if (up) m <= (m == 12) ? 3 : m + 1; else m <= (m == 3) ? 12 : m - 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 200; cyc = cyc + 1) begin
      @(negedge clk);
      load = ($random % 9 == 0); d = 3 + ($urandom % 10); if (cyc % 11 == 0) up = $random;
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 200 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Range up/down counter with load. q stays between LOW and HIGH:
//   load = 1: q <= d (d is always in range)
//   up = 1:   counts up, from HIGH it goes back to LOW
//   up = 0:   counts down, from LOW it goes to HIGH
module range_updown_load #(parameter LOW = 3, HIGH = 12) (
  input  wire       clk, rst_n, load, up,
  input  wire [3:0] d,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)    q <= LOW;
    else if (load) q <= d;
    else if (up)   q <= (q == HIGH) ? LOW  : q + 1'b1;
    else           q <= (q == LOW)  ? HIGH : q - 1'b1;
endmodule
`}},{id:"p4-div2",group:"part4",tag:"Part 4 \xB7 Lab 10",title:"Clock divider by 2",std:"2005",design:`\`timescale 1ns/10ps
// Clock divider by 2: clk_out toggles on every rising edge of clk.
module clk_div2 (
  input  wire clk, rst_n,
  output reg  clk_out
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  wire clk_out;
  realtime t_rise = 0, t_fall = 0, period = 0, high = 0;
  integer rises = 0, errors = 0;
  clk_div2 dut (.clk(clk), .rst_n(rst_n), .clk_out(clk_out));
  always #5 clk = ~clk;                       // 10 ns input clock
  always @(posedge clk_out) begin
    if (rises > 0) begin
      period = $realtime - t_rise;
      if (period != 20.0) begin errors = errors + 1; if (errors <= 5) $display("  clk_out period %0.1f ns, expected 20.0", period); end
    end
    t_rise = $realtime; rises = rises + 1;
  end
  always @(negedge clk_out) if (rises > 0) begin
    high = $realtime - t_rise;
    if (high != 10.0) begin errors = errors + 1; if (errors <= 5) $display("  clk_out high for %0.1f ns, expected 10.0 (50%% duty cycle)", high); end
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    #(400);
    $display("clk_out: %0d rising edges, period %0.1f ns, high for %0.1f ns", rises, period, high);
    if (errors == 0 && rises >= 19) $display("PASS: clk_out is clk divided by 2 with a 50%% duty cycle");
    else                            $display("FAIL: %0d errors, %0d rising edges", errors, rises);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Clock divider by 2: clk_out toggles on every rising edge of clk.
module clk_div2 (
  input  wire clk, rst_n,
  output reg  clk_out
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) clk_out <= 1'b0;
    else        clk_out <= ~clk_out;
endmodule
`}},{id:"p4-div4",group:"part4",tag:"Part 4 \xB7 Lab 11",title:"Clock divider by 4",std:"2005",design:`\`timescale 1ns/10ps
// Clock divider by 4: a 2-bit counter; its top bit is clk divided by 4.
module clk_div4 (
  input  wire clk, rst_n,
  output wire clk_out
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  wire clk_out;
  realtime t_rise = 0, t_fall = 0, period = 0, high = 0;
  integer rises = 0, errors = 0;
  clk_div4 dut (.clk(clk), .rst_n(rst_n), .clk_out(clk_out));
  always #5 clk = ~clk;                       // 10 ns input clock
  always @(posedge clk_out) begin
    if (rises > 0) begin
      period = $realtime - t_rise;
      if (period != 40.0) begin errors = errors + 1; if (errors <= 5) $display("  clk_out period %0.1f ns, expected 40.0", period); end
    end
    t_rise = $realtime; rises = rises + 1;
  end
  always @(negedge clk_out) if (rises > 0) begin
    high = $realtime - t_rise;
    if (high != 20.0) begin errors = errors + 1; if (errors <= 5) $display("  clk_out high for %0.1f ns, expected 20.0 (50%% duty cycle)", high); end
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    #(800);
    $display("clk_out: %0d rising edges, period %0.1f ns, high for %0.1f ns", rises, period, high);
    if (errors == 0 && rises >= 19) $display("PASS: clk_out is clk divided by 4 with a 50%% duty cycle");
    else                            $display("FAIL: %0d errors, %0d rising edges", errors, rises);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Clock divider by 4: a 2-bit counter; its top bit is clk divided by 4.
module clk_div4 (
  input  wire clk, rst_n,
  output wire clk_out
);
  reg [1:0] cnt;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) cnt <= 2'd0;
    else        cnt <= cnt + 1'b1;
  assign clk_out = cnt[1];
endmodule
`}},{id:"p4-div3",group:"part4",tag:"Part 4 \xB7 Lab 12",title:"Clock divider by 3",std:"2005",design:`\`timescale 1ns/10ps
// Clock divider by 3 with a 50% duty cycle: clk_out has a period of 3 clk periods and is
// high for exactly 1.5 of them. A counter alone cannot do it: think about both clock edges.
module clk_div3 (
  input  wire clk, rst_n,
  output wire clk_out
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  wire clk_out;
  realtime t_rise = 0, t_fall = 0, period = 0, high = 0;
  integer rises = 0, errors = 0;
  clk_div3 dut (.clk(clk), .rst_n(rst_n), .clk_out(clk_out));
  always #5 clk = ~clk;                       // 10 ns input clock
  always @(posedge clk_out) begin
    if (rises > 0) begin
      period = $realtime - t_rise;
      if (period != 30.0) begin errors = errors + 1; if (errors <= 5) $display("  clk_out period %0.1f ns, expected 30.0", period); end
    end
    t_rise = $realtime; rises = rises + 1;
  end
  always @(negedge clk_out) if (rises > 0) begin
    high = $realtime - t_rise;
    if (high != 15.0) begin errors = errors + 1; if (errors <= 5) $display("  clk_out high for %0.1f ns, expected 15.0 (50%% duty cycle)", high); end
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    #(600);
    $display("clk_out: %0d rising edges, period %0.1f ns, high for %0.1f ns", rises, period, high);
    if (errors == 0 && rises >= 19) $display("PASS: clk_out is clk divided by 3 with a 50%% duty cycle");
    else                            $display("FAIL: %0d errors, %0d rising edges", errors, rises);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Clock divider by 3 with a 50% duty cycle.
// A mod-3 counter on the rising edge makes a 1/3-duty pulse; a copy delayed by half a
// clock (on the falling edge) is ORed in to stretch it to exactly 1.5 clock periods.
module clk_div3 (
  input  wire clk, rst_n,
  output wire clk_out
);
  reg [1:0] cnt;
  reg       p, n;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) cnt <= 2'd0;
    else        cnt <= (cnt == 2'd2) ? 2'd0 : cnt + 1'b1;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) p <= 1'b0;
    else        p <= (cnt == 2'd2);          // high for one clk period out of three
  always @(negedge clk or negedge rst_n)
    if (!rst_n) n <= 1'b0;
    else        n <= p;                      // the same, half a period later
  assign clk_out = p | n;
endmodule
`}},{id:"p4-fifo",group:"part4",tag:"Part 4 \xB7 Lab 13",title:"Single-clock FIFO",std:"2005",design:`\`timescale 1ns/10ps
// Synchronous FIFO: 8 words of 8 bits, one clock.
//   A write (wr_en) is ignored when full; a read (rd_en) is ignored when empty.
//   dout shows the word read on the clock edge after rd_en.
module sync_fifo (
  input  wire       clk, rst_n,
  input  wire       wr_en, rd_en,
  input  wire [7:0] din,
  output reg  [7:0] dout,
  output wire       full, empty
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg wr_en = 0, rd_en = 0; reg [7:0] din = 0;
  wire [7:0] dout; wire full, empty;
  integer errors = 0, checks = 0, cyc;
  sync_fifo dut (.clk(clk), .rst_n(rst_n), .wr_en(wr_en), .rd_en(rd_en), .din(din), .dout(dout), .full(full), .empty(empty));
  always #5 clk = ~clk;
  // reference model
  reg [7:0] q [0:15]; integer head = 0, tail = 0; reg [7:0] mout;
  wire mfull = (tail - head == 8), mempty = (tail == head);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin head <= 0; tail <= 0; mout <= 0; end
    else begin
      if (wr_en && !mfull) begin q[tail % 16] <= din; tail <= tail + 1; end
      if (rd_en && !mempty) begin mout <= q[head % 16]; head <= head + 1; end
    end
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if ({dout, full, empty} !== {mout, mfull, mempty}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %0d, expected %0d", $time, {dout, full, empty}, {mout, mfull, mempty}); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 300; cyc = cyc + 1) begin
      @(negedge clk);
      wr_en = ($random % 3 != 0) ^ (cyc > 100 && cyc < 140); rd_en = ($random % 3 != 0) ^ (cyc > 50 && cyc < 80); din = $random;
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 300 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Synchronous FIFO: 8 words of 8 bits, one clock.
//   A write (wr_en) is ignored when full; a read (rd_en) is ignored when empty.
//   dout shows the word read on the clock edge after rd_en.
module sync_fifo (
  input  wire       clk, rst_n,
  input  wire       wr_en, rd_en,
  input  wire [7:0] din,
  output reg  [7:0] dout,
  output wire       full, empty
);
  reg [7:0] mem [0:7];
  reg [2:0] wptr, rptr;
  reg [3:0] count;
  wire do_wr = wr_en && !full;
  wire do_rd = rd_en && !empty;
  assign full  = (count == 4'd8);
  assign empty = (count == 4'd0);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin
      wptr <= 0; rptr <= 0; count <= 0; dout <= 8'd0;
    end else begin
      if (do_wr) begin mem[wptr] <= din; wptr <= wptr + 1'b1; end
      if (do_rd) begin dout <= mem[rptr]; rptr <= rptr + 1'b1; end
      count <= count + do_wr - do_rd;
    end
endmodule
`}},{id:"p4-afifo",group:"part4",tag:"Part 4 \xB7 Lab 14",title:"Dual-clock FIFO",std:"2005",design:`\`timescale 1ns/10ps
// Dual-clock (asynchronous) FIFO: 8 words of 8 bits. Written in wclk, read in rclk.
// The pointers cross between the clocks as Gray codes through 2-flop synchronizers.
// rdata always shows the oldest word; rinc takes it (ignored when rempty).
module async_fifo (
  input  wire       wclk, wrst_n, winc,
  input  wire [7:0] wdata,
  output reg        wfull,
  input  wire       rclk, rrst_n, rinc,
  output wire [7:0] rdata,
  output reg        rempty
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg wclk = 0, rclk = 0, wrst_n = 0, rrst_n = 0, winc = 0, rinc = 0;
  reg [7:0] wdata = 0; wire [7:0] rdata; wire wfull, rempty;
  reg [7:0] model [0:1023]; integer nw = 0, nr = 0, errors = 0, k;
  async_fifo dut (.wclk(wclk), .wrst_n(wrst_n), .winc(winc), .wdata(wdata), .wfull(wfull),
                  .rclk(rclk), .rrst_n(rrst_n), .rinc(rinc), .rdata(rdata), .rempty(rempty));
  always #3.5 wclk = ~wclk;                   // 7 ns write clock
  always #5.5 rclk = ~rclk;                   // 11 ns read clock
  always @(posedge wclk) if (wrst_n && winc && !wfull) begin
    if (nw - nr >= 8) begin errors = errors + 1; $display("  overflow: a write while 8 words are stored"); end
    model[nw] = wdata; nw = nw + 1;
  end
  always @(posedge rclk) if (rrst_n && rinc && !rempty) begin
    if (nr >= nw) begin errors = errors + 1; $display("  underflow: a read from an empty FIFO"); end
    else if (rdata !== model[nr]) begin errors = errors + 1; if (errors <= 5) $display("  read %0d: got %h, expected %h", nr, rdata, model[nr]); end
    nr = nr + 1;
  end
  always @(negedge wclk) begin winc = ($random % 4 != 0) && nw < 200; wdata = $random; end
  always @(negedge rclk) rinc = ($random % 3 != 0) ^ ($time > 600 && $time < 1200);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #20 wrst_n = 1; rrst_n = 1;
    wait (nw == 200 && nr == 200);
    #50;
    $display("wrote %0d words, read %0d words in order", nw, nr);
    if (errors == 0) $display("PASS: every word came out once, in order, with no overflow or underflow");
    else             $display("FAIL: %0d errors", errors);
    $finish;
  end
  initial begin #100000; $display("FAIL: timeout, wrote %0d read %0d", nw, nr); $finish; end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Dual-clock (asynchronous) FIFO: 8 words of 8 bits. Written in wclk, read in rclk.
// The pointers cross between the clocks as Gray codes through 2-flop synchronizers.
// rdata always shows the oldest word; rinc takes it (ignored when rempty).
module async_fifo (
  input  wire       wclk, wrst_n, winc,
  input  wire [7:0] wdata,
  output reg        wfull,
  input  wire       rclk, rrst_n, rinc,
  output wire [7:0] rdata,
  output reg        rempty
);
  reg  [7:0] mem [0:7];
  reg  [3:0] wbin, wptr, rbin, rptr;           // binary and Gray pointers, one extra bit
  reg  [3:0] wq1_rptr, wq2_rptr, rq1_wptr, rq2_wptr;
  wire [3:0] wbin_n = wbin + (winc & ~wfull);
  wire [3:0] wgray_n = (wbin_n >> 1) ^ wbin_n;
  wire [3:0] rbin_n = rbin + (rinc & ~rempty);
  wire [3:0] rgray_n = (rbin_n >> 1) ^ rbin_n;

  always @(posedge wclk) if (winc && !wfull) mem[wbin[2:0]] <= wdata;
  assign rdata = mem[rbin[2:0]];

  always @(posedge wclk or negedge wrst_n)
    if (!wrst_n) begin wbin <= 0; wptr <= 0; wfull <= 0; wq1_rptr <= 0; wq2_rptr <= 0; end
    else begin
      wbin <= wbin_n; wptr <= wgray_n;
      {wq2_rptr, wq1_rptr} <= {wq1_rptr, rptr};
      wfull <= (wgray_n == {~wq2_rptr[3:2], wq2_rptr[1:0]});
    end

  always @(posedge rclk or negedge rrst_n)
    if (!rrst_n) begin rbin <= 0; rptr <= 0; rempty <= 1; rq1_wptr <= 0; rq2_wptr <= 0; end
    else begin
      rbin <= rbin_n; rptr <= rgray_n;
      {rq2_wptr, rq1_wptr} <= {rq1_wptr, wptr};
      rempty <= (rgray_n == rq2_wptr);
    end
endmodule
`}},{id:"p4-mealy-nov",group:"part4",tag:"Part 4 \xB7 Lab 15",title:"Mealy 101 detector, non-overlapping",std:"2005",design:`\`timescale 1ns/10ps
// Mealy 101 sequence detector, non-overlapping.
// y = 1 while x is the last 1 of the pattern 1-0-1 (Mealy: y depends on the state AND x).
// After a detection the search starts again from scratch: in 10101 only the first 101 counts.
module seq101_mealy_nov (
  input  wire clk, rst_n, x,
  output wire y
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0, x = 0;
  wire y;
  reg [1:0] hist; integer since; reg det, my;     // reference model
  integer errors = 0, found = 0, cyc;
  seq101_mealy_nov dut (.clk(clk), .rst_n(rst_n), .x(x), .y(y));
  always #5 clk = ~clk;
  always @(*) det = (since >= 2) && hist == 2'b10 && x;      // x completes 1-0-1 now
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin hist <= 0; since <= 0; my <= 0; end
    else begin
      my <= det;
      if (det && 1) begin hist <= 0; since <= 0; end   // non-overlapping: start again
      else begin hist <= {hist[0], x}; since <= since + 1; end
      
    end
  always @(negedge clk) if (rst_n) begin
    #4;
    if (y !== det) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: y=%b, expected %b", $time, y, det); end
    if (y === 1'b1) found = found + 1;
  end
  reg [0:15] demo = 16'b1010_1101_0110_1010;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk); rst_n = 1;
    for (cyc = 0; cyc < 216; cyc = cyc + 1) begin
      @(negedge clk) x = (cyc < 16) ? demo[cyc] : $random;
    end
    @(negedge clk);
    $display("input began 1010110101101010 ...; y was 1 for %0d cycles", found);
    if (errors == 0) $display("PASS: 216 input bits checked, the design matches the model");
    else             $display("FAIL: %0d wrong outputs", errors);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Mealy 101 sequence detector, non-overlapping.
// y = 1 while x is the last 1 of the pattern 1-0-1 (Mealy: y depends on the state AND x).
// After a detection the search starts again from scratch: in 10101 only the first 101 counts.
module seq101_mealy_nov (
  input  wire clk, rst_n, x,
  output wire y
);
  localparam S0 = 2'd0, S1 = 2'd1, S10 = 2'd2;    // nothing yet, seen 1, seen 10
  reg [1:0] state, next;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) state <= S0;
    else        state <= next;
  always @(*)
    case (state)
      S0:      next = x ? S1 : S0;
      S1:      next = x ? S1 : S10;
      S10:     next = x ? S0 : S0;      // 101 found: start again
      default: next = S0;
    endcase
  assign y = (state == S10) && x;
endmodule
`}},{id:"p4-mealy-ov",group:"part4",tag:"Part 4 \xB7 Lab 16",title:"Mealy 101 detector, overlapping",std:"2005",design:`\`timescale 1ns/10ps
// Mealy 101 sequence detector, overlapping.
// y = 1 while x is the last 1 of 1-0-1. That final 1 can start the next pattern: 10101 gives two detections.
module seq101_mealy_ov (
  input  wire clk, rst_n, x,
  output wire y
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0, x = 0;
  wire y;
  reg [1:0] hist; integer since; reg det, my;     // reference model
  integer errors = 0, found = 0, cyc;
  seq101_mealy_ov dut (.clk(clk), .rst_n(rst_n), .x(x), .y(y));
  always #5 clk = ~clk;
  always @(*) det = (since >= 2) && hist == 2'b10 && x;      // x completes 1-0-1 now
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin hist <= 0; since <= 0; my <= 0; end
    else begin
      my <= det;
      if (det && 0) begin hist <= 0; since <= 0; end   // non-overlapping: start again
      else begin hist <= {hist[0], x}; since <= since + 1; end
      if (det) begin hist <= 2'b01; since <= 1; end
    end
  always @(negedge clk) if (rst_n) begin
    #4;
    if (y !== det) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: y=%b, expected %b", $time, y, det); end
    if (y === 1'b1) found = found + 1;
  end
  reg [0:15] demo = 16'b1010_1101_0110_1010;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk); rst_n = 1;
    for (cyc = 0; cyc < 216; cyc = cyc + 1) begin
      @(negedge clk) x = (cyc < 16) ? demo[cyc] : $random;
    end
    @(negedge clk);
    $display("input began 1010110101101010 ...; y was 1 for %0d cycles", found);
    if (errors == 0) $display("PASS: 216 input bits checked, the design matches the model");
    else             $display("FAIL: %0d wrong outputs", errors);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Mealy 101 sequence detector, overlapping.
// y = 1 while x is the last 1 of 1-0-1. That final 1 can start the next pattern: 10101 gives two detections.
module seq101_mealy_ov (
  input  wire clk, rst_n, x,
  output wire y
);
  localparam S0 = 2'd0, S1 = 2'd1, S10 = 2'd2;
  reg [1:0] state, next;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) state <= S0;
    else        state <= next;
  always @(*)
    case (state)
      S0:      next = x ? S1 : S0;
      S1:      next = x ? S1 : S10;
      S10:     next = x ? S1 : S0;      // the last 1 is also the first 1 of the next 101
      default: next = S0;
    endcase
  assign y = (state == S10) && x;
endmodule
`}},{id:"p4-moore-nov",group:"part4",tag:"Part 4 \xB7 Lab 17",title:"Moore 101 detector, non-overlapping",std:"2005",design:`\`timescale 1ns/10ps
// Moore 101 sequence detector, non-overlapping.
// y depends on the state only: it is 1 for one clock after the last 1 of 1-0-1 was clocked in.
module seq101_moore_nov (
  input  wire clk, rst_n, x,
  output wire y
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0, x = 0;
  wire y;
  reg [1:0] hist; integer since; reg det, my;     // reference model
  integer errors = 0, found = 0, cyc;
  seq101_moore_nov dut (.clk(clk), .rst_n(rst_n), .x(x), .y(y));
  always #5 clk = ~clk;
  always @(*) det = (since >= 2) && hist == 2'b10 && x;      // x completes 1-0-1 now
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin hist <= 0; since <= 0; my <= 0; end
    else begin
      my <= det;
      if (det && 1) begin hist <= 0; since <= 0; end   // non-overlapping: start again
      else begin hist <= {hist[0], x}; since <= since + 1; end
      
    end
  always @(negedge clk) if (rst_n) begin
    #4;
    if (y !== my) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: y=%b, expected %b", $time, y, my); end
    if (y === 1'b1) found = found + 1;
  end
  reg [0:15] demo = 16'b1010_1101_0110_1010;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk); rst_n = 1;
    for (cyc = 0; cyc < 216; cyc = cyc + 1) begin
      @(negedge clk) x = (cyc < 16) ? demo[cyc] : $random;
    end
    @(negedge clk);
    $display("input began 1010110101101010 ...; y was 1 for %0d cycles", found);
    if (errors == 0) $display("PASS: 216 input bits checked, the design matches the model");
    else             $display("FAIL: %0d wrong outputs", errors);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Moore 101 sequence detector, non-overlapping.
// y depends on the state only: it is 1 for one clock after the last 1 of 1-0-1 was clocked in.
module seq101_moore_nov (
  input  wire clk, rst_n, x,
  output wire y
);
  localparam S0 = 2'd0, S1 = 2'd1, S10 = 2'd2, S101 = 2'd3;
  reg [1:0] state, next;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) state <= S0;
    else        state <= next;
  always @(*)
    case (state)
      S0:   next = x ? S1 : S0;
      S1:   next = x ? S1 : S10;
      S10:  next = x ? S101 : S0;
      S101: next = x ? S1 : S0;         // start again: the last 1 does not count
      default: next = S0;
    endcase
  assign y = (state == S101);
endmodule
`}},{id:"p4-moore-ov",group:"part4",tag:"Part 4 \xB7 Lab 18",title:"Moore 101 detector, overlapping",std:"2005",design:`\`timescale 1ns/10ps
// Moore 101 sequence detector, overlapping.
// y = 1 for one clock after 1-0-1 was clocked in; the last 1 can start the next pattern.
module seq101_moore_ov (
  input  wire clk, rst_n, x,
  output wire y
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0, x = 0;
  wire y;
  reg [1:0] hist; integer since; reg det, my;     // reference model
  integer errors = 0, found = 0, cyc;
  seq101_moore_ov dut (.clk(clk), .rst_n(rst_n), .x(x), .y(y));
  always #5 clk = ~clk;
  always @(*) det = (since >= 2) && hist == 2'b10 && x;      // x completes 1-0-1 now
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin hist <= 0; since <= 0; my <= 0; end
    else begin
      my <= det;
      if (det && 0) begin hist <= 0; since <= 0; end   // non-overlapping: start again
      else begin hist <= {hist[0], x}; since <= since + 1; end
      if (det) begin hist <= 2'b01; since <= 1; end
    end
  always @(negedge clk) if (rst_n) begin
    #4;
    if (y !== my) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: y=%b, expected %b", $time, y, my); end
    if (y === 1'b1) found = found + 1;
  end
  reg [0:15] demo = 16'b1010_1101_0110_1010;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk); rst_n = 1;
    for (cyc = 0; cyc < 216; cyc = cyc + 1) begin
      @(negedge clk) x = (cyc < 16) ? demo[cyc] : $random;
    end
    @(negedge clk);
    $display("input began 1010110101101010 ...; y was 1 for %0d cycles", found);
    if (errors == 0) $display("PASS: 216 input bits checked, the design matches the model");
    else             $display("FAIL: %0d wrong outputs", errors);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Moore 101 sequence detector, overlapping.
// y = 1 for one clock after 1-0-1 was clocked in; the last 1 can start the next pattern.
module seq101_moore_ov (
  input  wire clk, rst_n, x,
  output wire y
);
  localparam S0 = 2'd0, S1 = 2'd1, S10 = 2'd2, S101 = 2'd3;
  reg [1:0] state, next;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) state <= S0;
    else        state <= next;
  always @(*)
    case (state)
      S0:   next = x ? S1 : S0;
      S1:   next = x ? S1 : S10;
      S10:  next = x ? S101 : S0;
      S101: next = x ? S1 : S10;        // the last 1 counts as the first 1 of the next 101
      default: next = S0;
    endcase
  assign y = (state == S101);
endmodule
`}},{id:"s01-reg",group:"sv",tag:"SV \xB7 Lab 1",title:"Register",std:"2012",design:`// 8-bit register with enable and asynchronous active-low reset, written with SystemVerilog constructs:
// timeunit/timeprecision, ANSI ports, logic, always_ff.
module register (
  output logic [7:0] out,
  input  logic [7:0] data,
  input  logic       enable,
  input  logic       clk,
  input  logic       rst_
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] out, data; logic enable, clk = 0, rst_ = 1;
  logic [7:0] model;
  int errors = 0, checks = 0;
  register dut (.out(out), .data(data), .enable(enable), .clk(clk), .rst_(rst_));
  always #5 clk = ~clk;
  always_ff @(posedge clk or negedge rst_) if (!rst_) model <= '0; else if (enable) model <= data;
  task automatic check();
    checks++;
    if (out !== model) begin errors++; if (errors <= 5) $display("  at %0t: enable=%b rst_=%b data=%h out=%h, expected %h", $time, enable, rst_, data, out, model); end
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #1 rst_ = 0; #10 rst_ = 1;
    repeat (100) begin
      @(negedge clk); data = $urandom; enable = $urandom_range(0, 1);
      if ($urandom_range(0, 30) == 0) begin #2 rst_ = 0; #1 check(); rst_ = 1; end
      @(posedge clk); #1 check();
    end
    $display("time=%0t enable=%b data=%h out=%h", $time, enable, data, out);
    if (errors == 0) $display("PASS: REGISTER TEST PASSED (%0d checks)", checks);
    else             $display("FAIL: REGISTER TEST FAILED, %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`// 8-bit register with enable and asynchronous active-low reset, written with SystemVerilog constructs:
// timeunit/timeprecision, ANSI ports, logic, always_ff.
module register (
  output logic [7:0] out,
  input  logic [7:0] data,
  input  logic       enable,
  input  logic       clk,
  input  logic       rst_
);
  timeunit 1ns; timeprecision 100ps;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_)       out <= '0;
    else if (enable) out <= data;
endmodule
`}},{id:"s02-mux",group:"sv",tag:"SV \xB7 Lab 2",title:"Parameterized multiplexer",std:"2012",design:`// Parameterized 2:1 multiplexer (default width 1): out = sel_a ? in_a : in_b.
// Uses always_comb and unique case, with a default that drives X for an unknown select.
module scale_mux #(parameter int WIDTH = 1) (
  output logic [WIDTH-1:0] out,
  input  logic [WIDTH-1:0] in_a, in_b,
  input  logic             sel_a
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] in_a, in_b, out8; logic sel_a; logic o1;
  int errors = 0;
  scale_mux #(.WIDTH(8)) dut8 (.out(out8), .in_a(in_a), .in_b(in_b), .sel_a(sel_a));
  scale_mux               dut1 (.out(o1),   .in_a(in_a[0]), .in_b(in_b[0]), .sel_a(sel_a));
  initial begin
    $timeformat(-9, 0, " ns", 6); $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int i = 0; i < 8; i++) begin
      {in_a, in_b, sel_a} = {{8{i[2]}}, {8{i[1]}}, i[0]}; #1;
      $display("%t in_a=%h in_b=%h sel_a=%b out=%h", $time, in_a, in_b, sel_a, out8);
      if (out8 !== (sel_a ? in_a : in_b)) errors++;
    end
    repeat (200) begin
      in_a = $urandom; in_b = $urandom; sel_a = $urandom; #1;
      if (out8 !== (sel_a ? in_a : in_b) || o1 !== (sel_a ? in_a[0] : in_b[0])) errors++;
    end
    sel_a = 1'bx; #1;
    if (out8 !== 8'hxx) begin errors++; $display("  sel_a = x should give out = x (the default branch)"); end
    if (errors == 0) $display("PASS: MUX TEST PASSED (8-bit and default 1-bit instances)");
    else             $display("FAIL: MUX TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Parameterized 2:1 multiplexer (default width 1): out = sel_a ? in_a : in_b.
// Uses always_comb and unique case, with a default that drives X for an unknown select.
module scale_mux #(parameter int WIDTH = 1) (
  output logic [WIDTH-1:0] out,
  input  logic [WIDTH-1:0] in_a, in_b,
  input  logic             sel_a
);
  timeunit 1ns; timeprecision 100ps;

  always_comb
    unique case (sel_a)
      1'b1:    out = in_a;
      1'b0:    out = in_b;
      default: out = 'x;
    endcase
endmodule
`}},{id:"s03-cnt",group:"sv",tag:"SV \xB7 Lab 3",title:"Loadable counter",std:"2012",design:`// 5-bit loadable counter with enable and asynchronous active-low reset.
//   load = 1: count <= data; else enable = 1: count increments (wraps from 31 to 0); else hold.
module counter (
  output logic [4:0] count,
  input  logic [4:0] data,
  input  logic       load, enable, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  logic [4:0] count, data; logic load = 0, enable = 0, clk = 1, rst_;
  logic [4:0] model; int errors = 0;
  counter dut (.count(count), .data(data), .load(load), .enable(enable), .clk(clk), .rst_(rst_));
  always #5 clk = ~clk;
  always_ff @(posedge clk or negedge rst_) if (!rst_) model <= '0; else if (load) model <= data; else if (enable) model <= model + 1'b1;
  always @(negedge clk) if (rst_ === 1'b1 && count !== model) begin errors++; if (errors <= 5) $display("  at %0t: count=%h, expected %h", $time, count, model); end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #5 rst_ = 0; #10 rst_ = 1; enable = 1;
    repeat (40) @(negedge clk);                      // count past 31 to check the wrap
    repeat (150) begin @(negedge clk); load = ($urandom_range(0, 7) == 0); enable = $urandom; data = $urandom; end
    @(negedge clk);
    if (errors == 0) $display("PASS: COUNTER TEST PASSED");
    else             $display("FAIL: COUNTER TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 5-bit loadable counter with enable and asynchronous active-low reset.
//   load = 1: count <= data; else enable = 1: count increments (wraps from 31 to 0); else hold.
module counter (
  output logic [4:0] count,
  input  logic [4:0] data,
  input  logic       load, enable, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_)       count <= '0;
    else if (load)   count <= data;
    else if (enable) count <= count + 1'b1;
endmodule
`}},{id:"s04-ctrl",group:"sv",tag:"SV \xB7 Lab 4",title:"Sequence controller (FSM)",std:"2012",design:`// Types shared by the VeriRISC CPU blocks
package typedefs;
  // 3-bit operation codes of the VeriRISC CPU
  typedef enum logic [2:0] {HLT, SKZ, ADD, AND, XOR, LDA, STO, JMP} opcode_t;
  // the 8 controller states, in order
  typedef enum logic [2:0] {INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE} state_t;
endpackage
// VeriRISC sequence controller: a Mealy state machine that steps through 8 states, one per clock,
// from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
// fetch is 1 in the first four states, while the instruction is read (it selects the program counter
// as the memory address).
module control import typedefs::*; (
  output logic    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr,
  output logic    fetch,
  output state_t  state,
  input  opcode_t opcode,
  input  logic    zero, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`// Checks every state, for every opcode and both values of zero, against the output table.
module tb;
  timeunit 1ns; timeprecision 100ps;
  import typedefs::*;
  logic mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch, zero, clk = 0, rst_;
  opcode_t opcode; state_t state;
  int errors = 0;
  control dut (.*);
  always #5 clk = ~clk;

  function automatic string sname(state_t x); return x.name(); endfunction
  function automatic string oname(opcode_t x); return x.name(); endfunction
  function automatic logic [7:0] expected(state_t s, opcode_t op, logic z);
    logic a; a = (op == ADD) || (op == AND) || (op == XOR) || (op == LDA);
    case (s)                   // {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch}
      INST_ADDR:  return 8'b0000000_1;
      INST_FETCH: return 8'b1000000_1;
      INST_LOAD:  return 8'b1100000_1;
      IDLE:       return 8'b1100000_1;
      OP_ADDR:    return {1'b0, 1'b0, op == HLT, 1'b1, 3'b000, 1'b0};
      OP_FETCH:   return {a, 6'b000000, 1'b0};
      ALU_OP:     return {a, 1'b0, 1'b0, (op == SKZ) && z, a, op == JMP, 1'b0, 1'b0};
      default:    return {a, 1'b0, 1'b0, op == JMP, 1'b0, op == JMP, op == STO, 1'b0};
    endcase
  endfunction

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    opcode = HLT; zero = 0;
    rst_ = 0; #12 rst_ = 1;
    if (state !== INST_ADDR) begin errors++; $display("  after reset the state is %s, expected INST_ADDR", sname(state)); end
    for (int i = 0; i < 16; i++) begin                       // 16 passes through the 8 states
      opcode = opcode_t'(i % 8); zero = i / 8;
      repeat (8) begin
        @(negedge clk); #1;
        if ({mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch} !== expected(state, opcode, zero)) begin
          errors++;
          if (errors <= 5) $display("  state %s opcode %s zero %b: {mem_rd,load_ir,halt,inc_pc,load_ac,load_pc,mem_wr,fetch} = %b, should be %b",
                                    sname(state), oname(opcode), zero, {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch}, expected(state, opcode, zero));
        end
      end
    end
    if (errors == 0) $display("PASS: CONTROLLER TEST PASSED (128 state/opcode/zero combinations)");
    else             $display("FAIL: CONTROLLER TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Types shared by the VeriRISC CPU blocks
package typedefs;
  // 3-bit operation codes of the VeriRISC CPU
  typedef enum logic [2:0] {HLT, SKZ, ADD, AND, XOR, LDA, STO, JMP} opcode_t;
  // the 8 controller states, in order
  typedef enum logic [2:0] {INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE} state_t;
endpackage
// VeriRISC sequence controller: a Mealy state machine that steps through 8 states, one per clock,
// from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
// fetch is 1 in the first four states, while the instruction is read (it selects the program counter
// as the memory address).
module control import typedefs::*; (
  output logic    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr,
  output logic    fetch,
  output state_t  state,
  input  opcode_t opcode,
  input  logic    zero, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;
  logic aluop;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_) state <= INST_ADDR;
    else       state <= state.next();         // STORE wraps back to INST_ADDR

  assign aluop = (opcode == ADD) || (opcode == AND) || (opcode == XOR) || (opcode == LDA);
  assign fetch = (state == INST_ADDR) || (state == INST_FETCH) || (state == INST_LOAD) || (state == IDLE);

  always_comb begin
    {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr} = '0;
    unique case (state)
      INST_ADDR:  ;
      INST_FETCH: mem_rd = 1;
      INST_LOAD:  begin mem_rd = 1; load_ir = 1; end
      IDLE:       begin mem_rd = 1; load_ir = 1; end
      OP_ADDR:    begin halt = (opcode == HLT); inc_pc = 1; end
      OP_FETCH:   mem_rd = aluop;
      ALU_OP:     begin mem_rd = aluop; inc_pc = (opcode == SKZ) && zero; load_ac = aluop; load_pc = (opcode == JMP); end
      STORE:      begin mem_rd = aluop; inc_pc = (opcode == JMP); load_pc = (opcode == JMP); mem_wr = (opcode == STO); end
      default:    {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr} = 'x;
    endcase
  end
endmodule
`}},{id:"s05-alu",group:"sv",tag:"SV \xB7 Lab 5",title:"ALU",std:"2012",design:`// Types shared by the VeriRISC CPU blocks
package typedefs;
  // 3-bit operation codes of the VeriRISC CPU
  typedef enum logic [2:0] {HLT, SKZ, ADD, AND, XOR, LDA, STO, JMP} opcode_t;
  // the 8 controller states, in order
  typedef enum logic [2:0] {INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE} state_t;
endpackage
// VeriRISC ALU. zero = 1 when accum is 0 (combinational).
// out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
//   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data & accum    XOR: data ^ accum    LDA: data
module alu import typedefs::*; (
  output logic [7:0] out,
  output logic       zero,
  input  logic [7:0] accum, data,
  input  opcode_t    opcode,
  input  logic       clk
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  import typedefs::*;
  logic [7:0] out, accum, data; logic zero, clk = 1;
  opcode_t opcode; logic [7:0] exp; int errors = 0;
  alu dut (.out(out), .zero(zero), .accum(accum), .data(data), .opcode(opcode), .clk(clk));
  always #5 clk = ~clk;                      // falling edges at 5, 15, 25, ...
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int i = 0; i < 400; i++) begin
      @(posedge clk); accum = (i % 37 == 0) ? 8'd0 : $urandom; data = $urandom; opcode = opcode_t'(i % 8);
      #1 if (zero !== (accum == 0)) begin errors++; if (errors <= 5) $display("  zero=%b for accum=%h", zero, accum); end
      case (opcode) ADD: exp = data + accum; AND: exp = data & accum; XOR: exp = data ^ accum; LDA: exp = data; default: exp = accum; endcase
      @(negedge clk); #1;
      if (out !== exp) begin errors++; if (errors <= 5) $display("  opcode %0d accum=%h data=%h: out=%h, expected %h", opcode, accum, data, out, exp); end
    end
    if (errors == 0) $display("PASS: ALU TEST PASSED (400 operations, all 8 opcodes)");
    else             $display("FAIL: ALU TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Types shared by the VeriRISC CPU blocks
package typedefs;
  // 3-bit operation codes of the VeriRISC CPU
  typedef enum logic [2:0] {HLT, SKZ, ADD, AND, XOR, LDA, STO, JMP} opcode_t;
  // the 8 controller states, in order
  typedef enum logic [2:0] {INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE} state_t;
endpackage
// VeriRISC ALU. zero = 1 when accum is 0 (combinational).
// out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
//   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data & accum    XOR: data ^ accum    LDA: data
module alu import typedefs::*; (
  output logic [7:0] out,
  output logic       zero,
  input  logic [7:0] accum, data,
  input  opcode_t    opcode,
  input  logic       clk
);
  timeunit 1ns; timeprecision 100ps;

  always_comb zero = (accum == 8'd0);

  always_ff @(negedge clk)
    unique case (opcode)
      ADD:     out <= data + accum;
      AND:     out <= data & accum;
      XOR:     out <= data ^ accum;
      LDA:     out <= data;
      default: out <= accum;            // HLT, SKZ, STO, JMP
    endcase
endmodule
`}},{id:"s06-memtb",group:"sv",tag:"SV \xB7 Lab 6",title:"Memory testbench with tasks",std:"2012",design:`// The memory is given (do not change it). Set BUG to 1 to break it on purpose: your testbench
// must then report errors.
//   32 x 8, synchronous: write = 1 stores data_in at addr; read = 1 puts memory[addr] on data_out.
module mem #(parameter bit BUG = 0) (
  input  logic       clk, read, write,
  input  logic [4:0] addr,
  input  logic [7:0] data_in,
  output logic [7:0] data_out
);
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] memory [0:31];
  always_ff @(posedge clk) begin
    if (write) memory[BUG ? {1'b0, addr[3:0]} : addr] <= data_in;   // BUG: address bit 4 is lost
    if (read)  data_out <= memory[addr];
  end
endmodule
`,tb:`// Complete this memory testbench. The memory is in the Design pane.
//   1. task write_mem(address, data, debug = 0): drive write, addr and data_in on the falling edge
//   2. task read_mem(address, output data, debug = 0): drive read and addr, return data_out
//   3. void function printstatus(status): print "PASS: ..." when status == 0, else "FAIL: ..."
//   4. Test 1: write 0 to every address, read back and count errors
//   5. Test 2: write data = address to every address, read back and count errors
// Then set BUG to 1 in the design: your testbench must report FAIL.
module tb;
  timeunit 1ns; timeprecision 100ps;
  logic clk = 0, read = 0, write = 0;
  logic [4:0] addr; logic [7:0] data_in, data_out;
  int errors = 0;
  mem dut (.clk(clk), .read(read), .write(write), .addr(addr), .data_in(data_in), .data_out(data_out));
  always #5 clk = ~clk;

  // TODO: tasks write_mem and read_mem, function printstatus

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // TODO: the two tests, then printstatus(errors)
    #100;
    $finish;
  end
endmodule
`,solution:{tb:`// Memory testbench with SystemVerilog tasks: default argument values and a void function.
module tb;
  timeunit 1ns; timeprecision 100ps;
  logic clk = 0, read = 0, write = 0;
  logic [4:0] addr; logic [7:0] data_in, data_out;
  int errors = 0;
  mem dut (.clk(clk), .read(read), .write(write), .addr(addr), .data_in(data_in), .data_out(data_out));
  always #5 clk = ~clk;

  // drive on the falling edge so the memory samples stable values on the rising edge
  task automatic write_mem(input logic [4:0] a, input logic [7:0] d, input bit debug = 0);
    @(negedge clk); write = 1; read = 0; addr = a; data_in = d;
    @(negedge clk); write = 0;
    if (debug) $display("write: memory[%0d] = %h", a, d);
  endtask

  task automatic read_mem(input logic [4:0] a, output logic [7:0] d, input bit debug = 0);
    @(negedge clk); read = 1; write = 0; addr = a;
    @(negedge clk); read = 0;
    d = data_out;                                 // updated on the rising edge in between
    if (debug) $display("read:  memory[%0d] = %h", a, d);
  endtask

  function automatic void printstatus(input int status);
    if (status == 0) $display("PASS: MEMORY TEST PASSED");
    else             $display("FAIL: MEMORY TEST FAILED with %0d errors", status);
  endfunction

  logic [7:0] rdata;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("Clearing the memory");
    for (int i = 0; i < 32; i++) write_mem(i, 8'h00);
    for (int i = 0; i < 32; i++) begin read_mem(i, rdata); if (rdata !== 8'h00) errors++; end
    $display("Data = address test");
    for (int i = 0; i < 32; i++) write_mem(i, i, i < 2);          // debug output for the first two
    for (int i = 0; i < 32; i++) begin read_mem(i, rdata, i < 2); if (rdata !== i) errors++; end
    printstatus(errors);
    $finish;
  end
endmodule
`}},{id:"s07-struct",group:"sv",tag:"SV \xB7 Lab 7",title:"Bundling a bus with a packed struct",std:"2012",design:`// A memory whose request signals travel as one bundle: a packed struct from a package.
// 1. In package mem_pkg, declare a packed struct mem_req_t with fields, in this order:
//      read (1 bit), write (1 bit), addr (5 bits), data (8 bits)
// 2. Write module mem_s: on the rising edge of clk, req.write stores req.data at req.addr,
//    and req.read puts memory[req.addr] on data_out.
package mem_pkg;
  typedef logic [14:0] mem_req_t;     // TODO: replace with the packed struct
endpackage

module mem_s import mem_pkg::*; (
  input  logic       clk,
  input  mem_req_t   req,
  output logic [7:0] data_out
);
  timeunit 1ns; timeprecision 100ps;
  // TODO: the memory array and the always_ff block

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  import mem_pkg::*;
  logic clk = 0; mem_req_t req; logic [7:0] data_out;
  logic [7:0] model [0:31]; int errors = 0;
  mem_s dut (.clk(clk), .req(req), .data_out(data_out));
  always #5 clk = ~clk;
  // the testbench writes the bus as a plain vector {read, write, addr, data}, so the
  // struct fields must be declared in exactly that order
  function automatic mem_req_t pack(logic rd, logic wr, logic [4:0] a, logic [7:0] d);
    return mem_req_t'({rd, wr, a, d});
  endfunction
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    if ($bits(mem_req_t) != 15) begin errors++; $display("  mem_req_t is %0d bits, expected 15", $bits(mem_req_t)); end
    req = '0;
    for (int i = 0; i < 32; i++) begin
      @(negedge clk); req = pack(0, 1, i, 8'(i * 7 + 3)); model[i] = 8'(i * 7 + 3);
    end
    @(negedge clk); req = '0;
    for (int i = 0; i < 32; i++) begin
      @(negedge clk); req = pack(1, 0, 31 - i, 8'h00);
      @(negedge clk); req = '0;
      if (data_out !== model[31 - i]) begin errors++; if (errors <= 5) $display("  read %0d: got %h, expected %h", 31 - i, data_out, model[31 - i]); end
    end
    if (errors == 0) $display("PASS: MEMORY BUS TEST PASSED");
    else             $display("FAIL: MEMORY BUS TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// A memory whose request signals travel as one bundle: a packed struct from a package.
// One port carries read, write, address and data together, and every module that uses the
// bus agrees on its layout. (SystemVerilog interfaces do the same with modports; the
// simulator here, Icarus Verilog 12, does not support interface ports yet.)
package mem_pkg;
  typedef struct packed {
    logic       read;
    logic       write;
    logic [4:0] addr;
    logic [7:0] data;
  } mem_req_t;
endpackage

module mem_s import mem_pkg::*; (
  input  logic       clk,
  input  mem_req_t   req,
  output logic [7:0] data_out
);
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] memory [0:31];
  always_ff @(posedge clk) begin
    if (req.write) memory[req.addr] <= req.data;
    if (req.read)  data_out <= memory[req.addr];
  end
endmodule
`}},{id:"s08-cpu",group:"sv",tag:"SV \xB7 Lab 8",title:"VeriRISC CPU",std:"2012",design:`// Types shared by the VeriRISC CPU blocks
package typedefs;
  // 3-bit operation codes of the VeriRISC CPU
  typedef enum logic [2:0] {HLT, SKZ, ADD, AND, XOR, LDA, STO, JMP} opcode_t;
  // the 8 controller states, in order
  typedef enum logic [2:0] {INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE} state_t;
endpackage
// 8-bit register with enable and asynchronous active-low reset, written with SystemVerilog constructs:
// timeunit/timeprecision, ANSI ports, logic, always_ff.
module register (
  output logic [7:0] out,
  input  logic [7:0] data,
  input  logic       enable,
  input  logic       clk,
  input  logic       rst_
);
  timeunit 1ns; timeprecision 100ps;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_)       out <= '0;
    else if (enable) out <= data;
endmodule
// Parameterized 2:1 multiplexer (default width 1): out = sel_a ? in_a : in_b.
// Uses always_comb and unique case, with a default that drives X for an unknown select.
module scale_mux #(parameter int WIDTH = 1) (
  output logic [WIDTH-1:0] out,
  input  logic [WIDTH-1:0] in_a, in_b,
  input  logic             sel_a
);
  timeunit 1ns; timeprecision 100ps;

  always_comb
    unique case (sel_a)
      1'b1:    out = in_a;
      1'b0:    out = in_b;
      default: out = 'x;
    endcase
endmodule
// 5-bit loadable counter with enable and asynchronous active-low reset.
//   load = 1: count <= data; else enable = 1: count increments (wraps from 31 to 0); else hold.
module counter (
  output logic [4:0] count,
  input  logic [4:0] data,
  input  logic       load, enable, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_)       count <= '0;
    else if (load)   count <= data;
    else if (enable) count <= count + 1'b1;
endmodule
// 32 x 8 memory with a synchronous read and a synchronous write (rising edge of clk).
//   write = 1: memory[addr] <= data_in      read = 1: data_out <= memory[addr]
module mem (
  input  logic       clk, read, write,
  input  logic [4:0] addr,
  input  logic [7:0] data_in,
  output logic [7:0] data_out
);
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] memory [0:31];

  always_ff @(posedge clk) begin
    if (write) memory[addr] <= data_in;
    if (read)  data_out <= memory[addr];
  end
endmodule
// VeriRISC ALU. zero = 1 when accum is 0 (combinational).
// out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
//   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data & accum    XOR: data ^ accum    LDA: data
module alu import typedefs::*; (
  output logic [7:0] out,
  output logic       zero,
  input  logic [7:0] accum, data,
  input  opcode_t    opcode,
  input  logic       clk
);
  timeunit 1ns; timeprecision 100ps;

  always_comb zero = (accum == 8'd0);

  always_ff @(negedge clk)
    unique case (opcode)
      ADD:     out <= data + accum;
      AND:     out <= data & accum;
      XOR:     out <= data ^ accum;
      LDA:     out <= data;
      default: out <= accum;            // HLT, SKZ, STO, JMP
    endcase
endmodule
// VeriRISC sequence controller: a Mealy state machine that steps through 8 states, one per clock,
// from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
// fetch is 1 in the first four states, while the instruction is read (it selects the program counter
// as the memory address).
module control import typedefs::*; (
  output logic    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr,
  output logic    fetch,
  output state_t  state,
  input  opcode_t opcode,
  input  logic    zero, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;
  logic aluop;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_) state <= INST_ADDR;
    else       state <= state.next();         // STORE wraps back to INST_ADDR

  assign aluop = (opcode == ADD) || (opcode == AND) || (opcode == XOR) || (opcode == LDA);
  assign fetch = (state == INST_ADDR) || (state == INST_FETCH) || (state == INST_LOAD) || (state == IDLE);

  always_comb begin
    {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr} = '0;
    unique case (state)
      INST_ADDR:  ;
      INST_FETCH: mem_rd = 1;
      INST_LOAD:  begin mem_rd = 1; load_ir = 1; end
      IDLE:       begin mem_rd = 1; load_ir = 1; end
      OP_ADDR:    begin halt = (opcode == HLT); inc_pc = 1; end
      OP_FETCH:   mem_rd = aluop;
      ALU_OP:     begin mem_rd = aluop; inc_pc = (opcode == SKZ) && zero; load_ac = aluop; load_pc = (opcode == JMP); end
      STORE:      begin mem_rd = aluop; inc_pc = (opcode == JMP); load_pc = (opcode == JMP); mem_wr = (opcode == STO); end
      default:    {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr} = 'x;
    endcase
  end
endmodule
// The VeriRISC CPU: connect the blocks.
//   instruction = {opcode[7:5], address[4:0]}
//   counter   (program counter)      register (instruction register, accumulator)
//   scale_mux (fetch ? pc_addr : ir_addr)   mem (32 x 8)   alu   control
module cpu import typedefs::*; (
  output logic halt, load_ir,
  input  logic clk, rst_
);
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] data_out, alu_out, accum, ir_out;
  logic [4:0] pc_addr, ir_addr, addr;
  logic       mem_rd, mem_wr, inc_pc, load_ac, load_pc, fetch, zero;
  opcode_t    opcode;
  state_t     state;

  assign opcode  = opcode_t'(ir_out[7:5]);
  assign ir_addr = ir_out[4:0];

  // TODO: instantiate and connect the seven blocks:
  //   counter pc, scale_mux #(5) addr_mux (sel_a = fetch), mem mem1 (data_in = alu_out),
  //   register ir (loads data_out), register ac (loads alu_out), alu alu1, control cntl.
  // The testbench needs the names mem1 and pc_addr.

endmodule
`,tb:`// Runs three programs on the CPU. Each must stop on its HLT at the right address and leave the
// right result in memory. Instruction = {opcode, address}: HLT 0 SKZ 1 ADD 2 AND 3 XOR 4 LDA 5 STO 6 JMP 7
module tb;
  timeunit 1ns; timeprecision 100ps;
  logic halt, load_ir, clk = 0, rst_ = 1;
  int errors = 0;
  cpu dut (.halt(halt), .load_ir(load_ir), .clk(clk), .rst_(rst_));
  always #5 clk = ~clk;

  function automatic logic [7:0] I(logic [2:0] op, logic [4:0] a); return {op, a}; endfunction

  task automatic run(string name, logic [4:0] halt_at, logic [4:0] res_addr, logic [7:0] res);
    int cycles = 0;
    @(negedge clk) rst_ = 0; @(negedge clk) rst_ = 1;
    while (!halt && cycles < 3000) begin @(negedge clk); cycles++; end
    if (!halt) begin errors++; $display("%s: no HLT after %0d cycles", name, cycles); end
    else if (dut.pc_addr !== halt_at) begin errors++; $display("%s: halted at address %h, expected %h", name, dut.pc_addr, halt_at); end
    else if (dut.mem1.memory[res_addr] !== res) begin errors++; $display("%s: memory[%h] = %0d, expected %0d", name, res_addr, dut.mem1.memory[res_addr], res); end
    else $display("%s: halted at %h after %0d cycles, memory[%h] = %0d. OK", name, halt_at, cycles, res_addr, res);
  endtask

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // ---- Program 1: basic test of every instruction. Success: HLT at 12.
    for (int i = 0; i < 32; i++) dut.mem1.memory[i] = 0;
    dut.mem1.memory[5'h00] = I(5, 5'h1C); // LDA 1C   acc = 0
    dut.mem1.memory[5'h01] = I(1, 0);     // SKZ      zero: skip the next instruction
    dut.mem1.memory[5'h02] = I(0, 0);     // HLT      (error: SKZ did not skip)
    dut.mem1.memory[5'h03] = I(5, 5'h1D); // LDA 1D   acc = 1
    dut.mem1.memory[5'h04] = I(1, 0);     // SKZ      not zero: no skip
    dut.mem1.memory[5'h05] = I(7, 5'h07); // JMP 07
    dut.mem1.memory[5'h06] = I(0, 0);     // HLT      (error: JMP failed)
    dut.mem1.memory[5'h07] = I(4, 5'h1D); // XOR 1D   acc = 0
    dut.mem1.memory[5'h08] = I(1, 0);     // SKZ
    dut.mem1.memory[5'h09] = I(0, 0);     // HLT      (error: XOR failed)
    dut.mem1.memory[5'h0A] = I(2, 5'h1D); // ADD 1D   acc = 1
    dut.mem1.memory[5'h0B] = I(3, 5'h1F); // AND 1F   acc = 1 & FF = 1
    dut.mem1.memory[5'h0C] = I(6, 5'h1B); // STO 1B   memory[1B] = 1
    dut.mem1.memory[5'h0D] = I(5, 5'h1C); // LDA 1C   acc = 0
    dut.mem1.memory[5'h0E] = I(5, 5'h1B); // LDA 1B   acc = 1 (read back the store)
    dut.mem1.memory[5'h0F] = I(4, 5'h1D); // XOR 1D   acc = 0
    dut.mem1.memory[5'h10] = I(1, 0);     // SKZ
    dut.mem1.memory[5'h11] = I(0, 0);     // HLT      (error: STO or LDA failed)
    dut.mem1.memory[5'h12] = I(0, 0);     // HLT      success
    dut.mem1.memory[5'h1D] = 8'h01; dut.mem1.memory[5'h1F] = 8'hFF;
    run("Program 1 (basic test)", 5'h12, 5'h1B, 8'd1);

    // ---- Program 2: sum of 1 to 10. Success: HLT at 08 with memory[1D] = 55.
    for (int i = 0; i < 32; i++) dut.mem1.memory[i] = 0;
    dut.mem1.memory[5'h00] = I(5, 5'h1D); // LDA 1D   acc = sum
    dut.mem1.memory[5'h01] = I(2, 5'h1C); // ADD 1C   + n
    dut.mem1.memory[5'h02] = I(6, 5'h1D); // STO 1D
    dut.mem1.memory[5'h03] = I(5, 5'h1C); // LDA 1C
    dut.mem1.memory[5'h04] = I(2, 5'h1E); // ADD 1E   n - 1 (adds FF)
    dut.mem1.memory[5'h05] = I(6, 5'h1C); // STO 1C
    dut.mem1.memory[5'h06] = I(1, 0);     // SKZ      n == 0: done
    dut.mem1.memory[5'h07] = I(7, 5'h00); // JMP 00
    dut.mem1.memory[5'h08] = I(0, 0);     // HLT
    dut.mem1.memory[5'h1C] = 8'd10; dut.mem1.memory[5'h1E] = 8'hFF;
    run("Program 2 (sum 1 to 10)", 5'h08, 5'h1D, 8'd55);

    // ---- Program 3: Fibonacci up to 144. Success: HLT at 0A with memory[1D] = 144.
    for (int i = 0; i < 32; i++) dut.mem1.memory[i] = 0;
    dut.mem1.memory[5'h00] = I(5, 5'h1D); // LDA 1D   acc = cur
    dut.mem1.memory[5'h01] = I(2, 5'h1C); // ADD 1C   + prev
    dut.mem1.memory[5'h02] = I(6, 5'h1E); // STO 1E   next
    dut.mem1.memory[5'h03] = I(5, 5'h1D); // LDA 1D
    dut.mem1.memory[5'h04] = I(6, 5'h1C); // STO 1C   prev = cur
    dut.mem1.memory[5'h05] = I(5, 5'h1E); // LDA 1E
    dut.mem1.memory[5'h06] = I(6, 5'h1D); // STO 1D   cur = next
    dut.mem1.memory[5'h07] = I(4, 5'h1F); // XOR 1F   compare with 144
    dut.mem1.memory[5'h08] = I(1, 0);     // SKZ      equal: done
    dut.mem1.memory[5'h09] = I(7, 5'h00); // JMP 00
    dut.mem1.memory[5'h0A] = I(0, 0);     // HLT
    dut.mem1.memory[5'h1C] = 8'd0; dut.mem1.memory[5'h1D] = 8'd1; dut.mem1.memory[5'h1F] = 8'd144;
    run("Program 3 (Fibonacci)", 5'h0A, 5'h1D, 8'd144);

    if (errors == 0) $display("PASS: CPU TEST PASSED, all three programs ran correctly");
    else             $display("FAIL: CPU TEST FAILED, %0d programs went wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Types shared by the VeriRISC CPU blocks
package typedefs;
  // 3-bit operation codes of the VeriRISC CPU
  typedef enum logic [2:0] {HLT, SKZ, ADD, AND, XOR, LDA, STO, JMP} opcode_t;
  // the 8 controller states, in order
  typedef enum logic [2:0] {INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE} state_t;
endpackage
// 8-bit register with enable and asynchronous active-low reset, written with SystemVerilog constructs:
// timeunit/timeprecision, ANSI ports, logic, always_ff.
module register (
  output logic [7:0] out,
  input  logic [7:0] data,
  input  logic       enable,
  input  logic       clk,
  input  logic       rst_
);
  timeunit 1ns; timeprecision 100ps;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_)       out <= '0;
    else if (enable) out <= data;
endmodule
// Parameterized 2:1 multiplexer (default width 1): out = sel_a ? in_a : in_b.
// Uses always_comb and unique case, with a default that drives X for an unknown select.
module scale_mux #(parameter int WIDTH = 1) (
  output logic [WIDTH-1:0] out,
  input  logic [WIDTH-1:0] in_a, in_b,
  input  logic             sel_a
);
  timeunit 1ns; timeprecision 100ps;

  always_comb
    unique case (sel_a)
      1'b1:    out = in_a;
      1'b0:    out = in_b;
      default: out = 'x;
    endcase
endmodule
// 5-bit loadable counter with enable and asynchronous active-low reset.
//   load = 1: count <= data; else enable = 1: count increments (wraps from 31 to 0); else hold.
module counter (
  output logic [4:0] count,
  input  logic [4:0] data,
  input  logic       load, enable, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_)       count <= '0;
    else if (load)   count <= data;
    else if (enable) count <= count + 1'b1;
endmodule
// 32 x 8 memory with a synchronous read and a synchronous write (rising edge of clk).
//   write = 1: memory[addr] <= data_in      read = 1: data_out <= memory[addr]
module mem (
  input  logic       clk, read, write,
  input  logic [4:0] addr,
  input  logic [7:0] data_in,
  output logic [7:0] data_out
);
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] memory [0:31];

  always_ff @(posedge clk) begin
    if (write) memory[addr] <= data_in;
    if (read)  data_out <= memory[addr];
  end
endmodule
// VeriRISC ALU. zero = 1 when accum is 0 (combinational).
// out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
//   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data & accum    XOR: data ^ accum    LDA: data
module alu import typedefs::*; (
  output logic [7:0] out,
  output logic       zero,
  input  logic [7:0] accum, data,
  input  opcode_t    opcode,
  input  logic       clk
);
  timeunit 1ns; timeprecision 100ps;

  always_comb zero = (accum == 8'd0);

  always_ff @(negedge clk)
    unique case (opcode)
      ADD:     out <= data + accum;
      AND:     out <= data & accum;
      XOR:     out <= data ^ accum;
      LDA:     out <= data;
      default: out <= accum;            // HLT, SKZ, STO, JMP
    endcase
endmodule
// VeriRISC sequence controller: a Mealy state machine that steps through 8 states, one per clock,
// from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
// fetch is 1 in the first four states, while the instruction is read (it selects the program counter
// as the memory address).
module control import typedefs::*; (
  output logic    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr,
  output logic    fetch,
  output state_t  state,
  input  opcode_t opcode,
  input  logic    zero, clk, rst_
);
  timeunit 1ns; timeprecision 100ps;
  logic aluop;

  always_ff @(posedge clk or negedge rst_)
    if (!rst_) state <= INST_ADDR;
    else       state <= state.next();         // STORE wraps back to INST_ADDR

  assign aluop = (opcode == ADD) || (opcode == AND) || (opcode == XOR) || (opcode == LDA);
  assign fetch = (state == INST_ADDR) || (state == INST_FETCH) || (state == INST_LOAD) || (state == IDLE);

  always_comb begin
    {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr} = '0;
    unique case (state)
      INST_ADDR:  ;
      INST_FETCH: mem_rd = 1;
      INST_LOAD:  begin mem_rd = 1; load_ir = 1; end
      IDLE:       begin mem_rd = 1; load_ir = 1; end
      OP_ADDR:    begin halt = (opcode == HLT); inc_pc = 1; end
      OP_FETCH:   mem_rd = aluop;
      ALU_OP:     begin mem_rd = aluop; inc_pc = (opcode == SKZ) && zero; load_ac = aluop; load_pc = (opcode == JMP); end
      STORE:      begin mem_rd = aluop; inc_pc = (opcode == JMP); load_pc = (opcode == JMP); mem_wr = (opcode == STO); end
      default:    {mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr} = 'x;
    endcase
  end
endmodule
// The VeriRISC CPU: connect the blocks.
//   instruction = {opcode[7:5], address[4:0]}
//   counter   (program counter)      register (instruction register, accumulator)
//   scale_mux (fetch ? pc_addr : ir_addr)   mem (32 x 8)   alu   control
module cpu import typedefs::*; (
  output logic halt, load_ir,
  input  logic clk, rst_
);
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] data_out, alu_out, accum, ir_out;
  logic [4:0] pc_addr, ir_addr, addr;
  logic       mem_rd, mem_wr, inc_pc, load_ac, load_pc, fetch, zero;
  opcode_t    opcode;
  state_t     state;

  assign opcode  = opcode_t'(ir_out[7:5]);
  assign ir_addr = ir_out[4:0];

  counter   pc     (.count(pc_addr), .data(ir_addr), .load(load_pc), .enable(inc_pc), .clk(clk), .rst_(rst_));
  scale_mux #(5) addr_mux (.out(addr), .in_a(pc_addr), .in_b(ir_addr), .sel_a(fetch));
  mem       mem1   (.clk(clk), .read(mem_rd), .write(mem_wr), .addr(addr), .data_in(alu_out), .data_out(data_out));
  register  ir     (.out(ir_out), .data(data_out), .enable(load_ir), .clk(clk), .rst_(rst_));
  register  ac     (.out(accum),  .data(alu_out),  .enable(load_ac), .clk(clk), .rst_(rst_));
  alu       alu1   (.out(alu_out), .zero(zero), .accum(accum), .data(data_out), .opcode(opcode), .clk(clk));
  control   cntl   (.mem_rd(mem_rd), .load_ir(load_ir), .halt(halt), .inc_pc(inc_pc), .load_ac(load_ac), .load_pc(load_pc),
                    .mem_wr(mem_wr), .fetch(fetch), .state(state), .opcode(opcode), .zero(zero), .clk(clk), .rst_(rst_));
endmodule
`}},{id:"s09-johnson",group:"sv",tag:"SV \xB7 Lab 9",title:"Johnson counter",std:"2012",design:`// N-bit Johnson (twisted-ring) counter: shift left, and feed the inverted MSB into bit 0.
// With N = 4 it cycles through 8 states: 0000 0001 0011 0111 1111 1110 1100 1000.
module johnson #(parameter int N = 4) (
  output logic [N-1:0] q,
  input  logic         clk, rst_
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  logic clk = 0, rst_ = 0; logic [3:0] q4; logic [5:0] q6, m6; logic [3:0] m4; int errors = 0;
  johnson         d4 (.q(q4), .clk(clk), .rst_(rst_));
  johnson #(.N(6)) d6 (.q(q6), .clk(clk), .rst_(rst_));
  always #5 clk = ~clk;
  always_ff @(posedge clk or negedge rst_) if (!rst_) begin m4 <= 0; m6 <= 0; end else begin m4 <= {m4[2:0], ~m4[3]}; m6 <= {m6[4:0], ~m6[5]}; end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_ = 1;
    repeat (30) begin
      @(negedge clk);
      if ($time < 100) $display("q = %b", q4);
      if (q4 !== m4 || q6 !== m6) begin errors++; if (errors <= 5) $display("  q4=%b (expected %b)  q6=%b (expected %b)", q4, m4, q6, m6); end
    end
    if (errors == 0) $display("PASS: JOHNSON COUNTER TEST PASSED (N = 4 and N = 6)");
    else             $display("FAIL: JOHNSON COUNTER TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// N-bit Johnson (twisted-ring) counter: shift left, and feed the inverted MSB into bit 0.
// With N = 4 it cycles through 8 states: 0000 0001 0011 0111 1111 1110 1100 1000.
module johnson #(parameter int N = 4) (
  output logic [N-1:0] q,
  input  logic         clk, rst_
);
  timeunit 1ns; timeprecision 100ps;
  always_ff @(posedge clk or negedge rst_)
    if (!rst_) q <= '0;
    else       q <= {q[N-2:0], ~q[N-1]};
endmodule
`}},{id:"s10-gen",group:"sv",tag:"SV \xB7 Lab 10",title:"Ripple-carry adder with generate",std:"2012",design:`// N-bit ripple-carry adder built with a generate loop: N full_adder instances, each carry out
// feeding the next carry in. full_adder is given. Do not use + in rca: use the instances.
module full_adder (
  output logic sum, cout,
  input  logic a, b, cin
);
  assign {cout, sum} = a + b + cin;
endmodule

module rca #(parameter int N = 8) (
  output logic [N-1:0] sum,
  output logic         cout,
  input  logic [N-1:0] a, b,
  input  logic         cin
);
  timeunit 1ns; timeprecision 100ps;
  // TODO: a carry vector c[N:0], then: for (genvar i = 0; i < N; i++) begin : stage ... end

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  logic [7:0] a8, b8, s8; logic [11:0] a12, b12, s12; logic cin, c8, c12; int errors = 0;
  rca            r8  (.sum(s8),  .cout(c8),  .a(a8),  .b(b8),  .cin(cin));
  rca #(.N(12))  r12 (.sum(s12), .cout(c12), .a(a12), .b(b12), .cin(cin));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2000) begin
      a8 = $urandom; b8 = $urandom; a12 = $urandom; b12 = $urandom; cin = $urandom; #1;
      if ({c8, s8} !== a8 + b8 + cin || {c12, s12} !== a12 + b12 + cin) begin errors++; if (errors <= 5) $display("  %0d + %0d + %0d = %0d ?", a8, b8, cin, {c8, s8}); end
    end
    if (errors == 0) $display("PASS: ADDER TEST PASSED (N = 8 and N = 12, 2000 random sums)");
    else             $display("FAIL: ADDER TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// N-bit ripple-carry adder built with a generate loop: N full_adder instances, each carry out
// feeding the next carry in. full_adder is given.
module full_adder (
  output logic sum, cout,
  input  logic a, b, cin
);
  assign {cout, sum} = a + b + cin;
endmodule

module rca #(parameter int N = 8) (
  output logic [N-1:0] sum,
  output logic         cout,
  input  logic [N-1:0] a, b,
  input  logic         cin
);
  timeunit 1ns; timeprecision 100ps;
  logic [N:0] c;
  assign c[0] = cin;
  for (genvar i = 0; i < N; i++) begin : stage
    full_adder fa (.sum(sum[i]), .cout(c[i+1]), .a(a[i]), .b(b[i]), .cin(c[i]));
  end
  assign cout = c[N];
endmodule
`}},{id:"s11-dpram",group:"sv",tag:"SV \xB7 Lab 11",title:"Dual-port RAM",std:"2012",design:`// Dual-port RAM, one clock. Port A writes (and reads); port B only reads.
// Reads are synchronous: dout_a and dout_b update on the rising edge after the address.
// When port A writes an address, dout_a shows the OLD contents (read-before-write).
module dpram #(parameter int AW = 4, DW = 8) (
  input  logic          clk,
  input  logic          we_a,
  input  logic [AW-1:0] addr_a, addr_b,
  input  logic [DW-1:0] din_a,
  output logic [DW-1:0] dout_a, dout_b
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`module tb;
  timeunit 1ns; timeprecision 100ps;
  logic clk = 0, we_a = 0; logic [3:0] addr_a = 0, addr_b = 0; logic [7:0] din_a = 0, dout_a, dout_b;
  logic [7:0] ram [0:15]; logic [7:0] ea, eb; int errors = 0, n = 0;
  dpram dut (.*);
  always #5 clk = ~clk;
  always_ff @(posedge clk) begin if (we_a) ram[addr_a] <= din_a; ea <= ram[addr_a]; eb <= ram[addr_b]; end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int i = 0; i < 16; i++) begin @(negedge clk); we_a = 1; addr_a = i; din_a = $urandom; end
    repeat (300) begin
      @(negedge clk);
      if (dout_a !== ea || dout_b !== eb) begin errors++; if (errors <= 5) $display("  at %0t: dout_a=%h (expected %h) dout_b=%h (expected %h)", $time, dout_a, ea, dout_b, eb); end
      n++; we_a = $urandom; addr_a = $urandom; addr_b = $urandom; din_a = $urandom;
    end
    if (errors == 0) $display("PASS: DUAL-PORT RAM TEST PASSED (%0d cycles)", n);
    else             $display("FAIL: DUAL-PORT RAM TEST FAILED, %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Dual-port RAM, one clock. Port A writes (and reads); port B only reads.
// Reads are synchronous: dout_a and dout_b update on the rising edge after the address.
// When port A writes an address, dout_a shows the OLD contents (read-before-write).
module dpram #(parameter int AW = 4, DW = 8) (
  input  logic          clk,
  input  logic          we_a,
  input  logic [AW-1:0] addr_a, addr_b,
  input  logic [DW-1:0] din_a,
  output logic [DW-1:0] dout_a, dout_b
);
  timeunit 1ns; timeprecision 100ps;
  logic [DW-1:0] ram [0:(1<<AW)-1];
  always_ff @(posedge clk) begin
    if (we_a) ram[addr_a] <= din_a;
    dout_a <= ram[addr_a];
    dout_b <= ram[addr_b];
  end
endmodule
`}},{id:"s12-uart",group:"sv",tag:"SV \xB7 Lab 12",title:"UART transmitter",std:"2012",design:`// UART transmitter (8 data bits, no parity, 1 stop bit) with an enumerated state type.
// tx idles at 1. When start = 1 and busy = 0, it sends: a start bit (0), data[0] .. data[7]
// (LSB first), then a stop bit (1). Each bit lasts CLKS_PER_BIT clocks. busy = 1 while sending.
module uart_tx #(parameter int CLKS_PER_BIT = 4) (
  input  logic       clk, rst_, start,
  input  logic [7:0] data,
  output logic       tx, busy
);
  timeunit 1ns; timeprecision 100ps;

  // TODO: write the design here

endmodule
`,tb:`// Sends bytes and decodes the tx line like a real receiver: it waits for the falling edge of the
// start bit, then samples every bit in its middle.
module tb;
  timeunit 1ns; timeprecision 100ps;
  localparam int CPB = 4;
  logic clk = 0, rst_ = 0, start = 0, tx, busy; logic [7:0] data;
  logic [7:0] sent [$]; int got = 0, errors = 0;
  uart_tx #(.CLKS_PER_BIT(CPB)) dut (.*);
  always #5 clk = ~clk;
  // receiver
  initial begin : rx
    logic [7:0] b;
    @(posedge rst_);
    forever begin
      @(negedge tx);
      #(CPB * 10 / 2);                         // middle of the start bit
      if (tx !== 1'b0) begin errors++; $display("  start bit not 0"); end
      for (int i = 0; i < 8; i++) begin #(CPB * 10); b[i] = tx; end
      #(CPB * 10);
      if (tx !== 1'b1) begin errors++; $display("  stop bit not 1"); end
      if (sent.size() == 0) begin errors++; $display("  received a byte nobody sent"); end
      else begin
        if (b !== sent[0]) begin errors++; if (errors <= 5) $display("  received %h, expected %h", b, sent[0]); end
        void'(sent.pop_front());
      end
      got++;
    end
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_ = 1;
    if (tx !== 1'b1 || busy !== 1'b0) begin errors++; $display("  after reset tx should be 1 and busy 0"); end
    for (int i = 0; i < 12; i++) begin
      @(negedge clk); while (busy) @(negedge clk);
      data = (i == 0) ? 8'h55 : (i == 1) ? 8'hA3 : $urandom; start = 1; sent.push_back(data);
      @(negedge clk); start = 0;
      if (busy !== 1'b1) begin errors++; $display("  busy should be 1 while sending"); end
    end
    while (busy) @(negedge clk);
    #(CPB * 10 * 2);
    if (errors == 0 && got == 12) $display("PASS: UART TX TEST PASSED (12 bytes received correctly)");
    else                          $display("FAIL: UART TX TEST FAILED, %0d errors, %0d of 12 bytes received", errors, got);
    $finish;
  end
  initial begin #100000; $display("FAIL: timeout"); $finish; end
endmodule
`,solution:{design:`// UART transmitter (8 data bits, no parity, 1 stop bit) with an enumerated state type.
// tx idles at 1. When start = 1 and busy = 0, it sends: a start bit (0), data[0] .. data[7]
// (LSB first), then a stop bit (1). Each bit lasts CLKS_PER_BIT clocks. busy = 1 while sending.
module uart_tx #(parameter int CLKS_PER_BIT = 4) (
  input  logic       clk, rst_, start,
  input  logic [7:0] data,
  output logic       tx, busy
);
  timeunit 1ns; timeprecision 100ps;
  typedef enum logic [1:0] {IDLE, START_BIT, DATA_BITS, STOP_BIT} state_t;
  state_t     state;
  logic [7:0] shreg;
  logic [2:0] bitn;
  int         tick;

  assign busy = (state != IDLE);

  always_ff @(posedge clk or negedge rst_)
    if (!rst_) begin
      state <= IDLE; tx <= 1'b1; tick <= 0; bitn <= 0; shreg <= '0;
    end else begin
      unique case (state)
        IDLE:      if (start) begin shreg <= data; tx <= 1'b0; tick <= 0; state <= START_BIT; end
        START_BIT: if (tick == CLKS_PER_BIT - 1) begin tick <= 0; tx <= shreg[0]; bitn <= 0; state <= DATA_BITS; end
                   else tick <= tick + 1;
        DATA_BITS: if (tick == CLKS_PER_BIT - 1) begin
                     tick <= 0;
                     if (bitn == 7) begin tx <= 1'b1; state <= STOP_BIT; end
                     else begin bitn <= bitn + 1; tx <= shreg[bitn + 1]; end
                   end else tick <= tick + 1;
        STOP_BIT:  if (tick == CLKS_PER_BIT - 1) begin tick <= 0; state <= IDLE; end
                   else tick <= tick + 1;
      endcase
    end
endmodule
`}},{id:"l01-gates",group:"ld-gates",tag:"Logic 1 \xB7 Lab 1",title:"Logic gates and truth tables",std:"2005",design:`// The basic logic gates. Each output is one gate of inputs a and b (not_a only uses a).
module gates (
  input  wire a, b,
  output wire and_y, or_y, not_a, nand_y, nor_y, xor_y, xnor_y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a;
  reg  b;
  wire and_y;
  reg  and_y_exp;
  wire or_y;
  reg  or_y_exp;
  wire not_a;
  reg  not_a_exp;
  wire nand_y;
  reg  nand_y_exp;
  wire nor_y;
  reg  nor_y_exp;
  wire xor_y;
  reg  xor_y_exp;
  wire xnor_y;
  reg  xnor_y_exp;
  integer i, errors = 0;
  gates dut (.a(a), .b(b), .and_y(and_y), .or_y(or_y), .not_a(not_a), .nand_y(nand_y), .nor_y(nor_y), .xor_y(xor_y), .xnor_y(xnor_y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("a b | and_y or_y not_a nand_y nor_y xor_y xnor_y");
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i;
      #10;
      and_y_exp = a & b;
      or_y_exp = a | b;
      not_a_exp = ~a;
      nand_y_exp = ~(a & b);
      nor_y_exp = ~(a | b);
      xor_y_exp = a ^ b;
      xnor_y_exp = ~(a ^ b);
      if (i < 16) $display("%b %b | %b %b %b %b %b %b %b", a, b, and_y, or_y, not_a, nand_y, nor_y, xor_y, xnor_y);
      if (and_y !== and_y_exp || or_y !== or_y_exp || not_a !== not_a_exp || nand_y !== nand_y_exp || nor_y !== nor_y_exp || xor_y !== xor_y_exp || xnor_y !== xnor_y_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b %b %b %b %b %b", a, b, and_y_exp, or_y_exp, not_a_exp, nand_y_exp, nor_y_exp, xor_y_exp, xnor_y_exp);
      end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// The basic logic gates. Each output is one gate of inputs a and b (not_a only uses a).
module gates (
  input  wire a, b,
  output wire and_y, or_y, not_a, nand_y, nor_y, xor_y, xnor_y
);
  and  g1 (and_y,  a, b);
  or   g2 (or_y,   a, b);
  not  g3 (not_a,  a);
  nand g4 (nand_y, a, b);
  nor  g5 (nor_y,  a, b);
  xor  g6 (xor_y,  a, b);
  xnor g7 (xnor_y, a, b);
endmodule
`}},{id:"l02-nand",group:"ld-gates",tag:"Logic 1 \xB7 Lab 2",title:"Universal gates: NAND only",std:"2005",design:`// Every gate from NAND gates only. Use only nand primitives (no assign, no other gates).
module nand_only (
  input  wire a, b,
  output wire not_a, and_y, or_y, xor_y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a;
  reg  b;
  wire not_a;
  reg  not_a_exp;
  wire and_y;
  reg  and_y_exp;
  wire or_y;
  reg  or_y_exp;
  wire xor_y;
  reg  xor_y_exp;
  integer i, errors = 0;
  nand_only dut (.a(a), .b(b), .not_a(not_a), .and_y(and_y), .or_y(or_y), .xor_y(xor_y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("a b | not_a and_y or_y xor_y");
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i;
      #10;
      not_a_exp = ~a;
      and_y_exp = a & b;
      or_y_exp = a | b;
      xor_y_exp = a ^ b;
      if (i < 16) $display("%b %b | %b %b %b %b", a, b, not_a, and_y, or_y, xor_y);
      if (not_a !== not_a_exp || and_y !== and_y_exp || or_y !== or_y_exp || xor_y !== xor_y_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b %b %b", a, b, not_a_exp, and_y_exp, or_y_exp, xor_y_exp);
      end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Every gate from NAND gates only. Use only nand primitives (no assign, no other gates).
module nand_only (
  input  wire a, b,
  output wire not_a, and_y, or_y, xor_y
);
  wire n1, na, nb, x1, x2;
  nand g1 (not_a, a, a);          // NOT: a NAND a
  nand g2 (n1, a, b);
  nand g3 (and_y, n1, n1);        // AND: NOT of NAND
  nand g4 (na, a, a);
  nand g5 (nb, b, b);
  nand g6 (or_y, na, nb);         // OR: NAND of the inverted inputs (De Morgan)
  nand g7 (x1, a, n1);            // XOR: the classic 4-NAND circuit
  nand g8 (x2, b, n1);
  nand g9 (xor_y, x1, x2);
endmodule
`}},{id:"l03-nor",group:"ld-gates",tag:"Logic 1 \xB7 Lab 3",title:"Universal gates: NOR only",std:"2005",design:`// Every gate from NOR gates only. Use only nor primitives.
module nor_only (
  input  wire a, b,
  output wire not_a, or_y, and_y, xnor_y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  a;
  reg  b;
  wire not_a;
  reg  not_a_exp;
  wire or_y;
  reg  or_y_exp;
  wire and_y;
  reg  and_y_exp;
  wire xnor_y;
  reg  xnor_y_exp;
  integer i, errors = 0;
  nor_only dut (.a(a), .b(b), .not_a(not_a), .or_y(or_y), .and_y(and_y), .xnor_y(xnor_y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("a b | not_a or_y and_y xnor_y");
    for (i = 0; i < 4; i = i + 1) begin
      {a, b} = i;
      #10;
      not_a_exp = ~a;
      or_y_exp = a | b;
      and_y_exp = a & b;
      xnor_y_exp = ~(a ^ b);
      if (i < 16) $display("%b %b | %b %b %b %b", a, b, not_a, or_y, and_y, xnor_y);
      if (not_a !== not_a_exp || or_y !== or_y_exp || and_y !== and_y_exp || xnor_y !== xnor_y_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b %b %b", a, b, not_a_exp, or_y_exp, and_y_exp, xnor_y_exp);
      end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Every gate from NOR gates only. Use only nor primitives.
module nor_only (
  input  wire a, b,
  output wire not_a, or_y, and_y, xnor_y
);
  wire n1, na, nb, x1, x2;
  nor g1 (not_a, a, a);           // NOT: a NOR a
  nor g2 (n1, a, b);
  nor g3 (or_y, n1, n1);          // OR: NOT of NOR
  nor g4 (na, a, a);
  nor g5 (nb, b, b);
  nor g6 (and_y, na, nb);         // AND: NOR of the inverted inputs (De Morgan)
  nor g7 (x1, a, n1);             // XNOR: the 4-NOR circuit
  nor g8 (x2, b, n1);
  nor g9 (xnor_y, x1, x2);
endmodule
`}},{id:"l04-sop-pos",group:"ld-gates",tag:"Logic 1 \xB7 Lab 4",title:"SOP and POS Boolean functions",std:"2005",design:`// Boolean functions in sum-of-products (SOP) and product-of-sums (POS) form.
//   y1 = A\xB7B + A'\xB7B'                (SOP)
//   y2 = (A + B)(B + C)(A + C')     (POS)
//   y3 = A + B\xB7C'                   (mixed)
module boolean_fns (
  input  wire A, B, C,
  output wire y1, y2, y3
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  C;
  wire y1;
  reg  y1_exp;
  wire y2;
  reg  y2_exp;
  wire y3;
  reg  y3_exp;
  integer i, errors = 0;
  boolean_fns dut (.A(A), .B(B), .C(C), .y1(y1), .y2(y2), .y3(y3));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B C | y1 y2 y3");
    for (i = 0; i < 8; i = i + 1) begin
      {A, B, C} = i;
      #10;
      y1_exp = (A & B) | (~A & ~B);
      y2_exp = (A | B) & (B | C) & (A | ~C);
      y3_exp = A | (B & ~C);
      if (i < 16) $display("%b %b %b | %b %b %b", A, B, C, y1, y2, y3);
      if (y1 !== y1_exp || y2 !== y2_exp || y3 !== y3_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b %b", A, B, C, y1_exp, y2_exp, y3_exp);
      end
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Boolean functions in sum-of-products (SOP) and product-of-sums (POS) form.
//   y1 = A\xB7B + A'\xB7B'                (SOP)
//   y2 = (A + B)(B + C)(A + C')     (POS)
//   y3 = A + B\xB7C'                   (mixed)
module boolean_fns (
  input  wire A, B, C,
  output wire y1, y2, y3
);
  assign y1 = (A & B) | (~A & ~B);
  assign y2 = (A | B) & (B | C) & (A | ~C);
  assign y3 = A | (B & ~C);
endmodule
`}},{id:"l05-demorgan",group:"ld-gates",tag:"Logic 1 \xB7 Lab 5",title:"De Morgan's laws",std:"2005",design:`// De Morgan's laws: build each side of both laws and see that they are equal.
//   (A\xB7B)' = A' + B'      and      (A + B)' = A'\xB7B'
module demorgan (
  input  wire A, B,
  output wire l1_left, l1_right, l2_left, l2_right
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  wire l1_left;
  reg  l1_left_exp;
  wire l1_right;
  reg  l1_right_exp;
  wire l2_left;
  reg  l2_left_exp;
  wire l2_right;
  reg  l2_right_exp;
  integer i, errors = 0;
  demorgan dut (.A(A), .B(B), .l1_left(l1_left), .l1_right(l1_right), .l2_left(l2_left), .l2_right(l2_right));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B | l1_left l1_right l2_left l2_right");
    for (i = 0; i < 4; i = i + 1) begin
      {A, B} = i;
      #10;
      l1_left_exp = ~(A & B);
      l1_right_exp = ~(A & B);
      l2_left_exp = ~(A | B);
      l2_right_exp = ~(A | B);
      if (i < 16) $display("%b %b | %b %b %b %b", A, B, l1_left, l1_right, l2_left, l2_right);
      if (l1_left !== l1_left_exp || l1_right !== l1_right_exp || l2_left !== l2_left_exp || l2_right !== l2_right_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b %b %b", A, B, l1_left_exp, l1_right_exp, l2_left_exp, l2_right_exp);
      end
    end
    if (errors == 0) $display("PASS: all 4 input combinations correct");
    else             $display("FAIL: %0d of 4 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// De Morgan's laws: build each side of both laws and see that they are equal.
//   (A\xB7B)' = A' + B'      and      (A + B)' = A'\xB7B'
module demorgan (
  input  wire A, B,
  output wire l1_left, l1_right, l2_left, l2_right
);
  assign l1_left  = ~(A & B);
  assign l1_right = ~A | ~B;
  assign l2_left  = ~(A | B);
  assign l2_right = ~A & ~B;
endmodule
`}},{id:"l06-kmap",group:"ld-gates",tag:"Logic 1 \xB7 Lab 6",title:"K-map simplification",std:"2005",design:`// K-map simplification. Write the SIMPLIFIED expressions (fewest terms and literals).
//   F1(X, Y, Z)    = \u03A3m(3, 4, 6, 7)
//   F2(A, B, C, D) = \u03A3m(2, 6, 8, 9, 10, 11, 14)
module kmap (
  input  wire A, B, C, D, X, Y, Z,
  output wire F1, F2
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  C;
  reg  D;
  reg  X;
  reg  Y;
  reg  Z;
  wire F1;
  reg  F1_exp;
  wire F2;
  reg  F2_exp;
  integer i, errors = 0;
  kmap dut (.A(A), .B(B), .C(C), .D(D), .X(X), .Y(Y), .Z(Z), .F1(F1), .F2(F2));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 128; i = i + 1) begin
      {A, B, C, D, X, Y, Z} = i;
      #10;
      F1_exp = (32'b11011000 >> {X, Y, Z}) & 1;
      F2_exp = (32'b0100111101000100 >> {A, B, C, D}) & 1;
      
      if (F1 !== F1_exp || F2 !== F2_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b %b %b %b %b: expected %b %b", A, B, C, D, X, Y, Z, F1_exp, F2_exp);
      end
    end
    if (errors == 0) $display("PASS: all 128 input combinations correct");
    else             $display("FAIL: %0d of 128 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// K-map simplification. Write the SIMPLIFIED expressions (fewest terms and literals).
//   F1(X, Y, Z)    = \u03A3m(3, 4, 6, 7)            \u2192 Y\xB7Z + X\xB7Z'
//   F2(A, B, C, D) = \u03A3m(2, 6, 8, 9, 10, 11, 14) \u2192 A\xB7B' + C\xB7D'
module kmap (
  input  wire A, B, C, D, X, Y, Z,
  output wire F1, F2
);
  assign F1 = (Y & Z) | (X & ~Z);
  assign F2 = (A & ~B) | (C & ~D);
endmodule
`}},{id:"l07-dontcare",group:"ld-gates",tag:"Logic 1 \xB7 Lab 7",title:"K-maps with don't-cares",std:"2005",design:`// K-map with don't-care terms. F(A, B, C, D) = \u03A3m(1, 3, 7, 11, 15) + d(0, 2, 5).
// Don't-cares can be 0 or 1, whichever gives the simpler expression.
// The testbench only checks the input combinations that are not don't-cares.
module dontcare (
  input  wire A, B, C, D,
  output wire F
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  C;
  reg  D;
  wire F;
  reg  F_exp;
  integer i, errors = 0;
  dontcare dut (.A(A), .B(B), .C(C), .D(D), .F(F));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B C D | F");
    for (i = 0; i < 16; i = i + 1) begin
      {A, B, C, D} = i;
      #10;
      F_exp = ({A,B,C,D} == 0 || {A,B,C,D} == 2 || {A,B,C,D} == 5) ? F : ((16'b1000100010001010 >> {A, B, C, D}) & 1);
      if (i < 16) $display("%b %b %b %b | %b", A, B, C, D, F);
      if (F !== F_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b %b: expected %b", A, B, C, D, F_exp);
      end
    end
    if (errors == 0) $display("PASS: all 16 input combinations correct");
    else             $display("FAIL: %0d of 16 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// K-map with don't-care terms. F(A, B, C, D) = \u03A3m(1, 3, 7, 11, 15) + d(0, 2, 5).
// Don't-cares can be 0 or 1, whichever gives the simpler expression: F = C\xB7D + A'\xB7B'.
// The testbench only checks the input combinations that are not don't-cares.
module dontcare (
  input  wire A, B, C, D,
  output wire F
);
  assign F = (C & D) | (~A & ~B);
endmodule
`}},{id:"l08-parity",group:"ld-gates",tag:"Logic 1 \xB7 Lab 8",title:"Parity generator and checker",std:"2005",design:`// Even parity generator and checker for 4 data bits.
//   p     = the parity bit that makes the number of 1s in {d, p} even
//   error = 1 when a received 5-bit word {d, p_in} has an odd number of 1s
module parity (
  input  wire [3:0] d,
  input  wire       p_in,
  output wire       p, error
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] d;
  reg  p_in;
  wire p;
  reg  p_exp;
  wire error;
  reg  error_exp;
  integer i, errors = 0;
  parity dut (.d(d), .p_in(p_in), .p(p), .error(error));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("d p_in | p error");
    for (i = 0; i < 32; i = i + 1) begin
      {d, p_in} = i;
      #10;
      p_exp = ^d;
      error_exp = ^{d, p_in};
      if (i < 16) $display("%b %b | %b %b", d, p_in, p, error);
      if (p !== p_exp || error !== error_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b", d, p_in, p_exp, error_exp);
      end
    end
    if (errors == 0) $display("PASS: all 32 input combinations correct");
    else             $display("FAIL: %0d of 32 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Even parity generator and checker for 4 data bits.
//   p     = the parity bit that makes the number of 1s in {d, p} even
//   error = 1 when a received 5-bit word {d, p_in} has an odd number of 1s
module parity (
  input  wire [3:0] d,
  input  wire       p_in,
  output wire       p, error
);
  assign p     = ^d;
  assign error = ^{d, p_in};
endmodule
`}},{id:"l09-majority",group:"ld-gates",tag:"Logic 1 \xB7 Lab 9",title:"Majority voter",std:"2005",design:`// Majority (voting) circuit: y = 1 when at least two of the three inputs are 1.
// From the truth table, y = \u03A3m(3, 5, 6, 7). Simplify it with a K-map.
module majority (
  input  wire A, B, C,
  output wire y
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  C;
  wire y;
  reg  y_exp;
  integer i, errors = 0;
  majority dut (.A(A), .B(B), .C(C), .y(y));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B C | y");
    for (i = 0; i < 8; i = i + 1) begin
      {A, B, C} = i;
      #10;
      y_exp = (A + B + C) >= 2;
      if (i < 16) $display("%b %b %b | %b", A, B, C, y);
      if (y !== y_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b", A, B, C, y_exp);
      end
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Majority (voting) circuit: y = 1 when at least two of the three inputs are 1.
// From the truth table, y = \u03A3m(3, 5, 6, 7) = A\xB7B + B\xB7C + A\xB7C.
module majority (
  input  wire A, B, C,
  output wire y
);
  assign y = (A & B) | (B & C) | (A & C);
endmodule
`}},{id:"l10-sub",group:"ld-comb",tag:"Logic 2 \xB7 Lab 1",title:"Half and full subtractor",std:"2005",design:`// Half subtractor and full subtractor: A \u2212 B (\u2212 Bin).
//   half: D = A ^ B,          Bout = A'\xB7B
//   full: D = A ^ B ^ Bin,    Bout = A'\xB7B + A'\xB7Bin + B\xB7Bin
module subtractors (
  input  wire A, B, Bin,
  output wire hD, hBout, D, Bout
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  Bin;
  wire hD;
  reg  hD_exp;
  wire hBout;
  reg  hBout_exp;
  wire D;
  reg  D_exp;
  wire Bout;
  reg  Bout_exp;
  integer i, errors = 0;
  subtractors dut (.A(A), .B(B), .Bin(Bin), .hD(hD), .hBout(hBout), .D(D), .Bout(Bout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B Bin | hD hBout D Bout");
    for (i = 0; i < 8; i = i + 1) begin
      {A, B, Bin} = i;
      #10;
      hD_exp = (A - B) & 1;
      hBout_exp = A < B;
      D_exp = (A - B - Bin) & 1;
      Bout_exp = A < {1'b0, B} + Bin;
      if (i < 16) $display("%b %b %b | %b %b %b %b", A, B, Bin, hD, hBout, D, Bout);
      if (hD !== hD_exp || hBout !== hBout_exp || D !== D_exp || Bout !== Bout_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b %b %b", A, B, Bin, hD_exp, hBout_exp, D_exp, Bout_exp);
      end
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Half subtractor and full subtractor: A \u2212 B (\u2212 Bin).
//   half: D = A ^ B,          Bout = A'\xB7B
//   full: D = A ^ B ^ Bin,    Bout = A'\xB7B + A'\xB7Bin + B\xB7Bin
module subtractors (
  input  wire A, B, Bin,
  output wire hD, hBout, D, Bout
);
  assign hD    = A ^ B;
  assign hBout = ~A & B;
  assign D     = A ^ B ^ Bin;
  assign Bout  = (~A & B) | (~A & Bin) | (B & Bin);
endmodule
`}},{id:"l29-rca",group:"ld-comb",tag:"Logic 2 \xB7 Lab 2",title:"4-bit parallel adder (7483)",std:"2005",design:`// Full adder (given)
module full_adder (input wire a, b, cin, output wire s, cout);
  assign s    = a ^ b ^ cin;
  assign cout = (a & b) | (cin & (a ^ b));
endmodule

// 4-bit parallel (ripple-carry) adder from four full adders, like the 7483.
// The carry out of each stage is the carry in of the next one.
module rca4 (
  input  wire [3:0] A, B,
  input  wire       cin,
  output wire [3:0] S,
  output wire       cout
);
  // TODO: declare the internal carries and instantiate full_adder four times

endmodule
`,tb:`module tb;
  reg  [3:0] A;
  reg  [3:0] B;
  reg  cin;
  wire [3:0] S;
  reg  [3:0] S_exp;
  wire cout;
  reg  cout_exp;
  integer i, errors = 0;
  rca4 dut (.A(A), .B(B), .cin(cin), .S(S), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 512; i = i + 1) begin
      {A, B, cin} = i;
      #10;
      S_exp = (A + B + cin) & 15;
      cout_exp = ({1'b0, A} + B + cin) >> 4;
      
      if (S !== S_exp || cout !== cout_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b", A, B, cin, S_exp, cout_exp);
      end
    end
    if (errors == 0) $display("PASS: all 512 input combinations correct");
    else             $display("FAIL: %0d of 512 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// Full adder (given)
module full_adder (input wire a, b, cin, output wire s, cout);
  assign s    = a ^ b ^ cin;
  assign cout = (a & b) | (cin & (a ^ b));
endmodule

// 4-bit parallel (ripple-carry) adder from four full adders, like the 7483.
// The carry out of each stage is the carry in of the next one.
module rca4 (
  input  wire [3:0] A, B,
  input  wire       cin,
  output wire [3:0] S,
  output wire       cout
);
  wire c1, c2, c3;
  full_adder fa0 (.a(A[0]), .b(B[0]), .cin(cin), .s(S[0]), .cout(c1));
  full_adder fa1 (.a(A[1]), .b(B[1]), .cin(c1),  .s(S[1]), .cout(c2));
  full_adder fa2 (.a(A[2]), .b(B[2]), .cin(c2),  .s(S[2]), .cout(c3));
  full_adder fa3 (.a(A[3]), .b(B[3]), .cin(c3),  .s(S[3]), .cout(cout));
endmodule
`}},{id:"l18-addsub",group:"ld-comb",tag:"Logic 2 \xB7 Lab 3",title:"4-bit adder/subtractor",std:"2005",design:`// 4-bit adder/subtractor with one control input M.
//   M = 0: S = A + B        M = 1: S = A \u2212 B, done as A + B' + 1 (two's complement)
//   cout is the carry out of the adder; v = 1 on signed (two's complement) overflow.
module addsub4 (
  input  wire [3:0] A, B,
  input  wire       M,
  output wire [3:0] S,
  output wire       cout, v
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] A;
  reg  [3:0] B;
  reg  M;
  wire [3:0] S;
  reg  [3:0] S_exp;
  wire cout;
  reg  cout_exp;
  wire v;
  reg  v_exp;
  integer i, errors = 0;
  addsub4 dut (.A(A), .B(B), .M(M), .S(S), .cout(cout), .v(v));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 512; i = i + 1) begin
      {A, B, M} = i;
      #10;
      S_exp = M ? (A - B) & 15 : (A + B) & 15;
      cout_exp = M ? (A >= B) : ((A + B) > 15);
      v_exp = M ? ((A[3] != B[3]) && (((A - B) >> 3) & 1) != A[3]) : ((A[3] == B[3]) && (((A + B) >> 3) & 1) != A[3]);
      
      if (S !== S_exp || cout !== cout_exp || v !== v_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b %b", A, B, M, S_exp, cout_exp, v_exp);
      end
    end
    if (errors == 0) $display("PASS: all 512 input combinations correct");
    else             $display("FAIL: %0d of 512 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-bit adder/subtractor with one control input M.
//   M = 0: S = A + B        M = 1: S = A \u2212 B, done as A + B' + 1 (two's complement)
//   cout is the carry out of the adder; v = 1 on signed (two's complement) overflow.
module addsub4 (
  input  wire [3:0] A, B,
  input  wire       M,
  output wire [3:0] S,
  output wire       cout, v
);
  wire [3:0] Bx = B ^ {4{M}};            // invert B when subtracting
  wire [4:0] r  = A + Bx + M;            // M is also the carry in
  assign S    = r[3:0];
  assign cout = r[4];
  assign v    = (A[3] == Bx[3]) && (S[3] != A[3]);
endmodule
`}},{id:"l19-bcdadd",group:"ld-comb",tag:"Logic 2 \xB7 Lab 4",title:"BCD adder",std:"2005",design:`// BCD adder for one digit: add two BCD digits (0 to 9) and a carry in.
// Add in binary; if the sum is above 9, add 6 (0110) to correct it and set the carry.
module bcd_adder (
  input  wire [3:0] a, b,
  input  wire       cin,
  output wire [3:0] s,
  output wire       cout
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] a;
  reg  [3:0] b;
  reg  cin;
  wire [3:0] s;
  reg  [3:0] s_exp;
  wire cout;
  reg  cout_exp;
  integer i, errors = 0;
  bcd_adder dut (.a(a), .b(b), .cin(cin), .s(s), .cout(cout));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 512; i = i + 1) begin
      {a, b, cin} = i;
      #10;
      s_exp = (a > 9 || b > 9) ? s : (a + b + cin) % 10;
      cout_exp = (a > 9 || b > 9) ? cout : (a + b + cin) >= 10;
      
      if (s !== s_exp || cout !== cout_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b", a, b, cin, s_exp, cout_exp);
      end
    end
    if (errors == 0) $display("PASS: all 512 input combinations correct (the testbench skips digits above 9)");
    else             $display("FAIL: %0d of 512 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// BCD adder for one digit: add two BCD digits (0 to 9) and a carry in.
// Add in binary; if the sum is above 9, add 6 (0110) to correct it and set the carry.
module bcd_adder (
  input  wire [3:0] a, b,
  input  wire       cin,
  output wire [3:0] s,
  output wire       cout
);
  wire [4:0] z = a + b + cin;
  assign cout = (z > 9);
  assign s    = cout ? z + 5'd6 : z;
endmodule
`}},{id:"l17-cmp2",group:"ld-comb",tag:"Logic 2 \xB7 Lab 5",title:"2-bit comparator",std:"2005",design:`// 2-bit magnitude comparator from the K-map equations (gate level, no > or <):
//   eq = (a1 ~^ b1)(a0 ~^ b0)
//   gt = a1\xB7b1' + (a1 ~^ b1)\xB7a0\xB7b0'
//   lt = a1'\xB7b1 + (a1 ~^ b1)\xB7a0'\xB7b0
module cmp2 (
  input  wire [1:0] a, b,
  output wire gt, eq, lt
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [1:0] a;
  reg  [1:0] b;
  wire gt;
  reg  gt_exp;
  wire eq;
  reg  eq_exp;
  wire lt;
  reg  lt_exp;
  integer i, errors = 0;
  cmp2 dut (.a(a), .b(b), .gt(gt), .eq(eq), .lt(lt));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("a b | gt eq lt");
    for (i = 0; i < 16; i = i + 1) begin
      {a, b} = i;
      #10;
      gt_exp = a > b;
      eq_exp = a == b;
      lt_exp = a < b;
      if (i < 16) $display("%b %b | %b %b %b", a, b, gt, eq, lt);
      if (gt !== gt_exp || eq !== eq_exp || lt !== lt_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b %b", a, b, gt_exp, eq_exp, lt_exp);
      end
    end
    if (errors == 0) $display("PASS: all 16 input combinations correct");
    else             $display("FAIL: %0d of 16 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 2-bit magnitude comparator from the K-map equations (gate level, no > or <):
//   eq = (a1 ~^ b1)(a0 ~^ b0)
//   gt = a1\xB7b1' + (a1 ~^ b1)\xB7a0\xB7b0'
//   lt = a1'\xB7b1 + (a1 ~^ b1)\xB7a0'\xB7b0
module cmp2 (
  input  wire [1:0] a, b,
  output wire gt, eq, lt
);
  wire e1 = ~(a[1] ^ b[1]), e0 = ~(a[0] ^ b[0]);
  assign eq = e1 & e0;
  assign gt = (a[1] & ~b[1]) | (e1 & a[0] & ~b[0]);
  assign lt = (~a[1] & b[1]) | (e1 & ~a[0] & b[0]);
endmodule
`}},{id:"l30-cmp4",group:"ld-comb",tag:"Logic 2 \xB7 Lab 6",title:"4-bit comparator with cascade (7485)",std:"2005",design:`// 4-bit magnitude comparator with cascade inputs, like the 7485.
// Compare A and B. If they are equal, the result comes from the cascade inputs
// (i_gt, i_eq, i_lt), which connect to the outputs of a lower-order comparator.
// For a single chip, tie i_eq = 1 and i_gt = i_lt = 0.
module cmp4 (
  input  wire [3:0] A, B,
  input  wire       i_gt, i_eq, i_lt,
  output wire       gt, eq, lt
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] A;
  reg  [3:0] B;
  reg  i_gt;
  reg  i_eq;
  reg  i_lt;
  wire gt;
  reg  gt_exp;
  wire eq;
  reg  eq_exp;
  wire lt;
  reg  lt_exp;
  integer i, errors = 0;
  cmp4 dut (.A(A), .B(B), .i_gt(i_gt), .i_eq(i_eq), .i_lt(i_lt), .gt(gt), .eq(eq), .lt(lt));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 2048; i = i + 1) begin
      {A, B, i_gt, i_eq, i_lt} = i;
      #10;
      gt_exp = (A > B) | ((A == B) & i_gt);
      lt_exp = (A < B) | ((A == B) & i_lt);
      eq_exp = (A == B) & i_eq;
      
      if (gt !== gt_exp || eq !== eq_exp || lt !== lt_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b %b %b: expected %b %b %b", A, B, i_gt, i_eq, i_lt, gt_exp, eq_exp, lt_exp);
      end
    end
    if (errors == 0) $display("PASS: all 2048 input combinations correct");
    else             $display("FAIL: %0d of 2048 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-bit magnitude comparator with cascade inputs, like the 7485.
// Compare A and B. If they are equal, the result comes from the cascade inputs
// (i_gt, i_eq, i_lt), which connect to the outputs of a lower-order comparator.
// For a single chip, tie i_eq = 1 and i_gt = i_lt = 0.
module cmp4 (
  input  wire [3:0] A, B,
  input  wire       i_gt, i_eq, i_lt,
  output wire       gt, eq, lt
);
  assign gt = (A > B) | ((A == B) & i_gt);
  assign lt = (A < B) | ((A == B) & i_lt);
  assign eq = (A == B) & i_eq;
endmodule
`}},{id:"l14-dec38",group:"ld-comb",tag:"Logic 2 \xB7 Lab 7",title:"3-to-8 decoder with enables (74138)",std:"2005",design:`// 3-to-8 decoder with three enables, like the 74138: outputs are active LOW.
// The decoder is enabled when g1 = 1 and g2a_n = 0 and g2b_n = 0. Then y_n[a] = 0 and every
// other output is 1. When disabled, all outputs are 1.
module dec74138 (
  input  wire [2:0] a,
  input  wire       g1, g2a_n, g2b_n,
  output wire [7:0] y_n
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [2:0] a;
  reg  g1;
  reg  g2a_n;
  reg  g2b_n;
  wire [7:0] y_n;
  reg  [7:0] y_n_exp;
  integer i, errors = 0;
  dec74138 dut (.a(a), .g1(g1), .g2a_n(g2a_n), .g2b_n(g2b_n), .y_n(y_n));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 64; i = i + 1) begin
      {a, g1, g2a_n, g2b_n} = i;
      #10;
      y_n_exp = (g1 & ~g2a_n & ~g2b_n) ? ~(8'b1 << a) : 8'hFF;
      
      if (y_n !== y_n_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b %b: expected %b", a, g1, g2a_n, g2b_n, y_n_exp);
      end
    end
    if (errors == 0) $display("PASS: all 64 input combinations correct");
    else             $display("FAIL: %0d of 64 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 3-to-8 decoder with three enables, like the 74138: outputs are active LOW.
// The decoder is enabled when g1 = 1 and g2a_n = 0 and g2b_n = 0. Then y_n[a] = 0 and every
// other output is 1. When disabled, all outputs are 1.
module dec74138 (
  input  wire [2:0] a,
  input  wire       g1, g2a_n, g2b_n,
  output wire [7:0] y_n
);
  wire en = g1 & ~g2a_n & ~g2b_n;
  assign y_n = en ? ~(8'b0000_0001 << a) : 8'hFF;
endmodule
`}},{id:"l11-dec-fa",group:"ld-comb",tag:"Logic 2 \xB7 Lab 8",title:"Full adder from a decoder",std:"2005",design:`// 3-to-8 decoder (given): exactly one output y[n] is 1, where n = {a2, a1, a0}.
module decoder3x8 (
  input  wire a2, a1, a0,
  output wire [7:0] y
);
  assign y = 8'b0000_0001 << {a2, a1, a0};
endmodule

// A full adder from a 3-to-8 decoder and two OR gates:
//   S = \u03A3m(1, 2, 4, 7)   C = \u03A3m(3, 5, 6, 7)   with {a2, a1, a0} = {A, B, Cin}
module fa_decoder (
  input  wire A, B, Cin,
  output wire S, C
);
  // TODO: instantiate decoder3x8 and OR the right outputs together

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  Cin;
  wire S;
  reg  S_exp;
  wire C;
  reg  C_exp;
  integer i, errors = 0;
  fa_decoder dut (.A(A), .B(B), .Cin(Cin), .S(S), .C(C));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B Cin | S C");
    for (i = 0; i < 8; i = i + 1) begin
      {A, B, Cin} = i;
      #10;
      S_exp = (A + B + Cin) & 1;
      C_exp = ({1'b0, A} + B + Cin) >> 1;
      if (i < 16) $display("%b %b %b | %b %b", A, B, Cin, S, C);
      if (S !== S_exp || C !== C_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b", A, B, Cin, S_exp, C_exp);
      end
    end
    if (errors == 0) $display("PASS: all 8 input combinations correct");
    else             $display("FAIL: %0d of 8 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 3-to-8 decoder (given): exactly one output y[n] is 1, where n = {a2, a1, a0}.
module decoder3x8 (
  input  wire a2, a1, a0,
  output wire [7:0] y
);
  assign y = 8'b0000_0001 << {a2, a1, a0};
endmodule

// A full adder from a 3-to-8 decoder and two OR gates:
//   S = \u03A3m(1, 2, 4, 7)   C = \u03A3m(3, 5, 6, 7)   with {a2, a1, a0} = {A, B, Cin}
module fa_decoder (
  input  wire A, B, Cin,
  output wire S, C
);
  wire [7:0] m;
  decoder3x8 u (.a2(A), .a1(B), .a0(Cin), .y(m));
  assign S = m[1] | m[2] | m[4] | m[7];
  assign C = m[3] | m[5] | m[6] | m[7];
endmodule
`}},{id:"l15-enc83",group:"ld-comb",tag:"Logic 2 \xB7 Lab 9",title:"8-to-3 encoder and priority encoder",std:"2005",design:`// 8-to-3 encoder and 8-to-3 priority encoder.
//   enc:  d is one-hot; y is the position of its 1 (valid = 0 if d is not one-hot)
//   penc: y_p is the position of the HIGHEST 1 in d; any = 0 when d = 0
module encoders (
  input  wire [7:0] d,
  output reg  [2:0] y, y_p,
  output reg        valid, any
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [7:0] d;
  wire [2:0] y;
  reg  [2:0] y_exp;
  wire [2:0] y_p;
  reg  [2:0] y_p_exp;
  wire valid;
  reg  valid_exp;
  wire any;
  reg  any_exp;
  integer i, errors = 0;
  encoders dut (.d(d), .y(y), .y_p(y_p), .valid(valid), .any(any));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 256; i = i + 1) begin
      {d} = i;
      #10;
      valid_exp = (d != 0) && ((d & (d - 1)) == 0);
      any_exp = d != 0;
      y_exp = ((d != 0) && ((d & (d - 1)) == 0)) ? (d[1] | d[3] | d[5] | d[7]) | ((d[2] | d[3] | d[6] | d[7]) << 1) | ((d[4] | d[5] | d[6] | d[7]) << 2) : 0;
      y_p_exp = d[7] ? 7 : d[6] ? 6 : d[5] ? 5 : d[4] ? 4 : d[3] ? 3 : d[2] ? 2 : d[1] ? 1 : 0;
      
      if (y !== y_exp || y_p !== y_p_exp || valid !== valid_exp || any !== any_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b: expected %b %b %b %b", d, y_exp, y_p_exp, valid_exp, any_exp);
      end
    end
    if (errors == 0) $display("PASS: all 256 input combinations correct");
    else             $display("FAIL: %0d of 256 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 8-to-3 encoder and 8-to-3 priority encoder.
//   enc:  d is one-hot; y is the position of its 1 (valid = 0 if d is not one-hot)
//   penc: y_p is the position of the HIGHEST 1 in d; any = 0 when d = 0
module encoders (
  input  wire [7:0] d,
  output reg  [2:0] y, y_p,
  output reg        valid, any
);
  integer k;
  always @(*) begin
    y = 0; valid = 0;
    case (d)
      8'h01: begin y = 0; valid = 1; end   8'h02: begin y = 1; valid = 1; end
      8'h04: begin y = 2; valid = 1; end   8'h08: begin y = 3; valid = 1; end
      8'h10: begin y = 4; valid = 1; end   8'h20: begin y = 5; valid = 1; end
      8'h40: begin y = 6; valid = 1; end   8'h80: begin y = 7; valid = 1; end
      default: ;
    endcase
    y_p = 0; any = (d != 0);
    for (k = 0; k < 8; k = k + 1) if (d[k]) y_p = k;
  end
endmodule
`}},{id:"l13-mux-demux",group:"ld-comb",tag:"Logic 2 \xB7 Lab 10",title:"8-to-1 mux and 1-to-8 demux",std:"2005",design:`// 8-to-1 multiplexer and 1-to-8 demultiplexer.
//   mux:   y = d[sel]
//   demux: the input x goes to output o[sel]; every other output is 0
module mux_demux (
  input  wire [7:0] d,
  input  wire [2:0] sel,
  input  wire       x,
  output wire       y,
  output wire [7:0] o
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [7:0] d;
  reg  [2:0] sel;
  reg  x;
  wire y;
  reg  y_exp;
  wire [7:0] o;
  reg  [7:0] o_exp;
  integer i, errors = 0;
  mux_demux dut (.d(d), .sel(sel), .x(x), .y(y), .o(o));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 4096; i = i + 1) begin
      {d, sel, x} = i;
      #10;
      y_exp = d[sel];
      o_exp = {7'b0, x} << sel;
      
      if (y !== y_exp || o !== o_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b: expected %b %b", d, sel, x, y_exp, o_exp);
      end
    end
    if (errors == 0) $display("PASS: all 4096 input combinations correct");
    else             $display("FAIL: %0d of 4096 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 8-to-1 multiplexer and 1-to-8 demultiplexer.
//   mux:   y = d[sel]
//   demux: the input x goes to output o[sel]; every other output is 0
module mux_demux (
  input  wire [7:0] d,
  input  wire [2:0] sel,
  input  wire       x,
  output wire       y,
  output wire [7:0] o
);
  assign y = d[sel];
  assign o = {7'b0, x} << sel;
endmodule
`}},{id:"l12-mux-fn",group:"ld-comb",tag:"Logic 2 \xB7 Lab 11",title:"Boolean function on an 8-to-1 mux (74151)",std:"2005",design:`// 8-to-1 multiplexer (given, like a 74151): y = d[{s2, s1, s0}]
module mux8 (
  input  wire [7:0] d,
  input  wire       s2, s1, s0,
  output wire       y
);
  assign y = d[{s2, s1, s0}];
endmodule

// F(A, B, C, D) = \u03A3m(1, 3, 4, 11, 12, 13, 14, 15) with ONE 8-to-1 multiplexer.
// A, B, C drive the select lines (s2, s1, s0). Each data input is 0, 1, D or D'.
// Work out each data input from the truth table, two rows (D = 0 and D = 1) at a time.
module mux_fn (
  input  wire A, B, C, D,
  output wire F
);
  // TODO: instantiate mux8 with the right data inputs

endmodule
`,tb:`module tb;
  reg  A;
  reg  B;
  reg  C;
  reg  D;
  wire F;
  reg  F_exp;
  integer i, errors = 0;
  mux_fn dut (.A(A), .B(B), .C(C), .D(D), .F(F));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    $display("A B C D | F");
    for (i = 0; i < 16; i = i + 1) begin
      {A, B, C, D} = i;
      #10;
      F_exp = (16'b1111100000011010 >> {A, B, C, D}) & 1;
      if (i < 16) $display("%b %b %b %b | %b", A, B, C, D, F);
      if (F !== F_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b %b %b: expected %b", A, B, C, D, F_exp);
      end
    end
    if (errors == 0) $display("PASS: all 16 input combinations correct");
    else             $display("FAIL: %0d of 16 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 8-to-1 multiplexer (given, like a 74151): y = d[{s2, s1, s0}]
module mux8 (
  input  wire [7:0] d,
  input  wire       s2, s1, s0,
  output wire       y
);
  assign y = d[{s2, s1, s0}];
endmodule

// F(A, B, C, D) = \u03A3m(1, 3, 4, 11, 12, 13, 14, 15) with ONE 8-to-1 multiplexer.
// A, B, C drive the select lines. Each data input is 0, 1, D or D'.
//   ABC=000: m0,m1 \u2192 F=D     001: m2,m3 \u2192 D     010: m4,m5 \u2192 D'    011: m6,m7 \u2192 0
//   ABC=100: m8,m9 \u2192 0       101: m10,m11 \u2192 D   110: m12,m13 \u2192 1    111: m14,m15 \u2192 1
module mux_fn (
  input  wire A, B, C, D,
  output wire F
);
  mux8 u (.d({1'b1, 1'b1, D, 1'b0, 1'b0, ~D, D, D}), .s2(A), .s1(B), .s0(C), .y(F));
endmodule
`}},{id:"l16-gray",group:"ld-comb",tag:"Logic 2 \xB7 Lab 12",title:"Binary to Gray code converter",std:"2005",design:`// 4-bit binary-to-Gray and Gray-to-binary code converters.
//   Gray:   g3 = b3,   gi = b(i+1) ^ bi
//   binary: b3 = g3,   bi = b(i+1) ^ gi   (each bit depends on the one above it)
module gray_conv (
  input  wire [3:0] b, g,
  output wire [3:0] g_out, b_out
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg  [3:0] b;
  reg  [3:0] g;
  wire [3:0] g_out;
  reg  [3:0] g_out_exp;
  wire [3:0] b_out;
  reg  [3:0] b_out_exp;
  integer i, errors = 0;
  gray_conv dut (.b(b), .g(g), .g_out(g_out), .b_out(b_out));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    
    for (i = 0; i < 256; i = i + 1) begin
      {b, g} = i;
      #10;
      g_out_exp = b ^ (b >> 1);
      b_out_exp = {g[3], g[3]^g[2], g[3]^g[2]^g[1], g[3]^g[2]^g[1]^g[0]};
      
      if (g_out !== g_out_exp || b_out !== b_out_exp) begin
        errors = errors + 1;
        if (errors <= 5) $display("  wrong for input %b %b: expected %b %b", b, g, g_out_exp, b_out_exp);
      end
    end
    if (errors == 0) $display("PASS: all 256 input combinations correct");
    else             $display("FAIL: %0d of 256 input combinations wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// 4-bit binary-to-Gray and Gray-to-binary code converters.
//   Gray:   g3 = b3,   gi = b(i+1) ^ bi
//   binary: b3 = g3,   bi = b(i+1) ^ gi   (each bit depends on the one above it)
module gray_conv (
  input  wire [3:0] b, g,
  output wire [3:0] g_out, b_out
);
  assign g_out = b ^ (b >> 1);
  assign b_out[3] = g[3];
  assign b_out[2] = b_out[3] ^ g[2];
  assign b_out[1] = b_out[2] ^ g[1];
  assign b_out[0] = b_out[1] ^ g[0];
endmodule
`}},{id:"l20-7seg",group:"ld-comb",tag:"Logic 2 \xB7 Lab 13",title:"BCD to 7-segment decoder",std:"2005",design:`// BCD to 7-segment decoder (active-high segments, like a common-cathode display).
// seg = {a, b, c, d, e, f, g}. Digits 0 to 9; inputs 10 to 15 blank the display (all 0).
//      a
//    f   b
//      g
//    e   c
//      d
module seg7 (
  input  wire [3:0] bcd,
  output reg  [6:0] seg
);

  // TODO: write the design here

endmodule
`,tb:`module tb;
  reg [3:0] bcd; wire [6:0] seg;
  reg [6:0] t [0:15];
  integer i, errors = 0;
  seg7 dut (.bcd(bcd), .seg(seg));
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    t[0] = 7'b1111110; t[1] = 7'b0110000; t[2] = 7'b1101101; t[3] = 7'b1111001; t[4] = 7'b0110011;
    t[5] = 7'b1011011; t[6] = 7'b1011111; t[7] = 7'b1110000; t[8] = 7'b1111111; t[9] = 7'b1111011;
    for (i = 10; i < 16; i = i + 1) t[i] = 0;
    for (i = 0; i < 16; i = i + 1) begin
      bcd = i; #10;
      if (i < 10) begin
        $display("digit %0d  seg=%b", i, seg);
        $display("   %s", seg[6] ? " _ " : "   ");
        $display("   %s%s%s", seg[1] ? "|" : " ", seg[0] ? "_" : " ", seg[5] ? "|" : " ");
        $display("   %s%s%s", seg[2] ? "|" : " ", seg[3] ? "_" : " ", seg[4] ? "|" : " ");
      end
      if (seg !== t[i]) begin errors = errors + 1; if (errors <= 5) $display("  bcd %0d: seg=%b, expected %b", i, seg, t[i]); end
    end
    if (errors == 0) $display("PASS: all 16 inputs correct (10 digits and 6 blanks)");
    else             $display("FAIL: %0d of 16 inputs wrong", errors);
    $finish;
  end
endmodule
`,solution:{design:`// BCD to 7-segment decoder (active-high segments, like a common-cathode display).
// seg = {a, b, c, d, e, f, g}. Digits 0 to 9; inputs 10 to 15 blank the display (all 0).
//      a
//    f   b
//      g
//    e   c
//      d
module seg7 (
  input  wire [3:0] bcd,
  output reg  [6:0] seg
);
  always @(*)
    case (bcd)               // abcdefg
      4'd0: seg = 7'b1111110;
      4'd1: seg = 7'b0110000;
      4'd2: seg = 7'b1101101;
      4'd3: seg = 7'b1111001;
      4'd4: seg = 7'b0110011;
      4'd5: seg = 7'b1011011;
      4'd6: seg = 7'b1011111;
      4'd7: seg = 7'b1110000;
      4'd8: seg = 7'b1111111;
      4'd9: seg = 7'b1111011;
      default: seg = 7'b0000000;
    endcase
endmodule
`}},{id:"l21-srlatch",group:"ld-seq",tag:"Logic 3 \xB7 Lab 1",title:"SR latch from NAND gates",std:"2005",design:`\`timescale 1ns/10ps
// SR latch from two cross-coupled NAND gates (active-low inputs s_n and r_n).
//   s_n = 0: set (q = 1)    r_n = 0: reset (q = 0)    both 1: hold    both 0: not allowed
// Each gate has a 1 ns delay, like real gates.
module sr_latch (
  input  wire s_n, r_n,
  output wire q, q_n
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg s_n = 1, r_n = 1; wire q, q_n;
  integer errors = 0;
  sr_latch dut (.s_n(s_n), .r_n(r_n), .q(q), .q_n(q_n));
  task check(input exp, input [8*8-1:0] what);
    begin #5; $display("s_n=%b r_n=%b -> q=%b q_n=%b  (%0s)", s_n, r_n, q, q_n, what);
      if (q !== exp || q_n !== ~exp) errors = errors + 1; end
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    s_n = 0; check(1, "set");    s_n = 1; check(1, "hold");
    r_n = 0; check(0, "reset");  r_n = 1; check(0, "hold");
    s_n = 0; check(1, "set");    s_n = 1; check(1, "hold");
    if (errors == 0) $display("PASS: set, reset and hold all correct");
    else             $display("FAIL: %0d wrong results", errors);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// SR latch from two cross-coupled NAND gates (active-low inputs s_n and r_n).
//   s_n = 0: set (q = 1)    r_n = 0: reset (q = 0)    both 1: hold    both 0: not allowed
// Each gate has a 1 ns delay, like real gates.
module sr_latch (
  input  wire s_n, r_n,
  output wire q, q_n
);
  nand #1 g1 (q,   s_n, q_n);
  nand #1 g2 (q_n, r_n, q);
endmodule
`}},{id:"l22-ffs",group:"ld-seq",tag:"Logic 3 \xB7 Lab 2",title:"SR, JK, D and T flip-flops",std:"2005",design:`\`timescale 1ns/10ps
// The four flip-flops, from their characteristic tables (all on the rising edge of clk,
// with an asynchronous active-low reset).
//   SR: s r = 00 hold, 01 reset, 10 set, 11 not allowed (treat as hold)
//   JK: j k = 00 hold, 01 reset, 10 set, 11 toggle
//   D:  q+ = d
//   T:  t = 1 toggles, t = 0 holds
module flipflops (
  input  wire clk, rst_n, s, r, j, k, d, t,
  output reg  q_sr, q_jk, q_d, q_t
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg s = 0, r = 0, j = 0, k = 0, d = 0, t = 0;
  wire q_sr, q_jk, q_d, q_t;
  integer errors = 0, checks = 0, cyc;
  flipflops dut (.clk(clk), .rst_n(rst_n), .s(s), .r(r), .j(j), .k(k), .d(d), .t(t), .q_sr(q_sr), .q_jk(q_jk), .q_d(q_d), .q_t(q_t));
  always #5 clk = ~clk;
  // reference model
  reg ms, mj, md, mt;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {ms, mj, md, mt} <= 0;
    else begin
      if ({s, r} == 2'b01) ms <= 0; else if ({s, r} == 2'b10) ms <= 1;
      if ({j, k} == 2'b01) mj <= 0; else if ({j, k} == 2'b10) mj <= 1; else if ({j, k} == 2'b11) mj <= ~mj;
      md <= d; if (t) mt <= ~mt;
    end
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if ({q_sr, q_jk, q_d, q_t} !== {ms, mj, md, mt}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {q_sr, q_jk, q_d, q_t}, {ms, mj, md, mt}); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 200; cyc = cyc + 1) begin
      @(negedge clk);
      {s, r, j, k, d, t} = $random;
      if (cyc < 8) $display("s r=%b%b j k=%b%b d=%b t=%b | q_sr=%b q_jk=%b q_d=%b q_t=%b", s, r, j, k, d, t, q_sr, q_jk, q_d, q_t);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 200 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// The four flip-flops, from their characteristic tables (all on the rising edge of clk,
// with an asynchronous active-low reset).
//   SR: s r = 00 hold, 01 reset, 10 set, 11 not allowed (treat as hold)
//   JK: j k = 00 hold, 01 reset, 10 set, 11 toggle
//   D:  q+ = d
//   T:  t = 1 toggles, t = 0 holds
module flipflops (
  input  wire clk, rst_n, s, r, j, k, d, t,
  output reg  q_sr, q_jk, q_d, q_t
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) {q_sr, q_jk, q_d, q_t} <= 4'b0000;
    else begin
      case ({s, r}) 2'b01: q_sr <= 1'b0; 2'b10: q_sr <= 1'b1; default: q_sr <= q_sr; endcase
      case ({j, k}) 2'b01: q_jk <= 1'b0; 2'b10: q_jk <= 1'b1; 2'b11: q_jk <= ~q_jk; default: q_jk <= q_jk; endcase
      q_d <= d;
      if (t) q_t <= ~q_t;
    end
endmodule
`}},{id:"l23-ripple",group:"ld-seq",tag:"Logic 3 \xB7 Lab 3",title:"3-bit ripple counter",std:"2005",design:`\`timescale 1ns/10ps
// 3-bit asynchronous (ripple) up counter from toggle flip-flops.
// Only q[0] is clocked by clk. Each next stage is clocked by the FALLING edge of the stage
// before it, so the count ripples through the stages one after the other.
module tff (input wire clk_n_edge, rst_n, output reg q);
  always @(negedge clk_n_edge or negedge rst_n)
    if (!rst_n) q <= 1'b0;
    else        q <= ~q;
endmodule

module ripple3 (
  input  wire clk, rst_n,
  output wire [2:0] q
);
  // TODO: three tff instances: t0 clocked by clk, t1 by q[0], t2 by q[1]

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0; wire [2:0] q;
  reg [2:0] exp = 0; integer i, errors = 0;
  ripple3 dut (.clk(clk), .rst_n(rst_n), .q(q));
  always #5 clk = ~clk;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (i = 0; i < 20; i = i + 1) begin
      @(negedge clk); exp = exp + 1; #3;            // the count changes on the falling edge of clk
      $display("count = %0d", q);
      if (q !== exp) begin errors = errors + 1; if (errors <= 5) $display("  expected %0d", exp); end
    end
    if (errors == 0) $display("PASS: the ripple counter counts 0 to 7 and wraps");
    else             $display("FAIL: %0d wrong counts", errors);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 3-bit asynchronous (ripple) up counter from toggle flip-flops.
// Only q[0] is clocked by clk. Each next stage is clocked by the FALLING edge of the stage
// before it, so the count ripples through the stages one after the other.
module tff (input wire clk_n_edge, rst_n, output reg q);
  always @(negedge clk_n_edge or negedge rst_n)
    if (!rst_n) q <= 1'b0;
    else        q <= ~q;
endmodule

module ripple3 (
  input  wire clk, rst_n,
  output wire [2:0] q
);
  tff t0 (.clk_n_edge(clk),  .rst_n(rst_n), .q(q[0]));
  tff t1 (.clk_n_edge(q[0]), .rst_n(rst_n), .q(q[1]));
  tff t2 (.clk_n_edge(q[1]), .rst_n(rst_n), .q(q[2]));
endmodule
`}},{id:"l24-sync",group:"ld-seq",tag:"Logic 3 \xB7 Lab 4",title:"3-bit synchronous counter",std:"2005",design:`\`timescale 1ns/10ps
// 3-bit synchronous up counter from T flip-flops: every flop gets the same clock.
// Hint: a bit toggles when all the bits below it are 1.
module sync3 (
  input  wire clk, rst_n,
  output reg  [2:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  
  wire [2:0] q;
  integer errors = 0, checks = 0, cyc;
  sync3 dut (.clk(clk), .rst_n(rst_n), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [2:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= m + 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 40; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc < 10) $display("q=%0d", q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 40 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 3-bit synchronous up counter from T flip-flops: every flop gets the same clock.
//   T0 = 1,   T1 = Q0,   T2 = Q0\xB7Q1   (a bit toggles when all the bits below it are 1)
module sync3 (
  input  wire clk, rst_n,
  output reg  [2:0] q
);
  wire [2:0] t = {q[1] & q[0], q[0], 1'b1};
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 3'd0;
    else        q <= q ^ t;            // a T flip-flop: toggle where t = 1
endmodule
`}},{id:"l32-updown",group:"ld-seq",tag:"Logic 3 \xB7 Lab 5",title:"MOD-8 up/down counter",std:"2005",design:`\`timescale 1ns/10ps
// 3-bit synchronous up/down counter (MOD-8). up = 1 counts 0,1,...,7,0; up = 0 counts down.
// Design it with T flip-flops: work out T0, T1 and T2 from the excitation table.
module updown3 (
  input  wire clk, rst_n, up,
  output reg  [2:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg up = 1;
  wire [2:0] q;
  integer errors = 0, checks = 0, cyc;
  updown3 dut (.clk(clk), .rst_n(rst_n), .up(up), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [2:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= up ? m + 1 : m - 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 100; cyc = cyc + 1) begin
      @(negedge clk);
      up = (cyc < 10) ? 1 : (cyc < 20) ? 0 : $random;
      if (cyc < 20) $display("up=%b q=%0d", up, q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 100 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 3-bit synchronous up/down counter (MOD-8). up = 1 counts 0,1,...,7,0; up = 0 counts down.
// From the excitation table with T flip-flops:
//   T0 = 1
//   T1 = up\xB7Q0 + up'\xB7Q0'
//   T2 = up\xB7Q1\xB7Q0 + up'\xB7Q1'\xB7Q0'
module updown3 (
  input  wire clk, rst_n, up,
  output reg  [2:0] q
);
  wire t0 = 1'b1;
  wire t1 = (up & q[0]) | (~up & ~q[0]);
  wire t2 = (up & q[1] & q[0]) | (~up & ~q[1] & ~q[0]);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 3'd0;
    else        q <= q ^ {t2, t1, t0};
endmodule
`}},{id:"l27-mod6",group:"ld-seq",tag:"Logic 3 \xB7 Lab 6",title:"MOD-6 counter",std:"2005",design:`\`timescale 1ns/10ps
// Mod-6 counter (0 to 5) built from a 3-bit counter and a clear: when the count reaches 5,
// the next clock loads 0. Used to divide a clock by 6, for example seconds \u2192 tens of seconds.
module mod6 (
  input  wire clk, rst_n,
  output reg  [2:0] q,
  output wire       tc          // terminal count: 1 when q = 5
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  
  wire [2:0] q; wire tc;
  integer errors = 0, checks = 0, cyc;
  mod6 dut (.clk(clk), .rst_n(rst_n), .q(q), .tc(tc));
  always #5 clk = ~clk;
  // reference model
  reg [2:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= (m == 5) ? 0 : m + 1;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if ({q, tc} !== {m, m == 3'd5}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {q, tc}, {m, m == 3'd5}); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 40; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc < 8) $display("q=%0d tc=%b", q, tc);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 40 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Mod-6 counter (0 to 5) built from a 3-bit counter and a clear: when the count reaches 5,
// the next clock loads 0. Used to divide a clock by 6, for example seconds \u2192 tens of seconds.
module mod6 (
  input  wire clk, rst_n,
  output reg  [2:0] q,
  output wire       tc          // terminal count: 1 when q = 5
);
  assign tc = (q == 3'd5);
  always @(posedge clk or negedge rst_n)
    if (!rst_n)  q <= 3'd0;
    else if (tc) q <= 3'd0;
    else         q <= q + 1'b1;
endmodule
`}},{id:"l25-ring",group:"ld-seq",tag:"Logic 3 \xB7 Lab 7",title:"Ring and Johnson counters",std:"2005",design:`\`timescale 1ns/10ps
// 4-bit ring counter and 4-bit Johnson counter.
//   ring:    reset to 1000, then the single 1 circulates: 1000 0100 0010 0001 1000 ...
//   johnson: reset to 0000, shift right and feed the INVERTED last bit back in:
//            0000 1000 1100 1110 1111 0111 0011 0001 0000 ...
module ring_johnson (
  input  wire clk, rst_n,
  output reg  [3:0] ring, john
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  
  wire [3:0] ring, john;
  integer errors = 0, checks = 0, cyc;
  ring_johnson dut (.clk(clk), .rst_n(rst_n), .ring(ring), .john(john));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] mr, mj;
  always @(posedge clk or negedge rst_n) if (!rst_n) begin mr <= 4'b1000; mj <= 0; end else begin mr <= {mr[0], mr[3:1]}; mj <= {~mj[0], mj[3:1]}; end
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if ({ring, john} !== {mr, mj}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {ring, john}, {mr, mj}); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 40; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc < 9) $display("ring=%b johnson=%b", ring, john);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 40 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 4-bit ring counter and 4-bit Johnson counter.
//   ring:    reset to 1000, then the single 1 circulates: 1000 0100 0010 0001 1000 ...
//   johnson: reset to 0000, shift right and feed the INVERTED last bit back in:
//            0000 1000 1100 1110 1111 0111 0011 0001 0000 ...
module ring_johnson (
  input  wire clk, rst_n,
  output reg  [3:0] ring, john
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin ring <= 4'b1000; john <= 4'b0000; end
    else begin
      ring <= {ring[0], ring[3:1]};
      john <= {~john[0], john[3:1]};
    end
endmodule
`}},{id:"l26-siso",group:"ld-seq",tag:"Logic 3 \xB7 Lab 8",title:"SISO shift register",std:"2005",design:`\`timescale 1ns/10ps
// 4-bit serial-in, serial-out shift register from D flip-flops.
// Data enters at q[3] and leaves at q[0] = sout, four clocks later.
module siso4 (
  input  wire clk, rst_n, sin,
  output reg  [3:0] q,
  output wire sout
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg sin = 0; reg [7:0] pat = 8'b1001_0000;
  wire [3:0] q; wire sout;
  integer errors = 0, checks = 0, cyc;
  siso4 dut (.clk(clk), .rst_n(rst_n), .sin(sin), .q(q), .sout(sout));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= {sin, m[3:1]};
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 60; cyc = cyc + 1) begin
      @(negedge clk);
      sin = (cyc < 8) ? pat[7 - cyc] : $random;
      if (cyc < 9) $display("clock %0d: sin=%b q=%b sout=%b", cyc, sin, q, sout);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 60 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 4-bit serial-in, serial-out shift register from D flip-flops.
// Data enters at q[3] and leaves at q[0] = sout, four clocks later.
module siso4 (
  input  wire clk, rst_n, sin,
  output reg  [3:0] q,
  output wire sout
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 4'b0000;
    else        q <= {sin, q[3:1]};
  assign sout = q[0];
endmodule
`}},{id:"l31-usr",group:"ld-seq",tag:"Logic 3 \xB7 Lab 9",title:"Universal shift register",std:"2005",design:`\`timescale 1ns/10ps
// 4-bit universal shift register: one register that can hold, shift right, shift left
// or load in parallel, chosen by the mode input.
//   mode = 00 hold,  01 shift right (sr_in enters at q[3]),
//          10 shift left (sl_in enters at q[0]),  11 parallel load from d
module usr4 (
  input  wire       clk, rst_n, sr_in, sl_in,
  input  wire [1:0] mode,
  input  wire [3:0] d,
  output reg  [3:0] q
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg sr_in = 0, sl_in = 0; reg [1:0] mode = 0; reg [3:0] d = 0;
  wire [3:0] q;
  integer errors = 0, checks = 0, cyc;
  usr4 dut (.clk(clk), .rst_n(rst_n), .sr_in(sr_in), .sl_in(sl_in), .mode(mode), .d(d), .q(q));
  always #5 clk = ~clk;
  // reference model
  reg [3:0] m;
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else case (mode) 1: m <= {sr_in, m[3:1]}; 2: m <= {m[2:0], sl_in}; 3: m <= d; default: ; endcase
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if (q !== m) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, q, m); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 150; cyc = cyc + 1) begin
      @(negedge clk);
      {sr_in, sl_in, mode, d} = $random;
      if (cyc < 8) $display("mode=%b d=%b sr_in=%b sl_in=%b | q=%b", mode, d, sr_in, sl_in, q);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 150 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// 4-bit universal shift register: one register that can hold, shift right, shift left
// or load in parallel, chosen by the mode input.
//   mode = 00 hold,  01 shift right (sr_in enters at q[3]),
//          10 shift left (sl_in enters at q[0]),  11 parallel load from d
module usr4 (
  input  wire       clk, rst_n, sr_in, sl_in,
  input  wire [1:0] mode,
  input  wire [3:0] d,
  output reg  [3:0] q
);
  always @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 4'b0000;
    else case (mode)
      2'b01:   q <= {sr_in, q[3:1]};
      2'b10:   q <= {q[2:0], sl_in};
      2'b11:   q <= d;
      default: q <= q;
    endcase
endmodule
`}},{id:"l28-fsm",group:"ld-seq",tag:"Logic 3 \xB7 Lab 10",title:"FSM from a state table",std:"2005",design:`\`timescale 1ns/10ps
// State machine design from a state table: a 2-bit Gray-code up/down counter.
// dir = 1 counts up the Gray sequence 00 \u2192 01 \u2192 11 \u2192 10 \u2192 00, dir = 0 counts down.
// Moore output z = 1 in state 10.
//   state  dir=0  dir=1
//    00     10     01
//    01     00     11
//    11     01     10
//    10     11     00
module gray_fsm (
  input  wire clk, rst_n, dir,
  output reg  [1:0] s,
  output wire z
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg dir = 1;
  wire [1:0] s; wire z;
  integer errors = 0, checks = 0, cyc;
  gray_fsm dut (.clk(clk), .rst_n(rst_n), .dir(dir), .s(s), .z(z));
  always #5 clk = ~clk;
  // reference model
  reg [1:0] m; reg [1:0] up [0:3]; reg [1:0] dn [0:3];
  initial begin up[0] = 1; up[1] = 3; up[3] = 2; up[2] = 0; dn[0] = 2; dn[1] = 0; dn[3] = 1; dn[2] = 3; end
  always @(posedge clk or negedge rst_n) if (!rst_n) m <= 0; else m <= dir ? up[m] : dn[m];
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if ({s, z} !== {m, m == 2'b10}) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {s, z}, {m, m == 2'b10}); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 120; cyc = cyc + 1) begin
      @(negedge clk);
      if (cyc >= 8) dir = $random;
      if (cyc < 8) $display("dir=%b state=%b z=%b", dir, s, z);
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 120 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// State machine design from a state table: a 2-bit Gray-code up/down counter.
// dir = 1 counts up the Gray sequence 00 \u2192 01 \u2192 11 \u2192 10 \u2192 00, dir = 0 counts down.
// Moore output z = 1 in state 10.
//   state  dir=0  dir=1
//    00     10     01
//    01     00     11
//    11     01     10
//    10     11     00
module gray_fsm (
  input  wire clk, rst_n, dir,
  output reg  [1:0] s,
  output wire z
);
  reg [1:0] n;
  always @(*)
    case (s)
      2'b00: n = dir ? 2'b01 : 2'b10;
      2'b01: n = dir ? 2'b11 : 2'b00;
      2'b11: n = dir ? 2'b10 : 2'b01;
      default: n = dir ? 2'b00 : 2'b11;
    endcase
  always @(posedge clk or negedge rst_n)
    if (!rst_n) s <= 2'b00;
    else        s <= n;
  assign z = (s == 2'b10);
endmodule
`}},{id:"l33-traffic",group:"ld-seq",tag:"Logic 3 \xB7 Lab 11",title:"Traffic light controller",std:"2005",design:`\`timescale 1ns/10ps
// Traffic light controller (Moore state machine) for a main road and a side road.
// The main road stays green until a car waits on the side road (car = 1).
//   S0 main green, side red     \u2192 S1 when car = 1
//   S1 main yellow, side red    \u2192 S2 after 1 clock
//   S2 main red, side green     \u2192 S3 after 3 clocks (count with timer)
//   S3 main red, side yellow    \u2192 S0 after 1 clock
// Lights are {red, yellow, green} for each road.
module traffic (
  input  wire       clk, rst_n, car,
  output reg  [2:0] main_l, side_l
);

  // TODO: write the design here

endmodule
`,tb:`\`timescale 1ns/10ps
module tb;
  reg clk = 0, rst_n = 0;
  reg car = 0;
  wire [2:0] main_l, side_l;
  integer errors = 0, checks = 0, cyc;
  traffic dut (.clk(clk), .rst_n(rst_n), .car(car), .main_l(main_l), .side_l(side_l));
  always #5 clk = ~clk;
  // reference model
  reg [1:0] ms; reg [1:0] mt;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin ms <= 0; mt <= 0; end
    else case (ms) 0: if (car) ms <= 1; 1: begin ms <= 2; mt <= 0; end 2: if (mt == 2) ms <= 3; else mt <= mt + 1; default: ms <= 0; endcase
  wire [5:0] ml = (ms == 0) ? 6'b001_100 : (ms == 1) ? 6'b010_100 : (ms == 2) ? 6'b100_001 : 6'b100_010;
  // check 1 ns before every rising edge
  always @(negedge clk) if (rst_n) begin
    #4;
    if ({main_l, side_l} !== ml) begin errors = errors + 1; if (errors <= 5) $display("  at %0t ns: got %b, expected %b", $time, {main_l, side_l}, ml); end
    checks = checks + 1;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    rst_n = 1;
    for (cyc = 0; cyc < 120; cyc = cyc + 1) begin
      @(negedge clk);
      car = (cyc < 3) ? 0 : (cyc < 12) ? (cyc == 4) : $random;
      if (cyc < 12) $display("car=%b  main=%s  side=%s", car, main_l[0] ? "GREEN " : main_l[1] ? "YELLOW" : "RED   ", side_l[0] ? "GREEN " : side_l[1] ? "YELLOW" : "RED   ");
    end
    @(negedge clk);
    if (errors == 0) $display("PASS: 120 cycles checked, the design matches the model");
    else             $display("FAIL: %0d of %0d checks wrong", errors, checks);
    $finish;
  end
endmodule
`,solution:{design:`\`timescale 1ns/10ps
// Traffic light controller (Moore state machine) for a main road and a side road.
// The main road stays green until a car waits on the side road (car = 1).
//   S0 main green, side red     \u2192 S1 when car = 1
//   S1 main yellow, side red    \u2192 S2 after 1 clock
//   S2 main red, side green     \u2192 S3 after 3 clocks (count with timer)
//   S3 main red, side yellow    \u2192 S0 after 1 clock
// Lights are {red, yellow, green} for each road.
module traffic (
  input  wire       clk, rst_n, car,
  output reg  [2:0] main_l, side_l
);
  localparam S0 = 2'd0, S1 = 2'd1, S2 = 2'd2, S3 = 2'd3;
  reg [1:0] state;
  reg [1:0] timer;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) begin state <= S0; timer <= 0; end
    else case (state)
      S0: if (car) state <= S1;
      S1: begin state <= S2; timer <= 0; end
      S2: if (timer == 2) state <= S3; else timer <= timer + 1'b1;
      default: state <= S0;
    endcase
  always @(*)
    case (state)
      S0: begin main_l = 3'b001; side_l = 3'b100; end
      S1: begin main_l = 3'b010; side_l = 3'b100; end
      S2: begin main_l = 3'b100; side_l = 3'b001; end
      default: begin main_l = 3'b100; side_l = 3'b010; end
    endcase
endmodule
`}}];function Me(t){let e=[],n=new Map,s=[],i="",r=0,c=t.split(/\s+/),a=!0,S=0,_=0;for(;r<c.length;){let g=c[r++];if(!g)continue;if(a){if(g==="$scope"){for(r++,s.push(c[r++]);c[r]!=="$end";)r++;r++}else if(g==="$upscope"){for(s.pop();c[r]!=="$end";)r++;r++}else if(g==="$timescale"){let y=[];for(;c[r]!=="$end";)y.push(c[r++]);r++,i=y.join("")}else if(g==="$var"){let y=c[r++],h=parseInt(c[r++],10),l=c[r++],m=[];for(;c[r]!=="$end";)m.push(c[r++]);r++;let f=m[0];m[1]&&m[1].startsWith("[")&&(f+=m[1]);let q=[...s,f].join(".");if(y==="parameter")continue;if(n.has(l)){n.get(l).aliases.push(q);continue}let A=[...s.slice(1),f].join("."),R={id:l,name:q,short:A||f,depth:s.length,width:h,type:y,changes:[],aliases:[]};n.set(l,R),e.push(R)}else if(g==="$enddefinitions"){for(;c[r]!=="$end";)r++;r++,a=!1}else if(g.startsWith("$")){for(;r<c.length&&c[r]!=="$end";)r++;r++}continue}let u=g[0];if(u==="#")S=Number(g.slice(1)),S>_&&(_=S);else if(u!=="$")if(u==="b"||u==="B"||u==="r"||u==="R"){let y=g.slice(1),h=c[r++],l=n.get(h);l&&Ee(l,S,u==="r"||u==="R"?Number(y):y)}else{let y=n.get(g.slice(1));y&&Ee(y,S,u.toLowerCase())}}return{signals:e,timescale:i,endTime:_}}function Ee(t,e,n){let s=t.changes;s.length&&s[s.length-1][0]===e?s[s.length-1][1]=n:(!s.length||s[s.length-1][1]!==n)&&s.push([e,n])}function He(t,e){let n=t.changes,s=0,i=n.length-1,r=-1;for(;s<=i;){let c=s+i>>1;n[c][0]<=e?(r=c,s=c+1):i=c-1}return r<0?null:n[r][1]}function Ae(t,e,n){if(e==null)return"";if(typeof e=="number")return String(+e.toPrecision(6));if(t.width===1)return e;let s=e.padStart(t.width,e[0]==="x"||e[0]==="z"?e[0]:"0");if(/[xz]/i.test(s))return/^x+$/i.test(s)?"x":/^z+$/i.test(s)?"z":n==="bin"?s:"x";if(n==="bin")return s;let i=BigInt("0b"+s);if(n==="dec")return i.toString(10);if(n==="sdec"){let r=BigInt(t.width);return(s[0]==="1"?i-(1n<<r):i).toString(10)}return i.toString(16).toUpperCase().padStart(Math.ceil(t.width/4),"0")}var pe=class{constructor(e,n){this.c=e,this.ctx=e.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=n.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=n.theme,e.addEventListener("mousedown",s=>this.click(s)),e.addEventListener("wheel",s=>this.wheel(s),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(e.parentElement)}setData(e){this.data=e,this.cursor=null,this.t0=0,this.t1=Math.max(1,e.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(e,n){if(!this.data)return;let s=this.t1-this.t0,i=n??this.cursor??this.t0+s/2,r=Math.min(Math.max(s*e,2),Math.max(1,this.data.endTime)*1.05),c=i-(i-this.t0)*(r/s);c=Math.max(0,Math.min(c,Math.max(0,this.data.endTime-r))),this.t0=c,this.t1=c+r,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(e){if(!this.data)return;let n=this.t1-this.t0,s=this.t0+n*e;s=Math.max(0,Math.min(s,Math.max(0,this.data.endTime-n))),this.t0=s,this.t1=s+n,this.draw()}xOf(e,n){return this.nameW+(e-this.t0)/(this.t1-this.t0)*(n-this.nameW-8)}tOf(e,n){return this.t0+(e-this.nameW)/(n-this.nameW-8)*(this.t1-this.t0)}click(e){if(!this.data)return;let n=this.c.getBoundingClientRect(),s=e.clientX-n.left;s<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(s,n.width))),this.draw(),this.onCursor(this.cursor))}wheel(e){if(!this.data)return;let n=this.c.getBoundingClientRect();e.ctrlKey||e.metaKey||Math.abs(e.deltaY)>Math.abs(e.deltaX)&&e.shiftKey===!1&&e.altKey?(e.preventDefault(),this.zoom(e.deltaY>0?1.25:.8,this.tOf(e.clientX-n.left,n.width))):(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey)&&(e.preventDefault(),this.pan((e.deltaX||e.deltaY)/600))}draw(){let e=this.theme(),s=this.c.parentElement.clientWidth;this.nameW=s<640?112:190;let i=this.data?this.data.signals:[],r=this.axisH+Math.max(i.length,3)*this.rowH+8,c=window.devicePixelRatio||1;this.c.style.width=s+"px",this.c.style.height=r+"px",this.c.width=Math.round(s*c),this.c.height=Math.round(r*c);let a=this.ctx;if(a.setTransform(c,0,0,c,0,0),a.fillStyle=e.bg,a.fillRect(0,0,s,r),a.font="12px 'JetBrains Mono', ui-monospace, monospace",a.textBaseline="middle",!this.data){a.fillStyle=e.muted,a.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,r/2);return}let S=this.t1-this.t0,_=(s-this.nameW)/110,g=S/Math.max(1,_),u=Math.pow(10,Math.floor(Math.log10(g))),y=[1,2,5,10].map(h=>h*u).find(h=>h>=g)||u*10;a.strokeStyle=e.grid,a.fillStyle=e.muted,a.lineWidth=1;for(let h=Math.ceil(this.t0/y)*y;h<=this.t1;h+=y){let l=Math.round(this.xOf(h,s))+.5;a.beginPath(),a.moveTo(l,this.axisH-6),a.lineTo(l,r),a.stroke(),a.fillText(he(h,this.data.timescale),l+3,11)}if(a.strokeStyle=e.line,a.beginPath(),a.moveTo(0,this.axisH+.5),a.lineTo(s,this.axisH+.5),a.stroke(),i.forEach((h,l)=>{let m=this.axisH+l*this.rowH,f=m+6,q=m+this.rowH-6,A=(f+q)/2;a.fillStyle=l%2?e.rowAlt:e.bg,a.fillRect(0,m+1,s,this.rowH-1),a.fillStyle=e.text;let R=h.short+(h.width>1&&!h.short.includes("[")?` [${h.width-1}:0]`:"");a.fillText(We(a,R,this.nameW-16),10,A),a.save(),a.beginPath(),a.rect(this.nameW,m,s-this.nameW,this.rowH),a.clip();let F=h.changes;for(let L=0;L<F.length;L++){let M=F[L][0],U=L+1<F.length?F[L+1][0]:this.data.endTime;if(U<this.t0||M>this.t1)continue;let T=this.xOf(M,s),v=this.xOf(U,s),D=F[L][1];if(h.width===1&&typeof D=="string"){let C=D==="x"?e.x:D==="z"?e.z:e.wave;a.strokeStyle=C,a.lineWidth=1.5,D==="x"&&(a.fillStyle=e.xFill,a.fillRect(T,f,v-T,q-f));let J=D==="1"?f:D==="0"?q:A;if(a.beginPath(),L>0){let B=F[L-1][1],Q=B==="1"?f:B==="0"?q:A;a.moveTo(T,Q)}else a.moveTo(T,J);a.lineTo(T,J),a.lineTo(v,J),a.stroke()}else{let C=Ae(h,D,this.radix),J=C==="x"||C==="z";a.strokeStyle=J?e.x:e.wave,a.lineWidth=1.2,a.fillStyle=J?e.xFill:e.busFill;let B=Math.min(4,(v-T)/2);a.beginPath(),a.moveTo(T,A),a.lineTo(T+B,f),a.lineTo(v-B,f),a.lineTo(v,A),a.lineTo(v-B,q),a.lineTo(T+B,q),a.closePath(),a.fill(),a.stroke();let Q=v-T-10;Q>14&&(a.fillStyle=e.text,a.fillText(We(a,C,Q),Math.max(T,this.nameW)+6,A))}}a.restore()}),a.strokeStyle=e.line,a.beginPath(),a.moveTo(this.nameW+.5,0),a.lineTo(this.nameW+.5,r),a.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let h=Math.round(this.xOf(this.cursor,s))+.5;a.strokeStyle=e.cursor,a.lineWidth=1.5,a.beginPath(),a.moveTo(h,0),a.lineTo(h,r),a.stroke()}}};function We(t,e,n){if(t.measureText(e).width<=n)return e;for(;e.length>1&&t.measureText(e+"\u2026").width>n;)e=e.slice(0,-1);return e+"\u2026"}function he(t,e){let n=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(e||"");if(!n)return String(t);let s=["fs","ps","ns","us","ms","s"],i=t*Number(n[1]),r=s.indexOf(n[2]);for(;r<s.length-1&&Math.abs(i)>=1e3&&i%1e3===0;)i/=1e3,r++;return r<2&&Math.abs(i)>=1e3&&(i/=1e3,r++,i=+i.toFixed(3)),`${i} ${s[r]}`}var be=document.body.dataset.lab;var je=t=>be==="systemverilog"?t==="sv":be==="logic"?t.startsWith("ld-"):t!=="sv"&&!t.startsWith("ld-"),Ge=[...Ce.map(t=>({group:"examples",...t})),...Ne];for(let t of Ge)t.quiz=Be[t.id]||[];var N=Ge.filter(t=>je(t.group)),sn=[{id:"examples",title:"Examples",note:"Ready-to-copy examples: counters, FSMs, FIFOs, CDC synchronizers, SystemVerilog. Edit anything and press Run."},...Pe.map(t=>({...t,note:"Write the design in the Design pane: the ports are given. The testbench checks it and prints PASS or FAIL. A \u2713 marks the labs you have passed."}))],ye=sn.filter(t=>je(t.id)),oe="vdd-vlabs-code-v1",fe="vdd-vlabs-pass-v1",ae=t=>{try{return JSON.parse(localStorage.getItem(t)||"{}")||{}}catch{return{}}},qe=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch{}},w=t=>document.querySelector(t),ze=15e3,Xe=be==="systemverilog"?"vdd-svlabs-v1":be==="logic"?"vdd-logiclabs-v1":"vdd-playground-v1",p={example:N[0].id,track:N[0].group,usedSolution:!1,std:N[0].std,running:!1,worker:null,ready:!1,timer:null,startedAt:0,lastVcd:null};function Ue(t){let e=t.querySelector("textarea");if(window.CodeMirror){let n=window.CodeMirror.fromTextArea(e,{mode:"verilog",lineNumbers:!0,indentUnit:2,tabSize:2,smartIndent:!0,matchBrackets:!0,viewportMargin:1/0,extraKeys:{Tab:s=>s.replaceSelection("  ")}});return{get:()=>n.getValue(),set:s=>{n.setValue(s),n.clearHistory()},onChange:s=>n.on("change",s),refresh:()=>n.refresh(),goto:s=>{n.focus(),n.setCursor({line:s-1,ch:0}),n.addLineClass(s-1,"background","cm-errline"),setTimeout(()=>n.removeLineClass(s-1,"background","cm-errline"),2500),n.scrollIntoView({line:s-1,ch:0},80)},addKeys:s=>n.addKeyMap(s)}}return e.classList.add("plain-editor"),{get:()=>e.value,set:n=>{e.value=n},onChange:n=>e.addEventListener("input",n),refresh(){},goto:n=>{let s=e.value.split(`
`),i=0;for(let r=0;r<n-1&&r<s.length;r++)i+=s[r].length+1;e.focus(),e.setSelectionRange(i,i+(s[n-1]||"").length)},addKeys(){}}}var I={design:Ue(w("#ed-design")),tb:Ue(w("#ed-tb"))};function de(){return p.std==="2012"?{design:"design.sv",tb:"testbench.sv"}:{design:"design.v",tb:"testbench.v"}}function ve(){let t=de();w("#name-design").textContent=t.design,w("#name-tb").textContent=t.tb}var rn=()=>ye.find(t=>t.id===p.track)||ye[0],an=t=>(N.find(e=>e.id===t)||N[0]).group;function le(){let t=w("#vtracks");t.innerHTML="";for(let e of ye){let n=document.createElement("button");n.type="button",n.className="vtrack"+(e.id===p.track?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",e.id===p.track?"true":"false");let s=N.filter(r=>r.group===e.id),i=e.id==="examples"?0:s.filter(r=>ae(fe)[r.id]).length;n.innerHTML='<span class="vtrack-t"></span><span class="vtrack-n"></span>',n.querySelector(".vtrack-t").textContent=e.title,n.querySelector(".vtrack-n").textContent=s.length+(e.id==="examples"?" examples":" labs")+(i?` \xB7 ${i} \u2713`:""),n.addEventListener("click",()=>on(e.id)),t.appendChild(n)}w("#vtrack-note").textContent=rn().note,document.body.dataset.track!==p.track&&(document.body.dataset.track=p.track,document.dispatchEvent(new CustomEvent("vdd-track"))),w("#side-title").textContent=p.track==="examples"?"// Examples":"// Labs",w("#side-note").hidden=p.track!=="examples",w("#reset").textContent=p.track==="examples"?"Reset example":"Reset lab"}function on(t){p.track=t;try{let e=new URL(location.href);e.searchParams.set("track",t),history.replaceState(null,"",e.pathname+e.search)}catch{}an(p.example)!==t?te(N.find(e=>e.group===t).id):(le(),re())}var ce=null;function re(){let t=w("#examples");t.innerHTML="";let e=ae(fe),n=N.filter(i=>i.group===p.track);for(let i of n){let r=document.createElement("button");if(r.type="button",r.className="ex"+(i.id===p.example?" active":""),r.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',r.querySelector(".ex-tag").textContent=i.tag,e[i.id]){let a=document.createElement("span");a.className="ex-pass",a.textContent="\u2713 passed",r.querySelector(".ex-tag").appendChild(a)}let c=ce&&ce.status(i.id);if(c&&c.checked){let a=document.createElement("span");a.className="ex-pass",a.textContent=`quiz ${c.score}/${c.total}`,r.querySelector(".ex-tag").appendChild(a)}r.querySelector(".ex-title").textContent=i.title,r.addEventListener("click",()=>te(i.id)),t.appendChild(r)}let s=w("#ex-select");s.innerHTML=n.map(i=>`<option value="${i.id}">${i.group==="examples"?"":i.tag+" \xB7 "}${i.title}</option>`).join(""),n.some(i=>i.id===p.example)&&(s.value=p.example)}function dn(){let t=N.find(n=>n.id===p.example);if(!t||t.group==="examples")return;let e=ae(oe);e[t.id]={design:I.design.get(),tb:I.tb.get()},qe(oe,e)}function te(t,e){let n=N.find(i=>i.id===t)||N[0];p.example=n.id,p.std=n.std,p.track=n.group,p.usedSolution=!1,w("#std").value=n.std;let s=!e&&n.group!=="examples"?ae(oe)[n.id]:null;if(I.design.set(s?s.design:n.design),I.tb.set(s?s.tb:n.tb),e&&n.group!=="examples"){let i=ae(oe);delete i[n.id],qe(oe,i)}w("#show-solution").hidden=!n.solution,ve(),le(),re(),xe(ke,n.id,Se),ce.render(n),ie(),$e(),P.clear(),w("#wave-values").textContent="",se("Ready","idle")}function ln(){let t=N.find(e=>e.id===p.example);!t||!t.solution||(t.solution.design&&I.design.set(t.solution.design),t.solution.tb&&I.tb.set(t.solution.tb),p.usedSolution=!0,ie(),$e(),Z("Loaded the solution. Run it to see PASS. Reset lab brings your starting point back.","meta"))}function cn(t){let e=N.find(s=>s.id===p.example);if(!e||e.group==="examples"||p.usedSolution||!/(^|\n)PASS\b/.test(t))return;let n=ae(fe);n[e.id]||(n[e.id]=Date.now(),qe(fe,n),le(),re())}function ie(){dn();try{localStorage.setItem(Xe,JSON.stringify({example:p.example,std:p.std,design:I.design.get(),tb:I.tb.get()}))}catch{}}function un(){try{let t=JSON.parse(localStorage.getItem(Xe)||"null");if(t&&t.design!=null)return t}catch{}return null}async function pn(){let t=JSON.stringify({s:p.std,d:I.design.get(),t:I.tb.get()}),e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(e).arrayBuffer()),s="";for(let i of n)s+=String.fromCharCode(i);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function hn(t){let e=atob(t.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(e,i=>i.charCodeAt(0)),s=new Blob([n]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(s).text())}async function ge(t,e){let n=!1;try{await navigator.clipboard.writeText(t),n=!0}catch{let i=document.createElement("textarea");i.value=t,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{n=document.execCommand("copy")}catch{}i.remove()}if(e){let s=e.dataset.label||e.textContent;e.dataset.label=s,e.textContent=n?"Copied":"Press Ctrl+C",e.classList.toggle("ok",n),setTimeout(()=>{e.textContent=s,e.classList.remove("ok")},1600)}}function Ke(t,e){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var ne=w("#console");function $e(){ne.textContent=""}function Z(t,e){let n=document.createElement("div");n.className="ln "+(e||"");let s=/^(?:\/work\/)?([\w.-]+\.s?v):(\d+):/.exec(t);if(s){let i=s[1]===de().design?"design":s[1]===de().tb?"tb":null,r=document.createElement("button");r.type="button",r.className="loc",r.textContent=`${s[1]}:${s[2]}`,i&&r.addEventListener("click",()=>I[i].goto(+s[2])),n.appendChild(r),n.appendChild(document.createTextNode(":"+t.slice(s[0].length)))}else n.textContent=t;/qualities are ignored/.test(t)?n.classList.add("warn"):/\berror\b|ERROR|sorry|FAIL|MISMATCH|Internal error|Unable to/.test(t)?n.classList.add("err"):/\bwarning\b/i.test(t)?n.classList.add("warn"):/\bPASS\b/.test(t)&&n.classList.add("pass"),ne.appendChild(n),ne.childElementCount>6e3&&ne.firstChild.remove(),ne.scrollTop=ne.scrollHeight}function se(t,e){let n=w("#status");n.textContent=t,n.dataset.kind=e}var Te=new URL("/verilog/",location.href).href;function gn(){return new URL("worker.js",Te).href}function De(){p.worker&&p.worker.terminate(),p.ready=!1;let t=new Worker(gn());t.onmessage=e=>mn(e.data),t.onerror=e=>{Z("Simulator failed to start: "+(e.message||"worker error"),"err"),Oe(!1)},t.postMessage({type:"load",base:Te}),p.worker=t}function mn(t){if(t.type==="ready")p.ready=!0,p.running||se("Ready","idle");else if(t.type==="stage")se(t.stage+"\u2026","busy"),t.stage==="Simulating"&&Z("\u2500\u2500 simulation output \u2500\u2500","meta");else if(t.type==="line")Z(t.line.replace(/\/work\//g,""),t.stream==="err"?"stderr":"");else if(t.type==="done"){if(t.ok){Z(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta"),cn(ne.innerText);let e=(t.vcd||[])[0];if(e){p.lastVcd=e;try{let n=Me(e.text);P.setData(n),w("#wave-meta").textContent=`${n.signals.length} signals \xB7 ${he(n.endTime,n.timescale)}`}catch(n){Z("Could not read waveform: "+n.message,"err")}}else P.clear(),w("#wave-meta").textContent='No waveform: add $dumpfile("dump.vcd"); $dumpvars(0, tb);'}else t.phase==="compile"?Z("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):t.phase==="sim"&&Z(`\u2500\u2500 simulation exited with code ${t.rc} \u2500\u2500`,"meta err");Oe(t.ok,t.phase)}}function me(){if(p.running)return;window.vddSubscribe&&window.vddSubscribe(),p.worker||De(),ie(),$e(),w("#wave-values").textContent="",p.running=!0,p.startedAt=performance.now(),w("#run").disabled=!0,w("#stop").disabled=!1,se(p.ready?"Compiling\u2026":"Loading simulator\u2026","busy");let t=de(),e={[t.design]:I.design.get(),[t.tb]:I.tb.get()},n=w("#top").value.trim();p.worker.postMessage({type:"run",files:e,std:p.std,top:n,base:Te}),clearTimeout(p.timer),p.timer=setTimeout(()=>Ve(`Stopped after ${ze/1e3} s. Does your testbench call $finish?`),ze)}function Ve(t){p.running&&(Z(t||"Stopped.","meta err"),Oe(!1,"stopped"),De())}function Oe(t,e){clearTimeout(p.timer),p.running=!1,w("#run").disabled=!1,w("#stop").disabled=!0,e==="stopped"?se("Stopped","err"):se(t?"Done":e==="compile"?"Compile errors":"Error",t?"ok":"err")}var V=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim(),P=new pe(w("#wave"),{theme:()=>({bg:V("--wave-bg"),rowAlt:V("--wave-row"),grid:V("--wave-grid"),line:V("--line"),text:V("--text"),muted:V("--muted"),wave:V("--wave"),busFill:V("--wave-bus"),x:V("--wave-x"),xFill:V("--wave-xfill"),z:V("--wave-z"),cursor:V("--accent")}),onCursor:t=>{let e=w("#wave-values");if(t===null||!P.data){e.textContent="";return}e.innerHTML="";let n=document.createElement("div");n.className="cur-time",n.textContent="Cursor @ "+he(t,P.data.timescale),e.appendChild(n);for(let s of P.data.signals){let i=document.createElement("div");i.className="cur-row";let r=document.createElement("span");r.textContent=s.name;let c=document.createElement("span");c.textContent=Ae(s,He(s,t),P.radix),i.append(r,c),e.appendChild(i)}}});bn().addEventListener?.("change",()=>P.draw());function bn(){return window.matchMedia("(prefers-color-scheme: dark)")}function yn(){w("#run").addEventListener("click",me),w("#stop").addEventListener("click",()=>Ve()),w("#std").addEventListener("change",e=>{p.std=e.target.value,ve(),ie()}),w("#ex-select").addEventListener("change",e=>te(e.target.value)),document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>ge(I[e.dataset.copy].get(),e))),document.querySelectorAll("[data-download]").forEach(e=>e.addEventListener("click",()=>Ke(de()[e.dataset.download],I[e.dataset.download].get()))),w("#copy-output").addEventListener("click",e=>ge(ne.innerText,e.currentTarget)),w("#reset").addEventListener("click",()=>te(p.example,!0)),w("#show-solution").addEventListener("click",ln),w("#share").addEventListener("click",async e=>{let n=e.currentTarget;try{let s=await pn(),i=location.href.split("#")[0]+"#code="+s;history.replaceState(null,"","#code="+s),ge(i,n)}catch{ge(location.href,n)}}),w("#zoom-in").addEventListener("click",()=>P.zoom(.5)),w("#zoom-out").addEventListener("click",()=>P.zoom(2)),w("#zoom-fit").addEventListener("click",()=>P.fit()),w("#pan-left").addEventListener("click",()=>P.pan(-.4)),w("#pan-right").addEventListener("click",()=>P.pan(.4)),w("#radix").addEventListener("change",e=>{P.radix=e.target.value,P.draw(),P.onCursor(P.cursor)}),w("#dl-vcd").addEventListener("click",()=>{p.lastVcd&&Ke("dump.vcd",p.lastVcd.text)});let t={"Ctrl-Enter":me,"Cmd-Enter":me};I.design.addKeys(t),I.tb.addKeys(t),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),me())}),I.design.onChange(()=>ie()),I.tb.onChange(()=>ie())}async function fn(){ce=Re({key:"vdd-vlabs-quiz-v1",onChange:()=>re()}),yn();let t=!1,e=new URLSearchParams(location.search),n=e.get("track"),s=e.get("lab"),i=new URLSearchParams(location.hash.slice(1)).get("code");if(i){try{let r=await hn(i);p.std=r.s==="2012"?"2012":"2005",p.example=null,w("#std").value=p.std,I.design.set(r.d||""),I.tb.set(r.t||""),t=!0}catch{}t&&(le(),re())}if(!t&&s&&N.some(r=>r.id===s)&&(te(s),t=!0),!t&&n&&ye.some(r=>r.id===n)&&(te(N.find(r=>r.group===n).id),t=!0),!t){let r=un();if(r&&N.some(c=>c.id===r.example)){let c=N.find(a=>a.id===r.example);p.example=c.id,p.track=c.group,p.std=r.std||"2005",w("#std").value=p.std,I.design.set(r.design),I.tb.set(r.tb),w("#show-solution").hidden=!c.solution,le(),re(),xe(ke,p.example,Se),ce.render(c),t=!0}}t||te(N[0].id),ve(),se("Loading simulator\u2026","busy"),De(),P.clear()}fn();})();
