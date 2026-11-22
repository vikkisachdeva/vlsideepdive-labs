// Divider with 2 subtraction(s) per clock, synthesised by Yosys to Sky130 HD cells.

module div_k2(clk, rst, start, xin, yin, quotient, remainder, done);
  input clk;
  wire clk;
  input rst;
  wire rst;
  input start;
  wire start;
  input [7:0] xin;
  wire [7:0] xin;
  input [7:0] yin;
  wire [7:0] yin;
  output [7:0] quotient;
  wire [7:0] quotient;
  output [7:0] remainder;
  wire [7:0] remainder;
  output done;
  wire done;
  wire _000_;
  wire _001_;
  wire _002_;
  wire _003_;
  wire _004_;
  wire _005_;
  wire _006_;
  wire _007_;
  wire _008_;
  wire _009_;
  wire _010_;
  wire _011_;
  wire _012_;
  wire _013_;
  wire _014_;
  wire _015_;
  wire _016_;
  wire _017_;
  wire _018_;
  wire _019_;
  wire _020_;
  wire _021_;
  wire _022_;
  wire _023_;
  wire _024_;
  wire _025_;
  wire _026_;
  wire _027_;
  wire _028_;
  wire _029_;
  wire _030_;
  wire _031_;
  wire _032_;
  wire _033_;
  wire _034_;
  wire _035_;
  wire _036_;
  wire _037_;
  wire _038_;
  wire _039_;
  wire _040_;
  wire _041_;
  wire _042_;
  wire _043_;
  wire _044_;
  wire _045_;
  wire _046_;
  wire _047_;
  wire _048_;
  wire _049_;
  wire _050_;
  wire _051_;
  wire _052_;
  wire _053_;
  wire _054_;
  wire _055_;
  wire _056_;
  wire _057_;
  wire _058_;
  wire _059_;
  wire _060_;
  wire _061_;
  wire _062_;
  wire _063_;
  wire _064_;
  wire _065_;
  wire _066_;
  wire _067_;
  wire _068_;
  wire _069_;
  wire _070_;
  wire _071_;
  wire _072_;
  wire _073_;
  wire _074_;
  wire _075_;
  wire _076_;
  wire _077_;
  wire _078_;
  wire _079_;
  wire _080_;
  wire _081_;
  wire _082_;
  wire _083_;
  wire _084_;
  wire _085_;
  wire _086_;
  wire _087_;
  wire _088_;
  wire _089_;
  wire _090_;
  wire _091_;
  wire _092_;
  wire _093_;
  wire _094_;
  wire _095_;
  wire _096_;
  wire _097_;
  wire _098_;
  wire _099_;
  wire _100_;
  wire _101_;
  wire _102_;
  wire _103_;
  wire _104_;
  wire _105_;
  wire _106_;
  wire _107_;
  wire _108_;
  wire _109_;
  wire _110_;
  wire _111_;
  wire _112_;
  wire _113_;
  wire _114_;
  wire _115_;
  wire _116_;
  wire _117_;
  wire _118_;
  wire _119_;
  wire _120_;
  wire _121_;
  wire _122_;
  wire _123_;
  wire _124_;
  wire _125_;
  wire _126_;
  wire _127_;
  wire _128_;
  wire _129_;
  wire _130_;
  wire _131_;
  wire _132_;
  wire _133_;
  wire _134_;
  wire _135_;
  wire _136_;
  wire _137_;
  wire _138_;
  wire _139_;
  wire _140_;
  wire _141_;
  wire _142_;
  wire _143_;
  wire _144_;
  wire _145_;
  wire _146_;
  wire _147_;
  wire _148_;
  wire _149_;
  wire _150_;
  wire _151_;
  wire _152_;
  wire _153_;
  wire _154_;
  wire _155_;
  wire _156_;
  wire _157_;
  wire _158_;
  wire _159_;
  wire _160_;
  wire _161_;
  wire _162_;
  wire _163_;
  wire _164_;
  wire _165_;
  wire _166_;
  wire _167_;
  wire _168_;
  wire _169_;
  wire _170_;
  wire _171_;
  wire _172_;
  wire _173_;
  wire _174_;
  wire _175_;
  wire _176_;
  wire _177_;
  wire _178_;
  wire _179_;
  wire _180_;
  wire _181_;
  wire _182_;
  wire _183_;
  wire _184_;
  wire _185_;
  wire _186_;
  wire _187_;
  wire _188_;
  wire _189_;
  wire _190_;
  wire _191_;
  wire _192_;
  wire _193_;
  wire _194_;
  wire _195_;
  wire _196_;
  wire _197_;
  wire _198_;
  wire _199_;
  wire _200_;
  wire _201_;
  wire _202_;
  wire _203_;
  wire _204_;
  wire _205_;
  wire _206_;
  wire _207_;
  wire _208_;
  wire _209_;
  wire _210_;
  wire _211_;
  wire _212_;
  wire _213_;
  wire _214_;
  wire _215_;
  wire _216_;
  wire _217_;
  wire _218_;
  wire _219_;
  wire _220_;
  wire _221_;
  wire _222_;
  wire _223_;
  wire _224_;
  wire _225_;
  wire _226_;
  wire _227_;
  wire _228_;
  wire _229_;
  wire _230_;
  wire _231_;
  wire _232_;
  wire _233_;
  wire _234_;
  wire _235_;
  wire _236_;
  wire _237_;
  wire _238_;
  wire _239_;
  wire busy;
  wire signed [31:0] i;
  wire [7:0] q;
  wire [7:0] x;
  wire [7:0] y;
  sky130_fd_sc_hd__clkinv_1 _240_ (
    .A(busy),
    .Y(_042_)
  );
  sky130_fd_sc_hd__clkinv_1 _241_ (
    .A(rst),
    .Y(_043_)
  );
  sky130_fd_sc_hd__nand2b_1 _242_ (
    .A_N(y[6]),
    .B(x[6]),
    .Y(_052_)
  );
  sky130_fd_sc_hd__nand2_1 _243_ (
    .A(q[6]),
    .B(_137_),
    .Y(_138_)
  );
  sky130_fd_sc_hd__nor2_1 _244_ (
    .A(q[3]),
    .B(_135_),
    .Y(_139_)
  );
  sky130_fd_sc_hd__nor2_1 _245_ (
    .A(_136_),
    .B(_139_),
    .Y(_140_)
  );
  sky130_fd_sc_hd__clkinv_1 _246_ (
    .A(_140_),
    .Y(_141_)
  );
  sky130_fd_sc_hd__xnor2_1 _247_ (
    .A(_044_),
    .B(_134_),
    .Y(_142_)
  );
  sky130_fd_sc_hd__clkinv_1 _248_ (
    .A(_142_),
    .Y(_143_)
  );
  sky130_fd_sc_hd__xnor2_1 _249_ (
    .A(q[0]),
    .B(_075_),
    .Y(_144_)
  );
  sky130_fd_sc_hd__xnor2_1 _250_ (
    .A(q[0]),
    .B(_076_),
    .Y(_145_)
  );
  sky130_fd_sc_hd__nand2_1 _251_ (
    .A(_122_),
    .B(_144_),
    .Y(_146_)
  );
  sky130_fd_sc_hd__nand3_1 _252_ (
    .A(q[1]),
    .B(_122_),
    .C(_144_),
    .Y(_147_)
  );
  sky130_fd_sc_hd__xnor2_1 _253_ (
    .A(x[6]),
    .B(y[6]),
    .Y(_053_)
  );
  sky130_fd_sc_hd__nand4_1 _254_ (
    .A(q[1]),
    .B(_122_),
    .C(_143_),
    .D(_144_),
    .Y(_148_)
  );
  sky130_fd_sc_hd__nor3_1 _255_ (
    .A(_047_),
    .B(_141_),
    .C(_148_),
    .Y(_149_)
  );
  sky130_fd_sc_hd__a21oi_1 _256_ (
    .A1(q[4]),
    .A2(_136_),
    .B1(q[5]),
    .Y(_150_)
  );
  sky130_fd_sc_hd__nor2_1 _257_ (
    .A(_137_),
    .B(_150_),
    .Y(_151_)
  );
  sky130_fd_sc_hd__clkinv_1 _258_ (
    .A(_151_),
    .Y(_152_)
  );
  sky130_fd_sc_hd__o41a_1 _259_ (
    .A1(_047_),
    .A2(_141_),
    .A3(_148_),
    .A4(_152_),
    .B1(_138_),
    .X(_153_)
  );
  sky130_fd_sc_hd__nor2_1 _260_ (
    .A(q[6]),
    .B(_137_),
    .Y(_154_)
  );
  sky130_fd_sc_hd__clkinv_1 _261_ (
    .A(_154_),
    .Y(_155_)
  );
  sky130_fd_sc_hd__o31ai_1 _262_ (
    .A1(_075_),
    .A2(_153_),
    .A3(_154_),
    .B1(q[7]),
    .Y(_156_)
  );
  sky130_fd_sc_hd__or4_1 _263_ (
    .A(q[7]),
    .B(_075_),
    .C(_153_),
    .D(_154_),
    .X(_157_)
  );
  sky130_fd_sc_hd__clkinv_1 _264_ (
    .A(_053_),
    .Y(_054_)
  );
  sky130_fd_sc_hd__o21ai_0 _265_ (
    .A1(busy),
    .A2(q[7]),
    .B1(_127_),
    .Y(_158_)
  );
  sky130_fd_sc_hd__a31oi_1 _266_ (
    .A1(busy),
    .A2(_156_),
    .A3(_157_),
    .B1(_158_),
    .Y(_002_)
  );
  sky130_fd_sc_hd__a222oi_1 _267_ (
    .A1(xin[7]),
    .A2(_125_),
    .B1(_128_),
    .B2(x[7]),
    .C1(_131_),
    .C2(busy),
    .Y(_159_)
  );
  sky130_fd_sc_hd__nor2_1 _268_ (
    .A(rst),
    .B(_159_),
    .Y(_001_)
  );
  sky130_fd_sc_hd__o21ai_0 _269_ (
    .A1(quotient[7]),
    .A2(_123_),
    .B1(_043_),
    .Y(_160_)
  );
  sky130_fd_sc_hd__a31oi_1 _270_ (
    .A1(_123_),
    .A2(_156_),
    .A3(_157_),
    .B1(_160_),
    .Y(_000_)
  );
  sky130_fd_sc_hd__nand2_1 _271_ (
    .A(quotient[0]),
    .B(_129_),
    .Y(_161_)
  );
  sky130_fd_sc_hd__o21ai_0 _272_ (
    .A1(_133_),
    .A2(_145_),
    .B1(_161_),
    .Y(_041_)
  );
  sky130_fd_sc_hd__a21oi_1 _273_ (
    .A1(q[0]),
    .A2(_076_),
    .B1(q[1]),
    .Y(_162_)
  );
  sky130_fd_sc_hd__nand2_1 _274_ (
    .A(_146_),
    .B(_162_),
    .Y(_163_)
  );
  sky130_fd_sc_hd__nor2b_1 _275_ (
    .A(y[5]),
    .B_N(x[5]),
    .Y(_055_)
  );
  sky130_fd_sc_hd__nand3_1 _276_ (
    .A(_134_),
    .B(_147_),
    .C(_163_),
    .Y(_164_)
  );
  sky130_fd_sc_hd__nor2_1 _277_ (
    .A(quotient[1]),
    .B(_123_),
    .Y(_165_)
  );
  sky130_fd_sc_hd__a211oi_1 _278_ (
    .A1(_123_),
    .A2(_164_),
    .B1(_165_),
    .C1(rst),
    .Y(_040_)
  );
  sky130_fd_sc_hd__nand2_1 _279_ (
    .A(_142_),
    .B(_147_),
    .Y(_166_)
  );
  sky130_fd_sc_hd__nand2_1 _280_ (
    .A(_148_),
    .B(_166_),
    .Y(_167_)
  );
  sky130_fd_sc_hd__nor2_1 _281_ (
    .A(quotient[2]),
    .B(_123_),
    .Y(_168_)
  );
  sky130_fd_sc_hd__a211oi_1 _282_ (
    .A1(_123_),
    .A2(_167_),
    .B1(_168_),
    .C1(rst),
    .Y(_039_)
  );
  sky130_fd_sc_hd__xnor2_1 _283_ (
    .A(_140_),
    .B(_148_),
    .Y(_169_)
  );
  sky130_fd_sc_hd__nand2_1 _284_ (
    .A(_123_),
    .B(_169_),
    .Y(_170_)
  );
  sky130_fd_sc_hd__nand2_1 _285_ (
    .A(quotient[3]),
    .B(_124_),
    .Y(_171_)
  );
  sky130_fd_sc_hd__nor2b_1 _286_ (
    .A(x[5]),
    .B_N(y[5]),
    .Y(_056_)
  );
  sky130_fd_sc_hd__a21oi_1 _287_ (
    .A1(_170_),
    .A2(_171_),
    .B1(rst),
    .Y(_038_)
  );
  sky130_fd_sc_hd__o21bai_1 _288_ (
    .A1(_141_),
    .A2(_148_),
    .B1_N(_136_),
    .Y(_172_)
  );
  sky130_fd_sc_hd__xnor2_1 _289_ (
    .A(q[4]),
    .B(_172_),
    .Y(_173_)
  );
  sky130_fd_sc_hd__nor2_1 _290_ (
    .A(quotient[4]),
    .B(_123_),
    .Y(_174_)
  );
  sky130_fd_sc_hd__a211oi_1 _291_ (
    .A1(_123_),
    .A2(_173_),
    .B1(_174_),
    .C1(rst),
    .Y(_037_)
  );
  sky130_fd_sc_hd__xnor2_1 _292_ (
    .A(_149_),
    .B(_151_),
    .Y(_175_)
  );
  sky130_fd_sc_hd__nor2_1 _293_ (
    .A(quotient[5]),
    .B(_123_),
    .Y(_176_)
  );
  sky130_fd_sc_hd__a211oi_1 _294_ (
    .A1(_123_),
    .A2(_175_),
    .B1(_176_),
    .C1(rst),
    .Y(_036_)
  );
  sky130_fd_sc_hd__a32oi_1 _295_ (
    .A1(_048_),
    .A2(_149_),
    .A3(_151_),
    .B1(_153_),
    .B2(_155_),
    .Y(_177_)
  );
  sky130_fd_sc_hd__nor2_1 _296_ (
    .A(quotient[6]),
    .B(_123_),
    .Y(_178_)
  );
  sky130_fd_sc_hd__nor2b_1 _297_ (
    .A(y[4]),
    .B_N(x[4]),
    .Y(_057_)
  );
  sky130_fd_sc_hd__a211oi_1 _298_ (
    .A1(_123_),
    .A2(_177_),
    .B1(_178_),
    .C1(rst),
    .Y(_035_)
  );
  sky130_fd_sc_hd__nand2_1 _299_ (
    .A(y[0]),
    .B(_122_),
    .Y(_179_)
  );
  sky130_fd_sc_hd__xor2_1 _300_ (
    .A(_106_),
    .B(_179_),
    .X(_180_)
  );
  sky130_fd_sc_hd__a222oi_1 _301_ (
    .A1(xin[0]),
    .A2(_125_),
    .B1(_128_),
    .B2(x[0]),
    .C1(busy),
    .C2(_180_),
    .Y(_181_)
  );
  sky130_fd_sc_hd__nor2_1 _302_ (
    .A(rst),
    .B(_181_),
    .Y(_034_)
  );
  sky130_fd_sc_hd__and2_0 _303_ (
    .A(busy),
    .B(_122_),
    .X(_182_)
  );
  sky130_fd_sc_hd__nand2_1 _304_ (
    .A(busy),
    .B(_122_),
    .Y(_183_)
  );
  sky130_fd_sc_hd__nand2_1 _305_ (
    .A(_107_),
    .B(_109_),
    .Y(_184_)
  );
  sky130_fd_sc_hd__nand3b_1 _306_ (
    .A_N(_110_),
    .B(_182_),
    .C(_184_),
    .Y(_185_)
  );
  sky130_fd_sc_hd__a222oi_1 _307_ (
    .A1(xin[1]),
    .A2(_125_),
    .B1(_128_),
    .B2(x[1]),
    .C1(_103_),
    .C2(_123_),
    .Y(_186_)
  );
  sky130_fd_sc_hd__xnor2_1 _308_ (
    .A(x[4]),
    .B(y[4]),
    .Y(_058_)
  );
  sky130_fd_sc_hd__a21oi_1 _309_ (
    .A1(_185_),
    .A2(_186_),
    .B1(rst),
    .Y(_033_)
  );
  sky130_fd_sc_hd__nor2_1 _310_ (
    .A(_100_),
    .B(_122_),
    .Y(_187_)
  );
  sky130_fd_sc_hd__xor2_1 _311_ (
    .A(_111_),
    .B(_112_),
    .X(_188_)
  );
  sky130_fd_sc_hd__a211oi_1 _312_ (
    .A1(_122_),
    .A2(_188_),
    .B1(_187_),
    .C1(_042_),
    .Y(_189_)
  );
  sky130_fd_sc_hd__nor3_1 _313_ (
    .A(busy),
    .B(x[2]),
    .C(start),
    .Y(_190_)
  );
  sky130_fd_sc_hd__nor2_1 _314_ (
    .A(rst),
    .B(_190_),
    .Y(_191_)
  );
  sky130_fd_sc_hd__o21ai_0 _315_ (
    .A1(xin[2]),
    .A2(_126_),
    .B1(_191_),
    .Y(_192_)
  );
  sky130_fd_sc_hd__nor2_1 _316_ (
    .A(_189_),
    .B(_192_),
    .Y(_032_)
  );
  sky130_fd_sc_hd__nor2_1 _317_ (
    .A(_096_),
    .B(_124_),
    .Y(_193_)
  );
  sky130_fd_sc_hd__or2_0 _318_ (
    .A(_097_),
    .B(_098_),
    .X(_194_)
  );
  sky130_fd_sc_hd__nand2_1 _319_ (
    .A(_046_),
    .B(y[3]),
    .Y(_059_)
  );
  sky130_fd_sc_hd__xnor2_1 _320_ (
    .A(_113_),
    .B(_194_),
    .Y(_195_)
  );
  sky130_fd_sc_hd__a21oi_1 _321_ (
    .A1(x[3]),
    .A2(_128_),
    .B1(_193_),
    .Y(_196_)
  );
  sky130_fd_sc_hd__a2bb2oi_1 _322_ (
    .A1_N(_183_),
    .A2_N(_195_),
    .B1(xin[3]),
    .B2(_125_),
    .Y(_197_)
  );
  sky130_fd_sc_hd__a21oi_1 _323_ (
    .A1(_196_),
    .A2(_197_),
    .B1(rst),
    .Y(_031_)
  );
  sky130_fd_sc_hd__or3_1 _324_ (
    .A(_042_),
    .B(_089_),
    .C(_122_),
    .X(_198_)
  );
  sky130_fd_sc_hd__o21ai_0 _325_ (
    .A1(_098_),
    .A2(_114_),
    .B1(_092_),
    .Y(_199_)
  );
  sky130_fd_sc_hd__nor2b_1 _326_ (
    .A(_115_),
    .B_N(_199_),
    .Y(_200_)
  );
  sky130_fd_sc_hd__a222oi_1 _327_ (
    .A1(xin[4]),
    .A2(_125_),
    .B1(_182_),
    .B2(_200_),
    .C1(_128_),
    .C2(x[4]),
    .Y(_201_)
  );
  sky130_fd_sc_hd__a21oi_1 _328_ (
    .A1(_198_),
    .A2(_201_),
    .B1(rst),
    .Y(_030_)
  );
  sky130_fd_sc_hd__nand2_1 _329_ (
    .A(_086_),
    .B(_087_),
    .Y(_202_)
  );
  sky130_fd_sc_hd__nand2b_1 _330_ (
    .A_N(y[2]),
    .B(x[2]),
    .Y(_060_)
  );
  sky130_fd_sc_hd__xor2_1 _331_ (
    .A(_116_),
    .B(_202_),
    .X(_203_)
  );
  sky130_fd_sc_hd__a22oi_1 _332_ (
    .A1(xin[5]),
    .A2(_125_),
    .B1(_128_),
    .B2(x[5]),
    .Y(_204_)
  );
  sky130_fd_sc_hd__o21ai_0 _333_ (
    .A1(_085_),
    .A2(_124_),
    .B1(_204_),
    .Y(_205_)
  );
  sky130_fd_sc_hd__a21oi_1 _334_ (
    .A1(_182_),
    .A2(_203_),
    .B1(_205_),
    .Y(_206_)
  );
  sky130_fd_sc_hd__nor2_1 _335_ (
    .A(rst),
    .B(_206_),
    .Y(_029_)
  );
  sky130_fd_sc_hd__xor2_1 _336_ (
    .A(_082_),
    .B(_118_),
    .X(_207_)
  );
  sky130_fd_sc_hd__nand2_1 _337_ (
    .A(_182_),
    .B(_207_),
    .Y(_208_)
  );
  sky130_fd_sc_hd__nor2_1 _338_ (
    .A(_079_),
    .B(_124_),
    .Y(_209_)
  );
  sky130_fd_sc_hd__a221oi_1 _339_ (
    .A1(xin[6]),
    .A2(_125_),
    .B1(_128_),
    .B2(x[6]),
    .C1(_209_),
    .Y(_210_)
  );
  sky130_fd_sc_hd__a21oi_1 _340_ (
    .A1(_208_),
    .A2(_210_),
    .B1(rst),
    .Y(_028_)
  );
  sky130_fd_sc_hd__nor2b_1 _341_ (
    .A(x[0]),
    .B_N(y[0]),
    .Y(_061_)
  );
  sky130_fd_sc_hd__nand2b_1 _342_ (
    .A_N(_122_),
    .B(_145_),
    .Y(_211_)
  );
  sky130_fd_sc_hd__a21oi_1 _343_ (
    .A1(_122_),
    .A2(_144_),
    .B1(_042_),
    .Y(_212_)
  );
  sky130_fd_sc_hd__a22oi_1 _344_ (
    .A1(_042_),
    .A2(q[0]),
    .B1(_211_),
    .B2(_212_),
    .Y(_213_)
  );
  sky130_fd_sc_hd__nor3_1 _345_ (
    .A(rst),
    .B(_125_),
    .C(_213_),
    .Y(_027_)
  );
  sky130_fd_sc_hd__o21ai_0 _346_ (
    .A1(busy),
    .A2(q[1]),
    .B1(_127_),
    .Y(_214_)
  );
  sky130_fd_sc_hd__a21oi_1 _347_ (
    .A1(busy),
    .A2(_164_),
    .B1(_214_),
    .Y(_026_)
  );
  sky130_fd_sc_hd__o21ai_0 _348_ (
    .A1(busy),
    .A2(q[2]),
    .B1(_127_),
    .Y(_215_)
  );
  sky130_fd_sc_hd__a21oi_1 _349_ (
    .A1(busy),
    .A2(_167_),
    .B1(_215_),
    .Y(_025_)
  );
  sky130_fd_sc_hd__nor2_1 _350_ (
    .A(busy),
    .B(q[3]),
    .Y(_216_)
  );
  sky130_fd_sc_hd__o21ai_0 _351_ (
    .A1(_042_),
    .A2(_169_),
    .B1(_127_),
    .Y(_217_)
  );
  sky130_fd_sc_hd__clkinv_1 _352_ (
    .A(q[2]),
    .Y(_044_)
  );
  sky130_fd_sc_hd__xnor2_1 _353_ (
    .A(x[1]),
    .B(y[1]),
    .Y(_062_)
  );
  sky130_fd_sc_hd__nor2_1 _354_ (
    .A(_216_),
    .B(_217_),
    .Y(_024_)
  );
  sky130_fd_sc_hd__o21ai_0 _355_ (
    .A1(busy),
    .A2(q[4]),
    .B1(_127_),
    .Y(_218_)
  );
  sky130_fd_sc_hd__a21oi_1 _356_ (
    .A1(busy),
    .A2(_173_),
    .B1(_218_),
    .Y(_023_)
  );
  sky130_fd_sc_hd__o21ai_0 _357_ (
    .A1(busy),
    .A2(q[5]),
    .B1(_127_),
    .Y(_219_)
  );
  sky130_fd_sc_hd__a21oi_1 _358_ (
    .A1(busy),
    .A2(_175_),
    .B1(_219_),
    .Y(_022_)
  );
  sky130_fd_sc_hd__o21ai_0 _359_ (
    .A1(busy),
    .A2(q[6]),
    .B1(_127_),
    .Y(_220_)
  );
  sky130_fd_sc_hd__a21oi_1 _360_ (
    .A1(busy),
    .A2(_177_),
    .B1(_220_),
    .Y(_021_)
  );
  sky130_fd_sc_hd__nand2_1 _361_ (
    .A(remainder[0]),
    .B(_129_),
    .Y(_221_)
  );
  sky130_fd_sc_hd__o21ai_0 _362_ (
    .A1(_106_),
    .A2(_133_),
    .B1(_221_),
    .Y(_020_)
  );
  sky130_fd_sc_hd__a22o_1 _363_ (
    .A1(remainder[1]),
    .A2(_129_),
    .B1(_132_),
    .B2(_103_),
    .X(_019_)
  );
  sky130_fd_sc_hd__maj3_1 _364_ (
    .A(_045_),
    .B(y[1]),
    .C(_061_),
    .X(_063_)
  );
  sky130_fd_sc_hd__nand2_1 _365_ (
    .A(remainder[2]),
    .B(_129_),
    .Y(_222_)
  );
  sky130_fd_sc_hd__o21ai_0 _366_ (
    .A1(_100_),
    .A2(_133_),
    .B1(_222_),
    .Y(_018_)
  );
  sky130_fd_sc_hd__a21oi_1 _367_ (
    .A1(remainder[3]),
    .A2(_124_),
    .B1(_193_),
    .Y(_223_)
  );
  sky130_fd_sc_hd__nor2_1 _368_ (
    .A(rst),
    .B(_223_),
    .Y(_017_)
  );
  sky130_fd_sc_hd__nand2_1 _369_ (
    .A(remainder[4]),
    .B(_124_),
    .Y(_224_)
  );
  sky130_fd_sc_hd__a21oi_1 _370_ (
    .A1(_198_),
    .A2(_224_),
    .B1(rst),
    .Y(_016_)
  );
  sky130_fd_sc_hd__nand2_1 _371_ (
    .A(remainder[5]),
    .B(_129_),
    .Y(_225_)
  );
  sky130_fd_sc_hd__o21ai_0 _372_ (
    .A1(_085_),
    .A2(_133_),
    .B1(_225_),
    .Y(_015_)
  );
  sky130_fd_sc_hd__a21oi_1 _373_ (
    .A1(remainder[6]),
    .A2(_124_),
    .B1(_209_),
    .Y(_226_)
  );
  sky130_fd_sc_hd__nor2_1 _374_ (
    .A(rst),
    .B(_226_),
    .Y(_014_)
  );
  sky130_fd_sc_hd__xor2_1 _375_ (
    .A(x[2]),
    .B(y[2]),
    .X(_064_)
  );
  sky130_fd_sc_hd__nand2_1 _376_ (
    .A(yin[0]),
    .B(_125_),
    .Y(_227_)
  );
  sky130_fd_sc_hd__nand2_1 _377_ (
    .A(y[0]),
    .B(_126_),
    .Y(_228_)
  );
  sky130_fd_sc_hd__a21oi_1 _378_ (
    .A1(_227_),
    .A2(_228_),
    .B1(rst),
    .Y(_013_)
  );
  sky130_fd_sc_hd__nor2_1 _379_ (
    .A(yin[1]),
    .B(_126_),
    .Y(_229_)
  );
  sky130_fd_sc_hd__a211oi_1 _380_ (
    .A1(_049_),
    .A2(_126_),
    .B1(_229_),
    .C1(rst),
    .Y(_012_)
  );
  sky130_fd_sc_hd__nand2_1 _381_ (
    .A(yin[2]),
    .B(_125_),
    .Y(_230_)
  );
  sky130_fd_sc_hd__nand2_1 _382_ (
    .A(y[2]),
    .B(_126_),
    .Y(_231_)
  );
  sky130_fd_sc_hd__a21oi_1 _383_ (
    .A1(_230_),
    .A2(_231_),
    .B1(rst),
    .Y(_011_)
  );
  sky130_fd_sc_hd__nand2_1 _384_ (
    .A(yin[3]),
    .B(_125_),
    .Y(_232_)
  );
  sky130_fd_sc_hd__nand2_1 _385_ (
    .A(y[3]),
    .B(_126_),
    .Y(_233_)
  );
  sky130_fd_sc_hd__o21ai_0 _386_ (
    .A1(_063_),
    .A2(_064_),
    .B1(_060_),
    .Y(_065_)
  );
  sky130_fd_sc_hd__a21oi_1 _387_ (
    .A1(_232_),
    .A2(_233_),
    .B1(rst),
    .Y(_010_)
  );
  sky130_fd_sc_hd__nand2_1 _388_ (
    .A(yin[4]),
    .B(_125_),
    .Y(_234_)
  );
  sky130_fd_sc_hd__nand2_1 _389_ (
    .A(y[4]),
    .B(_126_),
    .Y(_235_)
  );
  sky130_fd_sc_hd__a21oi_1 _390_ (
    .A1(_234_),
    .A2(_235_),
    .B1(rst),
    .Y(_009_)
  );
  sky130_fd_sc_hd__nand2_1 _391_ (
    .A(yin[5]),
    .B(_125_),
    .Y(_236_)
  );
  sky130_fd_sc_hd__nand2_1 _392_ (
    .A(y[5]),
    .B(_126_),
    .Y(_237_)
  );
  sky130_fd_sc_hd__a21oi_1 _393_ (
    .A1(_236_),
    .A2(_237_),
    .B1(rst),
    .Y(_008_)
  );
  sky130_fd_sc_hd__nand2_1 _394_ (
    .A(yin[6]),
    .B(_125_),
    .Y(_238_)
  );
  sky130_fd_sc_hd__nand2_1 _395_ (
    .A(y[6]),
    .B(_126_),
    .Y(_239_)
  );
  sky130_fd_sc_hd__a21oi_1 _396_ (
    .A1(_238_),
    .A2(_239_),
    .B1(rst),
    .Y(_007_)
  );
  sky130_fd_sc_hd__o221ai_1 _397_ (
    .A1(_046_),
    .A2(y[3]),
    .B1(_063_),
    .B2(_064_),
    .C1(_060_),
    .Y(_066_)
  );
  sky130_fd_sc_hd__nand2_1 _398_ (
    .A(_059_),
    .B(_066_),
    .Y(_067_)
  );
  sky130_fd_sc_hd__a31oi_1 _399_ (
    .A1(_058_),
    .A2(_059_),
    .A3(_066_),
    .B1(_057_),
    .Y(_068_)
  );
  sky130_fd_sc_hd__a311oi_1 _400_ (
    .A1(_058_),
    .A2(_059_),
    .A3(_066_),
    .B1(_057_),
    .C1(_055_),
    .Y(_069_)
  );
  sky130_fd_sc_hd__or2_0 _401_ (
    .A(_056_),
    .B(_069_),
    .X(_070_)
  );
  sky130_fd_sc_hd__o21a_1 _402_ (
    .A1(_054_),
    .A2(_070_),
    .B1(_052_),
    .X(_071_)
  );
  sky130_fd_sc_hd__clkinv_1 _403_ (
    .A(x[1]),
    .Y(_045_)
  );
  sky130_fd_sc_hd__or2_0 _404_ (
    .A(_051_),
    .B(_071_),
    .X(_072_)
  );
  sky130_fd_sc_hd__nand2b_1 _405_ (
    .A_N(x[7]),
    .B(y[7]),
    .Y(_073_)
  );
  sky130_fd_sc_hd__o311ai_0 _406_ (
    .A1(_054_),
    .A2(_056_),
    .A3(_069_),
    .B1(_052_),
    .C1(_051_),
    .Y(_074_)
  );
  sky130_fd_sc_hd__nand2_1 _407_ (
    .A(_073_),
    .B(_074_),
    .Y(_075_)
  );
  sky130_fd_sc_hd__and2_0 _408_ (
    .A(_073_),
    .B(_074_),
    .X(_076_)
  );
  sky130_fd_sc_hd__xnor2_1 _409_ (
    .A(_054_),
    .B(_070_),
    .Y(_077_)
  );
  sky130_fd_sc_hd__nor2_1 _410_ (
    .A(_075_),
    .B(_077_),
    .Y(_078_)
  );
  sky130_fd_sc_hd__a21oi_1 _411_ (
    .A1(x[6]),
    .A2(_075_),
    .B1(_078_),
    .Y(_079_)
  );
  sky130_fd_sc_hd__nor2_1 _412_ (
    .A(y[6]),
    .B(_079_),
    .Y(_080_)
  );
  sky130_fd_sc_hd__nand2_1 _413_ (
    .A(y[6]),
    .B(_079_),
    .Y(_081_)
  );
  sky130_fd_sc_hd__clkinv_1 _414_ (
    .A(x[3]),
    .Y(_046_)
  );
  sky130_fd_sc_hd__nand2b_1 _415_ (
    .A_N(_080_),
    .B(_081_),
    .Y(_082_)
  );
  sky130_fd_sc_hd__nor2_1 _416_ (
    .A(_055_),
    .B(_056_),
    .Y(_083_)
  );
  sky130_fd_sc_hd__xnor2_1 _417_ (
    .A(_068_),
    .B(_083_),
    .Y(_084_)
  );
  sky130_fd_sc_hd__mux2i_1 _418_ (
    .A0(x[5]),
    .A1(_084_),
    .S(_076_),
    .Y(_085_)
  );
  sky130_fd_sc_hd__or2_0 _419_ (
    .A(y[5]),
    .B(_085_),
    .X(_086_)
  );
  sky130_fd_sc_hd__nand2_1 _420_ (
    .A(y[5]),
    .B(_085_),
    .Y(_087_)
  );
  sky130_fd_sc_hd__xnor2_1 _421_ (
    .A(_058_),
    .B(_067_),
    .Y(_088_)
  );
  sky130_fd_sc_hd__mux2i_1 _422_ (
    .A0(x[4]),
    .A1(_088_),
    .S(_076_),
    .Y(_089_)
  );
  sky130_fd_sc_hd__nor2_1 _423_ (
    .A(y[4]),
    .B(_089_),
    .Y(_090_)
  );
  sky130_fd_sc_hd__clkinv_1 _424_ (
    .A(_090_),
    .Y(_091_)
  );
  sky130_fd_sc_hd__clkinv_1 _425_ (
    .A(q[4]),
    .Y(_047_)
  );
  sky130_fd_sc_hd__xnor2_1 _426_ (
    .A(y[4]),
    .B(_089_),
    .Y(_092_)
  );
  sky130_fd_sc_hd__xnor2_1 _427_ (
    .A(x[3]),
    .B(y[3]),
    .Y(_093_)
  );
  sky130_fd_sc_hd__xor2_1 _428_ (
    .A(_065_),
    .B(_093_),
    .X(_094_)
  );
  sky130_fd_sc_hd__a21oi_1 _429_ (
    .A1(_073_),
    .A2(_074_),
    .B1(_046_),
    .Y(_095_)
  );
  sky130_fd_sc_hd__a21oi_1 _430_ (
    .A1(_076_),
    .A2(_094_),
    .B1(_095_),
    .Y(_096_)
  );
  sky130_fd_sc_hd__nor2_1 _431_ (
    .A(y[3]),
    .B(_096_),
    .Y(_097_)
  );
  sky130_fd_sc_hd__and2_0 _432_ (
    .A(y[3]),
    .B(_096_),
    .X(_098_)
  );
  sky130_fd_sc_hd__xor2_1 _433_ (
    .A(_063_),
    .B(_064_),
    .X(_099_)
  );
  sky130_fd_sc_hd__mux2i_1 _434_ (
    .A0(x[2]),
    .A1(_099_),
    .S(_076_),
    .Y(_100_)
  );
  sky130_fd_sc_hd__nor2_1 _435_ (
    .A(y[2]),
    .B(_100_),
    .Y(_101_)
  );
  sky130_fd_sc_hd__clkinv_1 _436_ (
    .A(q[6]),
    .Y(_048_)
  );
  sky130_fd_sc_hd__xnor2_1 _437_ (
    .A(_061_),
    .B(_062_),
    .Y(_102_)
  );
  sky130_fd_sc_hd__mux2_1 _438_ (
    .A0(x[1]),
    .A1(_102_),
    .S(_076_),
    .X(_103_)
  );
  sky130_fd_sc_hd__and4_1 _439_ (
    .A(x[0]),
    .B(y[0]),
    .C(_073_),
    .D(_074_),
    .X(_104_)
  );
  sky130_fd_sc_hd__a31oi_1 _440_ (
    .A1(y[0]),
    .A2(_073_),
    .A3(_074_),
    .B1(x[0]),
    .Y(_105_)
  );
  sky130_fd_sc_hd__or2_0 _441_ (
    .A(_104_),
    .B(_105_),
    .X(_106_)
  );
  sky130_fd_sc_hd__and2_0 _442_ (
    .A(y[0]),
    .B(_106_),
    .X(_107_)
  );
  sky130_fd_sc_hd__o21ai_0 _443_ (
    .A1(_104_),
    .A2(_105_),
    .B1(y[0]),
    .Y(_108_)
  );
  sky130_fd_sc_hd__xnor2_1 _444_ (
    .A(_049_),
    .B(_103_),
    .Y(_109_)
  );
  sky130_fd_sc_hd__nor2_1 _445_ (
    .A(_107_),
    .B(_109_),
    .Y(_110_)
  );
  sky130_fd_sc_hd__maj3_1 _446_ (
    .A(_049_),
    .B(_103_),
    .C(_108_),
    .X(_111_)
  );
  sky130_fd_sc_hd__clkinv_1 _447_ (
    .A(y[1]),
    .Y(_049_)
  );
  sky130_fd_sc_hd__xor2_1 _448_ (
    .A(y[2]),
    .B(_100_),
    .X(_112_)
  );
  sky130_fd_sc_hd__a21oi_1 _449_ (
    .A1(_111_),
    .A2(_112_),
    .B1(_101_),
    .Y(_113_)
  );
  sky130_fd_sc_hd__a211oi_1 _450_ (
    .A1(_111_),
    .A2(_112_),
    .B1(_097_),
    .C1(_101_),
    .Y(_114_)
  );
  sky130_fd_sc_hd__nor3_1 _451_ (
    .A(_092_),
    .B(_098_),
    .C(_114_),
    .Y(_115_)
  );
  sky130_fd_sc_hd__nor2_1 _452_ (
    .A(_090_),
    .B(_115_),
    .Y(_116_)
  );
  sky130_fd_sc_hd__o311ai_0 _453_ (
    .A1(_092_),
    .A2(_098_),
    .A3(_114_),
    .B1(_091_),
    .C1(_086_),
    .Y(_117_)
  );
  sky130_fd_sc_hd__nand2_1 _454_ (
    .A(_087_),
    .B(_117_),
    .Y(_118_)
  );
  sky130_fd_sc_hd__a31oi_1 _455_ (
    .A1(_081_),
    .A2(_087_),
    .A3(_117_),
    .B1(_080_),
    .Y(_119_)
  );
  sky130_fd_sc_hd__nand2_1 _456_ (
    .A(x[7]),
    .B(_075_),
    .Y(_120_)
  );
  sky130_fd_sc_hd__a21oi_1 _457_ (
    .A1(x[7]),
    .A2(_075_),
    .B1(_050_),
    .Y(_121_)
  );
  sky130_fd_sc_hd__clkinv_1 _458_ (
    .A(y[7]),
    .Y(_050_)
  );
  sky130_fd_sc_hd__o21ai_0 _459_ (
    .A1(_119_),
    .A2(_121_),
    .B1(_072_),
    .Y(_122_)
  );
  sky130_fd_sc_hd__nor2_1 _460_ (
    .A(_042_),
    .B(_122_),
    .Y(_123_)
  );
  sky130_fd_sc_hd__or2_0 _461_ (
    .A(_042_),
    .B(_122_),
    .X(_124_)
  );
  sky130_fd_sc_hd__nor2b_1 _462_ (
    .A(busy),
    .B_N(start),
    .Y(_125_)
  );
  sky130_fd_sc_hd__nand2_1 _463_ (
    .A(_042_),
    .B(start),
    .Y(_126_)
  );
  sky130_fd_sc_hd__nor2_1 _464_ (
    .A(rst),
    .B(_125_),
    .Y(_127_)
  );
  sky130_fd_sc_hd__o21a_1 _465_ (
    .A1(done),
    .A2(_123_),
    .B1(_127_),
    .X(_006_)
  );
  sky130_fd_sc_hd__nor2_1 _466_ (
    .A(busy),
    .B(start),
    .Y(_128_)
  );
  sky130_fd_sc_hd__nor2_1 _467_ (
    .A(rst),
    .B(_123_),
    .Y(_129_)
  );
  sky130_fd_sc_hd__nor3_1 _468_ (
    .A(rst),
    .B(_123_),
    .C(_128_),
    .Y(_005_)
  );
  sky130_fd_sc_hd__nand2_1 _469_ (
    .A(x[7]),
    .B(_050_),
    .Y(_051_)
  );
  sky130_fd_sc_hd__o21ai_0 _470_ (
    .A1(yin[7]),
    .A2(_126_),
    .B1(_043_),
    .Y(_130_)
  );
  sky130_fd_sc_hd__a21oi_1 _471_ (
    .A1(_050_),
    .A2(_126_),
    .B1(_130_),
    .Y(_004_)
  );
  sky130_fd_sc_hd__o21ai_0 _472_ (
    .A1(_072_),
    .A2(_119_),
    .B1(_120_),
    .Y(_131_)
  );
  sky130_fd_sc_hd__nor2_1 _473_ (
    .A(rst),
    .B(_124_),
    .Y(_132_)
  );
  sky130_fd_sc_hd__nand2_1 _474_ (
    .A(_043_),
    .B(_123_),
    .Y(_133_)
  );
  sky130_fd_sc_hd__a22o_1 _475_ (
    .A1(remainder[7]),
    .A2(_129_),
    .B1(_131_),
    .B2(_132_),
    .X(_003_)
  );
  sky130_fd_sc_hd__nand3_1 _476_ (
    .A(q[1]),
    .B(q[0]),
    .C(_076_),
    .Y(_134_)
  );
  sky130_fd_sc_hd__nor2_1 _477_ (
    .A(_044_),
    .B(_134_),
    .Y(_135_)
  );
  sky130_fd_sc_hd__and2_0 _478_ (
    .A(q[3]),
    .B(_135_),
    .X(_136_)
  );
  sky130_fd_sc_hd__and3_1 _479_ (
    .A(q[5]),
    .B(q[4]),
    .C(_136_),
    .X(_137_)
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_0 (
    .CLK(clk),
    .D(_041_),
    .Q(quotient[0])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_1 (
    .CLK(clk),
    .D(_040_),
    .Q(quotient[1])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_2 (
    .CLK(clk),
    .D(_039_),
    .Q(quotient[2])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_3 (
    .CLK(clk),
    .D(_038_),
    .Q(quotient[3])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_4 (
    .CLK(clk),
    .D(_037_),
    .Q(quotient[4])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_5 (
    .CLK(clk),
    .D(_036_),
    .Q(quotient[5])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_6 (
    .CLK(clk),
    .D(_035_),
    .Q(quotient[6])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_7 (
    .CLK(clk),
    .D(_000_),
    .Q(quotient[7])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_0 (
    .CLK(clk),
    .D(_034_),
    .Q(x[0])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_1 (
    .CLK(clk),
    .D(_033_),
    .Q(x[1])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_2 (
    .CLK(clk),
    .D(_032_),
    .Q(x[2])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_3 (
    .CLK(clk),
    .D(_031_),
    .Q(x[3])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_4 (
    .CLK(clk),
    .D(_030_),
    .Q(x[4])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_5 (
    .CLK(clk),
    .D(_029_),
    .Q(x[5])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_6 (
    .CLK(clk),
    .D(_028_),
    .Q(x[6])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_7 (
    .CLK(clk),
    .D(_001_),
    .Q(x[7])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_0 (
    .CLK(clk),
    .D(_027_),
    .Q(q[0])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_1 (
    .CLK(clk),
    .D(_026_),
    .Q(q[1])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_2 (
    .CLK(clk),
    .D(_025_),
    .Q(q[2])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_3 (
    .CLK(clk),
    .D(_024_),
    .Q(q[3])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_4 (
    .CLK(clk),
    .D(_023_),
    .Q(q[4])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_5 (
    .CLK(clk),
    .D(_022_),
    .Q(q[5])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_6 (
    .CLK(clk),
    .D(_021_),
    .Q(q[6])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_7 (
    .CLK(clk),
    .D(_002_),
    .Q(q[7])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_0 (
    .CLK(clk),
    .D(_020_),
    .Q(remainder[0])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_1 (
    .CLK(clk),
    .D(_019_),
    .Q(remainder[1])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_2 (
    .CLK(clk),
    .D(_018_),
    .Q(remainder[2])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_3 (
    .CLK(clk),
    .D(_017_),
    .Q(remainder[3])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_4 (
    .CLK(clk),
    .D(_016_),
    .Q(remainder[4])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_5 (
    .CLK(clk),
    .D(_015_),
    .Q(remainder[5])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_6 (
    .CLK(clk),
    .D(_014_),
    .Q(remainder[6])
  );
  sky130_fd_sc_hd__dfxtp_1 remainder_reg_7 (
    .CLK(clk),
    .D(_003_),
    .Q(remainder[7])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_0 (
    .CLK(clk),
    .D(_013_),
    .Q(y[0])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_1 (
    .CLK(clk),
    .D(_012_),
    .Q(y[1])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_2 (
    .CLK(clk),
    .D(_011_),
    .Q(y[2])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_3 (
    .CLK(clk),
    .D(_010_),
    .Q(y[3])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_4 (
    .CLK(clk),
    .D(_009_),
    .Q(y[4])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_5 (
    .CLK(clk),
    .D(_008_),
    .Q(y[5])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_6 (
    .CLK(clk),
    .D(_007_),
    .Q(y[6])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_7 (
    .CLK(clk),
    .D(_004_),
    .Q(y[7])
  );
  sky130_fd_sc_hd__dfxtp_1 busy_reg (
    .CLK(clk),
    .D(_005_),
    .Q(busy)
  );
  sky130_fd_sc_hd__dfxtp_1 done_reg (
    .CLK(clk),
    .D(_006_),
    .Q(done)
  );
  assign i[31:2] = { i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0], i[0] };
endmodule
