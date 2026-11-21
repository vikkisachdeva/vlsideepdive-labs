(()=>{var H=[{id:"ws-lab1",group:"STA workshop",tag:"Day 1",title:"Lab 1 \xB7 Your first timing report",script:"run.tcl",files:{"run.tcl":`# Lab 1 (Day 1): read a library, a netlist and constraints, then report the 5 worst paths.
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
`},quiz:[{type:"number",q:"At a 10 ns clock, what is the worst negative slack (WNS)?",answer:-5.04,tol:.01,unit:"ns",explain:"From report_wns.",try:!1},{type:"choice",q:"Which path group has the worst slack?",options:["reg2reg","reg2out","in2reg","in2out"],answer:1,explain:"reg2out: instr_addr_o[30] misses by 5.04 ns (the 3 ns output delay eats into the cycle).",try:!1},{type:"number",q:"What is the worst reg2reg slack?",answer:-3.62,tol:.01,unit:"ns",explain:"Endpoint _24645_/D.",try:!1},{type:"choice",q:"Which input port fails max capacitance?",options:["clk_i","rst_ni","test_en_i","fetch_enable_i"],answer:1,explain:"rst_ni fans out to almost every flop. Without buffering (this netlist is unplaced), it sees 2.55 pF.",try:!1},{type:"number",q:"Try it: what is the smallest whole-number clock period (ns) at which reg2reg meets timing?",answer:14,tol:0,unit:"ns",explain:"At 13 ns reg2reg is \u22120.62; at 14 ns it is +0.38.",try:!0}]}];var A=`// Two flops feeding a third through a buffer and an AND gate.
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
`,dt=`# One 10 ns clock drives all three flops
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,C=`read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc
`,j=`// The same three-flop circuit built from ASAP7 7 nm predictive cells.
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
`,kt=[{id:"basic",title:"Setup & hold checks",tag:"Basics",files:{"netlist.v":A,"constraints.sdc":dt,"run.tcl":`# Load the library, the netlist and the constraints
${C}
# Worst setup (max) path
report_checks -path_delay max

# Worst hold (min) path. in1 -> r1 has almost no hold margin because the
# input changes at the same instant as the clock edge (input delay 0).
# Try set_input_delay -min 0.2 ... in constraints.sdc and run again.
report_checks -path_delay min

report_wns
report_tns
`}},{id:"violation",title:"Setup violation: fast clock",tag:"Basics",files:{"netlist.v":A,"constraints.sdc":`# Squeeze the clock to 0.5 ns (2 GHz): the r2 -> r3 path no longer fits
create_clock -name clk -period 0.5 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`${C}
# Show slew, load and fanout at every stage of the failing path
report_checks -path_delay max -fields {slew cap fanout} -digits 3

# Every failing endpoint, worst first
report_checks -path_delay max -group_path_count 10 -endpoint_path_count 1 -format end -slack_max 0

report_worst_slack -max
report_tns
`}},{id:"io",title:"Input & output delays",tag:"Constraints",files:{"netlist.v":A,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}

# The block's neighbours use part of the cycle
set_input_delay  0.6 -clock clk {in1 in2}
set_output_delay 0.8 -clock clk [get_ports out]

# Realistic edges and loads at the boundary
set_input_transition 0.1 {in1 in2}
set_load 0.02 [get_ports out]
`,"run.tcl":`${C}
puts "### Input to register"
report_checks -from [get_ports in1] -fields {slew cap}

puts "\\n### Register to output"
report_checks -to [get_ports out] -fields {slew cap}
`}},{id:"exceptions",title:"False & multicycle paths",tag:"Constraints",files:{"netlist.v":A,"constraints.sdc":`create_clock -name clk -period 0.45 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}

# r2 only launches new data every 2 cycles
set_multicycle_path -setup 2 -from [get_cells r2] -to [get_cells r3]
set_multicycle_path -hold  1 -from [get_cells r2] -to [get_cells r3]

# in1 is a static configuration pin: ignore it
set_false_path -from [get_ports in1]
`,"run.tcl":`${C}
# A 0.45 ns clock: without exceptions both paths into r3 would fail.
# r2 -> r3 now passes thanks to the multicycle path...
report_checks -from [get_cells r2] -to [get_cells r3]

# ...but r1 -> r3 still fails. Add a multicycle path for it too and run again.
report_checks -from [get_cells r1] -to [get_cells r3]
report_wns
`}},{id:"ocv",title:"Clock latency, uncertainty & OCV",tag:"Clocks",files:{"netlist.v":A,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}
set_input_delay 0.3 -clock clk {in1 in2}

# Clock tree not built yet: model it
set_clock_latency -source 0.30 [get_clocks clk]
set_clock_latency        0.20 [get_clocks clk]
set_clock_uncertainty -setup 0.10 [get_clocks clk]
set_clock_uncertainty -hold  0.05 [get_clocks clk]
`,"run.tcl":`${C}
# On-chip variation: for setup, data is slowed by 8% and the capture clock sped up by 8%
set_timing_derate -early 0.92
set_timing_derate -late  1.08

report_checks -path_delay min_max -fields {slew}
`}},{id:"corners",title:"Multi-corner: slow & fast",tag:"Corners",files:{"netlist.v":j,"constraints.sdc":`# ASAP7 libraries use picoseconds: a 300 ps clock
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
`}},{id:"spef",title:"Wire parasitics from SPEF",tag:"Parasitics",files:{"netlist.v":j,"constraints.sdc":`create_clock -name clk -period 300 {clk1 clk2 clk3}
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
`},load:{"netlist.v":"gcd_sky130hd.v"}}],y=[...kt.map(t=>({group:"Quick examples",...t})),...H],J=["sky130hd_tt.lib.gz","asap7_small_ss.lib.gz","asap7_small_ff.lib.gz","gcd_sky130hd.spef.gz","sky130_fd_sc_hd__tt_025C_1v80.lib","sky130_fd_sc_hd__ss_100C_1v60.lib","sky130_fd_sc_hd__ff_n40C_1v95.lib","s27_Early.lib","s27_Late.lib","s27_min.lib","s27_max.lib","ibex_top.v"],tt=[["sky130hd_tt.lib.gz","SkyWater 130 nm HD, typical (ns, pF)"],["asap7_small_ss.lib.gz","ASAP7 7 nm, slow; 3 cells (ps, fF)"],["asap7_small_ff.lib.gz","ASAP7 7 nm, fast; 3 cells (ps, fF)"],["gcd_sky130hd.spef.gz","Parasitics for the GCD block"],["sky130_fd_sc_hd__tt_025C_1v80.lib","Sky130 HD typical, 25 \xB0C, 1.80 V (workshop)"],["sky130_fd_sc_hd__ss_100C_1v60.lib","Sky130 HD slow, 100 \xB0C, 1.60 V"],["sky130_fd_sc_hd__ff_n40C_1v95.lib","Sky130 HD fast, \u221240 \xB0C, 1.95 V"],["s27_Late.lib","TAU 2015 contest library, late/max (ps); s27_max.lib is a copy"],["s27_Early.lib","TAU 2015 contest library, early/min (ps); s27_min.lib is a copy"],["ibex_top.v","ibex RISC-V core netlist, Sky130 HD (2.3 MB)"]];var a=t=>document.querySelector(t),et=6e4,rt="vdd-sta-lab-v1",x="run.tcl",n={example:y[0].id,script:x,files:{},order:[],current:x,running:!1,ready:!1,worker:null,timer:null},at=()=>n.order.filter(t=>/\.tcl$/i.test(t));function T(){return n.files[n.script]!==void 0?n.script:n.files[x]!==void 0?x:at()[0]||x}function mt(){let t=a("#script-wrap"),e=a("#script"),s=at(),l=T();t.hidden=!(s.length>1||s.length===1&&l!==x),e.innerHTML="";for(let i of s){let r=document.createElement("option");r.value=i,r.textContent=i,e.appendChild(r)}e.value=l}var f=new Map,_=null,g=a("#editor textarea");function X(t){return/\.s?v$/i.test(t)?"verilog":/\.(tcl|sdc)$/i.test(t)?"tcl":"text/plain"}window.CodeMirror?(_=window.CodeMirror.fromTextArea(g,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:t=>t.replaceSelection("  ")}}),_.on("change",()=>{n.files[n.current]=_.getValue(),I()})):(g.classList.add("plain-editor"),g.addEventListener("input",()=>{n.files[n.current]=g.value,I()}));function q(t){_?n.files[n.current]=_.getValue():n.files[n.current]=g.value,n.current=t,_?(f.has(t)||f.set(t,window.CodeMirror.Doc(n.files[t]??"",X(t))),_.swapDoc(f.get(t)),setTimeout(()=>_.refresh(),0)):g.value=n.files[t]??"",F()}function ht(t,e){q(t),_&&(_.focus(),_.setCursor({line:e-1,ch:0}),_.addLineClass(e-1,"background","cm-errline"),setTimeout(()=>_.removeLineClass(e-1,"background","cm-errline"),2500),_.scrollIntoView({line:e-1,ch:0},80))}function B(t,e,s){f.clear(),n.files={...t},n.order=e||Object.keys(t),n.current=s&&n.order.includes(s)?s:n.order.includes(T())?T():n.order[0],_?(f.set(n.current,window.CodeMirror.Doc(n.files[n.current]??"",X(n.current))),_.swapDoc(f.get(n.current))):g.value=n.files[n.current]??"",F()}function F(){let t=a("#tabs");t.innerHTML="";for(let e of n.order){let s=document.createElement("button");if(s.type="button",s.className="tab"+(e===n.current?" active":""),s.setAttribute("role","tab"),s.setAttribute("aria-selected",e===n.current?"true":"false"),s.textContent=e,s.addEventListener("click",()=>q(e)),t.appendChild(s),e===n.current&&n.order.length>1){let l=document.createElement("button");l.type="button",l.className="tab-x",l.textContent="\xD7",l.title="Remove "+e,l.setAttribute("aria-label","Remove file "+e),l.addEventListener("click",()=>ft(e)),t.appendChild(l)}}mt()}function _t(t,e,s){n.files[t]===void 0&&n.order.push(t),n.files[t]=e,f.delete(t),s?F():q(t),I()}function ft(t){_&&(n.files[n.current]=_.getValue()),delete n.files[t],f.delete(t),n.order=n.order.filter(e=>e!==t),n.current=n.order[0],_?(f.has(n.current)||f.set(n.current,window.CodeMirror.Doc(n.files[n.current]??"",X(n.current))),_.swapDoc(f.get(n.current))):g.value=n.files[n.current]??"",F(),I()}function gt(){let t=(window.prompt("New file name (for example mode2.sdc, extra.tcl, top.v):","")||"").trim();if(t){if(!/^[\w.+-]+$/.test(t)){b("File names can use letters, digits, dot, dash and underscore only.","err");return}if(n.files[t]!==void 0){q(t);return}_t(t,"")}}function R(){let t=a("#examples");t.innerHTML="";let e=null;for(let i of y){if(i.group!==e){e=i.group;let p=document.createElement("h3");if(p.className="ex-group",p.textContent=e,t.appendChild(p),i.group==="STA workshop"){let d=document.createElement("p");d.className="ex-note",d.innerHTML='The 8-day workshop labs. <a href="STA_Workshop_Labs.pdf" target="_blank" rel="noopener">Slides (PDF)</a>',t.appendChild(d)}}let r=document.createElement("button");r.type="button",r.className="ex"+(i.id===n.example?" active":""),r.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',r.querySelector(".ex-tag").textContent=i.tag;let o=i.quiz&&i.quiz.length?N()[i.id]:null;if(o&&o.checked){let p=document.createElement("span");p.className="ex-done",p.textContent=(o.score===o.total?"\u2713 ":"")+`quiz ${o.score}/${o.total}`,r.querySelector(".ex-tag").appendChild(p)}r.querySelector(".ex-title").textContent=i.title,r.addEventListener("click",()=>L(i.id)),t.appendChild(r)}let s=a("#ex-select"),l=[...new Set(y.map(i=>i.group))];s.innerHTML=l.map(i=>`<optgroup label="${i}">`+y.filter(r=>r.group===i).map(r=>`<option value="${r.id}">${r.group==="STA workshop"?r.tag+" \xB7 ":""}${r.title}</option>`).join("")+"</optgroup>").join(""),n.example&&(s.value=n.example)}async function L(t){let e=y.find(i=>i.id===t)||y[0];n.example=e.id,n.script=e.script||x;let s={};for(let[i,r]of Object.entries(e.files))if(r!==null)s[i]=r;else try{let o=await fetch(new URL("data/"+(e.load||{})[i],location.href));s[i]=o.ok?await o.text():`// Could not load ${e.load[i]}`}catch{s[i]=`// Could not load ${e.load[i]}`}let l=Object.keys(e.files).sort((i,r)=>st(i)-st(r));B(s,l,n.script),R(),Y(),O(),pt(),$(null),v(n.ready?"Ready":"Loading OpenSTA\u2026",n.ready?"idle":"busy")}var ot="vdd-sta-quiz-v1";function N(){try{return JSON.parse(localStorage.getItem(ot)||"{}")||{}}catch{return{}}}function Q(t){try{localStorage.setItem(ot,JSON.stringify(t))}catch{}}var U=()=>y.find(t=>t.id===n.example&&t.quiz&&t.quiz.length);function yt(t){let e=String(t||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return e?parseFloat(e[0]):NaN}function xt(t,e){if(t.type==="choice")return e!=null&&+e===t.answer;let s=yt(e);return isFinite(s)&&Math.abs(s-t.answer)<=(t.tol??.01)+1e-9}var bt=t=>t.type==="choice"?t.options[t.answer]:`${t.answer}${t.unit?" "+t.unit:""}`;function Y(){let t=a("#quiz"),e=a("#quiz-list"),s=U();if(!s){t.hidden=!0;return}t.hidden=!1;let l=N()[s.id]||{},i=l.a||[];e.innerHTML="",s.quiz.forEach((r,o)=>{let p=document.createElement("li"),d=document.createElement("div");if(d.className="quiz-q",r.try){let c=document.createElement("span");c.className="quiz-try",c.textContent="Try it",d.appendChild(c)}let k=r.q.replace(/^Try it: /,"");if(d.appendChild(document.createTextNode(k.charAt(0).toUpperCase()+k.slice(1))),p.appendChild(d),r.type==="choice"){let c=document.createElement("div");c.className="quiz-opts",c.setAttribute("role","radiogroup"),r.options.forEach((u,h)=>{let w=document.createElement("label"),G=document.createElement("input");G.type="radio",G.name=`q${o}`,G.value=h,i[o]!==void 0&&+i[o]===h&&(G.checked=!0),G.addEventListener("change",()=>nt(s,o,h));let Z=document.createElement("span");Z.textContent=u,w.append(G,Z),c.appendChild(w)}),p.appendChild(c)}else{let c=document.createElement("div");c.className="quiz-num";let u=document.createElement("input");if(u.type="text",u.inputMode="decimal",u.autocomplete="off",u.setAttribute("aria-label","Answer to question "+(o+1)),u.placeholder="e.g. -1.23",i[o]!==void 0&&(u.value=i[o]),u.addEventListener("input",()=>nt(s,o,u.value)),u.addEventListener("keydown",h=>{h.key==="Enter"&&W()}),c.appendChild(u),r.unit){let h=document.createElement("span");h.className="unit",h.textContent=r.unit,c.appendChild(h)}p.appendChild(c)}let m=document.createElement("div");m.className="quiz-fb",m.hidden=!0,m.setAttribute("aria-live","polite"),p.appendChild(m),e.appendChild(p)}),l.checked?W(!0):ct(null)}function nt(t,e,s){let l=N(),i=l[t.id]||{a:[]};i.a=i.a||[],i.a[e]=s,i.checked=!1,l[t.id]=i,Q(l);let r=a("#quiz-list").children[e]?.querySelector(".quiz-fb");r&&(r.hidden=!0)}function ct(t,e){let s=a("#quiz-score");if(t===null){s.textContent="",s.classList.remove("done");return}s.textContent=`${t} / ${e} correct`,s.classList.toggle("done",t===e)}function W(t){let e=U();if(!e)return;let s=N(),l=s[e.id]||{a:[]},i=0;e.quiz.forEach((r,o)=>{let p=a("#quiz-list").children[o],d=r.type==="choice"?(p.querySelector("input:checked")||{}).value:p.querySelector("input").value;l.a[o]=d;let k=p.querySelector(".quiz-fb"),m=d===void 0||d==="",c=!m&&xt(r,d);c&&i++,k.hidden=!1,k.className="quiz-fb "+(c?"ok":"bad"),k.innerHTML="";let u=document.createElement("b");u.textContent=c?"Correct.":m?"Not answered yet.":"Not quite.",k.appendChild(u),c&&r.explain?k.appendChild(document.createTextNode(r.explain)):!c&&!m&&k.appendChild(document.createTextNode(r.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),l.checked=!0,l.score=i,l.total=e.quiz.length,s[e.id]=l,Q(s),ct(i,e.quiz.length),t||R()}function wt(){let t=U();t&&t.quiz.forEach((e,s)=>{let l=a("#quiz-list").children[s].querySelector(".quiz-fb");l.hidden=!1,l.className="quiz-fb shown",l.innerHTML="";let i=document.createElement("b");i.textContent="Answer: "+bt(e)+".",l.appendChild(i),e.explain&&l.appendChild(document.createTextNode(e.explain))})}function Gt(){let t=U();if(!t)return;let e=N();delete e[t.id],Q(e),Y(),R()}function st(t){return t===n.script?-1:/\.tcl$/.test(t)?0:/\.s?v$/.test(t)?1:/\.sdc$/.test(t)?2:3}var it=null;function I(){clearTimeout(it),it=setTimeout(O,400)}function O(){try{localStorage.setItem(rt,JSON.stringify({example:n.example,script:n.script,files:n.files,order:n.order,current:n.current}))}catch{}}function Et(){try{let t=JSON.parse(localStorage.getItem(rt)||"null");if(t&&t.files&&t.order)return t}catch{}return null}async function vt(){let t=JSON.stringify({f:n.files,o:n.order,s:T()}),e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),s=new Uint8Array(await new Response(e).arrayBuffer()),l="";for(let i of s)l+=String.fromCharCode(i);return btoa(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function At(t){let e=atob(t.replace(/-/g,"+").replace(/_/g,"/")),s=new Blob([Uint8Array.from(e,l=>l.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(s).text())}async function S(t,e){let s=!1;try{await navigator.clipboard.writeText(t),s=!0}catch{let i=document.createElement("textarea");i.value=t,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{s=document.execCommand("copy")}catch{}i.remove()}if(e){let l=e.dataset.label||e.textContent;e.dataset.label=l,e.textContent=s?"Copied":"Press Ctrl+C",e.classList.toggle("ok",s),setTimeout(()=>{e.textContent=l,e.classList.remove("ok")},1600)}}function Ct(t,e){let s=document.createElement("a");s.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),s.download=t,document.body.appendChild(s),s.click(),setTimeout(()=>{URL.revokeObjectURL(s.href),s.remove()},500)}var E=a("#console"),P=[];function pt(){E.textContent="",P=[]}function b(t,e){P.push(t);let s=document.createElement("div");s.className="ln "+(e||"");let l=/\b([\w.-]+\.(?:v|sdc|tcl|spef)),? (?:line )?(\d+)\b/.exec(t);if(l&&n.files[l[1]]!==void 0){let i=t.indexOf(l[0]);s.appendChild(document.createTextNode(t.slice(0,i)));let r=document.createElement("button");r.type="button",r.className="loc",r.textContent=l[0],r.addEventListener("click",()=>ht(l[1],+l[2])),s.appendChild(r),s.appendChild(document.createTextNode(t.slice(i+l[0].length)))}else s.textContent=t;/slack \(VIOLATED\)/.test(t)?s.classList.add("viol"):/slack \(MET\)/.test(t)?s.classList.add("met"):/^(Error|ERROR)|\bError:|Internal error/.test(t)?s.classList.add("err"):/^Warning/.test(t)?s.classList.add("warn"):/^(Startpoint|Endpoint):/.test(t)?s.classList.add("head"):/^###/.test(t)&&s.classList.add("sec"),E.appendChild(s),E.childElementCount>2e4&&E.firstChild.remove()}function $(t){let e=a("#summary");if(!t){e.innerHTML="",e.hidden=!0;return}let s=[],l=k=>{let m=k.exec(t);return m?parseFloat(m[1]):null},i=l(/^wns(?: max)? (-?[\d.eE+-]+)/m)??l(/^worst slack max (-?[\d.eE+-]+)/m),r=l(/^tns(?: max)? (-?[\d.eE+-]+)/m),o=(t.match(/slack \(VIOLATED\)/g)||[]).length,p=(t.match(/slack \(MET\)/g)||[]).length;i!==null&&s.push(["WNS",i.toFixed(3),i<0?"bad":"good"]),r!==null&&s.push(["TNS",r.toFixed(3),r<0?"bad":"good"]),o+p&&s.push(["Paths reported",`${p} met \xB7 ${o} violated`,o?"bad":"good"]);let d=/^Total\s+\S+\s+\S+\s+\S+\s+(\S+)/m.exec(t);d&&s.push(["Total power",St(parseFloat(d[1])),""]),e.innerHTML="";for(let[k,m,c]of s){let u=document.createElement("div");u.className="chip "+c;let h=document.createElement("span");h.className="k",h.textContent=k;let w=document.createElement("span");w.className="v",w.textContent=m,u.append(h,w),e.appendChild(u)}e.hidden=s.length===0}function St(t){return isFinite(t)?t>=1?t.toFixed(3)+" W":t>=.001?(t*1e3).toFixed(3)+" mW":(t*1e6).toFixed(2)+" \xB5W":"\u2013"}function v(t,e){let s=a("#status");s.textContent=t,s.dataset.kind=e}function M(){n.worker&&n.worker.terminate(),n.ready=!1;let t=new Worker(new URL("worker.js",location.href).href);t.onmessage=e=>Tt(e.data),t.onerror=e=>{b("OpenSTA failed to start: "+(e.message||"worker error"),"err"),V(!1)},t.postMessage({type:"load",base:new URL(".",location.href).href}),n.worker=t}var K=[],z=null;function D(){z=null;for(let[t,e]of K)b(t,e);K=[],E.scrollTop=E.scrollHeight}function Tt(t){if(t.type==="ready")n.ready=!0,n.running||v("Ready","idle");else if(t.type==="stage")v(t.stage+"\u2026","busy");else if(t.type==="file"){D();let e=n.files[t.name]===void 0;_t(t.name,t.content,!0),b(`\u2500\u2500 OpenSTA ${e?"wrote":"updated"} ${t.name}: open its tab to read it \u2500\u2500`,"meta")}else t.type==="line"?(K.push([t.line,t.stream==="err"?"stderr":""]),z||(z=requestAnimationFrame(D))):t.type==="done"&&(D(),t.ok?b(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta"):b(t.rc===-1?"\u2500\u2500 OpenSTA stopped with an internal error \u2500\u2500":`\u2500\u2500 OpenSTA exited with code ${t.rc}: check the errors above \u2500\u2500`,"meta err"),$(P.join(`
`)),V(t.ok))}function lt(){if(n.running)return;window.vddSubscribe&&window.vddSubscribe(),_?n.files[n.current]=_.getValue():n.files[n.current]=g.value;let t=T();if(n.files[t]===void 0){b(`Add a Tcl script (for example ${x}): it is what OpenSTA runs.`,"err");return}n.worker||M(),O(),pt(),$(null),n.running=!0,a("#run").disabled=!0,a("#stop").disabled=!1,v(n.ready?"Running OpenSTA\u2026":"Loading OpenSTA\u2026","busy"),b(`$ sta ${t}`,"meta"),n.worker.postMessage({type:"run",files:{...n.files},script:t,dataFiles:J,base:new URL(".",location.href).href}),clearTimeout(n.timer),n.timer=setTimeout(()=>ut(`Stopped after ${et/1e3} s.`),et)}function ut(t){n.running&&(D(),b(t||"Stopped.","meta err"),V(!1,!0),M())}function V(t,e){clearTimeout(n.timer),n.running=!1,a("#run").disabled=!1,a("#stop").disabled=!0,v(e?"Stopped":t?"Done":"Errors",e||!t?"err":"ok")}function Nt(){a("#run").addEventListener("click",lt),a("#stop").addEventListener("click",()=>ut()),a("#script").addEventListener("change",e=>{n.script=e.target.value,O()}),a("#new-file").addEventListener("click",gt),a("#quiz-check").addEventListener("click",()=>W()),a("#quiz-reveal").addEventListener("click",wt),a("#quiz-reset").addEventListener("click",Gt),a("#ex-select").addEventListener("change",e=>L(e.target.value)),a("#reset").addEventListener("click",()=>L(n.example||y[0].id)),a("#copy-file").addEventListener("click",e=>S(_?_.getValue():g.value,e.currentTarget)),a("#download-file").addEventListener("click",()=>Ct(n.current,_?_.getValue():g.value)),a("#copy-output").addEventListener("click",e=>S(P.join(`
`),e.currentTarget)),a("#share").addEventListener("click",async e=>{let s=e.currentTarget;_&&(n.files[n.current]=_.getValue());try{let l=await vt();history.replaceState(null,"","#code="+l),S(location.href.split("#")[0]+"#code="+l,s)}catch{S(location.href,s)}}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),lt())});let t=a("#libs");t.innerHTML="";for(let[e,s]of tt){let l=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="libname",i.textContent=e,i.title="Copy file name",i.addEventListener("click",()=>S(e,null));let r=document.createElement("span");r.textContent=s,l.append(i,r),t.appendChild(l)}}async function Dt(){Nt();let t=!1,e=new URLSearchParams(location.hash.slice(1)).get("code");if(e)try{let s=await At(e);n.example=null,n.script=s.s||x,n.order=s.o,n.files=s.f,B(s.f,s.o,n.script),t=!0}catch{}if(!t){let s=Et();s&&(n.example=s.example,n.script=s.script||x,n.files=s.files,n.order=s.order,B(s.files,s.order,s.current),t=!0)}R(),t?Y():await L(y[0].id),v("Loading OpenSTA\u2026","busy"),M()}Dt();})();
