(()=>{var k=[{id:"synth",group:"Synthesis workshop",title:"Synthesis workshop",note:"7 labs from a 2-to-1 mux to a RISC-V CPU core. Each lab has a quiz."}],b=[{id:"syn-mux",group:"Synthesis workshop",tag:"Lab 1",title:"Synthesis of a mux",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 1: a 2-to-1 multiplexer.
# Run show_rtl.ys and look at the RTL diagram, then pick show_cmos.ys next to Run and run again
# to map the design to the gates in mycells.lib. Open mux2to1_synth.v: what differs from the RTL?
# Exercise: comment out the else branch in mux2to1.v and run both scripts again.

# read design
read_verilog mux2to1.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./mux2to1_rtl
`,"show_cmos.ys":`# read design
read_verilog mux2to1.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib mycells.lib
dfflibmap -liberty mycells.lib
abc -liberty mycells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog mux2to1_synth.v

# write the internal representation (RTLIL)
write_rtlil mux2to1.rtlil

# report the cells and area
stat -liberty mycells.lib

# show
show -format dot  -prefix ./mux2to1_cmos
`,"mux2to1.v":`module mux2to1(f, a, b, sel);
  output f;
  input a, b, sel;
// Needed when assigned in a sequential logic block (like always)
// A reg behaves like memory: holds its value until
// imperatively assigned otherwise
  reg f;
  
// Modules may contain one or more always blocks
// Sensitivity list contains signals whose change makes the block execute
  always @(a or b or sel)
// Body of an always block contains traditional imperative code
  begin
    if (sel)
      f = b;
    else
      f = a;
  end
  
endmodule
`,"mycells.lib":`library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
}
`},quiz:[{type:"choice",q:"In the RTL diagram (show_rtl.ys), which cell implements the if/else?",options:["$and","$mux","$dff","$pmux"],answer:1,explain:"proc turns the if/else in the always block into a $mux cell with select input sel.",try:!1},{type:"number",q:"Run show_cmos.ys. How many cells does the gate-level design have?",answer:4,tol:0,unit:"",explain:"From stat: 3 NAND and 1 NOT.",try:!1},{type:"number",q:"What is the chip area reported by stat?",answer:15,tol:.001,unit:"",explain:"3 NAND \xD7 4 + 1 NOT \xD7 3 = 15 (area units from mycells.lib).",try:!1},{type:"choice",q:"In mux2to1_synth.v, what is _6_?",options:["A wire","The NAND gate instance that drives output f","An input port","The NOT gate on sel"],answer:1,explain:"Yosys names the cells it creates _N_. _6_ is a NAND instance whose output Y is connected to f.",try:!1},{type:"choice",q:"Try it: comment out the else branch (//else and // f = a;) and run show_rtl.ys. Which new cell appears?",options:["$dff","$dlatch","$adff","No change"],answer:1,explain:"Without an else, f must keep its value when sel is 0, so Yosys infers a latch and warns: Latch inferred for signal f.",try:!0},{type:"choice",q:"Now run show_cmos.ys with the else still commented out. What happens?",options:["It maps the latch to a DFF","It fails: D latches are not supported, because mycells.lib has no latch cell","It removes the latch","It works the same as before"],answer:1,explain:"dfflibmap can only use sequential cells that exist in the library. Unintended latches are a classic RTL bug: always cover every branch.",try:!0}]},{id:"syn-adder",group:"Synthesis workshop",tag:"Lab 2",title:"Synthesis of an adder",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 2: an 8-bit adder with carry in and carry out.
# Run show_rtl.ys, then show_cmos.ys. Notice how the tool turns two + operators into gates for you.

# read design
read_verilog adder.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./adder_rtl
`,"show_cmos.ys":`# read design
read_verilog adder.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib mycells.lib
dfflibmap -liberty mycells.lib
abc -liberty mycells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog adder_synth.v

# write the internal representation (RTLIL)
write_rtlil adder.rtlil

# report the cells and area
stat -liberty mycells.lib

# show
show -format dot -lib adder_synth.v -prefix ./adder_cmos
`,"adder.v":`module adder(a, b, ci, sum, co);
  input        ci;
  input  [7:0] a;
  input  [7:0] b;
  output [7:0] sum;
  output       co;
  wire   [8:0] tmp;

  assign tmp = a + b + ci;
  assign sum = tmp [7:0];
  assign co  = tmp [8];
endmodule
`,"mycells.lib":`library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
}
`},quiz:[{type:"number",q:"How many $add cells are in the RTL diagram?",answer:2,tol:0,unit:"",explain:"a + b + ci is two additions.",try:!1},{type:"number",q:"After show_cmos.ys, how many cells are there?",answer:135,tol:0,unit:"",explain:"From stat.",try:!1},{type:"number",q:"How many NOR cells?",answer:70,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:506,tol:.001,unit:"",explain:"31 NAND \xD7 4 + 70 NOR \xD7 4 + 34 NOT \xD7 3.",try:!1},{type:"choice",q:"Why is there no adder cell in the netlist?",options:["Yosys failed to map it","mycells.lib has only BUF, NOT, NAND, NOR and DFF, so the adder is built from those gates","Adders are always removed","The adder was optimised away"],answer:1,explain:"techmap breaks the $add into simple logic, and abc maps that logic to the gates the library offers.",try:!1}]},{id:"syn-alu",group:"Synthesis workshop",tag:"Lab 3",title:"Synthesis of an ALU",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 3: an 8-bit ALU with eight arithmetic and eight logic operations.
# Run show_rtl.ys, then show_cmos.ys. Compare the RTL operators with the gate count.

# read design
read_verilog alu.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./alu_rtl
`,"show_cmos.ys":`# read design
read_verilog alu.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib mycells.lib
dfflibmap -liberty mycells.lib
abc -liberty mycells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog alu_synth.v

# write the internal representation (RTLIL)
write_rtlil alu.rtlil

# report the cells and area
stat -liberty mycells.lib

# show
show -format dot -lib alu_synth.v -prefix ./alu_cmos
`,"alu.v":`module alu(a, b, cin, sel, y);
  input [7:0] a, b;
  input cin;
  input [3:0] sel;
  output [7:0] y;
  reg [7:0] y;
  reg [7:0] arithval;
  reg [7:0] logicval;

  // Arithmetic unit
  always @(a or b or cin or sel) begin
    case (sel[2:0])
      3'b000  : arithval = a;
      3'b001  : arithval = a + 1;
      3'b010  : arithval = a - 1;
      3'b011  : arithval = b;
      3'b100  : arithval = b + 1;
      3'b101  : arithval = b - 1;
      3'b110  : arithval = a + b;
      default : arithval = a + b + cin;
    endcase
  end

  // Logic unit
  always @(a or b or sel) begin
    case (sel[2:0])
      3'b000  : logicval =  ~a;
      3'b001  : logicval =  ~b;
      3'b010  : logicval = a & b;
      3'b011  : logicval = a | b;
      3'b100  : logicval =  ~((a & b));
      3'b101  : logicval =  ~((a | b));
      3'b110  : logicval = a ^ b;
      default : logicval =  ~(a ^ b);
    endcase
  end

  // Multiplexer
  always @(arithval or logicval or sel) begin
    case (sel[3])
      1'b0    : y = arithval;
      default : y = logicval;
    endcase
  end

endmodule
`,"mycells.lib":`library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
}
`},quiz:[{type:"number",q:"How many $add cells are in the RTL diagram?",answer:4,tol:0,unit:"",explain:"a + 1, b + 1, a + b, and the + cin of a + b + cin.",try:!1},{type:"number",q:"How many $sub cells?",answer:2,tol:0,unit:"",explain:"a \u2212 1 and b \u2212 1.",try:!1},{type:"number",q:"After show_cmos.ys, how many cells are there?",answer:512,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:1998,tol:.001,unit:"",explain:"",try:!1},{type:"choice",q:"Which cell type does the ALU use most?",options:["NAND","NOR","NOT","BUF"],answer:1,explain:"236 NOR, 226 NAND, 50 NOT.",try:!1}]},{id:"syn-counter",group:"Synthesis workshop",tag:"Lab 4",title:"Synthesis of a counter",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 4: a 3-bit counter with synchronous reset and enable.
# Run show_rtl.ys, then show_cmos.ys. Find the flip-flops in the gate-level netlist.

# read design
read_verilog counter.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./counter_rtl
`,"show_cmos.ys":`# read design
read_verilog counter.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib cmos_cells.lib
dfflibmap -liberty cmos_cells.lib
abc -liberty cmos_cells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog counter_synth.v

# write the internal representation (RTLIL)
write_rtlil counter.rtlil

# report the cells and area
stat -liberty cmos_cells.lib

# show
show -format dot -lib counter_synth.v -prefix ./counter_cmos
`,"counter.v":`module counter (clk, rst, en, count);

   input clk, rst, en;
   output reg [2:0] count;

   always @(posedge clk)
      if (rst)
         count <= 3'd0;
      else if (en)
         count <= count + 3'd1;

endmodule
`,"cmos_cells.lib":`// test comment
/* test comment */
library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
  cell(DFFSR) {
    area: 18;
    ff("IQ", "IQN") { clocked_on: C;
                  next_state: D;
                      preset: S;
                       clear: R; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
    pin(S) { direction: input; }
    pin(R) { direction: input; }
    ; // empty statement
  }
}
`},quiz:[{type:"choice",q:"In the RTL diagram, which flip-flop type does Yosys infer for count?",options:["$dff (plain)","$adff (async reset)","$sdffe (sync reset + enable)","$dlatch"],answer:2,explain:"The reset is checked inside always @(posedge clk), so it is synchronous, and en gives the enable: $sdffe.",try:!1},{type:"number",q:"How many DFF cells are in the gate-level netlist?",answer:3,tol:0,unit:"",explain:"One per bit of the 3-bit counter.",try:!1},{type:"number",q:"How many cells in total?",answer:17,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:108,tol:.001,unit:"",explain:"",try:!1},{type:"number",q:"What percentage of the area is sequential (flip-flops)?",answer:50,tol:.01,unit:"%",explain:"54 of 108.",try:!1}]},{id:"syn-shift_register",group:"Synthesis workshop",tag:"Lab 5",title:"Synthesis of a shift register",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 5: an 8-bit LFSR-style shift register that shifts up or down.
# Run show_rtl.ys, then show_cmos.ys. How much of the area is flip-flops?

# read design
read_verilog shift_register.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./shift_register_rtl
`,"show_cmos.ys":`# read design
read_verilog shift_register.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib cmos_cells.lib
dfflibmap -liberty cmos_cells.lib
abc -liberty cmos_cells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog shift_register_synth.v

# write the internal representation (RTLIL)
write_rtlil shift_register.rtlil

# report the cells and area
stat -liberty cmos_cells.lib

# show
show -format dot -lib shift_register_synth.v -prefix ./shift_register_cmos
`,"shift_register.v":`\`default_nettype none
module shift_register (
clk       ,   // Clock input
reset     ,   // Reset input
enable    ,   // Enable input
up_down   ,   // Up Down input
count     ,   // Count output
overflow      // Overflow output
);

 input clk;
 input reset;
 input enable; 
 input up_down;

 output [7 : 0] count;
 output overflow;

 reg [7 : 0] count;

 assign overflow = (up_down) ? (count == {{7{1'b0}}, 1'b1}) : 
                               (count == {1'b1, {7{1'b0}}}) ;

 always @(posedge clk)
 if (reset) 
    count <= {7{1'b0}};
 else if (enable) begin
    if (up_down) begin
      count <= {~(^(count & 8'b01100011)),count[7:1]};
    end else begin
      count <= {count[5:0],~(^(count &  8'b10110001))};
    end
 end

endmodule
`,"cmos_cells.lib":`// test comment
/* test comment */
library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
  cell(DFFSR) {
    area: 18;
    ff("IQ", "IQN") { clocked_on: C;
                  next_state: D;
                      preset: S;
                       clear: R; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
    pin(S) { direction: input; }
    pin(R) { direction: input; }
    ; // empty statement
  }
}
`},quiz:[{type:"number",q:"How many DFF cells?",answer:8,tol:0,unit:"",explain:"One per bit of count.",try:!1},{type:"number",q:"How many cells in total?",answer:101,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:504,tol:.001,unit:"",explain:"",try:!1},{type:"number",q:"What percentage of the area is sequential?",answer:28.57,tol:.01,unit:"%",explain:"144 of 504.",try:!1},{type:"number",q:"How many $reduce_xor cells are in the RTL diagram?",answer:2,tol:0,unit:"",explain:"One for each direction: ^(count & mask).",try:!1}]},{id:"syn-det_1011",group:"Synthesis workshop",tag:"Lab 6",title:"Synthesis of a sequence detector",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 6: a finite state machine that detects the sequence 1011.
# Run show_rtl.ys and read the warnings in the log first. Then run show_cmos.ys.
# Exercise: fix the warning in det_1011.v and compare the cell count before and after.

# read design
read_verilog det_1011.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# show
show -format dot -prefix ./det_1011_rtl
`,"show_cmos.ys":`# read design
read_verilog det_1011.v
hierarchy -check

# high-level synthesis
proc; opt; memory; opt; fsm; opt

# low-level synthesis
techmap; opt

# map to target architecture
read_liberty -lib cmos_cells.lib
dfflibmap -liberty cmos_cells.lib
abc -liberty cmos_cells.lib

# split larger signals
splitnets -ports; opt

# cleanup
clean

# write synthesized design
write_verilog det_1011_synth.v

# write the internal representation (RTLIL)
write_rtlil det_1011.rtlil

# report the cells and area
stat -liberty cmos_cells.lib

# show
show -format dot -lib det_1011_synth.v -prefix ./det_1011_cmos
`,"det_1011.v":`module det_1011 ( input clk,
                  input rstn,
                  input in,
                  output out );
  
  parameter IDLE 	= 0,
  			S1 		= 1,
  			S10 	= 2,
  			S101 	= 3,
  			S1011 	= 4;
  
  reg [2:0] cur_state, next_state;
  
  assign out = cur_state == S1011 ? 1 : 0;
  
  always @ (posedge clk) begin
    if (!rstn)
      	cur_state <= IDLE;
     else 
     	cur_state <= next_state;
  end
  
  always @ (cur_state or in) begin
    case (cur_state)
      IDLE : begin
        if (in) next_state = S1;
        else next_state = IDLE;
      end
      
      S1: begin
        if (in) next_state = IDLE;
        else 	next_state = S10;
      end
      
      S10 : begin
        if (in) next_state = S101;
        else 	next_state = IDLE;
      end
      
      S101 : begin
        if (in) next_state = S1011;
        else 	next_state = IDLE;
      end
      
      S1011: begin
        next_state = IDLE;
      end
    endcase
  end
endmodule
`,"cmos_cells.lib":`// test comment
/* test comment */
library(demo) {
  cell(BUF) {
    area: 6;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A"; }
  }
  cell(NOT) {
    area: 3;
    pin(A) { direction: input; }
    pin(Y) { direction: output;
              function: "A'"; }
  }
  cell(NAND) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A*B)'"; }
  }
  cell(NOR) {
    area: 4;
    pin(A) { direction: input; }
    pin(B) { direction: input; }
    pin(Y) { direction: output;
             function: "(A+B)'"; }
  }
  cell(DFF) {
    area: 18;
    ff(IQ, IQN) { clocked_on: C;
                  next_state: D; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
  }
  cell(DFFSR) {
    area: 18;
    ff("IQ", "IQN") { clocked_on: C;
                  next_state: D;
                      preset: S;
                       clear: R; }
    pin(C) { direction: input;
                 clock: true; }
    pin(D) { direction: input; }
    pin(Q) { direction: output;
              function: "IQ"; }
    pin(S) { direction: input; }
    pin(R) { direction: input; }
    ; // empty statement
  }
}
`},quiz:[{type:"choice",q:"What warning does show_rtl.ys print?",options:["Multiple drivers on cur_state","Latch inferred for signal next_state","Combinational loop","No warnings"],answer:1,explain:"The case statement covers only 5 of the 8 values of the 3-bit cur_state and has no default, so next_state keeps its value for the other 3: a latch.",try:!1},{type:"number",q:"How many cells does the gate-level design have?",answer:34,tol:0,unit:"",explain:"",try:!1},{type:"number",q:"What is the chip area?",answer:213,tol:.001,unit:"",explain:"",try:!1},{type:"number",q:"Try it: add default: next_state = IDLE; before endcase and run show_cmos.ys. How many cells now?",answer:19,tol:0,unit:"",explain:"No latch: Yosys reports No latch inferred for signal next_state.",try:!0},{type:"number",q:"And the chip area?",answer:115,tol:.001,unit:"",explain:"Almost half the area: the unintended latch logic is gone.",try:!0}]},{id:"syn-ibex",group:"Synthesis workshop",tag:"Lab 7",title:"Synthesis of the ibex RISC-V core",script:"synth.ys",files:{"synth.ys":`# Lab 7: the lowRISC ibex 32-bit RISC-V core, synthesised to SkyWater 130 nm standard cells.
# Press Run: synthesis takes 30 to 90 seconds in the browser. Then read the statistics at the end of the log:
# number of wires, cells, buffers and flip-flops, and the chip area of ibex_top.
# The netlist ibex_top_synth.v (about 2.5 MB) can be downloaded below the log.

# Synthesis of the lowRISC ibex RISC-V core to the SkyWater 130 nm HD library
# ibex_rtl.v (about 450 kB of Verilog) and the library load from the server.

# read design (deferred so the parameters below take effect)
read_verilog -defer ibex_rtl.v
chparam -set RV32B 0 ibex_top
chparam -set RV32M 2 ibex_top
chparam -set RegFile 2 ibex_top

# generic synthesis: elaborate, optimise, map to internal gates
synth -flatten -top ibex_top

# map the register file latches and the flip-flops to Sky130 cells
techmap -map latch_map.v
dfflibmap -liberty sky130_fd_sc_hd__tt_025C_1v80_synth.lib
opt

# map the logic to Sky130 cells with ABC (target delay 8000 ps)
abc -liberty sky130_fd_sc_hd__tt_025C_1v80_synth.lib -D 8000
clean

# drive constant 0/1 nets from tie cells (one shared tie cell for each value)
hilomap -singleton -hicell sky130_fd_sc_hd__conb_1 HI -locell sky130_fd_sc_hd__conb_1 LO
clean

# remove debug-only scope markers left by -flatten, then report cells, wires and area
delete t:$scopeinfo
stat -liberty sky130_fd_sc_hd__tt_025C_1v80_synth.lib

# write the gate-level netlist
write_verilog -noattr ibex_top_synth.v
`,"latch_map.v":`module \\$_DLATCH_P_ (input E, input D, output Q);
  sky130_fd_sc_hd__dlxtp_1 _TECHMAP_REPLACE_ (.GATE(E), .D(D), .Q(Q));
endmodule
module \\$_DLATCH_N_ (input E, input D, output Q);
  sky130_fd_sc_hd__dlxtn_1 _TECHMAP_REPLACE_ (.GATE_N(E), .D(D), .Q(Q));
endmodule
`},quiz:[{type:"number",q:"How many wires does ibex_top have after synthesis?",answer:11257,tol:0,unit:"",explain:"The wires line of the final stat report.",try:!1},{type:"number",q:"How many cells?",answer:12255,tol:0,unit:"",explain:"The cells line of the final stat report.",try:!1},{type:"number",q:"How many flip-flops? (Add up the dfrtp, dfstp and dfxtp cells.)",answer:982,tol:0,unit:"",explain:"700 dfrtp_1 + 9 dfstp_1 + 273 dfxtp_1.",try:!1},{type:"number",q:"How many latches? (dlxtp and dlxtn: the register file is latch-based, RegFile = 2.)",answer:1025,tol:0,unit:"",explain:"992 dlxtp_1 + 33 dlxtn_1.",try:!1},{type:"number",q:"How many buffers?",answer:0,tol:0,unit:"",explain:"Synthesis does not add buffers here: buffering for fanout and wire load comes later, in placement and timing repair.",try:!1},{type:"number",q:"What is the chip area of ibex_top?",answer:102872.41,tol:1,unit:"\xB5m\xB2",explain:"In square micrometres, from the Sky130 cell areas.",try:!1}]}],de=["ibex_rtl.v","sky130_fd_sc_hd__tt_025C_1v80_synth.lib"],ue=[["mycells.lib","Demo library: BUF, NOT, NAND, NOR, DFF (in the lab tabs)"],["cmos_cells.lib","Demo library with DFFSR (in the lab tabs)"],["sky130_fd_sc_hd__tt_025C_1v80_synth.lib","SkyWater 130 nm HD, typical; cells usable for synthesis"],["ibex_rtl.v","lowRISC ibex RTL, converted to Verilog-2005 with sv2v"]];var a=e=>document.querySelector(e),pe=3e5,be="vdd-synth-lab-v1",x="show_rtl.ys",i={example:b[0].id,track:k[0].id,script:x,files:{},order:[],current:x,running:!1,ready:!1,worker:null,timer:null},ge=()=>i.order.filter(e=>/\.ys$/i.test(e));function D(){return i.files[i.script]!==void 0?i.script:i.files[x]!==void 0?x:ge()[0]||x}function Le(){let e=a("#script-wrap"),n=a("#script"),t=ge(),r=D();e.hidden=!(t.length>1||t.length===1&&r!==x),n.innerHTML="";for(let o of t){let s=document.createElement("option");s.value=o,s.textContent=o,n.appendChild(s)}n.value=r}var g=new Map,c=null,w=a("#editor textarea");function X(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(c=window.CodeMirror.fromTextArea(w,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),c.on("change",()=>{i.files[i.current]=c.getValue(),B()})):(w.classList.add("plain-editor"),w.addEventListener("input",()=>{i.files[i.current]=w.value,B()}));function Q(e){c?i.files[i.current]=c.getValue():i.files[i.current]=w.value,i.current=e,c?(g.has(e)||g.set(e,window.CodeMirror.Doc(i.files[e]??"",X(e))),c.swapDoc(g.get(e)),setTimeout(()=>c.refresh(),0)):w.value=i.files[e]??"",H()}function Ne(e,n){Q(e),c&&(c.focus(),c.setCursor({line:n-1,ch:0}),c.addLineClass(n-1,"background","cm-errline"),setTimeout(()=>c.removeLineClass(n-1,"background","cm-errline"),2500),c.scrollIntoView({line:n-1,ch:0},80))}function V(e,n,t){g.clear(),i.files={...e},i.order=n||Object.keys(e),i.current=t&&i.order.includes(t)?t:i.order.includes(D())?D():i.order[0],c?(g.set(i.current,window.CodeMirror.Doc(i.files[i.current]??"",X(i.current))),c.swapDoc(g.get(i.current))):w.value=i.files[i.current]??"",H()}function H(){let e=a("#tabs");e.innerHTML="";for(let n of i.order){let t=document.createElement("button");if(t.type="button",t.className="tab"+(n===i.current?" active":""),t.setAttribute("role","tab"),t.setAttribute("aria-selected",n===i.current?"true":"false"),t.textContent=n,t.addEventListener("click",()=>Q(n)),e.appendChild(t),n===i.current&&i.order.length>1){let r=document.createElement("button");r.type="button",r.className="tab-x",r.textContent="\xD7",r.title="Remove "+n,r.setAttribute("aria-label","Remove file "+n),r.addEventListener("click",()=>Ae(n)),e.appendChild(r)}}Le()}function we(e,n,t){i.files[e]===void 0&&i.order.push(e),i.files[e]=n,g.delete(e),t?H():Q(e),B()}function Ae(e){c&&(i.files[i.current]=c.getValue()),delete i.files[e],g.delete(e),i.order=i.order.filter(n=>n!==e),i.current=i.order[0],c?(g.has(i.current)||g.set(i.current,window.CodeMirror.Doc(i.files[i.current]??"",X(i.current))),c.swapDoc(g.get(i.current))):w.value=i.files[i.current]??"",H(),B()}function Ee(){let e=(window.prompt("New file name (for example top.v, my_flow.ys):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){v("File names can use letters, digits, dot, dash and underscore only.","err");return}if(i.files[e]!==void 0){Q(e);return}we(e,"")}}var q=e=>{let n=b.find(t=>t.id===e);return n?(k.find(t=>t.group===n.group)||k[0]).id:null},C=()=>k.find(e=>e.id===i.track)||k[0];function ee(){let e=a("#tracks");e.innerHTML="",e.hidden=k.length<2;for(let t of k){let r=document.createElement("button");r.type="button",r.className="track"+(t.id===C().id?" active":""),r.setAttribute("role","tab"),r.setAttribute("aria-selected",t.id===C().id?"true":"false");let o=b.filter(s=>s.group===t.group).length;r.innerHTML='<span class="track-t"></span><span class="track-n"></span>',r.querySelector(".track-t").textContent=t.title,r.querySelector(".track-n").textContent=o+" labs",r.addEventListener("click",()=>Se(t.id)),e.appendChild(r)}let n=a("#track-note");if(n.textContent=C().note+" ",C().id==="workshop"){let t=document.createElement("a");t.href="STA_Workshop_Labs.pdf",t.target="_blank",t.rel="noopener",t.className="btn small",t.textContent="Workshop slides (PDF)",n.appendChild(t)}}async function Se(e,n){i.track=e;try{let t=new URL(location.href);t.searchParams.set("track",e),history.replaceState(null,"",t.pathname+t.search+location.hash)}catch{}ee(),!n&&q(i.example)!==e?await I(b.find(t=>t.group===C().group).id):z()}function z(){let e=a("#examples");e.innerHTML="";for(let t of b.filter(r=>r.group===C().group)){let r=document.createElement("button");r.type="button",r.className="ex"+(t.id===i.example?" active":""),r.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',r.querySelector(".ex-tag").textContent=t.tag;let o=t.quiz&&t.quiz.length?$()[t.id]:null;if(o&&o.checked){let s=document.createElement("span");s.className="ex-done",s.textContent=(o.score===o.total?"\u2713 ":"")+`quiz ${o.score}/${o.total}`,r.querySelector(".ex-tag").appendChild(s)}r.querySelector(".ex-title").textContent=t.title,r.addEventListener("click",()=>I(t.id)),e.appendChild(r)}let n=a("#ex-select");n.innerHTML=b.filter(t=>t.group===C().group).map(t=>`<option value="${t.id}">${t.group!=="Basic labs"?t.tag+" \xB7 ":""}${t.title}</option>`).join(""),i.example&&(n.value=i.example)}async function I(e){let n=b.find(o=>o.id===e)||b[0];i.example=n.id,q(n.id)!==i.track&&(i.track=q(n.id),ee()),i.script=n.script||x;let t={};for(let[o,s]of Object.entries(n.files))if(s!==null)t[o]=s;else try{let l=await fetch(new URL("data/"+(n.load||{})[o],location.href));t[o]=l.ok?await l.text():`// Could not load ${n.load[o]}`}catch{t[o]=`// Could not load ${n.load[o]}`}let r=Object.keys(n.files).sort((o,s)=>fe(o)-fe(s));V(t,r,i.script),E.clear(),F.clear(),re(),se(),z(),te(),U(),xe(),ie(null),T(i.ready?"Ready":"Loading Yosys\u2026",i.ready?"idle":"busy")}var _e="vdd-synth-quiz-v1";function $(){try{return JSON.parse(localStorage.getItem(_e)||"{}")||{}}catch{return{}}}function ne(e){try{localStorage.setItem(_e,JSON.stringify(e))}catch{}}var Y=()=>b.find(e=>e.id===i.example&&e.quiz&&e.quiz.length);function Te(e){let n=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return n?parseFloat(n[0]):NaN}function Re(e,n){if(e.type==="choice")return n!=null&&+n===e.answer;let t=Te(n);return isFinite(t)&&Math.abs(t-e.answer)<=(e.tol??.01)+1e-9}var De=e=>e.type==="choice"?e.options[e.answer]:`${Number.isInteger(e.answer)?e.answer:e.answer.toFixed(2)}${e.unit?" "+e.unit:""}`;function te(){let e=a("#quiz"),n=a("#quiz-list"),t=Y();if(!t){e.hidden=!0;return}e.hidden=!1;let r=$()[t.id]||{},o=r.a||[];n.innerHTML="",t.quiz.forEach((s,l)=>{let p=document.createElement("li"),f=document.createElement("div");if(f.className="quiz-q",s.try){let d=document.createElement("span");d.className="quiz-try",d.textContent="Try it",f.appendChild(d)}let m=s.q.replace(/^Try it: /,"");if(f.appendChild(document.createTextNode(m.charAt(0).toUpperCase()+m.slice(1))),p.appendChild(f),s.type==="choice"){let d=document.createElement("div");d.className="quiz-opts",d.setAttribute("role","radiogroup"),s.options.forEach((u,h)=>{let A=document.createElement("label"),_=document.createElement("input");_.type="radio",_.name=`q${l}`,_.value=h,o[l]!==void 0&&+o[l]===h&&(_.checked=!0),_.addEventListener("change",()=>he(t,l,h));let ce=document.createElement("span");ce.textContent=u,A.append(_,ce),d.appendChild(A)}),p.appendChild(d)}else{let d=document.createElement("div");d.className="quiz-num";let u=document.createElement("input");if(u.type="text",u.inputMode="decimal",u.autocomplete="off",u.setAttribute("aria-label","Answer to question "+(l+1)),u.placeholder="e.g. -1.23",o[l]!==void 0&&(u.value=o[l]),u.addEventListener("input",()=>he(t,l,u.value)),u.addEventListener("keydown",h=>{h.key==="Enter"&&P()}),d.appendChild(u),s.unit){let h=document.createElement("span");h.className="unit",h.textContent=s.unit,d.appendChild(h)}p.appendChild(d)}let y=document.createElement("div");y.className="quiz-fb",y.hidden=!0,y.setAttribute("aria-live","polite"),p.appendChild(y),n.appendChild(p)}),r.checked?P(!0):ve(null)}function he(e,n,t){let r=$(),o=r[e.id]||{a:[]};o.a=o.a||[],o.a[n]=t,o.checked=!1,r[e.id]=o,ne(r);let s=a("#quiz-list").children[n]?.querySelector(".quiz-fb");s&&(s.hidden=!0)}function ve(e,n){let t=a("#quiz-score");if(e===null){t.textContent="",t.classList.remove("done");return}t.textContent=`${e} / ${n} correct`,t.classList.toggle("done",e===n)}function P(e){let n=Y();if(!n)return;let t=$(),r=t[n.id]||{a:[]},o=0;n.quiz.forEach((s,l)=>{let p=a("#quiz-list").children[l],f=s.type==="choice"?(p.querySelector("input:checked")||{}).value:p.querySelector("input").value;r.a[l]=f;let m=p.querySelector(".quiz-fb"),y=f===void 0||f==="",d=!y&&Re(s,f);d&&o++,m.hidden=!1,m.className="quiz-fb "+(d?"ok":"bad"),m.innerHTML="";let u=document.createElement("b");u.textContent=d?"Correct.":y?"Not answered yet.":"Not quite.",m.appendChild(u),d&&s.explain?m.appendChild(document.createTextNode(s.explain)):!d&&!y&&m.appendChild(document.createTextNode(s.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),r.checked=!0,r.score=o,r.total=n.quiz.length,t[n.id]=r,ne(t),ve(o,n.quiz.length),e||z()}function qe(){let e=Y();e&&e.quiz.forEach((n,t)=>{let r=a("#quiz-list").children[t].querySelector(".quiz-fb");r.hidden=!1,r.className="quiz-fb shown",r.innerHTML="";let o=document.createElement("b");o.textContent="Answer: "+De(n)+".",r.appendChild(o),n.explain&&r.appendChild(document.createTextNode(n.explain))})}function Ie(){let e=Y();if(!e)return;let n=$();delete n[e.id],ne(n),te(),z()}function fe(e){return e===i.script?-1:/\.ys$/.test(e)?0:/\.s?v$/.test(e)?1:/\.lib$/.test(e)?3:2}var me=null;function B(){clearTimeout(me),me=setTimeout(U,400)}function U(){try{localStorage.setItem(be,JSON.stringify({example:i.example,script:i.script,files:i.files,order:i.order,current:i.current}))}catch{}}function Fe(){try{let e=JSON.parse(localStorage.getItem(be)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function ze(){let e=JSON.stringify({f:i.files,o:i.order,s:D()}),n=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=new Uint8Array(await new Response(n).arrayBuffer()),r="";for(let o of t)r+=String.fromCharCode(o);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function $e(e){let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=new Blob([Uint8Array.from(n,r=>r.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(t).text())}async function R(e,n){let t=!1;try{await navigator.clipboard.writeText(e),t=!0}catch{let o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{t=document.execCommand("copy")}catch{}o.remove()}if(n){let r=n.dataset.label||n.textContent;n.dataset.label=r,n.textContent=t?"Copied":"Press Ctrl+C",n.classList.toggle("ok",t),setTimeout(()=>{n.textContent=r,n.classList.remove("ok")},1600)}}function j(e,n){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([n],{type:"text/plain"})),t.download=e,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},500)}var S=a("#console"),W=[];function xe(){S.textContent="",W=[]}function v(e,n){W.push(e);let t=document.createElement("div");t.className="ln "+(n||"");let r=/\b([\w.-]+\.(?:v|sv|ys|lib)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|lib)),? line (\d+)\b/.exec(e);if(r&&i.files[r[1]]!==void 0){let o=e.indexOf(r[0]);t.appendChild(document.createTextNode(e.slice(0,o)));let s=document.createElement("button");s.type="button",s.className="loc",s.textContent=r[0],s.addEventListener("click",()=>Ne(r[1],+r[2])),t.appendChild(s),t.appendChild(document.createTextNode(e.slice(o+r[0].length)))}else t.textContent=e;/^ERROR|\bError:|Internal error/.test(e)?t.classList.add("err"):/^Warning/.test(e)?t.classList.add("warn"):/^\d+\. [A-Z]/.test(e)?t.classList.add("sec"):/Chip area for module|^\s+\d+\s+(?:[\d.E+-]+\s+)?cells$/.test(e)&&t.classList.add("met"),S.appendChild(t),S.childElementCount>2e4&&S.firstChild.remove()}function ie(e){let n=a("#summary");if(!e){n.innerHTML="",n.hidden=!0;return}let t=[],r=y=>{let d,u=null,h=new RegExp(y.source,"gm");for(;d=h.exec(e);)u=d;return u},o=r(/^\s+(\d+)\s+(?:[\d.E+-]+\s+)?cells$/),s=r(/Chip area for module '[^']*': ([\d.]+)/),l=r(/of which used for sequential elements: ([\d.]+) \(([\d.]+)%\)/),p=r(/^\s+(\d+)\s+(?:-\s+)?wires$/),f=(e.match(/^Warning: Latch inferred/gm)||[]).length,m=(e.match(/^ERROR/gm)||[]).length;o&&t.push(["Cells",o[1],""]),s&&t.push(["Chip area",(+s[1]).toLocaleString("en-US",{maximumFractionDigits:2}),""]),l&&t.push(["Sequential area",l[2]+"%",""]),p&&t.push(["Wires",p[1],""]),f&&t.push(["Latches inferred",String(f),"bad"]),m&&t.push(["Errors",String(m),"bad"]),n.innerHTML="";for(let[y,d,u]of t){let h=document.createElement("div");h.className="chip "+u;let A=document.createElement("span");A.className="k",A.textContent=y;let _=document.createElement("span");_.className="v",_.textContent=d,h.append(A,_),n.appendChild(h)}n.hidden=t.length===0}function T(e,n){let t=a("#status");t.textContent=e,t.dataset.kind=n}var E=new Map,F=new Map,K=!1,L=null,N=1,M=null;function Me(){return M||(M=new Promise((e,n)=>{let t=document.createElement("script");t.src="viz-global.js",t.onload=()=>window.Viz.instance().then(e,n),t.onerror=()=>n(new Error("Could not load Viz.js")),document.head.appendChild(t)}),M)}function re(){K=!1;let e=a("#diagram"),n=a("#diagram-tabs"),t=a("#diagram-view");if(!E.size){e.hidden=!0,n.innerHTML="",t.innerHTML="";return}e.hidden=!1;let r=[...E.keys()].sort();E.has(L)||(L=r[r.length-1]),n.innerHTML="";for(let s of r){let l=document.createElement("button");l.type="button",l.className="tab"+(s===L?" active":""),l.textContent=s.replace(/\.dot$/,""),l.addEventListener("click",()=>{L=s,re()}),n.appendChild(l)}let o=E.get(L);if(o.length>6e5){t.textContent="This diagram is too large to draw in the browser. Download the .dot file instead.";return}t.textContent="Drawing\u2026",Me().then(s=>{let l=s.renderSVGElement(o),p=(l.getAttribute("viewBox")||"").split(/\s+/).map(Number);oe=p.length===4&&p[2]>0?p[2]:800,l.removeAttribute("width"),l.removeAttribute("height"),t.innerHTML="",t.appendChild(l),ke()}).catch(s=>{t.textContent="Could not draw the diagram: "+(s.message||s)})}var oe=800;function J(){let e=a("#diagram-view svg");e&&(e.style.width=Math.round(oe*N)+"px"),a("#zoom-level").textContent=Math.round(N*100)+"%"}function ke(){let e=a("#diagram-view").clientWidth-24;N=Math.min(1,e>0?e/oe:1),J()}function se(){let e=a("#outputs");if(e.innerHTML="",!F.size){e.hidden=!0;return}e.hidden=!1;let n=document.createElement("span");n.className="k",n.textContent="Files written:",e.appendChild(n);for(let[t,r]of F){let o=document.createElement("button");o.type="button",o.className="btn small",o.textContent=`${t} (${r.length>1e6?(r.length/1e6).toFixed(1)+" MB":Math.max(1,Math.round(r.length/1e3))+" kB"})`,o.title="Download "+t,o.addEventListener("click",()=>j(t,r)),e.appendChild(o)}}function ae(){i.worker&&i.worker.terminate(),i.ready=!1;let e=new Worker(new URL("worker.js",location.href).href,{type:"module"});e.onmessage=n=>Oe(n.data),e.onerror=n=>{v("Yosys failed to start: "+(n.message||"worker error"),"err"),le(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),i.worker=e}var G=[],Z=null;function O(){Z=null;for(let[e,n]of G)v(e,n);G=[],S.scrollTop=S.scrollHeight}function Oe(e){if(e.type==="ready")i.ready=!0,i.running||T("Ready","idle");else if(e.type==="stage")T(e.stage+"\u2026","busy");else if(e.type==="file")if(O(),F.set(e.name,e.content),/\.dot$/i.test(e.name))E.set(e.name,e.content),L=e.name,K=!0;else if(e.content.length<=1e6){let n=i.files[e.name]===void 0;we(e.name,e.content,!0),v(`\u2500\u2500 Yosys ${n?"wrote":"updated"} ${e.name}: open its tab to read it \u2500\u2500`,"meta")}else v(`\u2500\u2500 Yosys wrote ${e.name} (${(e.content.length/1e6).toFixed(1)} MB): too big for the editor, download it below the report \u2500\u2500`,"meta");else e.type==="line"?(G.push([e.line,e.stream==="err"?"stderr":""]),Z||(Z=requestAnimationFrame(O))):e.type==="done"&&(O(),e.ok?v(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):v(e.rc===-1?"\u2500\u2500 Yosys stopped with an internal error \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),ie(W.join(`
`)),se(),K&&re(),le(e.ok))}function ye(){if(i.running)return;window.vddSubscribe&&window.vddSubscribe(),c?i.files[i.current]=c.getValue():i.files[i.current]=w.value;let e=D();if(i.files[e]===void 0){v(`Add a Yosys script (for example ${x}): it is what Yosys runs.`,"err");return}i.worker||ae(),U(),xe(),ie(null),F.clear(),se(),i.running=!0,a("#run").disabled=!0,a("#stop").disabled=!1,T(i.ready?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),v(`$ yosys -s ${e}`,"meta"),i.worker.postMessage({type:"run",files:{...i.files},script:e,dataFiles:de,base:new URL(".",location.href).href}),clearTimeout(i.timer),i.timer=setTimeout(()=>Ce(`Stopped after ${pe/1e3} s.`),pe)}function Ce(e){i.running&&(O(),v(e||"Stopped.","meta err"),le(!1,!0),ae())}function le(e,n){clearTimeout(i.timer),i.running=!1,a("#run").disabled=!1,a("#stop").disabled=!0,T(n?"Stopped":e?"Done":"Errors",n||!e?"err":"ok")}function Be(){a("#run").addEventListener("click",ye),a("#stop").addEventListener("click",()=>Ce()),a("#script").addEventListener("change",n=>{i.script=n.target.value,U()}),a("#new-file").addEventListener("click",Ee),a("#zoom-in").addEventListener("click",()=>{N=Math.min(N*1.25,8),J()}),a("#zoom-out").addEventListener("click",()=>{N=Math.max(N/1.25,.25),J()}),a("#zoom-fit").addEventListener("click",ke),a("#diagram-svg").addEventListener("click",()=>{let n=a("#diagram-view svg");n&&j((L||"diagram.dot").replace(/\.dot$/,".svg"),new XMLSerializer().serializeToString(n))}),a("#quiz-check").addEventListener("click",()=>P()),a("#quiz-reveal").addEventListener("click",qe),a("#quiz-reset").addEventListener("click",Ie),a("#ex-select").addEventListener("change",n=>I(n.target.value)),a("#reset").addEventListener("click",()=>I(i.example||b[0].id)),a("#copy-file").addEventListener("click",n=>R(c?c.getValue():w.value,n.currentTarget)),a("#download-file").addEventListener("click",()=>j(i.current,c?c.getValue():w.value)),a("#copy-output").addEventListener("click",n=>R(W.join(`
`),n.currentTarget)),a("#share").addEventListener("click",async n=>{let t=n.currentTarget;c&&(i.files[i.current]=c.getValue());try{let r=await ze();history.replaceState(null,"","#code="+r),R(location.href.split("#")[0]+"#code="+r,t)}catch{R(location.href,t)}}),document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&(n.preventDefault(),ye())});let e=a("#libs");e.innerHTML="";for(let[n,t]of ue){let r=document.createElement("li"),o=document.createElement("button");o.type="button",o.className="libname",o.textContent=n,o.title="Copy file name",o.addEventListener("click",()=>R(n,null));let s=document.createElement("span");s.textContent=t,r.append(o,s),e.appendChild(r)}}async function Qe(){Be();let e=!1,n=new URLSearchParams(location.hash.slice(1)).get("code");if(n)try{let o=await $e(n);i.example=null,i.script=o.s||x,i.order=o.o,i.files=o.f,V(o.f,o.o,i.script),e=!0}catch{}if(!e){let o=Fe();o&&(i.example=o.example,i.script=o.script||x,i.files=o.files,i.order=o.order,V(o.files,o.order,o.current),e=!0)}let t=new URLSearchParams(location.search).get("track"),r=k.some(o=>o.id===t);i.track=r?t:q(i.example)||"basic",ee(),!e||r&&q(i.example)!==t&&!n?await I(b.find(o=>o.group===C().group).id):(z(),te()),T("Loading Yosys\u2026","busy"),ae()}Qe();})();
