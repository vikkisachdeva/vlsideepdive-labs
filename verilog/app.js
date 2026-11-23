(()=>{var We={counter:{problem:"Almost every design needs a counter: for timers, addresses, timeouts. It must reset cleanly, count only when enabled, and wrap at the right value.",tasks:["Run and watch count in the waveform.","Find the cycle where it wraps from 15 to 0.","Change WIDTH and run again."],learn:"Write a parameterised counter with reset and enable, and read it in a waveform."},mux:{problem:"Selecting one of several buses is the most common piece of logic in a datapath. It must pick the right input for every select value.",tasks:["Run and check y for each value of sel.","Change the inputs and run again."],learn:"Write combinational logic with case statements and test it with a simple testbench."},adder:{problem:"Checking results by eye does not scale. A testbench should check every case on its own and say PASS or FAIL.",tasks:["Run: the testbench tries all 512 input combinations.","Break the carry logic in the full adder and see the testbench catch it."],learn:"Build an adder from full adders, and write a self-checking, exhaustive testbench."},fsm:{problem:"Detecting a bit pattern in a serial stream is a classic state machine problem. Overlapping patterns such as 10111011 are easy to get wrong.",tasks:["Run and find each 'pattern 1011 detected' line.","Follow the state in the waveform.","Change the input stream and predict the detections."],learn:"Design a Moore FSM, including overlapping matches, and debug it from the waveform."},cdc:{problem:"A signal from another clock cannot be used directly: the flop that samples it can go metastable. Two flops in a row give it time to settle.",tasks:["Run and see level_dst follow level_src two destination clocks later.","Measure the delay in the waveform."],learn:"The two-flop synchronizer for a single-bit level, and its latency. For full CDC practice, see the CDC labs."},fifo:{problem:"Producer and consumer rarely run at the same rate. A FIFO buffers the data, and it must refuse writes when full and reads when empty.",tasks:["Run: 10 writes into an 8-entry FIFO.","Find the two dropped writes and the full flag.","Read back and check the order."],learn:"Design a synchronous FIFO with full and empty flags."},sv:{problem:"Plain Verilog FSMs use magic numbers and are hard to read. SystemVerilog adds enums, always_ff/always_comb and assertions that check the design while it runs.",tasks:["Run and follow the light sequence.","Read the assertion that exactly one light is on.","Break the FSM and see the assertion fire."],learn:"SystemVerilog enum FSMs, always_ff/always_comb and immediate assertions."},"p1-ha-df":{problem:"Add two bits. The sum is 1 when exactly one input is 1; the carry is 1 when both are.",tasks:["Use only assign statements (dataflow style).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dataflow modelling with continuous assignments."},"p1-ha-bh":{problem:"The same half adder, described by its behavior instead of its equations.",tasks:["Use an always @(*) block with a case statement or if/else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Behavioral modelling with always @(*), and why outputs are declared reg."},"p1-ha-st":{problem:"The same half adder, built from logic gates connected by wires.",tasks:["Use only Verilog gate primitives (xor, and).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural modelling with gate primitives."},"p1-fa-df":{problem:"Add three bits (a, b and a carry in) to get a sum and a carry out.",tasks:["Use only assign statements.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Full adder equations in dataflow style."},"p1-fa-bh":{problem:"The same full adder, described by its behavior.",tasks:["Use an always @(*) block. Hint: {cout, sum} = a + b + cin.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using Verilog arithmetic inside an always block."},"p1-fa-st":{problem:"Build a full adder from two half adders and an OR gate, the way it is drawn in textbooks.",tasks:["Instantiate half_adder twice and connect them with wires.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Hierarchy: instantiating modules and connecting ports by name."},"p1-ops":{problem:"Verilog has arithmetic, bitwise, logical, reduction, relational, equality, shift, concatenation, replication and conditional operators. Each output of the module uses one of them.",tasks:["Write one assign per output (see the comments for which operator), then read the $display and $monitor lines.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Every Verilog operator, and printing with $display and $monitor."},"p1-c2f":{problem:"Repeated calculations belong in a task: write it once, call it many times.",tasks:["Complete the task c_to_f. The testbench calls it with seven temperatures.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Writing and calling a Verilog task with input and output arguments."},"p2-add4":{problem:"Add two 4-bit numbers and a carry in. The result needs 5 bits: a 4-bit sum and a carry out.",tasks:["Use one assign statement with concatenation on the left.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-bit dataflow arithmetic and concatenation."},"p2-mux2":{problem:"Pick one of two inputs with a select signal: the most common block in digital design.",tasks:["y = a when sel = 0, b when sel = 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"The conditional operator ?: as a multiplexer."},"p2-mux4":{problem:"Pick one of four inputs with a 2-bit select.",tasks:["Use a case statement on sel.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Case statements and full case coverage."},"p2-dec24":{problem:"Turn a 2-bit number into four select lines, exactly one of them high, as in an address decoder.",tasks:["y[a] = 1 when en = 1; all zeros when en = 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Decoders, enables and the shift operator."},"p2-enc42":{problem:"The reverse of a decoder: find which one of four lines is high and output its number.",tasks:["valid = 1 only when exactly one bit of d is 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Encoders and handling inputs that are not allowed."},"p2-penc42":{problem:"When several requests arrive at once, the highest one wins: an interrupt controller does this.",tasks:["y is the position of the highest 1; valid = 0 when d = 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority logic with casez and don't-care bits."},"p2-cmp4":{problem:"Compare two unsigned 4-bit numbers.",tasks:["Exactly one of gt, eq and lt is 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Relational operators and comparator outputs."},"p2-bshift8":{problem:"Shift or rotate a byte by any amount from 0 to 7 in one step, as in a processor's shift unit.",tasks:["dir picks left or right; rotate = 1 brings the bits that fall off back in on the other side.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shifts, rotates and building a barrel shifter."},"p2-alu":{problem:"The arithmetic logic unit is the heart of a processor: one block, eight operations, chosen by an opcode.",tasks:["Implement the eight operations in the comment, the carry for add and subtract, and the zero flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Case-based ALU design, carry out and status flags."},"p3-dlatch":{problem:"A latch is transparent: while en = 1, q follows d. When en = 0 it holds its last value.",tasks:["Write it with always @(*) and an if without an else.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How an if without else creates a latch, and when you want one."},"p3-dlatch-rst":{problem:"Add a reset that clears the latch at once, whatever en is.",tasks:["rst = 1 forces q = 0 immediately.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Reset priority in a latch."},"p3-dff":{problem:"A flip-flop samples d only at the rising edge of the clock: the basic memory element of synchronous design.",tasks:["Use always @(posedge clk) and a non-blocking assignment.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Edge-triggered storage and non-blocking assignments (<=)."},"p3-dff-arh":{problem:"Reset must work even when the clock is not running.",tasks:["rst = 1 clears q at once. Put posedge rst in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous reset: the sensitivity list and reset priority."},"p3-dff-neg-arh":{problem:"Some flops capture on the falling edge of the clock, for example in DDR interfaces.",tasks:["Sample d on negedge clk; rst = 1 clears q at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Negative-edge flip-flops."},"p3-dff-arl":{problem:"Most chips use an active-low reset (rst_n): 0 means reset.",tasks:["rst_n = 0 clears q at once. Use negedge rst_n.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low reset and the _n naming convention."},"p3-dff-ash":{problem:"Some registers must start at 1, not 0.",tasks:["set = 1 forces q = 1 at once.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous set."},"p3-dff-srh":{problem:"A synchronous reset only acts on a clock edge, so it is timed like any other data input.",tasks:["rst = 1 clears q on the next rising edge only. Do not put rst in the sensitivity list.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous reset, and how it differs from asynchronous reset."},"p3-dff-srl":{problem:"The same synchronous reset, active low.",tasks:["rst_n = 0 clears q on the next rising edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous active-low reset."},"p3-dff-srs":{problem:"When reset and set arrive together, one must win. Here reset has priority.",tasks:["On a rising edge: rst = 1 gives 0, else set = 1 gives 1, else q takes d.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority between synchronous controls."},"p3-sync-async":{problem:"One reset, two registers: one resets at once, the other waits for the clock. The waveform shows the difference.",tasks:["Build q_sync with a synchronous reset and q_async with an asynchronous one.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"When each reset style acts, seen side by side."},"p3-twin":{problem:"Two 8-bit registers share a data bus, clock and reset, but load independently.",tasks:["load_a loads d into qa, load_b into qb; otherwise each holds.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Registers with load enables and a shared bus."},"p4-sr5":{problem:"Serial data enters at the left and moves one bit to the right each clock, as in a serial receiver.",tasks:["On each rising edge: q <= {sin, q[4:1]}.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Shift registers with concatenation."},"p4-usr5":{problem:"One register that can hold, shift right, shift left or load in parallel, chosen by a mode input.",tasks:["Implement the four modes in the comment.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Multi-function registers with a case on mode."},"p4-cnt":{problem:"Counters are everywhere: timers, addresses, state sequencing.",tasks:["A 4-bit up counter that wraps from 15 to 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"A basic synchronous counter."},"p4-cnt-tb":{problem:"A design is only as good as its testbench. Here the design is given and you write the testbench.",tasks:["Complete the testbench: reset, count, pause with en, check every cycle and print PASS or FAIL. Then set BUG = 1 in the design: your testbench must print FAIL.","Run: your testbench should print PASS, and FAIL once BUG = 1.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Self-checking testbenches with an expected-value model."},"p4-cnt-load":{problem:"Counters often need to start from a given value.",tasks:["load = 1 loads d; otherwise count up.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous load with priority over counting."},"p4-updown":{problem:"Count in either direction, for example a FIFO level or a position.",tasks:["up = 1 counts up, up = 0 counts down; both wrap.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Up/down counters."},"p4-mod":{problem:"A modulus-N counter counts 0 to N-1 and wraps, such as a decade (mod-10) counter for a clock display.",tasks:["Count 0 to 9 and wrap to 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mod-N counters and parameters."},"p4-range":{problem:"Count only within a range, LOW to HIGH, and start again at LOW.",tasks:["After reset q = LOW (3); count to HIGH (12), then back to LOW.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameterized counter limits."},"p4-range-udl":{problem:"All the counter features together: a range, a direction and a load.",tasks:["Load has priority; up wraps HIGH \u2192 LOW; down wraps LOW \u2192 HIGH.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Combining counter features with clear priority."},"p4-div2":{problem:"Make a slower clock from a fast one.",tasks:["clk_out toggles on every rising edge of clk.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Divide-by-2 with a toggle flop."},"p4-div4":{problem:"Divide by 4 with a 50% duty cycle.",tasks:["Use a 2-bit counter; its top bit is clk / 4.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Dividing by a power of 2 with a counter."},"p4-div3":{problem:"Odd dividers are harder: a counter alone gives a 33% duty cycle. The testbench requires exactly 50%.",tasks:["Hint: combine a flop on the rising edge with one on the falling edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Odd clock division with a 50% duty cycle using both clock edges."},"p4-fifo":{problem:"A FIFO buffers data between a producer and a consumer running at different rates on the same clock.",tasks:["8 words of 8 bits. Ignore writes when full and reads when empty; dout shows the word on the clock after rd_en.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"FIFO pointers, a word count, and full and empty flags."},"p4-afifo":{problem:"When producer and consumer run on different clocks, the FIFO pointers cross clock domains. They must be Gray coded and synchronized.",tasks:["8 words of 8 bits, wclk and rclk. rdata shows the oldest word; rinc takes it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous FIFOs: Gray pointers, synchronizers, full and empty. See the CDC labs for more."},"p4-mealy-nov":{problem:"Detect the bit pattern 1-0-1 in a serial stream. Mealy: the output depends on the state and the current input.",tasks:["y = 1 while x is the final 1. After a detection, start again from scratch.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mealy state machines and non-overlapping detection."},"p4-mealy-ov":{problem:"The same pattern, but the final 1 may also start the next 101: 10101 gives two detections.",tasks:["y = 1 while x is the final 1, and keep that 1 for the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Mealy machine."},"p4-moore-nov":{problem:"Moore: the output depends on the state only, so it comes one clock later than in a Mealy machine.",tasks:["y = 1 for one clock after the final 1 was clocked in. Start again from scratch after.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore state machines and their extra state."},"p4-moore-ov":{problem:"Moore and overlapping together.",tasks:["y = 1 for one clock after 101; the final 1 starts the next pattern.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Overlapping detection in a Moore machine."},"s01-reg":{problem:"Store a byte when enable is high, the most basic piece of a CPU datapath. Write it the SystemVerilog way.",tasks:["Use logic, ANSI ports, timeunit/timeprecision and always_ff. rst_ is asynchronous and active low.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"always_ff, the logic type, and time units in SystemVerilog."},"s02-mux":{problem:"One mux module, any width: the CPU uses it as a 5-bit address mux. The testbench uses an 8-bit and a 1-bit instance.",tasks:["out = sel_a ? in_a : in_b. Use always_comb and unique case with a default that drives X.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameters, always_comb and unique case."},"s03-cnt":{problem:"The CPU's program counter: it counts through the program, and loads a new address for a jump.",tasks:["5 bits: load has priority, then enable counts up; rst_ clears it.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Priority in always_ff and counter wrap-around."},"s04-ctrl":{problem:"The CPU's controller steps through 8 states for every instruction and decides which blocks act in each: fetch, decode, operand fetch, execute, store.",tasks:["Use the enum types from package typedefs, state.next() for the sequence, and always_comb with unique case for the outputs in the table in the comments.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packages, enumerated types and their methods, and Mealy outputs."},"s05-alu":{problem:"The CPU's ALU combines the accumulator with memory data. Its result is registered on the falling clock edge so it is ready for the accumulator on the next rising edge.",tasks:["Compute out on negedge clk for the 8 opcodes; zero = 1 when accum is 0.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Using package enums in a datapath, and two clock edges."},"s06-memtb":{problem:"The memory is given. Write the testbench that proves it works, with reusable tasks.",tasks:["Write tasks write_mem and read_mem with a default debug argument, a void function printstatus, and two tests. Then set BUG = 1: your testbench must report FAIL.","Run: your testbench should print PASS, and FAIL once BUG = 1.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Tasks with default arguments, void functions, and driving on the inactive clock edge."},"s07-struct":{problem:"A bus is many signals that always travel together. Bundling them keeps every module in agreement. SystemVerilog interfaces do this with modports; Icarus Verilog 12 does not support interface ports yet, so this lab uses a packed struct from a package, which every tool supports.",tasks:["Declare mem_req_t (read, write, addr, data in that order) and write the memory using req.field names.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Packed structs, packages, and when to use a struct or an interface."},"s08-cpu":{problem:"Put it all together: the register, mux, counter, controller, ALU and memory make a small CPU that runs programs.",tasks:["Instantiate and connect the seven blocks in module cpu (all blocks are given above it). The testbench runs three programs: a basic test, a sum of 1 to 10, and Fibonacci up to 144.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a CPU from blocks, and debugging it from the waveform and program results."},"s09-johnson":{problem:"A Johnson counter is a shift register whose inverted output feeds back: 2N states with only one bit changing at a time.",tasks:["Shift left and feed ~q[N-1] into bit 0. The testbench checks N = 4 and N = 6.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Parameterized shift-register counters."},"s10-gen":{problem:"Hardware is often an array of identical blocks. A generate loop builds it for any size.",tasks:["Build rca from N full_adder instances with a for-generate loop. Do not use + in rca.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Generate loops, genvars and named generate blocks."},"s11-dpram":{problem:"Two ports let one block write while another reads, for example a frame buffer or a FIFO memory.",tasks:["Port A writes and reads, port B reads. Both reads are synchronous; port A reads the old data when it writes the same address.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Memory arrays, synchronous reads and read-before-write."},"s12-uart":{problem:"Send bytes over a single wire: a start bit, 8 data bits LSB first, a stop bit. The testbench decodes the line like a real receiver.",tasks:["Write the state machine with an enum type: IDLE, START_BIT, DATA_BITS, STOP_BIT. Each bit lasts CLKS_PER_BIT clocks.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Enum state machines with counters, and serial protocols."},"l01-gates":{problem:"Every digital circuit is built from a handful of gates: AND, OR, NOT, NAND, NOR, XOR and XNOR. You need to know each truth table by heart.",tasks:["Instantiate one gate primitive per output (and, or, not, nand, nor, xor, xnor).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Verilog gate primitives and the truth table of every basic gate."},"l02-nand":{problem:"NAND is a universal gate: any logic function can be built from NAND gates alone. Chips like the 7400 have only NANDs.",tasks:["Build NOT, AND, OR and XOR using only nand primitives. No assign, no other gates.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Why NAND is universal, and De Morgan's law in practice (OR = NAND of inverted inputs)."},"l03-nor":{problem:"NOR is the other universal gate. Building every gate from NOR shows the duality of Boolean algebra.",tasks:["Build NOT, OR, AND and XNOR using only nor primitives.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"NOR-only design, and how it mirrors NAND-only design."},"l04-sop-pos":{problem:"A Boolean function can be written as a sum of products (SOP) or a product of sums (POS). Both describe the same truth table.",tasks:["Write y1 (SOP), y2 (POS) and y3 as continuous assignments, exactly as given.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Translating SOP and POS expressions into logic, and reading a truth table."},"l05-demorgan":{problem:"De Morgan's laws let you turn ANDs into ORs and back by inverting. They are behind every NAND and NOR trick.",tasks:["Write both sides of both laws. The testbench checks that each pair is equal for every input.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"(A\xB7B)' = A' + B' and (A + B)' = A'\xB7B'."},"l06-kmap":{problem:"A minterm list gives the truth table but not the cheapest circuit. A Karnaugh map finds the simplest SOP form.",tasks:["Draw a 3-variable K-map for F1 and a 4-variable K-map for F2, then write the simplified expressions.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Grouping 1s in a K-map into the largest power-of-two rectangles, including groups that wrap around the edges."},"l07-dontcare":{problem:"Some input combinations never happen. Their outputs are don't-cares (d), and using them as 1s can make the circuit smaller.",tasks:["Simplify F = \u03A3m(1, 3, 7, 11, 15) + d(0, 2, 5) with a 4-variable K-map and write the result.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How don't-care terms enlarge K-map groups."},"l08-parity":{problem:"Parity is the simplest error detection: one extra bit makes the number of 1s even, so a single flipped bit is caught.",tasks:["Generate the even parity bit p for 4 data bits, and the error flag for a received 5-bit word.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"XOR trees and the reduction XOR operator (^d)."},"l09-majority":{problem:"Safety systems use three copies of a signal and take the majority, so that one faulty copy is outvoted.",tasks:["Fill in the truth table, simplify \u03A3m(3, 5, 6, 7) with a K-map and write y.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"From a word description to a truth table to a minimal circuit."},"l10-sub":{problem:"Subtraction needs a borrow instead of a carry. The full subtractor is the building block of a ripple-borrow subtractor.",tasks:["Write D and Bout for the half subtractor and the full subtractor.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Difference and borrow equations, and how they compare with the adder's."},"l29-rca":{problem:"To add multi-bit numbers, full adders are chained so each carry ripples into the next stage.",tasks:["Instantiate full_adder four times and connect the carries.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Structural hierarchy and the ripple-carry adder."},"l18-addsub":{problem:"One adder can also subtract: invert B and add 1, using two's complement. One control input picks the operation.",tasks:["Use XOR gates to invert B when M = 1, feed M in as the carry, and detect signed overflow.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Two's complement subtraction, carry out versus overflow."},"l19-bcdadd":{problem:"Calculators and clocks count in decimal digits (BCD). A binary adder gives the wrong code when a digit sum exceeds 9.",tasks:["Add the two digits in binary, then add 6 and set the carry when the sum is above 9.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Why the add-6 correction works."},"l17-cmp2":{problem:"Comparing two numbers is everywhere: in sorting, in limits, in address decoding.",tasks:["Write gt, eq and lt from the K-map equations with gates only (no >, < or ==).","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Building a comparator from equality (XNOR) terms, from the most significant bit down."},"l30-cmp4":{problem:"Wider numbers are compared by chaining 4-bit comparators. The cascade inputs carry the result of the lower bits.",tasks:["Compare A and B; when they are equal, pass the cascade inputs through.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"How cascading works, and how to tie the inputs of a single chip."},"l14-dec38":{problem:"Decoders select one of many: one memory chip, one display digit, one peripheral. Real parts have active-low outputs and several enables.",tasks:["Decode a to one active-low output when g1 = 1 and both active-low enables are 0. Otherwise all outputs are 1.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Active-low signals and enable logic."},"l11-dec-fa":{problem:"A decoder produces every minterm, so any function is just an OR of the right decoder outputs.",tasks:["Instantiate the 3-to-8 decoder and OR together the minterms of S and C.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Implementing functions with a decoder and OR gates."},"l15-enc83":{problem:"An encoder does the opposite of a decoder. A priority encoder handles several active inputs, as in interrupt controllers.",tasks:["Encode a one-hot input with a valid flag, and find the position of the highest 1 with an any flag.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Plain versus priority encoding, and what happens with invalid inputs."},"l13-mux-demux":{problem:"Multiplexers pick one of many inputs onto one line; demultiplexers send one line to one of many outputs.",tasks:["Write the 8-to-1 mux and the 1-to-8 demux.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mux and demux as data selectors, and indexed part selects."},"l12-mux-fn":{problem:"A 2^n-to-1 multiplexer can implement any function of n + 1 variables: the extra variable goes to the data inputs.",tasks:["Work out the data inputs (0, 1, D or D') two truth-table rows at a time and instantiate mux8.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"The mux implementation method from the lab manuals."},"l16-gray":{problem:"In Gray code only one bit changes between neighbouring values. It is used in encoders and in clock domain crossing.",tasks:["Write the binary-to-Gray and Gray-to-binary converters.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Gray code, and why the reverse conversion chains XORs."},"l20-7seg":{problem:"Digital clocks and meters show digits on 7-segment displays. A decoder (like the 7447/7448) lights the right segments.",tasks:["Fill in the case statement for digits 0 to 9 and blank the display for 10 to 15. The output draws each digit.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Truth tables with many outputs, and the case statement."},"l21-srlatch":{problem:"Memory starts with feedback: two cross-coupled gates can hold a bit. This is the SR latch, the base of every flip-flop.",tasks:["Build the latch from two nand primitives with a 1 ns delay each.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Feedback, the set, reset and hold states, and why S = R = 0 is forbidden for a NAND latch."},"l22-ffs":{problem:"The four classic flip-flops differ only in their characteristic tables. Knowing them is the key to counter and FSM design.",tasks:["Write all four flip-flops in one always block, from their characteristic tables.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Characteristic tables, edge triggering and asynchronous reset."},"l23-ripple":{problem:"The simplest counter: each flip-flop toggles the next. It needs no logic, but the outputs do not change together.",tasks:["Instantiate three toggle flip-flops, each clocked by the output of the stage before.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Asynchronous counters and ripple delay."},"l24-sync":{problem:"In a synchronous counter every flip-flop shares one clock, so all outputs change together.",tasks:["Derive the T inputs from the count and toggle on the clock edge.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Synchronous counter design with T flip-flops."},"l32-updown":{problem:"Counters that go both ways are used in positioning and in volume controls.",tasks:["Use T flip-flops: derive T0, T1 and T2 from the excitation table with the up input.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Excitation tables and K-maps for counter design."},"l27-mod6":{problem:"Clocks divide by 6 and 10 to count seconds and minutes. A MOD-N counter clears itself at N \u2212 1.",tasks:["Count 0 to 5 and go back to 0, with a terminal count output.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Truncated counters and terminal count."},"l25-ring":{problem:"Shift registers with feedback become counters. A ring counter gives one-hot outputs; a Johnson counter doubles the count with the same flops.",tasks:["Write the ring counter (reset 1000) and the Johnson counter (reset 0000) in one always block.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Ring versus twisted-ring (Johnson) counters, and how many states each has."},"l26-siso":{problem:"Shift registers move serial data, as in UARTs and SPI. The data 1001 shifted in comes out four clocks later.",tasks:["Shift sin into q[3] on every clock, with sout = q[0].","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Serial-in serial-out operation and delay in clocks."},"l31-usr":{problem:"One register that can hold, shift left, shift right or load in parallel (like the 74194) covers every shift register use.",tasks:["Pick the next value with a case on mode.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Mode-controlled registers, the basis of the 74194."},"l28-fsm":{problem:"Every sequential circuit is a state machine. Given a state table, you can build it directly.",tasks:["Write the next-state logic from the table and the Moore output z.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"State tables, next-state logic and Moore outputs."},"l33-traffic":{problem:"A real-world state machine with an input (a waiting car) and a timer, the classic FSM design example.",tasks:["Write the four states, the timer for the side green, and the lights for each state.","Run: the testbench checks your design and prints PASS or FAIL.","Stuck? Show solution loads one answer. Reset lab brings your starting point back."],learn:"Moore FSM design with a timer, from a word specification."}};var yn="http://www.w3.org/2000/svg",A=(t,e,n)=>{let s=document.createElementNS(yn,t);for(let[a,i]of Object.entries(e||{}))s.setAttribute(a,i);return n&&n.appendChild(s),s};function kn(t){let e=t.trim(),n="port",s="",a=/^([\s\S]*?)([!+])?$/.exec(e),i=b=>{let f=/^([\s\S]*?)([!+])$/.exec(b);return f?(s=s||f[2],f[1]):b};e=i(a[0]);let o=[["[","]","reg"],["(",")","logic"],["{","}","block"],["<",">","mux"]];for(let[b,f,h]of o)if(e.startsWith(b)&&e.endsWith(f)){n=h,e=e.slice(1,-1);break}n==="port"&&e.startsWith("@")&&(n="clk",e=e.slice(1)),e=i(e);let r=null,u=e.lastIndexOf("|");u>0&&(r=e.slice(u+1).trim(),e=e.slice(0,u));let d=e.indexOf("#"),p=e.trim();d>=0&&(e=e.slice(0,d));let c=e.replace(/\\n/g,`
`).trim();return{id:n+":"+p,label:c,kind:n,dom:r,mark:s}}function wn(t){let e=new Map,n=[],s=a=>{if(!e.has(a.id))e.set(a.id,{...a,order:e.size});else{let i=e.get(a.id);i.dom=i.dom||a.dom,i.mark=i.mark||a.mark}return e.get(a.id)};for(let a of t.split(";").map(i=>i.trim()).filter(Boolean)){let i=/\s+([-~.+])(?:(\S(?:[^>]*?\S)?)\1)?>\s+|\s+>\s+/g,o=0,r=null,u=null,d,p=[];for(;d=i.exec(a);)p.push([a.slice(o,d.index),d]),o=i.lastIndex;p.push([a.slice(o),null]);for(let[c,b]of p){let f=s(kn(c));if(r&&u&&n.push({a:r,b:f,...u}),r=f,b){let h=b[1]||"";u={label:(b[2]||"").trim(),kind:h==="~"?"bad":h==="+"?"good":h==="."?"dash":"plain"}}}}return{nodes:[...e.values()],edges:n}}function _n(t){let e=t.label.split(`
`),n=Math.max(...e.map(s=>s.length))*6.9;return t.kind==="port"||t.kind==="clk"?{w:Math.max(28,n+(t.kind==="clk"?26:12)),h:Math.max(24,e.length*15+6),lines:e}:t.kind==="mux"?{w:Math.max(40,n+24),h:Math.max(52,e.length*15+22),lines:e}:{w:Math.max(54,n+24),h:Math.max(34,e.length*15+16),lines:e}}function Be(t){let e=typeof t=="string"?wn(t):t,{nodes:n,edges:s}=e;if(!n.length)return null;let a=new Map(n.map(g=>[g,[]]));for(let g of s)g.a!==g.b&&a.get(g.a).push(g);let i=new Map,o=new Set,r=g=>{i.set(g,1);for(let l of a.get(g)){let k=i.get(l.b);k===1?o.add(l):k||r(l.b)}i.set(g,2)};for(let g of n)i.get(g)||r(g);let u=new Set(s.filter(g=>g.kind==="dash"&&s.some(l=>l.b===g.b&&l.kind!=="dash"))),d=new Map(n.map(g=>[g,0]));for(let g=0;g<n.length;g++){let l=!1;for(let k of s)k.a!==k.b&&!o.has(k)&&!u.has(k)&&d.get(k.b)<d.get(k.a)+1&&(d.set(k.b,d.get(k.a)+1),l=!0);if(!l)break}let p=Math.max(...d.values());for(let g of n)g.kind==="port"&&!a.get(g).length&&s.some(l=>l.b===g)&&d.get(g)<p&&d.set(g,p);let c=[];for(let g of n){let l=d.get(g);(c[l]=c[l]||[]).push(g)}let b=[...new Set(n.map(g=>g.dom).filter(Boolean))],f=g=>g.dom?b.indexOf(g.dom):-1;for(let g of c)g&&g.sort((l,k)=>f(l)-f(k)||l.order-k.order);for(let g of n)Object.assign(g,_n(g));let h=22,y=18,_=c.map((g,l)=>Math.max(46,...s.filter(k=>d.get(k.a)===l&&d.get(k.b)>l&&k.label).map(k=>k.label.length*6.2+30))),S=new Map;for(let g of n){let l=g.dom;if(!l){let k=s.find(I=>I.a===g&&I.b.dom||I.b===g&&I.a.dom);l=k?k.a===g?k.b.dom:k.a.dom:null}S.set(g,l||"")}let q=[...new Set(n.map(g=>S.get(g)))];q.includes("")&&(q.splice(q.indexOf(""),1),q.unshift(""));let E=b.length>0,L=E?34:0,P=q.map(g=>Math.max(0,...c.map(l=>{let k=(l||[]).filter(I=>S.get(I)===g);return k.reduce((I,z)=>I+z.h,0)+Math.max(0,k.length-1)*h}))),H=[],U=y+(E?22:14);q.forEach((g,l)=>{H[l]=U,U+=P[l]+(l<q.length-1?L:0)});let D=U-y-(E?22:14),$=y,O=new Map,W=0;c.forEach((g,l)=>{if(!g)return;let k=Math.max(...g.map(I=>I.w));q.forEach((I,z)=>{let B=g.filter(V=>S.get(V)===I),j=B.reduce((V,G)=>V+G.h,0)+Math.max(0,B.length-1)*h,N=H[z]+(P[z]-j)/2;for(let V of B)O.set(V,{x:$+(k-V.w)/2,y:N,w:V.w,h:V.h}),N+=V.h+h}),$+=k+_[l]});let Y=o.size>0,C=$-(_[c.length-1]||46)+y;W=y*2+(E?22:14)+D+(Y?26:0);let ae=A("svg",{viewBox:`0 0 ${C} ${W}`,class:"dg dg-block",role:"img"});ae.style.maxWidth=C+"px",ae.style.minWidth=Math.round(Math.min(C,Math.max(C*.72,320)))+"px";let fn=A("defs",{},ae);for(let g of["plain","bad","good","dash"]){let l=A("marker",{id:"dg-ar-"+g,viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"},fn);A("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-"+g},l)}b.forEach((g,l)=>{let k=n.filter(G=>G.dom===g).map(G=>O.get(G)),I=q.indexOf(g),z=Math.min(...k.map(G=>G.x))-10,B=H[I]-22,j=Math.max(...k.map(G=>G.x+G.w))+10,N=H[I]+P[I]+8;A("rect",{x:z,y:B,width:j-z,height:N-B,rx:10,class:`dg-dom dg-d${l%4}`},ae);let V=A("text",{x:z+8,y:B+13,class:`dg-domlabel dg-d${l%4}`},ae);V.textContent=g});let Se=y+(E?22:14)+D+10,$e=A("g",{},ae);for(let g of s){let l=O.get(g.a),k=O.get(g.b),I,z,B;if(g.a===g.b)I=`M${l.x+l.w-10},${l.y} C${l.x+l.w+20},${l.y-26} ${l.x+10},${l.y-26} ${l.x+14},${l.y}`,z=l.x+l.w/2,B=l.y-22;else if(o.has(g)||d.get(g.b)<=d.get(g.a)){let j=l.x+l.w/2,N=k.x+k.w/2;I=`M${j},${l.y+l.h} C${j},${Se+14} ${N},${Se+14} ${N},${k.y+k.h}`,z=(j+N)/2,B=Se+8}else{let j=l.x+l.w,N=l.y+l.h/2,V=k.x,G=k.y+k.h/2,fe=(j+V)/2;I=`M${j},${N} C${fe},${N} ${fe},${G} ${V},${G}`;let Ce=d.get(g.b)-d.get(g.a),X=Ce>1?.5/Ce:.5,J=1-X;z=J*J*J*j+3*J*J*X*fe+3*J*X*X*fe+X*X*X*V,B=J*J*J*N+3*J*J*X*N+3*J*X*X*G+X*X*X*G}if(A("path",{d:I,class:"dg-edge dg-"+g.kind,"marker-end":`url(#dg-ar-${g.kind})`},$e),g.label){let j=g.label.length*6.2+8;A("rect",{x:z-j/2,y:B-9,width:j,height:14,rx:3,class:"dg-elbg"},$e);let N=A("text",{x:z,y:B+2,class:"dg-elabel dg-"+g.kind,"text-anchor":"middle"},$e);N.textContent=g.label}}for(let g of n){let l=O.get(g),k=A("g",{class:`dg-node dg-k-${g.kind}${g.mark==="!"?" dg-bad":g.mark==="+"?" dg-good":""}`},ae);if(g.kind==="reg")A("rect",{x:l.x,y:l.y,width:l.w,height:l.h,rx:3,class:"dg-shape"},k),A("path",{d:`M${l.x},${l.y+l.h-12} L${l.x+7},${l.y+l.h-7} L${l.x},${l.y+l.h-2}`,class:"dg-tri"},k);else if(g.kind==="logic")A("rect",{x:l.x,y:l.y,width:l.w,height:l.h,rx:Math.min(16,l.h/2),class:"dg-shape"},k);else if(g.kind==="block")A("rect",{x:l.x,y:l.y,width:l.w,height:l.h,rx:6,class:"dg-shape"},k);else if(g.kind==="mux")A("path",{d:`M${l.x},${l.y} L${l.x+l.w},${l.y+10} L${l.x+l.w},${l.y+l.h-10} L${l.x},${l.y+l.h} z`,class:"dg-shape"},k);else if(g.kind==="clk"){let B=l.y+l.h/2;A("path",{d:`M${l.x+2},${B+5} h4 v-10 h6 v10 h6 v-10`,class:"dg-clkw"},k)}let I=g.lines,z=g.kind==="clk"?l.x+24:l.x+l.w/2;I.forEach((B,j)=>{let N=A("text",{x:z,y:l.y+l.h/2+(j-(I.length-1)/2)*15+4,"text-anchor":g.kind==="clk"?"start":"middle",class:"dg-label"},k);N.textContent=B})}return ae}function vn(t,e){let n=t.split(/\s+/),s=[],a="";for(let i of n)a&&(a+" "+i).length>e?(s.push(a),a=i):a=a?a+" "+i:i;return a&&s.push(a),s}var xn={P:"Problem",S:"",Q:"Check",X:"What goes wrong",F:"Fix",OK:"Result"};function Ne(t){if(!t||!t.length)return null;let e=300,n=12,s=42,a=18,i=t.map(c=>{let b=/^(P|S|Q|X|F|OK):\s*(.*)$/.exec(c)||[null,"S",c],f=vn(b[2],s),h=xn[b[1]];return{k:b[1],lines:f,tag:h,h:f.length*15+(h?30:16)}}),o=i.reduce((c,b)=>c+b.h,0)+a*(i.length-1)+16,r=A("svg",{viewBox:`0 0 ${e+16} ${o}`,class:"dg dg-flow",role:"img"});r.style.maxWidth=e+16+"px";let u=A("defs",{},r),d=A("marker",{id:"dg-ar-flow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto"},u);A("path",{d:"M0,0 L10,5 L0,10 z",class:"dg-ah dg-plain"},d);let p=8;return i.forEach((c,b)=>{let f=A("g",{class:"dg-fl dg-fl-"+c.k},r);c.k==="Q"?A("path",{d:`M22,${p} H${8+e-14} L${8+e},${p+c.h/2} L${8+e-14},${p+c.h} H22 L8,${p+c.h/2} z`,class:"dg-shape"},f):A("rect",{x:8,y:p,width:e,height:c.h,rx:c.k==="S"?6:10,class:"dg-shape"},f);let h=p+18;if(c.tag){let y=A("text",{x:8+n+(c.k==="Q"?10:0),y:h,class:"dg-ftag"},f);y.textContent=c.tag.toUpperCase(),h+=16}for(let y of c.lines){let _=A("text",{x:8+n+(c.k==="Q"?10:0),y:h,class:"dg-ftext"},f);_.textContent=y,h+=15}p+=c.h,b<i.length-1&&(A("path",{d:`M${8+e/2},${p+1} V${p+a-2}`,class:"dg-edge dg-plain","marker-end":"url(#dg-ar-flow)"},r),p+=a)}),r}var Me={adder:["i-46z3tTYGM",10200,10800],basic:["za2o93ldrVQ",3240,3840],"cdc-bus":["akitv2i4Nxw",3720,4320],"cdc-clocks":["akitv2i4Nxw",0,600],"cdc-fifo":["akitv2i4Nxw",5310,5910],"cdc-find":["akitv2i4Nxw",1200,1800],"cdc-fix":["akitv2i4Nxw",1110,1710],"cdc-handshake":["akitv2i4Nxw",2940,3540],"cdc-pulse":["akitv2i4Nxw",2370,2970],"cdc-reset":["akitv2i4Nxw",5535,6135],counter:["i-46z3tTYGM",20400,21e3],"cov-1":["9SxAZWWVeJc",11373,11973],"cov-2":["9SxAZWWVeJc",11373,11973],"cov-3":["9SxAZWWVeJc",11373,11973],"cov-4":["9SxAZWWVeJc",11373,11973],"cov-5":["9SxAZWWVeJc",11373,11973],"cov-6":["9SxAZWWVeJc",11373,11973],"cov-7":["9SxAZWWVeJc",11040,11640],"cov-8":["9SxAZWWVeJc",11040,11640],"cov-9":["9SxAZWWVeJc",11040,11640],"dv-17":["9SxAZWWVeJc",11040,11640],"dv-18":["9SxAZWWVeJc",11040,11640],"dv-19":["9SxAZWWVeJc",10800,11400],"dv-4":["9SxAZWWVeJc",1031,1631],exceptions:["za2o93ldrVQ",8520,9120],fifo:["i-46z3tTYGM",22800,23400],fsm:["i-46z3tTYGM",24600,25200],"l01-gates":["8bmt4UJmJ_k",3347,3947],"l02-nand":["8bmt4UJmJ_k",3347,3947],"l03-nor":["8bmt4UJmJ_k",3347,3947],"l04-sop-pos":["8bmt4UJmJ_k",5100,5700],"l05-demorgan":["8bmt4UJmJ_k",4704,5304],"l06-kmap":["8bmt4UJmJ_k",5659,6259],"l07-dontcare":["8bmt4UJmJ_k",6900,7500],"l10-sub":["8bmt4UJmJ_k",7200,7800],"l11-dec-fa":["8bmt4UJmJ_k",7200,7800],"l12-mux-fn":["8bmt4UJmJ_k",7500,8100],"l13-mux-demux":["8bmt4UJmJ_k",7500,8100],"l14-dec38":["8bmt4UJmJ_k",7200,7800],"l15-enc83":["8bmt4UJmJ_k",7200,7800],"l18-addsub":["8bmt4UJmJ_k",2700,3300],"l19-bcdadd":["8bmt4UJmJ_k",7200,7800],"l21-srlatch":["8bmt4UJmJ_k",7500,8100],"l22-ffs":["8bmt4UJmJ_k",7500,8100],"l29-rca":["8bmt4UJmJ_k",7200,7800],mux:["i-46z3tTYGM",10800,11400],"p1-c2f":["i-46z3tTYGM",9900,10500],"p1-fa-bh":["i-46z3tTYGM",3900,4500],"p1-fa-df":["i-46z3tTYGM",3600,4200],"p1-fa-st":["i-46z3tTYGM",3900,4500],"p1-ha-bh":["i-46z3tTYGM",2400,3e3],"p1-ha-df":["i-46z3tTYGM",2100,2700],"p1-ha-st":["i-46z3tTYGM",1500,2100],"p1-ops":["i-46z3tTYGM",8400,9e3],"p2-add4":["i-46z3tTYGM",10200,10800],"p2-alu":["i-46z3tTYGM",12900,13500],"p2-bshift8":["i-46z3tTYGM",13500,14100],"p2-cmp4":["i-46z3tTYGM",12600,13200],"p2-dec24":["i-46z3tTYGM",11400,12e3],"p2-enc42":["i-46z3tTYGM",12300,12900],"p2-mux2":["i-46z3tTYGM",10800,11400],"p2-mux4":["i-46z3tTYGM",10800,11400],"p2-penc42":["i-46z3tTYGM",12300,12900],"p3-dff":["i-46z3tTYGM",15900,16500],"p3-dff-arh":["i-46z3tTYGM",18300,18900],"p3-dff-arl":["i-46z3tTYGM",17400,18e3],"p3-dff-ash":["i-46z3tTYGM",18600,19200],"p3-dff-neg-arh":["i-46z3tTYGM",17100,17700],"p3-dff-srh":["i-46z3tTYGM",18e3,18600],"p3-dff-srl":["i-46z3tTYGM",18e3,18600],"p3-dff-srs":["i-46z3tTYGM",18e3,18600],"p3-dlatch":["i-46z3tTYGM",15300,15900],"p3-dlatch-rst":["i-46z3tTYGM",15600,16200],"p3-sync-async":["i-46z3tTYGM",18300,18900],"p4-afifo":["i-46z3tTYGM",24e3,24600],"p4-cnt":["i-46z3tTYGM",20400,21e3],"p4-cnt-load":["i-46z3tTYGM",20700,21300],"p4-cnt-tb":["i-46z3tTYGM",20400,21e3],"p4-div2":["i-46z3tTYGM",22200,22800],"p4-div3":["i-46z3tTYGM",22200,22800],"p4-div4":["i-46z3tTYGM",22200,22800],"p4-fifo":["i-46z3tTYGM",22800,23400],"p4-mealy-nov":["i-46z3tTYGM",24600,25200],"p4-mealy-ov":["i-46z3tTYGM",24600,25200],"p4-mod":["i-46z3tTYGM",21300,21900],"p4-moore-nov":["i-46z3tTYGM",24600,25200],"p4-moore-ov":["i-46z3tTYGM",24600,25200],"p4-range":["i-46z3tTYGM",21600,22200],"p4-range-udl":["i-46z3tTYGM",21900,22500],"p4-sr5":["i-46z3tTYGM",19200,19800],"p4-updown":["i-46z3tTYGM",21e3,21600],"p4-usr5":["i-46z3tTYGM",19800,20400],"pd-b0":["somgoTERlmw",540,1140],"pd-b1":["somgoTERlmw",3900,4500],"pd-c1":["somgoTERlmw",8820,9420],"pd-c2":["somgoTERlmw",8820,9420],"pd-c3":["somgoTERlmw",8850,9450],"pd-f3":["somgoTERlmw",6600,7200],"pd-f4":["somgoTERlmw",7320,7920],"pd-p1":["somgoTERlmw",7950,8550],"pd-p3":["somgoTERlmw",7980,8580],"pd-p4":["somgoTERlmw",7950,8550],"pd-r1":["somgoTERlmw",9960,10560],"pd-r2":["somgoTERlmw",9960,10560],"pd-s2":["somgoTERlmw",7410,8010],"pd-s4":["somgoTERlmw",1700,2300],"s01-reg":["TIZwEGRvhBU",7200,7800],"s02-mux":["TIZwEGRvhBU",8400,9e3],"s03-cnt":["TIZwEGRvhBU",7200,7800],"s04-ctrl":["TIZwEGRvhBU",4500,5100],"s05-alu":["TIZwEGRvhBU",9e3,9600],"s06-memtb":["TIZwEGRvhBU",7500,8100],"s07-struct":["TIZwEGRvhBU",5100,5700],"s10-gen":["TIZwEGRvhBU",8100,8700],"s12-uart":["TIZwEGRvhBU",4500,5100],"sdc-c1":["VGQp99ArgSE",1620,2220],"sdc-c10":["VGQp99ArgSE",9510,10110],"sdc-c11":["VGQp99ArgSE",10530,11130],"sdc-c12":["VGQp99ArgSE",11070,11670],"sdc-c13":["VGQp99ArgSE",4530,5130],"sdc-c14":["VGQp99ArgSE",7020,7620],"sdc-c15":["VGQp99ArgSE",6e3,6600],"sdc-c16":["VGQp99ArgSE",4830,5430],"sdc-c2":["VGQp99ArgSE",4830,5430],"sdc-c20":["VGQp99ArgSE",8730,9330],"sdc-c3":["VGQp99ArgSE",2610,3210],"sdc-c4":["VGQp99ArgSE",3360,3960],"sdc-c5":["VGQp99ArgSE",4740,5340],"sdc-c6":["VGQp99ArgSE",6600,7200],"sdc-c7":["VGQp99ArgSE",8460,9060],"sdc-c8":["VGQp99ArgSE",8460,9060],"sdc-c9":["VGQp99ArgSE",8670,9270],"so-s3":["za2o93ldrVQ",6330,6930],"so-s4":["za2o93ldrVQ",8100,8700],"so-s7":["za2o93ldrVQ",2820,3420],"sva-a1":["9SxAZWWVeJc",9600,10200],"sva-a6":["9SxAZWWVeJc",6e3,6600],"sva-b1":["9SxAZWWVeJc",1784,2384],"sva-b10":["9SxAZWWVeJc",4500,5100],"sva-b2":["9SxAZWWVeJc",2710,3310],"sva-b3":["9SxAZWWVeJc",3600,4200],"sva-b4":["9SxAZWWVeJc",5400,6e3],"sva-b5":["9SxAZWWVeJc",6e3,6600],"sva-b6":["9SxAZWWVeJc",4200,4800],"sva-b7":["9SxAZWWVeJc",2400,3e3],"sva-b8":["9SxAZWWVeJc",10800,11400],"sva-b9":["9SxAZWWVeJc",10800,11400],"sva-p1":["9SxAZWWVeJc",6300,6900],"sva-p2":["9SxAZWWVeJc",6300,6900],"sva-p3":["9SxAZWWVeJc",9600,10200],"sva-p5":["9SxAZWWVeJc",9900,10500],"sva-p6":["9SxAZWWVeJc",9900,10500],"sva-p8":["9SxAZWWVeJc",3600,4200],"sva-s1":["9SxAZWWVeJc",6600,7200],"sva-s2":["9SxAZWWVeJc",7200,7800],"sva-s3":["9SxAZWWVeJc",7500,8100],"sva-s4":["9SxAZWWVeJc",9300,9900],"sva-s5":["9SxAZWWVeJc",8700,9300],"sva-s6":["9SxAZWWVeJc",9e3,9600],"syn-adder":["97q0N3DCZTw",555,1155],"syn-alu":["97q0N3DCZTw",959,1559],"syn-counter":["97q0N3DCZTw",5790,6390],"syn-det_1011":["97q0N3DCZTw",5580,6180],"syn-ibex":["97q0N3DCZTw",1490,2090],"syn-mux":["97q0N3DCZTw",30,630],"syn-shift_register":["97q0N3DCZTw",1889,2489],"ver-v1":["VGQp99ArgSE",8730,9330],"ver-v10":["VGQp99ArgSE",4830,5430],"ver-v11":["VGQp99ArgSE",4890,5490],"ver-v12":["VGQp99ArgSE",4890,5490],"ver-v2":["VGQp99ArgSE",8670,9270],"ver-v3":["VGQp99ArgSE",8670,9270],"ver-v4":["VGQp99ArgSE",8730,9330],"ver-v5":["VGQp99ArgSE",8670,9270],"ver-v6":["VGQp99ArgSE",8760,9360],"ver-v9":["VGQp99ArgSE",4830,5430],violation:["za2o93ldrVQ",1020,1620],"ws-lab1":["za2o93ldrVQ",4500,5100],"ws-lab12":["za2o93ldrVQ",1020,1620],"ws-lab13":["za2o93ldrVQ",8670,9270],"ws-lab14":["za2o93ldrVQ",3540,4140],"ws-lab3":["za2o93ldrVQ",1020,1620],"ws-lab6":["za2o93ldrVQ",2430,3030],"ws-lab7":["za2o93ldrVQ",2070,2670],"x-consolidate":["akitv2i4Nxw",3720,4320],"x-fifo":["akitv2i4Nxw",5310,5910],"x-gray":["akitv2i4Nxw",4710,5310],"x-mcp":["akitv2i4Nxw",5220,5820],"x-recon":["akitv2i4Nxw",3420,4020],"x-recon-fix":["akitv2i4Nxw",4170,4770]};var He={_note:"One YouTube course per topic, used for the study plans' daily watch slices. d = length in seconds.",logic:{id:"8bmt4UJmJ_k",title:"Digital Logic Design Full Course",d:8504},verilog:{id:"i-46z3tTYGM",title:"Complete Verilog Course",d:26621},systemverilog:{id:"TIZwEGRvhBU",title:"Complete SystemVerilog Course for Digital Design",d:10300},sva:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},dv:{id:"9SxAZWWVeJc",title:"SystemVerilog Assertions (SVA) Complete Course",d:11973},synth:{id:"97q0N3DCZTw",title:"VLSI Logic Synthesis",d:8583},cdc:{id:"akitv2i4Nxw",title:"Clock Domain Crossing (CDC) Full Course",d:6135},sta:{id:"za2o93ldrVQ",title:"Static Timing Analysis Full Course",d:9332},sdc:{id:"VGQp99ArgSE",title:"Complete SDC Timing Constraints Course",d:12024},pd:{id:"somgoTERlmw",title:"Physical Design Full Course",d:12047}};var je={};for(let t of Object.values(He))t&&t.id&&(je[t.id]=t.title);var ze=t=>{let e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return(e?e+":"+String(n).padStart(2,"0"):n)+":"+String(s).padStart(2,"0")};function $n(t,e){let n=t.querySelector(".brief-watch"),s=Me[e];if(!s){n&&n.remove();return}let[a,i,o]=s,r=je[a]||"the course video";n||(n=document.createElement("div"),n.className="brief-watch",t.querySelector(".brief-body").before(n)),n.innerHTML=`<div class="bw-row"><span class="bw-ic" aria-hidden="true">\u{1F4FA}</span><span class="bw-txt"><b>Watch for this lab:</b> <span class="bw-t"></span> of <a target="_blank" rel="noopener"></a> <span class="bw-min"></span></span>
    <button type="button" class="bw-play">\u25B6 Play this part</button></div><span class="vbadge"></span><div class="bw-player" hidden></div>`,n.querySelector(".bw-t").textContent=ze(i)+" \u2192 "+ze(o);let u=n.querySelector("a");u.textContent=r,u.href=`https://www.youtube.com/watch?v=${a}&t=${i}s`,n.querySelector(".bw-min").textContent=`(${Math.max(1,Math.round((o-i)/60))} min)`;let d=n.querySelector(".vbadge");window.vddVideo&&window.vddVideo.label(d,a),n.querySelector(".bw-play").addEventListener("click",p=>{let c=n.querySelector(".bw-player");c.hidden=!1,c.innerHTML="";let b=document.createElement("button");c.appendChild(b),p.currentTarget.hidden=!0,window.vddVideo&&window.vddVideo.play(b,{id:a,title:r,start:i,end:o},"video-frame",d)})}function Ae(t,e,n){let s=document.getElementById("lab-brief");if(!s)return;let a=t[e];if(!a){s.hidden=!0;return}try{$n(s,e)}catch(p){console.warn("watch",p)}s.querySelector(".brief-problem").textContent=a.problem;let i=s.querySelector(".brief-tasks");i.innerHTML="";for(let p of a.tasks){let c=document.createElement("li");c.textContent=p,i.appendChild(c)}s.querySelector(".brief-learn").textContent=a.learn;let o=s.querySelector(".brief-fig"),r=a.images||(a.image?[{src:a.image,alt:a.imageAlt||""}]:[]);if(r.length||a.html){if(o||(o=document.createElement("figure"),o.className="brief-fig",s.appendChild(o)),o.innerHTML="",r.length){let p=document.createElement("div");p.className="brief-imgs";for(let c of r){let b=document.createElement("a");b.href=c.src,b.target="_blank",b.rel="noopener";let f=document.createElement("img");f.src=c.src,f.alt=c.alt||"",f.loading="lazy",b.appendChild(f),p.appendChild(b)}o.appendChild(p)}if(a.html){let p=document.createElement("div");p.className="brief-html",p.innerHTML=a.html,o.appendChild(p)}if(a.caption){let p=document.createElement("figcaption");p.textContent=a.caption,o.appendChild(p)}}else o&&o.remove();let u=s.querySelector(".brief-dg"),d=n&&n[e];if(d&&(d.b||d.f)){u||(u=document.createElement("div"),u.className="brief-dg",s.querySelector(".brief-body").after(u)),u.innerHTML="";let p=(c,b)=>{if(!b)return;let f=document.createElement("div");f.className="brief-dgp";let h=document.createElement("h3");h.textContent=c,f.appendChild(h);let y=document.createElement("div");y.className="brief-dgs",y.appendChild(b),f.appendChild(y),u.appendChild(f)};try{p(d.bt||"Design",d.b?Be(d.b):null)}catch(c){console.warn("diagram",e,c)}try{p(d.ft||"Problem \u2192 solution",d.f?Ne(d.f):null)}catch(c){console.warn("flow",e,c)}u.classList.toggle("one",u.children.length===1)}else u&&u.remove();s.hidden=!1}var An=new Set(`module endmodule input output inout wire reg logic bit byte int integer real assign always always_ff
always_comb always_latch initial begin end if else case casez casex endcase default for while repeat forever posedge negedge
or and not nand nor xor xnor function endfunction task endtask return typedef enum struct packed parameter localparam generate
endgenerate genvar assert assume cover property endproperty sequence endsequence disable iff throughout within intersect
first_match class endclass extends virtual new this super rand randc constraint dist inside solve before soft foreach covergroup
endgroup coverpoint bins illegal_bins ignore_bins wildcard cross binsof with fork join join_any join_none wait interface
endinterface modport import package endpackage automatic static void string signed unsigned until s_eventually`.split(/\s+/)),Tn=/\$?[A-Za-z_][A-Za-z0-9_$]*|\d*'[sS]?[bBhHdDoO][0-9a-fA-FxXzZ_?]+|\d+(?:\.\d+)?|\s+|./g,Te=t=>/^\s*(\/\/|\/\*|\*)/.test(t),ke=t=>t.replace(/\/\/.*$/,"").trimEnd();function Dn(t){if(Te(t)||(t=ke(t),!t.trim()))return null;let e=t.match(Tn)||[],n=[],s=!1,a=!0;return e.forEach((i,o)=>{if(!/^[\$A-Za-z0-9_']/.test(i)||An.has(i)||i.startsWith("$"))n.push(i);else{let u=e.slice(o+1).join(""),p=/^[A-Za-z_]/.test(i)&&(!s&&a&&/^\s*(<=|=(?!=)|\[|:(?!:)|;|,|#|[A-Za-z_]\w*\s*\()/.test(u)||n[n.length-1]===".");n.push(p?i:"___"),i.startsWith("$")||(a=!1)}(i==="="||i==="<"&&e[o+1]==="=")&&(s=!0),i===";"&&(s=!1,a=!0)}),n.join("").replace(/___(\s*___)+/g,"___")}function On(t,e){let n=t.length,s=e.length,a=Array.from({length:n+1},()=>new Int32Array(s+1));for(let p=n-1;p>=0;p--)for(let c=s-1;c>=0;c--)a[p][c]=t[p].trim()===e[c].trim()?a[p+1][c+1]+1:Math.max(a[p+1][c],a[p][c+1]);let i=[],o=0,r=0,u=null,d=()=>{u&&(u.add.length||u.del.length)&&i.push(u),u=null};for(;o<n||r<s;)o<n&&r<s&&t[o].trim()===e[r].trim()?(d(),o++,r++):r<s&&(o>=n||a[o][r+1]>=a[o+1][r])?(u=u||{at:o,add:[],del:[]},u.add.push(e[r++])):(u=u||{at:o,add:[],del:[]},u.del.push({n:o+1,text:t[o++]}));return d(),i.map(p=>({at:p.at,add:p.add.filter(c=>!Te(c)&&ke(c).trim()),del:p.del.filter(c=>!Te(c.text)&&ke(c.text).trim())})).filter(p=>p.add.length||p.del.length)}var In=[[/\?[^:]*:/,"the ?: (conditional) operator"],[/\balways_ff\b/,"an always_ff block"],[/\balways_comb\b/,"an always_comb block"],[/\balways\s*@\s*\(\s*\*|\balways\s*@\*/,"a combinational always @* block"],[/\balways\s*@\s*\(\s*(pos|neg)edge/,"a clocked always block"],[/\b(pos|neg)edge\s+\w+\s+or\s+(pos|neg)edge/,"an asynchronous reset"],[/<=/,"non-blocking assignments (<=)"],[/\bcase[zx]?\b/,"a case statement"],[/\bfor\s*\(/,"a for loop"],[/\{[^}]*,[^}]*\}/,"concatenation { , }"],[/\{\s*\d+\s*\{/,"replication {N{\u2026}}"],[/[~^&|]\s*\w/,"bitwise / reduction operators"],[/>>>|<<<|>>|<</,"shifts"],[/\bassert\s+property\b/,"an assert property"],[/\bcover\s+property\b/,"a cover property"],[/\|->/,"overlapping implication |->"],[/\|=>/,"non-overlapping implication |=>"],[/##\[/,"a delay range ##[m:n]"],[/##\d/,"a fixed delay ##N"],[/\[\*/,"consecutive repetition [*N]"],[/\[->|\[=/,"goto / non-consecutive repetition"],[/\$past\b/,"$past"],[/\$rose\b/,"$rose"],[/\$fell\b/,"$fell"],[/\$stable\b/,"$stable"],[/\$(onehot0?|countones|isunknown)\b/,"a system function such as $onehot / $countones"],[/\bdisable\s+iff\b/,"disable iff"],[/\bconstraint\b/,"a constraint block"],[/\brandc\b/,"randc"],[/\bdist\b/,"a dist weighting"],[/\binside\b/,"inside { \u2026 }"],[/\bsolve\b.*\bbefore\b/,"solve \u2026 before"],[/\bcovergroup\b|\bcoverpoint\b/,"a covergroup / coverpoint"],[/\bbins\b/,"bins"],[/\bcross\b/,"a cross"],[/=>/,"transition bins (a => b)"],[/\bfork\b/,"fork \u2026 join"],[/\bjoin_any\b/,"join_any"],[/\bdisable\s+fork\b/,"disable fork"],[/\bwait\s*\(/,"wait ( \u2026 )"],[/@\s*\(\s*(pos|neg)edge/,"waiting on a clock edge"],[/\brepeat\s*\(/,"repeat ( \u2026 )"],[/\bvirtual\b/,"virtual methods / interfaces"],[/\bextends\b/,"class inheritance (extends)"],[/\bnew\s*\(/,"new()"],[/\bmailbox\b/,"a mailbox"],[/\bsemaphore\b/,"a semaphore"],[/\.(push_back|pop_front|size)\b/,"queue methods"],[/\bfunction\b/,"a function"],[/\btask\b/,"a task"],[/\btypedef\s+enum\b/,"an enum type"],[/\bgenerate\b|\bgenvar\b/,"a generate loop"],[/^\s*(and|or|not|nand|nor|xor|xnor|buf)\b/m,"gate primitives (and, or, xor \u2026)"],[/^\s*\w+\s+(#\(.*\)\s*)?\w+\s*\(\s*\./m,"module instances with .port(signal) connections"],[/\b(nand|nor|and|or|not)\s+#/,"gate delays (#N)"],[/[*\/]\s*[\w(]/,"arithmetic (*, /)"],[/\boption\.|\btype_option\./,"covergroup options (option.\u2026)"],[/^\s*wire\b/m,"internal wires"],[/\bassign\b/,"a continuous assign"],[/\bif\s*\(/,"an if / else"]];function ye(t,e){return t+" "+e+(t===1?"":"s")}function De(t,e){if(!t||!t.solution)return null;let n=[];for(let u of["design","tb"]){let d=t.solution[u];if(d==null||d===t[u])continue;let p=On((t[u]||"").split(`
`),d.split(`
`));p.length&&n.push({part:u,name:e[u],hunks:p})}if(!n.length)return null;let s=[],a=[];for(let u of n)for(let d of u.hunks){let p=d.del.length?d.del[0].n:d.at,c=d.del.length&&d.add.length?d.del.length===d.add.length?`edit ${ye(d.add.length,"line")}`:`replace ${ye(d.del.length,"line")} with ${d.add.length}`:d.add.length?`add ${ye(d.add.length,"line")}`:`remove ${ye(d.del.length,"line")}`,b=d.del.length?`at line ${p}`:p===0?"at the top":`after line ${p}`;s.push({file:u.name,pos:b,what:c}),a.push(...d.add)}let i=a.map(ke).join(`
`),o=[];for(let[u,d]of In)u.test(i)&&!o.includes(d)&&o.push(d);let r=[];for(let u of n)for(let d of u.hunks){let p=d.del.length?d.del[0].n:d.at,c=d.add.map(Dn).filter(Boolean);r.push({file:u.name,pos:d.del.length?`line ${p}`:p===0?"top":`after line ${p}`,lines:c.length?c:d.del.map(b=>"remove: "+b.text.trim())})}return{where:s.slice(0,6),more:Math.max(0,s.length-6),ideas:o.slice(0,5),shape:r.slice(0,6)}}var x=(t,e,n,s)=>["P: "+t,...(Array.isArray(e)?e:[e]).map(a=>"S: "+a),"Q: "+(s||"The testbench drives every input combination and compares with a reference."),"OK: "+n],v=(t,e,n,s)=>["P: "+t,...(Array.isArray(e)?e:[e]).map(a=>"S: "+a),"Q: "+(s||"Every clock, the testbench compares your design with a reference model."),"OK: "+n],Ue={counter:{b:"en > (+1 if en) > [count] > count; [count] > (+1 if en); rst_n .async.> [count]",f:v("Timers and addresses need a counter that resets, counts when enabled and wraps.","count <= count + 1 when en, on the rising edge; rst_n clears it at once.","A parameterised counter you can read in the waveform.","Find the cycle where it wraps from 15 to 0.")},mux:{b:"a > <4:1 mux> > y; b > <4:1 mux>; c > <4:1 mux>; d > <4:1 mux>; sel .2 bits.> <4:1 mux>",f:x("Pick one of four 8-bit buses.","A case on sel inside always @(*), with every value covered.","No latch: every sel value drives y.")},adder:{b:"a[0], b[0], cin > {FA0} -c1-> {FA1} -c2-> {FA2} -c3-> {FA3} > cout; {FA0} > sum",f:x("Checking results by eye does not scale.",["A 4-bit ripple-carry adder from full adders.","The testbench loops over all 512 inputs and compares with a + b + cin."],"The testbench prints PASS or FAIL by itself.","Does the self-checking testbench find a bug you add?")},fsm:{b:"din > (next state) > [state\\nS0..S4] > (found = S4) > found; [state\\nS0..S4] > (next state)",f:["P: Detect 1011 in a serial stream, including overlaps (10111011).","S: One state per prefix matched: S0, 1, 10, 101, 1011.","S: After 1011 the last 1 can start the next match.","Q: Count the detections in the run.","OK: A Moore FSM: found depends on the state only."]},cdc:{b:"async_in > [s1|clk_dst] > [s2|clk_dst] > sync_out",f:["P: A signal from another clock can make the sampling flop metastable.","S: The first flop may go metastable.","S: The second flop gives it a whole clock to settle.","OK: sync_out is a clean level in clk_dst, two clocks later."]},fifo:{b:"din > {memory 8\xD78} > dout; wr_en > [wptr] .> {memory 8\xD78}; rd_en > [rptr] .> {memory 8\xD78}; [wptr] > (count, full, empty); [rptr] > (count, full, empty)",f:["P: Producer and consumer run at different rates.","S: Write at wptr, read at rptr, both wrap around.","Q: Writes when full and reads when empty must be ignored.","OK: A FIFO with correct full and empty flags."]},sv:{b:"{always_ff\\nstate} > {always_comb\\nlights} > lights; {always_comb\\nnext state} > {always_ff\\nstate}; {assertions} .check.> {always_ff\\nstate}",f:["P: Plain Verilog FSMs use magic numbers and are hard to read.","S: typedef enum names the states; always_ff and always_comb show the intent.","S: Assertions check the design while it runs.","OK: A readable traffic-light FSM that checks itself."]},"p1-ha-df":{b:"a > (XOR) > sum; b > (XOR); a > (AND) > carry; b > (AND)",f:x("Add two bits.","assign sum = a ^ b; assign carry = a & b;","Dataflow: continuous assignments only.")},"p1-ha-bh":{b:"a > {always @(*)\\ncase {a, b}} > sum; b > {always @(*)\\ncase {a, b}} > carry",f:x("The same half adder, by its behavior.","An always @(*) block with a case on {a, b}; outputs are reg.","Behavioral modelling gives the same truth table.")},"p1-ha-st":{b:"a > (xor g1) > sum; b > (xor g1); a > (and g2) > carry; b > (and g2)",f:x("The same half adder from gates.","Instantiate xor and and primitives and wire them.","Structural modelling with gate primitives.")},"p1-fa-df":{b:"a > (a ^ b ^ cin) > sum; b > (a ^ b ^ cin); cin > (a ^ b ^ cin); a > (majority) > cout; b > (majority); cin > (majority)",f:x("Add three bits.","sum = a ^ b ^ cin; cout = ab + cin(a ^ b).","The full adder in two equations.")},"p1-fa-bh":{b:"a > {always @(*)\\n{cout, sum} = a+b+cin} > sum; b > {always @(*)\\n{cout, sum} = a+b+cin} > cout; cin > {always @(*)\\n{cout, sum} = a+b+cin}",f:x("The same full adder, by its behavior.","{cout, sum} = a + b + cin inside always @(*).","Verilog arithmetic does the work.")},"p1-fa-st":{b:"a > {half_adder 1} -s1-> {half_adder 2} > sum; b > {half_adder 1} -c1-> (OR) > cout; cin > {half_adder 2} -c2-> (OR)",f:x("Build a full adder the textbook way.","Two half_adder instances and an OR gate, connected by name.","Hierarchy: modules inside modules.")},"p1-ops":{b:"a[3:0] > {arithmetic, bitwise, logical,\\nreduction, relational, shift,\\nconcat, replicate, ?:} > one output per operator; b[3:0] > {arithmetic, bitwise, logical,\\nreduction, relational, shift,\\nconcat, replicate, ?:}",f:x("Know every Verilog operator group.","Each output uses one operator on a and b.","Widths and results of every operator.")},"p1-c2f":{b:"C > {task c2f\\nF = C*9/5 + 32} > F",f:["P: The same calculation is needed many times.","S: Write it once as a task with input and output arguments.","S: Call it for every temperature.","Q: Integer arithmetic: multiply before you divide.","OK: One task, many calls, the same result as the formula."]},"p2-add4":{b:"a[3:0] > (a + b + cin) > sum[3:0]; b[3:0] > (a + b + cin) > cout; cin > (a + b + cin)",f:x("Add two 4-bit numbers and a carry in.","{cout, sum} = a + b + cin: the result needs 5 bits.","Concatenation catches the carry out.")},"p2-mux2":{b:"a > <2:1> > y; b > <2:1>; sel .> <2:1>",f:x("Pick one of two inputs.","y = sel ? b : a.","The conditional operator is a mux.")},"p2-mux4":{b:"d0 > <4:1> > y; d1 > <4:1>; d2 > <4:1>; d3 > <4:1>; sel .2 bits.> <4:1>",f:x("Pick one of four inputs.","A case on sel, or nested ?:.","Every sel value selects one input.")},"p2-dec24":{b:"a[1:0] > {2-to-4 decoder} > y[3:0]; en .> {2-to-4 decoder}",f:x("Turn a 2-bit number into one-hot select lines.","y = en ? 1 << a : 0.","Exactly one line high when enabled.")},"p2-enc42":{b:"d[3:0] > {4-to-2 encoder} > y[1:0]; {4-to-2 encoder} > valid",f:x("Find which one of four lines is high.","A case on d for the four one-hot values; valid = 0 otherwise.","Encoding, and flagging illegal inputs.")},"p2-penc42":{b:"d[3:0] > {priority encoder\\nhighest 1 wins} > y[1:0]; {priority encoder\\nhighest 1 wins} > valid",f:x("Several requests at once: the highest wins.","if/else from d[3] down to d[0].","Priority comes from the order of the tests.")},"p2-cmp4":{b:"a[3:0] > {comparator} > gt; b[3:0] > {comparator} > eq; {comparator} > lt",f:x("Compare two unsigned 4-bit numbers.","gt, eq and lt with relational operators.","Exactly one output is 1 for every pair.")},"p2-bshift8":{b:"d[7:0] > {barrel shifter} > y[7:0]; amt .0 to 7.> {barrel shifter}; dir .left/right.> {barrel shifter}; rotate .> {barrel shifter}",f:x("Shift or rotate by any amount in one step.",["Shift with << or >>.","For rotate, OR in the bits that fell off the other end."],"A processor-style shift unit.")},"p2-alu":{b:"a > (add, sub, and, or,\\nxor, not, shl, shr) > <op mux> > y; b > (add, sub, and, or,\\nxor, not, shl, shr); op .3 bits.> <op mux>; <op mux> > (y == 0) > zero; (add, sub, and, or,\\nxor, not, shl, shr) > carry",f:x("Eight operations in one block, chosen by an opcode.","A case on op; zero and carry flags.","The heart of a processor datapath.")},"p3-dlatch":{b:"d > [latch\\nen = 1: q = d] > q; en .> [latch\\nen = 1: q = d]",f:v("Store a bit while en = 0, follow d while en = 1.","always @(*) if (en) q = d: the missing else makes a latch.","A transparent latch.","Does q follow d while en is high?")},"p3-dlatch-rst":{b:"d > [latch] > q; en .> [latch]; rst .async, wins.> [latch]",f:v("Clear the latch at once, whatever en is.","Test rst first, then en.","A latch with an asynchronous reset.")},"p3-dff":{b:"d > [DFF] > q; @clk .> [DFF]",f:v("Sample d only on the rising edge.","always @(posedge clk) q <= d.","The basic memory element of synchronous design.")},"p3-dff-arh":{b:"d > [DFF] > q; @clk .> [DFF]; rst .async, high.> [DFF]",f:v("Reset must work with no clock running.","always @(posedge clk or posedge rst).","rst clears q immediately.")},"p3-dff-neg-arh":{b:"d > [DFF\\nfalling edge] > q; @clk .negedge.> [DFF\\nfalling edge]; rst .async.> [DFF\\nfalling edge]",f:v("Capture on the falling edge, as in DDR.","always @(negedge clk or posedge rst).","q changes at the falling edge.")},"p3-dff-arl":{b:"d > [DFF] > q; @clk .> [DFF]; rst_n .async, low.> [DFF]",f:v("Most chips use an active-low reset.","always @(posedge clk or negedge rst_n) if (!rst_n) ...","rst_n = 0 clears q at once.")},"p3-dff-ash":{b:"d > [DFF] > q; @clk .> [DFF]; set .async, high.> [DFF]",f:v("Some registers must start at 1.","set forces q to 1 without waiting for the clock.","An asynchronous set.")},"p3-dff-srh":{b:"d > <rst ? 0 : d> > [DFF] > q; rst .> <rst ? 0 : d>; @clk .> [DFF]",f:v("A reset that is timed like data.","Only posedge clk in the sensitivity list; test rst inside.","rst acts on the next clock edge.")},"p3-dff-srl":{b:"d > <rst_n ? d : 0> > [DFF] > q; rst_n .> <rst_n ? d : 0>; @clk .> [DFF]",f:v("The same synchronous reset, active low.","if (!rst_n) q <= 0 inside always @(posedge clk).","rst_n = 0 clears q on the next edge.")},"p3-dff-srs":{b:"d > <rst, set, d\\npriority> > [DFF] > q; rst .wins.> <rst, set, d\\npriority>; set .> <rst, set, d\\npriority>",f:v("Reset and set together: one must win.","Test rst first, then set, then load d.","Priority is the order of the if/else.")},"p3-sync-async":{b:"d > [q_async] > q_async; d > [q_sync] > q_sync; rst .at once.> [q_async]; rst .next edge.> [q_sync]",f:["P: One reset, two registers: when does each clear?","S: q_async has rst in its sensitivity list; q_sync does not.","Q: In the waveform, q_async clears at rst, q_sync at the next clock edge.","OK: You can read the difference in time."]},"p3-twin":{b:"d[7:0] > [qa] > qa; d[7:0] > [qb] > qb; load_a .> [qa]; load_b .> [qb]",f:v("Two registers share a bus but load independently.","Each register loads d only when its load is high, else holds.","Shared data, separate enables.")},"p4-sr5":{b:"sin > [q4] > [q3] > [q2] > [q1] > [q0]",f:v("Serial data enters at the left and moves right.","q <= {sin, q[4:1]} every clock.","A 5-bit serial-in shift register.")},"p4-usr5":{b:"d > <mode mux\\nhold, >>, <<, load> > [q 5 bits] > q; sr_in > <mode mux\\nhold, >>, <<, load>; sl_in > <mode mux\\nhold, >>, <<, load>; [q 5 bits] > <mode mux\\nhold, >>, <<, load>; mode .2 bits.> <mode mux\\nhold, >>, <<, load>",f:v("One register for every shift job.","A case on mode chooses the next value.","Hold, shift right, shift left or load.")},"p4-cnt":{b:"[q 4 bits] > (+1) > [q 4 bits] > q; rst_n .async.> [q 4 bits]",f:v("Count 0 to 15 and wrap.","q <= q + 1 on every rising edge.","A basic counter.")},"p4-cnt-tb":{b:"{your testbench\\nstimulus + checker}+ > {counter (given)} > {your testbench\\nstimulus + checker}+; BUG .> {counter (given)}",f:["P: The design is given; you write the testbench.","S: Drive reset, enable and clock; keep a reference count.","S: Compare every clock and count mismatches.","Q: Set BUG = 1: does your testbench print FAIL?","OK: A testbench that catches a broken design."]},"p4-cnt-load":{b:"d > <load ? d : q+1> > [q] > q; [q] > (+1) > <load ? d : q+1>; load .> <load ? d : q+1>",f:v("Start counting from a given value.","load = 1 loads d, otherwise count up.","A loadable counter.")},"p4-updown":{b:"[q] > (+1 or \u22121) > [q] > q; up .> (+1 or \u22121)",f:v("Count in either direction.","up = 1 adds 1, up = 0 subtracts 1; both wrap.","An up/down counter.")},"p4-mod":{b:"[q] > (q == N\u22121 ? 0 : q+1) > [q] > q",f:v("A decade counter: 0 to 9, then 0.","Compare with N\u22121 and clear instead of adding.","A modulus-N counter.")},"p4-range":{b:"[q] > (q == HIGH ? LOW : q+1) > [q] > q",f:v("Count only from LOW to HIGH.","Reset to LOW; after HIGH go back to LOW.","A range counter.")},"p4-range-udl":{b:"d > <load / up / down> > [q] > q; [q] > <load / up / down>; load .> <load / up / down>; up .> <load / up / down>",f:v("Range, direction and load together.","load first; then up wraps HIGH \u2192 LOW, down wraps LOW \u2192 HIGH.","All counter features in one block.")},"p4-div2":{b:"[clk_out] > (NOT) > [clk_out] > clk_out; @clk .> [clk_out]",f:v("Make a clock at half the frequency.","Toggle a flop on every rising edge.","clk_out = clk / 2 with 50% duty.")},"p4-div4":{b:"[cnt 2 bits] > (+1) > [cnt 2 bits]; [cnt 2 bits] -cnt[1]-> clk_out",f:v("Divide by 4 with 50% duty.","A 2-bit counter: its top bit is clk / 4.","Counter bits are divided clocks.")},"p4-div3":{b:"[mod-3 counter\\nposedge] > (1/3 pulse) > [copy\\nnegedge] > (OR) > clk_out; (1/3 pulse) > (OR)",f:["P: An odd divider: a counter gives 33% duty, the testbench wants 50%.","S: A mod-3 counter on the rising edge makes a pulse 1 clock long.","S: A copy delayed by half a clock (falling edge).","F: OR them: the pulse becomes exactly 1.5 clocks.","OK: clk / 3 with exactly 50% duty."]},"p4-fifo":{b:"din > {memory 8\xD78} > dout; wr_en > [wptr] .> {memory 8\xD78}; rd_en > [rptr] .> {memory 8\xD78}; [wptr] > (full, empty); [rptr] > (full, empty)",f:v("Buffer data between a producer and a consumer.",["Write at wptr unless full, read at rptr unless empty.","Full and empty from the pointers and a count."],"A single-clock FIFO.")},"p4-afifo":{b:"wdata > {memory} > rdata; [wptr Gray|wclk] > [2-flop sync|rclk] > (rempty|rclk); [rptr Gray|rclk] > [2-flop sync #w|wclk] > (wfull|wclk); [wptr Gray|wclk] .> {memory}",f:["P: Producer and consumer on different clocks.","S: Each pointer is a Gray code: one bit changes per step.","S: Pointers cross through 2-flop synchronizers.","OK: Full in wclk and empty in rclk are never wrong, only late."]},"p4-mealy-nov":{b:"x > (next state) > [state\\nS0 S1 S2] > (y = S2 and x) > y; x > (y = S2 and x); [state\\nS0 S1 S2] > (next state)",f:v("Detect 1-0-1; restart after each detection.","Mealy: y depends on the state AND x.","10101 gives one detection.")},"p4-mealy-ov":{b:"x > (next state) > [state] > (y = S2 and x) > y; x > (y = S2 and x); [state] > (next state)",f:v("Detect 1-0-1, with overlap.","After a detection go to the '1 seen' state, not to the start.","10101 gives two detections.")},"p4-moore-nov":{b:"x > (next state) > [state\\nS0..S3] > (y = S3) > y; [state\\nS0..S3] > (next state)",f:v("Detect 1-0-1 with a Moore machine.","An extra state for 'found'; y depends on the state only.","y comes one clock later than in the Mealy version.")},"p4-moore-ov":{b:"x > (next state) > [state\\nS0..S3] > (y = S3) > y; [state\\nS0..S3] > (next state)",f:v("Moore and overlapping.","From the found state, a 0 goes to '10 seen'.","Two detections in 10101, one clock after each 1.")},"s01-reg":{b:"data > [register 8 bits\\nalways_ff] > out; enable .> [register 8 bits\\nalways_ff]; rst_ .async.> [register 8 bits\\nalways_ff]",f:v("Store a byte when enable is high, the SystemVerilog way.","logic, ANSI ports, timeunit and always_ff.","The CPU's register block.")},"s02-mux":{b:"in_a > <mux #(WIDTH)> > out; in_b > <mux #(WIDTH)>; sel_a .> <mux #(WIDTH)>",f:x("One mux module for any width.","A WIDTH parameter; always_comb with unique case and an X default.","Used as 5-bit in the CPU and 8/1-bit in the testbench.")},"s03-cnt":{b:"data > <load, +1 or hold> > [count 5 bits] > count; [count 5 bits] > <load, +1 or hold>; load .> <load, +1 or hold>; enable .> <load, +1 or hold>",f:v("The CPU's program counter.","load wins over enable; count wraps from 31 to 0.","A loadable counter in SystemVerilog.")},"s04-ctrl":{b:"opcode > {controller FSM\\n8 states, enum} > sel, rd, ld_ir, halt,\\ninc_pc, ld_ac, ld_pc, wr, data_e; zero > {controller FSM\\n8 states, enum}",f:v("Decide which CPU block acts in each of 8 states.","An enum for states and a package for opcodes; outputs from state, opcode and zero.","The VeriRISC sequence controller.")},"s05-alu":{b:"accum > (op: ADD, AND, XOR,\\nLDA, pass) > [out\\nfalling edge] > out; data > (op: ADD, AND, XOR,\\nLDA, pass); opcode .> (op: ADD, AND, XOR,\\nLDA, pass); accum > (accum == 0) > zero",f:v("Combine the accumulator with memory data.","A case on the opcode enum; register out on the falling edge.","The result is ready for the accumulator at the next rising edge.")},"s06-memtb":{b:"{your testbench\\ntasks write/read}+ > {memory 32\xD78 (given)} > {your testbench\\ntasks write/read}+; BUG .> {memory 32\xD78 (given)}",f:["P: The memory is given; prove it works.","S: Write tasks for write and read.","S: Fill memory, read it back, compare.","Q: With BUG = 1, does your testbench report errors?","OK: Reusable tasks make a short, strong testbench."]},"s07-struct":{b:"{testbench} -bus_t packed struct-> {memory with\\none bus port} > data_out; {package\\ntypedef struct packed} .> {memory with\\none bus port}",f:["P: Many signals travel together; every module must agree on them.","S: Put a packed struct in a package.","S: One port carries read, write, address and data.","OK: One definition, no wiring mistakes. (Interfaces do the same in other simulators.)"]},"s08-cpu":{b:"{program counter} > <address mux> > {memory} > {instruction register} > {controller\\n8-state FSM}; {instruction register} -operand address-> <address mux>; {memory} -data-> {ALU} > {accumulator}; {accumulator} > {ALU}; {controller\\n8-state FSM} .control.> {ALU}",f:["P: Put the blocks together into a CPU that runs programs.","S: Fetch: PC \u2192 memory \u2192 instruction register.","S: Execute: ALU on accumulator and memory data, controlled by the FSM.","Q: Do the test programs reach HALT at the right address?","OK: A working 8-bit VeriRISC CPU."]},"s09-johnson":{b:"[q N bits] > (shift left,\\nfeed back ~MSB) > [q N bits] > q",f:v("2N states with one bit changing at a time.","Shift left and feed the inverted MSB back in.","A Johnson counter: 8 states from 4 flops.")},"s10-gen":{b:"a, b, cin > {stage[0].fa} -c-> {stage[1].fa} -c-> {\u2026 N stages} -c-> {stage[N-1].fa} > cout",f:v("Build an array of identical blocks for any size.","A generate for loop with a genvar; each carry feeds the next stage.","An N-bit ripple-carry adder from one loop.","The testbench checks N = 4 and N = 12.")},"s11-dpram":{b:"port A: addr, din, we > {dual-port RAM} > dout_a; port B: addr > {dual-port RAM} > dout_b",f:v("Write on one port while another reads.","One array, two synchronous read ports; port A reads before it writes.","A dual-port RAM.")},"s12-uart":{b:"data, start > {UART TX FSM\\nIDLE, START, DATA, STOP} > tx; {UART TX FSM\\nIDLE, START, DATA, STOP} > busy; [tick counter] .bit time.> {UART TX FSM\\nIDLE, START, DATA, STOP}",f:v("Send bytes over one wire.",["Start bit 0, 8 data bits LSB first, stop bit 1.","Each bit lasts CLKS_PER_BIT clocks."],"A UART transmitter.","The testbench decodes tx like a receiver.")},"l01-gates":{b:"a > (AND, OR, NOT,\\nNAND, NOR, XOR, XNOR) > 7 outputs; b > (AND, OR, NOT,\\nNAND, NOR, XOR, XNOR)",f:x("Know every gate's truth table.","One gate primitive per output.","All 7 gates for all 4 inputs.")},"l02-nand":{b:"a > (NAND) > (NAND #2) > and_y; b > (NAND); a > (NAND #a) > (NAND #o) > or_y; b > (NAND #b) > (NAND #o)",f:x("Build every gate from NAND alone.",["NOT = NAND(a, a); AND = NOT of NAND.","OR = NAND(a', b') by De Morgan; XOR with 4 NANDs."],"NAND is universal.")},"l03-nor":{b:"a > (NOR) > (NOR #2) > or_y; b > (NOR); a > (NOR #a) > (NOR #o) > and_y; b > (NOR #b) > (NOR #o)",f:x("Build every gate from NOR alone.",["NOT = NOR(a, a); OR = NOT of NOR.","AND = NOR(a', b'); XNOR with 4 NORs."],"NOR is universal too.")},"l04-sop-pos":{b:"A, B, C > (y1 = AB + A'B'\\nSOP) > y1; A, B, C > (y2 = (A+B)(B+C)(A+C')\\nPOS) > y2; A, B, C > (y3 = A + BC') > y3",f:x("The same truth table in two forms.","Write each expression with assign, exactly as given.","SOP sums minterms, POS multiplies maxterms.")},"l05-demorgan":{b:"A, B > ((A\xB7B)') > l1_left; A, B > (A' + B') > l1_right; A, B > ((A+B)') > l2_left; A, B > (A'\xB7B') > l2_right",f:x("Turn ANDs into ORs by inverting.","Write both sides of both laws.","Each pair is equal for every input.")},"l06-kmap":{b:"X, Y, Z > {3-var K-map\\n\u03A3m(3,4,6,7)} > F1; A, B, C, D > {4-var K-map\\n\u03A3m(2,6,8,9,10,11,14)} > F2",f:["P: A minterm list is not the cheapest circuit.","S: Draw the K-maps (columns in Gray order).","S: Group 1s in the largest power-of-two rectangles, wrapping around edges.","Q: All 128 input combinations are checked.","OK: F1 and F2 with 2 terms each."]},"l07-dontcare":{b:"A, B, C, D > {K-map\\n\u03A3m(1,3,7,11,15)\\n+ d(0,2,5)} > F",f:["P: Some inputs never happen: their outputs are don't-cares.","S: Use a don't-care as 1 only when it makes a group bigger.","Q: The testbench skips the don't-care rows.","OK: F = C\xB7D + A'\xB7B'."]},"l08-parity":{b:"d[3:0] > (XOR tree) > p; d[3:0] > (XOR tree #2) > error; p_in > (XOR tree #2)",f:x("Detect a single flipped bit.","p = ^d makes the number of 1s even; error = ^{d, p_in}.","Parity generator and checker.")},"l09-majority":{b:"A > (AB + BC + AC) > y; B > (AB + BC + AC); C > (AB + BC + AC)",f:x("Outvote one faulty copy of three.","Truth table \u03A3m(3,5,6,7), simplified with a K-map.","y = AB + BC + AC.")},"l10-sub":{b:"A, B, Bin > (D = A ^ B ^ Bin) > D; A, B, Bin > (Bout = A'B + A'Bin + B\xB7Bin) > Bout",f:x("Subtract with a borrow.","Half and full subtractor equations.","D is the same as the adder's sum; the borrow differs.")},"l29-rca":{b:"A[0], B[0], cin > {FA0} -c1-> {FA1} -c2-> {FA2} -c3-> {FA3} > cout; {FA0} > S",f:x("Add 4-bit numbers, like the 7483.","Chain four full adders through their carries.","A ripple-carry adder: 512 inputs checked.")},"l18-addsub":{b:"B > (XOR with M) > {4-bit adder} > S; A > {4-bit adder} > cout; M .carry in.> {4-bit adder}; {4-bit adder} > (overflow) > v",f:x("One adder that also subtracts.",["M = 1 inverts B and adds 1: A \u2212 B in two's complement.","v flags signed overflow."],"An adder/subtractor with one control.")},"l19-bcdadd":{b:"a, b, cin > {binary adder} > (sum above 9?) > {add 6} > s; (sum above 9?) > cout",f:["P: A binary adder gives a wrong code when a digit sum exceeds 9.","S: Add the BCD digits in binary.","Q: Is the sum above 9?","F: Add 6 (0110) and set the carry.","OK: A correct BCD digit and decimal carry."]},"l17-cmp2":{b:"a[1], b[1] > (XNOR: equal bits) > (gt, eq, lt\\nfrom the MSB down) > gt, eq, lt; a[0], b[0] > (XNOR: equal bits)",f:x("Compare two 2-bit numbers with gates.","Equal bits from XNOR; the MSB decides unless it is equal.","gt, eq, lt from the K-map equations.")},"l30-cmp4":{b:"A[3:0], B[3:0] > {7485 comparator} > gt, eq, lt; i_gt, i_eq, i_lt .cascade.> {7485 comparator}",f:x("Compare wider numbers by chaining 4-bit comparators.","When A = B, pass the cascade inputs through.","For one chip: i_eq = 1, i_gt = i_lt = 0.")},"l14-dec38":{b:"a[2:0] > {74138 decoder} > y_n[7:0] active low; g1, g2a_n, g2b_n .enables.> {74138 decoder}",f:x("Select one of eight, as real parts do.","Enabled when g1 = 1 and both active-low enables are 0.","One output low, the rest high.")},"l11-dec-fa":{b:"A, B, Cin > {3-to-8\\ndecoder} -m1 m2 m4 m7-> (OR#s) > S; {3-to-8\\ndecoder} -m3 m5 m6 m7-> (OR#c) > C",f:["P: Build a full adder without writing its equations.","S: The decoder makes all 8 minterms of A, B, Cin.","S: S = \u03A3m(1,2,4,7), C = \u03A3m(3,5,6,7) from the truth table.","F: OR the matching decoder outputs for each function.","OK: Any 3-input function is one OR gate on a decoder."]},"l15-enc83":{b:"d[7:0] > {8-to-3 encoder} > y, valid; d[7:0] > {priority encoder} > y_p, any",f:x("Encode a one-hot input; handle many active inputs.","Plain: one-hot only, valid flags the rest. Priority: highest 1 wins.","Both encoders, 256 inputs checked.")},"l13-mux-demux":{b:"d[7:0] > <8:1 mux> > y; sel .3 bits.> <8:1 mux>; x > {1:8 demux} > o[7:0]; sel .3 bits.> {1:8 demux}",f:x("Route many inputs to one line, and one line to many.","y = d[sel]; o = x << sel.","Mux and demux, 4096 inputs checked.")},"l12-mux-fn":{b:"A, B, C .select.> <8:1 mux\\n74151> > F; 0, 1, D, D' > <8:1 mux\\n74151>",f:["P: Implement a 4-variable function with one 8:1 mux.","S: A, B, C drive the select lines.","S: For each pair of rows (D = 0, 1) the data input is 0, 1, D or D'.","OK: F = \u03A3m(1,3,4,11,12,13,14,15) with one chip."]},"l16-gray":{b:"b[3:0] > (g = b ^ b>>1) > g_out; g[3:0] > (XOR chain\\nfrom the MSB) > b_out",f:x("Only one bit changes between neighbouring Gray values.","Binary \u2192 Gray: one XOR per bit. Gray \u2192 binary: XOR all bits above.","Both converters, 256 inputs checked.")},"l20-7seg":{b:"bcd[3:0] > {7-segment decoder\\ncase} > seg = abcdefg",f:x("Light the right segments for each digit.","A case with one 7-bit pattern per digit; 10 to 15 blank.","The console draws each digit.")},"l21-srlatch":{b:"s_n > (NAND g1) > q; r_n > (NAND g2) > q_n; (NAND g1) > (NAND g2); (NAND g2) > (NAND g1)",f:["P: Memory starts with feedback.","S: Two cross-coupled NAND gates with 1 ns delay.","S: s_n = 0 sets, r_n = 0 resets, both 1 hold.","Q: Both 0 is not allowed for a NAND latch.","OK: The latch keeps its bit."]},"l22-ffs":{b:"s, r > [SR FF] > q_sr; j, k > [JK FF] > q_jk; d > [D FF] > q_d; t > [T FF] > q_t",f:v("Four flip-flops, four characteristic tables.","One always block: SR (11 holds), JK (11 toggles), D, T.","All four match the reference for 200 random cycles.")},"l23-ripple":{b:"@clk .falling.> [T0] > [T1] > [T2]; [T0] > q[0]; [T1] > q[1]; [T2] > q[2]",f:["P: The simplest counter: each flop clocks the next.","S: Each stage toggles on the falling edge of the stage before.","X: The bits change one after another (ripple).","OK: Counts 0 to 7 with no logic at all."]},"l24-sync":{b:"[q 3 bits] > (T0 = 1, T1 = Q0,\\nT2 = Q0\xB7Q1) > [q 3 bits] > q; @clk .> [q 3 bits]",f:v("All bits change on the same clock edge.","A bit toggles when all bits below it are 1.","A synchronous counter with T flip-flops.")},"l32-updown":{b:"[q 3 bits] > (T inputs\\nfrom up and Q) > [q 3 bits] > q; up .> (T inputs\\nfrom up and Q)",f:v("Count both ways with T flip-flops.","Excitation table and K-maps give T1 and T2 for up and down.","A MOD-8 up/down counter.")},"l27-mod6":{b:"[q 3 bits] > (q == 5 ? 0 : q+1) > [q 3 bits] > q; [q 3 bits] > (q == 5) > tc",f:v("Divide by 6, as in a clock's seconds counter.","Clear when the count reaches 5; flag it with tc.","A truncated counter with terminal count.")},"l25-ring":{b:"[ring 1000] > (rotate) > [ring 1000] > ring; [johnson 0000] > (shift in ~LSB) > [johnson 0000] > john",f:v("Counters made from shift registers.","Ring: rotate a single 1. Johnson: feed back the inverted bit.","4 states vs 8 states from 4 flops.")},"l26-siso":{b:"sin > [q3] > [q2] > [q1] > [q0] > sout",f:["P: Move serial data one bit per clock, as in UART or SPI.","S: On every clock each flop takes the value of the flop before it.","Q: Does 1001 come out of sout 4 clocks later, in order?","OK: A 4-flop shift register delays the stream by 4 clocks."]},"l31-usr":{b:"d > <mode mux> > [q 4 bits] > q; sr_in > <mode mux>; sl_in > <mode mux>; [q 4 bits] > <mode mux>; mode .> <mode mux>",f:v("One register for hold, shift right, shift left and load (74194).","A case on mode picks the next value.","A universal shift register.")},"l28-fsm":{b:"dir > (next state\\nfrom the table) > [state 2 bits] > (z = state 10) > z; [state 2 bits] > (next state\\nfrom the table)",f:v("Build a state machine straight from a state table.","One case item per row; a Moore output from the state.","A Gray-code up/down counter FSM.")},"l33-traffic":{b:"car > {FSM\\nS0 S1 S2 S3} > main lights; {FSM\\nS0 S1 S2 S3} > side lights; [timer] .3 clocks.> {FSM\\nS0 S1 S2 S3}",f:["P: Give the side road green only when a car waits.","S: S0 main green \u2192 S1 main yellow when car = 1.","S: S2 side green for 3 clocks (timer) \u2192 S3 side yellow \u2192 S0.","Q: Is any state green for both roads? No.","OK: A Moore FSM with a timer, from a word spec."]}};var ne=t=>document.querySelector(t);function Ve({key:t,onChange:e}){let n=null,s=()=>{try{return JSON.parse(localStorage.getItem(t)||"{}")||{}}catch{return{}}},a=h=>{try{localStorage.setItem(t,JSON.stringify(h))}catch{}},i=h=>{let y=String(h||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return y?parseFloat(y[0]):NaN},o=(h,y)=>h.type==="choice"?y!=null&&y!==""&&+y===h.answer:isFinite(i(y))&&Math.abs(i(y)-h.answer)<=(h.tol??.01)+1e-9,r=h=>h.type==="choice"?h.options[h.answer]:`${h.answer}${h.unit?" "+h.unit:""}`;function u(h,y){let _=ne("#quiz-score");if(h===null){_.textContent="",_.classList.remove("done");return}_.textContent=`${h} / ${y} correct`,_.classList.toggle("done",h===y)}function d(h,y){let _=s(),S=_[n.id]||{a:[]};S.a=S.a||[],S.a[h]=y,S.checked=!1,_[n.id]=S,a(_);let q=ne("#quiz-list").children[h]?.querySelector(".quiz-fb");q&&(q.hidden=!0)}function p(h){window.vddCurrentLab=h&&h.id,n=h&&h.quiz&&h.quiz.length?h:null;let y=ne("#quiz"),_=ne("#quiz-list");if(!n){y.hidden=!0;return}y.hidden=!1,_.innerHTML="";let S=s()[n.id]||{},q=S.a||[];n.quiz.forEach((E,L)=>{let P=document.createElement("li"),H=document.createElement("div");if(H.className="quiz-q",E.try){let $=document.createElement("span");$.className="quiz-try",$.textContent="Try it",H.appendChild($)}let U=E.q.replace(/^Try it: /,"");if(H.appendChild(document.createTextNode(U.charAt(0).toUpperCase()+U.slice(1))),P.appendChild(H),E.type==="choice"){let $=document.createElement("div");$.className="quiz-opts",$.setAttribute("role","radiogroup"),E.options.forEach((O,W)=>{let Y=document.createElement("label"),C=document.createElement("input");C.type="radio",C.name=`q${L}`,C.value=W,q[L]!==void 0&&+q[L]===W&&(C.checked=!0),C.addEventListener("change",()=>d(L,W));let se=document.createElement("span");se.textContent=O,Y.append(C,se),$.appendChild(Y)}),P.appendChild($)}else{let $=document.createElement("div");$.className="quiz-num";let O=document.createElement("input");if(O.type="text",O.inputMode="decimal",O.autocomplete="off",O.setAttribute("aria-label","Answer to question "+(L+1)),O.placeholder="e.g. 3",q[L]!==void 0&&(O.value=q[L]),O.addEventListener("input",()=>d(L,O.value)),O.addEventListener("keydown",W=>{W.key==="Enter"&&c()}),$.appendChild(O),E.unit){let W=document.createElement("span");W.className="unit",W.textContent=E.unit,$.appendChild(W)}P.appendChild($)}let D=document.createElement("div");D.className="quiz-fb",D.hidden=!0,D.setAttribute("aria-live","polite"),P.appendChild(D),_.appendChild(P)}),S.checked?c(!0):u(null)}function c(h){if(!n)return;let y=s(),_=y[n.id]||{a:[]};_.a=_.a||[];let S=0;n.quiz.forEach((q,E)=>{let L=ne("#quiz-list").children[E],P=q.type==="choice"?(L.querySelector("input:checked")||{}).value:L.querySelector("input").value;_.a[E]=P;let H=P===void 0||P==="",U=!H&&o(q,P);U&&S++;let D=L.querySelector(".quiz-fb");D.hidden=!1,D.className="quiz-fb "+(U?"ok":"bad"),D.innerHTML="";let $=document.createElement("b");$.textContent=U?"Correct.":H?"Not answered yet.":"Not quite.",D.appendChild($),U&&q.explain?D.appendChild(document.createTextNode(q.explain)):!U&&!H&&D.appendChild(document.createTextNode(q.type==="number"?"Check the code and the simulation output again.":"Look at the code and the output again and try another option."))}),_.checked=!0,_.score=S,_.total=n.quiz.length,y[n.id]=_,a(y),u(S,n.quiz.length),!h&&e&&e()}function b(){if(n){try{let h=JSON.parse(localStorage.getItem("vdd-revealed-v1")||"{}");h[t+":"+n.id]=Date.now(),localStorage.setItem("vdd-revealed-v1",JSON.stringify(h))}catch{}n.quiz.forEach((h,y)=>{let _=ne("#quiz-list").children[y].querySelector(".quiz-fb");_.hidden=!1,_.className="quiz-fb shown",_.innerHTML="";let S=document.createElement("b");S.textContent="Answer: "+r(h)+".",_.appendChild(S),h.explain&&_.appendChild(document.createTextNode(h.explain))})}}function f(){if(!n)return;let h=s();delete h[n.id],a(h),p(n),e&&e()}return ne("#quiz-check").addEventListener("click",()=>c()),ne("#quiz-reveal").addEventListener("click",b),ne("#quiz-reset").addEventListener("click",f),{render:p,status:h=>s()[h]}}var Ge={counter:[{type:"number",q:"Run it. What is the count printed at 175 ns?",answer:15,tol:0,unit:"",explain:"The counter has counted 0 to 15 by then.",try:!1},{type:"number",q:"What value comes after 15?",answer:0,tol:0,unit:"",explain:"A 4-bit counter wraps from 15 back to 0.",try:!1},{type:"choice",q:"Why does the reset use negedge rst_n in the sensitivity list?",options:["It is a synchronous reset","It is an asynchronous active-low reset: q clears as soon as rst_n falls","It saves area","It is required for counters"],answer:1,explain:"An asynchronous reset acts without waiting for the clock.",try:!1},{type:"choice",q:"Try it: change WIDTH to 3 in the testbench instance. After which value does the count wrap?",options:["7","15","3","8"],answer:0,explain:"3 bits count 0 to 7.",try:!0}],mux:[{type:"choice",q:"When sel = 2, which input reaches y?",options:["a","b","c","d"],answer:2,explain:"sel 0 \u2192 a, 1 \u2192 b, 2 \u2192 c, 3 \u2192 d.",try:!1},{type:"number",q:"How many bits wide is y?",answer:8,tol:0,unit:"",explain:"The mux is 8 bits wide.",try:!1},{type:"choice",q:"Why does a case statement inside always @(*) need every sel value (or a default)?",options:["For speed","Otherwise y keeps its old value for missing cases and synthesis infers a latch","It is a syntax rule","To save area"],answer:1,explain:"Full case coverage keeps the logic combinational.",try:!1}],adder:[{type:"number",q:"How many input combinations does the testbench check?",answer:512,tol:0,unit:"",explain:"a and b are 4 bits each, plus a carry in: 2^9 = 512.",try:!1},{type:"choice",q:"What makes this testbench self-checking?",options:["It prints every result","It compares each result with the expected a + b + cin and counts mismatches","It uses $monitor","It dumps a waveform"],answer:1,explain:"A self-checking testbench decides PASS or FAIL by itself.",try:!1},{type:"number",q:"In a 4-bit ripple-carry adder, how many full adders are chained?",answer:4,tol:0,unit:"",explain:"One per bit.",try:!1}],fsm:[{type:"number",q:"How many times is the pattern 1011 detected?",answer:4,tol:0,unit:"",explain:"The run prints four detections.",try:!1},{type:"choice",q:"Is this detector overlapping?",options:["No","Yes: the last 1 of a 1011 can be the first 1 of the next one","Only for 0s","It depends on the clock"],answer:1,explain:"Overlapping detection reuses the tail of one match.",try:!1},{type:"choice",q:"Moore or Mealy?",options:["Moore: found depends only on the state","Mealy: found depends on the state and din","Neither","Both"],answer:0,explain:"The comment says Moore: the output comes from the state.",try:!1}],cdc:[{type:"number",q:"How many destination clocks after the change does level_dst follow?",answer:2,tol:0,unit:"",explain:"Two flops in series.",try:!1},{type:"choice",q:"Why two flops and not one?",options:["To double the frequency","The first flop may go metastable; the second gives it a full clock to settle","To invert the signal","For hold timing"],answer:1,explain:"See the CDC labs for more.",try:!1},{type:"choice",q:"Can this synchronizer carry a one-cycle pulse from a much faster clock?",options:["Yes, always","No: the pulse can fall between two destination edges and be lost","Only with reset","Only in simulation"],answer:1,explain:"Pulses need a toggle synchronizer or a handshake.",try:!1}],fifo:[{type:"number",q:"How many entries does the FIFO hold?",answer:8,tol:0,unit:"",explain:"AW = 3: 2^3 = 8 entries.",try:!1},{type:"number",q:"The testbench writes 10 values. How many are stored?",answer:8,tol:0,unit:"",explain:"The last two are dropped because the FIFO is full.",try:!1},{type:"choice",q:"Why are the pointers AW + 1 bits wide?",options:["For parity","The extra bit tells a full FIFO from an empty one when the address bits are equal","To count reads","For Gray code"],answer:1,explain:"Equal pointers = empty; same address, different wrap bit = full.",try:!1}],sv:[{type:"number",q:"For how many clock cycles is the light green?",answer:6,tol:0,unit:"",explain:"The timer loads 5 and counts down to 0: 6 cycles.",try:!1},{type:"number",q:"For how many clock cycles is it yellow?",answer:3,tol:0,unit:"",explain:"The timer loads 2 for yellow.",try:!1},{type:"choice",q:"What does typedef enum give you over plain localparam states?",options:["Faster simulation","Named states that show up in the waveform and in .name(), with type checking","Less area","Nothing"],answer:1,explain:"The testbench prints state.name().",try:!1}],"p1-ha-df":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"Which Verilog construct is dataflow style?",options:["always @(*)","assign","and/xor gate primitives","initial"],answer:1,explain:"Continuous assignments describe how data flows to the outputs.",try:!1}],"p1-ha-bh":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"Why are sum and carry declared reg in the behavioral version?",options:["Because they are flip-flops","Because they are assigned inside an always block","Because they are outputs","It is optional"],answer:1,explain:"reg is a Verilog data type for procedural assignment; no flip-flop is created by always @(*).",try:!1}],"p1-ha-st":[{type:"number",q:"How many input combinations does a half adder have?",answer:4,tol:0,unit:"",explain:"Two 1-bit inputs: 2^2 = 4.",try:!1},{type:"choice",q:"What are sum and carry for a = 1, b = 1?",options:["sum 1, carry 0","sum 0, carry 1","sum 1, carry 1","sum 0, carry 0"],answer:1,explain:"1 + 1 = 10 in binary.",try:!1},{type:"choice",q:"In 'xor g1 (sum, a, b);', which port comes first?",options:["An input","The output","The clock","Any order"],answer:1,explain:"Gate primitives list the output first.",try:!1}],"p1-fa-df":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"choice",q:"Which expression gives the carry out?",options:["a ^ b ^ cin","(a & b) | (cin & (a ^ b))","a | b | cin","~(a & b)"],answer:1,explain:"Carry when both inputs are 1, or when one is 1 and the carry in is 1.",try:!1}],"p1-fa-bh":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"choice",q:"Why does {cout, sum} = a + b + cin work?",options:["Verilog adds 1-bit values as 1 bit","The left side is 2 bits wide, so the addition is done in 2 bits and the carry lands in cout","It does not work","Because of always @(*)"],answer:1,explain:"The width of the assignment target sets the size of the result.",try:!1}],"p1-fa-st":[{type:"number",q:"How many input combinations does the testbench try?",answer:8,tol:0,unit:"",explain:"Three 1-bit inputs: 2^3 = 8.",try:!1},{type:"choice",q:"What are sum and cout for a = 1, b = 1, cin = 1?",options:["sum 1, cout 1","sum 0, cout 1","sum 1, cout 0","sum 0, cout 0"],answer:0,explain:"1 + 1 + 1 = 11 in binary.",try:!1},{type:"number",q:"How many half_adder instances does the structural full adder use?",answer:2,tol:0,unit:"",explain:"Two half adders and an OR gate.",try:!1}],"p1-ops":[{type:"number",q:"For a = 12 and b = 5, what is a % b?",answer:2,tol:0,unit:"",explain:"12 = 2 \xD7 5 + 2.",try:!1},{type:"choice",q:"What is the difference between & and && ?",options:["None","& is bitwise and gives a vector; && is logical and gives 1 bit","&& is bitwise","& is only for 1-bit values"],answer:1,explain:"a & b ANDs each bit; a && b is true if both are non-zero.",try:!1},{type:"number",q:"For a = 4'b1011, what is the reduction ^a (as 0 or 1)?",answer:1,tol:0,unit:"",explain:"XOR of all bits: three 1s give 1.",try:!1},{type:"choice",q:"What is the difference between $display and $monitor?",options:["None","$display prints once; $monitor prints again every time one of its signals changes","$monitor prints once","$display only prints at the end"],answer:1,explain:"The testbench turns $monitor off with $monitoroff.",try:!1}],"p1-c2f":[{type:"number",q:"What does c_to_f return for 100 \xB0C?",answer:212,tol:0,unit:"",explain:"100 \xD7 9 / 5 + 32.",try:!1},{type:"number",q:"And for 37 \xB0C (integer arithmetic)?",answer:98,tol:0,unit:"",explain:"37 \xD7 9 = 333; 333 / 5 = 66 (rounded toward zero); 66 + 32 = 98.",try:!1},{type:"choice",q:"What is the main difference between a task and a function in Verilog?",options:["None","A task can take time (delays, @) and has output arguments; a function returns a value in zero time","A function can have delays","Tasks cannot have arguments"],answer:1,explain:"Functions are for expressions, tasks for procedures.",try:!1}],"p2-add4":[{type:"number",q:"What is {cout, sum} for 9 + 8 + 1?",answer:18,tol:0,unit:"",explain:"As printed by the testbench.",try:!1},{type:"number",q:"How many bits does {cout, sum} have?",answer:5,tol:0,unit:"",explain:"4 sum bits and a carry.",try:!1},{type:"number",q:"How many test cases does the testbench check?",answer:512,tol:0,unit:"",explain:"4 + 4 + 1 input bits: 2^9.",try:!1}],"p2-mux2":[{type:"choice",q:"Which input reaches y when sel = 1?",options:["a","b"],answer:1,explain:"y = sel ? b : a.",try:!1},{type:"choice",q:"How does synthesis usually build y = sel ? b : a?",options:["A flip-flop","A 2:1 multiplexer cell","A latch","An adder"],answer:1,explain:"The conditional operator maps to a mux.",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:8,tol:0,unit:"",explain:"a, b and sel: 2^3.",try:!1}],"p2-mux4":[{type:"number",q:"How many select bits does a 4:1 mux need?",answer:2,tol:0,unit:"",explain:"log2(4) = 2.",try:!1},{type:"choice",q:"Why does the case statement need a default (or all 4 values)?",options:["For speed","So y is assigned in every case and no latch is inferred","It is a syntax rule","To reset y"],answer:1,explain:"Every path through always @(*) must assign y.",try:!1},{type:"number",q:"How many cases does the testbench check?",answer:64,tol:0,unit:"",explain:"4 data bits and 2 select bits: 2^6.",try:!1}],"p2-dec24":[{type:"choice",q:"With en = 1 and a = 2'b10, what is y?",options:["4'b0010","4'b0100","4'b1000","4'b0001"],answer:1,explain:"Bit 2 is set.",try:!1},{type:"choice",q:"What is y when en = 0?",options:["4'b0001","4'b0000","4'b1111","Unknown"],answer:1,explain:"A disabled decoder drives no select line.",try:!1},{type:"number",q:"How many outputs does an n-to-2^n decoder with n = 3 have?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1}],"p2-enc42":[{type:"number",q:"For d = 4'b0100, what is y?",answer:2,tol:0,unit:"",explain:"The single 1 is at position 2.",try:!1},{type:"choice",q:"What should valid be for d = 4'b0110?",options:["1","0: two bits are set, which a simple encoder cannot handle","Unknown","It depends on y"],answer:1,explain:"Use a priority encoder when several inputs can be active.",try:!1},{type:"number",q:"How many of the 16 possible inputs are legal (one-hot)?",answer:4,tol:0,unit:"",explain:"0001, 0010, 0100, 1000.",try:!1}],"p2-penc42":[{type:"number",q:"For d = 4'b0110, what is y?",answer:2,tol:0,unit:"",explain:"The highest 1 is at position 2.",try:!1},{type:"choice",q:"What does casez allow that case does not?",options:["Faster simulation","? and z bits as don't-care in the case items","Real numbers","Default branches"],answer:1,explain:"4'b01?? matches 0100 to 0111.",try:!1},{type:"choice",q:"What is valid for d = 0?",options:["1","0"],answer:1,explain:"No request: nothing to encode.",try:!1}],"p2-cmp4":[{type:"choice",q:"For a = 9 and b = 4, which output is 1?",options:["gt","eq","lt"],answer:0,explain:"9 > 4.",try:!1},{type:"number",q:"How many of gt, eq and lt can be 1 at the same time?",answer:1,tol:0,unit:"",explain:"Exactly one, for any pair.",try:!1},{type:"number",q:"How many (a, b) pairs does the testbench check?",answer:256,tol:0,unit:"",explain:"16 \xD7 16.",try:!1}],"p2-bshift8":[{type:"choice",q:"What is 8'b1001_0110 rotated left by 3?",options:["8'b1011_0100","8'b1011_0101","8'b0010_1100","8'b0001_0010"],answer:0,explain:"The three bits 100 that leave on the left come back on the right: 10110 + 100.",try:!1},{type:"choice",q:"What is 8'b1001_0110 shifted right by 3 (no rotate)?",options:["8'b0001_0010","8'b1111_0010","8'b0101_1000","8'b1100_1000"],answer:0,explain:"Zeros come in from the left.",try:!1},{type:"choice",q:"Why is it called a barrel shifter?",options:["It is round","It shifts by any amount in one clock, without stepping one bit at a time","It uses a barrel register","It only rotates"],answer:1,explain:"A log2(N)-stage mux network shifts by any amount at once.",try:!1}],"p2-alu":[{type:"number",q:"What is y for 200 + 100 (8 bits)?",answer:44,tol:0,unit:"",explain:"300 \u2212 256 = 44.",try:!1},{type:"choice",q:"And carry for 200 + 100?",options:["0","1"],answer:1,explain:"The result does not fit in 8 bits.",try:!1},{type:"choice",q:"When is zero = 1?",options:["When a = 0","When the result y is 0","When carry = 0","When op = 0"],answer:1,explain:"A status flag on the result.",try:!1},{type:"number",q:"How many operations does the 3-bit op select?",answer:8,tol:0,unit:"",explain:"2^3.",try:!1}],"p3-dlatch":[{type:"choice",q:"What does a latch do while en = 0?",options:["Follows d","Holds its last value","Clears q","Toggles"],answer:1,explain:"It is transparent only while enabled.",try:!1},{type:"choice",q:"Which code creates a latch?",options:["always @(posedge clk) q <= d;","always @(*) if (en) q = d;  (no else)","assign q = en & d;","always @(*) q = en ? d : 1'b0;"],answer:1,explain:"With no else, q must remember its value: a latch.",try:!1},{type:"choice",q:"Why are latches usually avoided in synchronous design?",options:["They are larger","They are transparent for a whole phase, which makes timing harder and glitches pass through","They cannot be reset","They are not synthesizable"],answer:1,explain:"STA has to handle time borrowing; most flows prefer flip-flops.",try:!1}],"p3-dlatch-rst":[{type:"choice",q:"What does a latch do while en = 0?",options:["Follows d","Holds its last value","Clears q","Toggles"],answer:1,explain:"It is transparent only while enabled.",try:!1},{type:"choice",q:"If rst = 1 and en = 1 at the same time, what is q?",options:["d","0","1","Unknown"],answer:1,explain:"Reset has priority.",try:!1},{type:"choice",q:"Is this reset synchronous or asynchronous?",options:["Synchronous","Asynchronous: it acts immediately"],answer:1,explain:"A latch has no clock edge to wait for.",try:!1}],"p3-dff":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"When does q change?",options:["Whenever d changes","Only at the rising edge of clk","At both edges","When d is 1"],answer:1,explain:"Edge-triggered.",try:!1},{type:"choice",q:"What is q before the first clock edge?",options:["0","1","x (unknown): there is no reset","z"],answer:2,explain:"Without a reset, a flop starts unknown in simulation.",try:!1}],"p3-dff-arh":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["At the next rising clock edge","Immediately","Never","At the falling edge"],answer:1,explain:"Asynchronous.",try:!1}],"p3-dff-neg-arh":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"When does this flop sample d?",options:["Rising edge of clk","Falling edge of clk","Both edges","When rst falls"],answer:1,explain:"negedge clk.",try:!1},{type:"choice",q:"Where are falling-edge flops typically used?",options:["Everywhere","Half-cycle paths, such as DDR interfaces that use both edges","Only in FPGAs","For resets"],answer:1,explain:"They give half a clock period between rising and falling edge logic.",try:!1}],"p3-dff-arl":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"rst_n = 0 means\u2026",options:["Normal operation","Reset is active"],answer:1,explain:"_n marks an active-low signal.",try:!1},{type:"choice",q:"Why are resets often active low on chips?",options:["Tradition only","A reset that is 0 when the pin floats low or power ramps keeps the chip in reset safely","They are faster","No reason"],answer:1,explain:"A low-going reset is the safe default.",try:!1}],"p3-dff-ash":[{type:"choice",q:"Which edge does an asynchronous reset add to the sensitivity list?",options:["Only the clock edge","The active edge of the reset as well","Nothing","The data input"],answer:1,explain:"That is what makes it act without the clock.",try:!1},{type:"choice",q:"What is q right after set rises?",options:["0","1","d","x"],answer:1,explain:"Set forces 1.",try:!1},{type:"choice",q:"When is an asynchronous set used?",options:["Never","For registers that must start at 1, such as a one-hot state or an active-low enable","For counters only","To save area"],answer:1,explain:"",try:!1}],"p3-dff-srh":[{type:"choice",q:"Why use <= (non-blocking) in clocked always blocks?",options:["It is faster","All flops update together at the edge, so the order of statements does not matter","It is required by Verilog","To make latches"],answer:1,explain:"Blocking = in sequential logic can cause simulation races.",try:!1},{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"If rst rises between clock edges, when does q go to 0?",options:["Immediately","At the next rising clock edge"],answer:1,explain:"Synchronous.",try:!1}],"p3-dff-srl":[{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"rst_n = 0 on a rising edge gives q =",options:["d","0","1","unchanged"],answer:1,explain:"",try:!1},{type:"choice",q:"What does synthesis build for a synchronous reset?",options:["A flop with an asynchronous clear pin","A plain flop with logic (an AND or mux) in front of D","A latch","Nothing"],answer:1,explain:"The reset becomes part of the data path.",try:!1}],"p3-dff-srs":[{type:"choice",q:"Is rst in the sensitivity list of a synchronous reset?",options:["Yes","No: only the clock edge"],answer:1,explain:"The reset is just another data input that is sampled at the edge.",try:!1},{type:"choice",q:"rst = 1 and set = 1 on the same edge: q =",options:["1","0","d","x"],answer:1,explain:"Reset has priority here.",try:!1},{type:"choice",q:"How is the priority set in the code?",options:["By the order of the if / else if","By the port order","By the sensitivity list","It is random"],answer:0,explain:"The first true condition wins.",try:!1}],"p3-sync-async":[{type:"choice",q:"rst rises in the middle of a clock cycle. Which output clears first?",options:["q_sync","q_async","Both at the same time"],answer:1,explain:"q_async clears at once; q_sync waits for the next edge.",try:!1},{type:"choice",q:"What is a drawback of an asynchronous reset?",options:["None","Its release must be synchronized to the clock (recovery/removal), or flops leave reset in different cycles","It is slower","It needs a clock"],answer:1,explain:"See the reset synchronizer lab in the CDC labs.",try:!1},{type:"choice",q:"What is a drawback of a synchronous reset?",options:["It needs a running clock to take effect","It cannot be timed","It uses more flops","None"],answer:0,explain:"No clock, no reset.",try:!1}],"p3-twin":[{type:"choice",q:"load_a = 1 and load_b = 1 on the same edge: what happens?",options:["Only qa loads","Both qa and qb load d","Neither loads","qb loads qa"],answer:1,explain:"The loads are independent.",try:!1},{type:"number",q:"How many flip-flops does the design need?",answer:16,tol:0,unit:"",explain:"Two 8-bit registers.",try:!1},{type:"choice",q:"What does a register hold when its load is 0?",options:["0","Its previous value","d","x"],answer:1,explain:"Synthesis adds an enable (a mux or a clock-enable flop).",try:!1}],"p4-sr5":[{type:"number",q:"After 5 clocks with sin = 1, 0, 1, 1, 0 (in that order) starting from 00000, what is q in decimal?",answer:13,tol:0,unit:"",explain:"Bits enter at bit 4 and move right: q = 0 1 1 0 1 (bit 4 first) = 01101 = 13.",try:!1},{type:"number",q:"How many clocks does a bit need to travel from bit 4 to bit 0?",answer:4,tol:0,unit:"",explain:"One place per clock.",try:!1},{type:"choice",q:"Which expression shifts right with sin entering at the MSB?",options:["{q[3:0], sin}","{sin, q[4:1]}","q >> sin","{q[4:1], sin}"],answer:1,explain:"",try:!1}],"p4-usr5":[{type:"choice",q:"Which mode loads d in parallel?",options:["00","01","10","11"],answer:3,explain:"",try:!1},{type:"choice",q:"In mode 10 (shift left), where does sl_in enter?",options:["Bit 4","Bit 0"],answer:1,explain:"q <= {q[3:0], sl_in}.",try:!1},{type:"choice",q:"Where is a universal shift register used?",options:["Only in counters","Serial/parallel conversion in both directions, for example in a UART or SPI","In adders","In memories"],answer:1,explain:"",try:!1}],"p4-cnt":[{type:"number",q:"How many states does a 4-bit counter go through before repeating?",answer:16,tol:0,unit:"",explain:"0 to 15.",try:!1},{type:"number",q:"At 100 MHz, how many ns does one full cycle of the 4-bit counter take?",answer:160,tol:0,unit:"",explain:"16 states \xD7 10 ns.",try:!1},{type:"choice",q:"What happens to q after 15?",options:["It stays at 15","It wraps to 0","It goes to x"],answer:1,explain:"",try:!1}],"p4-cnt-tb":[{type:"choice",q:"Why does the testbench change en on the falling edge?",options:["It is required","So the inputs are stable around the rising edge and there is no race with the design","To save time","To test the reset"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = 1, after which value does the broken counter jump to 0?",options:["9","15","7","0"],answer:0,explain:"The bug wraps at 9; a good testbench sees 10 missing.",try:!1},{type:"choice",q:"What makes a testbench self-checking?",options:["Printing values","An expected-value model compared with the design every cycle, and a PASS/FAIL summary","A waveform","Random inputs"],answer:1,explain:"",try:!1}],"p4-cnt-load":[{type:"choice",q:"load = 1 and the counter is at 7, d = 3: next q =",options:["8","3","4","7"],answer:1,explain:"Load has priority.",try:!1},{type:"number",q:"After loading 14, what is q two clocks later (no load)?",answer:0,tol:0,unit:"",explain:"14 \u2192 15 \u2192 0.",try:!1},{type:"choice",q:"Where is a loadable counter used?",options:["Program counters (jumps load a new address), timers with a start value","Only in tests","Adders","Never"],answer:0,explain:"",try:!1}],"p4-updown":[{type:"number",q:"From 0, counting down one step gives?",answer:15,tol:0,unit:"",explain:"4-bit wrap: 0 \u2212 1 = 15.",try:!1},{type:"number",q:"From 13, three steps up give?",answer:0,tol:0,unit:"",explain:"13 \u2192 14 \u2192 15 \u2192 0.",try:!1},{type:"choice",q:"What decides the direction?",options:["The clock edge","The up input","The reset"],answer:1,explain:"",try:!1}],"p4-mod":[{type:"number",q:"What is the largest value of the mod-10 counter?",answer:9,tol:0,unit:"",explain:"0 to N\u22121.",try:!1},{type:"number",q:"How many flip-flops does a mod-10 counter need at least?",answer:4,tol:0,unit:"",explain:"2^3 = 8 < 10 \u2264 16 = 2^4.",try:!1},{type:"choice",q:"Try it: set N = 12. What is the largest value?",options:["11","12","9","15"],answer:0,explain:"",try:!0}],"p4-range":[{type:"number",q:"What is q right after reset?",answer:3,tol:0,unit:"",explain:"LOW = 3.",try:!1},{type:"number",q:"How many different values does the counter take?",answer:10,tol:0,unit:"",explain:"3 to 12 inclusive.",try:!1},{type:"number",q:"What comes after 12?",answer:3,tol:0,unit:"",explain:"Back to LOW.",try:!1}],"p4-range-udl":[{type:"number",q:"Counting down from LOW = 3 gives?",answer:12,tol:0,unit:"",explain:"Wraps to HIGH.",try:!1},{type:"choice",q:"load = 1 and up = 0 on the same edge: what happens?",options:["It counts down","It loads d","Nothing"],answer:1,explain:"Load has priority.",try:!1},{type:"number",q:"Counting up from 12 gives?",answer:3,tol:0,unit:"",explain:"",try:!1}],"p4-div2":[{type:"number",q:"With a 10 ns clk, what is the period of clk_out?",answer:20,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"What is its duty cycle in %?",answer:50,tol:0,unit:"%",explain:"It toggles on every rising edge.",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-div4":[{type:"number",q:"With a 10 ns clk, what is the period of clk_out?",answer:40,tol:0,unit:"ns",explain:"",try:!1},{type:"number",q:"Which counter bit gives clk / 4 (0 = LSB)?",answer:1,tol:0,unit:"",explain:"cnt[0] is clk / 2, cnt[1] is clk / 4.",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-div3":[{type:"number",q:"With a 10 ns clk, how long must clk_out stay high for a 50% duty cycle?",answer:15,tol:0,unit:"ns",explain:"Half of 30 ns: 1.5 clock periods.",try:!1},{type:"choice",q:"Why are both clock edges needed?",options:["They are not","A half-period step is only possible with the falling edge","To save power","For reset"],answer:1,explain:"",try:!1},{type:"choice",q:"Why should a divided clock come straight from a flop output, not from logic?",options:["To save area","Logic can glitch, and a glitch on a clock is an extra edge","Flops are faster","No reason"],answer:1,explain:"Also define it as a generated clock in the SDC (see the SDC labs).",try:!1}],"p4-fifo":[{type:"number",q:"How many words can the FIFO hold?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What happens to a write when the FIFO is full?",options:["It overwrites the oldest word","It is ignored","It stalls the clock"],answer:1,explain:"",try:!1},{type:"choice",q:"dout shows a word\u2026",options:["at once when rd_en rises","on the clock edge after rd_en","two clocks later"],answer:1,explain:"The read is registered.",try:!1}],"p4-afifo":[{type:"choice",q:"Why are the pointers Gray coded before crossing?",options:["To save flops","Only one bit changes per step, so the other clock sees the old or the new value, never a mix","For speed","To reset them"],answer:1,explain:"See the Gray code lab in the CDC labs.",try:!1},{type:"number",q:"How many flops are in each pointer synchronizer chain (per bit)?",answer:2,tol:0,unit:"",explain:"wq1/wq2 and rq1/rq2.",try:!1},{type:"choice",q:"Can the empty flag be late?",options:["No","Yes: it is computed with a synchronized (older) write pointer, so it may stay set a few cycles longer. That is safe.","Only at reset"],answer:1,explain:"",try:!1}],"p4-mealy-nov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:0,explain:"After a detection the search starts again.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:0,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:3,tol:0,unit:"",explain:"Mealy: S0, S1, S10. Moore needs an extra S101 state to hold the output.",try:!1}],"p4-mealy-ov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:1,explain:"Overlapping reuses the last 1.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:0,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:3,tol:0,unit:"",explain:"Mealy: S0, S1, S10. Moore needs an extra S101 state to hold the output.",try:!1}],"p4-moore-nov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:0,explain:"After a detection the search starts again.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:1,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:4,tol:0,unit:"",explain:"S0, S1, S10 and S101 (the output state).",try:!1}],"p4-moore-ov":[{type:"choice",q:"Input bits 1, 0, 1, 0, 1: how many detections?",options:["1","2"],answer:1,explain:"Overlapping reuses the last 1.",try:!1},{type:"choice",q:"When is y = 1?",options:["While x is the final 1 (same cycle)","In the cycle after the final 1 was clocked in"],answer:1,explain:"Mealy outputs depend on the input; Moore outputs only on the state.",try:!1},{type:"number",q:"How many states does this detector need?",answer:4,tol:0,unit:"",explain:"S0, S1, S10 and S101 (the output state).",try:!1}],"s01-reg":[{type:"choice",q:"What does the logic type replace?",options:["Only wire","Both reg and wire in most code: it can be driven by assign or by a procedural block (one driver)","integer","Nothing"],answer:1,explain:"",try:!1},{type:"choice",q:"What extra check does always_ff give over always @(posedge clk)?",options:["None","Tools warn if the block does not describe flip-flops, for example a missing edge","It is faster","It adds a reset"],answer:1,explain:"",try:!1},{type:"number",q:"How many bits does '0 set for an 8-bit out?",answer:8,tol:0,unit:"",explain:"'0 fills every bit of the target with 0.",try:!1}],"s02-mux":[{type:"choice",q:"What does unique case promise?",options:["Nothing","Exactly one case item matches; tools may warn if none or several match","The case is fast","A default is not needed"],answer:1,explain:"Icarus prints a note that it ignores the check.",try:!1},{type:"number",q:"What is the width of scale_mux with no parameter override?",answer:1,tol:0,unit:"",explain:"WIDTH defaults to 1.",try:!1},{type:"choice",q:"Why drive 'x in the default branch?",options:["To save area","So an unknown select shows up as unknown in simulation instead of hiding as a valid value","It is required","To reset"],answer:1,explain:"",try:!1}],"s03-cnt":[{type:"number",q:"What value comes after 31?",answer:0,tol:0,unit:"",explain:"5 bits wrap.",try:!1},{type:"choice",q:"load = 1 and enable = 1: what happens?",options:["count increments","count loads data","Nothing"],answer:1,explain:"load is checked first.",try:!1},{type:"choice",q:"In the CPU, what does this counter become?",options:["The accumulator","The program counter","The ALU","The memory"],answer:1,explain:"",try:!1}],"s04-ctrl":[{type:"number",q:"How many clock cycles does one instruction take?",answer:8,tol:0,unit:"",explain:"8 states, one per clock.",try:!1},{type:"choice",q:"What does state.next() return after STORE?",options:["STORE","INST_ADDR: next() wraps to the first value","x","IDLE"],answer:1,explain:"",try:!1},{type:"choice",q:"In which state is halt raised for an HLT instruction?",options:["INST_ADDR","OP_ADDR","STORE","ALU_OP"],answer:1,explain:"",try:!1},{type:"choice",q:"Why is this a Mealy machine?",options:["It has 8 states","Its outputs depend on opcode and zero as well as the state","It uses enums","It has a reset"],answer:1,explain:"",try:!1}],"s05-alu":[{type:"choice",q:"For LDA, what is out?",options:["accum","data","data + accum","0"],answer:1,explain:"Load the accumulator from memory.",try:!1},{type:"number",q:"For ADD with accum = 200 and data = 100, what is out (8 bits)?",answer:44,tol:0,unit:"",explain:"300 \u2212 256.",try:!1},{type:"choice",q:"Why is out registered on the falling edge?",options:["To save power","So it is ready half a cycle later, for the accumulator to load on the next rising edge","It is a bug","For reset"],answer:1,explain:"",try:!1}],"s06-memtb":[{type:"choice",q:"Why drive the memory inputs on the falling edge?",options:["It is required","So they are stable when the memory samples them on the rising edge: no race","To test hold"],answer:1,explain:"",try:!1},{type:"choice",q:"What does 'input bit debug = 0' in a task do?",options:["Nothing","Makes debug optional: callers can leave it out","Forces debug to 0"],answer:1,explain:"",try:!1},{type:"choice",q:"With BUG = 1, which addresses are written wrongly?",options:["0 to 15","16 to 31: address bit 4 is lost, so they land on 0 to 15","All","None"],answer:1,explain:"",try:!1}],"s07-struct":[{type:"number",q:"How many bits wide is mem_req_t?",answer:15,tol:0,unit:"",explain:"1 + 1 + 5 + 8.",try:!1},{type:"choice",q:"Why does the field order matter here?",options:["It does not","A packed struct is also a plain vector, and the testbench builds it as {read, write, addr, data}","For speed"],answer:1,explain:"",try:!1},{type:"choice",q:"What can an interface do that a struct cannot?",options:["Nothing","Carry signals in both directions with modports, and hold tasks and functions for the bus protocol","Be smaller","Be synthesized"],answer:1,explain:"",try:!1}],"s08-cpu":[{type:"number",q:"How many bits is the address field of an instruction?",answer:5,tol:0,unit:"",explain:"{opcode[7:5], address[4:0]}: 32 memory words.",try:!1},{type:"number",q:"At what address (hex 12 = decimal 18) does Program 1 halt? Answer in decimal.",answer:18,tol:0,unit:"",explain:"The success HLT is at 12 hex.",try:!1},{type:"number",q:"What does Program 2 leave in memory[1D]?",answer:55,tol:0,unit:"",explain:"1 + 2 + \u2026 + 10.",try:!1},{type:"number",q:"What does Program 3 leave in memory[1D]?",answer:144,tol:0,unit:"",explain:"The Fibonacci number it stops at.",try:!1},{type:"choice",q:"What does the mux select while fetch = 1?",options:["The instruction's address field","The program counter"],answer:1,explain:"",try:!1}],"s09-johnson":[{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What comes after 0111?",options:["1111","1110","0000","1000"],answer:0,explain:"Shift left and bring in ~q[3] = 1.",try:!1},{type:"number",q:"How many bits change between two neighbouring states?",answer:1,tol:0,unit:"",explain:"That is why Johnson counters decode without glitches.",try:!1}],"s10-gen":[{type:"number",q:"How many full_adder instances does rca #(N=12) contain?",answer:12,tol:0,unit:"",explain:"One per bit.",try:!1},{type:"choice",q:"What is genvar?",options:["A run-time variable","An elaboration-time loop index used by generate loops","A wire","A parameter"],answer:1,explain:"",try:!1},{type:"choice",q:"Why name the generate block (begin : stage)?",options:["It is optional decoration","It gives each instance a hierarchical name, such as stage[3].fa, for debug and constraints"],answer:1,explain:"",try:!1}],"s11-dpram":[{type:"number",q:"How many words does dpram hold with AW = 4?",answer:16,tol:0,unit:"",explain:"2^4.",try:!1},{type:"choice",q:"Port A writes address 5 with new data. What does dout_a show on that edge?",options:["The new data","The old data (read-before-write)","x"],answer:1,explain:"",try:!1},{type:"choice",q:"Can port B read while port A writes?",options:["No","Yes: that is the point of a dual-port RAM"],answer:1,explain:"",try:!1}],"s12-uart":[{type:"number",q:"How many bits does one byte take on the line (start + data + stop)?",answer:10,tol:0,unit:"",explain:"1 + 8 + 1.",try:!1},{type:"number",q:"With CLKS_PER_BIT = 4 and a 10 ns clock, how long does one byte take?",answer:400,tol:0,unit:"ns",explain:"10 bits \xD7 4 clocks \xD7 10 ns.",try:!1},{type:"choice",q:"Which data bit is sent first?",options:["data[7]","data[0]"],answer:1,explain:"UARTs send LSB first.",try:!1},{type:"choice",q:"What level does tx have when idle?",options:["0","1"],answer:1,explain:"The start bit is the 1 \u2192 0 edge.",try:!1}],"l01-gates":[{type:"choice",q:"Which gate gives 1 only when its inputs are different?",options:["AND","XOR","XNOR","NOR"],answer:1,explain:"XOR is the 'odd number of 1s' gate.",try:!1},{type:"choice",q:"Which gate gives 1 only when both inputs are 0?",options:["NAND","NOR","XOR","OR"],answer:1,explain:"NOR = NOT of OR.",try:!1},{type:"number",q:"How many rows does the truth table of a 3-input gate have?",answer:8,tol:0,unit:"",explain:"2^3 = 8.",try:!1}],"l02-nand":[{type:"number",q:"How many NAND gates make a NOT gate?",answer:1,tol:0,unit:"",explain:"Tie both inputs together: (a\xB7a)' = a'.",try:!1},{type:"number",q:"How many 2-input NAND gates does the XOR circuit in this lab use?",answer:4,tol:0,unit:"",explain:"n1 plus x1, x2 and the output gate.",try:!1},{type:"choice",q:"Why is OR built as NAND(a', b')?",options:["By De Morgan: (a'\xB7b')' = a + b","It is faster","NAND cannot invert","It uses fewer gates than AND"],answer:0,explain:"",try:!1}],"l03-nor":[{type:"number",q:"How many 2-input NOR gates make an AND gate?",answer:3,tol:0,unit:"",explain:"Two to invert a and b, one NOR of the inverted inputs.",try:!1},{type:"choice",q:"NOR(a, a) equals",options:["a","a'","0","1"],answer:1,explain:"",try:!1},{type:"choice",q:"Which pair are both universal gates?",options:["AND and OR","NAND and NOR","XOR and XNOR","NOT and AND"],answer:1,explain:"",try:!1}],"l04-sop-pos":[{type:"choice",q:"y1 = A\xB7B + A'\xB7B' is the same as which single gate of A and B?",options:["XOR","XNOR","NAND","OR"],answer:1,explain:"It is 1 when A and B are equal.",try:!1},{type:"number",q:"For how many of the 8 input combinations is y3 = A + B\xB7C' equal to 1?",answer:5,tol:0,unit:"",explain:"All four with A = 1, plus A = 0, B = 1, C = 0.",try:!1},{type:"choice",q:"In a POS expression, each sum term corresponds to",options:["A row where F = 1","A row where F = 0 (a maxterm)","A don't-care","A clock edge"],answer:1,explain:"",try:!1}],"l05-demorgan":[{type:"choice",q:"(A + B)' equals",options:["A' + B'","A'\xB7B'","A\xB7B","(A\xB7B)'"],answer:1,explain:"",try:!1},{type:"choice",q:"A NAND gate is the same as",options:["An OR gate with inverted inputs","An AND gate with inverted inputs","A NOR gate","An XOR gate"],answer:0,explain:"(A\xB7B)' = A' + B'.",try:!1},{type:"number",q:"How many input combinations make l1_left = 0?",answer:1,tol:0,unit:"",explain:"Only A = B = 1.",try:!1}],"l06-kmap":[{type:"number",q:"How many product terms does the simplified F2 have?",answer:2,tol:0,unit:"",explain:"A\xB7B' and C\xB7D'.",try:!1},{type:"number",q:"How many minterms does one group of 4 cells cover?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why do K-maps order columns 00, 01, 11, 10?",options:["Alphabetical order","Gray code: neighbouring cells differ in one variable, so they can be grouped","It saves space","It is binary order"],answer:1,explain:"",try:!1}],"l07-dontcare":[{type:"choice",q:"Which don't-cares does the answer F = C\xB7D + A'\xB7B' use as 1?",options:["0 and 2","5 only","0, 2 and 5","None"],answer:0,explain:"m0 and m2 complete the A'\xB7B' group; m5 is left as 0.",try:!1},{type:"number",q:"How many literals does F = C\xB7D + A'\xB7B' have?",answer:4,tol:0,unit:"",explain:"C, D, A', B'.",try:!1},{type:"choice",q:"May a don't-care be 1 in one group and 0 elsewhere?",options:["No","Yes: it is only covered if that helps","Only in POS","Only if it is minterm 0"],answer:1,explain:"",try:!1}],"l08-parity":[{type:"number",q:"For d = 1011, what is the even parity bit p?",answer:1,tol:0,unit:"",explain:"Three 1s, so p = 1 makes four.",try:!1},{type:"choice",q:"Can parity detect two flipped bits?",options:["Yes","No: two flips keep the parity the same"],answer:1,explain:"",try:!1},{type:"choice",q:"What does ^d mean in Verilog?",options:["Bitwise NOT","Reduction XOR of all bits of d","Power","Exclusive OR with 1"],answer:1,explain:"",try:!1}],"l09-majority":[{type:"number",q:"How many of the 8 input combinations give y = 1?",answer:4,tol:0,unit:"",explain:"m3, m5, m6, m7.",try:!1},{type:"number",q:"How many 2-input AND gates does the minimal SOP need?",answer:3,tol:0,unit:"",explain:"A\xB7B, B\xB7C, A\xB7C.",try:!1},{type:"choice",q:"Majority of three is also the carry out of",options:["A half adder","A full adder","A comparator","A decoder"],answer:1,explain:"cout = 1 when at least two of a, b, cin are 1.",try:!1}],"l10-sub":[{type:"choice",q:"Which output of the full subtractor equals the full adder's sum?",options:["Bout","D","Neither","Both"],answer:1,explain:"D = A ^ B ^ Bin, the same as the sum.",try:!1},{type:"choice",q:"For A = 0, B = 1, Bin = 1, what are D and Bout?",options:["D = 0, Bout = 1","D = 1, Bout = 0","D = 0, Bout = 0","D = 1, Bout = 1"],answer:0,explain:"0 \u2212 1 \u2212 1 = \u22122: difference 0, borrow 1.",try:!1},{type:"choice",q:"The half subtractor borrow is",options:["A\xB7B'","A'\xB7B","A\xB7B","A ^ B"],answer:1,explain:"",try:!1}],"l29-rca":[{type:"number",q:"How many full adders does a 16-bit ripple-carry adder need?",answer:16,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"If each full adder carry takes 2 ns, what is the worst carry delay through 4 bits?",answer:8,tol:0,unit:"ns",explain:"The carry ripples through all four stages.",try:!1},{type:"number",q:"A = 1111, B = 0001, cin = 0: what is cout?",answer:1,tol:0,unit:"",explain:"15 + 1 = 16 overflows 4 bits.",try:!1}],"l18-addsub":[{type:"choice",q:"Why is M also the carry in?",options:["To add 1 for two's complement: A \u2212 B = A + B' + 1","To reset the adder","For overflow","To invert A"],answer:0,explain:"",try:!1},{type:"choice",q:"5 \u2212 7 with M = 1: what is S?",options:["1110 (\u22122)","0010","1100","1111"],answer:0,explain:"\u22122 in 4-bit two's complement is 1110.",try:!1},{type:"choice",q:"Signed overflow happens when",options:["cout = 1","Two operands of the same sign give a result of the other sign","The result is 0","B is negative"],answer:1,explain:"",try:!1}],"l19-bcdadd":[{type:"number",q:"In BCD, 7 + 5 gives digit s = ?",answer:2,tol:0,unit:"",explain:"12 \u2192 digit 2, carry 1.",try:!1},{type:"number",q:"What value is added to correct a sum above 9?",answer:6,tol:0,unit:"",explain:"It skips the six unused codes 1010 to 1111.",try:!1},{type:"choice",q:"Which sums need correction?",options:["Sums above 9","Only sums above 15","Odd sums","All sums"],answer:0,explain:"Including sums 16 to 19, where the binary adder already has a carry.",try:!1}],"l17-cmp2":[{type:"choice",q:"Which gate tests whether two bits are equal?",options:["XOR","XNOR","NAND","OR"],answer:1,explain:"",try:!1},{type:"number",q:"For how many of the 16 input combinations is gt = 1?",answer:6,tol:0,unit:"",explain:"Pairs with a > b: 16 \u2212 4 equal = 12, half of them.",try:!1},{type:"choice",q:"Why does the gt equation look at bit 1 first?",options:["The most significant bit decides unless it is equal","Bit 0 is slower","It is alphabetical","No reason"],answer:0,explain:"",try:!1}],"l30-cmp4":[{type:"choice",q:"For a single 7485, how are the cascade inputs tied?",options:["i_eq = 1, i_gt = i_lt = 0","All 0","All 1","i_gt = 1"],answer:0,explain:"Equal numbers must then give eq = 1.",try:!1},{type:"number",q:"How many 4-bit comparators compare two 12-bit numbers in a cascade?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"A = B and i_gt = 1: which output is 1?",options:["eq","gt","lt","None"],answer:1,explain:"The lower bits decide.",try:!1}],"l14-dec38":[{type:"choice",q:"a = 101 and the chip is enabled: which output is 0?",options:["y_n[2]","y_n[5]","y_n[3]","All"],answer:1,explain:"",try:!1},{type:"choice",q:"g1 = 0: what are the outputs?",options:["All 0","All 1","y_n[a] = 0","High impedance"],answer:1,explain:"Disabled: every active-low output is inactive.",try:!1},{type:"number",q:"How many 74138s plus enable wiring make a 4-to-16 decoder?",answer:2,tol:0,unit:"",explain:"The fourth address bit enables one chip or the other.",try:!1}],"l11-dec-fa":[{type:"number",q:"How many decoder outputs feed the OR gate for S?",answer:4,tol:0,unit:"",explain:"Minterms 1, 2, 4 and 7.",try:!1},{type:"choice",q:"Which minterm is shared by S and C?",options:["m3","m7","m1","m0"],answer:1,explain:"1 + 1 + 1 = 3: sum 1, carry 1.",try:!1},{type:"choice",q:"Can one 3-to-8 decoder implement any number of 3-input functions?",options:["Yes: one OR gate per function","No, only one","Only two","Only with a mux"],answer:0,explain:"",try:!1}],"l15-enc83":[{type:"number",q:"d = 0010_1000: what is y_p?",answer:5,tol:0,unit:"",explain:"The highest 1 is bit 5.",try:!1},{type:"choice",q:"d = 0010_1000: what is valid from the plain encoder?",options:["0: two bits are set","1"],answer:0,explain:"",try:!1},{type:"choice",q:"What does the any flag solve?",options:["d = 0 and d = 1 both give y_p = 0","Speed","Glitches","Nothing"],answer:0,explain:"",try:!1}],"l13-mux-demux":[{type:"number",q:"How many select bits does a 16-to-1 mux need?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many input combinations does the testbench check?",answer:4096,tol:0,unit:"",explain:"8 + 3 + 1 = 12 input bits.",try:!1},{type:"choice",q:"Demux with sel = 3 and x = 1: what is o?",options:["0000_1000","0000_0011","1000_0000","0000_0001"],answer:0,explain:"",try:!1}],"l12-mux-fn":[{type:"choice",q:"For ABC = 110, what is the data input?",options:["0","1","D","D'"],answer:1,explain:"m12 and m13 are both in F.",try:!1},{type:"choice",q:"For ABC = 010, what is the data input?",options:["0","1","D","D'"],answer:3,explain:"m4 is in F (D = 0) but m5 is not.",try:!1},{type:"number",q:"How many variables can one 8-to-1 mux implement any function of?",answer:4,tol:0,unit:"",explain:"3 select lines plus the fourth variable on the data inputs.",try:!1}],"l16-gray":[{type:"choice",q:"Binary 0110: what is the Gray code?",options:["0101","0110","0111","0100"],answer:0,explain:"g = b ^ (b >> 1) = 0110 ^ 0011.",try:!1},{type:"number",q:"How many bits change when the Gray code counts from 7 to 8?",answer:1,tol:0,unit:"",explain:"In binary all 4 bits change.",try:!1},{type:"choice",q:"Why does Gray-to-binary need a chain of XORs?",options:["Each binary bit is the XOR of all Gray bits above and including it","To save gates","It does not"],answer:0,explain:"",try:!1}],"l20-7seg":[{type:"number",q:"How many segments are lit for the digit 8?",answer:7,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which segment is off for 0?",options:["a","d","g (the middle bar)","f"],answer:2,explain:"",try:!1},{type:"choice",q:"In a common-anode display the segments are",options:["Active high","Active low (like the 7447)"],answer:1,explain:"",try:!1}],"l21-srlatch":[{type:"choice",q:"For a NAND latch, which input values hold the stored bit?",options:["s_n = r_n = 0","s_n = r_n = 1","s_n = 1, r_n = 0","s_n = 0, r_n = 1"],answer:1,explain:"",try:!1},{type:"choice",q:"Why is s_n = r_n = 0 not allowed?",options:["Both q and q_n go to 1, and the latch state is unpredictable when both are released","It burns the chip","It is a syntax error"],answer:0,explain:"",try:!1},{type:"number",q:"After s_n goes low, how many gate delays until q_n changes?",answer:2,tol:0,unit:"",explain:"q changes after one delay, then q_n one delay later.",try:!1}],"l22-ffs":[{type:"choice",q:"JK flip-flop with j = k = 1:",options:["Hold","Set","Reset","Toggle"],answer:3,explain:"",try:!1},{type:"choice",q:"Which flip-flop is a JK with J and K tied together?",options:["D","T","SR","None"],answer:1,explain:"",try:!1},{type:"choice",q:"Which flip-flop is a JK with K = J'?",options:["D","T","SR","None"],answer:0,explain:"",try:!1}],"l23-ripple":[{type:"number",q:"How many flip-flops does a ripple counter up to 255 need?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why is a ripple counter not used to drive synchronous logic?",options:["Its bits change one after another, so the outputs glitch through wrong values","It is too big","It counts down"],answer:0,explain:"",try:!1},{type:"choice",q:"In this lab, on which clk edge does the count change?",options:["Rising","Falling"],answer:1,explain:"t0 toggles on the falling edge of clk.",try:!1}],"l24-sync":[{type:"choice",q:"When does q[2] toggle?",options:["Every clock","When q[1] = q[0] = 1","When q[0] = 1","Never"],answer:1,explain:"",try:!1},{type:"number",q:"How many clocks until a 3-bit counter wraps to 0?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Main advantage over a ripple counter:",options:["All bits change on the same clock edge","Fewer gates","No clock needed"],answer:0,explain:"",try:!1}],"l32-updown":[{type:"choice",q:"Counting down, when does q[1] toggle?",options:["When q[0] = 0","When q[0] = 1","Every clock","Never"],answer:0,explain:"",try:!1},{type:"number",q:"Counting down from 0, what is the next value?",answer:7,tol:0,unit:"",explain:"It wraps around.",try:!1},{type:"number",q:"How many states does a MOD-8 counter have?",answer:8,tol:0,unit:"",explain:"",try:!1}],"l27-mod6":[{type:"number",q:"How many distinct values does the counter output show?",answer:6,tol:0,unit:"",explain:"0 to 5.",try:!1},{type:"number",q:"With a 60 MHz clock, what is the frequency of tc pulses?",answer:10,tol:0,unit:"MHz",explain:"60 / 6.",try:!1},{type:"number",q:"How many flip-flops are needed for MOD-6?",answer:3,tol:0,unit:"",explain:"2^3 = 8 \u2265 6.",try:!1}],"l25-ring":[{type:"number",q:"How many states does a 4-bit ring counter have?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many states does a 4-bit Johnson counter have?",answer:8,tol:0,unit:"",explain:"2N.",try:!1},{type:"choice",q:"What value follows 1110 in the Johnson counter?",options:["1111","0111","1100","0000"],answer:0,explain:"",try:!1}],"l26-siso":[{type:"number",q:"How many clocks does a bit take to go from sin to sout?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What is q after 1, 0, 0, 1 are shifted in (first bit first)?",options:["1001","0110","1111","0000"],answer:0,explain:"The first bit is now in q[0] and the last in q[3].",try:!1},{type:"choice",q:"Which register type converts serial data to parallel?",options:["SISO","SIPO","PISO","PIPO"],answer:1,explain:"",try:!1}],"l31-usr":[{type:"choice",q:"q = 0110, mode = 10, sl_in = 1: next q?",options:["1101","1011","0011","0110"],answer:0,explain:"Shift left: {q[2:0], sl_in}.",try:!1},{type:"choice",q:"Which mode loads d?",options:["00","01","10","11"],answer:3,explain:"",try:!1},{type:"choice",q:"Which 7400-series part is a 4-bit universal shift register?",options:["74194","7483","74138","7447"],answer:0,explain:"",try:!1}],"l28-fsm":[{type:"choice",q:"From state 01 with dir = 1, the next state is",options:["00","11","10","01"],answer:1,explain:"",try:!1},{type:"choice",q:"Is z a Moore or a Mealy output?",options:["Moore: it depends only on the state","Mealy"],answer:0,explain:"",try:!1},{type:"number",q:"How many flip-flops does a 4-state machine need with binary encoding?",answer:2,tol:0,unit:"",explain:"",try:!1}],"l33-traffic":[{type:"number",q:"How many clocks does the side road stay green?",answer:3,tol:0,unit:"",explain:"S2 lasts while timer counts 0, 1, 2.",try:!1},{type:"choice",q:"If car stays 0, what does the main road show?",options:["Green forever","It cycles anyway","Yellow"],answer:0,explain:"",try:!1},{type:"choice",q:"Can both roads be green at once?",options:["No: every state has at least one red","Yes, in S1"],answer:0,explain:"",try:!1}]};var Ke=[{id:"counter",title:"4-bit up counter",tag:"Sequential",std:"2005",design:`\`timescale 1ns/1ps

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
`}];var Xe=[{id:"part1",title:"Part 1: adders"},{id:"part2",title:"Part 2: combinational"},{id:"part3",title:"Part 3: latches and flip-flops"},{id:"part4",title:"Part 4: sequential"},{id:"sv",title:"SystemVerilog design labs"},{id:"ld-gates",title:"Gates and Boolean algebra"},{id:"ld-comb",title:"Combinational circuits"},{id:"ld-seq",title:"Flip-flops, counters and FSMs"}],Je=[{id:"p1-ha-df",group:"part1",tag:"Part 1 \xB7 Lab 1",title:"Half adder: dataflow",std:"2005",design:`// One-bit half adder, dataflow style: continuous assignments only.
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
`}}];var Ze=[{id:"sva-basic",title:"SVA basics",note:"Write the assertion where the TODO is: keep its label. Run: the lab passes when your assertion passes on good behaviour and fails exactly where the design misbehaves. Failures show as \u25BC on the waveform."},{id:"sva-seq",title:"Sequences",note:"Each lab injects one bug. Your assertion must fail exactly at the bug and pass everywhere else (the console lists expected vs actual failure times)."},{id:"sva-prop",title:"Properties and local variables",note:"Sampled-value functions, system functions, not/if/until, eventually, local variables. Keep the assertion labels: the lab checks them."},{id:"sva-apps",title:"Assertions for real designs",note:"FSMs, FIFOs, memories, arbiters and bus protocols: write the checker for the design, then find the bugs it catches."},{id:"cov-fc",title:"Functional coverage",note:"Write the covergroup where the TODO is: keep the covergroup and coverpoint names. The lab passes when your coverage model gives the same bins and the same coverage as the reference. The report is under the waveform."},{id:"dv-w7",title:"Week 7: Verilog for verification",note:"Testbench labs: complete the TODOs (usually in the testbench). A self-checking testbench prints PASS or FAIL. A \u2713 marks the labs you have passed."},{id:"dv-w8",title:"Week 8: SystemVerilog for verification",note:"Data types, interfaces, classes and threads. Complete the TODOs and run until the testbench prints PASS."},{id:"dv-cr",title:"Constrained random",note:"rand, randc, constraints, dist, solve-before, arrays and inline constraints. The solver runs in your browser; randomize() returns 0 and explains a conflict when the constraints cannot be met."},{id:"dv-w9",title:"Week 9: FIFO verification",note:"Packages and system tasks, then the week 9 FIFO project: test plan, directed tests, random tests with a scoreboard, assertions and functional coverage."},{id:"dv-proj",title:"Verification projects",note:"Complete verification environments: FIFO, round-robin arbiter, APB register block and UART. Each project has stimulus, checking (scoreboard + assertions) and coverage. Find the bug in the design and fix it."}],Qe=[{id:"sva-b1",group:"sva-basic",tag:"SVA basics \xB7 Lab 1",title:"Immediate assertions: executable comments",std:"2012",design:`// Program counter + one-hot FSM, from a small DSP. Two bugs are hidden in it.
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
`}}],Ye={"sva-b1":{problem:"A comment like 'state is one-hot' is never checked. An immediate assertion turns it into code that runs every time the procedure runs, and stops being silent the moment the design breaks it.",tasks:["Write a_onehot inside always @(state) with $onehot.","Write a_no_x at each clock, only while load is high, with $isunknown.","Run: count the errors and find the two bugs (one in the design, one in the testbench)."],learn:"Immediate assertions: syntax, labels, else actions with $error, and the $onehot / $isunknown system functions."},"sva-b2":{problem:"'Every request is acknowledged within 3 clocks' needs a fork, a timeout and a disable in plain Verilog. In SVA it is one line, it checks every request independently, and it shows each attempt on the waveform.",tasks:["Write a_req_ack: $rose(req) |-> ##[1:3] ack, clocked on posedge clk.","Run: one request is answered too late. Find the \u25BC on the waveform.","Hover the green \u25B2: which clock did each passing attempt end on?"],learn:"Concurrent assertions: clock, implication |->, delay ranges ##[m:n], and how each attempt passes or fails."},"sva-b3":{problem:"A test that changes signals exactly at the clock edge creates a race: code that reads the signals at that edge may see the old or the new value. Concurrent assertions avoid the race: they always sample the value from just before the edge.",tasks:["Run: compare when a_imm and a_conc first fail (output and \u25BC markers).","Explain the one-clock difference with the Preponed region.","Change the test to drive on @(negedge clk) and run again until both agree."],learn:"SVA sampling: values are taken in the Preponed region, evaluated in Observed, actions run in Reactive. Drive away from the sampling edge."},"sva-b4":{problem:"Off-by-one-cycle mistakes are the most common assertion bug. |-> starts the consequent in the same clock as the antecedent match; |=> starts it in the next clock.",tasks:["Write a_same with |-> and a_next with |=>.","Run: for each of the three accesses, which assertion passes and which fails? Read the \u25B2/\u25BC on the waveform.","Explain why the late ack fails both."],learn:"Overlapping vs non-overlapping implication, and that a false antecedent is a vacuous success."},"sva-b5":{problem:"Two classic gotchas (Sutherland, DesignCon 2006): with a level antecedent, every clock while req is high starts a new attempt; with a level consequent, an ack that was already high passes even though it never rose.",tasks:["Run the given assertion: note the false failure and the missed bug.","Use $rose on both sides and run again.","Check: exactly one failure, at the stuck-ack request."],learn:"Level vs edge in properties: $rose / $fell to start one attempt per event and to require a change."},"sva-b6":{problem:"Assertions written for normal operation fire during reset, when outputs are forced to their reset values. Those failures are noise and they hide real ones.",tasks:["Run: count the failures and find which happen in reset.","Add disable iff (!rst_n).","Run again: only the real glitch must fail."],learn:"disable iff: an asynchronous abort that cancels attempts while reset is active (it uses current values, not sampled ones)."},"sva-b7":{problem:"Assertion results feed the test: counters, error limits, end-of-test status. Some phases of a test deliberately break a protocol, and the checker must be switched off there.",tasks:["Add a pass action that counts passes and a fail action that counts and reports failures.","Wrap the low-power phase in $assertoff / $asserton.","Run until the test prints PASS."],learn:"Pass/else action blocks, $error vs $fatal, and assertion control tasks ($assertoff, $asserton, $assertkill)."},"sva-b8":{problem:"The same temporal property can be an obligation of the design (assert), a promise about the environment (assume: formal tools use it to restrict inputs, simulation checks it), or evidence that a scenario happened (cover).",tasks:["Write the assumption, the assertion and the cover.","Run: which one catches the long request, which one the spurious grant?","Check that c_b2b was covered once."],learn:"assert vs assume vs cover property, and how each is reported."},"sva-b9":{problem:"Verification engineers often cannot edit the RTL, and designers do not want verification code in it. bind instantiates a checker module inside every instance of a design module from the outside.",tasks:["Write a_lat2 in pipe2_sva.","Bind pipe2_sva to pipe2 with .* port connections.","Run: the assertion appears as tb.dut.u_sva.a_lat2. Which data value is corrupted?"],learn:"bind syntax, checker modules, and $past(expr, n) to compare with a value from n clocks ago."},"sva-b10":{problem:"Copying the same assertion with small changes is error-prone. Properties take arguments (signals, expressions, even delays), and default clocking / default disable iff remove the repeated clock and reset.",tasks:["Declare default clocking and default disable iff.","Write p_handshake(r, a, max) and instantiate it three times.","Run: which channel misses its window?"],learn:"Property declarations with formal arguments, default clocking, default disable iff."},"sva-s1":{problem:"Most protocol rules are 'B follows A within N cycles' or 'B follows A eventually'. SVA expresses both with cycle delays: ##n exactly, ##[m:n] a window, ##[m:$] unbounded.",tasks:["Write a_win, a_ev and a_sev.","Run: one done is late; one cmd is never answered.","Compare a_ev (weak, unfinished at the end) with a_sev (strong, fails at the end)."],learn:"Cycle delays and ranges, unbounded ranges, and weak vs strong behaviour at the end of simulation."},"sva-s2":{problem:"Bursts and wait states are counts of consecutive cycles. [*n] repeats a Boolean or a sequence n times back to back; [*m:n] allows a range.",tasks:["Write a_burst and a_wait.","Run: one burst is one beat short; one request waits too long.","Find both \u25BC and explain the failure times."],learn:"Consecutive repetition, zero repetitions ([*0:n]) and how a range ends early when the next element matches."},"sva-s3":{problem:"Data beats are not always back to back. 'The 4th beat' is a goto repetition b[->4]; 'exactly 4 beats, then later' is non-consecutive b[=4].",tasks:["Write a_goto and a_ncons.","Run the three reads: on time, done late, and a 5th beat.","Explain which assertion fails for each read."],learn:"b[->n] ends ON the nth b; b[=n] allows more cycles after it as long as b does not occur again."},"sva-s4":{problem:"A bus master must keep its grant for the whole transfer. 'Throughout' ties a Boolean to every cycle of a sequence.",tasks:["Write a_gnt with throughout and a goto repetition.","Run: in the second transfer gnt drops before the 3rd ack.","Why does it fail when gnt drops, not at the end?"],learn:"expr throughout seq = (expr[*0:$]) intersect seq: checked at every cycle of the sequence."},"sva-s5":{problem:"Some rules bound where something happens (inside a window) or how long a sequence lasts. within and intersect express both without counting by hand.",tasks:["Write a_we with within and a_len with intersect.","Run: in the 2nd chip-select window the write pulse sticks out of the window; the 2nd packet is too long.","Explain the failure times."],learn:"s1 within s2 (s1 happens somewhere inside s2), s1 intersect s2 (same start and same end), length limits with 1[*m:n]."},"sva-s6":{problem:"Two acknowledges that may come in any order, two acceptable outcomes, the first of several matches: and, or and first_match cover these without writing every case.",tasks:["Write a_both, a_either and c_first.","Run: one request misses ack_a; one request gets neither retry nor done in time.","Remove first_match from c_first and compare the cover count."],learn:"Sequence and (both match, end at the later one), or (either), first_match (keep only the earliest match)."},"sva-s7":{problem:"A named sequence can be reused with different arguments, and its end point can be tested from another property with .triggered: 'X happens only when sequence S has just completed'.",tasks:["Write a_wr, and a_irq using s_write(STATUS).triggered.","Run: one interrupt fires after a write to another register, one without any write.","Explain why .triggered is true only in the cycle the sequence ends."],learn:"sequence declarations with arguments, sequence instances, and the .triggered end-point method."},"sva-p1":{problem:"In a valid/ready (AXI-stream style) handshake the sender may not change its mind: once valid is high, valid and data must hold until ready. Two simple rules with $stable catch most sender bugs.",tasks:["Write a_hold, a_stable and the cover.","Run: one transfer changes data while stalled, one drops valid before ready.","Read the waveform rows \u25C6 for the cover hits."],learn:"$stable / $changed compare the sampled value with the previous clock's; the 'valid && !ready |=> \u2026' pattern."},"sva-p2":{problem:"cnt == $past(cnt) + 1 looks right, but Verilog sizes it to 32 bits (the literal 1 is 32-bit): 15 + 1 is 16, not 0, so the assertion fails at every wrap. The fix is a cast back to 4 bits.",tasks:["Run the starting code first (the placeholder) and then write cnt == $past(cnt) + 1: see it fail at each wrap.","Fix it with 4'($past(cnt) + 1).","Check that only the real bug (a missed increment) still fails."],learn:"$past(expr, n), and Verilog expression sizing inside assertions."},"sva-p3":{problem:"Many checks are about bit patterns: one-hot state, at most one grant, no unknown bits. SVA's system functions make them one-liners.",tasks:["Write the three assertions.","Run: find the double grant, the X in the address and the 3 simultaneous requests.","Why must X be checked with $isunknown and not with == 'x?"],learn:"$onehot, $onehot0, $isunknown, $countones (and $countbits)."},"sva-p4":{problem:"Some rules forbid a scenario ('never a read right after a write'); others depend on a mode. not and if/else express these directly.",tasks:["Write a_rw with not, and a_lat with if/else.","Run: one read follows a write directly; one slow request is acknowledged after 2 cycles.","What does a vacuous success of a_lat look like?"],learn:"not (property), if (cond) p1 else p2, and that a forbidden sequence fails at the cycle it completes."},"sva-p5":{problem:"Checking data needs memory: the value that went in must be compared with what comes out later. A local variable stores it per attempt, so overlapping transactions each keep their own value.",tasks:["Write p_data with a local variable x, assigned when in_v is high.","Run: which input value comes out wrong?","Why would a module-level variable not work with back-to-back inputs?"],learn:"Local variables in properties: declaration, assignment in a sequence match item, use in the consequent."},"sva-p6":{problem:"Responses can come back out of order. A local variable captures each request's ID so the response with that ID is found, whatever comes in between.",tasks:["Write p_id with a local variable v.","Run: ID 3 is never answered; ID 2's second request gets the wrong ID back.","What happens if two requests with the same ID overlap?"],learn:"Local variables for transaction IDs, and ##[m:n] searching for a matching response."},"sva-p7":{problem:"'Stay on until cleared' and 'eventually granted' have no fixed length. until and s_eventually express them; at the end of simulation, strong operators report what never happened.",tasks:["Write a_led with until and a_live with s_eventually.","Run: the LED goes off before clr in the 2nd error; the last request is never granted.","When is a_live's failure reported?"],learn:"until / until_with, s_eventually, and why liveness failures are only known at the end of the test."},"sva-p8":{problem:"An assertion that never fails is not necessarily right: if its antecedent never happens, every attempt is a vacuous success. A cover on the antecedent shows whether the assertion was ever really tested.",tasks:["Run the starting code: a_we never fails, but check its vacuous count.","Add c_wr on the antecedent: it is never covered with the typo 2'd4.","Fix the antecedent and find the real bug."],learn:"Vacuous success, antecedent coverage, and why every assertion should have a companion cover."},"sva-a1":{problem:"FSM bugs are illegal states and illegal transitions. Four short assertions cover most of them: encoding, reset state, how a state may be entered, and what must follow.",tasks:["Write the four assertions (labels given).","Run: the irq-during-stall path re-enters DECODE from EXEC.","Which two assertions catch it, and at which clocks?"],learn:"FSM checks: $onehot encoding, reset value, entry conditions with $past, and successor rules with |=>."},"sva-a2":{problem:"A FIFO's flags and occupancy must agree on every cycle, and data must come out as it went in. Five assertions (from the week 9 FIFO exercise) pin down the contract.",tasks:["Write the five assertions; default clocking and disable iff are given.","Run: the test pushes 10 words into an 8-deep FIFO. Which assertion catches the late full flag?","Write a cover for 'push while full' (not checked)."],learn:"Interface-level FIFO checks: flag consistency, occupancy bookkeeping with $past, and first-word data integrity with a local variable."},"sva-a3":{problem:"Memories are checked by their data contract: whatever was last written to an address comes back when it is read. Local variables carry the address and data from the write to the read.",tasks:["Write a_mutex, a_addr and a_data.","Run: which address reads back wrong data?","Explain why the bug only shows for addresses 8 to 15."],learn:"Memory data integrity with local variables and a goto search for the matching read."},"sva-a4":{problem:"An arbiter must give at most one grant, only to requesters, and never starve anyone. Fairness is a liveness-like property bounded by the number of requesters: a request is granted within N cycles.",tasks:["Write a_one and a_req.","Write the fairness assertion inside the generate loop: one instance per requester.","Run: which requester starves, and when does fair[3].a_fair report it?"],learn:"Exclusive grants with $onehot0, grant-implies-request, and per-requester bounded fairness in a generate loop."},"sva-a5":{problem:"APB has two phases: SETUP (PSEL high, PENABLE low) then ACCESS (PENABLE high) until PREADY. During wait states the master must hold address, direction and write data. Four assertions check a master against the spec.",tasks:["Write the four assertions (default clocking and reset are given).","Run: one transfer with wait states changes PADDR. Which assertion fails?","Add a cover for a transfer with exactly 2 wait states."],learn:"Writing protocol checkers from a bus specification: phase order and signal stability."},"sva-a6":{problem:"A four-phase (return-to-zero) handshake has a strict order: req\u2191, ack\u2191, req\u2193, ack\u2193. Each edge has a precondition; checking edges with $rose/$fell captures the protocol.",tasks:["Write the five assertions.","Run: in the third handshake ack falls before req. Which assertions fail?","Draw the four phases on the waveform."],learn:"Edge-based protocol checks with $rose/$fell and Boolean preconditions."},"sva-a7":{problem:"A serial frame is a fixed pattern in time: start bit, 8 data bits, stop bit, each a fixed number of clocks. Delays and repetition counts in bit times turn the frame format into assertions.",tasks:["Write a_start (start bit lasts a full bit time) and a_stop (stop bit is high), using the frame counter fcnt.","Run three frames: which byte has a framing error?","Remove '&& fcnt == 0' and run: why do falling edges inside the data now cause false failures?"],learn:"Timing-based protocol checks: delays and repetitions measured in bit times."},"sva-a8":{problem:"The DesignCon tutorial's test plan for a program counter: load, increment, hold. One assertion per row of the plan, written from the spec and not from the RTL.",tasks:["Write a_load, a_inc and a_hold.","Run: the counter wraps through FF \u2192 00 (a_inc must still pass) and loses one increment.","Which row of the test plan catches the bug?"],learn:"Turning a test plan table into assertions; $past for load values; casts for wrap-around arithmetic."},"cov-1":{problem:"Coverage measures what the stimulus did, not what it was meant to do. The simplest model is a coverpoint with automatic bins: one bin per value for small fields, and auto_bin_max (default 64) equal ranges for wide ones.",tasks:["Run the starting code: 8 bins for opcode. How many were hit?","Add cp_addr with option.auto_bin_max = 4.","Run: which address range is never hit, and why (look at the stimulus)?"],learn:"covergroup, coverpoint, automatic bins, auto_bin_max, sampling on a clock event, and reading a coverage report."},"cov-2":{problem:"Automatic bins rarely match what matters. Operands are interesting at 0, at the maximum, small and big; operations one by one. Explicit bins turn the verification plan into the coverage model.",tasks:["Write the bins of cp_a: zero, small, big[3], max.","Write cp_op with bins ops[] (one per value).","Run: which bins are empty? Which test would fill them?"],learn:"bins name = {values, [ranges]}; bins name[] (one per value); bins name[N] (values split into N bins)."},"cov-3":{problem:"Covering every state is not enough: bugs live in transitions (back-to-back transfers, wait states). Transition bins count sequences of values; illegal_bins flag transitions that must never happen.",tasks:["Write the five transition bins and the illegal bin.","Run: which transition is not covered, and what does the illegal bin report?","Add the missing scenario to the test and reach 100%."],learn:"Transition bins (a => b), repetition [*n], and illegal_bins for transitions."},"cov-4":{problem:"Command encodings group values by bit patterns, some codes do not matter (NOP) and some must never appear (reserved). wildcard, ignore_bins and illegal_bins express exactly that.",tasks:["Write the five bins (wildcard wr/rd, each_rd[], ignore nop, illegal rsvd).","Run: the test sends one reserved command. Find the error.","Which read command is never sent?"],learn:"wildcard bins with ?, ignore_bins (excluded from coverage), illegal_bins (errors), and that ignored values are removed from other bins."},"cov-5":{problem:"Each field covered alone says nothing about combinations: was a long WRAP write ever sent? Cross coverage counts every combination of bins; binsof prunes combinations that cannot or need not happen.",tasks:["Write x_tl with an ignore_bins for one-beat WRAP bursts, and x_td.","Run: count the cross bins (9 \u2212 1 ignored = 8, and 6).","Which combinations are missing?"],learn:"cross, automatic cross bins, binsof(cp.bin), && / || in select expressions, ignore_bins in crosses."},"cov-6":{problem:"One covergroup type often has several instances (one per port). Type coverage merges them; instance coverage shows each port. Options such as at_least make a bin count only after enough hits.",tasks:["Add option.per_instance = 1 and option.at_least = 2.","Run: compare type coverage with each instance's coverage.","Why is the type coverage higher than either port's?"],learn:"Covergroup arguments (ref signals), several instances, per_instance, at_least, get_coverage() vs get_inst_coverage()."},"cov-7":{problem:"Coverage sampled on every clock counts idle cycles and half-finished transfers. A covergroup with 'with function sample(...)' is sampled by the monitor once per completed transaction, with the transaction's fields as arguments; iff drops the ones that do not count.",tasks:["Write cp_reg with its bins and iff (!e), and cp_dir.","Run: the errored transfer to 8'h14 must not cover data[8'h14].","Which register was never written?"],learn:"with function sample(args), calling sample() from a monitor task, and iff on coverpoints."},"cov-8":{problem:"The week 9 exercise: a functional coverage model for an APB bus. It must show which registers were accessed in which direction and with how many wait states, while ignoring combinations the spec forbids.",tasks:["Write cp_reg (with a default bin), cp_dir, cp_wait (3+ as one bin) and the cross with an ignore for STAT writes.","Sample only at the end of a transfer (the clocking event with iff is given).","Run: list the holes, then add transfers until coverage is 100%."],learn:"Building a coverage model from a protocol spec: regions, directions, latencies, crosses and exclusions."},"cov-9":{problem:"Random stimulus quickly covers the middle and then plateaus: corners such as 0 and 255 are outside its range or too rare. Coverage closure means reading the holes and adding the stimulus (constraints or directed tests) that fills them.",tasks:["Run: the loop stops at 200 packets. Which bins are holes?","Add directed packets for the holes (both directions).","Run until the test prints PASS."],learn:"The coverage-driven loop: run, read holes, target them, re-run; get_coverage() inside the test."},"dv-1":{problem:"Every testbench starts with a clock. The period must be exact (real arithmetic and `timescale precision), some tests need a programmable frequency, and some interfaces need a duty cycle other than 50%.",tasks:["Write clk_a with always #5.","Write clk_b with initial forever and a delay computed from FREQ_MHZ.","Write clk_c (25% duty) with a task and two delays. Run until PASS, then try FREQ_MHZ = 33.3."],learn:"always vs initial-forever clock generators, real delays, `timescale, and a task-based clock with a duty cycle."},"dv-2":{problem:"Real chips have several resets: an asynchronous power-on reset, a system reset released synchronously to the clock, and software resets that pulse for a few cycles. The testbench must reproduce the sequence exactly.",tasks:["Generate por_n with a delay.","Release sys_rst_n on the 2nd clock edge after por_n (wait + repeat @(posedge clk)).","Pulse soft_rst for exactly 3 cycles from the first edge after 100 ns. Run until PASS."],learn:"Asynchronous assertion, synchronous release, wait(), repeat(n) @(posedge clk), and nonblocking assignments in testbench code."},"dv-3":{problem:"Before constraints, random values with properties are built from plain random numbers with masks and shifts. It is the week 7 exercise and a good reminder of how much work constraints save later.",tasks:["Make even_v even (clear bit 0) and odd_v odd (set bit 0).","Make onehot_v one-hot by shifting 1 to a random position.","Run until PASS."],learn:"$urandom, $urandom_range, bit masks and shifts to shape random values."},"dv-4":{problem:"Verification starts with a test plan: the list of features to exercise (load, up, down, both wraps, hold). Directed tests hit each item on purpose; a reference model and checker compare every cycle.",tasks:["Write directed tests that exercise all 6 plan items (the testbench counts them).","Run: a mismatch appears in one item. Which?","Fix the bug in design.sv and run until PASS."],learn:"Test plans, directed tests, reference models, self-checking testbenches."},"dv-5":{problem:"Directed tests only cover what you thought of. Random stimulus with sensible weights explores combinations automatically; the same reference model checks the results and the plan items show what was reached.",tasks:["Replace the stimulus with a 200-cycle random loop (weights given in the TODO).","Stop early when all plan items are hit.","Run until PASS. How many cycles did it take?"],learn:"Random stimulus in plain Verilog, weighting with $urandom_range, and measuring progress with plan items."},"dv-6":{problem:"Week 8 starts with SystemVerilog data types: logic, parameterized widths, unpacked arrays, enums, and tasks/functions with typed arguments. A behavioral memory model uses all of them.",tasks:["Write mem_model: storage array, registered read, write on we.","Add an enum for the last operation and drive op from it.","Run until PASS: the testbench writes and reads all 16 addresses."],learn:"logic, parameters, unpacked arrays with 2**AW entries, typedef enum, and testbench tasks with output arguments."},"dv-7":{problem:"Port lists repeat the same bundle of signals in the DUT, the testbench and every checker. An interface bundles them once; modports state each side's directions; tasks inside the interface give tests a transaction-level way to drive it.",tasks:["Add modport dut to fifo_if.","Write push_word and pop_word: wait while full/empty, drive for one cycle.","Run until PASS."],learn:"interface, modport, tasks in an interface, and calling them through the instance (f.push_word). (Virtual interfaces and clocking blocks are not supported by this simulator.)"},"dv-8":{problem:"Testbenches move transactions, not wires. A transaction class bundles the fields with methods (print, copy, compare). Handles are references: b = a shares the object; copy() makes a new one. Inheritance adds variants (error-injecting transactions) that work through base-class handles.",tasks:["Write copy() and compare() in Txn.","Write ErrTxn with err and an overriding sprint() that calls super.sprint().","Run until PASS."],learn:"Classes, constructors, handles vs objects, deep copy, compare, inheritance, super, and virtual methods (polymorphism)."},"dv-9":{problem:"Drivers, monitors and checkers run in parallel. fork/join waits for all threads, join_any for the first, join_none for none; disable fork cleans up the losers. A timeout is a race between the wait and a counter.",tasks:["Write the three fork blocks (join, join_any, join_none).","Write wait_done: race wait(!busy) against 20 cycles, then disable fork.","Run until PASS and explain the order of the log."],learn:"fork/join, join_any, join_none, disable fork, and bounded waits so a hung design fails instead of hanging."},"dv-10":{problem:"The week 8 exercise: two independent drivers, one pushing and one popping, each with random delays, so the FIFO sees bursts, stalls, full and empty. A queue in the testbench is the scoreboard: pushes append, pops compare with the front.",tasks:["Write push_driver: random delay, wait while full, push a random byte, record it.","Write pop_driver: random delay, wait while empty, compare dout with the queue front, pop.","Run until PASS; look for full and empty on the waveform."],learn:"Concurrent drivers with fork/join, random delays, queues as scoreboards ($ queues, push_back, pop_front)."},"dv-11":{problem:"The week 7 exercise again, with constraints: properties are declared, and the solver finds values. randc variables cycle through every value before repeating; randomize() returns 0 when it cannot find a solution, and good testbenches check it.",tasks:["Write the three constraint blocks.","Run: 16 calls must give every tag exactly twice (randc).","Check the return value of randomize() in your own code from now on."],learn:"rand, randc, constraint blocks, randomize() and its return value."},"dv-12":{problem:"Uniform random values waste most of the simulation on uninteresting cases. inside restricts values to legal sets; dist weights them, for example to hit the minimum and maximum packet lengths far more often than any single middle value.",tasks:["Write c_len with dist: := gives each value the weight, :/ shares the weight over a range.","Write c_kind with inside.","Run: 1000 packets, check the histogram is close to 20/60/20%."],learn:"inside with values and ranges, dist with := and :/, and measuring a distribution."},"dv-13":{problem:"short_pkt -> len == 0 has five solutions, only one with small = 1, so a uniform solver picks small = 1 only 20% of the time. solve short_pkt before len picks small first (50/50) and then len: the same legal values, a different distribution.",tasks:["Write the implication constraint.","Add solve short_pkt before len in the derived class.","Run: compare the two counts with 20% and 50%."],learn:"Implication (->) and if/else constraints, the uniform-over-solutions rule, and solve...before."},"dv-14":{problem:"The week 8 exercise: N random numbers between X and Y that add up to Z. Array constraints describe the whole array at once: its size, each element (foreach), an aggregate (sum) and uniqueness.",tasks:["Write the four constraints.","Run: five solutions of six numbers each.","Change total to 200: why does randomize() now fail, and what does the message say?"],learn:"Dynamic array constraints: size(), foreach, sum(), unique; and over-constrained problems."},"dv-15":{problem:"Tests steer one randomize() call at a time: inline 'with' constraints add rules for one call, soft constraints give defaults that a test may override, constraint_mode and rand_mode switch constraints and variables off, and post_randomize fixes up derived fields.",tasks:["Write post_randomize().","Replace the four plain randomize() calls with the four techniques in the TODOs.","Run until PASS; then try addr == 8'hF8 with c_addr still on and read the solver's message."],learn:"randomize() with { }, soft constraints, constraint_mode(), rand_mode(), post_randomize()."},"dv-16":{problem:"Shared types and helper functions belong in a package, imported where needed. System tasks format strings ($sformatf) and read and write files ($fopen, $fdisplay, $fgets) for test vectors and logs.",tasks:["Write count_list in the package.","Run: the checks call it with both directions, and the file round trip must match.","Add a third direction DOWN_EVEN as an exercise (not checked)."],learn:"package / import, typedef enum in a package, automatic functions returning strings, $sformatf, $fopen / $fdisplay / $fgets / $fclose."},"dv-17":{problem:"Week 9 FIFO project, step 1: a test plan written as a cross of operation \xD7 fill level, measured with functional coverage. Directed tests fill the cross; a queue-based reference model checks every cycle and exposes a corner-case bug.",tasks:["Write directed tests until cg_plan reaches 100% (the report lists the holes).","A mismatch appears at one combination: which?","Fix design.sv and run until PASS."],learn:"Test plans as coverage crosses, directed corner-case tests, cycle-by-cycle reference models."},"dv-18":{problem:"Balanced random push/pop keeps a FIFO half full: the full corners are rare. A transaction class with modes (fill, balanced, drain) changes the distribution so random tests reach every corner; coverage tells when to stop.",tasks:["Run the starting test: which cross bins stay empty?","Loop through fill / balanced / drain phases until coverage is 100% (or 400 operations).","Run until PASS: how many operations did it take?"],learn:"Transaction classes with mode-dependent dist constraints, coverage-driven random tests, stopping on get_coverage()."},"dv-19":{problem:"A data scoreboard only sees what was popped. A flag that is wrong for one cycle (empty going high while a word is still stored) changes no data in this test, but it would starve a real consumer. Assertions on the flags catch it immediately.",tasks:["Write the three assertions in fifo_sva (labels given).","Bind fifo_sva to sync_fifo.","Run: the scoreboard says 0 errors, the assertions do not. When does empty go wrong?"],learn:"Combining scoreboards and assertions; auxiliary code in checkers; bind with parameters."},"dv-p1":{problem:"Project 1 (vlsimentor's FIFO environment, week 9 project): put everything together. A transaction class with a bias knob feeds a driver; a monitor sends accepted pushes to a scoreboard and checks pops; coverage and bound assertions run alongside. The FIFO has a non-power-of-2 depth and a pointer bug only long random runs reveal.",tasks:["Write the generator: phases of fill / balanced / drain bias until 300 transactions and 100% coverage.","Run: the scoreboard reports errors. Use the waveform (rp, wp) to find the bug.","Fix design.sv and run until PASS."],learn:"Layered testbench architecture (transaction, generator, driver, monitor, scoreboard, coverage, assertions) and debugging from scoreboard errors to RTL."},"dv-p2":{problem:"Project 2 (vlsimentor's arbiter environment): fairness is the hard property of an arbiter. Requesters hold their request until granted; under heavy load a correct round-robin grants everyone within 4 cycles. The design under test rotates its priority to the wrong place.",tasks:["Write the traffic phases (light to saturated) so that 0 to 4 simultaneous requests are covered.","Run: which fairness assertion fails, under which load?","Fix the priority rotation in design.sv; run until all assertions pass and coverage is 100%."],learn:"Liveness bounded as fairness assertions in a generate loop, reactive requester models, coverage of contention levels, and debugging priority logic."},"dv-p3":{problem:"Project 3 (vlsimentor's APB peripheral): a register block is verified against its register map. A register model class predicts every read; random reads and writes to random registers compare against it; protocol assertions check the bus; coverage proves every register was written and read. Read-only and write-1-to-clear registers are where bugs hide.",tasks:["Write the random register test (80 random accesses).","Run: a read of CTRL returns an unexpected value after some writes. Which write caused it?","Fix design.sv; run until PASS."],learn:"Register models (mirror, read prediction), APB driver tasks, write-1-to-clear and read-only behaviour, address-map coverage."},"dv-p4":{problem:"Project 4 (vlsimentor's UART environment): a serial link is verified end to end: bytes go through the transmitter and come back from the receiver. Good data is not enough: error handling must be tested by injecting errors (a bad stop bit) and checking that the receiver flags them.",tasks:["Send the corner bytes, 20 random bytes and 4 frames with a bad stop bit.","Run: the scoreboard expects frame_err for the injected frames. What does the receiver do?","Fix the stop-bit check in design.sv; run until PASS."],learn:"End-to-end scoreboards, error injection, coverage of data patterns and error cases, and line-level assertions."}},en={"sva-b1":[{type:"number",q:"At what time does a_onehot fail?",answer:65,tol:0,unit:"",explain:"DECODE with pc = 13h goes to 1100; the next clock leaves it.",try:!1},{type:"choice",q:"Why use always @(state) for a_onehot instead of a clock?",options:["It checks every new value of state as soon as it changes","Immediate assertions need a clock","It is required by $onehot","It makes the assertion concurrent"],answer:0,explain:"An immediate assertion runs whenever its procedure runs.",try:!1},{type:"choice",q:"Where does $error print its message?",options:["In the simulation output, with the time and the assertion scope","Only in the waveform","Nowhere unless you call $display","In a separate log file only"],answer:0,explain:"",try:!1}],"sva-b2":[{type:"number",q:"At what time does a_req_ack fail?",answer:185,tol:0,unit:"",explain:"The window ##[1:3] closes three clocks after the third request.",try:!1},{type:"number",q:"How many attempts pass non-vacuously?",answer:2,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why $rose(req) and not req?",options:["req is high for one clock here, but $rose also stays correct if req were held high","$rose is faster","req alone does not compile","It turns off vacuity"],answer:0,explain:"With a level, a long req would start a new attempt every clock.",try:!1}],"sva-b3":[{type:"number",q:"Starting code: when does the immediate assertion first fail?",answer:15,tol:0,unit:"",explain:"It reads done = 1 right after the edge at 15.",try:!1},{type:"number",q:"Starting code: when does the concurrent assertion first fail?",answer:25,tol:0,unit:"",explain:"At 15 the sampled done is still 0; both are 1 in the sample at 25.",try:!1},{type:"choice",q:"In which scheduling region does a concurrent assertion sample its signals?",options:["Preponed","Active","NBA","Reactive"],answer:0,explain:"Preponed: before anything changes in that time step.",try:!1}],"sva-b4":[{type:"number",q:"How many times does a_same fail?",answer:2,tol:0,unit:"",explain:"The second access (req one cycle late) and the third (late ack).",try:!1},{type:"number",q:"At what time does a_next first fail?",answer:35,tol:0,unit:"",explain:"The first access has req in the same cycle as mem_en, so a_next looks one cycle too late.",try:!1},{type:"choice",q:"a |=> b is the same as \u2026",options:["a |-> ##1 b","a ##1 b","a |-> b","a |-> ##[0:1] b"],answer:0,explain:"",try:!1}],"sva-b5":[{type:"number",q:"With the given assertion, how many (false) failures are there on the good request?",answer:2,tol:0,unit:"",explain:"req is high for 3 clocks: 3 attempts, only the first sees ack two clocks later.",try:!1},{type:"number",q:"After the fix, at what time does the assertion fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does $rose(ack) check?",options:["The LSB of ack is 1 now and was not 1 at the previous clock","ack is 1 now","ack changed in either direction","ack is 1 for two clocks"],answer:0,explain:"",try:!1}],"sva-b6":[{type:"number",q:"Without disable iff: how many failures?",answer:4,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"With disable iff: at what time is the real failure?",answer:445,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Does disable iff use sampled or current values?",options:["Current values: it reacts as soon as reset changes","Sampled values, like the rest of the property","Only values at the start of the attempt","Values at the end of the attempt"],answer:0,explain:"",try:!1}],"sva-b7":[{type:"choice",q:"Which severity task stops the simulation?",options:["$fatal","$error","$warning","$info"],answer:0,explain:"",try:!1},{type:"number",q:"How many times did the pass action run?",answer:13,tol:0,unit:"",explain:"Far more than 3: by default the pass action also runs on vacuous successes (every clock where $rose(valid) is false), except while the assertion is off or in reset.",try:!1},{type:"choice",q:"Why are vacuous successes usually not what you want to count?",options:["They only mean the antecedent did not happen","They are failures","They are counted twice","They only happen in reset"],answer:0,explain:"Use a cover property to count real occurrences.",try:!1}],"sva-b8":[{type:"number",q:"At what time does m_req (the assumption) fail?",answer:125,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_gnt fail?",answer:175,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"In formal verification, what does assume property do?",options:["It restricts the inputs the tool may drive","It is ignored","It must be proven like an assert","It counts coverage"],answer:0,explain:"",try:!1}],"sva-b9":[{type:"number",q:"At what time does a_lat2 fail?",answer:95,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What is the hierarchical name of the bound assertion?",options:["tb.dut.u_sva.a_lat2","tb.u_sva.a_lat2","pipe2_sva.a_lat2","tb.a_lat2"],answer:0,explain:"",try:!1},{type:"number",q:"Which in_d value (hex) does the design corrupt? Answer in decimal.",answer:90,tol:0,unit:"",explain:"8'h5a is replaced by 00.",try:!1}],"sva-b10":[{type:"number",q:"How many failures does a_h2 report?",answer:2,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Can a delay bound like ##[1:max] come from a property argument?",options:["Yes, if the actual argument is a constant","No, delays must be literals","Only in sequences","Only with default clocking"],answer:0,explain:"",try:!1}],"sva-s1":[{type:"number",q:"At what time does a_win fail?",answer:135,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many a_ev attempts are unfinished at the end?",answer:1,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"##[1:3] b is the same as \u2026",options:["##1 b or ##2 b or ##3 b","##1 b and ##2 b and ##3 b","##3 b","b[*3]"],answer:0,explain:"",try:!1}],"sva-s2":[{type:"number",q:"At what time does a_burst fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_wait fail?",answer:285,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"a[*0:2] ##1 b matches \u2026",options:["b, a ##1 b, or a ##1 a ##1 b","only a ##1 a ##1 b","a and b together","b two cycles later"],answer:0,explain:"",try:!1}],"sva-s3":[{type:"number",q:"At what time does a_goto fail?",answer:215,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_ncons fail?",answer:405,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"b[->3] is equivalent to \u2026",options:["(!b[*0:$] ##1 b)[*3]","b[*3]","b ##[1:$] b ##[1:$] b ##1 1","(b ##1 !b)[*3]"],answer:0,explain:"",try:!1}],"sva-s4":[{type:"number",q:"At what time does a_gnt fail?",answer:195,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many non-vacuous passes?",answer:1,tol:0,unit:"",explain:"",try:!1}],"sva-s5":[{type:"number",q:"At what time does a_we fail?",answer:185,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_len fail?",answer:415,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"s1 intersect s2 requires \u2026",options:["both to start together and end in the same cycle","s1 to end before s2","only one of them to match","s1 inside s2"],answer:0,explain:"",try:!1}],"sva-s6":[{type:"number",q:"At what time does a_both fail?",answer:155,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_either fail?",answer:175,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times is c_first covered?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-s7":[{type:"number",q:"At what time does a_irq fail?",answer:85,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times does a_irq fail?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-p1":[{type:"number",q:"At what time does a_stable fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_hold fail?",answer:245,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many stalled transfers does c_stall see?",answer:4,tol:0,unit:"",explain:"",try:!1}],"sva-p2":[{type:"number",q:"At what time does a_inc fail?",answer:295,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why does cnt == $past(cnt) + 1 fail at 15 \u2192 0?",options:["The literal 1 is 32 bits, so the sum is computed in 32 bits: 16 \u2260 0","$past is wrong at wrap","cnt is signed","The clock is too fast"],answer:0,explain:"",try:!1},{type:"choice",q:"What is $past(cnt, 2)?",options:["The sampled value of cnt two clocks ago","cnt plus 2","cnt two time units ago","The value at the start of the attempt"],answer:0,explain:"",try:!1}],"sva-p3":[{type:"number",q:"At what time does a_gnt1 fail?",answer:65,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_noX fail?",answer:95,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_reqs fail?",answer:65,tol:0,unit:"",explain:"",try:!1}],"sva-p4":[{type:"number",q:"At what time does a_rw fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_lat fail?",answer:235,tol:0,unit:"",explain:"",try:!1}],"sva-p5":[{type:"number",q:"At what time does a_data fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"Which input value (decimal) is corrupted? (in_d + 1 = 8'h37)",answer:54,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Each attempt of a_data has \u2026",options:["its own copy of x","one shared x","no storage","x reset every clock"],answer:0,explain:"",try:!1}],"sva-p6":[{type:"number",q:"At what time does a_id fail?",answer:105,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many requests are never answered correctly?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-p7":[{type:"number",q:"At what time does a_led fail?",answer:145,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_live fail?",answer:305,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"With weak eventually (##[1:$]) instead of s_eventually, the missing grant is \u2026",options:["reported as unfinished, not failed","a failure","a vacuous pass","ignored silently and counted as a pass"],answer:0,explain:"",try:!1}],"sva-p8":[{type:"number",q:"At what time does a_we fail?",answer:205,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times is WRITE covered?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"An assertion with 0 failures and only vacuous passes \u2026",options:["was never really exercised","proves the design right","is a syntax error","means the clock is missing"],answer:0,explain:"",try:!1}],"sva-a1":[{type:"number",q:"At what time does a_decode fail?",answer:215,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_store fail?",answer:215,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which assertion style checks how a state was entered?",options:["state == S |-> $past(state) == P","state == P |=> state == S","$onehot(state)","$stable(state)"],answer:0,explain:"",try:!1}],"sva-a2":[{type:"number",q:"At what time does a_full fail?",answer:155,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many times does a_full fail?",answer:2,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why is a_count written with $past?",options:["count changes one clock after the push/pop that caused it","$past is required for counters","To avoid disable iff","To make it vacuous"],answer:0,explain:"",try:!1}],"sva-a3":[{type:"number",q:"At what time does a_data fail?",answer:105,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"What does (re && addr == a)[->1] match?",options:["The next cycle with a read of address a","Any read","A read exactly one cycle later","The first write after the read"],answer:0,explain:"",try:!1}],"sva-a4":[{type:"number",q:"At what time does fair[3].a_fair first fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why ##[1:4] for 4 requesters?",options:["In round robin, each requester waits at most for the other 3","Because the clock period is 4","It is arbitrary","To make it vacuous"],answer:0,explain:"",try:!1}],"sva-a5":[{type:"number",q:"At what time does a_stable fail?",answer:145,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"In APB, when does a transfer complete?",options:["In an ACCESS cycle with PREADY high","When PSEL rises","In the SETUP cycle","When PENABLE rises"],answer:0,explain:"",try:!1}],"sva-a6":[{type:"number",q:"At what time does a_a_down fail?",answer:245,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"At what time does a_r_down fail?",answer:255,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many of the five assertions fail at least once?",answer:2,tol:0,unit:"",explain:"",try:!1}],"sva-a7":[{type:"number",q:"At what time does a_stop fail?",answer:835,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"How many clocks long is one complete frame (start + 8 data + stop)?",answer:40,tol:0,unit:"",explain:"",try:!1}],"sva-a8":[{type:"number",q:"At what time does a_inc fail?",answer:115,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why the 8'(\u2026) cast in a_inc?",options:["So FF + 1 wraps to 00 like the 8-bit register","To make it signed","Because $past returns 32 bits","It is optional"],answer:0,explain:"",try:!1}],"cov-1":[{type:"number",q:"What is the coverage of cg_cmd with your solution (%)?",answer:62.5,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Which address bin is never hit?",options:["auto[192:255]","auto[0:63]","auto[64:127]","none"],answer:0,explain:"",try:!1},{type:"number",q:"Without auto_bin_max, how many automatic bins would an 8-bit coverpoint get?",answer:64,tol:0,unit:"",explain:"auto_bin_max defaults to 64, so 256 values go into 64 bins of 4.",try:!1}],"cov-2":[{type:"number",q:"Coverage of cg_alu with your bins (%)?",answer:79.2,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"How many bins does big[3] = {[16:254]} create?",answer:3,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Which operation is never covered?",options:["OR (3)","ADD (0)","SUB (1)","AND (2)"],answer:0,explain:"op = k % 3 never gives 3.",try:!1}],"cov-3":[{type:"number",q:"Coverage with your bins (%)?",answer:80,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Which bin is not covered?",options:["wait2","start","b2b","done"],answer:0,explain:"",try:!1},{type:"choice",q:"What happens when an illegal bin is hit?",options:["The simulator reports an error; the value is not counted in other bins","The bin counts towards coverage","Nothing","The simulation stops"],answer:0,explain:"",try:!1}],"cov-4":[{type:"number",q:"Coverage (%)?",answer:87.5,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"How many bins does each_rd[] = {[1:6]} create?",answer:6,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"A value in ignore_bins \u2026",options:["is not counted in any bin of the coverpoint","counts as a hit","causes an error","is counted twice"],answer:0,explain:"",try:!1}],"cov-5":[{type:"number",q:"Coverage (%)?",answer:95,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"How many bins does x_tl have after the ignore?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"binsof(cp_type.wrap) && binsof(cp_len.one) selects \u2026",options:["the cross bins where cp_type is in bin wrap and cp_len in bin one","all wrap bins and all one bins","nothing","the bins that are not wrap"],answer:0,explain:"",try:!1}],"cov-6":[{type:"number",q:"Type coverage reported by get_coverage() (%)?",answer:100,tol:.1,unit:"",explain:"",try:!1},{type:"number",q:"port1 instance coverage (%)?",answer:75,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"What does option.at_least = 2 change?",options:["A bin is covered only after 2 hits","Coverage must reach 200%","Two coverpoints are required","Sampling happens twice"],answer:0,explain:"",try:!1}],"cov-7":[{type:"number",q:"Coverage (%)?",answer:90,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Why is data[8'h14] not covered?",options:["Its only transfer had an error and iff (!e) excluded it","8'h14 is not in the bins","sample() was not called","It is an ignore bin"],answer:0,explain:"",try:!1}],"cov-8":[{type:"number",q:"Coverage with the given transfers (%)?",answer:93.8,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Which wait-state bin is empty?",options:["w3plus","w0","w1","w2"],answer:0,explain:"",try:!1},{type:"number",q:"How many bins does x_reg_dir have?",answer:5,tol:0,unit:"",explain:"3 regions \xD7 2 directions \u2212 1 ignored STAT write = 5: the default bin is not crossed.",try:!1}],"cov-9":[{type:"number",q:"Starting code: coverage after the random loop (%)?",answer:83.3,tol:.1,unit:"",explain:"",try:!1},{type:"choice",q:"Why can the random loop never hit bins zero and max?",options:["$urandom_range(1, 254) never produces 0 or 255","They are ignore bins","The covergroup is not sampled","Coverage is capped at 90%"],answer:0,explain:"",try:!1},{type:"choice",q:"A hole that cannot happen in the real design should be \u2026",options:["excluded with ignore_bins, with a reason in the plan","left as a hole","filled with a forced value","removed from the design"],answer:0,explain:"",try:!1}],"dv-1":[{type:"number",q:"Period of clk_b in ns at 125 MHz?",answer:8,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why does `timescale 1ns/1ps matter for FREQ_MHZ = 33.3?",options:["Delays are rounded to the 1 ps precision","It sets the clock frequency","It makes reals into integers","It is ignored for clocks"],answer:0,explain:"",try:!1}],"dv-2":[{type:"number",q:"At what time is sys_rst_n released (ns)?",answer:35,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why release sys_rst_n on a clock edge?",options:["So flip-flops leave reset in the same cycle (no recovery/removal violation)","To save power","It is required by Verilog","To make por_n synchronous"],answer:0,explain:"",try:!1}],"dv-3":[{type:"choice",q:"Is 16'h1 << $urandom_range(0,15) uniformly distributed over the 16 one-hot values?",options:["Yes: each position is equally likely","No: low bits are more likely","No: it can be zero","Only for even positions"],answer:0,explain:"",try:!1}],"dv-4":[{type:"choice",q:"Which plan item found the bug?",options:["wrap down (0 \u2192 15)","load","wrap up","hold"],answer:0,explain:"",try:!1},{type:"choice",q:"Why compare against a reference model rather than expected values typed in the test?",options:["It checks every cycle of any test, not just the cases you thought of","It is faster to simulate","It removes the need for a test plan","It finds timing bugs"],answer:0,explain:"",try:!1}],"dv-5":[{type:"choice",q:"Why make load rare?",options:["Frequent loads would keep the counter from ever reaching the wrap values","Loads are illegal","To save simulation time","Loads break the model"],answer:0,explain:"",try:!1}],"dv-6":[{type:"choice",q:"How many entries does logic [7:0] mem [2**4] have?",options:["16","8","4","256"],answer:0,explain:"",try:!1},{type:"choice",q:"Why are the testbench tasks declared automatic?",options:["Each call gets its own copy of its arguments and locals","To make them faster","Automatic tasks can be synthesized","To allow output arguments"],answer:0,explain:"",try:!1}],"dv-7":[{type:"choice",q:"What does a modport define?",options:["The direction of each interface signal as seen by one side","A clock domain","A new module","Timing checks"],answer:0,explain:"",try:!1}],"dv-8":[{type:"choice",q:"After b = a; b.addr = 8'h20; what is a.addr?",options:["8'h20: a and b are the same object","8'h10","x","a compile error"],answer:0,explain:"",try:!1},{type:"choice",q:"What makes a.sprint() call ErrTxn::sprint when a holds an ErrTxn?",options:["sprint is virtual","ErrTxn calls super.new","copy()","Nothing: it calls Txn::sprint"],answer:0,explain:"",try:!1}],"dv-9":[{type:"choice",q:"After fork ... join_any, the other threads \u2026",options:["keep running unless you disable them","are killed","are paused","restart"],answer:0,explain:"",try:!1},{type:"choice",q:"Why do testbenches need timeouts on waits?",options:["A hung design would otherwise hang the test forever","Waits are slow","Waits are not allowed in tasks","For coverage"],answer:0,explain:"",try:!1}],"dv-10":[{type:"choice",q:"Why compare dout before asserting pop in this FIFO?",options:["dout shows the oldest word before the pop (show-ahead)","pop clears dout","It is faster","To avoid an X"],answer:0,explain:"",try:!1}],"dv-11":[{type:"choice",q:"What does randc guarantee for a 3-bit variable?",options:["Each of the 8 values once before any repeats","Uniform distribution only","Increasing values","No repeats ever"],answer:0,explain:"",try:!1}],"dv-12":[{type:"choice",q:"[2:63] := 60 instead of :/ 60 would \u2026",options:["give each of the 62 values weight 60, so the middle dominates","be the same","give the range weight 60 in total","be a syntax error"],answer:0,explain:"",try:!1}],"dv-13":[{type:"number",q:"Without solve-before, about how many of 2000 have small = 1?",answer:416,tol:120,unit:"",explain:"",try:!1},{type:"choice",q:"Does solve...before change which values are legal?",options:["No, only their probabilities","Yes, it removes solutions","It makes small always 1","It is ignored by solvers"],answer:0,explain:"",try:!1}],"dv-14":[{type:"choice",q:"With n = 6 and hi = 30, what is the largest possible total?",options:["180","200","100","30"],answer:0,explain:"",try:!1},{type:"choice",q:"Why can v.sum() overflow for an array of byte?",options:["sum() has the element's width (8 bits), so the total wraps","It cannot","sum() is always 32 bits","Only for signed bytes"],answer:0,explain:"",try:!1}],"dv-15":[{type:"choice",q:"What happens to a soft constraint when an inline constraint conflicts with it?",options:["The soft constraint is dropped for that call","randomize() fails","The inline constraint is ignored","A compile error"],answer:0,explain:"",try:!1}],"dv-16":[{type:"choice",q:"What does import count_pkg::*; do?",options:["Makes the package's names visible without the count_pkg:: prefix","Copies the package into the module","Compiles the package","Creates an instance of the package"],answer:0,explain:"",try:!1}],"dv-17":[{type:"choice",q:"Which plan combination exposes the bug?",options:["both (push and pop) at full","read at empty","write at mid","idle at full"],answer:0,explain:"",try:!1},{type:"number",q:"How many bins does the cross have?",answer:12,tol:0,unit:"",explain:"",try:!1}],"dv-18":[{type:"choice",q:"Why does balanced 50/50 traffic rarely reach full?",options:["The level does a random walk around its start and rarely drifts 4 steps up","Push is ignored","The FIFO is too deep","Coverage is not sampled"],answer:0,explain:"",try:!1}],"dv-19":[{type:"number",q:"At what time does a_empty first fail?",answer:35,tol:0,unit:"",explain:"",try:!1},{type:"choice",q:"Why does the scoreboard not see this bug?",options:["It only compares popped data, and in this test the extra empty cycle does not change which data comes out","It is disabled","The bug is in the testbench","It only checks full"],answer:0,explain:"",try:!1}],"dv-p1":[{type:"choice",q:"Why is a non-power-of-2 depth risky for pointer logic?",options:["Pointers must wrap explicitly at DEPTH-1 instead of overflowing naturally","It uses more area","It cannot be full","Gray codes are required"],answer:0,explain:"",try:!1},{type:"choice",q:"Which component would you change to test a 12-deep FIFO?",options:["Only the DUT parameter (and the assertion parameter): the environment is generic","All of them","The scoreboard","The transaction class"],answer:0,explain:"",try:!1}],"dv-p2":[{type:"choice",q:"Under which load does starvation show?",options:["Heavy/saturated: several requesters wait at the same time","Light load","Only after reset","Never"],answer:0,explain:"",try:!1},{type:"choice",q:"Why ##[1:4] for 4 requesters?",options:["Each waits at most for the other 3 grants","It is the clock period","To match the coverage","Arbitrary"],answer:0,explain:"",try:!1}],"dv-p3":[{type:"choice",q:"What is a write-1-to-clear (W1C) register?",options:["Writing 1 to a bit clears it; writing 0 leaves it","It is cleared after any write","It can only be written once","Reading it clears it"],answer:0,explain:"",try:!1},{type:"choice",q:"Why does the bug need random register order to show?",options:["CTRL must be read after a write to STAT, with no CTRL write in between","It needs 1000 cycles","It is a timing bug","It only shows with interrupts"],answer:0,explain:"",try:!1}],"dv-p4":[{type:"choice",q:"Why is error injection necessary?",options:["Without it, the error-detection logic is never exercised","To slow down the test","To test the clock","For code coverage only"],answer:0,explain:"",try:!1},{type:"number",q:"How many clock cycles does one frame take at 4 clocks per bit?",answer:40,tol:0,unit:"",explain:"",try:!1}]};var nn={"sva-b1":{b:"{tb stimulus} > [pc_fsm] > (state, pc); (state, pc) .checked by.> {immediate assertions}",f:["P: The spec says 'state is one-hot' and 'never load an unknown value'.","S: assert ($onehot(state)) in always @(state).","S: if (load) assert (!$isunknown(d)) at each clock.","X: state = 1100 after DECODE when pc = 13h.","OK: Each broken rule prints an error with time and scope."]},"sva-b2":{b:"{test} -req-> {responder} -ack-> {test}; {test} .req, ack.> {a_req_ack}",f:["P: Every request must be acknowledged 1 to 3 clocks later.","S: $rose(req) starts an attempt (the antecedent).","S: ##[1:3] ack must match (the consequent).","X: The third request is answered after 5 clocks.","OK: One failure, at the clock where the window closes."]},"sva-b3":{b:"{test: blocking writes at posedge} > (go, done); (go, done) -now-> {immediate assertion}; (go, done) -preponed-> {concurrent assertion}",f:["P: The test writes go/done at the same edge that checks them.","S: The immediate assertion (after #0) sees the new values.","S: The concurrent assertion sees the values from before the edge.","Q: Which edge does each one fail on?","OK: Drive on the other edge: no race, both agree."]},"sva-b4":{b:"{access task} > (mem_en) > (req) > (ack); (mem_en, req, ack) .> {a_same |->}; (mem_en, req, ack) .> {a_next |=>}",f:["P: Same cycle or next cycle? The spec must say.","S: a |-> b: b starts in the cycle a matched.","S: a |=> b: b starts one cycle later (same as a |-> ##1 b).","Q: Which access matches which assertion?","OK: Each access passes exactly the assertion written for it."]},"sva-b5":{b:"{test} > (req) > {a_req_ack}; {test} > (ack) > {a_req_ack}",f:["P: req |-> ##2 ack fails on good behaviour and passes a stuck ack.","X: req held 3 clocks starts 3 attempts.","X: ack high before req: ##2 ack is trivially true.","S: $rose(req) |-> ##2 $rose(ack).","OK: One attempt per request, and ack must change."]},"sva-b6":{b:"(rst_n) > [reload_counter]; (load_val) > [reload_counter] > (cnt, tick); (cnt, tick) > {a_reload}; (rst_n) .disables.> {a_reload}",f:["P: The assertion fails while the counter is held in reset.","S: disable iff (!rst_n) cancels every attempt in progress when reset asserts.","S: no new attempt starts while reset is active.","OK: Only the real glitch fails."]},"sva-b7":{b:"{test phases} > (valid, ready) > {a_vr} -pass/fail actions-> {counters}; {test phases} .$assertoff/$asserton.> {a_vr}",f:["P: The test needs the number of passes and failures.","S: assert property (p) pass_stmt; else fail_stmt;","S: $assertoff(0, tb.a_vr) for the phase where the rule does not apply.","Q: Does the pass action run on vacuous passes? (here: $rose(valid) false)","OK: 3 passes, 1 failure: PASS."]},"sva-b8":{b:"{environment} -req-> [design] -gnt->; {environment} .m_req assume.> (req); [design] .a_gnt assert.> (gnt); (gnt) .c_b2b cover.> {coverage}",f:["P: One property, three roles.","S: assume: a rule the inputs must follow.","S: assert: a rule the design must follow.","S: cover: a scenario we must see at least once.","OK: Each failure points at the side that broke the rule."]},"sva-b9":{b:"{tb} > [pipe2]; {bind pipe2 pipe2_sva} .instantiates inside.> [pipe2]; [pipe2] .ports.> {u_sva: a_lat2}",f:["P: Add assertions to frozen RTL.","S: Put them in a separate checker module.","S: bind <design> <checker> <instance> (.*);","OK: The checker runs inside every pipe2 instance."]},"sva-b10":{b:"{p_handshake(r, a, max)} > {a_h0: req0/ack0/1}; {p_handshake(r, a, max)} > {a_h1: req1/ack1/2}; {p_handshake(r, a, max)} > {a_h2: req2/ack2/3}",f:["P: Three copies of one rule, with different limits.","S: property p(r, a, max) with arguments.","S: default clocking + default disable iff for the whole module.","OK: Three one-line assertions; channel 2 (latency 4 > 3) fails."]},"sva-s1":{b:"(start) > {##[2:4]} > (done); (cmd) > {##[1:$]} > (resp)",f:["P: 'within 2 to 4 cycles' and 'eventually'.","S: ##[2:4] tries each delay: passes on the first that matches.","S: ##[1:$] never fails: the attempt stays open.","Q: What happens to an open attempt when the simulation ends?","OK: weak: unfinished; strong (s_eventually): fails."]},"sva-s2":{b:"(bstart) > {bvalid[*4]} > (!bvalid); (req) > {!rdy[*0:3]} > (rdy)",f:["P: Count consecutive cycles.","S: b[*4] = b ##1 b ##1 b ##1 b.","S: !rdy[*0:3] ##1 rdy: rdy after 0..3 wait cycles.","X: a 3-beat burst; a 4-cycle wait.","OK: each fails at the first cycle that breaks the pattern."]},"sva-s3":{b:"(rd) > {dval[->4]} > (done); (rd) > {dval[=4]} > (done)",f:["P: 4 beats with gaps, then done.","S: dval[->4] ##1 done: done the next cycle.","S: dval[=4] ##1 done: done later, no extra beat.","X: read 2: done 2 cycles late. Read 3: 5 beats.","OK: goto catches the late done; [=4] catches the 5th beat."]},"sva-s4":{b:"(start) > {gnt throughout ack[->3]}",f:["P: gnt must hold until the 3rd ack.","S: gnt throughout ack[->3].","X: gnt drops after the 2nd ack.","OK: fails in the cycle gnt is low."]},"sva-s5":{b:"(cs_n) > {window !cs_n[*6]} > {we[*2] within}; (sop) > {eop[->1] intersect 1[*2:8]}",f:["P: 'inside the window' and 'at most 8 cycles'.","S: within: the inner sequence starts and ends inside the outer one.","S: intersect with 1[*2:8]: same length as a 2..8 cycle sequence.","OK: both bugs fail."]},"sva-s6":{b:"(req) > {##[1:4] ack_a and ##[1:4] ack_b}; (req) > {retry or done}; (req) > {first_match(##[1:5] gnt)}",f:["P: Order-free and alternative outcomes.","S: and: both sequences match; or: either.","S: first_match keeps only the earliest end.","OK: failures point at the missing ack and the missing outcome."]},"sva-s7":{b:"{s_write(a): wr && addr==a ##1 wack} .triggered.> {a_irq}; (irq) > {a_irq}",f:["P: irq must be caused by a write to STATUS.","S: Name the cause as a sequence with an argument.","S: s_write(STATUS).triggered is true when it ends.","OK: irq without the write fails."]},"sva-p1":{b:"{sender} -valid, data-> {receiver}; {receiver} -ready-> {sender}; (valid, ready, data) .> {a_hold, a_stable}",f:["P: The sender must hold valid and data until ready.","S: valid && !ready |=> valid.","S: valid && !ready |=> $stable(data).","X: data 22 \u2192 23 while stalled; valid dropped at 24.","OK: each rule fails once."]},"sva-p2":{b:"(inc) > [cnt register] > (cnt); (cnt) .$past.> {a_inc}",f:["P: cnt == $past(cnt) + 1 fails when cnt wraps.","S: The comparison is evaluated in 32 bits.","S: 4'($past(cnt) + 1) wraps like the counter.","OK: Only the missed increment fails."]},"sva-p3":{b:"(gnt) > {$onehot0}; (addr) > {$isunknown}; (req) > {$countones}",f:["P: Bit-pattern rules.","S: $onehot0(gnt): zero or one bit set.","S: !$isunknown(addr): no X/Z bits.","S: $countones(req) <= 2.","OK: three bugs, three failures."]},"sva-p4":{b:"(wr, rd) > {not (wr ##1 rd)}; (req, fast) > {if fast ##1 ack else ##3 ack}",f:["P: Forbidden sequences and mode-dependent latency.","S: not (wr ##1 rd).","S: if (fast) ##1 ack else ##3 ack.","OK: both bugs fail."]},"sva-p5":{b:"(in_v, in_d) > [stage 1] > [stage 2] > [stage 3] > (out_v, out_d); (in_d) .x = in_d + 1.> {a_data}",f:["P: Compare each output with its own input, 3 clocks later.","S: (in_v, x = in_d + 1) stores the value in the attempt.","S: ##3 out_d == x checks it.","OK: one attempt per input; the corrupted one fails."]},"sva-p6":{b:"(req, id) > {v = id} > {##[1:6] rsp && rsp_id == v}",f:["P: Match responses to requests out of order.","S: (req, v = id) stores the ID per attempt.","S: ##[1:6] (rsp && rsp_id == v).","OK: unanswered IDs fail when the window closes."]},"sva-p7":{b:"(err) > {led until clr}; (req) > {s_eventually gnt}",f:["P: 'Until' and 'eventually' have no bound.","S: led until clr: led every cycle until clr.","S: s_eventually: must happen before the end (strong).","OK: the LED bug fails at once; the missing grant at the end."]},"sva-p8":{b:"(go, ack) > [wb_fsm] > (state, we); (state) .> {c_wr cover}; (state, we) .> {a_we}",f:["P: The assertion never fails. Is the design right?","Q: Was the antecedent ever true? Cover it.","X: state == 2'd4 can never be true in 2 bits.","S: Fix the antecedent to 2'd3.","OK: the corner-case bug fails."]},"sva-a1":{b:"(stall, irq) > [ctrl FSM] > (state); (state) .> {onehot, reset, entry, successor checks}",f:["P: Illegal transitions hide in rare paths.","S: a_decode: DECODE only from FETCH ($past).","S: a_store: EXEC always followed by STORE.","X: EXEC \u2192 DECODE when irq and stall.","OK: both transition checks fail at the same event."]},"sva-a2":{b:"(push, din) > [fifo8] > (dout); [fifo8] > (full, empty, count); (full, empty, count) .> {flag and count assertions}",f:["P: Flags, count and data must agree.","S: full == (count == 8), empty == (count == 0).","S: count follows accepted pushes and pops ($past).","X: full is low while pushing into a full FIFO.","OK: a_full fails exactly when the FIFO is full and push is high."]},"sva-a3":{b:"(we, addr, wdata) > [ram16] > (rdata); (re) > [ram16]; (we, re, addr, wdata, rdata) .> {a_data: write then read}",f:["P: The value written must be the value read.","S: (we, a = addr, d = wdata) captures the write.","S: ##1 (re && addr == a)[->1] finds the read of that address.","S: |=> rdata == d (read latency 1).","X: address 9 is written to address 1."]},"sva-a4":{b:"(req[3:0]) > [rr_arb] > (gnt[3:0]); (req, gnt) .> {onehot0, gnt\u2192req, fairness \xD74}",f:["P: Exclusive, justified and fair grants.","S: $onehot0(gnt); gnt only where $past(req).","S: req[i] |-> ##[1:4] gnt[i] for each i.","X: requester 3 is skipped while requester 0 requests.","OK: fair[3] fails."]},"sva-a5":{b:"[apb_master] -psel, penable, paddr, pwrite, pwdata-> [slave]; [slave] -pready-> [apb_master]; (APB signals) .> {protocol assertions}",f:["P: Check a bus master against the APB spec.","S: SETUP then ACCESS: $rose(psel) |-> !penable; psel && !penable |=> penable.","S: wait states: $stable(paddr, pwrite, pwdata).","X: PADDR changes during a wait state.","OK: a_stable fails."]},"sva-a6":{b:"{sender} -req-> {receiver}; {receiver} -ack-> {sender}; (req, ack) .> {four edge rules + liveness}",f:["P: Four phases in a fixed order.","S: Each edge of req/ack has a condition on the other signal.","X: ack drops while req is still high.","OK: the ack-down rule fails."]},"sva-a7":{b:"(send, data) > [uart_tx] > (tx); (tx) .> {start bit check, stop bit check}",f:["P: 8N1 framing at 4 clocks per bit.","S: $fell(tx) starts a frame: !tx[*4].","S: bit 9 (stop) at ##36: tx[*4].","X: byte C3 is sent with stop bit 0.","OK: a_stop fails for that frame."]},"sva-a8":{b:"(load, inc, d) > [pc] > (pc_cnt); (pc_cnt) .> {load, inc, hold checks}",f:["P: Verify the PC test plan: load, increment, hold.","S: load |=> pc == $past(d).","S: inc && !load |=> pc == 8'($past(pc) + 1).","S: !load && !inc |=> $stable(pc).","X: an increment lost when hold_req is high."]},"cov-1":{b:"{random stimulus} > (opcode, addr) > {cg_cmd @(posedge clk)} > {bins and coverage %}",f:["P: Did the random test reach all opcodes and all address ranges?","S: coverpoint opcode: 8 automatic bins.","S: coverpoint addr with auto_bin_max = 4: 4 ranges of 64.","Q: The stimulus only uses 0..150: which bin stays empty?","OK: The report shows the holes."]},"cov-2":{b:"(a, op) > {cg_alu} > {cp_a: zero, small, big[0..2], max}; {cg_alu} > {cp_op: ops[0..3]}",f:["P: The plan says: corner values and every operation.","S: bins zero, small, big[3], max.","S: bins ops[] = {[0:3]}: 4 bins.","Q: Which corners did the test miss?","OK: The holes name the missing tests."]},"cov-3":{b:"(st) > {cp_tr: start, go, done, b2b, wait2}; (st) .IDLE => ACCESS.> {illegal_bins}",f:["P: Were all transitions exercised?","S: bins t = (A => B) counts each transition.","S: (ACCESS [*3]) counts 3 ACCESS cycles in a row.","X: IDLE => ACCESS is illegal: reported as an error.","OK: The hole: no transfer with two wait states."]},"cov-4":{b:"(cmd) > {wildcard wr / rd}; (cmd) > {each_rd[1..6]}; (cmd) .0000.> {ignore}; (cmd) .0111, 1111.> {illegal: error}",f:["P: Group, ignore and forbid command codes.","S: wildcard bins wr = {4'b1???}.","S: ignore_bins nop: not counted at all.","X: 4'hF is reserved: illegal_bins reports it.","OK: The report lists the missing read command."]},"cov-5":{b:"(btype) > {cp_type}; (blen) > {cp_len}; (wr) > {cp_dir}; {cp_type} > {x_tl}; {cp_len} > {x_tl}; {cp_type} > {x_td}; {cp_dir} > {x_td}",f:["P: Single-field coverage hides missing combinations.","S: cross cp_type, cp_len: 3 \xD7 3 bins.","S: ignore_bins with binsof removes WRAP \xD7 one.","Q: Which combinations did the test not create?","OK: The cross report lists them."]},"cov-6":{b:"(p0) > {c0: cg_port}; (p1) > {c1: cg_port}; {c0} > {type coverage}; {c1} > {type coverage}",f:["P: Two ports, one coverage model.","S: covergroup with a ref argument; one instance per port.","S: at_least = 2: a bin needs 2 hits.","Q: Type coverage merges the instances' hits.","OK: Each port alone has holes the other fills."]},"cov-7":{b:"{transfer task} -a, w, e-> {cov.sample(a, w, e)} > {cg_tr}; (e) .iff (!e).> {cg_tr}",f:["P: Count transactions, not clock cycles.","S: with function sample(a, w, e).","S: the monitor calls cov.sample() per transfer.","S: iff (!e) ignores errored transfers.","OK: data[14h] stays empty."]},"cov-8":{b:"{APB master} > (psel, penable, pready, paddr, pwrite) > {cg_apb at transfer end}; (ws_cnt) > {cg_apb at transfer end}",f:["P: Which registers, directions and latencies did the test cover?","S: sample at psel && penable && pready.","S: regions, read/write, 0/1/2/3+ waits.","S: cross region \xD7 direction, ignore STAT writes.","OK: the holes are the next tests to write."]},"cov-9":{b:"{random packets} > (len, wr) > {cg_pkt}; {directed corners} > (len, wr) > {cg_pkt}; {cg_pkt} .get_coverage().> {random packets}",f:["P: Random tests plateau below 100%.","S: Read the holes in the report.","S: Add stimulus aimed at each hole.","Q: Is a hole unreachable (then ignore it) or just untested?","OK: coverage closed at 100%."]},"dv-1":{b:"{always #5} > (clk_a); {initial forever, FREQ_MHZ} > (clk_b); {task: duty 25%} > (clk_c); (clk_a, clk_b, clk_c) > {period/duty checker}",f:["P: Exact, programmable clocks for the testbench.","S: always #(P/2) clk = ~clk.","S: forever #(500.0/FREQ_MHZ) for any frequency.","S: high for duty \xD7 P, low for the rest.","OK: the checker measures all three."]},"dv-2":{b:"{delay 23 ns} > (por_n) > {2 clk edges} > (sys_rst_n); {#100 + 1st edge} > (soft_rst, 3 cycles)",f:["P: Three resets with different timing rules.","S: por_n: plain delay.","S: sys_rst_n: wait(por_n), then 2 clock edges.","S: soft_rst: 3-cycle pulse on clock edges.","OK: the checker sees 23, 35, 105-135."]},"dv-3":{b:"($urandom) > {& FFFE} > (even); ($urandom) > {| 0001} > (odd); ($urandom_range 0..15) > {1 << n} > (one-hot)",f:["P: Random values with properties, without constraints.","S: even: clear bit 0.","S: odd: set bit 0.","S: one-hot: 1 << random position.","OK: 60 values pass the checks."]},"dv-4":{b:"{directed tests} > (en, up, load, d) > [updown]; (en, up, load, d) > {reference model}; [updown] -q-> {checker}; {reference model} -model-> {checker}",f:["P: Verify a counter feature by feature.","S: Test plan: load, up, down, wrap up, wrap down, hold.","S: One directed test per item; a model checks every cycle.","X: Counting down from 0 gives 14.","OK: Fix the design: every item passes."]},"dv-5":{b:"{random loop: $urandom_range} > (en, up, load, d) > [updown]; [updown] > {checker vs model}; {plan items} .stop when 6/6.> {random loop}",f:["P: Find bugs nobody thought of.","S: Random inputs with weights (load rare, en common).","S: The model checks every cycle.","Q: Did random stimulus reach both wraps?","OK: all items hit, no mismatch."]},"dv-6":{b:"{tb: write(), read() tasks} > (we, re, addr, wdata) > [mem_model: logic [DW-1:0] mem[2**AW]] > (rdata, op)",f:["P: A memory model for the testbench.","S: mem[2**AW] of logic [DW-1:0].","S: registered read, write on we.","S: enum {IDLE, READ, WRITE} for the status.","OK: 16 writes, 16 reads, status checked."]},"dv-7":{b:"{test} -f.push_word / f.pop_word-> {fifo_if: signals + tasks}; {fifo_if: signals + tasks} -modport dut-> [sync_fifo]",f:["P: The same signal bundle everywhere.","S: interface fifo_if with the signals.","S: modport dut for directions.","S: push_word/pop_word tasks drive one transfer.","OK: the test only calls tasks."]},"dv-8":{b:"{Txn: addr, data, write, sprint, copy, compare} > {ErrTxn: + err, sprint override}; {handle a} .points to.> {object}",f:["P: Transactions as objects.","S: b = a copies the handle, a.copy() the object.","S: compare() checks every field.","S: ErrTxn extends Txn; virtual sprint() overrides.","OK: a base handle calls the derived sprint."]},"dv-9":{b:"{main thread} > {fork job1 job2 join}; {main thread} > {fork job3 job4 join_any}; {main thread} > {fork job5 join_none}; {wait_done} > {wait(!busy) vs 20 cycles}",f:["P: Parallel activity and waits that can hang.","S: join waits for all, join_any for one, join_none for none.","S: Timeout: fork the wait and a counter, join_any, disable fork.","OK: order 2 1 4 99 3 5; second wait times out."]},"dv-10":{b:"{push_driver} -push, din-> [sync_fifo]; {pop_driver} -pop-> [sync_fifo]; [sync_fifo] -dout-> {pop_driver}; {push_driver} -expected-> {exp_q}; {exp_q} > {pop_driver}",f:["P: Exercise the FIFO with realistic traffic.","S: Two drivers in parallel with random delays.","S: The queue models the FIFO: push_back on push, compare on pop.","OK: 40 words in order."]},"dv-11":{b:"{class Nums: rand ev, od, oh; randc tag} > {constraints} > {solver} > (values)",f:["P: Random values with properties.","S: constraint c_even { ev % 2 == 0; }","S: $countones(oh) == 1 for one-hot.","S: randc tag: a permutation of 0..7 per cycle.","OK: 16 calls, every tag twice."]},"dv-12":{b:"{c_len: dist 1:=20, [2:63]:/60, 64:=20} > {solver} > (len histogram)",f:["P: Bias stimulus toward corner cases.","S: inside { ... } for legal values.","S: dist with := per value, :/ per range.","Q: What would [2:63] := 60 do instead?","OK: 20 / 60 / 20 % within tolerance."]},"dv-13":{b:"{Mode: short_pkt -> len == 0} > (small = 1 in 20%); {ModeSB: + solve short_pkt before len} > (small = 1 in 50%)",f:["P: Why is small so rare?","S: The solver is uniform over all solutions: 1 of 5 has small = 1.","S: solve short_pkt before len: choose small first.","OK: 20% vs 50%."]},"dv-14":{b:"{v.size() == n} > {foreach v[i] in [lo:hi]} > {v.sum() == total} > {unique {v}} > (6 numbers)",f:["P: Several numbers with a joint property.","S: size() first, then foreach for each element.","S: sum() ties them together; unique {v} keeps them distinct.","Q: 6 \xD7 30 = 180 < 200: is total = 200 possible?","OK: five valid splits."]},"dv-15":{b:"{test} -with {addr == 20h}-> {Txn.randomize()}; {test} .constraint_mode(0).> {c_addr}; {test} .rand_mode(0).> (wr); {Txn.randomize()} > {post_randomize}",f:["P: Steer single calls without new classes.","S: inline with { } adds constraints for one call.","S: soft gives way to a conflicting hard constraint.","S: constraint_mode / rand_mode switch rules and variables off.","OK: all four steering tests pass."]},"dv-16":{b:"{package count_pkg: dir_t, count_list()} > {tb: import count_pkg::*}; {tb} > {$fdisplay counts.txt} > {$fgets}",f:["P: Reusable types and helpers, and file I/O.","S: package with the enum and the function.","S: import into the testbench.","S: write the list to a file, read it back.","OK: all checks match."]},"dv-17":{b:"{directed tests} > (push, pop, din) > [sync_fifo]; (push, pop, din) > {queue model}; [sync_fifo] -dout, full, empty-> {compare}; {queue model} > {compare}; (push, pop, level) > {cg_plan: op \xD7 level}",f:["P: Which FIFO scenarios matter, and were they tested?","S: Plan = {idle, rd, wr, both} \xD7 {empty, mid, full}.","S: One directed step per hole until 100%.","X: push + pop together when full: the pop is ignored.","OK: fix the design: 100% and no mismatch."]},"dv-18":{b:"{FifoOp: rand push, pop, data; mode} > {op task} > [sync_fifo]; [sync_fifo] > {model check}; (ops, level) > {cg_plan} .get_coverage().> {phase loop}",f:["P: Balanced random traffic never fills the FIFO.","S: mode-dependent dist: fill, balanced, drain.","S: switch phases every 20 operations.","S: stop when the plan coverage reaches 100%.","OK: all 12 plan bins, no mismatch."]},"dv-19":{b:"[sync_fifo] -dout-> {data scoreboard}; [sync_fifo] -full, empty-> {fifo_sva (bound)}; (push, pop) > {aux level counter} > {fifo_sva (bound)}",f:["P: The data is right, so is the FIFO right?","S: Bind a checker with flag assertions.","S: An auxiliary level counter is the reference.","X: empty rises while popping with 2 words stored.","OK: a_empty fails although the scoreboard passes."]},"dv-p1":{b:"{generator: FifoTxn} > {driver} > [fifo_np2]; [fifo_np2] > {monitor}; {monitor} -push data-> {scoreboard}; {monitor} -pop data-> {scoreboard}; {monitor} > {coverage}; [fifo_np2] .bind.> {assertions}",f:["P: Verify a FIFO with depth 6 (not a power of 2).","S: Random phases fill, balance and drain the FIFO.","S: The scoreboard compares every popped word.","X: rp wraps at DEPTH instead of DEPTH-1: data from a stale slot.","OK: fixed RTL: clean scoreboard, 100% coverage."]},"dv-p2":{b:"{requester models \xD74: hold until granted} > (req[3:0]) > [rr4] > (gnt[3:0]); (req, gnt) .> {onehot0, gnt\u2192req, fair[i] \xD74}; (req) > {cg_arb: 0..4 requests}",f:["P: Is the arbiter fair under every load?","S: Requesters hold req until granted.","S: fair[i]: req[i] |-> ##[1:4] gnt[i].","X: ptr <= winner keeps the winner on top: others starve under saturation.","OK: ptr <= winner + 1: all assertions pass."]},"dv-p3":{b:"{random test} > {apb_write / apb_read} > [apb_regs]; {apb_write / apb_read} > {RegModel}; [apb_regs] -prdata-> {compare}; {RegModel} -predicted-> {compare}; (APB) .> {protocol assertions, map coverage}",f:["P: Does every register follow the map?","S: A model class mirrors each register.","S: Random reads compare with the prediction.","X: a write to read-only STAT changes CTRL.","OK: fixed RTL: all reads match, map 100%."]},"dv-p4":{b:"{test: bytes + error injection} > [uart TX] -tx-> [uart RX] > (rx_data, frame_err) > {scoreboard}; {test} -expected-> {scoreboard}; (tx) .> {a_start}",f:["P: Does the receiver detect framing errors?","S: Inject bad stop bits on purpose.","S: The scoreboard expects {err, data} per frame.","X: the receiver never checks the stop bit.","OK: frame_err <= !tx at the stop bit: PASS."]}};function an(t){let e=[],n=new Map,s=[],a="",i=0,o=t.split(/\s+/),r=!0,u=0,d=0;for(;i<o.length;){let p=o[i++];if(!p)continue;if(r){if(p==="$scope"){for(i++,s.push(o[i++]);o[i]!=="$end";)i++;i++}else if(p==="$upscope"){for(s.pop();o[i]!=="$end";)i++;i++}else if(p==="$timescale"){let b=[];for(;o[i]!=="$end";)b.push(o[i++]);i++,a=b.join("")}else if(p==="$var"){let b=o[i++],f=parseInt(o[i++],10),h=o[i++],y=[];for(;o[i]!=="$end";)y.push(o[i++]);i++;let _=y[0];y[1]&&y[1].startsWith("[")&&(_+=y[1]);let S=[...s,_].join(".");if(b==="parameter")continue;if(n.has(h)){n.get(h).aliases.push(S);continue}let q=[...s.slice(1),_].join("."),E={id:h,name:S,short:q||_,depth:s.length,width:f,type:b,changes:[],aliases:[]};n.set(h,E),e.push(E)}else if(p==="$enddefinitions"){for(;o[i]!=="$end";)i++;i++,r=!1}else if(p.startsWith("$")){for(;i<o.length&&o[i]!=="$end";)i++;i++}continue}let c=p[0];if(c==="#")u=Number(p.slice(1)),u>d&&(d=u);else if(c!=="$")if(c==="b"||c==="B"||c==="r"||c==="R"){let b=p.slice(1),f=o[i++],h=n.get(f);h&&tn(h,u,c==="r"||c==="R"?Number(b):b)}else{let b=n.get(p.slice(1));b&&tn(b,u,c.toLowerCase())}}return{signals:e,timescale:a,endTime:d}}function tn(t,e,n){let s=t.changes;s.length&&s[s.length-1][0]===e?s[s.length-1][1]=n:(!s.length||s[s.length-1][1]!==n)&&s.push([e,n])}function rn(t,e){let n=t.changes,s=0,a=n.length-1,i=-1;for(;s<=a;){let o=s+a>>1;n[o][0]<=e?(i=o,s=o+1):a=o-1}return i<0?null:n[i][1]}function Oe(t,e,n){if(e==null)return"";if(typeof e=="number")return String(+e.toPrecision(6));if(t.width===1)return e;let s=e.padStart(t.width,e[0]==="x"||e[0]==="z"?e[0]:"0");if(/[xz]/i.test(s))return/^x+$/i.test(s)?"x":/^z+$/i.test(s)?"z":n==="bin"?s:"x";if(n==="bin")return s;let a=BigInt("0b"+s);if(n==="dec")return a.toString(10);if(n==="sdec"){let i=BigInt(t.width);return(s[0]==="1"?a-(1n<<i):a).toString(10)}return a.toString(16).toUpperCase().padStart(Math.ceil(t.width/4),"0")}var pe=class{constructor(e,n){this.c=e,this.ctx=e.getContext("2d"),this.data=null,this.radix="hex",this.cursor=null,this.t0=0,this.t1=1,this.onCursor=n.onCursor||(()=>{}),this.nameW=190,this.rowH=28,this.axisH=26,this.theme=n.theme,e.addEventListener("mousedown",s=>this.click(s)),e.addEventListener("wheel",s=>this.wheel(s),{passive:!1}),new ResizeObserver(()=>this.draw()).observe(e.parentElement)}setData(e){this.data=e,this.cursor=null,this.t0=0,this.t1=Math.max(1,e.endTime),this.draw(),this.onCursor(null)}clear(){this.data=null,this.draw()}zoom(e,n){if(!this.data)return;let s=this.t1-this.t0,a=n??this.cursor??this.t0+s/2,i=Math.min(Math.max(s*e,2),Math.max(1,this.data.endTime)*1.05),o=a-(a-this.t0)*(i/s);o=Math.max(0,Math.min(o,Math.max(0,this.data.endTime-i))),this.t0=o,this.t1=o+i,this.draw()}fit(){this.data&&(this.t0=0,this.t1=Math.max(1,this.data.endTime),this.draw())}pan(e){if(!this.data)return;let n=this.t1-this.t0,s=this.t0+n*e;s=Math.max(0,Math.min(s,Math.max(0,this.data.endTime-n))),this.t0=s,this.t1=s+n,this.draw()}xOf(e,n){return this.nameW+(e-this.t0)/(this.t1-this.t0)*(n-this.nameW-8)}tOf(e,n){return this.t0+(e-this.nameW)/(n-this.nameW-8)*(this.t1-this.t0)}click(e){if(!this.data)return;let n=this.c.getBoundingClientRect(),s=e.clientX-n.left;s<this.nameW||(this.cursor=Math.max(0,Math.round(this.tOf(s,n.width))),this.draw(),this.onCursor(this.cursor))}wheel(e){if(!this.data)return;let n=this.c.getBoundingClientRect();e.ctrlKey||e.metaKey||Math.abs(e.deltaY)>Math.abs(e.deltaX)&&e.shiftKey===!1&&e.altKey?(e.preventDefault(),this.zoom(e.deltaY>0?1.25:.8,this.tOf(e.clientX-n.left,n.width))):(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey)&&(e.preventDefault(),this.pan((e.deltaX||e.deltaY)/600))}draw(){let e=this.theme(),s=this.c.parentElement.clientWidth;this.nameW=s<640?112:190;let a=this.data?this.data.signals:[],i=this.axisH+Math.max(a.length,3)*this.rowH+8,o=window.devicePixelRatio||1;this.c.style.width=s+"px",this.c.style.height=i+"px",this.c.width=Math.round(s*o),this.c.height=Math.round(i*o);let r=this.ctx;if(r.setTransform(o,0,0,o,0,0),r.fillStyle=e.bg,r.fillRect(0,0,s,i),r.font="12px 'JetBrains Mono', ui-monospace, monospace",r.textBaseline="middle",!this.data){r.fillStyle=e.muted,r.fillText("Run a simulation that calls $dumpvars to see waveforms here.",16,i/2);return}let u=this.t1-this.t0,d=(s-this.nameW)/110,p=u/Math.max(1,d),c=Math.pow(10,Math.floor(Math.log10(p))),b=[1,2,5,10].map(f=>f*c).find(f=>f>=p)||c*10;r.strokeStyle=e.grid,r.fillStyle=e.muted,r.lineWidth=1;for(let f=Math.ceil(this.t0/b)*b;f<=this.t1;f+=b){let h=Math.round(this.xOf(f,s))+.5;r.beginPath(),r.moveTo(h,this.axisH-6),r.lineTo(h,i),r.stroke(),r.fillText(we(f,this.data.timescale),h+3,11)}if(r.strokeStyle=e.line,r.beginPath(),r.moveTo(0,this.axisH+.5),r.lineTo(s,this.axisH+.5),r.stroke(),a.forEach((f,h)=>{let y=this.axisH+h*this.rowH,_=y+6,S=y+this.rowH-6,q=(_+S)/2;r.fillStyle=h%2?e.rowAlt:e.bg,r.fillRect(0,y+1,s,this.rowH-1),r.fillStyle=e.text;let E=f.short+(f.width>1&&!f.short.includes("[")?` [${f.width-1}:0]`:"");if(r.fillText(sn(r,E,this.nameW-16),10,q),r.save(),r.beginPath(),r.rect(this.nameW,y,s-this.nameW,this.rowH),r.clip(),f.kind==="assert"){this.drawAssert(r,f,s,_,S,q,e),r.restore();return}let L=f.changes;for(let P=0;P<L.length;P++){let H=L[P][0],U=P+1<L.length?L[P+1][0]:this.data.endTime;if(U<this.t0||H>this.t1)continue;let D=this.xOf(H,s),$=this.xOf(U,s),O=L[P][1];if(f.width===1&&typeof O=="string"){let W=O==="x"?e.x:O==="z"?e.z:e.wave;r.strokeStyle=W,r.lineWidth=1.5,O==="x"&&(r.fillStyle=e.xFill,r.fillRect(D,_,$-D,S-_));let Y=O==="1"?_:O==="0"?S:q;if(r.beginPath(),P>0){let C=L[P-1][1],se=C==="1"?_:C==="0"?S:q;r.moveTo(D,se)}else r.moveTo(D,Y);r.lineTo(D,Y),r.lineTo($,Y),r.stroke()}else{let W=Oe(f,O,this.radix),Y=W==="x"||W==="z";r.strokeStyle=Y?e.x:e.wave,r.lineWidth=1.2,r.fillStyle=Y?e.xFill:e.busFill;let C=Math.min(4,($-D)/2);r.beginPath(),r.moveTo(D,q),r.lineTo(D+C,_),r.lineTo($-C,_),r.lineTo($,q),r.lineTo($-C,S),r.lineTo(D+C,S),r.closePath(),r.fill(),r.stroke();let se=$-D-10;se>14&&(r.fillStyle=e.text,r.fillText(sn(r,W,se),Math.max(D,this.nameW)+6,q))}}r.restore()}),r.strokeStyle=e.line,r.beginPath(),r.moveTo(this.nameW+.5,0),r.lineTo(this.nameW+.5,i),r.stroke(),this.cursor!==null&&this.cursor>=this.t0&&this.cursor<=this.t1){let f=Math.round(this.xOf(this.cursor,s))+.5;r.strokeStyle=e.cursor,r.lineWidth=1.5,r.beginPath(),r.moveTo(f,0),r.lineTo(f,i),r.stroke()}}};pe.prototype.drawAssert=function(t,e,n,s,a,i,o){let r={pass:o.pass||"#2e9d5b",fail:o.fail||"#d64545",cover:o.coverc||"#3b7dd8",incomplete:o.muted,disabled:o.muted};t.strokeStyle=o.grid,t.lineWidth=1,t.beginPath(),t.moveTo(this.nameW,i),t.lineTo(n,i),t.stroke();let u=e.events||[];for(let d of u){if(d.s1<this.t0||d.s0>this.t1)continue;let p=this.xOf(d.s0,n),c=this.xOf(d.s1,n),b=r[d.kind]||o.muted;(d.kind==="fail"||d.kind==="incomplete"||c-p>3&&u.length<400)&&(t.globalAlpha=d.kind==="fail"?.28:.14,t.fillStyle=b,t.fillRect(p,s+3,Math.max(1,c-p),a-s-6),t.globalAlpha=1),t.fillStyle=b,t.beginPath(),d.kind==="pass"?(t.moveTo(c,s),t.lineTo(c+5,a),t.lineTo(c-5,a)):d.kind==="fail"?(t.moveTo(c-6,s),t.lineTo(c+6,s),t.lineTo(c,a)):d.kind==="cover"?(t.moveTo(c,s),t.lineTo(c+5,i),t.lineTo(c,a),t.lineTo(c-5,i)):t.arc(c,i,4,0,2*Math.PI),t.closePath(),t.fill()}};function sn(t,e,n){if(t.measureText(e).width<=n)return e;for(;e.length>1&&t.measureText(e+"\u2026").width>n;)e=e.slice(0,-1);return e+"\u2026"}function we(t,e){let n=/^(\d+)(s|ms|us|ns|ps|fs)$/.exec(e||"");if(!n)return String(t);let s=["fs","ps","ns","us","ms","s"],a=t*Number(n[1]),i=s.indexOf(n[2]);for(;i<s.length-1&&Math.abs(a)>=1e3&&a%1e3===0;)a/=1e3,i++;return i<2&&Math.abs(a)>=1e3&&(a/=1e3,i++,a=+a.toFixed(3)),`${a} ${s[i]}`}var ee=document.body.dataset.lab;var Pn=ee==="sva"||ee==="dv",Fn=t=>t.startsWith("sva-")||t.startsWith("cov-")||t.startsWith("dv-"),cn=t=>ee==="sva"?t.startsWith("sva-")||t.startsWith("cov-"):ee==="dv"?t.startsWith("dv-"):ee==="systemverilog"?t==="sv":ee==="logic"?t.startsWith("ld-"):t!=="sv"&&!t.startsWith("ld-")&&!Fn(t),pn=[...Ke.map(t=>({group:"examples",...t})),...Je,...Qe];for(let t of pn)t.quiz=Ge[t.id]||en[t.id]||[];var gn={...We,...Ye},un={...Ue,...nn},R=pn.filter(t=>cn(t.group)),Ln=[{id:"examples",title:"Examples",note:"Ready-to-copy examples: counters, FSMs, FIFOs, CDC synchronizers, SystemVerilog. Edit anything and press Run."},...Xe.map(t=>({...t,note:"Write the design in the Design pane: the ports are given. The testbench checks it and prints PASS or FAIL. A \u2713 marks the labs you have passed."})),...Ze],xe=Ln.filter(t=>cn(t.id)),ge="vdd-vlabs-code-v1",qe="vdd-vlabs-pass-v1",Q=t=>{try{return JSON.parse(localStorage.getItem(t)||"{}")||{}}catch{return{}}},ce=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch{}},w=t=>document.querySelector(t),on=15e3,hn=ee==="systemverilog"?"vdd-svlabs-v1":ee==="logic"?"vdd-logiclabs-v1":ee==="sva"?"vdd-svalabs-v1":ee==="dv"?"vdd-dvlabs-v1":"vdd-playground-v1",m={example:R[0].id,track:R[0].group,usedSolution:!1,std:R[0].std,running:!1,worker:null,ready:!1,timer:null,startedAt:0,lastVcd:null};function dn(t){let e=t.querySelector("textarea");if(window.CodeMirror){let n=window.CodeMirror.fromTextArea(e,{mode:"verilog",lineNumbers:!0,indentUnit:2,tabSize:2,smartIndent:!0,matchBrackets:!0,viewportMargin:1/0,extraKeys:{Tab:s=>s.replaceSelection("  ")}});return{get:()=>n.getValue(),set:s=>{n.setValue(s),n.clearHistory()},onChange:s=>n.on("change",s),refresh:()=>n.refresh(),goto:s=>{n.focus(),n.setCursor({line:s-1,ch:0}),n.addLineClass(s-1,"background","cm-errline"),setTimeout(()=>n.removeLineClass(s-1,"background","cm-errline"),2500),n.scrollIntoView({line:s-1,ch:0},80)},addKeys:s=>n.addKeyMap(s)}}return e.classList.add("plain-editor"),{get:()=>e.value,set:n=>{e.value=n},onChange:n=>e.addEventListener("input",n),refresh(){},goto:n=>{let s=e.value.split(`
`),a=0;for(let i=0;i<n-1&&i<s.length;i++)a+=s[i].length+1;e.focus(),e.setSelectionRange(a,a+(s[n-1]||"").length)},addKeys(){}}}var F={design:dn(w("#ed-design")),tb:dn(w("#ed-tb"))};function ue(){return m.std==="2012"?{design:"design.sv",tb:"testbench.sv"}:{design:"design.v",tb:"testbench.v"}}function Pe(){let t=ue();w("#name-design").textContent=t.design,w("#name-tb").textContent=t.tb,he()}var Ie="vdd-hints-v1";function M(t,e,n){let s=document.createElement(t);return e&&(s.className=e),n!=null&&(s.textContent=n),s}function he(){let t=R.find(d=>d.id===m.example),e=w("#show-solution"),n=w("#hint-box");if(!e||!n)return;if(!t||!t.solution){e.hidden=!0,n.hidden=!0;return}let s=De(t,{design:w("#name-design").textContent,tb:w("#name-tb").textContent}),a=s&&!m.usedSolution?Math.min(2,Q(Ie)[t.id]||0):2;if(e.hidden=!1,e.classList.toggle("hint-btn",a<2||s&&m.hintsHidden),e.textContent=a===0?"\u{1F4A1} Hint 1":m.hintsHidden&&s?"\u{1F4A1} Show hints":a===1?"\u{1F4A1} Hint 2":"Show solution",n.hidden=!s||a===0||m.hintsHidden||m.usedSolution,n.hidden)return;n.innerHTML="";let i=M("div","hint-head");i.append(M("strong",null,a===1?"\u{1F4A1} Hint 1 of 2":"\u{1F4A1} Hints 1 and 2"));let o=M("button","hint-x","\xD7");o.type="button",o.title="Hide hints",o.setAttribute("aria-label","Hide hints"),o.onclick=()=>{m.hintsHidden=!0,he()},i.append(o),n.append(i);let r=M("div","hint-step");r.append(M("h4",null,"Where to look"));let u=M("ul");for(let d of s.where){let p=M("li");p.append(M("code",null,d.file)," "+d.pos+": "+d.what),u.append(p)}if(s.more&&u.append(M("li",null,`\u2026and ${s.more} more place${s.more===1?"":"s"}.`)),r.append(u),s.ideas.length&&r.append(M("p",null,"Try using "+s.ideas.join(", ").replace(/, ([^,]*)$/," and $1")+".")),n.append(r),a>=2){let d=M("div","hint-step");d.append(M("h4",null,"Hint 2 \xB7 the shape of the answer"),M("p","hint-note","Fill in each ___ yourself."));for(let p of s.shape)d.append(M("div","hint-loc",p.file+" \xB7 "+p.pos)),d.append(M("pre","hint-code",p.lines.join(`
`)));n.append(d),n.append(M("p","hint-foot","Still stuck? Show solution loads the full answer. A pass after that won't count on the leaderboard."))}else n.append(M("p","hint-foot","Hints are free: they don't change your points."))}function Rn(){let t=R.find(s=>s.id===m.example);if(!t||!t.solution)return;if(m.hintsHidden){m.hintsHidden=!1,he();return}let e=Q(Ie),n=e[t.id]||0;if(n<2&&!m.usedSolution&&De(t,{design:"",tb:""})){e[t.id]=n+1,ce(Ie,e),he();let s=w("#hint-box");s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",behavior:"smooth"});return}Nn()}var En=()=>xe.find(t=>t.id===m.track)||xe[0],Cn=t=>(R.find(e=>e.id===t)||R[0]).group;function me(){let t=w("#vtracks");t.innerHTML="";for(let e of xe){let n=document.createElement("button");n.type="button",n.className="vtrack"+(e.id===m.track?" active":""),n.setAttribute("role","tab"),n.setAttribute("aria-selected",e.id===m.track?"true":"false");let s=R.filter(i=>i.group===e.id),a=e.id==="examples"?0:s.filter(i=>Q(qe)[i.id]).length;n.innerHTML='<span class="vtrack-t"></span><span class="vtrack-n"></span>',n.querySelector(".vtrack-t").textContent=e.title,n.querySelector(".vtrack-n").textContent=s.length+(e.id==="examples"?" examples":" labs")+(a?` \xB7 ${a} \u2713`:""),n.addEventListener("click",()=>Wn(e.id)),t.appendChild(n)}w("#vtrack-note").textContent=En().note,document.body.dataset.track!==m.track&&(document.body.dataset.track=m.track,document.dispatchEvent(new CustomEvent("vdd-track"))),w("#side-title").textContent=m.track==="examples"?"// Examples":"// Labs",w("#side-note").hidden=m.track!=="examples",w("#reset").textContent=m.track==="examples"?"Reset example":"Reset lab"}function Wn(t){m.track=t;try{let e=new URL(location.href);e.searchParams.set("track",t),history.replaceState(null,"",e.pathname+e.search)}catch{}Cn(m.example)!==t?re(R.find(e=>e.group===t).id):(me(),de())}var be=null;function de(){let t=w("#examples");t.innerHTML="";let e=Q(qe),n=R.filter(a=>a.group===m.track);for(let a of n){let i=document.createElement("button");if(i.type="button",i.className="ex"+(a.id===m.example?" active":""),i.dataset.id=a.id,i.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',i.querySelector(".ex-tag").textContent=a.tag,e[a.id]){let r=document.createElement("span");r.className="ex-pass",r.textContent="\u2713 passed",i.querySelector(".ex-tag").appendChild(r)}let o=be&&be.status(a.id);if(o&&o.checked){let r=document.createElement("span");r.className="ex-pass",r.textContent=`quiz ${o.score}/${o.total}`,i.querySelector(".ex-tag").appendChild(r)}i.querySelector(".ex-title").textContent=a.title,i.addEventListener("click",()=>re(a.id)),t.appendChild(i)}let s=w("#ex-select");s.innerHTML=n.map(a=>`<option value="${a.id}">${a.group==="examples"?"":a.tag+" \xB7 "}${a.title}</option>`).join(""),n.some(a=>a.id===m.example)&&(s.value=m.example)}function Bn(){let t=R.find(n=>n.id===m.example);if(!t||t.group==="examples")return;let e=Q(ge);e[t.id]={design:F.design.get(),tb:F.tb.get()},ce(ge,e)}function re(t,e){let n=R.find(a=>a.id===t)||R[0];m.example=n.id,m.std=n.std,m.track=n.group,m.usedSolution=!1,m.hintsHidden=!1,w("#std").value=n.std;let s=!e&&n.group!=="examples"?Q(ge)[n.id]:null;if(F.design.set(s?s.design:n.design),F.tb.set(s?s.tb:n.tb),e&&n.group!=="examples"){let a=Q(ge);delete a[n.id],ce(ge,a)}Pe(),me(),de(),Ae(gn,n.id,un),be.render(n),le(),Fe(),T.clear(),w("#wave-values").textContent="",bn(null),oe("Ready","idle")}function Nn(){let t=R.find(n=>n.id===m.example);if(!t||!t.solution)return;t.solution.design&&F.design.set(t.solution.design),t.solution.tb&&F.tb.set(t.solution.tb);let e=Q("vdd-solution-seen-v1");e[t.id]=Date.now(),ce("vdd-solution-seen-v1",e),m.usedSolution=!0,le(),he(),Fe(),Z("Loaded the solution. Run it to see PASS. Reset lab brings your starting point back.","meta")}function Mn(t){let e=R.find(a=>a.id===m.example);if(!e||e.group==="examples"||!/(^|\n)PASS\b/.test(t))return;let n=m.usedSolution||!!Q("vdd-solution-seen-v1")[e.id];try{document.dispatchEvent(new CustomEvent("vdd-pass",{detail:{id:e.id,solution:n}}))}catch{}if(m.usedSolution||Q("vdd-solution-seen-v1")[e.id]){let a=Q("vdd-vlabs-solved-v1");a[e.id]||(a[e.id]=Date.now(),ce("vdd-vlabs-solved-v1",a));return}let s=Q(qe);s[e.id]||(s[e.id]=Date.now(),ce(qe,s),me(),de())}function le(){Bn();try{localStorage.setItem(hn,JSON.stringify({example:m.example,std:m.std,design:F.design.get(),tb:F.tb.get()}))}catch{}}function Hn(){try{let t=JSON.parse(localStorage.getItem(hn)||"null");if(t&&t.design!=null)return t}catch{}return null}async function zn(){let t=JSON.stringify({s:m.std,d:F.design.get(),t:F.tb.get()}),e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),n=new Uint8Array(await new Response(e).arrayBuffer()),s="";for(let a of n)s+=String.fromCharCode(a);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function jn(t){let e=atob(t.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(e,a=>a.charCodeAt(0)),s=new Blob([n]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(s).text())}async function _e(t,e){let n=!1;try{await navigator.clipboard.writeText(t),n=!0}catch{let a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select();try{n=document.execCommand("copy")}catch{}a.remove()}if(e){let s=e.dataset.label||e.textContent;e.dataset.label=s,e.textContent=n?"Copied":"Press Ctrl+C",e.classList.toggle("ok",n),setTimeout(()=>{e.textContent=s,e.classList.remove("ok")},1600)}}function ln(t,e){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},500)}var ie=w("#console");function Fe(){ie.textContent=""}function Z(t,e){let n=document.createElement("div");n.className="ln "+(e||"");let s=/^(?:\/work\/)?([\w.-]+\.s?v):(\d+):/.exec(t);if(s){let a=s[1]===ue().design?"design":s[1]===ue().tb?"tb":null,i=document.createElement("button");i.type="button",i.className="loc",i.textContent=`${s[1]}:${s[2]}`,a&&i.addEventListener("click",()=>F[a].goto(+s[2])),n.appendChild(i),n.appendChild(document.createTextNode(":"+t.slice(s[0].length)))}else n.textContent=t;/qualities are ignored/.test(t)?n.classList.add("warn"):/\berror\b|ERROR|sorry|FAIL|MISMATCH|Internal error|Unable to/.test(t)?n.classList.add("err"):/\bwarning\b/i.test(t)?n.classList.add("warn"):/\bPASS\b/.test(t)&&n.classList.add("pass"),ie.appendChild(n),ie.childElementCount>6e3&&ie.firstChild.remove(),ie.scrollTop=ie.scrollHeight}function oe(t,e){let n=w("#status");n.textContent=t,n.dataset.kind=e}var Le=new URL(Pn?"/dv/":"/verilog/",location.href).href;function Un(){return new URL("worker.js",Le).href}function Re(){m.worker&&m.worker.terminate(),m.ready=!1;let t=new Worker(Un());t.onmessage=e=>Vn(e.data),t.onerror=e=>{Z("Simulator failed to start: "+(e.message||"worker error"),"err"),Ee(!1)},t.postMessage({type:"load",base:Le}),m.worker=t}function Vn(t){if(t.type==="ready")m.ready=!0,m.running||oe("Ready","idle");else if(t.type==="stage")oe(t.stage+"\u2026","busy"),t.stage==="Simulating"&&Z("\u2500\u2500 simulation output \u2500\u2500","meta");else if(t.type==="line")Z(t.line.replace(/\/work\//g,""),t.kind==="meta"?"meta":t.kind==="pass"?"pass":t.stream==="err"?"stderr":"");else if(t.type==="done"){if(t.ok){Z(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta"),t.dv&&Kn(t.dv),Mn(ie.innerText),bn(t.dv);let e=(t.vcd||[])[0];if(e){m.lastVcd=e;try{let n=an(e.text);Gn(n,t.dv),T.setData(n),w("#wave-meta").textContent=`${n.signals.length} signals \xB7 ${we(n.endTime,n.timescale)}`}catch(n){Z("Could not read waveform: "+n.message,"err")}}else T.clear(),w("#wave-meta").textContent='No waveform: add $dumpfile("dump.vcd"); $dumpvars(0, tb);'}else t.phase==="compile"?Z("\u2500\u2500 compile failed: fix the errors above and run again \u2500\u2500","meta err"):t.phase==="sim"&&Z(`\u2500\u2500 simulation exited with code ${t.rc} \u2500\u2500`,"meta err");Ee(t.ok,t.phase)}}function ve(){if(m.running)return;window.vddSubscribe&&window.vddSubscribe(),m.worker||Re(),le(),Fe(),w("#wave-values").textContent="",m.running=!0,m.startedAt=performance.now(),w("#run").disabled=!0,w("#stop").disabled=!1,oe(m.ready?"Compiling\u2026":"Loading simulator\u2026","busy");let t=ue(),e={[t.design]:F.design.get(),[t.tb]:F.tb.get()},n=w("#top").value.trim();(window.vddQ=window.vddQ||[]).push("sim"),m.worker.postMessage({type:"run",files:e,std:m.std,top:n,base:Le}),clearTimeout(m.timer),m.timer=setTimeout(()=>mn(`Stopped after ${on/1e3} s. Does your testbench call $finish?`),on)}function mn(t){m.running&&(Z(t||"Stopped.","meta err"),Ee(!1,"stopped"),Re())}function Ee(t,e){clearTimeout(m.timer),m.running=!1,w("#run").disabled=!1,w("#stop").disabled=!0,e==="stopped"?oe("Stopped","err"):oe(t?"Done":e==="compile"?"Compile errors":"Error",t?"ok":"err")}function Gn(t,e){if(t.signals=t.signals.filter(n=>!/(^|\.)(__dv|_ivl_)/.test(n.name)),!(!e||!e.asserts))for(let n of e.asserts){if(!n.events||!n.events.length)continue;let s=n.name.split(".").slice(1).join(".")||n.name;t.signals.push({id:"assert:"+n.name,name:n.name,short:"\u25C6 "+s,width:1,kind:"assert",changes:[],events:n.events})}}function te(t){return String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function bn(t){let e=w("#dvres");if(!e)return;if(!t||!t.asserts.length&&!t.coverage.length){e.hidden=!0;return}e.hidden=!1;let n="";if(t.asserts.length){n+='<h3>Assertions</h3><div class="dv-tablewrap"><table class="dv-table"><thead><tr><th>Assertion</th><th>Passed</th><th>Failed</th><th>Vacuous</th><th>Unfinished</th><th>Covered</th></tr></thead><tbody>';for(let s of t.asserts){let a=s.kind==="cover"||s.kind==="coverseq",i=s.events.find(o=>o.kind==="fail");n+=`<tr class="${s.fail?"bad":a&&!s.matches?"warnr":""}"><td><button type="button" class="dv-a" data-t="${i?i.s1:""}" data-line="${s.line}">${te(s.name)}</button>${a?' <span class="dv-k">cover</span>':s.kind==="assume"?' <span class="dv-k">assume</span>':""}</td><td>${a?"":s.pass}</td><td>${a?"":s.fail}</td><td>${a?"":s.vacuous}</td><td>${s.incomplete||""}</td><td>${a?s.matches:""}</td></tr>`}n+='</tbody></table></div><p class="dv-note">Click an assertion to jump to its first failure. In the waveform: \u25B2 pass, \u25BC fail, \u25C6 cover, \u25CB unfinished at the end of the run.</p>'}for(let s of t.coverage){n+=`<h3>Covergroup ${te(s.type)} <span class="dv-inst">${te(s.name)}</span> <span class="dv-pct ${s.coverage>=100?"ok":""}">${s.coverage.toFixed(1)}%</span></h3>`;let a=[...s.cps.map(i=>({...i,what:"coverpoint"})),...s.crosses.map(i=>({...i,what:"cross"}))];for(let i of a){let o=i.bins.filter(u=>u.n>=i.at_least).length;n+=`<details class="dv-cp"${i.coverage<100?" open":""}><summary>${i.what} <b>${te(i.name)}</b>: ${i.coverage.toFixed(1)}% (${o} of ${i.bins.length} bins)</summary><div class="dv-bins">`;let r=Math.max(1,...i.bins.map(u=>u.n));for(let u of i.bins.slice(0,300))n+=`<div class="dv-bin ${u.n>=i.at_least?"hit":"miss"}"><span class="dv-bn">${te(u.name)}${u.label?` <i>${te(u.label)}</i>`:""}</span><span class="dv-bar"><span style="width:${100*u.n/r}%"></span></span><span class="dv-bc">${u.n}</span></div>`;i.bins.length>300&&(n+=`<div class="dv-note">\u2026 ${i.bins.length-300} more bins</div>`),i.def&&(n+=`<div class="dv-bin def"><span class="dv-bn">${te(i.def.name)} (default, not counted)</span><span class="dv-bar"></span><span class="dv-bc">${i.def.n}</span></div>`),i.ignore&&i.ignore.length&&(n+=`<div class="dv-note">ignore_bins: ${te(i.ignore.join(", "))}</div>`),i.illegal&&i.illegal.length&&(n+=`<div class="dv-note">illegal_bins: ${te(i.illegal.join(", "))}</div>`),n+="</div></details>"}}e.querySelector(".dv-body").innerHTML=n,e.querySelectorAll(".dv-a").forEach(s=>s.addEventListener("click",()=>{let a=s.dataset.t;if(a!==""&&T.data){T.cursor=+a;let o=T.t1-T.t0;T.t0=Math.max(0,+a-o/2),T.t1=T.t0+o,T.draw(),T.onCursor(+a)}if(+s.dataset.line){let o=m.lastFiles||{}}}))}function Kn(t){let e=R.find(a=>a.id===m.example);if(!e||!e.check)return;let n=[],s=a=>a.split(".").pop();for(let a of e.check){if(a.assert){let i=t.asserts.find(r=>s(r.name)===a.assert||r.name===a.assert);if(!i){n.push(`assertion ${a.assert} is missing (keep the label ${a.assert})`);continue}let o=i.events.filter(r=>r.kind==="fail").map(r=>r.t1);if(a.fails!==void 0){let r=a.fails.join(","),u=o.join(",");r!==u&&n.push(`${a.assert}: expected failures at [${r||"none"}], got [${u||"none"}]`)}a.minPass!==void 0&&i.pass<a.minPass&&n.push(`${a.assert}: only ${i.pass} non-vacuous passes (expected at least ${a.minPass}) \u2014 is it vacuous?`),a.matches!==void 0&&i.matches!==a.matches&&n.push(`${a.assert}: covered ${i.matches} times, expected ${a.matches}`)}if(a.cg){let i=t.coverage.find(o=>o.type===a.cg||o.name===a.cg);if(!i){n.push(`covergroup ${a.cg} has no samples`);continue}if(a.coverage!==void 0&&Math.abs(i.coverage-a.coverage)>.05&&n.push(`${a.cg}: coverage ${i.coverage.toFixed(1)}%, expected ${a.coverage.toFixed(1)}%`),a.min!==void 0&&i.coverage<a.min&&n.push(`${a.cg}: coverage ${i.coverage.toFixed(1)}% is below ${a.min}%`),a.bins)for(let[o,r]of Object.entries(a.bins)){let u=[...i.cps,...i.crosses].find(d=>d.name===o);u?u.bins.length!==r&&n.push(`${a.cg}.${o}: ${u.bins.length} bins, expected ${r}`):n.push(`${a.cg}: no coverpoint or cross named ${o}`)}}}if(n.length){Z(`FAIL: ${n.length} check${n.length>1?"s":""} did not match the lab`,"err");for(let a of n)Z("  "+a,"err")}else Z(e.check.some(a=>a.assert)?e.check.some(a=>a.cg)?"PASS: assertions and coverage behave as the lab expects":"PASS: your assertions behave as the lab expects":"PASS: your coverage model matches the lab","pass")}var K=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim(),T=new pe(w("#wave"),{theme:()=>({pass:K("--ok")||"#2e9d5b",fail:K("--err")||"#d64545",bg:K("--wave-bg"),rowAlt:K("--wave-row"),grid:K("--wave-grid"),line:K("--line"),text:K("--text"),muted:K("--muted"),wave:K("--wave"),busFill:K("--wave-bus"),x:K("--wave-x"),xFill:K("--wave-xfill"),z:K("--wave-z"),cursor:K("--accent")}),onCursor:t=>{let e=w("#wave-values");if(t===null||!T.data){e.textContent="";return}e.innerHTML="";let n=document.createElement("div");n.className="cur-time",n.textContent="Cursor @ "+we(t,T.data.timescale),e.appendChild(n);for(let s of T.data.signals){let a=document.createElement("div");a.className="cur-row";let i=document.createElement("span");i.textContent=s.name;let o=document.createElement("span");o.textContent=Oe(s,rn(s,t),T.radix),a.append(i,o),e.appendChild(a)}}});Xn().addEventListener?.("change",()=>T.draw());function Xn(){return window.matchMedia("(prefers-color-scheme: dark)")}function Jn(){w("#run").addEventListener("click",ve),w("#stop").addEventListener("click",()=>mn()),w("#std").addEventListener("change",e=>{m.std=e.target.value,Pe(),le()}),w("#ex-select").addEventListener("change",e=>re(e.target.value)),document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>_e(F[e.dataset.copy].get(),e))),document.querySelectorAll("[data-download]").forEach(e=>e.addEventListener("click",()=>ln(ue()[e.dataset.download],F[e.dataset.download].get()))),w("#copy-output").addEventListener("click",e=>_e(ie.innerText,e.currentTarget)),w("#reset").addEventListener("click",()=>re(m.example,!0)),w("#show-solution").addEventListener("click",Rn),w("#share").addEventListener("click",async e=>{let n=e.currentTarget;try{let s=await zn(),a=location.href.split("#")[0]+"#code="+s;history.replaceState(null,"","#code="+s),_e(a,n)}catch{_e(location.href,n)}}),w("#zoom-in").addEventListener("click",()=>T.zoom(.5)),w("#zoom-out").addEventListener("click",()=>T.zoom(2)),w("#zoom-fit").addEventListener("click",()=>T.fit()),w("#pan-left").addEventListener("click",()=>T.pan(-.4)),w("#pan-right").addEventListener("click",()=>T.pan(.4)),w("#radix").addEventListener("change",e=>{T.radix=e.target.value,T.draw(),T.onCursor(T.cursor)}),w("#dl-vcd").addEventListener("click",()=>{m.lastVcd&&ln("dump.vcd",m.lastVcd.text)});let t={"Ctrl-Enter":ve,"Cmd-Enter":ve};F.design.addKeys(t),F.tb.addKeys(t),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),ve())}),F.design.onChange(()=>le()),F.tb.onChange(()=>le())}async function Zn(){be=Ve({key:"vdd-vlabs-quiz-v1",onChange:()=>de()}),Jn();let t=!1,e=new URLSearchParams(location.search),n=e.get("track"),s=e.get("lab"),a=new URLSearchParams(location.hash.slice(1)).get("code");if(a){try{let i=await jn(a);m.std=i.s==="2012"?"2012":"2005",m.example=null,w("#std").value=m.std,F.design.set(i.d||""),F.tb.set(i.t||""),t=!0}catch{}t&&(me(),de())}if(!t&&s&&R.some(i=>i.id===s)&&(re(s),t=!0),!t&&n&&xe.some(i=>i.id===n)&&(re(R.find(i=>i.group===n).id),t=!0),!t){let i=Hn();if(i&&R.some(o=>o.id===i.example)){let o=R.find(r=>r.id===i.example);m.example=o.id,m.track=o.group,m.std=i.std||"2005",w("#std").value=m.std,F.design.set(i.design),F.tb.set(i.tb),me(),de(),Ae(gn,m.example,un),be.render(o),t=!0}}t||re(R[0].id),Pe(),oe("Loading simulator\u2026","busy"),Re(),T.clear()}Zn();})();
