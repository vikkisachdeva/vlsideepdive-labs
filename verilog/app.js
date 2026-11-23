(()=>{var ze={counter:{problem:"Almost every design needs a counter: for timers, addresses, timeouts. It must reset cleanly, count only when enabled, and wrap at the right value.",tasks:["Run and watch count in the waveform.","Find the cycle where it wraps from 15 to 0.","Change WIDTH and run again."],learn:"Write a parameterised counter with reset and enable, and read it in a waveform."},mux:{problem:"Selecting one of several buses is the most common piece of logic in a datapath. It must pick the right input for every select value.",tasks:["Run and check y for each value of sel.","Change the inputs and run again."],learn:"Write combinational logic with case statements and test it with a simple testbench."},adder:{problem:"Checking results by eye does not scale. A testbench should check every case on its own and say PASS or FAIL.",tasks:["Run: the testbench tries all 512 input combinations.","Break the carry logic in the full adder and see the testbench catch it."],learn:"Build an adder from full adders, and write a self-checking, exhaustive testbench."},fsm:{problem:"Detecting a bit pattern in a serial stream is a classic state machine problem. Overlapping patterns such as 10111011 are easy to get wrong.",tasks:["Run and find each 'pattern 1011 detected' line.","Follow the state in the waveform.","Change the input stream and predict the detections."],learn:"Design a Moore FSM, including overlapping matches, and debug it from the waveform."},cdc:{problem:"A signal from another clock cannot be used directly: the flop that samples it can go metastable. Two flops in a row give it time to settle.",tasks:["Run and see level_dst follow level_src two destination clocks later.","Measure the delay in the waveform."],learn:"The two-flop synchronizer for a single-bit level, and its latency. For full CDC practice, see the CDC labs."},fifo:{problem:"Producer and consumer rarely run at the same rate. A FIFO buffers the data, and it must refuse writes when full and reads when empty.",tasks:["Run: 10 writes into an 8-entry FIFO.","Find the two dropped writes and the full flag.","Read back and check the order."],learn:"Design a synchronous FIFO with full and empty flags."},sv:{problem:"Plain Verilog FSMs use magic numbers and are hard to read. SystemVerilog adds enums, always_ff/always_comb and assertions that check the design while it runs.",tasks:["Run and follow the light sequence.","Read the assertion that exactly one light is on.","Break the FSM and see the assertion fire."],learn:"SystemVerilog enum FSMs, always_ff/always_comb and immediate assertions."},"p1-ha-df":{problem:"Add two bits. The sum is 1 when exactly one input is 1; the carry is 1 when both are.",tasks:["Use only assign statements (dataflow style).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dataflow modelling with continuous assignments."},"p1-ha-bh":{problem:"The same half adder, described by its behavior instead of its equations.",tasks:["Use an always @(*) block with a case statement or if/else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Behavioral modelling with always @(*), and why outputs are declared reg."},"p1-ha-st":{problem:"The same half adder, built from logic gates connected by wires.",tasks:["Use only Verilog gate primitives (xor, and).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural modelling with gate primitives."},"p1-fa-df":{problem:"Add three bits (a, b and a carry in) to get a sum and a carry out.",tasks:["Use only assign statements.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Full adder equations in dataflow style."},"p1-fa-bh":{problem:"The same full adder, described by its behavior.",tasks:["Use an always @(*) block. Hint: {cout, sum} = a + b + cin.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using Verilog arithmetic inside an always block."},"p1-fa-st":{problem:"Build a full adder from two half adders and an OR gate, the way it is drawn in textbooks.",tasks:["Instantiate half_adder twice and connect them with wires.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Hierarchy: instantiating modules and connecting ports by name."},"p1-ops":{problem:"Verilog has arithmetic, bitwise, logical, reduction, relational, equality, shift, concatenation, replication and conditional operators. Each output of the module uses one of them.",tasks:["Write one assign per output (see the comments for which operator), then read the $display and $monitor lines.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Every Verilog operator, and printing with $display and $monitor."},"p1-c2f":{problem:"Repeated calculations belong in a task: write it once, call it many times.",tasks:["Complete the task c_to_f. The testbench calls it with seven temperatures.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Writing and calling a Verilog task with input and output arguments."},"p2-add4":{problem:"Add two 4-bit numbers and a carry in. The result needs 5 bits: a 4-bit sum and a carry out.",tasks:["Use one assign statement with concatenation on the left.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-bit dataflow arithmetic and concatenation."},"p2-mux2":{problem:"Pick one of two inputs with a select signal: the most common block in digital design.",tasks:["y = a when sel = 0, b when sel = 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"The conditional operator ?: as a multiplexer."},"p2-mux4":{problem:"Pick one of four inputs with a 2-bit select.",tasks:["Use a case statement on sel.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Case statements and full case coverage."},"p2-dec24":{problem:"Turn a 2-bit number into four select lines, exactly one of them high, as in an address decoder.",tasks:["y[a] = 1 when en = 1; all zeros when en = 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Decoders, enables and the shift operator."},"p2-enc42":{problem:"The reverse of a decoder: find which one of four lines is high and output its number.",tasks:["valid = 1 only when exactly one bit of d is 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Encoders and handling inputs that are not allowed."},"p2-penc42":{problem:"When several requests arrive at once, the highest one wins: an interrupt controller does this.",tasks:["y is the position of the highest 1; valid = 0 when d = 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority logic with casez and don't-care bits."},"p2-cmp4":{problem:"Compare two unsigned 4-bit numbers.",tasks:["Exactly one of gt, eq and lt is 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Relational operators and comparator outputs."},"p2-bshift8":{problem:"Shift or rotate a byte by any amount from 0 to 7 in one step, as in a processor's shift unit.",tasks:["dir picks left or right; rotate = 1 brings the bits that fall off back in on the other side.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shifts, rotates and building a barrel shifter."},"p2-alu":{problem:"The arithmetic logic unit is the heart of a processor: one block, eight operations, chosen by an opcode.",tasks:["Implement the eight operations in the comment, the carry for add and subtract, and the zero flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Case-based ALU design, carry out and status flags."},"p3-dlatch":{problem:"A latch is transparent: while en = 1, q follows d. When en = 0 it holds its last value.",tasks:["Write it with always @(*) and an if without an else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How an if without else creates a latch, and when you want one."},"p3-dlatch-rst":{problem:"Add a reset that clears the latch at once, whatever en is.",tasks:["rst = 1 forces q = 0 immediately.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Reset priority in a latch."},"p3-dff":{problem:"A flip-flop samples d only at the rising edge of the clock: the basic memory element of synchronous design.",tasks:["Use always @(posedge clk) and a non-blocking assignment.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Edge-triggered storage and non-blocking assignments (<=)."},"p3-dff-arh":{problem:"Reset must work even when the clock is not running.",tasks:["rst = 1 clears q at once. Put posedge rst in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous reset: the sensitivity list and reset priority."},"p3-dff-neg-arh":{problem:"Some flops capture on the falling edge of the clock, for example in DDR interfaces.",tasks:["Sample d on negedge clk; rst = 1 clears q at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Negative-edge flip-flops."},"p3-dff-arl":{problem:"Most chips use an active-low reset (rst_n): 0 means reset.",tasks:["rst_n = 0 clears q at once. Use negedge rst_n.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low reset and the _n naming convention."},"p3-dff-ash":{problem:"Some registers must start at 1, not 0.",tasks:["set = 1 forces q = 1 at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous set."},"p3-dff-srh":{problem:"A synchronous reset only acts on a clock edge, so it is timed like any other data input.",tasks:["rst = 1 clears q on the next rising edge only. Do not put rst in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous reset, and how it differs from asynchronous reset."},"p3-dff-srl":{problem:"The same synchronous reset, active low.",tasks:["rst_n = 0 clears q on the next rising edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous active-low reset."},"p3-dff-srs":{problem:"When reset and set arrive together, one must win. Here reset has priority.",tasks:["On a rising edge: rst = 1 gives 0, else set = 1 gives 1, else q takes d.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority between synchronous controls."},"p3-sync-async":{problem:"One reset, two registers: one resets at once, the other waits for the clock. The waveform shows the difference.",tasks:["Build q_sync with a synchronous reset and q_async with an asynchronous one.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"When each reset style acts, seen side by side."},"p3-twin":{problem:"Two 8-bit registers share a data bus, clock and reset, but load independently.",tasks:["load_a loads d into qa, load_b into qb; otherwise each holds.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Registers with load enables and a shared bus."},"p4-sr5":{problem:"Serial data enters at the left and moves one bit to the right each clock, as in a serial receiver.",tasks:["On each rising edge: q <= {sin, q[4:1]}.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shift registers with concatenation."},"p4-usr5":{problem:"One register that can hold, shift right, shift left or load in parallel, chosen by a mode input.",tasks:["Implement the four modes in the comment.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-function registers with a case on mode."},"p4-cnt":{problem:"Counters are everywhere: timers, addresses, state sequencing.",tasks:["A 4-bit up counter that wraps from 15 to 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"A basic synchronous counter."},"p4-cnt-tb":{problem:"A design is only as good as its testbench. Here the design is given and you write the testbench.",tasks:["Complete the testbench: reset, count, pause with en, check every cycle and print PASS or FAIL. Then set BUG = 1 in the design: your testbench must print FAIL.","Run: your testbench should print PASS, and FAIL once BUG = 1.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Self-checking testbenches with an expected-value model."},"p4-cnt-load":{problem:"Counters often need to start from a given value.",tasks:["load = 1 loads d; otherwise count up.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous load with priority over counting."},"p4-updown":{problem:"Count in either direction, for example a FIFO level or a position.",tasks:["up = 1 counts up, up = 0 counts down; both wrap.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Up/down counters."},"p4-mod":{problem:"A modulus-N counter counts 0 to N-1 and wraps, such as a decade (mod-10) counter for a clock display.",tasks:["Count 0 to 9 and wrap to 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mod-N counters and parameters."},"p4-range":{problem:"Count only within a range, LOW to HIGH, and start again at LOW.",tasks:["After reset q = LOW (3); count to HIGH (12), then back to LOW.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameterized counter limits."},"p4-range-udl":{problem:"All the counter features together: a range, a direction and a load.",tasks:["Load has priority; up wraps HIGH \u2192 LOW; down wraps LOW \u2192 HIGH.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Combining counter features with clear priority."},"p4-div2":{problem:"Make a slower clock from a fast one.",tasks:["clk_out toggles on every rising edge of clk.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Divide-by-2 with a toggle flop."},"p4-div4":{problem:"Divide by 4 with a 50% duty cycle.",tasks:["Use a 2-bit counter; its top bit is clk / 4.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dividing by a power of 2 with a counter."},"p4-div3":{problem:"Odd dividers are harder: a counter alone gives a 33% duty cycle. The testbench requires exactly 50%.",tasks:["Hint: combine a flop on the rising edge with one on the falling edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Odd clock division with a 50% duty cycle using both clock edges."},"p4-fifo":{problem:"A FIFO buffers data between a producer and a consumer running at different rates on the same clock.",tasks:["8 words of 8 bits. Ignore writes when full and reads when empty; dout shows the word on the clock after rd_en.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"FIFO pointers, a word count, and full and empty flags."},"p4-afifo":{problem:"When producer and consumer run on different clocks, the FIFO pointers cross clock domains. They must be Gray coded and synchronized.",tasks:["8 words of 8 bits, wclk and rclk. rdata shows the oldest word; rinc takes it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous FIFOs: Gray pointers, synchronizers, full and empty. See the CDC labs for more."},"p4-mealy-nov":{problem:"Detect the bit pattern 1-0-1 in a serial stream. Mealy: the output depends on the state and the current input.",tasks:["y = 1 while x is the final 1. After a detection, start again from scratch.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mealy state machines and non-overlapping detection."},"p4-mealy-ov":{problem:"The same pattern, but the final 1 may also start the next 101: 10101 gives two detections.",tasks:["y = 1 while x is the final 1, and keep that 1 for the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Mealy machine."},"p4-moore-nov":{problem:"Moore: the output depends on the state only, so it comes one clock later than in a Mealy machine.",tasks:["y = 1 for one clock after the final 1 was clocked in. Start again from scratch after.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore state machines and their extra state."},"p4-moore-ov":{problem:"Moore and overlapping together.",tasks:["y = 1 for one clock after 101; the final 1 starts the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Moore machine."},"s01-reg":{problem:"Store a byte when enable is high, the most basic piece of a CPU datapath. Write it the SystemVerilog way.",tasks:["Use logic, ANSI ports, timeunit/timeprecision and always_ff. rst_ is asynchronous and active low.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"always_ff, the logic type, and time units in SystemVerilog."},"s02-mux":{problem:"One mux module, any width: the CPU uses it as a 5-bit address mux. The testbench uses an 8-bit and a 1-bit instance.",tasks:["out = sel_a ? in_a : in_b. Use always_comb and unique case with a default that drives X.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameters, always_comb and unique case."},"s03-cnt":{problem:"The CPU's program counter: it counts through the program, and loads a new address for a jump.",tasks:["5 bits: load has priority, then enable counts up; rst_ clears it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority in always_ff and counter wrap-around."},"s04-ctrl":{problem:"The CPU's controller steps through 8 states for every instruction and decides which blocks act in each: fetch, decode, operand fetch, execute, store.",tasks:["Use the enum types from package typedefs, state.next() for the sequence, and always_comb with unique case for the outputs in the table in the comments.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packages, enumerated types and their methods, and Mealy outputs."},"s05-alu":{problem:"The CPU's ALU combines the accumulator with memory data. Its result is registered on the falling clock edge so it is ready for the accumulator on the next rising edge.",tasks:["Compute out on negedge clk for the 8 opcodes; zero = 1 when accum is 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using package enums in a datapath, and two clock edges."},"s06-memtb":{problem:"The memory is given. Write the testbench that proves it works, with reusable tasks.",tasks:["Write tasks write_mem and read_mem with a default debug argument, a void function printstatus, and two tests. Then set BUG = 1: your testbench must report FAIL.","Run: your testbench should print PASS, and FAIL once BUG = 1.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Tasks with default arguments, void functions, and driving on the inactive clock edge."},"s07-struct":{problem:"A bus is many signals that always travel together. Bundling them keeps every module in agreement. SystemVerilog interfaces do this with modports; Icarus Verilog 12 does not support interface ports yet, so this lab uses a packed struct from a package, which every tool supports.",tasks:["Declare mem_req_t (read, write, addr, data in that order) and write the memory using req.field names.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packed structs, packages, and when to use a struct or an interface."},"s08-cpu":{problem:"Put it all together: the register, mux, counter, controller, ALU and memory make a small CPU that runs programs.",tasks:["Instantiate and connect the seven blocks in module cpu (all blocks are given above it). The testbench runs three programs: a basic test, a sum of 1 to 10, and Fibonacci up to 144.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a CPU from blocks, and debugging it from the waveform and program results."},"s09-johnson":{problem:"A Johnson counter is a shift register whose inverted output feeds back: 2N states with only one bit changing at a time.",tasks:["Shift left and feed ~q[N-1] into bit 0. The testbench checks N = 4 and N = 6.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameterized shift-register counters."},"s10-gen":{problem:"Hardware is often an array of identical blocks. A generate loop builds it for any size.",tasks:["Build rca from N full_adder instances with a for-generate loop. Do not use + in rca.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Generate loops, genvars and named generate blocks."},"s11-dpram":{problem:"Two ports let one block write while another reads, for example a frame buffer or a FIFO memory.",tasks:["Port A writes and reads, port B reads. Both reads are synchronous; port A reads the old data when it writes the same address.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Memory arrays, synchronous reads and read-before-write."},"s12-uart":{problem:"Send bytes over a single wire: a start bit, 8 data bits LSB first, a stop bit. The testbench decodes the line like a real receiver.",tasks:["Write the state machine with an enum type: IDLE, START_BIT, DATA_BITS, STOP_BIT. Each bit lasts CLKS_PER_BIT clocks.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Enum state machines with counters, and serial protocols."},"l01-gates":{problem:"Every digital circuit is built from a handful of gates: AND, OR, NOT, NAND, NOR, XOR and XNOR. You need to know each truth table by heart.",tasks:["Instantiate one gate primitive per output (and, or, not, nand, nor, xor, xnor).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Verilog gate primitives and the truth table of every basic gate."},"l02-nand":{problem:"NAND is a universal gate: any logic function can be built from NAND gates alone. Chips like the 7400 have only NANDs.",tasks:["Build NOT, AND, OR and XOR using only nand primitives. No assign, no other gates.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Why NAND is universal, and De Morgan's law in practice (OR = NAND of inverted inputs)."},"l03-nor":{problem:"NOR is the other universal gate. Building every gate from NOR shows the duality of Boolean algebra.",tasks:["Build NOT, OR, AND and XNOR using only nor primitives.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"NOR-only design, and how it mirrors NAND-only design."},"l04-sop-pos":{problem:"A Boolean function can be written as a sum of products (SOP) or a product of sums (POS). Both describe the same truth table.",tasks:["Write y1 (SOP), y2 (POS) and y3 as continuous assignments, exactly as given.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Translating SOP and POS expressions into logic, and reading a truth table."},"l05-demorgan":{problem:"De Morgan's laws let you turn ANDs into ORs and back by inverting. They are behind every NAND and NOR trick.",tasks:["Write both sides of both laws. The testbench checks that each pair is equal for every input.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"(A\xB7B)' = A' + B' and (A + B)' = A'\xB7B'."},"l06-kmap":{problem:"A minterm list gives the truth table but not the cheapest circuit. A Karnaugh map finds the simplest SOP form.",tasks:["Draw a 3-variable K-map for F1 and a 4-variable K-map for F2, then write the simplified expressions.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Grouping 1s in a K-map into the largest power-of-two rectangles, including groups that wrap around the edges."},"l07-dontcare":{problem:"Some input combinations never happen. Their outputs are don't-cares (d), and using them as 1s can make the circuit smaller.",tasks:["Simplify F = \u03A3m(1, 3, 7, 11, 15) + d(0, 2, 5) with a 4-variable K-map and write the result.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How don't-care terms enlarge K-map groups."},"l08-parity":{problem:"Parity is the simplest error detection: one extra bit makes the number of 1s even, so a single flipped bit is caught.",tasks:["Generate the even parity bit p for 4 data bits, and the error flag for a received 5-bit word.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"XOR trees and the reduction XOR operator (^d)."},"l09-majority":{problem:"Safety systems use three copies of a signal and take the majority, so that one faulty copy is outvoted.",tasks:["Fill in the truth table, simplify \u03A3m(3, 5, 6, 7) with a K-map and write y.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"From a word description to a truth table to a minimal circuit."},"l10-sub":{problem:"Subtraction needs a borrow instead of a carry. The full subtractor is the building block of a ripple-borrow subtractor.",tasks:["Write D and Bout for the half subtractor and the full subtractor.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Difference and borrow equations, and how they compare with the adder's."},"l29-rca":{problem:"To add multi-bit numbers, full adders are chained so each carry ripples into the next stage.",tasks:["Instantiate full_adder four times and connect the carries.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural hierarchy and the ripple-carry adder."},"l18-addsub":{problem:"One adder can also subtract: invert B and add 1, using two's complement. One control input picks the operation.",tasks:["Use XOR gates to invert B when M = 1, feed M in as the carry, and detect signed overflow.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Two's complement subtraction, carry out versus overflow."},"l19-bcdadd":{problem:"Calculators and clocks count in decimal digits (BCD). A binary adder gives the wrong code when a digit sum exceeds 9.",tasks:["Add the two digits in binary, then add 6 and set the carry when the sum is above 9.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Why the add-6 correction works."},"l17-cmp2":{problem:"Comparing two numbers is everywhere: in sorting, in limits, in address decoding.",tasks:["Write gt, eq and lt from the K-map equations with gates only (no >, < or ==).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a comparator from equality (XNOR) terms, from the most significant bit down."},"l30-cmp4":{problem:"Wider numbers are compared by chaining 4-bit comparators. The cascade inputs carry the result of the lower bits.",tasks:["Compare A and B; when they are equal, pass the cascade inputs through.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How cascading works, and how to tie the inputs of a single chip."},"l14-dec38":{problem:"Decoders select one of many: one memory chip, one display digit, one peripheral. Real parts have active-low outputs and several enables.",tasks:["Decode a to one active-low output when g1 = 1 and both active-low enables are 0. Otherwise all outputs are 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low signals and enable logic."},"l11-dec-fa":{problem:"A decoder produces every minterm, so any function is just an OR of the right decoder outputs.",tasks:["Instantiate the 3-to-8 decoder and OR together the minterms of S and C.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Implementing functions with a decoder and OR gates."},"l15-enc83":{problem:"An encoder does the opposite of a decoder. A priority encoder handles several active inputs, as in interrupt controllers.",tasks:["Encode a one-hot input with a valid flag, and find the position of the highest 1 with an any flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Plain versus priority encoding, and what happens with invalid inputs."},"l13-mux-demux":{problem:"Multiplexers pick one of many inputs onto one line; demultiplexers send one line to one of many outputs.",tasks:["Write the 8-to-1 mux and the 1-to-8 demux.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mux and demux as data selectors, and indexed part selects."},"l12-mux-fn":{problem:"A 2^n-to-1 multiplexer can implement any function of n + 1 variables: the extra variable goes to the data inputs.",tasks:["Work out the data inputs (0, 1, D or D') two truth-table rows at a time and instantiate mux8.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"The mux implementation method from the lab manuals."},"l16-gray":{problem:"In Gray code only one bit changes between neighbouring values. It is used in encoders and in clock domain crossing.",tasks:["Write the binary-to-Gray and Gray-to-binary converters.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Gray code, and why the reverse conversion chains XORs."},"l20-7seg":{problem:"Digital clocks and meters show digits on 7-segment displays. A decoder (like the 7447/7448) lights the right segments.",tasks:["Fill in the case statement for digits 0 to 9 and blank the display for 10 to 15. The output draws each digit.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Truth tables with many outputs, and the case statement."},"l21-srlatch":{problem:"Memory starts with feedback: two cross-coupled gates can hold a bit. This is the SR latch, the base of every flip-flop.",tasks:["Build the latch from two nand primitives with a 1 ns delay each.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Feedback, the set, reset and hold states, and why S = R = 0 is forbidden for a NAND latch."},"l22-ffs":{problem:"The four classic flip-flops differ only in their characteristic tables. Knowing them is the key to counter and FSM design.",tasks:["Write all four flip-flops in one always block, from their characteristic tables.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Characteristic tables, edge triggering and asynchronous reset."},"l23-ripple":{problem:"The simplest counter: each flip-flop toggles the next. It needs no logic, but the outputs do not change together.",tasks:["Instantiate three toggle flip-flops, each clocked by the output of the stage before.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous counters and ripple delay."},"l24-sync":{problem:"In a synchronous counter every flip-flop shares one clock, so all outputs change together.",tasks:["Derive the T inputs from the count and toggle on the clock edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous counter design with T flip-flops."},"l32-updown":{problem:"Counters that go both ways are used in positioning and in volume controls.",tasks:["Use T flip-flops: derive T0, T1 and T2 from the excitation table with the up input.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Excitation tables and K-maps for counter design."},"l27-mod6":{problem:"Clocks divide by 6 and 10 to count seconds and minutes. A MOD-N counter clears itself at N \u2212 1.",tasks:["Count 0 to 5 and go back to 0, with a terminal count output.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Truncated counters and terminal count."},"l25-ring":{problem:"Shift registers with feedback become counters. A ring counter gives one-hot outputs; a Johnson counter doubles the count with the same flops.",tasks:["Write the ring counter (reset 1000) and the Johnson counter (reset 0000) in one always block.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Ring versus twisted-ring (Johnson) counters, and how many states each has."},"l26-siso":{problem:"Shift registers move serial data, as in UARTs and SPI. The data 1001 shifted in comes out four clocks later.",tasks:["Shift sin into q[3] on every clock, with sout = q[0].","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Serial-in serial-out operation and delay in clocks."},"l31-usr":{problem:"One register that can hold, shift left, shift right or load in parallel (like the 74194) covers every shift register use.",tasks:["Pick the next value with a case on mode.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mode-controlled registers, the basis of the 74194."},"l28-fsm":{problem:"Every sequential circuit is a state machine. Given a state table, you can build it directly.",tasks:["Write the next-state logic from the table and the Moore output z.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"State tables, next-state logic and Moore outputs."},"l33-traffic":{problem:"A real-world state machine with an input (a waiting car) and a timer, the classic FSM design example.",tasks:["Write the four states, the timer for the side green, and the lights for each state.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore FSM design with a timer, from a word specification."}};var An="http://www.w3.org/2000/svg",$=(t,e,n)=>{let i=document.createElementNS(An,t);for(let[s,r]of Object.entries(e||{}))i.setAttribute(s,r);return n&&n.appendChild(i),i};function $n(t){let e=t.trim(),n="port",i="",s=/^([\s\S]*?)([!+])?$/.exec(e),r=f=>{let m=/^([\s\S]*?)([!+])$/.exec(f);return m?(i=i||m[2],m[1]):f};e=r(s[0]);let o=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[f,m,h]of o)if(e.startsWith(f)&&e.endsWith(m)){n=h,e=e.slice(1,-1);break}n==="port"&&e.startsWith("@")&&(n="clk",e=e.slice(1)),e=r(e);let a=null,g=e.lastIndexOf("|");g>0&&(a=e.slice(g+1).trim(),e=e.slice(0,g));let l=e.indexOf("#"),d=e.trim();l>=0&&(e=e.slice(0,l));let u=e.replace(/\\n/g,`
`).trim();return{id:n+":"+d,label:u,kind:n,dom:a,mark:i}}function Tn(t){let e=new Map,n=[],i=s=>{if(!e.has(s.id))e.set(s.id,{...s,order:e.size});else{let r=e.get(s.id);r.dom=r.dom||s.dom,r.mark=r.mark||s.mark}return e.get(s.id)};for(let s of t.split(";").map(r=>r.trim()).filter(Boolean)){let r=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,o=0,a=null,g=null,l,d=[];for(;l=r.exec(s);)d.push([s.slice(o,l.index),l]),o=r.lastIndex;d.push([s.slice(o),null]);for(let[u,f]of d){let m=i($n(u));if(a&&g&&n.push({a,b:m,...g}),a=m,f){let h=f[1]||"";g={label:(f[2]||"").trim(),kind:h==="~"?"bad":h==="+"?"good":h==="."?"dash":"plain"}}}}return{nodes:[...e.values()],edges:n}}function Dn(t){let e=t.label.split(`
`),n=Math.max(...e.map(i=>i.length))*6.9;return t.kind==="port"||t.kind==="clk"?{w:Math.max(28,n+(t.kind==="clk"?26:12)),h:Math.max(24,e.length*15+6),lines:e}:t.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,e.length*15+22),lines:e}:{w:Math.max(54,n+24),h:Math.max(34,e.length*15+16),lines:e}}function Ue(t){let e=typeof t=="string"?Tn(t):t,{nodes:n,edges:i}=e;if(!n.length)return null;let s=new Map(n.map(p=>[p,[]]));for(let p of i)p.a!==p.b&&s.get(p.a).push(p);let r=new Map,o=new Set,a=p=>{r.set(p,1);for(let c of s.get(p)){let _=r.get(c.b);_===1?o.add(c):_||a(c.b)}r.set(p,2)};for(let p of n)r.get(p)||a(p);let g=new Set(i.filter(p=>p.kind==="dash"&&i.some(c=>c.b===p.b&&c.kind!=="dash"))),l=new Map(n.map(p=>[p,0]));for(let p=0;p<n.length;p++){let c=!1;for(let _ of i)_.a!==_.b&&!o.has(_)&&!g.has(_)&&l.get(_.b)<l.get(_.a)+1&&(l.set(_.b,l.get(_.a)+1),c=!0);if(!c)break}let d=Math.max(...l.values());for(let p of n)p.kind==="port"&&!s.get(p).length&&i.some(c=>c.b===p)&&l.get(p)<d&&l.set(p,d);let u=[];for(let p of n){let c=l.get(p);(u[c]=u[c]||[]).push(p)}let f=[...new Set(n.map(p=>p.dom).filter(Boolean))],m=p=>p.dom?f.indexOf(p.dom):-1;for(let p of u)p&&p.sort((c,_)=>m(c)-m(_)||c.order-_.order);for(let p of n)Object.assign(p,Dn(p));let h=22,y=18,k=u.map((p,c)=>Math.max(46,...i.filter(_=>l.get(_.a)===c&&l.get(_.b)>c&&_.label).map(_=>_.label.length*6.2+30))),S=new Map;for(let p of n){let c=p.dom;if(!c){let _=i.find(I=>I.a===p&&I.b.dom||I.b===p&&I.a.dom);c=_?_.a===p?_.b.dom:_.a.dom:null}S.set(p,c||"")}let q=[...new Set(n.map(p=>S.get(p)))];q.includes("")&&(q.splice(q.indexOf(""),1),q.unshift(""));let E=f.length>0,F=E?34:0,L=q.map(p=>Math.max(0,...u.map(c=>{let _=(c||[]).filter(I=>S.get(I)===p);return _.reduce((I,z)=>I+z.h,0)+Math.max(0,_.length-1)*h}))),M=[],V=y+(E?22:14);q.forEach((p,c)=>{M[c]=V,V+=L[c]+(c<q.length-1?F:0)});let D=V-y-(E?22:14),A=y,O=new Map,W=0;u.forEach((p,c)=>{if(!p)return;let _=Math.max(...p.map(I=>I.w));q.forEach((I,z)=>{let N=p.filter(j=>S.get(j)===I),U=N.reduce((j,G)=>j+G.h,0)+Math.max(0,N.length-1)*h,H=M[z]+(L[z]-U)/2;for(let j of N)O.set(j,{x:A+(_-j.w)/2,y:H,w:j.w,h:j.h}),H+=j.h+h}),A+=_+k[c]});let Q=o.size>0,C=A-(k[u.length-1]||46)+y;W=y*2+(E?22:14)+D+(Q?26:0);let ae=$("svg",{viewBox:`0 0 ${C} ${W}`,class:"dg dg-block",role:"img"});ae.style.maxWidth=C+"px",ae.style.minWidth=Math.round(Math.min(C,Math.max(C*.72,320)))+"px";let Sn=$("defs",{},ae);for(let p of["plain","bad","good","dash"]){let c=$("marker",{id:"dg-ar-"+p,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},Sn);$("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+p},c)}f.forEach((p,c)=>{let _=n.filter(G=>G.dom===p).map(G=>O.get(G)),I=q.indexOf(p),z=Math.min(..._.map(G=>G.x))-10,N=M[I]-22,U=Math.max(..._.map(G=>G.x+G.w))+10,H=M[I]+L[I]+8;$("rect",{x:z,y:N,width:U-z,height:H-N,rx:10,class:`dg-dom dg-d${c%4}`},ae);let j=$("text",{x:z+8,y:N+13,class:`dg-domlabel dg-d${c%4}`},ae);j.textContent=p});let De=y+(E?22:14)+D+10,Oe=$("g",{},ae);for(let p of i){let c=O.get(p.a),_=O.get(p.b),I,z,N;if(p.a===p.b)I=`M${c.x+c.w-10},${c.y} C${c.x+c.w+20},${c.y-26} ${c.x+10},${c.y-26} ${c.x+14},${c.y}`,z=c.x+c.w/2,N=c.y-22;else if(o.has(p)||l.get(p.b)<=l.get(p.a)){let U=c.x+c.w/2,H=_.x+_.w/2;I=`M${U},${c.y+c.h} C${U},${De+14} ${H},${De+14} ${H},${_.y+_.h}`,z=(U+H)/2,N=De+8}else{let U=c.x+c.w,H=c.y+c.h/2,j=_.x,G=_.y+_.h/2,_e=(U+j)/2;I=`M${U},${H} C${_e},${H} ${_e},${G} ${j},${G}`;let Me=l.get(p.b)-l.get(p.a),X=Me>1?.5/Me:.5,J=1-X;z=J*J*J*U+3*J*J*X*_e+3*J*X*X*_e+X*X*X*j,N=J*J*J*H+3*J*J*X*H+3*J*X*X*G+X*X*X*G}if($("path",{d:I,class:"dg-edge dg-"+p.kind,"marker-end":`url(#dg-ar-${p.kind})`},Oe),p.label){let U=p.label.length*6.2+8;$("rect",{x:z-U/2,y:N-9,width:U,height:14,rx:3,class:"dg-elbg"},Oe);let H=$("text",{x:z,y:N+2,class:"dg-elabel dg-"+p.kind,"text-anchor":"middle"},Oe);H.textContent=p.label}}for(let p of n){let c=O.get(p),_=$("g",{class:`dg-node dg-k-${p.kind}${p.mark==="!"?" dg-bad":p.mark==="+"?" dg-good":""}`},ae);if(p.kind==="reg")$("rect",{x:c.x,y:c.y,width:c.w,height:c.h,rx:3,class:"dg-shape"},_),$("path",{d:`M${c.x},${c.y+c.h-12} L${c.x+7},${c.y+c.h-7} L${c.x},${c.y+c.h-2}`,class:"dg-tri"},_);else if(p.kind==="logic")$("rect",{x:c.x,y:c.y,width:c.w,height:c.h,rx:Math.min(16,c.h/2),class:"dg-shape"},_);else if(p.kind==="block")$("rect",{x:c.x,y:c.y,width:c.w,height:c.h,rx:6,class:"dg-shape"},_);else if(p.kind==="mux")$("path",{d:`M${c.x},${c.y} L${c.x+c.w},${c.y+10} L${c.x+c.w},${c.y+c.h-10} L${c.x},${c.y+c.h} z`,class:"dg-shape"},_);else if(p.kind==="clk"){let N=c.y+c.h/2;$("path",{d:`M${c.x+2},${N+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},_)}let I=p.lines,z=p.kind==="clk"?c.x+24:c.x+c.w/2;I.forEach((N,U)=>{let H=$("text",{x:z,y:c.y+c.h/2+(U-(I.length-1)/2)*15+4,"text-anchor":p.kind==="clk"?"start":"middle",class:"dg-label"},_);H.textContent=N})}return ae}function On(t,e){let n=t.split(/\s+/),i=[],s="";for(let r of n)s&&(s+" "+r).length>e?(i.push(s),s=r):s=s?s+" "+r:r;return s&&i.push(s),i}var In={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function Ve(t){if(!t||!t.length)return null;let e=300,n=12,i=42,s=18,r=t.map(u=>{let f=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(u)||[null,"S",u],m=On(f[2],i),h=In[f[1]];return{k:f[1],lines:m,tag:h,h:m.length*15+(h?30:16)}}),o=r.reduce((u,f)=>u+f.h,0)+s*(r.length-1)+16,a=$("svg",{viewBox:`0 0 ${e+16} ${o}`,class:"dg dg-flow",role:"img"});a.style.maxWidth=e+16+"px";let g=$("defs",{},a),l=$("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},g);$("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},l);let d=8;return r.forEach((u,f)=>{let m=$("g",{class:"dg-fl dg-fl-"+u.k},a);u.k==="Q"?$("path",{d:`M22,${d} H${8+e-14} L${8+e},${d+u.h/2} L${8+e-14},${d+u.h} H22 L8,${d+u.h/2} z`,class:"dg-shape"},m):$("rect",{x:8,y:d,width:e,height:u.h,rx:u.k==="S"?6:10,class:"dg-shape"},m);let h=d+18;if(u.tag){let y=$("text",{x:8+n+(u.k==="Q"?10:0),y:h,class:"dg-ftag"},m);y.textContent=u.tag.toUpperCase(),h+=16}for(let y of u.lines){let k=$("text",{x:8+n+(u.k==="Q"?10:0),y:h,class:"dg-ftext"},m);k.textContent=y,h+=15}d+=u.h,f<r.length-1&&($("path",{d:`M${8+e/2},${d+1} V${d+s-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},a),d+=s)}),a}var we={adder:["i-46z3tTYGM",10200,10800],basic:["za2o93ldrVQ",3240,3840],"cdc-bus":["akitv2i4Nxw",3720,4320],"cdc-clocks":["akitv2i4Nxw",0,600],"cdc-fifo":["akitv2i4Nxw",5310,5910],"cdc-find":["akitv2i4Nxw",1200,1800],"cdc-fix":["akitv2i4Nxw",1110,1710],"cdc-handshake":["akitv2i4Nxw",2940,3540],"cdc-pulse":["akitv2i4Nxw",2370,2970],"cdc-reset":["akitv2i4Nxw",5535,6135],counter:["i-46z3tTYGM",20400,21e3],"cov-1":["9SxAZWWVeJc",11373,11973],"cov-2":["9SxAZWWVeJc",11373,11973],"cov-3":["9SxAZWWVeJc",11373,11973],"cov-4":["9SxAZWWVeJc",11373,11973],"cov-5":["9SxAZWWVeJc",11373,11973],"cov-6":["9SxAZWWVeJc",11373,11973],"cov-7":["9SxAZWWVeJc",11040,11640],"cov-8":["9SxAZWWVeJc",11040,11640],"cov-9":["9SxAZWWVeJc",11040,11640],"dv-17":["9SxAZWWVeJc",11040,11640],"dv-18":["9SxAZWWVeJc",11040,11640],"dv-19":["9SxAZWWVeJc",10800,11400],"dv-4":["9SxAZWWVeJc",1031,1631],exceptions:["za2o93ldrVQ",8520,9120],fifo:["i-46z3tTYGM",22800,23400],fsm:["i-46z3tTYGM",24600,25200],"l01-gates":["8bmt4UJmJ_k",3347,3947],"l02-nand":["8bmt4UJmJ_k",3347,3947],"l03-nor":["8bmt4UJmJ_k",3347,3947],"l04-sop-pos":["8bmt4UJmJ_k",5100,5700],"l05-demorgan":["8bmt4UJmJ_k",4704,5304],"l06-kmap":["8bmt4UJmJ_k",5659,6259],"l07-dontcare":["8bmt4UJmJ_k",6900,7500],"l10-sub":["8bmt4UJmJ_k",7200,7800],"l11-dec-fa":["8bmt4UJmJ_k",7200,7800],"l12-mux-fn":["8bmt4UJmJ_k",7500,8100],"l13-mux-demux":["8bmt4UJmJ_k",7500,8100],"l14-dec38":["8bmt4UJmJ_k",7200,7800],"l15-enc83":["8bmt4UJmJ_k",7200,7800],"l18-addsub":["8bmt4UJmJ_k",2700,3300],"l19-bcdadd":["8bmt4UJmJ_k",7200,7800],"l21-srlatch":["8bmt4UJmJ_k",7500,8100],"l22-ffs":["8bmt4UJmJ_k",7500,8100],"l29-rca":["8bmt4UJmJ_k",7200,7800],mux:["i-46z3tTYGM",10800,11400],"p1-c2f":["i-46z3tTYGM",9900,10500],"p1-fa-bh":["i-46z3tTYGM",3900,4500],"p1-fa-df":["i-46z3tTYGM",3600,4200],"p1-fa-st":["i-46z3tTYGM",3900,4500],"p1-ha-bh":["i-46z3tTYGM",2400,3e3],"p1-ha-df":["i-46z3tTYGM",2100,2700],"p1-ha-st":["i-46z3tTYGM",1500,2100],"p1-ops":["i-46z3tTYGM",8400,9e3],"p2-add4":["i-46z3tTYGM",10200,10800],"p2-alu":["i-46z3tTYGM",12900,13500],"p2-bshift8":["i-46z3tTYGM",13500,14100],"p2-cmp4":["i-46z3tTYGM",12600,13200],"p2-dec24":["i-46z3tTYGM",11400,12e3],"p2-enc42":["i-46z3tTYGM",12300,12900],"p2-mux2":["i-46z3tTYGM",10800,11400],"p2-mux4":["i-46z3tTYGM",10800,11400],"p2-penc42":["i-46z3tTYGM",12300,12900],"p3-dff":["i-46z3tTYGM",15900,16500],"p3-dff-arh":["i-46z3tTYGM",18300,18900],"p3-dff-arl":["i-46z3tTYGM",17400,18e3],"p3-dff-ash":["i-46z3tTYGM",18600,19200],"p3-dff-neg-arh":["i-46z3tTYGM",17100,17700],"p3-dff-srh":["i-46z3tTYGM",18e3,18600],"p3-dff-srl":["i-46z3tTYGM",18e3,18600],"p3-dff-srs":["i-46z3tTYGM",18e3,18600],"p3-dlatch":["i-46z3tTYGM",15300,15900],"p3-dlatch-rst":["i-46z3tTYGM",15600,16200],"p3-sync-async":["i-46z3tTYGM",18300,18900],"p4-afifo":["i-46z3tTYGM",24e3,24600],"p4-cnt":["i-46z3tTYGM",20400,21e3],"p4-cnt-load":["i-46z3tTYGM",20700,21300],"p4-cnt-tb":["i-46z3tTYGM",20400,21e3],"p4-div2":["i-46z3tTYGM",22200,22800],"p4-div3":["i-46z3tTYGM",22200,22800],"p4-div4":["i-46z3tTYGM",22200,22800],"p4-fifo":["i-46z3tTYGM",22800,23400],"p4-mealy-nov":["i-46z3tTYGM",24600,25200],"p4-mealy-ov":["i-46z3tTYGM",24600,25200],"p4-mod":["i-46z3tTYGM",21300,21900],"p4-moore-nov":["i-46z3tTYGM",24600,25200],"p4-moore-ov":["i-46z3tTYGM",24600,25200],"p4-range":["i-46z3tTYGM",21600,22200],"p4-range-udl":["i-46z3tTYGM",21900,22500],"p4-sr5":["i-46z3tTYGM",19200,19800],"p4-updown":["i-46z3tTYGM",21e3,21600],"p4-usr5":["i-46z3tTYGM",19800,20400],"pd-b0":["somgoTERlmw",540,1140],"pd-b1":["somgoTERlmw",3900,4500],"pd-c1":["somgoTERlmw",8820,9420],"pd-c2":["somgoTERlmw",8820,9420],"pd-c3":["somgoTERlmw",8850,9450],"pd-f3":["somgoTERlmw",6600,7200],"pd-f4":["somgoTERlmw",7320,7920],"pd-p1":["somgoTERlmw",7950,8550],"pd-p3":["somgoTERlmw",7980,8580],"pd-p4":["somgoTERlmw",7950,8550],"pd-r1":["somgoTERlmw",9960,10560],"pd-r2":["somgoTERlmw",9960,10560],"pd-s2":["somgoTERlmw",7410,8010],"pd-s4":["somgoTERlmw",1700,2300],"s01-reg":["TIZwEGRvhBU",7200,7800],"s02-mux":["TIZwEGRvhBU",8400,9e3],"s03-cnt":["TIZwEGRvhBU",7200,7800],"s04-ctrl":["TIZwEGRvhBU",4500,5100],"s05-alu":["TIZwEGRvhBU",9e3,9600],"s06-memtb":["TIZwEGRvhBU",7500,8100],"s07-struct":["TIZwEGRvhBU",5100,5700],"s10-gen":["TIZwEGRvhBU",8100,8700],"s12-uart":["TIZwEGRvhBU",4500,5100],"sdc-c1":["VGQp99ArgSE",1620,2220],"sdc-c10":["VGQp99ArgSE",9510,10110],"sdc-c11":["VGQp99ArgSE",10530,11130],"sdc-c12":["VGQp99ArgSE",11070,11670],"sdc-c13":["VGQp99ArgSE",4530,5130],"sdc-c14":["VGQp99ArgSE",7020,7620],"sdc-c15":["VGQp99ArgSE",6e3,6600],"sdc-c16":["VGQp99ArgSE",4830,5430],"sdc-c2":["VGQp99ArgSE",4830,5430],"sdc-c20":["VGQp99ArgSE",8730,9330],"sdc-c3":["VGQp99ArgSE",2610,3210],"sdc-c4":["VGQp99ArgSE",3360,3960],"sdc-c5":["VGQp99ArgSE",4740,5340],"sdc-c6":["VGQp99ArgSE",6600,7200],"sdc-c7":["VGQp99ArgSE",8460,9060],"sdc-c8":["VGQp99ArgSE",8460,9060],"sdc-c9":["VGQp99ArgSE",8670,9270],"so-s3":["za2o93ldrVQ",6330,6930],"so-s4":["za2o93ldrVQ",8100,8700],"so-s7":["za2o93ldrVQ",2820,3420],"sva-a1":["9SxAZWWVeJc",9600,10200],"sva-a6":["9SxAZWWVeJc",6e3,6600],"sva-b1":["9SxAZWWVeJc",1784,2384],"sva-b10":["9SxAZWWVeJc",4500,5100],"sva-b2":["9SxAZWWVeJc",2710,3310],"sva-b3":["9SxAZWWVeJc",3600,4200],"sva-b4":["9SxAZWWVeJc",5400,6e3],"sva-b5":["9SxAZWWVeJc",6e3,6600],"sva-b6":["9SxAZWWVeJc",4200,4800],"sva-b7":["9SxAZWWVeJc",2400,3e3],"sva-b8":["9SxAZWWVeJc",10800,11400],"sva-b9":["9SxAZWWVeJc",10800,11400],"sva-p1":["9SxAZWWVeJc",6300,6900],"sva-p2":["9SxAZWWVeJc",6300,6900],"sva-p3":["9SxAZWWVeJc",9600,10200],"sva-p5":["9SxAZWWVeJc",9900,10500],"sva-p6":["9SxAZWWVeJc",9900,10500],"sva-p8":["9SxAZWWVeJc",3600,4200],"sva-s1":["9SxAZWWVeJc",6600,7200],"sva-s2":["9SxAZWWVeJc",7200,7800],"sva-s3":["9SxAZWWVeJc",7500,8100],"sva-s4":["9SxAZWWVeJc",9300,9900],"sva-s5":["9SxAZWWVeJc",8700,9300],"sva-s6":["9SxAZWWVeJc",9e3,9600],"syn-adder":["97q0N3DCZTw",555,1155],"syn-alu":["97q0N3DCZTw",959,1559],"syn-counter":["97q0N3DCZTw",5790,6390],"syn-det_1011":["97q0N3DCZTw",5580,6180],"syn-ibex":["97q0N3DCZTw",1490,2090],"syn-mux":["97q0N3DCZTw",30,630],"syn-shift_register":["97q0N3DCZTw",1889,2489],"ver-v1":["VGQp99ArgSE",8730,9330],"ver-v10":["VGQp99ArgSE",4830,5430],"ver-v11":["VGQp99ArgSE",4890,5490],"ver-v12":["VGQp99ArgSE",4890,5490],"ver-v2":["VGQp99ArgSE",8670,9270],"ver-v3":["VGQp99ArgSE",8670,9270],"ver-v4":["VGQp99ArgSE",8730,9330],"ver-v5":["VGQp99ArgSE",8670,9270],"ver-v6":["VGQp99ArgSE",8760,9360],"ver-v9":["VGQp99ArgSE",4830,5430],violation:["za2o93ldrVQ",1020,1620],"ws-lab1":["za2o93ldrVQ",4500,5100],"ws-lab12":["za2o93ldrVQ",1020,1620],"ws-lab13":["za2o93ldrVQ",8670,9270],"ws-lab14":["za2o93ldrVQ",3540,4140],"ws-lab3":["za2o93ldrVQ",1020,1620],"ws-lab6":["za2o93ldrVQ",2430,3030],"ws-lab7":["za2o93ldrVQ",2070,2670],"x-consolidate":["akitv2i4Nxw",3720,4320],"x-fifo":["akitv2i4Nxw",5310,5910],"x-gray":["akitv2i4Nxw",4710,5310],"x-mcp":["akitv2i4Nxw",5220,5820],"x-recon":["akitv2i4Nxw",3420,4020],"x-recon-fix":["akitv2i4Nxw",4170,4770]};var je={_note:"One YouTube course per topic, used for the study plans' daily watch slices. d = length in seconds.",logic:{id:"8bmt4UJmJ_k",title:"Digital Logic Design Full Course",d:8504},verilog:{id:"i-46z3tTYGM",title:"Complete Verilog Course",d:26621},systemverilog:{id:"TIZwEGRvhBU",title:"Complete SystemVerilog Course for Digital Design",d:10300},vhdl:{id:"musL2Y95Ei0",title:"Complete VHDL Course",d:14677},sva:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},dv:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},synth:{id:"97q0N3DCZTw",title:"VLSI Logic Synthesis",d:8583},cdc:{id:"akitv2i4Nxw",title:"Clock Domain Crossing (CDC) Full Course",d:6135},sta:{id:"za2o93ldrVQ",title:"Static Timing Analysis Full Course",d:9332},sdc:{id:"VGQp99ArgSE",title:"Complete SDC Timing Constraints Course",d:12024},pd:{id:"somgoTERlmw",title:"Physical Design Full Course",d:12047}};var ke={};for(let t of Object.values(je))t&&t.id&&(ke[t.id]=t.title);var Ge=t=>{let e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=t%60;return(e?e+":"+String(n).padStart(2,"0"):n)+":"+String(i).padStart(2,"0")};function Rn(t,e){let n=t.querySelector(".brief-watch"),i=we[e];if(!i){n&&n.remove();return}let[s,r,o]=i,a=ke[s]||"the course video";n||(n=document.createElement("div"),n.className="brief-watch",t.querySelector(".brief-body").before(n)),n.innerHTML=`<div class="bw-row"><span class="bw-ic" aria-hidden="true">\u{1F4FA}</span><span class="bw-txt"><b>Watch for this lab:</b> <span class="bw-t"></span> of <a target="_blank" rel="noopener"></a> <span class="bw-min"></span></span>
    <button type="button" class="bw-play">\u25B6 Play this part</button></div><span class="vbadge"></span><div class="bw-player" hidden></div>`,n.querySelector(".bw-t").textContent=Ge(r)+" \u2192 "+Ge(o);let g=n.querySelector("a");g.textContent=a,g.href=`https://www.youtube.com/watch?v=${s}&t=${r}s`,n.querySelector(".bw-min").textContent=`(${Math.max(1,Math.round((o-r)/60))} min)`;let l=n.querySelector(".vbadge");window.vddVideo&&window.vddVideo.label(l,s,null,ke[s]),n.querySelector(".bw-play").addEventListener("click",d=>{let u=n.querySelector(".bw-player");u.hidden=!1,u.innerHTML="";let f=document.createElement("button");u.appendChild(f),d.currentTarget.hidden=!0,window.vddVideo&&window.vddVideo.play(f,{id:s,title:a,start:r,end:o},"video-frame",l)})}function Ie(t,e,n){let i=document.getElementById("lab-brief");if(!i)return;let s=t[e];if(!s){i.hidden=!0;return}try{Rn(i,e)}catch(d){console.warn("watch",d)}i.querySelector(".brief-problem").textContent=s.problem;let r=i.querySelector(".brief-tasks");r.innerHTML="";for(let d of s.tasks){let u=document.createElement("li");u.textContent=d,r.appendChild(u)}i.querySelector(".brief-learn").textContent=s.learn;let o=i.querySelector(".brief-fig"),a=s.images||(s.image?[{src:s.image,alt:s.imageAlt||""}]:[]);if(a.length||s.html){if(o||(o=document.createElement("figure"),o.className="brief-fig",i.appendChild(o)),o.innerHTML="",a.length){let d=document.createElement("div");d.className="brief-imgs";for(let u of a){let f=document.createElement("a");f.href=u.src,f.target="_blank",f.rel="noopener";let m=document.createElement("img");m.src=u.src,m.alt=u.alt||"",m.loading="lazy",f.appendChild(m),d.appendChild(f)}o.appendChild(d)}if(s.html){let d=document.createElement("div");d.className="brief-html",d.innerHTML=s.html,o.appendChild(d)}if(s.caption){let d=document.createElement("figcaption");d.textContent=s.caption,o.appendChild(d)}}else o&&o.remove();let g=i.querySelector(".brief-dg"),l=n&&n[e];if(l&&(l.b||l.f)){g||(g=document.createElement("div"),g.className="brief-dg",i.querySelector(".brief-body").after(g)),g.innerHTML="";let d=(u,f)=>{if(!f)return;let m=document.createElement("div");m.className="brief-dgp";let h=document.createElement("h3");h.textContent=u,m.appendChild(h);let y=document.createElement("div");y.className="brief-dgs",y.appendChild(f),m.appendChild(y),g.appendChild(m)};try{d(l.bt||"Design",l.b?Ue(l.b):null)}catch(u){console.warn("diagram",e,u)}try{d(l.ft||"Problem \u2192 solution",l.f?Ve(l.f):null)}catch(u){console.warn("flow",e,u)}g.classList.toggle("one",g.children.length===1)}else g&&g.remove();i.hidden=!1}(function(){if(window.__vddYtNudge)return;window.__vddYtNudge=!0;let t=Object.keys(we),e=new Set,n={},i=o=>{let a=we[o];return a?{vid:a[0],from:a[1],to:a[2],title:ke[a[0]]||"the course video"}:null};function s(o){let a=i(o),g=t.indexOf(o);if(g<0)return null;for(let l=g+1;l<t.length;l++){let d=i(t[l]);if(d&&!(a&&d.vid===a.vid&&d.from===a.from))return d}return null}function r(o,a,g){let l=document.getElementById("quiz-nudge");if(l&&l.remove(),!document.getElementById("yt-nudge-css")){let m=document.createElement("style");m.id="yt-nudge-css",m.textContent="#yt-nudge{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:60;display:flex;align-items:center;gap:14px;max-width:calc(100% - 32px);padding:10px 10px 10px 18px;border-radius:12px;background:#0b1f2a;color:#e6ecea;box-shadow:0 10px 30px rgba(0,0,0,.25);font:500 15px/1.35 Inter,system-ui,sans-serif}#yt-nudge b{color:#fff}#yt-nudge a{display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:9px 14px;background:#f00;color:#fff;font:600 14px Inter,system-ui,sans-serif;text-decoration:none;white-space:nowrap}#yt-nudge .x{border:0;background:transparent;color:#93a5ac;padding:6px 8px;font-size:18px;cursor:pointer}@media (max-width:560px){#yt-nudge{bottom:10px;font-size:14px;gap:8px;flex-wrap:wrap}}",document.head.appendChild(m)}let d=document.getElementById("yt-nudge");d||(d=document.createElement("div"),d.id="yt-nudge",d.setAttribute("role","status"),document.body.appendChild(d));let u=Math.max(1,Math.round((a.to-a.from)/60));d.innerHTML=`<span>${o}</span><a target="_blank" rel="noopener">\u25B6 ${g} (${u} min)</a><button type="button" class="x" aria-label="Close">\xD7</button>`;let f=d.querySelector("a");f.href=`https://www.youtube.com/watch?v=${a.vid}&t=${a.from}s`,f.addEventListener("click",()=>{try{(window.vddQ=window.vddQ||[]).push("yt_clicks")}catch{}d.remove()}),d.querySelector(".x").addEventListener("click",()=>d.remove())}document.addEventListener("vdd-run",o=>{let a=o.detail||{};if(a.id)if(a.pass){if(e.has(a.id+":next"))return;let g=s(a.id);if(!g)return;e.add(a.id+":next"),setTimeout(()=>r("<b>Passed!</b> Next topic is in the course video.",g,"Watch next on YouTube"),1200)}else{if(n[a.id]=(n[a.id]||0)+1,!a.quiz&&n[a.id]<2||e.has(a.id+":stuck"))return;let g=i(a.id);if(!g)return;e.add(a.id+":stuck"),setTimeout(()=>r("<b>Stuck?</b> This part of the course explains it.",g,"Watch on YouTube"),800)}})})();var Fn=new Set(`module endmodule input output inout wire reg logic bit byte int integer real assign always always_ff
always_comb always_latch initial begin end if else case casez casex endcase default for while repeat forever posedge negedge
or and not nand nor xor xnor function endfunction task endtask return typedef enum struct packed parameter localparam generate
endgenerate genvar assert assume cover property endproperty sequence endsequence disable iff throughout within intersect
first_match class endclass extends virtual new this super rand randc constraint dist inside solve before soft foreach covergroup
endgroup coverpoint bins illegal_bins ignore_bins wildcard cross binsof with fork join join_any join_none wait interface
endinterface modport import package endpackage automatic static void string signed unsigned until s_eventually`.split(/\s+/)),En=new Set(`abs access after alias all and architecture array assert attribute begin block body buffer bus case component
configuration constant context disconnect downto else elsif end entity exit file for force function generate generic group guarded
if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out
package parameter port postponed procedure process protected pure range record register reject release rem report return rol ror
select severity signal shared sla sll sra srl subtype then to transport type unaffected units until use variable wait when while
with work xnor xor std_logic std_logic_vector unsigned signed integer natural positive boolean rising_edge falling_edge to_integer
to_unsigned to_signed resize shift_left shift_right finish string time`.split(/\s+/)),oe=!1,Cn=/\$?[A-Za-z_][A-Za-z0-9_$]*|\d*'[sS]?[bBhHdDoO][0-9a-fA-FxXzZ_?]+|\d+(?:\.\d+)?|\s+|./g,Pe=t=>oe?/^\s*--/.test(t):/^\s*(\/\/|\/\*|\*)/.test(t),xe=t=>(oe?t.replace(/--.*$/,""):t.replace(/\/\/.*$/,"")).trimEnd();function Wn(t){if(Pe(t)||(t=xe(t),!t.trim()))return null;let e=t.match(Cn)||[],n=[],i=!1,s=!0;return e.forEach((r,o)=>{if(!/^[\$A-Za-z0-9_']/.test(r)||(oe?En.has(r.toLowerCase()):Fn.has(r))||r.startsWith("$"))n.push(r);else{let g=e.slice(o+1).join(""),d=/^[A-Za-z_]/.test(r)&&(!i&&s&&(oe?/^\s*(<=|:=|:|\(\s*to_integer|\(\s*\d+\s*\)\s*<=)/:/^\s*(<=|=(?!=)|\[|:(?!:)|;|,|#|[A-Za-z_]\w*\s*\()/).test(g)||n[n.length-1]===".");n.push(d?r:"___"),r.startsWith("$")||(s=!1)}(r==="="||r==="<"&&e[o+1]==="="||oe&&r===":"&&e[o+1]==="=")&&(i=!0),r===";"&&(i=!1,s=!0)}),n.join("").replace(/___(\s*___)+/g,"___")}function Nn(t,e){let n=t.length,i=e.length,s=Array.from({length:n+1},()=>new Int32Array(i+1));for(let d=n-1;d>=0;d--)for(let u=i-1;u>=0;u--)s[d][u]=t[d].trim()===e[u].trim()?s[d+1][u+1]+1:Math.max(s[d+1][u],s[d][u+1]);let r=[],o=0,a=0,g=null,l=()=>{g&&(g.add.length||g.del.length)&&r.push(g),g=null};for(;o<n||a<i;)o<n&&a<i&&t[o].trim()===e[a].trim()?(l(),o++,a++):a<i&&(o>=n||s[o][a+1]>=s[o+1][a])?(g=g||{at:o,add:[],del:[]},g.add.push(e[a++])):(g=g||{at:o,add:[],del:[]},g.del.push({n:o+1,text:t[o++]}));return l(),r.map(d=>({at:d.at,add:d.add.filter(u=>!Pe(u)&&xe(u).trim()),del:d.del.filter(u=>!Pe(u.text)&&xe(u.text).trim())})).filter(d=>d.add.length||d.del.length)}var Hn=[[/\?[^:]*:/,"the ?: (conditional) operator"],[/\balways_ff\b/,"an always_ff block"],[/\balways_comb\b/,"an always_comb block"],[/\balways\s*@\s*\(\s*\*|\balways\s*@\*/,"a combinational always @* block"],[/\balways\s*@\s*\(\s*(pos|neg)edge/,"a clocked always block"],[/\b(pos|neg)edge\s+\w+\s+or\s+(pos|neg)edge/,"an asynchronous reset"],[/<=/,"non-blocking assignments (<=)"],[/\bcase[zx]?\b/,"a case statement"],[/\bfor\s*\(/,"a for loop"],[/\{[^}]*,[^}]*\}/,"concatenation { , }"],[/\{\s*\d+\s*\{/,"replication {N{\u2026}}"],[/[~^&|]\s*\w/,"bitwise / reduction operators"],[/>>>|<<<|>>|<</,"shifts"],[/\bassert\s+property\b/,"an assert property"],[/\bcover\s+property\b/,"a cover property"],[/\|->/,"overlapping implication |->"],[/\|=>/,"non-overlapping implication |=>"],[/##\[/,"a delay range ##[m:n]"],[/##\d/,"a fixed delay ##N"],[/\[\*/,"consecutive repetition [*N]"],[/\[->|\[=/,"goto / non-consecutive repetition"],[/\$past\b/,"$past"],[/\$rose\b/,"$rose"],[/\$fell\b/,"$fell"],[/\$stable\b/,"$stable"],[/\$(onehot0?|countones|isunknown)\b/,"a system function such as $onehot / $countones"],[/\bdisable\s+iff\b/,"disable iff"],[/\bconstraint\b/,"a constraint block"],[/\brandc\b/,"randc"],[/\bdist\b/,"a dist weighting"],[/\binside\b/,"inside { \u2026 }"],[/\bsolve\b.*\bbefore\b/,"solve \u2026 before"],[/\bcovergroup\b|\bcoverpoint\b/,"a covergroup / coverpoint"],[/\bbins\b/,"bins"],[/\bcross\b/,"a cross"],[/=>/,"transition bins (a => b)"],[/\bfork\b/,"fork \u2026 join"],[/\bjoin_any\b/,"join_any"],[/\bdisable\s+fork\b/,"disable fork"],[/\bwait\s*\(/,"wait ( \u2026 )"],[/@\s*\(\s*(pos|neg)edge/,"waiting on a clock edge"],[/\brepeat\s*\(/,"repeat ( \u2026 )"],[/\bvirtual\b/,"virtual methods / interfaces"],[/\bextends\b/,"class inheritance (extends)"],[/\bnew\s*\(/,"new()"],[/\bmailbox\b/,"a mailbox"],[/\bsemaphore\b/,"a semaphore"],[/\.(push_back|pop_front|size)\b/,"queue methods"],[/\bfunction\b/,"a function"],[/\btask\b/,"a task"],[/\btypedef\s+enum\b/,"an enum type"],[/\bgenerate\b|\bgenvar\b/,"a generate loop"],[/^\s*(and|or|not|nand|nor|xor|xnor|buf)\b/m,"gate primitives (and, or, xor \u2026)"],[/^\s*\w+\s+(#\(.*\)\s*)?\w+\s*\(\s*\./m,"module instances with .port(signal) connections"],[/\b(nand|nor|and|or|not)\s+#/,"gate delays (#N)"],[/[*\/]\s*[\w(]/,"arithmetic (*, /)"],[/\boption\.|\btype_option\./,"covergroup options (option.\u2026)"],[/^\s*wire\b/m,"internal wires"],[/\bassign\b/,"a continuous assign"],[/\bif\s*\(/,"an if / else"]],Bn=[[/\brising_edge\b/i,"rising_edge(clk)"],[/\bfalling_edge\b/i,"falling_edge(clk)"],[/\bprocess\s*\(\s*all\s*\)/i,"a process(all)"],[/\bprocess\s*\(\s*\w+\s*,/i,"a process with the reset in its sensitivity list"],[/\bcase\b/i,"a case statement"],[/\bwhen\b.*\belse\b/i,"a when \u2026 else conditional assignment"],[/\bwith\b.*\bselect\b/i,"a with \u2026 select assignment"],[/\belsif\b/i,"an if / elsif chain"],[/\bif\b/i,"an if statement"],[/\bgenerate\b/i,"a for \u2026 generate loop"],[/\bport\s+map\b/i,"entity instances with port map"],[/\bgeneric\s+map\b/i,"a generic map"],[/\brecord\b/i,"a record type"],[/\btype\b.*\bis\s*\(/i,"an enumerated type"],[/\barray\b/i,"an array type"],[/'(succ|high|low|image|pos|val)\b/i,"type attributes ('succ, 'high \u2026)"],[/\bprocedure\b/i,"a procedure"],[/\bfunction\b/i,"a function"],[/\bothers\s*=>/i,"(others => \u2026) aggregates"],[/&/,"concatenation &"],[/\b(unsigned|to_unsigned|to_integer)\b/i,"numeric_std (unsigned, to_integer \u2026)"],[/\bshift_(left|right)\b/i,"shift_left / shift_right"],[/\bsignal\b/i,"internal signals"],[/\bvariable\b/i,"variables"],[/\bwait\b/i,"wait statements"],[/\bfor\b.*\bloop\b/i,"a for loop"],[/\b(and|or|xor|not)\b/i,"logical operators (and, or, xor, not)"],[/[+-]\s*\w/,"arithmetic (+, -)"],[/<=/,"signal assignments (<=)"]];function ve(t,e){return t+" "+e+(t===1?"":"s")}function Le(t,e){if(!t||!t.solution)return null;oe=t.std==="vhdl";let n=[];for(let g of["design","tb"]){let l=t.solution[g];if(l==null||l===t[g])continue;let d=Nn((t[g]||"").split(`
`),l.split(`
`));d.length&&n.push({part:g,name:e[g],hunks:d})}if(!n.length)return null;let i=[],s=[];for(let g of n)for(let l of g.hunks){let d=l.del.length?l.del[0].n:l.at,u=l.del.length&&l.add.length?l.del.length===l.add.length?`edit ${ve(l.add.length,"line")}`:`replace ${ve(l.del.length,"line")} with ${l.add.length}`:l.add.length?`add ${ve(l.add.length,"line")}`:`remove ${ve(l.del.length,"line")}`,f=l.del.length?`at line ${d}`:d===0?"at the top":`after line ${d}`;i.push({file:g.name,pos:f,what:u}),s.push(...l.add)}let r=s.map(xe).join(`
`),o=[];for(let[g,l]of oe?Bn:Hn)g.test(r)&&!o.includes(l)&&o.push(l);let a=[];for(let g of n)for(let l of g.hunks){let d=l.del.length?l.del[0].n:l.at,u=l.add.map(Wn).filter(Boolean);a.push({file:g.name,pos:l.del.length?`line ${d}`:d===0?"top":`after line ${d}`,lines:u.length?u:l.del.map(f=>"remove: "+f.text.trim())})}return{where:i.slice(0,6),more:Math.max(0,i.length-6),ideas:o.slice(0,5),shape:a.slice(0,6)}}var x=(t,e,n,i)=>["P: "+t,...(Array.isArray(e)?e:[e]).map(s=>"S: "+s),"Q: "+(i||"The testbench drives every input combination and compares with a reference."),"OK: "+n],v=(t,e,n,i)=>["P: "+t,...(Array.isArray(e)?e:[e]).map(s=>"S: "+s),"Q: "+(i||"Every clock, the testbench compares your design with a reference model."),"OK: "+n],Ke={counter:{b:"en > (+1 if en) > [count] > count; [count] > (+1 if en); rst_n .async.> [count]",f:v("Timers and addresses need a counter that resets, counts when enabled and wraps.","count <= count + 1 when en, on the rising edge; rst_n clears it at once.","A parameterised counter you can read in the waveform.","Find the cycle where it wraps from 15 to 0.")},mux:{b:"a > <4:1 mux> > y; b > <4:1 mux>; c > <4:1 mux>; d > <4:1 mux>; sel .2 bits.> <4:1 mux>",f:x("Pick one of four 8-bit buses.","A case on sel inside always @(*), with every value covered.","No latch: every sel value drives y.")},adder:{b:"a[0], b[0], cin > {FA0} -c1-> {FA1} -c2-> {FA2} -c3-> {FA3} > cout; {FA0} > sum",f:x("Checking results by eye does not scale.",["A 4-bit ripple-carry adder from full adders.","The testbench loops over all 512 inputs and compares with a + b + cin."],"The testbench prints PASS or FAIL by itself.","Does the self-checking testbench find a bug you add?")},fsm:{b:"din > (next state) > [state\\nS0..S4] > (found = S4) > found; [state\\nS0..S4] > (next state)",f:["P: Detect 1011 in a serial stream, including overlaps (10111011).","S: One state per prefix matched: S0, 1, 10, 101, 1011.","S: After 1011 the last 1 can start the next match.","Q: Count the detections in the run.","OK: A Moore FSM: found depends on the state only."]},cdc:{b:"async_in > [s1|clk_dst] > [s2|clk_dst] > sync_out",f:["P: A signal from another clock can make the sampling flop metastable.","S: The first flop may go metastable.","S: The second flop gives it a whole clock to settle.","OK: sync_out is a clean level in clk_dst, two clocks later."]},fifo:{b:"din > {memory 8\xD78} > dout; wr_en > [wptr] .> {memory 8\xD78}; rd_en > [rptr] .> {memory 8\xD78}; [wptr] > (count, full, empty); [rptr] > (count, full, empty)",f:["P: Producer and consumer run at different rates.","S: Write at wptr, read at rptr, both wrap around.","Q: Writes when full and reads when empty must be ignored.","OK: A FIFO with correct full and empty flags."]},sv:{b:"{always_ff\\nstate} > {always_comb\\nlights} > lights; {always_comb\\nnext state} > {always_ff\\nstate}; {assertions} .check.> {always_ff\\nstate}",f:["P: Plain Verilog FSMs use magic numbers and are hard to read.","S: typedef enum names the states; always_ff and always_comb show the intent.","S: Assertions check the design while it runs.","OK: A readable traffic-light FSM that checks itself."]},"p1-ha-df":{b:"a > (XOR) > sum; b > (XOR); a > (AND) > carry; b > (AND)",f:x("Add two bits.","assign sum = a ^ b; assign carry = a & b;","Dataflow: continuous assignments only.")},"p1-ha-bh":{b:"a > {always @(*)\\ncase {a, b}} > sum; b > {always @(*)\\ncase {a, b}} > carry",f:x("The same half adder, by its behavior.","An always @(*) block with a case on {a, b}; outputs are reg.","Behavioral modelling gives the same truth table.")},"p1-ha-st":{b:"a > (xor g1) > sum; b > (xor g1); a > (and g2) > carry; b > (and g2)",f:x("The same half adder from gates.","Instantiate xor and and primitives and wire them.","Structural modelling with gate primitives.")},"p1-fa-df":{b:"a > (a ^ b ^ cin) > sum; b > (a ^ b ^ cin); cin > (a ^ b ^ cin); a > (majority) > cout; b > (majority); cin > (majority)",f:x("Add three bits.","sum = a ^ b ^ cin; cout = ab + cin(a ^ b).","The full adder in two equations.")},"p1-fa-bh":{b:"a > {always @(*)\\n{cout, sum} = a+b+cin} > sum; b > {always @(*)\\n{cout, sum} = a+b+cin} > cout; cin > {always @(*)\\n{cout, sum} = a+b+cin}",f:x("The same full adder, by its behavior.","{cout, sum} = a + b + cin inside always @(*).","Verilog arithmetic does the work.")},"p1-fa-st":{b:"a > {half_adder 1} -s1-> {half_adder 2} > sum; b > {half_adder 1} -c1-> (OR) > cout; cin > {half_adder 2} -c2-> (OR)",f:x("Build a full adder the textbook way.","Two half_adder instances and an OR gate, connected by name.","Hierarchy: modules inside modules.")},"p1-ops":{b:"a[3:0] > {arithmetic, bitwise, logical,\\nreduction, relational, shift,\\nconcat, replicate, ?:} > one output per operator; b[3:0] > {arithmetic, bitwise, logical,\\nreduction, relational, shift,\\nconcat, replicate, ?:}",f:x("Know every Verilog operator group.","Each output uses one operator on a and b.","Widths and results of every operator.")},"p1-c2f":{b:"C > {task c2f\\nF = C*9/5 + 32} > F",f:["P: The same calculation is needed many times.","S: Write it once as a task with input and output arguments.","S: Call it for every temperature.","Q: Integer arithmetic: multiply before you divide.","OK: One task, many calls, the same result as the formula."]},"p2-add4":{b:"a[3:0] > (a + b + cin) > sum[3:0]; b[3:0] > (a + b + cin) > cout; cin > (a + b + cin)",f:x("Add two 4-bit numbers and a carry in.","{cout, sum} = a + b + cin: the result needs 5 bits.","Concatenation catches the carry out.")},"p2-mux2":{b:"a > <2:1> > y; b > <2:1>; sel .> <2:1>",f:x("Pick one of two inputs.","y = sel ? b : a.","The conditional operator is a mux.")},"p2-mux4":{b:"d0 > <4:1> > y; d1 > <4:1>; d2 > <4:1>; d3 > <4:1>; sel .2 bits.> <4:1>",f:x("Pick one of four inputs.","A case on sel, or nested ?:.","Every sel value selects one input.")},"p2-dec24":{b:"a[1:0] > {2-to-4 decoder} > y[3:0]; en .> {2-to-4 decoder}",f:x("Turn a 2-bit number into one-hot select lines.","y = en ? 1 << a : 0.","Exactly one line high when enabled.")},"p2-enc42":{b:"d[3:0] > {4-to-2 encoder} > y[1:0]; {4-to-2 encoder} > valid",f:x("Find which one of four lines is high.","A case on d for the four one-hot values; valid = 0 otherwise.","Encoding, and flagging illegal inputs.")},"p2-penc42":{b:"d[3:0] > {priority encoder\\nhighest 1 wins} > y[1:0]; {priority encoder\\nhighest 1 wins} > valid",f:x("Several requests at once: the highest wins.","if/else from d[3] down to d[0].","Priority comes from the order of the tests.")},"p2-cmp4":{b:"a[3:0] > {comparator} > gt; b[3:0] > {comparator} > eq; {comparator} > lt",f:x("Compare two unsigned 4-bit numbers.","gt, eq and lt with relational operators.","Exactly one output is 1 for every pair.")},"p2-bshift8":{b:"d[7:0] > {barrel shifter} > y[7:0]; amt .0 to 7.> {barrel shifter}; dir .left/right.> {barrel shifter}; rotate .> {barrel shifter}",f:x("Shift or rotate by any amount in one step.",["Shift with << or >>.","For rotate, OR in the bits that fell off the other end."],"A processor-style shift unit.")},"p2-alu":{b:"a > (add, sub, and, or,\\nxor, not, shl, shr) > <op mux> > y; b > (add, sub, and, or,\\nxor, not, shl, shr); op .3 bits.> <op mux>; <op mux> > (y == 0) > zero; (add, sub, and, or,\\nxor, not, shl, shr) > carry",f:x("Eight operations in one block, chosen by an opcode.","A case on op; zero and carry flags.","The heart of a processor datapath.")},"p3-dlatch":{b:"d > [latch\\nen = 1: q = d] > q; en .> [latch\\nen = 1: q = d]",f:v("Store a bit while en = 0, follow d while en = 1.","always @(*) if (en) q = d: the missing else makes a latch.","A transparent latch.","Does q follow d while en is high?")},"p3-dlatch-rst":{b:"d > [latch] > q; en .> [latch]; rst .async, wins.> [latch]",f:v("Clear the latch at once, whatever en is.","Test rst first, then en.","A latch with an asynchronous reset.")},"p3-dff":{b:"d > [DFF] > q; @clk .> [DFF]",f:v("Sample d only on the rising edge.","always @(posedge clk) q <= d.","The basic memory element of synchronous design.")},"p3-dff-arh":{b:"d > [DFF] > q; @clk .> [DFF]; rst .async, high.> [DFF]",f:v("Reset must work with no clock running.","always @(posedge clk or posedge rst).","rst clears q immediately.")},"p3-dff-neg-arh":{b:"d > [DFF\\nfalling edge] > q; @clk .negedge.> [DFF\\nfalling edge]; rst .async.> [DFF\\nfalling edge]",f:v("Capture on the falling edge, as in DDR.","always @(negedge clk or posedge rst).","q changes at the falling edge.")},"p3-dff-arl":{b:"d > [DFF] > q; @clk .> [DFF]; rst_n .async, low.> [DFF]",f:v("Most chips use an active-low reset.","always @(posedge clk or negedge rst_n) if (!rst_n) ...","rst_n = 0 clears q at once.")},"p3-dff-ash":{b:"d > [DFF] > q; @clk .> [DFF]; set .async, high.> [DFF]",f:v("Some registers must start at 1.","set forces q to 1 without waiting for the clock.","An asynchronous set.")},"p3-dff-srh":{b:"d > <rst ? 0 : d> > [DFF] > q; rst .> <rst ? 0 : d>; @clk .> [DFF]",f:v("A reset that is timed like data.","Only posedge clk in the sensitivity list; test rst inside.","rst acts on the next clock edge.")},"p3-dff-srl":{b:"d > <rst_n ? d : 0> > [DFF] > q; rst_n .> <rst_n ? d : 0>; @clk .> [DFF]",f:v("The same synchronous reset, active low.","if (!rst_n) q <= 0 inside always @(posedge clk).","rst_n = 0 clears q on the next edge.")},"p3-dff-srs":{b:"d > <rst, set, d\\npriority> > [DFF] > q; rst .wins.> <rst, set, d\\npriority>; set .> <rst, set, d\\npriority>",f:v("Reset and set together: one must win.","Test rst first, then set, then load d.","Priority is the order of the if/else.")},"p3-sync-async":{b:"d > [q_async] > q_async; d > [q_sync] > q_sync; rst .at once.> [q_async]; rst .next edge.> [q_sync]",f:["P: One reset, two registers: when does each clear?","S: q_async has rst in its sensitivity list; q_sync does not.","Q: In the waveform, q_async clears at rst, q_sync at the next clock edge.","OK: You can read the difference in time."]},"p3-twin":{b:"d[7:0] > [qa] > qa; d[7:0] > [qb] > qb; load_a .> [qa]; load_b .> [qb]",f:v("Two registers share a bus but load independently.","Each register loads d only when its load is high, else holds.","Shared data, separate enables.")},"p4-sr5":{b:"sin > [q4] > [q3] > [q2] > [q1] > [q0]",f:v("Serial data enters at the left and moves right.","q <= {sin, q[4:1]} every clock.","A 5-bit serial-in shift register.")},"p4-usr5":{b:"d > <mode mux\\nhold, >>, <<, load> > [q 5 bits] > q; sr_in > <mode mux\\nhold, >>, <<, load>; sl_in > <mode mux\\nhold, >>, <<, load>; [q 5 bits] > <mode mux\\nhold, >>, <<, load>; mode .2 bits.> <mode mux\\nhold, >>, <<, load>",f:v("One register for every shift job.","A case on mode chooses the next value.","Hold, shift right, shift left or load.")},"p4-cnt":{b:"[q 4 bits] > (+1) > [q 4 bits] > q; rst_n .async.> [q 4 bits]",f:v("Count 0 to 15 and wrap.","q <= q + 1 on every rising edge.","A basic counter.")},"p4-cnt-tb":{b:"{your testbench\\nstimulus + checker}+ > {counter (given)} > {your testbench\\nstimulus + checker}+; BUG .> {counter (given)}",f:["P: The design is given; you write the testbench.","S: Drive reset, enable and clock; keep a reference count.","S: Compare every clock and count mismatches.","Q: Set BUG = 1: does your testbench print FAIL?","OK: A testbench that catches a broken design."]},"p4-cnt-load":{b:"d > <load ? d : q+1> > [q] > q; [q] > (+1) > <load ? d : q+1>; load .> <load ? d : q+1>",f:v("Start counting from a given value.","load = 1 loads d, otherwise count up.","A loadable counter.")},"p4-updown":{b:"[q] > (+1 or \u22121) > [q] > q; up .> (+1 or \u22121)",f:v("Count in either direction.","up = 1 adds 1, up = 0 subtracts 1; both wrap.","An up/down counter.")},"p4-mod":{b:"[q] > (q == N\u22121 ? 0 : q+1) > [q] > q",f:v("A decade counter: 0 to 9, then 0.","Compare with N\u22121 and clear instead of adding.","A modulus-N counter.")},"p4-range":{b:"[q] > (q == HIGH ? LOW : q+1) > [q] > q",f:v("Count only from LOW to HIGH.","Reset to LOW; after HIGH go back to LOW.","A range counter.")},"p4-range-udl":{b:"d > <load / up / down> > [q] > q; [q] > <load / up / down>; load .> <load / up / down>; up .> <load / up / down>",f:v("Range, direction and load together.","load first; then up wraps HIGH \u2192 LOW, down wraps LOW \u2192 HIGH.","All counter features in one block.")},"p4-div2":{b:"[clk_out] > (NOT) > [clk_out] > clk_out; @clk .> [clk_out]",f:v("Make a clock at half the frequency.","Toggle a flop on every rising edge.","clk_out = clk / 2 with 50% duty.")},"p4-div4":{b:"[cnt 2 bits] > (+1) > [cnt 2 bits]; [cnt 2 bits] -cnt[1]-> clk_out",f:v("Divide by 4 with 50% duty.","A 2-bit counter: its top bit is clk / 4.","Counter bits are divided clocks.")},"p4-div3":{b:"[mod-3 counter\\nposedge] > (1/3 pulse) > [copy\\nnegedge] > (OR) > clk_out; (1/3 pulse) > (OR)",f:["P: An odd divider: a counter gives 33% duty, the testbench wants 50%.","S: A mod-3 counter on the rising edge makes a pulse 1 clock long.","S: A copy delayed by half a clock (falling edge).","F: OR them: the pulse becomes exactly 1.5 clocks.","OK: clk / 3 with exactly 50% duty."]},"p4-fifo":{b:"din > {memory 8\xD78} > dout; wr_en > [wptr] .> {memory 8\xD78}; rd_en > [rptr] .> {memory 8\xD78}; [wptr] > (full, empty); [rptr] > (full, empty)",f:v("Buffer data between a producer and a consumer.",["Write at wptr unless full, read at rptr unless empty.","Full and empty from the pointers and a count."],"A single-clock FIFO.")},"p4-afifo":{b:"wdata > {memory} > rdata; [wptr Gray|wclk] > [2-flop sync|rclk] > (rempty|rclk); [rptr Gray|rclk] > [2-flop sync #w|wclk] > (wfull|wclk); [wptr Gray|wclk] .> {memory}",f:["P: Producer and consumer on different clocks.","S: Each pointer is a Gray code: one bit changes per step.","S: Pointers cross through 2-flop synchronizers.","OK: Full in wclk and empty in rclk are never wrong, only late."]},"p4-mealy-nov":{b:"x > (next state) > [state\\nS0 S1 S2] > (y = S2 and x) > y; x > (y = S2 and x); [state\\nS0 S1 S2] > (next state)",f:v("Detect 1-0-1; restart after each detection.","Mealy: y depends on the state AND x.","10101 gives one detection.")},"p4-mealy-ov":{b:"x > (next state) > [state] > (y = S2 and x) > y; x > (y = S2 and x); [state] > (next state)",f:v("Detect 1-0-1, with overlap.","After a detection go to the '1 seen' state, not to the start.","10101 gives two detections.")},"p4-moore-nov":{b:"x > (next state) > [state\\nS0..S3] > (y = S3) > y; [state\\nS0..S3] > (next state)",f:v("Detect 1-0-1 with a Moore machine.","An extra state for 'found'; y depends on the state only.","y comes one clock later than in the Mealy version.")},"p4-moore-ov":{b:"x > (next state) > [state\\nS0..S3] > (y = S3) > y; [state\\nS0..S3] > (next state)",f:v("Moore and overlapping.","From the found state, a 0 goes to '10 seen'.","Two detections in 10101, one clock after each 1.")},"s01-reg":{b:"data > [register 8 bits\\nalways_ff] > out; enable .> [register 8 bits\\nalways_ff]; rst_ .async.> [register 8 bits\\nalways_ff]",f:v("Store a byte when enable is high, the SystemVerilog way.","logic, ANSI ports, timeunit and always_ff.","The CPU's register block.")},"s02-mux":{b:"in_a > <mux #(WIDTH)> > out; in_b > <mux #(WIDTH)>; sel_a .> <mux #(WIDTH)>",f:x("One mux module for any width.","A WIDTH parameter; always_comb with unique case and an X default.","Used as 5-bit in the CPU and 8/1-bit in the testbench.")},"s03-cnt":{b:"data > <load, +1 or hold> > [count 5 bits] > count; [count 5 bits] > <load, +1 or hold>; load .> <load, +1 or hold>; enable .> <load, +1 or hold>",f:v("The CPU's program counter.","load wins over enable; count wraps from 31 to 0.","A loadable counter in SystemVerilog.")},"s04-ctrl":{b:"opcode > {controller FSM\\n8 states, enum} > sel, rd, ld_ir, halt,\\ninc_pc, ld_ac, ld_pc, wr, data_e; zero > {controller FSM\\n8 states, enum}",f:v("Decide which CPU block acts in each of 8 states.","An enum for states and a package for opcodes; outputs from state, opcode and zero.","The VeriRISC sequence controller.")},"s05-alu":{b:"accum > (op: ADD, AND, XOR,\\nLDA, pass) > [out\\nfalling edge] > out; data > (op: ADD, AND, XOR,\\nLDA, pass); opcode .> (op: ADD, AND, XOR,\\nLDA, pass); accum > (accum == 0) > zero",f:v("Combine the accumulator with memory data.","A case on the opcode enum; register out on the falling edge.","The result is ready for the accumulator at the next rising edge.")},"s06-memtb":{b:"{your testbench\\ntasks write/read}+ > {memory 32\xD78 (given)} > {your testbench\\ntasks write/read}+; BUG .> {memory 32\xD78 (given)}",f:["P: The memory is given; prove it works.","S: Write tasks for write and read.","S: Fill memory, read it back, compare.","Q: With BUG = 1, does your testbench report errors?","OK: Reusable tasks make a short, strong testbench."]},"s07-struct":{b:"{testbench} -bus_t packed struct-> {memory with\\none bus port} > data_out; {package\\ntypedef struct packed} .> {memory with\\none bus port}",f:["P: Many signals travel together; every module must agree on them.","S: Put a packed struct in a package.","S: One port carries read, write, address and data.","OK: One definition, no wiring mistakes. (Interfaces do the same in other simulators.)"]},"s08-cpu":{b:"{program counter} > <address mux> > {memory} > {instruction register} > {controller\\n8-state FSM}; {instruction register} -operand address-> <address mux>; {memory} -data-> {ALU} > {accumulator}; {accumulator} > {ALU}; {controller\\n8-state FSM} .control.> {ALU}",f:["P: Put the blocks together into a CPU that runs programs.","S: Fetch: PC \u2192 memory \u2192 instruction register.","S: Execute: ALU on accumulator and memory data, controlled by the FSM.","Q: Do the test programs reach HALT at the right address?","OK: A working 8-bit VeriRISC CPU."]},"s09-johnson":{b:"[q N bits] > (shift left,\\nfeed back ~MSB) > [q N bits] > q",f:v("2N states with one bit changing at a time.","Shift left and feed the inverted MSB back in.","A Johnson counter: 8 states from 4 flops.")},"s10-gen":{b:"a, b, cin > {stage[0].fa} -c-> {stage[1].fa} -c-> {\u2026 N stages} -c-> {stage[N-1].fa} > cout",f:v("Build an array of identical blocks for any size.","A generate for loop with a genvar; each carry feeds the next stage.","An N-bit ripple-carry adder from one loop.","The testbench checks N = 4 and N = 12.")},"s11-dpram":{b:"port A: addr, din, we > {dual-port RAM} > dout_a; port B: addr > {dual-port RAM} > dout_b",f:v("Write on one port while another reads.","One array, two synchronous read ports; port A reads before it writes.","A dual-port RAM.")},"s12-uart":{b:"data, start > {UART TX FSM\\nIDLE, START, DATA, STOP} > tx; {UART TX FSM\\nIDLE, START, DATA, STOP} > busy; [tick counter] .bit time.> {UART TX FSM\\nIDLE, START, DATA, STOP}",f:v("Send bytes over one wire.",["Start bit 0, 8 data bits LSB first, stop bit 1.","Each bit lasts CLKS_PER_BIT clocks."],"A UART transmitter.","The testbench decodes tx like a receiver.")},"l01-gates":{b:"a > (AND, OR, NOT,\\nNAND, NOR, XOR, XNOR) > 7 outputs; b > (AND, OR, NOT,\\nNAND, NOR, XOR, XNOR)",f:x("Know every gate's truth table.","One gate primitive per output.","All 7 gates for all 4 inputs.")},"l02-nand":{b:"a > (NAND) > (NAND #2) > and_y; b > (NAND); a > (NAND #a) > (NAND #o) > or_y; b > (NAND #b) > (NAND #o)",f:x("Build every gate from NAND alone.",["NOT = NAND(a, a); AND = NOT of NAND.","OR = NAND(a', b') by De Morgan; XOR with 4 NANDs."],"NAND is universal.")},"l03-nor":{b:"a > (NOR) > (NOR #2) > or_y; b > (NOR); a > (NOR #a) > (NOR #o) > and_y; b > (NOR #b) > (NOR #o)",f:x("Build every gate from NOR alone.",["NOT = NOR(a, a); OR = NOT of NOR.","AND = NOR(a', b'); XNOR with 4 NORs."],"NOR is universal too.")},"l04-sop-pos":{b:"A, B, C > (y1 = AB + A'B'\\nSOP) > y1; A, B, C > (y2 = (A+B)(B+C)(A+C')\\nPOS) > y2; A, B, C > (y3 = A + BC') > y3",f:x("The same truth table in two forms.","Write each expression with assign, exactly as given.","SOP sums minterms, POS multiplies maxterms.")},"l05-demorgan":{b:"A, B > ((A\xB7B)') > l1_left; A, B > (A' + B') > l1_right; A, B > ((A+B)') > l2_left; A, B > (A'\xB7B') > l2_right",f:x("Turn ANDs into ORs by inverting.","Write both sides of both laws.","Each pair is equal for every input.")},"l06-kmap":{b:"X, Y, Z > {3-var K-map\\n\u03A3m(3,4,6,7)} > F1; A, B, C, D > {4-var K-map\\n\u03A3m(2,6,8,9,10,11,14)} > F2",f:["P: A minterm list is not the cheapest circuit.","S: Draw the K-maps (columns in Gray order).","S: Group 1s in the largest power-of-two rectangles, wrapping around edges.","Q: All 128 input combinations are checked.","OK: F1 and F2 with 2 terms each."]},"l07-dontcare":{b:"A, B, C, D > {K-map\\n\u03A3m(1,3,7,11,15)\\n+ d(0,2,5)} > F",f:["P: Some inputs never happen: their outputs are don't-cares.","S: Use a don't-care as 1 only when it makes a group bigger.","Q: The testbench skips the don't-care rows.","OK: F = C\xB7D + A'\xB7B'."]},"l08-parity":{b:"d[3:0] > (XOR tree) > p; d[3:0] > (XOR tree #2) > error; p_in > (XOR tree #2)",f:x("Detect a single flipped bit.","p = ^d makes the number of 1s even; error = ^{d, p_in}.","Parity generator and checker.")},"l09-majority":{b:"A > (AB + BC + AC) > y; B > (AB + BC + AC); C > (AB + BC + AC)",f:x("Outvote one faulty copy of three.","Truth table \u03A3m(3,5,6,7), simplified with a K-map.","y = AB + BC + AC.")},"l10-sub":{b:"A, B, Bin > (D = A ^ B ^ Bin) > D; A, B, Bin > (Bout = A'B + A'Bin + B\xB7Bin) > Bout",f:x("Subtract with a borrow.","Half and full subtractor equations.","D is the same as the adder's sum; the borrow differs.")},"l29-rca":{b:"A[0], B[0], cin > {FA0} -c1-> {FA1} -c2-> {FA2} -c3-> {FA3} > cout; {FA0} > S",f:x("Add 4-bit numbers, like the 7483.","Chain four full adders through their carries.","A ripple-carry adder: 512 inputs checked.")},"l18-addsub":{b:"B > (XOR with M) > {4-bit adder} > S; A > {4-bit adder} > cout; M .carry in.> {4-bit adder}; {4-bit adder} > (overflow) > v",f:x("One adder that also subtracts.",["M = 1 inverts B and adds 1: A \u2212 B in two's complement.","v flags signed overflow."],"An adder/subtractor with one control.")},"l19-bcdadd":{b:"a, b, cin > {binary adder} > (sum above 9?) > {add 6} > s; (sum above 9?) > cout",f:["P: A binary adder gives a wrong code when a digit sum exceeds 9.","S: Add the BCD digits in binary.","Q: Is the sum above 9?","F: Add 6 (0110) and set the carry.","OK: A correct BCD digit and decimal carry."]},"l17-cmp2":{b:"a[1], b[1] > (XNOR: equal bits) > (gt, eq, lt\\nfrom the MSB down) > gt, eq, lt; a[0], b[0] > (XNOR: equal bits)",f:x("Compare two 2-bit numbers with gates.","Equal bits from XNOR; the MSB decides unless it is equal.","gt, eq, lt from the K-map equations.")},"l30-cmp4":{b:"A[3:0], B[3:0] > {7485 comparator} > gt, eq, lt; i_gt, i_eq, i_lt .cascade.> {7485 comparator}",f:x("Compare wider numbers by chaining 4-bit comparators.","When A = B, pass the cascade inputs through.","For one chip: i_eq = 1, i_gt = i_lt = 0.")},"l14-dec38":{b:"a[2:0] > {74138 decoder} > y_n[7:0] active low; g1, g2a_n, g2b_n .enables.> {74138 decoder}",f:x("Select one of eight, as real parts do.","Enabled when g1 = 1 and both active-low enables are 0.","One output low, the rest high.")},"l11-dec-fa":{b:"A, B, Cin > {3-to-8\\ndecoder} -m1 m2 m4 m7-> (OR#s) > S; {3-to-8\\ndecoder} -m3 m5 m6 m7-> (OR#c) > C",f:["P: Build a full adder without writing its equations.","S: The decoder makes all 8 minterms of A, B, Cin.","S: S = \u03A3m(1,2,4,7), C = \u03A3m(3,5,6,7) from the truth table.","F: OR the matching decoder outputs for each function.","OK: Any 3-input function is one OR gate on a decoder."]},"l15-enc83":{b:"d[7:0] > {8-to-3 encoder} > y, valid; d[7:0] > {priority encoder} > y_p, any",f:x("Encode a one-hot input; handle many active inputs.","Plain: one-hot only, valid flags the rest. Priority: highest 1 wins.","Both encoders, 256 inputs checked.")},"l13-mux-demux":{b:"d[7:0] > <8:1 mux> > y; sel .3 bits.> <8:1 mux>; x > {1:8 demux} > o[7:0]; sel .3 bits.> {1:8 demux}",f:x("Route many inputs to one line, and one line to many.","y = d[sel]; o = x << sel.","Mux and demux, 4096 inputs checked.")},"l12-mux-fn":{b:"A, B, C .select.> <8:1 mux\\n74151> > F; 0, 1, D, D' > <8:1 mux\\n74151>",f:["P: Implement a 4-variable function with one 8:1 mux.","S: A, B, C drive the select lines.","S: For each pair of rows (D = 0, 1) the data input is 0, 1, D or D'.","OK: F = \u03A3m(1,3,4,11,12,13,14,15) with one chip."]},"l16-gray":{b:"b[3:0] > (g = b ^ b>>1) > g_out; g[3:0] > (XOR chain\\nfrom the MSB) > b_out",f:x("Only one bit changes between neighbouring Gray values.","Binary \u2192 Gray: one XOR per bit. Gray \u2192 binary: XOR all bits above.","Both converters, 256 inputs checked.")},"l20-7seg":{b:"bcd[3:0] > {7-segment decoder\\ncase} > seg = abcdefg",f:x("Light the right segments for each digit.","A case with one 7-bit pattern per digit; 10 to 15 blank.","The console draws each digit.")},"l21-srlatch":{b:"s_n > (NAND g1) > q; r_n > (NAND g2) > q_n; (NAND g1) > (NAND g2); (NAND g2) > (NAND g1)",f:["P: Memory starts with feedback.","S: Two cross-coupled NAND gates with 1 ns delay.","S: s_n = 0 sets, r_n = 0 resets, both 1 hold.","Q: Both 0 is not allowed for a NAND latch.","OK: The latch keeps its bit."]},"l22-ffs":{b:"s, r > [SR FF] > q_sr; j, k > [JK FF] > q_jk; d > [D FF] > q_d; t > [T FF] > q_t",f:v("Four flip-flops, four characteristic tables.","One always block: SR (11 holds), JK (11 toggles), D, T.","All four match the reference for 200 random cycles.")},"l23-ripple":{b:"@clk .falling.> [T0] > [T1] > [T2]; [T0] > q[0]; [T1] > q[1]; [T2] > q[2]",f:["P: The simplest counter: each flop clocks the next.","S: Each stage toggles on the falling edge of the stage before.","X: The bits change one after another (ripple).","OK: Counts 0 to 7 with no logic at all."]},"l24-sync":{b:"[q 3 bits] > (T0 = 1, T1 = Q0,\\nT2 = Q0\xB7Q1) > [q 3 bits] > q; @clk .> [q 3 bits]",f:v("All bits change on the same clock edge.","A bit toggles when all bits below it are 1.","A synchronous counter with T flip-flops.")},"l32-updown":{b:"[q 3 bits] > (T inputs\\nfrom up and Q) > [q 3 bits] > q; up .> (T inputs\\nfrom up and Q)",f:v("Count both ways with T flip-flops.","Excitation table and K-maps give T1 and T2 for up and down.","A MOD-8 up/down counter.")},"l27-mod6":{b:"[q 3 bits] > (q == 5 ? 0 : q+1) > [q 3 bits] > q; [q 3 bits] > (q == 5) > tc",f:v("Divide by 6, as in a clock's seconds counter.","Clear when the count reaches 5; flag it with tc.","A truncated counter with terminal count.")},"l25-ring":{b:"[ring 1000] > (rotate) > [ring 1000] > ring; [johnson 0000] > (shift in ~LSB) > [johnson 0000] > john",f:v("Counters made from shift registers.","Ring: rotate a single 1. Johnson: feed back the inverted bit.","4 states vs 8 states from 4 flops.")},"l26-siso":{b:"sin > [q3] > [q2] > [q1] > [q0] > sout",f:["P: Move serial data one bit per clock, as in UART or SPI.","S: On every clock each flop takes the value of the flop before it.","Q: Does 1001 come out of sout 4 clocks later, in order?","OK: A 4-flop shift register delays the stream by 4 clocks."]},"l31-usr":{b:"d > <mode mux> > [q 4 bits] > q; sr_in > <mode mux>; sl_in > <mode mux>; [q 4 bits] > <mode mux>; mode .> <mode mux>",f:v("One register for hold, shift right, shift left and load (74194).","A case on mode picks the next value.","A universal shift register.")},"l28-fsm":{b:"dir > (next state\\nfrom the table) > [state 2 bits] > (z = state 10) > z; [state 2 bits] > (next state\\nfrom the table)",f:v("Build a state machine straight from a state table.","One case item per row; a Moore output from the state.","A Gray-code up/down counter FSM.")},"l33-traffic":{b:"car > {FSM\\nS0 S1 S2 S3} > main lights; {FSM\\nS0 S1 S2 S3} > side lights; [timer] .3 clocks.> {FSM\\nS0 S1 S2 S3}",f:["P: Give the side road green only when a car waits.","S: S0 main green \u2192 S1 main yellow when car = 1.","S: S2 side green for 3 clocks (timer) \u2192 S3 side yellow \u2192 S0.","Q: Is any state green for both roads? No.","OK: A Moore FSM with a timer, from a word spec."]}};var ne=t=>document.querySelector(t);function Xe({key:t,onChange:e}){let n=null,i=()=>{try{return JSON.parse(localStorage.getItem(t)||"{}")||{}}catch{return{}}},s=h=>{try{localStorage.setItem(t,JSON.stringify(h))}catch{}},r=h=>{let y=String(h||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return y?parseFloat(y[0]):NaN},o=(h,y)=>h.type==="choice"?y!=null&&y!==""&&+y===h.answer:isFinite(r(y))&&Math.abs(r(y)-h.answer)<=(h.tol??.01)+1e-9,a=h=>h.type==="choice"?h.options[h.answer]:`${h.answer}${h.unit?" "+h.unit:""}`;function g(h,y){let k=ne("#quiz-score");if(h===null){k.textContent="",k.classList.remove("done");return}k.textContent=`${h} / ${y} correct`,k.classList.toggle("done",h===y)}function l(h,y){let k=i(),S=k[n.id]||{a:[]};S.a=S.a||[],S.a[h]=y,S.checked=!1,k[n.id]=S,s(k);let q=ne("#quiz-list").children[h]?.querySelector(".quiz-fb");q&&(q.hidden=!0)}function d(h){window.vddCurrentLab=h&&h.id,n=h&&h.quiz&&h.quiz.length?h:null;let y=ne("#quiz"),k=ne("#quiz-list");if(!n){y.hidden=!0;return}y.hidden=!1,k.innerHTML="";let S=i()[n.id]||{},q=S.a||[];n.quiz.forEach((E,F)=>{let L=document.createElement("li"),M=document.createElement("div");if(M.className="quiz-q",E.try){let A=document.createElement("span");A.className="quiz-try",A.textContent="Try it",M.appendChild(A)}let V=E.q.replace(/^Try it: /,"");if(M.appendChild(document.createTextNode(V.charAt(0).toUpperCase()+V.slice(1))),L.appendChild(M),E.type==="choice"){let A=document.createElement("div");A.className="quiz-opts",A.setAttribute("role","radiogroup"),E.options.forEach((O,W)=>{let Q=document.createElement("label"),C=document.createElement("input");C.type="radio",C.name=`q${F}`,C.value=W,q[F]!==void 0&&+q[F]===W&&(C.checked=!0),C.addEventListener("change",()=>l(F,W));let re=document.createElement("span");re.textContent=O,Q.append(C,re),A.appendChild(Q)}),L.appendChild(A)}else{let A=document.createElement("div");A.className="quiz-num";let O=document.createElement("input");if(O.type="text",O.inputMode="decimal",O.autocomplete="off",O.setAttribute("aria-label","Answer to question "+(F+1)),O.placeholder="e.g. 3",q[F]!==void 0&&(O.value=q[F]),O.addEventListener("input",()=>l(F,O.value)),O.addEventListener("keydown",W=>{W.key==="Enter"&&u()}),A.appendChild(O),E.unit){let W=document.createElement("span");W.className="unit",W.textContent=E.unit,A.appendChild(W)}L.appendChild(A)}let D=document.createElement("div");D.className="quiz-fb",D.hidden=!0,D.setAttribute("aria-live","polite"),L.appendChild(D),k.appendChild(L)}),S.checked?u(!0):g(null)}function u(h){if(!n)return;let y=i(),k=y[n.id]||{a:[]};k.a=k.a||[];let S=0;if(n.quiz.forEach((q,E)=>{let F=ne("#quiz-list").children[E],L=q.type==="choice"?(F.querySelector("input:checked")||{}).value:F.querySelector("input").value;k.a[E]=L;let M=L===void 0||L==="",V=!M&&o(q,L);V&&S++;let D=F.querySelector(".quiz-fb");D.hidden=!1,D.className="quiz-fb "+(V?"ok":"bad"),D.innerHTML="";let A=document.createElement("b");A.textContent=V?"Correct.":M?"Not answered yet.":"Not quite.",D.appendChild(A),V&&q.explain?D.appendChild(document.createTextNode(q.explain)):!V&&!M&&D.appendChild(document.createTextNode(q.type==="number"?"Check the code and the simulation output again.":"Look at the code and the output again and try another option."))}),k.checked=!0,k.score=S,k.total=n.quiz.length,y[n.id]=k,s(y),g(S,n.quiz.length),!h&&e&&e(),!h)try{document.dispatchEvent(new CustomEvent("vdd-run",{detail:{id:n.id,pass:S===n.quiz.length,quiz:!0}}))}catch{}}function f(){if(n){try{let h=JSON.parse(localStorage.getItem("vdd-revealed-v1")||"{}");h[t+":"+n.id]=Date.now(),localStorage.setItem("vdd-revealed-v1",JSON.stringify(h))}catch{}n.quiz.forEach((h,y)=>{let k=ne("#quiz-list").children[y].querySelector(".quiz-fb");k.hidden=!1,k.className="quiz-fb shown",k.innerHTML="";let S=document.createElement("b");S.textContent="Answer: "+a(h)+".",k.appendChild(S),h.explain&&k.appendChild(document.createTextNode(h.explain))})}}function m(){if(!n)return;let h=i();delete h[n.id],s(h),d(n),e&&e()}return ne("#quiz-check").addEventListener("click",()=>u()),ne("#quiz-reveal").addEventListener("click",f),ne("#quiz-reset").addEventListener("click",m),{render:d,status:h=>i()[h]}}var Je={counter:[{type:"number",q:"Run it. What is the count printed at 175 ns?",answer:15,tol:0,unit:"",explain:"The counter has counted 0 to 15 by then.",try:!1},{type:"number",q:"What value comes after 15?",answer:0,tol:0,unit:"",explain:"A 4-bit counter wraps from 15 back to 0.",try:!1},{type:"choice",q:"Why does the reset use negedge rst_n in the sensitivity list?",options:["It is a synchronous reset","It is an asynchronous active-low reset: q clears as soon as rst_n falls","It saves area","It is required for counters"],answer:1,explain:"An asynchronous reset acts without waiting for the clock.",try:!1},{type:"choice",q:"Try it: change WIDTH to 3 in the testbench instance. After which value does the count wrap?",options:["7","15","3","8"],answer:0,explain:"3 bits count 0 to 7.",try:!0}],mux:[{type:"choice",q:"When sel = 2, which input reaches y?",options:["a","b","c","d"],answer:2,explain:"sel 0 \u2192 a, 1 \u2192 b, 2 \u2192 c, 3 \u2192 d.",try:!1},{type:"number",q:"How many bits wide is y?",answer:8,tol:0,unit:"",explain:"The mux is 8 bits wide.",try:!1},{type:"choice",q:"Why does a case statement inside always @(*) need every sel value (or a default)?",options:["For speed","Otherwise y keeps its old value for missing cases and synthesis infers a latch","It is a syntax rule","To save area"],answer:1,explain:"Full case coverage keeps the logic combinational.",try:!1}],adder:[{type:"number",q:"How many input combinations does the testbench check?",answer:512,tol:0,unit:"",explain:"a and b are 4 bits each, plus a carry in: 2^9 = 512.",try:!1},{type:"choice",q:"What makes this testbench self-checking?",options:["It prints every result","It compares each result with the expected a + b + cin and counts mismatches","It uses $monitor","It dumps a waveform"],answer:1,explain:"A self-checking testbench decides PASS or FAIL by itself.",try:!1},{type:"number",q:"In a 4-bit ripple-carry adder, how many full adders are chained?",answer:4,tol:0,unit:"",explain:"One per bit.",try:!1}],fsm:[{type:"number",q:"How many times is the pattern 1011 detected?",answer:4,tol:0,unit:"",explain:"The run prints four detections.",try:!1},{type:"choice",q:"Is this detector overlapping?",options:["No","Yes: the last 1 of a 1011 can be the first 1 of the next one","Only for 0s","It depends on the clock"],answer:1,explain:"Overlapping detection reuses the tail of one match.",try:!1},{type:"choice",q:"Moore or Mealy?",options:["Moore: found depends only on the state","Mealy: found depends on the state and din","Neither","Both"],answer:0,explain:"The comment says Moore: the output comes from the state.",try:!1}],cdc:[{type:"number",q:"How many destination clocks after the change does level_dst follow?",answer:2,tol:0,unit:"",explain:"Two flops in series.",try:!1},{type:"choice",q:"Why two flops and not one?",options:["To double the frequency","The first flop may go metastable; the second gives it a full clock to settle","To invert the signal","For hold timing"],answer:1,explain:"See the CDC labs for more.",try:!1},{type:"choice",q:"Can this synchronizer carry a one-cycle pulse from a much faster clock?",options:["Yes, always","No: the pulse can fall between two destination edges and be lost","Only with reset","Only in simulation"],answer:1,explain:"Pulses need a toggle synchronizer or a handshake.",try:!1}],fifo:[{type:"number",q:"How many entries does the FIFO hold?",answer:8,tol:0,unit:"",explain:"AW = 3: 2^3 = 8 entries.",try:!1},{type:"number",q:"The testbench writes 10 values. How many are stored?",answer:8,tol:0,unit:"",explain:"The last two are dropped because the FIFO is full.",try:!1},{type:"choice",q:"Why are the pointers AW + 1 bits wide?",options:["For parity","The extra bit tells a full FIFO from an empty one when the address bits are equal","To count reads","For Gray code"],answer:1,explain:"Equal pointers = empty; same address, different wrap bit = full.",try:!1}],sv:[{type:"number",q:"For how many clock cycles is the light green?",answer:6,tol:0,unit:"",explain:"The timer loads 5 and counts down to 0: 6 cycles.",try:!1},{type:"number",q:"For how many clock cycles is it yellow?",answer:3,tol:0,unit:"",explain:"The timer loads 2 for yellow.",try:!1},{type:"choice",q:"What does typedef enum give you over plain localparam states?",options:["Faster simulation","Named states that show up in the waveform and in .name(), with type checking","Less area","Nothing"],answer:1,explain:"The testbench prints state.name().",try:!1}],"p1-ha-df":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"Which Verilog construct is dataflow style?",options:["always @(*)","assign","and/xor gate primitives","initial"],answer:1,explain:"Continuous assignments describe how data flows to the outputs.",try:!1}],"p1-ha-bh":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"Why are sum and carry declared reg in the behavioral version?",options:["Because they are flip-flops","Because they are assigned inside an always block","Because they are outputs","It is optional"],answer:1,explain:"reg is a Verilog data type for procedural assignment; no flip-flop is created by always @(*).",try:!1}],"p1-ha-st":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"In 'xor g1 (sum, a, b);', which port comes first?",options:["An input","The output","The clock","Any order"],answer:1,explain:"Gate primitives list the output first.",try:!1}],"p1-fa-df":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"choice",q:"Which expression gives the carry out?",options:["a ^ b ^ cin","(a & b) | (cin & (a ^ b))","a | b | cin","~(a & b)"],answer:1,explain:"Carry when both inputs are 1, or when one is 1 and the carry in is 1.",try:!1}],"p1-fa-bh":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"choice",q:"Why does {cout, sum} = a + b + cin work?",options:["Verilog adds 1-bit values as 1 bit","The left side is 2 bits wide, so the addition is done in 2 bits and the carry lands in cout","It does not work","Because of always @(*)"],answer:1,explain:"The width of the assignment target sets the size of the result.",try:!1}],"p1-fa-st":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"number",q:"How many half_adder instances does the structural full adder use?",answer:2,tol:0,unit:"",explain:"Two half adders and an OR gate.",try:!1}],"p1-ops":[{type:"number",q:"For a = 12 and b = 5, what is a % b?",answer:2,tol:0,unit:"",explain:"12 = 2 \xD7 5 + 2.",try:!1},{type:"choice",q:"What is the difference between & and && ?",options:["None","& is bitwise and gives a vector; && is logical and gives 1 bit","&& is bitwise","& is only for 1-bit values"],answer:1,explain:"a & b ANDs each bit; a && b is true if both are non-zero.",try:!1},{type:"number",q:"For a = 4'b1011, what is the reduction ^a (as 0 or 1)?",answer:1,tol:0,unit:"",explain:"XOR of all bits: three 1s give 1.",try:!1},{type:"choice",q:"What is the difference between $display and $monitor?",options:["None","$display prints once; $monitor prints again every time one of its signals changes","$monitor prints once","$display only prints at the end"],answer:1,explain:"The testbench turns $monitor off with $monitoroff.",try:!1}],"p1-c2f":[{type:"number",q:"What does c_to_f return for 100 \xB0C?",answer:212,tol:0,unit:"",explain:"100 \xD7 9 / 5 + 32.",try:!1},{type:"number",q:"And for 37 \xB0C (integer arithmetic)?",answer:98,tol:0,unit:"",explain:"37 \xD7 9 = 333; 333 / 5 = 66 (rounded toward zero); 66 + 32 = 98.",try:!1},{type:"choice",q:"What is the main difference between a task and a function in Verilog?",options:["None","A task can take time (delays, @) and has output arguments; a function returns a value in zero time","A function can have delays","Tasks cannot have arguments"],answer:1,explain:"Functions are for expressions, tasks for procedures.",try:!1}],"p2-add4":[{type:"number",q:"What is {cout, sum} for 9 + 8 + 1?",answer:18,tol:0,unit:"",explain:"As printed by the testbench.",try:!1},{type:"number",q:"How many bits does {cout, sum} have?",answer:5,tol:0,unit:"",explain:"4 sum bits and a carry.",try:!1},{type:"number",q:"How many test cases does the testbench check?",answer:512,tol:0,unit:"",explain:"4 + 4 + 1 input bits: 2^9.",try:!1}],"p2-mux2":[{type:"choice",q:"Which input reaches y when sel = 1?",options:["a","b"],answer:1,explain:"y = sel ? b : a.",try:!1},{type:"choice",q:"How does synthesis usually build y = sel ? b : a?",options:["A flip-flop","A 2:1 multiplexer cell","A latch","An adder"],answer:1,explain:"The conditional operator maps to a mux.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:8,tol:0,unit:"",explain:"a, b and sel: 2^3.",try:!1}],"p2-mux4":[{type:"number",q:"How many select bits does a 4:1 mux need?",answer:2,tol:0,unit:"",explain:"log2(4) = 2.",try:!1},{type:"choice",q:"Why does the case statement need a default (or all 4 values)?",options:["For speed","So y is assigned in every case and no latch is inferred","It is a syntax rule","To reset y"],answer:1,explain:"Every path through always @(*) must assign y.",try:!1},{type:"number",q:"How many cases does the testbench check?",answer:64,tol:0,unit:"",explain:"4 data bits and 2 select bits: 2^6.",try:!1}],"p2-dec24":[{type:"choice",q:"With en = 1 and a = 2'b10, what is y?",options:["4'b0010","4'b0100","4'b1000","4'b0001"],answer:1,explain:"Bit 2 is set.",try:!1},{type:"choice",q:"What is y when en = 0?",options:["4'b0001","4'b0000","4'b1111","Unknown"],answer:1,explain:"A disabled decoder drives no select line.",try:!1},{type:"number",q:"How many outputs does an n-to-2^n decoder with n = 3 have?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1}],"p2-enc42":[{type:"number",q:"For d = 4'b0100, what is y?",answer:2,tol:0,unit:"",explain:"The single 1 is at position 2.",try:!1},{type:"choice",q:"What should valid be for d = 4'b0110?",options:["1","0: two bits are set, which a simple encoder cannot handle","Unknown","It depends on y"],answer:1,explain:"Use a priority encoder when several inputs can be active.",try:!1},{type:"number",q:"How many of the 16 possible inputs are legal (one-hot)?",answer:4,tol:0,unit:"",explain:"0001, 0010, 0100, 1000.",try:!1}],"p2-penc42":[{type:"number",q:"For d = 4'b0110, what is y?",answer:2,tol:0,unit:"",explain:"The highest 1 is at position 2.",try:!1},{type:"choice",q:"What does casez allow that case does not?",options:["Faster simulation","? and z bits as don't-care in the case items","Real numbers","Default branches"],answer:1,explain:"4'b01?? matches 0100 to 0111.",try:!1},{type:"choice",q:"What is valid for d = 0?",options:["1","0"],answer:1,explain:"No request: nothing to encode.",try:!1}],"p2-cmp4":[{type:"choice",q:"For a = 9 and b = 4, which output is 1?",options:["gt","eq","lt"],answer:0,explain:"9 > 4.",try:!1},{type:"number",q:"How many of gt, eq and lt can be 1 at the same time?",answer:1,tol:0,unit:"",explain:"Exactly one, for any pair.",try:!1},{type:"number",q:"How many (a, b) pairs does the testbench check?",answer:256,tol:0,unit:"",explain:"16 \xD7 16.",try:!1}],"p2-bshift8":[{type:"choice",q:"What is 8'b1001_0110 rotated left by 3?",options:["8'b1011_0100","8'b1011_0101","8'b0010_1100","8'b0001_0010"],answer:0,explain:"The three bits 100 that leave on the left come back on the right: 10110 + 100.",try:!1},{type:"choice",q:"What is 8'b1001_0110 shifted right by 3 (no rotate)?",options:["8'b0001_0010","8'b1111_0010","8'b0101_1000","8'b1100_1000"],answer:0,explain:"Zeros come in from the left.",try:!1},{type:"choice",q:"Why is it called a barrel shifter?",options:["It is round","It shifts by any amount in one clock, without stepping one bit at a time","It uses a barrel register","It only rotates"],answer:1,explain:"A log2(N)-stage mux network shifts by any amount at once.",try:!1}],"p2-alu":[{type:"number",q:"What is y for 200 + 100 (8 bits)?",answer:44,tol:0,unit:"",explain:"300 \u2212 256 = 44.",try:!1},{type:"choice",q:"And carry for 200 + 100?",options:["0","1"],answer:1,explain:"The result does not fit in 8 bits.",try:!1},{type:"choice",q:"When is zero = 1?",options:["When a = 0","When the result y is 0","When carry = 0","When op = 0"],answer:1,explain:"A status flag on the result.",try:!1},{type:"number",q:"How many operations does the 3-bit op select?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1}],"p3-dlatch":[{type:"choice",q:"What does a latch do while en = 0?",options:["Follows d","Holds its last value","Clears q","Toggles"],answer:1,explain:"It is transparent only while enabled.",try:!1},{type:"choice",q:"Which code creates a latch?",options:["always @(posedge clk) q <= d;","always @(*) if (en) q = d;  (no else)","assign q = en & d;","always @(*) q = en ? d : 1'b0;"],answer:1,explain:"With no else, q must remember its value: a latch.",try:!1},{type:"choice",q:"Why are latches usually avoided in synchronous design?",options:["They are larger","They are transparent for a whole phase, which makes timing harder and glitches pass through","They cannot be reset","They are not synthesizable"],answer:1,explain:"STA has to handle time borrowing; most flows prefer flip-flops.",try:!1}],"p3-dlatch-rst":[{type:"choice",q:"What does a latch do while en = 0?",options:["Follows d","Holds its last value","Clears q","Toggles"],answer:1,explain:"It is transparent only while enabled.",try:!1},{type:"choice",q:"If rst = 1 and en = 1 at the same time, what is q?",options:["d","0","1","Unknown"],answer:1,explain:"Reset has priority.",try:!1},{type:"choice",q:"Is this reset synchronous or asynchronous?",options:["Synchronous","Asynchronous: it acts immediately"],answer:1,explain:"A latch has no clock edge to wait for.",try:!1}],"p3-dff":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"When does q change?",options:["Whenever d changes","Only at the rising edge of clk","At both edges","When d is 1"],answer:1,explain:"Edge-triggered.",try:!1},{type:"choice",q:"What is q before the first clock edge?",options:["0","1","x (unknown): there is no reset","z"],answer:2,explain:"Without a reset, a flop starts unknown in simulation.",try:!1}],"p3-dff-arh":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["At the next rising clock edge","Immediately","Never","At the falling edge"],answer:1,explain:"Asynchronous.",try:!1}],"p3-dff-neg-arh":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"When does this flop sample d?",options:["Rising edge of clk","Falling edge of clk","Both edges","When rst falls"],answer:1,explain:"negedge clk.",try:!1},{type:"choice",q:"Where are falling-edge flops typically used?",options:["Everywhere","Half-cycle paths, such as DDR interfaces that use both edges","Only in FPGAs","For resets"],answer:1,explain:"They give half a clock period between rising and falling edge logic.",try:!1}],"p3-dff-arl":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"rst_n = 0 means\u2026",options:["Normal operation","Reset is active"],answer:1,explain:"_n marks an active-low signal.",try:!1},{type:"choice",q:"Why are resets often active low on chips?",options:["Tradition only","A reset that is 0 when the pin floats low or power ramps keeps the chip in reset safely","They are faster","No reason"],answer:1,explain:"A low-going reset is the safe default.",try:!1}],"p3-dff-ash":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"What is q right after set rises?",options:["0","1","d","x"],answer:1,explain:"Set forces 1.",try:!1},{type:"choice",q:"When is an asynchronous set used?",options:["Never","For registers that must start at 1, such as a one-hot state or an active-low enable","For counters only","To save area"],answer:1,explain:"",try:!1}],"p3-dff-srh":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["Immediately","At the next rising clock edge"],answer:1,explain:"Synchronous.",try:!1}],"p3-dff-srl":[{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"rst_n = 0 on a rising edge gives q =",options:["d","0","1","unchanged"],answer:1,explain:"",try:!1},{type:"choice",q:"What does synthesis build for a synchronous reset?",options:["A flop with an asynchronous clear pin","A plain flop with logic (an AND or mux) in front of D","A latch","Nothing"],answer:1,explain:"The reset becomes part of the data path.",try:!1}],"p3-dff-srs":[{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"rst = 1 and set = 1 on the same edge: q =",options:["1","0","d","x"],answer:1,explain:"Reset has priority here.",try:!1},{type:"choice",q:"How is the priority set in the code?",options:["By the order of the if / else if","By the port order","By the sensitivity list","It is random"],answer:0,explain:"The first true condition wins.",try:!1}],"p3-sync-async":[{type:"choice",q:"rst rises in the middle of a clock cycle. Which output clears first?",options:["q_sync","q_async","Both at the same time"],answer:1,explain:"q_async clears at once; q_sync waits for the next edge.",try:!1},{type:"choice",q:"What is a drawback of an asynchronous reset?",options:["None","Its release must be synchronized to the clock (recovery/removal), or flops leave reset in different cycles","It is slower","It needs a clock"],answer:1,explain:"See the reset synchronizer lab in the CDC labs.",try:!1},{type:"choice",q:"What is a drawback of a synchronous reset?",options:["It needs a running clock to take effect","It cannot be timed","It uses more flops","None"],answer:0,explain:"No clock, no reset.",try:!1}],"p3-twin":[{type:"choice",q:"load_a = 1 and load_b = 1 on the same edge: what happens?",options:["Only qa loads","Both qa and qb load d","Neither loads","qb loads qa"],answer:1,explain:"The loads are independent.",try:!1},{type:"number",q:"How many flip-flops does the design need?",answer:16,tol:0,unit:"",explain:"Two 8-bit registers.",try:!1},{type:"choice",q:"What does a register hold when its load is 0?",options:["0","Its previous value","d","x"],answer:1,explain:"Synthesis adds an enable (a mux or a clock-enable flop).",try:!1}],"p4-sr5":[{type:"number",q:"After 5 clocks with sin = 1, 0, 1, 1, 0 (in that order) starting from 00000, what is q in decimal?",answer:13,tol:0,unit:"",explain:"Bits enter at bit 4 and move right: q = 0 1 1 0 1 (bit 4 first) = 01101 = 13.",try:!1},{type:"number",q:"How many clocks does a bit need to travel from bit 4 to bit 0?",answer:4,tol:0,unit:"",explain:"One place per clock.",try:!1},{type:"choice",q:"Which expression shifts right with sin entering at the MSB?",options:["{q[3:0], sin}","{sin, q[4:1]}","q >> sin","{q[4:1], sin}"],answer:1,explain:"",try:!1}],"p4-usr5":[{type:"choice",q:"Which mode loads d in parallel?",options:["00","01","10","11"],answer:3,explain:"",try:!1},{type:"choice",q:"In mode 10 (shift left), where does sl_in enter?",options:["Bit 4","Bit 0"],answer:1,explain:"q <= {q[3:0], sl_in}.",try:!1},{type:"choice",q:"Where is a universal shift register used?",options:["Only in counters","Serial/parallel conversion in both directions, for example in a UART or SPI","In adders","In memories"],answer:1,explain:"",try:!1}],"p4-cnt":[{type:"number",q:"How many states does a 4-bit counter go through before repeating?",answer:16,tol:0,unit:"",explain:"0 to 15.",try:!1},{type:"number",q:"At 100 MHz, how many ns does one full cycle of the 4-bit counter take?",answer:160,tol:0,unit:"",explain:"16 states \xD7 10 ns.",try:!1},{type:"choice",q:"What happens to q after 15?",options:["It stays at 15","It wraps to 0","It goes to x"],answer:1,explain:"",try:!1}],"p4-cnt-tb":[{type:"choice",q:"Why does the testbench change en on the falling edge?",options:["It is required","So the inputs are stable around the rising edge and there is no race with the design","To save time","To test the reset"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = 1, after which value does the broken counter jump to 0?",options:["9","15","7","0"],answer:0,explain:"The bug wraps at 9; a good testbench sees 10 missing.",try:!1},{type:"choice",q:"What makes a testbench self-checking?",options:["Printing values","An expected-value model compared with the design every cycle, and a PASS/FAIL summary","A waveform","Random inputs"],answer:1,explain:"",try:!1}],"p4-cnt-load":[{type:"choice",q:"load = 1 and the counter is at 7, d = 3: next q =",options:["8","3","4","7"],answer:1,explain:"Load has priority.",try:!1},{type:"number",q:"After loading 14, what is q two clocks later (no load)?",answer:0,tol:0,unit:"",explain:"14 \u2192 15 \u2192 0.",try:!1},{type:"choice",q:"Where is a loadable counter used?",options:["Program counters (jumps load a new address), timers with a start value","Only in tests","Adders","Never"],answer:0,explain:"",try:!1}],"p4-updown":[{type:"number",q:"From 0, counting down one step gives?",answer:15,tol:0,unit:"",explain:"4-bit wrap: 0 \u2212 1 = 15.",try:!1},{type:"number",q:"From 13, three steps up give?",answer:0,tol:0,unit:"",explain:"13 \u2192 14 \u2192 15 \u2192 0.",try:!1},{type:"choice",q:"What decides the direction?",options:["The clock edge","The up input","The reset"],answer:1,explain:"",try:!1}],"p4-mod":[{type:"number",q:"What is the largest value of the mod-10 counter?",answer:9,tol:0,unit:"",explain:"0 to N\u22121.",try:!1},{type:"number",q:"How many flip-flops does a mod-10 counter need at least?",answer:4,tol:0,unit:"",explain:"2^3 = 8 < 10 \u2264 16 = 2^4.",try:!1},{type:"choice",q:"Try it: set N = 12. What is the largest value?",options:["11","12","9","15"],answer:0,explain:"",try:!0}],"p4-range":[{type:"number",q:"What is q right after reset?",answer:3,tol:0,unit:"",explain:"LOW = 3.",try:!1},{type:"number",q:"How many different values does the counter take?",answer:10,tol:0,unit:"",explain:"3 to 12 inclusive.",try:!1},{type:"number",q:"What comes after 12?",answer:3,tol:0,unit:"",explain:"Back to LOW.",try:!1}],"p4-range-udl":[{type:"number",q:"Counting down from LOW = 3 gives?",answer:12,tol:0,unit:"",explain:"Wraps to HIGH.",try:!1},{type:"choice",q:"load = 1 and up = 0 on the same edge: what happens?",options:["It counts down","It loads d","Nothing"],answer:1,explain:"Load has priority.",try:!1},{type:"number",q:"Counting up from 12 gives?",answer:3,tol:0,unit:"",explain:"",try:!1}],"p4-div2":[{type:"number",q:"With a 10 ns clk, what is the period of clk_out?",answer:20,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"What is its duty cycle in %?",answer:50,tol:0,unit:"%",explain:"It toggles on every rising edge.",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-div4":[{type:"number",q:"With a 10 ns clk, what is the period of clk_out?",answer:40,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"Which counter bit gives clk / 4 (0 = LSB)?",answer:1,tol:0,unit:"",explain:"cnt[0] is clk / 2, cnt[1] is clk / 4.",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-div3":[{type:"number",q:"With a 10 ns clk, how long must clk_out stay high for a 50% duty cycle?",answer:15,tol:0,unit:"ns",explain:"Half of 30 ns: 1.5 clock periods.",try:!1},{type:"choice",q:"Why are both clock edges needed?",options:["They are not","A half-period step is only possible with the falling edge","To save power","For reset"],answer:1,explain:"",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-fifo":[{type:"number",q:"How many words can the FIFO hold?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What happens to a write when the FIFO is full?",options:["It overwrites the oldest word","It is ignored","It stalls the clock"],answer:1,explain:"",try:!1},{type:"choice",q:"dout shows a word\u2026",options:["at once when rd_en rises","on the clock edge after rd_en","two clocks later"],answer:1,explain:"The read is registered.",try:!1}],"p4-afifo":[{type:"choice",q:"Why are the pointers Gray coded before crossing?",options:["To save flops","Only one bit changes per step, so the other clock sees the old or the new value, never a mix","For speed","To reset them"],answer:1,explain:"See the Gray code lab in the CDC labs.",try:!1},{type:"number",q:"How many flops are in each pointer synchronizer chain (per bit)?",answer:2,tol:0,unit:"",explain:"wq1/wq2 and rq1/rq2.",try:!1},{type:"choice",q:"Can the empty flag be late?",options:["No","Yes: it is computed with a synchronized (older) write pointer, so it may stay set a few cycles longer. That is safe.","Only at reset"],answer:1,explain:"",try:!1}],"p4-mealy-nov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:0,explain:"After a detection the search starts again.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:0,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:3,tol:0,unit:"",explain:"Mealy: S0, S1, S10. Moore needs an extra S101 state to hold the output.",try:!1}],"p4-mealy-ov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:1,explain:"Overlapping reuses the last 1.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:0,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:3,tol:0,unit:"",explain:"Mealy: S0, S1, S10. Moore needs an extra S101 state to hold the output.",try:!1}],"p4-moore-nov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:0,explain:"After a detection the search starts again.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:1,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:4,tol:0,unit:"",explain:"S0, S1, S10 and S101 (the output state).",try:!1}],"p4-moore-ov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:1,explain:"Overlapping reuses the last 1.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:1,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:4,tol:0,unit:"",explain:"S0, S1, S10 and S101 (the output state).",try:!1}],"s01-reg":[{type:"choice",q:"What does the logic type replace?",options:["Only wire","Both reg and wire in most code: it can be driven by assign or by a procedural block (one driver)","integer","Nothing"],answer:1,explain:"",try:!1},{type:"choice",q:"What extra check does always_ff give over always @(posedge clk)?",options:["None","Tools warn if the block does not describe flip-flops, for example a missing edge","It is faster","It adds a reset"],answer:1,explain:"",try:!1},{type:"number",q:"How many bits does '0 set for an 8-bit out?",answer:8,tol:0,unit:"",explain:"'0 fills every bit of the target with 0.",try:!1}],"s02-mux":[{type:"choice",q:"What does unique case promise?",options:["Nothing","Exactly one case item matches; tools may warn if none or several match","The case is fast","A default is not needed"],answer:1,explain:"Icarus prints a note that it ignores the check.",try:!1},{type:"number",q:"What is the width of scale_mux with no parameter override?",answer:1,tol:0,unit:"",explain:"WIDTH defaults to 1.",try:!1},{type:"choice",q:"Why drive 'x in the default branch?",options:["To save area","So an unknown select shows up as unknown in simulation instead of hiding as a valid value","It is required","To reset"],answer:1,explain:"",try:!1}],"s03-cnt":[{type:"number",q:"What value comes after 31?",answer:0,tol:0,unit:"",explain:"5 bits wrap.",try:!1},{type:"choice",q:"load = 1 and enable = 1: what happens?",options:["count increments","count loads data","Nothing"],answer:1,explain:"load is checked first.",try:!1},{type:"choice",q:"In the CPU, what does this counter become?",options:["The accumulator","The program counter","The ALU","The memory"],answer:1,explain:"",try:!1}],"s04-ctrl":[{type:"number",q:"How many clock cycles does one instruction take?",answer:8,tol:0,unit:"",explain:"8 states, one per clock.",try:!1},{type:"choice",q:"What does state.next() return after STORE?",options:["STORE","INST_ADDR: next() wraps to the first value","x","IDLE"],answer:1,explain:"",try:!1},{type:"choice",q:"In which state is halt raised for an HLT instruction?",options:["INST_ADDR","OP_ADDR","STORE","ALU_OP"],answer:1,explain:"",try:!1},{type:"choice",q:"Why is this a Mealy machine?",options:["It has 8 states","Its outputs depend on opcode and zero as well as the state","It uses enums","It has a reset"],answer:1,explain:"",try:!1}],"s05-alu":[{type:"choice",q:"For LDA, what is out?",options:["accum","data","data + accum","0"],answer:1,explain:"Load the accumulator from memory.",try:!1},{type:"number",q:"For ADD with accum = 200 and data = 100, what is out (8 bits)?",answer:44,tol:0,unit:"",explain:"300 \u2212 256.",try:!1},{type:"choice",q:"Why is out registered on the falling edge?",options:["To save power","So it is ready half a cycle later, for the accumulator to load on the next rising edge","It is a bug","For reset"],answer:1,explain:"",try:!1}],"s06-memtb":[{type:"choice",q:"Why drive the memory inputs on the falling edge?",options:["It is required","So they are stable when the memory samples them on the rising edge: no race","To test hold"],answer:1,explain:"",try:!1},{type:"choice",q:"What does 'input bit debug = 0' in a task do?",options:["Nothing","Makes debug optional: callers can leave it out","Forces debug to 0"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = 1, which addresses are written wrongly?",options:["0 to 15","16 to 31: address bit 4 is lost, so they land on 0 to 15","All","None"],answer:1,explain:"",try:!1}],"s07-struct":[{type:"number",q:"How many bits wide is mem_req_t?",answer:15,tol:0,unit:"",explain:"1 + 1 + 5 + 8.",try:!1},{type:"choice",q:"Why does the field order matter here?",options:["It does not","A packed struct is also a plain vector, and the testbench builds it as {read, write, addr, data}","For speed"],answer:1,explain:"",try:!1},{type:"choice",q:"What can an interface do that a struct cannot?",options:["Nothing","Carry signals in both directions with modports, and hold tasks and functions for the bus protocol","Be smaller","Be synthesized"],answer:1,explain:"",try:!1}],"s08-cpu":[{type:"number",q:"How many bits is the address field of an instruction?",answer:5,tol:0,unit:"",explain:"{opcode[7:5], address[4:0]}: 32 memory words.",try:!1},{type:"number",q:"At what address (hex 12 = decimal 18) does Program 1 halt? Answer in decimal.",answer:18,tol:0,unit:"",explain:"The success HLT is at 12 hex.",try:!1},{type:"number",q:"What does Program 2 leave in memory[1D]?",answer:55,tol:0,unit:"",explain:"1 + 2 + \u2026 + 10.",try:!1},{type:"number",q:"What does Program 3 leave in memory[1D]?",answer:144,tol:0,unit:"",explain:"The Fibonacci number it stops at.",try:!1},{type:"choice",q:"What does the mux select while fetch = 1?",options:["The instruction's address field","The program counter"],answer:1,explain:"",try:!1}],"s09-johnson":[{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What comes after 0111?",options:["1111","1110","0000","1000"],answer:0,explain:"Shift left and bring in ~q[3] = 1.",try:!1},{type:"number",q:"How many bits change between two neighbouring states?",answer:1,tol:0,unit:"",explain:"That is why Johnson counters decode without glitches.",try:!1}],"s10-gen":[{type:"number",q:"How many full_adder instances does rca #(N=12) contain?",answer:12,tol:0,unit:"",explain:"One per bit.",try:!1},{type:"choice",q:"What is genvar?",options:["A run-time variable","An elaboration-time loop index used by generate loops","A wire","A parameter"],answer:1,explain:"",try:!1},{type:"choice",q:"Why name the generate block (begin : stage)?",options:["It is optional decoration","It gives each instance a hierarchical name, such as stage[3].fa, for debug and constraints"],answer:1,explain:"",try:!1}],"s11-dpram":[{type:"number",q:"How many words does dpram hold with AW = 4?",answer:16,tol:0,unit:"",explain:"2^4.",try:!1},{type:"choice",q:"Port A writes address 5 with new data. What does dout_a show on that edge?",options:["The new data","The old data (read-before-write)","x"],answer:1,explain:"",try:!1},{type:"choice",q:"Can port B read while port A writes?",options:["No","Yes: that is the point of a dual-port RAM"],answer:1,explain:"",try:!1}],"s12-uart":[{type:"number",q:"How many bits does one byte take on the line (start + data + stop)?",answer:10,tol:0,unit:"",explain:"1 + 8 + 1.",try:!1},{type:"number",q:"With CLKS_PER_BIT = 4 and a 10 ns clock, how long does one byte take?",answer:400,tol:0,unit:"ns",explain:"10 bits \xD7 4 clocks \xD7 10 ns.",try:!1},{type:"choice",q:"Which data bit is sent first?",options:["data[7]","data[0]"],answer:1,explain:"UARTs send LSB first.",try:!1},{type:"choice",q:"What level does tx have when idle?",options:["0","1"],answer:1,explain:"The start bit is the 1 \u2192 0 edge.",try:!1}],"l01-gates":[{type:"choice",q:"Which gate gives 1 only when its inputs are different?",options:["AND","XOR","XNOR","NOR"],answer:1,explain:"XOR is the 'odd number of 1s' gate.",try:!1},{type:"choice",q:"Which gate gives 1 only when both inputs are 0?",options:["NAND","NOR","XOR","OR"],answer:1,explain:"NOR = NOT of OR.",try:!1},{type:"number",q:"How many rows does the truth table of a 3-input gate have?",answer:8,tol:0,unit:"",explain:"2^3 = 8.",try:!1}],"l02-nand":[{type:"number",q:"How many NAND gates make a NOT gate?",answer:1,tol:0,unit:"",explain:"Tie both inputs together: (a\xB7a)' = a'.",try:!1},{type:"number",q:"How many 2-input NAND gates does the XOR circuit in this lab use?",answer:4,tol:0,unit:"",explain:"n1 plus x1, x2 and the output gate.",try:!1},{type:"choice",q:"Why is OR built as NAND(a', b')?",options:["By De Morgan: (a'\xB7b')' = a + b","It is faster","NAND cannot invert","It uses fewer gates than AND"],answer:0,explain:"",try:!1}],"l03-nor":[{type:"number",q:"How many 2-input NOR gates make an AND gate?",answer:3,tol:0,unit:"",explain:"Two to invert a and b, one NOR of the inverted inputs.",try:!1},{type:"choice",q:"NOR(a, a) equals",options:["a","a'","0","1"],answer:1,explain:"",try:!1},{type:"choice",q:"Which pair are both universal gates?",options:["AND and OR","NAND and NOR","XOR and XNOR","NOT and AND"],answer:1,explain:"",try:!1}],"l04-sop-pos":[{type:"choice",q:"y1 = A\xB7B + A'\xB7B' is the same as which single gate of A and B?",options:["XOR","XNOR","NAND","OR"],answer:1,explain:"It is 1 when A and B are equal.",try:!1},{type:"number",q:"For how many of the 8 input combinations is y3 = A + B\xB7C' equal to 1?",answer:5,tol:0,unit:"",explain:"All four with A = 1, plus A = 0, B = 1, C = 0.",try:!1},{type:"choice",q:"In a POS expression, each sum term corresponds to",options:["A row where F = 1","A row where F = 0 (a maxterm)","A don't-care","A clock edge"],answer:1,explain:"",try:!1}],"l05-demorgan":[{type:"choice",q:"(A + B)' equals",options:["A' + B'","A'\xB7B'","A\xB7B","(A\xB7B)'"],answer:1,explain:"",try:!1},{type:"choice",q:"A NAND gate is the same as",options:["An OR gate with inverted inputs","An AND gate with inverted inputs","A NOR gate","An XOR gate"],answer:0,explain:"(A\xB7B)' = A' + B'.",try:!1},{type:"number",q:"How many input combinations make l1_left = 0?",answer:1,tol:0,unit:"",explain:"Only A = B = 1.",try:!1}],"l06-kmap":[{type:"number",q:"How many product terms does the simplified F2 have?",answer:2,tol:0,unit:"",explain:"A\xB7B' and C\xB7D'.",try:!1},{type:"number",q:"How many minterms does one group of 4 cells cover?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why do K-maps order columns 00, 01, 11, 10?",options:["Alphabetical order","Gray code: neighbouring cells differ in one variable, so they can be grouped","It saves space","It is binary order"],answer:1,explain:"",try:!1}],"l07-dontcare":[{type:"choice",q:"Which don't-cares does the answer F = C\xB7D + A'\xB7B' use as 1?",options:["0 and 2","5 only","0, 2 and 5","None"],answer:0,explain:"m0 and m2 complete the A'\xB7B' group; m5 is left as 0.",try:!1},{type:"number",q:"How many literals does F = C\xB7D + A'\xB7B' have?",answer:4,tol:0,unit:"",explain:"C, D, A', B'.",try:!1},{type:"choice",q:"May a don't-care be 1 in one group and 0 elsewhere?",options:["No","Yes: it is only covered if that helps","Only in POS","Only if it is minterm 0"],answer:1,explain:"",try:!1}],"l08-parity":[{type:"number",q:"For d = 1011, what is the even parity bit p?",answer:1,tol:0,unit:"",explain:"Three 1s, so p = 1 makes four.",try:!1},{type:"choice",q:"Can parity detect two flipped bits?",options:["Yes","No: two flips keep the parity the same"],answer:1,explain:"",try:!1},{type:"choice",q:"What does ^d mean in Verilog?",options:["Bitwise NOT","Reduction XOR of all bits of d","Power","Exclusive OR with 1"],answer:1,explain:"",try:!1}],"l09-majority":[{type:"number",q:"How many of the 8 input combinations give y = 1?",answer:4,tol:0,unit:"",explain:"m3, m5, m6, m7.",try:!1},{type:"number",q:"How many 2-input AND gates does the minimal SOP need?",answer:3,tol:0,unit:"",explain:"A\xB7B, B\xB7C, A\xB7C.",try:!1},{type:"choice",q:"Majority of three is also the carry out of",options:["A half adder","A full adder","A comparator","A decoder"],answer:1,explain:"cout = 1 when at least two of a, b, cin are 1.",try:!1}],"l10-sub":[{type:"choice",q:"Which output of the full subtractor equals the full adder's sum?",options:["Bout","D","Neither","Both"],answer:1,explain:"D = A ^ B ^ Bin, the same as the sum.",try:!1},{type:"choice",q:"For A = 0, B = 1, Bin = 1, what are D and Bout?",options:["D = 0, Bout = 1","D = 1, Bout = 0","D = 0, Bout = 0","D = 1, Bout = 1"],answer:0,explain:"0 \u2212 1 \u2212 1 = \u22122: difference 0, borrow 1.",try:!1},{type:"choice",q:"The half subtractor borrow is",options:["A\xB7B'","A'\xB7B","A\xB7B","A ^ B"],answer:1,explain:"",try:!1}],"l29-rca":[{type:"number",q:"How many full adders does a 16-bit ripple-carry adder need?",answer:16,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"If each full adder carry takes 2 ns, what is the worst carry delay through 4 bits?",answer:8,tol:0,unit:"ns",explain:"The carry ripples through all four stages.",try:!1},{type:"number",q:"A = 1111, B = 0001, cin = 0: what is cout?",answer:1,tol:0,unit:"",explain:"15 + 1 = 16 overflows 4 bits.",try:!1}],"l18-addsub":[{type:"choice",q:"Why is M also the carry in?",options:["To add 1 for two's complement: A \u2212 B = A + B' + 1","To reset the adder","For overflow","To invert A"],answer:0,explain:"",try:!1},{type:"choice",q:"5 \u2212 7 with M = 1: what is S?",options:["1110 (\u22122)","0010","1100","1111"],answer:0,explain:"\u22122 in 4-bit two's complement is 1110.",try:!1},{type:"choice",q:"Signed overflow happens when",options:["cout = 1","Two operands of the same sign give a result of the other sign","The result is 0","B is negative"],answer:1,explain:"",try:!1}],"l19-bcdadd":[{type:"number",q:"In BCD, 7 + 5 gives digit s = ?",answer:2,tol:0,unit:"",explain:"12 \u2192 digit 2, carry 1.",try:!1},{type:"number",q:"What value is added to correct a sum above 9?",answer:6,tol:0,unit:"",explain:"It skips the six unused codes 1010 to 1111.",try:!1},{type:"choice",q:"Which sums need correction?",options:["Sums above 9","Only sums above 15","Odd sums","All sums"],answer:0,explain:"Including sums 16 to 19, where the binary adder already has a carry.",try:!1}],"l17-cmp2":[{type:"choice",q:"Which gate tests whether two bits are equal?",options:["XOR","XNOR","NAND","OR"],answer:1,explain:"",try:!1},{type:"number",q:"For how many of the 16 input combinations is gt = 1?",answer:6,tol:0,unit:"",explain:"Pairs with a > b: 16 \u2212 4 equal = 12, half of them.",try:!1},{type:"choice",q:"Why does the gt equation look at bit 1 first?",options:["The most significant bit decides unless it is equal","Bit 0 is slower","It is alphabetical","No reason"],answer:0,explain:"",try:!1}],"l30-cmp4":[{type:"choice",q:"For a single 7485, how are the cascade inputs tied?",options:["i_eq = 1, i_gt = i_lt = 0","All 0","All 1","i_gt = 1"],answer:0,explain:"Equal numbers must then give eq = 1.",try:!1},{type:"number",q:"How many 4-bit comparators compare two 12-bit numbers in a cascade?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"A = B and i_gt = 1: which output is 1?",options:["eq","gt","lt","None"],answer:1,explain:"The lower bits decide.",try:!1}],"l14-dec38":[{type:"choice",q:"a = 101 and the chip is enabled: which output is 0?",options:["y_n[2]","y_n[5]","y_n[3]","All"],answer:1,explain:"",try:!1},{type:"choice",q:"g1 = 0: what are the outputs?",options:["All 0","All 1","y_n[a] = 0","High impedance"],answer:1,explain:"Disabled: every active-low output is inactive.",try:!1},{type:"number",q:"How many 74138s plus enable wiring make a 4-to-16 decoder?",answer:2,tol:0,unit:"",explain:"The fourth address bit enables one chip or the other.",try:!1}],"l11-dec-fa":[{type:"number",q:"How many decoder outputs feed the OR gate for S?",answer:4,tol:0,unit:"",explain:"Minterms 1, 2, 4 and 7.",try:!1},{type:"choice",q:"Which minterm is shared by S and C?",options:["m3","m7","m1","m0"],answer:1,explain:"1 + 1 + 1 = 3: sum 1, carry 1.",try:!1},{type:"choice",q:"Can one 3-to-8 decoder implement any number of 3-input functions?",options:["Yes: one OR gate per function","No, only one","Only two","Only with a mux"],answer:0,explain:"",try:!1}],"l15-enc83":[{type:"number",q:"d = 0010_1000: what is y_p?",answer:5,tol:0,unit:"",explain:"The highest 1 is bit 5.",try:!1},{type:"choice",q:"d = 0010_1000: what is valid from the plain encoder?",options:["0: two bits are set","1"],answer:0,explain:"",try:!1},{type:"choice",q:"What does the any flag solve?",options:["d = 0 and d = 1 both give y_p = 0","Speed","Glitches","Nothing"],answer:0,explain:"",try:!1}],"l13-mux-demux":[{type:"number",q:"How many select bits does a 16-to-1 mux need?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:4096,tol:0,unit:"",explain:"8 + 3 + 1 = 12 input bits.",try:!1},{type:"choice",q:"Demux with sel = 3 and x = 1: what is o?",options:["0000_1000","0000_0011","1000_0000","0000_0001"],answer:0,explain:"",try:!1}],"l12-mux-fn":[{type:"choice",q:"For ABC = 110, what is the data input?",options:["0","1","D","D'"],answer:1,explain:"m12 and m13 are both in F.",try:!1},{type:"choice",q:"For ABC = 010, what is the data input?",options:["0","1","D","D'"],answer:3,explain:"m4 is in F (D = 0) but m5 is not.",try:!1},{type:"number",q:"How many variables can one 8-to-1 mux implement any function of?",answer:4,tol:0,unit:"",explain:"3 select lines plus the fourth variable on the data inputs.",try:!1}],"l16-gray":[{type:"choice",q:"Binary 0110: what is the Gray code?",options:["0101","0110","0111","0100"],answer:0,explain:"g = b ^ (b >> 1) = 0110 ^ 0011.",try:!1},{type:"number",q:"How many bits change when the Gray code counts from 7 to 8?",answer:1,tol:0,unit:"",explain:"In binary all 4 bits change.",try:!1},{type:"choice",q:"Why does Gray-to-binary need a chain of XORs?",options:["Each binary bit is the XOR of all Gray bits above and including it","To save gates","It does not"],answer:0,explain:"",try:!1}],"l20-7seg":[{type:"number",q:"How many segments are lit for the digit 8?",answer:7,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which segment is off for 0?",options:["a","d","g (the middle bar)","f"],answer:2,explain:"",try:!1},{type:"choice",q:"In a common-anode display the segments are",options:["Active high","Active low (like the 7447)"],answer:1,explain:"",try:!1}],"l21-srlatch":[{type:"choice",q:"For a NAND latch, which input values hold the stored bit?",options:["s_n = r_n = 0","s_n = r_n = 1","s_n = 1, r_n = 0","s_n = 0, r_n = 1"],answer:1,explain:"",try:!1},{type:"choice",q:"Why is s_n = r_n = 0 not allowed?",options:["Both q and q_n go to 1, and the latch state is unpredictable when both are released","It burns the chip","It is a syntax error"],answer:0,explain:"",try:!1},{type:"number",q:"After s_n goes low, how many gate delays until q_n changes?",answer:2,tol:0,unit:"",explain:"q changes after one delay, then q_n one delay later.",try:!1}],"l22-ffs":[{type:"choice",q:"JK flip-flop with j = k = 1:",options:["Hold","Set","Reset","Toggle"],answer:3,explain:"",try:!1},{type:"choice",q:"Which flip-flop is a JK with J and K tied together?",options:["D","T","SR","None"],answer:1,explain:"",try:!1},{type:"choice",q:"Which flip-flop is a JK with K = J'?",options:["D","T","SR","None"],answer:0,explain:"",try:!1}],"l23-ripple":[{type:"number",q:"How many flip-flops does a ripple counter up to 255 need?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why is a ripple counter not used to drive synchronous logic?",options:["Its bits change one after another, so the outputs glitch through wrong values","It is too big","It counts down"],answer:0,explain:"",try:!1},{type:"choice",q:"In this lab, on which clk edge does the count change?",options:["Rising","Falling"],answer:1,explain:"t0 toggles on the falling edge of clk.",try:!1}],"l24-sync":[{type:"choice",q:"When does q[2] toggle?",options:["Every clock","When q[1] = q[0] = 1","When q[0] = 1","Never"],answer:1,explain:"",try:!1},{type:"number",q:"How many clocks until a 3-bit counter wraps to 0?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Main advantage over a ripple counter:",options:["All bits change on the same clock edge","Fewer gates","No clock needed"],answer:0,explain:"",try:!1}],"l32-updown":[{type:"choice",q:"Counting down, when does q[1] toggle?",options:["When q[0] = 0","When q[0] = 1","Every clock","Never"],answer:0,explain:"",try:!1},{type:"number",q:"Counting down from 0, what is the next value?",answer:7,tol:0,unit:"",explain:"It wraps around.",try:!1},{type:"number",q:"How many states does a MOD-8 counter have?",answer:8,tol:0,unit:"",explain:"",try:!1}],"l27-mod6":[{type:"number",q:"How many distinct values does the counter output show?",answer:6,tol:0,unit:"",explain:"0 to 5.",try:!1},{type:"number",q:"With a 60 MHz clock, what is the frequency of tc pulses?",answer:10,tol:0,unit:"MHz",explain:"60 / 6.",try:!1},{type:"number",q:"How many flip-flops are needed for MOD-6?",answer:3,tol:0,unit:"",explain:"2^3 = 8 \u2265 6.",try:!1}],"l25-ring":[{type:"number",q:"How many states does a 4-bit ring counter have?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What value follows 1110 in the Johnson counter?",options:["1111","0111","1100","0000"],answer:0,explain:"",try:!1}],"l26-siso":[{type:"number",q:"How many clocks does a bit take to go from sin to sout?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What is q after 1, 0, 0, 1 are shifted in (first bit first)?",options:["1001","0110","1111","0000"],answer:0,explain:"The first bit is now in q[0] and the last in q[3].",try:!1},{type:"choice",q:"Which register type converts serial data to parallel?",options:["SISO","SIPO","PISO","PIPO"],answer:1,explain:"",try:!1}],"l31-usr":[{type:"choice",q:"q = 0110, mode = 10, sl_in = 1: next q?",options:["1101","1011","0011","0110"],answer:0,explain:"Shift left: {q[2:0], sl_in}.",try:!1},{type:"choice",q:"Which mode loads d?",options:["00","01","10","11"],answer:3,explain:"",try:!1},{type:"choice",q:"Which 7400-series part is a 4-bit universal shift register?",options:["74194","7483","74138","7447"],answer:0,explain:"",try:!1}],"l28-fsm":[{type:"choice",q:"From state 01 with dir = 1, the next state is",options:["00","11","10","01"],answer:1,explain:"",try:!1},{type:"choice",q:"Is z a Moore or a Mealy output?",options:["Moore: it depends only on the state","Mealy"],answer:0,explain:"",try:!1},{type:"number",q:"How many flip-flops does a 4-state machine need with binary encoding?",answer:2,tol:0,unit:"",explain:"",try:!1}],"l33-traffic":[{type:"number",q:"How many clocks does the side road stay green?",answer:3,tol:0,unit:"",explain:"S2 lasts while timer counts 0, 1, 2.",try:!1},{type:"choice",q:"If car stays 0, what does the main road show?",options:["Green forever","It cycles anyway","Yellow"],answer:0,explain:"",try:!1},{type:"choice",q:"Can both roads be green at once?",options:["No: every state has at least one red","Yes, in S1"],answer:0,explain:"",try:!1}]};var Ze=[{id:"counter",title:"4-bit up counter",tag:"Sequential",std:"2005",design:`\`timescale 1ns/1ps

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
`}];var Ye=[{id:"part1",title:"Part 1: adders"},{id:"part2",title:"Part 2: combinational"},{id:"part3",title:"Part 3: latches and flip-flops"},{id:"part4",title:"Part 4: sequential"},{id:"sv",title:"SystemVerilog design labs"},{id:"ld-gates",title:"Gates and Boolean algebra"},{id:"ld-comb",title:"Combinational circuits"},{id:"ld-seq",title:"Flip-flops, counters and FSMs"}],Qe=[{id:"p1-ha-df",group:"part1",tag:"Part 1 \xB7 Lab 1",title:"Half adder: dataflow",std:"2005",design:`// One-bit half adder, dataflow style: continuous assignments only.
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
`}}];var en=[{id:"sva-basic",title:"SVA basics",note:"Write the assertion where the TODO is: keep its label. Run: the lab passes when your assertion passes on good behaviour and fails exactly where the design misbehaves. Failures show as \u25BC on the waveform."},{id:"sva-seq",title:"Sequences",note:"Each lab injects one bug. Your assertion must fail exactly at the bug and pass everywhere else (the console lists expected vs actual failure times)."},{id:"sva-prop",title:"Properties and local variables",note:"Sampled-value functions, system functions, not/if/until, eventually, local variables. Keep the assertion labels: the lab checks them."},{id:"sva-apps",title:"Assertions for real designs",note:"FSMs, FIFOs, memories, arbiters and bus protocols: write the checker for the design, then find the bugs it catches."},{id:"cov-fc",title:"Functional coverage",note:"Write the covergroup where the TODO is: keep the covergroup and coverpoint names. The lab passes when your coverage model gives the same bins and the same coverage as the reference. The report is under the waveform."},{id:"dv-w7",title:"Week 7: Verilog for verification",note:"Testbench labs: complete the TODOs (usually in the testbench). A self-checking testbench prints PASS or FAIL. A \u2713 marks the labs you have passed."},{id:"dv-w8",title:"Week 8: SystemVerilog for verification",note:"Data types, interfaces, classes and threads. Complete the TODOs and run until the testbench prints PASS."},{id:"dv-cr",title:"Constrained random",note:"rand, randc, constraints, dist, solve-before, arrays and inline constraints. The solver runs in your browser; randomize() returns 0 and explains a conflict when the constraints cannot be met."},{id:"dv-w9",title:"Week 9: FIFO verification",note:"Packages and system tasks, then the week 9 FIFO project: test plan, directed tests, random tests with a scoreboard, assertions and functional coverage."},{id:"dv-proj",title:"Verification projects",note:"Complete verification environments: FIFO, round-robin arbiter, APB register block and UART. Each project has stimulus, checking (scoreboard + assertions) and coverage. Find the bug in the design and fix it."}],nn=[{id:"sva-b1",group:"sva-basic",tag:"SVA basics \xB7 Lab 1",title:"Immediate assertions: executable comments",std:"2012",design:`// Program counter + one-hot FSM, from a small DSP. Two bugs are hidden in it.
module pc_fsm (
  input  logic       clk, rst_n, load, inc,
  input  logic [7:0] d,
  output logic [7:0] pc,
  output logic [3:0] state            // one-hot: 0001 RESET, 0010 FETCH, 0100 DECODE, 1000 STORE
);
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n)      pc <= 0;
    else if (load)   pc <= d;
    else if (inc)    pc <= pc + 1;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) state <= 4'b0001;
    else case (state)
      4'b0001: state <= 4'b0010;
      4'b0010: state <= 4'b0100;
      4'b0100: state <= (pc == 8'h13) ? 4'b1100 : 4'b1000;   // bug: two states at once
      default: state <= 4'b0010;
    endcase
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, load = 0, inc = 0; logic [7:0] d = 0, pc; logic [3:0] state;
  int errors = 0;
  pc_fsm dut (.*);

  // TODO: two immediate assertions, checked after every change of state / at every clock:
  //   a_onehot: state is one-hot          ($onehot)
  //   a_no_x:   d has no X or Z bits while load is high  ($isunknown)
  // In each else branch: errors++ and $error("...").
  always @(state) begin
  end
  always @(posedge clk) begin
  end

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) load = 1; d = 8'h10;
    @(negedge clk) load = 0; inc = 1;
    repeat (8) @(negedge clk);
    inc = 0; load = 1; d = 8'bx;          // a test bench bug: an unknown load value
    @(negedge clk) load = 0;
    repeat (2) @(negedge clk);
    if (errors == 2) $display("PASS: the assertions caught both bugs (%0d errors)", errors);
    else             $display("FAIL: expected 2 assertion errors, got %0d", errors);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, load = 0, inc = 0; logic [7:0] d = 0, pc; logic [3:0] state;
  int errors = 0;
  pc_fsm dut (.*);

  always @(state) begin
    a_onehot: assert ($onehot(state)) else begin errors++; $error("state %b is not one-hot", state); end
  end
  always @(posedge clk) begin
    if (load) a_no_x: assert (!$isunknown(d)) else begin errors++; $error("load with unknown d = %b", d); end
  end

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) load = 1; d = 8'h10;
    @(negedge clk) load = 0; inc = 1;
    repeat (8) @(negedge clk);
    inc = 0; load = 1; d = 8'bx;          // a test bench bug: an unknown load value
    @(negedge clk) load = 0;
    repeat (2) @(negedge clk);
    if (errors == 2) $display("PASS: the assertions caught both bugs (%0d errors)", errors);
    else             $display("FAIL: expected 2 assertion errors, got %0d", errors);
    $finish;
  end
endmodule
`}},{id:"sva-b2",group:"sva-basic",tag:"SVA basics \xB7 Lab 2",title:"Your first concurrent assertion: request and acknowledge",std:"2012",design:"",tb:`// A request must be acknowledged 1 to 3 clocks later.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, ack = 0;
  // A simple responder: it answers after a delay set by the test.
  int delay = 2;
  always @(posedge clk) if (req) fork begin repeat (delay) @(negedge clk); ack <= 1; @(negedge clk) ack <= 0; end join_none

  // TODO: on every clock where req rises, ack must be high 1 to 3 clocks later.
  a_req_ack: assert property (@(posedge clk) 1'b1);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    req = 1; @(negedge clk) req = 0;           // answered after 2 clocks: fine
    repeat (5) @(negedge clk);
    delay = 3; req = 1; @(negedge clk) req = 0; // after 3: fine
    repeat (6) @(negedge clk);
    delay = 5; req = 1; @(negedge clk) req = 0; // after 5: too late
    repeat (8) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`// A request must be acknowledged 1 to 3 clocks later.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, ack = 0;
  // A simple responder: it answers after a delay set by the test.
  int delay = 2;
  always @(posedge clk) if (req) fork begin repeat (delay) @(negedge clk); ack <= 1; @(negedge clk) ack <= 0; end join_none

  a_req_ack: assert property (@(posedge clk) $rose(req) |-> ##[1:3] ack);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    req = 1; @(negedge clk) req = 0;           // answered after 2 clocks: fine
    repeat (5) @(negedge clk);
    delay = 3; req = 1; @(negedge clk) req = 0; // after 3: fine
    repeat (6) @(negedge clk);
    delay = 5; req = 1; @(negedge clk) req = 0; // after 5: too late
    repeat (8) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_req_ack",fails:[185],minPass:1}]},{id:"sva-b3",group:"sva-basic",tag:"SVA basics \xB7 Lab 3",title:"Sampling: why assertions see the old value",std:"2012",design:"",tb:`// The same check, written twice: as an immediate assertion and as a concurrent one.
// The test drives 'go' and 'done' right AT the clock edge, with blocking assignments.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic go = 0, done = 0;
  int imm_t = -1, conc_t = -1;
  // immediate: reads the values at the moment the always block runs (after #0)
  always @(posedge clk) begin #0;
    a_imm: assert (!(go && done)) else if (imm_t < 0) imm_t = $time;
  end
  // concurrent: reads the values sampled just before the edge (Preponed region)
  a_conc: assert property (@(posedge clk) !(go && done)) else if (conc_t < 0) conc_t = $time;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // TODO: these four steps drive at the rising edge. Make them drive on @(negedge clk).
    @(posedge clk); go = 1;
    @(posedge clk); done = 1;
    @(posedge clk); go = 0;
    @(posedge clk); done = 0;
    repeat (3) @(posedge clk);
    $display("immediate assertion first failed at %0t, concurrent at %0t", imm_t, conc_t);
    if (imm_t == conc_t && imm_t > 0) $display("PASS: both assertions agree");
    else $display("FAIL: the assertions disagree: the test races with the sampling edge");
    $finish;
  end
endmodule
`,solution:{tb:`// The same check, written twice: as an immediate assertion and as a concurrent one.
// The test now drives on the falling edge: both assertions agree.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic go = 0, done = 0;
  int imm_t = -1, conc_t = -1;
  always @(posedge clk) begin #0;
    a_imm: assert (!(go && done)) else if (imm_t < 0) imm_t = $time;
  end
  a_conc: assert property (@(posedge clk) !(go && done)) else if (conc_t < 0) conc_t = $time;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    @(negedge clk); go = 1;
    @(negedge clk); done = 1;
    @(negedge clk); go = 0;
    @(negedge clk); done = 0;
    repeat (3) @(posedge clk);
    $display("immediate assertion first failed at %0t, concurrent at %0t", imm_t, conc_t);
    if (imm_t == conc_t && imm_t > 0) $display("PASS: both assertions agree");
    else $display("FAIL: the assertions disagree: the test races with the sampling edge");
    $finish;
  end
endmodule
`}},{id:"sva-b4",group:"sva-basic",tag:"SVA basics \xB7 Lab 4",title:"Overlapping |-> and non-overlapping |=> implication",std:"2012",design:"",tb:`// Memory enable protocol: when mem_en is high, req must be high in the same cycle (|->),
// and ack must follow req two cycles later. In a second version, req may start one cycle later (|=>).
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic mem_en = 0, req = 0, ack = 0;
  // mem_en for one cycle; req req_lag cycles later; ack ack_lag cycles after req (each one cycle long)
  task automatic access(int req_lag, int ack_lag);
    fork
      begin mem_en = 1; @(negedge clk) mem_en = 0; end
      begin repeat (req_lag) @(negedge clk); req = 1; @(negedge clk) req = 0; end
      begin repeat (req_lag + ack_lag) @(negedge clk); ack = 1; @(negedge clk) ack = 0; end
    join
  endtask

  // TODO a_same: mem_en |-> req ##2 ack       (req in the same cycle as mem_en)
  // TODO a_next: mem_en |=> req ##2 ack       (req in the cycle after mem_en)
  a_same: assert property (@(posedge clk) 1'b1);
  a_next: assert property (@(posedge clk) 1'b1);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    access(0, 2);  repeat (3) @(negedge clk);   // req with mem_en
    access(1, 2);  repeat (3) @(negedge clk);   // req one cycle after mem_en
    access(0, 3);  repeat (4) @(negedge clk);   // ack one cycle late
    $finish;
  end
endmodule
`,solution:{tb:`// Memory enable protocol: when mem_en is high, req must be high in the same cycle (|->),
// and ack must follow req two cycles later. In a second version, req may start one cycle later (|=>).
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic mem_en = 0, req = 0, ack = 0;
  // mem_en for one cycle; req req_lag cycles later; ack ack_lag cycles after req (each one cycle long)
  task automatic access(int req_lag, int ack_lag);
    fork
      begin mem_en = 1; @(negedge clk) mem_en = 0; end
      begin repeat (req_lag) @(negedge clk); req = 1; @(negedge clk) req = 0; end
      begin repeat (req_lag + ack_lag) @(negedge clk); ack = 1; @(negedge clk) ack = 0; end
    join
  endtask

  a_same: assert property (@(posedge clk) mem_en |-> req ##2 ack);
  a_next: assert property (@(posedge clk) mem_en |=> req ##2 ack);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    access(0, 2);  repeat (3) @(negedge clk);   // req with mem_en
    access(1, 2);  repeat (3) @(negedge clk);   // req one cycle after mem_en
    access(0, 3);  repeat (4) @(negedge clk);   // ack one cycle late
    $finish;
  end
endmodule
`},check:[{assert:"a_same",fails:[85,175],minPass:1},{assert:"a_next",fails:[35,165],minPass:1}]},{id:"sva-b5",group:"sva-basic",tag:"SVA basics \xB7 Lab 5",title:"The level vs edge gotcha",std:"2012",design:"",tb:`// Spec: 'ack must RISE two clocks after req rises'. The assertion below was written
// from 'ack is high two clocks after req'. Run it: it fails on good behaviour and
// passes the bug. Fix it.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, ack = 0;
  a_req_ack: assert property (@(posedge clk) req |-> ##2 ack);   // TODO: fix

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    // good: req held 3 cycles, ack pulses 2 cycles after req rises
    req = 1; repeat (2) @(negedge clk); ack = 1; @(negedge clk) begin req = 0; ack = 0; end
    repeat (3) @(negedge clk);
    // bug: ack was already high (stuck) before req: it never rises
    ack = 1; @(negedge clk); req = 1; @(negedge clk) req = 0; repeat (4) @(negedge clk); ack = 0;
    repeat (4) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`// Spec: 'ack must RISE two clocks after req rises'.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, ack = 0;
  a_req_ack: assert property (@(posedge clk) $rose(req) |-> ##2 $rose(ack));

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    req = 1; repeat (2) @(negedge clk); ack = 1; @(negedge clk) begin req = 0; ack = 0; end
    repeat (3) @(negedge clk);
    ack = 1; @(negedge clk); req = 1; @(negedge clk) req = 0; repeat (4) @(negedge clk); ack = 0;
    repeat (4) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_req_ack",fails:[115],minPass:1}]},{id:"sva-b6",group:"sva-basic",tag:"SVA basics \xB7 Lab 6",title:"Resets: disable iff",std:"2012",design:`// A down-counter that reloads from 'load_val' when it reaches zero. 'tick' is high for one clock at the reload.
module reload_counter (input logic clk, rst_n, input logic [3:0] load_val, output logic [3:0] cnt, output logic tick);
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) cnt <= 4'hf;
    else if (cnt == 0) cnt <= load_val;
    else cnt <= cnt - 1;
  assign tick = (cnt == 0);
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0; logic [3:0] load_val = 4'd3, cnt; logic tick;
  reload_counter dut (.*);
  // Rule: after a tick, the counter holds load_val.
  // TODO: it fails during and right after reset. Add disable iff so it only checks out of reset.
  a_reload: assert property (@(posedge clk) tick |=> cnt == load_val);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    force dut.cnt = 0; #22 release dut.cnt;            // the counter powers up at 0 while in reset
    #10 rst_n = 1;
    repeat (12) @(negedge clk);
    rst_n = 0; @(negedge clk) rst_n = 1;               // reset pulse in the middle of the run
    repeat (25) @(negedge clk);
    wait (tick); @(posedge clk); @(negedge clk) force dut.cnt = 4'd5; @(negedge clk) release dut.cnt;   // a real bug: cnt glitches right after a reload
    repeat (8) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0; logic [3:0] load_val = 4'd3, cnt; logic tick;
  reload_counter dut (.*);
  a_reload: assert property (@(posedge clk) disable iff (!rst_n) tick |=> cnt == load_val);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    force dut.cnt = 0; #22 release dut.cnt;
    #10 rst_n = 1;
    repeat (12) @(negedge clk);
    rst_n = 0; @(negedge clk) rst_n = 1;
    repeat (25) @(negedge clk);
    wait (tick); @(posedge clk); @(negedge clk) force dut.cnt = 4'd5; @(negedge clk) release dut.cnt;
    repeat (8) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_reload",fails:[445],minPass:1}]},{id:"sva-b7",group:"sva-basic",tag:"SVA basics \xB7 Lab 7",title:"Action blocks, severity and $assertoff",std:"2012",design:"",tb:`// A handshake checker whose pass and fail actions count results.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, valid = 0, ready = 0;
  int n_pass = 0, n_fail = 0;
  // valid must be answered by ready in the next clock
  property p_vr; @(posedge clk) disable iff (!rst_n) $rose(valid) |=> ready; endproperty
  // TODO: add a pass action (n_pass++) and a fail action (n_fail++ and $error with the time)
  a_vr: assert property (p_vr);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (3) begin @(negedge clk) valid = 1; @(negedge clk) begin valid = 0; ready = 1; end @(negedge clk) ready = 0; end
    // the test enters a 'low power' phase where the protocol is not used:
    // TODO: switch a_vr off here with $assertoff(0, tb.a_vr) ...
    repeat (2) begin @(negedge clk) valid = 1; @(negedge clk) valid = 0; end
    // ... and back on here with $asserton(0, tb.a_vr)
    @(negedge clk) valid = 1; @(negedge clk) valid = 0;        // a real miss
    repeat (3) @(negedge clk);
    $display("pass action ran %0d times, fail action %0d times", n_pass, n_fail);
    if (n_pass > 0 && n_fail == 1) $display("PASS: the checker counted its results");
    else $display("FAIL: expected the pass action to run and exactly 1 failure");
    $finish;
  end
endmodule
`,solution:{tb:`// A handshake checker whose pass and fail actions count results.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, valid = 0, ready = 0;
  int n_pass = 0, n_fail = 0;
  property p_vr; @(posedge clk) disable iff (!rst_n) $rose(valid) |=> ready; endproperty
  a_vr: assert property (p_vr) n_pass++; else begin n_fail++; $error("valid at %0t was not answered", $time - 10); end

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (3) begin @(negedge clk) valid = 1; @(negedge clk) begin valid = 0; ready = 1; end @(negedge clk) ready = 0; end
    $assertoff(0, tb.a_vr);
    repeat (2) begin @(negedge clk) valid = 1; @(negedge clk) valid = 0; end
    $asserton(0, tb.a_vr);
    @(negedge clk) valid = 1; @(negedge clk) valid = 0;
    repeat (3) @(negedge clk);
    $display("pass action ran %0d times, fail action %0d times", n_pass, n_fail);
    if (n_pass > 0 && n_fail == 1) $display("PASS: the checker counted its results");
    else $display("FAIL: expected the pass action to run and exactly 1 failure");
    $finish;
  end
endmodule
`}},{id:"sva-b8",group:"sva-basic",tag:"SVA basics \xB7 Lab 8",title:"assert, assume and cover: one property, three jobs",std:"2012",design:"",tb:`// An arbiter's environment promises that 'req' never stays high more than 4 clocks.
// The design promises 'gnt' only when requested. And we want to SEE a back-to-back grant.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, gnt = 0;
  always @(posedge clk) gnt <= req;             // the 'design'
  property p_req_short; @(posedge clk) $rose(req) |-> ##[1:4] !req; endproperty

  // TODO m_req: use p_req_short as an assumption on the inputs (assume property)
  // TODO a_gnt: assert that gnt is only high one clock after req was high: gnt |-> $past(req)
  // TODO c_b2b: cover the sequence gnt ##1 !gnt ##1 gnt (grant, gap, grant)
  m_req: assume property (@(posedge clk) 1'b1);
  a_gnt: assert property (@(posedge clk) 1'b1);
  c_b2b: cover property (@(posedge clk) 1'b0);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    req = 1; @(negedge clk) req = 0; @(negedge clk) req = 1; @(negedge clk) req = 0;   // back to back
    repeat (3) @(negedge clk);
    req = 1; repeat (6) @(negedge clk); req = 0;                                       // breaks the assumption
    repeat (3) @(negedge clk);
    force gnt = 1; @(negedge clk) release gnt;                                         // a spurious grant
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, gnt = 0;
  always @(posedge clk) gnt <= req;
  property p_req_short; @(posedge clk) $rose(req) |-> ##[1:4] !req; endproperty

  m_req: assume property (p_req_short);
  a_gnt: assert property (@(posedge clk) gnt |-> $past(req));
  c_b2b: cover property (@(posedge clk) gnt ##1 !gnt ##1 gnt);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (2) @(negedge clk);
    req = 1; @(negedge clk) req = 0; @(negedge clk) req = 1; @(negedge clk) req = 0;
    repeat (3) @(negedge clk);
    req = 1; repeat (6) @(negedge clk); req = 0;
    repeat (3) @(negedge clk);
    force gnt = 1; @(negedge clk) release gnt;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"m_req",fails:[125],minPass:1},{assert:"a_gnt",fails:[175,185],minPass:1},{assert:"c_b2b",matches:1}]},{id:"sva-b9",group:"sva-basic",tag:"SVA basics \xB7 Lab 9",title:"bind: add checkers without touching the design",std:"2012",design:`// A 2-stage valid/data pipeline. You may not edit this file (it is 'frozen' RTL).
module pipe2 (input logic clk, rst_n, in_v, input logic [7:0] in_d, output logic out_v, output logic [7:0] out_d);
  logic v1; logic [7:0] d1;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin v1 <= 0; out_v <= 0; end
    else begin v1 <= in_v; out_v <= v1; d1 <= in_d; out_d <= (d1 == 8'h5a) ? 8'h00 : d1; end
endmodule
`,tb:`// TODO: write a checker module with the assertion, then bind it to every pipe2.
// a_lat2: in_v |-> ##2 out_v && out_d == $past(in_d, 2)
module pipe2_sva (input logic clk, rst_n, in_v, input logic [7:0] in_d, input logic out_v, input logic [7:0] out_d);
endmodule
// bind pipe2 pipe2_sva u_sva (.*);

module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, in_v = 0; logic [7:0] in_d = 0, out_d; logic out_v;
  pipe2 dut (.*);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 8; k++) begin @(negedge clk) in_v = 1; in_d = 8'h55 + k; end
    @(negedge clk) in_v = 0;
    repeat (4) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module pipe2_sva (input logic clk, rst_n, in_v, input logic [7:0] in_d, input logic out_v, input logic [7:0] out_d);
  a_lat2: assert property (@(posedge clk) disable iff (!rst_n) in_v |-> ##2 out_v && out_d == $past(in_d, 2));
endmodule
bind pipe2 pipe2_sva u_sva (.*);

module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, in_v = 0; logic [7:0] in_d = 0, out_d; logic out_v;
  pipe2 dut (.*);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 8; k++) begin @(negedge clk) in_v = 1; in_d = 8'h55 + k; end
    @(negedge clk) in_v = 0;
    repeat (4) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_lat2",fails:[95],minPass:1}]},{id:"sva-b10",group:"sva-basic",tag:"SVA basics \xB7 Lab 10",title:"Reusable properties: arguments and default clocking",std:"2012",design:"",tb:`// Three handshakes with different latencies. Write ONE property with arguments and
// instantiate it three times. Use default clocking and default disable iff.
module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0;
  logic [2:0] req = 0, ack = 0;
  int lat [3] = '{1, 2, 4};
  for (genvar i = 0; i < 3; i++) begin : resp
    always @(posedge clk) if (req[i]) fork begin repeat (lat[i]) @(negedge clk); ack[i] <= 1; @(negedge clk) ack[i] <= 0; end join_none
  end

  // TODO: default clocking @(posedge clk); default disable iff (!rst_n);
  // TODO: property p_handshake(r, a, max); $rose(r) |-> ##[1:max] a; endproperty
  // TODO: a_h0 (max 1), a_h1 (max 2), a_h2 (max 3) on req[i]/ack[i]
  a_h0: assert property (@(posedge clk) 1'b1);
  a_h1: assert property (@(posedge clk) 1'b1);
  a_h2: assert property (@(posedge clk) 1'b1);

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (2) begin @(negedge clk) req = 3'b111; @(negedge clk) req = 0; repeat (6) @(negedge clk); end
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0;
  logic [2:0] req = 0, ack = 0;
  int lat [3] = '{1, 2, 4};
  for (genvar i = 0; i < 3; i++) begin : resp
    always @(posedge clk) if (req[i]) fork begin repeat (lat[i]) @(negedge clk); ack[i] <= 1; @(negedge clk) ack[i] <= 0; end join_none
  end

  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  property p_handshake(r, a, max);
    $rose(r) |-> ##[1:max] a;
  endproperty
  a_h0: assert property (p_handshake(req[0], ack[0], 1));
  a_h1: assert property (p_handshake(req[1], ack[1], 2));
  a_h2: assert property (p_handshake(req[2], ack[2], 3));

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (2) begin @(negedge clk) req = 3'b111; @(negedge clk) req = 0; repeat (6) @(negedge clk); end
    $finish;
  end
endmodule
`},check:[{assert:"a_h0",fails:[],minPass:1},{assert:"a_h1",fails:[],minPass:1},{assert:"a_h2",fails:[55,135]}]},{id:"sva-s1",group:"sva-seq",tag:"Sequences \xB7 Lab 1",title:"Delays and ranges: ##n, ##[m:n], ##[1:$]",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic start = 0, done = 0, cmd = 0, resp = 0;
  // TODO a_win: done 2 to 4 cycles after start rises
  a_win: assert property (@(posedge clk) 1'b1);
  // TODO a_ev: resp some time after cmd rises (weak: may be unfinished)
  a_ev: assert property (@(posedge clk) 1'b1);
  // TODO a_sev: the same, but strong: must happen before the end
  a_sev: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin start = 0; done = 0; cmd = 0; resp = 0; end   // cycle 0, t=15
    @(negedge clk) begin start = 1; end   // cycle 1, t=25
    @(negedge clk) begin start = 0; cmd = 1; end   // cycle 2, t=35
    @(negedge clk) begin cmd = 0; end   // cycle 3, t=45
    @(negedge clk) begin done = 1; end   // cycle 4, t=55
    @(negedge clk) begin done = 0; end   // cycle 5, t=65
    @(negedge clk) begin resp = 1; end   // cycle 6, t=75
    @(negedge clk) begin resp = 0; end   // cycle 7, t=85
    @(negedge clk) begin start = 1; end   // cycle 8, t=95
    @(negedge clk) begin start = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin done = 1; end   // cycle 13, t=145
    @(negedge clk) begin done = 0; end   // cycle 14, t=155
    @(negedge clk) begin cmd = 1; end   // cycle 15, t=165
    @(negedge clk) begin cmd = 0; end   // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic start = 0, done = 0, cmd = 0, resp = 0;
  a_win: assert property (@(posedge clk) $rose(start) |-> ##[2:4] done); // done 2 to 4 cycles after start rises
  a_ev:  assert property (@(posedge clk) $rose(cmd) |-> ##[1:$] resp); // resp some time after cmd rises (weak: may be unfinished)
  a_sev: assert property (@(posedge clk) $rose(cmd) |-> s_eventually resp); // the same, but strong: must happen before the end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin start = 0; done = 0; cmd = 0; resp = 0; end   // cycle 0, t=15
    @(negedge clk) begin start = 1; end   // cycle 1, t=25
    @(negedge clk) begin start = 0; cmd = 1; end   // cycle 2, t=35
    @(negedge clk) begin cmd = 0; end   // cycle 3, t=45
    @(negedge clk) begin done = 1; end   // cycle 4, t=55
    @(negedge clk) begin done = 0; end   // cycle 5, t=65
    @(negedge clk) begin resp = 1; end   // cycle 6, t=75
    @(negedge clk) begin resp = 0; end   // cycle 7, t=85
    @(negedge clk) begin start = 1; end   // cycle 8, t=95
    @(negedge clk) begin start = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin done = 1; end   // cycle 13, t=145
    @(negedge clk) begin done = 0; end   // cycle 14, t=155
    @(negedge clk) begin cmd = 1; end   // cycle 15, t=165
    @(negedge clk) begin cmd = 0; end   // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_win",fails:[135],minPass:1},{assert:"a_ev",fails:[],minPass:1},{assert:"a_sev",fails:[245],minPass:1}]},{id:"sva-s2",group:"sva-seq",tag:"Sequences \xB7 Lab 2",title:"Consecutive repetition [*n] and [*m:n]",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic bstart = 0, bvalid = 0, req = 0, rdy = 0;
  // TODO a_burst: bvalid high exactly 4 cycles after bstart, then low
  a_burst: assert property (@(posedge clk) 1'b1);
  // TODO a_wait: after req: 0 to 3 wait cycles (rdy low), then rdy
  a_wait: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin bstart = 0; bvalid = 0; req = 0; rdy = 0; end   // cycle 0, t=15
    @(negedge clk) begin bstart = 1; end   // cycle 1, t=25
    @(negedge clk) begin bstart = 0; bvalid = 1; end   // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk);                  // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin bvalid = 0; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk) begin bstart = 1; end   // cycle 9, t=105
    @(negedge clk) begin bstart = 0; end   // cycle 10, t=115
    @(negedge clk) begin bvalid = 1; end   // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk) begin bvalid = 0; end   // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk) begin req = 1; end   // cycle 16, t=175
    @(negedge clk) begin req = 0; rdy = 1; end   // cycle 17, t=185
    @(negedge clk) begin rdy = 0; end   // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk) begin req = 1; end   // cycle 23, t=245
    @(negedge clk) begin req = 0; end   // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic bstart = 0, bvalid = 0, req = 0, rdy = 0;
  a_burst: assert property (@(posedge clk) $rose(bstart) |=> bvalid[*4] ##1 !bvalid); // bvalid high exactly 4 cycles after bstart, then low
  a_wait:  assert property (@(posedge clk) $rose(req) |=> !rdy[*0:3] ##1 rdy); // after req: 0 to 3 wait cycles (rdy low), then rdy
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin bstart = 0; bvalid = 0; req = 0; rdy = 0; end   // cycle 0, t=15
    @(negedge clk) begin bstart = 1; end   // cycle 1, t=25
    @(negedge clk) begin bstart = 0; bvalid = 1; end   // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk);                  // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin bvalid = 0; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk) begin bstart = 1; end   // cycle 9, t=105
    @(negedge clk) begin bstart = 0; end   // cycle 10, t=115
    @(negedge clk) begin bvalid = 1; end   // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk) begin bvalid = 0; end   // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk) begin req = 1; end   // cycle 16, t=175
    @(negedge clk) begin req = 0; rdy = 1; end   // cycle 17, t=185
    @(negedge clk) begin rdy = 0; end   // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk) begin req = 1; end   // cycle 23, t=245
    @(negedge clk) begin req = 0; end   // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_burst",fails:[115],minPass:1},{assert:"a_wait",fails:[285],minPass:1}]},{id:"sva-s3",group:"sva-seq",tag:"Sequences \xB7 Lab 3",title:"Goto [->n] and non-consecutive [=n] repetition",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rd = 0, dval = 0, done = 0;
  // TODO a_goto: done in the cycle right after the 4th data beat
  a_goto: assert property (@(posedge clk) 1'b1);
  // TODO a_ncons: done some time after the 4th beat, with no 5th beat before it
  a_ncons: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin rd = 0; dval = 0; done = 0; end   // cycle 0, t=15
    @(negedge clk) begin rd = 1; end   // cycle 1, t=25
    @(negedge clk) begin rd = 0; dval = 1; end   // cycle 2, t=35
    @(negedge clk) begin dval = 0; end   // cycle 3, t=45
    @(negedge clk) begin dval = 1; end   // cycle 4, t=55
    @(negedge clk) begin dval = 0; end   // cycle 5, t=65
    @(negedge clk) begin dval = 1; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin dval = 0; done = 1; end   // cycle 8, t=95
    @(negedge clk) begin done = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin rd = 1; end   // cycle 13, t=145
    @(negedge clk) begin rd = 0; end   // cycle 14, t=155
    @(negedge clk) begin dval = 1; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk) begin dval = 0; end   // cycle 17, t=185
    @(negedge clk) begin dval = 1; end   // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk) begin dval = 0; end   // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk) begin done = 1; end   // cycle 22, t=235
    @(negedge clk) begin done = 0; end   // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk) begin rd = 1; end   // cycle 30, t=315
    @(negedge clk) begin rd = 0; dval = 1; end   // cycle 31, t=325
    @(negedge clk) begin dval = 0; end   // cycle 32, t=335
    @(negedge clk) begin dval = 1; end   // cycle 33, t=345
    @(negedge clk) begin dval = 0; end   // cycle 34, t=355
    @(negedge clk) begin dval = 1; end   // cycle 35, t=365
    @(negedge clk) begin dval = 0; end   // cycle 36, t=375
    @(negedge clk) begin dval = 1; end   // cycle 37, t=385
    @(negedge clk) begin dval = 0; end   // cycle 38, t=395
    @(negedge clk) begin dval = 1; end   // cycle 39, t=405
    @(negedge clk) begin dval = 0; end   // cycle 40, t=415
    @(negedge clk);                  // cycle 41, t=425
    @(negedge clk) begin done = 1; end   // cycle 42, t=435
    @(negedge clk) begin done = 0; end   // cycle 43, t=445
    @(negedge clk);                  // cycle 44, t=455
    @(negedge clk);                  // cycle 45, t=465
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rd = 0, dval = 0, done = 0;
  a_goto: assert property (@(posedge clk) $rose(rd) |=> dval[->4] ##1 done); // done in the cycle right after the 4th data beat
  a_ncons: assert property (@(posedge clk) $rose(rd) |=> dval[=4] ##1 done); // done some time after the 4th beat, with no 5th beat before it
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin rd = 0; dval = 0; done = 0; end   // cycle 0, t=15
    @(negedge clk) begin rd = 1; end   // cycle 1, t=25
    @(negedge clk) begin rd = 0; dval = 1; end   // cycle 2, t=35
    @(negedge clk) begin dval = 0; end   // cycle 3, t=45
    @(negedge clk) begin dval = 1; end   // cycle 4, t=55
    @(negedge clk) begin dval = 0; end   // cycle 5, t=65
    @(negedge clk) begin dval = 1; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin dval = 0; done = 1; end   // cycle 8, t=95
    @(negedge clk) begin done = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin rd = 1; end   // cycle 13, t=145
    @(negedge clk) begin rd = 0; end   // cycle 14, t=155
    @(negedge clk) begin dval = 1; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk) begin dval = 0; end   // cycle 17, t=185
    @(negedge clk) begin dval = 1; end   // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk) begin dval = 0; end   // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk) begin done = 1; end   // cycle 22, t=235
    @(negedge clk) begin done = 0; end   // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk) begin rd = 1; end   // cycle 30, t=315
    @(negedge clk) begin rd = 0; dval = 1; end   // cycle 31, t=325
    @(negedge clk) begin dval = 0; end   // cycle 32, t=335
    @(negedge clk) begin dval = 1; end   // cycle 33, t=345
    @(negedge clk) begin dval = 0; end   // cycle 34, t=355
    @(negedge clk) begin dval = 1; end   // cycle 35, t=365
    @(negedge clk) begin dval = 0; end   // cycle 36, t=375
    @(negedge clk) begin dval = 1; end   // cycle 37, t=385
    @(negedge clk) begin dval = 0; end   // cycle 38, t=395
    @(negedge clk) begin dval = 1; end   // cycle 39, t=405
    @(negedge clk) begin dval = 0; end   // cycle 40, t=415
    @(negedge clk);                  // cycle 41, t=425
    @(negedge clk) begin done = 1; end   // cycle 42, t=435
    @(negedge clk) begin done = 0; end   // cycle 43, t=445
    @(negedge clk);                  // cycle 44, t=455
    @(negedge clk);                  // cycle 45, t=465
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_goto",fails:[215,395],minPass:1},{assert:"a_ncons",fails:[405],minPass:1}]},{id:"sva-s4",group:"sva-seq",tag:"Sequences \xB7 Lab 4",title:"throughout: a condition held for a whole sequence",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic start = 0, gnt = 0, ack = 0;
  // TODO a_gnt: gnt high from start until the 3rd ack
  a_gnt: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin start = 0; gnt = 0; ack = 0; end   // cycle 0, t=15
    @(negedge clk) begin start = 1; gnt = 1; end   // cycle 1, t=25
    @(negedge clk) begin start = 0; end   // cycle 2, t=35
    @(negedge clk) begin ack = 1; end   // cycle 3, t=45
    @(negedge clk) begin ack = 0; end   // cycle 4, t=55
    @(negedge clk) begin ack = 1; end   // cycle 5, t=65
    @(negedge clk) begin ack = 0; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin ack = 1; end   // cycle 8, t=95
    @(negedge clk) begin gnt = 0; ack = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin start = 1; gnt = 1; end   // cycle 13, t=145
    @(negedge clk) begin start = 0; end   // cycle 14, t=155
    @(negedge clk) begin ack = 1; end   // cycle 15, t=165
    @(negedge clk) begin ack = 0; end   // cycle 16, t=175
    @(negedge clk) begin ack = 1; end   // cycle 17, t=185
    @(negedge clk) begin gnt = 0; ack = 0; end   // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic start = 0, gnt = 0, ack = 0;
  a_gnt: assert property (@(posedge clk) $rose(start) |-> gnt throughout ack[->3]); // gnt high from start until the 3rd ack
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin start = 0; gnt = 0; ack = 0; end   // cycle 0, t=15
    @(negedge clk) begin start = 1; gnt = 1; end   // cycle 1, t=25
    @(negedge clk) begin start = 0; end   // cycle 2, t=35
    @(negedge clk) begin ack = 1; end   // cycle 3, t=45
    @(negedge clk) begin ack = 0; end   // cycle 4, t=55
    @(negedge clk) begin ack = 1; end   // cycle 5, t=65
    @(negedge clk) begin ack = 0; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin ack = 1; end   // cycle 8, t=95
    @(negedge clk) begin gnt = 0; ack = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin start = 1; gnt = 1; end   // cycle 13, t=145
    @(negedge clk) begin start = 0; end   // cycle 14, t=155
    @(negedge clk) begin ack = 1; end   // cycle 15, t=165
    @(negedge clk) begin ack = 0; end   // cycle 16, t=175
    @(negedge clk) begin ack = 1; end   // cycle 17, t=185
    @(negedge clk) begin gnt = 0; ack = 0; end   // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_gnt",fails:[195],minPass:1}]},{id:"sva-s5",group:"sva-seq",tag:"Sequences \xB7 Lab 5",title:"within and intersect: windows and lengths",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic cs_n = 1, we = 0, sop = 0, eop = 0;
  // TODO a_we: a 2-cycle write pulse inside the 6 cycles cs_n is low
  a_we: assert property (@(posedge clk) 1'b1);
  // TODO a_len: eop arrives so that the packet is 2 to 8 cycles long
  a_len: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin cs_n = 1; we = 0; sop = 0; eop = 0; end   // cycle 0, t=15
    @(negedge clk) begin cs_n = 0; end   // cycle 1, t=25
    @(negedge clk);                  // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk) begin we = 1; end   // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin we = 0; end   // cycle 6, t=75
    @(negedge clk) begin cs_n = 1; end   // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk) begin cs_n = 0; end   // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk) begin cs_n = 1; end   // cycle 18, t=195
    @(negedge clk) begin we = 1; end   // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk) begin we = 0; end   // cycle 21, t=225
    @(negedge clk) begin sop = 1; end   // cycle 22, t=235
    @(negedge clk) begin sop = 0; end   // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk) begin eop = 1; end   // cycle 25, t=265
    @(negedge clk) begin eop = 0; end   // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk);                  // cycle 30, t=315
    @(negedge clk);                  // cycle 31, t=325
    @(negedge clk);                  // cycle 32, t=335
    @(negedge clk) begin sop = 1; end   // cycle 33, t=345
    @(negedge clk) begin sop = 0; end   // cycle 34, t=355
    @(negedge clk);                  // cycle 35, t=365
    @(negedge clk);                  // cycle 36, t=375
    @(negedge clk);                  // cycle 37, t=385
    @(negedge clk);                  // cycle 38, t=395
    @(negedge clk);                  // cycle 39, t=405
    @(negedge clk);                  // cycle 40, t=415
    @(negedge clk);                  // cycle 41, t=425
    @(negedge clk);                  // cycle 42, t=435
    @(negedge clk);                  // cycle 43, t=445
    @(negedge clk);                  // cycle 44, t=455
    @(negedge clk) begin eop = 1; end   // cycle 45, t=465
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic cs_n = 1, we = 0, sop = 0, eop = 0;
  a_we: assert property (@(posedge clk) $fell(cs_n) |-> (we[*2]) within (!cs_n[*6])); // a 2-cycle write pulse inside the 6 cycles cs_n is low
  a_len: assert property (@(posedge clk) $rose(sop) |-> eop[->1] intersect 1'b1[*2:8]); // eop arrives so that the packet is 2 to 8 cycles long
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin cs_n = 1; we = 0; sop = 0; eop = 0; end   // cycle 0, t=15
    @(negedge clk) begin cs_n = 0; end   // cycle 1, t=25
    @(negedge clk);                  // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk) begin we = 1; end   // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin we = 0; end   // cycle 6, t=75
    @(negedge clk) begin cs_n = 1; end   // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk) begin cs_n = 0; end   // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk) begin cs_n = 1; end   // cycle 18, t=195
    @(negedge clk) begin we = 1; end   // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk) begin we = 0; end   // cycle 21, t=225
    @(negedge clk) begin sop = 1; end   // cycle 22, t=235
    @(negedge clk) begin sop = 0; end   // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk) begin eop = 1; end   // cycle 25, t=265
    @(negedge clk) begin eop = 0; end   // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk);                  // cycle 30, t=315
    @(negedge clk);                  // cycle 31, t=325
    @(negedge clk);                  // cycle 32, t=335
    @(negedge clk) begin sop = 1; end   // cycle 33, t=345
    @(negedge clk) begin sop = 0; end   // cycle 34, t=355
    @(negedge clk);                  // cycle 35, t=365
    @(negedge clk);                  // cycle 36, t=375
    @(negedge clk);                  // cycle 37, t=385
    @(negedge clk);                  // cycle 38, t=395
    @(negedge clk);                  // cycle 39, t=405
    @(negedge clk);                  // cycle 40, t=415
    @(negedge clk);                  // cycle 41, t=425
    @(negedge clk);                  // cycle 42, t=435
    @(negedge clk);                  // cycle 43, t=445
    @(negedge clk);                  // cycle 44, t=455
    @(negedge clk) begin eop = 1; end   // cycle 45, t=465
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_we",fails:[185],minPass:1},{assert:"a_len",fails:[415],minPass:1}]},{id:"sva-s6",group:"sva-seq",tag:"Sequences \xB7 Lab 6",title:"and, or, first_match",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, ack_a = 0, ack_b = 0, retry = 0, done = 0, gnt = 0;
  // TODO a_both: both acks, in any order, within 4 cycles
  a_both: assert property (@(posedge clk) 1'b1);
  // TODO a_either: retry within 2 cycles, or done within 6
  a_either: assert property (@(posedge clk) 1'b1);
  // TODO c_first: cover only the first gnt after each request
  c_first: cover property (@(posedge clk) 1'b0);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin req = 0; ack_a = 0; ack_b = 0; retry = 0; done = 0; gnt = 0; end   // cycle 0, t=15
    @(negedge clk) begin req = 1; end   // cycle 1, t=25
    @(negedge clk) begin req = 0; ack_b = 1; gnt = 1; end   // cycle 2, t=35
    @(negedge clk) begin ack_a = 1; ack_b = 0; end   // cycle 3, t=45
    @(negedge clk) begin ack_a = 0; gnt = 0; end   // cycle 4, t=55
    @(negedge clk) begin done = 1; end   // cycle 5, t=65
    @(negedge clk) begin done = 0; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk) begin req = 1; end   // cycle 10, t=115
    @(negedge clk) begin req = 0; gnt = 1; end   // cycle 11, t=125
    @(negedge clk) begin ack_b = 1; end   // cycle 12, t=135
    @(negedge clk) begin ack_b = 0; gnt = 0; end   // cycle 13, t=145
    @(negedge clk) begin gnt = 1; end   // cycle 14, t=155
    @(negedge clk) begin gnt = 0; end   // cycle 15, t=165
    @(negedge clk) begin ack_a = 1; end   // cycle 16, t=175
    @(negedge clk) begin ack_a = 0; end   // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk) begin req = 1; end   // cycle 21, t=225
    @(negedge clk) begin req = 0; end   // cycle 22, t=235
    @(negedge clk) begin ack_b = 1; retry = 1; end   // cycle 23, t=245
    @(negedge clk) begin ack_a = 1; ack_b = 0; retry = 0; end   // cycle 24, t=255
    @(negedge clk) begin ack_a = 0; end   // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, ack_a = 0, ack_b = 0, retry = 0, done = 0, gnt = 0;
  a_both: assert property (@(posedge clk) $rose(req) |-> (##[1:4] ack_a) and (##[1:4] ack_b)); // both acks, in any order, within 4 cycles
  a_either: assert property (@(posedge clk) $rose(req) |-> (##[1:2] retry) or (##[1:6] done)); // retry within 2 cycles, or done within 6
  c_first: cover property (@(posedge clk) $rose(req) ##0 first_match(##[1:5] gnt)); // cover only the first gnt after each request
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin req = 0; ack_a = 0; ack_b = 0; retry = 0; done = 0; gnt = 0; end   // cycle 0, t=15
    @(negedge clk) begin req = 1; end   // cycle 1, t=25
    @(negedge clk) begin req = 0; ack_b = 1; gnt = 1; end   // cycle 2, t=35
    @(negedge clk) begin ack_a = 1; ack_b = 0; end   // cycle 3, t=45
    @(negedge clk) begin ack_a = 0; gnt = 0; end   // cycle 4, t=55
    @(negedge clk) begin done = 1; end   // cycle 5, t=65
    @(negedge clk) begin done = 0; end   // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk) begin req = 1; end   // cycle 10, t=115
    @(negedge clk) begin req = 0; gnt = 1; end   // cycle 11, t=125
    @(negedge clk) begin ack_b = 1; end   // cycle 12, t=135
    @(negedge clk) begin ack_b = 0; gnt = 0; end   // cycle 13, t=145
    @(negedge clk) begin gnt = 1; end   // cycle 14, t=155
    @(negedge clk) begin gnt = 0; end   // cycle 15, t=165
    @(negedge clk) begin ack_a = 1; end   // cycle 16, t=175
    @(negedge clk) begin ack_a = 0; end   // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk) begin req = 1; end   // cycle 21, t=225
    @(negedge clk) begin req = 0; end   // cycle 22, t=235
    @(negedge clk) begin ack_b = 1; retry = 1; end   // cycle 23, t=245
    @(negedge clk) begin ack_a = 1; ack_b = 0; retry = 0; end   // cycle 24, t=255
    @(negedge clk) begin ack_a = 0; end   // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_both",fails:[155],minPass:1},{assert:"a_either",fails:[175],minPass:1},{assert:"c_first",matches:2}]},{id:"sva-s7",group:"sva-seq",tag:"Sequences \xB7 Lab 7",title:"Named sequences, arguments and .triggered",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic wr = 0, wack = 0, irq = 0; logic [3:0] addr = 0;
  localparam logic [3:0] STATUS = 4'h4;
  sequence s_write(a);
    wr && addr == a ##1 wack;
  endsequence
  // TODO a_wr: every write is acknowledged in the next cycle
  a_wr: assert property (@(posedge clk) 1'b1);
  // TODO a_irq: an interrupt only in the cycle a write to STATUS completes
  a_irq: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin wr = 0; addr = 0; wack = 0; irq = 0; end   // cycle 0, t=15
    @(negedge clk) begin wr = 1; addr = 4; end   // cycle 1, t=25
    @(negedge clk) begin wr = 0; wack = 1; irq = 1; end   // cycle 2, t=35
    @(negedge clk) begin wack = 0; irq = 0; end   // cycle 3, t=45
    @(negedge clk);                  // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin wr = 1; addr = 2; end   // cycle 6, t=75
    @(negedge clk) begin wr = 0; wack = 1; irq = 1; end   // cycle 7, t=85
    @(negedge clk) begin wack = 0; irq = 0; end   // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin wr = 1; addr = 4; end   // cycle 13, t=145
    @(negedge clk) begin wr = 0; wack = 1; end   // cycle 14, t=155
    @(negedge clk) begin wack = 0; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk) begin irq = 1; end   // cycle 18, t=195
    @(negedge clk) begin irq = 0; end   // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic wr = 0, wack = 0, irq = 0; logic [3:0] addr = 0;
  localparam logic [3:0] STATUS = 4'h4;
  sequence s_write(a);
    wr && addr == a ##1 wack;
  endsequence
  a_wr:  assert property (@(posedge clk) wr |-> ##1 wack); // every write is acknowledged in the next cycle
  a_irq: assert property (@(posedge clk) $rose(irq) |-> s_write(STATUS).triggered); // an interrupt only in the cycle a write to STATUS completes
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin wr = 0; addr = 0; wack = 0; irq = 0; end   // cycle 0, t=15
    @(negedge clk) begin wr = 1; addr = 4; end   // cycle 1, t=25
    @(negedge clk) begin wr = 0; wack = 1; irq = 1; end   // cycle 2, t=35
    @(negedge clk) begin wack = 0; irq = 0; end   // cycle 3, t=45
    @(negedge clk);                  // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin wr = 1; addr = 2; end   // cycle 6, t=75
    @(negedge clk) begin wr = 0; wack = 1; irq = 1; end   // cycle 7, t=85
    @(negedge clk) begin wack = 0; irq = 0; end   // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin wr = 1; addr = 4; end   // cycle 13, t=145
    @(negedge clk) begin wr = 0; wack = 1; end   // cycle 14, t=155
    @(negedge clk) begin wack = 0; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk) begin irq = 1; end   // cycle 18, t=195
    @(negedge clk) begin irq = 0; end   // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_wr",fails:[],minPass:1},{assert:"a_irq",fails:[85,195],minPass:1}]},{id:"sva-p1",group:"sva-prop",tag:"Properties \xB7 Lab 1",title:"$stable, $changed: a valid/ready handshake",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic valid = 0, ready = 0; logic [7:0] data = 0;
  // TODO a_hold: once valid, it stays high until ready
  a_hold: assert property (@(posedge clk) 1'b1);
  // TODO a_stable: data does not change while valid waits for ready
  a_stable: assert property (@(posedge clk) 1'b1);
  // TODO c_stall: cover a transfer that waited at least one cycle
  c_stall: cover property (@(posedge clk) 1'b0);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin valid = 0; ready = 0; data = 8'h00; end   // cycle 0, t=15
    @(negedge clk);                  // cycle 1, t=25
    @(negedge clk) begin valid = 1; data = 8'h11; end   // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk) begin ready = 1; end   // cycle 4, t=55
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin valid = 1; data = 8'h22; end   // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk) begin data = 8'h23; end   // cycle 10, t=115
    @(negedge clk) begin ready = 1; end   // cycle 11, t=125
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk) begin valid = 1; data = 8'h33; end   // cycle 18, t=195
    @(negedge clk) begin ready = 1; end   // cycle 19, t=205
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 20, t=215
    @(negedge clk) begin valid = 1; data = 8'h44; end   // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk) begin valid = 0; end   // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk) begin valid = 1; data = 8'h55; end   // cycle 25, t=265
    @(negedge clk) begin ready = 1; end   // cycle 26, t=275
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic valid = 0, ready = 0; logic [7:0] data = 0;
  a_hold:   assert property (@(posedge clk) valid && !ready |=> valid); // once valid, it stays high until ready
  a_stable: assert property (@(posedge clk) valid && !ready |=> $stable(data)); // data does not change while valid waits for ready
  c_stall:  cover property (@(posedge clk) valid && !ready ##1 valid && ready); // cover a transfer that waited at least one cycle
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin valid = 0; ready = 0; data = 8'h00; end   // cycle 0, t=15
    @(negedge clk);                  // cycle 1, t=25
    @(negedge clk) begin valid = 1; data = 8'h11; end   // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk) begin ready = 1; end   // cycle 4, t=55
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin valid = 1; data = 8'h22; end   // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk) begin data = 8'h23; end   // cycle 10, t=115
    @(negedge clk) begin ready = 1; end   // cycle 11, t=125
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk) begin valid = 1; data = 8'h33; end   // cycle 18, t=195
    @(negedge clk) begin ready = 1; end   // cycle 19, t=205
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 20, t=215
    @(negedge clk) begin valid = 1; data = 8'h44; end   // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk) begin valid = 0; end   // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk) begin valid = 1; data = 8'h55; end   // cycle 25, t=265
    @(negedge clk) begin ready = 1; end   // cycle 26, t=275
    @(negedge clk) begin valid = 0; ready = 0; end   // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_hold",fails:[245],minPass:1},{assert:"a_stable",fails:[115],minPass:1},{assert:"c_stall",matches:4}]},{id:"sva-p2",group:"sva-prop",tag:"Properties \xB7 Lab 2",title:"$past and the expression width gotcha",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, inc = 0, skip = 0; logic [3:0] cnt;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) cnt <= 0; else if (inc && !(cnt == 9 && skip)) cnt <= cnt + 1;
  // Given (wrong): fails when cnt wraps from 15 to 0, though the counter is right.
  // TODO a_inc: fix the wrap: compare in 4 bits with a cast, 4'(...)
  a_inc: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin rst_n = 0; inc = 0; skip = 0; end   // cycle 0, t=15
    @(negedge clk) begin rst_n = 1; end   // cycle 1, t=25
    @(negedge clk) begin inc = 1; end   // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk);                  // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk) begin skip = 1; end   // cycle 27, t=285
    @(negedge clk) begin skip = 0; end   // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk);                  // cycle 30, t=315
    @(negedge clk);                  // cycle 31, t=325
    @(negedge clk);                  // cycle 32, t=335
    @(negedge clk);                  // cycle 33, t=345
    @(negedge clk);                  // cycle 34, t=355
    @(negedge clk);                  // cycle 35, t=365
    @(negedge clk);                  // cycle 36, t=375
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, inc = 0, skip = 0; logic [3:0] cnt;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) cnt <= 0; else if (inc && !(cnt == 9 && skip)) cnt <= cnt + 1;
  // Given (wrong): fails when cnt wraps from 15 to 0, though the counter is right.
  a_inc: assert property (@(posedge clk) disable iff (!rst_n) inc |=> cnt == 4'($past(cnt) + 1)); // fix the wrap: compare in 4 bits with a cast, 4'(...)
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin rst_n = 0; inc = 0; skip = 0; end   // cycle 0, t=15
    @(negedge clk) begin rst_n = 1; end   // cycle 1, t=25
    @(negedge clk) begin inc = 1; end   // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk);                  // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk);                  // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk) begin skip = 1; end   // cycle 27, t=285
    @(negedge clk) begin skip = 0; end   // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk);                  // cycle 30, t=315
    @(negedge clk);                  // cycle 31, t=325
    @(negedge clk);                  // cycle 32, t=335
    @(negedge clk);                  // cycle 33, t=345
    @(negedge clk);                  // cycle 34, t=355
    @(negedge clk);                  // cycle 35, t=365
    @(negedge clk);                  // cycle 36, t=375
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_inc",fails:[295],minPass:1}]},{id:"sva-p3",group:"sva-prop",tag:"Properties \xB7 Lab 3",title:"System functions: $onehot, $onehot0, $isunknown, $countones",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic valid = 0; logic [3:0] gnt = 0, req = 0; logic [7:0] addr = 0;
  // TODO a_gnt1: at most one grant at a time
  a_gnt1: assert property (@(posedge clk) 1'b1);
  // TODO a_noX: no X or Z on addr while valid
  a_noX: assert property (@(posedge clk) 1'b1);
  // TODO a_reqs: at most 2 requests at once (an environment rule)
  a_reqs: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin gnt = 4'b0000; valid = 0; addr = 8'h00; req = 4'b0000; end   // cycle 0, t=15
    @(negedge clk) begin gnt = 4'b0001; req = 4'b0011; end   // cycle 1, t=25
    @(negedge clk) begin gnt = 4'b0010; valid = 1; addr = 8'h10; req = 4'b0010; end   // cycle 2, t=35
    @(negedge clk) begin gnt = 4'b0000; addr = 8'h11; req = 4'b0110; end   // cycle 3, t=45
    @(negedge clk) begin gnt = 4'b0100; valid = 0; addr = 8'h00; req = 4'b0100; end   // cycle 4, t=55
    @(negedge clk) begin gnt = 4'b0110; req = 4'b0111; end   // cycle 5, t=65
    @(negedge clk) begin gnt = 4'b0000; req = 4'b0000; end   // cycle 6, t=75
    @(negedge clk) begin gnt = 4'b1000; req = 4'b1000; end   // cycle 7, t=85
    @(negedge clk) begin gnt = 4'b0000; valid = 1; addr = 8'h2x; req = 4'b0000; end   // cycle 8, t=95
    @(negedge clk) begin addr = 8'h20; end   // cycle 9, t=105
    @(negedge clk) begin valid = 0; addr = 8'h00; end   // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic valid = 0; logic [3:0] gnt = 0, req = 0; logic [7:0] addr = 0;
  a_gnt1: assert property (@(posedge clk) $onehot0(gnt)); // at most one grant at a time
  a_noX:  assert property (@(posedge clk) valid |-> !$isunknown(addr)); // no X or Z on addr while valid
  a_reqs: assert property (@(posedge clk) $countones(req) <= 2); // at most 2 requests at once (an environment rule)
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin gnt = 4'b0000; valid = 0; addr = 8'h00; req = 4'b0000; end   // cycle 0, t=15
    @(negedge clk) begin gnt = 4'b0001; req = 4'b0011; end   // cycle 1, t=25
    @(negedge clk) begin gnt = 4'b0010; valid = 1; addr = 8'h10; req = 4'b0010; end   // cycle 2, t=35
    @(negedge clk) begin gnt = 4'b0000; addr = 8'h11; req = 4'b0110; end   // cycle 3, t=45
    @(negedge clk) begin gnt = 4'b0100; valid = 0; addr = 8'h00; req = 4'b0100; end   // cycle 4, t=55
    @(negedge clk) begin gnt = 4'b0110; req = 4'b0111; end   // cycle 5, t=65
    @(negedge clk) begin gnt = 4'b0000; req = 4'b0000; end   // cycle 6, t=75
    @(negedge clk) begin gnt = 4'b1000; req = 4'b1000; end   // cycle 7, t=85
    @(negedge clk) begin gnt = 4'b0000; valid = 1; addr = 8'h2x; req = 4'b0000; end   // cycle 8, t=95
    @(negedge clk) begin addr = 8'h20; end   // cycle 9, t=105
    @(negedge clk) begin valid = 0; addr = 8'h00; end   // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_gnt1",fails:[65],minPass:1},{assert:"a_noX",fails:[95],minPass:1},{assert:"a_reqs",fails:[65],minPass:1}]},{id:"sva-p4",group:"sva-prop",tag:"Properties \xB7 Lab 4",title:"not, and if/else in properties",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic wr = 0, rd = 0, fast = 0, req = 0, ack = 0;
  // TODO a_rw: never a read right after a write (turn-around cycle)
  a_rw: assert property (@(posedge clk) 1'b1);
  // TODO a_lat: fast requests: ack after 1; slow: ack after 3
  a_lat: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin wr = 0; rd = 0; fast = 0; req = 0; ack = 0; end   // cycle 0, t=15
    @(negedge clk);                  // cycle 1, t=25
    @(negedge clk) begin wr = 1; end   // cycle 2, t=35
    @(negedge clk) begin wr = 0; end   // cycle 3, t=45
    @(negedge clk) begin rd = 1; end   // cycle 4, t=55
    @(negedge clk) begin rd = 0; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk) begin wr = 1; end   // cycle 9, t=105
    @(negedge clk) begin wr = 0; rd = 1; end   // cycle 10, t=115
    @(negedge clk) begin rd = 0; end   // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk) begin fast = 1; req = 1; end   // cycle 14, t=155
    @(negedge clk) begin fast = 0; req = 0; ack = 1; end   // cycle 15, t=165
    @(negedge clk) begin ack = 0; end   // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk) begin req = 1; end   // cycle 19, t=205
    @(negedge clk) begin req = 0; end   // cycle 20, t=215
    @(negedge clk) begin ack = 1; end   // cycle 21, t=225
    @(negedge clk) begin ack = 0; end   // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic wr = 0, rd = 0, fast = 0, req = 0, ack = 0;
  a_rw:  assert property (@(posedge clk) not (wr ##1 rd)); // never a read right after a write (turn-around cycle)
  a_lat: assert property (@(posedge clk) $rose(req) |-> if (fast) ##1 ack else ##3 ack); // fast requests: ack after 1; slow: ack after 3
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin wr = 0; rd = 0; fast = 0; req = 0; ack = 0; end   // cycle 0, t=15
    @(negedge clk);                  // cycle 1, t=25
    @(negedge clk) begin wr = 1; end   // cycle 2, t=35
    @(negedge clk) begin wr = 0; end   // cycle 3, t=45
    @(negedge clk) begin rd = 1; end   // cycle 4, t=55
    @(negedge clk) begin rd = 0; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk) begin wr = 1; end   // cycle 9, t=105
    @(negedge clk) begin wr = 0; rd = 1; end   // cycle 10, t=115
    @(negedge clk) begin rd = 0; end   // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk);                  // cycle 13, t=145
    @(negedge clk) begin fast = 1; req = 1; end   // cycle 14, t=155
    @(negedge clk) begin fast = 0; req = 0; ack = 1; end   // cycle 15, t=165
    @(negedge clk) begin ack = 0; end   // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk) begin req = 1; end   // cycle 19, t=205
    @(negedge clk) begin req = 0; end   // cycle 20, t=215
    @(negedge clk) begin ack = 1; end   // cycle 21, t=225
    @(negedge clk) begin ack = 0; end   // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_rw",fails:[115],minPass:1},{assert:"a_lat",fails:[235],minPass:1}]},{id:"sva-p5",group:"sva-prop",tag:"Properties \xB7 Lab 5",title:"Local variables: data integrity through a pipeline",std:"2012",design:`// 3-stage pipeline: out_d = in_d + 1, three clocks later. One value is corrupted.
module pipe3 (input logic clk, rst_n, in_v, input logic [7:0] in_d, output logic out_v, output logic [7:0] out_d);
  logic [2:0] v; logic [7:0] d0, d1;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) v <= 0;
    else begin v <= {v[1:0], in_v}; d0 <= in_d + 1; d1 <= d0; out_d <= (d1 == 8'h37) ? 8'h73 : d1; end
  assign out_v = v[2];
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, in_v = 0; logic [7:0] in_d = 0, out_d; logic out_v;
  pipe3 dut (.*);
  property p_data;
    logic [7:0] x;
    @(posedge clk) disable iff (!rst_n) (in_v, x = in_d + 1) |-> ##3 out_v && out_d == x;
  endproperty
  // TODO a_data: capture in_d + 1 in a local variable; compare with out_d 3 clocks later
  a_data: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 10; k++) begin @(negedge clk) in_v = 1; in_d = 8'h30 + k; end
    @(negedge clk) in_v = 0;
    repeat (5) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, in_v = 0; logic [7:0] in_d = 0, out_d; logic out_v;
  pipe3 dut (.*);
  property p_data;
    logic [7:0] x;
    @(posedge clk) disable iff (!rst_n) (in_v, x = in_d + 1) |-> ##3 out_v && out_d == x;
  endproperty
  a_data: assert property (p_data); // capture in_d + 1 in a local variable; compare with out_d 3 clocks later
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 10; k++) begin @(negedge clk) in_v = 1; in_d = 8'h30 + k; end
    @(negedge clk) in_v = 0;
    repeat (5) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_data",fails:[115],minPass:1}]},{id:"sva-p6",group:"sva-prop",tag:"Properties \xB7 Lab 6",title:"Local variables: matching IDs out of order",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, rsp = 0; logic [1:0] id = 0, rsp_id = 0;
  property p_id;
    logic [1:0] v;
    @(posedge clk) (req, v = id) |-> ##[1:6] (rsp && rsp_id == v);
  endproperty
  // TODO a_id: every request ID gets a response with the same ID within 1 to 6 cycles
  a_id: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin req = 0; id = 2'd0; rsp = 0; rsp_id = 2'd0; end   // cycle 0, t=15
    @(negedge clk) begin req = 1; id = 2'd1; end   // cycle 1, t=25
    @(negedge clk) begin id = 2'd2; end   // cycle 2, t=35
    @(negedge clk) begin id = 2'd3; rsp = 1; rsp_id = 2'd2; end   // cycle 3, t=45
    @(negedge clk) begin req = 0; id = 2'd0; rsp = 0; rsp_id = 2'd0; end   // cycle 4, t=55
    @(negedge clk) begin rsp = 1; rsp_id = 2'd1; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk) begin rsp = 0; rsp_id = 2'd0; end   // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk) begin req = 1; id = 2'd2; end   // cycle 12, t=135
    @(negedge clk) begin req = 0; end   // cycle 13, t=145
    @(negedge clk) begin rsp = 1; rsp_id = 2'd1; end   // cycle 14, t=155
    @(negedge clk) begin rsp = 0; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic req = 0, rsp = 0; logic [1:0] id = 0, rsp_id = 0;
  property p_id;
    logic [1:0] v;
    @(posedge clk) (req, v = id) |-> ##[1:6] (rsp && rsp_id == v);
  endproperty
  a_id: assert property (p_id); // every request ID gets a response with the same ID within 1 to 6 cycles
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin req = 0; id = 2'd0; rsp = 0; rsp_id = 2'd0; end   // cycle 0, t=15
    @(negedge clk) begin req = 1; id = 2'd1; end   // cycle 1, t=25
    @(negedge clk) begin id = 2'd2; end   // cycle 2, t=35
    @(negedge clk) begin id = 2'd3; rsp = 1; rsp_id = 2'd2; end   // cycle 3, t=45
    @(negedge clk) begin req = 0; id = 2'd0; rsp = 0; rsp_id = 2'd0; end   // cycle 4, t=55
    @(negedge clk) begin rsp = 1; rsp_id = 2'd1; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk) begin rsp = 0; rsp_id = 2'd0; end   // cycle 7, t=85
    @(negedge clk);                  // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk) begin req = 1; id = 2'd2; end   // cycle 12, t=135
    @(negedge clk) begin req = 0; end   // cycle 13, t=145
    @(negedge clk) begin rsp = 1; rsp_id = 2'd1; end   // cycle 14, t=155
    @(negedge clk) begin rsp = 0; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk);                  // cycle 20, t=215
    @(negedge clk);                  // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_id",fails:[105,195],minPass:1}]},{id:"sva-p7",group:"sva-prop",tag:"Properties \xB7 Lab 7",title:"until, eventually and liveness at the end of a test",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic err = 0, led = 0, clr = 0, req = 0, gnt = 0;
  // TODO a_led: after an error, led stays on until clr
  a_led: assert property (@(posedge clk) 1'b1);
  // TODO a_live: every request is granted before the test ends
  a_live: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin err = 0; led = 0; clr = 0; req = 0; gnt = 0; end   // cycle 0, t=15
    @(negedge clk) begin err = 1; end   // cycle 1, t=25
    @(negedge clk) begin err = 0; led = 1; end   // cycle 2, t=35
    @(negedge clk) begin req = 1; end   // cycle 3, t=45
    @(negedge clk) begin req = 0; end   // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin gnt = 1; end   // cycle 6, t=75
    @(negedge clk) begin gnt = 0; end   // cycle 7, t=85
    @(negedge clk) begin clr = 1; end   // cycle 8, t=95
    @(negedge clk) begin led = 0; clr = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk) begin err = 1; end   // cycle 12, t=135
    @(negedge clk) begin err = 0; end   // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk) begin led = 1; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk) begin led = 0; clr = 1; end   // cycle 19, t=205
    @(negedge clk) begin clr = 0; end   // cycle 20, t=215
    @(negedge clk) begin req = 1; end   // cycle 21, t=225
    @(negedge clk) begin req = 0; end   // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic err = 0, led = 0, clr = 0, req = 0, gnt = 0;
  a_led:  assert property (@(posedge clk) $rose(err) |=> led until clr); // after an error, led stays on until clr
  a_live: assert property (@(posedge clk) req |-> s_eventually gnt); // every request is granted before the test ends
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin err = 0; led = 0; clr = 0; req = 0; gnt = 0; end   // cycle 0, t=15
    @(negedge clk) begin err = 1; end   // cycle 1, t=25
    @(negedge clk) begin err = 0; led = 1; end   // cycle 2, t=35
    @(negedge clk) begin req = 1; end   // cycle 3, t=45
    @(negedge clk) begin req = 0; end   // cycle 4, t=55
    @(negedge clk);                  // cycle 5, t=65
    @(negedge clk) begin gnt = 1; end   // cycle 6, t=75
    @(negedge clk) begin gnt = 0; end   // cycle 7, t=85
    @(negedge clk) begin clr = 1; end   // cycle 8, t=95
    @(negedge clk) begin led = 0; clr = 0; end   // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk);                  // cycle 11, t=125
    @(negedge clk) begin err = 1; end   // cycle 12, t=135
    @(negedge clk) begin err = 0; end   // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk) begin led = 1; end   // cycle 15, t=165
    @(negedge clk);                  // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk) begin led = 0; clr = 1; end   // cycle 19, t=205
    @(negedge clk) begin clr = 0; end   // cycle 20, t=215
    @(negedge clk) begin req = 1; end   // cycle 21, t=225
    @(negedge clk) begin req = 0; end   // cycle 22, t=235
    @(negedge clk);                  // cycle 23, t=245
    @(negedge clk);                  // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_led",fails:[145],minPass:1},{assert:"a_live",fails:[305],minPass:1}]},{id:"sva-p8",group:"sva-prop",tag:"Properties \xB7 Lab 8",title:"Checking the checker: vacuity and cover",std:"2012",design:`// Write-back FSM: IDLE -> REQ -> WAIT -> WRITE -> IDLE. In WRITE, 'we' must be high.
module wb_fsm (input logic clk, rst_n, go, ack, output logic we, output logic [1:0] state);
  localparam IDLE = 2'd0, REQ = 2'd1, WAIT = 2'd2, WRITE = 2'd3;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) state <= IDLE;
    else case (state)
      IDLE:  if (go) state <= REQ;
      REQ:   state <= WAIT;
      WAIT:  if (ack) state <= WRITE;
      WRITE: state <= IDLE;
    endcase
  assign we = (state == WRITE) && !(ack && go);   // bug: we dropped in a corner case
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, go = 0, ack = 0, we; logic [1:0] state;
  wb_fsm dut (.*);
  // The given assertion never fails... because its antecedent never happens: 2'd4 does not fit in 2 bits.
  // TODO a_we: fix the antecedent: WRITE is state 2'd3 (the given code had 2'd4)
  a_we: assert property (@(posedge clk) 1'b1);
  // TODO c_wr: cover the antecedent: does WRITE ever happen?
  c_wr: cover property (@(posedge clk) 1'b0);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (2) begin @(negedge clk) go = 1; @(negedge clk) go = 0; repeat (2) @(negedge clk); ack = 1; @(negedge clk) ack = 0; repeat (2) @(negedge clk); end
    @(negedge clk) go = 1; @(negedge clk) go = 0; repeat (2) @(negedge clk); ack = 1; go = 1; @(negedge clk) begin ack = 1; go = 1; end @(negedge clk) begin ack = 0; go = 0; end
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, go = 0, ack = 0, we; logic [1:0] state;
  wb_fsm dut (.*);
  // The given assertion never fails... because its antecedent never happens: 2'd4 does not fit in 2 bits.
  a_we:   assert property (@(posedge clk) disable iff (!rst_n) state == 2'd3 |-> we); // fix the antecedent: WRITE is state 2'd3 (the given code had 2'd4)
  c_wr:   cover property (@(posedge clk) state == 2'd3); // cover the antecedent: does WRITE ever happen?
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (2) begin @(negedge clk) go = 1; @(negedge clk) go = 0; repeat (2) @(negedge clk); ack = 1; @(negedge clk) ack = 0; repeat (2) @(negedge clk); end
    @(negedge clk) go = 1; @(negedge clk) go = 0; repeat (2) @(negedge clk); ack = 1; go = 1; @(negedge clk) begin ack = 1; go = 1; end @(negedge clk) begin ack = 0; go = 0; end
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_we",fails:[205],minPass:1},{assert:"c_wr",matches:3}]},{id:"sva-a1",group:"sva-apps",tag:"Applications \xB7 Lab 1",title:"FSM assertions: one-hot, reset, legal transitions",std:"2012",design:`// Instruction-cycle controller (one-hot): RESET -> FETCH -> DECODE -> EXEC -> STORE -> FETCH.
// DECODE may only be entered from FETCH. A rare path breaks this rule.
module ctrl (input logic clk, rst_n, stall, irq, output logic [4:0] state);
  localparam RESET = 5'b00001, FETCH = 5'b00010, DECODE = 5'b00100, EXEC = 5'b01000, STORE = 5'b10000;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) state <= RESET;
    else case (state)
      RESET:  state <= FETCH;
      FETCH:  state <= stall ? FETCH : DECODE;
      DECODE: state <= EXEC;
      EXEC:   state <= (irq && stall) ? DECODE : STORE;     // bug: re-decodes on irq during a stall
      STORE:  state <= FETCH;
      default: state <= RESET;
    endcase
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, stall = 0, irq = 0; logic [4:0] state;
  localparam RESET = 5'b00001, FETCH = 5'b00010, DECODE = 5'b00100, EXEC = 5'b01000, STORE = 5'b10000;
  ctrl dut (.*);
  // TODO a_onehot: state is always one-hot (out of reset)
  a_onehot: assert property (@(posedge clk) 1'b1);
  // TODO a_reset: leaving reset, the state is RESET
  a_reset: assert property (@(posedge clk) 1'b1);
  // TODO a_decode: DECODE is only entered from FETCH
  a_decode: assert property (@(posedge clk) 1'b1);
  // TODO a_store: EXEC is always followed by STORE
  a_store: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (8) @(negedge clk);
    stall = 1; @(negedge clk) stall = 0;
    repeat (6) @(negedge clk);
    do @(negedge clk); while (state != EXEC);
    stall = 1; irq = 1; @(negedge clk) begin stall = 0; irq = 0; end
    repeat (8) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, stall = 0, irq = 0; logic [4:0] state;
  localparam RESET = 5'b00001, FETCH = 5'b00010, DECODE = 5'b00100, EXEC = 5'b01000, STORE = 5'b10000;
  ctrl dut (.*);
  a_onehot: assert property (@(posedge clk) disable iff (!rst_n) $onehot(state)); // state is always one-hot (out of reset)
  a_reset:  assert property (@(posedge clk) $rose(rst_n) |-> state == RESET); // leaving reset, the state is RESET
  a_decode: assert property (@(posedge clk) disable iff (!rst_n) state == DECODE |-> $past(state) == FETCH); // DECODE is only entered from FETCH
  a_store:  assert property (@(posedge clk) disable iff (!rst_n) state == EXEC |=> state == STORE); // EXEC is always followed by STORE
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (8) @(negedge clk);
    stall = 1; @(negedge clk) stall = 0;
    repeat (6) @(negedge clk);
    do @(negedge clk); while (state != EXEC);
    stall = 1; irq = 1; @(negedge clk) begin stall = 0; irq = 0; end
    repeat (8) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_onehot",fails:[],minPass:1},{assert:"a_reset",fails:[],minPass:1},{assert:"a_decode",fails:[215],minPass:1},{assert:"a_store",fails:[215],minPass:1}]},{id:"sva-a2",group:"sva-apps",tag:"Applications \xB7 Lab 2",title:"FIFO assertions (week 9 exercise)",std:"2012",design:`// 8-deep synchronous FIFO with a show-ahead output (dout is the oldest entry).
// Bug: 'full' is computed one entry too late.
module fifo8 (input logic clk, rst_n, push, pop, input logic [7:0] din,
              output logic [7:0] dout, output logic full, empty, output logic [3:0] count);
  logic [7:0] mem [8]; logic [2:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; count <= 0; end
    else begin
      if (push && count != 8) begin mem[wp] <= din; wp <= wp + 1; end
      if (pop && !empty) rp <= rp + 1;
      count <= count + (push && count != 8) - (pop && !empty);
    end
  assign dout = mem[rp];
  assign empty = count == 0;
  assign full = count == 8 && !push;          // bug: should be count == 8
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout; logic [3:0] count;
  fifo8 dut (.*);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  // TODO a_fe: never full and empty together
  a_fe: assert property (@(posedge clk) 1'b1);
  // TODO a_full: full exactly when 8 entries are stored
  a_full: assert property (@(posedge clk) 1'b1);
  // TODO a_empty: empty exactly when no entry is stored
  a_empty: assert property (@(posedge clk) 1'b1);
  // TODO a_count: count goes up on an accepted push and down on an accepted pop
  a_count: assert property (@(posedge clk) 1'b1);
  property p_first;
    logic [7:0] v;
    (push && empty, v = din) |=> dout == v;
  endproperty
  // TODO a_first: a word pushed into an empty FIFO is at dout in the next cycle
  a_first: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #22 rst_n = 1;                    // two clocks in reset: count is known before the checks start
    @(negedge clk) begin push = 1; din = 8'hA0; end
    @(negedge clk) push = 0;
    @(negedge clk) pop = 1; @(negedge clk) pop = 0;
    for (int k = 1; k <= 10; k++) begin @(negedge clk) begin push = 1; din = 8'hA0 + k; end end
    @(negedge clk) push = 0;
    repeat (10) @(negedge clk) pop = 1;
    @(negedge clk) pop = 0;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout; logic [3:0] count;
  fifo8 dut (.*);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_fe:     assert property (!(full && empty)); // never full and empty together
  a_full:   assert property (full == (count == 8)); // full exactly when 8 entries are stored
  a_empty:  assert property (empty == (count == 0)); // empty exactly when no entry is stored
  a_count:  assert property (count == 4'($past(count) + ($past(push) && !$past(full)) - ($past(pop) && !$past(empty)))); // count goes up on an accepted push and down on an accepted pop
  property p_first;
    logic [7:0] v;
    (push && empty, v = din) |=> dout == v;
  endproperty
  a_first:  assert property (p_first); // a word pushed into an empty FIFO is at dout in the next cycle
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #22 rst_n = 1;                    // two clocks in reset: count is known before the checks start
    @(negedge clk) begin push = 1; din = 8'hA0; end
    @(negedge clk) push = 0;
    @(negedge clk) pop = 1; @(negedge clk) pop = 0;
    for (int k = 1; k <= 10; k++) begin @(negedge clk) begin push = 1; din = 8'hA0 + k; end end
    @(negedge clk) push = 0;
    repeat (10) @(negedge clk) pop = 1;
    @(negedge clk) pop = 0;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_fe",fails:[],minPass:1},{assert:"a_full",fails:[155,165],minPass:1},{assert:"a_empty",fails:[],minPass:1},{assert:"a_count",fails:[165,175],minPass:1},{assert:"a_first",fails:[],minPass:1}]},{id:"sva-a3",group:"sva-apps",tag:"Applications \xB7 Lab 3",title:"Memory assertions: write-then-read and access rules",std:"2012",design:`// 16 x 8 RAM, read data one clock after re. Bug: address bit 3 is stuck at 0 on writes.
module ram16 (input logic clk, we, re, input logic [3:0] addr, input logic [7:0] wdata, output logic [7:0] rdata);
  logic [7:0] m [16];
  always_ff @(posedge clk) begin
    if (we) m[{1'b0, addr[2:0]}] <= wdata;
    if (re) rdata <= m[addr];
  end
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic we = 0, re = 0; logic [3:0] addr = 0; logic [7:0] wdata = 0, rdata;
  ram16 dut (.*);
  // TODO a_mutex: never read and write in the same cycle
  a_mutex: assert property (@(posedge clk) 1'b1);
  // TODO a_addr: no unknown address on an access
  a_addr: assert property (@(posedge clk) 1'b1);
  property p_wr_rd;
    logic [3:0] a; logic [7:0] d;
    (we, a = addr, d = wdata) ##1 (re && addr == a)[->1] |=> rdata == d;
  endproperty
  // TODO a_data: a read of an address returns the last value written there
  a_data: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int k = 0; k < 4; k++) begin @(negedge clk) begin we = 1; addr = k * 3; wdata = 8'h10 + k; end end
    @(negedge clk) we = 0;
    for (int k = 0; k < 4; k++) begin @(negedge clk) begin re = 1; addr = k * 3; end end
    @(negedge clk) re = 0;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic we = 0, re = 0; logic [3:0] addr = 0; logic [7:0] wdata = 0, rdata;
  ram16 dut (.*);
  a_mutex: assert property (@(posedge clk) !(we && re)); // never read and write in the same cycle
  a_addr:  assert property (@(posedge clk) (we || re) |-> !$isunknown(addr)); // no unknown address on an access
  property p_wr_rd;
    logic [3:0] a; logic [7:0] d;
    (we, a = addr, d = wdata) ##1 (re && addr == a)[->1] |=> rdata == d;
  endproperty
  a_data:  assert property (@(posedge clk) p_wr_rd); // a read of an address returns the last value written there
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int k = 0; k < 4; k++) begin @(negedge clk) begin we = 1; addr = k * 3; wdata = 8'h10 + k; end end
    @(negedge clk) we = 0;
    for (int k = 0; k < 4; k++) begin @(negedge clk) begin re = 1; addr = k * 3; end end
    @(negedge clk) re = 0;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_mutex",fails:[],minPass:1},{assert:"a_addr",fails:[],minPass:1},{assert:"a_data",fails:[105],minPass:1}]},{id:"sva-a4",group:"sva-apps",tag:"Applications \xB7 Lab 4",title:"Arbiter: exclusive grants and fairness",std:"2012",design:`// 4-requester round-robin arbiter. Bug: requester 3 is skipped when requester 0 also requests.
module rr_arb (input logic clk, rst_n, input logic [3:0] req, output logic [3:0] gnt);
  logic [1:0] last;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin gnt <= 0; last <= 3; end
    else begin
      gnt <= 0;
      for (int k = 1; k <= 4; k++) begin
        automatic int i = (last + k) % 4;
        if (req[i] && gnt == 0 && !(i == 3 && req[0])) begin gnt[i] <= 1; last <= i; break; end
      end
    end
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0; logic [3:0] req = 0, gnt;
  rr_arb dut (.*);
  // TODO a_one: at most one grant
  a_one: assert property (@(posedge clk) 1'b1);
  // TODO a_req: a grant only to a requester (from the previous cycle)
  a_req: assert property (@(posedge clk) 1'b1);
  for (genvar i = 0; i < 4; i++) begin : fair
    // TODO a_fair: a request is granted within 4 cycles
    a_fair: assert property (@(posedge clk) 1'b1);
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) req = 4'b0110;
    repeat (4) @(negedge clk);
    req = 4'b1000; repeat (2) @(negedge clk);
    req = 4'b1001; repeat (6) @(negedge clk);
    req = 0; repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0; logic [3:0] req = 0, gnt;
  rr_arb dut (.*);
  a_one:  assert property (@(posedge clk) disable iff (!rst_n) $onehot0(gnt)); // at most one grant
  a_req:  assert property (@(posedge clk) disable iff (!rst_n) (gnt & ~$past(req)) == 0); // a grant only to a requester (from the previous cycle)
  for (genvar i = 0; i < 4; i++) begin : fair
    a_fair: assert property (@(posedge clk) disable iff (!rst_n) req[i] |-> ##[1:4] gnt[i]); // a request is granted within 4 cycles
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) req = 4'b0110;
    repeat (4) @(negedge clk);
    req = 4'b1000; repeat (2) @(negedge clk);
    req = 4'b1001; repeat (6) @(negedge clk);
    req = 0; repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_one",fails:[],minPass:1},{assert:"a_req",fails:[],minPass:1},{assert:"tb.fair[0].a_fair",fails:[],minPass:1},{assert:"tb.fair[3].a_fair",fails:[115,125,135,145,155,165],minPass:1}]},{id:"sva-a5",group:"sva-apps",tag:"Applications \xB7 Lab 5",title:"APB protocol assertions",std:"2012",design:`// A small APB master that writes and reads registers. Bug: on a wait state it changes PADDR.
module apb_master (input logic clk, rst_n, start, input logic [1:0] n_wait_ignored,
                   output logic psel, penable, pwrite, output logic [7:0] paddr, pwdata, input logic pready);
  typedef enum logic [1:0] {IDLE, SETUP, ACCESS} st_t;
  st_t st; logic [7:0] a;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin st <= IDLE; psel <= 0; penable <= 0; a <= 8'h10; end
    else case (st)
      IDLE:   if (start) begin st <= SETUP; psel <= 1; penable <= 0; paddr <= a; pwrite <= a[4]; pwdata <= a + 1; end
      SETUP:  begin st <= ACCESS; penable <= 1; end
      ACCESS: if (pready) begin st <= IDLE; psel <= 0; penable <= 0; a <= a + 8'h04; end
              else if (a == 8'h18) paddr <= paddr + 1;        // bug
    endcase
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, start = 0, psel, penable, pwrite, pready = 0; logic [7:0] paddr, pwdata;
  apb_master m (.clk, .rst_n, .start, .n_wait_ignored(2'd0), .psel, .penable, .pwrite, .paddr, .pwdata, .pready);
  // slave: 0, 1 or 2 wait states
  int ws = 0;
  always @(negedge clk) pready <= psel && penable && (ws-- <= 0);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  // TODO a_setup: the first cycle of a transfer is SETUP (penable low)
  a_setup: assert property (@(posedge clk) 1'b1);
  // TODO a_access: SETUP is always followed by ACCESS
  a_access: assert property (@(posedge clk) 1'b1);
  // TODO a_stable: address and control hold during wait states
  a_stable: assert property (@(posedge clk) 1'b1);
  // TODO a_end: after the last ACCESS cycle, penable drops
  a_end: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 4; k++) begin
      ws = k % 3; @(negedge clk) start = 1; @(negedge clk) start = 0;
      wait (!psel); @(negedge clk);
    end
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, start = 0, psel, penable, pwrite, pready = 0; logic [7:0] paddr, pwdata;
  apb_master m (.clk, .rst_n, .start, .n_wait_ignored(2'd0), .psel, .penable, .pwrite, .paddr, .pwdata, .pready);
  // slave: 0, 1 or 2 wait states
  int ws = 0;
  always @(negedge clk) pready <= psel && penable && (ws-- <= 0);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_setup:  assert property ($rose(psel) |-> !penable); // the first cycle of a transfer is SETUP (penable low)
  a_access: assert property (psel && !penable |=> psel && penable); // SETUP is always followed by ACCESS
  a_stable: assert property (psel && penable && !pready |=> $stable(paddr) && $stable(pwrite) && $stable(pwdata)); // address and control hold during wait states
  a_end:    assert property (psel && penable && pready |=> !penable); // after the last ACCESS cycle, penable drops
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 4; k++) begin
      ws = k % 3; @(negedge clk) start = 1; @(negedge clk) start = 0;
      wait (!psel); @(negedge clk);
    end
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_setup",fails:[],minPass:1},{assert:"a_access",fails:[],minPass:1},{assert:"a_stable",fails:[145,155],minPass:1},{assert:"a_end",fails:[],minPass:1}]},{id:"sva-a6",group:"sva-apps",tag:"Applications \xB7 Lab 6",title:"Four-phase handshake ordering",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  bit req = 0, ack = 0;     // 2-state: no X before the first clock
  // TODO a_r_up: req rises only while ack is low
  a_r_up: assert property (@(posedge clk) 1'b1);
  // TODO a_a_up: ack rises only while req is high
  a_a_up: assert property (@(posedge clk) 1'b1);
  // TODO a_r_down: req falls only after ack is high
  a_r_down: assert property (@(posedge clk) 1'b1);
  // TODO a_a_down: ack falls only after req is low
  a_a_down: assert property (@(posedge clk) 1'b1);
  // TODO a_live: ack within 6 cycles of req
  a_live: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin req = 0; ack = 0; end   // cycle 0, t=15
    @(negedge clk) begin req = 1; end   // cycle 1, t=25
    @(negedge clk);                  // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk) begin ack = 1; end   // cycle 4, t=55
    @(negedge clk) begin req = 0; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin ack = 0; end   // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk) begin req = 1; end   // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin ack = 1; end   // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk) begin req = 0; end   // cycle 15, t=165
    @(negedge clk) begin ack = 0; end   // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk) begin req = 1; end   // cycle 20, t=215
    @(negedge clk) begin ack = 1; end   // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk) begin ack = 0; end   // cycle 23, t=245
    @(negedge clk) begin req = 0; end   // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk);                  // cycle 30, t=315
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  bit req = 0, ack = 0;     // 2-state: no X before the first clock
  a_r_up:   assert property (@(posedge clk) $rose(req) |-> !ack); // req rises only while ack is low
  a_a_up:   assert property (@(posedge clk) $rose(ack) |-> req); // ack rises only while req is high
  a_r_down: assert property (@(posedge clk) $fell(req) |-> ack); // req falls only after ack is high
  a_a_down: assert property (@(posedge clk) $fell(ack) |-> !req); // ack falls only after req is low
  a_live:   assert property (@(posedge clk) $rose(req) |-> ##[1:6] ack); // ack within 6 cycles of req
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // cycle i is sampled at time 15 + 10*i
    @(negedge clk) begin req = 0; ack = 0; end   // cycle 0, t=15
    @(negedge clk) begin req = 1; end   // cycle 1, t=25
    @(negedge clk);                  // cycle 2, t=35
    @(negedge clk);                  // cycle 3, t=45
    @(negedge clk) begin ack = 1; end   // cycle 4, t=55
    @(negedge clk) begin req = 0; end   // cycle 5, t=65
    @(negedge clk);                  // cycle 6, t=75
    @(negedge clk);                  // cycle 7, t=85
    @(negedge clk) begin ack = 0; end   // cycle 8, t=95
    @(negedge clk);                  // cycle 9, t=105
    @(negedge clk);                  // cycle 10, t=115
    @(negedge clk) begin req = 1; end   // cycle 11, t=125
    @(negedge clk);                  // cycle 12, t=135
    @(negedge clk) begin ack = 1; end   // cycle 13, t=145
    @(negedge clk);                  // cycle 14, t=155
    @(negedge clk) begin req = 0; end   // cycle 15, t=165
    @(negedge clk) begin ack = 0; end   // cycle 16, t=175
    @(negedge clk);                  // cycle 17, t=185
    @(negedge clk);                  // cycle 18, t=195
    @(negedge clk);                  // cycle 19, t=205
    @(negedge clk) begin req = 1; end   // cycle 20, t=215
    @(negedge clk) begin ack = 1; end   // cycle 21, t=225
    @(negedge clk);                  // cycle 22, t=235
    @(negedge clk) begin ack = 0; end   // cycle 23, t=245
    @(negedge clk) begin req = 0; end   // cycle 24, t=255
    @(negedge clk);                  // cycle 25, t=265
    @(negedge clk);                  // cycle 26, t=275
    @(negedge clk);                  // cycle 27, t=285
    @(negedge clk);                  // cycle 28, t=295
    @(negedge clk);                  // cycle 29, t=305
    @(negedge clk);                  // cycle 30, t=315
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_r_up",fails:[],minPass:1},{assert:"a_a_up",fails:[],minPass:1},{assert:"a_r_down",fails:[255],minPass:1},{assert:"a_a_down",fails:[245],minPass:1},{assert:"a_live",fails:[],minPass:1}]},{id:"sva-a7",group:"sva-apps",tag:"Applications \xB7 Lab 7",title:"UART frame checker",std:"2012",design:`// UART transmitter: 4 clocks per bit, 8N1 frames (start 0, 8 data bits LSB first, stop 1).
// Bug: for the byte 8'hC3 it sends a stop bit of 0.
module uart_tx (input logic clk, rst_n, send, input logic [7:0] data, output logic tx, busy);
  logic [3:0] bitn; logic [1:0] ph; logic [9:0] sh;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin tx <= 1; busy <= 0; end
    else if (!busy) begin if (send) begin busy <= 1; sh <= {(data == 8'hC3) ? 1'b0 : 1'b1, data, 1'b0}; bitn <= 0; ph <= 0; end end
    else begin
      tx <= sh[0];
      ph <= ph + 1;
      if (ph == 3) begin sh <= {1'b1, sh[9:1]}; bitn <= bitn + 1; if (bitn == 9) begin busy <= 0; tx <= 1; end end
    end
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, send = 0, tx, busy; logic [7:0] data = 0;
  uart_tx dut (.*);
  // Auxiliary code: fcnt counts the clocks of a frame (0 = line idle), so that falling
  // edges inside the data bits are not taken for start bits.
  int fcnt = 0; logic tx_q = 1;
  always @(posedge clk) begin tx_q <= tx; if (fcnt == 0) begin if (tx_q && !tx) fcnt <= 1; end else fcnt <= (fcnt == 39) ? 0 : fcnt + 1; end
  // TODO a_start: a start bit (a fall while idle) lasts a whole bit time (4 clocks)
  a_start: assert property (@(posedge clk) 1'b1);
  // TODO a_stop: the stop bit (bit 9) is high: 36 clocks after the start edge
  a_stop: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 3; k++) begin
      @(negedge clk) begin send = 1; data = k == 0 ? 8'h5A : k == 1 ? 8'hC3 : 8'h0F; end
      @(negedge clk) send = 0;
      wait (!busy); repeat (2) @(negedge clk);
    end
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, send = 0, tx, busy; logic [7:0] data = 0;
  uart_tx dut (.*);
  // Auxiliary code: fcnt counts the clocks of a frame (0 = line idle), so that falling
  // edges inside the data bits are not taken for start bits.
  int fcnt = 0; logic tx_q = 1;
  always @(posedge clk) begin tx_q <= tx; if (fcnt == 0) begin if (tx_q && !tx) fcnt <= 1; end else fcnt <= (fcnt == 39) ? 0 : fcnt + 1; end
  a_start: assert property (@(posedge clk) disable iff (!rst_n) $fell(tx) && fcnt == 0 |-> !tx[*4]); // a start bit (a fall while idle) lasts a whole bit time (4 clocks)
  a_stop:  assert property (@(posedge clk) disable iff (!rst_n) $fell(tx) && fcnt == 0 |-> ##36 tx[*4]); // the stop bit (bit 9) is high: 36 clocks after the start edge
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 3; k++) begin
      @(negedge clk) begin send = 1; data = k == 0 ? 8'h5A : k == 1 ? 8'hC3 : 8'h0F; end
      @(negedge clk) send = 0;
      wait (!busy); repeat (2) @(negedge clk);
    end
    $finish;
  end
endmodule
`},check:[{assert:"a_start",fails:[],minPass:1},{assert:"a_stop",fails:[835],minPass:1}]},{id:"sva-a8",group:"sva-apps",tag:"Applications \xB7 Lab 8",title:"Program counter: load, increment, hold",std:"2012",design:`// Program counter from the DesignCon DSP example. Bug: an increment while 'hold_req' is high is lost.
module pc (input logic clk, rst_n, load, inc, hold_req, input logic [7:0] d, output logic [7:0] pc_cnt);
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) pc_cnt <= 0;
    else if (load) pc_cnt <= d;
    else if (inc && !hold_req) pc_cnt <= pc_cnt + 1;
endmodule
`,tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, load = 0, inc = 0, hold_req = 0; logic [7:0] d = 0, pc_cnt;
  pc dut (.*);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  // TODO a_load: load: pc_cnt takes d
  a_load: assert property (@(posedge clk) 1'b1);
  // TODO a_inc: increment (with 8-bit wrap) when not loading
  a_inc: assert property (@(posedge clk) 1'b1);
  // TODO a_hold: otherwise pc_cnt holds
  a_hold: assert property (@(posedge clk) 1'b1);
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) begin load = 1; d = 8'hFD; end
    @(negedge clk) begin load = 0; inc = 1; end
    repeat (5) @(negedge clk);
    inc = 0; repeat (2) @(negedge clk);
    inc = 1; hold_req = 1; @(negedge clk) hold_req = 0;
    repeat (2) @(negedge clk); inc = 0;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic rst_n = 0, load = 0, inc = 0, hold_req = 0; logic [7:0] d = 0, pc_cnt;
  pc dut (.*);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_load: assert property (load |=> pc_cnt == $past(d)); // load: pc_cnt takes d
  a_inc:  assert property (inc && !load |=> pc_cnt == 8'($past(pc_cnt) + 1)); // increment (with 8-bit wrap) when not loading
  a_hold: assert property (!load && !inc |=> $stable(pc_cnt)); // otherwise pc_cnt holds
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) begin load = 1; d = 8'hFD; end
    @(negedge clk) begin load = 0; inc = 1; end
    repeat (5) @(negedge clk);
    inc = 0; repeat (2) @(negedge clk);
    inc = 1; hold_req = 1; @(negedge clk) hold_req = 0;
    repeat (2) @(negedge clk); inc = 0;
    repeat (3) @(negedge clk);
    $finish;
  end
endmodule
`},check:[{assert:"a_load",fails:[],minPass:1},{assert:"a_inc",fails:[115],minPass:1},{assert:"a_hold",fails:[],minPass:1}]},{id:"cov-1",group:"cov-fc",tag:"Coverage \xB7 Lab 1",title:"Coverpoints and automatic bins",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [2:0] opcode = 0; logic [7:0] addr = 0;
  covergroup cg_cmd @(posedge clk);
    cp_op: coverpoint opcode;              // automatic bins: one per value (8)
    // TODO: add cp_addr: coverpoint addr, with option.auto_bin_max = 4 (4 bins of 64 addresses)
  endgroup
  cg_cmd cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (12) @(negedge clk) begin opcode = $urandom_range(0, 7); addr = $urandom_range(0, 150); end
    @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [2:0] opcode = 0; logic [7:0] addr = 0;
  covergroup cg_cmd @(posedge clk);
    cp_op: coverpoint opcode;
    cp_addr: coverpoint addr { option.auto_bin_max = 4; }
  endgroup
  cg_cmd cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    repeat (12) @(negedge clk) begin opcode = $urandom_range(0, 7); addr = $urandom_range(0, 150); end
    @(negedge clk);
    $finish;
  end
endmodule
`},check:[{cg:"cg_cmd",coverage:62.5,bins:{cp_op:8,cp_addr:4}}]},{id:"cov-2",group:"cov-fc",tag:"Coverage \xB7 Lab 2",title:"Explicit bins: values, ranges and arrays",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [7:0] a = 0; logic [1:0] op = 0;   // op: 0 ADD, 1 SUB, 2 AND, 3 OR
  covergroup cg_alu @(posedge clk);
    // TODO cp_a: bins zero = {0}; small = [1:15]; big[3] = [16:254] (3 bins); max = {255}
    cp_a: coverpoint a;
    // TODO cp_op: one bin per operation with bins ops[] = {[0:3]}
    cp_op: coverpoint op;
  endgroup
  cg_alu cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int k = 0; k < 6; k++) begin
      @(negedge clk) begin a = k == 0 ? 0 : k == 1 ? 7 : k == 2 ? 40 : k == 3 ? 200 : k == 4 ? 255 : 9; op = k % 3; end
    end
    @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [7:0] a = 0; logic [1:0] op = 0;   // op: 0 ADD, 1 SUB, 2 AND, 3 OR
  covergroup cg_alu @(posedge clk);
    cp_a: coverpoint a {
      bins zero   = {0};
      bins small  = {[1:15]};
      bins big[3] = {[16:254]};
      bins max    = {255};
    }
    cp_op: coverpoint op { bins ops[] = {[0:3]}; }
  endgroup
  cg_alu cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int k = 0; k < 6; k++) begin
      @(negedge clk) begin a = k == 0 ? 0 : k == 1 ? 7 : k == 2 ? 40 : k == 3 ? 200 : k == 4 ? 255 : 9; op = k % 3; end
    end
    @(negedge clk);
    $finish;
  end
endmodule
`},check:[{cg:"cg_alu",coverage:79.17,bins:{cp_a:6,cp_op:4}}]},{id:"cov-3",group:"cov-fc",tag:"Coverage \xB7 Lab 3",title:"Transition bins: covering a state machine",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  typedef enum logic [1:0] {IDLE, SETUP, ACCESS} st_t; st_t st = IDLE;
  st_t seq [14] = '{IDLE, SETUP, ACCESS, IDLE, SETUP, ACCESS, ACCESS, SETUP, ACCESS, IDLE, IDLE, ACCESS, IDLE, IDLE};
  covergroup cg_fsm @(posedge clk);
    // TODO cp_tr: transition bins
    //   start = (IDLE => SETUP); go = (SETUP => ACCESS); done = (ACCESS => IDLE);
    //   b2b = (ACCESS => SETUP); wait2 = (ACCESS [*3]) (two wait states: 3 ACCESS cycles in a row)
    //   illegal_bins skip = (IDLE => ACCESS);
    cp_tr: coverpoint st;
  endgroup
  cg_fsm cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // IDLE SETUP ACCESS IDLE | SETUP ACCESS ACCESS SETUP ACCESS IDLE | IDLE ACCESS (illegal) IDLE
    foreach (seq[k]) @(negedge clk) st = seq[k];
    @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  typedef enum logic [1:0] {IDLE, SETUP, ACCESS} st_t; st_t st = IDLE;
  st_t seq [14] = '{IDLE, SETUP, ACCESS, IDLE, SETUP, ACCESS, ACCESS, SETUP, ACCESS, IDLE, IDLE, ACCESS, IDLE, IDLE};
  covergroup cg_fsm @(posedge clk);
    cp_tr: coverpoint st {
      bins start = (IDLE => SETUP);
      bins go    = (SETUP => ACCESS);
      bins done  = (ACCESS => IDLE);
      bins b2b   = (ACCESS => SETUP);
      bins wait2 = (ACCESS [*3]);
      illegal_bins skip = (IDLE => ACCESS);
    }
  endgroup
  cg_fsm cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // IDLE SETUP ACCESS IDLE | SETUP ACCESS ACCESS SETUP ACCESS IDLE | IDLE ACCESS (illegal) IDLE
    foreach (seq[k]) @(negedge clk) st = seq[k];
    @(negedge clk);
    $finish;
  end
endmodule
`},check:[{cg:"cg_fsm",coverage:80,bins:{cp_tr:5}}]},{id:"cov-4",group:"cov-fc",tag:"Coverage \xB7 Lab 4",title:"wildcard, ignore_bins and illegal_bins",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [3:0] cmd = 0;   // 1xxx: writes, 0xxx: reads; 4'b0111 and 4'b1111 reserved; 4'b0000 is NOP
  logic [3:0] cmds [10] = '{4'h0, 4'h1, 4'h2, 4'h9, 4'h0, 4'h3, 4'hF, 4'h4, 4'h5, 4'h0};
  covergroup cg_cmd @(posedge clk);
    // TODO: wildcard bins wr = {4'b1???}; wildcard bins rd = {4'b0???};
    //       ignore_bins nop = {4'b0000}; illegal_bins rsvd = {4'b0111, 4'b1111};
    //       bins each_rd[] = {[1:6]};
    cp_cmd: coverpoint cmd;
  endgroup
  cg_cmd cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    foreach (cmds[k]) @(negedge clk) cmd = cmds[k];
    @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [3:0] cmd = 0;   // 1xxx: writes, 0xxx: reads; 4'b0111 and 4'b1111 reserved; 4'b0000 is NOP
  logic [3:0] cmds [10] = '{4'h0, 4'h1, 4'h2, 4'h9, 4'h0, 4'h3, 4'hF, 4'h4, 4'h5, 4'h0};
  covergroup cg_cmd @(posedge clk);
    cp_cmd: coverpoint cmd {
      wildcard bins wr = {4'b1???};
      wildcard bins rd = {4'b0???};
      bins each_rd[] = {[1:6]};
      ignore_bins nop = {4'b0000};
      illegal_bins rsvd = {4'b0111, 4'b1111};
    }
  endgroup
  cg_cmd cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    foreach (cmds[k]) @(negedge clk) cmd = cmds[k];
    @(negedge clk);
    $finish;
  end
endmodule
`},check:[{cg:"cg_cmd",coverage:87.5,bins:{cp_cmd:8}}]},{id:"cov-5",group:"cov-fc",tag:"Coverage \xB7 Lab 5",title:"Cross coverage and binsof",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [1:0] btype = 0; logic [2:0] blen = 0; logic wr = 0;   // btype 0 FIXED, 1 INCR, 2 WRAP; blen 0..7 = 1..8 beats
  covergroup cg_burst @(posedge clk);
    cp_type: coverpoint btype { bins fixed = {0}; bins incr = {1}; bins wrap = {2}; }
    cp_len:  coverpoint blen  { bins one = {0}; bins two_four = {[1:3]}; bins long = {[4:7]}; }
    cp_dir:  coverpoint wr;
    // TODO x_tl: cross cp_type, cp_len; WRAP bursts of one beat are illegal in this protocol:
    //   ignore_bins wrap1 = binsof(cp_type.wrap) && binsof(cp_len.one);
    // TODO x_td: cross cp_type, cp_dir;
  endgroup
  cg_burst cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int k = 0; k < 14; k++) @(negedge clk) begin btype = k % 3; blen = (k * 5) % 8; wr = k[0] ^ k[2]; end
    @(negedge clk);
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [1:0] btype = 0; logic [2:0] blen = 0; logic wr = 0;   // btype 0 FIXED, 1 INCR, 2 WRAP; blen 0..7 = 1..8 beats
  covergroup cg_burst @(posedge clk);
    cp_type: coverpoint btype { bins fixed = {0}; bins incr = {1}; bins wrap = {2}; }
    cp_len:  coverpoint blen  { bins one = {0}; bins two_four = {[1:3]}; bins long = {[4:7]}; }
    cp_dir:  coverpoint wr;
    x_tl: cross cp_type, cp_len { ignore_bins wrap1 = binsof(cp_type.wrap) && binsof(cp_len.one); }
    x_td: cross cp_type, cp_dir;
  endgroup
  cg_burst cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int k = 0; k < 14; k++) @(negedge clk) begin btype = k % 3; blen = (k * 5) % 8; wr = k[0] ^ k[2]; end
    @(negedge clk);
    $finish;
  end
endmodule
`},check:[{cg:"cg_burst",coverage:95,bins:{cp_type:3,cp_len:3,cp_dir:2,x_tl:8,x_td:6}}]},{id:"cov-6",group:"cov-fc",tag:"Coverage \xB7 Lab 6",title:"Options, instances and get_coverage",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [1:0] p0 = 0, p1 = 0;
  logic [1:0] s0 [8] = '{0, 1, 2, 3, 0, 1, 2, 2};
  logic [1:0] s1 [8] = '{3, 3, 3, 1, 1, 0, 0, 0};
  covergroup cg_port(ref logic [1:0] v, input string nm);
    // TODO: option.per_instance = 1; option.at_least = 2;  (a bin counts after 2 hits)
    cp_v: coverpoint v;
  endgroup
  cg_port c0 = new(p0, "port0");
  cg_port c1 = new(p1, "port1");
  always @(posedge clk) begin c0.sample(); c1.sample(); end

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    foreach (s0[k]) @(negedge clk) begin p0 = s0[k]; p1 = s1[k]; end
    @(negedge clk);
    $display("type coverage %0.1f%%, port0 %0.1f%%, port1 %0.1f%%", c0.get_coverage(), c0.get_inst_coverage(), c1.get_inst_coverage());
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [1:0] p0 = 0, p1 = 0;
  logic [1:0] s0 [8] = '{0, 1, 2, 3, 0, 1, 2, 2};
  logic [1:0] s1 [8] = '{3, 3, 3, 1, 1, 0, 0, 0};
  covergroup cg_port(ref logic [1:0] v, input string nm);
    option.per_instance = 1;
    option.at_least = 2;
    cp_v: coverpoint v;
  endgroup
  cg_port c0 = new(p0, "port0");
  cg_port c1 = new(p1, "port1");
  always @(posedge clk) begin c0.sample(); c1.sample(); end

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    foreach (s0[k]) @(negedge clk) begin p0 = s0[k]; p1 = s1[k]; end
    @(negedge clk);
    $display("type coverage %0.1f%%, port0 %0.1f%%, port1 %0.1f%%", c0.get_coverage(), c0.get_inst_coverage(), c1.get_inst_coverage());
    $finish;
  end
endmodule
`},check:[{cg:"cg_port",coverage:75,bins:{cp_v:4}}]},{id:"cov-7",group:"cov-fc",tag:"Coverage \xB7 Lab 7",title:"Sampling transactions: sample() arguments and iff",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [7:0] addr; logic wr, err; int n = 0;
  // A monitor reports each completed transfer. Sample coverage once per transfer, and not for errored ones.
  covergroup cg_tr with function sample(logic [7:0] a, logic w, logic e);
    // TODO: cp_reg: coverpoint a iff (!e) { bins ctrl = {8'h00}; bins stat = {8'h04}; bins data[] = {8'h10, 8'h14, 8'h18}; }
    // TODO: cp_dir: coverpoint w iff (!e);
    cp_reg: coverpoint a;
  endgroup
  cg_tr cov = new;
  task automatic transfer(logic [7:0] a, logic w, logic e);
    @(negedge clk) begin addr = a; wr = w; err = e; end
    cov.sample(a, w, e);
  endtask

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    transfer(8'h00, 1, 0); transfer(8'h04, 0, 0); transfer(8'h10, 1, 0);
    transfer(8'h14, 0, 1);      // errored: must not count
    transfer(8'h18, 0, 0); transfer(8'h10, 0, 0);
    $display("coverage %0.1f%%", cov.get_coverage());
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [7:0] addr; logic wr, err; int n = 0;
  covergroup cg_tr with function sample(logic [7:0] a, logic w, logic e);
    cp_reg: coverpoint a iff (!e) { bins ctrl = {8'h00}; bins stat = {8'h04}; bins data[] = {8'h10, 8'h14, 8'h18}; }
    cp_dir: coverpoint w iff (!e);
  endgroup
  cg_tr cov = new;
  task automatic transfer(logic [7:0] a, logic w, logic e);
    @(negedge clk) begin addr = a; wr = w; err = e; end
    cov.sample(a, w, e);
  endtask

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    transfer(8'h00, 1, 0); transfer(8'h04, 0, 0); transfer(8'h10, 1, 0);
    transfer(8'h14, 0, 1);      // errored: must not count
    transfer(8'h18, 0, 0); transfer(8'h10, 0, 0);
    $display("coverage %0.1f%%", cov.get_coverage());
    $finish;
  end
endmodule
`},check:[{cg:"cg_tr",coverage:90,bins:{cp_reg:5,cp_dir:2}}]},{id:"cov-8",group:"cov-fc",tag:"Coverage \xB7 Lab 8",title:"A coverage model for APB (week 9 exercise)",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  
  // APB master model: one transfer with 'ws' wait states
  logic psel = 0, penable = 0, pwrite = 0, pready = 0; logic [7:0] paddr = 0;
  int ws_cnt;
  task automatic apb(logic [7:0] a, logic w, int ws);
    @(negedge clk) begin psel = 1; penable = 0; paddr = a; pwrite = w; end
    @(negedge clk) penable = 1; pready = (ws == 0);
    for (int k = 1; k <= ws; k++) @(negedge clk) pready = (k == ws);
    @(negedge clk) begin psel = 0; penable = 0; pready = 0; end
  endtask
  // wait states of the current transfer, counted by a small monitor
  always @(posedge clk) if (psel && penable) ws_cnt <= pready ? 0 : ws_cnt + 1; else ws_cnt <= 0;
  // TODO: cg_apb sampled at the end of every transfer (psel && penable && pready):
  //   cp_reg:  regions CTRL 8'h00, STAT 8'h04, FIFO [8'h10:8'h1F], other: default
  //   cp_dir:  read / write
  //   cp_wait: 0, 1, 2, 3+ wait states (ws_cnt)
  //   x_reg_dir: cross cp_reg, cp_dir; STAT is read-only: ignore STAT writes
  covergroup cg_apb @(posedge clk iff (psel && penable && pready));
    cp_dir: coverpoint pwrite;
  endgroup
  cg_apb cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    apb(8'h00, 1, 0); apb(8'h04, 0, 1); apb(8'h10, 1, 2); apb(8'h14, 0, 0);
    apb(8'h00, 0, 1); apb(8'h80, 1, 0); apb(8'h1C, 1, 0);
    $display("APB coverage %0.1f%%", cov.get_coverage());
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  
  // APB master model: one transfer with 'ws' wait states
  logic psel = 0, penable = 0, pwrite = 0, pready = 0; logic [7:0] paddr = 0;
  int ws_cnt;
  task automatic apb(logic [7:0] a, logic w, int ws);
    @(negedge clk) begin psel = 1; penable = 0; paddr = a; pwrite = w; end
    @(negedge clk) penable = 1; pready = (ws == 0);
    for (int k = 1; k <= ws; k++) @(negedge clk) pready = (k == ws);
    @(negedge clk) begin psel = 0; penable = 0; pready = 0; end
  endtask
  // wait states of the current transfer, counted by a small monitor
  always @(posedge clk) if (psel && penable) ws_cnt <= pready ? 0 : ws_cnt + 1; else ws_cnt <= 0;
  covergroup cg_apb @(posedge clk iff (psel && penable && pready));
    cp_reg:  coverpoint paddr { bins ctrl = {8'h00}; bins stat = {8'h04}; bins fifo = {[8'h10:8'h1F]}; bins other = default; }
    cp_dir:  coverpoint pwrite { bins rd = {0}; bins wr = {1}; }
    cp_wait: coverpoint ws_cnt { bins w0 = {0}; bins w1 = {1}; bins w2 = {2}; bins w3plus = {[3:$]}; }
    x_reg_dir: cross cp_reg, cp_dir { ignore_bins stat_wr = binsof(cp_reg.stat) && binsof(cp_dir.wr); }
  endgroup
  cg_apb cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    apb(8'h00, 1, 0); apb(8'h04, 0, 1); apb(8'h10, 1, 2); apb(8'h14, 0, 0);
    apb(8'h00, 0, 1); apb(8'h80, 1, 0); apb(8'h1C, 1, 0);
    $display("APB coverage %0.1f%%", cov.get_coverage());
    $finish;
  end
endmodule
`},check:[{cg:"cg_apb",coverage:93.75,bins:{cp_reg:3,cp_dir:2,cp_wait:4,x_reg_dir:5}}]},{id:"cov-9",group:"cov-fc",tag:"Coverage \xB7 Lab 9",title:"Coverage-driven closure",std:"2012",design:"",tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [7:0] len = 0; logic wr = 0;
  covergroup cg_pkt @(posedge clk);
    cp_len: coverpoint len { bins zero = {0}; bins small = {[1:15]}; bins mid = {[16:239]}; bins big = {[240:254]}; bins max = {255}; }
    cp_wr: coverpoint wr;
    x: cross cp_len, cp_wr;
  endgroup
  cg_pkt cov = new;

  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // Random packets until coverage stops improving.
    for (int k = 0; k < 200 && cov.get_coverage() < 100; k++)
      @(negedge clk) begin len = $urandom_range(1, 254); wr = $urandom_range(0, 1); end
    // TODO: the random test never reaches some bins (look at the report). Add directed packets
    // here (len = ...; wr = ...;) to close the holes.
    @(negedge clk);
    $display("coverage %0.1f%%", cov.get_coverage());
    if (cov.get_coverage() >= 100) $display("PASS: coverage closed"); else $display("FAIL: coverage is not 100%%");
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0;
  always #5 clk = ~clk;          // posedges at 5, 15, 25, ...
  logic [7:0] len = 0; logic wr = 0;
  covergroup cg_pkt @(posedge clk);
    cp_len: coverpoint len { bins zero = {0}; bins small = {[1:15]}; bins mid = {[16:239]}; bins big = {[240:254]}; bins max = {255}; }
    cp_wr: coverpoint wr;
    x: cross cp_len, cp_wr;
  endgroup
  cg_pkt cov = new;

  logic [7:0] corner [4] = '{0, 0, 255, 255};
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // Random packets until coverage stops improving.
    for (int k = 0; k < 200 && cov.get_coverage() < 100; k++)
      @(negedge clk) begin len = $urandom_range(1, 254); wr = $urandom_range(0, 1); end
    // Directed packets for the corners random stimulus cannot reach:
    foreach (corner[k]) @(negedge clk) begin len = corner[k]; wr = k[0]; end
    @(negedge clk);
    $display("coverage %0.1f%%", cov.get_coverage());
    if (cov.get_coverage() >= 100) $display("PASS: coverage closed"); else $display("FAIL: coverage is not 100%%");
    $finish;
  end
endmodule
`}},{id:"dv-1",group:"dv-w7",tag:"Week 7 \xB7 Lab 1",title:"Clock generation three ways",std:"2012",design:"",tb:`\`timescale 1ns/1ps
// Generate three clocks, each a different way, and let the checker measure them.
//   clk_a: 100 MHz, 50% duty   -- an always block with a delay
//   clk_b: programmable frequency FREQ_MHZ (real), 50% duty -- initial + forever
//   clk_c: 40 MHz, 25% duty (high 25% of the period) -- a task with two delays
module tb;
  parameter real FREQ_MHZ = 125.0;
  logic clk_a = 0, clk_b = 0, clk_c = 0;
  // TODO clk_a

  // TODO clk_b: period in ns is 1000.0 / FREQ_MHZ

  // TODO clk_c

  // ---- checker: measures period and high time of a clock (do not edit) ----
  int errors = 0;
  task automatic edge_of(int i, bit rise);
    case (i) 0: if (rise) @(posedge clk_a); else @(negedge clk_a);
             1: if (rise) @(posedge clk_b); else @(negedge clk_b);
             default: if (rise) @(posedge clk_c); else @(negedge clk_c); endcase
  endtask
  task automatic measure(string name, int c, input real period, input real high);
    realtime r1, f1, r2;
    edge_of(c, 1); r1 = $realtime; edge_of(c, 0); f1 = $realtime; edge_of(c, 1); r2 = $realtime;
    $display("%s: period %0.3f ns, high %0.3f ns", name, r2 - r1, f1 - r1);
    if ((r2 - r1) - period > 0.01 || period - (r2 - r1) > 0.01 || (f1 - r1) - high > 0.01 || high - (f1 - r1) > 0.01) begin
      $display("  expected period %0.3f ns, high %0.3f ns", period, high); errors++;
    end
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    fork
      measure("clk_a", 0, 10.0, 5.0);
      measure("clk_b", 1, 1000.0 / FREQ_MHZ, 500.0 / FREQ_MHZ);
      measure("clk_c", 2, 25.0, 6.25);
    join
    #10;
    if (errors == 0) $display("PASS: all three clocks are right"); else $display("FAIL: %0d clock(s) wrong", errors);
    $finish;
  end
  initial #2000 begin $display("FAIL: a clock never toggles"); $finish; end
endmodule
`,solution:{tb:`\`timescale 1ns/1ps
module tb;
  parameter real FREQ_MHZ = 125.0;
  logic clk_a = 0, clk_b = 0, clk_c = 0;
  always #5 clk_a = ~clk_a;
  initial forever #(500.0 / FREQ_MHZ) clk_b = ~clk_b;
  task automatic duty_clock(ref logic c, input real period, input real duty);
    forever begin c = 1; #(period * duty); c = 0; #(period * (1.0 - duty)); end
  endtask
  initial duty_clock(clk_c, 25.0, 0.25);

  int errors = 0;
  task automatic edge_of(int i, bit rise);
    case (i) 0: if (rise) @(posedge clk_a); else @(negedge clk_a);
             1: if (rise) @(posedge clk_b); else @(negedge clk_b);
             default: if (rise) @(posedge clk_c); else @(negedge clk_c); endcase
  endtask
  task automatic measure(string name, int c, input real period, input real high);
    realtime r1, f1, r2;
    edge_of(c, 1); r1 = $realtime; edge_of(c, 0); f1 = $realtime; edge_of(c, 1); r2 = $realtime;
    $display("%s: period %0.3f ns, high %0.3f ns", name, r2 - r1, f1 - r1);
    if ((r2 - r1) - period > 0.01 || period - (r2 - r1) > 0.01 || (f1 - r1) - high > 0.01 || high - (f1 - r1) > 0.01) begin
      $display("  expected period %0.3f ns, high %0.3f ns", period, high); errors++;
    end
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    fork
      measure("clk_a", 0, 10.0, 5.0);
      measure("clk_b", 1, 1000.0 / FREQ_MHZ, 500.0 / FREQ_MHZ);
      measure("clk_c", 2, 25.0, 6.25);
    join
    #10;
    if (errors == 0) $display("PASS: all three clocks are right"); else $display("FAIL: %0d clock(s) wrong", errors);
    $finish;
  end
  initial #2000 begin $display("FAIL: a clock never toggles"); $finish; end
endmodule
`}},{id:"dv-2",group:"dv-w7",tag:"Week 7 \xB7 Lab 2",title:"Reset sequences with three resets",std:"2012",design:"",tb:`\`timescale 1ns/1ps
// Generate the three resets of this waveform (times in ns, clk = 100 MHz):
//   por_n     : low from 0, high at 23 (asynchronous, power-on reset)
//   sys_rst_n : low from 0, goes high on the 2nd rising clk edge AFTER por_n is high (synchronous release)
//   soft_rst  : active-high pulse, exactly 3 clock cycles, starting at the first rising edge at or after 100 ns
module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic por_n, sys_rst_n, soft_rst;
  // TODO: generate por_n, sys_rst_n and soft_rst

  // ---- checker (do not edit) ----
  realtime t_por = -1, t_sys = -1, t_soft_on = -1, t_soft_off = -1;
  always @(posedge por_n) t_por = $realtime;
  always @(posedge sys_rst_n) t_sys = $realtime;
  always @(posedge soft_rst) t_soft_on = $realtime;
  always @(negedge soft_rst) t_soft_off = $realtime;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #300;
    $display("por_n high at %0t, sys_rst_n high at %0t, soft_rst %0t to %0t", t_por, t_sys, t_soft_on, t_soft_off);
    if (t_por == 23 && t_sys == 35 && t_soft_on == 105 && t_soft_off == 135) $display("PASS: reset sequence matches the waveform");
    else $display("FAIL: expected 23, 35, 105 to 135");
    $finish;
  end
endmodule
`,solution:{tb:`\`timescale 1ns/1ps
module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic por_n, sys_rst_n, soft_rst;
  initial begin por_n = 0; #23 por_n = 1; end
  initial begin
    sys_rst_n = 0;
    wait (por_n);
    repeat (2) @(posedge clk);
    sys_rst_n <= 1;
  end
  initial begin
    soft_rst = 0;
    #100; @(posedge clk);
    soft_rst <= 1;
    repeat (3) @(posedge clk);
    soft_rst <= 0;
  end

  realtime t_por = -1, t_sys = -1, t_soft_on = -1, t_soft_off = -1;
  always @(posedge por_n) t_por = $realtime;
  always @(posedge sys_rst_n) t_sys = $realtime;
  always @(posedge soft_rst) t_soft_on = $realtime;
  always @(negedge soft_rst) t_soft_off = $realtime;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #300;
    $display("por_n high at %0t, sys_rst_n high at %0t, soft_rst %0t to %0t", t_por, t_sys, t_soft_on, t_soft_off);
    if (t_por == 23 && t_sys == 35 && t_soft_on == 105 && t_soft_off == 135) $display("PASS: reset sequence matches the waveform");
    else $display("FAIL: expected 23, 35, 105 to 135");
    $finish;
  end
endmodule
`}},{id:"dv-3",group:"dv-w7",tag:"Week 7 \xB7 Lab 3",title:"Random numbers in Verilog: even, odd, one-hot",std:"2012",design:"",tb:`// Generate 20 random even numbers, 20 random odd numbers and 20 random one-hot 16-bit values
// with $urandom / $urandom_range only (no constraints yet: that is week 8).
module tb;
  logic [15:0] even_v, odd_v, onehot_v;
  int errors = 0;
  initial begin
    for (int k = 0; k < 20; k++) begin
      // TODO: even_v = ...;  odd_v = ...;  onehot_v = ...;
      even_v = $urandom; odd_v = $urandom; onehot_v = $urandom;
      if (even_v[0] != 0) errors++;
      if (odd_v[0] != 1) errors++;
      if ($countones(onehot_v) != 1) errors++;
      if (k < 4) $display("even %5d  odd %5d  one-hot %b", even_v, odd_v, onehot_v);
    end
    if (errors == 0) $display("PASS: 60 values with the right properties"); else $display("FAIL: %0d wrong values", errors);
  end
endmodule
`,solution:{tb:`module tb;
  logic [15:0] even_v, odd_v, onehot_v;
  int errors = 0;
  initial begin
    for (int k = 0; k < 20; k++) begin
      even_v = $urandom & 16'hFFFE;              // clear bit 0
      odd_v = $urandom | 16'h0001;               // set bit 0
      onehot_v = 16'h1 << $urandom_range(0, 15); // shift a single 1 to a random position
      if (even_v[0] != 0) errors++;
      if (odd_v[0] != 1) errors++;
      if ($countones(onehot_v) != 1) errors++;
      if (k < 4) $display("even %5d  odd %5d  one-hot %b", even_v, odd_v, onehot_v);
    end
    if (errors == 0) $display("PASS: 60 values with the right properties"); else $display("FAIL: %0d wrong values", errors);
  end
endmodule
`}},{id:"dv-4",group:"dv-w7",tag:"Week 7 \xB7 Lab 4",title:"Counter verification: test plan and directed tests",std:"2012",design:`// 4-bit up/down counter with synchronous load and enable.
module updown (input logic clk, rst_n, en, up, load, input logic [3:0] d, output logic [3:0] q);
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 0;
    else if (load) q <= d;
    else if (en) q <= up ? q + 1 : (q == 0 ? 4'd14 : q - 1);     // bug: 0 - 1 must wrap to 15
endmodule
`,tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic rst_n = 0, en = 0, up = 1, load = 0; logic [3:0] d = 0, q;
  updown dut (.*);
  // reference model and checker (given)
  logic [3:0] model = 0; int errors = 0, checks = 0;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) model <= 0; else if (load) model <= d; else if (en) model <= up ? model + 1 : model - 1;
  always @(negedge clk) if (rst_n) begin checks++; if (q !== model) begin errors++; $display("%0t: q = %0d, expected %0d", $time, q, model); end end
  // test plan items, marked when exercised
  bit hit_load, hit_up, hit_down, hit_wrap_up, hit_wrap_down, hit_hold;
  always @(posedge clk) if (rst_n) begin
    if (load) hit_load = 1;
    if (!load && en && up) begin hit_up = 1; if (model == 15) hit_wrap_up = 1; end
    if (!load && en && !up) begin hit_down = 1; if (model == 0) hit_wrap_down = 1; end
    if (!load && !en) hit_hold = 1;
  end
  task automatic report();
    int plan = hit_load + hit_up + hit_down + hit_wrap_up + hit_wrap_down + hit_hold;
    $display("test plan: %0d of 6 items exercised, %0d checks, %0d errors", plan, checks, errors);
    if (plan == 6 && errors == 0) $display("PASS: every plan item tested, no mismatch");
    else $display("FAIL: %0s", plan < 6 ? "test plan not complete" : "mismatches: find and fix the bug in the design");
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: directed tests for each item of the test plan:
    //   load a value, count up, count down, wrap up (15 -> 0), wrap down (0 -> 15), hold (en = 0)
    @(negedge clk) begin load = 1; d = 4'd5; end
    @(negedge clk) load = 0;
    repeat (3) @(negedge clk);
    report();
    $finish;
  end
endmodule
`,solution:{design:`// 4-bit up/down counter with synchronous load and enable.
module updown (input logic clk, rst_n, en, up, load, input logic [3:0] d, output logic [3:0] q);
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 0;
    else if (load) q <= d;
    else if (en) q <= up ? q + 1 : q - 1;
endmodule
`,tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic rst_n = 0, en = 0, up = 1, load = 0; logic [3:0] d = 0, q;
  updown dut (.*);
  // reference model and checker (given)
  logic [3:0] model = 0; int errors = 0, checks = 0;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) model <= 0; else if (load) model <= d; else if (en) model <= up ? model + 1 : model - 1;
  always @(negedge clk) if (rst_n) begin checks++; if (q !== model) begin errors++; $display("%0t: q = %0d, expected %0d", $time, q, model); end end
  // test plan items, marked when exercised
  bit hit_load, hit_up, hit_down, hit_wrap_up, hit_wrap_down, hit_hold;
  always @(posedge clk) if (rst_n) begin
    if (load) hit_load = 1;
    if (!load && en && up) begin hit_up = 1; if (model == 15) hit_wrap_up = 1; end
    if (!load && en && !up) begin hit_down = 1; if (model == 0) hit_wrap_down = 1; end
    if (!load && !en) hit_hold = 1;
  end
  task automatic report();
    int plan = hit_load + hit_up + hit_down + hit_wrap_up + hit_wrap_down + hit_hold;
    $display("test plan: %0d of 6 items exercised, %0d checks, %0d errors", plan, checks, errors);
    if (plan == 6 && errors == 0) $display("PASS: every plan item tested, no mismatch");
    else $display("FAIL: %0s", plan < 6 ? "test plan not complete" : "mismatches: find and fix the bug in the design");
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    @(negedge clk) begin load = 1; d = 4'd13; end          // load
    @(negedge clk) begin load = 0; en = 1; up = 1; end     // up: 13, 14, 15, wrap to 0
    repeat (4) @(negedge clk);
    up = 0;                                                // down: 1 -> 0 -> wrap to 15
    repeat (3) @(negedge clk);
    en = 0;                                                // hold
    repeat (2) @(negedge clk);
    report();
    $finish;
  end
endmodule
`}},{id:"dv-5",group:"dv-w7",tag:"Week 7 \xB7 Lab 5",title:"Counter verification: random tests",std:"2012",design:`// 4-bit up/down counter with synchronous load and enable.
module updown (input logic clk, rst_n, en, up, load, input logic [3:0] d, output logic [3:0] q);
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) q <= 0;
    else if (load) q <= d;
    else if (en) q <= up ? q + 1 : q - 1;
// (fixed in the previous lab)
endmodule
`,tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic rst_n = 0, en = 0, up = 1, load = 0; logic [3:0] d = 0, q;
  updown dut (.*);
  // reference model and checker (given)
  logic [3:0] model = 0; int errors = 0, checks = 0;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) model <= 0; else if (load) model <= d; else if (en) model <= up ? model + 1 : model - 1;
  always @(negedge clk) if (rst_n) begin checks++; if (q !== model) begin errors++; $display("%0t: q = %0d, expected %0d", $time, q, model); end end
  // test plan items, marked when exercised
  bit hit_load, hit_up, hit_down, hit_wrap_up, hit_wrap_down, hit_hold;
  always @(posedge clk) if (rst_n) begin
    if (load) hit_load = 1;
    if (!load && en && up) begin hit_up = 1; if (model == 15) hit_wrap_up = 1; end
    if (!load && en && !up) begin hit_down = 1; if (model == 0) hit_wrap_down = 1; end
    if (!load && !en) hit_hold = 1;
  end
  task automatic report();
    int plan = hit_load + hit_up + hit_down + hit_wrap_up + hit_wrap_down + hit_hold;
    $display("test plan: %0d of 6 items exercised, %0d checks, %0d errors", plan, checks, errors);
    if (plan == 6 && errors == 0) $display("PASS: every plan item tested, no mismatch");
    else $display("FAIL: %0s", plan < 6 ? "test plan not complete" : "mismatches: find and fix the bug in the design");
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: 200 cycles of random stimulus with $urandom_range: load rarely (about 1 in 16),
    // en most of the time, up and d random. Stop early when all 6 plan items are hit.
    repeat (20) @(negedge clk) en = 1;
    report();
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic rst_n = 0, en = 0, up = 1, load = 0; logic [3:0] d = 0, q;
  updown dut (.*);
  // reference model and checker (given)
  logic [3:0] model = 0; int errors = 0, checks = 0;
  always @(posedge clk or negedge rst_n)
    if (!rst_n) model <= 0; else if (load) model <= d; else if (en) model <= up ? model + 1 : model - 1;
  always @(negedge clk) if (rst_n) begin checks++; if (q !== model) begin errors++; $display("%0t: q = %0d, expected %0d", $time, q, model); end end
  // test plan items, marked when exercised
  bit hit_load, hit_up, hit_down, hit_wrap_up, hit_wrap_down, hit_hold;
  always @(posedge clk) if (rst_n) begin
    if (load) hit_load = 1;
    if (!load && en && up) begin hit_up = 1; if (model == 15) hit_wrap_up = 1; end
    if (!load && en && !up) begin hit_down = 1; if (model == 0) hit_wrap_down = 1; end
    if (!load && !en) hit_hold = 1;
  end
  task automatic report();
    int plan = hit_load + hit_up + hit_down + hit_wrap_up + hit_wrap_down + hit_hold;
    $display("test plan: %0d of 6 items exercised, %0d checks, %0d errors", plan, checks, errors);
    if (plan == 6 && errors == 0) $display("PASS: every plan item tested, no mismatch");
    else $display("FAIL: %0s", plan < 6 ? "test plan not complete" : "mismatches: find and fix the bug in the design");
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 200; k++) begin
      @(negedge clk) begin
        load = ($urandom_range(0, 15) == 0);
        en   = ($urandom_range(0, 7) != 0);
        up   = $urandom_range(0, 1);
        d    = $urandom_range(0, 15);
      end
      if (hit_load + hit_up + hit_down + hit_wrap_up + hit_wrap_down + hit_hold == 6 && k > 20) break;
    end
    @(negedge clk) begin load = 0; en = 0; end
    report();
    $finish;
  end
endmodule
`}},{id:"dv-6",group:"dv-w8",tag:"Week 8 \xB7 Lab 1",title:"SystemVerilog data types: a behavioral memory model",std:"2012",design:`// TODO: a behavioral single-port memory model (week 8 exercise), without classes.
//   - parameters AW (address bits) and DW (data bits)
//   - an unpacked array of logic [DW-1:0] for the storage
//   - write on posedge clk when we; rdata is registered (one-cycle read latency) when re
//   - typedef enum for an 'op' status output: IDLE, READ, WRITE (what the last cycle did)
module mem_model #(parameter int AW = 4, DW = 8) (input logic clk, we, re, input logic [AW-1:0] addr,
    input logic [DW-1:0] wdata, output logic [DW-1:0] rdata, output logic [1:0] op);
endmodule
`,tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic we = 0, re = 0; logic [3:0] addr = 0; logic [7:0] wdata = 0, rdata; logic [1:0] op;
  mem_model #(.AW(4), .DW(8)) dut (.*);
  int errors = 0;
  // Testbench tasks and a function with SystemVerilog argument types
  task automatic write(input logic [3:0] a, input logic [7:0] d);
    @(negedge clk) begin we = 1; re = 0; addr = a; wdata = d; end
    @(negedge clk) we = 0;
  endtask
  task automatic read(input logic [3:0] a, output logic [7:0] d);
    @(negedge clk) begin re = 1; we = 0; addr = a; end
    @(negedge clk) begin re = 0; d = rdata; end
  endtask
  function automatic logic [7:0] pattern(int i); return 8'(i * 37 + 5); endfunction
  initial begin
    logic [7:0] got;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    for (int i = 0; i < 16; i++) write(i, pattern(i));
    for (int i = 15; i >= 0; i--) begin read(i, got); if (got !== pattern(i)) begin errors++; $display("addr %0d: read %h, expected %h", i, got, pattern(i)); end end
    @(negedge clk) begin we = 1; addr = 3; end #1 if (op !== 2'd0) ; @(posedge clk); #1 if (op !== 2'd2) begin errors++; $display("op after a write: %0d, expected WRITE (2)", op); end
    we = 0;
    if (errors == 0) $display("PASS: 16 writes and reads, op status correct"); else $display("FAIL: %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{design:`module mem_model #(parameter int AW = 4, DW = 8) (input logic clk, we, re, input logic [AW-1:0] addr,
    input logic [DW-1:0] wdata, output logic [DW-1:0] rdata, output logic [1:0] op);
  typedef enum logic [1:0] {IDLE, READ, WRITE} op_t;
  logic [DW-1:0] mem [2**AW];
  op_t last;
  always_ff @(posedge clk) begin
    if (we) mem[addr] <= wdata;
    if (re) rdata <= mem[addr];
    if (we) last <= WRITE; else if (re) last <= READ; else last <= IDLE;
  end
  assign op = last;
endmodule
`}},{id:"dv-7",group:"dv-w8",tag:"Week 8 \xB7 Lab 2",title:"Interfaces and modports: a FIFO interface with driver tasks",std:"2012",design:`// Synchronous FIFO used by the week 8-9 labs and the FIFO project.
module sync_fifo #(parameter int DW = 8, DEPTH = 8) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  localparam int AW = $clog2(DEPTH);
  logic [DW-1:0] mem [DEPTH]; logic [AW:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; end
    else begin
      if (push && !full) begin mem[wp[AW-1:0]] <= din; wp <= wp + 1; end
      if (pop && !empty) rp <= rp + 1;
    end
  assign dout = mem[rp[AW-1:0]];
  assign empty = wp == rp;
  assign full = (wp[AW-1:0] == rp[AW-1:0]) && (wp[AW] != rp[AW]);
endmodule
`,tb:`// TODO: an interface fifo_if bundling the FIFO signals, with
//   - modport dut (inputs push, pop, din; outputs dout, full, empty)
//   - tasks push_word(d) and pop_word(output d) that drive the signals on clock edges
interface fifo_if (input logic clk);
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  task automatic push_word(input logic [7:0] d); @(negedge clk); endtask
  task automatic pop_word(output logic [7:0] d); @(negedge clk); d = 'x; endtask
endinterface

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  fifo_if f (clk);
  sync_fifo dut (.clk, .rst_n, .push(f.push), .pop(f.pop), .din(f.din), .dout(f.dout), .full(f.full), .empty(f.empty));
  int errors = 0;
  initial begin
    logic [7:0] d;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // uses the interface tasks
    for (int i = 0; i < 5; i++) f.push_word(8'h40 + i);
    for (int i = 0; i < 5; i++) begin f.pop_word(d); if (d !== 8'h40 + i) begin errors++; $display("popped %h, expected %h", d, 8'h40 + i); end end
    if (errors == 0 && f.empty) $display("PASS: data in order through the interface tasks"); else $display("FAIL: %0d errors", errors);
    $finish;
  end
endmodule
`,solution:{tb:`interface fifo_if (input logic clk);
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  modport dut (input clk, push, pop, din, output dout, full, empty);
  task automatic push_word(input logic [7:0] d);
    @(negedge clk); while (full) @(negedge clk);
    push = 1; din = d;
    @(negedge clk) push = 0;
  endtask
  task automatic pop_word(output logic [7:0] d);
    @(negedge clk); while (empty) @(negedge clk);
    d = dout; pop = 1;
    @(negedge clk) pop = 0;
  endtask
endinterface

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  fifo_if f (clk);
  sync_fifo dut (.clk, .rst_n, .push(f.push), .pop(f.pop), .din(f.din), .dout(f.dout), .full(f.full), .empty(f.empty));
  int errors = 0;
  initial begin
    logic [7:0] d;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int i = 0; i < 5; i++) f.push_word(8'h40 + i);
    for (int i = 0; i < 5; i++) begin f.pop_word(d); if (d !== 8'h40 + i) begin errors++; $display("popped %h, expected %h", d, 8'h40 + i); end end
    if (errors == 0 && f.empty) $display("PASS: data in order through the interface tasks"); else $display("FAIL: %0d errors", errors);
    $finish;
  end
endmodule
`}},{id:"dv-8",group:"dv-w8",tag:"Week 8 \xB7 Lab 3",title:"Classes: transactions, copy, compare, inheritance",std:"2012",design:"",tb:`// A bus transaction as a class (vlsimentor labs 35-40, Cadence SV lab topics).
class Txn;
  logic [7:0] addr; logic [31:0] data; bit write;
  function new(logic [7:0] a = 0, logic [31:0] d = 0, bit w = 0); addr = a; data = d; write = w; endfunction
  virtual function string sprint(); return $sformatf("%s addr=%h data=%h", write ? "WR" : "RD", addr, data); endfunction
  // TODO: copy() must return a NEW object with the same fields (deep copy)
  function Txn copy(); return this; endfunction
  // TODO: compare() must return 1 when all fields match
  function bit compare(Txn other); return 0; endfunction
endclass
// TODO: override sprint() in ErrTxn: call super.sprint() and append " err=<n>"
class ErrTxn extends Txn;
  bit [1:0] err;
  function new(logic [7:0] a = 0, logic [31:0] d = 0, bit w = 0); super.new(a, d, w); endfunction
endclass

module tb;
  int errors = 0;
  initial begin
    Txn a, b, c; ErrTxn e;
    a = new(8'h10, 32'hDEAD_BEEF, 1);
    b = a;                         // handle copy: same object
    c = a.copy();                  // object copy: a new object
    b.addr = 8'h20;
    if (a.addr !== 8'h20) begin errors++; $display("a and b should be the same object"); end
    if (c.addr !== 8'h10) begin errors++; $display("c should be an independent copy"); end
    if (!a.compare(b) || a.compare(c)) begin errors++; $display("compare is wrong"); end
    e = new(8'h30, 32'h1, 0); e.err = 2;
    a = e;                         // base handle to a derived object
    $display("%s", a.sprint());    // virtual: calls ErrTxn::sprint
    if (a.sprint() != "RD addr=30 data=00000001 err=2") begin errors++; $display("polymorphic sprint is wrong"); end
    if (errors == 0) $display("PASS: handles, copies, compare and virtual methods"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`class Txn;
  logic [7:0] addr; logic [31:0] data; bit write;
  function new(logic [7:0] a = 0, logic [31:0] d = 0, bit w = 0); addr = a; data = d; write = w; endfunction
  virtual function string sprint(); return $sformatf("%s addr=%h data=%h", write ? "WR" : "RD", addr, data); endfunction
  function Txn copy(); Txn t = new(addr, data, write); return t; endfunction
  function bit compare(Txn other); return other.addr == addr && other.data == data && other.write == write; endfunction
endclass
class ErrTxn extends Txn;
  bit [1:0] err;
  function new(logic [7:0] a = 0, logic [31:0] d = 0, bit w = 0); super.new(a, d, w); endfunction
  virtual function string sprint(); return $sformatf("%s err=%0d", super.sprint(), err); endfunction
endclass

module tb;
  int errors = 0;
  initial begin
    Txn a, b, c; ErrTxn e;
    a = new(8'h10, 32'hDEAD_BEEF, 1);
    b = a;
    c = a.copy();
    b.addr = 8'h20;
    if (a.addr !== 8'h20) begin errors++; $display("a and b should be the same object"); end
    if (c.addr !== 8'h10) begin errors++; $display("c should be an independent copy"); end
    if (!a.compare(b) || a.compare(c)) begin errors++; $display("compare is wrong"); end
    e = new(8'h30, 32'h1, 0); e.err = 2;
    a = e;
    $display("%s", a.sprint());
    if (a.sprint() != "RD addr=30 data=00000001 err=2") begin errors++; $display("polymorphic sprint is wrong"); end
    if (errors == 0) $display("PASS: handles, copies, compare and virtual methods"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-9",group:"dv-w8",tag:"Week 8 \xB7 Lab 4",title:"Threads: fork/join, join_any, join_none, timeouts",std:"2012",design:"",tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic busy = 0; int log_q [$];       // records the order of events
  task automatic job(int id, int cycles); repeat (cycles) @(posedge clk); log_q.push_back(id); endtask
  task wait_done(output bit timed_out);      // a static task (this simulator cannot 'disable fork' inside an automatic one)
    // TODO: wait for 'busy' to fall, but give up after 20 clock cycles:
    //   fork the two waits, join_any, then disable fork. Set timed_out when the timeout won.
    timed_out = 0;
  endtask
  initial begin
    bit to1, to2; string order = "";
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    // TODO 1: run job(1, 3) and job(2, 1) in parallel and wait for BOTH (fork ... join)
    // TODO 2: run job(3, 4) and job(4, 2) in parallel and continue as soon as ONE ends (join_any)
    // TODO 3: start job(5, 6) in the background (join_none) and continue at once
    log_q.push_back(99);                // marks 'the main thread got here'
    busy = 1; fork begin repeat (5) @(posedge clk); busy = 0; end join_none
    wait_done(to1);                     // busy falls after 5 cycles: no timeout
    busy = 1;                           // stays busy forever
    wait_done(to2);                     // must time out
    repeat (10) @(posedge clk);
    foreach (log_q[i]) order = {order, $sformatf("%0d ", log_q[i])};
    $display("order: %s  timeouts: %0d %0d", order, to1, to2);
    if (order == "2 1 4 99 3 5 " && !to1 && to2) $display("PASS: fork/join variants and timeout correct");
    else $display("FAIL: expected order '{2, 1, 4, 99, 3, 5} and timeouts 0 1");
    $finish;
  end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0; always #5 clk = ~clk;
  logic busy = 0; int log_q [$];
  task automatic job(int id, int cycles); repeat (cycles) @(posedge clk); log_q.push_back(id); endtask
  task wait_done(output bit timed_out);      // a static task (this simulator cannot 'disable fork' inside an automatic one)
    timed_out = 0;
    fork
      begin wait (!busy); end
      begin repeat (20) @(posedge clk); timed_out = 1; end
    join_any
    disable fork;
  endtask
  initial begin
    bit to1, to2; string order = "";
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    fork job(1, 3); job(2, 1); join
    fork job(3, 4); job(4, 2); join_any
    fork job(5, 6); join_none
    log_q.push_back(99);
    busy = 1; fork begin repeat (5) @(posedge clk); busy = 0; end join_none
    wait_done(to1);
    busy = 1;
    wait_done(to2);
    repeat (10) @(posedge clk);
    foreach (log_q[i]) order = {order, $sformatf("%0d ", log_q[i])};
    $display("order: %s  timeouts: %0d %0d", order, to1, to2);
    if (order == "2 1 4 99 3 5 " && !to1 && to2) $display("PASS: fork/join variants and timeout correct");
    else $display("FAIL: expected order '{2, 1, 4, 99, 3, 5} and timeouts 0 1");
    $finish;
  end
endmodule
`}},{id:"dv-10",group:"dv-w8",tag:"Week 8 \xB7 Lab 5",title:"FIFO push and pop drivers with random delays (week 8 exercise)",std:"2012",design:`// Synchronous FIFO used by the week 8-9 labs and the FIFO project.
module sync_fifo #(parameter int DW = 8, DEPTH = 8) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  localparam int AW = $clog2(DEPTH);
  logic [DW-1:0] mem [DEPTH]; logic [AW:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; end
    else begin
      if (push && !full) begin mem[wp[AW-1:0]] <= din; wp <= wp + 1; end
      if (pop && !empty) rp <= rp + 1;
    end
  assign dout = mem[rp[AW-1:0]];
  assign empty = wp == rp;
  assign full = (wp[AW-1:0] == rp[AW-1:0]) && (wp[AW] != rp[AW]);
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo dut (.*);
  logic [7:0] exp_q [$];             // scoreboard: expected data, in order
  int errors = 0, n_push = 0, n_pop = 0;
  localparam int N = 40;
  // TODO push_driver: N times: wait 0..3 random cycles, then push one random byte (wait while full);
  //                   record each pushed byte in exp_q
  task automatic push_driver();
  endtask
  // TODO pop_driver: N times: wait 0..3 random cycles, then pop one byte (wait while empty);
  //                  compare dout with exp_q.pop_front()
  task automatic pop_driver();
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    fork push_driver(); pop_driver(); join
    $display("%0d pushes, %0d pops, %0d errors", n_push, n_pop, errors);
    if (n_push == N && n_pop == N && errors == 0 && exp_q.size() == 0) $display("PASS: random push/pop traffic, data in order");
    else $display("FAIL");
    $finish;
  end
  initial #20000 begin $display("FAIL: timeout"); $finish; end
endmodule
`,solution:{tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo dut (.*);
  logic [7:0] exp_q [$];
  int errors = 0, n_push = 0, n_pop = 0;
  localparam int N = 40;
  task automatic push_driver();
    repeat (N) begin
      repeat ($urandom_range(0, 3)) @(negedge clk);
      @(negedge clk); while (full) @(negedge clk);
      push = 1; din = $urandom; exp_q.push_back(din); n_push++;
      @(negedge clk) push = 0;
    end
  endtask
  task automatic pop_driver();
    repeat (N) begin
      repeat ($urandom_range(0, 3)) @(negedge clk);
      @(negedge clk); while (empty) @(negedge clk);
      if (exp_q.size() == 0 || dout !== exp_q[0]) begin errors++; $display("%0t: popped %h, expected %h", $time, dout, exp_q[0]); end
      void'(exp_q.pop_front());
      pop = 1; n_pop++;
      @(negedge clk) pop = 0;
    end
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    fork push_driver(); pop_driver(); join
    $display("%0d pushes, %0d pops, %0d errors", n_push, n_pop, errors);
    if (n_push == N && n_pop == N && errors == 0 && exp_q.size() == 0) $display("PASS: random push/pop traffic, data in order");
    else $display("FAIL");
    $finish;
  end
  initial #20000 begin $display("FAIL: timeout"); $finish; end
endmodule
`}},{id:"dv-11",group:"dv-cr",tag:"Random \xB7 Lab 1",title:"rand, randc and randomize(): even, odd and one-hot (week 8 exercise)",std:"2012",design:"",tb:`class Nums;
  rand bit [15:0] ev, od, oh;
  randc bit [2:0] tag;               // cycles through all 8 values before repeating
  // TODO: constraint c_even { ... }  ev is even
  // TODO: constraint c_odd  { ... }  od is odd
  // TODO: constraint c_hot  { ... }  oh is one-hot ($onehot or $countones)
endclass
module tb;
  int errors = 0;
  initial begin
    Nums n = new;
    int seen [8];
    for (int k = 0; k < 16; k++) begin
      if (!n.randomize()) begin errors++; $display("randomize() failed"); end
      if (n.ev[0] || !n.od[0] || $countones(n.oh) != 1) errors++;
      seen[n.tag]++;
      if (k < 4) $display("ev %5d od %5d oh %b tag %0d", n.ev, n.od, n.oh, n.tag);
    end
    foreach (seen[i]) if (seen[i] != 2) begin errors++; $display("tag %0d seen %0d times in 16 calls (randc: exactly 2)", i, seen[i]); end
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`class Nums;
  rand bit [15:0] ev, od, oh;
  randc bit [2:0] tag;
  constraint c_even { ev % 2 == 0; }
  constraint c_odd  { od[0] == 1; }
  constraint c_hot  { $countones(oh) == 1; }
endclass
module tb;
  int errors = 0;
  initial begin
    Nums n = new;
    int seen [8];
    for (int k = 0; k < 16; k++) begin
      if (!n.randomize()) begin errors++; $display("randomize() failed"); end
      if (n.ev[0] || !n.od[0] || $countones(n.oh) != 1) errors++;
      seen[n.tag]++;
      if (k < 4) $display("ev %5d od %5d oh %b tag %0d", n.ev, n.od, n.oh, n.tag);
    end
    foreach (seen[i]) if (seen[i] != 2) begin errors++; $display("tag %0d seen %0d times in 16 calls (randc: exactly 2)", i, seen[i]); end
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-12",group:"dv-cr",tag:"Random \xB7 Lab 2",title:"inside, ranges and dist: shaping the distribution",std:"2012",design:"",tb:`class Pkt;
  rand bit [7:0] len;
  rand bit [3:0] kind;
  // TODO c_len: len in 1..64, and weighted: 1 gets weight 20, [2:63] share 60 in total (:/), 64 gets 20
  // TODO c_kind: kind inside {0, 1, 2, [8:10]}
endclass
module tb;
  int errors = 0;
  initial begin
    Pkt p = new;
    int n1 = 0, n64 = 0, nmid = 0, bad = 0;
    repeat (1000) begin
      void'(p.randomize());
      if (p.len == 1) n1++; else if (p.len == 64) n64++; else if (p.len >= 2 && p.len <= 63) nmid++; else bad++;
      if (!(p.kind inside {0, 1, 2, [8:10]})) bad++;
    end
    $display("len=1: %0d   len 2..63: %0d   len=64: %0d   (expected about 200 / 600 / 200)", n1, nmid, n64);
    if (bad || n1 < 150 || n1 > 250 || n64 < 150 || n64 > 250) errors++;
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`class Pkt;
  rand bit [7:0] len;
  rand bit [3:0] kind;
  constraint c_len { len dist { 1 := 20, [2:63] :/ 60, 64 := 20 }; }
  constraint c_kind { kind inside {0, 1, 2, [8:10]}; }
endclass
module tb;
  int errors = 0;
  initial begin
    Pkt p = new;
    int n1 = 0, n64 = 0, nmid = 0, bad = 0;
    repeat (1000) begin
      void'(p.randomize());
      if (p.len == 1) n1++; else if (p.len == 64) n64++; else if (p.len >= 2 && p.len <= 63) nmid++; else bad++;
      if (!(p.kind inside {0, 1, 2, [8:10]})) bad++;
    end
    $display("len=1: %0d   len 2..63: %0d   len=64: %0d   (expected about 200 / 600 / 200)", n1, nmid, n64);
    if (bad || n1 < 150 || n1 > 250 || n64 < 150 || n64 > 250) errors++;
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-13",group:"dv-cr",tag:"Random \xB7 Lab 3",title:"Implication, if/else and solve...before",std:"2012",design:"",tb:`class Mode;
  rand bit short_pkt;          // a short packet ...
  rand bit [1:0] len;      // ... must have len == 0
  // TODO c_imp: short_pkt -> len == 0;
endclass
class ModeSB extends Mode;
  // TODO c_order: solve short_pkt before len;
endclass
module tb;
  int errors = 0;
  initial begin
    Mode m = new; ModeSB s = new;
    int a = 0, b = 0;
    repeat (2000) begin void'(m.randomize()); a += m.short_pkt; if (m.short_pkt && m.len != 0) errors++; void'(s.randomize()); b += s.short_pkt; end
    $display("short_pkt = 1: %0d of 2000 without solve-before, %0d with", a, b);
    // solutions: (0,0) (0,1) (0,2) (0,3) (1,0): uniform gives small = 1 in 1 of 5; solve-before gives 1 in 2
    if (a < 300 || a > 500 || b < 900 || b > 1100) errors++;
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`class Mode;
  rand bit short_pkt;
  rand bit [1:0] len;
  constraint c_imp { short_pkt -> len == 0; }
endclass
class ModeSB extends Mode;
  constraint c_order { solve short_pkt before len; }
endclass
module tb;
  int errors = 0;
  initial begin
    Mode m = new; ModeSB s = new;
    int a = 0, b = 0;
    repeat (2000) begin void'(m.randomize()); a += m.short_pkt; if (m.short_pkt && m.len != 0) errors++; void'(s.randomize()); b += s.short_pkt; end
    $display("short_pkt = 1: %0d of 2000 without solve-before, %0d with", a, b);
    // solutions: (0,0) (0,1) (0,2) (0,3) (1,0): uniform gives small = 1 in 1 of 5; solve-before gives 1 in 2
    if (a < 300 || a > 500 || b < 900 || b > 1100) errors++;
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-14",group:"dv-cr",tag:"Random \xB7 Lab 4",title:"Array constraints: N numbers in [X:Y] adding up to Z (week 8 exercise)",std:"2012",design:"",tb:`class Split;
  int unsigned n = 6, lo = 5, hi = 30, total = 100;
  rand int unsigned v[];
  // TODO c_size: v.size() == n
  // TODO c_each: every element in [lo:hi]   (foreach)
  // TODO c_sum:  v.sum() == total
  // TODO c_uniq: all elements different     (unique)
endclass
module tb;
  int errors = 0;
  initial begin
    Split s = new;
    for (int k = 0; k < 5; k++) begin
      int sum; string t;
      sum = 0; t = "";                 // (an initializer here would run only once: the block is static)
      if (!s.randomize()) begin errors++; $display("randomize() failed"); continue; end
      for (int i = 0; i < s.v.size(); i++) begin sum += s.v[i]; t = {t, $sformatf("%0d ", s.v[i])}; if (s.v[i] < 5 || s.v[i] > 30) errors++; for (int j = 0; j < i; j++) if (s.v[j] == s.v[i]) errors++; end
      $display("%s= %0d", t, sum);
      if (s.v.size() != 6 || sum != 100) errors++;
    end
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`class Split;
  int unsigned n = 6, lo = 5, hi = 30, total = 100;
  rand int unsigned v[];
  constraint c_size { v.size() == n; }
  constraint c_each { foreach (v[i]) v[i] inside {[lo:hi]}; }
  constraint c_sum  { v.sum() == total; }
  constraint c_uniq { unique {v}; }
endclass
module tb;
  int errors = 0;
  initial begin
    Split s = new;
    for (int k = 0; k < 5; k++) begin
      int sum; string t;
      sum = 0; t = "";                 // (an initializer here would run only once: the block is static)
      if (!s.randomize()) begin errors++; $display("randomize() failed"); continue; end
      for (int i = 0; i < s.v.size(); i++) begin sum += s.v[i]; t = {t, $sformatf("%0d ", s.v[i])}; if (s.v[i] < 5 || s.v[i] > 30) errors++; for (int j = 0; j < i; j++) if (s.v[j] == s.v[i]) errors++; end
      $display("%s= %0d", t, sum);
      if (s.v.size() != 6 || sum != 100) errors++;
    end
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-15",group:"dv-cr",tag:"Random \xB7 Lab 5",title:"Inline constraints, modes, pre/post_randomize and soft",std:"2012",design:"",tb:`class Txn;
  rand bit [7:0] addr; rand bit [7:0] len; rand bit wr;
  bit [7:0] last_addr;
  constraint c_addr { addr inside {[8'h10:8'hEF]}; }
  constraint c_len  { soft len inside {[1:16]}; }       // a default that a test may override
  // TODO post_randomize(): remember addr in last_addr
endclass
module tb;
  int errors = 0;
  initial begin
    Txn t = new;
    // TODO 1: one write to address 8'h20 with an inline constraint:  t.randomize() with { ... }
    // TODO 2: a long packet: inline len == 200 (overrides the soft constraint)
    // TODO 3: an address outside c_addr (8'hF8): switch c_addr off with constraint_mode(0), then on again
    // TODO 4: keep wr fixed at 0 with rand_mode(0) and set it by hand
    void'(t.randomize());
    if (t.addr != 8'h20 || !t.wr) begin errors++; $display("1: addr %h wr %0d", t.addr, t.wr); end
    if (t.last_addr != t.addr) begin errors++; $display("post_randomize did not run"); end
    void'(t.randomize());
    if (t.len != 200) begin errors++; $display("2: len %0d", t.len); end
    void'(t.randomize());
    if (t.addr != 8'hF8) begin errors++; $display("3: addr %h", t.addr); end
    repeat (5) begin void'(t.randomize()); if (t.wr != 0) begin errors++; $display("4: wr changed"); end end
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`class Txn;
  rand bit [7:0] addr; rand bit [7:0] len; rand bit wr;
  bit [7:0] last_addr;
  constraint c_addr { addr inside {[8'h10:8'hEF]}; }
  constraint c_len  { soft len inside {[1:16]}; }
  function void post_randomize(); last_addr = addr; endfunction
endclass
module tb;
  int errors = 0;
  initial begin
    Txn t = new;
    // TODO 1: one write to address 8'h20 with an inline constraint:  t.randomize() with { ... }
    // TODO 2: a long packet: inline len == 200 (overrides the soft constraint)
    // TODO 3: an address outside c_addr (8'hF8): switch c_addr off with constraint_mode(0), then on again
    // TODO 4: keep wr fixed at 0 with rand_mode(0) and set it by hand
    void'(t.randomize() with { addr == 8'h20; wr == 1; });
    if (t.addr != 8'h20 || !t.wr) begin errors++; $display("1: addr %h wr %0d", t.addr, t.wr); end
    if (t.last_addr != t.addr) begin errors++; $display("post_randomize did not run"); end
    void'(t.randomize() with { len == 200; });
    if (t.len != 200) begin errors++; $display("2: len %0d", t.len); end
    t.c_addr.constraint_mode(0);
    void'(t.randomize() with { addr == 8'hF8; });
    t.c_addr.constraint_mode(1);
    if (t.addr != 8'hF8) begin errors++; $display("3: addr %h", t.addr); end
    t.wr.rand_mode(0); t.wr = 0;
    repeat (5) begin void'(t.randomize()); if (t.wr != 0) begin errors++; $display("4: wr changed"); end end
    if (errors == 0) $display("PASS"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-16",group:"dv-w9",tag:"Week 9 \xB7 Lab 1",title:"Packages and system tasks: counting up or down (week 9 exercise)",std:"2012",design:"",tb:`// Week 9 exercise: given a direction flag and a number, display every number up to it,
// or from it down to 0. Put the shared types and the function in a package.
package count_pkg;
  typedef enum bit {UP, DOWN} dir_t;
  // TODO: function automatic string count_list(dir_t dir, int n);
  //   UP, 3   -> "0 1 2 3"      DOWN, 3 -> "3 2 1 0"
  function automatic string count_list(dir_t dir, int n); return ""; endfunction
endpackage

module tb;
  import count_pkg::*;
  int errors = 0, fd; string line;
  task automatic check(dir_t d, int n, string want);
    string got = count_list(d, n);
    $display("%s %0d -> \\"%s\\"", d == UP ? "UP  " : "DOWN", n, got);
    if (got != want) begin errors++; $display("   expected \\"%s\\"", want); end
  endtask
  initial begin
    check(UP, 3, "0 1 2 3"); check(DOWN, 5, "5 4 3 2 1 0"); check(UP, 0, "0");
    // write a list to a file and read it back with the file system tasks
    fd = $fopen("counts.txt", "w"); $fdisplay(fd, "%s", count_list(DOWN, 4)); $fclose(fd);
    fd = $fopen("counts.txt", "r"); void'($fgets(line, fd)); $fclose(fd);
    if (line != "4 3 2 1 0\\n") begin errors++; $display("file read back: %s", line); end
    if (errors == 0) $display("PASS: lists and file I/O correct"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`,solution:{tb:`package count_pkg;
  typedef enum bit {UP, DOWN} dir_t;
  function automatic string count_list(dir_t dir, int n);
    string s = "";
    for (int i = 0; i <= n; i++) s = {s, i == 0 ? "" : " ", $sformatf("%0d", dir == UP ? i : n - i)};
    return s;
  endfunction
endpackage

module tb;
  import count_pkg::*;
  int errors = 0, fd; string line;
  task automatic check(dir_t d, int n, string want);
    string got = count_list(d, n);
    $display("%s %0d -> \\"%s\\"", d == UP ? "UP  " : "DOWN", n, got);
    if (got != want) begin errors++; $display("   expected \\"%s\\"", want); end
  endtask
  initial begin
    check(UP, 3, "0 1 2 3"); check(DOWN, 5, "5 4 3 2 1 0"); check(UP, 0, "0");
    fd = $fopen("counts.txt", "w"); $fdisplay(fd, "%s", count_list(DOWN, 4)); $fclose(fd);
    fd = $fopen("counts.txt", "r"); void'($fgets(line, fd)); $fclose(fd);
    if (line != "4 3 2 1 0\\n") begin errors++; $display("file read back: %s", line); end
    if (errors == 0) $display("PASS: lists and file I/O correct"); else $display("FAIL: %0d errors", errors);
  end
endmodule
`}},{id:"dv-17",group:"dv-w9",tag:"Week 9 \xB7 Lab 2",title:"FIFO verification 1: test plan and directed tests",std:"2012",design:`// Synchronous FIFO used by the week 8-9 labs and the FIFO project.
module sync_fifo #(parameter int DW = 8, DEPTH = 8) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  localparam int AW = $clog2(DEPTH);
  logic [DW-1:0] mem [DEPTH]; logic [AW:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; end
    else begin
      if (push && !full) begin mem[wp[AW-1:0]] <= din; wp <= wp + 1; end
      if (pop && !empty && !(push && full)) rp <= rp + 1;   // bug: pop ignored when full and pushing
    end
  assign dout = mem[rp[AW-1:0]];
  assign empty = wp == rp;
  assign full = (wp[AW-1:0] == rp[AW-1:0]) && (wp[AW] != rp[AW]);
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo #(.DW(8), .DEPTH(4)) dut (.*);
  // reference model: a queue, checked on every clock
  logic [7:0] model [$]; int errors = 0;
  always @(posedge clk) if (rst_n) begin
    if (dout !== (model.size() ? model[0] : dout) || full !== (model.size() == 4) || empty !== (model.size() == 0)) begin
      errors++; $display("%0t: dout %h full %b empty %b, model has %0d entries", $time, dout, full, empty, model.size()); end
    begin int n; n = model.size();         // a push is accepted only if the FIFO was not full
      if (pop && n) void'(model.pop_front());
      if (push && n < 4) model.push_back(din); end
  end
  // test plan as functional coverage
  covergroup cg_plan @(posedge clk iff rst_n);
    cp_op: coverpoint {push, pop} { bins idle = {0}; bins rd = {1}; bins wr = {2}; bins both = {3}; }
    cp_lvl: coverpoint model.size() { bins empty = {0}; bins mid = {[1:3]}; bins full = {4}; }
    x: cross cp_op, cp_lvl;   // e.g. push when full, pop when empty, both when full
  endgroup
  cg_plan cov = new;
  task automatic op(bit pu, bit po, logic [7:0] d = 0); @(negedge clk) begin push = pu; pop = po; din = d; end endtask
  task automatic report();
    @(negedge clk) begin push = 0; pop = 0; end
    @(negedge clk);
    $display("test plan coverage %0.1f%%, %0d mismatches", cov.get_coverage(), errors);
    if (cov.get_coverage() >= 100 && errors == 0) $display("PASS: every plan combination tested, no mismatch");
    else $display("FAIL: %s", errors ? "mismatches: fix the design" : "test plan not complete: see the cross holes");
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: directed tests that cover every combination of {idle, read, write, both} x {empty, mid, full}:
    // fill to full, push when full, pop when empty, push and pop together at each level ...
    op(1, 0, 8'h11); op(1, 0, 8'h22); op(0, 1); op(0, 1);
    report();
    $finish;
  end
endmodule
`,solution:{design:`// Synchronous FIFO used by the week 8-9 labs and the FIFO project.
module sync_fifo #(parameter int DW = 8, DEPTH = 8) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  localparam int AW = $clog2(DEPTH);
  logic [DW-1:0] mem [DEPTH]; logic [AW:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; end
    else begin
      if (push && !full) begin mem[wp[AW-1:0]] <= din; wp <= wp + 1; end
      if (pop && !empty) rp <= rp + 1;
    end
  assign dout = mem[rp[AW-1:0]];
  assign empty = wp == rp;
  assign full = (wp[AW-1:0] == rp[AW-1:0]) && (wp[AW] != rp[AW]);
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo #(.DW(8), .DEPTH(4)) dut (.*);
  // reference model: a queue, checked on every clock
  logic [7:0] model [$]; int errors = 0;
  always @(posedge clk) if (rst_n) begin
    if (dout !== (model.size() ? model[0] : dout) || full !== (model.size() == 4) || empty !== (model.size() == 0)) begin
      errors++; $display("%0t: dout %h full %b empty %b, model has %0d entries", $time, dout, full, empty, model.size()); end
    begin int n; n = model.size();         // a push is accepted only if the FIFO was not full
      if (pop && n) void'(model.pop_front());
      if (push && n < 4) model.push_back(din); end
  end
  // test plan as functional coverage
  covergroup cg_plan @(posedge clk iff rst_n);
    cp_op: coverpoint {push, pop} { bins idle = {0}; bins rd = {1}; bins wr = {2}; bins both = {3}; }
    cp_lvl: coverpoint model.size() { bins empty = {0}; bins mid = {[1:3]}; bins full = {4}; }
    x: cross cp_op, cp_lvl;   // e.g. push when full, pop when empty, both when full
  endgroup
  cg_plan cov = new;
  task automatic op(bit pu, bit po, logic [7:0] d = 0); @(negedge clk) begin push = pu; pop = po; din = d; end endtask
  task automatic report();
    @(negedge clk) begin push = 0; pop = 0; end
    @(negedge clk);
    $display("test plan coverage %0.1f%%, %0d mismatches", cov.get_coverage(), errors);
    if (cov.get_coverage() >= 100 && errors == 0) $display("PASS: every plan combination tested, no mismatch");
    else $display("FAIL: %s", errors ? "mismatches: fix the design" : "test plan not complete: see the cross holes");
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    op(0, 0); op(0, 1); op(1, 1, 8'h01);                 // at empty: idle, pop, both
    op(0, 1); op(1, 0, 8'h02);                           // read at mid (back to empty), write at empty
    op(1, 0, 8'h10); op(0, 0); op(1, 1, 8'h11); op(0, 1); // mid: write, idle, both, read
    repeat (3) op(1, 0, 8'h20);                          // fill to full
    op(0, 0); op(1, 0, 8'hEE); op(1, 1, 8'h21);          // at full: idle, push (rejected), both
    op(1, 0, 8'h22); op(0, 1);                           // full again, read at full
    repeat (4) op(0, 1);                                 // drain
    report();
    $finish;
  end
endmodule
`}},{id:"dv-18",group:"dv-w9",tag:"Week 9 \xB7 Lab 3",title:"FIFO verification 2: random tests and coverage closure",std:"2012",design:`// Synchronous FIFO used by the week 8-9 labs and the FIFO project.
module sync_fifo #(parameter int DW = 8, DEPTH = 8) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  localparam int AW = $clog2(DEPTH);
  logic [DW-1:0] mem [DEPTH]; logic [AW:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; end
    else begin
      if (push && !full) begin mem[wp[AW-1:0]] <= din; wp <= wp + 1; end
      if (pop && !empty) rp <= rp + 1;
    end
  assign dout = mem[rp[AW-1:0]];
  assign empty = wp == rp;
  assign full = (wp[AW-1:0] == rp[AW-1:0]) && (wp[AW] != rp[AW]);
endmodule
`,tb:`class FifoOp;
  rand bit push, pop; rand logic [7:0] data;
  int mode = 0;                         // 0 balanced, 1 fill (mostly push), 2 drain (mostly pop)
  constraint c_mode {
    if (mode == 1) { push dist {1 := 4, 0 := 1}; pop dist {1 := 1, 0 := 4}; }
    else if (mode == 2) { push dist {1 := 1, 0 := 4}; pop dist {1 := 4, 0 := 1}; }
  }
endclass
module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo #(.DW(8), .DEPTH(4)) dut (.*);
  // reference model: a queue, checked on every clock
  logic [7:0] model [$]; int errors = 0;
  always @(posedge clk) if (rst_n) begin
    if (dout !== (model.size() ? model[0] : dout) || full !== (model.size() == 4) || empty !== (model.size() == 0)) begin
      errors++; $display("%0t: dout %h full %b empty %b, model has %0d entries", $time, dout, full, empty, model.size()); end
    begin int n; n = model.size();         // a push is accepted only if the FIFO was not full
      if (pop && n) void'(model.pop_front());
      if (push && n < 4) model.push_back(din); end
  end
  // test plan as functional coverage
  covergroup cg_plan @(posedge clk iff rst_n);
    cp_op: coverpoint {push, pop} { bins idle = {0}; bins rd = {1}; bins wr = {2}; bins both = {3}; }
    cp_lvl: coverpoint model.size() { bins empty = {0}; bins mid = {[1:3]}; bins full = {4}; }
    x: cross cp_op, cp_lvl;   // e.g. push when full, pop when empty, both when full
  endgroup
  cg_plan cov = new;
  task automatic op(bit pu, bit po, logic [7:0] d = 0); @(negedge clk) begin push = pu; pop = po; din = d; end endtask
  task automatic report();
    @(negedge clk) begin push = 0; pop = 0; end
    @(negedge clk);
    $display("test plan coverage %0.1f%%, %0d mismatches", cov.get_coverage(), errors);
    if (cov.get_coverage() >= 100 && errors == 0) $display("PASS: every plan combination tested, no mismatch");
    else $display("FAIL: %s", errors ? "mismatches: fix the design" : "test plan not complete: see the cross holes");
  endtask
  initial begin
    FifoOp t = new;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: random test: phases of 'mode' (fill, balanced, drain) until coverage reaches 100% or 400 operations.
    // Each step: t.randomize(), then op(t.push, t.pop, t.data).
    repeat (40) begin void'(t.randomize()); op(t.push, t.pop, t.data); end
    report();
    $finish;
  end
endmodule
`,solution:{tb:`class FifoOp;
  rand bit push, pop; rand logic [7:0] data;
  int mode = 0;                         // 0 balanced, 1 fill (mostly push), 2 drain (mostly pop)
  constraint c_mode {
    if (mode == 1) { push dist {1 := 4, 0 := 1}; pop dist {1 := 1, 0 := 4}; }
    else if (mode == 2) { push dist {1 := 1, 0 := 4}; pop dist {1 := 4, 0 := 1}; }
  }
endclass
module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo #(.DW(8), .DEPTH(4)) dut (.*);
  // reference model: a queue, checked on every clock
  logic [7:0] model [$]; int errors = 0;
  always @(posedge clk) if (rst_n) begin
    if (dout !== (model.size() ? model[0] : dout) || full !== (model.size() == 4) || empty !== (model.size() == 0)) begin
      errors++; $display("%0t: dout %h full %b empty %b, model has %0d entries", $time, dout, full, empty, model.size()); end
    begin int n; n = model.size();         // a push is accepted only if the FIFO was not full
      if (pop && n) void'(model.pop_front());
      if (push && n < 4) model.push_back(din); end
  end
  // test plan as functional coverage
  covergroup cg_plan @(posedge clk iff rst_n);
    cp_op: coverpoint {push, pop} { bins idle = {0}; bins rd = {1}; bins wr = {2}; bins both = {3}; }
    cp_lvl: coverpoint model.size() { bins empty = {0}; bins mid = {[1:3]}; bins full = {4}; }
    x: cross cp_op, cp_lvl;   // e.g. push when full, pop when empty, both when full
  endgroup
  cg_plan cov = new;
  task automatic op(bit pu, bit po, logic [7:0] d = 0); @(negedge clk) begin push = pu; pop = po; din = d; end endtask
  task automatic report();
    @(negedge clk) begin push = 0; pop = 0; end
    @(negedge clk);
    $display("test plan coverage %0.1f%%, %0d mismatches", cov.get_coverage(), errors);
    if (cov.get_coverage() >= 100 && errors == 0) $display("PASS: every plan combination tested, no mismatch");
    else $display("FAIL: %s", errors ? "mismatches: fix the design" : "test plan not complete: see the cross holes");
  endtask
  initial begin
    FifoOp t = new;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 400 && cov.get_coverage() < 100; k++) begin
      t.mode = (k / 20) % 3 == 0 ? 1 : (k / 20) % 3 == 1 ? 0 : 2;     // fill, balanced, drain, ...
      if (!t.randomize()) $display("randomize failed");
      op(t.push, t.pop, t.data);
    end
    report();
    $finish;
  end
endmodule
`}},{id:"dv-19",group:"dv-w9",tag:"Week 9 \xB7 Lab 4",title:"FIFO verification 3: assertions for what the scoreboard misses",std:"2012",design:`// Synchronous FIFO used by the week 8-9 labs and the FIFO project.
module sync_fifo #(parameter int DW = 8, DEPTH = 8) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  localparam int AW = $clog2(DEPTH);
  logic [DW-1:0] mem [DEPTH]; logic [AW:0] wp, rp;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; end
    else begin
      if (push && !full) begin mem[wp[AW-1:0]] <= din; wp <= wp + 1; end
      if (pop && !empty) rp <= rp + 1;
    end
  assign dout = mem[rp[AW-1:0]];
  assign empty = (wp == rp) || (pop && wp == rp + 1);   // bug: a pop of the last word drops 'empty' a cycle early
  assign full = (wp[AW-1:0] == rp[AW-1:0]) && (wp[AW] != rp[AW]);
endmodule
`,tb:`// The scoreboard below checks data only. Write the FIFO assertions (week 9 exercise)
// in a checker module and bind it to sync_fifo.
module fifo_sva #(parameter int DEPTH = 4) (input logic clk, rst_n, push, pop, full, empty);
  int level;   // auxiliary: entries stored, from the accepted pushes and pops
  always @(posedge clk or negedge rst_n) if (!rst_n) level <= 0; else level <= level + (push && !full) - (pop && !empty);
  // TODO a_empty: empty is high exactly when level == 0
  // TODO a_full:  full is high exactly when level == DEPTH
  // TODO a_fe:    never full and empty together
endmodule
// TODO: bind sync_fifo fifo_sva #(.DEPTH(DEPTH)) u_sva (.*);

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo #(.DW(8), .DEPTH(4)) dut (.*);
  logic [7:0] exp_q [$]; int errors = 0;
  always @(posedge clk) if (rst_n) begin
    if (pop && !empty) begin if (dout !== exp_q[0]) errors++; void'(exp_q.pop_front()); end
    if (push && !full) exp_q.push_back(din);
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (60) @(negedge clk) begin push = $urandom_range(0, 1); pop = $urandom_range(0, 1); din = $urandom; end
    @(negedge clk) begin push = 0; pop = 0; end
    $display("scoreboard: %0d data errors", errors);
    $finish;
  end
endmodule
`,solution:{tb:`module fifo_sva #(parameter int DEPTH = 4) (input logic clk, rst_n, push, pop, full, empty);
  int level;
  always @(posedge clk or negedge rst_n) if (!rst_n) level <= 0; else level <= level + (push && !full) - (pop && !empty);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_empty: assert property (empty == (level == 0));
  a_full:  assert property (full == (level == DEPTH));
  a_fe:    assert property (!(full && empty));
endmodule
bind sync_fifo fifo_sva #(.DEPTH(DEPTH)) u_sva (.*);

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  sync_fifo #(.DW(8), .DEPTH(4)) dut (.*);
  logic [7:0] exp_q [$]; int errors = 0;
  always @(posedge clk) if (rst_n) begin
    if (pop && !empty) begin if (dout !== exp_q[0]) errors++; void'(exp_q.pop_front()); end
    if (push && !full) exp_q.push_back(din);
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (60) @(negedge clk) begin push = $urandom_range(0, 1); pop = $urandom_range(0, 1); din = $urandom; end
    @(negedge clk) begin push = 0; pop = 0; end
    $display("scoreboard: %0d data errors", errors);
    $finish;
  end
endmodule
`},check:[{assert:"tb.dut.u_sva.a_empty",fails:[35,55,175,195,245,255,505],minPass:1},{assert:"tb.dut.u_sva.a_full",fails:[],minPass:1},{assert:"tb.dut.u_sva.a_fe",fails:[],minPass:1}]},{id:"dv-p1",group:"dv-proj",tag:"Project \xB7 Lab 1",title:"Project 1: a layered FIFO verification environment",std:"2012",design:`// Synchronous FIFO, DEPTH need not be a power of 2. Find the bug with the environment.
module fifo_np2 #(parameter int DW = 8, DEPTH = 6) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  logic [DW-1:0] mem [DEPTH]; logic [$clog2(DEPTH)-1:0] wp, rp; logic [$clog2(DEPTH+1)-1:0] cnt;
  wire do_push = push && !full, do_pop = pop && !empty;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; cnt <= 0; end
    else begin
      if (do_push) begin mem[wp] <= din; wp <= (wp == DEPTH - 1) ? 0 : wp + 1; end
      if (do_pop) rp <= (rp == DEPTH) ? 0 : rp + 1;                 // bug: wraps one entry too late
      cnt <= cnt + do_push - do_pop;
    end
  assign dout = mem[rp]; assign full = cnt == DEPTH; assign empty = cnt == 0;
endmodule
`,tb:`// ---------------- layered testbench: transaction, generator, driver, monitor, scoreboard, coverage, assertions
class FifoTxn;
  rand bit push, pop; rand logic [7:0] data;
  int fill_bias = 50;                                      // % of pushes
  constraint c_bias { push dist {1 := fill_bias, 0 := 100 - fill_bias}; pop dist {1 := 100 - fill_bias, 0 := fill_bias}; }
  function string sprint(); return $sformatf("push=%0d pop=%0d data=%h", push, pop, data); endfunction
endclass
class Scoreboard;
  logic [7:0] q [$]; int n_ok = 0, n_err = 0;
  function void write(logic [7:0] d); q.push_back(d); endfunction
  function void check(logic [7:0] got);
    logic [7:0] want;
    if (q.size() == 0) begin n_err++; $display("scoreboard: pop from an empty model"); return; end
    want = q.pop_front();
    if (got !== want) begin n_err++; if (n_err <= 5) $display("%0t scoreboard: got %h, expected %h", $time, got, want); end else n_ok++;
  endfunction
endclass

module fifo_sva6 #(parameter int DEPTH = 6) (input logic clk, rst_n, push, pop, full, empty);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_fe:   assert property (!(full && empty));
  a_full_push: assert property (full && push && !pop |=> full);
  c_full: cover property (full ##1 !full ##1 full);
endmodule
bind fifo_np2 fifo_sva6 #(.DEPTH(DEPTH)) u_sva (.*);

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  fifo_np2 #(.DW(8), .DEPTH(6)) dut (.*);
  Scoreboard sb = new;
  // coverage: operation x level, sampled by the monitor
  covergroup cg_env with function sample(bit pu, bit po, bit f, bit e);
    cp_op: coverpoint {pu, po} { bins idle = {0}; bins rd = {1}; bins wr = {2}; bins both = {3}; }
    cp_lvl: coverpoint {f, e} { bins empty = {2'b01}; bins mid = {2'b00}; bins full = {2'b10}; }
    x: cross cp_op, cp_lvl;
  endgroup
  cg_env cov = new;
  // driver: applies one transaction on the next falling edge
  task automatic drive(FifoTxn t); @(negedge clk) begin push = t.push; pop = t.pop; din = t.data; end endtask
  // monitor: at each rising edge, accepted pushes go to the scoreboard, accepted pops are checked
  always @(posedge clk) if (rst_n) begin
    cov.sample(push, pop, full, empty);
    if (pop && !empty) sb.check(dout);
    if (push && !full) sb.write(din);
  end
  initial begin
    FifoTxn t = new;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: generator. Phases of 30 transactions with fill_bias 80 (fill), 50, 20 (drain), repeated,
    // until coverage is 100% (at least 300 transactions). Check randomize()'s return value.
    repeat (20) begin void'(t.randomize()); drive(t); end
    @(negedge clk) begin push = 0; pop = 0; end
    $display("scoreboard: %0d matched, %0d errors; coverage %0.1f%%", sb.n_ok, sb.n_err, cov.get_coverage());
    if (sb.n_err == 0 && sb.n_ok > 80 && cov.get_coverage() >= 100) $display("PASS: environment clean, coverage closed");
    else $display("FAIL: %s", sb.n_err ? "scoreboard errors: find the bug in design.sv" : "not enough traffic / coverage");
    $finish;
  end
endmodule
`,solution:{design:`// Synchronous FIFO, DEPTH need not be a power of 2.
module fifo_np2 #(parameter int DW = 8, DEPTH = 6) (input logic clk, rst_n, push, pop, input logic [DW-1:0] din,
    output logic [DW-1:0] dout, output logic full, empty);
  logic [DW-1:0] mem [DEPTH]; logic [$clog2(DEPTH)-1:0] wp, rp; logic [$clog2(DEPTH+1)-1:0] cnt;
  wire do_push = push && !full, do_pop = pop && !empty;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin wp <= 0; rp <= 0; cnt <= 0; end
    else begin
      if (do_push) begin mem[wp] <= din; wp <= (wp == DEPTH - 1) ? 0 : wp + 1; end
      if (do_pop) rp <= (rp == DEPTH - 1) ? 0 : rp + 1;
      cnt <= cnt + do_push - do_pop;
    end
  assign dout = mem[rp]; assign full = cnt == DEPTH; assign empty = cnt == 0;
endmodule
`,tb:`// ---------------- layered testbench: transaction, generator, driver, monitor, scoreboard, coverage, assertions
class FifoTxn;
  rand bit push, pop; rand logic [7:0] data;
  int fill_bias = 50;                                      // % of pushes
  constraint c_bias { push dist {1 := fill_bias, 0 := 100 - fill_bias}; pop dist {1 := 100 - fill_bias, 0 := fill_bias}; }
  function string sprint(); return $sformatf("push=%0d pop=%0d data=%h", push, pop, data); endfunction
endclass
class Scoreboard;
  logic [7:0] q [$]; int n_ok = 0, n_err = 0;
  function void write(logic [7:0] d); q.push_back(d); endfunction
  function void check(logic [7:0] got);
    logic [7:0] want;
    if (q.size() == 0) begin n_err++; $display("scoreboard: pop from an empty model"); return; end
    want = q.pop_front();
    if (got !== want) begin n_err++; if (n_err <= 5) $display("%0t scoreboard: got %h, expected %h", $time, got, want); end else n_ok++;
  endfunction
endclass

module fifo_sva6 #(parameter int DEPTH = 6) (input logic clk, rst_n, push, pop, full, empty);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_fe:   assert property (!(full && empty));
  a_full_push: assert property (full && push && !pop |=> full);
  c_full: cover property (full ##1 !full ##1 full);
endmodule
bind fifo_np2 fifo_sva6 #(.DEPTH(DEPTH)) u_sva (.*);

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic push = 0, pop = 0, full, empty; logic [7:0] din = 0, dout;
  fifo_np2 #(.DW(8), .DEPTH(6)) dut (.*);
  Scoreboard sb = new;
  // coverage: operation x level, sampled by the monitor
  covergroup cg_env with function sample(bit pu, bit po, bit f, bit e);
    cp_op: coverpoint {pu, po} { bins idle = {0}; bins rd = {1}; bins wr = {2}; bins both = {3}; }
    cp_lvl: coverpoint {f, e} { bins empty = {2'b01}; bins mid = {2'b00}; bins full = {2'b10}; }
    x: cross cp_op, cp_lvl;
  endgroup
  cg_env cov = new;
  // driver: applies one transaction on the next falling edge
  task automatic drive(FifoTxn t); @(negedge clk) begin push = t.push; pop = t.pop; din = t.data; end endtask
  // monitor: at each rising edge, accepted pushes go to the scoreboard, accepted pops are checked
  always @(posedge clk) if (rst_n) begin
    cov.sample(push, pop, full, empty);
    if (pop && !empty) sb.check(dout);
    if (push && !full) sb.write(din);
  end
  initial begin
    FifoTxn t = new;
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    for (int k = 0; k < 300 || cov.get_coverage() < 100; k++) begin
      if (k > 2000) break;
      t.fill_bias = (k / 30) % 3 == 0 ? 80 : (k / 30) % 3 == 1 ? 50 : 20;
      if (!t.randomize()) $display("randomize failed: %s", t.sprint());
      drive(t);
    end
    @(negedge clk) begin push = 0; pop = 0; end
    $display("scoreboard: %0d matched, %0d errors; coverage %0.1f%%", sb.n_ok, sb.n_err, cov.get_coverage());
    if (sb.n_err == 0 && sb.n_ok > 80 && cov.get_coverage() >= 100) $display("PASS: environment clean, coverage closed");
    else $display("FAIL: %s", sb.n_err ? "scoreboard errors: find the bug in design.sv" : "not enough traffic / coverage");
    $finish;
  end
endmodule
`}},{id:"dv-p2",group:"dv-proj",tag:"Project \xB7 Lab 2",title:"Project 2: round-robin arbiter verification",std:"2012",design:`// 4-requester round-robin arbiter: grant one cycle after request, priority rotates after each grant.
module rr4 (input logic clk, rst_n, input logic [3:0] req, output logic [3:0] gnt);
  logic [1:0] ptr;                     // requester with the highest priority
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin gnt <= 0; ptr <= 0; end
    else begin
      gnt <= 0;
      for (int k = 0; k < 4; k++) begin
        automatic logic [1:0] i = ptr + k;
        if (req[i]) begin gnt <= 4'b1 << i; ptr <= i; break; end     // bug: should rotate past the winner (i + 1)
      end
    end
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic [3:0] req = 0, gnt;
  rr4 dut (.*);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_one: assert property ($onehot0(gnt));
  a_req: assert property ((gnt & ~$past(req)) == 0);
  for (genvar i = 0; i < 4; i++) begin : fair
    // a requester holds req until granted: a fair arbiter grants it within 4 cycles
    a_fair: assert property (req[i] |-> ##[1:4] gnt[i]);
  end
  covergroup cg_arb @(posedge clk iff rst_n);
    cp_n: coverpoint $countones(req) { bins n[] = {[0:4]}; }    // 0 to 4 simultaneous requests
    cp_gnt: coverpoint gnt { bins g[] = {1, 2, 4, 8}; bins none = {0}; }
  endgroup
  cg_arb cov = new;
  // requesters: new work arrives at random (load %); a requester keeps req high while it has
  // pending work, so it requests again right after a grant when it has more to do
  int load = 30;
  int loads [5] = '{10, 30, 60, 90, 100};
  int pending [4];
  always @(negedge clk) if (rst_n) for (int i = 0; i < 4; i++) begin
    int p; p = pending[i] - gnt[i];
    if (p < 3 && $urandom_range(0, 99) < load) p++;
    pending[i] = p; req[i] <= p > 0;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: run traffic phases of 60 cycles at each load in 'loads' (light to saturated)
    // so that 0..4 simultaneous requests and every grant are covered.
    repeat (60) @(negedge clk);
    $display("request coverage %0.1f%%", cov.get_coverage());
    $finish;
  end
endmodule
`,solution:{design:`// 4-requester round-robin arbiter: grant one cycle after request, priority rotates after each grant.
module rr4 (input logic clk, rst_n, input logic [3:0] req, output logic [3:0] gnt);
  logic [1:0] ptr;                     // requester with the highest priority
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin gnt <= 0; ptr <= 0; end
    else begin
      gnt <= 0;
      for (int k = 0; k < 4; k++) begin
        automatic logic [1:0] i = ptr + k;
        if (req[i]) begin gnt <= 4'b1 << i; ptr <= i + 1; break; end
      end
    end
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic [3:0] req = 0, gnt;
  rr4 dut (.*);
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_one: assert property ($onehot0(gnt));
  a_req: assert property ((gnt & ~$past(req)) == 0);
  for (genvar i = 0; i < 4; i++) begin : fair
    // a requester holds req until granted: a fair arbiter grants it within 4 cycles
    a_fair: assert property (req[i] |-> ##[1:4] gnt[i]);
  end
  covergroup cg_arb @(posedge clk iff rst_n);
    cp_n: coverpoint $countones(req) { bins n[] = {[0:4]}; }    // 0 to 4 simultaneous requests
    cp_gnt: coverpoint gnt { bins g[] = {1, 2, 4, 8}; bins none = {0}; }
  endgroup
  cg_arb cov = new;
  // requesters: new work arrives at random (load %); a requester keeps req high while it has
  // pending work, so it requests again right after a grant when it has more to do
  int load = 30;
  int loads [5] = '{10, 30, 60, 90, 100};
  int pending [4];
  always @(negedge clk) if (rst_n) for (int i = 0; i < 4; i++) begin
    int p; p = pending[i] - gnt[i];
    if (p < 3 && $urandom_range(0, 99) < load) p++;
    pending[i] = p; req[i] <= p > 0;
  end
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    foreach (loads[k]) begin load = loads[k]; repeat (60) @(negedge clk); end
    $display("request coverage %0.1f%%", cov.get_coverage());
    $finish;
  end
endmodule
`},check:[{assert:"a_one",fails:[],minPass:1},{assert:"a_req",fails:[],minPass:1},{assert:"tb.fair[0].a_fair",fails:[],minPass:1},{assert:"tb.fair[1].a_fair",fails:[],minPass:1},{assert:"tb.fair[2].a_fair",fails:[],minPass:1},{assert:"tb.fair[3].a_fair",fails:[],minPass:1},{cg:"cg_arb",min:100}]},{id:"dv-p3",group:"dv-proj",tag:"Project \xB7 Lab 3",title:"Project 3: APB register block",std:"2012",design:`// APB register block: CTRL (0x0, rw, 8 bits), STAT (0x4, read-only: {4'h0, busy, err, rdy, en}),
// DATA (0x8, rw), IRQ (0xC, write-1-to-clear: bits set by 'irq_in').
module apb_regs (input logic pclk, presetn, psel, penable, pwrite, input logic [7:0] paddr, pwdata,
                 output logic [7:0] prdata, output logic pready, input logic [3:0] irq_in);
  logic [7:0] ctrl, data; logic [3:0] irq;
  assign pready = 1;
  wire wr = psel && penable && pwrite;
  always_ff @(posedge pclk or negedge presetn)
    if (!presetn) begin ctrl <= 0; data <= 0; irq <= 0; end
    else begin
      if (wr && paddr == 8'h0) ctrl <= pwdata;
      if (wr && paddr == 8'h8) data <= pwdata;
      irq <= (irq | irq_in) & ~((wr && paddr == 8'hC) ? pwdata[3:0] : 4'h0);
      if (wr && paddr == 8'h4) ctrl <= pwdata;               // bug: a write to STAT changes CTRL
    end
  always_comb case (paddr)
    8'h0: prdata = ctrl; 8'h4: prdata = {4'h0, 2'b00, 1'b1, ctrl[0]}; 8'h8: prdata = data; 8'hC: prdata = {4'h0, irq};
    default: prdata = 8'h00;
  endcase
endmodule
`,tb:`// Register model: what each register should read back, updated by every write.
class RegModel;
  logic [7:0] ctrl = 0, data = 0; logic [3:0] irq = 0;
  function void write(logic [7:0] a, logic [7:0] d);
    case (a) 8'h0: ctrl = d; 8'h8: data = d; 8'hC: irq = irq & ~d[3:0]; default: ; endcase
  endfunction
  function logic [7:0] read(logic [7:0] a);
    case (a) 8'h0: return ctrl; 8'h4: return {4'h0, 2'b00, 1'b1, ctrl[0]}; 8'h8: return data; 8'hC: return {4'h0, irq}; default: return 0; endcase
  endfunction
endclass

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic psel = 0, penable = 0, pwrite = 0, pready; logic [7:0] paddr = 0, pwdata = 0, prdata; logic [3:0] irq_in = 0;
  apb_regs dut (.pclk(clk), .presetn(rst_n), .*);
  RegModel m = new;
  int errors = 0, n_rd = 0;
  // APB driver tasks
  task automatic apb_write(logic [7:0] a, logic [7:0] d);
    @(negedge clk) begin psel = 1; penable = 0; pwrite = 1; paddr = a; pwdata = d; end
    @(negedge clk) penable = 1;
    @(negedge clk) begin psel = 0; penable = 0; end
    m.write(a, d);
  endtask
  task automatic apb_read(logic [7:0] a);
    @(negedge clk) begin psel = 1; penable = 0; pwrite = 0; paddr = a; end
    @(negedge clk) penable = 1;
    @(posedge clk) begin n_rd++; if (prdata !== m.read(a)) begin errors++; $display("%0t: read %h = %h, model %h", $time, a, prdata, m.read(a)); end end
    @(negedge clk) begin psel = 0; penable = 0; end
  endtask
  // interrupt sources: pulse irq bits now and then (the model tracks them too)
  always @(negedge clk) begin irq_in = 0; if (rst_n && $urandom_range(0, 9) == 0) irq_in = 4'b1 << $urandom_range(0, 3); end
  always @(posedge clk) if (rst_n) m.irq = m.irq | irq_in;
  // protocol assertions
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_setup:  assert property ($rose(psel) |-> !penable);
  a_access: assert property (psel && !penable |=> psel && penable);
  a_stable: assert property (psel && penable && !pready |=> $stable(paddr) && $stable(pwrite));
  // address-map coverage
  covergroup cg_map @(posedge clk iff (psel && penable));
    cp_a: coverpoint paddr { bins ctrl = {8'h0}; bins stat = {8'h4}; bins data = {8'h8}; bins irq = {8'hC}; }
    cp_d: coverpoint pwrite;
    x: cross cp_a, cp_d;
  endgroup
  cg_map cov = new;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: a random register test: 80 accesses to random registers (0, 4, 8, C), random read/write
    // and data. Every register must be written and read at least once (see the cross coverage).
    apb_write(8'h0, 8'h5A); apb_read(8'h0);
    $display("%0d reads checked, %0d errors, map coverage %0.1f%%", n_rd, errors, cov.get_coverage());
    if (errors == 0 && cov.get_coverage() >= 100) $display("PASS: registers behave as specified"); else $display("FAIL");
    $finish;
  end
endmodule
`,solution:{design:`// APB register block: CTRL (0x0, rw, 8 bits), STAT (0x4, read-only: {4'h0, busy, err, rdy, en}),
// DATA (0x8, rw), IRQ (0xC, write-1-to-clear: bits set by 'irq_in').
module apb_regs (input logic pclk, presetn, psel, penable, pwrite, input logic [7:0] paddr, pwdata,
                 output logic [7:0] prdata, output logic pready, input logic [3:0] irq_in);
  logic [7:0] ctrl, data; logic [3:0] irq;
  assign pready = 1;
  wire wr = psel && penable && pwrite;
  always_ff @(posedge pclk or negedge presetn)
    if (!presetn) begin ctrl <= 0; data <= 0; irq <= 0; end
    else begin
      if (wr && paddr == 8'h0) ctrl <= pwdata;
      if (wr && paddr == 8'h8) data <= pwdata;
      irq <= (irq | irq_in) & ~((wr && paddr == 8'hC) ? pwdata[3:0] : 4'h0);
    end
  always_comb case (paddr)
    8'h0: prdata = ctrl; 8'h4: prdata = {4'h0, 2'b00, 1'b1, ctrl[0]}; 8'h8: prdata = data; 8'hC: prdata = {4'h0, irq};
    default: prdata = 8'h00;
  endcase
endmodule
`,tb:`// Register model: what each register should read back, updated by every write.
class RegModel;
  logic [7:0] ctrl = 0, data = 0; logic [3:0] irq = 0;
  function void write(logic [7:0] a, logic [7:0] d);
    case (a) 8'h0: ctrl = d; 8'h8: data = d; 8'hC: irq = irq & ~d[3:0]; default: ; endcase
  endfunction
  function logic [7:0] read(logic [7:0] a);
    case (a) 8'h0: return ctrl; 8'h4: return {4'h0, 2'b00, 1'b1, ctrl[0]}; 8'h8: return data; 8'hC: return {4'h0, irq}; default: return 0; endcase
  endfunction
endclass

module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic psel = 0, penable = 0, pwrite = 0, pready; logic [7:0] paddr = 0, pwdata = 0, prdata; logic [3:0] irq_in = 0;
  apb_regs dut (.pclk(clk), .presetn(rst_n), .*);
  RegModel m = new;
  int errors = 0, n_rd = 0;
  // APB driver tasks
  task automatic apb_write(logic [7:0] a, logic [7:0] d);
    @(negedge clk) begin psel = 1; penable = 0; pwrite = 1; paddr = a; pwdata = d; end
    @(negedge clk) penable = 1;
    @(negedge clk) begin psel = 0; penable = 0; end
    m.write(a, d);
  endtask
  task automatic apb_read(logic [7:0] a);
    @(negedge clk) begin psel = 1; penable = 0; pwrite = 0; paddr = a; end
    @(negedge clk) penable = 1;
    @(posedge clk) begin n_rd++; if (prdata !== m.read(a)) begin errors++; $display("%0t: read %h = %h, model %h", $time, a, prdata, m.read(a)); end end
    @(negedge clk) begin psel = 0; penable = 0; end
  endtask
  // interrupt sources: pulse irq bits now and then (the model tracks them too)
  always @(negedge clk) begin irq_in = 0; if (rst_n && $urandom_range(0, 9) == 0) irq_in = 4'b1 << $urandom_range(0, 3); end
  always @(posedge clk) if (rst_n) m.irq = m.irq | irq_in;
  // protocol assertions
  default clocking cb @(posedge clk); endclocking
  default disable iff (!rst_n);
  a_setup:  assert property ($rose(psel) |-> !penable);
  a_access: assert property (psel && !penable |=> psel && penable);
  a_stable: assert property (psel && penable && !pready |=> $stable(paddr) && $stable(pwrite));
  // address-map coverage
  covergroup cg_map @(posedge clk iff (psel && penable));
    cp_a: coverpoint paddr { bins ctrl = {8'h0}; bins stat = {8'h4}; bins data = {8'h8}; bins irq = {8'hC}; }
    cp_d: coverpoint pwrite;
    x: cross cp_a, cp_d;
  endgroup
  cg_map cov = new;
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    repeat (80) begin
      logic [7:0] a; a = 8'($urandom_range(0, 3) * 4);
      if ($urandom_range(0, 1)) apb_write(a, $urandom); else apb_read(a);
    end
    $display("%0d reads checked, %0d errors, map coverage %0.1f%%", n_rd, errors, cov.get_coverage());
    if (errors == 0 && cov.get_coverage() >= 100) $display("PASS: registers behave as specified"); else $display("FAIL");
    $finish;
  end
endmodule
`}},{id:"dv-p4",group:"dv-proj",tag:"Project \xB7 Lab 4",title:"Project 4: UART with error injection",std:"2012",design:`// UART loopback: transmitter -> receiver, 8N1, 4 clocks per bit. The receiver flags a framing
// error (frame_err) when the stop bit is 0. A test hook (force_bad_stop) makes the TX send a 0 stop bit.
module uart_lb (input logic clk, rst_n, send, force_bad_stop, input logic [7:0] tx_data,
                output logic tx, tx_busy, rx_valid, frame_err, output logic [7:0] rx_data);
  // transmitter
  logic [9:0] sh; logic [3:0] tb_n; logic [1:0] tph;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin tx <= 1; tx_busy <= 0; end
    else if (!tx_busy) begin if (send) begin tx_busy <= 1; sh <= {!force_bad_stop, tx_data, 1'b0}; tb_n <= 0; tph <= 0; end end
    else begin tx <= sh[0]; tph <= tph + 1; if (tph == 3) begin sh <= {1'b1, sh[9:1]}; tb_n <= tb_n + 1; if (tb_n == 9) begin tx_busy <= 0; tx <= 1; end end end
  // receiver: detects the start edge, samples in the middle of each bit
  logic busy; logic [3:0] rb_n; logic [1:0] rph; logic [8:0] rsh; logic tx_q;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin busy <= 0; rx_valid <= 0; frame_err <= 0; tx_q <= 1; end
    else begin
      tx_q <= tx; rx_valid <= 0; frame_err <= 0;
      if (!busy) begin if (tx_q && !tx) begin busy <= 1; rph <= 1; rb_n <= 0; end end
      else begin
        rph <= rph + 1;
        if (rph == 2) begin                                      // middle of the bit
          if (rb_n == 9) begin busy <= 0; rx_valid <= 1; rx_data <= rsh[8:1]; frame_err <= 1'b0; end   // bug: stop bit not checked
          else begin rsh <= {tx, rsh[8:1]}; rb_n <= rb_n + 1; end
        end
      end
    end
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic send = 0, bad = 0, tx, tx_busy, rx_valid, frame_err; logic [7:0] tx_data = 0, rx_data;
  uart_lb dut (.clk, .rst_n, .send, .force_bad_stop(bad), .tx_data, .tx, .tx_busy, .rx_valid, .frame_err, .rx_data);
  // scoreboard: every frame sent is expected back, with its framing status
  logic [8:0] exp_q [$]; int n_ok = 0, errors = 0;
  always @(posedge clk) if (rx_valid) begin
    logic [8:0] e; e = exp_q.pop_front();
    if ({frame_err, rx_data} !== e) begin errors++; $display("%0t: received %h err=%b, expected %h err=%b", $time, rx_data, frame_err, e[7:0], e[8]); end else n_ok++;
  end
  // line assertions (with the frame counter from the SVA UART lab)
  int fcnt = 0; logic tq = 1;
  always @(posedge clk) begin tq <= tx; if (fcnt == 0) begin if (tq && !tx) fcnt <= 1; end else fcnt <= (fcnt == 39) ? 0 : fcnt + 1; end
  a_start: assert property (@(posedge clk) disable iff (!rst_n) $fell(tx) && fcnt == 0 |-> !tx[*4]);
  // coverage: data patterns and framing errors
  covergroup cg_uart with function sample(logic [7:0] d, logic err);
    cp_d: coverpoint d { bins zero = {0}; bins ones = {8'hFF}; bins alt = {8'h55, 8'hAA}; bins other = {[1:8'hFE]}; }
    cp_err: coverpoint err;
  endgroup
  cg_uart cov = new;
  task automatic send_byte(logic [7:0] d, bit bad_stop = 0);
    @(negedge clk) begin send = 1; tx_data = d; bad = bad_stop; end
    exp_q.push_back({bad_stop, d}); cov.sample(d, bad_stop);
    @(negedge clk) send = 0;
    wait (!tx_busy); repeat (3) @(negedge clk);
  endtask
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    // TODO: send the corner bytes 00, FF, 55, AA, 20 random bytes, and 4 frames with a bad stop bit
    // (error injection: send_byte(d, 1)). The scoreboard expects frame_err for those.
    send_byte(8'h3C);
    repeat (10) @(negedge clk);
    $display("%0d frames ok, %0d errors, coverage %0.1f%%", n_ok, errors, cov.get_coverage());
    if (errors == 0 && n_ok >= 28 && cov.get_coverage() >= 100) $display("PASS: data and framing errors verified"); else $display("FAIL");
    $finish;
  end
endmodule
`,solution:{design:`// UART loopback: transmitter -> receiver, 8N1, 4 clocks per bit. The receiver flags a framing
// error (frame_err) when the stop bit is 0. A test hook (force_bad_stop) makes the TX send a 0 stop bit.
module uart_lb (input logic clk, rst_n, send, force_bad_stop, input logic [7:0] tx_data,
                output logic tx, tx_busy, rx_valid, frame_err, output logic [7:0] rx_data);
  // transmitter
  logic [9:0] sh; logic [3:0] tb_n; logic [1:0] tph;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin tx <= 1; tx_busy <= 0; end
    else if (!tx_busy) begin if (send) begin tx_busy <= 1; sh <= {!force_bad_stop, tx_data, 1'b0}; tb_n <= 0; tph <= 0; end end
    else begin tx <= sh[0]; tph <= tph + 1; if (tph == 3) begin sh <= {1'b1, sh[9:1]}; tb_n <= tb_n + 1; if (tb_n == 9) begin tx_busy <= 0; tx <= 1; end end end
  // receiver: detects the start edge, samples in the middle of each bit
  logic busy; logic [3:0] rb_n; logic [1:0] rph; logic [8:0] rsh; logic tx_q;
  always_ff @(posedge clk or negedge rst_n)
    if (!rst_n) begin busy <= 0; rx_valid <= 0; frame_err <= 0; tx_q <= 1; end
    else begin
      tx_q <= tx; rx_valid <= 0; frame_err <= 0;
      if (!busy) begin if (tx_q && !tx) begin busy <= 1; rph <= 1; rb_n <= 0; end end
      else begin
        rph <= rph + 1;
        if (rph == 2) begin                                      // middle of the bit
          if (rb_n == 9) begin busy <= 0; rx_valid <= 1; rx_data <= rsh[8:1]; frame_err <= !tx; end
          else begin rsh <= {tx, rsh[8:1]}; rb_n <= rb_n + 1; end
        end
      end
    end
endmodule
`,tb:`module tb;
  logic clk = 0, rst_n = 0; always #5 clk = ~clk;
  logic send = 0, bad = 0, tx, tx_busy, rx_valid, frame_err; logic [7:0] tx_data = 0, rx_data;
  uart_lb dut (.clk, .rst_n, .send, .force_bad_stop(bad), .tx_data, .tx, .tx_busy, .rx_valid, .frame_err, .rx_data);
  // scoreboard: every frame sent is expected back, with its framing status
  logic [8:0] exp_q [$]; int n_ok = 0, errors = 0;
  always @(posedge clk) if (rx_valid) begin
    logic [8:0] e; e = exp_q.pop_front();
    if ({frame_err, rx_data} !== e) begin errors++; $display("%0t: received %h err=%b, expected %h err=%b", $time, rx_data, frame_err, e[7:0], e[8]); end else n_ok++;
  end
  // line assertions (with the frame counter from the SVA UART lab)
  int fcnt = 0; logic tq = 1;
  always @(posedge clk) begin tq <= tx; if (fcnt == 0) begin if (tq && !tx) fcnt <= 1; end else fcnt <= (fcnt == 39) ? 0 : fcnt + 1; end
  a_start: assert property (@(posedge clk) disable iff (!rst_n) $fell(tx) && fcnt == 0 |-> !tx[*4]);
  // coverage: data patterns and framing errors
  covergroup cg_uart with function sample(logic [7:0] d, logic err);
    cp_d: coverpoint d { bins zero = {0}; bins ones = {8'hFF}; bins alt = {8'h55, 8'hAA}; bins other = {[1:8'hFE]}; }
    cp_err: coverpoint err;
  endgroup
  cg_uart cov = new;
  task automatic send_byte(logic [7:0] d, bit bad_stop = 0);
    @(negedge clk) begin send = 1; tx_data = d; bad = bad_stop; end
    exp_q.push_back({bad_stop, d}); cov.sample(d, bad_stop);
    @(negedge clk) send = 0;
    wait (!tx_busy); repeat (3) @(negedge clk);
  endtask
  logic [7:0] corners [4] = '{8'h00, 8'hFF, 8'h55, 8'hAA};
  initial begin
    $dumpfile("dump.vcd"); $dumpvars(0, tb);
    #12 rst_n = 1;
    foreach (corners[k]) send_byte(corners[k]);
    repeat (20) send_byte($urandom);
    repeat (4) send_byte($urandom, 1);
    repeat (10) @(negedge clk);
    $display("%0d frames ok, %0d errors, coverage %0.1f%%", n_ok, errors, cov.get_coverage());
    if (errors == 0 && n_ok >= 28 && cov.get_coverage() >= 100) $display("PASS: data and framing errors verified"); else $display("FAIL");
    $finish;
  end
endmodule
`}}],tn={"sva-b1":{problem:"A comment like 'state is one-hot' is never checked. An immediate assertion turns it into code that runs every time the procedure runs, and stops being silent the moment the design breaks it.",tasks:["Write a_onehot inside always @(state) with $onehot.","Write a_no_x at each clock, only while load is high, with $isunknown.","Run: count the errors and find the two bugs (one in the design, one in the testbench)."],learn:"Immediate assertions: syntax, labels, else actions with $error, and the $onehot / $isunknown system functions."},"sva-b2":{problem:"'Every request is acknowledged within 3 clocks' needs a fork, a timeout and a disable in plain Verilog. In SVA it is one line, it checks every request independently, and it shows each attempt on the waveform.",tasks:["Write a_req_ack: $rose(req) |-> ##[1:3] ack, clocked on posedge clk.","Run: one request is answered too late. Find the \u25BC on the waveform.","Hover the green \u25B2: which clock did each passing attempt end on?"],learn:"Concurrent assertions: clock, implication |->, delay ranges ##[m:n], and how each attempt passes or fails."},"sva-b3":{problem:"A test that changes signals exactly at the clock edge creates a race: code that reads the signals at that edge may see the old or the new value. Concurrent assertions avoid the race: they always sample the value from just before the edge.",tasks:["Run: compare when a_imm and a_conc first fail (output and \u25BC markers).","Explain the one-clock difference with the Preponed region.","Change the test to drive on @(negedge clk) and run again until both agree."],learn:"SVA sampling: values are taken in the Preponed region, evaluated in Observed, actions run in Reactive. Drive away from the sampling edge."},"sva-b4":{problem:"Off-by-one-cycle mistakes are the most common assertion bug. |-> starts the consequent in the same clock as the antecedent match; |=> starts it in the next clock.",tasks:["Write a_same with |-> and a_next with |=>.","Run: for each of the three accesses, which assertion passes and which fails? Read the \u25B2/\u25BC on the waveform.","Explain why the late ack fails both."],learn:"Overlapping vs non-overlapping implication, and that a false antecedent is a vacuous success."},"sva-b5":{problem:"Two classic gotchas (Sutherland, DesignCon 2006): with a level antecedent, every clock while req is high starts a new attempt; with a level consequent, an ack that was already high passes even though it never rose.",tasks:["Run the given assertion: note the false failure and the missed bug.","Use $rose on both sides and run again.","Check: exactly one failure, at the stuck-ack request."],learn:"Level vs edge in properties: $rose / $fell to start one attempt per event and to require a change."},"sva-b6":{problem:"Assertions written for normal operation fire during reset, when outputs are forced to their reset values. Those failures are noise and they hide real ones.",tasks:["Run: count the failures and find which happen in reset.","Add disable iff (!rst_n).","Run again: only the real glitch must fail."],learn:"disable iff: an asynchronous abort that cancels attempts while reset is active (it uses current values, not sampled ones)."},"sva-b7":{problem:"Assertion results feed the test: counters, error limits, end-of-test status. Some phases of a test deliberately break a protocol, and the checker must be switched off there.",tasks:["Add a pass action that counts passes and a fail action that counts and reports failures.","Wrap the low-power phase in $assertoff / $asserton.","Run until the test prints PASS."],learn:"Pass/else action blocks, $error vs $fatal, and assertion control tasks ($assertoff, $asserton, $assertkill)."},"sva-b8":{problem:"The same temporal property can be an obligation of the design (assert), a promise about the environment (assume: formal tools use it to restrict inputs, simulation checks it), or evidence that a scenario happened (cover).",tasks:["Write the assumption, the assertion and the cover.","Run: which one catches the long request, which one the spurious grant?","Check that c_b2b was covered once."],learn:"assert vs assume vs cover property, and how each is reported."},"sva-b9":{problem:"Verification engineers often cannot edit the RTL, and designers do not want verification code in it. bind instantiates a checker module inside every instance of a design module from the outside.",tasks:["Write a_lat2 in pipe2_sva.","Bind pipe2_sva to pipe2 with .* port connections.","Run: the assertion appears as tb.dut.u_sva.a_lat2. Which data value is corrupted?"],learn:"bind syntax, checker modules, and $past(expr, n) to compare with a value from n clocks ago."},"sva-b10":{problem:"Copying the same assertion with small changes is error-prone. Properties take arguments (signals, expressions, even delays), and default clocking / default disable iff remove the repeated clock and reset.",tasks:["Declare default clocking and default disable iff.","Write p_handshake(r, a, max) and instantiate it three times.","Run: which channel misses its window?"],learn:"Property declarations with formal arguments, default clocking, default disable iff."},"sva-s1":{problem:"Most protocol rules are 'B follows A within N cycles' or 'B follows A eventually'. SVA expresses both with cycle delays: ##n exactly, ##[m:n] a window, ##[m:$] unbounded.",tasks:["Write a_win, a_ev and a_sev.","Run: one done is late; one cmd is never answered.","Compare a_ev (weak, unfinished at the end) with a_sev (strong, fails at the end)."],learn:"Cycle delays and ranges, unbounded ranges, and weak vs strong behaviour at the end of simulation."},"sva-s2":{problem:"Bursts and wait states are counts of consecutive cycles. [*n] repeats a Boolean or a sequence n times back to back; [*m:n] allows a range.",tasks:["Write a_burst and a_wait.","Run: one burst is one beat short; one request waits too long.","Find both \u25BC and explain the failure times."],learn:"Consecutive repetition, zero repetitions ([*0:n]) and how a range ends early when the next element matches."},"sva-s3":{problem:"Data beats are not always back to back. 'The 4th beat' is a goto repetition b[->4]; 'exactly 4 beats, then later' is non-consecutive b[=4].",tasks:["Write a_goto and a_ncons.","Run the three reads: on time, done late, and a 5th beat.","Explain which assertion fails for each read."],learn:"b[->n] ends ON the nth b; b[=n] allows more cycles after it as long as b does not occur again."},"sva-s4":{problem:"A bus master must keep its grant for the whole transfer. 'Throughout' ties a Boolean to every cycle of a sequence.",tasks:["Write a_gnt with throughout and a goto repetition.","Run: in the second transfer gnt drops before the 3rd ack.","Why does it fail when gnt drops, not at the end?"],learn:"expr throughout seq = (expr[*0:$]) intersect seq: checked at every cycle of the sequence."},"sva-s5":{problem:"Some rules bound where something happens (inside a window) or how long a sequence lasts. within and intersect express both without counting by hand.",tasks:["Write a_we with within and a_len with intersect.","Run: in the 2nd chip-select window the write pulse sticks out of the window; the 2nd packet is too long.","Explain the failure times."],learn:"s1 within s2 (s1 happens somewhere inside s2), s1 intersect s2 (same start and same end), length limits with 1[*m:n]."},"sva-s6":{problem:"Two acknowledges that may come in any order, two acceptable outcomes, the first of several matches: and, or and first_match cover these without writing every case.",tasks:["Write a_both, a_either and c_first.","Run: one request misses ack_a; one request gets neither retry nor done in time.","Remove first_match from c_first and compare the cover count."],learn:"Sequence and (both match, end at the later one), or (either), first_match (keep only the earliest match)."},"sva-s7":{problem:"A named sequence can be reused with different arguments, and its end point can be tested from another property with .triggered: 'X happens only when sequence S has just completed'.",tasks:["Write a_wr, and a_irq using s_write(STATUS).triggered.","Run: one interrupt fires after a write to another register, one without any write.","Explain why .triggered is true only in the cycle the sequence ends."],learn:"sequence declarations with arguments, sequence instances, and the .triggered end-point method."},"sva-p1":{problem:"In a valid/ready (AXI-stream style) handshake the sender may not change its mind: once valid is high, valid and data must hold until ready. Two simple rules with $stable catch most sender bugs.",tasks:["Write a_hold, a_stable and the cover.","Run: one transfer changes data while stalled, one drops valid before ready.","Read the waveform rows \u25C6 for the cover hits."],learn:"$stable / $changed compare the sampled value with the previous clock's; the 'valid && !ready |=> \u2026' pattern."},"sva-p2":{problem:"cnt == $past(cnt) + 1 looks right, but Verilog sizes it to 32 bits (the literal 1 is 32-bit): 15 + 1 is 16, not 0, so the assertion fails at every wrap. The fix is a cast back to 4 bits.",tasks:["Run the starting code first (the placeholder) and then write cnt == $past(cnt) + 1: see it fail at each wrap.","Fix it with 4'($past(cnt) + 1).","Check that only the real bug (a missed increment) still fails."],learn:"$past(expr, n), and Verilog expression sizing inside assertions."},"sva-p3":{problem:"Many checks are about bit patterns: one-hot state, at most one grant, no unknown bits. SVA's system functions make them one-liners.",tasks:["Write the three assertions.","Run: find the double grant, the X in the address and the 3 simultaneous requests.","Why must X be checked with $isunknown and not with == 'x?"],learn:"$onehot, $onehot0, $isunknown, $countones (and $countbits)."},"sva-p4":{problem:"Some rules forbid a scenario ('never a read right after a write'); others depend on a mode. not and if/else express these directly.",tasks:["Write a_rw with not, and a_lat with if/else.","Run: one read follows a write directly; one slow request is acknowledged after 2 cycles.","What does a vacuous success of a_lat look like?"],learn:"not (property), if (cond) p1 else p2, and that a forbidden sequence fails at the cycle it completes."},"sva-p5":{problem:"Checking data needs memory: the value that went in must be compared with what comes out later. A local variable stores it per attempt, so overlapping transactions each keep their own value.",tasks:["Write p_data with a local variable x, assigned when in_v is high.","Run: which input value comes out wrong?","Why would a module-level variable not work with back-to-back inputs?"],learn:"Local variables in properties: declaration, assignment in a sequence match item, use in the consequent."},"sva-p6":{problem:"Responses can come back out of order. A local variable captures each request's ID so the response with that ID is found, whatever comes in between.",tasks:["Write p_id with a local variable v.","Run: ID 3 is never answered; ID 2's second request gets the wrong ID back.","What happens if two requests with the same ID overlap?"],learn:"Local variables for transaction IDs, and ##[m:n] searching for a matching response."},"sva-p7":{problem:"'Stay on until cleared' and 'eventually granted' have no fixed length. until and s_eventually express them; at the end of simulation, strong operators report what never happened.",tasks:["Write a_led with until and a_live with s_eventually.","Run: the LED goes off before clr in the 2nd error; the last request is never granted.","When is a_live's failure reported?"],learn:"until / until_with, s_eventually, and why liveness failures are only known at the end of the test."},"sva-p8":{problem:"An assertion that never fails is not necessarily right: if its antecedent never happens, every attempt is a vacuous success. A cover on the antecedent shows whether the assertion was ever really tested.",tasks:["Run the starting code: a_we never fails, but check its vacuous count.","Add c_wr on the antecedent: it is never covered with the typo 2'd4.","Fix the antecedent and find the real bug."],learn:"Vacuous success, antecedent coverage, and why every assertion should have a companion cover."},"sva-a1":{problem:"FSM bugs are illegal states and illegal transitions. Four short assertions cover most of them: encoding, reset state, how a state may be entered, and what must follow.",tasks:["Write the four assertions (labels given).","Run: the irq-during-stall path re-enters DECODE from EXEC.","Which two assertions catch it, and at which clocks?"],learn:"FSM checks: $onehot encoding, reset value, entry conditions with $past, and successor rules with |=>."},"sva-a2":{problem:"A FIFO's flags and occupancy must agree on every cycle, and data must come out as it went in. Five assertions (from the week 9 FIFO exercise) pin down the contract.",tasks:["Write the five assertions; default clocking and disable iff are given.","Run: the test pushes 10 words into an 8-deep FIFO. Which assertion catches the late full flag?","Write a cover for 'push while full' (not checked)."],learn:"Interface-level FIFO checks: flag consistency, occupancy bookkeeping with $past, and first-word data integrity with a local variable."},"sva-a3":{problem:"Memories are checked by their data contract: whatever was last written to an address comes back when it is read. Local variables carry the address and data from the write to the read.",tasks:["Write a_mutex, a_addr and a_data.","Run: which address reads back wrong data?","Explain why the bug only shows for addresses 8 to 15."],learn:"Memory data integrity with local variables and a goto search for the matching read."},"sva-a4":{problem:"An arbiter must give at most one grant, only to requesters, and never starve anyone. Fairness is a liveness-like property bounded by the number of requesters: a request is granted within N cycles.",tasks:["Write a_one and a_req.","Write the fairness assertion inside the generate loop: one instance per requester.","Run: which requester starves, and when does fair[3].a_fair report it?"],learn:"Exclusive grants with $onehot0, grant-implies-request, and per-requester bounded fairness in a generate loop."},"sva-a5":{problem:"APB has two phases: SETUP (PSEL high, PENABLE low) then ACCESS (PENABLE high) until PREADY. During wait states the master must hold address, direction and write data. Four assertions check a master against the spec.",tasks:["Write the four assertions (default clocking and reset are given).","Run: one transfer with wait states changes PADDR. Which assertion fails?","Add a cover for a transfer with exactly 2 wait states."],learn:"Writing protocol checkers from a bus specification: phase order and signal stability."},"sva-a6":{problem:"A four-phase (return-to-zero) handshake has a strict order: req\u2191, ack\u2191, req\u2193, ack\u2193. Each edge has a precondition; checking edges with $rose/$fell captures the protocol.",tasks:["Write the five assertions.","Run: in the third handshake ack falls before req. Which assertions fail?","Draw the four phases on the waveform."],learn:"Edge-based protocol checks with $rose/$fell and Boolean preconditions."},"sva-a7":{problem:"A serial frame is a fixed pattern in time: start bit, 8 data bits, stop bit, each a fixed number of clocks. Delays and repetition counts in bit times turn the frame format into assertions.",tasks:["Write a_start (start bit lasts a full bit time) and a_stop (stop bit is high), using the frame counter fcnt.","Run three frames: which byte has a framing error?","Remove '&& fcnt == 0' and run: why do falling edges inside the data now cause false failures?"],learn:"Timing-based protocol checks: delays and repetitions measured in bit times."},"sva-a8":{problem:"The DesignCon tutorial's test plan for a program counter: load, increment, hold. One assertion per row of the plan, written from the spec and not from the RTL.",tasks:["Write a_load, a_inc and a_hold.","Run: the counter wraps through FF \u2192 00 (a_inc must still pass) and loses one increment.","Which row of the test plan catches the bug?"],learn:"Turning a test plan table into assertions; $past for load values; casts for wrap-around arithmetic."},"cov-1":{problem:"Coverage measures what the stimulus did, not what it was meant to do. The simplest model is a coverpoint with automatic bins: one bin per value for small fields, and auto_bin_max (default 64) equal ranges for wide ones.",tasks:["Run the starting code: 8 bins for opcode. How many were hit?","Add cp_addr with option.auto_bin_max = 4.","Run: which address range is never hit, and why (look at the stimulus)?"],learn:"covergroup, coverpoint, automatic bins, auto_bin_max, sampling on a clock event, and reading a coverage report."},"cov-2":{problem:"Automatic bins rarely match what matters. Operands are interesting at 0, at the maximum, small and big; operations one by one. Explicit bins turn the verification plan into the coverage model.",tasks:["Write the bins of cp_a: zero, small, big[3], max.","Write cp_op with bins ops[] (one per value).","Run: which bins are empty? Which test would fill them?"],learn:"bins name = {values, [ranges]}; bins name[] (one per value); bins name[N] (values split into N bins)."},"cov-3":{problem:"Covering every state is not enough: bugs live in transitions (back-to-back transfers, wait states). Transition bins count sequences of values; illegal_bins flag transitions that must never happen.",tasks:["Write the five transition bins and the illegal bin.","Run: which transition is not covered, and what does the illegal bin report?","Add the missing scenario to the test and reach 100%."],learn:"Transition bins (a => b), repetition [*n], and illegal_bins for transitions."},"cov-4":{problem:"Command encodings group values by bit patterns, some codes do not matter (NOP) and some must never appear (reserved). wildcard, ignore_bins and illegal_bins express exactly that.",tasks:["Write the five bins (wildcard wr/rd, each_rd[], ignore nop, illegal rsvd).","Run: the test sends one reserved command. Find the error.","Which read command is never sent?"],learn:"wildcard bins with ?, ignore_bins (excluded from coverage), illegal_bins (errors), and that ignored values are removed from other bins."},"cov-5":{problem:"Each field covered alone says nothing about combinations: was a long WRAP write ever sent? Cross coverage counts every combination of bins; binsof prunes combinations that cannot or need not happen.",tasks:["Write x_tl with an ignore_bins for one-beat WRAP bursts, and x_td.","Run: count the cross bins (9 \u2212 1 ignored = 8, and 6).","Which combinations are missing?"],learn:"cross, automatic cross bins, binsof(cp.bin), && / || in select expressions, ignore_bins in crosses."},"cov-6":{problem:"One covergroup type often has several instances (one per port). Type coverage merges them; instance coverage shows each port. Options such as at_least make a bin count only after enough hits.",tasks:["Add option.per_instance = 1 and option.at_least = 2.","Run: compare type coverage with each instance's coverage.","Why is the type coverage higher than either port's?"],learn:"Covergroup arguments (ref signals), several instances, per_instance, at_least, get_coverage() vs get_inst_coverage()."},"cov-7":{problem:"Coverage sampled on every clock counts idle cycles and half-finished transfers. A covergroup with 'with function sample(...)' is sampled by the monitor once per completed transaction, with the transaction's fields as arguments; iff drops the ones that do not count.",tasks:["Write cp_reg with its bins and iff (!e), and cp_dir.","Run: the errored transfer to 8'h14 must not cover data[8'h14].","Which register was never written?"],learn:"with function sample(args), calling sample() from a monitor task, and iff on coverpoints."},"cov-8":{problem:"The week 9 exercise: a functional coverage model for an APB bus. It must show which registers were accessed in which direction and with how many wait states, while ignoring combinations the spec forbids.",tasks:["Write cp_reg (with a default bin), cp_dir, cp_wait (3+ as one bin) and the cross with an ignore for STAT writes.","Sample only at the end of a transfer (the clocking event with iff is given).","Run: list the holes, then add transfers until coverage is 100%."],learn:"Building a coverage model from a protocol spec: regions, directions, latencies, crosses and exclusions."},"cov-9":{problem:"Random stimulus quickly covers the middle and then plateaus: corners such as 0 and 255 are outside its range or too rare. Coverage closure means reading the holes and adding the stimulus (constraints or directed tests) that fills them.",tasks:["Run: the loop stops at 200 packets. Which bins are holes?","Add directed packets for the holes (both directions).","Run until the test prints PASS."],learn:"The coverage-driven loop: run, read holes, target them, re-run; get_coverage() inside the test."},"dv-1":{problem:"Every testbench starts with a clock. The period must be exact (real arithmetic and `timescale precision), some tests need a programmable frequency, and some interfaces need a duty cycle other than 50%.",tasks:["Write clk_a with always #5.","Write clk_b with initial forever and a delay computed from FREQ_MHZ.","Write clk_c (25% duty) with a task and two delays. Run until PASS, then try FREQ_MHZ = 33.3."],learn:"always vs initial-forever clock generators, real delays, `timescale, and a task-based clock with a duty cycle."},"dv-2":{problem:"Real chips have several resets: an asynchronous power-on reset, a system reset released synchronously to the clock, and software resets that pulse for a few cycles. The testbench must reproduce the sequence exactly.",tasks:["Generate por_n with a delay.","Release sys_rst_n on the 2nd clock edge after por_n (wait + repeat @(posedge clk)).","Pulse soft_rst for exactly 3 cycles from the first edge after 100 ns. Run until PASS."],learn:"Asynchronous assertion, synchronous release, wait(), repeat(n) @(posedge clk), and nonblocking assignments in testbench code."},"dv-3":{problem:"Before constraints, random values with properties are built from plain random numbers with masks and shifts. It is the week 7 exercise and a good reminder of how much work constraints save later.",tasks:["Make even_v even (clear bit 0) and odd_v odd (set bit 0).","Make onehot_v one-hot by shifting 1 to a random position.","Run until PASS."],learn:"$urandom, $urandom_range, bit masks and shifts to shape random values."},"dv-4":{problem:"Verification starts with a test plan: the list of features to exercise (load, up, down, both wraps, hold). Directed tests hit each item on purpose; a reference model and checker compare every cycle.",tasks:["Write directed tests that exercise all 6 plan items (the testbench counts them).","Run: a mismatch appears in one item. Which?","Fix the bug in design.sv and run until PASS."],learn:"Test plans, directed tests, reference models, self-checking testbenches."},"dv-5":{problem:"Directed tests only cover what you thought of. Random stimulus with sensible weights explores combinations automatically; the same reference model checks the results and the plan items show what was reached.",tasks:["Replace the stimulus with a 200-cycle random loop (weights given in the TODO).","Stop early when all plan items are hit.","Run until PASS. How many cycles did it take?"],learn:"Random stimulus in plain Verilog, weighting with $urandom_range, and measuring progress with plan items."},"dv-6":{problem:"Week 8 starts with SystemVerilog data types: logic, parameterized widths, unpacked arrays, enums, and tasks/functions with typed arguments. A behavioral memory model uses all of them.",tasks:["Write mem_model: storage array, registered read, write on we.","Add an enum for the last operation and drive op from it.","Run until PASS: the testbench writes and reads all 16 addresses."],learn:"logic, parameters, unpacked arrays with 2**AW entries, typedef enum, and testbench tasks with output arguments."},"dv-7":{problem:"Port lists repeat the same bundle of signals in the DUT, the testbench and every checker. An interface bundles them once; modports state each side's directions; tasks inside the interface give tests a transaction-level way to drive it.",tasks:["Add modport dut to fifo_if.","Write push_word and pop_word: wait while full/empty, drive for one cycle.","Run until PASS."],learn:"interface, modport, tasks in an interface, and calling them through the instance (f.push_word). (Virtual interfaces and clocking blocks are not supported by this simulator.)"},"dv-8":{problem:"Testbenches move transactions, not wires. A transaction class bundles the fields with methods (print, copy, compare). Handles are references: b = a shares the object; copy() makes a new one. Inheritance adds variants (error-injecting transactions) that work through base-class handles.",tasks:["Write copy() and compare() in Txn.","Write ErrTxn with err and an overriding sprint() that calls super.sprint().","Run until PASS."],learn:"Classes, constructors, handles vs objects, deep copy, compare, inheritance, super, and virtual methods (polymorphism)."},"dv-9":{problem:"Drivers, monitors and checkers run in parallel. fork/join waits for all threads, join_any for the first, join_none for none; disable fork cleans up the losers. A timeout is a race between the wait and a counter.",tasks:["Write the three fork blocks (join, join_any, join_none).","Write wait_done: race wait(!busy) against 20 cycles, then disable fork.","Run until PASS and explain the order of the log."],learn:"fork/join, join_any, join_none, disable fork, and bounded waits so a hung design fails instead of hanging."},"dv-10":{problem:"The week 8 exercise: two independent drivers, one pushing and one popping, each with random delays, so the FIFO sees bursts, stalls, full and empty. A queue in the testbench is the scoreboard: pushes append, pops compare with the front.",tasks:["Write push_driver: random delay, wait while full, push a random byte, record it.","Write pop_driver: random delay, wait while empty, compare dout with the queue front, pop.","Run until PASS; look for full and empty on the waveform."],learn:"Concurrent drivers with fork/join, random delays, queues as scoreboards ($ queues, push_back, pop_front)."},"dv-11":{problem:"The week 7 exercise again, with constraints: properties are declared, and the solver finds values. randc variables cycle through every value before repeating; randomize() returns 0 when it cannot find a solution, and good testbenches check it.",tasks:["Write the three constraint blocks.","Run: 16 calls must give every tag exactly twice (randc).","Check the return value of randomize() in your own code from now on."],learn:"rand, randc, constraint blocks, randomize() and its return value."},"dv-12":{problem:"Uniform random values waste most of the simulation on uninteresting cases. inside restricts values to legal sets; dist weights them, for example to hit the minimum and maximum packet lengths far more often than any single middle value.",tasks:["Write c_len with dist: := gives each value the weight, :/ shares the weight over a range.","Write c_kind with inside.","Run: 1000 packets, check the histogram is close to 20/60/20%."],learn:"inside with values and ranges, dist with := and :/, and measuring a distribution."},"dv-13":{problem:"short_pkt -> len == 0 has five solutions, only one with small = 1, so a uniform solver picks small = 1 only 20% of the time. solve short_pkt before len picks small first (50/50) and then len: the same legal values, a different distribution.",tasks:["Write the implication constraint.","Add solve short_pkt before len in the derived class.","Run: compare the two counts with 20% and 50%."],learn:"Implication (->) and if/else constraints, the uniform-over-solutions rule, and solve...before."},"dv-14":{problem:"The week 8 exercise: N random numbers between X and Y that add up to Z. Array constraints describe the whole array at once: its size, each element (foreach), an aggregate (sum) and uniqueness.",tasks:["Write the four constraints.","Run: five solutions of six numbers each.","Change total to 200: why does randomize() now fail, and what does the message say?"],learn:"Dynamic array constraints: size(), foreach, sum(), unique; and over-constrained problems."},"dv-15":{problem:"Tests steer one randomize() call at a time: inline 'with' constraints add rules for one call, soft constraints give defaults that a test may override, constraint_mode and rand_mode switch constraints and variables off, and post_randomize fixes up derived fields.",tasks:["Write post_randomize().","Replace the four plain randomize() calls with the four techniques in the TODOs.","Run until PASS; then try addr == 8'hF8 with c_addr still on and read the solver's message."],learn:"randomize() with { }, soft constraints, constraint_mode(), rand_mode(), post_randomize()."},"dv-16":{problem:"Shared types and helper functions belong in a package, imported where needed. System tasks format strings ($sformatf) and read and write files ($fopen, $fdisplay, $fgets) for test vectors and logs.",tasks:["Write count_list in the package.","Run: the checks call it with both directions, and the file round trip must match.","Add a third direction DOWN_EVEN as an exercise (not checked)."],learn:"package / import, typedef enum in a package, automatic functions returning strings, $sformatf, $fopen / $fdisplay / $fgets / $fclose."},"dv-17":{problem:"Week 9 FIFO project, step 1: a test plan written as a cross of operation \xD7 fill level, measured with functional coverage. Directed tests fill the cross; a queue-based reference model checks every cycle and exposes a corner-case bug.",tasks:["Write directed tests until cg_plan reaches 100% (the report lists the holes).","A mismatch appears at one combination: which?","Fix design.sv and run until PASS."],learn:"Test plans as coverage crosses, directed corner-case tests, cycle-by-cycle reference models."},"dv-18":{problem:"Balanced random push/pop keeps a FIFO half full: the full corners are rare. A transaction class with modes (fill, balanced, drain) changes the distribution so random tests reach every corner; coverage tells when to stop.",tasks:["Run the starting test: which cross bins stay empty?","Loop through fill / balanced / drain phases until coverage is 100% (or 400 operations).","Run until PASS: how many operations did it take?"],learn:"Transaction classes with mode-dependent dist constraints, coverage-driven random tests, stopping on get_coverage()."},"dv-19":{problem:"A data scoreboard only sees what was popped. A flag that is wrong for one cycle (empty going high while a word is still stored) changes no data in this test, but it would starve a real consumer. Assertions on the flags catch it immediately.",tasks:["Write the three assertions in fifo_sva (labels given).","Bind fifo_sva to sync_fifo.","Run: the scoreboard says 0 errors, the assertions do not. When does empty go wrong?"],learn:"Combining scoreboards and assertions; auxiliary code in checkers; bind with parameters."},"dv-p1":{problem:"Project 1 (vlsimentor's FIFO environment, week 9 project): put everything together. A transaction class with a bias knob feeds a driver; a monitor sends accepted pushes to a scoreboard and checks pops; coverage and bound assertions run alongside. The FIFO has a non-power-of-2 depth and a pointer bug only long random runs reveal.",tasks:["Write the generator: phases of fill / balanced / drain bias until 300 transactions and 100% coverage.","Run: the scoreboard reports errors. Use the waveform (rp, wp) to find the bug.","Fix design.sv and run until PASS."],learn:"Layered testbench architecture (transaction, generator, driver, monitor, scoreboard, coverage, assertions) and debugging from scoreboard errors to RTL."},"dv-p2":{problem:"Project 2 (vlsimentor's arbiter environment): fairness is the hard property of an arbiter. Requesters hold their request until granted; under heavy load a correct round-robin grants everyone within 4 cycles. The design under test rotates its priority to the wrong place.",tasks:["Write the traffic phases (light to saturated) so that 0 to 4 simultaneous requests are covered.","Run: which fairness assertion fails, under which load?","Fix the priority rotation in design.sv; run until all assertions pass and coverage is 100%."],learn:"Liveness bounded as fairness assertions in a generate loop, reactive requester models, coverage of contention levels, and debugging priority logic."},"dv-p3":{problem:"Project 3 (vlsimentor's APB peripheral): a register block is verified against its register map. A register model class predicts every read; random reads and writes to random registers compare against it; protocol assertions check the bus; coverage proves every register was written and read. Read-only and write-1-to-clear registers are where bugs hide.",tasks:["Write the random register test (80 random accesses).","Run: a read of CTRL returns an unexpected value after some writes. Which write caused it?","Fix design.sv; run until PASS."],learn:"Register models (mirror, read prediction), APB driver tasks, write-1-to-clear and read-only behaviour, address-map coverage."},"dv-p4":{problem:"Project 4 (vlsimentor's UART environment): a serial link is verified end to end: bytes go through the transmitter and come back from the receiver. Good data is not enough: error handling must be tested by injecting errors (a bad stop bit) and checking that the receiver flags them.",tasks:["Send the corner bytes, 20 random bytes and 4 frames with a bad stop bit.","Run: the scoreboard expects frame_err for the injected frames. What does the receiver do?","Fix the stop-bit check in design.sv; run until PASS."],learn:"End-to-end scoreboards, error injection, coverage of data patterns and error cases, and line-level assertions."}},sn={"sva-b1":[{type:"number",q:"At what time does a_onehot fail?",answer:65,tol:0,unit:"",explain:"DECODE with pc = 13h goes to 1100; the next clock leaves it.",try:!1},{type:"choice",q:"Why use always @(state) for a_onehot instead of a clock?",options:["It checks every new value of state as soon as it changes","Immediate assertions need a clock","It is required by $onehot","It makes the assertion concurrent"],answer:0,explain:"An immediate assertion runs whenever its procedure runs.",try:!1},{type:"choice",q:"Where does $error print its message?",options:["In the simulation output, with the time and the assertion scope","Only in the waveform","Nowhere unless you call $display","In a separate log file only"],answer:0,explain:"",try:!1}],"sva-b2":[{type:"number",q:"At what time does a_req_ack fail?",answer:185,tol:0,unit:"",explain:"The window ##[1:3] closes three clocks after the third request.",try:!1},{type:"number",q:"How many attempts pass non-vacuously?",answer:2,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why $rose(req) and not req?",options:["req is high for one clock here, but $rose also stays correct if req were held high","$rose is faster","req alone does not compile","It turns off vacuity"],answer:0,explain:"With a level, a long req would start a new attempt every clock.",try:!1}],"sva-b3":[{type:"number",q:"Starting code: when does the immediate assertion first fail?",answer:15,tol:0,unit:"",explain:"It reads done = 1 right after the edge at 15.",try:!1},{type:"number",q:"Starting code: when does the concurrent assertion first fail?",answer:25,tol:0,unit:"",explain:"At 15 the sampled done is still 0; both are 1 in the sample at 25.",try:!1},{type:"choice",q:"In which scheduling region does a concurrent assertion sample its signals?",options:["Preponed","Active","NBA","Reactive"],answer:0,explain:"Preponed: before anything changes in that time step.",try:!1}],"sva-b4":[{type:"number",q:"How many times does a_same fail?",answer:2,tol:0,unit:"",explain:"The second access (req one cycle late) and the third (late ack).",try:!1},{type:"number",q:"At what time does a_next first fail?",answer:35,tol:0,unit:"",explain:"The first access has req in the same cycle as mem_en, so a_next looks one cycle too late.",try:!1},{type:"choice",q:"a |=> b is the same as \u2026",options:["a |-> ##1 b","a ##1 b","a |-> b","a |-> ##[0:1] b"],answer:0,explain:"",try:!1}],"sva-b5":[{type:"number",q:"With the given assertion, how many (false) failures are there on the good request?",answer:2,tol:0,unit:"",explain:"req is high for 3 clocks: 3 attempts, only the first sees ack two clocks later.",try:!1},{type:"number",q:"After the fix, at what time does the assertion fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does $rose(ack) check?",options:["The LSB of ack is 1 now and was not 1 at the previous clock","ack is 1 now","ack changed in either direction","ack is 1 for two clocks"],answer:0,explain:"",try:!1}],"sva-b6":[{type:"number",q:"Without disable iff: how many failures?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"With disable iff: at what time is the real failure?",answer:445,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Does disable iff use sampled or current values?",options:["Current values: it reacts as soon as reset changes","Sampled values, like the rest of the property","Only values at the start of the attempt","Values at the end of the attempt"],answer:0,explain:"",try:!1}],"sva-b7":[{type:"choice",q:"Which severity task stops the simulation?",options:["$fatal","$error","$warning","$info"],answer:0,explain:"",try:!1},{type:"number",q:"How many times did the pass action run?",answer:13,tol:0,unit:"",explain:"Far more than 3: by default the pass action also runs on vacuous successes (every clock where $rose(valid) is false), except while the assertion is off or in reset.",try:!1},{type:"choice",q:"Why are vacuous successes usually not what you want to count?",options:["They only mean the antecedent did not happen","They are failures","They are counted twice","They only happen in reset"],answer:0,explain:"Use a cover property to count real occurrences.",try:!1}],"sva-b8":[{type:"number",q:"At what time does m_req (the assumption) fail?",answer:125,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_gnt fail?",answer:175,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"In formal verification, what does assume property do?",options:["It restricts the inputs the tool may drive","It is ignored","It must be proven like an assert","It counts coverage"],answer:0,explain:"",try:!1}],"sva-b9":[{type:"number",q:"At what time does a_lat2 fail?",answer:95,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What is the hierarchical name of the bound assertion?",options:["tb.dut.u_sva.a_lat2","tb.u_sva.a_lat2","pipe2_sva.a_lat2","tb.a_lat2"],answer:0,explain:"",try:!1},{type:"number",q:"Which in_d value (hex) does the design corrupt? Answer in decimal.",answer:90,tol:0,unit:"",explain:"8'h5a is replaced by 00.",try:!1}],"sva-b10":[{type:"number",q:"How many failures does a_h2 report?",answer:2,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Can a delay bound like ##[1:max] come from a property argument?",options:["Yes, if the actual argument is a constant","No, delays must be literals","Only in sequences","Only with default clocking"],answer:0,explain:"",try:!1}],"sva-s1":[{type:"number",q:"At what time does a_win fail?",answer:135,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many a_ev attempts are unfinished at the end?",answer:1,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"##[1:3] b is the same as \u2026",options:["##1 b or ##2 b or ##3 b","##1 b and ##2 b and ##3 b","##3 b","b[*3]"],answer:0,explain:"",try:!1}],"sva-s2":[{type:"number",q:"At what time does a_burst fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_wait fail?",answer:285,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"a[*0:2] ##1 b matches \u2026",options:["b, a ##1 b, or a ##1 a ##1 b","only a ##1 a ##1 b","a and b together","b two cycles later"],answer:0,explain:"",try:!1}],"sva-s3":[{type:"number",q:"At what time does a_goto fail?",answer:215,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_ncons fail?",answer:405,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"b[->3] is equivalent to \u2026",options:["(!b[*0:$] ##1 b)[*3]","b[*3]","b ##[1:$] b ##[1:$] b ##1 1","(b ##1 !b)[*3]"],answer:0,explain:"",try:!1}],"sva-s4":[{type:"number",q:"At what time does a_gnt fail?",answer:195,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many non-vacuous passes?",answer:1,tol:0,unit:"",explain:"",try:!1}],"sva-s5":[{type:"number",q:"At what time does a_we fail?",answer:185,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_len fail?",answer:415,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"s1 intersect s2 requires \u2026",options:["both to start together and end in the same cycle","s1 to end before s2","only one of them to match","s1 inside s2"],answer:0,explain:"",try:!1}],"sva-s6":[{type:"number",q:"At what time does a_both fail?",answer:155,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_either fail?",answer:175,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times is c_first covered?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-s7":[{type:"number",q:"At what time does a_irq fail?",answer:85,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times does a_irq fail?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-p1":[{type:"number",q:"At what time does a_stable fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_hold fail?",answer:245,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many stalled transfers does c_stall see?",answer:4,tol:0,unit:"",explain:"",try:!1}],"sva-p2":[{type:"number",q:"At what time does a_inc fail?",answer:295,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why does cnt == $past(cnt) + 1 fail at 15 \u2192 0?",options:["The literal 1 is 32 bits, so the sum is computed in 32 bits: 16 \u2260 0","$past is wrong at wrap","cnt is signed","The clock is too fast"],answer:0,explain:"",try:!1},{type:"choice",q:"What is $past(cnt, 2)?",options:["The sampled value of cnt two clocks ago","cnt plus 2","cnt two time units ago","The value at the start of the attempt"],answer:0,explain:"",try:!1}],"sva-p3":[{type:"number",q:"At what time does a_gnt1 fail?",answer:65,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_noX fail?",answer:95,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_reqs fail?",answer:65,tol:0,unit:"",explain:"",try:!1}],"sva-p4":[{type:"number",q:"At what time does a_rw fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_lat fail?",answer:235,tol:0,unit:"",explain:"",try:!1}],"sva-p5":[{type:"number",q:"At what time does a_data fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"Which input value (decimal) is corrupted? (in_d + 1 = 8'h37)",answer:54,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Each attempt of a_data has \u2026",options:["its own copy of x","one shared x","no storage","x reset every clock"],answer:0,explain:"",try:!1}],"sva-p6":[{type:"number",q:"At what time does a_id fail?",answer:105,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many requests are never answered correctly?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-p7":[{type:"number",q:"At what time does a_led fail?",answer:145,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_live fail?",answer:305,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"With weak eventually (##[1:$]) instead of s_eventually, the missing grant is \u2026",options:["reported as unfinished, not failed","a failure","a vacuous pass","ignored silently and counted as a pass"],answer:0,explain:"",try:!1}],"sva-p8":[{type:"number",q:"At what time does a_we fail?",answer:205,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times is WRITE covered?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"An assertion with 0 failures and only vacuous passes \u2026",options:["was never really exercised","proves the design right","is a syntax error","means the clock is missing"],answer:0,explain:"",try:!1}],"sva-a1":[{type:"number",q:"At what time does a_decode fail?",answer:215,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_store fail?",answer:215,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which assertion style checks how a state was entered?",options:["state == S |-> $past(state) == P","state == P |=> state == S","$onehot(state)","$stable(state)"],answer:0,explain:"",try:!1}],"sva-a2":[{type:"number",q:"At what time does a_full fail?",answer:155,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times does a_full fail?",answer:2,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why is a_count written with $past?",options:["count changes one clock after the push/pop that caused it","$past is required for counters","To avoid disable iff","To make it vacuous"],answer:0,explain:"",try:!1}],"sva-a3":[{type:"number",q:"At what time does a_data fail?",answer:105,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does (re && addr == a)[->1] match?",options:["The next cycle with a read of address a","Any read","A read exactly one cycle later","The first write after the read"],answer:0,explain:"",try:!1}],"sva-a4":[{type:"number",q:"At what time does fair[3].a_fair first fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why ##[1:4] for 4 requesters?",options:["In round robin, each requester waits at most for the other 3","Because the clock period is 4","It is arbitrary","To make it vacuous"],answer:0,explain:"",try:!1}],"sva-a5":[{type:"number",q:"At what time does a_stable fail?",answer:145,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"In APB, when does a transfer complete?",options:["In an ACCESS cycle with PREADY high","When PSEL rises","In the SETUP cycle","When PENABLE rises"],answer:0,explain:"",try:!1}],"sva-a6":[{type:"number",q:"At what time does a_a_down fail?",answer:245,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_r_down fail?",answer:255,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many of the five assertions fail at least once?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-a7":[{type:"number",q:"At what time does a_stop fail?",answer:835,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many clocks long is one complete frame (start + 8 data + stop)?",answer:40,tol:0,unit:"",explain:"",try:!1}],"sva-a8":[{type:"number",q:"At what time does a_inc fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why the 8'(\u2026) cast in a_inc?",options:["So FF + 1 wraps to 00 like the 8-bit register","To make it signed","Because $past returns 32 bits","It is optional"],answer:0,explain:"",try:!1}],"cov-1":[{type:"number",q:"What is the coverage of cg_cmd with your solution (%)?",answer:62.5,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Which address bin is never hit?",options:["auto[192:255]","auto[0:63]","auto[64:127]","none"],answer:0,explain:"",try:!1},{type:"number",q:"Without auto_bin_max, how many automatic bins would an 8-bit coverpoint get?",answer:64,tol:0,unit:"",explain:"auto_bin_max defaults to 64, so 256 values go into 64 bins of 4.",try:!1}],"cov-2":[{type:"number",q:"Coverage of cg_alu with your bins (%)?",answer:79.2,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"How many bins does big[3] = {[16:254]} create?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which operation is never covered?",options:["OR (3)","ADD (0)","SUB (1)","AND (2)"],answer:0,explain:"op = k % 3 never gives 3.",try:!1}],"cov-3":[{type:"number",q:"Coverage with your bins (%)?",answer:80,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Which bin is not covered?",options:["wait2","start","b2b","done"],answer:0,explain:"",try:!1},{type:"choice",q:"What happens when an illegal bin is hit?",options:["The simulator reports an error; the value is not counted in other bins","The bin counts towards coverage","Nothing","The simulation stops"],answer:0,explain:"",try:!1}],"cov-4":[{type:"number",q:"Coverage (%)?",answer:87.5,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"How many bins does each_rd[] = {[1:6]} create?",answer:6,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"A value in ignore_bins \u2026",options:["is not counted in any bin of the coverpoint","counts as a hit","causes an error","is counted twice"],answer:0,explain:"",try:!1}],"cov-5":[{type:"number",q:"Coverage (%)?",answer:95,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"How many bins does x_tl have after the ignore?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"binsof(cp_type.wrap) && binsof(cp_len.one) selects \u2026",options:["the cross bins where cp_type is in bin wrap and cp_len in bin one","all wrap bins and all one bins","nothing","the bins that are not wrap"],answer:0,explain:"",try:!1}],"cov-6":[{type:"number",q:"Type coverage reported by get_coverage() (%)?",answer:100,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"port1 instance coverage (%)?",answer:75,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"What does option.at_least = 2 change?",options:["A bin is covered only after 2 hits","Coverage must reach 200%","Two coverpoints are required","Sampling happens twice"],answer:0,explain:"",try:!1}],"cov-7":[{type:"number",q:"Coverage (%)?",answer:90,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Why is data[8'h14] not covered?",options:["Its only transfer had an error and iff (!e) excluded it","8'h14 is not in the bins","sample() was not called","It is an ignore bin"],answer:0,explain:"",try:!1}],"cov-8":[{type:"number",q:"Coverage with the given transfers (%)?",answer:93.8,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Which wait-state bin is empty?",options:["w3plus","w0","w1","w2"],answer:0,explain:"",try:!1},{type:"number",q:"How many bins does x_reg_dir have?",answer:5,tol:0,unit:"",explain:"3 regions \xD7 2 directions \u2212 1 ignored STAT write = 5: the default bin is not crossed.",try:!1}],"cov-9":[{type:"number",q:"Starting code: coverage after the random loop (%)?",answer:83.3,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Why can the random loop never hit bins zero and max?",options:["$urandom_range(1, 254) never produces 0 or 255","They are ignore bins","The covergroup is not sampled","Coverage is capped at 90%"],answer:0,explain:"",try:!1},{type:"choice",q:"A hole that cannot happen in the real design should be \u2026",options:["excluded with ignore_bins, with a reason in the plan","left as a hole","filled with a forced value","removed from the design"],answer:0,explain:"",try:!1}],"dv-1":[{type:"number",q:"Period of clk_b in ns at 125 MHz?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why does `timescale 1ns/1ps matter for FREQ_MHZ = 33.3?",options:["Delays are rounded to the 1 ps precision","It sets the clock frequency","It makes reals into integers","It is ignored for clocks"],answer:0,explain:"",try:!1}],"dv-2":[{type:"number",q:"At what time is sys_rst_n released (ns)?",answer:35,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why release sys_rst_n on a clock edge?",options:["So flip-flops leave reset in the same cycle (no recovery/removal violation)","To save power","It is required by Verilog","To make por_n synchronous"],answer:0,explain:"",try:!1}],"dv-3":[{type:"choice",q:"Is 16'h1 << $urandom_range(0,15) uniformly distributed over the 16 one-hot values?",options:["Yes: each position is equally likely","No: low bits are more likely","No: it can be zero","Only for even positions"],answer:0,explain:"",try:!1}],"dv-4":[{type:"choice",q:"Which plan item found the bug?",options:["wrap down (0 \u2192 15)","load","wrap up","hold"],answer:0,explain:"",try:!1},{type:"choice",q:"Why compare against a reference model rather than expected values typed in the test?",options:["It checks every cycle of any test, not just the cases you thought of","It is faster to simulate","It removes the need for a test plan","It finds timing bugs"],answer:0,explain:"",try:!1}],"dv-5":[{type:"choice",q:"Why make load rare?",options:["Frequent loads would keep the counter from ever reaching the wrap values","Loads are illegal","To save simulation time","Loads break the model"],answer:0,explain:"",try:!1}],"dv-6":[{type:"choice",q:"How many entries does logic [7:0] mem [2**4] have?",options:["16","8","4","256"],answer:0,explain:"",try:!1},{type:"choice",q:"Why are the testbench tasks declared automatic?",options:["Each call gets its own copy of its arguments and locals","To make them faster","Automatic tasks can be synthesized","To allow output arguments"],answer:0,explain:"",try:!1}],"dv-7":[{type:"choice",q:"What does a modport define?",options:["The direction of each interface signal as seen by one side","A clock domain","A new module","Timing checks"],answer:0,explain:"",try:!1}],"dv-8":[{type:"choice",q:"After b = a; b.addr = 8'h20; what is a.addr?",options:["8'h20: a and b are the same object","8'h10","x","a compile error"],answer:0,explain:"",try:!1},{type:"choice",q:"What makes a.sprint() call ErrTxn::sprint when a holds an ErrTxn?",options:["sprint is virtual","ErrTxn calls super.new","copy()","Nothing: it calls Txn::sprint"],answer:0,explain:"",try:!1}],"dv-9":[{type:"choice",q:"After fork ... join_any, the other threads \u2026",options:["keep running unless you disable them","are killed","are paused","restart"],answer:0,explain:"",try:!1},{type:"choice",q:"Why do testbenches need timeouts on waits?",options:["A hung design would otherwise hang the test forever","Waits are slow","Waits are not allowed in tasks","For coverage"],answer:0,explain:"",try:!1}],"dv-10":[{type:"choice",q:"Why compare dout before asserting pop in this FIFO?",options:["dout shows the oldest word before the pop (show-ahead)","pop clears dout","It is faster","To avoid an X"],answer:0,explain:"",try:!1}],"dv-11":[{type:"choice",q:"What does randc guarantee for a 3-bit variable?",options:["Each of the 8 values once before any repeats","Uniform distribution only","Increasing values","No repeats ever"],answer:0,explain:"",try:!1}],"dv-12":[{type:"choice",q:"[2:63] := 60 instead of :/ 60 would \u2026",options:["give each of the 62 values weight 60, so the middle dominates","be the same","give the range weight 60 in total","be a syntax error"],answer:0,explain:"",try:!1}],"dv-13":[{type:"number",q:"Without solve-before, about how many of 2000 have small = 1?",answer:416,tol:120,unit:"",explain:"",try:!1},{type:"choice",q:"Does solve...before change which values are legal?",options:["No, only their probabilities","Yes, it removes solutions","It makes small always 1","It is ignored by solvers"],answer:0,explain:"",try:!1}],"dv-14":[{type:"choice",q:"With n = 6 and hi = 30, what is the largest possible total?",options:["180","200","100","30"],answer:0,explain:"",try:!1},{type:"choice",q:"Why can v.sum() overflow for an array of byte?",options:["sum() has the element's width (8 bits), so the total wraps","It cannot","sum() is always 32 bits","Only for signed bytes"],answer:0,explain:"",try:!1}],"dv-15":[{type:"choice",q:"What happens to a soft constraint when an inline constraint conflicts with it?",options:["The soft constraint is dropped for that call","randomize() fails","The inline constraint is ignored","A compile error"],answer:0,explain:"",try:!1}],"dv-16":[{type:"choice",q:"What does import count_pkg::*; do?",options:["Makes the package's names visible without the count_pkg:: prefix","Copies the package into the module","Compiles the package","Creates an instance of the package"],answer:0,explain:"",try:!1}],"dv-17":[{type:"choice",q:"Which plan combination exposes the bug?",options:["both (push and pop) at full","read at empty","write at mid","idle at full"],answer:0,explain:"",try:!1},{type:"number",q:"How many bins does the cross have?",answer:12,tol:0,unit:"",explain:"",try:!1}],"dv-18":[{type:"choice",q:"Why does balanced 50/50 traffic rarely reach full?",options:["The level does a random walk around its start and rarely drifts 4 steps up","Push is ignored","The FIFO is too deep","Coverage is not sampled"],answer:0,explain:"",try:!1}],"dv-19":[{type:"number",q:"At what time does a_empty first fail?",answer:35,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why does the scoreboard not see this bug?",options:["It only compares popped data, and in this test the extra empty cycle does not change which data comes out","It is disabled","The bug is in the testbench","It only checks full"],answer:0,explain:"",try:!1}],"dv-p1":[{type:"choice",q:"Why is a non-power-of-2 depth risky for pointer logic?",options:["Pointers must wrap explicitly at DEPTH-1 instead of overflowing naturally","It uses more area","It cannot be full","Gray codes are required"],answer:0,explain:"",try:!1},{type:"choice",q:"Which component would you change to test a 12-deep FIFO?",options:["Only the DUT parameter (and the assertion parameter): the environment is generic","All of them","The scoreboard","The transaction class"],answer:0,explain:"",try:!1}],"dv-p2":[{type:"choice",q:"Under which load does starvation show?",options:["Heavy/saturated: several requesters wait at the same time","Light load","Only after reset","Never"],answer:0,explain:"",try:!1},{type:"choice",q:"Why ##[1:4] for 4 requesters?",options:["Each waits at most for the other 3 grants","It is the clock period","To match the coverage","Arbitrary"],answer:0,explain:"",try:!1}],"dv-p3":[{type:"choice",q:"What is a write-1-to-clear (W1C) register?",options:["Writing 1 to a bit clears it; writing 0 leaves it","It is cleared after any write","It can only be written once","Reading it clears it"],answer:0,explain:"",try:!1},{type:"choice",q:"Why does the bug need random register order to show?",options:["CTRL must be read after a write to STAT, with no CTRL write in between","It needs 1000 cycles","It is a timing bug","It only shows with interrupts"],answer:0,explain:"",try:!1}],"dv-p4":[{type:"choice",q:"Why is error injection necessary?",options:["Without it, the error-detection logic is never exercised","To slow down the test","To test the clock","For code coverage only"],answer:0,explain:"",try:!1},{type:"number",q:"How many clock cycles does one frame take at 4 clocks per bit?",answer:40,tol:0,unit:"",explain:"",try:!1}]};var rn={"sva-b1":{b:"{tb stimulus} > [pc_fsm] > (state, pc); (state, pc) .checked by.> {immediate assertions}",f:["P: The spec says 'state is one-hot' and 'never load an unknown value'.","S: assert ($onehot(state)) in always @(state).","S: if (load) assert (!$isunknown(d)) at each clock.","X: state = 1100 after DECODE when pc = 13h.","OK: Each broken rule prints an error with time and scope."]},"sva-b2":{b:"{test} -req-> {responder} -ack-> {test}; {test} .req, ack.> {a_req_ack}",f:["P: Every request must be acknowledged 1 to 3 clocks later.","S: $rose(req) starts an attempt (the antecedent).","S: ##[1:3] ack must match (the consequent).","X: The third request is answered after 5 clocks.","OK: One failure, at the clock where the window closes."]},"sva-b3":{b:"{test: blocking writes at posedge} > (go, done); (go, done) -now-> {immediate assertion}; (go, done) -preponed-> {concurrent assertion}",f:["P: The test writes go/done at the same edge that checks them.","S: The immediate assertion (after #0) sees the new values.","S: The concurrent assertion sees the values from before the edge.","Q: Which edge does each one fail on?","OK: Drive on the other edge: no race, both agree."]},"sva-b4":{b:"{access task} > (mem_en) > (req) > (ack); (mem_en, req, ack) .> {a_same |->}; (mem_en, req, ack) .> {a_next |=>}",f:["P: Same cycle or next cycle? The spec must say.","S: a |-> b: b starts in the cycle a matched.","S: a |=> b: b starts one cycle later (same as a |-> ##1 b).","Q: Which access matches which assertion?","OK: Each access passes exactly the assertion written for it."]},"sva-b5":{b:"{test} > (req) > {a_req_ack}; {test} > (ack) > {a_req_ack}",f:["P: req |-> ##2 ack fails on good behaviour and passes a stuck ack.","X: req held 3 clocks starts 3 attempts.","X: ack high before req: ##2 ack is trivially true.","S: $rose(req) |-> ##2 $rose(ack).","OK: One attempt per request, and ack must change."]},"sva-b6":{b:"(rst_n) > [reload_counter]; (load_val) > [reload_counter] > (cnt, tick); (cnt, tick) > {a_reload}; (rst_n) .disables.> {a_reload}",f:["P: The assertion fails while the counter is held in reset.","S: disable iff (!rst_n) cancels every attempt in progress when reset asserts.","S: no new attempt starts while reset is active.","OK: Only the real glitch fails."]},"sva-b7":{b:"{test phases} > (valid, ready) > {a_vr} -pass/fail actions-> {counters}; {test phases} .$assertoff/$asserton.> {a_vr}",f:["P: The test needs the number of passes and failures.","S: assert property (p) pass_stmt; else fail_stmt;","S: $assertoff(0, tb.a_vr) for the phase where the rule does not apply.","Q: Does the pass action run on vacuous passes? (here: $rose(valid) false)","OK: 3 passes, 1 failure: PASS."]},"sva-b8":{b:"{environment} -req-> [design] -gnt->; {environment} .m_req assume.> (req); [design] .a_gnt assert.> (gnt); (gnt) .c_b2b cover.> {coverage}",f:["P: One property, three roles.","S: assume: a rule the inputs must follow.","S: assert: a rule the design must follow.","S: cover: a scenario we must see at least once.","OK: Each failure points at the side that broke the rule."]},"sva-b9":{b:"{tb} > [pipe2]; {bind pipe2 pipe2_sva} .instantiates inside.> [pipe2]; [pipe2] .ports.> {u_sva: a_lat2}",f:["P: Add assertions to frozen RTL.","S: Put them in a separate checker module.","S: bind <design> <checker> <instance> (.*);","OK: The checker runs inside every pipe2 instance."]},"sva-b10":{b:"{p_handshake(r, a, max)} > {a_h0: req0/ack0/1}; {p_handshake(r, a, max)} > {a_h1: req1/ack1/2}; {p_handshake(r, a, max)} > {a_h2: req2/ack2/3}",f:["P: Three copies of one rule, with different limits.","S: property p(r, a, max) with arguments.","S: default clocking + default disable iff for the whole module.","OK: Three one-line assertions; channel 2 (latency 4 > 3) fails."]},"sva-s1":{b:"(start) > {##[2:4]} > (done); (cmd) > {##[1:$]} > (resp)",f:["P: 'within 2 to 4 cycles' and 'eventually'.","S: ##[2:4] tries each delay: passes on the first that matches.","S: ##[1:$] never fails: the attempt stays open.","Q: What happens to an open attempt when the simulation ends?","OK: weak: unfinished; strong (s_eventually): fails."]},"sva-s2":{b:"(bstart) > {bvalid[*4]} > (!bvalid); (req) > {!rdy[*0:3]} > (rdy)",f:["P: Count consecutive cycles.","S: b[*4] = b ##1 b ##1 b ##1 b.","S: !rdy[*0:3] ##1 rdy: rdy after 0..3 wait cycles.","X: a 3-beat burst; a 4-cycle wait.","OK: each fails at the first cycle that breaks the pattern."]},"sva-s3":{b:"(rd) > {dval[->4]} > (done); (rd) > {dval[=4]} > (done)",f:["P: 4 beats with gaps, then done.","S: dval[->4] ##1 done: done the next cycle.","S: dval[=4] ##1 done: done later, no extra beat.","X: read 2: done 2 cycles late. Read 3: 5 beats.","OK: goto catches the late done; [=4] catches the 5th beat."]},"sva-s4":{b:"(start) > {gnt throughout ack[->3]}",f:["P: gnt must hold until the 3rd ack.","S: gnt throughout ack[->3].","X: gnt drops after the 2nd ack.","OK: fails in the cycle gnt is low."]},"sva-s5":{b:"(cs_n) > {window !cs_n[*6]} > {we[*2] within}; (sop) > {eop[->1] intersect 1[*2:8]}",f:["P: 'inside the window' and 'at most 8 cycles'.","S: within: the inner sequence starts and ends inside the outer one.","S: intersect with 1[*2:8]: same length as a 2..8 cycle sequence.","OK: both bugs fail."]},"sva-s6":{b:"(req) > {##[1:4] ack_a and ##[1:4] ack_b}; (req) > {retry or done}; (req) > {first_match(##[1:5] gnt)}",f:["P: Order-free and alternative outcomes.","S: and: both sequences match; or: either.","S: first_match keeps only the earliest end.","OK: failures point at the missing ack and the missing outcome."]},"sva-s7":{b:"{s_write(a): wr && addr==a ##1 wack} .triggered.> {a_irq}; (irq) > {a_irq}",f:["P: irq must be caused by a write to STATUS.","S: Name the cause as a sequence with an argument.","S: s_write(STATUS).triggered is true when it ends.","OK: irq without the write fails."]},"sva-p1":{b:"{sender} -valid, data-> {receiver}; {receiver} -ready-> {sender}; (valid, ready, data) .> {a_hold, a_stable}",f:["P: The sender must hold valid and data until ready.","S: valid && !ready |=> valid.","S: valid && !ready |=> $stable(data).","X: data 22 \u2192 23 while stalled; valid dropped at 24.","OK: each rule fails once."]},"sva-p2":{b:"(inc) > [cnt register] > (cnt); (cnt) .$past.> {a_inc}",f:["P: cnt == $past(cnt) + 1 fails when cnt wraps.","S: The comparison is evaluated in 32 bits.","S: 4'($past(cnt) + 1) wraps like the counter.","OK: Only the missed increment fails."]},"sva-p3":{b:"(gnt) > {$onehot0}; (addr) > {$isunknown}; (req) > {$countones}",f:["P: Bit-pattern rules.","S: $onehot0(gnt): zero or one bit set.","S: !$isunknown(addr): no X/Z bits.","S: $countones(req) <= 2.","OK: three bugs, three failures."]},"sva-p4":{b:"(wr, rd) > {not (wr ##1 rd)}; (req, fast) > {if fast ##1 ack else ##3 ack}",f:["P: Forbidden sequences and mode-dependent latency.","S: not (wr ##1 rd).","S: if (fast) ##1 ack else ##3 ack.","OK: both bugs fail."]},"sva-p5":{b:"(in_v, in_d) > [stage 1] > [stage 2] > [stage 3] > (out_v, out_d); (in_d) .x = in_d + 1.> {a_data}",f:["P: Compare each output with its own input, 3 clocks later.","S: (in_v, x = in_d + 1) stores the value in the attempt.","S: ##3 out_d == x checks it.","OK: one attempt per input; the corrupted one fails."]},"sva-p6":{b:"(req, id) > {v = id} > {##[1:6] rsp && rsp_id == v}",f:["P: Match responses to requests out of order.","S: (req, v = id) stores the ID per attempt.","S: ##[1:6] (rsp && rsp_id == v).","OK: unanswered IDs fail when the window closes."]},"sva-p7":{b:"(err) > {led until clr}; (req) > {s_eventually gnt}",f:["P: 'Until' and 'eventually' have no bound.","S: led until clr: led every cycle until clr.","S: s_eventually: must happen before the end (strong).","OK: the LED bug fails at once; the missing grant at the end."]},"sva-p8":{b:"(go, ack) > [wb_fsm] > (state, we); (state) .> {c_wr cover}; (state, we) .> {a_we}",f:["P: The assertion never fails. Is the design right?","Q: Was the antecedent ever true? Cover it.","X: state == 2'd4 can never be true in 2 bits.","S: Fix the antecedent to 2'd3.","OK: the corner-case bug fails."]},"sva-a1":{b:"(stall, irq) > [ctrl FSM] > (state); (state) .> {onehot, reset, entry, successor checks}",f:["P: Illegal transitions hide in rare paths.","S: a_decode: DECODE only from FETCH ($past).","S: a_store: EXEC always followed by STORE.","X: EXEC \u2192 DECODE when irq and stall.","OK: both transition checks fail at the same event."]},"sva-a2":{b:"(push, din) > [fifo8] > (dout); [fifo8] > (full, empty, count); (full, empty, count) .> {flag and count assertions}",f:["P: Flags, count and data must agree.","S: full == (count == 8), empty == (count == 0).","S: count follows accepted pushes and pops ($past).","X: full is low while pushing into a full FIFO.","OK: a_full fails exactly when the FIFO is full and push is high."]},"sva-a3":{b:"(we, addr, wdata) > [ram16] > (rdata); (re) > [ram16]; (we, re, addr, wdata, rdata) .> {a_data: write then read}",f:["P: The value written must be the value read.","S: (we, a = addr, d = wdata) captures the write.","S: ##1 (re && addr == a)[->1] finds the read of that address.","S: |=> rdata == d (read latency 1).","X: address 9 is written to address 1."]},"sva-a4":{b:"(req[3:0]) > [rr_arb] > (gnt[3:0]); (req, gnt) .> {onehot0, gnt\u2192req, fairness \xD74}",f:["P: Exclusive, justified and fair grants.","S: $onehot0(gnt); gnt only where $past(req).","S: req[i] |-> ##[1:4] gnt[i] for each i.","X: requester 3 is skipped while requester 0 requests.","OK: fair[3] fails."]},"sva-a5":{b:"[apb_master] -psel, penable, paddr, pwrite, pwdata-> [slave]; [slave] -pready-> [apb_master]; (APB signals) .> {protocol assertions}",f:["P: Check a bus master against the APB spec.","S: SETUP then ACCESS: $rose(psel) |-> !penable; psel && !penable |=> penable.","S: wait states: $stable(paddr, pwrite, pwdata).","X: PADDR changes during a wait state.","OK: a_stable fails."]},"sva-a6":{b:"{sender} -req-> {receiver}; {receiver} -ack-> {sender}; (req, ack) .> {four edge rules + liveness}",f:["P: Four phases in a fixed order.","S: Each edge of req/ack has a condition on the other signal.","X: ack drops while req is still high.","OK: the ack-down rule fails."]},"sva-a7":{b:"(send, data) > [uart_tx] > (tx); (tx) .> {start bit check, stop bit check}",f:["P: 8N1 framing at 4 clocks per bit.","S: $fell(tx) starts a frame: !tx[*4].","S: bit 9 (stop) at ##36: tx[*4].","X: byte C3 is sent with stop bit 0.","OK: a_stop fails for that frame."]},"sva-a8":{b:"(load, inc, d) > [pc] > (pc_cnt); (pc_cnt) .> {load, inc, hold checks}",f:["P: Verify the PC test plan: load, increment, hold.","S: load |=> pc == $past(d).","S: inc && !load |=> pc == 8'($past(pc) + 1).","S: !load && !inc |=> $stable(pc).","X: an increment lost when hold_req is high."]},"cov-1":{b:"{random stimulus} > (opcode, addr) > {cg_cmd @(posedge clk)} > {bins and coverage %}",f:["P: Did the random test reach all opcodes and all address ranges?","S: coverpoint opcode: 8 automatic bins.","S: coverpoint addr with auto_bin_max = 4: 4 ranges of 64.","Q: The stimulus only uses 0..150: which bin stays empty?","OK: The report shows the holes."]},"cov-2":{b:"(a, op) > {cg_alu} > {cp_a: zero, small, big[0..2], max}; {cg_alu} > {cp_op: ops[0..3]}",f:["P: The plan says: corner values and every operation.","S: bins zero, small, big[3], max.","S: bins ops[] = {[0:3]}: 4 bins.","Q: Which corners did the test miss?","OK: The holes name the missing tests."]},"cov-3":{b:"(st) > {cp_tr: start, go, done, b2b, wait2}; (st) .IDLE => ACCESS.> {illegal_bins}",f:["P: Were all transitions exercised?","S: bins t = (A => B) counts each transition.","S: (ACCESS [*3]) counts 3 ACCESS cycles in a row.","X: IDLE => ACCESS is illegal: reported as an error.","OK: The hole: no transfer with two wait states."]},"cov-4":{b:"(cmd) > {wildcard wr / rd}; (cmd) > {each_rd[1..6]}; (cmd) .0000.> {ignore}; (cmd) .0111, 1111.> {illegal: error}",f:["P: Group, ignore and forbid command codes.","S: wildcard bins wr = {4'b1???}.","S: ignore_bins nop: not counted at all.","X: 4'hF is reserved: illegal_bins reports it.","OK: The report lists the missing read command."]},"cov-5":{b:"(btype) > {cp_type}; (blen) > {cp_len}; (wr) > {cp_dir}; {cp_type} > {x_tl}; {cp_len} > {x_tl}; {cp_type} > {x_td}; {cp_dir} > {x_td}",f:["P: Single-field coverage hides missing combinations.","S: cross cp_type, cp_len: 3 \xD7 3 bins.","S: ignore_bins with binsof removes WRAP \xD7 one.","Q: Which combinations did the test not create?","OK: The cross report lists them."]},"cov-6":{b:"(p0) > {c0: cg_port}; (p1) > {c1: cg_port}; {c0} > {type coverage}; {c1} > {type coverage}",f:["P: Two ports, one coverage model.","S: covergroup with a ref argument; one instance per port.","S: at_least = 2: a bin needs 2 hits.","Q: Type coverage merges the instances' hits.","OK: Each port alone has holes the other fills."]},"cov-7":{b:"{transfer task} -a, w, e-> {cov.sample(a, w, e)} > {cg_tr}; (e) .iff (!e).> {cg_tr}",f:["P: Count transactions, not clock cycles.","S: with function sample(a, w, e).","S: the monitor calls cov.sample() per transfer.","S: iff (!e) ignores errored transfers.","OK: data[14h] stays empty."]},"cov-8":{b:"{APB master} > (psel, penable, pready, paddr, pwrite) > {cg_apb at transfer end}; (ws_cnt) > {cg_apb at transfer end}",f:["P: Which registers, directions and latencies did the test cover?","S: sample at psel && penable && pready.","S: regions, read/write, 0/1/2/3+ waits.","S: cross region \xD7 direction, ignore STAT writes.","OK: the holes are the next tests to write."]},"cov-9":{b:"{random packets} > (len, wr) > {cg_pkt}; {directed corners} > (len, wr) > {cg_pkt}; {cg_pkt} .get_coverage().> {random packets}",f:["P: Random tests plateau below 100%.","S: Read the holes in the report.","S: Add stimulus aimed at each hole.","Q: Is a hole unreachable (then ignore it) or just untested?","OK: coverage closed at 100%."]},"dv-1":{b:"{always #5} > (clk_a); {initial forever, FREQ_MHZ} > (clk_b); {task: duty 25%} > (clk_c); (clk_a, clk_b, clk_c) > {period/duty checker}",f:["P: Exact, programmable clocks for the testbench.","S: always #(P/2) clk = ~clk.","S: forever #(500.0/FREQ_MHZ) for any frequency.","S: high for duty \xD7 P, low for the rest.","OK: the checker measures all three."]},"dv-2":{b:"{delay 23 ns} > (por_n) > {2 clk edges} > (sys_rst_n); {#100 + 1st edge} > (soft_rst, 3 cycles)",f:["P: Three resets with different timing rules.","S: por_n: plain delay.","S: sys_rst_n: wait(por_n), then 2 clock edges.","S: soft_rst: 3-cycle pulse on clock edges.","OK: the checker sees 23, 35, 105-135."]},"dv-3":{b:"($urandom) > {& FFFE} > (even); ($urandom) > {| 0001} > (odd); ($urandom_range 0..15) > {1 << n} > (one-hot)",f:["P: Random values with properties, without constraints.","S: even: clear bit 0.","S: odd: set bit 0.","S: one-hot: 1 << random position.","OK: 60 values pass the checks."]},"dv-4":{b:"{directed tests} > (en, up, load, d) > [updown]; (en, up, load, d) > {reference model}; [updown] -q-> {checker}; {reference model} -model-> {checker}",f:["P: Verify a counter feature by feature.","S: Test plan: load, up, down, wrap up, wrap down, hold.","S: One directed test per item; a model checks every cycle.","X: Counting down from 0 gives 14.","OK: Fix the design: every item passes."]},"dv-5":{b:"{random loop: $urandom_range} > (en, up, load, d) > [updown]; [updown] > {checker vs model}; {plan items} .stop when 6/6.> {random loop}",f:["P: Find bugs nobody thought of.","S: Random inputs with weights (load rare, en common).","S: The model checks every cycle.","Q: Did random stimulus reach both wraps?","OK: all items hit, no mismatch."]},"dv-6":{b:"{tb: write(), read() tasks} > (we, re, addr, wdata) > [mem_model: logic [DW-1:0] mem[2**AW]] > (rdata, op)",f:["P: A memory model for the testbench.","S: mem[2**AW] of logic [DW-1:0].","S: registered read, write on we.","S: enum {IDLE, READ, WRITE} for the status.","OK: 16 writes, 16 reads, status checked."]},"dv-7":{b:"{test} -f.push_word / f.pop_word-> {fifo_if: signals + tasks}; {fifo_if: signals + tasks} -modport dut-> [sync_fifo]",f:["P: The same signal bundle everywhere.","S: interface fifo_if with the signals.","S: modport dut for directions.","S: push_word/pop_word tasks drive one transfer.","OK: the test only calls tasks."]},"dv-8":{b:"{Txn: addr, data, write, sprint, copy, compare} > {ErrTxn: + err, sprint override}; {handle a} .points to.> {object}",f:["P: Transactions as objects.","S: b = a copies the handle, a.copy() the object.","S: compare() checks every field.","S: ErrTxn extends Txn; virtual sprint() overrides.","OK: a base handle calls the derived sprint."]},"dv-9":{b:"{main thread} > {fork job1 job2 join}; {main thread} > {fork job3 job4 join_any}; {main thread} > {fork job5 join_none}; {wait_done} > {wait(!busy) vs 20 cycles}",f:["P: Parallel activity and waits that can hang.","S: join waits for all, join_any for one, join_none for none.","S: Timeout: fork the wait and a counter, join_any, disable fork.","OK: order 2 1 4 99 3 5; second wait times out."]},"dv-10":{b:"{push_driver} -push, din-> [sync_fifo]; {pop_driver} -pop-> [sync_fifo]; [sync_fifo] -dout-> {pop_driver}; {push_driver} -expected-> {exp_q}; {exp_q} > {pop_driver}",f:["P: Exercise the FIFO with realistic traffic.","S: Two drivers in parallel with random delays.","S: The queue models the FIFO: push_back on push, compare on pop.","OK: 40 words in order."]},"dv-11":{b:"{class Nums: rand ev, od, oh; randc tag} > {constraints} > {solver} > (values)",f:["P: Random values with properties.","S: constraint c_even { ev % 2 == 0; }","S: $countones(oh) == 1 for one-hot.","S: randc tag: a permutation of 0..7 per cycle.","OK: 16 calls, every tag twice."]},"dv-12":{b:"{c_len: dist 1:=20, [2:63]:/60, 64:=20} > {solver} > (len histogram)",f:["P: Bias stimulus toward corner cases.","S: inside { ... } for legal values.","S: dist with := per value, :/ per range.","Q: What would [2:63] := 60 do instead?","OK: 20 / 60 / 20 % within tolerance."]},"dv-13":{b:"{Mode: short_pkt -> len == 0} > (small = 1 in 20%); {ModeSB: + solve short_pkt before len} > (small = 1 in 50%)",f:["P: Why is small so rare?","S: The solver is uniform over all solutions: 1 of 5 has small = 1.","S: solve short_pkt before len: choose small first.","OK: 20% vs 50%."]},"dv-14":{b:"{v.size() == n} > {foreach v[i] in [lo:hi]} > {v.sum() == total} > {unique {v}} > (6 numbers)",f:["P: Several numbers with a joint property.","S: size() first, then foreach for each element.","S: sum() ties them together; unique {v} keeps them distinct.","Q: 6 \xD7 30 = 180 < 200: is total = 200 possible?","OK: five valid splits."]},"dv-15":{b:"{test} -with {addr == 20h}-> {Txn.randomize()}; {test} .constraint_mode(0).> {c_addr}; {test} .rand_mode(0).> (wr); {Txn.randomize()} > {post_randomize}",f:["P: Steer single calls without new classes.","S: inline with { } adds constraints for one call.","S: soft gives way to a conflicting hard constraint.","S: constraint_mode / rand_mode switch rules and variables off.","OK: all four steering tests pass."]},"dv-16":{b:"{package count_pkg: dir_t, count_list()} > {tb: import count_pkg::*}; {tb} > {$fdisplay counts.txt} > {$fgets}",f:["P: Reusable types and helpers, and file I/O.","S: package with the enum and the function.","S: import into the testbench.","S: write the list to a file, read it back.","OK: all checks match."]},"dv-17":{b:"{directed tests} > (push, pop, din) > [sync_fifo]; (push, pop, din) > {queue model}; [sync_fifo] -dout, full, empty-> {compare}; {queue model} > {compare}; (push, pop, level) > {cg_plan: op \xD7 level}",f:["P: Which FIFO scenarios matter, and were they tested?","S: Plan = {idle, rd, wr, both} \xD7 {empty, mid, full}.","S: One directed step per hole until 100%.","X: push + pop together when full: the pop is ignored.","OK: fix the design: 100% and no mismatch."]},"dv-18":{b:"{FifoOp: rand push, pop, data; mode} > {op task} > [sync_fifo]; [sync_fifo] > {model check}; (ops, level) > {cg_plan} .get_coverage().> {phase loop}",f:["P: Balanced random traffic never fills the FIFO.","S: mode-dependent dist: fill, balanced, drain.","S: switch phases every 20 operations.","S: stop when the plan coverage reaches 100%.","OK: all 12 plan bins, no mismatch."]},"dv-19":{b:"[sync_fifo] -dout-> {data scoreboard}; [sync_fifo] -full, empty-> {fifo_sva (bound)}; (push, pop) > {aux level counter} > {fifo_sva (bound)}",f:["P: The data is right, so is the FIFO right?","S: Bind a checker with flag assertions.","S: An auxiliary level counter is the reference.","X: empty rises while popping with 2 words stored.","OK: a_empty fails although the scoreboard passes."]},"dv-p1":{b:"{generator: FifoTxn} > {driver} > [fifo_np2]; [fifo_np2] > {monitor}; {monitor} -push data-> {scoreboard}; {monitor} -pop data-> {scoreboard}; {monitor} > {coverage}; [fifo_np2] .bind.> {assertions}",f:["P: Verify a FIFO with depth 6 (not a power of 2).","S: Random phases fill, balance and drain the FIFO.","S: The scoreboard compares every popped word.","X: rp wraps at DEPTH instead of DEPTH-1: data from a stale slot.","OK: fixed RTL: clean scoreboard, 100% coverage."]},"dv-p2":{b:"{requester models \xD74: hold until granted} > (req[3:0]) > [rr4] > (gnt[3:0]); (req, gnt) .> {onehot0, gnt\u2192req, fair[i] \xD74}; (req) > {cg_arb: 0..4 requests}",f:["P: Is the arbiter fair under every load?","S: Requesters hold req until granted.","S: fair[i]: req[i] |-> ##[1:4] gnt[i].","X: ptr <= winner keeps the winner on top: others starve under saturation.","OK: ptr <= winner + 1: all assertions pass."]},"dv-p3":{b:"{random test} > {apb_write / apb_read} > [apb_regs]; {apb_write / apb_read} > {RegModel}; [apb_regs] -prdata-> {compare}; {RegModel} -predicted-> {compare}; (APB) .> {protocol assertions, map coverage}",f:["P: Does every register follow the map?","S: A model class mirrors each register.","S: Random reads compare with the prediction.","X: a write to read-only STAT changes CTRL.","OK: fixed RTL: all reads match, map 100%."]},"dv-p4":{b:"{test: bytes + error injection} > [uart TX] -tx-> [uart RX] > (rx_data, frame_err) > {scoreboard}; {test} -expected-> {scoreboard}; (tx) .> {a_start}",f:["P: Does the receiver detect framing errors?","S: Inject bad stop bits on purpose.","S: The scoreboard expects {err, data} per frame.","X: the receiver never checks the stop bit.","OK: frame_err <= !tx at the stop bit: PASS."]}};var an=[{id:"vh-part1",title:"Part 1: adders"},{id:"vh-part2",title:"Part 2: combinational"},{id:"vh-part3",title:"Part 3: latches and flip-flops"},{id:"vh-part4",title:"Part 4: sequential"},{id:"vh-design",title:"VHDL-2008 design labs"}],on=[{id:"vh-p1-ha-df",group:"vh-part1",tag:"Part 1 \xB7 Lab 1",title:"Half adder: dataflow",std:"vhdl",design:`-- One-bit half adder, dataflow style: concurrent signal assignments only.
library ieee;
use ieee.std_logic_1164.all;

entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture dataflow of half_adder is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, sum, carry : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.half_adder port map (a => a, b => b, sum => sum, carry => carry);

  process
    variable v : unsigned(1 downto 0);
    variable errors : natural := 0;
  begin
    say(" a b | sum carry");
    for i in 0 to 3 loop
      v := to_unsigned(i, 2);
      a <= v(1); b <= v(0);
      wait for 10 ns;
      say(" " & to_string(a) & " " & to_string(b) & " |  " & to_string(sum) & "    " & to_string(carry));
      if sum /= (v(1) xor v(0)) or carry /= (v(1) and v(0)) then
        errors := errors + 1;
        say("   expected sum=" & to_string(v(1) xor v(0)) & " carry=" & to_string(v(1) and v(0)));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 4 input combinations correct");
    else say("FAIL: " & integer'image(errors) & " of 4 combinations wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- One-bit half adder, dataflow style: concurrent signal assignments only.
library ieee;
use ieee.std_logic_1164.all;

entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture dataflow of half_adder is
begin
  sum   <= a xor b;
  carry <= a and b;
end architecture;
`}},{id:"vh-p1-ha-bh",group:"vh-part1",tag:"Part 1 \xB7 Lab 2",title:"Half adder: behavioral",std:"vhdl",design:`-- One-bit half adder, behavioral style: a combinational process.
library ieee;
use ieee.std_logic_1164.all;

entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture behavioral of half_adder is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, sum, carry : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.half_adder port map (a => a, b => b, sum => sum, carry => carry);

  process
    variable v : unsigned(1 downto 0);
    variable errors : natural := 0;
  begin
    say(" a b | sum carry");
    for i in 0 to 3 loop
      v := to_unsigned(i, 2);
      a <= v(1); b <= v(0);
      wait for 10 ns;
      say(" " & to_string(a) & " " & to_string(b) & " |  " & to_string(sum) & "    " & to_string(carry));
      if sum /= (v(1) xor v(0)) or carry /= (v(1) and v(0)) then
        errors := errors + 1;
        say("   expected sum=" & to_string(v(1) xor v(0)) & " carry=" & to_string(v(1) and v(0)));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 4 input combinations correct");
    else say("FAIL: " & integer'image(errors) & " of 4 combinations wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- One-bit half adder, behavioral style: a combinational process.
library ieee;
use ieee.std_logic_1164.all;

entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture behavioral of half_adder is
begin
  process(all)
  begin
    case std_logic_vector'(a & b) is
      when "00"   => sum <= '0'; carry <= '0';
      when "01"   => sum <= '1'; carry <= '0';
      when "10"   => sum <= '1'; carry <= '0';
      when "11"   => sum <= '0'; carry <= '1';
      when others => sum <= 'X'; carry <= 'X';
    end case;
  end process;
end architecture;
`}},{id:"vh-p1-ha-st",group:"vh-part1",tag:"Part 1 \xB7 Lab 3",title:"Half adder: structural",std:"vhdl",design:`-- One-bit half adder, structural style: built from the gate entities.
library ieee;
use ieee.std_logic_1164.all;

-- Two-input gates, given: instantiate them below.
entity and2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of and2 is
begin
  z <= x and y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity xor2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of xor2 is
begin
  z <= x xor y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity or2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of or2 is
begin
  z <= x or y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;

entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture structural of half_adder is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, sum, carry : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.half_adder port map (a => a, b => b, sum => sum, carry => carry);

  process
    variable v : unsigned(1 downto 0);
    variable errors : natural := 0;
  begin
    say(" a b | sum carry");
    for i in 0 to 3 loop
      v := to_unsigned(i, 2);
      a <= v(1); b <= v(0);
      wait for 10 ns;
      say(" " & to_string(a) & " " & to_string(b) & " |  " & to_string(sum) & "    " & to_string(carry));
      if sum /= (v(1) xor v(0)) or carry /= (v(1) and v(0)) then
        errors := errors + 1;
        say("   expected sum=" & to_string(v(1) xor v(0)) & " carry=" & to_string(v(1) and v(0)));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 4 input combinations correct");
    else say("FAIL: " & integer'image(errors) & " of 4 combinations wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- One-bit half adder, structural style: built from the gate entities.
library ieee;
use ieee.std_logic_1164.all;

-- Two-input gates, given: instantiate them below.
entity and2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of and2 is
begin
  z <= x and y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity xor2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of xor2 is
begin
  z <= x xor y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity or2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of or2 is
begin
  z <= x or y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;

entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture structural of half_adder is
begin
  g1: entity work.xor2 port map (x => a, y => b, z => sum);
  g2: entity work.and2 port map (x => a, y => b, z => carry);
end architecture;
`}},{id:"vh-p1-fa-df",group:"vh-part1",tag:"Part 1 \xB7 Lab 4",title:"Full adder: dataflow",std:"vhdl",design:`-- One-bit full adder, dataflow style.
library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture dataflow of full_adder is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, cin, sum, cout : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.full_adder port map (a => a, b => b, cin => cin, sum => sum, cout => cout);

  process
    variable v : unsigned(2 downto 0);
    variable n : natural;
    variable errors : natural := 0;
  begin
    say(" a b cin | sum cout");
    for i in 0 to 7 loop
      v := to_unsigned(i, 3);
      a <= v(2); b <= v(1); cin <= v(0);
      wait for 10 ns;
      n := to_integer(unsigned'("0" & v(2))) + to_integer(unsigned'("0" & v(1))) + to_integer(unsigned'("0" & v(0)));
      say(" " & to_string(a) & " " & to_string(b) & "  " & to_string(cin) & "  |  " & to_string(sum) & "    " & to_string(cout));
      if sum /= to_unsigned(n, 2)(0) or cout /= to_unsigned(n, 2)(1) then
        errors := errors + 1;
        say("   expected sum=" & to_string(to_unsigned(n, 2)(0)) & " cout=" & to_string(to_unsigned(n, 2)(1)));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 8 input combinations correct");
    else say("FAIL: " & integer'image(errors) & " of 8 combinations wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- One-bit full adder, dataflow style.
library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture dataflow of full_adder is
begin
  sum  <= a xor b xor cin;
  cout <= (a and b) or (cin and (a xor b));
end architecture;
`}},{id:"vh-p1-fa-bh",group:"vh-part1",tag:"Part 1 \xB7 Lab 5",title:"Full adder: behavioral",std:"vhdl",design:`-- One-bit full adder, behavioral style: add with numeric_std.
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture behavioral of full_adder is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, cin, sum, cout : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.full_adder port map (a => a, b => b, cin => cin, sum => sum, cout => cout);

  process
    variable v : unsigned(2 downto 0);
    variable n : natural;
    variable errors : natural := 0;
  begin
    say(" a b cin | sum cout");
    for i in 0 to 7 loop
      v := to_unsigned(i, 3);
      a <= v(2); b <= v(1); cin <= v(0);
      wait for 10 ns;
      n := to_integer(unsigned'("0" & v(2))) + to_integer(unsigned'("0" & v(1))) + to_integer(unsigned'("0" & v(0)));
      say(" " & to_string(a) & " " & to_string(b) & "  " & to_string(cin) & "  |  " & to_string(sum) & "    " & to_string(cout));
      if sum /= to_unsigned(n, 2)(0) or cout /= to_unsigned(n, 2)(1) then
        errors := errors + 1;
        say("   expected sum=" & to_string(to_unsigned(n, 2)(0)) & " cout=" & to_string(to_unsigned(n, 2)(1)));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 8 input combinations correct");
    else say("FAIL: " & integer'image(errors) & " of 8 combinations wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- One-bit full adder, behavioral style: add with numeric_std.
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture behavioral of full_adder is
begin
  process(all)
    variable s : unsigned(1 downto 0);
  begin
    s := unsigned'('0' & a) + unsigned'('0' & b) + unsigned'('0' & cin);
    sum  <= s(0);
    cout <= s(1);
  end process;
end architecture;
`}},{id:"vh-p1-fa-st",group:"vh-part1",tag:"Part 1 \xB7 Lab 6",title:"Full adder: structural",std:"vhdl",design:`-- One-bit full adder, structural style: two half adders and an OR gate.
library ieee;
use ieee.std_logic_1164.all;

-- Two-input gates, given: instantiate them below.
entity and2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of and2 is
begin
  z <= x and y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity xor2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of xor2 is
begin
  z <= x xor y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity or2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of or2 is
begin
  z <= x or y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture structural of half_adder is
begin
  g1: entity work.xor2 port map (x => a, y => b, z => sum);
  g2: entity work.and2 port map (x => a, y => b, z => carry);
end architecture;

library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture structural of full_adder is
-- TODO: declare the internal signals
begin
-- TODO: connect two half adders and an or2
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, cin, sum, cout : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.full_adder port map (a => a, b => b, cin => cin, sum => sum, cout => cout);

  process
    variable v : unsigned(2 downto 0);
    variable n : natural;
    variable errors : natural := 0;
  begin
    say(" a b cin | sum cout");
    for i in 0 to 7 loop
      v := to_unsigned(i, 3);
      a <= v(2); b <= v(1); cin <= v(0);
      wait for 10 ns;
      n := to_integer(unsigned'("0" & v(2))) + to_integer(unsigned'("0" & v(1))) + to_integer(unsigned'("0" & v(0)));
      say(" " & to_string(a) & " " & to_string(b) & "  " & to_string(cin) & "  |  " & to_string(sum) & "    " & to_string(cout));
      if sum /= to_unsigned(n, 2)(0) or cout /= to_unsigned(n, 2)(1) then
        errors := errors + 1;
        say("   expected sum=" & to_string(to_unsigned(n, 2)(0)) & " cout=" & to_string(to_unsigned(n, 2)(1)));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 8 input combinations correct");
    else say("FAIL: " & integer'image(errors) & " of 8 combinations wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- One-bit full adder, structural style: two half adders and an OR gate.
library ieee;
use ieee.std_logic_1164.all;

-- Two-input gates, given: instantiate them below.
entity and2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of and2 is
begin
  z <= x and y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity xor2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of xor2 is
begin
  z <= x xor y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity or2 is
  port (x, y : in std_logic; z : out std_logic);
end entity;
architecture rtl of or2 is
begin
  z <= x or y;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
entity half_adder is
  port (
    a, b       : in  std_logic;
    sum, carry : out std_logic
  );
end entity;

architecture structural of half_adder is
begin
  g1: entity work.xor2 port map (x => a, y => b, z => sum);
  g2: entity work.and2 port map (x => a, y => b, z => carry);
end architecture;

library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture structural of full_adder is
  signal s1, c1, c2 : std_logic;
begin
  ha1: entity work.half_adder port map (a => a,  b => b,   sum => s1,  carry => c1);
  ha2: entity work.half_adder port map (a => s1, b => cin, sum => sum, carry => c2);
  g3:  entity work.or2 port map (x => c1, y => c2, z => cout);
end architecture;
`}},{id:"vh-p1-ops",group:"vh-part1",tag:"Part 1 \xB7 Lab 7",title:"All VHDL operators",std:"vhdl",design:`-- Every VHDL operator group, on two 4-bit unsigned inputs.
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity operators is
  port (
    a, b : in unsigned(3 downto 0);
    add  : out unsigned(4 downto 0);                                   -- arithmetic: a + b, 5 bits
    sub, mul_lo, quo, rem_o : out unsigned(3 downto 0);                 -- a - b, low 4 bits of a * b, a / b, a rem b (0 when b = 0)
    band, bor, bxor, bxnor, bnand, bnot : out unsigned(3 downto 0);     -- logical, bit by bit (bnot = not a)
    land, lor, lnot : out std_logic;                                    -- "is a non-zero AND/OR b non-zero", "a is zero"
    red_and, red_or, red_xor : out std_logic;                           -- VHDL-2008 reduction of a: and a, or a, xor a
    eq, neq, lt, gt, le, ge : out std_logic;                            -- relational: = /= < > <= >=
    shl, shr, ashr, rotl : out unsigned(3 downto 0);                    -- shift_left, shift_right by 1; arithmetic shift right; rotate left
    cat  : out unsigned(7 downto 0);                                    -- concatenation a & b
    cond : out unsigned(3 downto 0)                                     -- conditional: the larger of a and b
  );
end entity;

architecture rtl of operators is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b : unsigned(3 downto 0);
  signal add : unsigned(4 downto 0);
  signal sub, mul_lo, quo, rem_o, band, bor, bxor, bxnor, bnand, bnot : unsigned(3 downto 0);
  signal land, lor, lnot, red_and, red_or, red_xor : std_logic;
  signal eq, neq, lt, gt, le, ge : std_logic;
  signal shl, shr, ashr, rotl : unsigned(3 downto 0);
  signal cat : unsigned(7 downto 0);
  signal cond : unsigned(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
  function sl(x : boolean) return std_logic is
  begin
    if x then return '1'; else return '0'; end if;
  end function;
begin
  dut: entity work.operators port map (a, b, add, sub, mul_lo, quo, rem_o, band, bor, bxor, bxnor, bnand, bnot,
                                       land, lor, lnot, red_and, red_or, red_xor, eq, neq, lt, gt, le, ge,
                                       shl, shr, ashr, rotl, cat, cond);

  process
    variable errors : natural := 0;
    procedure check(name : string; got, exp : unsigned) is
    begin
      if got /= exp then
        errors := errors + 1;
        if errors <= 8 then say("  " & name & ": got " & to_string(got) & ", expected " & to_string(exp)); end if;
      end if;
    end procedure;
    procedure check1(name : string; got, exp : std_logic) is
    begin
      if got /= exp then
        errors := errors + 1;
        if errors <= 8 then say("  " & name & ": got " & to_string(got) & ", expected " & to_string(exp)); end if;
      end if;
    end procedure;
  begin
    for i in 0 to 15 loop
      for j in 0 to 15 loop
        a <= to_unsigned(i, 4); b <= to_unsigned(j, 4);
        wait for 1 ns;
        check("add", add, to_unsigned(i + j, 5));
        check("sub", sub, to_unsigned((i - j) mod 16, 4));
        check("mul_lo", mul_lo, to_unsigned((i * j) mod 16, 4));
        if j /= 0 then check("quo", quo, to_unsigned(i / j, 4)); check("rem_o", rem_o, to_unsigned(i rem j, 4));
        else check("quo", quo, "0000"); check("rem_o", rem_o, "0000"); end if;
        check("band", band, a and b); check("bor", bor, a or b); check("bxor", bxor, a xor b);
        check("bxnor", bxnor, a xnor b); check("bnand", bnand, a nand b); check("bnot", bnot, not a);
        check1("land", land, sl(i /= 0 and j /= 0)); check1("lor", lor, sl(i /= 0 or j /= 0)); check1("lnot", lnot, sl(i = 0));
        check1("red_and", red_and, sl(i = 15)); check1("red_or", red_or, sl(i /= 0));
        check1("red_xor", red_xor, a(0) xor a(1) xor a(2) xor a(3));
        check1("eq", eq, sl(i = j)); check1("neq", neq, sl(i /= j)); check1("lt", lt, sl(i < j));
        check1("gt", gt, sl(i > j)); check1("le", le, sl(i <= j)); check1("ge", ge, sl(i >= j));
        check("shl", shl, to_unsigned((i * 2) mod 16, 4)); check("shr", shr, to_unsigned(i / 2, 4));
        check("ashr", ashr, a(3) & a(3 downto 1)); check("rotl", rotl, a(2 downto 0) & a(3));
        check("cat", cat, to_unsigned(i * 16 + j, 8));
        if i > j then check("cond", cond, a); else check("cond", cond, b); end if;
      end loop;
    end loop;
    a <= to_unsigned(12, 4); b <= to_unsigned(5, 4); wait for 1 ns;
    say("a=12 b=5: add=" & integer'image(to_integer(add)) & " sub=" & integer'image(to_integer(sub)) &
        " quo=" & integer'image(to_integer(quo)) & " rem=" & integer'image(to_integer(rem_o)) &
        " band=" & to_string(band) & " cat=" & to_string(cat) & " cond=" & integer'image(to_integer(cond)));
    if errors = 0 then say("PASS: every operator correct for all 256 input pairs");
    else say("FAIL: " & integer'image(errors) & " wrong results"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- Every VHDL operator group, on two 4-bit unsigned inputs.
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity operators is
  port (
    a, b : in unsigned(3 downto 0);
    add  : out unsigned(4 downto 0);                                   -- arithmetic: a + b, 5 bits
    sub, mul_lo, quo, rem_o : out unsigned(3 downto 0);                 -- a - b, low 4 bits of a * b, a / b, a rem b (0 when b = 0)
    band, bor, bxor, bxnor, bnand, bnot : out unsigned(3 downto 0);     -- logical, bit by bit (bnot = not a)
    land, lor, lnot : out std_logic;                                    -- "is a non-zero AND/OR b non-zero", "a is zero"
    red_and, red_or, red_xor : out std_logic;                           -- VHDL-2008 reduction of a: and a, or a, xor a
    eq, neq, lt, gt, le, ge : out std_logic;                            -- relational: = /= < > <= >=
    shl, shr, ashr, rotl : out unsigned(3 downto 0);                    -- shift_left, shift_right by 1; arithmetic shift right; rotate left
    cat  : out unsigned(7 downto 0);                                    -- concatenation a & b
    cond : out unsigned(3 downto 0)                                     -- conditional: the larger of a and b
  );
end entity;

architecture rtl of operators is
begin
  add    <= ('0' & a) + b;
  sub    <= a - b;
  mul_lo <= resize(a * b, 4);
  quo    <= a / b when b /= 0 else "0000";
  rem_o  <= a rem b when b /= 0 else "0000";

  band  <= a and b;
  bor   <= a or b;
  bxor  <= a xor b;
  bxnor <= a xnor b;
  bnand <= a nand b;
  bnot  <= not a;

  land <= '1' when a /= 0 and b /= 0 else '0';
  lor  <= '1' when a /= 0 or b /= 0 else '0';
  lnot <= '1' when a = 0 else '0';

  red_and <= and a;
  red_or  <= or a;
  red_xor <= xor a;

  eq  <= '1' when a = b  else '0';
  neq <= '1' when a /= b else '0';
  lt  <= '1' when a < b  else '0';
  gt  <= '1' when a > b  else '0';
  le  <= '1' when a <= b else '0';
  ge  <= '1' when a >= b else '0';

  shl  <= shift_left(a, 1);
  shr  <= shift_right(a, 1);
  ashr <= unsigned(shift_right(signed(a), 1));
  rotl <= rotate_left(a, 1);

  cat  <= a & b;
  cond <= a when a > b else b;
end architecture;
`}},{id:"vh-p1-c2f",group:"vh-part1",tag:"Part 1 \xB7 Lab 8",title:"Celsius to Fahrenheit procedure",std:"vhdl",design:`-- A VHDL procedure that converts Celsius to Fahrenheit: F = C * 9 / 5 + 32 (integer arithmetic).
package temperature is
  procedure c_to_f(celsius : in integer; fahrenheit : out integer);
end package;

package body temperature is
  procedure c_to_f(celsius : in integer; fahrenheit : out integer) is
  begin
-- TODO: write the design here
  end procedure;
end package body;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;
use work.temperature.all;

entity tb is end entity;

architecture sim of tb is
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  process
    type int_list is array (natural range <>) of integer;
    constant tests : int_list := (-40, 0, 37, 100, 25, -10, 200);
    variable f : integer := integer'low;
    variable errors : natural := 0;
  begin
    for k in tests'range loop
      c_to_f(tests(k), f);
      say(integer'image(tests(k)) & " C = " & integer'image(f) & " F");
      if f /= tests(k) * 9 / 5 + 32 then
        errors := errors + 1;
        say("  expected " & integer'image(tests(k) * 9 / 5 + 32));
      end if;
    end loop;
    if errors = 0 then say("PASS: all 7 conversions correct");
    else say("FAIL: " & integer'image(errors) & " conversions wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- A VHDL procedure that converts Celsius to Fahrenheit: F = C * 9 / 5 + 32 (integer arithmetic).
package temperature is
  procedure c_to_f(celsius : in integer; fahrenheit : out integer);
end package;

package body temperature is
  procedure c_to_f(celsius : in integer; fahrenheit : out integer) is
  begin
    fahrenheit := celsius * 9 / 5 + 32;
  end procedure;
end package body;
`}},{id:"vh-p2-add4",group:"vh-part2",tag:"Part 2 \xB7 Lab 1",title:"4-bit full adder: dataflow",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit adder with carry in and carry out.
entity adder4 is
  port (
    a, b : in  std_logic_vector(3 downto 0);
    cin  : in  std_logic;
    sum  : out std_logic_vector(3 downto 0);
    cout : out std_logic
  );
end entity;

architecture dataflow of adder4 is
  signal r : unsigned(4 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, sum : std_logic_vector(3 downto 0);
  signal cin, cout : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.adder4 port map (a => a, b => b, cin => cin, sum => sum, cout => cout);
  process
    variable errors : natural := 0;
  begin
    for i in 0 to 15 loop
      for j in 0 to 15 loop
        for c in 0 to 1 loop
          a <= std_logic_vector(to_unsigned(i, 4)); b <= std_logic_vector(to_unsigned(j, 4));
          cin <= '1' when c = 1 else '0';
          wait for 1 ns;
          if unsigned(cout & sum) /= to_unsigned(i + j + c, 5) then
            errors := errors + 1;
            if errors <= 5 then say("  " & integer'image(i) & " + " & integer'image(j) & " + " & integer'image(c) & ": got " & to_string(cout & sum)); end if;
          end if;
        end loop;
      end loop;
    end loop;
    a <= x"9"; b <= x"8"; cin <= '1'; wait for 1 ns;
    say("9 + 8 + 1 = " & to_string(cout & sum) & " (cout sum)");
    if errors = 0 then say("PASS: all 512 additions correct");
    else say("FAIL: " & integer'image(errors) & " of 512 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit adder with carry in and carry out.
entity adder4 is
  port (
    a, b : in  std_logic_vector(3 downto 0);
    cin  : in  std_logic;
    sum  : out std_logic_vector(3 downto 0);
    cout : out std_logic
  );
end entity;

architecture dataflow of adder4 is
  signal r : unsigned(4 downto 0);
begin
  r    <= resize(unsigned(a), 5) + resize(unsigned(b), 5) + ("0000" & cin);
  sum  <= std_logic_vector(r(3 downto 0));
  cout <= r(4);
end architecture;
`}},{id:"vh-p2-mux2",group:"vh-part2",tag:"Part 2 \xB7 Lab 2",title:"2:1 multiplexer",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 2:1 multiplexer, 8 bits wide.
entity mux2 is
  port (
    a, b : in  std_logic_vector(7 downto 0);
    sel  : in  std_logic;
    y    : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mux2 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, y : std_logic_vector(7 downto 0);
  signal sel : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.mux2 port map (a => a, b => b, sel => sel, y => y);
  process
    variable errors : natural := 0;
  begin
    for i in 0 to 99 loop
      a <= std_logic_vector(to_unsigned((i * 37 + 11) mod 256, 8));
      b <= std_logic_vector(to_unsigned((i * 91 + 7) mod 256, 8));
      sel <= '1' when i mod 2 = 1 else '0';
      wait for 1 ns;
      if (sel = '0' and y /= a) or (sel = '1' and y /= b) then
        errors := errors + 1;
        say("  sel=" & to_string(sel) & " a=" & to_hstring(a) & " b=" & to_hstring(b) & ": y=" & to_hstring(y));
      end if;
    end loop;
    if errors = 0 then say("PASS: y follows a or b for 100 random inputs");
    else say("FAIL: " & integer'image(errors) & " of 100 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 2:1 multiplexer, 8 bits wide.
entity mux2 is
  port (
    a, b : in  std_logic_vector(7 downto 0);
    sel  : in  std_logic;
    y    : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mux2 is
begin
  y <= a when sel = '0' else b;
end architecture;
`}},{id:"vh-p2-mux4",group:"vh-part2",tag:"Part 2 \xB7 Lab 3",title:"4:1 multiplexer",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4:1 multiplexer, 4 bits wide.
entity mux4 is
  port (
    d0, d1, d2, d3 : in  std_logic_vector(3 downto 0);
    sel            : in  std_logic_vector(1 downto 0);
    y              : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of mux4 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal d0, d1, d2, d3, y : std_logic_vector(3 downto 0);
  signal sel : std_logic_vector(1 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.mux4 port map (d0, d1, d2, d3, sel, y);
  process
    variable errors : natural := 0;
    variable exp : std_logic_vector(3 downto 0);
  begin
    d0 <= x"3"; d1 <= x"A"; d2 <= x"5"; d3 <= x"C";
    for s in 0 to 3 loop
      sel <= std_logic_vector(to_unsigned(s, 2));
      wait for 1 ns;
      case s is when 0 => exp := d0; when 1 => exp := d1; when 2 => exp := d2; when others => exp := d3; end case;
      say("sel=" & to_string(sel) & " y=" & to_hstring(y));
      if y /= exp then errors := errors + 1; say("  expected " & to_hstring(exp)); end if;
    end loop;
    if errors = 0 then say("PASS: y is the selected input for every sel");
    else say("FAIL: " & integer'image(errors) & " of 4 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4:1 multiplexer, 4 bits wide.
entity mux4 is
  port (
    d0, d1, d2, d3 : in  std_logic_vector(3 downto 0);
    sel            : in  std_logic_vector(1 downto 0);
    y              : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of mux4 is
begin
  with sel select y <=
    d0 when "00",
    d1 when "01",
    d2 when "10",
    d3 when others;
end architecture;
`}},{id:"vh-p2-dec24",group:"vh-part2",tag:"Part 2 \xB7 Lab 4",title:"2\xD74 decoder",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 2-to-4 decoder with enable.
entity decoder2x4 is
  port (
    a  : in  std_logic_vector(1 downto 0);
    en : in  std_logic;
    y  : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of decoder2x4 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a : std_logic_vector(1 downto 0);
  signal en : std_logic;
  signal y : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.decoder2x4 port map (a => a, en => en, y => y);
  process
    variable errors : natural := 0;
    variable exp : std_logic_vector(3 downto 0);
  begin
    for e in 0 to 1 loop
      for i in 0 to 3 loop
        a <= std_logic_vector(to_unsigned(i, 2)); en <= '1' when e = 1 else '0';
        wait for 1 ns;
        exp := "0000"; if e = 1 then exp(i) := '1'; end if;
        say("en=" & to_string(en) & " a=" & to_string(a) & " y=" & to_string(y));
        if y /= exp then errors := errors + 1; say("  expected " & to_string(exp)); end if;
      end loop;
    end loop;
    if errors = 0 then say("PASS: all 8 cases correct");
    else say("FAIL: " & integer'image(errors) & " of 8 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 2-to-4 decoder with enable.
entity decoder2x4 is
  port (
    a  : in  std_logic_vector(1 downto 0);
    en : in  std_logic;
    y  : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of decoder2x4 is
begin
  process(all)
  begin
    y <= "0000";
    if en = '1' then
      y(to_integer(unsigned(a))) <= '1';
    end if;
  end process;
end architecture;
`}},{id:"vh-p2-enc42",group:"vh-part2",tag:"Part 2 \xB7 Lab 5",title:"4\xD72 encoder",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-to-2 encoder: exactly one bit of d is 1; y is its position.
entity encoder4x2 is
  port (
    d     : in  std_logic_vector(3 downto 0);
    y     : out std_logic_vector(1 downto 0);
    valid : out std_logic
  );
end entity;

architecture rtl of encoder4x2 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal d : std_logic_vector(3 downto 0);
  signal y : std_logic_vector(1 downto 0);
  signal valid : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.encoder4x2 port map (d => d, y => y, valid => valid);
  process
    variable errors : natural := 0;
    variable ey : std_logic_vector(1 downto 0); variable ev : std_logic;
  begin
    for i in 0 to 15 loop
      d <= std_logic_vector(to_unsigned(i, 4)); wait for 1 ns;
      ev := '0'; ey := "00";
      for k in 0 to 3 loop if i = 2 ** k then ev := '1'; ey := std_logic_vector(to_unsigned(k, 2)); end if; end loop;
      if valid /= ev or y /= ey then
        errors := errors + 1;
        say("  d=" & to_string(d) & ": y=" & to_string(y) & " valid=" & to_string(valid) & ", expected y=" & to_string(ey) & " valid=" & to_string(ev));
      end if;
    end loop;
    d <= "0100"; wait for 1 ns; say("d=0100: y=" & to_string(y) & " valid=" & to_string(valid));
    if errors = 0 then say("PASS: all 16 inputs correct");
    else say("FAIL: " & integer'image(errors) & " of 16 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-to-2 encoder: exactly one bit of d is 1; y is its position.
entity encoder4x2 is
  port (
    d     : in  std_logic_vector(3 downto 0);
    y     : out std_logic_vector(1 downto 0);
    valid : out std_logic
  );
end entity;

architecture rtl of encoder4x2 is
begin
  process(all)
  begin
    valid <= '1';
    case d is
      when "0001" => y <= "00";
      when "0010" => y <= "01";
      when "0100" => y <= "10";
      when "1000" => y <= "11";
      when others => y <= "00"; valid <= '0';
    end case;
  end process;
end architecture;
`}},{id:"vh-p2-penc42",group:"vh-part2",tag:"Part 2 \xB7 Lab 6",title:"4\xD72 priority encoder",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-to-2 priority encoder: y is the position of the highest 1 in d.
entity priority_encoder4x2 is
  port (
    d     : in  std_logic_vector(3 downto 0);
    y     : out std_logic_vector(1 downto 0);
    valid : out std_logic
  );
end entity;

architecture rtl of priority_encoder4x2 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal d : std_logic_vector(3 downto 0);
  signal y : std_logic_vector(1 downto 0);
  signal valid : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.priority_encoder4x2 port map (d => d, y => y, valid => valid);
  process
    variable errors : natural := 0;
    variable ey : std_logic_vector(1 downto 0); variable ev : std_logic;
  begin
    for i in 0 to 15 loop
      d <= std_logic_vector(to_unsigned(i, 4)); wait for 1 ns;
      ev := '0'; ey := "00";
      for k in 0 to 3 loop if d(k) = '1' then ev := '1'; ey := std_logic_vector(to_unsigned(k, 2)); end if; end loop;
      if valid /= ev or y /= ey then
        errors := errors + 1;
        say("  d=" & to_string(d) & ": y=" & to_string(y) & " valid=" & to_string(valid) & ", expected y=" & to_string(ey) & " valid=" & to_string(ev));
      end if;
    end loop;
    d <= "0110"; wait for 1 ns; say("d=0110: y=" & to_string(y) & " valid=" & to_string(valid));
    if errors = 0 then say("PASS: all 16 inputs correct");
    else say("FAIL: " & integer'image(errors) & " of 16 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-to-2 priority encoder: y is the position of the highest 1 in d.
entity priority_encoder4x2 is
  port (
    d     : in  std_logic_vector(3 downto 0);
    y     : out std_logic_vector(1 downto 0);
    valid : out std_logic
  );
end entity;

architecture rtl of priority_encoder4x2 is
begin
  process(all)
  begin
    valid <= '1';
    if    d(3) = '1' then y <= "11";
    elsif d(2) = '1' then y <= "10";
    elsif d(1) = '1' then y <= "01";
    elsif d(0) = '1' then y <= "00";
    else y <= "00"; valid <= '0';
    end if;
  end process;
end architecture;
`}},{id:"vh-p2-cmp4",group:"vh-part2",tag:"Part 2 \xB7 Lab 7",title:"4-bit comparator",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit magnitude comparator.
entity comparator4 is
  port (
    a, b       : in  std_logic_vector(3 downto 0);
    gt, eq, lt : out std_logic
  );
end entity;

architecture rtl of comparator4 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b : std_logic_vector(3 downto 0);
  signal gt, eq, lt : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.comparator4 port map (a => a, b => b, gt => gt, eq => eq, lt => lt);
  process
    variable errors : natural := 0;
  begin
    for i in 0 to 15 loop
      for j in 0 to 15 loop
        a <= std_logic_vector(to_unsigned(i, 4)); b <= std_logic_vector(to_unsigned(j, 4)); wait for 1 ns;
        if (gt = '1') /= (i > j) or (eq = '1') /= (i = j) or (lt = '1') /= (i < j) then
          errors := errors + 1;
          if errors <= 5 then say("  a=" & integer'image(i) & " b=" & integer'image(j) & ": gt eq lt = " & to_string(gt) & to_string(eq) & to_string(lt)); end if;
        end if;
      end loop;
    end loop;
    a <= x"9"; b <= x"3"; wait for 1 ns; say("9 vs 3: gt=" & to_string(gt) & " eq=" & to_string(eq) & " lt=" & to_string(lt));
    if errors = 0 then say("PASS: all 256 comparisons correct");
    else say("FAIL: " & integer'image(errors) & " of 256 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit magnitude comparator.
entity comparator4 is
  port (
    a, b       : in  std_logic_vector(3 downto 0);
    gt, eq, lt : out std_logic
  );
end entity;

architecture rtl of comparator4 is
begin
  gt <= '1' when unsigned(a) > unsigned(b) else '0';
  eq <= '1' when unsigned(a) = unsigned(b) else '0';
  lt <= '1' when unsigned(a) < unsigned(b) else '0';
end architecture;
`}},{id:"vh-p2-bshift8",group:"vh-part2",tag:"Part 2 \xB7 Lab 8",title:"8-bit barrel shifter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit barrel shifter: shifts d by amt (0 to 7) in one step.
entity barrel_shifter8 is
  port (
    d           : in  std_logic_vector(7 downto 0);
    amt         : in  std_logic_vector(2 downto 0);
    dir, rotate : in  std_logic;
    y           : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of barrel_shifter8 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal d, y : std_logic_vector(7 downto 0);
  signal amt : std_logic_vector(2 downto 0);
  signal dir, rotate : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.barrel_shifter8 port map (d => d, amt => amt, dir => dir, rotate => rotate, y => y);
  process
    variable errors : natural := 0;
    variable x, e : unsigned(7 downto 0); variable n : natural;
  begin
    for t in 0 to 399 loop
      x := to_unsigned((t * 73 + 29) mod 256, 8); n := t mod 8;
      d <= std_logic_vector(x); amt <= std_logic_vector(to_unsigned(n, 3));
      dir <= '1' when (t / 8) mod 2 = 1 else '0'; rotate <= '1' when (t / 16) mod 2 = 1 else '0';
      wait for 1 ns;
      if rotate = '0' then
        e := (others => '0');
        for k in 0 to 7 loop
          if dir = '0' and k + n <= 7 then e(k + n) := x(k); end if;
          if dir = '1' and k - n >= 0 then e(k - n) := x(k); end if;
        end loop;
      else
        for k in 0 to 7 loop
          if dir = '0' then e((k + n) mod 8) := x(k); else e((k - n) mod 8) := x(k); end if;
        end loop;
      end if;
      if unsigned(y) /= e then
        errors := errors + 1;
        if errors <= 5 then say("  d=" & to_string(d) & " amt=" & integer'image(n) & " dir=" & to_string(dir) & " rotate=" & to_string(rotate) & ": y=" & to_string(y) & ", expected " & to_string(e)); end if;
      end if;
    end loop;
    d <= "10010011"; amt <= "010"; dir <= '0'; rotate <= '1'; wait for 1 ns;
    say("rotate left 10010011 by 2: " & to_string(y));
    if errors = 0 then say("PASS: 400 shifts and rotates correct");
    else say("FAIL: " & integer'image(errors) & " of 400 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit barrel shifter: shifts d by amt (0 to 7) in one step.
entity barrel_shifter8 is
  port (
    d           : in  std_logic_vector(7 downto 0);
    amt         : in  std_logic_vector(2 downto 0);
    dir, rotate : in  std_logic;
    y           : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of barrel_shifter8 is
begin
  process(all)
    variable n : natural;
  begin
    n := to_integer(unsigned(amt));
    if rotate = '0' and dir = '0' then    y <= std_logic_vector(shift_left(unsigned(d), n));
    elsif rotate = '0' then               y <= std_logic_vector(shift_right(unsigned(d), n));
    elsif dir = '0' then                  y <= std_logic_vector(rotate_left(unsigned(d), n));
    else                                  y <= std_logic_vector(rotate_right(unsigned(d), n));
    end if;
  end process;
end architecture;
`}},{id:"vh-p2-alu",group:"vh-part2",tag:"Part 2 \xB7 Lab 9",title:"ALU",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit ALU.  op: 0 a+b, 1 a-b, 2 a and b, 3 a or b, 4 a xor b, 5 not a, 6 a shifted left by 1, 7 a shifted right by 1.
-- carry: the 9th bit of the result for add and subtract (1 means borrow for subtract), 0 otherwise.
-- zero: 1 when y is 0.
entity alu8 is
  port (
    a, b  : in  std_logic_vector(7 downto 0);
    op    : in  std_logic_vector(2 downto 0);
    y     : out std_logic_vector(7 downto 0);
    carry : out std_logic;
    zero  : out std_logic
  );
end entity;

architecture rtl of alu8 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a, b, y : std_logic_vector(7 downto 0);
  signal op : std_logic_vector(2 downto 0);
  signal carry, zero : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.alu8 port map (a => a, b => b, op => op, y => y, carry => carry, zero => zero);
  process
    variable errors : natural := 0;
    variable ua, ub, r : unsigned(8 downto 0); variable o : natural;
  begin
    for i in 0 to 3999 loop
      ua := to_unsigned((i * 151 + 17) mod 256, 9); ub := to_unsigned((i * 89 + 3) mod 256, 9);
      if i mod 50 = 0 then ub := ua; end if;
      o := (i * 5 + i / 8) mod 8;
      a <= std_logic_vector(ua(7 downto 0)); b <= std_logic_vector(ub(7 downto 0)); op <= std_logic_vector(to_unsigned(o, 3));
      wait for 1 ns;
      case o is
        when 0 => r := ua + ub; when 1 => r := ua - ub; when 2 => r := ua and ub; when 3 => r := ua or ub;
        when 4 => r := ua xor ub; when 5 => r := '0' & not ua(7 downto 0);
        when 6 => r := '0' & ua(6 downto 0) & '0'; when others => r := "00" & ua(7 downto 1);
      end case;
      if unsigned(y) /= r(7 downto 0) or (zero = '1') /= (r(7 downto 0) = 0) or (o <= 1 and carry /= r(8)) then
        errors := errors + 1;
        if errors <= 5 then say("  op=" & integer'image(o) & " a=" & integer'image(to_integer(ua)) & " b=" & integer'image(to_integer(ub)) &
          ": y=" & integer'image(to_integer(unsigned(y))) & " carry=" & to_string(carry) & " zero=" & to_string(zero) & ", expected y=" & integer'image(to_integer(r(7 downto 0))) & " carry=" & to_string(r(8))); end if;
      end if;
    end loop;
    a <= std_logic_vector(to_unsigned(200, 8)); b <= std_logic_vector(to_unsigned(100, 8)); op <= "000"; wait for 1 ns;
    say("200 + 100: y=" & integer'image(to_integer(unsigned(y))) & " carry=" & to_string(carry));
    if errors = 0 then say("PASS: 4000 operations correct");
    else say("FAIL: " & integer'image(errors) & " of 4000 wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit ALU.  op: 0 a+b, 1 a-b, 2 a and b, 3 a or b, 4 a xor b, 5 not a, 6 a shifted left by 1, 7 a shifted right by 1.
-- carry: the 9th bit of the result for add and subtract (1 means borrow for subtract), 0 otherwise.
-- zero: 1 when y is 0.
entity alu8 is
  port (
    a, b  : in  std_logic_vector(7 downto 0);
    op    : in  std_logic_vector(2 downto 0);
    y     : out std_logic_vector(7 downto 0);
    carry : out std_logic;
    zero  : out std_logic
  );
end entity;

architecture rtl of alu8 is
begin
  process(all)
    variable ua, ub, r : unsigned(8 downto 0);
  begin
    ua := '0' & unsigned(a); ub := '0' & unsigned(b);
    case op is
      when "000"  => r := ua + ub;
      when "001"  => r := ua - ub;
      when "010"  => r := ua and ub;
      when "011"  => r := ua or ub;
      when "100"  => r := ua xor ub;
      when "101"  => r := '0' & not unsigned(a);
      when "110"  => r := '0' & shift_left(unsigned(a), 1);
      when others => r := '0' & shift_right(unsigned(a), 1);
    end case;
    y     <= std_logic_vector(r(7 downto 0));
    carry <= r(8);
    zero  <= '1' when r(7 downto 0) = 0 else '0';
  end process;
end architecture;
`}},{id:"vh-p3-dlatch",group:"vh-part3",tag:"Part 3 \xB7 Lab 1",title:"D latch",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Transparent D latch.
entity d_latch is
  port (
    d, en : in  std_logic;
    q     : out std_logic
  );
end entity;

architecture rtl of d_latch is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal d, en, q : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.d_latch port map (d => d, en => en, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 11;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 120 loop
      d  <= '1' when rnd(2) = 1 else '0';
      en <= '1' when t = 0 or rnd(3) = 0 else '0';
      wait for 2 ns;
      if en = '1' then m := d; end if;
      if m /= 'U' and q /= m then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " en=" & to_string(en) & " q=" & to_string(q) & ", expected " & to_string(m)); end if;
      end if;
    end loop;
    if errors = 0 then say("PASS: q correct on all 121 steps");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Transparent D latch.
entity d_latch is
  port (
    d, en : in  std_logic;
    q     : out std_logic
  );
end entity;

architecture rtl of d_latch is
begin
  process(all)
  begin
    if en = '1' then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dlatch-rst",group:"vh-part3",tag:"Part 3 \xB7 Lab 2",title:"D latch with asynchronous reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D latch with an asynchronous, active-high reset.
entity d_latch_rst is
  port (
    d, en, rst : in  std_logic;
    q          : out std_logic
  );
end entity;

architecture rtl of d_latch_rst is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal d, en, q : std_logic := '0';
  signal rst : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.d_latch_rst port map (d => d, en => en, rst => rst, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 11;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 120 loop
      d  <= '1' when rnd(2) = 1 else '0';
      en <= '1' when t = 0 or rnd(3) = 0 else '0';
      rst <= '1' when t = 60 or rnd(9) = 0 else '0';
      wait for 2 ns;
      if rst = '1' then m := '0'; elsif en = '1' then m := d; end if;
      if m /= 'U' and q /= m then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " en=" & to_string(en) & " q=" & to_string(q) & ", expected " & to_string(m)); end if;
      end if;
    end loop;
    if errors = 0 then say("PASS: q correct on all 121 steps");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D latch with an asynchronous, active-high reset.
entity d_latch_rst is
  port (
    d, en, rst : in  std_logic;
    q          : out std_logic
  );
end entity;

architecture rtl of d_latch_rst is
begin
  process(all)
  begin
    if rst = '1' then
      q <= '0';
    elsif en = '1' then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff",group:"vh-part3",tag:"Part 3 \xB7 Lab 3",title:"D flip-flop",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Rising-edge D flip-flop.
entity dff is
  port (
    clk, d : in  std_logic;
    q      : out std_logic
  );
end entity;

architecture rtl of dff is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff port map (clk => clk, d => d, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      wait for 1 ns;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      m := d;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Rising-edge D flip-flop.
entity dff is
  port (
    clk, d : in  std_logic;
    q      : out std_logic
  );
end entity;

architecture rtl of dff is
begin
  process(clk)
  begin
    if rising_edge(clk) then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-arh",group:"vh-part3",tag:"Part 3 \xB7 Lab 4",title:"DFF, async active-high reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with an asynchronous, active-high reset.
entity dff_async_rst is
  port (
    clk, rst, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_async_rst is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal rst : std_logic := '0';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_async_rst port map (clk => clk, d => d, rst => rst, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      rst <= '1' when (t = 0 and true) or rnd(7) = 0 else '0';
      wait for 1 ns;
      if rst = '1' then m := '0'; end if;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (asynchronous control)"); end if; end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if rst = '1' then m := '0'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with an asynchronous, active-high reset.
entity dff_async_rst is
  port (
    clk, rst, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_async_rst is
begin
  process(clk, rst)
  begin
    if rst = '1' then
      q <= '0';
    elsif rising_edge(clk) then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-neg-arh",group:"vh-part3",tag:"Part 3 \xB7 Lab 5",title:"Negative-edge DFF, async active-high reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Falling-edge D flip-flop with an asynchronous, active-high reset.
entity dff_neg_async_rst is
  port (
    clk, rst, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_neg_async_rst is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '1';
  signal d : std_logic := '0';
  signal rst : std_logic := '0';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_neg_async_rst port map (clk => clk, d => d, rst => rst, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      rst <= '1' when (t = 0 and true) or rnd(7) = 0 else '0';
      wait for 1 ns;
      if rst = '1' then m := '0'; end if;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (asynchronous control)"); end if; end if;
      wait for 4 ns; clk <= '0'; wait for 1 ns;
      if rst = '1' then m := '0'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '1';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Falling-edge D flip-flop with an asynchronous, active-high reset.
entity dff_neg_async_rst is
  port (
    clk, rst, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_neg_async_rst is
begin
  process(clk, rst)
  begin
    if rst = '1' then
      q <= '0';
    elsif falling_edge(clk) then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-arl",group:"vh-part3",tag:"Part 3 \xB7 Lab 6",title:"DFF, async active-low reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with an asynchronous, active-low reset.
entity dff_async_rst_n is
  port (
    clk, rst_n, d : in  std_logic;
    q             : out std_logic
  );
end entity;

architecture rtl of dff_async_rst_n is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal rst_n : std_logic := '1';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_async_rst_n port map (clk => clk, d => d, rst_n => rst_n, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      rst_n <= '0' when (t = 0 and true) or rnd(7) = 0 else '1';
      wait for 1 ns;
      if rst_n = '0' then m := '0'; end if;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (asynchronous control)"); end if; end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if rst_n = '0' then m := '0'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with an asynchronous, active-low reset.
entity dff_async_rst_n is
  port (
    clk, rst_n, d : in  std_logic;
    q             : out std_logic
  );
end entity;

architecture rtl of dff_async_rst_n is
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      q <= '0';
    elsif rising_edge(clk) then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-ash",group:"vh-part3",tag:"Part 3 \xB7 Lab 7",title:"DFF, async active-high set",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with an asynchronous, active-high set.
entity dff_async_set is
  port (
    clk, set, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_async_set is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal set : std_logic := '0';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_async_set port map (clk => clk, d => d, set => set, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      set <= '1' when (t = 0 and true) or rnd(7) = 0 else '0';
      wait for 1 ns;
      if set = '1' then m := '1'; end if;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (asynchronous control)"); end if; end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if set = '1' then m := '1'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with an asynchronous, active-high set.
entity dff_async_set is
  port (
    clk, set, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_async_set is
begin
  process(clk, set)
  begin
    if set = '1' then
      q <= '1';
    elsif rising_edge(clk) then
      q <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-srh",group:"vh-part3",tag:"Part 3 \xB7 Lab 8",title:"DFF, sync active-high reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with a synchronous, active-high reset.
entity dff_sync_rst is
  port (
    clk, rst, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_sync_rst is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal rst : std_logic := '0';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_sync_rst port map (clk => clk, d => d, rst => rst, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      rst <= '1' when (t = 0 and true) or rnd(7) = 0 else '0';
      wait for 1 ns;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (q may only change on a clock edge)"); end if; end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if rst = '1' then m := '0'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with a synchronous, active-high reset.
entity dff_sync_rst is
  port (
    clk, rst, d : in  std_logic;
    q           : out std_logic
  );
end entity;

architecture rtl of dff_sync_rst is
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if rst = '1' then
        q <= '0';
      else
        q <= d;
      end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-srl",group:"vh-part3",tag:"Part 3 \xB7 Lab 9",title:"DFF, sync active-low reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with a synchronous, active-low reset.
entity dff_sync_rst_n is
  port (
    clk, rst_n, d : in  std_logic;
    q             : out std_logic
  );
end entity;

architecture rtl of dff_sync_rst_n is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal rst_n : std_logic := '1';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_sync_rst_n port map (clk => clk, d => d, rst_n => rst_n, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      rst_n <= '0' when (t = 0 and true) or rnd(7) = 0 else '1';
      wait for 1 ns;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (q may only change on a clock edge)"); end if; end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if rst_n = '0' then m := '0'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with a synchronous, active-low reset.
entity dff_sync_rst_n is
  port (
    clk, rst_n, d : in  std_logic;
    q             : out std_logic
  );
end entity;

architecture rtl of dff_sync_rst_n is
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if rst_n = '0' then
        q <= '0';
      else
        q <= d;
      end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-dff-srs",group:"vh-part3",tag:"Part 3 \xB7 Lab 10",title:"DFF, sync reset and set",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with synchronous reset and set; reset wins.
entity dff_sync_rst_set is
  port (
    clk, rst, set, d : in  std_logic;
    q                : out std_logic
  );
end entity;

architecture rtl of dff_sync_rst_set is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal d : std_logic := '0';
  signal rst : std_logic := '0';
  signal set : std_logic := '0';
  signal q : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dff_sync_rst_set port map (clk => clk, d => d, rst => rst, set => set, q => q);

  process
    variable errors : natural := 0;
    variable m : std_logic := 'U';
    variable seed : natural := 7;
    variable r : natural;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(2) = 1 else '0';
      rst <= '1' when (t = 0 and true) or rnd(7) = 0 else '0';
      set <= '1' when (t = 0 and false) or rnd(7) = 0 else '0';
      wait for 1 ns;
      if m /= 'U' and q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": q=" & to_string(q) & ", expected " & to_string(m) & " (q may only change on a clock edge)"); end if; end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if rst = '1' then m := '0'; elsif set = '1' then m := '1'; else m := d; end if;
      if q /= m then errors := errors + 1; if errors <= 5 then say("  at " & time'image(now) & ": d=" & to_string(d) & " q=" & to_string(q) & ", expected " & to_string(m)); end if; end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: q correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values of q"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- D flip-flop with synchronous reset and set; reset wins.
entity dff_sync_rst_set is
  port (
    clk, rst, set, d : in  std_logic;
    q                : out std_logic
  );
end entity;

architecture rtl of dff_sync_rst_set is
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if rst = '1' then
        q <= '0';
      elsif set = '1' then
        q <= '1';
      else
        q <= d;
      end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-sync-async",group:"vh-part3",tag:"Part 3 \xB7 Lab 11",title:"Synchronous vs asynchronous reset",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- One reset, two flip-flops: q_sync resets on the clock, q_async at once.
entity reset_compare is
  port (
    clk, rst, d     : in  std_logic;
    q_sync, q_async : out std_logic
  );
end entity;

architecture rtl of reset_compare is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst, d, q_sync, q_async : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.reset_compare port map (clk => clk, rst => rst, d => d, q_sync => q_sync, q_async => q_async);

  process
    variable errors : natural := 0;
    variable ms, ma : std_logic := 'U';
    variable seed : natural := 5;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for t in 0 to 60 loop
      d <= '1' when rnd(3) /= 0 else '0';
      rst <= '1' when t = 0 or rnd(6) = 0 else '0';
      wait for 1 ns;
      if rst = '1' then ma := '0'; end if;
      if ma /= 'U' and q_async /= ma then errors := errors + 1; say("  at " & time'image(now) & ": q_async=" & to_string(q_async) & ", expected " & to_string(ma) & " (reset acts at once)"); end if;
      if ms /= 'U' and q_sync /= ms then errors := errors + 1; say("  at " & time'image(now) & ": q_sync=" & to_string(q_sync) & ", expected " & to_string(ms) & " (reset waits for the clock)"); end if;
      wait for 4 ns; clk <= '1'; wait for 1 ns;
      if rst = '1' then ms := '0'; ma := '0'; else ms := d; ma := d; end if;
      if q_sync /= ms or q_async /= ma then errors := errors + 1; say("  at " & time'image(now) & ": q_sync=" & to_string(q_sync) & " q_async=" & to_string(q_async)); end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: both registers correct on all 61 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- One reset, two flip-flops: q_sync resets on the clock, q_async at once.
entity reset_compare is
  port (
    clk, rst, d     : in  std_logic;
    q_sync, q_async : out std_logic
  );
end entity;

architecture rtl of reset_compare is
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if rst = '1' then q_sync <= '0'; else q_sync <= d; end if;
    end if;
  end process;

  process(clk, rst)
  begin
    if rst = '1' then
      q_async <= '0';
    elsif rising_edge(clk) then
      q_async <= d;
    end if;
  end process;
end architecture;
`}},{id:"vh-p3-twin",group:"vh-part3",tag:"Part 3 \xB7 Lab 12",title:"8-bit twin register set",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Two 8-bit registers that share a clock, an active-low reset and the data input d.
entity twin_reg8 is
  port (
    clk, rst_n     : in  std_logic;
    d              : in  std_logic_vector(7 downto 0);
    load_a, load_b : in  std_logic;
    qa, qb         : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of twin_reg8 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, load_a, load_b : std_logic := '0';
  signal d, qa, qb : std_logic_vector(7 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.twin_reg8 port map (clk => clk, rst_n => rst_n, d => d, load_a => load_a, load_b => load_b, qa => qa, qb => qb);

  process
    variable errors : natural := 0;
    variable ma, mb : std_logic_vector(7 downto 0) := (others => '0');
    variable seed : natural := 9;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    rst_n <= '0'; wait for 3 ns;
    if qa /= x"00" or qb /= x"00" then errors := errors + 1; say("  reset did not clear qa and qb at once"); end if;
    rst_n <= '1';
    for t in 0 to 80 loop
      d <= std_logic_vector(to_unsigned(rnd(256), 8));
      load_a <= '1' when rnd(3) = 0 else '0'; load_b <= '1' when rnd(3) = 0 else '0';
      wait for 5 ns; clk <= '1'; wait for 1 ns;
      if load_a = '1' then ma := d; end if;
      if load_b = '1' then mb := d; end if;
      if qa /= ma or qb /= mb then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": qa=" & to_hstring(qa) & " qb=" & to_hstring(qb) & ", expected " & to_hstring(ma) & " " & to_hstring(mb)); end if;
      end if;
      wait for 4 ns; clk <= '0';
    end loop;
    if errors = 0 then say("PASS: both registers correct on all 81 cycles");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Two 8-bit registers that share a clock, an active-low reset and the data input d.
entity twin_reg8 is
  port (
    clk, rst_n     : in  std_logic;
    d              : in  std_logic_vector(7 downto 0);
    load_a, load_b : in  std_logic;
    qa, qb         : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of twin_reg8 is
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      qa <= (others => '0');
      qb <= (others => '0');
    elsif rising_edge(clk) then
      if load_a = '1' then qa <= d; end if;
      if load_b = '1' then qb <= d; end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-p4-sr5",group:"vh-part4",tag:"Part 4 \xB7 Lab 1",title:"5-bit left-to-right shift register",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit shift register, left to right: on each rising edge every bit moves one place
-- to the right (toward bit 0) and sin enters at the left (bit 4).
entity shift_right5 is
  port (
    clk, rst_n, sin : in  std_logic;
    q               : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of shift_right5 is
  signal r : std_logic_vector(4 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal sin : std_logic := '0';
  signal q : std_logic_vector(4 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.shift_right5 port map (clk => clk, rst_n => rst_n, sin => sin, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : std_logic_vector(4 downto 0) := (others => '0');
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (q = m) then errors := errors + 1; say("  asynchronous reset: got " & to_string(q) & ", expected " & to_string(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      sin <= '1' when rnd(2) = 1 else '0';
      wait until rising_edge(clk);
      m := sin & m(4 downto 1);
      wait for 4 ns;
      if not (q = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & to_string(q) & ", expected " & to_string(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit shift register, left to right: on each rising edge every bit moves one place
-- to the right (toward bit 0) and sin enters at the left (bit 4).
entity shift_right5 is
  port (
    clk, rst_n, sin : in  std_logic;
    q               : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of shift_right5 is
  signal r : std_logic_vector(4 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      r <= (others => '0');
    elsif rising_edge(clk) then
      r <= sin & r(4 downto 1);
    end if;
  end process;
  q <= r;
end architecture;
`}},{id:"vh-p4-usr5",group:"vh-part4",tag:"Part 4 \xB7 Lab 2",title:"5-bit universal shift register",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit universal shift register.
--   mode "00": hold   "01": shift right (sr_in enters bit 4)
--   mode "10": shift left (sl_in enters bit 0)   "11": load d
entity universal_shift5 is
  port (
    clk, rst_n   : in  std_logic;
    mode         : in  std_logic_vector(1 downto 0);
    sr_in, sl_in : in  std_logic;
    d            : in  std_logic_vector(4 downto 0);
    q            : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of universal_shift5 is
  signal r : std_logic_vector(4 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal mode : std_logic_vector(1 downto 0) := "00";
  signal sr_in, sl_in : std_logic := '0';
  signal d, q : std_logic_vector(4 downto 0) := (others => '0');
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.universal_shift5 port map (clk => clk, rst_n => rst_n, mode => mode, sr_in => sr_in, sl_in => sl_in, d => d, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : std_logic_vector(4 downto 0) := (others => '0');
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (q = m) then errors := errors + 1; say("  asynchronous reset: got " & to_string(q) & ", expected " & to_string(m) & " (mode " & to_string(mode) & ")"); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      mode <= std_logic_vector(to_unsigned(rnd(4), 2)); sr_in <= '1' when rnd(2) = 1 else '0'; sl_in <= '1' when rnd(2) = 1 else '0';
      d <= std_logic_vector(to_unsigned(rnd(32), 5));
      wait until rising_edge(clk);
      case mode is
        when "01" => m := sr_in & m(4 downto 1);
        when "10" => m := m(3 downto 0) & sl_in;
        when "11" => m := d;
        when others => null;
      end case;
      wait for 4 ns;
      if not (q = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & to_string(q) & ", expected " & to_string(m) & " (mode " & to_string(mode) & ")"); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit universal shift register.
--   mode "00": hold   "01": shift right (sr_in enters bit 4)
--   mode "10": shift left (sl_in enters bit 0)   "11": load d
entity universal_shift5 is
  port (
    clk, rst_n   : in  std_logic;
    mode         : in  std_logic_vector(1 downto 0);
    sr_in, sl_in : in  std_logic;
    d            : in  std_logic_vector(4 downto 0);
    q            : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of universal_shift5 is
  signal r : std_logic_vector(4 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      r <= (others => '0');
    elsif rising_edge(clk) then
      case mode is
        when "01"   => r <= sr_in & r(4 downto 1);
        when "10"   => r <= r(3 downto 0) & sl_in;
        when "11"   => r <= d;
        when others => null;
      end case;
    end if;
  end process;
  q <= r;
end architecture;
`}},{id:"vh-p4-cnt",group:"vh-part4",tag:"Part 4 \xB7 Lab 3",title:"Basic counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit up counter with asynchronous active-low reset. It wraps from 15 to 0.
entity counter4 is
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of counter4 is
  signal cnt : unsigned(3 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal q : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.counter4 port map (clk => clk, rst_n => rst_n, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(q)) = m) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      wait until rising_edge(clk);
      m := (m + 1) mod 16;
      wait for 4 ns;
      if not (to_integer(unsigned(q)) = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit up counter with asynchronous active-low reset. It wraps from 15 to 0.
entity counter4 is
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of counter4 is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      cnt <= cnt + 1;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-p4-cnt-tb",group:"vh-part4",tag:"Part 4 \xB7 Lab 4",title:"Write a testbench for a counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- A 4-bit up counter with enable and asynchronous active-low reset (given, do not change).
-- Set BUG to 1 to break it on purpose: your testbench must then print FAIL.
entity counter_en is
  generic (BUG : natural := 0);
  port (
    clk, rst_n, en : in  std_logic;
    q              : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of counter_en is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if en = '1' then
        if BUG = 1 and cnt = 9 then cnt <= (others => '0'); else cnt <= cnt + 1; end if;
      end if;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

-- Write a testbench for counter_en (in the Design pane).
-- It should: reset the counter, count with en = '1', pause with en = '0',
-- run past 15 to check the wrap-around, and compare q with the value you expect.
-- Print PASS when every check passes and FAIL otherwise.
-- Then set BUG to 1 in the design and run again: a good testbench prints FAIL.
entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, en : std_logic := '0';
  signal q : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.counter_en port map (clk => clk, rst_n => rst_n, en => en, q => q);
  clk <= not clk after 5 ns;

  process
  begin
    rst_n <= '0'; wait for 12 ns;
    rst_n <= '1';
    -- TODO: drive en, and check q against the value you expect on every clock
    wait for 200 ns;
    finish;
  end process;
end architecture;
`,solution:{tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

-- Write a testbench for counter_en (in the Design pane).
-- It should: reset the counter, count with en = '1', pause with en = '0',
-- run past 15 to check the wrap-around, and compare q with the value you expect.
-- Print PASS when every check passes and FAIL otherwise.
-- Then set BUG to 1 in the design and run again: a good testbench prints FAIL.
entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, en : std_logic := '0';
  signal q : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.counter_en port map (clk => clk, rst_n => rst_n, en => en, q => q);
  clk <= not clk after 5 ns;

  process
    variable expected : natural := 0;
    variable errors : natural := 0;
  begin
    rst_n <= '0'; wait for 12 ns;
    if q /= "0000" then errors := errors + 1; say("  reset: q = " & to_string(q)); end if;
    rst_n <= '1';
    for i in 0 to 39 loop
      wait until falling_edge(clk);
      en <= '0' when i mod 7 = 6 else '1';          -- pause now and then
      wait until rising_edge(clk);
      if en = '1' then expected := (expected + 1) mod 16; end if;
      wait for 1 ns;
      if to_integer(unsigned(q)) /= expected then
        errors := errors + 1;
        say("  at " & time'image(now) & ": q = " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(expected));
      end if;
    end loop;
    if errors = 0 then say("PASS: 40 cycles checked, including pauses and the wrap from 15 to 0");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`}},{id:"vh-p4-cnt-load",group:"vh-part4",tag:"Part 4 \xB7 Lab 5",title:"Up counter with load",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit up counter with synchronous load: load = '1' loads d, otherwise q counts up.
entity counter_load is
  port (
    clk, rst_n, load : in  std_logic;
    d                : in  std_logic_vector(3 downto 0);
    q                : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of counter_load is
  signal cnt : unsigned(3 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal load : std_logic := '0';
  signal d : std_logic_vector(3 downto 0) := (others => '0');
  signal q : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.counter_load port map (clk => clk, rst_n => rst_n, load => load, d => d, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(q)) = m) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      load <= '1' when rnd(6) = 0 else '0'; d <= std_logic_vector(to_unsigned(rnd(16), 4));
      wait until rising_edge(clk);
      if load = '1' then m := to_integer(unsigned(d)); else m := (m + 1) mod 16; end if;
      wait for 4 ns;
      if not (to_integer(unsigned(q)) = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit up counter with synchronous load: load = '1' loads d, otherwise q counts up.
entity counter_load is
  port (
    clk, rst_n, load : in  std_logic;
    d                : in  std_logic_vector(3 downto 0);
    q                : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of counter_load is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if load = '1' then
        cnt <= unsigned(d);
      else
        cnt <= cnt + 1;
      end if;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-p4-updown",group:"vh-part4",tag:"Part 4 \xB7 Lab 6",title:"Up/down counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit up/down counter: up = '1' counts up, up = '0' counts down. It wraps both ways.
entity updown4 is
  port (
    clk, rst_n, up : in  std_logic;
    q              : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of updown4 is
  signal cnt : unsigned(3 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal up : std_logic := '1';
  signal q : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.updown4 port map (clk => clk, rst_n => rst_n, up => up, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(q)) = m) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      if cyc mod 13 = 0 then up <= '1' when rnd(2) = 1 else '0'; end if;
      wait until rising_edge(clk);
      if up = '1' then m := (m + 1) mod 16; else m := (m + 15) mod 16; end if;
      wait for 4 ns;
      if not (to_integer(unsigned(q)) = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 4-bit up/down counter: up = '1' counts up, up = '0' counts down. It wraps both ways.
entity updown4 is
  port (
    clk, rst_n, up : in  std_logic;
    q              : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of updown4 is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if up = '1' then
        cnt <= cnt + 1;
      else
        cnt <= cnt - 1;
      end if;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-p4-mod",group:"vh-part4",tag:"Part 4 \xB7 Lab 7",title:"Modulus counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Modulus-N counter: counts 0, 1, ... N-1, then back to 0. N = 10 makes a decade counter.
entity mod_counter is
  generic (N : positive := 10);
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of mod_counter is
  signal cnt : unsigned(3 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal q, q2 : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.mod_counter port map (clk => clk, rst_n => rst_n, q => q);
  dut2: entity work.mod_counter generic map (N => 6) port map (clk => clk, rst_n => rst_n, q => q2);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 0;
    variable m2 : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(q)) = m and to_integer(unsigned(q2)) = m2) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(q))) & " and " & integer'image(to_integer(unsigned(q2))) & ", expected " & integer'image(m) & " and " & integer'image(m2) & " (N = 10 and N = 6)"); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      wait until rising_edge(clk);
      m := (m + 1) mod 10; m2 := (m2 + 1) mod 6;
      wait for 4 ns;
      if not (to_integer(unsigned(q)) = m and to_integer(unsigned(q2)) = m2) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(q))) & " and " & integer'image(to_integer(unsigned(q2))) & ", expected " & integer'image(m) & " and " & integer'image(m2) & " (N = 10 and N = 6)"); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Modulus-N counter: counts 0, 1, ... N-1, then back to 0. N = 10 makes a decade counter.
entity mod_counter is
  generic (N : positive := 10);
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of mod_counter is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if cnt = N - 1 then
        cnt <= (others => '0');
      else
        cnt <= cnt + 1;
      end if;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-p4-range",group:"vh-part4",tag:"Part 4 \xB7 Lab 8",title:"Range up counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Range up counter: after reset q = LOW, then counts up to HIGH and starts again at LOW.
entity range_counter is
  generic (LOW : natural := 3; HIGH : natural := 12);
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of range_counter is
  signal cnt : unsigned(3 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal q, q2 : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.range_counter port map (clk => clk, rst_n => rst_n, q => q);
  dut2: entity work.range_counter generic map (LOW => 5, HIGH => 9) port map (clk => clk, rst_n => rst_n, q => q2);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 3;
    variable m2 : natural := 5;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(q)) = m and to_integer(unsigned(q2)) = m2) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(q))) & " and " & integer'image(to_integer(unsigned(q2))) & ", expected " & integer'image(m) & " and " & integer'image(m2)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      wait until rising_edge(clk);
      if m = 12 then m := 3; else m := m + 1; end if;
      if m2 = 9 then m2 := 5; else m2 := m2 + 1; end if;
      wait for 4 ns;
      if not (to_integer(unsigned(q)) = m and to_integer(unsigned(q2)) = m2) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(q))) & " and " & integer'image(to_integer(unsigned(q2))) & ", expected " & integer'image(m) & " and " & integer'image(m2)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Range up counter: after reset q = LOW, then counts up to HIGH and starts again at LOW.
entity range_counter is
  generic (LOW : natural := 3; HIGH : natural := 12);
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of range_counter is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= to_unsigned(LOW, 4);
    elsif rising_edge(clk) then
      if cnt = HIGH then
        cnt <= to_unsigned(LOW, 4);
      else
        cnt <= cnt + 1;
      end if;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-p4-range-udl",group:"vh-part4",tag:"Part 4 \xB7 Lab 9",title:"Range up/down counter with load",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Range up/down counter with load. q stays between LOW and HIGH:
--   load = '1': q <= d (d is always in range)
--   up = '1':   counts up, from HIGH it goes back to LOW
--   up = '0':   counts down, from LOW it goes to HIGH
entity range_updown_load is
  generic (LOW : natural := 3; HIGH : natural := 12);
  port (
    clk, rst_n, load, up : in  std_logic;
    d                    : in  std_logic_vector(3 downto 0);
    q                    : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of range_updown_load is
  signal cnt : unsigned(3 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal load : std_logic := '0';
  signal up : std_logic := '1';
  signal d : std_logic_vector(3 downto 0) := x"3";
  signal q : std_logic_vector(3 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.range_updown_load port map (clk => clk, rst_n => rst_n, load => load, up => up, d => d, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 3;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(q)) = m) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      load <= '1' when rnd(9) = 0 else '0'; d <= std_logic_vector(to_unsigned(3 + rnd(10), 4));
      if cyc mod 11 = 0 then up <= '1' when rnd(2) = 1 else '0'; end if;
      wait until rising_edge(clk);
      if load = '1' then m := to_integer(unsigned(d));
      elsif up = '1' then if m = 12 then m := 3; else m := m + 1; end if;
      else if m = 3 then m := 12; else m := m - 1; end if; end if;
      wait for 4 ns;
      if not (to_integer(unsigned(q)) = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(q))) & ", expected " & integer'image(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the design matches the model");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Range up/down counter with load. q stays between LOW and HIGH:
--   load = '1': q <= d (d is always in range)
--   up = '1':   counts up, from HIGH it goes back to LOW
--   up = '0':   counts down, from LOW it goes to HIGH
entity range_updown_load is
  generic (LOW : natural := 3; HIGH : natural := 12);
  port (
    clk, rst_n, load, up : in  std_logic;
    d                    : in  std_logic_vector(3 downto 0);
    q                    : out std_logic_vector(3 downto 0)
  );
end entity;

architecture rtl of range_updown_load is
  signal cnt : unsigned(3 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= to_unsigned(LOW, 4);
    elsif rising_edge(clk) then
      if load = '1' then
        cnt <= unsigned(d);
      elsif up = '1' then
        if cnt = HIGH then cnt <= to_unsigned(LOW, 4); else cnt <= cnt + 1; end if;
      else
        if cnt = LOW then cnt <= to_unsigned(HIGH, 4); else cnt <= cnt - 1; end if;
      end if;
    end if;
  end process;
  q <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-p4-div2",group:"vh-part4",tag:"Part 4 \xB7 Lab 10",title:"Clock divider by 2",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Clock divider by 2: clk_out toggles on every rising edge of clk.
entity clk_div2 is
  port (
    clk, rst_n : in  std_logic;
    clk_out    : out std_logic
  );
end entity;

architecture rtl of clk_div2 is
  signal t : std_logic;
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, clk_out : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.clk_div2 port map (clk => clk, rst_n => rst_n, clk_out => clk_out);
  clk <= not clk after 5 ns;                       -- 10 ns input clock

  process
    variable t_rise : time := 0 ns;
    variable rises, errors : natural := 0;
  begin
    wait for 12 ns; rst_n <= '1';
    while now < 600 ns loop
      wait on clk_out for 600 ns - now;
      if rising_edge(clk_out) then
        if rises > 0 and now - t_rise /= 20 ns then
          errors := errors + 1;
          if errors <= 5 then say("  clk_out period " & time'image(now - t_rise) & ", expected 20 ns"); end if;
        end if;
        t_rise := now; rises := rises + 1;
      elsif falling_edge(clk_out) and rises > 0 and now - t_rise /= 10 ns then
        errors := errors + 1;
        if errors <= 5 then say("  clk_out high for " & time'image(now - t_rise) & ", expected 10 ns (50% duty cycle)"); end if;
      end if;
    end loop;
    if errors = 0 and rises >= 28 then say("PASS: clk_out is clk divided by 2 with a 50% duty cycle (" & integer'image(rises) & " rising edges)");
    else say("FAIL: " & integer'image(errors) & " errors, " & integer'image(rises) & " rising edges of clk_out"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Clock divider by 2: clk_out toggles on every rising edge of clk.
entity clk_div2 is
  port (
    clk, rst_n : in  std_logic;
    clk_out    : out std_logic
  );
end entity;

architecture rtl of clk_div2 is
  signal t : std_logic;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      t <= '0';
    elsif rising_edge(clk) then
      t <= not t;
    end if;
  end process;
  clk_out <= t;
end architecture;
`}},{id:"vh-p4-div4",group:"vh-part4",tag:"Part 4 \xB7 Lab 11",title:"Clock divider by 4",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Clock divider by 4: a 2-bit counter; its top bit is clk divided by 4.
entity clk_div4 is
  port (
    clk, rst_n : in  std_logic;
    clk_out    : out std_logic
  );
end entity;

architecture rtl of clk_div4 is
  signal cnt : unsigned(1 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, clk_out : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.clk_div4 port map (clk => clk, rst_n => rst_n, clk_out => clk_out);
  clk <= not clk after 5 ns;                       -- 10 ns input clock

  process
    variable t_rise : time := 0 ns;
    variable rises, errors : natural := 0;
  begin
    wait for 12 ns; rst_n <= '1';
    while now < 600 ns loop
      wait on clk_out for 600 ns - now;
      if rising_edge(clk_out) then
        if rises > 0 and now - t_rise /= 40 ns then
          errors := errors + 1;
          if errors <= 5 then say("  clk_out period " & time'image(now - t_rise) & ", expected 40 ns"); end if;
        end if;
        t_rise := now; rises := rises + 1;
      elsif falling_edge(clk_out) and rises > 0 and now - t_rise /= 20 ns then
        errors := errors + 1;
        if errors <= 5 then say("  clk_out high for " & time'image(now - t_rise) & ", expected 20 ns (50% duty cycle)"); end if;
      end if;
    end loop;
    if errors = 0 and rises >= 13 then say("PASS: clk_out is clk divided by 4 with a 50% duty cycle (" & integer'image(rises) & " rising edges)");
    else say("FAIL: " & integer'image(errors) & " errors, " & integer'image(rises) & " rising edges of clk_out"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Clock divider by 4: a 2-bit counter; its top bit is clk divided by 4.
entity clk_div4 is
  port (
    clk, rst_n : in  std_logic;
    clk_out    : out std_logic
  );
end entity;

architecture rtl of clk_div4 is
  signal cnt : unsigned(1 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      cnt <= cnt + 1;
    end if;
  end process;
  clk_out <= cnt(1);
end architecture;
`}},{id:"vh-p4-div3",group:"vh-part4",tag:"Part 4 \xB7 Lab 12",title:"Clock divider by 3",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Clock divider by 3 with a 50% duty cycle: clk_out has a period of 3 clk periods and is
-- high for exactly 1.5 of them. A counter alone cannot do it: think about both clock edges.
entity clk_div3 is
  port (
    clk, rst_n : in  std_logic;
    clk_out    : out std_logic
  );
end entity;

architecture rtl of clk_div3 is
  signal cnt : unsigned(1 downto 0);
  signal p, n : std_logic;
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, clk_out : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.clk_div3 port map (clk => clk, rst_n => rst_n, clk_out => clk_out);
  clk <= not clk after 5 ns;                       -- 10 ns input clock

  process
    variable t_rise : time := 0 ns;
    variable rises, errors : natural := 0;
  begin
    wait for 12 ns; rst_n <= '1';
    while now < 600 ns loop
      wait on clk_out for 600 ns - now;
      if rising_edge(clk_out) then
        if rises > 0 and now - t_rise /= 30 ns then
          errors := errors + 1;
          if errors <= 5 then say("  clk_out period " & time'image(now - t_rise) & ", expected 30 ns"); end if;
        end if;
        t_rise := now; rises := rises + 1;
      elsif falling_edge(clk_out) and rises > 0 and now - t_rise /= 15 ns then
        errors := errors + 1;
        if errors <= 5 then say("  clk_out high for " & time'image(now - t_rise) & ", expected 15 ns (50% duty cycle)"); end if;
      end if;
    end loop;
    if errors = 0 and rises >= 18 then say("PASS: clk_out is clk divided by 3 with a 50% duty cycle (" & integer'image(rises) & " rising edges)");
    else say("FAIL: " & integer'image(errors) & " errors, " & integer'image(rises) & " rising edges of clk_out"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Clock divider by 3 with a 50% duty cycle: clk_out has a period of 3 clk periods and is
-- high for exactly 1.5 of them. A counter alone cannot do it: think about both clock edges.
entity clk_div3 is
  port (
    clk, rst_n : in  std_logic;
    clk_out    : out std_logic
  );
end entity;

architecture rtl of clk_div3 is
  signal cnt : unsigned(1 downto 0);
  signal p, n : std_logic;
begin
  process(clk, rst_n)                 -- mod-3 counter, and p high for one period in three
  begin
    if rst_n = '0' then
      cnt <= (others => '0'); p <= '0';
    elsif rising_edge(clk) then
      if cnt = 2 then cnt <= (others => '0'); else cnt <= cnt + 1; end if;
      p <= '1' when cnt = 2 else '0';
    end if;
  end process;

  process(clk, rst_n)                 -- the same pulse, half a period later
  begin
    if rst_n = '0' then
      n <= '0';
    elsif falling_edge(clk) then
      n <= p;
    end if;
  end process;

  clk_out <= p or n;
end architecture;
`}},{id:"vh-p4-fifo",group:"vh-part4",tag:"Part 4 \xB7 Lab 13",title:"Single-clock FIFO",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Synchronous FIFO: 8 words of 8 bits, one clock.
--   A write (wr_en) is ignored when full; a read (rd_en) is ignored when empty.
--   dout shows the word read on the clock edge after rd_en.
entity sync_fifo is
  port (
    clk, rst_n   : in  std_logic;
    wr_en, rd_en : in  std_logic;
    din          : in  std_logic_vector(7 downto 0);
    dout         : out std_logic_vector(7 downto 0);
    full, empty  : out std_logic
  );
end entity;

architecture rtl of sync_fifo is
  type mem_t is array (0 to 7) of std_logic_vector(7 downto 0);
  signal mem : mem_t;
  -- TODO: declare the pointers and the word count
begin
  -- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, wr_en, rd_en : std_logic := '0';
  signal din, dout : std_logic_vector(7 downto 0) := (others => '0');
  signal full, empty : std_logic;
  type words is array (0 to 1023) of natural;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.sync_fifo port map (clk => clk, rst_n => rst_n, wr_en => wr_en, rd_en => rd_en, din => din, dout => dout, full => full, empty => empty);
  clk <= not clk after 5 ns;

  process
    variable q : words;
    variable head, tail, errors, checks : natural := 0;
    variable mdout : natural := 0;
    variable count : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 12 ns;
    if empty /= '1' or full /= '0' then errors := errors + 1; say("  after reset: empty = " & to_string(empty) & ", full = " & to_string(full)); end if;
    rst_n <= '1';
    for cyc in 0 to 299 loop
      wait until falling_edge(clk);
      -- phases: fill it up, drain it, then mix reads and writes
      if cyc < 100 then wr_en <= '1' when rnd(4) /= 0 else '0'; rd_en <= '1' when rnd(5) = 0 else '0';
      elsif cyc < 180 then wr_en <= '1' when rnd(5) = 0 else '0'; rd_en <= '1' when rnd(4) /= 0 else '0';
      else wr_en <= '1' when rnd(2) = 0 else '0'; rd_en <= '1' when rnd(2) = 0 else '0'; end if;
      din <= std_logic_vector(to_unsigned(rnd(256), 8));
      wait until rising_edge(clk);
      count := tail - head;                        -- words stored before this edge
      if rd_en = '1' and count > 0 then mdout := q(head); head := head + 1; end if;
      if wr_en = '1' and count < 8 then q(tail) := to_integer(unsigned(din)); tail := tail + 1; end if;
      count := tail - head;
      wait for 4 ns;
      checks := checks + 1;
      if to_integer(unsigned(dout)) /= mdout or (full = '1') /= (count = 8) or (empty = '1') /= (count = 0) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": dout = " & to_hstring(dout) & " full = " & to_string(full) & " empty = " & to_string(empty) &
                                ", expected dout = " & to_hstring(to_unsigned(mdout, 8)) & " with " & integer'image(count) & " words stored"); end if;
      end if;
    end loop;
    if errors = 0 then say("PASS: 300 cycles checked: data in order, full and empty correct");
    else say("FAIL: " & integer'image(errors) & " of " & integer'image(checks) & " checks wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Synchronous FIFO: 8 words of 8 bits, one clock.
--   A write (wr_en) is ignored when full; a read (rd_en) is ignored when empty.
--   dout shows the word read on the clock edge after rd_en.
entity sync_fifo is
  port (
    clk, rst_n   : in  std_logic;
    wr_en, rd_en : in  std_logic;
    din          : in  std_logic_vector(7 downto 0);
    dout         : out std_logic_vector(7 downto 0);
    full, empty  : out std_logic
  );
end entity;

architecture rtl of sync_fifo is
  type mem_t is array (0 to 7) of std_logic_vector(7 downto 0);
  signal mem        : mem_t;
  signal wptr, rptr : unsigned(2 downto 0);
  signal count      : unsigned(3 downto 0);
  signal do_wr, do_rd : std_logic;
begin
  full  <= '1' when count = 8 else '0';
  empty <= '1' when count = 0 else '0';
  do_wr <= wr_en and not full;
  do_rd <= rd_en and not empty;

  process(clk, rst_n)
  begin
    if rst_n = '0' then
      wptr <= (others => '0'); rptr <= (others => '0'); count <= (others => '0');
      dout <= (others => '0');
    elsif rising_edge(clk) then
      if do_wr = '1' then
        mem(to_integer(wptr)) <= din;
        wptr <= wptr + 1;
      end if;
      if do_rd = '1' then
        dout <= mem(to_integer(rptr));
        rptr <= rptr + 1;
      end if;
      if do_wr = '1' and do_rd = '0' then count <= count + 1;
      elsif do_wr = '0' and do_rd = '1' then count <= count - 1;
      end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-p4-afifo",group:"vh-part4",tag:"Part 4 \xB7 Lab 14",title:"Dual-clock FIFO",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Dual-clock (asynchronous) FIFO: 8 words of 8 bits. Written in wclk, read in rclk.
-- The pointers cross between the clocks as Gray codes through 2-flop synchronizers.
-- rdata always shows the oldest word; rinc takes it (ignored when rempty).
entity async_fifo is
  port (
    wclk, wrst_n, winc : in  std_logic;
    wdata              : in  std_logic_vector(7 downto 0);
    wfull              : out std_logic;
    rclk, rrst_n, rinc : in  std_logic;
    rdata              : out std_logic_vector(7 downto 0);
    rempty             : out std_logic
  );
end entity;

architecture rtl of async_fifo is
  type mem_t is array (0 to 7) of std_logic_vector(7 downto 0);
  signal mem : mem_t;
  -- TODO: declare the binary and Gray pointers (4 bits each) and the 2-flop synchronizers
begin
  -- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal wclk, rclk, wrst_n, rrst_n, winc, rinc : std_logic := '0';
  signal wdata, rdata : std_logic_vector(7 downto 0) := (others => '0');
  signal wfull, rempty : std_logic;
  function word(k : natural) return std_logic_vector is
  begin
    return std_logic_vector(to_unsigned((k * 37 + 11) mod 256, 8));   -- word number k
  end function;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.async_fifo port map (wclk => wclk, wrst_n => wrst_n, winc => winc, wdata => wdata, wfull => wfull,
                                       rclk => rclk, rrst_n => rrst_n, rinc => rinc, rdata => rdata, rempty => rempty);
  wclk <= not wclk after 3.5 ns;                  -- 7 ns write clock
  rclk <= not rclk after 5.5 ns;                  -- 11 ns read clock
  wrst_n <= '1' after 20 ns;
  rrst_n <= '1' after 20 ns;

  writer: process
    variable nw : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    while nw < 200 loop
      wait until falling_edge(wclk);
      winc <= '1' when rnd(4) /= 0 and wrst_n = '1' else '0';
      wdata <= word(nw);
      wait until rising_edge(wclk);
      if winc = '1' and wfull = '0' then nw := nw + 1; end if;
    end loop;
    winc <= '0';
    wait;
  end process;

  reader: process
    variable nr, errors : natural := 0;
    variable seed : natural := 99;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    while nr < 200 loop
      wait until falling_edge(rclk);
      -- reads are slow at first (the FIFO fills up), then fast (it runs empty)
      if (rnd(3) /= 0) xor (now > 600 ns and now < 1200 ns) then rinc <= rrst_n; else rinc <= '0'; end if;
      wait until rising_edge(rclk);
      if rinc = '1' and rempty = '0' then
        if rdata /= word(nr) then
          errors := errors + 1;
          if errors <= 5 then say("  read " & integer'image(nr) & ": got " & to_hstring(rdata) & ", expected " & to_hstring(word(nr))); end if;
        end if;
        nr := nr + 1;
      end if;
    end loop;
    wait for 50 ns;
    if errors = 0 then say("PASS: all 200 words came out once, in order, with no overflow or underflow");
    else say("FAIL: " & integer'image(errors) & " words wrong (lost, repeated or out of order)"); end if;
    finish;
  end process;

  watchdog: process
  begin
    wait for 100 us;
    say("FAIL: timeout: the 200 words did not all come through (is rempty ever '0'?)");
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Dual-clock (asynchronous) FIFO: 8 words of 8 bits. Written in wclk, read in rclk.
-- The pointers cross between the clocks as Gray codes through 2-flop synchronizers.
-- rdata always shows the oldest word; rinc takes it (ignored when rempty).
entity async_fifo is
  port (
    wclk, wrst_n, winc : in  std_logic;
    wdata              : in  std_logic_vector(7 downto 0);
    wfull              : out std_logic;
    rclk, rrst_n, rinc : in  std_logic;
    rdata              : out std_logic_vector(7 downto 0);
    rempty             : out std_logic
  );
end entity;

architecture rtl of async_fifo is
  type mem_t is array (0 to 7) of std_logic_vector(7 downto 0);
  signal mem : mem_t;
  -- binary and Gray pointers, one extra bit to tell full from empty
  signal wbin, wptr, rbin, rptr : unsigned(3 downto 0);
  signal wq1_rptr, wq2_rptr, rq1_wptr, rq2_wptr : unsigned(3 downto 0);
  signal wbin_n, wgray_n, rbin_n, rgray_n : unsigned(3 downto 0);
  signal wfull_i, rempty_i : std_logic;
begin
  wbin_n  <= wbin + 1 when winc = '1' and wfull_i = '0' else wbin;
  wgray_n <= shift_right(wbin_n, 1) xor wbin_n;
  rbin_n  <= rbin + 1 when rinc = '1' and rempty_i = '0' else rbin;
  rgray_n <= shift_right(rbin_n, 1) xor rbin_n;

  process(wclk)
  begin
    if rising_edge(wclk) then
      if winc = '1' and wfull_i = '0' then mem(to_integer(wbin(2 downto 0))) <= wdata; end if;
    end if;
  end process;
  rdata <= mem(to_integer(rbin(2 downto 0)));

  process(wclk, wrst_n)
  begin
    if wrst_n = '0' then
      wbin <= (others => '0'); wptr <= (others => '0'); wfull_i <= '0';
      wq1_rptr <= (others => '0'); wq2_rptr <= (others => '0');
    elsif rising_edge(wclk) then
      wbin <= wbin_n; wptr <= wgray_n;
      wq1_rptr <= rptr; wq2_rptr <= wq1_rptr;               -- rptr into the write clock
      -- full: the next write pointer equals the read pointer with its top two bits inverted
      wfull_i <= '1' when wgray_n = (not wq2_rptr(3 downto 2)) & wq2_rptr(1 downto 0) else '0';
    end if;
  end process;

  process(rclk, rrst_n)
  begin
    if rrst_n = '0' then
      rbin <= (others => '0'); rptr <= (others => '0'); rempty_i <= '1';
      rq1_wptr <= (others => '0'); rq2_wptr <= (others => '0');
    elsif rising_edge(rclk) then
      rbin <= rbin_n; rptr <= rgray_n;
      rq1_wptr <= wptr; rq2_wptr <= rq1_wptr;               -- wptr into the read clock
      rempty_i <= '1' when rgray_n = rq2_wptr else '0';
    end if;
  end process;

  wfull  <= wfull_i;
  rempty <= rempty_i;
end architecture;
`}},{id:"vh-p4-mealy-nov",group:"vh-part4",tag:"Part 4 \xB7 Lab 15",title:"Mealy 101 detector, non-overlapping",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Mealy 101 sequence detector, non-overlapping.
-- y = '1' while x is the last 1 of the pattern 1-0-1 (Mealy: y depends on the state AND x).
-- After a detection the search starts again from scratch: in 10101 only the first 101 counts.
entity seq101_mealy_nov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_mealy_nov is
-- TODO: declare the state type and the state signals
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, x, y : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.seq101_mealy_nov port map (clk => clk, rst_n => rst_n, x => x, y => y);
  clk <= not clk after 5 ns;

  process
    variable s : natural := 0;            -- reference state: 0 nothing, 1 seen 1, 2 seen 10
    variable errors, found : natural := 0;
    variable bits : std_logic_vector(0 to 39) := "1010100101101011010001010110101101010010";
    variable seed : natural := 21;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      if cyc < 40 then x <= bits(cyc); else x <= '1' when rnd(5) < 3 else '0'; end if;
      wait for 4 ns;                      -- check y just before the rising edge
      if (y = '1') /= (s = 2 and x = '1') then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": x = " & to_string(x) & ", y = " & to_string(y) & ", expected " & to_string(to_unsigned(boolean'pos(s = 2 and x = '1'), 1))); end if;
      end if;
      if s = 2 and x = '1' then found := found + 1; end if;
      wait until rising_edge(clk);
      case s is
        when 0 => if x = '1' then s := 1; end if;
        when 1 => if x = '0' then s := 2; end if;
        when others => s := 0;
      end case;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, " & integer'image(found) & " detections, all on the right clock");
    else say("FAIL: " & integer'image(errors) & " wrong values of y"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Mealy 101 sequence detector, non-overlapping.
-- y = '1' while x is the last 1 of the pattern 1-0-1 (Mealy: y depends on the state AND x).
-- After a detection the search starts again from scratch: in 10101 only the first 101 counts.
entity seq101_mealy_nov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_mealy_nov is
  type state_t is (S0, S1, S10);
  signal state, next_state : state_t;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= S0;
    elsif rising_edge(clk) then
      state <= next_state;
    end if;
  end process;

  process(all)
  begin
    case state is
      when S0   => next_state <= S1 when x = '1' else S0;
      when S1   => next_state <= S1 when x = '1' else S10;
      when S10  => next_state <= S0 when x = '1' else S0;
      -- 101 found: start again
    end case;
  end process;

  y <= '1' when state = S10 and x = '1' else '0';
end architecture;
`}},{id:"vh-p4-mealy-ov",group:"vh-part4",tag:"Part 4 \xB7 Lab 16",title:"Mealy 101 detector, overlapping",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Mealy 101 sequence detector, overlapping.
-- y = '1' while x is the last 1 of 1-0-1, and that 1 can start the next pattern: 10101 gives two detections.
entity seq101_mealy_ov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_mealy_ov is
-- TODO: declare the state type and the state signals
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, x, y : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.seq101_mealy_ov port map (clk => clk, rst_n => rst_n, x => x, y => y);
  clk <= not clk after 5 ns;

  process
    variable s : natural := 0;            -- reference state: 0 nothing, 1 seen 1, 2 seen 10
    variable errors, found : natural := 0;
    variable bits : std_logic_vector(0 to 39) := "1010100101101011010001010110101101010010";
    variable seed : natural := 21;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      if cyc < 40 then x <= bits(cyc); else x <= '1' when rnd(5) < 3 else '0'; end if;
      wait for 4 ns;                      -- check y just before the rising edge
      if (y = '1') /= (s = 2 and x = '1') then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": x = " & to_string(x) & ", y = " & to_string(y) & ", expected " & to_string(to_unsigned(boolean'pos(s = 2 and x = '1'), 1))); end if;
      end if;
      if s = 2 and x = '1' then found := found + 1; end if;
      wait until rising_edge(clk);
      case s is
        when 0 => if x = '1' then s := 1; end if;
        when 1 => if x = '0' then s := 2; end if;
        when others => if x = '1' then s := 1; else s := 0; end if;
      end case;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, " & integer'image(found) & " detections, all on the right clock");
    else say("FAIL: " & integer'image(errors) & " wrong values of y"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Mealy 101 sequence detector, overlapping.
-- y = '1' while x is the last 1 of 1-0-1, and that 1 can start the next pattern: 10101 gives two detections.
entity seq101_mealy_ov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_mealy_ov is
  type state_t is (S0, S1, S10);
  signal state, next_state : state_t;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= S0;
    elsif rising_edge(clk) then
      state <= next_state;
    end if;
  end process;

  process(all)
  begin
    case state is
      when S0   => next_state <= S1 when x = '1' else S0;
      when S1   => next_state <= S1 when x = '1' else S10;
      when S10  => next_state <= S1 when x = '1' else S0;
      -- the last 1 starts the next 101
    end case;
  end process;

  y <= '1' when state = S10 and x = '1' else '0';
end architecture;
`}},{id:"vh-p4-moore-nov",group:"vh-part4",tag:"Part 4 \xB7 Lab 17",title:"Moore 101 detector, non-overlapping",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Moore 101 sequence detector, non-overlapping.
-- y depends on the state only: it is '1' for one clock after the last 1 of 1-0-1 was clocked in.
entity seq101_moore_nov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_moore_nov is
-- TODO: declare the state type and the state signals
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, x, y : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.seq101_moore_nov port map (clk => clk, rst_n => rst_n, x => x, y => y);
  clk <= not clk after 5 ns;

  process
    variable s : natural := 0;            -- reference state: 0 nothing, 1 seen 1, 2 seen 10, 3 seen 101
    variable errors, found : natural := 0;
    variable bits : std_logic_vector(0 to 39) := "1010100101101011010001010110101101010010";
    variable seed : natural := 21;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      if cyc < 40 then x <= bits(cyc); else x <= '1' when rnd(5) < 3 else '0'; end if;
      wait for 4 ns;                      -- check y just before the rising edge
      if (y = '1') /= (s = 3) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": x = " & to_string(x) & ", y = " & to_string(y) & ", expected " & to_string(to_unsigned(boolean'pos(s = 3), 1))); end if;
      end if;
      if s = 3 then found := found + 1; end if;
      wait until rising_edge(clk);
      case s is
        when 0 => if x = '1' then s := 1; end if;
        when 1 => if x = '0' then s := 2; end if;
        when 2 => if x = '1' then s := 3; else s := 0; end if;
        when others => if x = '1' then s := 1; else s := 0; end if;
      end case;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, " & integer'image(found) & " detections, all on the right clock");
    else say("FAIL: " & integer'image(errors) & " wrong values of y"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Moore 101 sequence detector, non-overlapping.
-- y depends on the state only: it is '1' for one clock after the last 1 of 1-0-1 was clocked in.
entity seq101_moore_nov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_moore_nov is
  type state_t is (S0, S1, S10, S101);
  signal state, next_state : state_t;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= S0;
    elsif rising_edge(clk) then
      state <= next_state;
    end if;
  end process;

  process(all)
  begin
    case state is
      when S0   => next_state <= S1 when x = '1' else S0;
      when S1   => next_state <= S1 when x = '1' else S10;
      when S10  => next_state <= S101 when x = '1' else S0;
      when S101 => next_state <= S1 when x = '1' else S0;
      -- start again: the last 1 does not count
    end case;
  end process;

  y <= '1' when state = S101 else '0';
end architecture;
`}},{id:"vh-p4-moore-ov",group:"vh-part4",tag:"Part 4 \xB7 Lab 18",title:"Moore 101 detector, overlapping",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Moore 101 sequence detector, overlapping.
-- y is '1' for one clock after 1-0-1 was clocked in; the last 1 also starts the next pattern.
entity seq101_moore_ov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_moore_ov is
-- TODO: declare the state type and the state signals
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, x, y : std_logic := '0';
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.seq101_moore_ov port map (clk => clk, rst_n => rst_n, x => x, y => y);
  clk <= not clk after 5 ns;

  process
    variable s : natural := 0;            -- reference state: 0 nothing, 1 seen 1, 2 seen 10, 3 seen 101
    variable errors, found : natural := 0;
    variable bits : std_logic_vector(0 to 39) := "1010100101101011010001010110101101010010";
    variable seed : natural := 21;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      if cyc < 40 then x <= bits(cyc); else x <= '1' when rnd(5) < 3 else '0'; end if;
      wait for 4 ns;                      -- check y just before the rising edge
      if (y = '1') /= (s = 3) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": x = " & to_string(x) & ", y = " & to_string(y) & ", expected " & to_string(to_unsigned(boolean'pos(s = 3), 1))); end if;
      end if;
      if s = 3 then found := found + 1; end if;
      wait until rising_edge(clk);
      case s is
        when 0 => if x = '1' then s := 1; end if;
        when 1 => if x = '0' then s := 2; end if;
        when 2 => if x = '1' then s := 3; else s := 0; end if;
        when others => if x = '1' then s := 1; else s := 2; end if;
      end case;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, " & integer'image(found) & " detections, all on the right clock");
    else say("FAIL: " & integer'image(errors) & " wrong values of y"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Moore 101 sequence detector, overlapping.
-- y is '1' for one clock after 1-0-1 was clocked in; the last 1 also starts the next pattern.
entity seq101_moore_ov is
  port (
    clk, rst_n, x : in  std_logic;
    y             : out std_logic
  );
end entity;

architecture rtl of seq101_moore_ov is
  type state_t is (S0, S1, S10, S101);
  signal state, next_state : state_t;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= S0;
    elsif rising_edge(clk) then
      state <= next_state;
    end if;
  end process;

  process(all)
  begin
    case state is
      when S0   => next_state <= S1 when x = '1' else S0;
      when S1   => next_state <= S1 when x = '1' else S10;
      when S10  => next_state <= S101 when x = '1' else S0;
      when S101 => next_state <= S1 when x = '1' else S10;
      -- the last 1 counts as the first 1 of the next 101
    end case;
  end process;

  y <= '1' when state = S101 else '0';
end architecture;
`}},{id:"vh-d01-reg",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 1",title:"Register",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit register with enable and asynchronous active-low reset.
entity reg8 is
  port (
    clk, rst_n, enable : in  std_logic;
    data               : in  std_logic_vector(7 downto 0);
    q                  : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of reg8 is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal enable : std_logic := '0';
  signal data, q : std_logic_vector(7 downto 0) := (others => '0');
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.reg8 port map (clk => clk, rst_n => rst_n, enable => enable, data => data, q => q);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : std_logic_vector(7 downto 0) := (others => '0');
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (q = m) then errors := errors + 1; say("  asynchronous reset: got " & to_hstring(q) & ", expected " & to_hstring(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      enable <= '1' when rnd(3) = 0 else '0'; data <= std_logic_vector(to_unsigned(rnd(256), 8));
      wait until rising_edge(clk);
      if enable = '1' then m := data; end if;
      wait for 4 ns;
      if not (q = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & to_hstring(q) & ", expected " & to_hstring(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, the register stores data only when enable = '1'");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit register with enable and asynchronous active-low reset.
entity reg8 is
  port (
    clk, rst_n, enable : in  std_logic;
    data               : in  std_logic_vector(7 downto 0);
    q                  : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of reg8 is
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      q <= (others => '0');
    elsif rising_edge(clk) then
      if enable = '1' then
        q <= data;
      end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-d02-mux",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 2",title:"Generic multiplexer",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Generic 2:1 multiplexer (default width 1): y = in_a when sel_a = '1', in_b when sel_a = '0'.
-- An unknown select drives all X.
entity scale_mux is
  generic (WIDTH : positive := 1);
  port (
    in_a, in_b : in  std_logic_vector(WIDTH - 1 downto 0);
    sel_a      : in  std_logic;
    y          : out std_logic_vector(WIDTH - 1 downto 0)
  );
end entity;

architecture rtl of scale_mux is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a8, b8, y8 : std_logic_vector(7 downto 0);
  signal a1, b1, y1 : std_logic_vector(0 downto 0);
  signal sel : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  mux8: entity work.scale_mux generic map (WIDTH => 8) port map (in_a => a8, in_b => b8, sel_a => sel, y => y8);
  mux1: entity work.scale_mux port map (in_a => a1, in_b => b1, sel_a => sel, y => y1);

  process
    variable errors : natural := 0;
    variable e8 : std_logic_vector(7 downto 0);
    variable e1 : std_logic_vector(0 downto 0);
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for i in 0 to 99 loop
      a8 <= std_logic_vector(to_unsigned(rnd(256), 8)); b8 <= std_logic_vector(to_unsigned(rnd(256), 8));
      a1 <= "1" when rnd(2) = 1 else "0"; b1 <= "1" when rnd(2) = 1 else "0";
      sel <= '1' when i mod 3 = 0 else '0' when i mod 3 = 1 else 'X';
      wait for 5 ns;
      if sel = '1' then e8 := a8; e1 := a1; elsif sel = '0' then e8 := b8; e1 := b1; else e8 := (others => 'X'); e1 := "X"; end if;
      if y8 /= e8 or y1 /= e1 then
        errors := errors + 1;
        if errors <= 5 then say("  sel_a = " & to_string(sel) & ": y = " & to_string(y8) & " and " & to_string(y1) & ", expected " & to_string(e8) & " and " & to_string(e1)); end if;
      end if;
    end loop;
    if errors = 0 then say("PASS: 100 checks on the 8-bit and the 1-bit multiplexer, including sel_a = 'X'");
    else say("FAIL: " & integer'image(errors) & " wrong outputs"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Generic 2:1 multiplexer (default width 1): y = in_a when sel_a = '1', in_b when sel_a = '0'.
-- An unknown select drives all X.
entity scale_mux is
  generic (WIDTH : positive := 1);
  port (
    in_a, in_b : in  std_logic_vector(WIDTH - 1 downto 0);
    sel_a      : in  std_logic;
    y          : out std_logic_vector(WIDTH - 1 downto 0)
  );
end entity;

architecture rtl of scale_mux is
begin
  process(all)
  begin
    case sel_a is
      when '1'    => y <= in_a;
      when '0'    => y <= in_b;
      when others => y <= (others => 'X');
    end case;
  end process;
end architecture;
`}},{id:"vh-d03-cnt",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 3",title:"Loadable counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit loadable counter with enable and asynchronous active-low reset.
--   load = '1': count <= data; else enable = '1': count increments (wraps from 31 to 0); else hold.
entity counter5 is
  port (
    clk, rst_n, load, enable : in  std_logic;
    data                     : in  std_logic_vector(4 downto 0);
    count                    : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of counter5 is
  signal cnt : unsigned(4 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal load, enable : std_logic := '0';
  signal data, count : std_logic_vector(4 downto 0) := (others => '0');
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.counter5 port map (clk => clk, rst_n => rst_n, load => load, enable => enable, data => data, count => count);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : natural := 0;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (to_integer(unsigned(count)) = m) then errors := errors + 1; say("  asynchronous reset: got " & integer'image(to_integer(unsigned(count))) & ", expected " & integer'image(m)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 199 loop
      load <= '1' when rnd(8) = 0 else '0'; enable <= '1' when rnd(4) /= 0 else '0'; data <= std_logic_vector(to_unsigned(rnd(32), 5));
      wait until rising_edge(clk);
      if load = '1' then m := to_integer(unsigned(data)); elsif enable = '1' then m := (m + 1) mod 32; end if;
      wait for 4 ns;
      if not (to_integer(unsigned(count)) = m) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & integer'image(to_integer(unsigned(count))) & ", expected " & integer'image(m)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 200 cycles checked, load, enable and the wrap from 31 to 0 all work");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit loadable counter with enable and asynchronous active-low reset.
--   load = '1': count <= data; else enable = '1': count increments (wraps from 31 to 0); else hold.
entity counter5 is
  port (
    clk, rst_n, load, enable : in  std_logic;
    data                     : in  std_logic_vector(4 downto 0);
    count                    : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of counter5 is
  signal cnt : unsigned(4 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if load = '1' then
        cnt <= unsigned(data);
      elsif enable = '1' then
        cnt <= cnt + 1;
      end if;
    end if;
  end process;
  count <= std_logic_vector(cnt);
end architecture;
`}},{id:"vh-d04-ctrl",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 4",title:"Sequence controller (FSM)",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Types shared by the VeriRISC CPU blocks
package cpu_pkg is
  -- 3-bit operation codes of the VeriRISC CPU, in encoding order (OP_HLT = 0 ... OP_JMP = 7)
  type opcode_t is (OP_HLT, OP_SKZ, OP_ADD, OP_AND, OP_XOR, OP_LDA, OP_STO, OP_JMP);
  -- the 8 controller states, in order
  type state_t is (INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE);
  -- 32 x 8 memory contents
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC sequence controller: a Mealy state machine that steps through the 8 states, one per clock,
-- from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
-- fetch is '1' in the first four states, while the instruction is read.
--
--   state       mem_rd  load_ir  halt          inc_pc               load_ac  load_pc  mem_wr
--   INST_ADDR   0       0        0             0                    0        0        0
--   INST_FETCH  1       0        0             0                    0        0        0
--   INST_LOAD   1       1        0             0                    0        0        0
--   IDLE        1       1        0             0                    0        0        0
--   OP_ADDR     0       0        op = HLT      1                    0        0        0
--   OP_FETCH    aluop   0        0             0                    0        0        0
--   ALU_OP      aluop   0        0             op = SKZ and zero    aluop    op = JMP 0
--   STORE       aluop   0        0             op = JMP             0        op = JMP op = STO
--   aluop = op is ADD, AND, XOR or LDA
entity control is
  port (
    clk, rst_n : in  std_logic;
    opcode     : in  opcode_t;
    zero       : in  std_logic;
    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch : out std_logic;
    state      : out state_t
  );
end entity;

architecture rtl of control is
-- TODO: declare what you need (for example aluop)
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;
use work.cpu_pkg.all;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n, zero : std_logic := '0';
  signal opcode : opcode_t := OP_HLT;
  signal mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch : std_logic;
  signal state : state_t;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;

  -- expected outputs: mem_rd & load_ir & halt & inc_pc & load_ac & load_pc & mem_wr & fetch
  function expected(s : state_t; op : opcode_t; z : std_logic) return std_logic_vector is
    variable a : std_logic := '0';
    function b(x : boolean) return std_logic is begin if x then return '1'; else return '0'; end if; end function;
  begin
    a := b(op = OP_ADD or op = OP_AND or op = OP_XOR or op = OP_LDA);
    case s is
      when INST_ADDR  => return "00000001";
      when INST_FETCH => return "10000001";
      when INST_LOAD | IDLE => return "11000001";
      when OP_ADDR    => return "00" & b(op = OP_HLT) & "10000";
      when OP_FETCH   => return a & "0000000";
      when ALU_OP     => return a & "00" & b(op = OP_SKZ and z = '1') & a & b(op = OP_JMP) & "00";
      when STORE      => return a & "00" & b(op = OP_JMP) & '0' & b(op = OP_JMP) & b(op = OP_STO) & '0';
    end case;
  end function;
begin
  dut: entity work.control port map (clk => clk, rst_n => rst_n, opcode => opcode, zero => zero,
    mem_rd => mem_rd, load_ir => load_ir, halt => halt, inc_pc => inc_pc, load_ac => load_ac,
    load_pc => load_pc, mem_wr => mem_wr, fetch => fetch, state => state);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : state_t := INST_ADDR;
    variable e, got : std_logic_vector(7 downto 0);
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait until falling_edge(clk);
    if state /= INST_ADDR then errors := errors + 1; say("  after reset the state is " & state_t'image(state) & ", expected INST_ADDR"); end if;
    rst_n <= '1';
    for cyc in 0 to 399 loop
      if m = INST_ADDR then opcode <= opcode_t'val(rnd(8)); end if;   -- a new instruction every 8 clocks
      zero <= '1' when rnd(2) = 1 else '0';
      wait for 4 ns;
      e := expected(m, opcode, zero);
      got := mem_rd & load_ir & halt & inc_pc & load_ac & load_pc & mem_wr & fetch;
      if state /= m or got /= e then
        errors := errors + 1;
        if errors <= 5 then say("  " & state_t'image(m) & ", " & opcode_t'image(opcode) & ", zero = " & to_string(zero) & ": state = " & state_t'image(state) &
                                ", outputs " & to_string(got) & ", expected " & to_string(e) & " (mem_rd load_ir halt inc_pc load_ac load_pc mem_wr fetch)"); end if;
      end if;
      wait until rising_edge(clk);
      if m = state_t'high then m := state_t'low; else m := state_t'succ(m); end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 400 cycles: the state sequence and all 8 outputs are right for every opcode");
    else say("FAIL: " & integer'image(errors) & " wrong cycles"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Types shared by the VeriRISC CPU blocks
package cpu_pkg is
  -- 3-bit operation codes of the VeriRISC CPU, in encoding order (OP_HLT = 0 ... OP_JMP = 7)
  type opcode_t is (OP_HLT, OP_SKZ, OP_ADD, OP_AND, OP_XOR, OP_LDA, OP_STO, OP_JMP);
  -- the 8 controller states, in order
  type state_t is (INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE);
  -- 32 x 8 memory contents
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC sequence controller: a Mealy state machine that steps through the 8 states, one per clock,
-- from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
-- fetch is '1' in the first four states, while the instruction is read.
--
--   state       mem_rd  load_ir  halt          inc_pc               load_ac  load_pc  mem_wr
--   INST_ADDR   0       0        0             0                    0        0        0
--   INST_FETCH  1       0        0             0                    0        0        0
--   INST_LOAD   1       1        0             0                    0        0        0
--   IDLE        1       1        0             0                    0        0        0
--   OP_ADDR     0       0        op = HLT      1                    0        0        0
--   OP_FETCH    aluop   0        0             0                    0        0        0
--   ALU_OP      aluop   0        0             op = SKZ and zero    aluop    op = JMP 0
--   STORE       aluop   0        0             op = JMP             0        op = JMP op = STO
--   aluop = op is ADD, AND, XOR or LDA
entity control is
  port (
    clk, rst_n : in  std_logic;
    opcode     : in  opcode_t;
    zero       : in  std_logic;
    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch : out std_logic;
    state      : out state_t
  );
end entity;

architecture rtl of control is
  signal aluop : boolean;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= INST_ADDR;
    elsif rising_edge(clk) then
      if state = state_t'high then              -- STORE wraps back to INST_ADDR
        state <= state_t'low;
      else
        state <= state_t'succ(state);
      end if;
    end if;
  end process;

  aluop <= opcode = OP_ADD or opcode = OP_AND or opcode = OP_XOR or opcode = OP_LDA;
  fetch <= '1' when state = INST_ADDR or state = INST_FETCH or state = INST_LOAD or state = IDLE else '0';

  process(all)
    function b(x : boolean) return std_logic is begin if x then return '1'; else return '0'; end if; end function;
  begin
    (mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr) <= std_logic_vector'("0000000");
    case state is
      when INST_ADDR  => null;
      when INST_FETCH => mem_rd <= '1';
      when INST_LOAD | IDLE => mem_rd <= '1'; load_ir <= '1';
      when OP_ADDR    => halt <= b(opcode = OP_HLT); inc_pc <= '1';
      when OP_FETCH   => mem_rd <= b(aluop);
      when ALU_OP     => mem_rd <= b(aluop); inc_pc <= b(opcode = OP_SKZ and zero = '1'); load_ac <= b(aluop); load_pc <= b(opcode = OP_JMP);
      when STORE      => mem_rd <= b(aluop); inc_pc <= b(opcode = OP_JMP); load_pc <= b(opcode = OP_JMP); mem_wr <= b(opcode = OP_STO);
    end case;
  end process;
end architecture;
`}},{id:"vh-d05-alu",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 5",title:"ALU",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Types shared by the VeriRISC CPU blocks
package cpu_pkg is
  -- 3-bit operation codes of the VeriRISC CPU, in encoding order (OP_HLT = 0 ... OP_JMP = 7)
  type opcode_t is (OP_HLT, OP_SKZ, OP_ADD, OP_AND, OP_XOR, OP_LDA, OP_STO, OP_JMP);
  -- the 8 controller states, in order
  type state_t is (INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE);
  -- 32 x 8 memory contents
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC ALU. zero = '1' when accum is 0 (combinational).
-- alu_out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
--   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data and accum    XOR: data xor accum    LDA: data
entity alu is
  port (
    clk         : in  std_logic;
    accum, data : in  std_logic_vector(7 downto 0);
    opcode      : in  opcode_t;
    alu_out     : out std_logic_vector(7 downto 0);
    zero        : out std_logic
  );
end entity;

architecture rtl of alu is
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;
use work.cpu_pkg.all;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '1';
  signal accum, data, alu_out : std_logic_vector(7 downto 0);
  signal zero : std_logic;
  signal opcode : opcode_t;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.alu port map (clk => clk, accum => accum, data => data, opcode => opcode, alu_out => alu_out, zero => zero);
  clk <= not clk after 5 ns;                  -- falling edges at 5, 15, 25 ns ...

  process
    variable errors : natural := 0;
    variable e, before : std_logic_vector(7 downto 0);
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for i in 0 to 399 loop
      wait until rising_edge(clk);
      before := alu_out;
      accum <= x"00" when i mod 37 = 0 else std_logic_vector(to_unsigned(rnd(256), 8));
      data <= std_logic_vector(to_unsigned(rnd(256), 8));
      opcode <= opcode_t'val(i mod 8);
      wait for 1 ns;
      if (zero = '1') /= (accum = x"00") then errors := errors + 1; if errors <= 5 then say("  zero = " & to_string(zero) & " for accum = " & to_hstring(accum)); end if; end if;
      if i > 0 and alu_out /= before then errors := errors + 1; if errors <= 5 then say("  alu_out changed before the falling edge"); end if; end if;
      case opcode is
        when OP_ADD => e := std_logic_vector(unsigned(data) + unsigned(accum));
        when OP_AND => e := data and accum;
        when OP_XOR => e := data xor accum;
        when OP_LDA => e := data;
        when others => e := accum;
      end case;
      wait until falling_edge(clk); wait for 1 ns;
      if alu_out /= e then
        errors := errors + 1;
        if errors <= 5 then say("  " & opcode_t'image(opcode) & " accum = " & to_hstring(accum) & " data = " & to_hstring(data) & ": alu_out = " & to_hstring(alu_out) & ", expected " & to_hstring(e)); end if;
      end if;
    end loop;
    if errors = 0 then say("PASS: 400 operations, all 8 opcodes, registered on the falling edge");
    else say("FAIL: " & integer'image(errors) & " errors"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Types shared by the VeriRISC CPU blocks
package cpu_pkg is
  -- 3-bit operation codes of the VeriRISC CPU, in encoding order (OP_HLT = 0 ... OP_JMP = 7)
  type opcode_t is (OP_HLT, OP_SKZ, OP_ADD, OP_AND, OP_XOR, OP_LDA, OP_STO, OP_JMP);
  -- the 8 controller states, in order
  type state_t is (INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE);
  -- 32 x 8 memory contents
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC ALU. zero = '1' when accum is 0 (combinational).
-- alu_out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
--   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data and accum    XOR: data xor accum    LDA: data
entity alu is
  port (
    clk         : in  std_logic;
    accum, data : in  std_logic_vector(7 downto 0);
    opcode      : in  opcode_t;
    alu_out     : out std_logic_vector(7 downto 0);
    zero        : out std_logic
  );
end entity;

architecture rtl of alu is
begin
  zero <= '1' when accum = x"00" else '0';

  process(clk)
  begin
    if falling_edge(clk) then
      case opcode is
        when OP_ADD => alu_out <= std_logic_vector(unsigned(data) + unsigned(accum));
        when OP_AND => alu_out <= data and accum;
        when OP_XOR => alu_out <= data xor accum;
        when OP_LDA => alu_out <= data;
        when others => alu_out <= accum;       -- HLT, SKZ, STO, JMP
      end case;
    end if;
  end process;
end architecture;
`}},{id:"vh-d06-memtb",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 6",title:"Memory testbench with procedures",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- The memory is given (do not change it). Set BUG to true to break it on purpose: your testbench
-- must then report errors.
--   32 x 8, synchronous: wr_en = '1' stores data_in at addr; rd_en = '1' puts memory(addr) on data_out.
entity mem is
  generic (BUG : boolean := false);
  port (
    clk, rd_en, wr_en : in  std_logic;
    addr              : in  std_logic_vector(4 downto 0);
    data_in           : in  std_logic_vector(7 downto 0);
    data_out          : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mem is
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
  signal memory : mem_t;
begin
  process(clk)
    variable wa : std_logic_vector(4 downto 0);
  begin
    if rising_edge(clk) then
      wa := addr;
      if BUG then wa(4) := '0'; end if;                     -- BUG: address bit 4 is lost
      if wr_en = '1' then memory(to_integer(unsigned(wa))) <= data_in; end if;
      if rd_en = '1' then data_out <= memory(to_integer(unsigned(addr))); end if;
    end if;
  end process;
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

-- Complete this memory testbench. The memory is in the Design pane.
--   1. procedure write_mem(address, data, debug := false): drive wr_en, addr and data_in after the falling edge
--   2. procedure read_mem(address, data (out), debug := false): drive rd_en and addr, return data_out
--   3. procedure printstatus(errors): say "PASS: ..." when errors = 0, else "FAIL: ..."
--   4. Test 1: write 0 to every address, read back and count errors
--   5. Test 2: write data = address to every address, read back and count errors
-- Then set BUG to true in the design: your testbench must report FAIL.
entity tb is end entity;

architecture sim of tb is
  signal clk, rd_en, wr_en : std_logic := '0';
  signal addr : std_logic_vector(4 downto 0);
  signal data_in, data_out : std_logic_vector(7 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.mem port map (clk => clk, rd_en => rd_en, wr_en => wr_en, addr => addr, data_in => data_in, data_out => data_out);
  clk <= not clk after 5 ns;

  process
    -- TODO: procedures write_mem, read_mem and printstatus
  begin
    -- TODO: the two tests, then printstatus
    wait for 100 ns;
    finish;
  end process;
end architecture;
`,solution:{tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

-- Complete this memory testbench. The memory is in the Design pane.
--   1. procedure write_mem(address, data, debug := false): drive wr_en, addr and data_in after the falling edge
--   2. procedure read_mem(address, data (out), debug := false): drive rd_en and addr, return data_out
--   3. procedure printstatus(errors): say "PASS: ..." when errors = 0, else "FAIL: ..."
--   4. Test 1: write 0 to every address, read back and count errors
--   5. Test 2: write data = address to every address, read back and count errors
-- Then set BUG to true in the design: your testbench must report FAIL.
entity tb is end entity;

architecture sim of tb is
  signal clk, rd_en, wr_en : std_logic := '0';
  signal addr : std_logic_vector(4 downto 0);
  signal data_in, data_out : std_logic_vector(7 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.mem port map (clk => clk, rd_en => rd_en, wr_en => wr_en, addr => addr, data_in => data_in, data_out => data_out);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable d : std_logic_vector(7 downto 0);

    procedure write_mem(a : natural; v : std_logic_vector(7 downto 0); debug : boolean := false) is
    begin
      wait until falling_edge(clk);
      wr_en <= '1'; rd_en <= '0';
      addr <= std_logic_vector(to_unsigned(a, 5)); data_in <= v;
      wait until falling_edge(clk);
      wr_en <= '0';
      if debug then say("  write " & to_hstring(v) & " at " & integer'image(a)); end if;
    end procedure;

    procedure read_mem(a : natural; v : out std_logic_vector(7 downto 0); debug : boolean := false) is
    begin
      wait until falling_edge(clk);
      rd_en <= '1'; wr_en <= '0';
      addr <= std_logic_vector(to_unsigned(a, 5));
      wait until falling_edge(clk);
      rd_en <= '0';
      v := data_out;
      if debug then say("  read " & to_hstring(data_out) & " at " & integer'image(a)); end if;
    end procedure;

    procedure printstatus(n : natural) is
    begin
      if n = 0 then say("PASS: MEMORY TEST PASSED");
      else say("FAIL: MEMORY TEST FAILED with " & integer'image(n) & " errors"); end if;
    end procedure;
  begin
    -- Test 1: clear every address
    for a in 0 to 31 loop write_mem(a, x"00"); end loop;
    for a in 0 to 31 loop
      read_mem(a, d);
      if d /= x"00" then errors := errors + 1; say("  test 1: address " & integer'image(a) & " reads " & to_hstring(d)); end if;
    end loop;
    -- Test 2: data = address
    for a in 0 to 31 loop write_mem(a, std_logic_vector(to_unsigned(a, 8)), debug => a = 0); end loop;
    for a in 0 to 31 loop
      read_mem(a, d, debug => a = 0);
      if to_integer(unsigned(d)) /= a then errors := errors + 1; if errors <= 5 then say("  test 2: address " & integer'image(a) & " reads " & to_hstring(d)); end if; end if;
    end loop;
    printstatus(errors);
    finish;
  end process;
end architecture;
`}},{id:"vh-d07-struct",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 7",title:"Bundling a bus with a record",std:"vhdl",design:`-- A memory whose request signals travel as one bundle: a record from a package.
-- 1. In package mem_pkg, declare a record mem_req_t with the fields
--      read, write (std_logic), addr (5 bits), data (8 bits)
-- 2. Write entity mem_s: on the rising edge of clk, req.write stores req.data at req.addr,
--    and req.read puts memory(req.addr) on data_out.
library ieee;
use ieee.std_logic_1164.all;

package mem_pkg is
  type mem_req_t is record     -- TODO: replace this placeholder field with read, write, addr and data
    placeholder : std_logic;
  end record;
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.mem_pkg.all;

entity mem_s is
  port (
    clk      : in  std_logic;
    req      : in  mem_req_t;
    data_out : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mem_s is
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
  signal memory : mem_t;
begin
-- TODO: the process that writes and reads memory
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;
use work.mem_pkg.all;

entity tb is end entity;

architecture sim of tb is
  signal clk : std_logic := '0';
  signal req : mem_req_t := (read => '0', write => '0', addr => "00000", data => x"00");
  signal data_out : std_logic_vector(7 downto 0);
  type mem_t is array (0 to 31) of natural;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.mem_s port map (clk => clk, req => req, data_out => data_out);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : mem_t;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for a in 0 to 31 loop                      -- fill the memory, one bundled request per clock
      wait until falling_edge(clk);
      m(a) := rnd(256);
      req <= (read => '0', write => '1', addr => std_logic_vector(to_unsigned(a, 5)), data => std_logic_vector(to_unsigned(m(a), 8)));
    end loop;
    for i in 0 to 63 loop                      -- read back in a random order
      wait until falling_edge(clk);
      req.write <= '0'; req.read <= '1'; req.addr <= std_logic_vector(to_unsigned(rnd(32), 5));
      wait until falling_edge(clk);
      if to_integer(unsigned(data_out)) /= m(to_integer(unsigned(req.addr))) then
        errors := errors + 1;
        if errors <= 5 then say("  read " & to_hstring(data_out) & " at address " & integer'image(to_integer(unsigned(req.addr)))); end if;
      end if;
      req.read <= '0';
    end loop;
    if errors = 0 then say("PASS: 32 writes and 64 reads through the mem_req_t record");
    else say("FAIL: " & integer'image(errors) & " wrong reads"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`-- A memory whose request signals travel as one bundle: a record from a package.
-- 1. In package mem_pkg, declare a record mem_req_t with the fields
--      read, write (std_logic), addr (5 bits), data (8 bits)
-- 2. Write entity mem_s: on the rising edge of clk, req.write stores req.data at req.addr,
--    and req.read puts memory(req.addr) on data_out.
library ieee;
use ieee.std_logic_1164.all;

package mem_pkg is
  type mem_req_t is record
    read, write : std_logic;
    addr        : std_logic_vector(4 downto 0);
    data        : std_logic_vector(7 downto 0);
  end record;
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.mem_pkg.all;

entity mem_s is
  port (
    clk      : in  std_logic;
    req      : in  mem_req_t;
    data_out : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mem_s is
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
  signal memory : mem_t;
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if req.write = '1' then memory(to_integer(unsigned(req.addr))) <= req.data; end if;
      if req.read = '1' then data_out <= memory(to_integer(unsigned(req.addr))); end if;
    end if;
  end process;
end architecture;
`}},{id:"vh-d08-cpu",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 8",title:"VeriRISC CPU",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- Types shared by the VeriRISC CPU blocks
package cpu_pkg is
  -- 3-bit operation codes of the VeriRISC CPU, in encoding order (OP_HLT = 0 ... OP_JMP = 7)
  type opcode_t is (OP_HLT, OP_SKZ, OP_ADD, OP_AND, OP_XOR, OP_LDA, OP_STO, OP_JMP);
  -- the 8 controller states, in order
  type state_t is (INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE);
  -- 32 x 8 memory contents
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit register with enable and asynchronous active-low reset.
entity reg8 is
  port (
    clk, rst_n, enable : in  std_logic;
    data               : in  std_logic_vector(7 downto 0);
    q                  : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of reg8 is
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      q <= (others => '0');
    elsif rising_edge(clk) then
      if enable = '1' then
        q <= data;
      end if;
    end if;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Generic 2:1 multiplexer (default width 1): y = in_a when sel_a = '1', in_b when sel_a = '0'.
-- An unknown select drives all X.
entity scale_mux is
  generic (WIDTH : positive := 1);
  port (
    in_a, in_b : in  std_logic_vector(WIDTH - 1 downto 0);
    sel_a      : in  std_logic;
    y          : out std_logic_vector(WIDTH - 1 downto 0)
  );
end entity;

architecture rtl of scale_mux is
begin
  process(all)
  begin
    case sel_a is
      when '1'    => y <= in_a;
      when '0'    => y <= in_b;
      when others => y <= (others => 'X');
    end case;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit loadable counter with enable and asynchronous active-low reset.
--   load = '1': count <= data; else enable = '1': count increments (wraps from 31 to 0); else hold.
entity counter5 is
  port (
    clk, rst_n, load, enable : in  std_logic;
    data                     : in  std_logic_vector(4 downto 0);
    count                    : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of counter5 is
  signal cnt : unsigned(4 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if load = '1' then
        cnt <= unsigned(data);
      elsif enable = '1' then
        cnt <= cnt + 1;
      end if;
    end if;
  end process;
  count <= std_logic_vector(cnt);
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- 32 x 8 memory with a synchronous read and a synchronous write (rising edge of clk).
--   write = '1': memory(addr) <= data_in      read = '1': data_out <= memory(addr)
-- INIT is the starting contents (the program).
entity mem is
  generic (INIT : mem_t := (others => (others => '0')));
  port (
    clk, read, write : in  std_logic;
    addr             : in  std_logic_vector(4 downto 0);
    data_in          : in  std_logic_vector(7 downto 0);
    data_out         : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mem is
  signal memory : mem_t := INIT;
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if write = '1' then memory(to_integer(unsigned(addr))) <= data_in; end if;
      if read = '1' then data_out <= memory(to_integer(unsigned(addr))); end if;
    end if;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC ALU. zero = '1' when accum is 0 (combinational).
-- alu_out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
--   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data and accum    XOR: data xor accum    LDA: data
entity alu is
  port (
    clk         : in  std_logic;
    accum, data : in  std_logic_vector(7 downto 0);
    opcode      : in  opcode_t;
    alu_out     : out std_logic_vector(7 downto 0);
    zero        : out std_logic
  );
end entity;

architecture rtl of alu is
begin
  zero <= '1' when accum = x"00" else '0';

  process(clk)
  begin
    if falling_edge(clk) then
      case opcode is
        when OP_ADD => alu_out <= std_logic_vector(unsigned(data) + unsigned(accum));
        when OP_AND => alu_out <= data and accum;
        when OP_XOR => alu_out <= data xor accum;
        when OP_LDA => alu_out <= data;
        when others => alu_out <= accum;       -- HLT, SKZ, STO, JMP
      end case;
    end if;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC sequence controller: a Mealy state machine that steps through the 8 states, one per clock,
-- from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
-- fetch is '1' in the first four states, while the instruction is read.
--
--   state       mem_rd  load_ir  halt          inc_pc               load_ac  load_pc  mem_wr
--   INST_ADDR   0       0        0             0                    0        0        0
--   INST_FETCH  1       0        0             0                    0        0        0
--   INST_LOAD   1       1        0             0                    0        0        0
--   IDLE        1       1        0             0                    0        0        0
--   OP_ADDR     0       0        op = HLT      1                    0        0        0
--   OP_FETCH    aluop   0        0             0                    0        0        0
--   ALU_OP      aluop   0        0             op = SKZ and zero    aluop    op = JMP 0
--   STORE       aluop   0        0             op = JMP             0        op = JMP op = STO
--   aluop = op is ADD, AND, XOR or LDA
entity control is
  port (
    clk, rst_n : in  std_logic;
    opcode     : in  opcode_t;
    zero       : in  std_logic;
    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch : out std_logic;
    state      : out state_t
  );
end entity;

architecture rtl of control is
  signal aluop : boolean;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= INST_ADDR;
    elsif rising_edge(clk) then
      if state = state_t'high then              -- STORE wraps back to INST_ADDR
        state <= state_t'low;
      else
        state <= state_t'succ(state);
      end if;
    end if;
  end process;

  aluop <= opcode = OP_ADD or opcode = OP_AND or opcode = OP_XOR or opcode = OP_LDA;
  fetch <= '1' when state = INST_ADDR or state = INST_FETCH or state = INST_LOAD or state = IDLE else '0';

  process(all)
    function b(x : boolean) return std_logic is begin if x then return '1'; else return '0'; end if; end function;
  begin
    (mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr) <= std_logic_vector'("0000000");
    case state is
      when INST_ADDR  => null;
      when INST_FETCH => mem_rd <= '1';
      when INST_LOAD | IDLE => mem_rd <= '1'; load_ir <= '1';
      when OP_ADDR    => halt <= b(opcode = OP_HLT); inc_pc <= '1';
      when OP_FETCH   => mem_rd <= b(aluop);
      when ALU_OP     => mem_rd <= b(aluop); inc_pc <= b(opcode = OP_SKZ and zero = '1'); load_ac <= b(aluop); load_pc <= b(opcode = OP_JMP);
      when STORE      => mem_rd <= b(aluop); inc_pc <= b(opcode = OP_JMP); load_pc <= b(opcode = OP_JMP); mem_wr <= b(opcode = OP_STO);
    end case;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- The VeriRISC CPU: connect the blocks above.
--   instruction = opcode (bits 7..5) & address (bits 4..0)
--   pc       : counter5  (program counter: loads ir_addr on load_pc, counts on inc_pc)
--   addr_mux : scale_mux with WIDTH 5 (addr = pc_addr when fetch = '1', else ir_addr)
--   mem1     : mem with INIT => PROGRAM (reads on mem_rd, writes alu_out on mem_wr)
--   ir, ac   : reg8 (instruction register loads data_out on load_ir; accumulator loads alu_out on load_ac)
--   alu1     : alu      cntl : control
-- Keep these instance labels and signal names: the testbench looks inside the CPU through them.
entity cpu is
  generic (PROGRAM : mem_t := (others => (others => '0')));
  port (
    clk, rst_n    : in  std_logic;
    halt, load_ir : out std_logic
  );
end entity;

architecture rtl of cpu is
  signal data_out, alu_out, accum, ir_out : std_logic_vector(7 downto 0);
  signal pc_addr, ir_addr, addr : std_logic_vector(4 downto 0);
  signal mem_rd, mem_wr, inc_pc, load_ac, load_pc, fetch, zero, load_ir_i : std_logic;
  signal opcode : opcode_t;
  signal state  : state_t;
begin
  opcode  <= opcode_t'val(to_integer(unsigned(ir_out(7 downto 5))));
  ir_addr <= ir_out(4 downto 0);
  load_ir <= load_ir_i;

-- TODO: instantiate pc, addr_mux, mem1, ir, ac, alu1 and cntl
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;
use work.cpu_pkg.all;

-- Runs three programs on three copies of the CPU. Each must stop on its HLT at the right address
-- and leave the right result in memory.
-- Instruction = opcode & address: HLT 0 SKZ 1 ADD 2 AND 3 XOR 4 LDA 5 STO 6 JMP 7
entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal halt, load_ir : std_logic_vector(1 to 3);

  function I(op, a : natural) return std_logic_vector is
  begin
    return std_logic_vector(to_unsigned(op, 3)) & std_logic_vector(to_unsigned(a, 5));
  end function;

  -- Program 1: basic test of every instruction. Success: HLT at 12 (hex), memory(1B) = 1.
  constant P1 : mem_t := (
    16#00# => I(5, 16#1C#),   -- LDA 1C   acc = 0
    16#01# => I(1, 0),        -- SKZ      zero: skip the next instruction
    16#02# => I(0, 0),        -- HLT      (error: SKZ did not skip)
    16#03# => I(5, 16#1D#),   -- LDA 1D   acc = 1
    16#04# => I(1, 0),        -- SKZ      not zero: no skip
    16#05# => I(7, 16#07#),   -- JMP 07
    16#06# => I(0, 0),        -- HLT      (error: JMP failed)
    16#07# => I(4, 16#1D#),   -- XOR 1D   acc = 0
    16#08# => I(1, 0),        -- SKZ
    16#09# => I(0, 0),        -- HLT      (error: XOR failed)
    16#0A# => I(2, 16#1D#),   -- ADD 1D   acc = 1
    16#0B# => I(3, 16#1F#),   -- AND 1F   acc = 1 and FF = 1
    16#0C# => I(6, 16#1B#),   -- STO 1B   memory(1B) = 1
    16#0D# => I(5, 16#1C#),   -- LDA 1C   acc = 0
    16#0E# => I(5, 16#1B#),   -- LDA 1B   acc = 1 (read back the store)
    16#0F# => I(4, 16#1D#),   -- XOR 1D   acc = 0
    16#10# => I(1, 0),        -- SKZ
    16#11# => I(0, 0),        -- HLT      (error: STO or LDA failed)
    16#12# => I(0, 0),        -- HLT      success
    16#1D# => x"01", 16#1F# => x"FF",
    others => x"00");

  -- Program 2: sum of 1 to 10. Success: HLT at 08 with memory(1D) = 55.
  constant P2 : mem_t := (
    16#00# => I(5, 16#1D#),   -- LDA 1D   acc = sum
    16#01# => I(2, 16#1C#),   -- ADD 1C   + n
    16#02# => I(6, 16#1D#),   -- STO 1D
    16#03# => I(5, 16#1C#),   -- LDA 1C
    16#04# => I(2, 16#1E#),   -- ADD 1E   n - 1 (adds FF)
    16#05# => I(6, 16#1C#),   -- STO 1C
    16#06# => I(1, 0),        -- SKZ      n = 0: done
    16#07# => I(7, 16#00#),   -- JMP 00
    16#08# => I(0, 0),        -- HLT
    16#1C# => x"0A", 16#1E# => x"FF",
    others => x"00");

  -- Program 3: Fibonacci up to 144. Success: HLT at 0A with memory(1D) = 144.
  constant P3 : mem_t := (
    16#00# => I(5, 16#1D#),   -- LDA 1D   acc = cur
    16#01# => I(2, 16#1C#),   -- ADD 1C   + prev
    16#02# => I(6, 16#1E#),   -- STO 1E   next
    16#03# => I(5, 16#1D#),   -- LDA 1D
    16#04# => I(6, 16#1C#),   -- STO 1C   prev = cur
    16#05# => I(5, 16#1E#),   -- LDA 1E
    16#06# => I(6, 16#1D#),   -- STO 1D   cur = next
    16#07# => I(4, 16#1F#),   -- XOR 1F   compare with 144
    16#08# => I(1, 0),        -- SKZ      equal: done
    16#09# => I(7, 16#00#),   -- JMP 00
    16#0A# => I(0, 0),        -- HLT
    16#1C# => x"00", 16#1D# => x"01", 16#1F# => x"90",
    others => x"00");
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  cpu1: entity work.cpu generic map (PROGRAM => P1) port map (clk => clk, rst_n => rst_n, halt => halt(1), load_ir => load_ir(1));
  cpu2: entity work.cpu generic map (PROGRAM => P2) port map (clk => clk, rst_n => rst_n, halt => halt(2), load_ir => load_ir(2));
  cpu3: entity work.cpu generic map (PROGRAM => P3) port map (clk => clk, rst_n => rst_n, halt => halt(3), load_ir => load_ir(3));
  clk <= not clk after 5 ns;

  process
    -- VHDL-2008 external names: look inside the CPUs
    alias pc1 is << signal .tb.cpu1.pc_addr : std_logic_vector(4 downto 0) >>;
    alias pc2 is << signal .tb.cpu2.pc_addr : std_logic_vector(4 downto 0) >>;
    alias pc3 is << signal .tb.cpu3.pc_addr : std_logic_vector(4 downto 0) >>;
    alias m1 is << signal .tb.cpu1.mem1.memory : mem_t >>;
    alias m2 is << signal .tb.cpu2.mem1.memory : mem_t >>;
    alias m3 is << signal .tb.cpu3.mem1.memory : mem_t >>;
    type names is array (1 to 3) of string(1 to 24);
    constant name : names := ("Program 1 (basic test)  ", "Program 2 (sum 1 to 10) ", "Program 3 (Fibonacci)   ");
    type nat3 is array (1 to 3) of natural;
    constant halt_at : nat3 := (16#12#, 16#08#, 16#0A#);
    constant res_addr : nat3 := (16#1B#, 16#1D#, 16#1D#);
    constant res : nat3 := (1, 55, 144);
    variable done_at, pc_at : nat3 := (others => 0);
    variable errors, cycles, r : natural := 0;
  begin
    wait for 12 ns; rst_n <= '1';
    while cycles < 3000 and (done_at(1) = 0 or done_at(2) = 0 or done_at(3) = 0) loop
      wait until falling_edge(clk); cycles := cycles + 1;
      for k in 1 to 3 loop
        if done_at(k) = 0 and halt(k) = '1' then
          done_at(k) := cycles;
          pc_at(k) := to_integer(unsigned(pc1)) when k = 1 else to_integer(unsigned(pc2)) when k = 2 else to_integer(unsigned(pc3));
        end if;
      end loop;
    end loop;
    for k in 1 to 3 loop
      r := to_integer(unsigned(m1(res_addr(k)))) when k = 1 else to_integer(unsigned(m2(res_addr(k)))) when k = 2 else to_integer(unsigned(m3(res_addr(k))));
      if done_at(k) = 0 then errors := errors + 1; say(name(k) & ": no HLT after 3000 cycles");
      elsif pc_at(k) /= halt_at(k) then errors := errors + 1; say(name(k) & ": halted at address " & to_hstring(to_unsigned(pc_at(k), 8)) & ", expected " & to_hstring(to_unsigned(halt_at(k), 8)));
      elsif r /= res(k) then errors := errors + 1; say(name(k) & ": memory(" & to_hstring(to_unsigned(res_addr(k), 8)) & ") = " & integer'image(r) & ", expected " & integer'image(res(k)));
      else say(name(k) & ": halted at " & to_hstring(to_unsigned(halt_at(k), 8)) & " after " & integer'image(done_at(k)) & " cycles, result " & integer'image(r) & ". OK");
      end if;
    end loop;
    if errors = 0 then say("PASS: CPU TEST PASSED, all three programs ran correctly");
    else say("FAIL: CPU TEST FAILED, " & integer'image(errors) & " programs went wrong"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- Types shared by the VeriRISC CPU blocks
package cpu_pkg is
  -- 3-bit operation codes of the VeriRISC CPU, in encoding order (OP_HLT = 0 ... OP_JMP = 7)
  type opcode_t is (OP_HLT, OP_SKZ, OP_ADD, OP_AND, OP_XOR, OP_LDA, OP_STO, OP_JMP);
  -- the 8 controller states, in order
  type state_t is (INST_ADDR, INST_FETCH, INST_LOAD, IDLE, OP_ADDR, OP_FETCH, ALU_OP, STORE);
  -- 32 x 8 memory contents
  type mem_t is array (0 to 31) of std_logic_vector(7 downto 0);
end package;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 8-bit register with enable and asynchronous active-low reset.
entity reg8 is
  port (
    clk, rst_n, enable : in  std_logic;
    data               : in  std_logic_vector(7 downto 0);
    q                  : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of reg8 is
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      q <= (others => '0');
    elsif rising_edge(clk) then
      if enable = '1' then
        q <= data;
      end if;
    end if;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Generic 2:1 multiplexer (default width 1): y = in_a when sel_a = '1', in_b when sel_a = '0'.
-- An unknown select drives all X.
entity scale_mux is
  generic (WIDTH : positive := 1);
  port (
    in_a, in_b : in  std_logic_vector(WIDTH - 1 downto 0);
    sel_a      : in  std_logic;
    y          : out std_logic_vector(WIDTH - 1 downto 0)
  );
end entity;

architecture rtl of scale_mux is
begin
  process(all)
  begin
    case sel_a is
      when '1'    => y <= in_a;
      when '0'    => y <= in_b;
      when others => y <= (others => 'X');
    end case;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- 5-bit loadable counter with enable and asynchronous active-low reset.
--   load = '1': count <= data; else enable = '1': count increments (wraps from 31 to 0); else hold.
entity counter5 is
  port (
    clk, rst_n, load, enable : in  std_logic;
    data                     : in  std_logic_vector(4 downto 0);
    count                    : out std_logic_vector(4 downto 0)
  );
end entity;

architecture rtl of counter5 is
  signal cnt : unsigned(4 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      cnt <= (others => '0');
    elsif rising_edge(clk) then
      if load = '1' then
        cnt <= unsigned(data);
      elsif enable = '1' then
        cnt <= cnt + 1;
      end if;
    end if;
  end process;
  count <= std_logic_vector(cnt);
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- 32 x 8 memory with a synchronous read and a synchronous write (rising edge of clk).
--   write = '1': memory(addr) <= data_in      read = '1': data_out <= memory(addr)
-- INIT is the starting contents (the program).
entity mem is
  generic (INIT : mem_t := (others => (others => '0')));
  port (
    clk, read, write : in  std_logic;
    addr             : in  std_logic_vector(4 downto 0);
    data_in          : in  std_logic_vector(7 downto 0);
    data_out         : out std_logic_vector(7 downto 0)
  );
end entity;

architecture rtl of mem is
  signal memory : mem_t := INIT;
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if write = '1' then memory(to_integer(unsigned(addr))) <= data_in; end if;
      if read = '1' then data_out <= memory(to_integer(unsigned(addr))); end if;
    end if;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC ALU. zero = '1' when accum is 0 (combinational).
-- alu_out is registered on the FALLING edge of clk, so it is ready for the accumulator on the next rising edge.
--   HLT, SKZ, STO, JMP: accum    ADD: data + accum    AND: data and accum    XOR: data xor accum    LDA: data
entity alu is
  port (
    clk         : in  std_logic;
    accum, data : in  std_logic_vector(7 downto 0);
    opcode      : in  opcode_t;
    alu_out     : out std_logic_vector(7 downto 0);
    zero        : out std_logic
  );
end entity;

architecture rtl of alu is
begin
  zero <= '1' when accum = x"00" else '0';

  process(clk)
  begin
    if falling_edge(clk) then
      case opcode is
        when OP_ADD => alu_out <= std_logic_vector(unsigned(data) + unsigned(accum));
        when OP_AND => alu_out <= data and accum;
        when OP_XOR => alu_out <= data xor accum;
        when OP_LDA => alu_out <= data;
        when others => alu_out <= accum;       -- HLT, SKZ, STO, JMP
      end case;
    end if;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- VeriRISC sequence controller: a Mealy state machine that steps through the 8 states, one per clock,
-- from INST_ADDR to STORE and back. The outputs depend on the state, the opcode and zero.
-- fetch is '1' in the first four states, while the instruction is read.
--
--   state       mem_rd  load_ir  halt          inc_pc               load_ac  load_pc  mem_wr
--   INST_ADDR   0       0        0             0                    0        0        0
--   INST_FETCH  1       0        0             0                    0        0        0
--   INST_LOAD   1       1        0             0                    0        0        0
--   IDLE        1       1        0             0                    0        0        0
--   OP_ADDR     0       0        op = HLT      1                    0        0        0
--   OP_FETCH    aluop   0        0             0                    0        0        0
--   ALU_OP      aluop   0        0             op = SKZ and zero    aluop    op = JMP 0
--   STORE       aluop   0        0             op = JMP             0        op = JMP op = STO
--   aluop = op is ADD, AND, XOR or LDA
entity control is
  port (
    clk, rst_n : in  std_logic;
    opcode     : in  opcode_t;
    zero       : in  std_logic;
    mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr, fetch : out std_logic;
    state      : out state_t
  );
end entity;

architecture rtl of control is
  signal aluop : boolean;
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= INST_ADDR;
    elsif rising_edge(clk) then
      if state = state_t'high then              -- STORE wraps back to INST_ADDR
        state <= state_t'low;
      else
        state <= state_t'succ(state);
      end if;
    end if;
  end process;

  aluop <= opcode = OP_ADD or opcode = OP_AND or opcode = OP_XOR or opcode = OP_LDA;
  fetch <= '1' when state = INST_ADDR or state = INST_FETCH or state = INST_LOAD or state = IDLE else '0';

  process(all)
    function b(x : boolean) return std_logic is begin if x then return '1'; else return '0'; end if; end function;
  begin
    (mem_rd, load_ir, halt, inc_pc, load_ac, load_pc, mem_wr) <= std_logic_vector'("0000000");
    case state is
      when INST_ADDR  => null;
      when INST_FETCH => mem_rd <= '1';
      when INST_LOAD | IDLE => mem_rd <= '1'; load_ir <= '1';
      when OP_ADDR    => halt <= b(opcode = OP_HLT); inc_pc <= '1';
      when OP_FETCH   => mem_rd <= b(aluop);
      when ALU_OP     => mem_rd <= b(aluop); inc_pc <= b(opcode = OP_SKZ and zero = '1'); load_ac <= b(aluop); load_pc <= b(opcode = OP_JMP);
      when STORE      => mem_rd <= b(aluop); inc_pc <= b(opcode = OP_JMP); load_pc <= b(opcode = OP_JMP); mem_wr <= b(opcode = OP_STO);
    end case;
  end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use work.cpu_pkg.all;

-- The VeriRISC CPU: connect the blocks above.
--   instruction = opcode (bits 7..5) & address (bits 4..0)
--   pc       : counter5  (program counter: loads ir_addr on load_pc, counts on inc_pc)
--   addr_mux : scale_mux with WIDTH 5 (addr = pc_addr when fetch = '1', else ir_addr)
--   mem1     : mem with INIT => PROGRAM (reads on mem_rd, writes alu_out on mem_wr)
--   ir, ac   : reg8 (instruction register loads data_out on load_ir; accumulator loads alu_out on load_ac)
--   alu1     : alu      cntl : control
-- Keep these instance labels and signal names: the testbench looks inside the CPU through them.
entity cpu is
  generic (PROGRAM : mem_t := (others => (others => '0')));
  port (
    clk, rst_n    : in  std_logic;
    halt, load_ir : out std_logic
  );
end entity;

architecture rtl of cpu is
  signal data_out, alu_out, accum, ir_out : std_logic_vector(7 downto 0);
  signal pc_addr, ir_addr, addr : std_logic_vector(4 downto 0);
  signal mem_rd, mem_wr, inc_pc, load_ac, load_pc, fetch, zero, load_ir_i : std_logic;
  signal opcode : opcode_t;
  signal state  : state_t;
begin
  opcode  <= opcode_t'val(to_integer(unsigned(ir_out(7 downto 5))));
  ir_addr <= ir_out(4 downto 0);
  load_ir <= load_ir_i;

  pc: entity work.counter5 port map (clk => clk, rst_n => rst_n, load => load_pc, enable => inc_pc, data => ir_addr, count => pc_addr);
  addr_mux: entity work.scale_mux generic map (WIDTH => 5) port map (in_a => pc_addr, in_b => ir_addr, sel_a => fetch, y => addr);
  mem1: entity work.mem generic map (INIT => PROGRAM)
    port map (clk => clk, read => mem_rd, write => mem_wr, addr => addr, data_in => alu_out, data_out => data_out);
  ir: entity work.reg8 port map (clk => clk, rst_n => rst_n, enable => load_ir_i, data => data_out, q => ir_out);
  ac: entity work.reg8 port map (clk => clk, rst_n => rst_n, enable => load_ac, data => alu_out, q => accum);
  alu1: entity work.alu port map (clk => clk, accum => accum, data => data_out, opcode => opcode, alu_out => alu_out, zero => zero);
  cntl: entity work.control port map (clk => clk, rst_n => rst_n, opcode => opcode, zero => zero,
    mem_rd => mem_rd, load_ir => load_ir_i, halt => halt, inc_pc => inc_pc, load_ac => load_ac,
    load_pc => load_pc, mem_wr => mem_wr, fetch => fetch, state => state);
end architecture;
`}},{id:"vh-d09-johnson",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 9",title:"Johnson counter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Johnson counter: an N-bit shift register whose inverted top bit feeds back into bit 0.
-- It goes through 2N states, changing one bit at a time: for N = 4, 0000 0001 0011 0111 1111 1110 1100 1000.
entity johnson is
  generic (N : positive := 4);
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(N - 1 downto 0)
  );
end entity;

architecture rtl of johnson is
  signal r : std_logic_vector(N - 1 downto 0);
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, rst_n : std_logic := '0';
  signal q4 : std_logic_vector(3 downto 0);
  signal q6 : std_logic_vector(5 downto 0);
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut4: entity work.johnson port map (clk => clk, rst_n => rst_n, q => q4);
  dut6: entity work.johnson generic map (N => 6) port map (clk => clk, rst_n => rst_n, q => q6);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m4 : std_logic_vector(3 downto 0) := (others => '0');
    variable m6 : std_logic_vector(5 downto 0) := (others => '0');
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    wait for 3 ns;
    if not (q4 = m4 and q6 = m6) then errors := errors + 1; say("  asynchronous reset: got " & to_string(q4) & " and " & to_string(q6) & ", expected " & to_string(m4) & " and " & to_string(m6)); end if;
    wait until falling_edge(clk); wait until falling_edge(clk);
    rst_n <= '1';
    for cyc in 0 to 39 loop
      wait until rising_edge(clk);
      m4 := m4(2 downto 0) & not m4(3); m6 := m6(4 downto 0) & not m6(5);
      wait for 4 ns;
      if not (q4 = m4 and q6 = m6) then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": got " & to_string(q4) & " and " & to_string(q6) & ", expected " & to_string(m4) & " and " & to_string(m6)); end if;
      end if;
      wait until falling_edge(clk);
    end loop;
    if errors = 0 then say("PASS: 40 cycles checked, N = 4 and N = 6 both step through their 2N states");
    else say("FAIL: " & integer'image(errors) & " wrong values"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Johnson counter: an N-bit shift register whose inverted top bit feeds back into bit 0.
-- It goes through 2N states, changing one bit at a time: for N = 4, 0000 0001 0011 0111 1111 1110 1100 1000.
entity johnson is
  generic (N : positive := 4);
  port (
    clk, rst_n : in  std_logic;
    q          : out std_logic_vector(N - 1 downto 0)
  );
end entity;

architecture rtl of johnson is
  signal r : std_logic_vector(N - 1 downto 0);
begin
  process(clk, rst_n)
  begin
    if rst_n = '0' then
      r <= (others => '0');
    elsif rising_edge(clk) then
      r <= r(N - 2 downto 0) & not r(N - 1);
    end if;
  end process;
  q <= r;
end architecture;
`}},{id:"vh-d10-gen",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 10",title:"Ripple-carry adder with generate",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;

-- One-bit full adder (given).
entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture rtl of full_adder is
begin
  sum  <= a xor b xor cin;
  cout <= (a and b) or (cin and (a xor b));
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- N-bit ripple-carry adder built from N full_adder instances with a for-generate loop.
-- Do not use + here: the point is to build the adder from the full adders.
entity rca is
  generic (N : positive := 8);
  port (
    a, b : in  std_logic_vector(N - 1 downto 0);
    cin  : in  std_logic;
    sum  : out std_logic_vector(N - 1 downto 0);
    cout : out std_logic
  );
end entity;

architecture rtl of rca is
-- TODO: declare a carry vector c(N downto 0)
begin
-- TODO: c(0) is cin; a for-generate loop of full adders; cout is c(N)
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal a4, b4, s4 : std_logic_vector(3 downto 0);
  signal a8, b8, s8 : std_logic_vector(7 downto 0);
  signal cin, c4, c8 : std_logic;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut4: entity work.rca generic map (N => 4) port map (a => a4, b => b4, cin => cin, sum => s4, cout => c4);
  dut8: entity work.rca port map (a => a8, b => b8, cin => cin, sum => s8, cout => c8);

  process
    variable errors : natural := 0;
    variable e : natural;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for x in 0 to 15 loop for y in 0 to 15 loop for ci in 0 to 1 loop     -- every 4-bit case
      a4 <= std_logic_vector(to_unsigned(x, 4)); b4 <= std_logic_vector(to_unsigned(y, 4)); cin <= '1' when ci = 1 else '0';
      a8 <= std_logic_vector(to_unsigned(rnd(256), 8)); b8 <= std_logic_vector(to_unsigned(rnd(256), 8));
      wait for 5 ns;
      e := x + y + ci;
      if to_integer(unsigned(c4 & s4)) /= e then
        errors := errors + 1;
        if errors <= 5 then say("  N = 4: " & integer'image(x) & " + " & integer'image(y) & " + " & integer'image(ci) & " = " & integer'image(to_integer(unsigned(c4 & s4))) & ", expected " & integer'image(e)); end if;
      end if;
      e := to_integer(unsigned(a8)) + to_integer(unsigned(b8)) + ci;
      if to_integer(unsigned(c8 & s8)) /= e then
        errors := errors + 1;
        if errors <= 5 then say("  N = 8: " & integer'image(to_integer(unsigned(a8))) & " + " & integer'image(to_integer(unsigned(b8))) & " + " & integer'image(ci) & " = " & integer'image(to_integer(unsigned(c8 & s8))) & ", expected " & integer'image(e)); end if;
      end if;
    end loop; end loop; end loop;
    if errors = 0 then say("PASS: all 512 4-bit sums and 512 8-bit sums are right");
    else say("FAIL: " & integer'image(errors) & " wrong sums"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;

-- One-bit full adder (given).
entity full_adder is
  port (
    a, b, cin : in  std_logic;
    sum, cout : out std_logic
  );
end entity;

architecture rtl of full_adder is
begin
  sum  <= a xor b xor cin;
  cout <= (a and b) or (cin and (a xor b));
end architecture;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- N-bit ripple-carry adder built from N full_adder instances with a for-generate loop.
-- Do not use + here: the point is to build the adder from the full adders.
entity rca is
  generic (N : positive := 8);
  port (
    a, b : in  std_logic_vector(N - 1 downto 0);
    cin  : in  std_logic;
    sum  : out std_logic_vector(N - 1 downto 0);
    cout : out std_logic
  );
end entity;

architecture rtl of rca is
  signal c : std_logic_vector(N downto 0);
begin
  c(0) <= cin;

  stage: for i in 0 to N - 1 generate
    fa: entity work.full_adder port map (a => a(i), b => b(i), cin => c(i), sum => sum(i), cout => c(i + 1));
  end generate;

  cout <= c(N);
end architecture;
`}},{id:"vh-d11-dpram",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 11",title:"Dual-port RAM",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Dual-port RAM, 2**AW words of DW bits.
--   Port A: writes din_a at addr_a when we_a = '1', and reads addr_a.
--   Port B: reads addr_b.
-- Both reads are synchronous (dout changes on the rising edge). When port A writes an address,
-- dout_a shows the OLD data (read-before-write).
entity dpram is
  generic (AW : positive := 4; DW : positive := 8);
  port (
    clk            : in  std_logic;
    we_a           : in  std_logic;
    addr_a, addr_b : in  std_logic_vector(AW - 1 downto 0);
    din_a          : in  std_logic_vector(DW - 1 downto 0);
    dout_a, dout_b : out std_logic_vector(DW - 1 downto 0)
  );
end entity;

architecture rtl of dpram is
-- TODO: declare the memory array type and signal
begin
-- TODO: one clocked process for both ports
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  signal clk, we_a : std_logic := '0';
  signal addr_a, addr_b : std_logic_vector(3 downto 0) := (others => '0');
  signal din_a, dout_a, dout_b : std_logic_vector(7 downto 0);
  type ram_t is array (0 to 15) of natural;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.dpram port map (clk => clk, we_a => we_a, addr_a => addr_a, addr_b => addr_b, din_a => din_a, dout_a => dout_a, dout_b => dout_b);
  clk <= not clk after 5 ns;

  process
    variable errors : natural := 0;
    variable m : ram_t;
    variable ea, eb : natural;
    variable seed : natural := 13;
    impure function rnd(k : natural) return natural is begin seed := (seed * 75 + 74) mod 65537; return (seed / 7) mod k; end function;
  begin
    for a in 0 to 15 loop                     -- fill every word first
      wait until falling_edge(clk);
      we_a <= '1'; addr_a <= std_logic_vector(to_unsigned(a, 4)); m(a) := rnd(256); din_a <= std_logic_vector(to_unsigned(m(a), 8));
    end loop;
    for cyc in 0 to 199 loop
      wait until falling_edge(clk);
      we_a <= '1' when rnd(3) = 0 else '0';
      addr_a <= std_logic_vector(to_unsigned(rnd(16), 4)); addr_b <= std_logic_vector(to_unsigned(rnd(16), 4));
      din_a <= std_logic_vector(to_unsigned(rnd(256), 8));
      wait until rising_edge(clk);
      ea := m(to_integer(unsigned(addr_a))); eb := m(to_integer(unsigned(addr_b)));   -- the old data
      if we_a = '1' then m(to_integer(unsigned(addr_a))) := to_integer(unsigned(din_a)); end if;
      wait for 1 ns;
      if to_integer(unsigned(dout_a)) /= ea or to_integer(unsigned(dout_b)) /= eb then
        errors := errors + 1;
        if errors <= 5 then say("  at " & time'image(now) & ": dout_a = " & to_hstring(dout_a) & " dout_b = " & to_hstring(dout_b) &
                                ", expected " & to_hstring(to_unsigned(ea, 8)) & " " & to_hstring(to_unsigned(eb, 8)));
                                if we_a = '1' then say("    (port A wrote this cycle: dout_a must show the old data)"); end if; end if;
      end if;
    end loop;
    if errors = 0 then say("PASS: 200 cycles: both ports read correctly, with read-before-write on port A");
    else say("FAIL: " & integer'image(errors) & " wrong reads"); end if;
    finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- Dual-port RAM, 2**AW words of DW bits.
--   Port A: writes din_a at addr_a when we_a = '1', and reads addr_a.
--   Port B: reads addr_b.
-- Both reads are synchronous (dout changes on the rising edge). When port A writes an address,
-- dout_a shows the OLD data (read-before-write).
entity dpram is
  generic (AW : positive := 4; DW : positive := 8);
  port (
    clk            : in  std_logic;
    we_a           : in  std_logic;
    addr_a, addr_b : in  std_logic_vector(AW - 1 downto 0);
    din_a          : in  std_logic_vector(DW - 1 downto 0);
    dout_a, dout_b : out std_logic_vector(DW - 1 downto 0)
  );
end entity;

architecture rtl of dpram is
  type ram_t is array (0 to 2 ** AW - 1) of std_logic_vector(DW - 1 downto 0);
  signal ram : ram_t;
begin
  process(clk)
  begin
    if rising_edge(clk) then
      if we_a = '1' then
        ram(to_integer(unsigned(addr_a))) <= din_a;
      end if;
      dout_a <= ram(to_integer(unsigned(addr_a)));   -- a signal still holds the old value here
      dout_b <= ram(to_integer(unsigned(addr_b)));
    end if;
  end process;
end architecture;
`}},{id:"vh-d12-uart",group:"vh-design",tag:"VHDL-2008 \xB7 Lab 12",title:"UART transmitter",std:"vhdl",design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- UART transmitter: when start = '1' in IDLE, send data as a start bit ('0'), 8 data bits LSB first,
-- and a stop bit ('1'). Each bit lasts CLKS_PER_BIT clocks. tx is '1' when idle; busy is '1' while sending.
entity uart_tx is
  generic (CLKS_PER_BIT : positive := 4);
  port (
    clk, rst_n, start : in  std_logic;
    data              : in  std_logic_vector(7 downto 0);
    tx, busy          : out std_logic
  );
end entity;

architecture rtl of uart_tx is
-- TODO: declare the state type (IDLE, START_BIT, DATA_BITS, STOP_BIT) and the signals you need
begin
-- TODO: write the design here
end architecture;
`,tb:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use std.textio.all;
use std.env.finish;

entity tb is end entity;

architecture sim of tb is
  constant CPB : positive := 4;
  constant BIT_TIME : time := CPB * 10 ns;
  signal clk, rst_n, start : std_logic := '0';
  signal data : std_logic_vector(7 downto 0);
  signal tx, busy : std_logic;
  signal got, rx_errors : natural := 0;
  function byte(i : natural) return std_logic_vector is
  begin
    if i = 0 then return x"55"; elsif i = 1 then return x"A3"; end if;
    return std_logic_vector(to_unsigned((i * 73 + 29) mod 256, 8));
  end function;
  procedure say(s : string) is
    variable l : line;
  begin
    write(l, s);
    writeline(output, l);
  end procedure;
begin
  dut: entity work.uart_tx generic map (CLKS_PER_BIT => CPB) port map (clk => clk, rst_n => rst_n, start => start, data => data, tx => tx, busy => busy);
  clk <= not clk after 5 ns;

  receiver: process                            -- decodes the line like a real UART receiver
    variable b : std_logic_vector(7 downto 0);
    variable errs : natural := 0;
  begin
    wait until rst_n = '1';
    loop
      wait until falling_edge(tx);
      wait for BIT_TIME / 2;                   -- middle of the start bit
      if tx /= '0' then errs := errs + 1; say("  start bit not 0"); end if;
      for i in 0 to 7 loop wait for BIT_TIME; b(i) := tx; end loop;
      wait for BIT_TIME;
      if tx /= '1' then errs := errs + 1; say("  stop bit not 1"); end if;
      if b /= byte(got) then errs := errs + 1; if errs <= 5 then say("  received " & to_hstring(b) & ", expected " & to_hstring(byte(got))); end if; end if;
      rx_errors <= errs; got <= got + 1;
    end loop;
  end process;

  sender: process
    variable errors : natural := 0;
  begin
    wait for 12 ns; rst_n <= '1'; wait for 1 ns;
    if tx /= '1' or busy /= '0' then errors := errors + 1; say("  after reset tx should be 1 and busy 0"); end if;
    for i in 0 to 11 loop
      wait until falling_edge(clk);
      while busy = '1' loop wait until falling_edge(clk); end loop;
      data <= byte(i); start <= '1';
      wait until falling_edge(clk); start <= '0';
      if busy /= '1' then errors := errors + 1; if errors <= 5 then say("  busy should be 1 while sending"); end if; end if;
    end loop;
    while busy = '1' loop wait until falling_edge(clk); end loop;
    wait for 2 * BIT_TIME;
    errors := errors + rx_errors;
    if errors = 0 and got = 12 then say("PASS: UART TX TEST PASSED (12 bytes received correctly)");
    else say("FAIL: UART TX TEST FAILED, " & integer'image(errors) & " errors, " & integer'image(got) & " of 12 bytes received"); end if;
    finish;
  end process;

  watchdog: process
  begin
    wait for 100 us; say("FAIL: timeout"); finish;
  end process;
end architecture;
`,solution:{design:`library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

-- UART transmitter: when start = '1' in IDLE, send data as a start bit ('0'), 8 data bits LSB first,
-- and a stop bit ('1'). Each bit lasts CLKS_PER_BIT clocks. tx is '1' when idle; busy is '1' while sending.
entity uart_tx is
  generic (CLKS_PER_BIT : positive := 4);
  port (
    clk, rst_n, start : in  std_logic;
    data              : in  std_logic_vector(7 downto 0);
    tx, busy          : out std_logic
  );
end entity;

architecture rtl of uart_tx is
  type state_t is (IDLE, START_BIT, DATA_BITS, STOP_BIT);
  signal state : state_t;
  signal shreg : std_logic_vector(7 downto 0);
  signal bitn  : natural range 0 to 7;
  signal tick  : natural range 0 to CLKS_PER_BIT - 1;
begin
  busy <= '0' when state = IDLE else '1';

  process(clk, rst_n)
  begin
    if rst_n = '0' then
      state <= IDLE; tx <= '1'; tick <= 0; bitn <= 0; shreg <= (others => '0');
    elsif rising_edge(clk) then
      case state is
        when IDLE =>
          if start = '1' then
            shreg <= data; tx <= '0'; tick <= 0; state <= START_BIT;
          end if;
        when START_BIT =>
          if tick = CLKS_PER_BIT - 1 then
            tick <= 0; tx <= shreg(0); bitn <= 0; state <= DATA_BITS;
          else
            tick <= tick + 1;
          end if;
        when DATA_BITS =>
          if tick = CLKS_PER_BIT - 1 then
            tick <= 0;
            if bitn = 7 then
              tx <= '1'; state <= STOP_BIT;
            else
              bitn <= bitn + 1; tx <= shreg(bitn + 1);
            end if;
          else
            tick <= tick + 1;
          end if;
        when STOP_BIT =>
          if tick = CLKS_PER_BIT - 1 then
            tick <= 0; state <= IDLE;
          else
            tick <= tick + 1;
          end if;
      end case;
    end if;
  end process;
end architecture;
`}}],dn={"vh-p1-ha-df":{problem:"Add two bits. The sum is 1 when exactly one input is 1; the carry is 1 when both are.",tasks:["Use only concurrent signal assignments (<=) in the architecture: dataflow style.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Entities, architectures and concurrent signal assignments."},"vh-p1-ha-bh":{problem:"The same half adder, described by its behavior instead of its equations.",tasks:["Use a process(all) with a case statement on the two inputs.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Behavioral modelling with a combinational process and case."},"vh-p1-ha-st":{problem:"The same half adder, built from logic gates connected by wires.",tasks:["Instantiate the given xor2 and and2 entities: one for the sum, one for the carry.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural modelling: direct entity instantiation and port maps."},"vh-p1-fa-df":{problem:"Add three bits (a, b and a carry in) to get a sum and a carry out.",tasks:["Use only concurrent signal assignments.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Full adder equations in dataflow style."},"vh-p1-fa-bh":{problem:"The same full adder, described by its behavior.",tasks:["Use a process(all) and numeric_std: add the three bits as 2-bit unsigned numbers.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Arithmetic with ieee.numeric_std inside a process, and variables."},"vh-p1-fa-st":{problem:"Build a full adder from two half adders and an OR gate, the way it is drawn in textbooks.",tasks:["Instantiate half_adder twice and or2 once, and connect them with internal signals.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Hierarchy: internal signals and named port maps."},"vh-p1-ops":{problem:"VHDL has arithmetic, logical, relational, shift and concatenation operators, plus the reduction operators of VHDL-2008. Each output of the entity uses one of them.",tasks:["Write one concurrent assignment per output (see the comments for which operator). The inputs are numeric_std unsigned.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Every VHDL operator group, numeric_std arithmetic and the conditional assignment."},"vh-p1-c2f":{problem:"Repeated calculations belong in a subprogram: write it once, call it many times.",tasks:["Complete the procedure c_to_f in package temperature. The testbench calls it with seven temperatures.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packages, and writing and calling a VHDL procedure with in and out parameters."},"vh-p2-add4":{problem:"Add two 4-bit numbers and a carry in. The result needs 5 bits: a 4-bit sum and a carry out.",tasks:["One concurrent assignment: add the numbers as 5-bit unsigned values and split the result.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-bit arithmetic with numeric_std, resize and slices."},"vh-p2-mux2":{problem:"Pick one of two inputs with a select signal: the most common block in digital design.",tasks:["y = a when sel = '0', b when sel = '1'. Use a conditional assignment (when ... else).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"The conditional signal assignment as a multiplexer."},"vh-p2-mux4":{problem:"Pick one of four inputs with a 2-bit select.",tasks:["Use a selected signal assignment: with sel select y <= ... ;","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Selected signal assignments and covering every choice with others."},"vh-p2-dec24":{problem:"Turn a 2-bit number into four select lines, exactly one of them high, as in an address decoder.",tasks:["y(a) = '1' when en = '1'; all zeros when en = '0'.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Decoders, enables, and indexing a vector with to_integer."},"vh-p2-enc42":{problem:"The reverse of a decoder: find which one of four lines is high and output its number.",tasks:[`valid = '1' only when exactly one bit of d is 1; then y is its position. Otherwise y = "00".`,"Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Encoders, case statements and inputs that are not allowed."},"vh-p2-penc42":{problem:"When several requests arrive at once, the highest one wins: an interrupt controller does this.",tasks:[`y is the position of the highest 1; valid = '0' (and y = "00") when d = "0000". Use if/elsif.`,"Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority logic with if/elsif chains."},"vh-p2-cmp4":{problem:"Compare two unsigned 4-bit numbers.",tasks:["Exactly one of gt, eq and lt is '1'. Compare the inputs as unsigned numbers.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Relational operators on numeric_std unsigned, and comparator outputs."},"vh-p2-bshift8":{problem:"Shift or rotate a byte by any amount from 0 to 7 in one step, as in a processor's shift unit.",tasks:["dir = '0' shifts left, '1' right; rotate = '1' brings the bits that fall off back in on the other side.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"shift_left, shift_right, rotate_left and rotate_right from numeric_std."},"vh-p2-alu":{problem:"The arithmetic logic unit is the heart of a processor: one block, eight operations, chosen by an opcode.",tasks:["Implement the eight operations in the comment, the carry for add and subtract, and the zero flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"A case-based ALU with numeric_std, a 9-bit result for the carry, and status flags."},"vh-p3-dlatch":{problem:"A latch is transparent: while en = '1', q follows d. When en = '0' it holds its last value.",tasks:["Write it as a process(all) with an if and no else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"How an if without else in a combinational process creates a latch, and when you want one."},"vh-p3-dlatch-rst":{problem:"Add a reset that clears the latch at once, whatever en is.",tasks:["rst = '1' forces q = '0' immediately.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Reset priority in a latch."},"vh-p3-dff":{problem:"A flip-flop samples d only at the rising edge of the clock: the basic memory element of synchronous design.",tasks:["Use a process(clk) with if rising_edge(clk).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Edge-triggered storage with rising_edge, and signal assignment in a clocked process."},"vh-p3-dff-arh":{problem:"Reset must work even when the clock is not running.",tasks:["rst = '1' clears q at once. Put rst in the sensitivity list and test it before the clock edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous reset: the sensitivity list and reset priority."},"vh-p3-dff-neg-arh":{problem:"Some flops capture on the falling edge of the clock, for example in DDR interfaces.",tasks:["Sample d on falling_edge(clk); rst = '1' clears q at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Falling-edge flip-flops with falling_edge."},"vh-p3-dff-arl":{problem:"Most chips use an active-low reset (rst_n): '0' means reset.",tasks:["rst_n = '0' clears q at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low reset and the _n naming convention."},"vh-p3-dff-ash":{problem:"Some registers must start at 1, not 0.",tasks:["set = '1' forces q = '1' at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous set."},"vh-p3-dff-srh":{problem:"A synchronous reset only acts on a clock edge, so it is timed like any other data input.",tasks:["rst = '1' clears q on the next rising edge only. Keep only clk in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous reset, and how it differs from asynchronous reset."},"vh-p3-dff-srl":{problem:"The same synchronous reset, active low.",tasks:["rst_n = '0' clears q on the next rising edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous active-low reset."},"vh-p3-dff-srs":{problem:"When reset and set arrive together, one must win. Here reset has priority.",tasks:["On a rising edge: rst = '1' gives '0', else set = '1' gives '1', else q takes d.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority between synchronous controls with if/elsif."},"vh-p3-sync-async":{problem:"One reset, two registers: one resets at once, the other waits for the clock. The waveform shows the difference.",tasks:["Build q_sync with a synchronous reset and q_async with an asynchronous one, in two processes.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"When each reset style acts, seen side by side."},"vh-p3-twin":{problem:"Two 8-bit registers share a data bus, clock and reset, but load independently.",tasks:["load_a loads d into qa, load_b into qb; otherwise each holds. rst_n = '0' clears both at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Registers with load enables and a shared bus."},"vh-p4-sr5":{problem:"Serial data enters at the left and moves one bit to the right each clock, as in a serial receiver.",tasks:["On each rising edge: q <= sin & q(4 downto 1).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shift registers with the & concatenation operator and slices."},"vh-p4-usr5":{problem:"One register that can hold, shift right, shift left or load in parallel, chosen by a mode input.",tasks:["Implement the four modes in the comment with a case statement on mode.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-function registers with case."},"vh-p4-cnt":{problem:"Counters are everywhere: timers, addresses, state sequencing.",tasks:["A 4-bit up counter that wraps from 15 to 0. Count in an unsigned signal and convert it for q.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"A synchronous counter with numeric_std's unsigned type."},"vh-p4-cnt-tb":{problem:"A design is only as good as its testbench. Here the design is given and you write the testbench.",tasks:["Complete the testbench: reset, count, pause with en, check every cycle and print PASS or FAIL. Then set BUG to 1 in the design: your testbench must print FAIL.","Run: your testbench should print PASS, and FAIL once BUG is set.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Self-checking testbenches with an expected-value model."},"vh-p4-cnt-load":{problem:"Counters often need to start from a given value.",tasks:["load = '1' loads d; otherwise count up.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous load with priority over counting."},"vh-p4-updown":{problem:"Count in either direction, for example a FIFO level or a position.",tasks:["up = '1' counts up, up = '0' counts down; both wrap.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Up/down counters."},"vh-p4-mod":{problem:"A modulus-N counter counts 0 to N-1 and wraps, such as a decade (mod-10) counter for a clock display.",tasks:["Count 0 to N-1 and wrap to 0. The testbench also builds a copy with N = 6.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mod-N counters and generics."},"vh-p4-range":{problem:"Count only within a range, LOW to HIGH, and start again at LOW.",tasks:["After reset q = LOW, then count up to HIGH and back to LOW. The testbench also builds a copy with LOW = 5, HIGH = 9.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Counter limits set by generics."},"vh-p4-range-udl":{problem:"All the counter features together: a range, a direction and a load.",tasks:["Load has priority; up wraps HIGH to LOW; down wraps LOW to HIGH.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Combining counter features with a clear priority."},"vh-p4-div2":{problem:"Make a slower clock from a fast one.",tasks:["clk_out toggles on every rising edge of clk.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Divide-by-2 with a toggle flop."},"vh-p4-div4":{problem:"Divide by 4 with a 50% duty cycle.",tasks:["Use a 2-bit counter; its top bit is clk / 4.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dividing by a power of 2 with a counter."},"vh-p4-div3":{problem:"Odd dividers are harder: a counter alone gives a 33% duty cycle. The testbench requires exactly 50%.",tasks:["Hint: combine a flop on the rising edge with one on the falling edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Odd clock division with a 50% duty cycle using both clock edges."},"vh-p4-fifo":{problem:"A FIFO buffers data between a producer and a consumer running at different rates on the same clock.",tasks:["8 words of 8 bits. Ignore writes when full and reads when empty; dout shows the word on the clock after rd_en.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Memory as an array signal, FIFO pointers, a word count, and full and empty flags."},"vh-p4-afifo":{problem:"When producer and consumer run on different clocks, the FIFO pointers cross clock domains. They must be Gray coded and synchronized.",tasks:["8 words of 8 bits, wclk and rclk. rdata shows the oldest word; rinc takes it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous FIFOs: Gray pointers, synchronizers, full and empty. See the CDC labs for more."},"vh-p4-mealy-nov":{problem:"Detect the bit pattern 1-0-1 in a serial stream. Mealy: the output depends on the state and the current input.",tasks:["y = '1' while x is the final 1. After a detection, start again from scratch.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mealy state machines with an enumerated state type, and non-overlapping detection."},"vh-p4-mealy-ov":{problem:"The same pattern, but the final 1 may also start the next 101: 10101 gives two detections.",tasks:["y = '1' while x is the final 1, and keep that 1 for the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Mealy machine."},"vh-p4-moore-nov":{problem:"Moore: the output depends on the state only, so it comes one clock later than in a Mealy machine.",tasks:["y = '1' for one clock after the final 1 was clocked in. Start again from scratch after.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore state machines and their extra state."},"vh-p4-moore-ov":{problem:"Moore and overlapping together.",tasks:["y = '1' for one clock after 101; the final 1 starts the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Moore machine."},"vh-d01-reg":{problem:"Store a byte when enable is high, the most basic piece of a CPU datapath. Write it the VHDL-2008 way.",tasks:["rst_n is asynchronous and active low; on a rising edge, q takes data only when enable = '1'.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Clocked processes, rising_edge, (others => '0') aggregates and VHDL-2008 conditions."},"vh-d02-mux":{problem:"One mux entity, any width: the CPU uses it as a 5-bit address mux. The testbench uses an 8-bit and a 1-bit instance.",tasks:["y = in_a when sel_a = '1', in_b when sel_a = '0'. Use process(all) and a case with others => all 'X'.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Generics, process(all) and case with others."},"vh-d03-cnt":{problem:"The CPU's program counter: it counts through the program, and loads a new address for a jump.",tasks:["5 bits: load has priority, then enable counts up; rst_n clears it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority in a clocked process, unsigned and wrap-around."},"vh-d04-ctrl":{problem:"The CPU's controller steps through 8 states for every instruction and decides which blocks act in each: fetch, decode, operand fetch, execute, store.",tasks:["Use the enumerated types from package cpu_pkg, the 'succ, 'high and 'low attributes for the sequence, and a process(all) with case for the outputs in the table in the comments.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packages, enumerated types and their attributes, and Mealy outputs."},"vh-d05-alu":{problem:"The CPU's ALU combines the accumulator with memory data. Its result is registered on the falling clock edge so it is ready for the accumulator on the next rising edge.",tasks:["Compute alu_out on falling_edge(clk) for the 8 opcodes; zero = '1' when accum is 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using package enumerations in a datapath, and both clock edges."},"vh-d06-memtb":{problem:"The memory is given. Write the testbench that proves it works, with reusable procedures.",tasks:["Write procedures write_mem and read_mem with a default debug parameter, and printstatus, then two tests. Then set BUG to true: your testbench must report FAIL.","Run: your testbench should print PASS, and FAIL once BUG is set.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Procedures with default parameters, out parameters, and driving on the inactive clock edge."},"vh-d07-struct":{problem:"A bus is many signals that always travel together. Bundling them in a record keeps every entity in agreement.",tasks:["Declare the record mem_req_t (read, write, addr, data) in package mem_pkg and write the memory using req.field names.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Records, packages, and record aggregates."},"vh-d08-cpu":{problem:"Put it all together: the register, mux, counter, controller, ALU and memory make a small CPU that runs programs.",tasks:["Instantiate and connect the seven blocks in entity cpu (all blocks are given above it). The testbench runs three programs: a basic test, a sum of 1 to 10, and Fibonacci up to 144.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a CPU from blocks, entity instantiation, and looking inside with VHDL-2008 external names."},"vh-d09-johnson":{problem:"A Johnson counter is a shift register whose inverted output feeds back: 2N states with only one bit changing at a time.",tasks:["Shift left and feed not q(N-1) into bit 0. The testbench checks N = 4 and N = 6.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shift-register counters sized by a generic."},"vh-d10-gen":{problem:"Hardware is often an array of identical blocks. A for-generate loop builds it for any size.",tasks:["Build rca from N full_adder instances with a for-generate loop. Do not use + in rca.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"for-generate, labels on generate blocks, and generics."},"vh-d11-dpram":{problem:"Two ports let one block write while another reads, for example a frame buffer or a FIFO memory.",tasks:["Port A writes and reads, port B reads. Both reads are synchronous; port A reads the old data when it writes the same address.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Memory arrays sized by generics, synchronous reads and read-before-write with signals."},"vh-d12-uart":{problem:"Send bytes over a single wire: a start bit, 8 data bits LSB first, a stop bit. The testbench decodes the line like a real receiver.",tasks:["Write the state machine with an enumerated type: IDLE, START_BIT, DATA_BITS, STOP_BIT. Each bit lasts CLKS_PER_BIT clocks.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Hints show where and what to write; Show solution loads one answer. Reset lab brings your starting point back."],learn:"Enumerated state machines with counters, and serial protocols."}},ln={"vh-p1-ha-df":[{type:"choice",q:"When is the carry of a half adder 1?",options:["When exactly one input is 1","When both inputs are 1","When both are 0","Never"],answer:1,explain:"carry = a and b.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"Which VHDL construct is dataflow style?",options:["A process","Concurrent signal assignments such as sum <= a xor b;","Component instances","A procedure"],answer:1,explain:"Concurrent assignments sit directly in the architecture body and update whenever an input changes.",try:!1}],"vh-p1-ha-bh":[{type:"choice",q:"When is the carry of a half adder 1?",options:["When exactly one input is 1","When both inputs are 1","When both are 0","Never"],answer:1,explain:"carry = a and b.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"Why does process(all) need no explicit sensitivity list?",options:["It runs once","VHDL-2008 makes it sensitive to every signal the process reads","It only runs on clock edges","It is a testbench construct"],answer:1,explain:"process(all) avoids missing a signal in the list, which would simulate like a latch.",try:!1}],"vh-p1-ha-st":[{type:"choice",q:"When is the carry of a half adder 1?",options:["When exactly one input is 1","When both inputs are 1","When both are 0","Never"],answer:1,explain:"carry = a and b.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"In 'g1: entity work.xor2 port map (a => a, b => b, y => sum);', what is on the left of each =>?",options:["The signal in this architecture","The port of the instantiated entity (the formal)","A generic","A label"],answer:1,explain:"Named association: formal => actual.",try:!1}],"vh-p1-fa-df":[{type:"choice",q:"When is the sum of a full adder 1?",options:["When an odd number of inputs are 1","When all inputs are 1 only","When two inputs are 1","Never"],answer:0,explain:"sum = a xor b xor cin.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"Which expression gives the carry out?",options:["a xor b xor cin","(a and b) or (cin and (a xor b))","a or b or cin","not (a and b)"],answer:1,explain:"Carry when both inputs are 1, or when one is 1 and the carry in is 1.",try:!1}],"vh-p1-fa-bh":[{type:"choice",q:"When is the sum of a full adder 1?",options:["When an odd number of inputs are 1","When all inputs are 1 only","When two inputs are 1","Never"],answer:0,explain:"sum = a xor b xor cin.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"Inside a process, when does a signal assignment such as s <= x take effect?",options:["Immediately, on the next line","At the end of the process run (after a delta cycle)","At the next clock edge","Never"],answer:1,explain:"Signals update after the process suspends; use variables for values needed at once.",try:!1}],"vh-p1-fa-st":[{type:"choice",q:"When is the sum of a full adder 1?",options:["When an odd number of inputs are 1","When all inputs are 1 only","When two inputs are 1","Never"],answer:0,explain:"sum = a xor b xor cin.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"number",q:"How many half_adder instances does the structural full adder use?",answer:2,tol:0,unit:"",explain:"Two half adders and an OR gate.",try:!1}],"vh-p1-ops":[{type:"choice",q:"Why are the ports of operators declared unsigned and not std_logic_vector?",options:["unsigned is faster","numeric_std defines +, -, * and comparisons for unsigned; std_logic_vector is just bits","std_logic_vector cannot be a port","No reason"],answer:1,explain:"Use unsigned or signed when the bits are a number.",try:!1},{type:"choice",q:"What does the & operator do in VHDL?",options:["Logical AND","Concatenation","Address-of","Bitwise XOR"],answer:1,explain:"AND is the keyword and; & joins vectors.",try:!1},{type:"choice",q:"Which function shifts an unsigned value left by n places?",options:["sll only","shift_left(x, n)","x << n","rotate(x)"],answer:1,explain:"numeric_std provides shift_left and shift_right (sll/srl also work in VHDL-2008).",try:!1}],"vh-p1-c2f":[{type:"choice",q:"Where is the procedure c_to_f declared?",options:["In the testbench","In package temperature, so any design unit can use it","In the entity","In std.textio"],answer:1,explain:"Packages hold shared types, constants, functions and procedures.",try:!1},{type:"number",q:"What is 100 \xB0C in \xB0F?",answer:212,tol:0,unit:"",explain:"100 \xD7 9 / 5 + 32.",try:!1},{type:"choice",q:"How does a procedure return its result?",options:["With return","Through out (or inout) parameters","Through a global signal","It cannot"],answer:1,explain:"Functions return one value; procedures write out parameters.",try:!1}],"vh-p2-add4":[{type:"number",q:"How many input combinations does an exhaustive test of a 4-bit adder with carry in need?",answer:512,tol:0,unit:"",explain:"2^4 \xD7 2^4 \xD7 2.",try:!1},{type:"choice",q:"How do you get the carry out of a 4-bit unsigned addition?",options:["It is lost","Resize the operands to 5 bits first, then take bit 4 of the sum","Use a + b + 1","Use signed"],answer:1,explain:"unsigned + unsigned keeps the width of the larger operand, so widen first.",try:!1},{type:"number",q:"What is the largest sum a 4-bit adder with carry in can produce?",answer:31,tol:0,unit:"",explain:"15 + 15 + 1.",try:!1}],"vh-p2-mux2":[{type:"choice",q:"Where can a when-else conditional assignment be used?",options:["Only inside a process","As a concurrent statement, and in VHDL-2008 inside processes too","Only in testbenches","Only in packages"],answer:1,explain:"VHDL-2008 allows conditional assignments in sequential code as well.",try:!1},{type:"choice",q:"y <= a when sel = '0' else b; what is y when sel = 'X'?",options:["a","b","X"],answer:1,explain:"sel = '0' is false for 'X', so the else branch is taken.",try:!1},{type:"number",q:"How many data inputs does a 2:1 mux have?",answer:2,tol:0,unit:"",explain:"Plus one select.",try:!1}],"vh-p2-mux4":[{type:"choice",q:"Why does with-select need 'when others'?",options:["Style only",'sel is std_logic_vector: values such as "XX" or "Z1" must be covered too',"For speed","To make it clocked"],answer:1,explain:"Every possible value of the selector must be covered.",try:!1},{type:"number",q:"How many select bits does a 4:1 mux need?",answer:2,tol:0,unit:"",explain:"2^2 = 4.",try:!1},{type:"choice",q:"with-select is the concurrent form of which sequential statement?",options:["if/elsif","case","loop","wait"],answer:1,explain:"A selected assignment behaves like a case.",try:!1}],"vh-p2-dec24":[{type:"number",q:"How many outputs are 1 at a time while enabled?",answer:1,tol:0,unit:"",explain:"One-hot outputs.",try:!1},{type:"number",q:"How many outputs does a 3-to-8 decoder have?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1},{type:"choice",q:"What is a common use of a decoder?",options:["Adding numbers","Selecting one of several memory banks or registers from an address","Storing a bit","Dividing a clock"],answer:1,explain:"",try:!1}],"vh-p2-enc42":[{type:"choice",q:"What does a plain 4-to-2 encoder assume about its input?",options:["Any value","Exactly one bit is 1","All bits are 1","It is a clock"],answer:1,explain:"Without priority, several active bits give a meaningless code.",try:!1},{type:"number",q:'For input "0100" (bit 2 set), what code comes out?',answer:2,tol:0,unit:"",explain:"The index of the active bit.",try:!1},{type:"choice",q:"What is the inverse of an encoder?",options:["A multiplexer","A decoder","An adder","A latch"],answer:1,explain:"",try:!1}],"vh-p2-penc42":[{type:"choice",q:'For input "0110", which bit wins in a priority encoder that favours the highest bit?',options:["Bit 1","Bit 2","Both","Neither"],answer:1,explain:"The highest active bit wins.",try:!1},{type:"choice",q:"Why does an if/elsif chain express priority?",options:["It is evaluated in order: the first true condition wins","It runs in parallel","It is clocked","It is random"],answer:0,explain:"",try:!1},{type:"choice",q:"What does the valid output tell you?",options:["The clock is running","At least one input bit is 1","The output is even","Reset is active"],answer:1,explain:"With all inputs 0, the code means nothing.",try:!1}],"vh-p2-cmp4":[{type:"number",q:"How many of gt, eq and lt are 1 at the same time?",answer:1,tol:0,unit:"",explain:"Exactly one.",try:!1},{type:"choice",q:"Why compare unsigned(a) > unsigned(b) and not a > b on std_logic_vector?",options:["It is the same","On std_logic_vector the comparison is not numeric by default; unsigned makes the meaning explicit","std_logic_vector cannot be compared","To save area"],answer:1,explain:"Always convert to unsigned or signed for numeric comparisons.",try:!1},{type:"number",q:"How many input pairs does an exhaustive test of a 4-bit comparator check?",answer:256,tol:0,unit:"",explain:"16 \xD7 16.",try:!1}],"vh-p2-bshift8":[{type:"choice",q:"What is a barrel shifter?",options:["A shift register","Combinational logic that shifts by any amount in one step","A counter","A memory"],answer:1,explain:"",try:!1},{type:"number",q:"How many bits of shift amount does an 8-bit barrel shifter need?",answer:3,tol:0,unit:"",explain:"0 to 7 places.",try:!1},{type:"choice",q:"Which numeric_std functions shift unsigned values?",options:["shift_left and shift_right","<< and >>","rol and ror only","There are none"],answer:0,explain:"",try:!1}],"vh-p2-alu":[{type:"choice",q:"Why does the ALU use a case on op with 'when others'?",options:["For speed","op is std_logic_vector: the metavalues must be covered too","To make a latch","It is optional"],answer:1,explain:"",try:!1},{type:"choice",q:"How is the zero flag computed?",options:["y = 0 (all result bits are 0)","carry = 0","op = 0","a = b"],answer:0,explain:"",try:!1},{type:"number",q:"How many operations does the ALU have?",answer:8,tol:0,unit:"",explain:"op is 3 bits.",try:!1}],"vh-p3-dlatch":[{type:"choice",q:"Why does 'if en = '1' then q <= d; end if;' in process(all) make a latch?",options:["Because of process(all)","With en = '0' q is not assigned, so it keeps its value","Because d is std_logic","It does not"],answer:1,explain:"A missing else in combinational code holds the old value: a latch.",try:!1},{type:"choice",q:"While en = '1', what is q?",options:["The value d had at the last edge","d itself: the latch is transparent","0","U"],answer:1,explain:"",try:!1},{type:"choice",q:"Are latches usually wanted in synchronous designs?",options:["Yes, always","Rarely: an unintended latch is a common bug"],answer:1,explain:"Synthesis tools warn about inferred latches.",try:!1}],"vh-p3-dlatch-rst":[{type:"choice",q:"Which wins when rst = '1' and en = '1'?",options:["en","rst","Neither"],answer:1,explain:"The reset is tested first.",try:!1},{type:"choice",q:"Does the reset wait for en?",options:["Yes","No: it clears q at once"],answer:1,explain:"",try:!1},{type:"number",q:"What value does q take during reset?",answer:0,tol:0,unit:"",explain:"",try:!1}],"vh-p3-dff":[{type:"choice",q:"What makes a process a flip-flop?",options:["process(all)","Testing rising_edge(clk) (or falling_edge) before assigning","Using a variable","Using std_logic"],answer:1,explain:"Assignments under a clock-edge condition create registers.",try:!1},{type:"choice",q:"What is the difference between rising_edge(clk) and clk'event and clk = '1'?",options:["None at all","rising_edge only accepts a real '0' to '1' change, not 'X' to '1' or 'U' to '1'","rising_edge is slower","rising_edge is not synthesizable"],answer:1,explain:"rising_edge is the safer modern form.",try:!1},{type:"choice",q:"Between clock edges, d changes. What does q do?",options:["Follows d","Keeps its value until the next rising edge","Goes to X"],answer:1,explain:"",try:!1}],"vh-p3-dff-arh":[{type:"choice",q:"What makes a process a flip-flop?",options:["process(all)","Testing rising_edge(clk) (or falling_edge) before assigning","Using a variable","Using std_logic"],answer:1,explain:"Assignments under a clock-edge condition create registers.",try:!1},{type:"choice",q:"Why is the reset in the sensitivity list of an asynchronous-reset flop?",options:["Style","So the process wakes up when the reset changes, without waiting for the clock","Synthesis requires every input in the list","It is a synchronous reset"],answer:1,explain:"The reset is tested before the clock edge.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["At the next rising clock edge","Immediately","Never","At the falling edge"],answer:1,explain:"Asynchronous.",try:!1}],"vh-p3-dff-neg-arh":[{type:"choice",q:"Why is the reset in the sensitivity list of an asynchronous-reset flop?",options:["Style","So the process wakes up when the reset changes, without waiting for the clock","Synthesis requires every input in the list","It is a synchronous reset"],answer:1,explain:"The reset is tested before the clock edge.",try:!1},{type:"choice",q:"When does this flop sample d?",options:["Rising edge of clk","Falling edge of clk","Both edges","When rst falls"],answer:1,explain:"falling_edge(clk).",try:!1},{type:"choice",q:"Where are falling-edge flops typically used?",options:["Everywhere","Half-cycle paths, such as DDR interfaces that use both edges","Only in FPGAs","For resets"],answer:1,explain:"They give half a clock period between rising and falling edge logic.",try:!1}],"vh-p3-dff-arl":[{type:"choice",q:"Why is the reset in the sensitivity list of an asynchronous-reset flop?",options:["Style","So the process wakes up when the reset changes, without waiting for the clock","Synthesis requires every input in the list","It is a synchronous reset"],answer:1,explain:"The reset is tested before the clock edge.",try:!1},{type:"choice",q:"rst_n = '0' means\u2026",options:["Normal operation","Reset is active"],answer:1,explain:"_n marks an active-low signal.",try:!1},{type:"choice",q:"Which condition tests the reset?",options:["if rst_n = '1'","if rst_n = '0'","if rising_edge(rst_n)"],answer:1,explain:"",try:!1}],"vh-p3-dff-ash":[{type:"choice",q:"Why is the reset in the sensitivity list of an asynchronous-reset flop?",options:["Style","So the process wakes up when the reset changes, without waiting for the clock","Synthesis requires every input in the list","It is a synchronous reset"],answer:1,explain:"The reset is tested before the clock edge.",try:!1},{type:"number",q:"What value does q take while set = '1'?",answer:1,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why might a register need a set instead of a reset?",options:["It never does","Some registers must start at 1, for example an active-low enable or a one-hot state bit","For speed"],answer:1,explain:"",try:!1}],"vh-p3-dff-srh":[{type:"choice",q:"Why is only clk in the sensitivity list?",options:["A mistake","The reset is synchronous: it only matters at a clock edge","To save power"],answer:1,explain:"",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["Immediately","At the next rising clock edge"],answer:1,explain:"",try:!1},{type:"choice",q:"Where is the reset tested?",options:["Before rising_edge(clk)","Inside the rising_edge(clk) branch"],answer:1,explain:"That is what makes it synchronous.",try:!1}],"vh-p3-dff-srl":[{type:"choice",q:"rst_n = '0' between clock edges: what happens?",options:["q clears at once","Nothing until the next rising edge, then q clears"],answer:1,explain:"",try:!1},{type:"choice",q:"Does a synchronous reset need the clock to be running?",options:["No","Yes"],answer:1,explain:"A drawback of synchronous resets.",try:!1},{type:"number",q:"How many signals are in the sensitivity list?",answer:1,tol:0,unit:"",explain:"Only clk.",try:!1}],"vh-p3-dff-srs":[{type:"choice",q:"rst = '1' and set = '1' at the same edge: what is q?",options:["1","0","X"],answer:1,explain:"Reset has priority.",try:!1},{type:"choice",q:"How does the code give reset priority?",options:["It is tested first in the if/elsif chain","Alphabetical order","Using a variable"],answer:0,explain:"",try:!1},{type:"choice",q:"Are these controls synchronous or asynchronous?",options:["Synchronous","Asynchronous"],answer:0,explain:"Both are tested inside the clock-edge branch.",try:!1}],"vh-p3-sync-async":[{type:"choice",q:"Which output clears first when rst rises between clock edges?",options:["q_sync","q_async"],answer:1,explain:"Look at the waveform.",try:!1},{type:"choice",q:"Why are there two processes?",options:["One per register: they have different sensitivity lists","It is required for two outputs","For speed"],answer:0,explain:"",try:!1},{type:"choice",q:"What risk comes with releasing an asynchronous reset near a clock edge?",options:["None","Recovery/removal timing violations: flops may leave reset on different cycles"],answer:1,explain:"That is why reset release is synchronized.",try:!1}],"vh-p3-twin":[{type:"number",q:"How many flip-flops does twin_reg8 contain?",answer:16,tol:0,unit:"",explain:"Two 8-bit registers.",try:!1},{type:"choice",q:"load_a = '1' and load_b = '1' on the same edge: what happens?",options:["Only qa loads","Both qa and qb load d","Neither loads"],answer:1,explain:"",try:!1},{type:"choice",q:"What does (others => '0') mean?",options:["Every element of the vector gets '0'","Only bit 0 is '0'","An error"],answer:0,explain:"An aggregate that fits any width.",try:!1}],"vh-p4-sr5":[{type:"choice",q:"What does sin & r(4 downto 1) build?",options:["A 6-bit vector","A 5-bit vector: sin on the left (bit 4), then bits 4 to 1","An AND of sin and r"],answer:1,explain:"",try:!1},{type:"number",q:"After how many clocks does a bit entering at sin reach bit 0?",answer:5,tol:0,unit:"",explain:"One place per clock, five bits.",try:!1},{type:"choice",q:"Why keep the value in an internal signal r?",options:["VHDL-2008 can read out ports too; an internal signal is a common, portable style","Out ports can never be read","For speed"],answer:0,explain:"",try:!1}],"vh-p4-usr5":[{type:"number",q:"How many modes does the universal shift register have?",answer:4,tol:0,unit:"",explain:"Hold, shift right, shift left, load.",try:!1},{type:"choice",q:`What does 'when others => null;' do in mode "00"?`,options:["Clears the register","Nothing: the register holds its value","Loads d"],answer:1,explain:"",try:!1},{type:"choice",q:"In shift left, where does sl_in enter?",options:["Bit 4","Bit 0"],answer:1,explain:"",try:!1}],"vh-p4-cnt":[{type:"number",q:"What value comes after 15?",answer:0,tol:0,unit:"",explain:"A 4-bit counter wraps.",try:!1},{type:"choice",q:"Why count in unsigned and not std_logic_vector?",options:["numeric_std defines + for unsigned; std_logic_vector is just bits","unsigned is smaller","std_logic_vector cannot be stored"],answer:0,explain:"",try:!1},{type:"choice",q:"How is the count converted for the output port?",options:["to_integer(cnt)","std_logic_vector(cnt)","cnt'image"],answer:1,explain:"A type conversion between closely related array types.",try:!1}],"vh-p4-cnt-tb":[{type:"choice",q:"What makes your testbench self-checking?",options:["It dumps a waveform","It keeps an expected value and compares q with it every cycle","It prints q"],answer:1,explain:"",try:!1},{type:"choice",q:"Which procedure ends the simulation?",options:["stop","std.env.finish","halt","exit"],answer:1,explain:"VHDL-2008 package std.env.",try:!1},{type:"choice",q:"With BUG = 1, after which value does the broken counter go wrong?",options:["9","15","0"],answer:0,explain:"It wraps from 9 to 0.",try:!1}],"vh-p4-cnt-load":[{type:"choice",q:"load = '1' on an edge: what is q after it?",options:["q + 1","d","0"],answer:1,explain:"Load has priority over counting.",try:!1},{type:"choice",q:"How do you load a std_logic_vector d into an unsigned counter?",options:["cnt <= d;","cnt <= unsigned(d);","cnt <= to_unsigned(d);"],answer:1,explain:"",try:!1},{type:"number",q:"How many bits is the counter?",answer:4,tol:0,unit:"",explain:"",try:!1}],"vh-p4-updown":[{type:"number",q:"Counting down from 0, what comes next?",answer:15,tol:0,unit:"",explain:"It wraps.",try:!1},{type:"choice",q:"What does cnt - 1 do when cnt is 0 (unsigned, 4 bits)?",options:["An error","Wraps to 15","Saturates at 0"],answer:1,explain:"unsigned arithmetic is modulo 2^width.",try:!1},{type:"choice",q:"What could an up/down counter track?",options:["The fill level of a FIFO","A clock frequency","A reset"],answer:0,explain:"",try:!1}],"vh-p4-mod":[{type:"number",q:"How many states does the N = 10 counter go through?",answer:10,tol:0,unit:"",explain:"0 to 9.",try:!1},{type:"number",q:"What is the largest value the N = 6 copy reaches?",answer:5,tol:0,unit:"",explain:"0 to N-1.",try:!1},{type:"choice",q:"How does the testbench build the N = 6 copy?",options:["A second entity","generic map (N => 6) on a second instance","A constant"],answer:1,explain:"",try:!1}],"vh-p4-range":[{type:"number",q:"What is q right after reset (LOW = 3)?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many values does the LOW = 3, HIGH = 12 counter go through?",answer:10,tol:0,unit:"",explain:"3 to 12.",try:!1},{type:"choice",q:"Why compare cnt = HIGH and not cnt = 12?",options:["Style","So the same entity works for any generic values"],answer:1,explain:"",try:!1}],"vh-p4-range-udl":[{type:"choice",q:"Counting down from LOW, what comes next?",options:["LOW - 1","HIGH","0"],answer:1,explain:"",try:!1},{type:"choice",q:"load = '1' and up = '1' on the same edge: what wins?",options:["up","load"],answer:1,explain:"",try:!1},{type:"number",q:"With LOW = 3 and HIGH = 12, counting up from 12, what comes next?",answer:3,tol:0,unit:"",explain:"",try:!1}],"vh-p4-div2":[{type:"number",q:"With a 10 ns clk, what is the clk_out period in ns?",answer:20,tol:0,unit:"ns",explain:"",try:!1},{type:"choice",q:"What does t <= not t do on every rising edge?",options:["Divides by 2","Doubles the frequency","Nothing"],answer:0,explain:"A toggle flip-flop.",try:!1},{type:"choice",q:"Should clk_out from a flop drive other flops' clocks in an FPGA?",options:["Always fine","Prefer a clock enable or a clock resource: logic-generated clocks add skew"],answer:1,explain:"",try:!1}],"vh-p4-div4":[{type:"number",q:"With a 10 ns clk, what is the clk_out period in ns?",answer:40,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"Which counter bit gives clk / 4?",answer:1,tol:0,unit:"",explain:"Bit 0 is clk / 2, bit 1 is clk / 4.",try:!1},{type:"choice",q:"Is the duty cycle 50%?",options:["Yes","No"],answer:0,explain:"",try:!1}],"vh-p4-div3":[{type:"number",q:"With a 10 ns clk, what is the clk_out period in ns?",answer:30,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"For how many ns is clk_out high in each period?",answer:15,tol:0,unit:"ns",explain:"1.5 clk periods.",try:!1},{type:"choice",q:"Why is a falling_edge flop needed?",options:["To get half-period resolution, so the high time can be 1.5 clocks","To save power","It is not needed"],answer:0,explain:"",try:!1}],"vh-p4-fifo":[{type:"number",q:"How many words does the FIFO hold?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"How is the memory declared?",options:["As a variable","As a signal of an array type: type mem_t is array (0 to 7) of std_logic_vector(7 downto 0)","As a record"],answer:1,explain:"",try:!1},{type:"choice",q:"A write while full: what happens?",options:["It overwrites the oldest word","It is ignored"],answer:1,explain:"",try:!1}],"vh-p4-afifo":[{type:"choice",q:"Why are the pointers Gray coded before they cross clock domains?",options:["To save flops","Only one bit changes per step, so a synchronizer never sees a mixed old/new value","For speed"],answer:1,explain:"",try:!1},{type:"number",q:"How many bits are the pointers for an 8-word FIFO?",answer:4,tol:0,unit:"",explain:"3 address bits plus one wrap bit.",try:!1},{type:"choice",q:"Which flag is computed in the write clock domain?",options:["rempty","wfull"],answer:1,explain:"Each side computes its own flag from the synchronized pointer of the other side.",try:!1}],"vh-p4-mealy-nov":[{type:"choice",q:"Why declare the states as an enumerated type?",options:["The waveform and 'image show state names, and the tool chooses the encoding","It is required","It makes the FSM faster"],answer:0,explain:"",try:!1},{type:"number",q:"How many states does the non-overlapping Mealy 101 detector need?",answer:3,tol:0,unit:"",explain:"S0, S1, S10.",try:!1},{type:"choice",q:"When is y = '1'?",options:["One clock after the final 1","While x is the final 1, in state S10"],answer:1,explain:"Mealy outputs depend on the input.",try:!1}],"vh-p4-mealy-ov":[{type:"choice",q:"Why declare the states as an enumerated type?",options:["The waveform and 'image show state names, and the tool chooses the encoding","It is required","It makes the FSM faster"],answer:0,explain:"",try:!1},{type:"choice",q:"After a detection, which state comes next?",options:["S0","S1: the final 1 starts the next pattern"],answer:1,explain:"",try:!1},{type:"number",q:"How many detections does 10101 give?",answer:2,tol:0,unit:"",explain:"",try:!1}],"vh-p4-moore-nov":[{type:"choice",q:"Why declare the states as an enumerated type?",options:["The waveform and 'image show state names, and the tool chooses the encoding","It is required","It makes the FSM faster"],answer:0,explain:"",try:!1},{type:"number",q:"How many states does the Moore 101 detector need?",answer:4,tol:0,unit:"",explain:"Moore needs S101 to hold the output.",try:!1},{type:"choice",q:"Compared with the Mealy detector, y comes\u2026",options:["One clock earlier","One clock later","At the same time"],answer:1,explain:"",try:!1}],"vh-p4-moore-ov":[{type:"choice",q:"Why declare the states as an enumerated type?",options:["The waveform and 'image show state names, and the tool chooses the encoding","It is required","It makes the FSM faster"],answer:0,explain:"",try:!1},{type:"choice",q:"From S101 with x = '0', which state is next?",options:["S0","S10"],answer:1,explain:"The final 1 and this 0 make 10.",try:!1},{type:"number",q:"How many detections does 10101 give?",answer:2,tol:0,unit:"",explain:"",try:!1}],"vh-d01-reg":[{type:"choice",q:"enable = '0' at a clock edge: what does q do?",options:["Clears","Holds its value","Loads data"],answer:1,explain:"",try:!1},{type:"choice",q:"What does (others => '0') do in the reset branch?",options:["Clears every bit, whatever the width","Clears bit 0","Nothing"],answer:0,explain:"",try:!1},{type:"number",q:"How many cycles does the testbench check?",answer:200,tol:0,unit:"",explain:"",try:!1}],"vh-d02-mux":[{type:"choice",q:"How does the testbench build an 8-bit mux from the same entity?",options:["A second entity","generic map (WIDTH => 8)","A package"],answer:1,explain:"",try:!1},{type:"choice",q:"What does y show when sel_a = 'X'?",options:["in_a","in_b","All X"],answer:2,explain:"The when others branch.",try:!1},{type:"choice",q:"Which VHDL-2008 feature makes the process sensitive to every input?",options:["process(all)","wait on","sensitivity(*)"],answer:0,explain:"",try:!1}],"vh-d03-cnt":[{type:"number",q:"What comes after 31?",answer:0,tol:0,unit:"",explain:"5 bits wrap.",try:!1},{type:"choice",q:"load = '1' and enable = '1': what happens?",options:["Count up","Load data","Hold"],answer:1,explain:"Load has priority.",try:!1},{type:"choice",q:"Which CPU block is this counter?",options:["The accumulator","The program counter","The ALU"],answer:1,explain:"",try:!1}],"vh-d04-ctrl":[{type:"number",q:"How many states does the controller go through for each instruction?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does state_t'succ(state) give?",options:["The previous state","The next value of the enumerated type","The first state"],answer:1,explain:"'high is the last value, 'low the first.",try:!1},{type:"choice",q:"In which state is halt raised for a HLT instruction?",options:["INST_ADDR","OP_ADDR","STORE"],answer:1,explain:"",try:!1}],"vh-d05-alu":[{type:"choice",q:"On which clock edge is alu_out registered?",options:["Rising","Falling"],answer:1,explain:"So it is ready for the accumulator on the next rising edge.",try:!1},{type:"choice",q:"Why are the opcodes named OP_AND and OP_XOR, not AND and XOR?",options:["Style","and and xor are VHDL reserved words"],answer:1,explain:"",try:!1},{type:"number",q:"How many opcodes are there?",answer:8,tol:0,unit:"",explain:"",try:!1}],"vh-d06-memtb":[{type:"choice",q:"Why drive the memory inputs after the falling edge?",options:["It is faster","They are stable well before the rising edge where the memory samples them: no race","It is required by VHDL"],answer:1,explain:"",try:!1},{type:"choice",q:"How does read_mem return the data?",options:["With return","Through an out parameter","Through a global"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = true, which addresses go wrong?",options:["None","Addresses 16 to 31 (bit 4 is lost on writes)","Only address 0"],answer:1,explain:"",try:!1}],"vh-d07-struct":[{type:"number",q:"How many fields does mem_req_t have?",answer:4,tol:0,unit:"",explain:"read, write, addr, data.",try:!1},{type:"choice",q:"How does the testbench set all fields at once?",options:["One assignment per field only","A record aggregate: (read => '0', write => '1', addr => \u2026, data => \u2026)"],answer:1,explain:"",try:!1},{type:"choice",q:"What does VHDL-2019 add for bundling buses with directions?",options:["Interfaces with mode views","Nothing","Structs"],answer:0,explain:"Records carry one direction; mode views add in/out per field.",try:!1}],"vh-d08-cpu":[{type:"number",q:"How many bits is the address field of an instruction?",answer:5,tol:0,unit:"",explain:"opcode (7..5) & address (4..0): 32 memory words.",try:!1},{type:"number",q:"What does Program 2 leave in memory(1D)?",answer:55,tol:0,unit:"",explain:"1 + 2 + \u2026 + 10.",try:!1},{type:"number",q:"What does Program 3 leave in memory(1D)?",answer:144,tol:0,unit:"",explain:"The Fibonacci number it stops at.",try:!1},{type:"choice",q:"How does the testbench read the CPU's memory?",options:["Through a port","With a VHDL-2008 external name: << signal .tb.cpu1.mem1.memory : mem_t >>"],answer:1,explain:"",try:!1}],"vh-d09-johnson":[{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What comes after 0111?",options:["1111","1110","0000","1000"],answer:0,explain:"Shift left and bring in not q(3) = '1'.",try:!1},{type:"number",q:"How many bits change between two neighbouring states?",answer:1,tol:0,unit:"",explain:"That is why Johnson counters decode without glitches.",try:!1}],"vh-d10-gen":[{type:"number",q:"How many full_adder instances does rca with N = 12 contain?",answer:12,tol:0,unit:"",explain:"One per bit.",try:!1},{type:"choice",q:"Why does a for-generate need a label (stage:)?",options:["It is decoration","VHDL requires it; it also names each copy, such as stage(3).fa"],answer:1,explain:"",try:!1},{type:"choice",q:"Where does the carry chain start?",options:["c(0) <= cin","c(N) <= cin"],answer:0,explain:"",try:!1}],"vh-d11-dpram":[{type:"number",q:"How many words does dpram hold with AW = 4?",answer:16,tol:0,unit:"",explain:"2^4.",try:!1},{type:"choice",q:"Port A writes address 5 with new data. What does dout_a show on that edge?",options:["The new data","The old data (read-before-write)","X"],answer:1,explain:"Signals update after the process runs, so the read sees the old value.",try:!1},{type:"choice",q:"Can port B read while port A writes?",options:["No","Yes: that is the point of a dual-port RAM"],answer:1,explain:"",try:!1}],"vh-d12-uart":[{type:"number",q:"How many bits does one byte take on the line (start + data + stop)?",answer:10,tol:0,unit:"",explain:"1 + 8 + 1.",try:!1},{type:"number",q:"With CLKS_PER_BIT = 4 and a 10 ns clock, how long does one byte take?",answer:400,tol:0,unit:"ns",explain:"10 bits \xD7 4 clocks \xD7 10 ns.",try:!1},{type:"choice",q:"Which data bit is sent first?",options:["data(7)","data(0)"],answer:1,explain:"UARTs send LSB first.",try:!1}]};function cn(t){return/[uwlh-]/i.test(t)?t.toLowerCase().replace(/[uw-]/g,"x").replace(/l/g,"0").replace(/h/g,"1"):t.toLowerCase()}function un(t){let e=[],n=new Map,i=[],s="",r=0,o=t.split(/\s+/),a=!0,g=0,l=0;for(;r<o.length;){let d=o[r++];if(!d)continue;if(a){if(d==="$scope"){for(r++,i.push(o[r++]);o[r]!=="$end";)r++;r++}else if(d==="$upscope"){for(i.pop();o[r]!=="$end";)r++;r++}else if(d==="$timescale"){let f=[];for(;o[r]!=="$end";)f.push(o[r++]);r++,s=f.join("")}else if(d==="$var"){let f=o[r++],m=parseInt(o[r++],10),h=o[r++],y=[];for(;o[r]!=="$end";)y.push(o[r++]);r++;let k=y[0];y[1]&&y[1].startsWith("[")&&(k+=y[1]);let S=[...i,k].join(".");if(f==="parameter")continue;if(n.has(h)){n.get(h).aliases.push(S);continue}let q=[...i.slice(1),k].join("."),E={id:h,name:S,short:q||k,depth:i.length,width:m,type:f,changes:[],aliases:[]};n.set(h,E),e.push(E)}else if(d==="$enddefinitions"){for(;o[r]!=="$end";)r++;r++,a=!1}else if(d.startsWith("$")){for(;r<o.length&&o[r]!=="$end";)r++;r++}continue}let u=d[0];if(u==="#")g=Number(d.slice(1)),g>l&&(l=g);else if(u!=="$")if(u==="b"||u==="B"||u==="r"||u==="R"){let f=d.slice(1),m=o[r++],h=n.get(m);h&&Re(h,g,u==="r"||u==="R"?Number(f):cn(f))}else if(u==="s"||u==="S"){let f=o[r++],m=n.get(f);m&&Re(m,g,{str:d.slice(1)})}else{let f=n.get(d.slice(1));f&&Re(f,g,cn(u))}}return{signals:e,timescale:s,endTime:l}}function Re(t,e,n){let i=t.changes;i.length&&i[i.length-1][0]===e?i[i.length-1][1]=n:(!i.length||i[i.length-1][1]!==n)&&i.push([e,n])}function pn(t,e){let n=t.changes,i=0,s=n.length-1,r=-1;for(;i<=s;){let o=i+s>>1;n[o][0]<=e?(r=o,i=o+1):s=o-1}return r<0?null:n[r][1]}function Fe(t,e,n){if(e==null)return"";if(typeof e=="number")return String(+e.toPrecision(6));if(typeof e=="object")return e.str;if(t.width===1)return e;let i=e.padStart(t.width,e[0]==="x"||e[0]==="z"?e[0]:"0");if(/[xz]/i.test(i))return/^x+$/i.test(i)?"x":/^z+$/i.test(i)?"z":n==="bin"?i:"x";if(n==="bin")return i;let s=BigInt("0b"+i);if(n==="dec")return s.toString(10);if(n==="sdec"){let r=BigInt(t.width);return(i[0]==="1"?s-(1n<<r):s).toString(10)}return s.toString(16).toUpperCase().padStart(Math.ceil(t.width/4),"0")}var he=class{constructor(e,n){this.c=e,this.ctx=e.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=n.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=n.theme,e.addEventListener("mousedown",i=>this.click(i)),e.addEventListener("wheel",i=>this.wheel(i),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(e.parentElement)}setData(e){this.data=e,this.cursor=null,this.t0=0,this.t1=Math.max(1,e.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(e,n){if(!this.data)return;let i=this.t1-this.t0,s=n??this.cursor??this.t0+i/2,r=Math.min(Math.max(i*e,2),Math.max(1,this.data.endTime)*1.05),o=s-(s-this.t0)*(r/i);o=Math.max(0,Math.min(o,Math.max(0,this.data.endTime-r))),this.t0=o,this.t1=o+r,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(e){if(!this.data)return;let n=this.t1-this.t0,i=this.t0+n*e;i=Math.max(0,Math.min(i,Math.max(0,this.data.endTime-n))),this.t0=i,this.t1=i+n,this.draw()}xOf(e,n){return this.nameW+(e-this.t0)/(this.t1-this.t0)*(n-this.nameW-8)}tOf(e,n){return this.t0+(e-this.nameW)/(n-this.nameW-8)*(this.t1-this.t0)}click(e){if(!this.data)return;let n=this.c.getBoundingClientRect(),i=e.clientX-n.left;i<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(i,n.width))),this.draw(),this.onCursor(this.cursor))}wheel(e){if(!this.data)return;let n=this.c.getBoundingClientRect();e.ctrlKey||e.metaKey||Math.abs(e.deltaY)>Math.abs(e.deltaX)&&e.shiftKey===!1&&e.altKey?(e.preventDefault(),this.zoom(e.deltaY>0?1.25:.8,this.tOf(e.clientX-n.left,n.width))):(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey)&&(e.preventDefault(),this.pan((e.deltaX||e.deltaY)/600))}draw(){let e=this.theme(),i=this.c.parentElement.clientWidth;this.nameW=i<640?112:190;let s=this.data?this.data.signals:[],r=this.axisH+Math.max(s.length,3)*this.rowH+8,o=window.devicePixelRatio||1;this.c.style.width=i+"px",this.c.style.height=r+"px",this.c.width=Math.round(i*o),this.c.height=Math.round(r*o);let a=this.ctx;if(a.setTransform(o,0,0,o,0,0),a.fillStyle=e.bg,a.fillRect(0,0,i,r),a.font="12px 'JetBrains Mono', ui-monospace, monospace",a.textBaseline="middle",!this.data){a.fillStyle=e.muted,a.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,r/2);return}let g=this.t1-this.t0,l=(i-this.nameW)/110,d=g/Math.max(1,l),u=Math.pow(10,Math.floor(Math.log10(d))),f=[1,2,5,10].map(m=>m*u).find(m=>m>=d)||u*10;a.strokeStyle=e.grid,a.fillStyle=e.muted,a.lineWidth=1;for(let m=Math.ceil(this.t0/f)*f;m<=this.t1;m+=f){let h=Math.round(this.xOf(m,i))+.5;a.beginPath(),a.moveTo(h,this.axisH-6),a.lineTo(h,r),a.stroke(),a.fillText(qe(m,this.data.timescale),h+3,11)}if(a.strokeStyle=e.line,a.beginPath(),a.moveTo(0,this.axisH+.5),a.lineTo(i,this.axisH+.5),a.stroke(),s.forEach((m,h)=>{let y=this.axisH+h*this.rowH,k=y+6,S=y+this.rowH-6,q=(k+S)/2;a.fillStyle=h%2?e.rowAlt:e.bg,a.fillRect(0,y+1,i,this.rowH-1),a.fillStyle=e.text;let E=m.short+(m.width>1&&!m.short.includes("[")?` [${m.width-1}:0]`:"");if(a.fillText(gn(a,E,this.nameW-16),10,q),a.save(),a.beginPath(),a.rect(this.nameW,y,i-this.nameW,this.rowH),a.clip(),m.kind==="assert"){this.drawAssert(a,m,i,k,S,q,e),a.restore();return}let F=m.changes;for(let L=0;L<F.length;L++){let M=F[L][0],V=L+1<F.length?F[L+1][0]:this.data.endTime;if(V<this.t0||M>this.t1)continue;let D=this.xOf(M,i),A=this.xOf(V,i),O=F[L][1];if(m.width===1&&typeof O=="string"){let W=O==="x"?e.x:O==="z"?e.z:e.wave;a.strokeStyle=W,a.lineWidth=1.5,O==="x"&&(a.fillStyle=e.xFill,a.fillRect(D,k,A-D,S-k));let Q=O==="1"?k:O==="0"?S:q;if(a.beginPath(),L>0){let C=F[L-1][1],re=C==="1"?k:C==="0"?S:q;a.moveTo(D,re)}else a.moveTo(D,Q);a.lineTo(D,Q),a.lineTo(A,Q),a.stroke()}else{let W=Fe(m,O,this.radix),Q=W==="x"||W==="z";a.strokeStyle=Q?e.x:e.wave,a.lineWidth=1.2,a.fillStyle=Q?e.xFill:e.busFill;let C=Math.min(4,(A-D)/2);a.beginPath(),a.moveTo(D,q),a.lineTo(D+C,k),a.lineTo(A-C,k),a.lineTo(A,q),a.lineTo(A-C,S),a.lineTo(D+C,S),a.closePath(),a.fill(),a.stroke();let re=A-D-10;re>14&&(a.fillStyle=e.text,a.fillText(gn(a,W,re),Math.max(D,this.nameW)+6,q))}}a.restore()}),a.strokeStyle=e.line,a.beginPath(),a.moveTo(this.nameW+.5,0),a.lineTo(this.nameW+.5,r),a.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let m=Math.round(this.xOf(this.cursor,i))+.5;a.strokeStyle=e.cursor,a.lineWidth=1.5,a.beginPath(),a.moveTo(m,0),a.lineTo(m,r),a.stroke()}}};he.prototype.drawAssert=function(t,e,n,i,s,r,o){let a={pass:o.pass||"#2e9d5b",fail:o.fail||"#d64545",cover:o.coverc||"#3b7dd8",incomplete:o.muted,disabled:o.muted};t.strokeStyle=o.grid,t.lineWidth=1,t.beginPath(),t.moveTo(this.nameW,r),t.lineTo(n,r),t.stroke();let g=e.events||[];for(let l of g){if(l.s1<this.t0||l.s0>this.t1)continue;let d=this.xOf(l.s0,n),u=this.xOf(l.s1,n),f=a[l.kind]||o.muted;(l.kind==="fail"||l.kind==="incomplete"||u-d>3&&g.length<400)&&(t.globalAlpha=l.kind==="fail"?.28:.14,t.fillStyle=f,t.fillRect(d,i+3,Math.max(1,u-d),s-i-6),t.globalAlpha=1),t.fillStyle=f,t.beginPath(),l.kind==="pass"?(t.moveTo(u,i),t.lineTo(u+5,s),t.lineTo(u-5,s)):l.kind==="fail"?(t.moveTo(u-6,i),t.lineTo(u+6,i),t.lineTo(u,s)):l.kind==="cover"?(t.moveTo(u,i),t.lineTo(u+5,r),t.lineTo(u,s),t.lineTo(u-5,r)):t.arc(u,r,4,0,2*Math.PI),t.closePath(),t.fill()}};function gn(t,e,n){if(t.measureText(e).width<=n)return e;for(;e.length>1&&t.measureText(e+"\u2026").width>n;)e=e.slice(0,-1);return e+"\u2026"}function qe(t,e){let n=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(e||"");if(!n)return String(t);let i=["fs","ps","ns","us","ms","s"],s=t*Number(n[1]),r=i.indexOf(n[2]);for(;r<i.length-1&&Math.abs(s)>=1e3&&s%1e3===0;)s/=1e3,r++;return r<2&&Math.abs(s)>=1e3&&(s/=1e3,r++,s=+s.toFixed(3)),`${s} ${i[r]}`}var ee=document.body.dataset.lab;var Mn=ee==="sva"||ee==="dv",se=ee==="vhdl",zn=t=>t.startsWith("sva-")||t.startsWith("cov-")||t.startsWith("dv-"),hn=t=>t.startsWith("vh-"),yn=t=>se?hn(t):hn(t)?!1:ee==="sva"?t.startsWith("sva-")||t.startsWith("cov-"):ee==="dv"?t.startsWith("dv-"):ee==="systemverilog"?t==="sv":ee==="logic"?t.startsWith("ld-"):t!=="sv"&&!t.startsWith("ld-")&&!zn(t),_n=[...Ze.map(t=>({group:"examples",...t})),...Qe,...nn,...on];for(let t of _n)t.quiz=Je[t.id]||sn[t.id]||ln[t.id]||[];var wn={...ze,...tn,...dn},kn={...Ke,...rn},R=_n.filter(t=>yn(t.group)),Un=[{id:"examples",title:"Examples",note:"Ready-to-copy examples: counters, FSMs, FIFOs, CDC synchronizers, SystemVerilog. Edit anything and press Run."},...Ye.map(t=>({...t,note:"Write the design in the Design pane: the ports are given. The testbench checks it and prints PASS or FAIL. A \u2713 marks the labs you have passed."})),...en,...an.map(t=>({...t,note:"Write the architecture in the Design pane: the entity is given. The testbench checks it and prints PASS or FAIL. A \u2713 marks the labs you have passed."}))],$e=Un.filter(t=>yn(t.id)),be="vdd-vlabs-code-v1",Te="vdd-vlabs-pass-v1",Y=t=>{try{return JSON.parse(localStorage.getItem(t)||"{}")||{}}catch{return{}}},pe=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch{}},w=t=>document.querySelector(t),bn=15e3,vn=ee==="systemverilog"?"vdd-svlabs-v1":ee==="logic"?"vdd-logiclabs-v1":ee==="sva"?"vdd-svalabs-v1":ee==="dv"?"vdd-dvlabs-v1":se?"vdd-vhdllabs-v1":"vdd-playground-v1",b={example:R[0].id,track:R[0].group,usedSolution:!1,std:R[0].std,running:!1,worker:null,ready:!1,timer:null,startedAt:0,lastVcd:null};function mn(t){let e=t.querySelector("textarea");if(window.CodeMirror){let n=window.CodeMirror.fromTextArea(e,{mode:se?"vhdl":"verilog",lineNumbers:!0,indentUnit:2,tabSize:2,smartIndent:!0,matchBrackets:!0,viewportMargin:1/0,extraKeys:{Tab:i=>i.replaceSelection("  ")}});return{get:()=>n.getValue(),set:i=>{n.setValue(i),n.clearHistory()},onChange:i=>n.on("change",i),refresh:()=>n.refresh(),goto:i=>{n.focus(),n.setCursor({line:i-1,ch:0}),n.addLineClass(i-1,"background","cm-errline"),setTimeout(()=>n.removeLineClass(i-1,"background","cm-errline"),2500),n.scrollIntoView({line:i-1,ch:0},80)},addKeys:i=>n.addKeyMap(i)}}return e.classList.add("plain-editor"),{get:()=>e.value,set:n=>{e.value=n},onChange:n=>e.addEventListener("input",n),refresh(){},goto:n=>{let i=e.value.split(`
`),s=0;for(let r=0;r<n-1&&r<i.length;r++)s+=i[r].length+1;e.focus(),e.setSelectionRange(s,s+(i[n-1]||"").length)},addKeys(){}}}var P={design:mn(w("#ed-design")),tb:mn(w("#ed-tb"))};function de(){return se?{design:"design.vhd",tb:"testbench.vhd"}:b.std==="2012"?{design:"design.sv",tb:"testbench.sv"}:{design:"design.v",tb:"testbench.v"}}function Ce(){let t=de();w("#name-design").textContent=t.design,w("#name-tb").textContent=t.tb,me()}var Ee="vdd-hints-v1";function B(t,e,n){let i=document.createElement(t);return e&&(i.className=e),n!=null&&(i.textContent=n),i}function me(){let t=R.find(l=>l.id===b.example),e=w("#show-solution"),n=w("#hint-box");if(!e||!n)return;if(!t||!t.solution){e.hidden=!0,n.hidden=!0;return}let i=Le(t,{design:w("#name-design").textContent,tb:w("#name-tb").textContent}),s=i&&!b.usedSolution?Math.min(2,Y(Ee)[t.id]||0):2;if(e.hidden=!1,e.classList.toggle("hint-btn",s<2||i&&b.hintsHidden),e.textContent=s===0?"\u{1F4A1} Hint 1":b.hintsHidden&&i?"\u{1F4A1} Show hints":s===1?"\u{1F4A1} Hint 2":"Show solution",n.hidden=!i||s===0||b.hintsHidden||b.usedSolution,n.hidden)return;n.innerHTML="";let r=B("div","hint-head");r.append(B("strong",null,s===1?"\u{1F4A1} Hint 1 of 2":"\u{1F4A1} Hints 1 and 2"));let o=B("button","hint-x","\xD7");o.type="button",o.title="Hide hints",o.setAttribute("aria-label","Hide hints"),o.onclick=()=>{b.hintsHidden=!0,me()},r.append(o),n.append(r);let a=B("div","hint-step");a.append(B("h4",null,"Where to look"));let g=B("ul");for(let l of i.where){let d=B("li");d.append(B("code",null,l.file)," "+l.pos+": "+l.what),g.append(d)}if(i.more&&g.append(B("li",null,`\u2026and ${i.more} more place${i.more===1?"":"s"}.`)),a.append(g),i.ideas.length&&a.append(B("p",null,"Try using "+i.ideas.join(", ").replace(/, ([^,]*)$/," and $1")+".")),n.append(a),s>=2){let l=B("div","hint-step");l.append(B("h4",null,"Hint 2 \xB7 the shape of the answer"),B("p","hint-note","Fill in each ___ yourself."));for(let d of i.shape)l.append(B("div","hint-loc",d.file+" \xB7 "+d.pos)),l.append(B("pre","hint-code",d.lines.join(`
`)));n.append(l),n.append(B("p","hint-foot","Still stuck? Show solution loads the full answer. A pass after that won't count on the leaderboard."))}else n.append(B("p","hint-foot","Hints are free: they don't change your points."))}function Vn(){let t=R.find(i=>i.id===b.example);if(!t||!t.solution)return;if(b.hintsHidden){b.hintsHidden=!1,me();return}let e=Y(Ee),n=e[t.id]||0;if(n<2&&!b.usedSolution&&Le(t,{design:"",tb:""})){e[t.id]=n+1,pe(Ee,e),me();let i=w("#hint-box");i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",behavior:"smooth"});return}Jn()}var jn=()=>$e.find(t=>t.id===b.track)||$e[0],Gn=t=>(R.find(e=>e.id===t)||R[0]).group;function fe(){let t=w("#vtracks");t.innerHTML="";for(let e of $e){let n=document.createElement("button");n.type="button",n.className="vtrack"+(e.id===b.track?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",e.id===b.track?"true":"false");let i=R.filter(r=>r.group===e.id),s=e.id==="examples"?0:i.filter(r=>Y(Te)[r.id]).length;n.innerHTML='<span class="vtrack-t"></span><span class="vtrack-n"></span>',n.querySelector(".vtrack-t").textContent=e.title,n.querySelector(".vtrack-n").textContent=i.length+(e.id==="examples"?" examples":" labs")+(s?` \xB7 ${s} \u2713`:""),n.addEventListener("click",()=>Kn(e.id)),t.appendChild(n)}w("#vtrack-note").textContent=jn().note,document.body.dataset.track!==b.track&&(document.body.dataset.track=b.track,document.dispatchEvent(new CustomEvent("vdd-track"))),w("#side-title").textContent=b.track==="examples"?"// Examples":"// Labs",w("#side-note").hidden=b.track!=="examples",w("#reset").textContent=b.track==="examples"?"Reset example":"Reset lab"}function Kn(t){b.track=t;try{let e=new URL(location.href);e.searchParams.set("track",t),history.replaceState(null,"",e.pathname+e.search)}catch{}Gn(b.example)!==t?le(R.find(e=>e.group===t).id):(fe(),ge())}var ye=null;function ge(){let t=w("#examples");t.innerHTML="";let e=Y(Te),n=R.filter(s=>s.group===b.track);for(let s of n){let r=document.createElement("button");if(r.type="button",r.className="ex"+(s.id===b.example?" active":""),r.dataset.id=s.id,r.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',r.querySelector(".ex-tag").textContent=s.tag,e[s.id]){let a=document.createElement("span");a.className="ex-pass",a.textContent="\u2713 passed",r.querySelector(".ex-tag").appendChild(a)}let o=ye&&ye.status(s.id);if(o&&o.checked){let a=document.createElement("span");a.className="ex-pass",a.textContent=`quiz ${o.score}/${o.total}`,r.querySelector(".ex-tag").appendChild(a)}r.querySelector(".ex-title").textContent=s.title,r.addEventListener("click",()=>le(s.id)),t.appendChild(r)}let i=w("#ex-select");i.innerHTML=n.map(s=>`<option value="${s.id}">${s.group==="examples"?"":s.tag+" \xB7 "}${s.title}</option>`).join(""),n.some(s=>s.id===b.example)&&(i.value=b.example)}function Xn(){let t=R.find(n=>n.id===b.example);if(!t||t.group==="examples")return;let e=Y(be);e[t.id]={design:P.design.get(),tb:P.tb.get()},pe(be,e)}function le(t,e){let n=R.find(s=>s.id===t)||R[0];b.example=n.id,b.std=n.std,b.track=n.group,b.usedSolution=!1,b.hintsHidden=!1,w("#std").value=n.std;let i=!e&&n.group!=="examples"?Y(be)[n.id]:null;if(P.design.set(i?i.design:n.design),P.tb.set(i?i.tb:n.tb),e&&n.group!=="examples"){let s=Y(be);delete s[n.id],pe(be,s)}Ce(),fe(),ge(),Ie(wn,n.id,kn),ye.render(n),ue(),We(),T.clear(),w("#wave-values").textContent="",qn(null),ce("Ready","idle")}function Jn(){let t=R.find(n=>n.id===b.example);if(!t||!t.solution)return;t.solution.design&&P.design.set(t.solution.design),t.solution.tb&&P.tb.set(t.solution.tb);let e=Y("vdd-solution-seen-v1");e[t.id]=Date.now(),pe("vdd-solution-seen-v1",e),b.usedSolution=!0,ue(),me(),We(),Z("Loaded the solution. Run it to see PASS. Reset lab brings your starting point back.","meta")}function Zn(t){let e=R.find(s=>s.id===b.example);if(!e||e.group==="examples"||!/(^|\n)PASS\b/.test(t))return;let n=b.usedSolution||!!Y("vdd-solution-seen-v1")[e.id];try{document.dispatchEvent(new CustomEvent("vdd-pass",{detail:{id:e.id,solution:n}}))}catch{}if(b.usedSolution||Y("vdd-solution-seen-v1")[e.id]){let s=Y("vdd-vlabs-solved-v1");s[e.id]||(s[e.id]=Date.now(),pe("vdd-vlabs-solved-v1",s));return}let i=Y(Te);i[e.id]||(i[e.id]=Date.now(),pe(Te,i),fe(),ge())}function ue(){Xn();try{localStorage.setItem(vn,JSON.stringify({example:b.example,std:b.std,design:P.design.get(),tb:P.tb.get()}))}catch{}}function Yn(){try{let t=JSON.parse(localStorage.getItem(vn)||"null");if(t&&t.design!=null)return t}catch{}return null}async function Qn(){let t=JSON.stringify({s:b.std,d:P.design.get(),t:P.tb.get()}),e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(e).arrayBuffer()),i="";for(let s of n)i+=String.fromCharCode(s);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function et(t){let e=atob(t.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(e,s=>s.charCodeAt(0)),i=new Blob([n]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(i).text())}async function Se(t,e){let n=!1;try{await navigator.clipboard.writeText(t),n=!0}catch{let s=document.createElement("textarea");s.value=t,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select();try{n=document.execCommand("copy")}catch{}s.remove()}if(e){let i=e.dataset.label||e.textContent;e.dataset.label=i,e.textContent=n?"Copied":"Press Ctrl+C",e.classList.toggle("ok",n),setTimeout(()=>{e.textContent=i,e.classList.remove("ok")},1600)}}function fn(t,e){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var ie=w("#console");function We(){ie.textContent=""}function Z(t,e){let n=document.createElement("div");n.className="ln "+(e||"");let i=/^(?:\/work\/)?([\w.-]+\.s?v):(\d+):/.exec(t)||/^(\s*> )(?:\/work\/)?([\w.-]+\.vhdl?):(\d+)/.exec(t);if(i&&i.length===4){let s=i[2]===de().design?"design":i[2]===de().tb?"tb":null,r=document.createElement("button");r.type="button",r.className="loc",r.textContent=`${i[2]}:${i[3]}`,s&&r.addEventListener("click",()=>P[s].goto(+i[3])),n.appendChild(document.createTextNode(i[1])),n.appendChild(r),n.appendChild(document.createTextNode(t.slice(i[0].length)))}else if(i){let s=i[1]===de().design?"design":i[1]===de().tb?"tb":null,r=document.createElement("button");r.type="button",r.className="loc",r.textContent=`${i[1]}:${i[2]}`,s&&r.addEventListener("click",()=>P[s].goto(+i[2])),n.appendChild(r),n.appendChild(document.createTextNode(":"+t.slice(i[0].length)))}else n.textContent=t;/qualities are ignored/.test(t)?n.classList.add("warn"):/^\*\* (Error|Fatal|Failure)\b/.test(t)?n.classList.add("err"):/^\*\* Warning\b/.test(t)?n.classList.add("warn"):/\berror\b|ERROR|sorry|FAIL|MISMATCH|Internal error|Unable to/.test(t)?n.classList.add("err"):/\bwarning\b/i.test(t)?n.classList.add("warn"):/\bPASS\b/.test(t)&&n.classList.add("pass"),ie.appendChild(n),ie.childElementCount>6e3&&ie.firstChild.remove(),ie.scrollTop=ie.scrollHeight}function ce(t,e){let n=w("#status");n.textContent=t,n.dataset.kind=e}var Ne=new URL(se?"/vhdl/":Mn?"/dv/":"/verilog/",location.href).href;function nt(){return new URL("worker.js",Ne).href}function He(){b.worker&&b.worker.terminate(),b.ready=!1;let t=new Worker(nt());t.onmessage=e=>tt(e.data),t.onerror=e=>{Z("Simulator failed to start: "+(e.message||"worker error"),"err"),Be(!1)},t.postMessage({type:"load",base:Ne}),b.worker=t}function tt(t){if(t.type==="ready")b.ready=!0,b.running||ce("Ready","idle");else if(t.type==="stage")ce(t.stage+"\u2026","busy"),t.stage==="Simulating"&&Z("\u2500\u2500 simulation output \u2500\u2500","meta");else if(t.type==="line")Z(t.line.replace(/\/work\//g,""),t.kind==="meta"?"meta":t.kind==="pass"?"pass":t.stream==="err"?"stderr":"");else if(t.type==="done"){if(t.ok){Z(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta"),t.dv&&st(t.dv),Zn(ie.innerText),qn(t.dv);let e=(t.vcd||[])[0];if(e){b.lastVcd=e;try{let n=un(e.text);it(n,t.dv),T.setData(n),w("#wave-meta").textContent=`${n.signals.length} signals \xB7 ${qe(n.endTime,n.timescale)}`}catch(n){Z("Could not read waveform: "+n.message,"err")}}else T.clear(),w("#wave-meta").textContent=se?"No waveform: the design did not elaborate.":'No waveform: add $dumpfile("dump.vcd"); $dumpvars(0, tb);'}else t.phase==="compile"?Z("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):t.phase==="sim"&&Z(`\u2500\u2500 simulation exited with code ${t.rc} \u2500\u2500`,"meta err");Be(t.ok,t.phase);try{let e=R.find(n=>n.id===b.example);e&&e.group!=="examples"&&document.dispatchEvent(new CustomEvent("vdd-run",{detail:{id:e.id,pass:!!t.ok&&/(^|\n)PASS\b/.test(ie.innerText)}}))}catch{}}}function Ae(){if(b.running)return;window.vddSubscribe&&window.vddSubscribe(),b.worker||He(),ue(),We(),w("#wave-values").textContent="",b.running=!0,b.startedAt=performance.now(),w("#run").disabled=!0,w("#stop").disabled=!1,ce(b.ready?"Compiling\u2026":"Loading simulator\u2026","busy");let t=de(),e={[t.design]:P.design.get(),[t.tb]:P.tb.get()},n=w("#top").value.trim();(window.vddQ=window.vddQ||[]).push("sim"),b.worker.postMessage({type:"run",files:e,std:b.std,top:n,base:Ne}),clearTimeout(b.timer),b.timer=setTimeout(()=>xn(`Stopped after ${bn/1e3} s. ${se?"Does your testbench call finish (use std.env.finish)?":"Does your testbench call $finish?"}`),bn)}function xn(t){b.running&&(Z(t||"Stopped.","meta err"),Be(!1,"stopped"),He())}function Be(t,e){clearTimeout(b.timer),b.running=!1,w("#run").disabled=!1,w("#stop").disabled=!0,e==="stopped"?ce("Stopped","err"):ce(t?"Done":e==="compile"?"Compile errors":"Error",t?"ok":"err")}function it(t,e){if(t.signals=t.signals.filter(n=>!/(^|\.)(__dv|_ivl_)/.test(n.name)),!(!e||!e.asserts))for(let n of e.asserts){if(!n.events||!n.events.length)continue;let i=n.name.split(".").slice(1).join(".")||n.name;t.signals.push({id:"assert:"+n.name,name:n.name,short:"\u25C6 "+i,width:1,kind:"assert",changes:[],events:n.events})}}function te(t){return String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function qn(t){let e=w("#dvres");if(!e)return;if(!t||!t.asserts.length&&!t.coverage.length){e.hidden=!0;return}e.hidden=!1;let n="";if(t.asserts.length){n+='<h3>Assertions</h3><div class="dv-tablewrap"><table class="dv-table"><thead><tr><th>Assertion</th><th>Passed</th><th>Failed</th><th>Vacuous</th><th>Unfinished</th><th>Covered</th></tr></thead><tbody>';for(let i of t.asserts){let s=i.kind==="cover"||i.kind==="coverseq",r=i.events.find(o=>o.kind==="fail");n+=`<tr class="${i.fail?"bad":s&&!i.matches?"warnr":""}"><td><button type="button" class="dv-a" data-t="${r?r.s1:""}" data-line="${i.line}">${te(i.name)}</button>${s?' <span class="dv-k">cover</span>':i.kind==="assume"?' <span class="dv-k">assume</span>':""}</td><td>${s?"":i.pass}</td><td>${s?"":i.fail}</td><td>${s?"":i.vacuous}</td><td>${i.incomplete||""}</td><td>${s?i.matches:""}</td></tr>`}n+='</tbody></table></div><p class="dv-note">Click an assertion to jump to its first failure. In the waveform: \u25B2 pass, \u25BC fail, \u25C6 cover, \u25CB unfinished at the end of the run.</p>'}for(let i of t.coverage){n+=`<h3>Covergroup ${te(i.type)} <span class="dv-inst">${te(i.name)}</span> <span class="dv-pct ${i.coverage>=100?"ok":""}">${i.coverage.toFixed(1)}%</span></h3>`;let s=[...i.cps.map(r=>({...r,what:"coverpoint"})),...i.crosses.map(r=>({...r,what:"cross"}))];for(let r of s){let o=r.bins.filter(g=>g.n>=r.at_least).length;n+=`<details class="dv-cp"${r.coverage<100?" open":""}><summary>${r.what} <b>${te(r.name)}</b>: ${r.coverage.toFixed(1)}% (${o} of ${r.bins.length} bins)</summary><div class="dv-bins">`;let a=Math.max(1,...r.bins.map(g=>g.n));for(let g of r.bins.slice(0,300))n+=`<div class="dv-bin ${g.n>=r.at_least?"hit":"miss"}"><span class="dv-bn">${te(g.name)}${g.label?` <i>${te(g.label)}</i>`:""}</span><span class="dv-bar"><span style="width:${100*g.n/a}%"></span></span><span class="dv-bc">${g.n}</span></div>`;r.bins.length>300&&(n+=`<div class="dv-note">\u2026 ${r.bins.length-300} more bins</div>`),r.def&&(n+=`<div class="dv-bin def"><span class="dv-bn">${te(r.def.name)} (default, not counted)</span><span class="dv-bar"></span><span class="dv-bc">${r.def.n}</span></div>`),r.ignore&&r.ignore.length&&(n+=`<div class="dv-note">ignore_bins: ${te(r.ignore.join(", "))}</div>`),r.illegal&&r.illegal.length&&(n+=`<div class="dv-note">illegal_bins: ${te(r.illegal.join(", "))}</div>`),n+="</div></details>"}}e.querySelector(".dv-body").innerHTML=n,e.querySelectorAll(".dv-a").forEach(i=>i.addEventListener("click",()=>{let s=i.dataset.t;if(s!==""&&T.data){T.cursor=+s;let o=T.t1-T.t0;T.t0=Math.max(0,+s-o/2),T.t1=T.t0+o,T.draw(),T.onCursor(+s)}if(+i.dataset.line){let o=b.lastFiles||{}}}))}function st(t){let e=R.find(s=>s.id===b.example);if(!e||!e.check)return;let n=[],i=s=>s.split(".").pop();for(let s of e.check){if(s.assert){let r=t.asserts.find(a=>i(a.name)===s.assert||a.name===s.assert);if(!r){n.push(`assertion ${s.assert} is missing (keep the label ${s.assert})`);continue}let o=r.events.filter(a=>a.kind==="fail").map(a=>a.t1);if(s.fails!==void 0){let a=s.fails.join(","),g=o.join(",");a!==g&&n.push(`${s.assert}: expected failures at [${a||"none"}], got [${g||"none"}]`)}s.minPass!==void 0&&r.pass<s.minPass&&n.push(`${s.assert}: only ${r.pass} non-vacuous passes (expected at least ${s.minPass}) \u2014 is it vacuous?`),s.matches!==void 0&&r.matches!==s.matches&&n.push(`${s.assert}: covered ${r.matches} times, expected ${s.matches}`)}if(s.cg){let r=t.coverage.find(o=>o.type===s.cg||o.name===s.cg);if(!r){n.push(`covergroup ${s.cg} has no samples`);continue}if(s.coverage!==void 0&&Math.abs(r.coverage-s.coverage)>.05&&n.push(`${s.cg}: coverage ${r.coverage.toFixed(1)}%, expected ${s.coverage.toFixed(1)}%`),s.min!==void 0&&r.coverage<s.min&&n.push(`${s.cg}: coverage ${r.coverage.toFixed(1)}% is below ${s.min}%`),s.bins)for(let[o,a]of Object.entries(s.bins)){let g=[...r.cps,...r.crosses].find(l=>l.name===o);g?g.bins.length!==a&&n.push(`${s.cg}.${o}: ${g.bins.length} bins, expected ${a}`):n.push(`${s.cg}: no coverpoint or cross named ${o}`)}}}if(n.length){Z(`FAIL: ${n.length} check${n.length>1?"s":""} did not match the lab`,"err");for(let s of n)Z("  "+s,"err")}else Z(e.check.some(s=>s.assert)?e.check.some(s=>s.cg)?"PASS: assertions and coverage behave as the lab expects":"PASS: your assertions behave as the lab expects":"PASS: your coverage model matches the lab","pass")}var K=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim(),T=new he(w("#wave"),{theme:()=>({pass:K("--ok")||"#2e9d5b",fail:K("--err")||"#d64545",bg:K("--wave-bg"),rowAlt:K("--wave-row"),grid:K("--wave-grid"),line:K("--line"),text:K("--text"),muted:K("--muted"),wave:K("--wave"),busFill:K("--wave-bus"),x:K("--wave-x"),xFill:K("--wave-xfill"),z:K("--wave-z"),cursor:K("--accent")}),onCursor:t=>{let e=w("#wave-values");if(t===null||!T.data){e.textContent="";return}e.innerHTML="";let n=document.createElement("div");n.className="cur-time",n.textContent="Cursor @ "+qe(t,T.data.timescale),e.appendChild(n);for(let i of T.data.signals){let s=document.createElement("div");s.className="cur-row";let r=document.createElement("span");r.textContent=i.name;let o=document.createElement("span");o.textContent=Fe(i,pn(i,t),T.radix),s.append(r,o),e.appendChild(s)}}});rt().addEventListener?.("change",()=>T.draw());function rt(){return window.matchMedia("(prefers-color-scheme: dark)")}function at(){w("#run").addEventListener("click",Ae),w("#stop").addEventListener("click",()=>xn()),w("#std").addEventListener("change",e=>{b.std=e.target.value,Ce(),ue()}),w("#ex-select").addEventListener("change",e=>le(e.target.value)),document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>Se(P[e.dataset.copy].get(),e))),document.querySelectorAll("[data-download]").forEach(e=>e.addEventListener("click",()=>fn(de()[e.dataset.download],P[e.dataset.download].get()))),w("#copy-output").addEventListener("click",e=>Se(ie.innerText,e.currentTarget)),w("#reset").addEventListener("click",()=>le(b.example,!0)),w("#show-solution").addEventListener("click",Vn),w("#share").addEventListener("click",async e=>{let n=e.currentTarget;try{let i=await Qn(),s=location.href.split("#")[0]+"#code="+i;history.replaceState(null,"","#code="+i),Se(s,n)}catch{Se(location.href,n)}}),w("#zoom-in").addEventListener("click",()=>T.zoom(.5)),w("#zoom-out").addEventListener("click",()=>T.zoom(2)),w("#zoom-fit").addEventListener("click",()=>T.fit()),w("#pan-left").addEventListener("click",()=>T.pan(-.4)),w("#pan-right").addEventListener("click",()=>T.pan(.4)),w("#radix").addEventListener("change",e=>{T.radix=e.target.value,T.draw(),T.onCursor(T.cursor)}),w("#dl-vcd").addEventListener("click",()=>{b.lastVcd&&fn("dump.vcd",b.lastVcd.text)});let t={"Ctrl-Enter":Ae,"Cmd-Enter":Ae};P.design.addKeys(t),P.tb.addKeys(t),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),Ae())}),P.design.onChange(()=>ue()),P.tb.onChange(()=>ue())}async function ot(){ye=Xe({key:"vdd-vlabs-quiz-v1",onChange:()=>ge()}),at();let t=!1,e=new URLSearchParams(location.search),n=e.get("track"),i=e.get("lab"),s=new URLSearchParams(location.hash.slice(1)).get("code");if(s){try{let r=await et(s);b.std=se?"vhdl":r.s==="2012"?"2012":"2005",b.example=null,w("#std").value=b.std,P.design.set(r.d||""),P.tb.set(r.t||""),t=!0}catch{}t&&(fe(),ge())}if(!t&&i&&R.some(r=>r.id===i)&&(le(i),t=!0),!t&&n&&$e.some(r=>r.id===n)&&(le(R.find(r=>r.group===n).id),t=!0),!t){let r=Yn();if(r&&R.some(o=>o.id===r.example)){let o=R.find(a=>a.id===r.example);b.example=o.id,b.track=o.group,b.std=se?"vhdl":r.std||"2005",w("#std").value=b.std,P.design.set(r.design),P.tb.set(r.tb),fe(),ge(),Ie(wn,b.example,kn),ye.render(o),t=!0}}t||le(R[0].id),Ce(),ce("Loading simulator\u2026","busy"),He(),T.clear()}ot();})();
