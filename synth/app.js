(()=>{var de={"syn-mux":{problem:"You write behavioural RTL (if/else). Synthesis must turn it into real gates from a cell library. How does that happen, and what does the result look like?",tasks:["Run show_rtl.ys and read the RTL diagram.","Run show_cmos.ys to map the design to the cells in mycells.lib.","Open the gate-level netlist and compare it with the RTL."],learn:"The basic Yosys flow: read, elaborate, map to a library, write a netlist and report area."},"syn-adder":{problem:"An adder written as a + b must become gates. Which gates, and how many?",tasks:["Run show_rtl.ys, then show_cmos.ys.","Read the cell count and area.","Change the width and see how the gate count grows."],learn:"How arithmetic operators are synthesized, and how area scales with width."},"syn-alu":{problem:"An ALU has many operations behind one case statement. The RTL is short, the gate netlist is not.",tasks:["Run both scripts and compare the RTL operators with the gate count.","Find which operations cost the most area."],learn:"How case statements and many operators turn into muxes and logic, and what drives area."},"syn-counter":{problem:"Sequential logic adds flip-flops. Where do they come from in the netlist, and how are reset and enable built?",tasks:["Run both scripts and find the flip-flops in the netlist.","See how synchronous reset and enable are made from gates."],learn:"How always @(posedge clk) becomes flip-flops, and how flops are mapped to library cells."},"syn-shift_register":{problem:"A shift register is mostly flip-flops. How much of the area is sequential, and how much is the logic around it?",tasks:["Run both scripts and read the sequential area.","Compare the flop count with the logic cells."],learn:"Read sequential versus combinational area in a synthesis report."},"syn-det_1011":{problem:"A state machine compiles and simulates, but synthesis warns about it. Ignoring synthesis warnings is how latches and bugs reach silicon.",tasks:["Run show_rtl.ys and read the warnings first.","Fix the cause in det_1011.v.","Compare the cell count before and after the fix."],learn:"Spot an inferred latch from a missing default, and fix it."},"syn-ibex":{problem:"Real designs are thousands of cells. Can you synthesize a full RISC-V CPU core and make sense of the result?",tasks:["Run synthesis (30 to 90 seconds).","Read the statistics: cells, flip-flops, buffers and chip area.","Answer the quiz from the report."],learn:"Synthesize a real CPU to SkyWater 130 nm cells and read a production-size area report."}};function ue(e,n){let t=document.getElementById("lab-brief");if(!t)return;let r=e[n];if(!r){t.hidden=!0;return}t.querySelector(".brief-problem").textContent=r.problem;let s=t.querySelector(".brief-tasks");s.innerHTML="";for(let l of r.tasks){let d=document.createElement("li");d.textContent=l,s.appendChild(d)}t.querySelector(".brief-learn").textContent=r.learn;let o=t.querySelector(".brief-fig");if(r.image){o||(o=document.createElement("figure"),o.className="brief-fig",t.appendChild(o)),o.innerHTML="";let l=document.createElement("a");l.href=r.image,l.target="_blank",l.rel="noopener";let d=document.createElement("img");if(d.src=r.image,d.alt=r.imageAlt||"",d.loading="lazy",l.appendChild(d),o.appendChild(l),r.caption){let h=document.createElement("figcaption");h.textContent=r.caption,o.appendChild(h)}}else o&&o.remove();t.hidden=!1}var k=[{id:"synth",group:"Synthesis workshop",title:"Synthesis workshop",note:"7 labs from a 2-to-1 mux to a RISC-V CPU core. Each lab has a quiz."}],b=[{id:"syn-mux",group:"Synthesis workshop",tag:"Lab 1",title:"Synthesis of a mux",script:"show_rtl.ys",files:{"show_rtl.ys":`# Lab 1: a 2-to-1 multiplexer.
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
`},quiz:[{type:"number",q:"How many wires does ibex_top have after synthesis?",answer:11257,tol:0,unit:"",explain:"The wires line of the final stat report.",try:!1},{type:"number",q:"How many cells?",answer:12255,tol:0,unit:"",explain:"The cells line of the final stat report.",try:!1},{type:"number",q:"How many flip-flops? (Add up the dfrtp, dfstp and dfxtp cells.)",answer:982,tol:0,unit:"",explain:"700 dfrtp_1 + 9 dfstp_1 + 273 dfxtp_1.",try:!1},{type:"number",q:"How many latches? (dlxtp and dlxtn: the register file is latch-based, RegFile = 2.)",answer:1025,tol:0,unit:"",explain:"992 dlxtp_1 + 33 dlxtn_1.",try:!1},{type:"number",q:"How many buffers?",answer:0,tol:0,unit:"",explain:"Synthesis does not add buffers here: buffering for fanout and wire load comes later, in placement and timing repair.",try:!1},{type:"number",q:"What is the chip area of ibex_top?",answer:102872.41,tol:1,unit:"\xB5m\xB2",explain:"In square micrometres, from the Sky130 cell areas.",try:!1}]}],pe=["ibex_rtl.v","sky130_fd_sc_hd__tt_025C_1v80_synth.lib"],he=[["mycells.lib","Demo library: BUF, NOT, NAND, NOR, DFF (in the lab tabs)"],["cmos_cells.lib","Demo library with DFFSR (in the lab tabs)"],["sky130_fd_sc_hd__tt_025C_1v80_synth.lib","SkyWater 130 nm HD, typical; cells usable for synthesis"],["ibex_rtl.v","lowRISC ibex RTL, converted to Verilog-2005 with sv2v"]];var a=e=>document.querySelector(e),fe=3e5,we="vdd-synth-lab-v1",x="show_rtl.ys",i={example:b[0].id,track:k[0].id,script:x,files:{},order:[],current:x,running:!1,ready:!1,worker:null,timer:null},_e=()=>i.order.filter(e=>/\.ys$/i.test(e));function q(){return i.files[i.script]!==void 0?i.script:i.files[x]!==void 0?x:_e()[0]||x}function Ee(){let e=a("#script-wrap"),n=a("#script"),t=_e(),r=q();e.hidden=!(t.length>1||t.length===1&&r!==x),n.innerHTML="";for(let s of t){let o=document.createElement("option");o.value=s,o.textContent=s,n.appendChild(o)}n.value=r}var g=new Map,c=null,w=a("#editor textarea");function X(e){return/\.s?v$/i.test(e)?"verilog":/\.(tcl|sdc|ys)$/i.test(e)?"tcl":"text/plain"}window.CodeMirror?(c=window.CodeMirror.fromTextArea(w,{lineNumbers:!0,indentUnit:2,tabSize:2,matchBrackets:!0,extraKeys:{Tab:e=>e.replaceSelection("  ")}}),c.on("change",()=>{i.files[i.current]=c.getValue(),O()})):(w.classList.add("plain-editor"),w.addEventListener("input",()=>{i.files[i.current]=w.value,O()}));function H(e){c?i.files[i.current]=c.getValue():i.files[i.current]=w.value,i.current=e,c?(g.has(e)||g.set(e,window.CodeMirror.Doc(i.files[e]??"",X(e))),c.swapDoc(g.get(e)),setTimeout(()=>c.refresh(),0)):w.value=i.files[e]??"",Q()}function Ae(e,n){H(e),c&&(c.focus(),c.setCursor({line:n-1,ch:0}),c.addLineClass(n-1,"background","cm-errline"),setTimeout(()=>c.removeLineClass(n-1,"background","cm-errline"),2500),c.scrollIntoView({line:n-1,ch:0},80))}function V(e,n,t){g.clear(),i.files={...e},i.order=n||Object.keys(e),i.current=t&&i.order.includes(t)?t:i.order.includes(q())?q():i.order[0],c?(g.set(i.current,window.CodeMirror.Doc(i.files[i.current]??"",X(i.current))),c.swapDoc(g.get(i.current))):w.value=i.files[i.current]??"",Q()}function Q(){let e=a("#tabs");e.innerHTML="";for(let n of i.order){let t=document.createElement("button");if(t.type="button",t.className="tab"+(n===i.current?" active":""),t.setAttribute("role","tab"),t.setAttribute("aria-selected",n===i.current?"true":"false"),t.textContent=n,t.addEventListener("click",()=>H(n)),e.appendChild(t),n===i.current&&i.order.length>1){let r=document.createElement("button");r.type="button",r.className="tab-x",r.textContent="\xD7",r.title="Remove "+n,r.setAttribute("aria-label","Remove file "+n),r.addEventListener("click",()=>Ne(n)),e.appendChild(r)}}Ee()}function ve(e,n,t){i.files[e]===void 0&&i.order.push(e),i.files[e]=n,g.delete(e),t?Q():H(e),O()}function Ne(e){c&&(i.files[i.current]=c.getValue()),delete i.files[e],g.delete(e),i.order=i.order.filter(n=>n!==e),i.current=i.order[0],c?(g.has(i.current)||g.set(i.current,window.CodeMirror.Doc(i.files[i.current]??"",X(i.current))),c.swapDoc(g.get(i.current))):w.value=i.files[i.current]??"",Q(),O()}function Te(){let e=(window.prompt("New file name (for example top.v, my_flow.ys):","")||"").trim();if(e){if(!/^[\w.+-]+$/.test(e)){v("File names can use letters, digits, dot, dash and underscore only.","err");return}if(i.files[e]!==void 0){H(e);return}ve(e,"")}}var D=e=>{let n=b.find(t=>t.id===e);return n?(k.find(t=>t.group===n.group)||k[0]).id:null},C=()=>k.find(e=>e.id===i.track)||k[0];function ee(){let e=a("#tracks");e.innerHTML="",e.hidden=k.length<2;for(let t of k){let r=document.createElement("button");r.type="button",r.className="track"+(t.id===C().id?" active":""),r.setAttribute("role","tab"),r.setAttribute("aria-selected",t.id===C().id?"true":"false");let s=b.filter(o=>o.group===t.group).length;r.innerHTML='<span class="track-t"></span><span class="track-n"></span>',r.querySelector(".track-t").textContent=t.title,r.querySelector(".track-n").textContent=s+" labs",r.addEventListener("click",()=>Re(t.id)),e.appendChild(r)}let n=a("#track-note");if(n.textContent=C().note+" ",C().id==="workshop"){let t=document.createElement("a");t.href="STA_Workshop_Labs.pdf",t.target="_blank",t.rel="noopener",t.className="btn small",t.textContent="Workshop slides (PDF)",n.appendChild(t)}}async function Re(e,n){i.track=e;try{let t=new URL(location.href);t.searchParams.set("track",e),history.replaceState(null,"",t.pathname+t.search+location.hash)}catch{}ee(),!n&&D(i.example)!==e?await I(b.find(t=>t.group===C().group).id):z()}function z(){let e=a("#examples");e.innerHTML="";for(let t of b.filter(r=>r.group===C().group)){let r=document.createElement("button");r.type="button",r.className="ex"+(t.id===i.example?" active":""),r.innerHTML='<span class="ex-tag"></span><span class="ex-title"></span>',r.querySelector(".ex-tag").textContent=t.tag;let s=t.quiz&&t.quiz.length?$()[t.id]:null;if(s&&s.checked){let o=document.createElement("span");o.className="ex-done",o.textContent=(s.score===s.total?"\u2713 ":"")+`quiz ${s.score}/${s.total}`,r.querySelector(".ex-tag").appendChild(o)}r.querySelector(".ex-title").textContent=t.title,r.addEventListener("click",()=>I(t.id)),e.appendChild(r)}let n=a("#ex-select");n.innerHTML=b.filter(t=>t.group===C().group).map(t=>`<option value="${t.id}">${t.group!=="Basic labs"?t.tag+" \xB7 ":""}${t.title}</option>`).join(""),i.example&&(n.value=i.example)}async function I(e){let n=b.find(s=>s.id===e)||b[0];i.example=n.id,D(n.id)!==i.track&&(i.track=D(n.id),ee()),i.script=n.script||x;let t={};for(let[s,o]of Object.entries(n.files))if(o!==null)t[s]=o;else try{let l=await fetch(new URL("data/"+(n.load||{})[s],location.href));t[s]=l.ok?await l.text():`// Could not load ${n.load[s]}`}catch{t[s]=`// Could not load ${n.load[s]}`}let r=Object.keys(n.files).sort((s,o)=>ye(s)-ye(o));V(t,r,i.script),A.clear(),F.clear(),re(),oe(),z(),ne(),U(),Ce(),ie(null),T(i.ready?"Ready":"Loading Yosys\u2026",i.ready?"idle":"busy")}var xe="vdd-synth-quiz-v1";function $(){try{return JSON.parse(localStorage.getItem(xe)||"{}")||{}}catch{return{}}}function te(e){try{localStorage.setItem(xe,JSON.stringify(e))}catch{}}var Y=()=>b.find(e=>e.id===i.example&&e.quiz&&e.quiz.length);function qe(e){let n=String(e||"").replace(/[−–—]/g,"-").replace(/,/g,"").match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);return n?parseFloat(n[0]):NaN}function De(e,n){if(e.type==="choice")return n!=null&&+n===e.answer;let t=qe(n);return isFinite(t)&&Math.abs(t-e.answer)<=(e.tol??.01)+1e-9}var Ie=e=>e.type==="choice"?e.options[e.answer]:`${Number.isInteger(e.answer)?e.answer:e.answer.toFixed(2)}${e.unit?" "+e.unit:""}`;function ne(){ue(de,i.example);let e=a("#quiz"),n=a("#quiz-list"),t=Y();if(!t){e.hidden=!0;return}e.hidden=!1;let r=$()[t.id]||{},s=r.a||[];n.innerHTML="",t.quiz.forEach((o,l)=>{let d=document.createElement("li"),h=document.createElement("div");if(h.className="quiz-q",o.try){let u=document.createElement("span");u.className="quiz-try",u.textContent="Try it",h.appendChild(u)}let m=o.q.replace(/^Try it: /,"");if(h.appendChild(document.createTextNode(m.charAt(0).toUpperCase()+m.slice(1))),d.appendChild(h),o.type==="choice"){let u=document.createElement("div");u.className="quiz-opts",u.setAttribute("role","radiogroup"),o.options.forEach((p,f)=>{let E=document.createElement("label"),_=document.createElement("input");_.type="radio",_.name=`q${l}`,_.value=f,s[l]!==void 0&&+s[l]===f&&(_.checked=!0),_.addEventListener("change",()=>me(t,l,f));let ce=document.createElement("span");ce.textContent=p,E.append(_,ce),u.appendChild(E)}),d.appendChild(u)}else{let u=document.createElement("div");u.className="quiz-num";let p=document.createElement("input");if(p.type="text",p.inputMode="decimal",p.autocomplete="off",p.setAttribute("aria-label","Answer to question "+(l+1)),p.placeholder="e.g. -1.23",s[l]!==void 0&&(p.value=s[l]),p.addEventListener("input",()=>me(t,l,p.value)),p.addEventListener("keydown",f=>{f.key==="Enter"&&P()}),u.appendChild(p),o.unit){let f=document.createElement("span");f.className="unit",f.textContent=o.unit,u.appendChild(f)}d.appendChild(u)}let y=document.createElement("div");y.className="quiz-fb",y.hidden=!0,y.setAttribute("aria-live","polite"),d.appendChild(y),n.appendChild(d)}),r.checked?P(!0):ke(null)}function me(e,n,t){let r=$(),s=r[e.id]||{a:[]};s.a=s.a||[],s.a[n]=t,s.checked=!1,r[e.id]=s,te(r);let o=a("#quiz-list").children[n]?.querySelector(".quiz-fb");o&&(o.hidden=!0)}function ke(e,n){let t=a("#quiz-score");if(e===null){t.textContent="",t.classList.remove("done");return}t.textContent=`${e} / ${n} correct`,t.classList.toggle("done",e===n)}function P(e){let n=Y();if(!n)return;let t=$(),r=t[n.id]||{a:[]},s=0;n.quiz.forEach((o,l)=>{let d=a("#quiz-list").children[l],h=o.type==="choice"?(d.querySelector("input:checked")||{}).value:d.querySelector("input").value;r.a[l]=h;let m=d.querySelector(".quiz-fb"),y=h===void 0||h==="",u=!y&&De(o,h);u&&s++,m.hidden=!1,m.className="quiz-fb "+(u?"ok":"bad"),m.innerHTML="";let p=document.createElement("b");p.textContent=u?"Correct.":y?"Not answered yet.":"Not quite.",m.appendChild(p),u&&o.explain?m.appendChild(document.createTextNode(o.explain)):!u&&!y&&m.appendChild(document.createTextNode(o.type==="number"?"Check the report again: read the exact value, including its sign.":"Look at the report again and try another option."))}),r.checked=!0,r.score=s,r.total=n.quiz.length,t[n.id]=r,te(t),ke(s,n.quiz.length),e||z()}function Fe(){let e=Y();e&&e.quiz.forEach((n,t)=>{let r=a("#quiz-list").children[t].querySelector(".quiz-fb");r.hidden=!1,r.className="quiz-fb shown",r.innerHTML="";let s=document.createElement("b");s.textContent="Answer: "+Ie(n)+".",r.appendChild(s),n.explain&&r.appendChild(document.createTextNode(n.explain))})}function ze(){let e=Y();if(!e)return;let n=$();delete n[e.id],te(n),ne(),z()}function ye(e){return e===i.script?-1:/\.ys$/.test(e)?0:/\.s?v$/.test(e)?1:/\.lib$/.test(e)?3:2}var be=null;function O(){clearTimeout(be),be=setTimeout(U,400)}function U(){try{localStorage.setItem(we,JSON.stringify({example:i.example,script:i.script,files:i.files,order:i.order,current:i.current}))}catch{}}function $e(){try{let e=JSON.parse(localStorage.getItem(we)||"null");if(e&&e.files&&e.order)return e}catch{}return null}async function Me(){let e=JSON.stringify({f:i.files,o:i.order,s:q()}),n=new Blob([e]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=new Uint8Array(await new Response(n).arrayBuffer()),r="";for(let s of t)r+=String.fromCharCode(s);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Be(e){let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=new Blob([Uint8Array.from(n,r=>r.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return JSON.parse(await new Response(t).text())}async function R(e,n){let t=!1;try{await navigator.clipboard.writeText(e),t=!0}catch{let s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select();try{t=document.execCommand("copy")}catch{}s.remove()}if(n){let r=n.dataset.label||n.textContent;n.dataset.label=r,n.textContent=t?"Copied":"Press Ctrl+C",n.classList.toggle("ok",t),setTimeout(()=>{n.textContent=r,n.classList.remove("ok")},1600)}}function j(e,n){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([n],{type:"text/plain"})),t.download=e,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},500)}var N=a("#console"),W=[];function Ce(){N.textContent="",W=[]}function v(e,n){W.push(e);let t=document.createElement("div");t.className="ln "+(n||"");let r=/\b([\w.-]+\.(?:v|sv|ys|lib)):(\d+)\b/.exec(e)||/\b([\w.-]+\.(?:v|sv|ys|lib)),? line (\d+)\b/.exec(e);if(r&&i.files[r[1]]!==void 0){let s=e.indexOf(r[0]);t.appendChild(document.createTextNode(e.slice(0,s)));let o=document.createElement("button");o.type="button",o.className="loc",o.textContent=r[0],o.addEventListener("click",()=>Ae(r[1],+r[2])),t.appendChild(o),t.appendChild(document.createTextNode(e.slice(s+r[0].length)))}else t.textContent=e;/^ERROR|\bError:|Internal error/.test(e)?t.classList.add("err"):/^Warning/.test(e)?t.classList.add("warn"):/^\d+\. [A-Z]/.test(e)?t.classList.add("sec"):/Chip area for module|^\s+\d+\s+(?:[\d.E+-]+\s+)?cells$/.test(e)&&t.classList.add("met"),N.appendChild(t),N.childElementCount>2e4&&N.firstChild.remove()}function ie(e){let n=a("#summary");if(!e){n.innerHTML="",n.hidden=!0;return}let t=[],r=y=>{let u,p=null,f=new RegExp(y.source,"gm");for(;u=f.exec(e);)p=u;return p},s=r(/^\s+(\d+)\s+(?:[\d.E+-]+\s+)?cells$/),o=r(/Chip area for module '[^']*': ([\d.]+)/),l=r(/of which used for sequential elements: ([\d.]+) \(([\d.]+)%\)/),d=r(/^\s+(\d+)\s+(?:-\s+)?wires$/),h=(e.match(/^Warning: Latch inferred/gm)||[]).length,m=(e.match(/^ERROR/gm)||[]).length;s&&t.push(["Cells",s[1],""]),o&&t.push(["Chip area",(+o[1]).toLocaleString("en-US",{maximumFractionDigits:2}),""]),l&&t.push(["Sequential area",l[2]+"%",""]),d&&t.push(["Wires",d[1],""]),h&&t.push(["Latches inferred",String(h),"bad"]),m&&t.push(["Errors",String(m),"bad"]),n.innerHTML="";for(let[y,u,p]of t){let f=document.createElement("div");f.className="chip "+p;let E=document.createElement("span");E.className="k",E.textContent=y;let _=document.createElement("span");_.className="v",_.textContent=u,f.append(E,_),n.appendChild(f)}n.hidden=t.length===0}function T(e,n){let t=a("#status");t.textContent=e,t.dataset.kind=n}var A=new Map,F=new Map,K=!1,L=null,S=1,M=null;function Oe(){return M||(M=new Promise((e,n)=>{let t=document.createElement("script");t.src="viz-global.js",t.onload=()=>window.Viz.instance().then(e,n),t.onerror=()=>n(new Error("Could not load Viz.js")),document.head.appendChild(t)}),M)}function re(){K=!1;let e=a("#diagram"),n=a("#diagram-tabs"),t=a("#diagram-view");if(!A.size){e.hidden=!0,n.innerHTML="",t.innerHTML="";return}e.hidden=!1;let r=[...A.keys()].sort();A.has(L)||(L=r[r.length-1]),n.innerHTML="";for(let o of r){let l=document.createElement("button");l.type="button",l.className="tab"+(o===L?" active":""),l.textContent=o.replace(/\.dot$/,""),l.addEventListener("click",()=>{L=o,re()}),n.appendChild(l)}let s=A.get(L);if(s.length>6e5){t.textContent="This diagram is too large to draw in the browser. Download the .dot file instead.";return}t.textContent="Drawing\u2026",Oe().then(o=>{let l=o.renderSVGElement(s),d=(l.getAttribute("viewBox")||"").split(/\s+/).map(Number);se=d.length===4&&d[2]>0?d[2]:800,l.removeAttribute("width"),l.removeAttribute("height"),t.innerHTML="",t.appendChild(l),Le()}).catch(o=>{t.textContent="Could not draw the diagram: "+(o.message||o)})}var se=800;function J(){let e=a("#diagram-view svg");e&&(e.style.width=Math.round(se*S)+"px"),a("#zoom-level").textContent=Math.round(S*100)+"%"}function Le(){let e=a("#diagram-view").clientWidth-24;S=Math.min(1,e>0?e/se:1),J()}function oe(){let e=a("#outputs");if(e.innerHTML="",!F.size){e.hidden=!0;return}e.hidden=!1;let n=document.createElement("span");n.className="k",n.textContent="Files written:",e.appendChild(n);for(let[t,r]of F){let s=document.createElement("button");s.type="button",s.className="btn small",s.textContent=`${t} (${r.length>1e6?(r.length/1e6).toFixed(1)+" MB":Math.max(1,Math.round(r.length/1e3))+" kB"})`,s.title="Download "+t,s.addEventListener("click",()=>j(t,r)),e.appendChild(s)}}function ae(){i.worker&&i.worker.terminate(),i.ready=!1;let e=new Worker(new URL("worker.js",location.href).href,{type:"module"});e.onmessage=n=>He(n.data),e.onerror=n=>{v("Yosys failed to start: "+(n.message||"worker error"),"err"),le(!1)},e.postMessage({type:"load",base:new URL(".",location.href).href}),i.worker=e}var G=[],Z=null;function B(){Z=null;for(let[e,n]of G)v(e,n);G=[],N.scrollTop=N.scrollHeight}function He(e){if(e.type==="ready")i.ready=!0,i.running||T("Ready","idle");else if(e.type==="stage")T(e.stage+"\u2026","busy");else if(e.type==="file")if(B(),F.set(e.name,e.content),/\.dot$/i.test(e.name))A.set(e.name,e.content),L=e.name,K=!0;else if(e.content.length<=1e6){let n=i.files[e.name]===void 0;ve(e.name,e.content,!0),v(`\u2500\u2500 Yosys ${n?"wrote":"updated"} ${e.name}: open its tab to read it \u2500\u2500`,"meta")}else v(`\u2500\u2500 Yosys wrote ${e.name} (${(e.content.length/1e6).toFixed(1)} MB): too big for the editor, download it below the report \u2500\u2500`,"meta");else e.type==="line"?(G.push([e.line,e.stream==="err"?"stderr":""]),Z||(Z=requestAnimationFrame(B))):e.type==="done"&&(B(),e.ok?v(`\u2500\u2500 finished in ${e.ms} ms \u2500\u2500`,"meta"):v(e.rc===-1?"\u2500\u2500 Yosys stopped with an internal error \u2500\u2500":`\u2500\u2500 Yosys exited with code ${e.rc}: check the errors above \u2500\u2500`,"meta err"),ie(W.join(`
`)),oe(),K&&re(),le(e.ok))}function ge(){if(i.running)return;window.vddSubscribe&&window.vddSubscribe(),c?i.files[i.current]=c.getValue():i.files[i.current]=w.value;let e=q();if(i.files[e]===void 0){v(`Add a Yosys script (for example ${x}): it is what Yosys runs.`,"err");return}i.worker||ae(),U(),Ce(),ie(null),F.clear(),oe(),i.running=!0,a("#run").disabled=!0,a("#stop").disabled=!1,T(i.ready?"Running Yosys\u2026":"Loading Yosys\u2026","busy"),v(`$ yosys -s ${e}`,"meta"),i.worker.postMessage({type:"run",files:{...i.files},script:e,dataFiles:pe,base:new URL(".",location.href).href}),clearTimeout(i.timer),i.timer=setTimeout(()=>Se(`Stopped after ${fe/1e3} s.`),fe)}function Se(e){i.running&&(B(),v(e||"Stopped.","meta err"),le(!1,!0),ae())}function le(e,n){clearTimeout(i.timer),i.running=!1,a("#run").disabled=!1,a("#stop").disabled=!0,T(n?"Stopped":e?"Done":"Errors",n||!e?"err":"ok")}function Qe(){a("#run").addEventListener("click",ge),a("#stop").addEventListener("click",()=>Se()),a("#script").addEventListener("change",n=>{i.script=n.target.value,U()}),a("#new-file").addEventListener("click",Te),a("#zoom-in").addEventListener("click",()=>{S=Math.min(S*1.25,8),J()}),a("#zoom-out").addEventListener("click",()=>{S=Math.max(S/1.25,.25),J()}),a("#zoom-fit").addEventListener("click",Le),a("#diagram-svg").addEventListener("click",()=>{let n=a("#diagram-view svg");n&&j((L||"diagram.dot").replace(/\.dot$/,".svg"),new XMLSerializer().serializeToString(n))}),a("#quiz-check").addEventListener("click",()=>P()),a("#quiz-reveal").addEventListener("click",Fe),a("#quiz-reset").addEventListener("click",ze),a("#ex-select").addEventListener("change",n=>I(n.target.value)),a("#reset").addEventListener("click",()=>I(i.example||b[0].id)),a("#copy-file").addEventListener("click",n=>R(c?c.getValue():w.value,n.currentTarget)),a("#download-file").addEventListener("click",()=>j(i.current,c?c.getValue():w.value)),a("#copy-output").addEventListener("click",n=>R(W.join(`
`),n.currentTarget)),a("#share").addEventListener("click",async n=>{let t=n.currentTarget;c&&(i.files[i.current]=c.getValue());try{let r=await Me();history.replaceState(null,"","#code="+r),R(location.href.split("#")[0]+"#code="+r,t)}catch{R(location.href,t)}}),document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&(n.preventDefault(),ge())});let e=a("#libs");e.innerHTML="";for(let[n,t]of he){let r=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="libname",s.textContent=n,s.title="Copy file name",s.addEventListener("click",()=>R(n,null));let o=document.createElement("span");o.textContent=t,r.append(s,o),e.appendChild(r)}}async function Ye(){Qe();let e=!1,n=new URLSearchParams(location.hash.slice(1)).get("code");if(n)try{let s=await Be(n);i.example=null,i.script=s.s||x,i.order=s.o,i.files=s.f,V(s.f,s.o,i.script),e=!0}catch{}if(!e){let s=$e();s&&(i.example=s.example,i.script=s.script||x,i.files=s.files,i.order=s.order,V(s.files,s.order,s.current),e=!0)}let t=new URLSearchParams(location.search).get("track"),r=k.some(s=>s.id===t);i.track=r?t:D(i.example)||"basic",ee(),!e||r&&D(i.example)!==t&&!n?await I(b.find(s=>s.group===C().group).id):(z(),ne()),T("Loading Yosys\u2026","busy"),ae()}Ye();})();
