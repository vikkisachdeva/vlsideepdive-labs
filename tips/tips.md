<!--
HOW TO ADD A TIP
================
Edit this file on GitHub (open it and click the pencil icon), then click "Commit changes".
The tips page updates about a minute later.

Each tip starts with a line beginning "## " followed by the tip's title.
The next line can say "Topic: ..." to group tips (for example STA, CDC, Verification, Career).
Write the tip underneath in plain text. Leave a blank line between paragraphs.
Optional formatting: **bold**, *italic*, `inline code`, [link text](https://example.com),
and code blocks between lines of three backticks (```).

Example of a tip (write yours below this comment block, not inside it):

## Always check your clock definitions first
Topic: STA

Before chasing a violation, run `report_clock_properties` and make sure every clock
has the period and waveform you expect.

Tips appear on the page in the order they are written here, newest first if you add new
ones at the top.
-->

## Check your constraints before you chase a violation
Topic: STA

Many "timing problems" are really constraint problems: a missing clock, a port with no input or output delay, or a path nobody constrained. Before you start fixing paths, run:

```
report_clock_properties
check_setup -verbose
```

`check_setup` lists unconstrained endpoints and ports with missing delays. An unconstrained path always "passes", which is exactly why it is dangerous. Try it in the [STA lab](/sta/): the basic example flags the `out` port because it has no `set_output_delay`.

## Read a timing report from the bottom up
Topic: STA

Start with the last line: slack = data required time − data arrival time. Then walk up the arrival section and look for the stage with the biggest delay. Add `-fields {slew cap fanout}` to `report_checks` and you will usually see why: a weak driver, a long net or a high fanout shows up as a large slew on the next pin.

## Hold violations do not care about your clock frequency
Topic: STA

Setup depends on the clock period; hold does not. Slowing the clock will never fix a hold violation, because hold compares data launched and captured on the same edge. Fix hold by adding delay on the data path (or by fixing clock skew), and always check hold with the clock tree in place (`set_propagated_clock`), since ideal clocks hide the skew that causes most real hold failures.

## Every multicycle path needs a matching hold adjustment
Topic: Constraints

`set_multicycle_path -setup 2` moves the setup check one cycle later, but it also moves the default hold check one cycle later, which is almost never what you want. Pair it with `-hold 1` so hold is checked at the original edge:

```
set_multicycle_path -setup 2 -from [get_cells r2] -to [get_cells r3]
set_multicycle_path -hold  1 -from [get_cells r2] -to [get_cells r3]
```

And write down why each false path and multicycle path is safe. An exception nobody can justify is a silicon bug waiting to happen.

## A two-flop synchronizer is for single bits only
Topic: CDC

Two flops in the destination domain are the right fix for one slowly changing control bit. They are the wrong fix for a bus: each bit can resolve on a different cycle, so the destination can see a value that never existed in the source. For multi-bit data use a handshake, a mux-recirculation scheme with a synchronized enable, or an asynchronous FIFO with Gray-coded pointers. See the synchronizer example in the [Verilog simulator](/verilog/).

## Assert resets asynchronously, release them synchronously
Topic: CDC

An asynchronous reset is fine to assert at any time, but releasing it close to a clock edge can make some flops leave reset a cycle later than others, or go metastable. Pass the reset de-assertion through a reset synchronizer in each clock domain it feeds, so every flop in that domain comes out of reset on the same clock edge.

## Non-blocking in clocked blocks, blocking in combinational blocks
Topic: Verilog

Use `<=` inside `always @(posedge clk)` and `=` inside `always @(*)`. Mixing them up creates simulation races that may not match the synthesised hardware. In combinational blocks, give every output a default value at the top of the block, or synthesis will infer a latch for any branch that does not assign it.

## Make every testbench check itself
Topic: Verification

A testbench that only prints values relies on someone reading the waveform correctly every time. Compare the design's output against an expected value inside the testbench and finish with a clear PASS or FAIL line, so a regression run can tell you in one word whether anything broke. The ripple-carry adder example in the [Verilog simulator](/verilog/) checks all 512 input combinations this way.
