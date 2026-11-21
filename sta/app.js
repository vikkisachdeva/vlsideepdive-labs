(()=>{var et={basic:{problem:"Every flop-to-flop path must meet setup and hold. How does STA find the worst path and its slack?",tasks:["Run and read the setup and hold reports.","Find the startpoint, endpoint and slack."],learn:"Read a basic timing report: arrival, required time and slack."},violation:{problem:"The clock is too fast for the logic. The report shows negative slack: what does it mean and where does the time go?",tasks:["Run and find the failing path.","Change the clock period until it passes."],learn:"Read a setup violation and find the period the design can meet."},io:{problem:"Paths to and from the chip pins are only checked if you tell STA what happens outside the block.",tasks:["Run and read the input and output paths.","Change set_input_delay and set_output_delay and see the slack move."],learn:"Constrain I/O paths with input and output delays."},exceptions:{problem:"Some paths are never used, others are allowed more than one cycle. Without exceptions STA reports false failures.",tasks:["Run with and without the false path and multicycle path.","See which paths each exception changes."],learn:"Write false paths and multicycle paths, including the hold adjustment."},ocv:{problem:"Real clocks arrive late, jitter and vary across the die. Ideal clocks make timing look better than it is.",tasks:["Add clock latency, uncertainty and OCV derates.","Watch the slack shrink."],learn:"Model clock latency, uncertainty and on-chip variation."},corners:{problem:"A design must work at slow and fast process corners. Setup fails at the slow corner, hold at the fast one.",tasks:["Run at both corners.","Find which corner limits setup and which limits hold."],learn:"Multi-corner analysis with slow and fast libraries."},spef:{problem:"Wires have resistance and capacitance. Without them, delays are too optimistic.",tasks:["Run without SPEF, then with it.","Compare the net delays."],learn:"Annotate parasitics from SPEF and see their effect on delay."},gcd:{problem:"A real placed-and-routed block: does it meet timing, and how much power does it use?",tasks:["Run timing with SPEF.","Read the power report."],learn:"Run STA and power on a real block, the way signoff does."},"ws-lab1":{problem:"You have a library, a netlist and constraints. Where do you start? Your first timing report.",tasks:["Run and read the 5 worst paths.","Find the startpoint, endpoint and slack of each.","Edit the clock period and input delay and run again."],learn:"The basic STA flow and the parts of a timing report."},"ws-lab2":{problem:"Cell delay depends on the library corner and on the wires. How much does each change in the RC network move the delay?",tasks:["Run without SPEF, then with each SPEF file.","Compare the delays and slack."],learn:"Delay calculation with min/max libraries and SPEF parasitics."},"ws-lab3":{problem:"Can you compute setup slack by hand and match the tool to the picosecond? If not, you cannot debug a real report.",tasks:["Run and pick the reported path.","Work out the slack from clock edges, latency and cell delays.","Check your number against the report."],learn:"Compute setup slack by hand from a report."},"ws-lab6":{problem:"A clock gate must switch only while the clock is inactive, or it chops the clock into glitches.",tasks:["Run and find the clock gating check.","Analyse its slack."],learn:"Clock gating setup and hold checks."},"ws-lab7":{problem:"An asynchronous reset must release far enough from the clock edge, or flops go metastable.",tasks:["Run and find the recovery and removal checks.","Analyse their slack."],learn:"Recovery and removal checks on asynchronous pins."},"ws-lab12":{problem:"The same path gives different slack with one library, min/max libraries, or parasitics. Why?",tasks:["Run example2, example3 and example4.","Compare the three reports."],learn:"How libraries and parasitics change one path's slack."},"ws-lab4":{problem:"Launch and capture clocks share part of their path. Counting its variation twice makes timing look worse than it is.",tasks:["Note the slack, then enable CRPR and run again.","Find the common point and the difference."],learn:"Common path pessimism removal (CPPR/CRPR)."},"ws-lab5":{problem:"Timing fails after layout. You cannot re-synthesize: you fix it with a small change to the netlist, an ECO.",tasks:["Run the ECO script that inserts a clock buffer.","Compare s27_eco.v with s27.v and the slack before and after."],learn:"Timing ECOs and re-timing a changed netlist."},"ws-lab8":{problem:"Hold checks use different clock edges from setup. Picking the wrong edge gives the wrong answer.",tasks:["Run and read the hold report.","Explain the launch and capture edges it picks."],learn:"Hold slack and how hold edges are chosen."},"ws-lab10":{problem:"A chip runs in several modes, each with its own constraints. Checking one mode at a time does not scale.",tasks:["Review mode1.sdc, then add the other modes.","Write one merged SDC covering all four."],learn:"Multi-mode constraints and mode merging."},"ws-lab11":{problem:"Silicon varies with process, voltage and temperature, and across the die. Which corner and derate limits the design?",tasks:["Run three corners with \xB110% derating.","Compare the reports."],learn:"Multi-corner analysis with derates."},"ws-lab13":{problem:"Several clocks with different waveforms: which edges does STA pair up, and what does a multicycle path change?",tasks:["Run and analyse the clock waveforms.","Add a setup multicycle path between clk2 and clk3 and check setup and hold."],learn:"Multiple clocks and multicycle paths, including the hold side effect."},"ws-lab14":{problem:"A path from a rising edge to a falling edge has only half a cycle. Easy to miss, easy to fail.",tasks:["Run and find any half-cycle paths.","Check the edges used for setup and hold."],learn:"Half-cycle paths and how they are timed."},"ws-lab9":{problem:"The report says no paths were found. Something is unconstrained, and that is worse than a violation.",tasks:["Run and confirm there are no paths.","Debug with check_setup -verbose and report_checks -unconstrained."],learn:"Debug an unconstrained design."},"ws-lab15":{problem:"This is how STA looks on a real design: a RISC-V core with about 14,000 cells.",tasks:["Run the full flow.","Read the summary and the worst paths."],learn:"Run a production-style STA flow on a CPU core."},"so-s1":{problem:"At signoff you need one answer fast: does the block meet timing, and by how much?",tasks:["Run the full flow on the routed GCD block.","Read WNS, TNS and the violation counts, then the worst path."],learn:"The signoff analysis flow and timing summary."},"so-s2":{problem:"A clean timing report means nothing if paths are not constrained. Bad constraints are the most common signoff escape.",tasks:["Run check_setup -verbose and list every problem.","Fix ctrl.sdc and see which new paths appear."],learn:"Validate constraints before trusting any timing report."},"so-s3":{problem:"Most timing errors start with wrong clocks: ideal versus propagated, missing latency, a wrongly defined divided clock.",tasks:["Compare ideal and propagated clocks.","Find where each part of the latency comes from and check the divided clock."],learn:"Define and check generated clocks, latency and uncertainty."},"so-s4":{problem:"Exceptions change what STA checks. One wrong exception can hide a real failure.",tasks:["Enable one exception at a time in exc.sdc.","See which path each one changes."],learn:"Case analysis, false paths, multicycle paths and max delay."},"so-s5":{problem:"Signoff engineers spend most of their time asking the design questions. You need fast answers.",tasks:["Run endpoint summaries and full path reports.","Query cells, nets and registers with Tcl."],learn:"Read reports and query a design quickly."},"so-s6":{problem:"OCV derates can turn a passing path into a failing one, and CRPR gives some of it back. How much?",tasks:["Apply derates and watch the slack.","Measure what CRPR recovers."],learn:"On-chip variation and CRPR at signoff."},"so-s7":{problem:"A latch lets a slow path borrow time from the next stage. Borrowing hides slack problems if you do not check it.",tasks:["Find how much L1 borrows and the most it could.","Limit borrowing and see the result."],learn:"Latch timing and time borrowing."},"so-s8":{problem:"You have one setup and one hold violation and no time to re-run layout.",tasks:["Run as given, then enable the upsizing ECO and the hold buffer ECO.","Compare eco_after.v and the new slack."],learn:"Fix setup and hold violations with netlist ECOs."},"so-s9":{problem:"A block must pass at every corner. Setup and hold are limited by different corners.",tasks:["Run at ss, tt and ff.","Find which corner limits setup and which limits hold."],learn:"Multi-corner signoff."}};function nt(t,n){let e=document.getElementById("lab-brief");if(!e)return;let a=t[n];if(!a){e.hidden=!0;return}e.querySelector(".brief-problem").textContent=a.problem;let r=e.querySelector(".brief-tasks");r.innerHTML="";for(let i of a.tasks){let c=document.createElement("li");c.textContent=i,r.appendChild(c)}e.querySelector(".brief-learn").textContent=a.learn,e.hidden=!1}var st=[{id:"ws-lab1",group:"STA workshop",tag:"Day 1",title:"Lab 1 \xB7 Your first timing report",script:"run.tcl",files:{"run.tcl":`# Lab 1 (Day 1): read a library, a netlist and constraints, then report the 5 worst paths.
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
`},quiz:[{type:"choice",q:"Which corner gives the worst setup slack?",options:["ss","tt","ff"],answer:0,explain:"Slow silicon, 100 \xB0C, 1.60 V: \u22124.86 ns.",try:!1},{type:"number",q:"What is the worst setup slack at the ss corner?",answer:-4.86,tol:.01,unit:"ns",explain:"",try:!1},{type:"choice",q:"At ss the worst endpoint is a register, but at tt it is an output. Why?",options:["The netlist changes per corner","Output paths have a fixed external delay, while register paths scale with cell delays","The ss library has no outputs","It is random"],answer:1,explain:"Register-to-register paths are all cell delay, so they grow most at the slow corner. The output delay (1 ns) does not scale.",try:!1},{type:"choice",q:"Which corner gives the worst hold slack?",options:["ss","tt","ff"],answer:2,explain:"Fast silicon: data arrives soonest.",try:!1},{type:"number",q:"What is the worst hold slack?",answer:.19,tol:.01,unit:"ns",explain:"_412_ \u2192 _412_ at the ff corner.",try:!1},{type:"number",q:"Try it: set the period to 11.0 in gcd.sdc. What is the worst setup slack at ss?",answer:.45,tol:.01,unit:"ns",explain:"At the slow corner this block needs roughly twice the typical-corner period.",try:!0}]}];var G=`// Two flops feeding a third through a buffer and an AND gate.
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
`,yt=`# One 10 ns clock drives all three flops
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,T=`read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc
`,at=`// The same three-flop circuit built from ASAP7 7 nm predictive cells.
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
`,bt=[{id:"basic",title:"Setup & hold checks",tag:"Basics",files:{"netlist.v":G,"constraints.sdc":yt,"run.tcl":`# Load the library, the netlist and the constraints
${T}
# Worst setup (max) path
report_checks -path_delay max

# Worst hold (min) path. in1 -> r1 has almost no hold margin because the
# input changes at the same instant as the clock edge (input delay 0).
# Try set_input_delay -min 0.2 ... in constraints.sdc and run again.
report_checks -path_delay min

report_wns
report_tns
`}},{id:"violation",title:"Setup violation: fast clock",tag:"Basics",files:{"netlist.v":G,"constraints.sdc":`# Squeeze the clock to 0.5 ns (2 GHz): the r2 -> r3 path no longer fits
create_clock -name clk -period 0.5 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`${T}
# Show slew, load and fanout at every stage of the failing path
report_checks -path_delay max -fields {slew cap fanout} -digits 3

# Every failing endpoint, worst first
report_checks -path_delay max -group_path_count 10 -endpoint_path_count 1 -format end -slack_max 0

report_worst_slack -max
report_tns
`}},{id:"io",title:"Input & output delays",tag:"Constraints",files:{"netlist.v":G,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}

# The block's neighbours use part of the cycle
set_input_delay  0.6 -clock clk {in1 in2}
set_output_delay 0.8 -clock clk [get_ports out]

# Realistic edges and loads at the boundary
set_input_transition 0.1 {in1 in2}
set_load 0.02 [get_ports out]
`,"run.tcl":`${T}
puts "### Input to register"
report_checks -from [get_ports in1] -fields {slew cap}

puts "\\n### Register to output"
report_checks -to [get_ports out] -fields {slew cap}
`}},{id:"exceptions",title:"False & multicycle paths",tag:"Constraints",files:{"netlist.v":G,"constraints.sdc":`create_clock -name clk -period 0.45 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}

# r2 only launches new data every 2 cycles
set_multicycle_path -setup 2 -from [get_cells r2] -to [get_cells r3]
set_multicycle_path -hold  1 -from [get_cells r2] -to [get_cells r3]

# in1 is a static configuration pin: ignore it
set_false_path -from [get_ports in1]
`,"run.tcl":`${T}
# A 0.45 ns clock: without exceptions both paths into r3 would fail.
# r2 -> r3 now passes thanks to the multicycle path...
report_checks -from [get_cells r2] -to [get_cells r3]

# ...but r1 -> r3 still fails. Add a multicycle path for it too and run again.
report_checks -from [get_cells r1] -to [get_cells r3]
report_wns
`}},{id:"ocv",title:"Clock latency, uncertainty & OCV",tag:"Clocks",files:{"netlist.v":G,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}
set_input_delay 0.3 -clock clk {in1 in2}

# Clock tree not built yet: model it
set_clock_latency -source 0.30 [get_clocks clk]
set_clock_latency        0.20 [get_clocks clk]
set_clock_uncertainty -setup 0.10 [get_clocks clk]
set_clock_uncertainty -hold  0.05 [get_clocks clk]
`,"run.tcl":`${T}
# On-chip variation: for setup, data is slowed by 8% and the capture clock sped up by 8%
set_timing_derate -early 0.92
set_timing_derate -late  1.08

report_checks -path_delay min_max -fields {slew}
`}},{id:"corners",title:"Multi-corner: slow & fast",tag:"Corners",files:{"netlist.v":at,"constraints.sdc":`# ASAP7 libraries use picoseconds: a 300 ps clock
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
`}},{id:"spef",title:"Wire parasitics from SPEF",tag:"Parasitics",files:{"netlist.v":at,"constraints.sdc":`create_clock -name clk -period 300 {clk1 clk2 clk3}
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
`},load:{"netlist.v":"gcd_sky130hd.v"}}],m=[...bt.map(t=>({group:"Basic labs",...t})),...st],v=[{id:"basic",group:"Basic labs",title:"Basic labs",note:"Short examples: setup and hold, constraints, OCV, corners, SPEF, a real block with power."},{id:"workshop",group:"STA workshop",title:"STA workshop",note:"The 8-day workshop: 15 labs from your first timing report to a RISC-V core. Each lab has a quiz."},{id:"signoff",group:"Signoff STA",title:"Signoff STA",note:"9 labs on constraints, clocks, exceptions, OCV, latches, ECOs and multi-corner signoff. Each lab has a quiz."}],rt=["sky130hd_tt.lib.gz","asap7_small_ss.lib.gz","asap7_small_ff.lib.gz","gcd_sky130hd.spef.gz","sky130_fd_sc_hd__tt_025C_1v80.lib","sky130_fd_sc_hd__ss_100C_1v60.lib","sky130_fd_sc_hd__ff_n40C_1v95.lib","s27_Early.lib","s27_Late.lib","s27_min.lib","s27_max.lib","ibex_top.v","gcd_sky130hd.v"],it=[["sky130hd_tt.lib.gz","SkyWater 130 nm HD, typical (ns, pF)"],["asap7_small_ss.lib.gz","ASAP7 7 nm, slow; 3 cells (ps, fF)"],["asap7_small_ff.lib.gz","ASAP7 7 nm, fast; 3 cells (ps, fF)"],["gcd_sky130hd.spef.gz","Parasitics for the GCD block"],["sky130_fd_sc_hd__tt_025C_1v80.lib","Sky130 HD typical, 25 \xB0C, 1.80 V (workshop)"],["sky130_fd_sc_hd__ss_100C_1v60.lib","Sky130 HD slow, 100 \xB0C, 1.60 V"],["sky130_fd_sc_hd__ff_n40C_1v95.lib","Sky130 HD fast, \u221240 \xB0C, 1.95 V"],["s27_Late.lib","TAU 2015 contest library, late/max (ps); s27_max.lib is a copy"],["s27_Early.lib","TAU 2015 contest library, early/min (ps); s27_min.lib is a copy"],["ibex_top.v","ibex RISC-V core netlist, Sky130 HD (2.3 MB)"]];var l=t=>document.querySelector(t),lt=6e4,dt="vdd-sta-lab-v1",b="run.tcl",s={example:m[0].id,track:"basic",script:b,files:{},order:[],current:b,running:!1,ready:!1,worker:null,timer:null},ut=()=>s.order.filter(t=>/\.tcl$/i.test(t));function D(){return s.files[s.script]!==void 0?s.script:s.files[b]!==void 0?b:ut()[0]||b}function xt(){let t=l("#script-wrap"),n=l("#script"),e=ut(),a=D();t.hidden=!(e.length>1||e.length===1&&a!==b),n.innerHTML="";for(let r of e){let i=document.createElement("option");i.value=r,i.textContent=r,n.appendChild(i)}n.value=a}var g=new Map,o=null,y=l("#editor textarea");function H(t){return/\.s?v$/i.test(t)?"verilog":/\.(tcl|sdc)$/i.test(t)?"tcl":"text/plain"}window.CodeMirror?(o=window.CodeMirror.fromTextArea(y,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:t=>t.replaceSelection("  ")}}),o.on("change",()=>{s.files[s.current]=o.getValue(),O()})):(y.classList.add("plain-editor"),y.addEventListener("input",()=>{s.files[s.current]=y.value,O()}));function B(t){o?s.files[s.current]=o.getValue():s.files[s.current]=y.value,s.current=t,o?(g.has(t)||g.set(t,window.CodeMirror.Doc(s.files[t]??"",H(t))),o.swapDoc(g.get(t)),setTimeout(()=>o.refresh(),0)):y.value=s.files[t]??"",P()}function wt(t,n){B(t),o&&(o.focus(),o.setCursor({line:n-1,ch:0}),o.addLineClass(n-1,"background","cm-errline"),setTimeout(()=>o.removeLineClass(n-1,"background","cm-errline"),2500),o.scrollIntoView({line:n-1,ch:0},80))}function K(t,n,e){g.clear(),s.files={...t},s.order=n||Object.keys(t),s.current=e&&s.order.includes(e)?e:s.order.includes(D())?D():s.order[0],o?(g.set(s.current,window.CodeMirror.Doc(s.files[s.current]??"",H(s.current))),o.swapDoc(g.get(s.current))):y.value=s.files[s.current]??"",P()}function P(){let t=l("#tabs");t.innerHTML="";for(let n of s.order){let e=document.createElement("button");if(e.type="button",e.className="tab"+(n===s.current?" active":""),e.setAttribute("role","tab"),e.setAttribute("aria-selected",n===s.current?"true":"false"),e.textContent=n,e.addEventListener("click",()=>B(n)),t.appendChild(e),n===s.current&&s.order.length>1){let a=document.createElement("button");a.type="button",a.className="tab-x",a.textContent="\xD7",a.title="Remove "+n,a.setAttribute("aria-label","Remove file "+n),a.addEventListener("click",()=>vt(n)),t.appendChild(a)}}xt()}function ht(t,n,e){s.files[t]===void 0&&s.order.push(t),s.files[t]=n,g.delete(t),e?P():B(t),O()}function vt(t){o&&(s.files[s.current]=o.getValue()),delete s.files[t],g.delete(t),s.order=s.order.filter(n=>n!==t),s.current=s.order[0],o?(g.has(s.current)||g.set(s.current,window.CodeMirror.Doc(s.files[s.current]??"",H(s.current))),o.swapDoc(g.get(s.current))):y.value=s.files[s.current]??"",P(),O()}function Ct(){let t=(window.prompt("New file name (for example mode2.sdc, extra.tcl, top.v):","")||"").trim();if(t){if(!/^[\w.+-]+$/.test(t)){x("File names can use letters, digits, dot, dash and underscore only.","err");return}if(s.files[t]!==void 0){B(t);return}ht(t,"")}}var L=t=>{let n=m.find(e=>e.id===t);return n?(v.find(e=>e.group===n.group)||v[0]).id:null},w=()=>v.find(t=>t.id===s.track)||v[0];function $(){let t=l("#tracks");t.innerHTML="";for(let e of v){let a=document.createElement("button");a.type="button",a.className="track"+(e.id===w().id?" active":""),a.setAttribute("role","tab"),a.setAttribute("aria-selected",e.id===w().id?"true":"false");let r=m.filter(i=>i.group===e.group).length;a.innerHTML='<span class="track-t"></span><span class="track-n"></span>',a.querySelector(".track-t").textContent=e.title,a.querySelector(".track-n").textContent=r+" labs",a.addEventListener("click",()=>St(e.id)),t.appendChild(a)}let n=l("#track-note");if(n.textContent=w().note+" ",w().id==="workshop"){let e=document.createElement("a");e.href="STA_Workshop_Labs.pdf",e.target="_blank",e.rel="noopener",e.className="btn small",e.textContent="Workshop slides (PDF)",n.appendChild(e)}}async function St(t,n){s.track=t;try{let e=new URL(location.href);e.searchParams.set("track",t),history.replaceState(null,"",e.pathname+e.search+location.hash)}catch{}$(),!n&&L(s.example)!==t?await N(m.find(e=>e.group===w().group).id):R()}function R(){let t=l("#examples");t.innerHTML="";for(let e of m.filter(a=>a.group===w().group)){let a=document.createElement("button");a.type="button",a.className="ex"+(e.id===s.example?" active":""),a.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',a.querySelector(".ex-tag").textContent=e.tag;let r=e.quiz&&e.quiz.length?I()[e.id]:null;if(r&&r.checked){let i=document.createElement("span");i.className="ex-done",i.textContent=(r.score===r.total?"\u2713 ":"")+`quiz ${r.score}/${r.total}`,a.querySelector(".ex-tag").appendChild(i)}a.querySelector(".ex-title").textContent=e.title,a.addEventListener("click",()=>N(e.id)),t.appendChild(a)}let n=l("#ex-select");n.innerHTML=m.filter(e=>e.group===w().group).map(e=>`<option value="${e.id}">${e.group!=="Basic labs"?e.tag+" \xB7 ":""}${e.title}</option>`).join(""),s.example&&(n.value=s.example)}async function N(t){let n=m.find(r=>r.id===t)||m[0];s.example=n.id,L(n.id)!==s.track&&(s.track=L(n.id),$()),s.script=n.script||b;let e={};for(let[r,i]of Object.entries(n.files))if(i!==null)e[r]=i;else try{let c=await fetch(new URL("data/"+(n.load||{})[r],location.href));e[r]=c.ok?await c.text():`// Could not load ${n.load[r]}`}catch{e[r]=`// Could not load ${n.load[r]}`}let a=Object.keys(n.files).sort((r,i)=>ct(r)-ct(i));K(e,a,s.script),R(),V(),W(),mt(),Z(null),E(s.ready?"Ready":"Loading OpenSTA\u2026",s.ready?"idle":"busy")}var kt="vdd-sta-quiz-v1";function I(){try{return JSON.parse(localStorage.getItem(kt)||"{}")||{}}catch{return{}}}function M(t){try{localStorage.setItem(kt,JSON.stringify(t))}catch{}}var U=()=>m.find(t=>t.id===s.example&&t.quiz&&t.quiz.length);function At(t){let n=String(t||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return n?parseFloat(n[0]):NaN}function Et(t,n){if(t.type==="choice")return n!=null&&+n===t.answer;let e=At(n);return isFinite(e)&&Math.abs(e-t.answer)<=(t.tol??.01)+1e-9}var Gt=t=>t.type==="choice"?t.options[t.answer]:`${Number.isInteger(t.answer)?t.answer:t.answer.toFixed(2)}${t.unit?" "+t.unit:""}`;function V(){nt(et,s.example);let t=l("#quiz"),n=l("#quiz-list"),e=U();if(!e){t.hidden=!0;return}t.hidden=!1;let a=I()[e.id]||{},r=a.a||[];n.innerHTML="",e.quiz.forEach((i,c)=>{let k=document.createElement("li"),f=document.createElement("div");if(f.className="quiz-q",i.try){let _=document.createElement("span");_.className="quiz-try",_.textContent="Try it",f.appendChild(_)}let d=i.q.replace(/^Try it: /,"");if(f.appendChild(document.createTextNode(d.charAt(0).toUpperCase()+d.slice(1))),k.appendChild(f),i.type==="choice"){let _=document.createElement("div");_.className="quiz-opts",_.setAttribute("role","radiogroup"),i.options.forEach((p,h)=>{let C=document.createElement("label"),S=document.createElement("input");S.type="radio",S.name=`q${c}`,S.value=h,r[c]!==void 0&&+r[c]===h&&(S.checked=!0),S.addEventListener("change",()=>ot(e,c,h));let tt=document.createElement("span");tt.textContent=p,C.append(S,tt),_.appendChild(C)}),k.appendChild(_)}else{let _=document.createElement("div");_.className="quiz-num";let p=document.createElement("input");if(p.type="text",p.inputMode="decimal",p.autocomplete="off",p.setAttribute("aria-label","Answer to question "+(c+1)),p.placeholder="e.g. -1.23",r[c]!==void 0&&(p.value=r[c]),p.addEventListener("input",()=>ot(e,c,p.value)),p.addEventListener("keydown",h=>{h.key==="Enter"&&z()}),_.appendChild(p),i.unit){let h=document.createElement("span");h.className="unit",h.textContent=i.unit,_.appendChild(h)}k.appendChild(_)}let u=document.createElement("div");u.className="quiz-fb",u.hidden=!0,u.setAttribute("aria-live","polite"),k.appendChild(u),n.appendChild(k)}),a.checked?z(!0):ft(null)}function ot(t,n,e){let a=I(),r=a[t.id]||{a:[]};r.a=r.a||[],r.a[n]=e,r.checked=!1,a[t.id]=r,M(a);let i=l("#quiz-list").children[n]?.querySelector(".quiz-fb");i&&(i.hidden=!0)}function ft(t,n){let e=l("#quiz-score");if(t===null){e.textContent="",e.classList.remove("done");return}e.textContent=`${t} / ${n} correct`,e.classList.toggle("done",t===n)}function z(t){let n=U();if(!n)return;let e=I(),a=e[n.id]||{a:[]},r=0;n.quiz.forEach((i,c)=>{let k=l("#quiz-list").children[c],f=i.type==="choice"?(k.querySelector("input:checked")||{}).value:k.querySelector("input").value;a.a[c]=f;let d=k.querySelector(".quiz-fb"),u=f===void 0||f==="",_=!u&&Et(i,f);_&&r++,d.hidden=!1,d.className="quiz-fb "+(_?"ok":"bad"),d.innerHTML="";let p=document.createElement("b");p.textContent=_?"Correct.":u?"Not answered yet.":"Not quite.",d.appendChild(p),_&&i.explain?d.appendChild(document.createTextNode(i.explain)):!_&&!u&&d.appendChild(document.createTextNode(i.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),a.checked=!0,a.score=r,a.total=n.quiz.length,e[n.id]=a,M(e),ft(r,n.quiz.length),t||R()}function Tt(){let t=U();t&&t.quiz.forEach((n,e)=>{let a=l("#quiz-list").children[e].querySelector(".quiz-fb");a.hidden=!1,a.className="quiz-fb shown",a.innerHTML="";let r=document.createElement("b");r.textContent="Answer: "+Gt(n)+".",a.appendChild(r),n.explain&&a.appendChild(document.createTextNode(n.explain))})}function qt(){let t=U();if(!t)return;let n=I();delete n[t.id],M(n),V(),R()}function ct(t){return t===s.script?-1:/\.tcl$/.test(t)?0:/\.s?v$/.test(t)?1:/\.sdc$/.test(t)?2:3}var _t=null;function O(){clearTimeout(_t),_t=setTimeout(W,400)}function W(){try{localStorage.setItem(dt,JSON.stringify({example:s.example,script:s.script,files:s.files,order:s.order,current:s.current}))}catch{}}function Dt(){try{let t=JSON.parse(localStorage.getItem(dt)||"null");if(t&&t.files&&t.order)return t}catch{}return null}async function Lt(){let t=JSON.stringify({f:s.files,o:s.order,s:D()}),n=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),e=new Uint8Array(await new Response(n).arrayBuffer()),a="";for(let r of e)a+=String.fromCharCode(r);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Nt(t){let n=atob(t.replace(/-/g,"+").replace(/_/g,"/")),e=new Blob([Uint8Array.from(n,a=>a.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(e).text())}async function q(t,n){let e=!1;try{await navigator.clipboard.writeText(t),e=!0}catch{let r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{e=document.execCommand("copy")}catch{}r.remove()}if(n){let a=n.dataset.label||n.textContent;n.dataset.label=a,n.textContent=e?"Copied":"Press Ctrl+C",n.classList.toggle("ok",e),setTimeout(()=>{n.textContent=a,n.classList.remove("ok")},1600)}}function Rt(t,n){let e=document.createElement("a");e.href=URL.createObjectURL(new Blob([n],{type:"text/plain"})),e.download=t,document.body.appendChild(e),e.click(),setTimeout(()=>{URL.revokeObjectURL(e.href),e.remove()},500)}var A=l("#console"),X=[];function mt(){A.textContent="",X=[]}function x(t,n){X.push(t);let e=document.createElement("div");e.className="ln "+(n||"");let a=/\b([\w.-]+\.(?:v|sdc|tcl|spef)),? (?:line )?(\d+)\b/.exec(t);if(a&&s.files[a[1]]!==void 0){let r=t.indexOf(a[0]);e.appendChild(document.createTextNode(t.slice(0,r)));let i=document.createElement("button");i.type="button",i.className="loc",i.textContent=a[0],i.addEventListener("click",()=>wt(a[1],+a[2])),e.appendChild(i),e.appendChild(document.createTextNode(t.slice(r+a[0].length)))}else e.textContent=t;/slack \(VIOLATED\)/.test(t)?e.classList.add("viol"):/slack \(MET\)/.test(t)?e.classList.add("met"):/^(Error|ERROR)|\bError:|Internal error/.test(t)?e.classList.add("err"):/^Warning/.test(t)?e.classList.add("warn"):/^(Startpoint|Endpoint):/.test(t)?e.classList.add("head"):/^###/.test(t)&&e.classList.add("sec"),A.appendChild(e),A.childElementCount>2e4&&A.firstChild.remove()}function Z(t){let n=l("#summary");if(!t){n.innerHTML="",n.hidden=!0;return}let e=[],a=d=>{let u=d.exec(t);return u?parseFloat(u[1]):null},r=a(/^wns(?: max)? (-?[\d.eE+-]+)/m)??a(/^worst slack max (-?[\d.eE+-]+)/m),i=a(/^tns(?: max)? (-?[\d.eE+-]+)/m),c=(t.match(/slack \(VIOLATED\)/g)||[]).length,k=(t.match(/slack \(MET\)/g)||[]).length;r!==null&&e.push(["WNS",r.toFixed(3),r<0?"bad":"good"]),i!==null&&e.push(["TNS",i.toFixed(3),i<0?"bad":"good"]),c+k&&e.push(["Paths reported",`${k} met \xB7 ${c} violated`,c?"bad":"good"]);let f=/^Total\s+\S+\s+\S+\s+\S+\s+(\S+)/m.exec(t);f&&e.push(["Total power",It(parseFloat(f[1])),""]),n.innerHTML="";for(let[d,u,_]of e){let p=document.createElement("div");p.className="chip "+_;let h=document.createElement("span");h.className="k",h.textContent=d;let C=document.createElement("span");C.className="v",C.textContent=u,p.append(h,C),n.appendChild(p)}n.hidden=e.length===0}function It(t){return isFinite(t)?t>=1?t.toFixed(3)+" W":t>=.001?(t*1e3).toFixed(3)+" mW":(t*1e6).toFixed(2)+" \xB5W":"\u2013"}function E(t,n){let e=l("#status");e.textContent=t,e.dataset.kind=n}function j(){s.worker&&s.worker.terminate(),s.ready=!1;let t=new Worker(new URL("worker.js",location.href).href);t.onmessage=n=>Ft(n.data),t.onerror=n=>{x("OpenSTA failed to start: "+(n.message||"worker error"),"err"),J(!1)},t.postMessage({type:"load",base:new URL(".",location.href).href}),s.worker=t}var Q=[],Y=null;function F(){Y=null;for(let[t,n]of Q)x(t,n);Q=[],A.scrollTop=A.scrollHeight}function Ft(t){if(t.type==="ready")s.ready=!0,s.running||E("Ready","idle");else if(t.type==="stage")E(t.stage+"\u2026","busy");else if(t.type==="file"){F();let n=s.files[t.name]===void 0;ht(t.name,t.content,!0),x(`\u2500\u2500 OpenSTA ${n?"wrote":"updated"} ${t.name}: open its tab to read it \u2500\u2500`,"meta")}else t.type==="line"?(Q.push([t.line,t.stream==="err"?"stderr":""]),Y||(Y=requestAnimationFrame(F))):t.type==="done"&&(F(),t.ok?x(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta"):x(t.rc===-1?"\u2500\u2500 OpenSTA stopped with an internal error \u2500\u2500":`\u2500\u2500 OpenSTA exited with code ${t.rc}: check the errors above \u2500\u2500`,"meta err"),Z(X.join(`
`)),J(t.ok))}function pt(){if(s.running)return;window.vddSubscribe&&window.vddSubscribe(),o?s.files[s.current]=o.getValue():s.files[s.current]=y.value;let t=D();if(s.files[t]===void 0){x(`Add a Tcl script (for example ${b}): it is what OpenSTA runs.`,"err");return}s.worker||j(),W(),mt(),Z(null),s.running=!0,l("#run").disabled=!0,l("#stop").disabled=!1,E(s.ready?"Running OpenSTA\u2026":"Loading OpenSTA\u2026","busy"),x(`$ sta ${t}`,"meta"),s.worker.postMessage({type:"run",files:{...s.files},script:t,dataFiles:rt,base:new URL(".",location.href).href}),clearTimeout(s.timer),s.timer=setTimeout(()=>gt(`Stopped after ${lt/1e3} s.`),lt)}function gt(t){s.running&&(F(),x(t||"Stopped.","meta err"),J(!1,!0),j())}function J(t,n){clearTimeout(s.timer),s.running=!1,l("#run").disabled=!1,l("#stop").disabled=!0,E(n?"Stopped":t?"Done":"Errors",n||!t?"err":"ok")}function Ot(){l("#run").addEventListener("click",pt),l("#stop").addEventListener("click",()=>gt()),l("#script").addEventListener("change",n=>{s.script=n.target.value,W()}),l("#new-file").addEventListener("click",Ct),l("#quiz-check").addEventListener("click",()=>z()),l("#quiz-reveal").addEventListener("click",Tt),l("#quiz-reset").addEventListener("click",qt),l("#ex-select").addEventListener("change",n=>N(n.target.value)),l("#reset").addEventListener("click",()=>N(s.example||m[0].id)),l("#copy-file").addEventListener("click",n=>q(o?o.getValue():y.value,n.currentTarget)),l("#download-file").addEventListener("click",()=>Rt(s.current,o?o.getValue():y.value)),l("#copy-output").addEventListener("click",n=>q(X.join(`
`),n.currentTarget)),l("#share").addEventListener("click",async n=>{let e=n.currentTarget;o&&(s.files[s.current]=o.getValue());try{let a=await Lt();history.replaceState(null,"","#code="+a),q(location.href.split("#")[0]+"#code="+a,e)}catch{q(location.href,e)}}),document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&(n.preventDefault(),pt())});let t=l("#libs");t.innerHTML="";for(let[n,e]of it){let a=document.createElement("li"),r=document.createElement("button");r.type="button",r.className="libname",r.textContent=n,r.title="Copy file name",r.addEventListener("click",()=>q(n,null));let i=document.createElement("span");i.textContent=e,a.append(r,i),t.appendChild(a)}}async function Bt(){Ot();let t=!1,n=new URLSearchParams(location.hash.slice(1)).get("code");if(n)try{let r=await Nt(n);s.example=null,s.script=r.s||b,s.order=r.o,s.files=r.f,K(r.f,r.o,s.script),t=!0}catch{}if(!t){let r=Dt();r&&(s.example=r.example,s.script=r.script||b,s.files=r.files,s.order=r.order,K(r.files,r.order,r.current),t=!0)}let e=new URLSearchParams(location.search).get("track"),a=v.some(r=>r.id===e);s.track=a?e:L(s.example)||"basic",$(),!t||a&&L(s.example)!==e&&!n?await N(m.find(r=>r.group===w().group).id):(R(),V()),E("Loading OpenSTA\u2026","busy"),j()}Bt();})();
