(()=>{var Y=[{id:"ws-lab1",group:"STA workshop",tag:"Day 1",title:"Lab 1 \xB7 Your first timing report",script:"run.tcl",files:{"run.tcl":`# Lab 1 (Day 1): read a library, a netlist and constraints, then report the 5 worst paths.
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
`}},{id:"ws-lab2",group:"STA workshop",tag:"Day 2",title:"Lab 2 \xB7 Min/max libraries and SPEF",script:"run.tcl",files:{"run.tcl":`# Lab 2 (Day 2): delay calculation with a slow (max) and a fast (min) library, plus SPEF parasitics.
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

`}},{id:"ws-lab3",group:"STA workshop",tag:"Day 3",title:"Lab 3 \xB7 Computing setup slack",script:"run.tcl",files:{"run.tcl":`# Lab 3 (Day 3 and Day 5): the s27 benchmark (TAU 2015 libraries, delays in ps).
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
`}},{id:"ws-lab6",group:"STA workshop",tag:"Day 4",title:"Lab 6 \xB7 Clock gating checks",script:"run.tcl",files:{"run.tcl":`# Lab 6 (Day 4): active-low clock gating.
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
`}},{id:"ws-lab7",group:"STA workshop",tag:"Day 4",title:"Lab 7 \xB7 Async pin checks",script:"run.tcl",files:{"run.tcl":`# Lab 7 (Day 4): recovery and removal checks on an asynchronous reset.
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
`}},{id:"ws-lab12",group:"STA workshop",tag:"Day 5",title:"Lab 12 \xB7 More setup slack examples",script:"example2.tcl",files:{"example2.tcl":`# Lab 12 (Day 5): pick example2.tcl, example3.tcl or example4.tcl next to the Run button.
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
`}},{id:"ws-lab4",group:"STA workshop",tag:"Day 5",title:"Lab 4 \xB7 CPPR",script:"run.tcl",files:{"run.tcl":`# Lab 4 (Day 5): common path pessimism removal (CPPR, also called CRPR).
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
`}},{id:"ws-lab5",group:"STA workshop",tag:"Day 5",title:"Lab 5 \xB7 Timing ECO",script:"run.tcl",files:{"run.tcl":`# Lab 5 (Day 5): insert a clock buffer as a timing ECO, then re-time the design.
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
`}},{id:"ws-lab8",group:"STA workshop",tag:"Day 6",title:"Lab 8 \xB7 Hold slack computation",script:"run.tcl",files:{"run.tcl":`# Lab 8 (Day 6): hold timing paths.
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
`}},{id:"ws-lab10",group:"STA workshop",tag:"Day 6",title:"Lab 10 \xB7 Multiple modes",script:"run.tcl",files:{"run.tcl":`# Lab 10 (Day 6): constraints for one mode at a time.
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
`}},{id:"ws-lab11",group:"STA workshop",tag:"Day 6",title:"Lab 11 \xB7 Multiple corners and derates",script:"example5.tcl",files:{"example5.tcl":`# Lab 11 (Day 6): three corners (ss, tt, ff) with +/-10% derating.
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
`}},{id:"ws-lab13",group:"STA workshop",tag:"Day 7",title:"Lab 13 \xB7 Multiple clocks and multicycle paths",script:"run.tcl",files:{"run.tcl":`# Lab 13 (Day 7): several clocks with different waveforms.
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
`}},{id:"ws-lab14",group:"STA workshop",tag:"Day 7",title:"Lab 14 \xB7 Half-cycle paths",script:"run.tcl",files:{"run.tcl":`# Lab 14 (Day 7): are there any half-cycle paths in this design?
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
`}},{id:"ws-lab9",group:"STA workshop",tag:"Day 7",title:'Lab 9 \xB7 Debugging "no paths"',script:"run.tcl",files:{"run.tcl":`# Lab 9 (Day 7): the report says no paths were found.
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
`}},{id:"ws-lab15",group:"STA workshop",tag:"Day 8",title:"ibex \xB7 STA on a RISC-V core",script:"run.tcl",files:{"run.tcl":`# ibex lab (Day 8): the lowRISC ibex RISC-V core, synthesised to Sky130 HD (about 14,000 cells).
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
`}}];var y=`// Two flops feeding a third through a buffer and an AND gate.
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
`,st=`# One 10 ns clock drives all three flops
create_clock -name clk -period 10 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,h=`read_liberty sky130hd_tt.lib.gz
read_verilog netlist.v
link_design top
read_sdc constraints.sdc
`,Q=`// The same three-flop circuit built from ASAP7 7 nm predictive cells.
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
`,_t=[{id:"basic",title:"Setup & hold checks",tag:"Basics",files:{"netlist.v":y,"constraints.sdc":st,"run.tcl":`# Load the library, the netlist and the constraints
${h}
# Worst setup (max) path
report_checks -path_delay max

# Worst hold (min) path. in1 -> r1 has almost no hold margin because the
# input changes at the same instant as the clock edge (input delay 0).
# Try set_input_delay -min 0.2 ... in constraints.sdc and run again.
report_checks -path_delay min

report_wns
report_tns
`}},{id:"violation",title:"Setup violation: fast clock",tag:"Basics",files:{"netlist.v":y,"constraints.sdc":`# Squeeze the clock to 0.5 ns (2 GHz): the r2 -> r3 path no longer fits
create_clock -name clk -period 0.5 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}
`,"run.tcl":`${h}
# Show slew, load and fanout at every stage of the failing path
report_checks -path_delay max -fields {slew cap fanout} -digits 3

# Every failing endpoint, worst first
report_checks -path_delay max -group_path_count 10 -endpoint_path_count 1 -format end -slack_max 0

report_worst_slack -max
report_tns
`}},{id:"io",title:"Input & output delays",tag:"Constraints",files:{"netlist.v":y,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}

# The block's neighbours use part of the cycle
set_input_delay  0.6 -clock clk {in1 in2}
set_output_delay 0.8 -clock clk [get_ports out]

# Realistic edges and loads at the boundary
set_input_transition 0.1 {in1 in2}
set_load 0.02 [get_ports out]
`,"run.tcl":`${h}
puts "### Input to register"
report_checks -from [get_ports in1] -fields {slew cap}

puts "\\n### Register to output"
report_checks -to [get_ports out] -fields {slew cap}
`}},{id:"exceptions",title:"False & multicycle paths",tag:"Constraints",files:{"netlist.v":y,"constraints.sdc":`create_clock -name clk -period 0.45 {clk1 clk2 clk3}
set_input_delay 0 -clock clk {in1 in2}

# r2 only launches new data every 2 cycles
set_multicycle_path -setup 2 -from [get_cells r2] -to [get_cells r3]
set_multicycle_path -hold  1 -from [get_cells r2] -to [get_cells r3]

# in1 is a static configuration pin: ignore it
set_false_path -from [get_ports in1]
`,"run.tcl":`${h}
# A 0.45 ns clock: without exceptions both paths into r3 would fail.
# r2 -> r3 now passes thanks to the multicycle path...
report_checks -from [get_cells r2] -to [get_cells r3]

# ...but r1 -> r3 still fails. Add a multicycle path for it too and run again.
report_checks -from [get_cells r1] -to [get_cells r3]
report_wns
`}},{id:"ocv",title:"Clock latency, uncertainty & OCV",tag:"Clocks",files:{"netlist.v":y,"constraints.sdc":`create_clock -name clk -period 2 {clk1 clk2 clk3}
set_input_delay 0.3 -clock clk {in1 in2}

# Clock tree not built yet: model it
set_clock_latency -source 0.30 [get_clocks clk]
set_clock_latency        0.20 [get_clocks clk]
set_clock_uncertainty -setup 0.10 [get_clocks clk]
set_clock_uncertainty -hold  0.05 [get_clocks clk]
`,"run.tcl":`${h}
# On-chip variation: for setup, data is slowed by 8% and the capture clock sped up by 8%
set_timing_derate -early 0.92
set_timing_derate -late  1.08

report_checks -path_delay min_max -fields {slew}
`}},{id:"corners",title:"Multi-corner: slow & fast",tag:"Corners",files:{"netlist.v":Q,"constraints.sdc":`# ASAP7 libraries use picoseconds: a 300 ps clock
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
`}},{id:"spef",title:"Wire parasitics from SPEF",tag:"Parasitics",files:{"netlist.v":Q,"constraints.sdc":`create_clock -name clk -period 300 {clk1 clk2 clk3}
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
`},load:{"netlist.v":"gcd_sky130hd.v"}}],d=[..._t.map(t=>({group:"Quick examples",...t})),...Y],M=["sky130hd_tt.lib.gz","asap7_small_ss.lib.gz","asap7_small_ff.lib.gz","gcd_sky130hd.spef.gz","sky130_fd_sc_hd__tt_025C_1v80.lib","sky130_fd_sc_hd__ss_100C_1v60.lib","sky130_fd_sc_hd__ff_n40C_1v95.lib","s27_Early.lib","s27_Late.lib","s27_min.lib","s27_max.lib","ibex_top.v"],$=[["sky130hd_tt.lib.gz","SkyWater 130 nm HD, typical (ns, pF)"],["asap7_small_ss.lib.gz","ASAP7 7 nm, slow; 3 cells (ps, fF)"],["asap7_small_ff.lib.gz","ASAP7 7 nm, fast; 3 cells (ps, fF)"],["gcd_sky130hd.spef.gz","Parasitics for the GCD block"],["sky130_fd_sc_hd__tt_025C_1v80.lib","Sky130 HD typical, 25 \xB0C, 1.80 V (workshop)"],["sky130_fd_sc_hd__ss_100C_1v60.lib","Sky130 HD slow, 100 \xB0C, 1.60 V"],["sky130_fd_sc_hd__ff_n40C_1v95.lib","Sky130 HD fast, \u221240 \xB0C, 1.95 V"],["s27_Late.lib","TAU 2015 contest library, late/max (ps); s27_max.lib is a copy"],["s27_Early.lib","TAU 2015 contest library, early/min (ps); s27_min.lib is a copy"],["ibex_top.v","ibex RISC-V core netlist, Sky130 HD (2.3 MB)"]];var o=t=>document.querySelector(t),V=6e4,W="vdd-sta-lab-v1",u="run.tcl",n={example:d[0].id,script:u,files:{},order:[],current:u,running:!1,ready:!1,worker:null,timer:null},z=()=>n.order.filter(t=>/\.tcl$/i.test(t));function G(){return n.files[n.script]!==void 0?n.script:n.files[u]!==void 0?u:z()[0]||u}function it(){let t=o("#script-wrap"),e=o("#script"),s=z(),i=G();t.hidden=!(s.length>1||s.length===1&&i!==u),e.innerHTML="";for(let _ of s){let l=document.createElement("option");l.value=_,l.textContent=_,e.appendChild(l)}e.value=i}var a=new Map,r=null,p=o("#editor textarea");function P(t){return/\.s?v$/i.test(t)?"verilog":/\.(tcl|sdc)$/i.test(t)?"tcl":"text/plain"}window.CodeMirror?(r=window.CodeMirror.fromTextArea(p,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:t=>t.replaceSelection("  ")}}),r.on("change",()=>{n.files[n.current]=r.getValue(),S()})):(p.classList.add("plain-editor"),p.addEventListener("input",()=>{n.files[n.current]=p.value,S()}));function w(t){r?n.files[n.current]=r.getValue():n.files[n.current]=p.value,n.current=t,r?(a.has(t)||a.set(t,window.CodeMirror.Doc(n.files[t]??"",P(t))),r.swapDoc(a.get(t)),setTimeout(()=>r.refresh(),0)):p.value=n.files[t]??"",C()}function lt(t,e){w(t),r&&(r.focus(),r.setCursor({line:e-1,ch:0}),r.addLineClass(e-1,"background","cm-errline"),setTimeout(()=>r.removeLineClass(e-1,"background","cm-errline"),2500),r.scrollIntoView({line:e-1,ch:0},80))}function R(t,e,s){a.clear(),n.files={...t},n.order=e||Object.keys(t),n.current=s&&n.order.includes(s)?s:n.order.includes(G())?G():n.order[0],r?(a.set(n.current,window.CodeMirror.Doc(n.files[n.current]??"",P(n.current))),r.swapDoc(a.get(n.current))):p.value=n.files[n.current]??"",C()}function C(){let t=o("#tabs");t.innerHTML="";for(let e of n.order){let s=document.createElement("button");if(s.type="button",s.className="tab"+(e===n.current?" active":""),s.setAttribute("role","tab"),s.setAttribute("aria-selected",e===n.current?"true":"false"),s.textContent=e,s.addEventListener("click",()=>w(e)),t.appendChild(s),e===n.current&&n.order.length>1){let i=document.createElement("button");i.type="button",i.className="tab-x",i.textContent="\xD7",i.title="Remove "+e,i.setAttribute("aria-label","Remove file "+e),i.addEventListener("click",()=>rt(e)),t.appendChild(i)}}it()}function j(t,e,s){n.files[t]===void 0&&n.order.push(t),n.files[t]=e,a.delete(t),s?C():w(t),S()}function rt(t){r&&(n.files[n.current]=r.getValue()),delete n.files[t],a.delete(t),n.order=n.order.filter(e=>e!==t),n.current=n.order[0],r?(a.has(n.current)||a.set(n.current,window.CodeMirror.Doc(n.files[n.current]??"",P(n.current))),r.swapDoc(a.get(n.current))):p.value=n.files[n.current]??"",C(),S()}function ot(){let t=(window.prompt("New file name (for example mode2.sdc, extra.tcl, top.v):","")||"").trim();if(t){if(!/^[\w.+-]+$/.test(t)){k("File names can use letters, digits, dot, dash and underscore only.","err");return}if(n.files[t]!==void 0){w(t);return}j(t,"")}}function J(){let t=o("#examples");t.innerHTML="";let e=null;for(let _ of d){if(_.group!==e){e=_.group;let c=document.createElement("h3");if(c.className="ex-group",c.textContent=e,t.appendChild(c),_.group==="STA workshop"){let m=document.createElement("p");m.className="ex-note",m.innerHTML='The 8-day workshop labs. <a href="STA_Workshop_Labs.pdf" target="_blank" rel="noopener">Slides (PDF)</a>',t.appendChild(m)}}let l=document.createElement("button");l.type="button",l.className="ex"+(_.id===n.example?" active":""),l.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',l.querySelector(".ex-tag").textContent=_.tag,l.querySelector(".ex-title").textContent=_.title,l.addEventListener("click",()=>A(_.id)),t.appendChild(l)}let s=o("#ex-select"),i=[...new Set(d.map(_=>_.group))];s.innerHTML=i.map(_=>`<optgroup label="${_}">`+d.filter(l=>l.group===_).map(l=>`<option value="${l.id}">${l.group==="STA workshop"?l.tag+" \xB7 ":""}${l.title}</option>`).join("")+"</optgroup>").join(""),n.example&&(s.value=n.example)}async function A(t){let e=d.find(_=>_.id===t)||d[0];n.example=e.id,n.script=e.script||u;let s={};for(let[_,l]of Object.entries(e.files))if(l!==null)s[_]=l;else try{let c=await fetch(new URL("data/"+(e.load||{})[_],location.href));s[_]=c.ok?await c.text():`// Could not load ${e.load[_]}`}catch{s[_]=`// Could not load ${e.load[_]}`}let i=Object.keys(e.files).sort((_,l)=>Z(_)-Z(l));R(s,i,n.script),J(),N(),tt(),U(null),f(n.ready?"Ready":"Loading OpenSTA\u2026",n.ready?"idle":"busy")}function Z(t){return t===n.script?-1:/\.tcl$/.test(t)?0:/\.s?v$/.test(t)?1:/\.sdc$/.test(t)?2:3}var q=null;function S(){clearTimeout(q),q=setTimeout(N,400)}function N(){try{localStorage.setItem(W,JSON.stringify({example:n.example,script:n.script,files:n.files,order:n.order,current:n.current}))}catch{}}function ct(){try{let t=JSON.parse(localStorage.getItem(W)||"null");if(t&&t.files&&t.order)return t}catch{}return null}async function at(){let t=JSON.stringify({f:n.files,o:n.order,s:G()}),e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw")),s=new Uint8Array(await new Response(e).arrayBuffer()),i="";for(let _ of s)i+=String.fromCharCode(_);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function pt(t){let e=atob(t.replace(/-/g,"+").replace(/_/g,"/")),s=new Blob([Uint8Array.from(e,i=>i.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(s).text())}async function x(t,e){let s=!1;try{await navigator.clipboard.writeText(t),s=!0}catch{let _=document.createElement("textarea");_.value=t,_.style.position="fixed",_.style.opacity="0",document.body.appendChild(_),_.select();try{s=document.execCommand("copy")}catch{}_.remove()}if(e){let i=e.dataset.label||e.textContent;e.dataset.label=i,e.textContent=s?"Copied":"Press Ctrl+C",e.classList.toggle("ok",s),setTimeout(()=>{e.textContent=i,e.classList.remove("ok")},1600)}}function ut(t,e){let s=document.createElement("a");s.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),s.download=t,document.body.appendChild(s),s.click(),setTimeout(()=>{URL.revokeObjectURL(s.href),s.remove()},500)}var g=o("#console"),D=[];function tt(){g.textContent="",D=[]}function k(t,e){D.push(t);let s=document.createElement("div");s.className="ln "+(e||"");let i=/\b([\w.-]+\.(?:v|sdc|tcl|spef)),? (?:line )?(\d+)\b/.exec(t);if(i&&n.files[i[1]]!==void 0){let _=t.indexOf(i[0]);s.appendChild(document.createTextNode(t.slice(0,_)));let l=document.createElement("button");l.type="button",l.className="loc",l.textContent=i[0],l.addEventListener("click",()=>lt(i[1],+i[2])),s.appendChild(l),s.appendChild(document.createTextNode(t.slice(_+i[0].length)))}else s.textContent=t;/slack \(VIOLATED\)/.test(t)?s.classList.add("viol"):/slack \(MET\)/.test(t)?s.classList.add("met"):/^(Error|ERROR)|\bError:|Internal error/.test(t)?s.classList.add("err"):/^Warning/.test(t)?s.classList.add("warn"):/^(Startpoint|Endpoint):/.test(t)?s.classList.add("head"):/^###/.test(t)&&s.classList.add("sec"),g.appendChild(s),g.childElementCount>2e4&&g.firstChild.remove()}function U(t){let e=o("#summary");if(!t){e.innerHTML="",e.hidden=!0;return}let s=[],i=v=>{let b=v.exec(t);return b?parseFloat(b[1]):null},_=i(/^wns(?: max)? (-?[\d.eE+-]+)/m)??i(/^worst slack max (-?[\d.eE+-]+)/m),l=i(/^tns(?: max)? (-?[\d.eE+-]+)/m),c=(t.match(/slack \(VIOLATED\)/g)||[]).length,m=(t.match(/slack \(MET\)/g)||[]).length;_!==null&&s.push(["WNS",_.toFixed(3),_<0?"bad":"good"]),l!==null&&s.push(["TNS",l.toFixed(3),l<0?"bad":"good"]),c+m&&s.push(["Paths reported",`${m} met \xB7 ${c} violated`,c?"bad":"good"]);let X=/^Total\s+\S+\s+\S+\s+\S+\s+(\S+)/m.exec(t);X&&s.push(["Total power",dt(parseFloat(X[1])),""]),e.innerHTML="";for(let[v,b,et]of s){let T=document.createElement("div");T.className="chip "+et;let L=document.createElement("span");L.className="k",L.textContent=v;let I=document.createElement("span");I.className="v",I.textContent=b,T.append(L,I),e.appendChild(T)}e.hidden=s.length===0}function dt(t){return isFinite(t)?t>=1?t.toFixed(3)+" W":t>=.001?(t*1e3).toFixed(3)+" mW":(t*1e6).toFixed(2)+" \xB5W":"\u2013"}function f(t,e){let s=o("#status");s.textContent=t,s.dataset.kind=e}function B(){n.worker&&n.worker.terminate(),n.ready=!1;let t=new Worker(new URL("worker.js",location.href).href);t.onmessage=e=>kt(e.data),t.onerror=e=>{k("OpenSTA failed to start: "+(e.message||"worker error"),"err"),K(!1)},t.postMessage({type:"load",base:new URL(".",location.href).href}),n.worker=t}var F=[],O=null;function E(){O=null;for(let[t,e]of F)k(t,e);F=[],g.scrollTop=g.scrollHeight}function kt(t){if(t.type==="ready")n.ready=!0,n.running||f("Ready","idle");else if(t.type==="stage")f(t.stage+"\u2026","busy");else if(t.type==="file"){E();let e=n.files[t.name]===void 0;j(t.name,t.content,!0),k(`\u2500\u2500 OpenSTA ${e?"wrote":"updated"} ${t.name}: open its tab to read it \u2500\u2500`,"meta")}else t.type==="line"?(F.push([t.line,t.stream==="err"?"stderr":""]),O||(O=requestAnimationFrame(E))):t.type==="done"&&(E(),t.ok?k(`\u2500\u2500 finished in ${t.ms} ms \u2500\u2500`,"meta"):k(t.rc===-1?"\u2500\u2500 OpenSTA stopped with an internal error \u2500\u2500":`\u2500\u2500 OpenSTA exited with code ${t.rc}: check the errors above \u2500\u2500`,"meta err"),U(D.join(`
`)),K(t.ok))}function H(){if(n.running)return;window.vddSubscribe&&window.vddSubscribe(),r?n.files[n.current]=r.getValue():n.files[n.current]=p.value;let t=G();if(n.files[t]===void 0){k(`Add a Tcl script (for example ${u}): it is what OpenSTA runs.`,"err");return}n.worker||B(),N(),tt(),U(null),n.running=!0,o("#run").disabled=!0,o("#stop").disabled=!1,f(n.ready?"Running OpenSTA\u2026":"Loading OpenSTA\u2026","busy"),k(`$ sta ${t}`,"meta"),n.worker.postMessage({type:"run",files:{...n.files},script:t,dataFiles:M,base:new URL(".",location.href).href}),clearTimeout(n.timer),n.timer=setTimeout(()=>nt(`Stopped after ${V/1e3} s.`),V)}function nt(t){n.running&&(E(),k(t||"Stopped.","meta err"),K(!1,!0),B())}function K(t,e){clearTimeout(n.timer),n.running=!1,o("#run").disabled=!1,o("#stop").disabled=!0,f(e?"Stopped":t?"Done":"Errors",e||!t?"err":"ok")}function mt(){o("#run").addEventListener("click",H),o("#stop").addEventListener("click",()=>nt()),o("#script").addEventListener("change",e=>{n.script=e.target.value,N()}),o("#new-file").addEventListener("click",ot),o("#ex-select").addEventListener("change",e=>A(e.target.value)),o("#reset").addEventListener("click",()=>A(n.example||d[0].id)),o("#copy-file").addEventListener("click",e=>x(r?r.getValue():p.value,e.currentTarget)),o("#download-file").addEventListener("click",()=>ut(n.current,r?r.getValue():p.value)),o("#copy-output").addEventListener("click",e=>x(D.join(`
`),e.currentTarget)),o("#share").addEventListener("click",async e=>{let s=e.currentTarget;r&&(n.files[n.current]=r.getValue());try{let i=await at();history.replaceState(null,"","#code="+i),x(location.href.split("#")[0]+"#code="+i,s)}catch{x(location.href,s)}}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),H())});let t=o("#libs");t.innerHTML="";for(let[e,s]of $){let i=document.createElement("li"),_=document.createElement("button");_.type="button",_.className="libname",_.textContent=e,_.title="Copy file name",_.addEventListener("click",()=>x(e,null));let l=document.createElement("span");l.textContent=s,i.append(_,l),t.appendChild(i)}}async function gt(){mt();let t=!1,e=new URLSearchParams(location.hash.slice(1)).get("code");if(e)try{let s=await pt(e);n.example=null,n.script=s.s||u,n.order=s.o,n.files=s.f,R(s.f,s.o,n.script),t=!0}catch{}if(!t){let s=ct();s&&(n.example=s.example,n.script=s.script||u,n.files=s.files,n.order=s.order,R(s.files,s.order,s.current),t=!0)}J(),t||await A(d[0].id),f("Loading OpenSTA\u2026","busy"),B()}gt();})();
