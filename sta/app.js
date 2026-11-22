(()=>{var te={basic:{problem:"Every flop-to-flop path must meet setup and hold. How does STA find the worst path and its slack?",tasks:["Run and read the setup and hold reports.","Find the startpoint, endpoint and slack."],learn:"Read a basic timing report: arrival, required time and slack."},violation:{problem:"The clock is too fast for the logic. The report shows negative slack: what does it mean and where does the time go?",tasks:["Run and find the failing path.","Change the clock period until it passes."],learn:"Read a setup violation and find the period the design can meet."},io:{problem:"Paths to and from the chip pins are only checked if you tell STA what happens outside the block.",tasks:["Run and read the input and output paths.","Change set_input_delay and set_output_delay and see the slack move."],learn:"Constrain I/O paths with input and output delays."},exceptions:{problem:"Some paths are never used, others are allowed more than one cycle. Without exceptions STA reports false failures.",tasks:["Run with and without the false path and multicycle path.","See which paths each exception changes."],learn:"Write false paths and multicycle paths, including the hold adjustment."},ocv:{problem:"Real clocks arrive late, jitter and vary across the die. Ideal clocks make timing look better than it is.",tasks:["Add clock latency, uncertainty and OCV derates.","Watch the slack shrink."],learn:"Model clock latency, uncertainty and on-chip variation."},corners:{problem:"A design must work at slow and fast process corners. Setup fails at the slow corner, hold at the fast one.",tasks:["Run at both corners.","Find which corner limits setup and which limits hold."],learn:"Multi-corner analysis with slow and fast libraries."},spef:{problem:"Wires have resistance and capacitance. Without them, delays are too optimistic.",tasks:["Run without SPEF, then with it.","Compare the net delays."],learn:"Annotate parasitics from SPEF and see their effect on delay."},gcd:{problem:"A real placed-and-routed block: does it meet timing, and how much power does it use?",tasks:["Run timing with SPEF.","Read the power report."],learn:"Run STA and power on a real block, the way signoff does."},"ws-lab1":{problem:"You have a library, a netlist and constraints. Where do you start? Your first timing report.",tasks:["Run and read the 5 worst paths.","Find the startpoint, endpoint and slack of each.","Edit the clock period and input delay and run again."],learn:"The basic STA flow and the parts of a timing report."},"ws-lab2":{problem:"Cell delay depends on the library corner and on the wires. How much does each change in the RC network move the delay?",tasks:["Run without SPEF, then with each SPEF file.","Compare the delays and slack."],learn:"Delay calculation with min/max libraries and SPEF parasitics."},"ws-lab3":{problem:"Can you compute setup slack by hand and match the tool to the picosecond? If not, you cannot debug a real report.",tasks:["Run and pick the reported path.","Work out the slack from clock edges, latency and cell delays.","Check your number against the report."],learn:"Compute setup slack by hand from a report."},"ws-lab6":{problem:"A clock gate must switch only while the clock is inactive, or it chops the clock into glitches.",tasks:["Run and find the clock gating check.","Analyse its slack."],learn:"Clock gating setup and hold checks."},"ws-lab7":{problem:"An asynchronous reset must release far enough from the clock edge, or flops go metastable.",tasks:["Run and find the recovery and removal checks.","Analyse their slack."],learn:"Recovery and removal checks on asynchronous pins."},"ws-lab12":{problem:"The same path gives different slack with one library, min/max libraries, or parasitics. Why?",tasks:["Run example2, example3 and example4.","Compare the three reports."],learn:"How libraries and parasitics change one path's slack."},"ws-lab4":{problem:"Launch and capture clocks share part of their path. Counting its variation twice makes timing look worse than it is.",tasks:["Note the slack, then enable CRPR and run again.","Find the common point and the difference."],learn:"Common path pessimism removal (CPPR/CRPR)."},"ws-lab5":{problem:"Timing fails after layout. You cannot re-synthesize: you fix it with a small change to the netlist, an ECO.",tasks:["Run the ECO script that inserts a clock buffer.","Compare s27_eco.v with s27.v and the slack before and after."],learn:"Timing ECOs and re-timing a changed netlist."},"ws-lab8":{problem:"Hold checks use different clock edges from setup. Picking the wrong edge gives the wrong answer.",tasks:["Run and read the hold report.","Explain the launch and capture edges it picks."],learn:"Hold slack and how hold edges are chosen."},"ws-lab10":{problem:"A chip runs in several modes, each with its own constraints. Checking one mode at a time does not scale.",tasks:["Review mode1.sdc, then add the other modes.","Write one merged SDC covering all four."],learn:"Multi-mode constraints and mode merging."},"ws-lab11":{problem:"Silicon varies with process, voltage and temperature, and across the die. Which corner and derate limits the design?",tasks:["Run three corners with \xB110% derating.","Compare the reports."],learn:"Multi-corner analysis with derates."},"ws-lab13":{problem:"Several clocks with different waveforms: which edges does STA pair up, and what does a multicycle path change?",tasks:["Run and analyse the clock waveforms.","Add a setup multicycle path between clk2 and clk3 and check setup and hold."],learn:"Multiple clocks and multicycle paths, including the hold side effect."},"ws-lab14":{problem:"A path from a rising edge to a falling edge has only half a cycle. Easy to miss, easy to fail.",tasks:["Run and find any half-cycle paths.","Check the edges used for setup and hold."],learn:"Half-cycle paths and how they are timed."},"ws-lab9":{problem:"The report says no paths were found. Something is unconstrained, and that is worse than a violation.",tasks:["Run and confirm there are no paths.","Debug with check_setup -verbose and report_checks -unconstrained."],learn:"Debug an unconstrained design."},"ws-lab15":{problem:"This is how STA looks on a real design: a RISC-V core with about 14,000 cells.",tasks:["Run the full flow.","Read the summary and the worst paths."],learn:"Run a production-style STA flow on a CPU core."},"so-s1":{problem:"At signoff you need one answer fast: does the block meet timing, and by how much?",tasks:["Run the full flow on the routed GCD block.","Read WNS, TNS and the violation counts, then the worst path."],learn:"The signoff analysis flow and timing summary."},"so-s2":{problem:"A clean timing report means nothing if paths are not constrained. Bad constraints are the most common signoff escape.",tasks:["Run check_setup -verbose and list every problem.","Fix ctrl.sdc and see which new paths appear."],learn:"Validate constraints before trusting any timing report."},"so-s3":{problem:"Most timing errors start with wrong clocks: ideal versus propagated, missing latency, a wrongly defined divided clock.",tasks:["Compare ideal and propagated clocks.","Find where each part of the latency comes from and check the divided clock."],learn:"Define and check generated clocks, latency and uncertainty."},"so-s4":{problem:"Exceptions change what STA checks. One wrong exception can hide a real failure.",tasks:["Enable one exception at a time in exc.sdc.","See which path each one changes."],learn:"Case analysis, false paths, multicycle paths and max delay."},"so-s5":{problem:"Signoff engineers spend most of their time asking the design questions. You need fast answers.",tasks:["Run endpoint summaries and full path reports.","Query cells, nets and registers with Tcl."],learn:"Read reports and query a design quickly."},"so-s6":{problem:"OCV derates can turn a passing path into a failing one, and CRPR gives some of it back. How much?",tasks:["Apply derates and watch the slack.","Measure what CRPR recovers."],learn:"On-chip variation and CRPR at signoff."},"so-s7":{problem:"A latch lets a slow path borrow time from the next stage. Borrowing hides slack problems if you do not check it.",tasks:["Find how much L1 borrows and the most it could.","Limit borrowing and see the result."],learn:"Latch timing and time borrowing."},"so-s8":{problem:"You have one setup and one hold violation and no time to re-run layout.",tasks:["Run as given, then enable the upsizing ECO and the hold buffer ECO.","Compare eco_after.v and the new slack."],learn:"Fix setup and hold violations with netlist ECOs."},"so-s9":{problem:"A block must pass at every corner. Setup and hold are limited by different corners.",tasks:["Run at ss, tt and ff.","Find which corner limits setup and which limits hold."],learn:"Multi-corner signoff."},"sdc-c1":{problem:"Every timing check starts from the clock waveforms. If you cannot draw a clock from its create_clock line, you cannot check a single path.",tasks:["Draw clk1, clk2 and clk3 on paper.","Run and compare with report_clock_properties.","Find the edges STA pairs between two clocks."],learn:"Read -period and -waveform, and how STA picks launch and capture edges between clocks."},"sdc-c2":{problem:"Two clocks share the same flops through a clock mux. Unless you say so, STA times them against each other: paths that can never happen in silicon.",tasks:["Count the launch/capture pairs STA times.","Try set_clock_groups -logically_exclusive.","Try set_case_analysis instead and compare."],learn:"Constrain clock muxes with exclusive clock groups or case analysis."},"sdc-c3":{problem:"A clock doubler makes a new waveform from CLK. STA only knows about it if you define a generated clock in the right place.",tasks:["Read the generated clock definition and its waveform.","Check the CLK \u2192 CLKOUT path.","Switch to propagated clocks."],learn:"Where and how to define a generated clock with -edges and -edge_shift."},"sdc-c4":{problem:"A flop divides the clock by 2, and its inverted output makes a second clock. Get the definitions wrong and every path between them is wrong.",tasks:["Read GCLK1 and GCLK2.","Check the half-period path GCLK1 \u2192 GCLK2.","Rewrite GCLK1 with -edges."],learn:"Divided and inverted generated clocks with -divide_by, -invert and -edges."},"sdc-c5":{problem:"Clocks reach flops directly and through a mux. Some pairs never meet, some are asynchronous. Each relationship must be declared, or STA times nonsense.",tasks:["Count the clock pairs STA times.","Declare the mux clocks exclusive.","Declare the two families asynchronous."],learn:"Define clock relationships with set_clock_groups, and generated clocks on a mux with -add."},"sdc-c6":{problem:"A clock through an XOR may pass unchanged, inverted, or STA cannot tell. A non-unate cell doubles the clock edges at the flop.",tasks:["Find the clock sense at r1, r2 and r3.","Count the checks at r3.","Fix it with set_clock_sense."],learn:"Clock unateness, constants from tie cells, and set_clock_sense."},"sdc-c7":{problem:"A false path removes exactly the paths it describes, no more and no less. Predicting which ones is a daily signoff skill.",tasks:["Predict which paths each command removes.","Apply one step at a time.","Count the paths left."],learn:"set_false_path with -through a pin, through a cell output, and -from a clock."},"sdc-c8":{problem:"-rise_from and -fall_to name edges of the clock at its source. With an inverter in the clock tree, the edge at the flop is the opposite one.",tasks:["Predict which of paths A to D each command removes.","Run each step and check."],learn:"Edge-specific exceptions and how inverted clocks change them."},"sdc-c9":{problem:"A multicycle path between clocks of different frequency counts cycles of one of them. Pick the wrong one and the budget is off by a factor.",tasks:["Apply -end and -start and read the new capture edge.","See the hold check move.","Fix hold with a hold multicycle."],learn:"set_multicycle_path -start and -end, and the hold adjustment."},"sdc-c10":{problem:"Two exceptions cover the same path. Only one applies, and guessing wrong hides a violation or a false failure.",tasks:["Answer Q1 and Q2 on paper.","Apply each pair and check the slacks."],learn:"Exception priority: false path, max delay, multicycle, and the more specific one wins."},"sdc-c11":{problem:"A chip has several modes. Running STA once per mode is slow and easy to get wrong; one merged SDC must cover them all safely.",tasks:["Run mode1 and mode2.","Run merged and compare the paths.","Explain the false path on SEL."],learn:"Merge mode constraints into one SDC without losing a real path."},"sdc-c12":{problem:"The IP team's SDC uses the IP's names. At the SoC the clocks are renamed and ports become hierarchical pins, so the constraints must be promoted.",tasks:["Time the IP alone with ip.sdc.","Time the SoC, then apply each promoted step.","Check the IP paths match."],learn:"Promote IP constraints to the SoC: renamed clocks, hierarchical pins, -through."},"sdc-c13":{problem:"Paths to other chips are only checked if you describe what happens outside: when data arrives and when it is needed.",tasks:["Read setup and hold on the input and output.","Launch din on the falling edge and see the effect."],learn:"set_input_delay and set_output_delay with -max, -min and a virtual clock."},"sdc-c14":{problem:"Without a driver and a load, STA thinks inputs switch instantly and outputs drive nothing. Slew and capacitance limits catch weak drivers.",tasks:["Find the slew and capacitance violations.","Try a stronger driver and a bigger buffer.","See which violation remains."],learn:"set_driving_cell, set_input_transition, set_load and design rule limits."},"sdc-c15":{problem:"Before clock tree synthesis there is no real clock tree. The SDC estimates it with latency, uncertainty and transition.",tasks:["Find each clock term in the setup and hold reports.","Switch to propagated clocks and compare."],learn:"Clock latency (source and network), uncertainty and transition."},"sdc-c16":{problem:"Paths between asynchronous clocks have no real timing, but they still need constraints: cut them, or limit how long they take.",tasks:["See the meaningless violation.","Cut it with asynchronous clock groups.","Limit a Gray pointer with set_max_delay instead."],learn:"Constrain clock domain crossings with clock groups or max delay."},"sdc-c17":{problem:"Someone hands you a netlist and no SDC. Can you write it from scratch so that every path is checked correctly?",tasks:["Follow the checklist in my.sdc, one step at a time.","Run check_setup after each step.","Compare with solution.sdc."],learn:"Write a complete SDC: clocks, generated clocks, I/O, false paths and multicycle paths."},"sdc-c18":{problem:"Doing more work per clock means fewer clocks but a longer path. Where is the sweet spot?",tasks:["Run the divider with K = 1, 2, 4 and 8.","Read WNS for each.","Work out the fastest clock and the total time."],learn:"Trade logic per cycle against clock period, and read WNS and TNS."},"sdc-c19":{problem:"Datasheets give clock-to-output, setup, hold and trace delays, not SDC. You have to turn them into input and output delays.",tasks:["Check the formulas in usb.sdc.","Write the wb_data output delays yourself.","Read the hold result."],learn:"Derive I/O delays from datasheet numbers."},"sdc-c21":{problem:"A real chip: a processor subsystem, a dozen IP blocks, a crossbar, PCIe, JTAG, efuse, flash and DDR, with six clock sources, a divided clock, a forwarded clock, falling-edge capture and three power islands. Nobody hands you the SDC.",tasks:["Read the block list in soc.v.","Write soc.sdc section by section with the checklist.","Check the clock interaction table and the per-block slacks, then compare with solution.sdc."],learn:"Constrain a complete SoC: clocks, generated and forwarded clocks, modes, clock groups, CDC limits, exceptions and I/O.",images:[{src:"img/soc_blocks.svg",alt:"SoC block diagram: processor subsystem with two ARM V9 cores and a 256KB L2 cache, LDPC, AES, accelerator, comp/decomp, DMA, JTAG, PCIe, efuse and flash controllers, crossbar and DDR memory controller"},{src:"img/soc_floorplan.png",alt:"Full-chip floorplan with DDR IP, PCI IP, ARM partition, AES/comp domain and power domains PD_1 to PD_3"}],html:'<table><thead><tr><th>Block Name</th><th class="n">Flop Count</th><th class="n">Clock Domains</th><th>Memories</th><th>Comment</th></tr></thead><tbody><tr><td>Processor Subsystem</td><td class="n">250000</td><td class="n">Up to 1GHz</td><td>Other than cache, there are two sets of 128KB Instruction and 256KB Data Memory</td><td>On a separate Physical Partition, with frequency and voltage scaling capability</td></tr><tr><td>LDPC</td><td class="n">100000</td><td class="n">500</td><td>64KB</td><td>64KB is composed of many small memory cuts (register file, single port and dual port RAMs)</td></tr><tr><td>AES</td><td class="n">80000</td><td class="n">500</td><td></td><td></td></tr><tr><td>Accelerator</td><td class="n">10000</td><td class="n">200</td><td>1KB</td><td></td></tr><tr><td>Comp/Decomp Engine</td><td class="n">80000</td><td class="n">500</td><td>8KB</td><td></td></tr><tr><td>DMA</td><td class="n">20000</td><td class="n">500</td><td></td><td></td></tr><tr><td>JTAG</td><td class="n">1000</td><td class="n">50</td><td></td><td></td></tr><tr><td>PCIe</td><td class="n">80000</td><td class="n">250</td><td>2KB</td><td></td></tr><tr><td>Efuse Controller</td><td class="n">10000</td><td class="n">100</td><td></td><td></td></tr><tr><td>Flash Controller</td><td class="n">10000</td><td class="n">100</td><td></td><td></td></tr><tr><td>Crossbar</td><td class="n">15000</td><td class="n">500</td><td></td><td></td></tr><tr><td>DDR Memory Controller</td><td class="n">70000</td><td class="n">400</td><td>4KB</td><td>Small fraction of flops are negedge capture</td></tr></tbody></table><h4>Power islands (nominal voltage)</h4><ul><li>Processor Subsystem: VDD_CPU 0.8 V</li><li>AES and Comp/Decomp: VDD_CMP 0.75 V (switchable domain)</li><li>The rest of the system: VDD_SOC 0.65 V</li><li>Memories are single rail and connected to VDD_SOC. Common VSS for SOC/CPU digital.</li><li>Efuse/PCI/DDR have VDDIO 1.2 V. There are analog VDDA for PLLs, and other analog parts for PCI and DDR PLLs.</li></ul>',caption:"The workshop SoC: block diagram, floorplan, flops and clock domains per block, and power islands. The lab netlist keeps every block with a few flops each. Click a picture to enlarge."},"sdc-c20":{problem:"A clock interaction table shows every clock pair STA times. Pairs with no common source give tiny, meaningless requirements.",tasks:["Read the table and find the unsafe pair.","Declare it asynchronous.","Give the ALU path two cycles, with the hold fix."],learn:"Review clock interactions, and add a multicycle path -through a block."}};function ne(e,n){let t=document.getElementById("lab-brief");if(!t)return;let a=e[n];if(!a){t.hidden=!0;return}t.querySelector(".brief-problem").textContent=a.problem;let r=t.querySelector(".brief-tasks");r.innerHTML="";for(let i of a.tasks){let p=document.createElement("li");p.textContent=i,r.appendChild(p)}t.querySelector(".brief-learn").textContent=a.learn;let o=t.querySelector(".brief-fig"),_=a.images||(a.image?[{src:a.image,alt:a.imageAlt||""}]:[]);if(_.length||a.html){if(o||(o=document.createElement("figure"),o.className="brief-fig",t.appendChild(o)),o.innerHTML="",_.length){let i=document.createElement("div");i.className="brief-imgs";for(let p of _){let u=document.createElement("a");u.href=p.src,u.target="_blank",u.rel="noopener";let k=document.createElement("img");k.src=p.src,k.alt=p.alt||"",k.loading="lazy",u.appendChild(k),i.appendChild(u)}o.appendChild(i)}if(a.html){let i=document.createElement("div");i.className="brief-html",i.innerHTML=a.html,o.appendChild(i)}if(a.caption){let i=document.createElement("figcaption");i.textContent=a.caption,o.appendChild(i)}}else o&&o.remove();t.hidden=!1}var se=[{id:"ws-lab1",group:"STA workshop",tag:"Day 1",title:"Lab 1 \xB7 Your first timing report",script:"run.tcl",files:{"run.tcl":`# Lab 1 (Day 1): read a library, a netlist and constraints, then report the 5 worst paths.
# Exercises: find the startpoint, endpoint and slack of each path.
# Then edit simple.sdc (clock period, input delay) and run again to see the slack move.

## reading liberty model
read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib 
## reading netlist model
read_verilog simple.v
link_design simple
## Parsing constraints
read_sdc -echo simple.sdc
## report timing reports for 5 paths
report_checks -group_count 5
`,"simple.v":`module simple (
inp1,
inp2,
tau2015_clk,
out
);

// Start PIs
input inp1;
input inp2;
input tau2015_clk;

// Start POs
output out;

// Start wires
wire n1;
wire n2;
wire n3;
wire n4;
wire inp1;
wire inp2;
wire tau2015_clk;
wire out;

// Start cells
sky130_fd_sc_hd__nand2_1 u1 ( .A(inp1), .B(inp2), .Y(n1) );
sky130_fd_sc_hd__dfbbn_2 f1 ( .D(n2), .CLK_N(tau2015_clk), .Q(n3),.SET_B(1'b1),.RESET_B(1'b1));
sky130_fd_sc_hd__inv_1 u2 ( .A(n3), .Y(n4) );
sky130_fd_sc_hd__inv_1 u3 ( .A(n4), .Y(out) );
sky130_fd_sc_hd__nor2_1 u4 ( .A(n1), .B(n3), .Y(n2) );

endmodule
`,"simple.sdc":`create_clock -period 50 -name tau2015_clk [get_ports tau2015_clk]
set_input_delay 0 -min -rise [get_ports inp1] -clock tau2015_clk
set_input_delay 0 -min -fall [get_ports inp1] -clock tau2015_clk
set_input_delay 5 -max -rise [get_ports inp1] -clock tau2015_clk
set_input_delay 5 -max -fall [get_ports inp1] -clock tau2015_clk
set_input_delay 0 -min -rise [get_ports inp2] -clock tau2015_clk
set_input_delay 0 -min -fall [get_ports inp2] -clock tau2015_clk
set_input_delay 1 -max -rise [get_ports inp2] -clock tau2015_clk
set_input_delay 1 -max -fall [get_ports inp2] -clock tau2015_clk
set_input_transition 10 -min -rise [get_ports inp1] 
set_input_transition 15 -min -fall [get_ports inp1] 
set_input_transition 20 -max -rise [get_ports inp1] 
set_input_transition 25 -max -fall [get_ports inp1] 
set_input_transition 30 -min -rise [get_ports inp2] 
set_input_transition 30 -min -fall [get_ports inp2] 
set_input_transition 40 -max -rise [get_ports inp2] 
set_input_transition 40 -max -fall [get_ports inp2] 
set_input_transition 10 -min -rise [get_ports tau2015_clk] 
set_input_transition 15 -min -fall [get_ports tau2015_clk] 
set_input_transition 10 -max -rise [get_ports tau2015_clk] 
set_input_transition 15 -max -fall [get_ports tau2015_clk] 
set_load -pin_load 4 [get_ports out]
set_output_delay -10 -min -rise [get_ports out] -clock tau2015_clk
set_output_delay -10 -min -fall [get_ports out] -clock tau2015_clk
set_output_delay 30 -max -rise [get_ports out] -clock tau2015_clk
set_output_delay 30 -max -fall [get_ports out] -clock tau2015_clk
`},quiz:[{type:"number",q:"How many timing paths does report_checks print for this design?",answer:2,tol:0,unit:"",explain:"report_checks prints the worst path to each endpoint. There are two constrained endpoints: f1/D and the output port out.",try:!1},{type:"number",q:"What is the worst setup slack?",answer:-27.96,tol:.01,unit:"ns",explain:"The path f1 \u2192 u2 \u2192 u3 \u2192 out arrives at 47.96 but is required at 20.00 (50 \u2212 30 output delay).",try:!1},{type:"choice",q:"Which clock edge launches the worst path?",options:["Rising edge at 0 ns","Falling edge at 25 ns","Rising edge at 50 ns","Falling edge at 75 ns"],answer:1,explain:"f1 is a sky130_fd_sc_hd__dfbbn_2, a negative-edge flop, so it launches on the falling edge at half the 50 ns period.",try:!1},{type:"choice",q:"Which stage has the largest delay on the worst path, and why?",options:["f1 clock-to-Q, because the flop is slow","u2, because it is driven by f1","u3, because it drives the 4 pF load set on port out","The output external delay"],answer:2,explain:"u3 drives the out port, and simple.sdc sets set_load -pin_load 4 on it. Driving 4 pF with a small inverter takes 22.41 ns.",try:!1},{type:"number",q:"Try it: change the clock period in simple.sdc from 50 to 80 and run again. What is the new worst slack?",answer:-12.96,tol:.01,unit:"ns",explain:"Launch moves to the falling edge at 40 ns and capture to 80 ns: required 80 \u2212 30 = 50, arrival 62.96.",try:!0}]},{id:"ws-lab2",group:"STA workshop",tag:"Day 2",title:"Lab 2 \xB7 Min/max libraries and SPEF",script:"run.tcl",files:{"run.tcl":`# Lab 2 (Day 2): delay calculation with a slow (max) and a fast (min) library, plus SPEF parasitics.
# Exercises: run without read_spef, then with simple.spef, change1.spef and change2.spef.
# How does each change in the RC network move the delay through u1/A?

# Lab 2: min/max libraries and SPEF parasitics
# Slow corner (ss, 100C, 1.60V) for max delays, fast corner (ff, -40C, 1.95V) for min delays
read_liberty -min sky130_fd_sc_hd__ff_n40C_1v95.lib
read_liberty -max sky130_fd_sc_hd__ss_100C_1v60.lib
read_verilog simple.v
link_design simple
read_spef simple.spef
read_sdc simple.sdc
report_checks -through u1/A
`,"simple.v":`module simple (
inp1,
inp2,
tau2015_clk,
out
);

// Start PIs
input inp1;
input inp2;
input tau2015_clk;

// Start POs
output out;

// Start wires
wire n1;
wire n2;
wire n3;
wire n4;
wire inp1;
wire inp2;
wire tau2015_clk;
wire out;

// Start cells
sky130_fd_sc_hd__nand2_1 u1 ( .A(inp1), .B(inp2), .Y(n1) );
sky130_fd_sc_hd__dfxtp_4 f1 ( .D(n2), .CLK(tau2015_clk), .Q(n3) );
sky130_fd_sc_hd__inv_1 u2 ( .A(n3), .Y(n4) );
sky130_fd_sc_hd__inv_2 u3 ( .A(n4), .Y(out) );
sky130_fd_sc_hd__nor2_1 u4 ( .A(n1), .B(n3), .Y(n2) );

endmodule
`,"simple.sdc":`create_clock -period 50 -name tau2015_clk [get_ports tau2015_clk]
set_input_delay 0 -min -rise [get_ports inp1] -clock tau2015_clk
set_input_delay 0 -min -fall [get_ports inp1] -clock tau2015_clk
set_input_delay 5 -max -rise [get_ports inp1] -clock tau2015_clk
set_input_delay 5 -max -fall [get_ports inp1] -clock tau2015_clk
set_input_delay 0 -min -rise [get_ports inp2] -clock tau2015_clk
set_input_delay 0 -min -fall [get_ports inp2] -clock tau2015_clk
set_input_delay 1 -max -rise [get_ports inp2] -clock tau2015_clk
set_input_delay 1 -max -fall [get_ports inp2] -clock tau2015_clk
set_input_transition 10 -min -rise [get_ports inp1] 
set_input_transition 15 -min -fall [get_ports inp1] 
set_input_transition 20 -max -rise [get_ports inp1] 
set_input_transition 25 -max -fall [get_ports inp1] 
set_input_transition 30 -min -rise [get_ports inp2] 
set_input_transition 30 -min -fall [get_ports inp2] 
set_input_transition 40 -max -rise [get_ports inp2] 
set_input_transition 40 -max -fall [get_ports inp2] 
set_input_transition 10 -min -rise [get_ports tau2015_clk] 
set_input_transition 15 -min -fall [get_ports tau2015_clk] 
set_input_transition 10 -max -rise [get_ports tau2015_clk] 
set_input_transition 15 -max -fall [get_ports tau2015_clk] 
set_load -pin_load 4 [get_ports out]
set_output_delay -10 -min -rise [get_ports out] -clock tau2015_clk
set_output_delay -10 -min -fall [get_ports out] -clock tau2015_clk
set_output_delay 30 -max -rise [get_ports out] -clock tau2015_clk
set_output_delay 30 -max -fall [get_ports out] -clock tau2015_clk
`,"simple.spef":`*SPEF "IEEE 1481-1998"
*DESIGN "simple"
*DATE "Tue Sep 25 11:51:50 2012"
*VENDOR "TAU 2015 Contest"
*PROGRAM "Benchmark Parasitic Generator"
*VERSION "0.0"
*DESIGN_FLOW "NETLIST_TYPE_VERILOG"
*DIVIDER /
*DELIMITER :
*BUS_DELIMITER [ ]
*T_UNIT 1 PS
*C_UNIT 1 FF
*R_UNIT 1 KOHM
*L_UNIT 1 UH

*D_NET inp1 5.4
*CONN
*P inp1 I
*I u1:A I
*CAP
1 inp1 1.2
2 inp1:1 1.3
3 inp1:2 1.4
4 u1:A 1.5
*RES
1 inp1 inp1:1 3.4
2 inp1:1 inp1:2 3.5
3 inp1:2 u1:A 3.6
*END

*D_NET inp2 2.0
*CONN
*P inp2 I
*I u1:B I
*CAP
1 inp2 0.2
2 inp2:1 0.5
3 inp2:2 0.4
4 u1:B 0.9
*RES
1 inp2 inp2:1 1.4
2 inp2:1 inp2:2 1.5
3 inp2:2 u1:B 1.6
*END

*D_NET out 0.7
*CONN
*I u3:Y O
*P out O
*CAP
1 u3:Y 0.2
2 out 0.5
*RES
1 u3:Y out 1.4
*END

*D_NET n1 1.0
*CONN
*I u1:Y O
*I u4:A I
*CAP
1 u1:Y 0.2
1 n1:1 0.3
2 u4:A 0.5
*RES
1 u1:Y n1:1 1.1
2 n1:1 u4:A 1.0
*END

*D_NET n2 1.2
*CONN
*I u4:Y O
*I f1:D I
*CAP
1 u4:Y 0.7
2 f1:D 0.5
*RES
1 u4:Y f1:D 2.1
*END

*D_NET n3 23.4
*CONN
*I f1:Q O
*I u2:A I
*I u4:B I
*CAP
1 n3:1 6.7
2 n3:2 7.8
3 n3:3 8.9
*RES
1 f1:Q n3:3 1.2
2 n3:3 n3:1 2.3
3 n3:1 u2:A 3.4
4 n3:3 n3:2 4.5
5 n3:2 u4:B 5.6
*END

`,"change1.spef":`*SPEF "IEEE 1481-1998"
*DESIGN "simple"
*DATE "Tue Sep 25 11:51:50 2012"
*VENDOR "ISPD 2013 Contest"
*PROGRAM "Benchmark Parasitic Generator"
*VERSION "0.0"
*DESIGN_FLOW "NETLIST_TYPE_VERILOG"
*DIVIDER /
*DELIMITER :
*BUS_DELIMITER [ ]
*T_UNIT 1 PS
*C_UNIT 1 FF
*R_UNIT 1 KOHM
*L_UNIT 1 UH

*D_NET out 0.17
*CONN
*I newbox:Y O
*P out O
*CAP
1 newbox:Y 0.02
2 out 0.15
*RES
1 newbox:Y out 3.98
*END

*D_NET newnet 0.99
*CONN
*I u3:Y O
*I newbox:A I
*CAP
1 u3:Y 0.45
2 newbox:A 0.54
*RES
1 u3:Y newbox:A 4.321
*END

`,"change2.spef":`*SPEF "IEEE 1481-1998"
*DESIGN "simple"
*DATE "Tue Sep 25 11:51:50 2012"
*VENDOR "ISPD 2013 Contest"
*PROGRAM "Benchmark Parasitic Generator"
*VERSION "0.0"
*DESIGN_FLOW "NETLIST_TYPE_VERILOG"
*DIVIDER /
*DELIMITER :
*BUS_DELIMITER [ ]
*T_UNIT 1 PS
*C_UNIT 1 FF
*R_UNIT 1 KOHM
*L_UNIT 1 UH

*D_NET out 0.7
*CONN
*I u3:Y O
*P out O
*CAP
1 u3:Y 0.2
2 out 0.5
*RES
1 u3:Y out 1.4
*END

`},quiz:[{type:"number",q:"What is the slack of the path through u1/A?",answer:41.28,tol:.01,unit:"ns",explain:"Arrival 8.26 ns, required 49.54 ns.",try:!1},{type:"choice",q:"Which library supplies the max (setup) delays?",options:["sky130_fd_sc_hd__ff_n40C_1v95.lib","sky130_fd_sc_hd__ss_100C_1v60.lib","sky130_fd_sc_hd__tt_025C_1v80.lib","Both, averaged"],answer:1,explain:"read_liberty -max loads the slow corner (ss, 100 \xB0C, 1.60 V). The fast corner is read with -min for hold.",try:!1},{type:"number",q:"What is the library setup time of f1?",answer:.46,tol:.01,unit:"ns",explain:"Required time = 50.00 \u2212 0.46 = 49.54.",try:!1},{type:"number",q:"What is the delay of the u1 stage (input to u1/Y) in the report?",answer:2.55,tol:.01,unit:"ns",explain:"The report shows 2.55 ns for u1/Y. It includes the wire on net inp1 from simple.spef.",try:!1},{type:"number",q:"Try it: delete the read_spef line and run again. What is the slack now?",answer:41.81,tol:.01,unit:"ns",explain:"Without parasitics the wires are ideal, so the path is 0.53 ns faster. The SPEF made timing worse, as real wires do.",try:!0}]},{id:"ws-lab3",group:"STA workshop",tag:"Day 3",title:"Lab 3 \xB7 Computing setup slack",script:"run.tcl",files:{"run.tcl":`# Lab 3 (Day 3 and Day 5): the s27 benchmark (TAU 2015 libraries, delays in ps).
# Exercise: work out the slack of the reported path by hand, from the clock edges,
# the clock latency and the cell delays, and check it against the report.

read_liberty s27_Late.lib
read_verilog s27.v
link_design s27
read_sdc s27.sdc
report_checks -from F1/CK
`,"s27.v":`module s27 (
G1,
G2,
clk_net,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
DFFR_X2 F1 (.D(G0), .CK(clk_net), .Q(n1));
INV_X1 U3 (.A(n1), .ZN(n2));
INV_X1 U4 (.A(n2), .ZN(n3));
NAND2_X2 U6 (.ZN(n4), .A1(n1), .A2(n3));
NAND2_X2 U5 (.ZN(n5), .A1(n3), .A2(n2));
NOR2_X1 U7 (.ZN(n6), .A1(n4), .A2(n5));
DFFR_X2 F2 (.D(n6), .CK(clk_net), .Q(G17));

endmodule


`,"s27.sdc":`create_clock -period 1 -name clk_net [get_ports clk_net]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net
set_input_transition 5 -min -rise [get_ports G2] 
set_input_transition 5 -min -fall [get_ports G2] 
set_input_transition 5 -max -rise [get_ports G2] 
set_input_transition 5 -max -fall [get_ports G2] 
set_input_delay 0 -min -rise [get_ports clk_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports clk_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports clk_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports clk_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports clk_net] 
set_input_transition 5 -min -fall [get_ports clk_net] 
set_input_transition 5 -max -rise [get_ports clk_net] 
set_input_transition 5 -max -fall [get_ports clk_net] 
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net
set_input_transition 5 -min -rise [get_ports G3] 
set_input_transition 5 -min -fall [get_ports G3] 
set_input_transition 5 -max -rise [get_ports G3] 
set_input_transition 5 -max -fall [get_ports G3] 
set_input_transition 5 -min -rise [get_ports G0] 
set_input_transition 5 -min -fall [get_ports G0] 
set_input_transition 5 -max -rise [get_ports G0] 
set_input_transition 5 -max -fall [get_ports G0] 
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net
set_load -pin_load 4 [get_ports G17]
`},quiz:[{type:"number",q:"What is the setup slack of the reported path?",answer:-217.32,tol:.01,unit:"ps",explain:"Required \u221229.22, arrival 188.10. The s27 libraries use picoseconds.",try:!1},{type:"choice",q:"Which path does the report show?",options:["F1 \u2192 U3 \u2192 U4 \u2192 U5 \u2192 U7 \u2192 F2","F1 \u2192 U3 \u2192 U4 \u2192 U6 \u2192 U7 \u2192 F2","F1 \u2192 U6 \u2192 U7 \u2192 F2","F1 \u2192 U3 \u2192 U5 \u2192 U7 \u2192 F2"],answer:0,explain:"The worst path goes through both inverters: U3/ZN \u2192 U4/ZN \u2192 U5/ZN \u2192 U7/ZN \u2192 F2/D.",try:!1},{type:"number",q:"What is the clock-to-Q delay of F1?",answer:141.53,tol:.01,unit:"ps",explain:"The first delay after F1/CK: F1/Q arrives at 141.53.",try:!1},{type:"number",q:"What library setup time does F2 need?",answer:30.22,tol:.01,unit:"ps",explain:"Required = capture edge 1.00 \u2212 setup 30.22 = \u221229.22.",try:!1},{type:"choice",q:"Why is the slack so negative?",options:["The input delay is too large","The clock period (1 ps in s27.sdc) is far shorter than the path delay","The library is the wrong corner","There is a false path"],answer:1,explain:"Capture happens at 1 ps but data needs 188 ps to arrive. Try a period of 300 and see the slack become positive.",try:!1}]},{id:"ws-lab6",group:"STA workshop",tag:"Day 4",title:"Lab 6 \xB7 Clock gating checks",script:"run.tcl",files:{"run.tcl":`# Lab 6 (Day 4): active-low clock gating.
# Exercise: analyse the slack on the clock gating path that is reported.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib 
read_verilog s27.v
link_design s27
read_sdc -echo s27.sdc
check_setup -verbose
report_checks -to [get_pins clkgate/*]
`,"s27.v":`module s27 (
G1,
G2,
clk_net,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
sky130_fd_sc_hd__dfbbp_1 F1 (.D(G0), .CLK(clk_net), .Q(n1),.RESET_B(1'b1),.SET_B(1'b1));
sky130_fd_sc_hd__inv_1 U3 (.A(n1), .Y(n2));
sky130_fd_sc_hd__inv_1 U4 (.A(n2), .Y(n3));
sky130_fd_sc_hd__nand2_1 U6 (.Y(n4), .A(n1), .B(n3));
sky130_fd_sc_hd__nand2_1 U5 (.Y(n5), .A(n3), .B(n2));
sky130_fd_sc_hd__nor2_1 U7 (.Y(n6), .A(n4), .B(n5));
sky130_fd_sc_hd__dfbbp_1 F2 (.D(G1), .CLK(gclk), .Q(G17),.RESET_B(1'b1),.SET_B(1'b1));

//Clock Gating Analysis
wire gclk;
sky130_fd_sc_hd__dlclkp_4 clkgate (.CLK(clk_net),.GATE(n6),.GCLK(gclk)); 
endmodule


`,"s27.sdc":`create_clock -period 1 -name clk_net [get_ports clk_net]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net
set_input_transition 5 -min -rise [get_ports G2] 
set_input_transition 5 -min -fall [get_ports G2] 
set_input_transition 5 -max -rise [get_ports G2] 
set_input_transition 5 -max -fall [get_ports G2] 
set_input_transition 5 -min -rise [get_ports clk_net]
set_input_transition 5 -min -fall [get_ports clk_net]
set_input_transition 5 -max -rise [get_ports clk_net]
set_input_transition 5 -max -fall [get_ports clk_net]
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net
set_input_transition 5 -min -rise [get_ports G3]
set_input_transition 5 -min -fall [get_ports G3]
set_input_transition 5 -max -rise [get_ports G3]
set_input_transition 5 -max -fall [get_ports G3]
set_input_delay 0 -min -rise [get_ports G0] -clock clk_net
set_input_delay 0 -min -fall [get_ports G0] -clock clk_net
set_input_delay 0 -max -rise [get_ports G0] -clock clk_net
set_input_delay 0 -max -fall [get_ports G0] -clock clk_net
set_input_transition 5 -min -rise [get_ports G0]
set_input_transition 5 -min -fall [get_ports G0]
set_input_transition 5 -max -rise [get_ports G0]
set_input_transition 5 -max -fall [get_ports G0]
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net
set_load -pin_load 4 [get_ports G17]
set_clock_gating_check -setup 1.0 -hold 0.5 [get_clocks clk_net]
set_propagated_clock [all_clocks]
`},quiz:[{type:"number",q:"What is the clock gating setup slack?",answer:-.67,tol:.01,unit:"ns",explain:"Arrival 1.30 ns at clkgate/GATE, required 0.63 ns.",try:!1},{type:"choice",q:"Which pin is the endpoint of the clock gating check?",options:["clkgate/CLK","clkgate/GATE","clkgate/GCLK","F1/D"],answer:1,explain:"The enable arrives at the GATE pin of the integrated clock gating cell and is checked against the clock at CLK.",try:!1},{type:"choice",q:"What kind of cell is clkgate (sky130_fd_sc_hd__dlclkp_4)?",options:["A flip-flop","A clock buffer","An integrated clock gating cell (latch + AND)","A multiplexer"],answer:2,explain:"dlclkp is a latch-based clock gate: it holds the enable stable while the clock is high, so GCLK has no glitches.",try:!1},{type:"choice",q:"s27.sdc sets set_clock_gating_check -setup 1.0. Which setup value does the report use?",options:["1.0 from the SDC","0.37 from the library","1.37, both added","0, because the clock is ideal"],answer:1,explain:"For an integrated clock gating cell, the library has its own setup arc (0.37 ns), and OpenSTA uses it.",try:!1}]},{id:"ws-lab7",group:"STA workshop",tag:"Day 4",title:"Lab 7 \xB7 Async pin checks",script:"run.tcl",files:{"run.tcl":`# Lab 7 (Day 4): recovery and removal checks on an asynchronous reset.
# Exercise: analyse the slack on the reset path that is reported.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib 
read_verilog s27.v
link_design s27
read_sdc s27.sdc
check_setup -verbose
report_checks -to R1/RESET_B
`,"s27.v":`module s27 (
G1,
G2,
clk_net,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
wire rst_sync;
// Reset Synchronizer
sky130_fd_sc_hd__dfbbp_1 SYNC1 (.D(1'b1), .CLK(clk_net), .RESET_B(rst), .Q(n1),.SET_B(1'b1));
sky130_fd_sc_hd__dfbbp_1 SYNC2 (.D(n1), .CLK(clk_net), .RESET_B(rst), .Q(rst_sync));

// Functional Register
sky130_fd_sc_hd__dfbbp_1 R1 (.D(G0), .CLK(clk_net), .RESET_B(rst_sync), .Q(G17),.SET_B(1'b1));

endmodule


`,"s27.sdc":`create_clock -period 1 -name clk_net [get_ports clk_net]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net
set_input_transition 5 -min -rise [get_ports G2] 
set_input_transition 5 -min -fall [get_ports G2] 
set_input_transition 5 -max -rise [get_ports G2] 
set_input_transition 5 -max -fall [get_ports G2] 
set_input_transition 5 -min -rise [get_ports clk_net] 
set_input_transition 5 -min -fall [get_ports clk_net] 
set_input_transition 5 -max -rise [get_ports clk_net] 
set_input_transition 5 -max -fall [get_ports clk_net] 
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net
set_input_transition 5 -min -rise [get_ports G3]
set_input_transition 5 -min -fall [get_ports G3]
set_input_transition 5 -max -rise [get_ports G3]
set_input_transition 5 -max -fall [get_ports G3]
set_input_delay 0 -min -rise [get_ports G0] -clock clk_net
set_input_delay 0 -min -fall [get_ports G0] -clock clk_net
set_input_delay 0 -max -rise [get_ports G0] -clock clk_net
set_input_delay 0 -max -fall [get_ports G0] -clock clk_net
set_input_transition 5 -min -rise [get_ports G0]
set_input_transition 5 -min -fall [get_ports G0]
set_input_transition 5 -max -rise [get_ports G0]
set_input_transition 5 -max -fall [get_ports G0]
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net
set_load -pin_load 4 [get_ports G17]
`},quiz:[{type:"choice",q:"Which check does the report show at R1/RESET_B?",options:["Setup","Hold","Recovery","Removal"],answer:2,explain:"A max-delay check on an asynchronous pin is a recovery check: reset must be released early enough before the clock edge.",try:!1},{type:"number",q:"What is the recovery slack?",answer:.46,tol:.01,unit:"ns",explain:"Arrival 0.47, required 1.00 \u2212 0.07 = 0.93.",try:!1},{type:"number",q:"What is the library recovery time of R1?",answer:.07,tol:.01,unit:"ns",explain:"Required time = 1.00 \u2212 0.07 = 0.93.",try:!1},{type:"number",q:"Try it: add report_checks -to R1/RESET_B -path_delay min. What is the removal slack?",answer:.52,tol:.01,unit:"ns",explain:"Removal is the hold-like check: reset must not be released too soon after the clock edge.",try:!0}]},{id:"ws-lab12",group:"STA workshop",tag:"Day 5",title:"Lab 12 \xB7 More setup slack examples",script:"example2.tcl",files:{"example2.tcl":`# Lab 12 (Day 5): pick example2.tcl, example3.tcl or example4.tcl next to the Run button.
# example2: one slow library. example3: min/max libraries. example4: slow library plus parasitics.
# Exercise: compare the three reports. What does the SPEF add to each stage?

# delay calc example
read_liberty sky130_fd_sc_hd__ss_100C_1v60.lib
read_verilog example1.v
link_design top
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay -clock clk 0 {in1 in2}
report_checks
`,"example3.tcl":`# min/max delay calc example
read_liberty -max sky130_fd_sc_hd__ss_100C_1v60.lib
read_liberty -min sky130_fd_sc_hd__ff_n40C_1v95.lib
read_verilog example1.v
link_design top
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay -clock clk 0 {in1 in2}
report_checks -path_delay min_max
`,"example4.tcl":`# delay calc example with parasitics
read_liberty sky130_fd_sc_hd__ss_100C_1v60.lib
read_verilog example1.v
link_design top
read_spef example1.dspef
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay -clock clk 0 {in1 in2}
report_checks
`,"example1.v":`module top (in1, in2, clk1, clk2, clk3, out);
  input in1, in2, clk1, clk2, clk3;
  output out;
  wire r1q, r2q, u1x, u2x;

  sky130_fd_sc_hd__dfxtp_1 r1 (.D(in1), .CLK(clk1), .Q(r1q));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(in2), .CLK(clk2), .Q(r2q));
  sky130_fd_sc_hd__buf_1   u1 (.A(r2q), .X(u1x));
  sky130_fd_sc_hd__and2_1  u2 (.A(r1q), .B(u1x), .X(u2x));
  sky130_fd_sc_hd__dfxtp_1 r3 (.D(u2x), .CLK(clk3), .Q(out));
endmodule // top
`,"example1.dspef":`*SPEF "IEEE 1481-1998"
*DESIGN "reg1"
*DATE "Fri Nov 20 13:23:00 2002"
*VENDOR "Parallax Software, Inc"
*PROGRAM "Handjob"
*VERSION "1.0.1c"
*DESIGN_FLOW "MISSING_NETS"
*DIVIDER /
*DELIMITER :
*BUS_DELIMITER [ ]
*T_UNIT 1.0 PS
*C_UNIT 1.0 PF
*R_UNIT 1.0 OHM
*L_UNIT 1.0 HENRY

*POWER_NETS VDD
*GROUND_NETS VSS

*PORTS
in1 I
in2 I
clk1 I
clk2 I
clk3 I
out O

*D_NET in1 0.275
*CONN
*P in1 I
*I r1:D I *L .0036
*CAP
1 in1 .243
2 r1:D .032
*RES
3 in1 r1:D 40
*END

*D_NET in2 0.275
*CONN
*P in2 I
*I r2:D I *L .0036
*CAP
1 in2 .243
2 r2:D .032
*RES
3 in2 r2:D 40
*END

*D_NET clk1 0.275
*CONN
*P clk1 I
*I r1:CLK I *L .0036
*CAP
1 clk1 .243
2 r1:CLK .032
*RES
3 clk1 r1:CLK 40
*END

*D_NET clk2 0.275
*CONN
*P clk2 I
*I r2:CLK I *L .0036
*CAP
1 clk2 .243
2 r2:CLK .032
*RES
3 clk2 r2:CLK 40
*END

*D_NET clk3 0.275
*CONN
*P clk3 I
*I r3:CLK I *L .0036
*CAP
1 clk3 .243
2 r3:CLK .032
*RES
3 clk3 r3:CLK 40
*END

*D_NET r1q 0.275
*CONN
*I r1:Q O
*I u2:A I *L .0086
*CAP
1 r1:Q .243
2 u2:A .032
*RES
3 r1:Q u2:A 40
*END

*D_NET r2q 0.275
*CONN
*I r2:Q O
*I u1:A I *L .0086
*CAP
1 r2:Q .243
2 u1:A .032
*RES
3 r2:Q u1:A 40
*END

*D_NET u1x 0.275
*CONN
*I u1:X O
*I u2:B I *L .0086
*CAP
1 u1:X .243
2 u2:B .032
*RES
3 u1:X u2:B 40
*END

*D_NET u2x 0.275
*CONN
*I u2:X O
*I r3:D I *L .0086
*CAP
1 u2:X .243
2 r3:D .032
*RES
3 u2:X r3:D 40
*END

*D_NET out 0.275
*CONN
*I r3:Q O
*P out O
*CAP
1 r3:Q .243
2 out .032
*RES
3 r3:Q out 40
*END
`},quiz:[{type:"number",q:"Run example2.tcl. What is the setup slack r2 \u2192 r3?",answer:8.76,tol:.01,unit:"ns",explain:"One slow library and ideal wires: arrival 0.95, required 9.72.",try:!1},{type:"number",q:"Run example3.tcl. What is the hold slack on the min path in1 \u2192 r1?",answer:.02,tol:.01,unit:"ns",explain:"The fast library is read with -min, so hold uses ff delays. The input arrives at 0 and the hold time is \u22120.02.",try:!1},{type:"number",q:"Run example4.tcl. What is the setup slack now?",answer:-2.61,tol:.01,unit:"ns",explain:"The parasitics in example1.dspef add large wire capacitance, so every stage slows down.",try:!1},{type:"number",q:"In example4, what is the delay of the u1 stage?",answer:4.26,tol:.01,unit:"ns",explain:"It was 0.13 ns in example2. The extra load is all from the SPEF.",try:!1},{type:"choice",q:"Why does r3's setup time grow from 0.28 ns (example2) to 0.99 ns (example4)?",options:["The clock period changed","The data slew at r3/D is much slower, and setup time depends on slew","The library changed","The SPEF adds wire on the clock"],answer:1,explain:"Liberty setup times are tables indexed by data and clock slew. A slow data edge needs more setup time.",try:!1}]},{id:"ws-lab4",group:"STA workshop",tag:"Day 5",title:"Lab 4 \xB7 CPPR",script:"run.tcl",files:{"run.tcl":`# Lab 4 (Day 5): common path pessimism removal (CPPR, also called CRPR).
# Exercise: note the slack, then change sta_crpr_enabled from 0 to 1 and run again.
# Which node is the common point of the launch and capture clocks? Where does the difference come from?
# Note: older OpenSTA versions ignored sta_crpr_enabled 0, so old logs show the same slack both ways.

set sta_crpr_enabled 0
read_liberty -max s27_Late.lib
read_liberty -min s27_Early.lib
read_verilog s27.v
link_design s27
read_sdc s27.sdc
## Try run with cppr -disable
report_checks -to F2/D -format full_clock_expanded 
`,"s27.v":`module s27 (
G1,
G2,
clk_net,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
DFFR_X2 F1 (.D(G0), .CK(c4), .Q(n1));
INV_X1 U3 (.A(n1), .ZN(n2));
INV_X1 U4 (.A(n2), .ZN(n3));
NAND2_X2 U6 (.ZN(n4), .A1(n1), .A2(n3));
NAND2_X2 U5 (.ZN(n5), .A1(n3), .A2(n2));
NOR2_X1 U7 (.ZN(n6), .A1(n4), .A2(n5));
DFFR_X2 F2 (.D(n6), .CK(c2), .Q(G17));

//Clock Paths
wire c1,c2,c3,c4_1,c4_2,c4_3,c4;
CLKBUF_X2 U8 (.A(clk_net), .Z(c1));
CLKBUF_X2 U9 (.A(c1), .Z(c2));
CLKBUF_X2 U10 (.A(c2), .Z(c3));
CLKBUF_X2 U11 (.A(c3), .Z(c4_1));
CLKBUF_X2 U12 (.A(c4_1), .Z(c4_2));
CLKBUF_X2 U13 (.A(c4_2), .Z(c4_3));
CLKBUF_X2 U14 (.A(c4_3), .Z(c4));

endmodule


`,"s27.sdc":`create_clock -period 1 -name clk_net [get_ports clk_net]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net
set_input_transition 5 -min -rise [get_ports G2] 
set_input_transition 5 -min -fall [get_ports G2] 
set_input_transition 5 -max -rise [get_ports G2] 
set_input_transition 5 -max -fall [get_ports G2] 
set_input_delay 0 -min -rise [get_ports clk_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports clk_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports clk_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports clk_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports clk_net] 
set_input_transition 5 -min -fall [get_ports clk_net] 
set_input_transition 5 -max -rise [get_ports clk_net] 
set_input_transition 5 -max -fall [get_ports clk_net] 
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net
set_input_transition 5 -min -rise [get_ports G3] 
set_input_transition 5 -min -fall [get_ports G3] 
set_input_transition 5 -max -rise [get_ports G3] 
set_input_transition 5 -max -fall [get_ports G3] 
set_input_delay 0 -min -rise [get_ports G0] -clock clk_net
set_input_delay 0 -min -fall [get_ports G0] -clock clk_net
set_input_delay 0 -max -rise [get_ports G0] -clock clk_net
set_input_delay 0 -max -fall [get_ports G0] -clock clk_net
set_input_transition 5 -min -rise [get_ports G0] 
set_input_transition 5 -min -fall [get_ports G0] 
set_input_transition 5 -max -rise [get_ports G0] 
set_input_transition 5 -max -fall [get_ports G0] 
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net
set_load -pin_load 4 [get_ports G17]
set_propagated_clock [all_clocks]
`},quiz:[{type:"number",q:"With sta_crpr_enabled 0, what is the setup slack?",answer:-398.1,tol:.01,unit:"ps",explain:"Arrival 432.19, required 34.09.",try:!1},{type:"number",q:"How many clock buffers are on the launch clock path to F1?",answer:7,tol:0,unit:"",explain:"U8 to U14: seven CLKBUF_X2 cells.",try:!1},{type:"choice",q:"Where do the launch and capture clock paths split (the common point)?",options:["clk_net port","U8/Z","U9/Z","U14/Z"],answer:2,explain:"Both clock paths go through U8 and U9, then split. Everything up to U9/Z is common.",try:!1},{type:"number",q:"Try it: set sta_crpr_enabled 1 and run again. What is the slack?",answer:-391.43,tol:.01,unit:"ps",explain:"CPPR removes the pessimism of timing the common clock path both late and early.",try:!0},{type:"number",q:"How much pessimism did CPPR remove?",answer:6.67,tol:.01,unit:"ps",explain:"\u2212391.43 \u2212 (\u2212398.10) = 6.67 ps: the late/early delay difference of U8 and U9.",try:!0}]},{id:"ws-lab5",group:"STA workshop",tag:"Day 5",title:"Lab 5 \xB7 Timing ECO",script:"run.tcl",files:{"run.tcl":`# Lab 5 (Day 5): insert a clock buffer as a timing ECO, then re-time the design.
# Exercises: look up each ECO command in the OpenSTA manual.
# After the run, open the new s27_eco.v tab: what differs from s27.v? How did the slack change?

read_liberty -min s27_Early.lib
read_liberty -max s27_Late.lib
read_verilog s27.v
link_design s27
read_sdc s27.sdc
report_checks -through F2/CK -path_delay max
report_checks -through F2/CK -path_delay min 
### Inserting Timing ECOs
make_instance U16 CLKBUF_X3
make_net c6
disconnect_pin c5 U15/Z
connect_pin c6 U15/Z
connect_pin c6 U16/A
connect_pin c5 U16/Z
write_verilog s27_eco.v
report_checks -through F2/CK -path_delay max
report_checks -through F2/CK -path_delay min 
`,"s27.v":`module s27 (
G1,
G2,
clk_net,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
DFFR_X2 F1 (.D(G0), .CK(c4), .Q(n1));
INV_X1 U3 (.A(n1), .ZN(n2));
INV_X1 U4 (.A(n2), .ZN(n3));
NAND2_X2 U6 (.ZN(n4), .A1(n1), .A2(n3));
NAND2_X2 U5 (.ZN(n5), .A1(n3), .A2(n2));
NOR2_X1 U7 (.ZN(n6), .A1(n4), .A2(n5));
DFFR_X2 F2 (.D(n6), .CK(c5), .Q(G17));

//Clock Paths
wire c1,c2,c3,c4_1,c4_2,c4_3,c4,c5;
CLKBUF_X2 U8 (.A(clk_net), .Z(c1));
CLKBUF_X2 U9 (.A(c1), .Z(c2));
CLKBUF_X2 U15 (.A(c2), .Z(c5));
CLKBUF_X2 U10 (.A(c2), .Z(c3));
CLKBUF_X2 U11 (.A(c3), .Z(c4_1));
CLKBUF_X2 U12 (.A(c4_1), .Z(c4_2));
CLKBUF_X2 U13 (.A(c4_2), .Z(c4_3));
CLKBUF_X2 U14 (.A(c4_3), .Z(c4));

endmodule


`,"s27.sdc":`create_clock -period 1 -name clk_net [get_ports clk_net]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net
set_input_transition 5 -min -rise [get_ports G2]
set_input_transition 5 -min -fall [get_ports G2]
set_input_transition 5 -max -rise [get_ports G2]
set_input_transition 5 -max -fall [get_ports G2]
set_input_delay 0 -min -rise [get_ports clk_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports clk_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports clk_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports clk_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports clk_net] 
set_input_transition 5 -min -fall [get_ports clk_net] 
set_input_transition 5 -max -rise [get_ports clk_net] 
set_input_transition 5 -max -fall [get_ports clk_net] 
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net
set_input_transition 5 -min -rise [get_ports G3] 
set_input_transition 5 -min -fall [get_ports G3] 
set_input_transition 5 -max -rise [get_ports G3] 
set_input_transition 5 -max -fall [get_ports G3] 
set_input_transition 5 -min -rise [get_ports G0] 
set_input_transition 5 -min -fall [get_ports G0] 
set_input_transition 5 -max -rise [get_ports G0] 
set_input_transition 5 -max -fall [get_ports G0] 
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net
set_load -pin_load 4 [get_ports G17]
set_propagated_clock [all_clocks]
`},quiz:[{type:"number",q:"Before the ECO, what is the setup slack F2 \u2192 G17?",answer:-243.99,tol:.01,unit:"ps",explain:"The first max report: arrival 246.19, required 2.20.",try:!1},{type:"choice",q:"Which cell does the ECO insert?",options:["INV_X1","CLKBUF_X3 named U16","DFFR_X2","BUF_X1"],answer:1,explain:"make_instance U16 CLKBUF_X3, then connect_pin puts it between U15 and net c5.",try:!1},{type:"number",q:"After the ECO, what is the clock network delay to F2 for setup?",answer:144.66,tol:.01,unit:"ps",explain:"It was 104.84 before. U16 adds 39.82 ps to F2's clock.",try:!1},{type:"number",q:"After the ECO, what is the setup slack F2 \u2192 G17?",answer:-283.81,tol:.01,unit:"ps",explain:"Delaying the launch clock of F2 makes this output path later, so setup gets worse.",try:!1},{type:"choice",q:"What did this ECO do to the hold slack F2 \u2192 G17?",options:["Made it worse","Improved it (195.98 \u2192 232.00)","No change","Created a hold violation"],answer:1,explain:"A later launch clock helps hold. This is the classic trade-off of clock-path ECOs: useful skew helps one check and hurts the other.",try:!1}]},{id:"ws-lab8",group:"STA workshop",tag:"Day 6",title:"Lab 8 \xB7 Hold slack computation",script:"run.tcl",files:{"run.tcl":`# Lab 8 (Day 6): hold timing paths.
# Exercise: explain the launch and capture clock edges the hold report picks.

read_liberty -min s27_Early.lib
read_liberty -max s27_Late.lib
read_verilog s27.v
link_design s27
read_sdc s27.sdc
report_checks -to F2/D -path_delay min
`,"s27.v":`module s27 (
G1,
G2,
clk_net1,
clk_net2,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net1, clk_net2,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
DFFR_X2 F1 (.D(G0), .CK(clk_net1), .Q(n1));
INV_X1 U3 (.A(n1), .ZN(n2));
INV_X1 U4 (.A(n2), .ZN(n3));
NAND2_X2 U6 (.ZN(n4), .A1(n1), .A2(n3));
NAND2_X2 U5 (.ZN(n5), .A1(n3), .A2(n2));
NOR2_X1 U7 (.ZN(n6), .A1(n4), .A2(n5));
DFFR_X2 F2 (.D(n6), .CK(clk_net2), .Q(G17));

endmodule


`,"s27.sdc":`create_clock -period 10 -name clk_net1 [get_ports clk_net1]
create_clock -period 10 -waveform {1 7} -name clk_net2 [get_ports clk_net2]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net1
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net1
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net1
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net1
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net1
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net1
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net1
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net1
set_input_transition 5 -min -rise [get_ports G2] 
set_input_transition 5 -min -fall [get_ports G2] 
set_input_transition 5 -max -rise [get_ports G2] 
set_input_transition 5 -max -fall [get_ports G2] 
set_input_delay 0 -min -rise [get_ports clk_net1] -clock clk_net1
set_input_delay 0 -min -fall [get_ports clk_net1] -clock clk_net1
set_input_delay 0 -max -rise [get_ports clk_net1] -clock clk_net1
set_input_delay 0 -max -fall [get_ports clk_net1] -clock clk_net1
set_input_transition 5 -min -rise [get_ports clk_net1] 
set_input_transition 5 -min -fall [get_ports clk_net1] 
set_input_transition 5 -max -rise [get_ports clk_net1] 
set_input_transition 5 -max -fall [get_ports clk_net1] 
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net1
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net1
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net1
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net1
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net1
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net1
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net1
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net1
set_input_transition 5 -min -rise [get_ports G3] 
set_input_transition 5 -min -fall [get_ports G3] 
set_input_transition 5 -max -rise [get_ports G3] 
set_input_transition 5 -max -fall [get_ports G3] 
set_input_transition 5 -min -rise [get_ports G0] 
set_input_transition 5 -min -fall [get_ports G0] 
set_input_transition 5 -max -rise [get_ports G0] 
set_input_transition 5 -max -fall [get_ports G0] 
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net1
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net1
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net1
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net1
set_load -pin_load 4 [get_ports G17]
`},quiz:[{type:"number",q:"What is the hold slack F1 \u2192 F2?",answer:146.47,tol:.01,unit:"ps",explain:"Arrival 149.74, required 3.27.",try:!1},{type:"number",q:"At what time is the launch edge of clk_net1 in this hold report?",answer:10,tol:.001,unit:"ps",explain:"The hold check uses the next launch edge after the setup launch at 0.",try:!1},{type:"number",q:"At what time is the capture edge of clk_net2?",answer:1,tol:.001,unit:"ps",explain:"clk_net2 has -waveform {1 7}: it rises at 1.",try:!1},{type:"choice",q:"Why does hold use launch 10 and capture 1?",options:["It is a bug","The setup check is launch 0 \u2192 capture 1, and hold checks the next launch (10) against that same capture edge (1)","Hold always uses the falling edge","Because of CPPR"],answer:1,explain:"Hold makes sure the data launched by the next edge does not overwrite what was captured at 1.",try:!1},{type:"number",q:"What is the library hold time of F2?",answer:2.27,tol:.01,unit:"ps",explain:"Required = 1.00 + 2.27 = 3.27.",try:!1}]},{id:"ws-lab10",group:"STA workshop",tag:"Day 6",title:"Lab 10 \xB7 Multiple modes",script:"run.tcl",files:{"run.tcl":`# Lab 10 (Day 6): constraints for one mode at a time.
# Exercises: understand mode1.sdc, then add mode2.sdc, mode3.sdc and mode4.sdc (use the + File button)
# and review the reports in each mode. Then write one merged-mode SDC covering all four:
# do you see any difference in timing between separate modes and the merged mode?

## reading liberty model
read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib 
## reading netlist model
read_verilog test.v
link_design test 
## Parsing constraints
read_sdc -echo mode1.sdc
## report timing reports for 5 paths
report_checks -group_count 5
`,"test.v":`module test (in1,in2,clk1,clk2,clk3,clk4,clksel1,clksel2,out1);
input in1,in2,clk1,clk2,clk3,clk4,clksel1,clksel2;
output out1;

sky130_fd_sc_hd__mux2_1 clkmux1 (.A0(clk1),.A1(clk2),.S(clksel1),.X(mxclk1));
sky130_fd_sc_hd__mux2_1 clkmux2 (.A0(clk3),.A1(clk4),.S(clksel2),.X(mxclk2));
sky130_fd_sc_hd__nand2_1 u1 ( .A(in1), .B(in2), .Y(n1) );
sky130_fd_sc_hd__dfrbp_1 f1 ( .D(n2), .CLK(mxclk1), .Q(n3),.SET_B(1'b1),.RESET_B(1'b1));
sky130_fd_sc_hd__inv_1 u2 ( .A(n3), .Y(n4) );
sky130_fd_sc_hd__inv_1 u3 ( .A(n4), .Y(n5) );
sky130_fd_sc_hd__nor2_1 u4 ( .A(n1), .B(n3), .Y(n2) );
sky130_fd_sc_hd__dfrbp_1 f2 (.D(n5),.CLK(mxclk2),.Q(out),.SET_B(1'b1),.RESET_B(1'b1));



endmodule
`,"mode1.sdc":`create_clock -period 1 -name clk1 [get_ports clk1]
create_clock -period 0.5 -name clk2 [get_ports clk2]
create_clock -period 0.5 -name clk3 [get_ports clk3]
create_clock -period 1 -name clk4 [get_ports clk4]
set_input_delay 0 -min  [get_ports in1] -clock clk1
set_input_delay 5 -max [get_ports in2] -clock clk1
set_load -pin_load 4 [get_ports out]
set_output_delay -10 -min -rise [get_ports out] -clock clk1
set_output_delay 30 -max -rise [get_ports out] -clock clk1
set_case_analysis 0 [get_ports clksel1]
set_case_analysis 0 [get_ports clksel2]
`},quiz:[{type:"choice",q:"In mode1 (clksel1 = 0, clksel2 = 0), which clocks reach f1 and f2?",options:["clk1 and clk3","clk2 and clk4","clk1 and clk4","All four clocks"],answer:0,explain:"set_case_analysis 0 selects input A0 of each mux: clk1 for clkmux1, clk3 for clkmux2.",try:!1},{type:"number",q:"What is the worst slack in mode1?",answer:-4.19,tol:.01,unit:"ns",explain:"in2 \u2192 f1: the 5 ns input delay on a 1 ns clock.",try:!1},{type:"number",q:"What is the f1 \u2192 f2 slack in mode1?",answer:-.09,tol:.01,unit:"ns",explain:"clk1 launches at 0, clk3 (0.5 ns) captures at 0.5.",try:!1},{type:"number",q:"Try it: set clksel2 to 1 (keep clksel1 = 0). What is the f1 \u2192 f2 slack?",answer:.41,tol:.01,unit:"ns",explain:"Now clk4 (1 ns) captures at 1.0, giving a full cycle.",try:!0},{type:"number",q:"Try it: remove both set_case_analysis lines (merged mode). What is the worst slack?",answer:-4.69,tol:.01,unit:"ns",explain:"With no case analysis both mux inputs propagate, so all clock pairs are timed together. The worst is in2 \u2192 f1 captured by clk2.",try:!0}]},{id:"ws-lab11",group:"STA workshop",tag:"Day 6",title:"Lab 11 \xB7 Multiple corners and derates",script:"example5.tcl",files:{"example5.tcl":`# Lab 11 (Day 6): three corners (ss, tt, ff) with +/-10% derating.
# Exercise: analyse the impact of the corners and the derates on the reports.

# 3 corners with +/- 10% derating example
define_corners ss tt ff
read_liberty -corner ss sky130_fd_sc_hd__ss_100C_1v60.lib
read_liberty -corner tt sky130_fd_sc_hd__tt_025C_1v80.lib
read_liberty -corner ff sky130_fd_sc_hd__ff_n40C_1v95.lib
read_verilog example1.v
link_design top
set_timing_derate -early 0.9
set_timing_derate -late  1.1
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay -clock clk 0 {in1 in2}
# report all corners
report_checks -path_delay min_max
# report typical corner
report_checks -corner tt
`,"example1.v":`module top (in1, in2, clk1, clk2, clk3, out);
  input in1, in2, clk1, clk2, clk3;
  output out;
  wire r1q, r2q, u1x, u2x;

  sky130_fd_sc_hd__dfxtp_1 r1 (.D(in1), .CLK(clk1), .Q(r1q));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(in2), .CLK(clk2), .Q(r2q));
  sky130_fd_sc_hd__buf_1   u1 (.A(r2q), .X(u1x));
  sky130_fd_sc_hd__and2_1  u2 (.A(r1q), .B(u1x), .X(u2x));
  sky130_fd_sc_hd__dfxtp_1 r3 (.D(u2x), .CLK(clk3), .Q(out));
endmodule // top
`},quiz:[{type:"choice",q:"Which corner gives the worst setup slack?",options:["ss","tt","ff"],answer:0,explain:"Slow silicon at 100 \xB0C and 1.60 V: 8.67 ns.",try:!1},{type:"number",q:"What is the setup slack at the ss corner?",answer:8.67,tol:.01,unit:"ns",explain:"",try:!1},{type:"choice",q:"Which corner gives the hold path (min) result?",options:["ss","tt","ff"],answer:2,explain:"Hold is worst when data is fastest: the ff corner.",try:!1},{type:"number",q:"What is the hold slack?",answer:.02,tol:.01,unit:"ns",explain:"in1 \u2192 r1 at the ff corner.",try:!1},{type:"number",q:"Try it: remove both set_timing_derate lines. What is the setup slack at the tt corner?",answer:9.41,tol:.01,unit:"ns",explain:"With derates it was 9.36. The late derate of 1.1 made every data delay 10% slower.",try:!0}]},{id:"ws-lab13",group:"STA workshop",tag:"Day 7",title:"Lab 13 \xB7 Multiple clocks and multicycle paths",script:"run.tcl",files:{"run.tcl":`# Lab 13 (Day 7): several clocks with different waveforms.
# Exercises: analyse the impact of the clock waveforms on the reports.
# Add only a setup multicycle path between clk2 and clk3: does it change the setup reports? The hold reports?

## reading liberty model
read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib 
## reading netlist model
read_verilog test.v
link_design test 
## Parsing constraints
read_sdc -echo test.sdc
## report timing reports for 5 paths
report_checks -group_count 100 
`,"test.v":`module test (in1,in2,clk1,clk2,clk3,clk4,clksel1,clksel2,out1);
input in1,in2,clk1,clk2,clk3,clk4,clksel1,clksel2;
output out1;

sky130_fd_sc_hd__mux2_1 clkmux1 (.A0(clk1),.A1(clk2),.S(clksel1),.X(mxclk1));
sky130_fd_sc_hd__mux2_1 clkmux2 (.A0(clk3),.A1(clk4),.S(clksel2),.X(mxclk2));
sky130_fd_sc_hd__nand2_1 u1 ( .A(in1), .B(in2), .Y(n1) );
sky130_fd_sc_hd__dfrbp_1 f1 ( .D(n2), .CLK(mxclk1), .Q(n3),.SET_B(1'b1),.RESET_B(1'b1));
sky130_fd_sc_hd__inv_1 u2 ( .A(n3), .Y(n4) );
sky130_fd_sc_hd__inv_1 u3 ( .A(n4), .Y(n5) );
sky130_fd_sc_hd__nor2_1 u4 ( .A(n1), .B(n3), .Y(n2) );
sky130_fd_sc_hd__dfrbp_1 f2 (.D(n5),.CLK(mxclk2),.Q(out),.SET_B(1'b1),.RESET_B(1'b1));



endmodule
`,"test.sdc":`create_clock -period 1 -name clk1 [get_ports clk1]
create_clock -period 10 -name clk2 [get_ports clk2]
create_clock -period 20 -name clk3 [get_ports clk3]
create_clock -period 7 -name clk4 [get_ports clk4]
set_input_delay 0 -min  [get_ports in1] -clock clk1
set_input_delay 5 -max [get_ports in2] -clock clk1
set_load -pin_load 4 [get_ports out]
set_output_delay -10 -min -rise [get_ports out] -clock clk1
set_output_delay 30 -max -rise [get_ports out] -clock clk1
`},quiz:[{type:"number",q:"How many paths are reported as VIOLATED?",answer:2,tol:0,unit:"",explain:"Both in2 \u2192 f1 paths (captured by clk1 and by clk2).",try:!1},{type:"number",q:"For the path f1 (clk2) \u2192 f2 (clk4), at what time is the launch edge?",answer:20,tol:.001,unit:"ns",explain:"clk2 (10 ns) and clk4 (7 ns) line up worst at launch 20, capture 21.",try:!1},{type:"number",q:"And the capture edge?",answer:21,tol:.001,unit:"ns",explain:"Only 1 ns after launch: the tightest pair of edges over the common period.",try:!1},{type:"number",q:"Try it: add set_multicycle_path -setup 2 -from [get_clocks clk2] -to [get_clocks clk3] to test.sdc and report_checks -from [get_clocks clk2] -to [get_clocks clk3] -path_delay min_max. What is the setup slack?",answer:29.41,tol:.01,unit:"ns",explain:"The capture edge moves from 20 to 40.",try:!0},{type:"number",q:"With that setup-only multicycle path, what is the hold slack?",answer:-19.54,tol:.01,unit:"ns",explain:"Hold moves with setup (capture 20), so it now fails. Fix it with set_multicycle_path -hold 1 between the same clocks.",try:!0}]},{id:"ws-lab14",group:"STA workshop",tag:"Day 7",title:"Lab 14 \xB7 Half-cycle paths",script:"run.tcl",files:{"run.tcl":`# Lab 14 (Day 7): are there any half-cycle paths in this design?
# Exercise: analyse the clock edges used for setup and for hold.

## reading liberty model
read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib 
## reading netlist model
read_verilog test.v
link_design test 
## Parsing constraints
read_sdc -echo test.sdc
## report timing reports for 5 paths
report_checks -group_count 100 
`,"test.v":`module test (in1,in2,clk1,clk2,clk3,clk4,clksel1,clksel2,out1);
input in1,in2,clk1,clk2,clk3,clk4,clksel1,clksel2;
output out1;

sky130_fd_sc_hd__mux2_1 clkmux1 (.A0(clk1),.A1(clk2),.S(clksel1),.X(mxclk1));
sky130_fd_sc_hd__mux2_1 clkmux2 (.A0(clk3),.A1(clk4),.S(clksel2),.X(mxclk2));
sky130_fd_sc_hd__nand2_1 u1 ( .A(in1), .B(in2), .Y(n1) );
sky130_fd_sc_hd__dfbbn_2 f1 ( .D(n2), .CLK_N(mxclk1), .Q(n3),.SET_B(1'b1),.RESET_B(1'b1));
sky130_fd_sc_hd__inv_1 u2 ( .A(n3), .Y(n4) );
sky130_fd_sc_hd__inv_1 u3 ( .A(n4), .Y(n5) );
sky130_fd_sc_hd__nor2_1 u4 ( .A(n1), .B(n3), .Y(n2) );
sky130_fd_sc_hd__dfrbp_1 f2 (.D(n5),.CLK(mxclk2),.Q(out),.SET_B(1'b1),.RESET_B(1'b1));



endmodule
`,"test.sdc":`create_clock -period 10 -name clk1 [get_ports clk1]
create_clock -period 10 -name clk2 [get_ports clk2]
create_clock -period 10 -name clk3 [get_ports clk3]
create_clock -period 10 -name clk4 [get_ports clk4]
set_input_delay 0 -min  [get_ports in1] -clock clk1
set_input_delay 5 -max [get_ports in2] -clock clk1
set_load -pin_load 4 [get_ports out]
set_output_delay -10 -min -rise [get_ports out] -clock clk1
set_output_delay 30 -max -rise [get_ports out] -clock clk1
`},quiz:[{type:"choice",q:"Is there a half-cycle path in this design?",options:["No","Yes: f1 launches on the falling edge and f2 captures on the rising edge"],answer:1,explain:"f1 is a negative-edge flop (dfbbn), f2 a positive-edge flop, so f1 \u2192 f2 has only half a period.",try:!1},{type:"number",q:"For f1 \u2192 f2 (setup), at what time is the launch edge?",answer:5,tol:.001,unit:"ns",explain:"The falling edge of a 10 ns clock.",try:!1},{type:"number",q:"What is the setup slack f1 \u2192 f2?",answer:4.24,tol:.01,unit:"ns",explain:"Launch 5, capture 10.",try:!1},{type:"number",q:"What is the worst slack in the report?",answer:-.23,tol:.01,unit:"ns",explain:"in2 \u2192 f1, captured on the falling edge at 5 ns.",try:!1},{type:"number",q:"Try it: add report_checks -from f1 -path_delay min. What is the hold slack f1 \u2192 f2?",answer:5.62,tol:.01,unit:"ns",explain:"Hold compares the launch at 5 with the capture edge at 0.",try:!0}]},{id:"ws-lab9",group:"STA workshop",tag:"Day 7",title:'Lab 9 \xB7 Debugging "no paths"',script:"run.tcl",files:{"run.tcl":`# Lab 9 (Day 7): the report says no paths were found.
# Exercise: debug why. Hints: compare -path_delay min with -path_delay max,
# and try check_setup -verbose and report_checks -unconstrained.

read_liberty s27_Late.lib
read_verilog s27.v
link_design s27
read_sdc s27.sdc
report_checks -from F1/CK -path_delay min
`,"s27.v":`module s27 (
G1,
G2,
clk_net1,
clk_net2,
reset_net,
G3,
G0,
G17);

//Start PIs
input G0;
input G1;
input G2;
input G3;
input clk_net1, clk_net2,reset_net;

//Start POs
output G17;

wire n1,n2,n3,n4,n5,n6,n7,n8,n9;
DFFR_X2 F1 (.D(G0), .CK(clk_net1), .Q(n1));
INV_X1 U3 (.A(n1), .ZN(n2));
INV_X1 U4 (.A(n2), .ZN(n3));
NAND2_X2 U6 (.ZN(n4), .A1(n1), .A2(n3));
NAND2_X2 U5 (.ZN(n5), .A1(n3), .A2(n2));
NOR2_X1 U7 (.ZN(n6), .A1(n4), .A2(n5));
DFFR_X2 F2 (.D(n6), .CK(clk_net2), .Q(G17));

endmodule


`,"s27.sdc":`create_clock -period 10 -name clk_net1 [get_ports clk_net1]
create_clock -period 10 -waveform {2 7} -name clk_net2 [get_ports clk_net2]
set_input_delay 0 -min -rise [get_ports G1] -clock clk_net1
set_input_delay 0 -min -fall [get_ports G1] -clock clk_net1
set_input_delay 0 -max -rise [get_ports G1] -clock clk_net1
set_input_delay 0 -max -fall [get_ports G1] -clock clk_net1
set_input_transition 5 -min -rise [get_ports G1] 
set_input_transition 5 -min -fall [get_ports G1] 
set_input_transition 5 -max -rise [get_ports G1] 
set_input_transition 5 -max -fall [get_ports G1] 
set_input_delay 0 -min -rise [get_ports G2] -clock clk_net1
set_input_delay 0 -min -fall [get_ports G2] -clock clk_net1
set_input_delay 0 -max -rise [get_ports G2] -clock clk_net1
set_input_delay 0 -max -fall [get_ports G2] -clock clk_net1
set_input_transition 5 -min -rise [get_ports G2] 
set_input_transition 5 -min -fall [get_ports G2] 
set_input_transition 5 -max -rise [get_ports G2] 
set_input_transition 5 -max -fall [get_ports G2] 
set_input_delay 0 -min -rise [get_ports clk_net1] -clock clk_net1
set_input_delay 0 -min -fall [get_ports clk_net1] -clock clk_net1
set_input_delay 0 -max -rise [get_ports clk_net1] -clock clk_net1
set_input_delay 0 -max -fall [get_ports clk_net1] -clock clk_net1
set_input_transition 5 -min -rise [get_ports clk_net1] 
set_input_transition 5 -min -fall [get_ports clk_net1] 
set_input_transition 5 -max -rise [get_ports clk_net1] 
set_input_transition 5 -max -fall [get_ports clk_net1] 
set_input_delay 0 -min -rise [get_ports reset_net] -clock clk_net1
set_input_delay 0 -min -fall [get_ports reset_net] -clock clk_net1
set_input_delay 0 -max -rise [get_ports reset_net] -clock clk_net1
set_input_delay 0 -max -fall [get_ports reset_net] -clock clk_net1
set_input_transition 5 -min -rise [get_ports reset_net] 
set_input_transition 5 -min -fall [get_ports reset_net] 
set_input_transition 5 -max -rise [get_ports reset_net] 
set_input_transition 5 -max -fall [get_ports reset_net] 
set_input_delay 0 -min -rise [get_ports G3] -clock clk_net1
set_input_delay 0 -min -fall [get_ports G3] -clock clk_net1
set_input_delay 0 -max -rise [get_ports G3] -clock clk_net1
set_input_delay 0 -max -fall [get_ports G3] -clock clk_net1
set_input_transition 5 -min -rise [get_ports G3] 
set_input_transition 5 -min -fall [get_ports G3] 
set_input_transition 5 -max -rise [get_ports G3] 
set_input_transition 5 -max -fall [get_ports G3] 
set_input_transition 5 -min -rise [get_ports G0] 
set_input_transition 5 -min -fall [get_ports G0] 
set_input_transition 5 -max -rise [get_ports G0] 
set_input_transition 5 -max -fall [get_ports G0] 
set_output_delay -2.1 -min -rise [get_ports G17] -clock clk_net1
set_output_delay -2.1 -min -fall [get_ports G17] -clock clk_net1
set_output_delay -1.2 -max -rise [get_ports G17] -clock clk_net1
set_output_delay -1.2 -max -fall [get_ports G17] -clock clk_net1
set_load -pin_load 4 [get_ports G17]
`},quiz:[{type:"choice",q:'Why does report_checks say "No paths found"?',options:["The clock is not defined","s27_Late.lib has no hold timing arcs for the flip-flops, so there are no hold (min) checks","F1 has no fanout","The input delays are missing"],answer:1,explain:"-path_delay min asks for hold checks, and the only library read has no hold constraints. Try -path_delay max: setup paths are found.",try:!1},{type:"number",q:"Try it: change -path_delay min to max. What is the setup slack?",answer:-216.32,tol:.01,unit:"ps",explain:"F1 \u2192 F2 captured at 2 (clk_net2 rises at 2).",try:!0},{type:"number",q:"Try it: read s27_Early.lib instead of s27_Late.lib and report -path_delay min. What is the hold slack?",answer:145.47,tol:.01,unit:"ps",explain:"The early library has the hold arcs, so the hold check appears.",try:!0}]},{id:"ws-lab15",group:"STA workshop",tag:"Day 8",title:"ibex \xB7 STA on a RISC-V core",script:"run.tcl",files:{"run.tcl":`# ibex lab (Day 8): the lowRISC ibex RISC-V core, synthesised to Sky130 HD (about 14,000 cells).
# The 2.3 MB netlist ibex_top.v loads from the server; edit this script and ibex_top.sdc.
# This is how a typical STA flow looks in a semiconductor company: paths are split into
# reg2reg, in2reg, reg2out and in2out groups. Why are reports separated this way?

# Lab 15: STA on the ibex RISC-V core (Sky130 HD, about 14,000 cells)
# Flow adapted from the lowRISC ibex synthesis scripts (Apache-2.0)
read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog ibex_top.v
link_design ibex_top
read_sdc ibex_top.sdc

# Check the constraints before trusting any report.
# Exercise: the core misses 10 ns. Edit ibex_top.sdc and find the period where reg2reg meets.
check_setup

# Split the paths the way a semiconductor team usually reviews them
set flops_d   [all_registers -edge_triggered -data_pins]
set flops_ck  [all_registers -edge_triggered -clock_pins]
set ins       [all_inputs -no_clocks]
set outs      [all_outputs]
group_path -name reg2reg -from $flops_ck -to $flops_d
group_path -name reg2out -from $flops_ck -to $outs
group_path -name in2reg  -from $ins      -to $flops_d
group_path -name in2out  -from $ins      -to $outs

# Number of paths per group: raise it to see more (the browser shows up to 20,000 lines)
set paths_per_group 3

foreach group {reg2reg reg2out in2reg in2out} {
  puts "\\n########## $group ##########"
  report_checks -path_group $group -group_path_count $paths_per_group -format end
  report_checks -path_group $group -group_path_count 1 -fields {slew cap fanout}
}

puts "\\n########## Summary ##########"
report_wns
report_tns
# Worst slew, capacitance and fanout. This netlist is straight out of synthesis:
# no placement and no buffering yet, so high-fanout nets such as rst_ni fail.
report_check_types -max_slew -max_capacitance -max_fanout
`,"ibex_top.sdc":`# Constraints for the ibex RISC-V core on Sky130 HD (units: ns, pF)
# Adapted from the lowRISC ibex synthesis flow (Apache-2.0)
create_clock -name clk_i -period 10.0 [get_ports clk_i]

set_driving_cell [all_inputs] -lib_cell sky130_fd_sc_hd__buf_2
set_load 0.010 [all_outputs]

set_output_delay -clock clk_i 3.0 [get_ports {instr_req_o instr_addr_o* data_req_o data_we_o data_be_o* data_addr_o* data_wdata_o*}]
set_output_delay -clock clk_i 2.0 [get_ports core_sleep_o]

set_input_delay -clock clk_i 0.0 [get_ports {test_en_i hart_id_i* boot_addr_i* fetch_enable_i}]
set_input_delay -clock clk_i 3.0 [get_ports {instr_gnt_i instr_rvalid_i instr_rdata_i* instr_err_i data_gnt_i data_rvalid_i data_rdata_i* data_err_i}]
set_input_delay -clock clk_i 1.0 [get_ports {irq_software_i irq_timer_i irq_external_i irq_fast_i* irq_nm_i debug_req_i}]
`},quiz:[{type:"number",q:"At a 10 ns clock, what is the worst negative slack (WNS)?",answer:-5.04,tol:.01,unit:"ns",explain:"From report_wns.",try:!1},{type:"choice",q:"Which path group has the worst slack?",options:["reg2reg","reg2out","in2reg","in2out"],answer:1,explain:"reg2out: instr_addr_o[30] misses by 5.04 ns (the 3 ns output delay eats into the cycle).",try:!1},{type:"number",q:"What is the worst reg2reg slack?",answer:-3.62,tol:.01,unit:"ns",explain:"Endpoint _24645_/D.",try:!1},{type:"choice",q:"Which input port fails max capacitance?",options:["clk_i","rst_ni","test_en_i","fetch_enable_i"],answer:1,explain:"rst_ni fans out to almost every flop. Without buffering (this netlist is unplaced), it sees 2.55 pF.",try:!1},{type:"number",q:"Try it: what is the smallest whole-number clock period (ns) at which reg2reg meets timing?",answer:14,tol:0,unit:"ns",explain:"At 13 ns reg2reg is \u22120.62; at 14 ns it is +0.38.",try:!0}]},{id:"so-s1",group:"Signoff STA",tag:"Signoff 1",title:"Analysis flow and timing summary",script:"run.tcl",files:{"run.tcl":`# Signoff 1: the analysis flow on a real placed-and-routed block (GCD, Sky130 HD, with SPEF).
# Load, link, constrain, annotate parasitics, validate, then summarise: WNS, TNS and violation counts.
# Exercises: read the summary first, then the worst setup and hold paths in detail.

# 1. Load the design: library, netlist, link, constraints, parasitics
read_liberty sky130hd_tt.lib.gz
read_verilog gcd_sky130hd.v
link_design gcd
read_sdc gcd.sdc
set_propagated_clock [all_clocks]
read_spef gcd_sky130hd.spef.gz

# 2. Validate before you trust any number
check_setup -verbose
report_parasitic_annotation

# 3. Timing summary: the first thing a signoff review looks at
puts "\\n### Summary"
report_wns
report_tns
report_worst_slack -max
report_worst_slack -min
puts "Setup violating endpoints: [llength [find_timing_paths -path_delay max -slack_max 0 -group_path_count 10000 -endpoint_path_count 1]]"
puts "Hold violating endpoints:  [llength [find_timing_paths -path_delay min -slack_max 0 -group_path_count 10000 -endpoint_path_count 1]]"

# 4. The worst setup and hold paths in detail
puts "\\n### Worst setup path"
report_checks -path_delay max -fields {slew cap fanout}
puts "\\n### Worst hold path"
report_checks -path_delay min
`,"gcd.sdc":`# Constraints for the GCD block (units: ns, pF)
set period 5.0
create_clock -name clk -period $period [get_ports clk]
set_clock_uncertainty 0.1 [get_clocks clk]

set io_delay [expr $period * 0.2]
set_input_delay  $io_delay -clock clk [delete_from_list [all_inputs] [get_ports clk]]
set_output_delay $io_delay -clock clk [all_outputs]
set_input_transition 0.1 [all_inputs]
set_load 0.01 [all_outputs]
`},quiz:[{type:"number",q:"What is the worst negative slack (WNS) for setup?",answer:-.36,tol:.01,unit:"ns",explain:"From report_wns: the path to output resp_msg[15].",try:!1},{type:"number",q:"What is the total negative slack (TNS)?",answer:-.99,tol:.01,unit:"ns",explain:"The sum of the negative slacks of all failing endpoints.",try:!1},{type:"number",q:"How many endpoints fail setup?",answer:11,tol:0,unit:"",explain:"The count line in the summary uses find_timing_paths with -slack_max 0.",try:!1},{type:"number",q:"What is the worst hold slack?",answer:.38,tol:.01,unit:"ns",explain:"report_worst_slack -min. No endpoint fails hold.",try:!1},{type:"number",q:"What is the clock network delay (propagated) at the launch flop of the worst setup path?",answer:.43,tol:.01,unit:"ns",explain:"With set_propagated_clock, OpenSTA computes the latency through the real clock tree and SPEF.",try:!1},{type:"number",q:"Try it: set the period to 5.5 in gcd.sdc. How many endpoints fail setup now?",answer:0,tol:0,unit:"",explain:"Every path gains 0.5 ns, but the output delay is 20% of the period, so outputs gain only 0.4 ns.",try:!0}]},{id:"so-s2",group:"Signoff STA",tag:"Signoff 2",title:"Validating constraints",script:"run.tcl",files:{"run.tcl":`# Signoff 2: a clean timing report means nothing if paths are not constrained.
# Exercises: use check_setup -verbose to find every problem in ctrl.sdc and the design,
# then fix the SDC and see which new paths appear.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog ctrl.v
link_design ctrl
read_sdc ctrl.sdc

# check_setup lists the problems in the design and the SDC
check_setup -verbose

# Timing looks clean... but which endpoints are actually timed?
report_checks -path_delay max -group_path_count 20 -format end
`,"ctrl.v":`// A small control block with two clock domains.
// It has some constraint problems on purpose: find them with check_setup.
module ctrl (clk_a, clk_b, rst_n, din, sel, set_n, clr_n, dout, flag, busy);
  input  clk_a, clk_b, rst_n, din, sel, set_n, clr_n;
  output dout, flag, busy;
  wire   q1, q2, q3, m1, d3, s_q, s_qn;

  sky130_fd_sc_hd__dfrtp_1 r1 (.D(din), .CLK(clk_a), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__mux2_1  u1 (.A0(q1), .A1(din), .S(sel), .X(m1));
  sky130_fd_sc_hd__dfrtp_1 r2 (.D(m1), .CLK(clk_a), .RESET_B(rst_n), .Q(q2));
  sky130_fd_sc_hd__inv_1   u2 (.A(q2), .Y(d3));
  sky130_fd_sc_hd__dfrtp_1 r3 (.D(d3), .CLK(clk_b), .RESET_B(rst_n), .Q(q3));
  sky130_fd_sc_hd__buf_1   u3 (.A(q2), .X(dout));
  sky130_fd_sc_hd__buf_1   u4 (.A(q3), .X(flag));
  // Set/reset latch built from two cross-coupled NAND gates
  sky130_fd_sc_hd__nand2_1 u5 (.A(set_n), .B(s_qn), .Y(s_q));
  sky130_fd_sc_hd__nand2_1 u6 (.A(clr_n), .B(s_q),  .Y(s_qn));
  sky130_fd_sc_hd__buf_1   u7 (.A(s_q), .X(busy));
endmodule
`,"ctrl.sdc":`# Constraints for ctrl (units: ns, pF). Something is missing...
create_clock -name clk_a -period 2.0 [get_ports clk_a]
set_input_delay 0.5 -clock clk_a [get_ports din]
set_output_delay 0.5 -clock clk_a [get_ports dout]
set_load 0.005 [all_outputs]
`},quiz:[{type:"number",q:"How many input ports are missing set_input_delay?",answer:5,tol:0,unit:"",explain:"clk_b, clr_n, rst_n, sel and set_n.",try:!1},{type:"choice",q:"Which register clock pin has no clock?",options:["r1/CLK","r2/CLK","r3/CLK","u5/A"],answer:2,explain:"r3 is clocked by port clk_b, but ctrl.sdc never creates a clock on clk_b.",try:!1},{type:"number",q:"How many endpoints are unconstrained?",answer:3,tol:0,unit:"",explain:"busy, flag and r3/D: none of them is checked against a clock.",try:!1},{type:"choice",q:"Which cells form the combinational loop?",options:["u1 and u2","u3 and u4","u5 and u6","r1 and u1"],answer:2,explain:"u5 and u6 are cross-coupled NAND gates. OpenSTA breaks the loop at a cut point so it can time the rest.",try:!1},{type:"number",q:"Try it: add create_clock -name clk_b -period 3.0 [get_ports clk_b] to ctrl.sdc and report_checks -from r2 -to r3. What is the setup slack?",answer:.54,tol:.01,unit:"ns",explain:"clk_a (2 ns) launches at 2 and clk_b (3 ns) captures at 3: the tightest edge pair across the two clocks.",try:!0},{type:"choice",q:"Try it: now also add set_clock_groups -asynchronous -group clk_a -group clk_b. What happens to r2 \u2192 r3?",options:["Slack gets better","Slack gets worse","The path is no longer timed: No paths found","It becomes a hold violation"],answer:2,explain:"Asynchronous clock groups tell STA the clocks have no phase relationship, so crossings are left to synchronizers and CDC checks.",try:!0}]},{id:"so-s3",group:"Signoff STA",tag:"Signoff 3",title:"Clocks: generated clocks, latency, uncertainty",script:"run.tcl",files:{"run.tcl":`# Signoff 3: clock definitions.
# Exercises: compare ideal and propagated clocks, find where each part of the clock latency
# comes from, and check the divided clock.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog clocks.v
link_design clocks
read_sdc clocks.sdc

report_clock_properties

puts "\\n### Ideal clocks: latency and uncertainty come from the SDC"
report_checks -from r1 -to r2 -path_delay min_max
report_checks -to r4/D

puts "\\n### Propagated clocks: latency comes from the real buffer tree"
set_propagated_clock [all_clocks]
report_checks -from r1 -to r2 -path_delay min_max
report_clock_skew
`,"clocks.v":`// Clock tree with a divide-by-2 clock.
// clk drives a small buffer tree; flop div toggles every cycle to make clk_div2.
module clocks (clk, rst_n, a, b, y, z);
  input  clk, rst_n, a, b;
  output y, z;
  wire   ck1, ck2, ck3, div_q, div_d, div_ck;
  wire   q1, q2, q3, q4, n1, n2, n3;

  // Clock tree: clk -> cb1 -> (cb2 -> launch flops, cb3 -> capture flops)
  sky130_fd_sc_hd__clkbuf_2 cb1 (.A(clk), .X(ck1));
  sky130_fd_sc_hd__clkbuf_1 cb2 (.A(ck1), .X(ck2));
  sky130_fd_sc_hd__clkbuf_1 cb3 (.A(ck1), .X(ck3));
  sky130_fd_sc_hd__clkbuf_1 cb4 (.A(ck3), .X(div_ck));

  // Divide-by-2: div toggles on every rising edge of clk
  sky130_fd_sc_hd__dfrtp_1 div (.D(div_d), .CLK(ck1), .RESET_B(rst_n), .Q(div_q));
  sky130_fd_sc_hd__inv_1   dinv (.A(div_q), .Y(div_d));

  // Fast domain: r1 -> logic -> r2
  sky130_fd_sc_hd__dfrtp_1 r1 (.D(a), .CLK(ck2), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__xor2_1  g1 (.A(q1), .B(b), .X(n1));
  sky130_fd_sc_hd__nand2_1 g2 (.A(n1), .B(q1), .Y(n2));
  sky130_fd_sc_hd__dfrtp_1 r2 (.D(n2), .CLK(ck3), .RESET_B(rst_n), .Q(q2));
  sky130_fd_sc_hd__buf_1   g3 (.A(q2), .X(y));

  // Slow domain on the divided clock: r2 -> r3 -> r4
  sky130_fd_sc_hd__dfrtp_1 r3 (.D(q2), .CLK(div_q), .RESET_B(rst_n), .Q(q3));
  sky130_fd_sc_hd__inv_1   g4 (.A(q3), .Y(n3));
  sky130_fd_sc_hd__dfrtp_1 r4 (.D(n3), .CLK(div_q), .RESET_B(rst_n), .Q(q4));
  sky130_fd_sc_hd__buf_1   g5 (.A(q4), .X(z));
endmodule
`,"clocks.sdc":`# Clock constraints (units: ns)
create_clock -name clk -period 2.0 -waveform {0 1.0} [get_ports clk]

# Latency from the clock source (PLL, off-chip) to the clk port
set_clock_latency -source 0.5 [get_clocks clk]
# Estimated clock tree delay, used while the clock is ideal
set_clock_latency 0.3 [get_clocks clk]
# Jitter + margin
set_clock_uncertainty -setup 0.15 [get_clocks clk]
set_clock_uncertainty -hold 0.05 [get_clocks clk]
set_clock_transition 0.1 [get_clocks clk]

# The divided clock, defined on the divider flop output
create_generated_clock -name clk_div2 -source [get_ports clk] -divide_by 2 [get_pins div/Q]

set_input_delay 0.4 -clock clk [get_ports {a b rst_n}]
set_output_delay 0.4 -clock clk [get_ports y]
set_output_delay 0.4 -clock clk_div2 [get_ports z]
set_load 0.005 [all_outputs]
`},quiz:[{type:"number",q:"What is the period of the generated clock clk_div2?",answer:4,tol:.001,unit:"ns",explain:"create_generated_clock -divide_by 2 on a 2 ns clock.",try:!1},{type:"number",q:"With ideal clocks, what clock network delay does the report show at r1/CLK?",answer:.8,tol:.01,unit:"ns",explain:"Source latency 0.5 + network latency 0.3 from the SDC.",try:!1},{type:"number",q:"With ideal clocks, what is the setup slack r1 \u2192 r2?",answer:1.16,tol:.01,unit:"ns",explain:"The 0.15 ns setup uncertainty is subtracted from the required time.",try:!1},{type:"choice",q:"After set_propagated_clock, which SDC latency is still used?",options:["Both source and network latency","Only the source latency (0.5)","Only the network latency (0.3)","Neither"],answer:1,explain:"Propagated clocks replace the estimated network latency with the real buffer tree, but the source latency (outside the chip) stays.",try:!1},{type:"number",q:"With propagated clocks, what is the setup slack r1 \u2192 r2?",answer:1.2,tol:.01,unit:"ns",explain:"Launch latency 0.66, capture 0.68: the small skew helps setup.",try:!1},{type:"number",q:"Try it: change -divide_by 2 to -divide_by 4. What is the setup slack r3 \u2192 r4?",answer:7.56,tol:.01,unit:"ns",explain:"clk_div2 now has an 8 ns period.",try:!0}]},{id:"so-s4",group:"Signoff STA",tag:"Signoff 4",title:"Timing exceptions",script:"run.tcl",files:{"run.tcl":`# Signoff 4: case analysis, false paths, multicycle paths and max delay.
# Exercises: exc.sdc has five steps commented out. Remove the # from one step at a time,
# run, and watch which path each exception changes.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog exc.v
link_design exc
read_sdc exc.sdc

puts "### Setup summary by endpoint"
report_checks -path_delay max -group_path_count 20 -format end
puts "\\n### Worst setup path"
report_checks -path_delay max
puts "\\n### Paths into r_b (setup and hold)"
report_checks -to r_b/D -path_delay min_max
puts "\\n### Feed-through in_x -> out_x"
report_checks -from in_x -to out_x
`,"exc.v":`// Paths that need timing exceptions:
//  - r_cfg0/r_cfg1 -> slow decode -> r_o    : configuration, written once at start-up
//  - r_a0/r_a1 -> 6-stage chain -> r_b       : designed to take two clock cycles
//  - in_x -> out_x                       : combinational feed-through
//  - test_mode selects a slow test path through the mux
module exc (clk, rst_n, cfg, d, in_x, test_mode, q, out_x);
  input  clk, rst_n, cfg, d, in_x, test_mode;
  output q, out_x;
  wire   c0, cx, c1, c2, c3, c4, a0, a1, b0, b1, b2, b3, b4, b5, b6, t0, t1, m0, o0, x1, x2;

  // Configuration register and its slow decode logic
  sky130_fd_sc_hd__dfrtp_1 r_cfg0 (.D(cfg), .CLK(clk), .RESET_B(rst_n), .Q(c0));
  sky130_fd_sc_hd__dfrtp_1 r_cfg1 (.D(c0),  .CLK(clk), .RESET_B(rst_n), .Q(cx));
  sky130_fd_sc_hd__xor2_1  cd1 (.A(c0), .B(cx), .X(c1));
  sky130_fd_sc_hd__xor2_1  cd2 (.A(c1), .B(c0), .X(c2));
  sky130_fd_sc_hd__xor2_1  cd3 (.A(c2), .B(c1), .X(c3));
  sky130_fd_sc_hd__xor2_1  cd4 (.A(c3), .B(c2), .X(c4));

  // Two-cycle arithmetic chain r_a -> r_b
  sky130_fd_sc_hd__dfrtp_1 r_a0 (.D(d),  .CLK(clk), .RESET_B(rst_n), .Q(a0));
  sky130_fd_sc_hd__dfrtp_1 r_a1 (.D(a0), .CLK(clk), .RESET_B(rst_n), .Q(a1));
  sky130_fd_sc_hd__xor2_1  ch1 (.A(a0), .B(a1), .X(b1));
  sky130_fd_sc_hd__xor2_1  ch2 (.A(b1), .B(a0), .X(b2));
  sky130_fd_sc_hd__xor2_1  ch3 (.A(b2), .B(b1), .X(b3));
  sky130_fd_sc_hd__xor2_1  ch4 (.A(b3), .B(b2), .X(b4));
  sky130_fd_sc_hd__xor2_1  ch5 (.A(b4), .B(b3), .X(b5));
  sky130_fd_sc_hd__xor2_1  ch6 (.A(b5), .B(b4), .X(b6));
  sky130_fd_sc_hd__dfrtp_1 r_b (.D(b6), .CLK(clk), .RESET_B(rst_n), .Q(b0));

  // Test path: in test mode r_b is sampled through a slow delay chain
  sky130_fd_sc_hd__clkdlybuf4s50_1 td1 (.A(b0), .X(t0));
  sky130_fd_sc_hd__clkdlybuf4s50_1 td2 (.A(t0), .X(t1));
  sky130_fd_sc_hd__mux2_1  mx (.A0(b0), .A1(t1), .S(test_mode), .X(m0));
  sky130_fd_sc_hd__and2_1  ao (.A(m0), .B(c4), .X(o0));
  sky130_fd_sc_hd__dfrtp_1 r_o (.D(o0), .CLK(clk), .RESET_B(rst_n), .Q(q));

  // Combinational feed-through
  sky130_fd_sc_hd__buf_2   f1 (.A(in_x), .X(x1));
  sky130_fd_sc_hd__buf_2   f2 (.A(x1), .X(x2));
  sky130_fd_sc_hd__buf_2   f3 (.A(x2), .X(out_x));
endmodule
`,"exc.sdc":`# Clock and I/O constraints (units: ns)
create_clock -name clk -period 1.0 [get_ports clk]
set_input_delay  0.1 -clock clk [get_ports {rst_n cfg d test_mode}]
set_output_delay 0.1 -clock clk [get_ports q]
set_load 0.005 [all_outputs]

# ---- Timing exceptions: remove the leading # from one step at a time, run, and compare ----
# Step 1: functional mode only (test_mode is tied low in the application)
# set_case_analysis 0 [get_ports test_mode]

# Step 2: the configuration registers are written once at start-up, so their paths never need to meet a clock cycle
# set_false_path -from [get_cells r_cfg*]

# Step 3: the r_a0/r_a1 -> r_b chain has two clock cycles by design
# set_multicycle_path 2 -setup -from [get_cells r_a*] -to [get_cells r_b]

# Step 4: ...and the hold check must move back to the original edge
# set_multicycle_path 1 -hold  -from [get_cells r_a*] -to [get_cells r_b]

# Step 5: the feed-through in_x -> out_x must be faster than 0.5 ns
# set_max_delay 0.5 -from [get_ports in_x] -to [get_ports out_x]
`},quiz:[{type:"number",q:"Before any exceptions, how many register or output endpoints fail setup (ignore RESET_B)?",answer:2,tol:0,unit:"",explain:"r_b/D and r_o/D.",try:!1},{type:"number",q:"Step 1 (case analysis on test_mode): what is the slack at r_o/D?",answer:-.41,tol:.01,unit:"ns",explain:"The slow test path through td1/td2 is no longer timed, but r_o is still failing.",try:!0},{type:"number",q:"Step 2 (false path from r_cfg*): what is the slack at r_o/D?",answer:.15,tol:.01,unit:"ns",explain:"The configuration decode no longer counts. r_o now meets through r_b.",try:!0},{type:"choice",q:"Step 2 also removed an endpoint from the summary. Which one, and why?",options:["r_a1/D: it is in a different clock","r_cfg1/D: it is also reached from r_cfg0, so -from r_cfg* covers it","q: outputs are always excluded","r_o/D: the false path removes it"],answer:1,explain:"A false path removes every path from the listed startpoints, including r_cfg0 \u2192 r_cfg1. Always check what an exception catches.",try:!0},{type:"number",q:"Step 3 (multicycle -setup 2 only): what is the setup slack r_a0 \u2192 r_b?",answer:.23,tol:.01,unit:"ns",explain:"Capture moves to the edge at 2 ns.",try:!0},{type:"number",q:"With only the setup multicycle path, what is the hold slack r_a0 \u2192 r_b?",answer:-.21,tol:.01,unit:"ns",explain:"The hold check moves with setup, to the edge at 1 ns, so a fast path now fails hold.",try:!0},{type:"number",q:"Step 4 (add multicycle -hold 1): what is the hold slack r_a0 \u2192 r_b?",answer:.79,tol:.01,unit:"ns",explain:"-hold 1 moves the hold check back to the edge at 0 ns.",try:!0},{type:"number",q:"Step 5 (set_max_delay 0.5 on in_x \u2192 out_x): what is the slack of the feed-through?",answer:.2,tol:.01,unit:"ns",explain:"Before step 5 the path had no constraint at all.",try:!0}]},{id:"so-s5",group:"Signoff STA",tag:"Signoff 5",title:"Reading reports and querying the design",script:"run.tcl",files:{"run.tcl":`# Signoff 5: get answers out of a design quickly.
# Exercises: endpoint summaries, a full path with input pins, paths through a cell,
# net and instance reports, and Tcl queries with get_cells and all_registers.

read_liberty sky130hd_tt.lib.gz
read_verilog gcd_sky130hd.v
link_design gcd
read_sdc gcd.sdc
set_propagated_clock [all_clocks]
read_spef gcd_sky130hd.spef.gz

# --- Query the design with Tcl ---
puts "Registers:      [llength [all_registers]]"
puts "Input ports:    [llength [all_inputs]]"
puts "Output ports:   [llength [all_outputs]]"
puts "maj3 cells:     [llength [get_cells -filter "ref_name =~ *maj3*"]]"

# --- Endpoint summary: one line per endpoint, sorted by slack ---
puts "\\n### Ten worst setup endpoints"
report_checks -path_delay max -group_path_count 10 -format end

# --- A path in full detail, with input pins and nets ---
puts "\\n### Worst path into a register"
report_checks -path_delay max -to [all_registers -data_pins] -fields {input_pins slew cap fanout}

# --- Paths through one cell ---
puts "\\n### Through _219_"
report_checks -through _219_/X -format summary

# --- Nets and instances ---
puts "\\n### Net and instance details"
report_net reset
report_instance _219_
`,"gcd.sdc":`# Constraints for the GCD block (units: ns, pF)
set period 5.0
create_clock -name clk -period $period [get_ports clk]
set_clock_uncertainty 0.1 [get_clocks clk]

set io_delay [expr $period * 0.2]
set_input_delay  $io_delay -clock clk [delete_from_list [all_inputs] [get_ports clk]]
set_output_delay $io_delay -clock clk [all_outputs]
set_input_transition 0.1 [all_inputs]
set_load 0.01 [all_outputs]
`},quiz:[{type:"number",q:"How many registers does the GCD block have?",answer:35,tol:0,unit:"",explain:"llength [all_registers].",try:!1},{type:"number",q:"How many maj3 (majority) cells are there?",answer:5,tol:0,unit:"",explain:'get_cells -filter "ref_name =~ *maj3*".',try:!1},{type:"number",q:"What is the slack of the worst endpoint that is a register (not an output)?",answer:-.05,tol:.01,unit:"ns",explain:"_418_/D in the endpoint summary.",try:!1},{type:"choice",q:"On the worst path into a register, which cell drives the largest fanout?",options:["_219_ (maj3_2)","_295_ (o31ai_4)","split1 (buf_4)","_414_ (dfxtp_4)"],answer:1,explain:"_295_/Y drives 11 loads, and its slew is 0.88 ns. split1 is a buffer the flow added to split that load.",try:!1},{type:"number",q:"How many loads does the net reset have?",answer:3,tol:0,unit:"",explain:"report_net reset: three input pins.",try:!1},{type:"number",q:"Try it: add report_checks -from _414_ -to _418_ -path_delay min. What is the hold slack?",answer:3.7,tol:.01,unit:"ns",explain:"The shortest path between the same two flops is still long, so hold is easy here.",try:!0}]},{id:"so-s6",group:"Signoff STA",tag:"Signoff 6",title:"On-chip variation and CRPR",script:"run.tcl",files:{"run.tcl":`# Signoff 6: OCV derates make late paths slower and early paths faster.
# Exercises: see how a derate turns a passing path into a failing one, and how much
# clock reconvergence pessimism removal (CRPR) gives back.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog ocv.v
link_design ocv
read_sdc ocv.sdc

puts "### 1. No derates"
report_checks -from r1 -to r2 -path_delay min_max -format full_clock_expanded

puts "\\n### 2. OCV: late paths 8% slower, early paths 8% faster"
set_timing_derate -early 0.92
set_timing_derate -late  1.08
report_checks -from r1 -to r2 -path_delay min_max -format full_clock_expanded

puts "\\n### 3. Same derates, CRPR switched off"
set sta_crpr_enabled 0
report_checks -from r1 -to r2 -path_delay min_max
set sta_crpr_enabled 1
`,"ocv.v":`// Launch and capture clocks share a common trunk (ct1, ct2), then split.
module ocv (clk, rst_n, d, q);
  input  clk, rst_n, d;
  output q;
  wire   t1, t2, la1, la2, ca1, ca2, q1, n1, n2, n3, n4;

  // Common clock trunk
  sky130_fd_sc_hd__clkbuf_4 ct1 (.A(clk), .X(t1));
  sky130_fd_sc_hd__clkbuf_4 ct2 (.A(t1),  .X(t2));
  // Launch branch
  sky130_fd_sc_hd__clkbuf_2 lb1 (.A(t2),  .X(la1));
  sky130_fd_sc_hd__clkbuf_2 lb2 (.A(la1), .X(la2));
  // Capture branch
  sky130_fd_sc_hd__clkbuf_2 cb1 (.A(t2),  .X(ca1));
  sky130_fd_sc_hd__clkbuf_2 cb2 (.A(ca1), .X(ca2));

  sky130_fd_sc_hd__dfrtp_1 r1 (.D(d),  .CLK(la2), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__nand2_1 g1 (.A(q1), .B(d),  .Y(n1));
  sky130_fd_sc_hd__xor2_1  g2 (.A(n1), .B(q1), .X(n2));
  sky130_fd_sc_hd__nor2_1  g3 (.A(n2), .B(n1), .Y(n3));
  sky130_fd_sc_hd__xor2_1  g4 (.A(n3), .B(n2), .X(n4));
  sky130_fd_sc_hd__dfrtp_1 r2 (.D(n4), .CLK(ca2), .RESET_B(rst_n), .Q(q));
endmodule
`,"ocv.sdc":`create_clock -name clk -period 1.05 [get_ports clk]
set_propagated_clock [get_clocks clk]
set_input_delay 0.1 -clock clk [get_ports {d rst_n}]
set_input_transition 0.05 [all_inputs]
`},quiz:[{type:"number",q:"Without derates, what is the setup slack r1 \u2192 r2?",answer:.04,tol:.01,unit:"ns",explain:"",try:!1},{type:"number",q:"With the 8% derates, what is the setup slack?",answer:-.05,tol:.01,unit:"ns",explain:"The launch path and data are 8% slower, the capture clock 8% faster.",try:!1},{type:"choice",q:"Which clock buffers are common to launch and capture?",options:["lb1 and lb2","cb1 and cb2","ct1 and ct2","All six"],answer:2,explain:"Both branches start after ct2. The common trunk ct1/ct2 cannot be slow and fast at the same time.",try:!1},{type:"number",q:"With derates, how much does CRPR give back on the setup path?",answer:.04,tol:.01,unit:"ns",explain:"The 'clock reconvergence pessimism' line: the late/early difference on ct1 and ct2.",try:!1},{type:"number",q:"With derates and CRPR switched off, what is the setup slack?",answer:-.09,tol:.01,unit:"ns",explain:"Section 3 of the report.",try:!1},{type:"number",q:"Try it: use -early 0.95 and -late 1.05 instead. What is the setup slack (CRPR on)?",answer:-.02,tol:.01,unit:"ns",explain:"A smaller derate, smaller penalty: still failing by 20 ps.",try:!0}]},{id:"so-s7",group:"Signoff STA",tag:"Signoff 7",title:"Latches and time borrowing",script:"run.tcl",files:{"run.tcl":`# Signoff 7: a latch lets a slow path borrow time from the next stage.
# Exercises: find how much time L1 borrows, the most it could borrow,
# and what happens when you limit borrowing.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog latch.v
link_design latch
read_sdc latch.sdc

puts "### Into the latch: r1 -> L1"
report_checks -to L1/D -format full_clock
puts "\\n### Out of the latch: L1 -> r2"
report_checks -from L1 -to r2/D -format full_clock
`,"latch.v":`// Flop -> logic -> latch -> logic -> flop.
// L1 is transparent while clk is low (sky130_fd_sc_hd__dlxtn: GATE_N).
module latch (clk, rst_n, d, e, q);
  input  clk, rst_n, d, e;
  output q;
  wire   q1, a1, a2, a3, a4, l1, b1, b2, b3;

  sky130_fd_sc_hd__dfrtp_1 r1 (.D(d), .CLK(clk), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__xor2_1  s1 (.A(q1), .B(e),  .X(a1));
  sky130_fd_sc_hd__xor2_1  s2 (.A(a1), .B(q1), .X(a2));
  sky130_fd_sc_hd__xor2_1  s3 (.A(a2), .B(a1), .X(a3));
  sky130_fd_sc_hd__xor2_1  s4 (.A(a3), .B(a2), .X(a4));
  sky130_fd_sc_hd__dlxtn_1 L1 (.D(a4), .GATE_N(clk), .Q(l1));
  sky130_fd_sc_hd__xor2_1  t1 (.A(l1), .B(e),  .X(b1));
  sky130_fd_sc_hd__xor2_1  t2 (.A(b1), .B(l1), .X(b2));
  sky130_fd_sc_hd__dfrtp_1 r2 (.D(b2), .CLK(clk), .RESET_B(rst_n), .Q(q));
endmodule
`,"latch.sdc":`create_clock -name clk -period 2.0 [get_ports clk]
set_input_delay 0.2 -clock clk [get_ports {d e rst_n}]
set_output_delay 0.2 -clock clk [get_ports q]
`},quiz:[{type:"choice",q:"When does latch L1 open (become transparent)?",options:["Rising edge at 0","Falling edge at 1.0 ns","Rising edge at 2.0 ns","Never: it is a flop"],answer:1,explain:"dlxtn is transparent while its GATE_N input (the clock) is low: from the falling edge at 1.0 ns.",try:!1},{type:"number",q:"How much time does L1 borrow?",answer:.18,tol:.01,unit:"ns",explain:"Data arrives at 1.18, after the latch opened at 1.0.",try:!1},{type:"number",q:"What is the most time L1 could borrow?",answer:.82,tol:.01,unit:"ns",explain:"Pulse width 1.00 minus the latch setup time 0.18.",try:!1},{type:"number",q:"What is the slack of the path L1 \u2192 r2?",answer:.06,tol:.01,unit:"ns",explain:"The borrowed 0.18 ns is given to this path as a later start.",try:!1},{type:"number",q:"Try it: add set_max_time_borrow 0.1 [get_cells L1] after read_sdc. What is the slack r1 \u2192 L1?",answer:-.08,tol:.01,unit:"ns",explain:"Borrowing is capped at 0.1, so the extra 0.08 ns becomes a violation.",try:!0},{type:"number",q:"With the 0.1 ns limit, what is the slack L1 \u2192 r2?",answer:.14,tol:.01,unit:"ns",explain:"Less borrowed time means this stage starts earlier.",try:!0}]},{id:"so-s8",group:"Signoff STA",tag:"Signoff 8",title:"Fixing violations with ECOs",script:"run.tcl",files:{"run.tcl":`# Signoff 8: fix one setup and one hold violation by editing the netlist in OpenSTA.
# Exercises: run as given, then remove the # from ECO 1 (cell upsizing) and ECO 2
# (a hold delay buffer). After the run, open eco_after.v to see the changed netlist.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog eco.v
link_design eco
read_sdc eco.sdc

puts "### Before the ECO"
report_checks -to r2/D -fields {cap slew}
report_checks -to r4/D -path_delay min

# ---- ECO 1 (setup): upsize the cells driving the heavy nets. Remove the # and run. ----
# replace_cell u1 sky130_fd_sc_hd__nand2_4
# replace_cell u3 sky130_fd_sc_hd__inv_4

# ---- ECO 2 (hold): add a delay buffer in front of r4/D. Remove the # and run. ----
# make_instance hold_buf sky130_fd_sc_hd__dlygate4sd3_1
# make_net q3_dly
# disconnect_pin q3 r4/D
# connect_pin q3 hold_buf/A
# connect_pin q3_dly hold_buf/X
# connect_pin q3_dly r4/D

puts "\\n### After the ECO"
report_checks -to r2/D -fields {cap slew}
report_checks -to r4/D -path_delay min_max
write_verilog eco_after.v
`,"eco.v":`// One setup violation and one hold violation to fix with ECOs.
module eco (clk, rst_n, d, q, h);
  input  clk, rst_n, d;
  output q, h;
  wire   q1, n1, n2, n3, n4, n5, ck_late1, ck_late2, q3;

  // Setup problem: weak cells drive long, heavily loaded nets
  sky130_fd_sc_hd__dfrtp_1 r1 (.D(d),  .CLK(clk), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__nand2_1 u1 (.A(q1), .B(d),  .Y(n1));
  sky130_fd_sc_hd__nor2_1  u2 (.A(n1), .B(q1), .Y(n2));
  sky130_fd_sc_hd__inv_1   u3 (.A(n2), .Y(n3));
  sky130_fd_sc_hd__nand2_1 u4 (.A(n3), .B(n1), .Y(n4));
  sky130_fd_sc_hd__inv_1   u5 (.A(n4), .Y(n5));
  sky130_fd_sc_hd__dfrtp_1 r2 (.D(n5), .CLK(clk), .RESET_B(rst_n), .Q(q));

  // Hold problem: r4's clock arrives late through two clock buffers
  sky130_fd_sc_hd__clkdlybuf4s50_1 cd1 (.A(clk), .X(ck_late1));
  sky130_fd_sc_hd__clkbuf_1 cd2 (.A(ck_late1), .X(ck_late2));
  sky130_fd_sc_hd__dfrtp_1 r3 (.D(d),  .CLK(clk), .RESET_B(rst_n), .Q(q3));
  sky130_fd_sc_hd__dfrtp_1 r4 (.D(q3), .CLK(ck_late2), .RESET_B(rst_n), .Q(h));
endmodule
`,"eco.sdc":`create_clock -name clk -period 1.0 [get_ports clk]
set_propagated_clock [get_clocks clk]
set_input_delay 0.1 -clock clk [get_ports {d rst_n}]
set_output_delay 0.1 -clock clk [get_ports {q h}]
set_input_transition 0.05 [all_inputs]
# Long wires on the setup path (as if placed far apart)
set_load 0.04 [get_nets {n1 n3}]
`},quiz:[{type:"number",q:"Before the ECO, what is the setup slack into r2?",answer:-.25,tol:.01,unit:"ns",explain:"",try:!1},{type:"number",q:"Before the ECO, what is the hold slack into r4?",answer:-.19,tol:.01,unit:"ns",explain:"r4's clock is 0.54 ns late, so new data from r3 arrives too soon.",try:!1},{type:"number",q:"What is the clock network delay at r4/CLK?",answer:.54,tol:.01,unit:"ns",explain:"Through cd1 (a clock delay buffer) and cd2.",try:!1},{type:"number",q:"Try it: apply ECO 1 (upsize u1 and u3). What is the setup slack into r2?",answer:.01,tol:.01,unit:"ns",explain:"Stronger drivers charge the heavy nets n1 and n3 faster.",try:!0},{type:"number",q:"Try it: apply ECO 2 (delay buffer before r4/D). What is the hold slack into r4?",answer:.33,tol:.01,unit:"ns",explain:"dlygate4sd3 adds about half a nanosecond on the data path.",try:!0},{type:"number",q:"After ECO 2, what is the setup slack r3 \u2192 r4? (It was 1.07 before.)",answer:.54,tol:.01,unit:"ns",explain:"A hold buffer always costs setup margin on the same path: check it still meets.",try:!0}]},{id:"so-s9",group:"Signoff STA",tag:"Signoff 9",title:"Multi-corner signoff",script:"run.tcl",files:{"run.tcl":`# Signoff 9: the GCD block at three corners: slow (ss), typical (tt) and fast (ff).
# Exercises: find which corner limits setup and which limits hold.

define_corners ss tt ff
read_liberty -corner ss sky130_fd_sc_hd__ss_100C_1v60.lib
read_liberty -corner tt sky130hd_tt.lib.gz
read_liberty -corner ff sky130_fd_sc_hd__ff_n40C_1v95.lib
read_verilog gcd_sky130hd.v
link_design gcd
read_sdc gcd.sdc
set_propagated_clock [all_clocks]
read_spef gcd_sky130hd.spef.gz

foreach corner {ss tt ff} {
  puts "\\n########## Corner $corner ##########"
  report_checks -corner $corner -path_delay max -format end -group_path_count 1
  report_checks -corner $corner -path_delay min -format end -group_path_count 1
}

puts "\\n### Worst setup path over all corners"
report_checks -path_delay max -format end -group_path_count 3
puts "\\n### Worst hold path over all corners"
report_checks -path_delay min
`,"gcd.sdc":`# Constraints for the GCD block (units: ns, pF)
set period 5.0
create_clock -name clk -period $period [get_ports clk]
set_clock_uncertainty 0.1 [get_clocks clk]

set io_delay [expr $period * 0.2]
set_input_delay  $io_delay -clock clk [delete_from_list [all_inputs] [get_ports clk]]
set_output_delay $io_delay -clock clk [all_outputs]
set_input_transition 0.1 [all_inputs]
set_load 0.01 [all_outputs]
`},quiz:[{type:"choice",q:"Which corner gives the worst setup slack?",options:["ss","tt","ff"],answer:0,explain:"Slow silicon, 100 \xB0C, 1.60 V: \u22124.86 ns.",try:!1},{type:"number",q:"What is the worst setup slack at the ss corner?",answer:-4.86,tol:.01,unit:"ns",explain:"",try:!1},{type:"choice",q:"At ss the worst endpoint is a register, but at tt it is an output. Why?",options:["The netlist changes per corner","Output paths have a fixed external delay, while register paths scale with cell delays","The ss library has no outputs","It is random"],answer:1,explain:"Register-to-register paths are all cell delay, so they grow most at the slow corner. The output delay (1 ns) does not scale.",try:!1},{type:"choice",q:"Which corner gives the worst hold slack?",options:["ss","tt","ff"],answer:2,explain:"Fast silicon: data arrives soonest.",try:!1},{type:"number",q:"What is the worst hold slack?",answer:.19,tol:.01,unit:"ns",explain:"_412_ \u2192 _412_ at the ff corner.",try:!1},{type:"number",q:"Try it: set the period to 11.0 in gcd.sdc. What is the worst setup slack at ss?",answer:.45,tol:.01,unit:"ns",explain:"At the slow corner this block needs roughly twice the typical-corner period.",try:!0}]},{id:"sdc-c1",group:"SDC & constraints",tag:"SDC 1",title:"Clock waveforms",script:"run.tcl",files:{"run.tcl":`# SDC 1: draw the waveforms of three clock definitions, then check them with OpenSTA.
# Exercises: sketch clk1, clk2 and clk3 on paper first. Then run and compare with
# report_clock_properties, and see which edges STA pairs for a path between two clocks.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog waves.v
link_design waves
read_sdc waves.sdc

puts "### Clock definitions: period and waveform (rising and falling edge times)"
report_clock_properties
puts "\\n### clk1 -> clk2: which edges does STA pair for setup?"
report_checks -from ra/CLK -to rb/D -path_delay max
puts "\\n### clk1 -> clk3"
report_checks -from ra/CLK -to rc/D -path_delay max
`,"waves.v":`// Three flops, each on its own clock port, and two cross-clock paths.
module waves (clk1, clk2, clk3, d, q2, q3);
  input  clk1, clk2, clk3, d;
  output q2, q3;
  wire   a, b, c;
  sky130_fd_sc_hd__dfxtp_1 ra (.D(d), .CLK(clk1), .Q(a));
  sky130_fd_sc_hd__dfxtp_1 rb (.D(a), .CLK(clk2), .Q(b));
  sky130_fd_sc_hd__dfxtp_1 rc (.D(a), .CLK(clk3), .Q(c));
  assign q2 = b;
  assign q3 = c;
endmodule
`,"waves.sdc":`# The three clock definitions from the workshop. Draw each waveform on paper first.
create_clock -name clk1 -period 14 [get_ports clk1]
create_clock -name clk2 -period 10 -waveform {2 7} [get_ports clk2]
create_clock -name clk3 -period 20 -waveform {2 4 12 16} [get_ports clk3]
`},quiz:[{type:"number",q:"At what time does clk2 rise?",answer:2,tol:0,unit:"ns",explain:"-waveform {2 7}: rise at 2 ns, fall at 7 ns, period 10 ns.",try:!1},{type:"number",q:"For how long is clk2 high in each period?",answer:5,tol:0,unit:"ns",explain:"From 2 to 7 ns.",try:!1},{type:"number",q:"How many rising edges does clk3 have in one 20 ns period?",answer:2,tol:0,unit:"",explain:"-waveform {2 4 12 16}: rise 2, fall 4, rise 12, fall 16. Two pulses per period.",try:!1},{type:"number",q:"At what time does clk1 fall?",answer:7,tol:0,unit:"ns",explain:"No -waveform: the default is a 50% duty cycle starting with a rise at 0.",try:!1},{type:"number",q:"For the path ra (clk1) \u2192 rb (clk2), at what time is the capture edge?",answer:2,tol:0,unit:"ns",explain:"STA finds the closest pair of edges: clk1 at 0 and clk2 at 2 (also 28 \u2192 30).",try:!1},{type:"choice",q:"Try it: change clk2 to -waveform {0 5} and run. The setup slack stays 1.61 ns. Why?",options:["The waveform is ignored","clk1 at 28 ns and clk2 at 30 ns are still only 2 ns apart, and STA always uses the tightest pair","Setup only uses clk1","clk2 is not used"],answer:1,explain:"With periods 14 and 10, the edges line up every 70 ns. STA checks every pair in that window and keeps the tightest.",try:!0}]},{id:"sdc-c2",group:"SDC & constraints",tag:"SDC 2",title:"Clocks through a clock mux",script:"run.tcl",files:{"run.tcl":`# SDC 2: define all the clocks in a design where C1 and C2 share flops through a clock mux.
# Exercises: run as given and count the launch/capture clock pairs, then try each step in clkmux.sdc.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog clkmux.v
link_design clkmux
read_sdc clkmux.sdc

puts "### Which clocks reach the flops?"
report_clock_properties
puts "\\n### Every launch/capture clock pair (worst slack over all endpoints)"
foreach launch {C1 C2} {
  foreach capture {C1 C2} {
    set p [find_timing_paths -from [get_clocks $launch] -to [get_clocks $capture] -path_delay max]
    if {[llength $p]} { puts "$launch -> $capture : slack [format %.2f [get_property [lindex $p 0] slack]]" } else { puts "$launch -> $capture : not timed" }
  }
}
puts "\\n### Worst setup path"
report_checks -path_delay max
`,"clkmux.v":`// Two clock sources C1 and C2 reach the same flops through a clock mux.
module clkmux (c1, c2, sel, d, q);
  input  c1, c2, sel, d;
  output q;
  wire   clk, a, b1, b2, b3, q;
  sky130_fd_sc_hd__mux2_1  cmux (.A0(c1), .A1(c2), .S(sel), .X(clk));
  sky130_fd_sc_hd__dfxtp_1 r1 (.D(d),  .CLK(clk), .Q(a));
  sky130_fd_sc_hd__inv_1   g1 (.A(a),  .Y(b1));
  sky130_fd_sc_hd__inv_1   g2 (.A(b1), .Y(b2));
  sky130_fd_sc_hd__inv_1   g3 (.A(b2), .Y(b3));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(b3), .CLK(clk), .Q(q));
endmodule
`,"clkmux.sdc":`# Define all the clocks in this design: C1 and C2 both reach r1 and r2 through cmux.
create_clock -name C1 -period 10 [get_ports c1]
create_clock -name C2 -period 6  [get_ports c2]
set_input_delay 1 -clock C1 [get_ports {d sel}]

# Only one clock passes the mux at a time. Without telling STA, it also times
# paths launched by C1 and captured by C2 (and the other way round).
# Remove the # from ONE of these steps at a time and run again:
# Step 1: the two clocks never coexist at the flops
# set_clock_groups -logically_exclusive -group C1 -group C2
# Step 2: or analyse one mode only (sel = 0 selects C1)
# set_case_analysis 0 [get_ports sel]
`},quiz:[{type:"number",q:"Run as given. How many launch/capture clock pairs does STA time?",answer:4,tol:0,unit:"",explain:"C1\u2192C1, C1\u2192C2, C2\u2192C1 and C2\u2192C2: STA assumes both clocks can be on the flops at once.",try:!1},{type:"number",q:"What is the worst setup slack (from the C1 \u2192 C2 pair)?",answer:.9,tol:.01,unit:"ns",explain:"d arrives 1 ns after a C1 edge and is captured by the C2 edge 1 ns later: a pairing that can never happen through the mux.",try:!1},{type:"number",q:"Try it: apply Step 1 (set_clock_groups -logically_exclusive). How many pairs are timed now?",answer:2,tol:0,unit:"",explain:"Only C1\u2192C1 and C2\u2192C2 remain.",try:!0},{type:"number",q:"Try it: use Step 2 (set_case_analysis 0 on sel) instead. How many pairs are timed?",answer:1,tol:0,unit:"",explain:"Only C1 passes the mux, so only C1\u2192C1 is timed: one mode at a time.",try:!0},{type:"choice",q:"When would you use -physically_exclusive instead of -logically_exclusive?",options:["When the clocks have different periods","When the two clocks can never exist on the chip at the same time at all, such as two definitions on the same port","When the clocks are asynchronous","Never"],answer:1,explain:"Logically exclusive: both exist, but not on the same logic at once (a mux). Physically exclusive: they never exist together; crosstalk between them is not possible either.",try:!1}]},{id:"sdc-c3",group:"SDC & constraints",tag:"SDC 3",title:"Where to define a generated clock",script:"run.tcl",files:{"run.tcl":`# SDC 3: a clock doubler (CLK XOR a 3 ns delayed CLK). CLK period = 10 ns.
# Exercises: find where the generated clock is defined and read its waveform,
# then add set_propagated_clock and compare.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog doubler.v
link_design doubler
read_sdc doubler.sdc

puts "### Clocks"
report_clock_properties
puts "\\n### CLK -> CLKOUT (r0 -> r1)"
report_checks -from r0/CLK -to r1/D -path_delay max
puts "\\n### CLKOUT -> CLKOUT (r1 -> r2)"
report_checks -from r1/CLK -to r2/D -path_delay max
`,"doubler.v":`// Clock doubler: CLK XOR a delayed copy of CLK gives a pulse on every edge of CLK.
// dly1/dly2 are the "Delay" block. r0 runs on CLK, r1 and r2 on CLKOUT.
module doubler (CLK, d, q);
  input  CLK, d;
  output q;
  wire   dl1, dclk, CLKOUT, a, b, c;
  sky130_fd_sc_hd__dlygate4sd3_1 dly1 (.A(CLK), .X(dl1));
  sky130_fd_sc_hd__dlygate4sd3_1 dly2 (.A(dl1), .X(dclk));
  sky130_fd_sc_hd__xor2_1        XOR1 (.A(CLK), .B(dclk), .X(CLKOUT));
  sky130_fd_sc_hd__dfxtp_1 r0 (.D(d), .CLK(CLK),    .Q(a));
  sky130_fd_sc_hd__dfxtp_1 r1 (.D(a), .CLK(CLKOUT), .Q(b));
  sky130_fd_sc_hd__inv_1   g1 (.A(b), .Y(c));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(c), .CLK(CLKOUT), .Q(q));
endmodule
`,"doubler.sdc":`# CLK period = 10 ns. The delay block is 3 ns, so CLKOUT pulses high for 3 ns
# after every rising and every falling edge of CLK.
create_clock -name CLK -period 10 [get_ports CLK]
set_input_delay 1 -clock CLK [get_ports d]

# A generated clock goes on the pin where the new waveform appears: the XOR output.
# Edges 1, 2, 3 of CLK are at 0, 5 and 10 ns. CLKOUT rises at edge 1 (0 ns), falls 3 ns
# later, rises at edge 2 (5 ns), falls 3 ns later, and repeats from edge 3 (10 ns).
create_generated_clock -name CLKOUT -source [get_ports CLK] \\
  -edges {1 1 2} -edge_shift {0 3 0} [get_pins XOR1/X]
`},quiz:[{type:"number",q:"What is the period of CLKOUT?",answer:5,tol:0,unit:"ns",explain:"A pulse on every edge of the 10 ns CLK: twice the frequency.",try:!1},{type:"number",q:"At what time does CLKOUT fall in its first period?",answer:3,tol:0,unit:"ns",explain:"-edge_shift {0 3 0}: rise at edge 1 (0 ns), fall 3 ns later.",try:!1},{type:"choice",q:"Where is the generated clock defined?",options:["On the CLK port","On the output of the delay cell","On the XOR output XOR1/X, where the new waveform appears","On r1/CLK"],answer:2,explain:"Define a generated clock where its waveform is created, so every flop downstream sees it.",try:!1},{type:"number",q:"What is the setup slack of r0 (CLK) \u2192 r1 (CLKOUT)?",answer:4.62,tol:.01,unit:"ns",explain:"Launch CLK at 0, capture CLKOUT at 5.",try:!1},{type:"number",q:"Try it: add set_propagated_clock [all_clocks] at the end of doubler.sdc. What is the r0 \u2192 r1 setup slack now?",answer:4.77,tol:.01,unit:"ns",explain:"The capture clock now arrives 0.12 ns late through the XOR, which helps setup.",try:!0}]},{id:"sdc-c4",group:"SDC & constraints",tag:"SDC 4",title:"Divided clocks from a flop",script:"run.tcl",files:{"run.tcl":`# SDC 4: FF1 divides CLK by 2. GCLK1 comes from Q, GCLK2 from the inverted output Q_N.
# Exercises: read the generated clock waveforms, then write GCLK1 with -edges instead.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog divider.v
link_design divider
read_sdc divider.sdc

puts "### Clocks"
report_clock_properties
puts "\\n### GCLK1 -> GCLK2 (r1 -> r2)"
report_checks -from r1/CLK -to r2/D -path_delay max
puts "\\n### GCLK2 -> CLK (r2 -> r3)"
report_checks -from r2/CLK -to r3/D -path_delay max
`,"divider.v":`// FF1 divides CLK by 2: its Q is GCLK1 and its inverted output Q_N is GCLK2.
module divider (CLK, d, q);
  input  CLK, d;
  output q;
  wire   GCLK1, GCLK2, a, b;
  sky130_fd_sc_hd__dfxbp_1 FF1 (.D(GCLK2), .CLK(CLK), .Q(GCLK1), .Q_N(GCLK2));
  sky130_fd_sc_hd__dfxtp_1 r1  (.D(d), .CLK(GCLK1), .Q(a));
  sky130_fd_sc_hd__dfxtp_1 r2  (.D(a), .CLK(GCLK2), .Q(b));
  sky130_fd_sc_hd__dfxtp_1 r3  (.D(b), .CLK(CLK),   .Q(q));
endmodule
`,"divider.sdc":`create_clock -name CLK -period 10 [get_ports CLK]
set_input_delay 1 -clock CLK [get_ports d]

# GCLK1 changes on every rising edge of CLK: half the frequency, same phase.
create_generated_clock -name GCLK1 -source [get_ports CLK] -divide_by 2 [get_pins FF1/Q]
# GCLK2 is the same divided clock, inverted.
create_generated_clock -name GCLK2 -source [get_ports CLK] -divide_by 2 -invert [get_pins FF1/Q_N]

# Exercise: the same GCLK1 written with -edges (edges 1, 3 and 5 of CLK):
# create_generated_clock -name GCLK1 -source [get_ports CLK] -edges {1 3 5} [get_pins FF1/Q]
`},quiz:[{type:"number",q:"What is the period of GCLK1?",answer:20,tol:0,unit:"ns",explain:"-divide_by 2 of a 10 ns clock.",try:!1},{type:"number",q:"At what time does GCLK2 rise?",answer:10,tol:0,unit:"ns",explain:"GCLK2 is GCLK1 inverted: waveform {10 20}.",try:!1},{type:"number",q:"For r1 (GCLK1) \u2192 r2 (GCLK2), at what time is the capture edge?",answer:10,tol:0,unit:"ns",explain:"GCLK1 rises at 0, GCLK2 next rises at 10: half of the divided period.",try:!1},{type:"choice",q:"Try it: define GCLK1 with -edges {1 3 5} instead of -divide_by 2. What changes?",options:["The period doubles again","Nothing: edges 1, 3 and 5 of CLK (0, 10, 20 ns) give the same 20 ns waveform","GCLK1 becomes inverted","STA reports an error"],answer:1,explain:"-edges lists the source edges for rise, fall and the next rise. It can describe any divided waveform.",try:!0}]},{id:"sdc-c5",group:"SDC & constraints",tag:"SDC 5",title:"Clock relationships",script:"run.tcl",files:{"run.tcl":`# SDC 5: define all the clock relationships. C1 and C2 reach F1/F2 through a mux and
# also clock F3 and F4 directly. Exercises: count the clock pairs STA times, then apply each step.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog relate.v
link_design relate
read_sdc relate.sdc

puts "### Clocks"
report_clock_properties
puts "\\n### Every launch/capture clock pair that STA times (worst setup slack)"
set n 0
foreach launch {C1 C2 GC1 GC2} {
  foreach capture {C1 C2 GC1 GC2} {
    set p [find_timing_paths -from [get_clocks $launch] -to [get_clocks $capture] -path_delay max]
    if {[llength $p]} { incr n; puts [format "%-4s -> %-4s : slack %.2f" $launch $capture [get_property [lindex $p 0] slack]] }
  }
}
puts "Clock pairs timed: $n"
`,"relate.v":`// C1 and C2 reach F1/F2 through a clock mux, and also clock F3 (C1) and F4 (C2) directly.
module relate (c1, c2, sel, d1, d3, q2, q4);
  input  c1, c2, sel, d1, d3;
  output q2, q4;
  wire   gclk, a1, b1, a3, b3, x;
  sky130_fd_sc_hd__mux2_1  cmux (.A0(c1), .A1(c2), .S(sel), .X(gclk));
  sky130_fd_sc_hd__dfxtp_1 F1 (.D(d1), .CLK(gclk), .Q(a1));
  sky130_fd_sc_hd__inv_1   u1 (.A(a1), .Y(b1));
  sky130_fd_sc_hd__dfxtp_1 F2 (.D(b1), .CLK(gclk), .Q(q2));
  sky130_fd_sc_hd__dfxtp_1 F3 (.D(d3), .CLK(c1),   .Q(a3));
  sky130_fd_sc_hd__nand2_1 u3 (.A(a3), .B(a1), .Y(b3));     // F1 also feeds the F3 -> F4 logic
  sky130_fd_sc_hd__dfxtp_1 F4 (.D(b3), .CLK(c2),   .Q(q4));
endmodule
`,"relate.sdc":`# C1 and C2 come from two different PLLs: they are asynchronous to each other.
create_clock -name C1 -period 10 [get_ports c1]
create_clock -name C2 -period 8  [get_ports c2]
set_input_delay 1 -clock C1 [get_ports {d1 d3 sel}]

# Clocks at the mux output, one per input. They can never be on gclk at the same time.
create_generated_clock -name GC1 -source [get_ports c1] -master_clock C1 -combinational [get_pins cmux/X]
create_generated_clock -name GC2 -source [get_ports c2] -master_clock C2 -combinational -add [get_pins cmux/X]

# Define the clock relationships. Remove the # from each step in turn and run again.
# Step 1: GC1 and GC2 never exist together on gclk
# set_clock_groups -logically_exclusive -group GC1 -group GC2
# Step 2: the C1 family and the C2 family are asynchronous
# set_clock_groups -asynchronous -group {C1 GC1} -group {C2 GC2}
`},quiz:[{type:"number",q:"Run as given. How many launch/capture clock pairs are timed?",answer:10,tol:0,unit:"",explain:"Without relationships, STA times every pair it can find.",try:!1},{type:"number",q:"Try it: apply Step 1 only. How many pairs are timed?",answer:8,tol:0,unit:"",explain:"GC1 \u2192 GC2 and GC2 \u2192 GC1 are gone: they are never on gclk together.",try:!0},{type:"number",q:"Try it: apply Steps 1 and 2. How many pairs are timed?",answer:5,tol:0,unit:"",explain:"Every pair between the C1 family and the C2 family is cut as asynchronous.",try:!0},{type:"choice",q:"Why does the GC2 definition need -add?",options:["To make it faster","Without -add, a second clock on the same pin replaces the first one","-add makes it asynchronous","It is optional"],answer:1,explain:"Two clocks on one pin need -add, or GC1 would be removed.",try:!1},{type:"choice",q:"F3 (C1) \u2192 F4 (C2) is a real crossing. What does this design still need?",options:["Nothing","A synchronizer in the design: the SDC only stops STA from timing it","A multicycle path","A clock mux"],answer:1,explain:"set_clock_groups -asynchronous hides the path from STA. Making it safe is the designer's job (see the CDC lab).",try:!1}]},{id:"sdc-c6",group:"SDC & constraints",tag:"SDC 6",title:"Clock sense",script:"run.tcl",files:{"run.tcl":`# SDC 6: the clock passes through XOR gates. One passes it, one inverts it, one is non-unate.
# Exercises: find the clock sense at each flop, then fix the non-unate one with set_clock_sense.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog sense.v
link_design sense
read_sdc sense.sdc

puts "### Paths r1 -> r2 (XOR1 clock -> XOR2 clock)"
report_checks -from r1/CLK -to r2/D -path_delay max
puts "\\n### Paths r2 -> r3 (XOR2 clock -> XOR3 clock): every capture edge"
report_checks -from r2/CLK -to r3/D -path_delay max -group_path_count 4 -endpoint_path_count 4 -format end
puts "\\n### Worst r2 -> r3 path in detail"
report_checks -from r2/CLK -to r3/D -path_delay max
`,"sense.v":`// CLK passes through XOR gates before it reaches the flops.
//   XOR1: other input tied to 0 -> the clock passes unchanged (positive unate)
//   XOR2: other input tied to 1 -> the clock is inverted (negative unate)
//   XOR3: other input is a control signal -> STA cannot tell (non-unate)
module sense (CLK, inv_en, d, q);
  input  CLK, inv_en, d;
  output q;
  wire   lo, hi, c1, c2, c3, a, b;
  sky130_fd_sc_hd__conb_1  tie  (.HI(hi), .LO(lo));
  sky130_fd_sc_hd__xor2_1  XOR1 (.A(CLK), .B(lo),     .X(c1));
  sky130_fd_sc_hd__xor2_1  XOR2 (.A(CLK), .B(hi),     .X(c2));
  sky130_fd_sc_hd__xor2_1  XOR3 (.A(CLK), .B(inv_en), .X(c3));
  sky130_fd_sc_hd__dfxtp_1 r1 (.D(d), .CLK(c1), .Q(a));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(a), .CLK(c2), .Q(b));
  sky130_fd_sc_hd__dfxtp_1 r3 (.D(b), .CLK(c3), .Q(q));
endmodule
`,"sense.sdc":`create_clock -name CLK -period 10 [get_ports CLK]
set_input_delay 1 -clock CLK [get_ports {d inv_en}]

# XOR3 is non-unate: STA propagates both a rising and a falling clock edge through it.
# In this design inv_en is 0 in normal operation, so the clock is NOT inverted.
# Step 1: remove the # to tell STA the sense of the clock at XOR3's output
# set_clock_sense -positive -clocks [get_clocks CLK] [get_pins XOR3/X]
`},quiz:[{type:"choice",q:"Which clock does r2 see?",options:["CLK","CLK' (inverted), because XOR2's other input is tied to 1","No clock","Both senses"],answer:1,explain:"OpenSTA propagates the tie-cell constant and knows XOR2 inverts the clock.",try:!1},{type:"number",q:"What is the setup slack of r1 \u2192 r2?",answer:4.62,tol:.01,unit:"ns",explain:"r1 launches on the CLK rise at 0, r2 captures on CLK' at 5 (the CLK fall).",try:!1},{type:"number",q:"How many setup checks does report_checks list for r3/D?",answer:4,tol:0,unit:"",explain:"XOR3 is non-unate, so r3 is clocked by both a rising and a falling CLK edge.",try:!1},{type:"number",q:"Try it: apply Step 1 (set_clock_sense -positive). How many checks are listed for r3/D now?",answer:2,tol:0,unit:"",explain:"Only the positive sense reaches r3.",try:!0}]},{id:"sdc-c7",group:"SDC & constraints",tag:"SDC 7",title:"False paths: -through and -from",script:"run.tcl",files:{"run.tcl":`# SDC 7: identify the paths each set_false_path command removes.
# Exercises: predict first, then remove the # from one step at a time and run.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog fp.v
link_design fp
read_sdc fp.sdc

puts "### Every flop-to-flop path that is still timed"
set n 0
foreach from {F1 F2 F3} {
  foreach to {F4 F5 F6 F7} {
    set p [find_timing_paths -from [get_pins $from/CLK] -to [get_pins $to/D] -path_delay max]
    if {[llength $p]} { incr n; puts [format "%s -> %s  slack %.2f" $from $to [get_property [lindex $p 0] slack]] }
  }
}
puts "Paths timed: $n"
`,"fp.v":`// Seven flops and three gates. Which paths does each false path remove?
//   F1 -> U1/A ; F2 -> U1/B and U2/A ; F3 -> U2/B
//   U1/Z -> U3 -> F4 ; U1/Z -> F5 ; U2/Z -> F6 and F7
module fp (CK, d1, d2, d3, q4, q5, q6, q7);
  input  CK, d1, d2, d3;
  output q4, q5, q6, q7;
  wire   f1, f2, f3, z1, z2, o3;
  sky130_fd_sc_hd__dfxtp_1 F1 (.D(d1), .CLK(CK), .Q(f1));
  sky130_fd_sc_hd__dfxtp_1 F2 (.D(d2), .CLK(CK), .Q(f2));
  sky130_fd_sc_hd__dfxtp_1 F3 (.D(d3), .CLK(CK), .Q(f3));
  sky130_fd_sc_hd__and2_1  U1 (.A(f1), .B(f2), .X(z1));
  sky130_fd_sc_hd__and2_1  U2 (.A(f2), .B(f3), .X(z2));
  sky130_fd_sc_hd__inv_1   U3 (.A(z1), .Y(o3));
  sky130_fd_sc_hd__dfxtp_1 F4 (.D(o3), .CLK(CK), .Q(q4));
  sky130_fd_sc_hd__dfxtp_1 F5 (.D(z1), .CLK(CK), .Q(q5));
  sky130_fd_sc_hd__dfxtp_1 F6 (.D(z2), .CLK(CK), .Q(q6));
  sky130_fd_sc_hd__dfxtp_1 F7 (.D(z2), .CLK(CK), .Q(q7));
endmodule
`,"fp.sdc":`create_clock -name CK -period 2 [get_ports CK]
# (no input or output delays: only the flop-to-flop paths are timed here)

# Remove the # from ONE false path at a time, run, and see which paths disappear.
# Step 1
# set_false_path -through [get_pins U1/A]
# Step 2
# set_false_path -through [get_pins U2/X]
# Step 3
# set_false_path -from [get_clocks CK]
`},quiz:[{type:"number",q:"Run as given. How many flop-to-flop paths are timed?",answer:8,tol:0,unit:"",explain:"F1\u2192F4, F1\u2192F5, F2\u2192F4..F7 and F3\u2192F6, F3\u2192F7.",try:!1},{type:"number",q:"Try it: Step 1, -through U1/A. How many paths remain?",answer:6,tol:0,unit:"",explain:"Only paths that pass through U1/A are removed: F1\u2192F4 and F1\u2192F5.",try:!0},{type:"choice",q:"After Step 1, why are F2 \u2192 F4 and F2 \u2192 F5 still timed?",options:["They are not","They go through U1/B, not U1/A","F2 is on another clock","False paths only apply to inputs"],answer:1,explain:"-through a pin removes only the paths that pass through that exact pin.",try:!1},{type:"number",q:"Try it: Step 2 alone, -through U2/X (the slide's U2/Z). How many paths remain?",answer:4,tol:0,unit:"",explain:"Every path through U2's output: F2\u2192F6, F2\u2192F7, F3\u2192F6, F3\u2192F7.",try:!0},{type:"number",q:"Try it: Step 3 alone, -from [get_clocks CK]. How many paths remain?",answer:0,tol:0,unit:"",explain:"Every path launched by CK is false. Use clock-level false paths with care.",try:!0}]},{id:"sdc-c8",group:"SDC & constraints",tag:"SDC 8",title:"False paths on clock edges",script:"run.tcl",files:{"run.tcl":`# SDC 8: -rise_from and -fall_to refer to edges of the clock at its source.
# Exercises: predict which of paths A to D each command removes, then run each step.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog edges.v
link_design edges
read_sdc edges.sdc

puts "### Paths A to D: still timed?"
set n 0
foreach {name from to} {A FF1 FF2  B FF3 FF4  C FF5 FF6  D FF7 FF8} {
  set p [find_timing_paths -from [get_pins $from/CLK] -to [get_pins $to/D] -path_delay max]
  if {[llength $p]} { incr n; puts [format "Path %s (%s -> %s): slack %.2f" $name $from $to [get_property [lindex $p 0] slack]] } else { puts "Path $name ($from -> $to): not timed" }
}
puts "Paths timed: $n"
puts "\\n### Path B in detail: which CLK edges launch and capture it?"
report_checks -from FF3/CLK -to FF4/D -path_delay max
`,"edges.v":`// Four paths on one clock. CLKB is CLK through an inverter.
//   Path A: FF1 (CLK)  -> FF2 (CLK)
//   Path B: FF3 (CLK)  -> FF4 (CLKB)
//   Path C: FF5 (CLKB) -> FF6 (CLK)
//   Path D: FF7 (CLKB) -> FF8 (CLKB)
module edges (CLK, da, db, dc, dd, qa, qb, qc, qd);
  input  CLK, da, db, dc, dd;
  output qa, qb, qc, qd;
  wire   CLKB, a, b, c, d, ai, bi, ci, di;
  sky130_fd_sc_hd__clkinv_1 ci0 (.A(CLK), .Y(CLKB));
  sky130_fd_sc_hd__dfxtp_1 FF1 (.D(da), .CLK(CLK),  .Q(a));
  sky130_fd_sc_hd__inv_1   ia  (.A(a),  .Y(ai));
  sky130_fd_sc_hd__dfxtp_1 FF2 (.D(ai), .CLK(CLK),  .Q(qa));
  sky130_fd_sc_hd__dfxtp_1 FF3 (.D(db), .CLK(CLK),  .Q(b));
  sky130_fd_sc_hd__inv_1   ib  (.A(b),  .Y(bi));
  sky130_fd_sc_hd__dfxtp_1 FF4 (.D(bi), .CLK(CLKB), .Q(qb));
  sky130_fd_sc_hd__dfxtp_1 FF5 (.D(dc), .CLK(CLKB), .Q(c));
  sky130_fd_sc_hd__inv_1   ic  (.A(c),  .Y(ci));
  sky130_fd_sc_hd__dfxtp_1 FF6 (.D(ci), .CLK(CLK),  .Q(qc));
  sky130_fd_sc_hd__dfxtp_1 FF7 (.D(dd), .CLK(CLKB), .Q(d));
  sky130_fd_sc_hd__inv_1   id  (.A(d),  .Y(di));
  sky130_fd_sc_hd__dfxtp_1 FF8 (.D(di), .CLK(CLKB), .Q(qd));
endmodule
`,"edges.sdc":`create_clock -name CLK -period 10 [get_ports CLK]

# -rise_from / -fall_to refer to the edge of the CLOCK at its source, not at the flop pin.
# A flop on CLKB is triggered by the rising edge of CLKB, which is the FALLING edge of CLK.
# Remove the # from one step at a time:
# Step 1
# set_false_path -rise_from [get_clocks CLK]
# Step 2
# set_false_path -fall_to [get_clocks CLK]
`},quiz:[{type:"choice",q:"Path B: on which CLK edge is it captured?",options:["Rise at 10","Fall at 5: FF4 sees CLKB, the inverted clock","Rise at 0","Fall at 15"],answer:1,explain:"The report shows CLK' (rise edge) at 5 ns, which is the falling edge of CLK.",try:!1},{type:"choice",q:"Try it: Step 1, -rise_from CLK. Which paths are removed?",options:["A and C","A and B","B and D","C and D"],answer:1,explain:"A and B are launched by flops on CLK, so by the rising edge of CLK.",try:!0},{type:"choice",q:"Try it: Step 2, -fall_to CLK. Which paths are removed?",options:["A and B","B and D","C and D","A and C"],answer:1,explain:"B and D are captured by flops on CLKB, so by the falling edge of CLK.",try:!0},{type:"number",q:"How many paths remain after Step 2?",answer:2,tol:0,unit:"",explain:"A and C.",try:!1}]},{id:"sdc-c9",group:"SDC & constraints",tag:"SDC 9",title:"Multicycle paths: -start and -end",script:"run.tcl",files:{"run.tcl":`# SDC 9: a multicycle path counts cycles of the launch clock (-start) or the capture clock (-end).
# Exercises: apply each step and read the new capture edge, then fix the hold checks.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog mcp.v
link_design mcp
read_sdc mcp.sdc

puts "### slow -> fast (rs1 -> rf1): setup"
report_checks -from rs1/CLK -to rf1/D -path_delay max
puts "\\n### fast -> slow (rf2 -> rs2): setup"
report_checks -from rf2/CLK -to rs2/D -path_delay max
puts "\\n### Hold checks for both"
report_checks -from rs1/CLK -to rf1/D -path_delay min -format end
report_checks -from rf2/CLK -to rs2/D -path_delay min -format end
`,"mcp.v":`// A slow clock domain (clk_s, 20 ns) and a fast one (clk_f, 5 ns).
//   rs1 (slow) -> rf1 (fast) and rf2 (fast) -> rs2 (slow)
module mcp (clk_s, clk_f, d, q);
  input  clk_s, clk_f, d;
  output q;
  wire   a, b, c, x, y;
  sky130_fd_sc_hd__dfxtp_1 rs1 (.D(d), .CLK(clk_s), .Q(a));
  sky130_fd_sc_hd__inv_1   g1  (.A(a), .Y(x));
  sky130_fd_sc_hd__dfxtp_1 rf1 (.D(x), .CLK(clk_f), .Q(b));
  sky130_fd_sc_hd__dfxtp_1 rf2 (.D(b), .CLK(clk_f), .Q(c));
  sky130_fd_sc_hd__inv_1   g2  (.A(c), .Y(y));
  sky130_fd_sc_hd__dfxtp_1 rs2 (.D(y), .CLK(clk_s), .Q(q));
endmodule
`,"mcp.sdc":`# The two clocks come from the same PLL and are synchronous.
create_clock -name clk_s -period 20 [get_ports clk_s]
create_clock -name clk_f -period 5  [get_ports clk_f]
set_input_delay 1 -clock clk_s [get_ports d]

# A multicycle path counts cycles of ONE clock:
#   -end   (the default for setup) counts cycles of the capture clock
#   -start counts cycles of the launch clock
# Remove the # from one step at a time:
# Step 1: slow -> fast, 3 fast (capture) cycles
# set_multicycle_path 3 -setup -end   -from [get_clocks clk_s] -to [get_clocks clk_f]
# Step 2: fast -> slow, 2 fast (launch) cycles
# set_multicycle_path 2 -setup -start -from [get_clocks clk_f] -to [get_clocks clk_s]
# Step 3: what if Step 2 used -end instead? (2 slow cycles)
# set_multicycle_path 2 -setup -end   -from [get_clocks clk_f] -to [get_clocks clk_s]
# Step 4: a setup multicycle also moves the hold check. Move it back (hold = setup - 1),
#         counting cycles of the same clock as the setup multicycle:
# set_multicycle_path 2 -hold -end   -from [get_clocks clk_s] -to [get_clocks clk_f]
# set_multicycle_path 1 -hold -start -from [get_clocks clk_f] -to [get_clocks clk_s]
`},quiz:[{type:"number",q:"Run as given. What is the setup slack of rs1 (slow) \u2192 rf1 (fast)?",answer:4.58,tol:.01,unit:"ns",explain:"Launch 0, capture at the next fast edge, 5 ns.",try:!1},{type:"number",q:"Try it: Step 1 (3 cycles, -end). What is the setup slack now?",answer:14.58,tol:.01,unit:"ns",explain:"The capture edge moves to 15 ns: 3 fast (capture clock) cycles.",try:!0},{type:"number",q:"With Step 1 only, what is the hold slack of rs1 \u2192 rf1?",answer:-9.66,tol:.01,unit:"ns",explain:"The hold check moved along with the setup check, to 10 ns. That is why a setup multicycle path needs a hold multicycle too.",try:!1},{type:"number",q:"Try it: Step 2 (2 cycles, -start). What is the setup slack of rf2 \u2192 rs2?",answer:9.58,tol:.01,unit:"ns",explain:"The fast launch clock moves back one cycle: 10 ns of budget instead of 5.",try:!0},{type:"number",q:"Try it: use Step 3 (-end) instead of Step 2. What is the setup slack?",answer:24.58,tol:.01,unit:"ns",explain:"-end counts slow capture cycles: 2 \xD7 20 ns. Probably not what the designer meant.",try:!0},{type:"number",q:"Try it: apply Steps 1, 2 and 4. What is the hold slack of both paths?",answer:.34,tol:.01,unit:"ns",explain:"The hold checks are back on their original edges.",try:!0}]},{id:"sdc-c10",group:"SDC & constraints",tag:"SDC 10",title:"Exception priority",script:"run.tcl",files:{"run.tcl":`# SDC 10: when two exceptions cover the same path, which one applies?
# Exercises: answer Q1 and Q2 on paper, then remove the # from each pair and check.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog fp.v
link_design fp
read_sdc prio.sdc

puts "### Every flop-to-flop path that is still timed"
set n 0
foreach from {F1 F2 F3} {
  foreach to {F4 F5 F6 F7} {
    set p [find_timing_paths -from [get_pins $from/CLK] -to [get_pins $to/D] -path_delay max]
    if {[llength $p]} { incr n; puts [format "%s -> %s  slack %.2f" $from $to [get_property [lindex $p 0] slack]] }
  }
}
puts "Paths timed: $n"
puts "\\n### Paths into F4 in detail"
report_checks -to F4/D -path_delay max -group_path_count 4 -endpoint_path_count 4 -format end
`,"fp.v":`// Seven flops and three gates. Which paths does each false path remove?
//   F1 -> U1/A ; F2 -> U1/B and U2/A ; F3 -> U2/B
//   U1/Z -> U3 -> F4 ; U1/Z -> F5 ; U2/Z -> F6 and F7
module fp (CK, d1, d2, d3, q4, q5, q6, q7);
  input  CK, d1, d2, d3;
  output q4, q5, q6, q7;
  wire   f1, f2, f3, z1, z2, o3;
  sky130_fd_sc_hd__dfxtp_1 F1 (.D(d1), .CLK(CK), .Q(f1));
  sky130_fd_sc_hd__dfxtp_1 F2 (.D(d2), .CLK(CK), .Q(f2));
  sky130_fd_sc_hd__dfxtp_1 F3 (.D(d3), .CLK(CK), .Q(f3));
  sky130_fd_sc_hd__and2_1  U1 (.A(f1), .B(f2), .X(z1));
  sky130_fd_sc_hd__and2_1  U2 (.A(f2), .B(f3), .X(z2));
  sky130_fd_sc_hd__inv_1   U3 (.A(z1), .Y(o3));
  sky130_fd_sc_hd__dfxtp_1 F4 (.D(o3), .CLK(CK), .Q(q4));
  sky130_fd_sc_hd__dfxtp_1 F5 (.D(z1), .CLK(CK), .Q(q5));
  sky130_fd_sc_hd__dfxtp_1 F6 (.D(z2), .CLK(CK), .Q(q6));
  sky130_fd_sc_hd__dfxtp_1 F7 (.D(z2), .CLK(CK), .Q(q7));
endmodule
`,"prio.sdc":`create_clock -name CK -period 2 [get_ports CK]

# When several exceptions cover the same path, only one wins:
#   1. set_false_path beats set_max_delay, which beats set_multicycle_path
#   2. between two of the same kind, the more specific one wins:
#      -from pin > -from clock, and -from and -to together beat -to alone
# Q1: remove the # from both lines of Q1 and run. Then put them back and try Q2.
# Q1
# set_false_path -from [get_pins F1/CLK]
# set_multicycle_path 2 -setup -to [get_pins F4/D]
# Q2
# set_multicycle_path 2 -setup -to [get_pins F4/D]
# set_multicycle_path 4 -setup -from [get_pins F2/CLK] -to [get_pins F4/D]
`},quiz:[{type:"choice",q:"Q1: the false path from F1 and the multicycle path to F4 both cover F1 \u2192 F4. Which applies?",options:["The multicycle path","The false path: a false path has the highest priority","Both","Neither"],answer:1,explain:"Priority: false path, then max/min delay, then multicycle path.",try:!1},{type:"number",q:"Try it: apply Q1. How many paths are timed?",answer:6,tol:0,unit:"",explain:"F1 \u2192 F4 and F1 \u2192 F5 are false.",try:!0},{type:"number",q:"With Q1, what is the setup slack of F2 \u2192 F4?",answer:3.45,tol:.01,unit:"ns",explain:"The multicycle path to F4 still applies to F2: 2 cycles of 2 ns.",try:!1},{type:"number",q:"Try it: apply Q2. What is the setup slack of F2 \u2192 F4?",answer:7.45,tol:.01,unit:"ns",explain:"-from F2 -to F4 is more specific than -to F4 alone, so 4 cycles apply.",try:!0},{type:"number",q:"With Q2, what is the setup slack of F1 \u2192 F4?",answer:3.47,tol:.01,unit:"ns",explain:"Only the -to F4 multicycle covers F1: 2 cycles.",try:!1}]},{id:"sdc-c11",group:"SDC & constraints",tag:"SDC 11",title:"Merging mode constraints",script:"run.tcl",files:{"run.tcl":`# SDC 11: one SDC that covers two modes. SEL selects FF1 (mode1) or FF2 (mode2).
# Exercises: run mode1, mode2 and merged (change the first line) and compare the paths.

# Change the mode here (mode1, mode2 or merged) and run again.
set mode mode1

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog modes.v
link_design modes
read_sdc $mode.sdc

puts "### Mode: $mode"
puts "### Paths into FF3"
foreach from {FF1 FF2} {
  set p [find_timing_paths -from [get_pins $from/CLK] -to [get_pins FF3/D] -path_delay max]
  if {[llength $p]} { puts [format "%s -> FF3  slack %.2f" $from [get_property [lindex $p 0] slack]] } else { puts "$from -> FF3  not timed" }
}
puts "\\n### Worst setup path"
report_checks -path_delay max -to FF3/D
`,"modes.v":`// FF1 and FF2 reach FF3 through a mux. SEL is a mode pin: it is set once and never changes.
//   mode1: SEL = 0, FF1 -> FF3 (short path)
//   mode2: SEL = 1, FF2 -> FF3 (long path)
module modes (CLK, SEL, d1, d2, q);
  input  CLK, SEL, d1, d2;
  output q;
  wire   a, b, b1, b4, m;
  sky130_fd_sc_hd__dfxtp_1 FF1 (.D(d1), .CLK(CLK), .Q(a));
  sky130_fd_sc_hd__dfxtp_1 FF2 (.D(d2), .CLK(CLK), .Q(b));
  sky130_fd_sc_hd__dlygate4sd3_1 y1 (.A(b),  .X(b1));
  sky130_fd_sc_hd__dlygate4sd3_1 y2 (.A(b1), .X(b4));
  sky130_fd_sc_hd__mux2_1  mx (.A0(a), .A1(b4), .S(SEL), .X(m));
  sky130_fd_sc_hd__dfxtp_1 FF3 (.D(m), .CLK(CLK), .Q(q));
endmodule
`,"mode1.sdc":`# mode1.sdc
create_clock -name CLK -period 2.0 [get_ports CLK]
set_case_analysis 0 [get_ports SEL]
`,"mode2.sdc":`# mode2.sdc
create_clock -name CLK -period 2.0 [get_ports CLK]
set_case_analysis 1 [get_ports SEL]
`,"merged.sdc":`# merged.sdc: one set of constraints that covers mode1 AND mode2.
# Both modes use the same clock, so it is defined once.
create_clock -name CLK -period 2.0 [get_ports CLK]
# SEL is 0 in mode1 and 1 in mode2, so no set_case_analysis: both mux inputs are timed.
# SEL itself never toggles while the chip runs, so paths from SEL are false.
set_false_path -from [get_ports SEL]
`},quiz:[{type:"number",q:"mode1: what is the setup slack of FF1 \u2192 FF3?",answer:1.35,tol:.01,unit:"ns",explain:"SEL = 0, so only the FF1 input of the mux is timed.",try:!1},{type:"number",q:"Try it: mode2. What is the setup slack of FF2 \u2192 FF3?",answer:.26,tol:.01,unit:"ns",explain:"The long path through two delay cells.",try:!0},{type:"choice",q:"Try it: merged. Which paths are timed?",options:["Only FF1 \u2192 FF3","Only FF2 \u2192 FF3","Both, with the same slacks as in mode1 and mode2","Neither"],answer:2,explain:"The merged SDC covers both modes in one run: every path that is real in at least one mode.",try:!0},{type:"choice",q:"Why does merged.sdc set a false path from SEL?",options:["SEL is a clock","SEL is a static mode pin: it never toggles during operation, so its timing does not matter","To hide a violation","It is required by OpenSTA"],answer:1,explain:"Without a case value, SEL \u2192 FF3 becomes a timed path. It is static, so it is false.",try:!1}]},{id:"sdc-c12",group:"SDC & constraints",tag:"SDC 12",title:"Promoting IP constraints",script:"run.tcl",files:{"run.tcl":`# SDC 12: the IP team's SDC must be promoted to the SoC, where names and clocks change.
# Exercises: time the IP alone (level ip), then the SoC, and apply each promoted step.

# Set level to "ip" to time the IP alone with ip.sdc, or "soc" for the SoC with soc.sdc.
set level soc

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog soc.v
if {$level eq "ip"} { link_design ip; read_sdc ip.sdc; set u2 U2_reg } \\
else                { link_design soc; read_sdc soc.sdc; set u2 uIP/U2_reg }

puts "### Level: $level"
puts "### Clocks"
report_clock_properties
puts "\\n### Into U2_reg (the multicycle path)"
report_checks -to $u2/D -path_delay max -group_path_count 4 -endpoint_path_count 4 -format end
puts "\\n### Through B and Z (the false path)"
if {$level eq "ip"} { set p [find_timing_paths -from [get_ports B] -to [get_ports Z] -path_delay max] } \\
else                { set p [find_timing_paths -through [get_pins uIP/B] -through [get_pins uIP/Z] -path_delay max] }
if {[llength $p]} { puts [format "timed, worst slack %.2f" [get_property [lindex $p 0] slack]] } else { puts "not timed (false path)" }
puts "\\n### Worst setup paths"
report_checks -path_delay max -group_path_count 5 -format end
`,"soc.v":`// An IP block and the SoC that uses it.
//   IP:  B -> logic -> Z (a feed-through), and clk -> U1_reg -> logic -> U2_reg
//   SoC: B_top -> logic -> uIP/B, uIP/Z -> logic -> top_reg; the IP clock comes from a
//        mux of sysclk (scanmode = 0) and testclk (scanmode = 1).
module ip (clk, B, din, Z, dout);
  input  clk, B, din;
  output Z, dout;
  wire   z1, u1q, m1, m2, m3, m4;
  sky130_fd_sc_hd__dlygate4sd3_1 fb1 (.A(B),  .X(z1));
  sky130_fd_sc_hd__dlygate4sd3_1 fb2 (.A(z1), .X(Z));
  sky130_fd_sc_hd__dfxtp_1 U1_reg (.D(din), .CLK(clk), .Q(u1q));
  sky130_fd_sc_hd__dlygate4sd3_1 mc1 (.A(u1q), .X(m1));
  sky130_fd_sc_hd__dlygate4sd3_1 mc2 (.A(m1),  .X(m2));
  sky130_fd_sc_hd__dlygate4sd3_1 mc3 (.A(m2),  .X(m3));
  sky130_fd_sc_hd__dlygate4sd3_1 mc4 (.A(m3),  .X(m4));
  sky130_fd_sc_hd__dfxtp_1 U2_reg (.D(m4), .CLK(clk), .Q(dout));
endmodule

module soc (sysclk, testclk, scanmode, B_top, din, dout, q);
  input  sysclk, testclk, scanmode, B_top, din;
  output dout, q;
  wire   clk, b1, bin, z, z1, zq;
  sky130_fd_sc_hd__mux2_1 cmux (.A0(sysclk), .A1(testclk), .S(scanmode), .X(clk));
  sky130_fd_sc_hd__dlygate4sd3_1 bt1 (.A(B_top), .X(b1));
  sky130_fd_sc_hd__dlygate4sd3_1 bt2 (.A(b1),    .X(bin));
  ip uIP (.clk(clk), .B(bin), .din(din), .Z(z), .dout(dout));
  sky130_fd_sc_hd__dlygate4sd3_1 zt1 (.A(z), .X(z1));
  sky130_fd_sc_hd__dfxtp_1 top_reg (.D(z1), .CLK(clk), .Q(q));
endmodule
`,"ip.sdc":`# SDC for IP, written by the IP team (ports and clock names of module ip)
create_clock clk -period 6 -name clk
set_input_delay 0 -clock clk [get_ports {B din}]
set_output_delay 0 -clock clk [get_ports {Z dout}]
set_false_path -from [get_ports B] -to [get_ports Z]
set_multicycle_path 2 -setup -from [get_clocks clk] -to [get_cells U2_reg]
set_multicycle_path 1 -hold  -from [get_clocks clk] -to [get_cells U2_reg]
`,"soc.sdc":`# SoC constraints. The IP's clock and exceptions must be PROMOTED to the SoC:
# the names change (ports become hierarchical pins, clk becomes sysclk).
create_clock -name sysclk  -period 6  [get_ports sysclk]
create_clock -name testclk -period 20 [get_ports testclk]
set_input_delay 0 -clock sysclk [get_ports {B_top din}]
set_output_delay 0 -clock sysclk [get_ports dout]

# Promoted constraints: remove the # from each step in turn and run again.
# Step 1: functional mode only (scanmode = 0 selects sysclk)
# set_case_analysis 0 [get_ports scanmode]
# Step 2: the IP's "-from B -to Z" false path. B and Z are no longer start or end
#         points at the SoC level, so the promoted version uses -through.
# set_false_path -through [get_pins uIP/B] -through [get_pins uIP/Z]
# Step 3: the IP's multicycle path into U2_reg, with the SoC clock name
# set_multicycle_path 2 -setup -from [get_clocks sysclk] -to [get_cells uIP/U2_reg]
# set_multicycle_path 1 -hold  -from [get_clocks sysclk] -to [get_cells uIP/U2_reg]
`},quiz:[{type:"number",q:"level ip: what is the setup slack into U2_reg (multicycle 2)?",answer:9.47,tol:.01,unit:"ns",explain:"12 ns of budget for a 2.4 ns path.",try:!1},{type:"number",q:"level soc, no steps: what is the worst setup slack in the report?",answer:-.8,tol:.01,unit:"ns",explain:"top_reg in the testclk group: without case analysis, sysclk and testclk both pass the mux and STA times paths between them.",try:!1},{type:"number",q:"Try it: Step 1. What is the setup slack into uIP/U2_reg?",answer:3.47,tol:.01,unit:"ns",explain:"Only sysclk now, but the IP's multicycle path is not promoted yet: one 6 ns cycle.",try:!0},{type:"choice",q:"Why does the promoted false path use -through uIP/B -through uIP/Z, not -from/-to?",options:["-from is not allowed","uIP/B and uIP/Z are hierarchical pins, not start or end points: paths only pass through them at the SoC","-through is faster","To include more paths"],answer:1,explain:"A port of the IP is a startpoint at IP level but only a pin on the path at SoC level.",try:!1},{type:"number",q:"Try it: Steps 1 to 3. What is the setup slack into uIP/U2_reg?",answer:9.47,tol:.01,unit:"ns",explain:"The same as the IP alone: the constraints were promoted correctly.",try:!0}]},{id:"sdc-c13",group:"SDC & constraints",tag:"SDC 13",title:"I/O constraints with a virtual clock",script:"run.tcl",files:{"run.tcl":`# SDC 13: input and output delays for a block between two chips, with -max and -min values.
# Exercises: read the setup and hold checks on both ports, then launch din on the falling edge.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog io.v
link_design io
read_sdc io.sdc

puts "### Input path: setup and hold"
report_checks -from din -path_delay min_max
puts "\\n### Output path: setup and hold"
report_checks -to dout -path_delay min_max
`,"io.v":`// A block between two chips. din comes from an upstream chip, dout goes to a downstream chip.
// Both chips run on the same board clock as this block.
module io (clk, din, dout);
  input  clk, din;
  output dout;
  wire   a, a1, b, b1;
  sky130_fd_sc_hd__dlygate4sd3_1 ib (.A(din), .X(a1));     // input logic
  sky130_fd_sc_hd__dfxtp_1 r_in  (.D(a1), .CLK(clk), .Q(a));
  sky130_fd_sc_hd__dfxtp_1 r_out (.D(a),  .CLK(clk), .Q(b));
  sky130_fd_sc_hd__dlygate4sd3_1 ob (.A(b), .X(b1));        // output logic
  sky130_fd_sc_hd__buf_1   obuf (.A(b1), .X(dout));
endmodule
`,"io.sdc":`# The block clock, and a VIRTUAL clock for the other chips (no pin in this design).
create_clock -name clk   -period 4 [get_ports clk]
create_clock -name board -period 4

# Upstream chip: its flop launches din on board; din takes 1.2 to 2.5 ns to arrive.
set_input_delay  -max 2.5 -clock board [get_ports din]
set_input_delay  -min 1.2 -clock board [get_ports din]
# Downstream chip: needs dout 1.0 ns before its clock edge (setup) and 0.3 ns after it (hold).
set_output_delay -max 1.0  -clock board [get_ports dout]
set_output_delay -min -0.3 -clock board [get_ports dout]
set_load 0.01 [get_ports dout]

# Step 1: the upstream chip launches on the FALLING edge of board. Remove the # :
# set_input_delay -max 2.5 -clock board -clock_fall [get_ports din]
# set_input_delay -min 1.2 -clock board -clock_fall [get_ports din]
`},quiz:[{type:"number",q:"What is the setup slack of the input path din \u2192 r_in?",answer:.86,tol:.01,unit:"ns",explain:"din arrives 2.5 ns (max) after board, plus 0.52 ns of logic, against the 4 ns clk edge.",try:!1},{type:"number",q:"What is the hold slack of the input path?",answer:1.75,tol:.01,unit:"ns",explain:"Uses the -min input delay, 1.2 ns.",try:!1},{type:"number",q:"What is the setup slack of the output path to dout?",answer:2.06,tol:.01,unit:"ns",explain:"Required at 4 \u2212 1.0 = 3.0 ns.",try:!1},{type:"number",q:"What is the hold slack of the output path?",answer:.62,tol:.01,unit:"ns",explain:"-min \u22120.3 means dout must not change until 0.3 ns after the edge.",try:!1},{type:"number",q:"Try it: Step 1, launch din on the falling edge of board. What is the setup slack now?",answer:-1.14,tol:.01,unit:"ns",explain:"din now starts at 2 + 2.5 = 4.5 ns: later than the next clk edge.",try:!0},{type:"choice",q:"Why use a virtual clock (board) for the I/O delays?",options:["It is faster","The other chips' flops are not in this design; a virtual clock models their clock with its own latency and edges","OpenSTA requires it","To avoid hold checks"],answer:1,explain:"It keeps I/O constraints separate from the internal clock tree, so propagated clock latency inside the block is not applied to the outside world.",try:!1}]},{id:"sdc-c14",group:"SDC & constraints",tag:"SDC 14",title:"Driving cells, loads and design rules",script:"run.tcl",files:{"run.tcl":`# SDC 14: describe the environment around the block and set design rule limits.
# Exercises: find the slew and capacitance violations, then try each fix.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog env.v
link_design env
read_sdc env.sdc

puts "### Design rule violations (slew and capacitance)"
report_check_types -max_slew -max_capacitance -violators
puts "\\n### Path from en"
report_checks -from en -path_delay max -fields {slew cap fanout}
puts "\\n### Path to dout"
report_checks -to dout -path_delay max -fields {slew cap fanout}
`,"env.v":`// One input drives a big fanout; one output drives a long board trace.
module env (clk, en, din, dout);
  input  clk, en, din;
  output dout;
  wire   a, e, q0, q1, q2, q3, q4, q5, q6, q7, o;
  sky130_fd_sc_hd__dfxtp_1 rin (.D(din), .CLK(clk), .Q(a));
  sky130_fd_sc_hd__and2_1 g0 (.A(a), .B(en), .X(q0));
  sky130_fd_sc_hd__and2_1 g1 (.A(a), .B(en), .X(q1));
  sky130_fd_sc_hd__and2_1 g2 (.A(a), .B(en), .X(q2));
  sky130_fd_sc_hd__and2_1 g3 (.A(a), .B(en), .X(q3));
  sky130_fd_sc_hd__and2_1 g4 (.A(a), .B(en), .X(q4));
  sky130_fd_sc_hd__and2_1 g5 (.A(a), .B(en), .X(q5));
  sky130_fd_sc_hd__and2_1 g6 (.A(a), .B(en), .X(q6));
  sky130_fd_sc_hd__and2_1 g7 (.A(a), .B(en), .X(q7));
  sky130_fd_sc_hd__dfxtp_1 r0 (.D(q0), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r1 (.D(q1), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(q2), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r3 (.D(q3), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r4 (.D(q4), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r5 (.D(q5), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r6 (.D(q6), .CLK(clk), .Q());
  sky130_fd_sc_hd__dfxtp_1 r7 (.D(q7), .CLK(clk), .Q(o));
  sky130_fd_sc_hd__buf_1  ob (.A(o), .X(dout));
endmodule
`,"env.sdc":`create_clock -name clk -period 3 [get_ports clk]
set_input_delay  0.5 -clock clk [get_ports {din en}]
set_output_delay 0.5 -clock clk [get_ports dout]

# The environment around the block. Without these, inputs switch in zero time and outputs drive nothing.
# en comes from a weak driver in the next block; din has a 0.2 ns slew.
set_driving_cell -lib_cell sky130_fd_sc_hd__inv_1 -pin Y [get_ports en]
set_input_transition 0.2 [get_ports din]
# dout drives a long trace: 0.05 pF.
set_load 0.05 [get_ports dout]

# Design rules every net must meet (slew and load capacitance).
set_max_transition 0.5 [current_design]
set_max_capacitance 0.04 [current_design]

# Step 1: a stronger driver for en. Change inv_1 to inv_4 above and run again.
# Step 2: drive dout with a bigger buffer. Change buf_1 to buf_4 in env.v and run again.
`},quiz:[{type:"number",q:"How many pins violate max slew?",answer:2,tol:0,unit:"",explain:"ob/X and the port dout: buf_1 driving 0.05 pF has a 0.59 ns slew against a 0.5 ns limit.",try:!1},{type:"number",q:"What is the max capacitance slack on ob/X?",answer:-.01,tol:.01,unit:"pF",explain:"0.05 pF load against a 0.04 pF limit.",try:!1},{type:"number",q:"Try it: Step 1, drive en with inv_4. What is the slew on the en port now?",answer:.02,tol:.01,unit:"ns",explain:"From 0.06 ns with inv_1: a stronger driver switches the 8 loads faster.",try:!0},{type:"choice",q:"Try it: Step 2, use buf_4 for ob. Which violations remain?",options:["None","Only max capacitance: the 0.05 pF load is above the 0.04 pF limit whatever drives it","Only max slew","Both"],answer:1,explain:"A bigger driver fixes slew. The capacitance limit is on the net itself: reduce the load or split the net.",try:!0}]},{id:"sdc-c15",group:"SDC & constraints",tag:"SDC 15",title:"Clock latency, uncertainty and transition",script:"run.tcl",files:{"run.tcl":`# SDC 15: before clock tree synthesis, the clock tree is estimated in the SDC.
# Exercises: find each clock term in the setup and hold reports, then switch to propagated clocks.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog lat.v
link_design lat
read_sdc lat.sdc

puts "### r1 -> r2: setup"
report_checks -from r1/CLK -to r2/D -path_delay max
puts "\\n### r1 -> r2: hold"
report_checks -from r1/CLK -to r2/D -path_delay min
`,"lat.v":`// A small clock tree: CLK -> cb1 -> cb2 -> r1, and CLK -> cb3 -> r2.
module lat (CLK, d, q);
  input  CLK, d;
  output q;
  wire   n1, n2, n3, a, b;
  sky130_fd_sc_hd__clkbuf_1 cb1 (.A(CLK), .X(n1));
  sky130_fd_sc_hd__clkbuf_1 cb2 (.A(n1),  .X(n2));
  sky130_fd_sc_hd__clkbuf_1 cb3 (.A(CLK), .X(n3));
  sky130_fd_sc_hd__dfxtp_1 r1 (.D(d), .CLK(n2), .Q(a));
  sky130_fd_sc_hd__inv_1   g1 (.A(a), .Y(b));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(b), .CLK(n3), .Q(q));
endmodule
`,"lat.sdc":`create_clock -name CLK -period 2 [get_ports CLK]
set_input_delay 0.2 -clock CLK [get_ports d]

# Before clock tree synthesis there is no real tree yet, so we estimate it:
set_clock_latency -source 0.4 [get_clocks CLK]   ;# from the PLL to the CLK port
set_clock_latency 0.3 [get_clocks CLK]           ;# estimated tree delay (network latency)
set_clock_uncertainty -setup 0.15 [get_clocks CLK]   ;# jitter + skew margin
set_clock_uncertainty -hold  0.05 [get_clocks CLK]
set_clock_transition 0.1 [get_clocks CLK]

# Step 1: after clock tree synthesis the tree is real. Remove the # to use the real
#         delays of cb1, cb2 and cb3 instead of the 0.3 ns estimate:
# set_propagated_clock [all_clocks]
`},quiz:[{type:"number",q:"What is the clock network delay at r1/CLK in the setup report?",answer:.7,tol:.01,unit:"ns",explain:"0.4 ns source latency + 0.3 ns network latency (ideal clock).",try:!1},{type:"number",q:"What is the setup slack r1 \u2192 r2?",answer:1.42,tol:.01,unit:"ns",explain:"The 0.15 ns setup uncertainty is subtracted from the required time.",try:!1},{type:"number",q:"What is the hold slack r1 \u2192 r2?",answer:.31,tol:.01,unit:"ns",explain:"Hold uses the 0.05 ns hold uncertainty.",try:!1},{type:"number",q:"Try it: Step 1, set_propagated_clock. What is the clock network delay at r1/CLK now?",answer:.53,tol:.01,unit:"ns",explain:"0.4 ns source latency + 0.13 ns through cb1 and cb2. The 0.3 ns estimate is no longer used.",try:!0},{type:"number",q:"With propagated clocks, what is the setup slack?",answer:1.36,tol:.01,unit:"ns",explain:"The capture clock through cb3 is now earlier than the launch clock: negative skew costs setup.",try:!1}]},{id:"sdc-c16",group:"SDC & constraints",tag:"SDC 16",title:"Constraining clock domain crossings",script:"run.tcl",files:{"run.tcl":`# SDC 16: asynchronous clocks need constraints too: cut the paths, or limit them.
# Exercises: run as given, then try each step and compare which crossings are checked.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog cdc.v
link_design cdc
read_sdc cdc.sdc

puts "### Crossings into clk_b"
foreach {from to} {ra s1_reg p0_reg g0_reg p1_reg g1_reg p2_reg g2_reg} {
  set p [find_timing_paths -from [get_pins $from/CLK] -to [get_pins $to/D] -path_delay max]
  if {[llength $p]} { puts [format "%-7s -> %-7s slack %.2f" $from $to [get_property [lindex $p 0] slack]] } else { puts [format "%-7s -> %-7s not timed" $from $to] }
}
puts "\\n### Worst crossing path in detail"
report_checks -from [get_clocks clk_a] -to [get_clocks clk_b] -path_delay max
`,"cdc.v":`// Two asynchronous clocks. A 2-flop synchronizer (s1, s2) carries one control bit,
// and a 3-bit Gray-coded pointer (p0..p2 -> g0..g2) crosses bit by bit.
module cdc (clk_a, clk_b, d, din0, din1, din2, q, q0, q1, q2);
  input  clk_a, clk_b, d, din0, din1, din2;
  output q, q0, q1, q2;
  wire   a, s1, p0, p1, p2, n0, n1, n2, n2a;
  sky130_fd_sc_hd__dfxtp_1 ra (.D(d),  .CLK(clk_a), .Q(a));
  sky130_fd_sc_hd__dfxtp_1 s1_reg (.D(a),  .CLK(clk_b), .Q(s1));
  sky130_fd_sc_hd__dfxtp_1 s2_reg (.D(s1), .CLK(clk_b), .Q(q));
  sky130_fd_sc_hd__dfxtp_1 p0_reg (.D(din0), .CLK(clk_a), .Q(p0));
  sky130_fd_sc_hd__dfxtp_1 p1_reg (.D(din1), .CLK(clk_a), .Q(p1));
  sky130_fd_sc_hd__dfxtp_1 p2_reg (.D(din2), .CLK(clk_a), .Q(p2));
  sky130_fd_sc_hd__dlygate4sd3_1 w0 (.A(p0), .X(n0));     // long routes across the chip
  sky130_fd_sc_hd__dlygate4sd3_1 w1 (.A(p1), .X(n1));
  sky130_fd_sc_hd__dlygate4sd3_1 w2a (.A(p2), .X(n2a));
  sky130_fd_sc_hd__dlygate4sd3_1 w2b (.A(n2a), .X(n2));
  sky130_fd_sc_hd__dfxtp_1 g0_reg (.D(n0), .CLK(clk_b), .Q(q0));
  sky130_fd_sc_hd__dfxtp_1 g1_reg (.D(n1), .CLK(clk_b), .Q(q1));
  sky130_fd_sc_hd__dfxtp_1 g2_reg (.D(n2), .CLK(clk_b), .Q(q2));
endmodule
`,"cdc.sdc":`create_clock -name clk_a -period 4 [get_ports clk_a]
create_clock -name clk_b -period 3 [get_ports clk_b]

# Without a constraint, STA treats clk_a and clk_b as synchronous and times every
# crossing against the closest pair of edges: that gives meaningless violations.
# Remove the # from ONE step at a time:
# Step 1: cut all paths between the clocks
# set_clock_groups -asynchronous -group clk_a -group clk_b
# Step 2: better for the Gray pointer: keep a delay limit so the bits arrive close together.
#         -ignore_clock_latency limits only the data path delay, not the clock edges.
# set_max_delay 1.0 -ignore_clock_latency -from [get_cells p*_reg] -to [get_cells g*_reg]
# set_false_path -from [get_cells ra] -to [get_cells s1_reg]
`},quiz:[{type:"number",q:"Run as given. What is the worst slack on a crossing?",answer:-.46,tol:.01,unit:"ns",explain:"p2_reg \u2192 g2_reg, timed against the closest edges of two clocks that have no fixed phase.",try:!1},{type:"number",q:"Try it: Step 1. How many crossings are still timed?",answer:0,tol:0,unit:"",explain:"set_clock_groups -asynchronous cuts every path between clk_a and clk_b, in both directions.",try:!0},{type:"choice",q:"Try it: Step 2 instead. Which pointer bit fails the 1.0 ns max delay?",options:["g0","g1","g2: its route is twice as long","None"],answer:2,explain:"All bits of a Gray pointer must arrive within about one destination period of each other. A max delay keeps the skew in check; a false path would not.",try:!0},{type:"choice",q:"Why use set_max_delay instead of a false path for a Gray-coded pointer?",options:["It is faster to run","A false path lets the bits arrive at any time; a max delay keeps them close enough that the destination never sees two bits change at once","OpenSTA cannot do false paths","It is the same"],answer:1,explain:"See the Gray code lab in the CDC lab.",try:!1}]},{id:"sdc-c17",group:"SDC & constraints",tag:"SDC 17",title:"Write the SDC from scratch",script:"run.tcl",files:{"run.tcl":`# SDC 17: constrain a block yourself. my.sdc has a checklist; solution.sdc has one answer.
# Exercises: add one constraint at a time to my.sdc and run until check_setup is clean.

# Change to solution.sdc to compare with the answer.
set sdc my.sdc

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog chip.v
link_design chip
read_sdc $sdc

puts "### Constraint problems (check_setup)"
check_setup -verbose
puts "\\n### Endpoints"
report_checks -path_delay max -group_path_count 20 -format end
puts "\\n### Summary"
report_wns
report_tns
`,"chip.v":`// A small block to constrain from scratch.
//   clk      : 250 MHz system clock (4 ns)
//   div_reg  : divides clk by 2 -> clk_half drives the slow registers s1, s2
//   cfg      : a static configuration pin, set once after reset
//   in1/out1 : data from and to other chips on the same clock
//   m1 -> m2 : a two-cycle arithmetic path (by design)
module chip (clk, rst_n, cfg, in1, out1, outs);
  input  clk, rst_n, cfg, in1;
  output out1, outs;
  wire   clk_half, dn, a, c, m, m1, m2, m3, m4, m5, m6, m7, m8, x, s, sx;
  sky130_fd_sc_hd__dfrbp_1 div_reg (.D(dn), .CLK(clk), .RESET_B(rst_n), .Q(clk_half), .Q_N(dn));
  sky130_fd_sc_hd__dfrtp_1 r_in  (.D(in1), .CLK(clk), .RESET_B(rst_n), .Q(a));
  sky130_fd_sc_hd__dfrtp_1 r_cfg (.D(cfg), .CLK(clk), .RESET_B(rst_n), .Q(c));
  sky130_fd_sc_hd__xor2_1  g1 (.A(a), .B(c), .X(m));
  sky130_fd_sc_hd__dfrtp_1 m1_reg (.D(m), .CLK(clk), .RESET_B(rst_n), .Q(m1));
  sky130_fd_sc_hd__dlygate4sd3_1 d1 (.A(m1), .X(m2));
  sky130_fd_sc_hd__dlygate4sd3_1 d2 (.A(m2), .X(m3));
  sky130_fd_sc_hd__dlygate4sd3_1 d3 (.A(m3), .X(m4));
  sky130_fd_sc_hd__dlygate4sd3_1 d4 (.A(m4), .X(m5));
  sky130_fd_sc_hd__dlygate4sd3_1 d5 (.A(m5), .X(m6));
  sky130_fd_sc_hd__dlygate4sd3_1 d6 (.A(m6), .X(m7));
  sky130_fd_sc_hd__dlygate4sd3_1 d7 (.A(m7), .X(m8));
  sky130_fd_sc_hd__dlygate4sd3_1 d8 (.A(m8), .X(x));
  sky130_fd_sc_hd__dfrtp_1 m2_reg (.D(x), .CLK(clk), .RESET_B(rst_n), .Q(out1));
  sky130_fd_sc_hd__dfrtp_1 s1 (.D(a), .CLK(clk_half), .RESET_B(rst_n), .Q(s));
  sky130_fd_sc_hd__inv_1   g2 (.A(s), .Y(sx));
  sky130_fd_sc_hd__dfrtp_1 s2 (.D(sx), .CLK(clk_half), .RESET_B(rst_n), .Q(outs));
endmodule
`,"my.sdc":`# Write the constraints for chip.v here. Run after each step and watch check_setup.
# Checklist:
#   1. the clock on clk (4 ns)
#   2. the divided clock on div_reg/Q
#   3. input delay on in1 (1.0 ns) and output delays on out1 and outs (1.0 ns)
#   4. cfg is static: give it an input delay like any input, then cut its paths
#   5. rst_n: input delay too (it is released synchronously by a reset synchronizer upstream)
#   6. m1_reg -> m2_reg takes two clock cycles (setup 2, hold 1)
# solution.sdc has one answer. Try it yourself first.
`,"solution.sdc":`# One solution for chip.v
create_clock -name clk -period 4 [get_ports clk]
create_generated_clock -name clk_half -source [get_ports clk] -divide_by 2 [get_pins div_reg/Q]
set_input_delay  1.0 -clock clk [get_ports {in1 rst_n cfg}]
set_output_delay 1.0 -clock clk [get_ports {out1 outs}]
set_false_path -from [get_ports cfg]
set_multicycle_path 2 -setup -from [get_cells m1_reg] -to [get_cells m2_reg]
set_multicycle_path 1 -hold  -from [get_cells m1_reg] -to [get_cells m2_reg]
`},quiz:[{type:"number",q:"With the empty my.sdc, how many unclocked register pins does check_setup report?",answer:7,tol:0,unit:"",explain:"Every flop: there is no clock yet.",try:!1},{type:"number",q:"With the empty my.sdc, how many unconstrained endpoints are there?",answer:9,tol:0,unit:"",explain:"7 flop D pins and 2 outputs.",try:!1},{type:"choice",q:"With solution.sdc, check_setup still reports one unconstrained endpoint, r_cfg/D. Why is that fine?",options:["It is a bug","Its only path comes from cfg, which is a false path on purpose","r_cfg has no clock","It is an output"],answer:1,explain:"Every warning should be explained. This one is expected.",try:!1},{type:"number",q:"Try it: comment out the two multicycle lines in solution.sdc. What is the WNS?",answer:-.75,tol:.01,unit:"ns",explain:"m1_reg \u2192 m2_reg needs 4.63 ns: it only meets timing with its two cycles.",try:!0}]},{id:"sdc-c18",group:"SDC & constraints",tag:"SDC 18",title:"How much logic fits in one clock?",script:"run.tcl",files:{"run.tcl":`# SDC 18: an 8-bit divider (division by repeated subtraction), synthesised with K = 1, 2, 4 and 8
# subtractions per clock. More work per clock means fewer clocks, but a longer path.
# Exercises: run each K at 10 ns, read WNS, and work out the fastest clock for each.

# The divider subtracts K times per clock. Netlists: div_k1.v div_k2.v div_k4.v div_k8.v
# Change k to 1, 2, 4 or 8 and run again.
set k 1

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog div_k$k.v
link_design div_k$k
read_sdc divider.sdc

puts "### K = $k subtractions per clock"
puts "### Timing summary"
report_wns
report_tns
puts [format "Endpoints failing setup: %d" [llength [find_timing_paths -path_delay max -slack_max 0 -group_path_count 1000 -endpoint_path_count 1]]]
puts "\\n### Worst setup path"
report_checks -path_delay max -format full -digits 2
puts "\\n### Constraint check (check_setup -verbose lists every port)"
check_setup
`,"divider.sdc":`# 100 MHz clock: 10 ns period, 50% duty cycle
create_clock -name clk -period 10 [get_ports clk]
# The same clock written with -waveform: rise at 0, fall at 5
# create_clock -name clk -period 10 -waveform {0 5} [get_ports clk]

# Switches and buttons change by hand, far slower than any clock: no timing needed
set_false_path -through [get_ports {xin[*] yin[*] start rst}]
# LEDs and displays are read by a person: no timing needed either
set_false_path -from [all_registers] -to [get_ports {quotient[*] remainder[*] done}]
`},quiz:[{type:"number",q:"K = 1: what is the setup slack at a 10 ns clock?",answer:6.1,tol:.01,unit:"ns",explain:"One subtractor and one mux between the registers.",try:!1},{type:"number",q:"K = 4: what is the setup slack?",answer:.6,tol:.01,unit:"ns",explain:"Four cascaded subtractors still fit in 10 ns, just.",try:!0},{type:"number",q:"K = 8: what is the WNS?",answer:-7.21,tol:.01,unit:"ns",explain:"Eight subtractors need about 17.2 ns: the design fails at 10 ns.",try:!0},{type:"number",q:"K = 8: how many endpoints fail setup?",answer:34,tol:0,unit:"",explain:"Most of the x, q, quotient and remainder bits.",try:!0},{type:"number",q:"K = 1: what is the shortest clock period it can run at (10 \u2212 slack)?",answer:3.9,tol:.01,unit:"ns",explain:"10 \u2212 6.10 = 3.90 ns, about 256 MHz.",try:!1},{type:"number",q:"13 \xF7 3 with K = 1 takes 5 COMPUTE cycles (4 subtractions and 1 that fails). How long is that at the shortest period of 3.90 ns?",answer:19.5,tol:.01,unit:"ns",explain:"5 \xD7 3.90 = 19.5 ns. With K = 4 it takes 2 cycles of 9.40 ns = 18.8 ns: barely faster, with four times the subtractors.",try:!1},{type:"choice",q:"Why are the switch inputs and LED outputs false paths here?",options:["They are too slow to measure","A person changes the switches and reads the LEDs: nothing on those paths has to meet a clock","OpenSTA cannot time ports","To make timing pass"],answer:1,explain:"check_setup still lists them as missing I/O delays. That is expected here, and worth knowing why.",try:!1}]},{id:"sdc-c19",group:"SDC & constraints",tag:"SDC 19",title:"I/O delays from datasheet numbers",script:"run.tcl",files:{"run.tcl":`# SDC 19: turn datasheet numbers (clock-to-output, setup, hold, board trace) into input and
# output delays. Exercises: check the formulas in usb.sdc, then write the two wb_data lines yourself.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog usb.v
link_design usb
read_sdc usb.sdc

puts "### Inputs: setup and hold"
report_checks -from [get_ports {DataIn[*] RxValid}] -path_delay min_max -group_path_count 20 -format end
puts "\\n### Outputs: setup and hold"
report_checks -to [get_ports {DataOut[*] TxValid wb_data}] -path_delay min_max -group_path_count 20 -format end
puts "\\n### Worst input setup path"
report_checks -from [get_ports {DataIn[*] RxValid}] -path_delay max
puts "\\n### Constraint check"
check_setup -verbose
`,"usb.v":`// A USB PHY interface (ULPI-like) on sysClk, plus a CPU interrupt input and a data
// output read by a bus clock that exists only outside this block.
module usb (sysClk, DataIn, RxValid, cpu_int, DataOut, TxValid, wb_data);
  input  sysClk, cpu_int;
  input  [1:0] DataIn;
  input  RxValid;
  output [1:0] DataOut;
  output TxValid, wb_data;
  wire   d0, d1, v, i0, o0, o1, t, w, x0, x1;
  sky130_fd_sc_hd__dlygate4sd3_1 id0 (.A(DataIn[0]), .X(x0));
  sky130_fd_sc_hd__dlygate4sd3_1 id1 (.A(DataIn[1]), .X(x1));
  sky130_fd_sc_hd__dfxtp_1 din0_reg (.D(x0), .CLK(sysClk), .Q(d0));
  sky130_fd_sc_hd__dfxtp_1 din1_reg (.D(x1), .CLK(sysClk), .Q(d1));
  sky130_fd_sc_hd__dfxtp_1 vld_reg  (.D(RxValid), .CLK(sysClk), .Q(v));
  sky130_fd_sc_hd__dfxtp_1 int_reg  (.D(cpu_int), .CLK(sysClk), .Q(i0));
  sky130_fd_sc_hd__xor2_1  g0 (.A(d0), .B(v), .X(o0));
  sky130_fd_sc_hd__xor2_1  g1 (.A(d1), .B(v), .X(o1));
  sky130_fd_sc_hd__dfxtp_1 dout0_reg (.D(o0), .CLK(sysClk), .Q(DataOut[0]));
  sky130_fd_sc_hd__dfxtp_1 dout1_reg (.D(o1), .CLK(sysClk), .Q(DataOut[1]));
  sky130_fd_sc_hd__dfxtp_1 txv_reg   (.D(v),  .CLK(sysClk), .Q(t));
  sky130_fd_sc_hd__buf_2   ob (.A(t), .X(TxValid));
  sky130_fd_sc_hd__and2_1  g2 (.A(i0), .B(d0), .X(w));
  sky130_fd_sc_hd__dfxtp_1 wb_reg    (.D(w),  .CLK(sysClk), .Q(wb_data));
endmodule
`,"usb.sdc":`# Constraints from the datasheets of the chips around this block.
create_clock -name sysClk -period 10 [get_ports sysClk]
# The bus that reads wb_data runs on its own clock (25 MHz, same source): a virtual clock.
create_clock -name wbClk  -period 40

# PHY -> DataIn, RxValid (launched by sysClk at the PHY):
#   PHY clock-to-output tco: min 1.0, max 2.0 ns; board trace: min 1.0, max 1.0 ns
#   input delay max = tco_max + trace_max     min = tco_min + trace_min
set_input_delay -max 3.0 -clock sysClk [get_ports {DataIn[*] RxValid}]
set_input_delay -min 2.0 -clock sysClk [get_ports {DataIn[*] RxValid}]

# DataOut, TxValid -> PHY (captured by sysClk at the PHY):
#   PHY setup tsu 1.0, hold thd 0.1 ns; board trace: min 0.1, max 0.1 ns
#   output delay max = tsu + trace_max        min = trace_min - thd
set_output_delay -max 1.1 -clock sysClk [get_ports {DataOut[*] TxValid}]
set_output_delay -min 0.0 -clock sysClk [get_ports {DataOut[*] TxValid}]

# wb_data -> bus device (captured by wbClk): tsu 2.1, thd 0.6, trace min 0.0, max 0.1 ns
# Exercise: work out the two values and remove the # :
# set_output_delay -max ?? -clock wbClk [get_ports wb_data]
# set_output_delay -min ?? -clock wbClk [get_ports wb_data]

# cpu_int comes from another clock domain and is synchronized inside: no timing.
set_false_path -from [get_ports cpu_int]
`},quiz:[{type:"number",q:"Input delay max = tco_max + trace_max. With tco_max 2.0 ns and trace 1.0 ns, what is it?",answer:3,tol:.01,unit:"ns",explain:"The latest the data can arrive after the PHY's clock edge.",try:!1},{type:"number",q:"What is the setup slack on din0_reg/D?",answer:6.36,tol:.01,unit:"ns",explain:"Arrives at 3.0 + 0.52 ns of input logic; required at 10 \u2212 setup.",try:!1},{type:"number",q:"Output delay min = trace_min \u2212 thd. With trace 0.1 and thd 0.1, what is it?",answer:0,tol:.01,unit:"ns",explain:"The PHY's hold need is cancelled by the trace delay.",try:!1},{type:"number",q:"For wb_data (tsu 2.1, trace max 0.1), what is the -max output delay?",answer:2.2,tol:.01,unit:"ns",explain:"tsu + trace_max.",try:!1},{type:"number",q:"And the -min output delay (thd 0.6, trace min 0.0)?",answer:-.6,tol:.01,unit:"ns",explain:"trace_min \u2212 thd = 0.0 \u2212 0.6.",try:!1},{type:"number",q:"Try it: add the two wb_data lines. What is the hold slack on wb_data?",answer:-.34,tol:.01,unit:"ns",explain:"The bus device needs wb_data held 0.6 ns, but it changes 0.26 ns after the clock. Add delay on the output, or ask for a different interface timing.",try:!0},{type:"choice",q:"Why is wbClk a virtual clock?",options:["It is faster","It clocks only the external bus device, so it has no pin in this design","Virtual clocks have no jitter","To avoid hold checks"],answer:1,explain:"A virtual clock describes a clock outside the block for I/O constraints.",try:!1}]},{id:"sdc-c20",group:"SDC & constraints",tag:"SDC 20",title:"Clock interaction and a multicycle path",script:"run.tcl",files:{"run.tcl":`# SDC 20: a clock interaction table shows every pair of clocks STA times. Find the unsafe
# pair, declare it, then give the slow ALU path its two cycles. Exercises: apply each step.

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog cpu.v
link_design cpu
read_sdc cpu.sdc

puts "### Clocks"
report_clock_properties
puts "\\n### Clock interaction: worst setup slack for each launch -> capture pair"
puts [format "%-8s %-8s %8s" From To Slack]
foreach launch {sysClk cpuClk gtClk} {
  foreach capture {sysClk cpuClk gtClk} {
    set p [find_timing_paths -from [get_clocks $launch] -to [get_clocks $capture] -path_delay max]
    if {[llength $p]} { puts [format "%-8s %-8s %8.2f" $launch $capture [get_property [lindex $p 0] slack]] }
  }
}
puts "\\n### gtClk -> sysClk in detail: how much time does STA allow?"
report_checks -from [get_clocks gtClk] -to [get_clocks sysClk] -path_delay max
puts "\\n### Through the ALU (setup and hold)"
report_checks -through [get_pins alu_16/X] -path_delay min_max -format end
puts "\\n### Summary"
report_wns
report_tns
`,"cpu.v":`// sysClk (4 ns) feeds the core. div_reg makes cpuClk = sysClk / 2 for the CPU.
// gtClk (12.8 ns) comes from a serial transceiver: it has its own source.
module cpu (sysClk, gtClk, din, gtin, dout);
  input  sysClk, gtClk, din, gtin;
  output dout;
  wire   cpuClk, dn, s, c, a, r, g, gx, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15;
  sky130_fd_sc_hd__dfxbp_1 div_reg (.D(dn), .CLK(sysClk), .Q(cpuClk), .Q_N(dn));
  sky130_fd_sc_hd__dfxtp_1 sys_reg (.D(din), .CLK(sysClk), .Q(s));
  sky130_fd_sc_hd__dfxtp_1 op_reg  (.D(s),   .CLK(cpuClk), .Q(c));      // sysClk -> cpuClk
  sky130_fd_sc_hd__dlygate4sd3_1 alu_1 (.A(c), .X(a1));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_2 (.A(a1), .X(a2));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_3 (.A(a2), .X(a3));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_4 (.A(a3), .X(a4));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_5 (.A(a4), .X(a5));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_6 (.A(a5), .X(a6));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_7 (.A(a6), .X(a7));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_8 (.A(a7), .X(a8));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_9 (.A(a8), .X(a9));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_10 (.A(a9), .X(a10));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_11 (.A(a10), .X(a11));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_12 (.A(a11), .X(a12));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_13 (.A(a12), .X(a13));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_14 (.A(a13), .X(a14));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_15 (.A(a14), .X(a15));
  sky130_fd_sc_hd__dlygate4sd3_1 alu_16 (.A(a15), .X(a));
  sky130_fd_sc_hd__dfxtp_1 res_reg (.D(a),   .CLK(cpuClk), .Q(r));
  sky130_fd_sc_hd__dfxtp_1 gt_reg  (.D(gtin), .CLK(gtClk), .Q(g));
  sky130_fd_sc_hd__xor2_1  mix (.A(g), .B(r), .X(gx));                   // gtClk -> sysClk
  sky130_fd_sc_hd__dfxtp_1 out_reg (.D(gx),  .CLK(sysClk), .Q(dout));
endmodule
`,"cpu.sdc":`create_clock -name sysClk -period 4    [get_ports sysClk]
create_clock -name gtClk  -period 12.8 [get_ports gtClk]
create_generated_clock -name cpuClk -source [get_ports sysClk] -divide_by 2 [get_pins div_reg/Q]
set_input_delay 1 -clock sysClk [get_ports din]
set_input_delay 1 -clock gtClk  [get_ports gtin]
set_output_delay 1 -clock sysClk [get_ports dout]

# Step 1: gtClk has its own source. gt_reg -> out_reg is a CDC path with a synchronizer
#         in the real design, so declare the clocks asynchronous:
# set_clock_groups -asynchronous -group {gtClk} -group {sysClk cpuClk}
# Step 2: the ALU result is only used every other cpuClk cycle:
# set_multicycle_path 2 -setup -through [get_pins alu_*/X]
# set_multicycle_path 1 -hold  -through [get_pins alu_*/X]
`},quiz:[{type:"number",q:"Run as given. How much time does STA allow from gtClk to sysClk (capture edge minus launch edge)?",answer:.8,tol:.01,unit:"ns",explain:"52.0 \u2212 51.2: the tightest pair of edges within the common period of 4 ns and 12.8 ns clocks. Clocks from different sources have no fixed phase, so this number is meaningless.",try:!1},{type:"number",q:"What is the worst slack in the cpuClk \u2192 cpuClk row?",answer:-.99,tol:.01,unit:"ns",explain:"The 16-stage ALU path needs 8.87 ns in an 8 ns cycle.",try:!1},{type:"choice",q:"Try it: Step 1. What happens to the gtClk \u2192 sysClk row?",options:["Its slack improves","It disappears: the clocks are asynchronous, so the path is no longer timed","It becomes a hold check","Nothing"],answer:1,explain:"The CDC path must now be made safe in the design, with a synchronizer.",try:!0},{type:"number",q:"Try it: Steps 1 and 2. What is the setup slack through the ALU?",answer:7.01,tol:.01,unit:"ns",explain:"Two cpuClk cycles: required 15.88 ns.",try:!0},{type:"number",q:"With Step 2, what is the hold slack through the ALU?",answer:8.71,tol:.01,unit:"ns",explain:"The -hold 1 line keeps the hold check on the original edge. Without it, hold would move by one cycle too.",try:!1}]},{id:"sdc-c21",group:"SDC & constraints",tag:"SDC 21",title:"Real design: constrain a whole SoC",script:"run.tcl",files:{"run.tcl":`# SDC 21: the SoC from the workshop (processor subsystem, LDPC, AES, accelerator, comp/decomp,
# DMA, crossbar, PCIe, JTAG, efuse, flash and DDR controllers), scaled down to a few flops per block.
# Exercises: write soc.sdc section by section with the checklist, run after each section,
# and use the clock interaction table and the per-block slacks to check your work.

# Change to solution.sdc to see the complete answer.
set sdc soc.sdc

read_liberty sky130_fd_sc_hd__tt_025C_1v80.lib
read_verilog soc.v
link_design soc_top
read_sdc $sdc

puts "### Constraint problems"
check_setup
puts "\\n### Clocks"
report_clock_properties
puts "\\n### Clock interaction: worst setup slack for each launch -> capture pair"
set clks [all_clocks]
if {![llength $clks]} { puts "No clocks defined yet." }
foreach l $clks {
  foreach c $clks {
    set p [find_timing_paths -from $l -to $c -path_delay max]
    if {[llength $p]} { puts [format "%-10s -> %-10s %8.2f" [get_name $l] [get_name $c] [get_property [lindex $p 0] slack]] }
  }
}
puts "\\n### Worst setup slack in each block"
foreach blk {u_cpu u_ldpc u_aes u_accel u_comp u_dma u_xbar u_pcie u_jtag u_efuse u_flash u_ddr} {
  set p [find_timing_paths -to [get_pins $blk/*/D] -path_delay max]
  if {[llength $p]} { puts [format "%-8s %8.2f" $blk [get_property [lindex $p 0] slack]] } else { puts [format "%-8s   not timed" $blk] }
}
puts "\\n### Worst paths"
report_checks -path_delay max -group_path_count 3 -format end
report_checks -path_delay min -group_path_count 3 -format end
puts "\\n### Summary"
report_wns
report_tns
report_worst_slack -min
`,"soc.v":`// SDC lab 21: a scaled-down version of the workshop SoC. Every block of the chip is here,
// with a few flops each, so the constraints are the same as for the full chip.
//   u_cpu    Processor subsystem   clk_cpu   (PLL, 400 MHz in this lab)
//   u_ldpc, u_aes, u_accel, u_comp, u_dma, u_xbar      sys_ck = clk_sys, or test_clk in scan mode
//   u_efuse, u_flash               clk_slow  (clk_sys / 2, made by u_div2)
//   u_pcie   PCIe controller       pcie_clk  (from the PCIe PHY, its own source)
//   u_jtag   JTAG                  tck       (from the tester, TDO on the falling edge)
//   u_ddr    DDR controller        clk_ddr   (DDR PLL; some flops capture on the falling edge)
// Crossings into the crossbar: CPU FIFO write pointer (Gray, 3 bits) and data, PCIe request,
// JTAG configuration and DDR acknowledge, each through a 2-flop synchronizer.
// u_aes and u_comp sit in the switchable VDD_CMP power domain; u_cpu in VDD_CPU.
module cpu_ss (clk, rst_n, din, wptr, wdata);
  input clk;
  input rst_n;
  input din;
  output [2:0] wptr;
  output wdata;
  wire c1, c2, c3;
  sky130_fd_sc_hd__dfrtp_1 core1_reg (.D(din), .CLK(clk), .RESET_B(rst_n), .Q(c1));
  sky130_fd_sc_hd__xor2_1 alu1 (.A(c1), .B(c2), .X(c3));
  sky130_fd_sc_hd__dfrtp_1 core2_reg (.D(c3), .CLK(clk), .RESET_B(rst_n), .Q(c2));
  sky130_fd_sc_hd__dfrtp_1 wptr0_reg (.D(c2), .CLK(clk), .RESET_B(rst_n), .Q(wptr[0]));
  sky130_fd_sc_hd__dfrtp_1 wptr1_reg (.D(wptr[0]), .CLK(clk), .RESET_B(rst_n), .Q(wptr[1]));
  sky130_fd_sc_hd__dfrtp_1 wptr2_reg (.D(wptr[1]), .CLK(clk), .RESET_B(rst_n), .Q(wptr[2]));
  sky130_fd_sc_hd__dfrtp_1 wdata_reg (.D(c3), .CLK(clk), .RESET_B(rst_n), .Q(wdata));
endmodule

module ldpc (clk, rst_n, in, out);
  input clk;
  input rst_n;
  input in;
  output out;
  wire q1, x, p1, p2, p3, p4;
  sky130_fd_sc_hd__dfrtp_1 in_reg (.D(in), .CLK(clk), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__dlygate4sd3_1 pg1 (.A(q1), .X(p1));
  sky130_fd_sc_hd__dlygate4sd3_1 pg2 (.A(p1), .X(p2));
  sky130_fd_sc_hd__dlygate4sd3_1 pg3 (.A(p2), .X(p3));
  sky130_fd_sc_hd__dlygate4sd3_1 pg4 (.A(p3), .X(p4));
  sky130_fd_sc_hd__dlygate4sd3_1 pg5 (.A(p4), .X(x));
  sky130_fd_sc_hd__dfrtp_1 out_reg (.D(x), .CLK(clk), .RESET_B(rst_n), .Q(out));
endmodule

module accel (clk, rst_n, in, out);
  input clk;
  input rst_n;
  input in;
  output out;
  wire q1, x, p1, p2;
  sky130_fd_sc_hd__dfrtp_1 in_reg (.D(in), .CLK(clk), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__dlygate4sd3_1 pg1 (.A(q1), .X(p1));
  sky130_fd_sc_hd__dlygate4sd3_1 pg2 (.A(p1), .X(p2));
  sky130_fd_sc_hd__dlygate4sd3_1 pg3 (.A(p2), .X(x));
  sky130_fd_sc_hd__dfrtp_1 out_reg (.D(x), .CLK(clk), .RESET_B(rst_n), .Q(out));
endmodule

module dma (clk, rst_n, in, out);
  input clk;
  input rst_n;
  input in;
  output out;
  wire q1, x, p1;
  sky130_fd_sc_hd__dfrtp_1 in_reg (.D(in), .CLK(clk), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__dlygate4sd3_1 pg1 (.A(q1), .X(p1));
  sky130_fd_sc_hd__dlygate4sd3_1 pg2 (.A(p1), .X(x));
  sky130_fd_sc_hd__dfrtp_1 out_reg (.D(x), .CLK(clk), .RESET_B(rst_n), .Q(out));
endmodule

module aes (clk, rst_n, in, key, out);
  input clk;
  input rst_n;
  input in;
  input key;
  output out;
  wire s, k, x, r1, r2;
  sky130_fd_sc_hd__dfrtp_1 state_reg (.D(in), .CLK(clk), .RESET_B(rst_n), .Q(s));
  sky130_fd_sc_hd__xor2_1 addkey (.A(s), .B(key), .X(k));
  sky130_fd_sc_hd__dlygate4sd3_1 rg1 (.A(k), .X(r1));
  sky130_fd_sc_hd__dlygate4sd3_1 rg2 (.A(r1), .X(r2));
  sky130_fd_sc_hd__dlygate4sd3_1 rg3 (.A(r2), .X(x));
  sky130_fd_sc_hd__dfrtp_1 out_reg (.D(x), .CLK(clk), .RESET_B(rst_n), .Q(out));
endmodule

module comp (clk, rst_n, in, out);
  input clk;
  input rst_n;
  input in;
  output out;
  wire q1, x, h1, h2, h3, h4, h5, h6, h7, h8, h9;
  sky130_fd_sc_hd__dfrtp_1 src_reg (.D(in), .CLK(clk), .RESET_B(rst_n), .Q(q1));
  sky130_fd_sc_hd__dlygate4sd3_1 hg1 (.A(q1), .X(h1));
  sky130_fd_sc_hd__dlygate4sd3_1 hg2 (.A(h1), .X(h2));
  sky130_fd_sc_hd__dlygate4sd3_1 hg3 (.A(h2), .X(h3));
  sky130_fd_sc_hd__dlygate4sd3_1 hg4 (.A(h3), .X(h4));
  sky130_fd_sc_hd__dlygate4sd3_1 hg5 (.A(h4), .X(h5));
  sky130_fd_sc_hd__dlygate4sd3_1 hg6 (.A(h5), .X(h6));
  sky130_fd_sc_hd__dlygate4sd3_1 hg7 (.A(h6), .X(h7));
  sky130_fd_sc_hd__dlygate4sd3_1 hg8 (.A(h7), .X(h8));
  sky130_fd_sc_hd__dlygate4sd3_1 hg9 (.A(h8), .X(h9));
  sky130_fd_sc_hd__dlygate4sd3_1 hg10 (.A(h9), .X(x));
  sky130_fd_sc_hd__dfrtp_1 dst_reg (.D(x), .CLK(clk), .RESET_B(rst_n), .Q(out));
endmodule

module xbar (clk, rst_n, cpu_wptr, cpu_wdata, pcie_req, jtag_cfg, ddr_ack, blk_in, grant, ddr_req);
  input clk;
  input rst_n;
  input [2:0] cpu_wptr;
  input cpu_wdata;
  input pcie_req;
  input jtag_cfg;
  input ddr_ack;
  input blk_in;
  output grant;
  output ddr_req;
  wire wq1_0, wq1_1, wq1_2, wq2_0, wq2_1, wq2_2, rq, ld, cpu_d, cpu_dn, ps1, ps2, js1, js2, ds1, ds2, a1, a2, a3, a4;
  sky130_fd_sc_hd__dfrtp_1 wq1_0_reg (.D(cpu_wptr[0]), .CLK(clk), .RESET_B(rst_n), .Q(wq1_0));
  sky130_fd_sc_hd__dfrtp_1 wq2_0_reg (.D(wq1_0), .CLK(clk), .RESET_B(rst_n), .Q(wq2_0));
  sky130_fd_sc_hd__dfrtp_1 wq1_1_reg (.D(cpu_wptr[1]), .CLK(clk), .RESET_B(rst_n), .Q(wq1_1));
  sky130_fd_sc_hd__dfrtp_1 wq2_1_reg (.D(wq1_1), .CLK(clk), .RESET_B(rst_n), .Q(wq2_1));
  sky130_fd_sc_hd__dfrtp_1 wq1_2_reg (.D(cpu_wptr[2]), .CLK(clk), .RESET_B(rst_n), .Q(wq1_2));
  sky130_fd_sc_hd__dfrtp_1 wq2_2_reg (.D(wq1_2), .CLK(clk), .RESET_B(rst_n), .Q(wq2_2));
  sky130_fd_sc_hd__xor2_1 newp (.A(wq2_0), .B(rq), .X(ld));
  sky130_fd_sc_hd__dfrtp_1 rq_reg (.D(wq2_0), .CLK(clk), .RESET_B(rst_n), .Q(rq));
  sky130_fd_sc_hd__mux2_1 ldmux (.A0(cpu_d), .A1(cpu_wdata), .S(ld), .X(cpu_dn));
  sky130_fd_sc_hd__dfrtp_1 cpu_d_reg (.D(cpu_dn), .CLK(clk), .RESET_B(rst_n), .Q(cpu_d));
  sky130_fd_sc_hd__dfrtp_1 pcie_s1_reg (.D(pcie_req), .CLK(clk), .RESET_B(rst_n), .Q(ps1));
  sky130_fd_sc_hd__dfrtp_1 pcie_s2_reg (.D(ps1), .CLK(clk), .RESET_B(rst_n), .Q(ps2));
  sky130_fd_sc_hd__dfrtp_1 jtag_s1_reg (.D(jtag_cfg), .CLK(clk), .RESET_B(rst_n), .Q(js1));
  sky130_fd_sc_hd__dfrtp_1 jtag_s2_reg (.D(js1), .CLK(clk), .RESET_B(rst_n), .Q(js2));
  sky130_fd_sc_hd__dfrtp_1 ddr_s1_reg (.D(ddr_ack), .CLK(clk), .RESET_B(rst_n), .Q(ds1));
  sky130_fd_sc_hd__dfrtp_1 ddr_s2_reg (.D(ds1), .CLK(clk), .RESET_B(rst_n), .Q(ds2));
  sky130_fd_sc_hd__xor2_1 arb1 (.A(cpu_d), .B(ps2), .X(a1));
  sky130_fd_sc_hd__xor2_1 arb2 (.A(a1), .B(js2), .X(a2));
  sky130_fd_sc_hd__xor2_1 arb3 (.A(a2), .B(ds2), .X(a3));
  sky130_fd_sc_hd__xor2_1 arb4 (.A(a3), .B(blk_in), .X(a4));
  sky130_fd_sc_hd__dfrtp_1 grant_reg (.D(a4), .CLK(clk), .RESET_B(rst_n), .Q(grant));
  sky130_fd_sc_hd__dfrtp_1 ddr_req_reg (.D(grant), .CLK(clk), .RESET_B(rst_n), .Q(ddr_req));
endmodule

module pcie_ctrl (clk, rst_n, rx, req);
  input clk;
  input rst_n;
  input rx;
  output req;
  wire r1, r2;
  sky130_fd_sc_hd__dfrtp_1 rx_reg (.D(rx), .CLK(clk), .RESET_B(rst_n), .Q(r1));
  sky130_fd_sc_hd__dlygate4sd3_1 dec (.A(r1), .X(r2));
  sky130_fd_sc_hd__dfrtp_1 req_reg (.D(r2), .CLK(clk), .RESET_B(rst_n), .Q(req));
endmodule

module jtag (tck, trst_n, tdi, tdo, cfg);
  input tck;
  input trst_n;
  input tdi;
  output tdo;
  output cfg;
  wire ir;
  sky130_fd_sc_hd__dfrtp_1 ir_reg (.D(tdi), .CLK(tck), .RESET_B(trst_n), .Q(ir));
  sky130_fd_sc_hd__dfrtp_1 cfg_reg (.D(ir), .CLK(tck), .RESET_B(trst_n), .Q(cfg));
  sky130_fd_sc_hd__dfrtn_1 tdo_reg (.D(ir), .CLK_N(tck), .RESET_B(trst_n), .Q(tdo));
endmodule

module efuse_ctrl (clk, rst_n, fuse_in, key);
  input clk;
  input rst_n;
  input fuse_in;
  output key;
  wire f;
  sky130_fd_sc_hd__dfrtp_1 fuse_reg (.D(fuse_in), .CLK(clk), .RESET_B(rst_n), .Q(f));
  sky130_fd_sc_hd__dfrtp_1 key_reg (.D(f), .CLK(clk), .RESET_B(rst_n), .Q(key));
endmodule

module flash_ctrl (clk, rst_n, flash_di, flash_do, flash_sck, rdata);
  input clk;
  input rst_n;
  input flash_di;
  output flash_do;
  output flash_sck;
  output rdata;
  wire q;
  sky130_fd_sc_hd__buf_2 sck_buf (.A(clk), .X(flash_sck));
  sky130_fd_sc_hd__dfrtp_1 di_reg (.D(flash_di), .CLK(clk), .RESET_B(rst_n), .Q(rdata));
  sky130_fd_sc_hd__dfrtp_1 do_reg (.D(rdata), .CLK(clk), .RESET_B(rst_n), .Q(q));
  sky130_fd_sc_hd__buf_2 do_buf (.A(q), .X(flash_do));
endmodule

module ddr_ctrl (clk, rst_n, req, dq_in, dq_out, ack);
  input clk;
  input rst_n;
  input req;
  input dq_in;
  output dq_out;
  output ack;
  wire rs1, rs2, cmd, c1, nc, dq_q, di;
  sky130_fd_sc_hd__dfrtp_1 req_s1_reg (.D(req), .CLK(clk), .RESET_B(rst_n), .Q(rs1));
  sky130_fd_sc_hd__dfrtp_1 req_s2_reg (.D(rs1), .CLK(clk), .RESET_B(rst_n), .Q(rs2));
  sky130_fd_sc_hd__dfrtp_1 cmd_reg (.D(rs2), .CLK(clk), .RESET_B(rst_n), .Q(cmd));
  sky130_fd_sc_hd__dlygate4sd3_1 phy1 (.A(cmd), .X(c1));
  sky130_fd_sc_hd__dfrtn_1 neg_cap_reg (.D(c1), .CLK_N(clk), .RESET_B(rst_n), .Q(nc));
  sky130_fd_sc_hd__dfrtp_1 dq_out_reg (.D(nc), .CLK(clk), .RESET_B(rst_n), .Q(dq_q));
  sky130_fd_sc_hd__buf_2 dq_buf (.A(dq_q), .X(dq_out));
  sky130_fd_sc_hd__dfrtp_1 dq_in_reg (.D(dq_in), .CLK(clk), .RESET_B(rst_n), .Q(di));
  sky130_fd_sc_hd__dfrtp_1 ack_reg (.D(di), .CLK(clk), .RESET_B(rst_n), .Q(ack));
endmodule

module soc_top (clk_cpu, clk_sys, clk_ddr, pcie_clk, tck, test_clk, scan_mode, rst_n, trst_n, cpu_din, pcie_rx, tdi, fuse_in, flash_di, dq_in, blk_din, tdo, flash_do, flash_sck, dq_out, grant, blk_dout);
  input clk_cpu;
  input clk_sys;
  input clk_ddr;
  input pcie_clk;
  input tck;
  input test_clk;
  input scan_mode;
  input rst_n;
  input trst_n;
  input cpu_din;
  input pcie_rx;
  input tdi;
  input fuse_in;
  input flash_di;
  input dq_in;
  input blk_din;
  output tdo;
  output flash_do;
  output flash_sck;
  output dq_out;
  output grant;
  output blk_dout;
  wire sys_ck, clk_slow, slow_n, wdata, l_o, a_o, x_o, c_o, preq, jcfg, dack, dreq, key, frd;
  wire [2:0] wptr;
  sky130_fd_sc_hd__mux2_1 u_scanmux (.A0(clk_sys), .A1(test_clk), .S(scan_mode), .X(sys_ck));
  sky130_fd_sc_hd__dfrbp_1 u_div2 (.D(slow_n), .CLK(sys_ck), .RESET_B(rst_n), .Q(clk_slow), .Q_N(slow_n));
  cpu_ss u_cpu (.clk(clk_cpu), .rst_n(rst_n), .din(cpu_din), .wptr(wptr), .wdata(wdata));
  ldpc u_ldpc (.clk(sys_ck), .rst_n(rst_n), .in(blk_din), .out(l_o));
  aes u_aes (.clk(sys_ck), .rst_n(rst_n), .in(l_o), .key(key), .out(a_o));
  accel u_accel (.clk(sys_ck), .rst_n(rst_n), .in(a_o), .out(x_o));
  comp u_comp (.clk(sys_ck), .rst_n(rst_n), .in(x_o), .out(c_o));
  dma u_dma (.clk(sys_ck), .rst_n(rst_n), .in(c_o), .out(blk_dout));
  xbar u_xbar (.clk(sys_ck), .rst_n(rst_n), .cpu_wptr(wptr), .cpu_wdata(wdata), .pcie_req(preq), .jtag_cfg(jcfg), .ddr_ack(dack), .blk_in(c_o), .grant(grant), .ddr_req(dreq));
  pcie_ctrl u_pcie (.clk(pcie_clk), .rst_n(rst_n), .rx(pcie_rx), .req(preq));
  jtag u_jtag (.tck(tck), .trst_n(trst_n), .tdi(tdi), .tdo(tdo), .cfg(jcfg));
  efuse_ctrl u_efuse (.clk(clk_slow), .rst_n(rst_n), .fuse_in(fuse_in), .key(key));
  flash_ctrl u_flash (.clk(clk_slow), .rst_n(rst_n), .flash_di(flash_di), .flash_do(flash_do), .flash_sck(flash_sck), .rdata(frd));
  ddr_ctrl u_ddr (.clk(clk_ddr), .rst_n(rst_n), .req(dreq), .dq_in(dq_in), .dq_out(dq_out), .ack(dack));
endmodule
`,"soc.sdc":`# soc.sdc: write the constraints for soc_top here, one section at a time, and run after each.
# Read the block list at the top of soc.v first. Clock periods for this lab:
#   clk_cpu 2.5   clk_sys 4.0   clk_ddr 3.2   pcie_clk 4.0   tck 40
#   (test_clk is only used in scan mode, which has its own SDC: leave it out here)
# Checklist:
#   1. a clock on each functional clock port
#   2. generated clocks: clk_slow on u_div2/Q, and flash_sck on the flash_sck output port
#   3. the functional mode: scan_mode = 0
#   4. clock relationships: which clocks have their own source?
#   5. the CPU -> crossbar crossing: limit it to one clk_cpu period instead of cutting it
#   6. static signals: the efuse key, the resets and fuse_in
#   7. the two-cycle Comp/Decomp datapath (setup and hold)
#   8. input and output delays on every data port (values in solution.sdc)
# Compare with solution.sdc when you are done, or run it directly (first line of run.tcl).
`,"solution.sdc":`# solution.sdc: one complete answer for soc_top. Units: ns.
# ---- 1. Clocks: one per source (PLL outputs, PHY clock, tester clocks)
create_clock -name clk_cpu  -period 2.5 [get_ports clk_cpu]
create_clock -name clk_sys  -period 4.0 [get_ports clk_sys]
create_clock -name clk_ddr  -period 3.2 [get_ports clk_ddr]
create_clock -name pcie_clk -period 4.0 [get_ports pcie_clk]
create_clock -name tck      -period 40  [get_ports tck]
# test_clk is defined only in the scan-mode SDC (scan.sdc), not in the functional one.
# ---- 2. Generated clocks: the divider, and the clock forwarded to the flash chip
create_generated_clock -name clk_slow  -source [get_ports clk_sys] -divide_by 2 [get_pins u_div2/Q]
create_generated_clock -name flash_sck -source [get_pins u_div2/Q] -divide_by 1 [get_ports flash_sck]
# ---- 3. Mode: functional (scan_mode = 0): the clock mux selects clk_sys
set_case_analysis 0 [get_ports scan_mode]
# ---- 4. Clock relationships: DDR, PCIe and JTAG clocks have their own sources
set_clock_groups -asynchronous -group {clk_cpu clk_sys clk_slow flash_sck} -group {clk_ddr} -group {pcie_clk} -group {tck}
# ---- 5. CPU -> crossbar CDC: Gray pointer and FIFO data must arrive within one clk_cpu period
set_max_delay 2.5 -ignore_clock_latency -from [get_clocks clk_cpu] -to [get_clocks clk_sys]
# ---- 6. Static signals: the efuse key is written once at boot; resets are released by synchronizers
set_false_path -from [get_cells u_efuse/key_reg]
set_false_path -from [get_ports {rst_n trst_n fuse_in}]
# ---- 7. Multicycle path: Comp/Decomp gives its datapath two cycles
set_multicycle_path 2 -setup -from [get_cells u_comp/src_reg] -to [get_cells u_comp/dst_reg]
set_multicycle_path 1 -hold  -from [get_cells u_comp/src_reg] -to [get_cells u_comp/dst_reg]
# ---- 8. I/O delays (from the datasheets of the devices around the chip)
set_input_delay  0.5 -clock clk_cpu  [get_ports cpu_din]
set_input_delay  1.0 -clock clk_sys  [get_ports blk_din]
set_output_delay 1.0 -clock clk_sys  [get_ports {grant blk_dout}]
set_input_delay  1.0 -clock pcie_clk [get_ports pcie_rx]
set_input_delay  0.8 -clock clk_ddr  [get_ports dq_in]
set_output_delay 0.8 -clock clk_ddr  [get_ports dq_out]
set_input_delay  10  -clock tck -clock_fall [get_ports tdi]
set_output_delay 10  -clock tck [get_ports tdo]
set_input_delay  2.0 -clock flash_sck -clock_fall [get_ports flash_di]
set_output_delay 2.0 -clock flash_sck [get_ports flash_do]
set_input_delay  0   -clock clk_sys [get_ports {rst_n trst_n fuse_in scan_mode}]
`},quiz:[{type:"number",q:"With the empty soc.sdc, how many register clock pins have no clock?",answer:49,tol:0,unit:"",explain:"Every flop in the chip: nothing is checked until the clocks exist.",try:!1},{type:"number",q:"With the empty soc.sdc, how many endpoints are unconstrained?",answer:55,tol:0,unit:"",explain:"All flop D pins plus the outputs.",try:!1},{type:"number",q:"Try it: run solution.sdc. How many clocks does report_clock_properties list?",answer:7,tol:0,unit:"",explain:"Five primary clocks and two generated ones (clk_slow and the forwarded flash_sck). test_clk belongs in the scan-mode SDC.",try:!0},{type:"choice",q:"With solution.sdc, which block has the worst setup slack, and why?",options:["u_ldpc: the longest logic","u_ddr: neg_cap_reg captures on the falling edge, so its path has only half of the 3.2 ns clock","u_cpu: the fastest clock","u_jtag: the slowest clock"],answer:1,explain:"0.57 ns at u_ddr/neg_cap_reg. Half-cycle paths are easy to miss when you only look at the clock period.",try:!1},{type:"number",q:"With solution.sdc, how many launch \u2192 capture clock pairs does the interaction table show?",answer:9,tol:0,unit:"",explain:"Each clock to itself, clk_cpu \u2192 clk_sys under the max delay, and the clk_slow / flash_sck pairs.",try:!1},{type:"number",q:"Try it: comment out set_clock_groups in solution.sdc. How many clock pairs are timed now?",answer:13,tol:0,unit:"",explain:"The DDR, PCIe and JTAG crossings into clk_sys are now timed against meaningless edge pairs, for example 0.35 ns of slack between clk_sys and clk_ddr.",try:!0},{type:"number",q:"Try it: comment out set_max_delay instead. What is the worst setup slack in u_xbar?",answer:-.23,tol:.01,unit:"ns",explain:"Without it, STA treats clk_cpu and clk_sys as synchronous: 2.5 ns and 4 ns edges come within 0.5 ns of each other. The crossing has a synchronizer; what matters is a bounded delay, not that edge pair.",try:!0},{type:"number",q:"Try it: comment out the two multicycle lines. What is the worst setup slack in u_comp?",answer:-1.83,tol:.01,unit:"ns",explain:"The comp/decomp datapath needs 5.7 ns: it only meets timing with its two cycles.",try:!0},{type:"choice",q:"With solution.sdc, check_setup still warns about test_clk, flash_sck and u_efuse/fuse_reg/D. Why is that fine?",options:["They are bugs in OpenSTA","test_clk is only used in scan mode, flash_sck is a clock output (it has a generated clock, not an output delay), and fuse_in is a static input with a false path","They are not connected","Warnings never matter"],answer:1,explain:"Signoff means every warning is either fixed or explained.",try:!1},{type:"number",q:"With solution.sdc, what is the setup slack into u_flash/di_reg (flash_di is launched on the falling edge of flash_sck)?",answer:1.9,tol:.01,unit:"ns",explain:"flash_di arrives 4 + 2 = 6 ns after the clk_slow rise, required at 7.90 ns.",try:!1},{type:"choice",q:"AES and Comp/Decomp are in a switchable power domain (VDD_CMP). Where is that described?",options:["In the SDC with set_case_analysis","In the power intent (UPF), not the SDC. STA then needs a corner for each voltage, and isolation cells at the domain boundary","In the netlist only","It does not matter for timing"],answer:1,explain:"SDC describes timing. Voltages and switchable domains come from UPF; each domain voltage needs its own library corner.",try:!1}]}];var L=`// Two flops feeding a third through a buffer and an AND gate.
// Cells come from the open-source SkyWater 130 nm high-density library.
module top (in1, in2, clk1, clk2, clk3, out);
  input  in1, in2, clk1, clk2, clk3;
  output out;
  wire   r1q, r2q, u1x, u2x;

  sky130_fd_sc_hd__dfxtp_1 r1 (.D(in1), .CLK(clk1), .Q(r1q));
  sky130_fd_sc_hd__dfxtp_1 r2 (.D(in2), .CLK(clk2), .Q(r2q));
  sky130_fd_sc_hd__buf_1   u1 (.A(r2q), .X(u1x));
  sky130_fd_sc_hd__and2_1  u2 (.A(r1q), .B(u1x), .X(u2x));
  sky130_fd_sc_hd__dfxtp_1 r3 (.D(u2x), .CLK(clk3), .Q(out));
endmodule
`,ge=`# One 10 ns clock drives all three flops
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,D=`read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc
`,ae=`// The same three-flop circuit built from ASAP7 7 nm predictive cells.
module top (in1, in2, clk1, clk2, clk3, out);
  input  in1, in2, clk1, clk2, clk3;
  output out;
  wire   r1q, r2q, u1z, u2z;

  DFFHQx4_ASAP7_75t_R r1 (.D(in1), .CLK(clk1), .Q(r1q));
  DFFHQx4_ASAP7_75t_R r2 (.D(in2), .CLK(clk2), .Q(r2q));
  BUFx2_ASAP7_75t_R   u1 (.A(r2q), .Y(u1z));
  AND2x2_ASAP7_75t_R  u2 (.A(r1q), .B(u1z), .Y(u2z));
  DFFHQx4_ASAP7_75t_R r3 (.D(u2z), .CLK(clk3), .Q(out));
endmodule
`,be=[{id:"basic",title:"Setup & hold checks",tag:"Basics",files:{"netlist.v":L,"constraints.sdc":ge,"run.tcl":`# Load the library, the netlist and the constraints
${D}
# Worst setup (max) path
report_checks -path_delay max

# Worst hold (min) path. in1 -> r1 has almost no hold margin because the
# input changes at the same instant as the clock edge (input delay 0).
# Try set_input_delay -min 0.2 ... in constraints.sdc and run again.
report_checks -path_delay min

report_wns
report_tns
`}},{id:"violation",title:"Setup violation: fast clock",tag:"Basics",files:{"netlist.v":L,"constraints.sdc":`# Squeeze the clock to 0.5 ns (2 GHz): the r2 -> r3 path no longer fits
create_clock -name clk -period 0.5 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`${D}
# Show slew, load and fanout at every stage of the failing path
report_checks -path_delay max -fields {slew cap fanout} -digits 3

# Every failing endpoint, worst first
report_checks -path_delay max -group_path_count 10 -endpoint_path_count 1 -format end -slack_max 0

report_worst_slack -max
report_tns
`}},{id:"io",title:"Input & output delays",tag:"Constraints",files:{"netlist.v":L,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}

# The block's neighbours use part of the cycle
set_input_delay  0.6 -clock clk {in1 in2}
set_output_delay 0.8 -clock clk [get_ports out]

# Realistic edges and loads at the boundary
set_input_transition 0.1 {in1 in2}
set_load 0.02 [get_ports out]
`,"run.tcl":`${D}
puts "### Input to register"
report_checks -from [get_ports in1] -fields {slew cap}

puts "\\n### Register to output"
report_checks -to [get_ports out] -fields {slew cap}
`}},{id:"exceptions",title:"False & multicycle paths",tag:"Constraints",files:{"netlist.v":L,"constraints.sdc":`create_clock -name clk -period 0.45 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}

# r2 only launches new data every 2 cycles
set_multicycle_path -setup 2 -from [get_cells r2] -to [get_cells r3]
set_multicycle_path -hold  1 -from [get_cells r2] -to [get_cells r3]

# in1 is a static configuration pin: ignore it
set_false_path -from [get_ports in1]
`,"run.tcl":`${D}
# A 0.45 ns clock: without exceptions both paths into r3 would fail.
# r2 -> r3 now passes thanks to the multicycle path...
report_checks -from [get_cells r2] -to [get_cells r3]

# ...but r1 -> r3 still fails. Add a multicycle path for it too and run again.
report_checks -from [get_cells r1] -to [get_cells r3]
report_wns
`}},{id:"ocv",title:"Clock latency, uncertainty & OCV",tag:"Clocks",files:{"netlist.v":L,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}
set_input_delay 0.3 -clock clk {in1 in2}

# Clock tree not built yet: model it
set_clock_latency -source 0.30 [get_clocks clk]
set_clock_latency        0.20 [get_clocks clk]
set_clock_uncertainty -setup 0.10 [get_clocks clk]
set_clock_uncertainty -hold  0.05 [get_clocks clk]
`,"run.tcl":`${D}
# On-chip variation: for setup, data is slowed by 8% and the capture clock sped up by 8%
set_timing_derate -early 0.92
set_timing_derate -late  1.08

report_checks -path_delay min_max -fields {slew}
`}},{id:"corners",title:"Multi-corner: slow & fast",tag:"Corners",files:{"netlist.v":ae,"constraints.sdc":`# ASAP7 libraries use picoseconds: a 300 ps clock
create_clock -name clk -period 300 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`# Slow (ss) and fast (ff) corners of the ASAP7 library
read_liberty asap7_small_ss.lib.gz
read_liberty asap7_small_ff.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc

define_scene ss -liberty asap7_small_ss
define_scene ff -liberty asap7_small_ff

# Worst setup and hold across both corners.
# in1 -> r1 fails hold: the input changes exactly at the clock edge (input delay 0).
report_checks -path_delay min_max

foreach s {ss ff} {
  puts "\\n### Scene $s"
  report_checks -scene $s -path_delay min_max -format summary
}
`}},{id:"spef",title:"Wire parasitics from SPEF",tag:"Parasitics",files:{"netlist.v":ae,"constraints.sdc":`create_clock -name clk -period 300 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"parasitics.spef":null,"run.tcl":`read_liberty asap7_small_ss.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc

puts "### Without wire parasitics"
report_checks -fields {cap slew}

read_spef parasitics.spef
puts "\\n### With wire parasitics from SPEF"
report_checks -fields {cap slew}
`},load:{"parasitics.spef":"reg1_asap7.spef"}},{id:"gcd",title:"GCD block (Sky130): SPEF + power",tag:"Real design",files:{"netlist.v":null,"constraints.sdc":`set period 5
create_clock -period $period [get_ports clk]

set clk_period_factor .2
set delay [expr $period * $clk_period_factor]
set_input_delay $delay -clock clk {req_val reset resp_rdy req_msg[*]}
set_output_delay $delay -clock clk [all_outputs]

set_input_transition .1 [all_inputs]
`,"run.tcl":`# A synthesised and routed GCD block from the open-source SkyWater 130 nm flow
read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design gcd
read_sdc constraints.sdc
set_propagated_clock clk
read_spef gcd_sky130hd.spef.gz

report_checks -fields {slew cap fanout} -digits 3
report_wns
report_tns

set_power_activity -input -activity 0.1
set_power_activity -input_port reset -activity 0
report_power
`},load:{"netlist.v":"gcd_sky130hd.v"}}],m=[...be.map(e=>({group:"Basic labs",...e})),...se],C=[{id:"basic",group:"Basic labs",title:"Basic labs",note:"Short examples: setup and hold, constraints, OCV, corners, SPEF, a real block with power."},{id:"workshop",group:"STA workshop",title:"STA workshop",note:"The 8-day workshop: 15 labs from your first timing report to a RISC-V core. Each lab has a quiz."},{id:"signoff",group:"Signoff STA",title:"Signoff STA",note:"9 labs on constraints, clocks, exceptions, OCV, latches, ECOs and multi-corner signoff. Each lab has a quiz."},{id:"sdc",group:"SDC & constraints",title:"SDC & constraints",note:"21 labs on timing constraints, ending with a full SoC: clock waveforms, generated clocks, clock relationships and sense, false and multicycle paths, exception priority, mode merging, constraint promotion, I/O delays from datasheets, environment, latency, CDC and clock interaction. Each lab has a quiz."}],re=["sky130hd_tt.lib.gz","asap7_small_ss.lib.gz","asap7_small_ff.lib.gz","gcd_sky130hd.spef.gz","sky130_fd_sc_hd__tt_025C_1v80.lib","sky130_fd_sc_hd__ss_100C_1v60.lib","sky130_fd_sc_hd__ff_n40C_1v95.lib","s27_Early.lib","s27_Late.lib","s27_min.lib","s27_max.lib","ibex_top.v","gcd_sky130hd.v","div_k1.v","div_k2.v","div_k4.v","div_k8.v"],oe=[["sky130hd_tt.lib.gz","SkyWater 130 nm HD, typical (ns, pF)"],["asap7_small_ss.lib.gz","ASAP7 7 nm, slow; 3 cells (ps, fF)"],["asap7_small_ff.lib.gz","ASAP7 7 nm, fast; 3 cells (ps, fF)"],["gcd_sky130hd.spef.gz","Parasitics for the GCD block"],["sky130_fd_sc_hd__tt_025C_1v80.lib","Sky130 HD typical, 25 \xB0C, 1.80 V (workshop)"],["sky130_fd_sc_hd__ss_100C_1v60.lib","Sky130 HD slow, 100 \xB0C, 1.60 V"],["sky130_fd_sc_hd__ff_n40C_1v95.lib","Sky130 HD fast, \u221240 \xB0C, 1.95 V"],["s27_Late.lib","TAU 2015 contest library, late/max (ps); s27_max.lib is a copy"],["s27_Early.lib","TAU 2015 contest library, early/min (ps); s27_min.lib is a copy"],["ibex_top.v","ibex RISC-V core netlist, Sky130 HD (2.3 MB)"],["div_k1.v \u2026 div_k8.v","8-bit divider, 1 to 8 subtractions per clock, Sky130 HD"]];var c=e=>document.querySelector(e),ce=6e4,pe="vdd-sta-lab-v1",w="run.tcl",s={example:m[0].id,track:"basic",script:w,files:{},order:[],current:w,running:!1,ready:!1,worker:null,timer:null},ue=()=>s.order.filter(e=>/\.tcl$/i.test(e));function E(){return s.files[s.script]!==void 0?s.script:s.files[w]!==void 0?w:ue()[0]||w}function we(){let e=c("#script-wrap"),n=c("#script"),t=ue(),a=E();e.hidden=!(t.length>1||t.length===1&&a!==w),n.innerHTML="";for(let r of t){let o=document.createElement("option");o.value=r,o.textContent=r,n.appendChild(o)}n.value=a}var y=new Map,l=null,g=c("#editor textarea");function H(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(l=window.CodeMirror.fromTextArea(g,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),l.on("change",()=>{s.files[s.current]=l.getValue(),I()})):(g.classList.add("plain-editor"),g.addEventListener("input",()=>{s.files[s.current]=g.value,I()}));function N(e){l?s.files[s.current]=l.getValue():s.files[s.current]=g.value,s.current=e,l?(y.has(e)||y.set(e,window.CodeMirror.Doc(s.files[e]??"",H(e))),l.swapDoc(y.get(e)),setTimeout(()=>l.refresh(),0)):g.value=s.files[e]??"",P()}function xe(e,n){N(e),l&&(l.focus(),l.setCursor({line:n-1,ch:0}),l.addLineClass(n-1,"background","cm-errline"),setTimeout(()=>l.removeLineClass(n-1,"background","cm-errline"),2500),l.scrollIntoView({line:n-1,ch:0},80))}function Q(e,n,t){y.clear(),s.files={...e},s.order=n||Object.keys(e),s.current=t&&s.order.includes(t)?t:s.order.includes(E())?E():s.order[0],l?(y.set(s.current,window.CodeMirror.Doc(s.files[s.current]??"",H(s.current))),l.swapDoc(y.get(s.current))):g.value=s.files[s.current]??"",P()}function P(){let e=c("#tabs");e.innerHTML="";for(let n of s.order){let t=document.createElement("button");if(t.type="button",t.className="tab"+(n===s.current?" active":""),t.setAttribute("role","tab"),t.setAttribute("aria-selected",n===s.current?"true":"false"),t.textContent=n,t.addEventListener("click",()=>N(n)),e.appendChild(t),n===s.current&&s.order.length>1){let a=document.createElement("button");a.type="button",a.className="tab-x",a.textContent="\xD7",a.title="Remove "+n,a.setAttribute("aria-label","Remove file "+n),a.addEventListener("click",()=>Ce(n)),e.appendChild(a)}}we()}function he(e,n,t){s.files[e]===void 0&&s.order.push(e),s.files[e]=n,y.delete(e),t?P():N(e),I()}function Ce(e){l&&(s.files[s.current]=l.getValue()),delete s.files[e],y.delete(e),s.order=s.order.filter(n=>n!==e),s.current=s.order[0],l?(y.has(s.current)||y.set(s.current,window.CodeMirror.Doc(s.files[s.current]??"",H(s.current))),l.swapDoc(y.get(s.current))):g.value=s.files[s.current]??"",P(),I()}function ve(){let e=(window.prompt("New file name (for example mode2.sdc, extra.tcl, top.v):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){x("File names can use letters, digits, dot, dash and underscore only.","err");return}if(s.files[e]!==void 0){N(e);return}he(e,"")}}var K=e=>{let n=m.find(t=>t.id===e);return n?(C.find(t=>t.group===n.group)||C[0]).id:null},b=()=>C.find(e=>e.id===s.track)||C[0];function Y(){let e=c("#tracks");e.innerHTML="";for(let t of C){let a=document.createElement("button");a.type="button",a.className="track"+(t.id===b().id?" active":""),a.setAttribute("role","tab"),a.setAttribute("aria-selected",t.id===b().id?"true":"false");let r=m.filter(o=>o.group===t.group).length;a.innerHTML='<span class="track-t"></span><span class="track-n"></span>',a.querySelector(".track-t").textContent=t.title,a.querySelector(".track-n").textContent=r+" labs",a.addEventListener("click",()=>Se(t.id)),e.appendChild(a)}document.body.dataset.track!==b().id&&(document.body.dataset.track=b().id,document.dispatchEvent(new CustomEvent("vdd-track")));let n=c("#track-note");if(n.textContent=b().note+" ",b().id==="workshop"){let t=document.createElement("a");t.href="STA_Workshop_Labs.pdf",t.target="_blank",t.rel="noopener",t.className="btn small",t.textContent="Workshop slides (PDF)",n.appendChild(t)}}async function Se(e,n){s.track=e;try{let t=new URL(location.href);t.searchParams.set("track",e),history.replaceState(null,"",t.pathname+t.search+location.hash)}catch{}Y(),!n&&K(s.example)!==e?await F(m.find(t=>t.group===b().group).id):G()}function G(){let e=c("#examples");e.innerHTML="";for(let t of m.filter(a=>a.group===b().group)){let a=document.createElement("button");a.type="button",a.className="ex"+(t.id===s.example?" active":""),a.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',a.querySelector(".ex-tag").textContent=t.tag;let r=t.quiz&&t.quiz.length?R()[t.id]:null;if(r&&r.checked){let o=document.createElement("span");o.className="ex-done",o.textContent=(r.score===r.total?"\u2713 ":"")+`quiz ${r.score}/${r.total}`,a.querySelector(".ex-tag").appendChild(o)}a.querySelector(".ex-title").textContent=t.title,a.addEventListener("click",()=>F(t.id)),e.appendChild(a)}let n=c("#ex-select");n.innerHTML=m.filter(t=>t.group===b().group).map(t=>`<option value="${t.id}">${t.group!=="Basic labs"?t.tag+" \xB7 ":""}${t.title}</option>`).join(""),s.example&&(n.value=s.example)}async function F(e){let n=m.find(r=>r.id===e)||m[0];s.example=n.id,K(n.id)!==s.track&&(s.track=K(n.id),Y()),s.script=n.script||w;let t={};for(let[r,o]of Object.entries(n.files))if(o!==null)t[r]=o;else try{let _=await fetch(new URL("data/"+(n.load||{})[r],location.href));t[r]=_.ok?await _.text():`// Could not load ${n.load[r]}`}catch{t[r]=`// Could not load ${n.load[r]}`}let a=Object.keys(n.files).sort((r,o)=>ie(r)-ie(o));Q(t,a,s.script),G(),V(),X(),me(),Z(null),q(s.ready?"Ready":"Loading OpenSTA\u2026",s.ready?"idle":"busy")}var ke="vdd-sta-quiz-v1";function R(){try{return JSON.parse(localStorage.getItem(ke)||"{}")||{}}catch{return{}}}function M(e){try{localStorage.setItem(ke,JSON.stringify(e))}catch{}}var O=()=>m.find(e=>e.id===s.example&&e.quiz&&e.quiz.length);function Ae(e){let n=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return n?parseFloat(n[0]):NaN}function qe(e,n){if(e.type==="choice")return n!=null&&+n===e.answer;let t=Ae(n);return isFinite(t)&&Math.abs(t-e.answer)<=(e.tol??.01)+1e-9}var Le=e=>e.type==="choice"?e.options[e.answer]:`${Number.isInteger(e.answer)?e.answer:e.answer.toFixed(2)}${e.unit?" "+e.unit:""}`;function V(){ne(te,s.example);let e=c("#quiz"),n=c("#quiz-list"),t=O();if(!t){e.hidden=!0;return}e.hidden=!1;let a=R()[t.id]||{},r=a.a||[];n.innerHTML="",t.quiz.forEach((o,_)=>{let i=document.createElement("li"),p=document.createElement("div");if(p.className="quiz-q",o.try){let d=document.createElement("span");d.className="quiz-try",d.textContent="Try it",p.appendChild(d)}let u=o.q.replace(/^Try it: /,"");if(p.appendChild(document.createTextNode(u.charAt(0).toUpperCase()+u.slice(1))),i.appendChild(p),o.type==="choice"){let d=document.createElement("div");d.className="quiz-opts",d.setAttribute("role","radiogroup"),o.options.forEach((h,f)=>{let v=document.createElement("label"),S=document.createElement("input");S.type="radio",S.name=`q${_}`,S.value=f,r[_]!==void 0&&+r[_]===f&&(S.checked=!0),S.addEventListener("change",()=>le(t,_,f));let ee=document.createElement("span");ee.textContent=h,v.append(S,ee),d.appendChild(v)}),i.appendChild(d)}else{let d=document.createElement("div");d.className="quiz-num";let h=document.createElement("input");if(h.type="text",h.inputMode="decimal",h.autocomplete="off",h.setAttribute("aria-label","Answer to question "+(_+1)),h.placeholder="e.g. -1.23",r[_]!==void 0&&(h.value=r[_]),h.addEventListener("input",()=>le(t,_,h.value)),h.addEventListener("keydown",f=>{f.key==="Enter"&&U()}),d.appendChild(h),o.unit){let f=document.createElement("span");f.className="unit",f.textContent=o.unit,d.appendChild(f)}i.appendChild(d)}let k=document.createElement("div");k.className="quiz-fb",k.hidden=!0,k.setAttribute("aria-live","polite"),i.appendChild(k),n.appendChild(i)}),a.checked?U(!0):fe(null)}function le(e,n,t){let a=R(),r=a[e.id]||{a:[]};r.a=r.a||[],r.a[n]=t,r.checked=!1,a[e.id]=r,M(a);let o=c("#quiz-list").children[n]?.querySelector(".quiz-fb");o&&(o.hidden=!0)}function fe(e,n){let t=c("#quiz-score");if(e===null){t.textContent="",t.classList.remove("done");return}t.textContent=`${e} / ${n} correct`,t.classList.toggle("done",e===n)}function U(e){let n=O();if(!n)return;let t=R(),a=t[n.id]||{a:[]},r=0;n.quiz.forEach((o,_)=>{let i=c("#quiz-list").children[_],p=o.type==="choice"?(i.querySelector("input:checked")||{}).value:i.querySelector("input").value;a.a[_]=p;let u=i.querySelector(".quiz-fb"),k=p===void 0||p==="",d=!k&&qe(o,p);d&&r++,u.hidden=!1,u.className="quiz-fb "+(d?"ok":"bad"),u.innerHTML="";let h=document.createElement("b");h.textContent=d?"Correct.":k?"Not answered yet.":"Not quite.",u.appendChild(h),d&&o.explain?u.appendChild(document.createTextNode(o.explain)):!d&&!k&&u.appendChild(document.createTextNode(o.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),a.checked=!0,a.score=r,a.total=n.quiz.length,t[n.id]=a,M(t),fe(r,n.quiz.length),e||G()}function De(){let e=O();e&&e.quiz.forEach((n,t)=>{let a=c("#quiz-list").children[t].querySelector(".quiz-fb");a.hidden=!1,a.className="quiz-fb shown",a.innerHTML="";let r=document.createElement("b");r.textContent="Answer: "+Le(n)+".",a.appendChild(r),n.explain&&a.appendChild(document.createTextNode(n.explain))})}function Te(){let e=O();if(!e)return;let n=R();delete n[e.id],M(n),V(),G()}function ie(e){return e===s.script?-1:/\.tcl$/.test(e)?0:/\.s?v$/.test(e)?1:/\.sdc$/.test(e)?2:3}var _e=null;function I(){clearTimeout(_e),_e=setTimeout(X,400)}function X(){try{localStorage.setItem(pe,JSON.stringify({example:s.example,script:s.script,files:s.files,order:s.order,current:s.current}))}catch{}}function Ee(){try{let e=JSON.parse(localStorage.getItem(pe)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function Ke(){let e=JSON.stringify({f:s.files,o:s.order,s:E()}),n=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=new Uint8Array(await new Response(n).arrayBuffer()),a="";for(let r of t)a+=String.fromCharCode(r);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Fe(e){let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=new Blob([Uint8Array.from(n,a=>a.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(t).text())}async function T(e,n){let t=!1;try{await navigator.clipboard.writeText(e),t=!0}catch{let r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{t=document.execCommand("copy")}catch{}r.remove()}if(n){let a=n.dataset.label||n.textContent;n.dataset.label=a,n.textContent=t?"Copied":"Press Ctrl+C",n.classList.toggle("ok",t),setTimeout(()=>{n.textContent=a,n.classList.remove("ok")},1600)}}function Ge(e,n){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([n],{type:"text/plain"})),t.download=e,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},500)}var A=c("#console"),W=[];function me(){A.textContent="",W=[]}function x(e,n){W.push(e);let t=document.createElement("div");t.className="ln "+(n||"");let a=/\b([\w.-]+\.(?:v|sdc|tcl|spef)),? (?:line )?(\d+)\b/.exec(e);if(a&&s.files[a[1]]!==void 0){let r=e.indexOf(a[0]);t.appendChild(document.createTextNode(e.slice(0,r)));let o=document.createElement("button");o.type="button",o.className="loc",o.textContent=a[0],o.addEventListener("click",()=>xe(a[1],+a[2])),t.appendChild(o),t.appendChild(document.createTextNode(e.slice(r+a[0].length)))}else t.textContent=e;/slack \(VIOLATED\)/.test(e)?t.classList.add("viol"):/slack \(MET\)/.test(e)?t.classList.add("met"):/^(Error|ERROR)|\bError:|Internal error/.test(e)?t.classList.add("err"):/^Warning/.test(e)?t.classList.add("warn"):/^(Startpoint|Endpoint):/.test(e)?t.classList.add("head"):/^###/.test(e)&&t.classList.add("sec"),A.appendChild(t),A.childElementCount>2e4&&A.firstChild.remove()}function Z(e){let n=c("#summary");if(!e){n.innerHTML="",n.hidden=!0;return}let t=[],a=u=>{let k=u.exec(e);return k?parseFloat(k[1]):null},r=a(/^wns(?: max)? (-?[\d.eE+-]+)/m)??a(/^worst slack max (-?[\d.eE+-]+)/m),o=a(/^tns(?: max)? (-?[\d.eE+-]+)/m),_=(e.match(/slack \(VIOLATED\)/g)||[]).length,i=(e.match(/slack \(MET\)/g)||[]).length;r!==null&&t.push(["WNS",r.toFixed(3),r<0?"bad":"good"]),o!==null&&t.push(["TNS",o.toFixed(3),o<0?"bad":"good"]),_+i&&t.push(["Paths reported",`${i} met \xB7 ${_} violated`,_?"bad":"good"]);let p=/^Total\s+\S+\s+\S+\s+\S+\s+(\S+)/m.exec(e);p&&t.push(["Total power",Re(parseFloat(p[1])),""]),n.innerHTML="";for(let[u,k,d]of t){let h=document.createElement("div");h.className="chip "+d;let f=document.createElement("span");f.className="k",f.textContent=u;let v=document.createElement("span");v.className="v",v.textContent=k,h.append(f,v),n.appendChild(h)}n.hidden=t.length===0}function Re(e){return isFinite(e)?e>=1?e.toFixed(3)+" W":e>=.001?(e*1e3).toFixed(3)+" mW":(e*1e6).toFixed(2)+" \xB5W":"\u2013"}function q(e,n){let t=c("#status");t.textContent=e,t.dataset.kind=n}function j(){s.worker&&s.worker.terminate(),s.ready=!1;let e=new Worker(new URL("worker.js",location.href).href);e.onmessage=n=>Be(n.data),e.onerror=n=>{x("OpenSTA failed to start: "+(n.message||"worker error"),"err"),J(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),s.worker=e}var z=[],$=null;function B(){$=null;for(let[e,n]of z)x(e,n);z=[],A.scrollTop=A.scrollHeight}function Be(e){if(e.type==="ready")s.ready=!0,s.running||q("Ready","idle");else if(e.type==="stage")q(e.stage+"\u2026","busy");else if(e.type==="file"){B();let n=s.files[e.name]===void 0;he(e.name,e.content,!0),x(`\u2500\u2500 OpenSTA ${n?"wrote":"updated"} ${e.name}: open its tab to read it \u2500\u2500`,"meta")}else e.type==="line"?(z.push([e.line,e.stream==="err"?"stderr":""]),$||($=requestAnimationFrame(B))):e.type==="done"&&(B(),e.ok?x(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):x(e.rc===-1?"\u2500\u2500 OpenSTA stopped with an internal error \u2500\u2500":`\u2500\u2500 OpenSTA exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),Z(W.join(`
`)),J(e.ok))}function de(){if(s.running)return;window.vddSubscribe&&window.vddSubscribe(),l?s.files[s.current]=l.getValue():s.files[s.current]=g.value;let e=E();if(s.files[e]===void 0){x(`Add a Tcl script (for example ${w}): it is what OpenSTA runs.`,"err");return}s.worker||j(),X(),me(),Z(null),s.running=!0,c("#run").disabled=!0,c("#stop").disabled=!1,q(s.ready?"Running OpenSTA\u2026":"Loading OpenSTA\u2026","busy"),x(`$ sta ${e}`,"meta"),s.worker.postMessage({type:"run",files:{...s.files},script:e,dataFiles:re,base:new URL(".",location.href).href}),clearTimeout(s.timer),s.timer=setTimeout(()=>ye(`Stopped after ${ce/1e3} s.`),ce)}function ye(e){s.running&&(B(),x(e||"Stopped.","meta err"),J(!1,!0),j())}function J(e,n){clearTimeout(s.timer),s.running=!1,c("#run").disabled=!1,c("#stop").disabled=!0,q(n?"Stopped":e?"Done":"Errors",n||!e?"err":"ok")}function Ie(){c("#run").addEventListener("click",de),c("#stop").addEventListener("click",()=>ye()),c("#script").addEventListener("change",n=>{s.script=n.target.value,X()}),c("#new-file").addEventListener("click",ve),c("#quiz-check").addEventListener("click",()=>U()),c("#quiz-reveal").addEventListener("click",De),c("#quiz-reset").addEventListener("click",Te),c("#ex-select").addEventListener("change",n=>F(n.target.value)),c("#reset").addEventListener("click",()=>F(s.example||m[0].id)),c("#copy-file").addEventListener("click",n=>T(l?l.getValue():g.value,n.currentTarget)),c("#download-file").addEventListener("click",()=>Ge(s.current,l?l.getValue():g.value)),c("#copy-output").addEventListener("click",n=>T(W.join(`
`),n.currentTarget)),c("#share").addEventListener("click",async n=>{let t=n.currentTarget;l&&(s.files[s.current]=l.getValue());try{let a=await Ke();history.replaceState(null,"","#code="+a),T(location.href.split("#")[0]+"#code="+a,t)}catch{T(location.href,t)}}),document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&(n.preventDefault(),de())});let e=c("#libs");e.innerHTML="";for(let[n,t]of oe){let a=document.createElement("li"),r=document.createElement("button");r.type="button",r.className="libname",r.textContent=n,r.title="Copy file name",r.addEventListener("click",()=>T(n,null));let o=document.createElement("span");o.textContent=t,a.append(r,o),e.appendChild(a)}}async function Ne(){Ie();let e=!1,n=new URLSearchParams(location.hash.slice(1)).get("code");if(n)try{let r=await Fe(n);s.example=null,s.script=r.s||w,s.order=r.o,s.files=r.f,Q(r.f,r.o,s.script),e=!0}catch{}if(!e){let r=Ee();r&&(s.example=r.example,s.script=r.script||w,s.files=r.files,s.order=r.order,Q(r.files,r.order,r.current),e=!0)}let t=new URLSearchParams(location.search).get("track"),a=C.some(r=>r.id===t);s.track=a?t:K(s.example)||"basic",Y(),!e||a&&K(s.example)!==t&&!n?await F(m.find(r=>r.group===b().group).id):(G(),V()),q("Loading OpenSTA\u2026","busy"),j()}Ne();})();
