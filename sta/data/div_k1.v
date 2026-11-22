// Divider with 1 subtraction(s) per clock, synthesised by Yosys to Sky130 HD cells.

module div_k1(clk, rst, start, xin, yin, quotient, remainder, done);
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
  wire busy;
  wire signed [31:0] i;
  wire [7:0] q;
  wire [7:0] x;
  wire [7:0] y;
  sky130_fd_sc_hd__clkinv_1 _148_ (
    .A(busy),
    .Y(_042_)
  );
  sky130_fd_sc_hd__clkinv_1 _149_ (
    .A(x[2]),
    .Y(_043_)
  );
  sky130_fd_sc_hd__nor2b_1 _150_ (
    .A(x[7]),
    .B_N(y[7]),
    .Y(_052_)
  );
  sky130_fd_sc_hd__a21oi_1 _151_ (
    .A1(_115_),
    .A2(_116_),
    .B1(rst),
    .Y(_016_)
  );
  sky130_fd_sc_hd__a22o_1 _152_ (
    .A1(remainder[5]),
    .A2(_074_),
    .B1(_087_),
    .B2(x[5]),
    .X(_015_)
  );
  sky130_fd_sc_hd__a22o_1 _153_ (
    .A1(remainder[6]),
    .A2(_074_),
    .B1(_087_),
    .B2(x[6]),
    .X(_014_)
  );
  sky130_fd_sc_hd__nor3b_1 _154_ (
    .A(_052_),
    .B(_067_),
    .C_N(y[0]),
    .Y(_117_)
  );
  sky130_fd_sc_hd__xor2_1 _155_ (
    .A(x[0]),
    .B(_117_),
    .X(_118_)
  );
  sky130_fd_sc_hd__a222oi_1 _156_ (
    .A1(xin[0]),
    .A2(_050_),
    .B1(_070_),
    .B2(x[0]),
    .C1(busy),
    .C2(_118_),
    .Y(_119_)
  );
  sky130_fd_sc_hd__nor2_1 _157_ (
    .A(rst),
    .B(_119_),
    .Y(_013_)
  );
  sky130_fd_sc_hd__nand2_1 _158_ (
    .A(xin[1]),
    .B(_050_),
    .Y(_120_)
  );
  sky130_fd_sc_hd__xnor2_1 _159_ (
    .A(_055_),
    .B(_056_),
    .Y(_121_)
  );
  sky130_fd_sc_hd__a22oi_1 _160_ (
    .A1(x[1]),
    .A2(_073_),
    .B1(_121_),
    .B2(_069_),
    .Y(_122_)
  );
  sky130_fd_sc_hd__nand2b_1 _161_ (
    .A_N(y[6]),
    .B(x[6]),
    .Y(_053_)
  );
  sky130_fd_sc_hd__a21oi_1 _162_ (
    .A1(_120_),
    .A2(_122_),
    .B1(rst),
    .Y(_012_)
  );
  sky130_fd_sc_hd__nand2_1 _163_ (
    .A(xin[2]),
    .B(_050_),
    .Y(_123_)
  );
  sky130_fd_sc_hd__xnor2_1 _164_ (
    .A(_057_),
    .B(_058_),
    .Y(_124_)
  );
  sky130_fd_sc_hd__a22oi_1 _165_ (
    .A1(x[2]),
    .A2(_073_),
    .B1(_124_),
    .B2(_069_),
    .Y(_125_)
  );
  sky130_fd_sc_hd__a21oi_1 _166_ (
    .A1(_123_),
    .A2(_125_),
    .B1(rst),
    .Y(_011_)
  );
  sky130_fd_sc_hd__nand2_1 _167_ (
    .A(xin[3]),
    .B(_050_),
    .Y(_126_)
  );
  sky130_fd_sc_hd__xnor2_1 _168_ (
    .A(_059_),
    .B(_060_),
    .Y(_127_)
  );
  sky130_fd_sc_hd__a22oi_1 _169_ (
    .A1(x[3]),
    .A2(_073_),
    .B1(_127_),
    .B2(_069_),
    .Y(_128_)
  );
  sky130_fd_sc_hd__a21oi_1 _170_ (
    .A1(_126_),
    .A2(_128_),
    .B1(rst),
    .Y(_010_)
  );
  sky130_fd_sc_hd__xnor2_1 _171_ (
    .A(_061_),
    .B(_062_),
    .Y(_129_)
  );
  sky130_fd_sc_hd__xor2_1 _172_ (
    .A(x[6]),
    .B(y[6]),
    .X(_054_)
  );
  sky130_fd_sc_hd__a222oi_1 _173_ (
    .A1(xin[4]),
    .A2(_050_),
    .B1(_069_),
    .B2(_129_),
    .C1(_070_),
    .C2(x[4]),
    .Y(_130_)
  );
  sky130_fd_sc_hd__a21oi_1 _174_ (
    .A1(_115_),
    .A2(_130_),
    .B1(rst),
    .Y(_009_)
  );
  sky130_fd_sc_hd__nand2_1 _175_ (
    .A(xin[5]),
    .B(_050_),
    .Y(_131_)
  );
  sky130_fd_sc_hd__xnor2_1 _176_ (
    .A(_063_),
    .B(_064_),
    .Y(_132_)
  );
  sky130_fd_sc_hd__a22oi_1 _177_ (
    .A1(x[5]),
    .A2(_073_),
    .B1(_132_),
    .B2(_069_),
    .Y(_133_)
  );
  sky130_fd_sc_hd__a21oi_1 _178_ (
    .A1(_131_),
    .A2(_133_),
    .B1(rst),
    .Y(_008_)
  );
  sky130_fd_sc_hd__nand2_1 _179_ (
    .A(xin[6]),
    .B(_050_),
    .Y(_134_)
  );
  sky130_fd_sc_hd__xor2_1 _180_ (
    .A(_054_),
    .B(_065_),
    .X(_135_)
  );
  sky130_fd_sc_hd__a22oi_1 _181_ (
    .A1(x[6]),
    .A2(_073_),
    .B1(_135_),
    .B2(_069_),
    .Y(_136_)
  );
  sky130_fd_sc_hd__a21oi_1 _182_ (
    .A1(_134_),
    .A2(_136_),
    .B1(rst),
    .Y(_007_)
  );
  sky130_fd_sc_hd__nor2b_1 _183_ (
    .A(x[0]),
    .B_N(y[0]),
    .Y(_055_)
  );
  sky130_fd_sc_hd__nor2_1 _184_ (
    .A(q[0]),
    .B(_069_),
    .Y(_137_)
  );
  sky130_fd_sc_hd__nand2_1 _185_ (
    .A(q[0]),
    .B(_069_),
    .Y(_138_)
  );
  sky130_fd_sc_hd__nand2_1 _186_ (
    .A(_080_),
    .B(_138_),
    .Y(_139_)
  );
  sky130_fd_sc_hd__nor2_1 _187_ (
    .A(_137_),
    .B(_139_),
    .Y(_006_)
  );
  sky130_fd_sc_hd__nand3_1 _188_ (
    .A(q[1]),
    .B(q[0]),
    .C(_069_),
    .Y(_140_)
  );
  sky130_fd_sc_hd__nand2_1 _189_ (
    .A(_080_),
    .B(_140_),
    .Y(_141_)
  );
  sky130_fd_sc_hd__a21oi_1 _190_ (
    .A1(_046_),
    .A2(_138_),
    .B1(_141_),
    .Y(_005_)
  );
  sky130_fd_sc_hd__nor3_1 _191_ (
    .A(_042_),
    .B(_068_),
    .C(_075_),
    .Y(_142_)
  );
  sky130_fd_sc_hd__xor2_1 _192_ (
    .A(q[2]),
    .B(_140_),
    .X(_143_)
  );
  sky130_fd_sc_hd__nor2_1 _193_ (
    .A(_081_),
    .B(_143_),
    .Y(_004_)
  );
  sky130_fd_sc_hd__xnor2_1 _194_ (
    .A(x[1]),
    .B(y[1]),
    .Y(_056_)
  );
  sky130_fd_sc_hd__o21ai_0 _195_ (
    .A1(q[3]),
    .A2(_142_),
    .B1(_080_),
    .Y(_144_)
  );
  sky130_fd_sc_hd__a21oi_1 _196_ (
    .A1(q[3]),
    .A2(_142_),
    .B1(_144_),
    .Y(_003_)
  );
  sky130_fd_sc_hd__o21ai_0 _197_ (
    .A1(busy),
    .A2(q[4]),
    .B1(_080_),
    .Y(_145_)
  );
  sky130_fd_sc_hd__a21oi_1 _198_ (
    .A1(busy),
    .A2(_108_),
    .B1(_145_),
    .Y(_002_)
  );
  sky130_fd_sc_hd__o21ai_0 _199_ (
    .A1(busy),
    .A2(q[5]),
    .B1(_080_),
    .Y(_146_)
  );
  sky130_fd_sc_hd__a21oi_1 _200_ (
    .A1(busy),
    .A2(_110_),
    .B1(_146_),
    .Y(_001_)
  );
  sky130_fd_sc_hd__o21ai_0 _201_ (
    .A1(busy),
    .A2(q[6]),
    .B1(_080_),
    .Y(_147_)
  );
  sky130_fd_sc_hd__a21oi_1 _202_ (
    .A1(busy),
    .A2(_113_),
    .B1(_147_),
    .Y(_000_)
  );
  sky130_fd_sc_hd__maj3_1 _203_ (
    .A(_045_),
    .B(y[1]),
    .C(_055_),
    .X(_057_)
  );
  sky130_fd_sc_hd__xnor2_1 _204_ (
    .A(x[2]),
    .B(y[2]),
    .Y(_058_)
  );
  sky130_fd_sc_hd__maj3_1 _205_ (
    .A(_043_),
    .B(y[2]),
    .C(_057_),
    .X(_059_)
  );
  sky130_fd_sc_hd__xnor2_1 _206_ (
    .A(y[3]),
    .B(x[3]),
    .Y(_060_)
  );
  sky130_fd_sc_hd__maj3_1 _207_ (
    .A(y[3]),
    .B(_049_),
    .C(_059_),
    .X(_061_)
  );
  sky130_fd_sc_hd__clkinv_1 _208_ (
    .A(x[7]),
    .Y(_044_)
  );
  sky130_fd_sc_hd__xnor2_1 _209_ (
    .A(y[4]),
    .B(x[4]),
    .Y(_062_)
  );
  sky130_fd_sc_hd__maj3_1 _210_ (
    .A(y[4]),
    .B(_048_),
    .C(_061_),
    .X(_063_)
  );
  sky130_fd_sc_hd__xnor2_1 _211_ (
    .A(y[5]),
    .B(x[5]),
    .Y(_064_)
  );
  sky130_fd_sc_hd__maj3_1 _212_ (
    .A(y[5]),
    .B(_047_),
    .C(_063_),
    .X(_065_)
  );
  sky130_fd_sc_hd__o21ai_0 _213_ (
    .A1(_054_),
    .A2(_065_),
    .B1(_053_),
    .Y(_066_)
  );
  sky130_fd_sc_hd__o221a_1 _214_ (
    .A1(_044_),
    .A2(y[7]),
    .B1(_054_),
    .B2(_065_),
    .C1(_053_),
    .X(_067_)
  );
  sky130_fd_sc_hd__or2_0 _215_ (
    .A(_052_),
    .B(_067_),
    .X(_068_)
  );
  sky130_fd_sc_hd__nor3_1 _216_ (
    .A(_042_),
    .B(_052_),
    .C(_067_),
    .Y(_069_)
  );
  sky130_fd_sc_hd__nor2_1 _217_ (
    .A(busy),
    .B(start),
    .Y(_070_)
  );
  sky130_fd_sc_hd__and2_0 _218_ (
    .A(busy),
    .B(_068_),
    .X(_071_)
  );
  sky130_fd_sc_hd__clkinv_1 _219_ (
    .A(x[1]),
    .Y(_045_)
  );
  sky130_fd_sc_hd__nand2_1 _220_ (
    .A(busy),
    .B(_068_),
    .Y(_072_)
  );
  sky130_fd_sc_hd__nor2_1 _221_ (
    .A(_050_),
    .B(_069_),
    .Y(_073_)
  );
  sky130_fd_sc_hd__nor2_1 _222_ (
    .A(rst),
    .B(_071_),
    .Y(_074_)
  );
  sky130_fd_sc_hd__nor2_1 _223_ (
    .A(rst),
    .B(_073_),
    .Y(_041_)
  );
  sky130_fd_sc_hd__nand3_1 _224_ (
    .A(q[1]),
    .B(q[2]),
    .C(q[0]),
    .Y(_075_)
  );
  sky130_fd_sc_hd__nor4b_1 _225_ (
    .A(_052_),
    .B(_067_),
    .C(_075_),
    .D_N(q[3]),
    .Y(_076_)
  );
  sky130_fd_sc_hd__nand2_1 _226_ (
    .A(q[4]),
    .B(_076_),
    .Y(_077_)
  );
  sky130_fd_sc_hd__nand4_1 _227_ (
    .A(q[5]),
    .B(q[4]),
    .C(q[6]),
    .D(_076_),
    .Y(_078_)
  );
  sky130_fd_sc_hd__xor2_1 _228_ (
    .A(q[7]),
    .B(_078_),
    .X(_079_)
  );
  sky130_fd_sc_hd__nor2_1 _229_ (
    .A(rst),
    .B(_050_),
    .Y(_080_)
  );
  sky130_fd_sc_hd__clkinv_1 _230_ (
    .A(q[1]),
    .Y(_046_)
  );
  sky130_fd_sc_hd__or2_0 _231_ (
    .A(rst),
    .B(_050_),
    .X(_081_)
  );
  sky130_fd_sc_hd__o21ai_0 _232_ (
    .A1(busy),
    .A2(q[7]),
    .B1(_080_),
    .Y(_082_)
  );
  sky130_fd_sc_hd__a21oi_1 _233_ (
    .A1(busy),
    .A2(_079_),
    .B1(_082_),
    .Y(_040_)
  );
  sky130_fd_sc_hd__nor2b_1 _234_ (
    .A(y[7]),
    .B_N(_066_),
    .Y(_083_)
  );
  sky130_fd_sc_hd__o211ai_1 _235_ (
    .A1(_067_),
    .A2(_083_),
    .B1(busy),
    .C1(x[7]),
    .Y(_084_)
  );
  sky130_fd_sc_hd__a22oi_1 _236_ (
    .A1(xin[7]),
    .A2(_050_),
    .B1(_070_),
    .B2(x[7]),
    .Y(_085_)
  );
  sky130_fd_sc_hd__a21oi_1 _237_ (
    .A1(_084_),
    .A2(_085_),
    .B1(rst),
    .Y(_039_)
  );
  sky130_fd_sc_hd__nor2_1 _238_ (
    .A(done),
    .B(_071_),
    .Y(_086_)
  );
  sky130_fd_sc_hd__nor2_1 _239_ (
    .A(_081_),
    .B(_086_),
    .Y(_038_)
  );
  sky130_fd_sc_hd__nor2_1 _240_ (
    .A(rst),
    .B(_072_),
    .Y(_087_)
  );
  sky130_fd_sc_hd__clkinv_1 _241_ (
    .A(x[5]),
    .Y(_047_)
  );
  sky130_fd_sc_hd__a32oi_1 _242_ (
    .A1(busy),
    .A2(x[7]),
    .A3(_067_),
    .B1(_072_),
    .B2(remainder[7]),
    .Y(_088_)
  );
  sky130_fd_sc_hd__nor2_1 _243_ (
    .A(rst),
    .B(_088_),
    .Y(_037_)
  );
  sky130_fd_sc_hd__nor2_1 _244_ (
    .A(quotient[7]),
    .B(_071_),
    .Y(_089_)
  );
  sky130_fd_sc_hd__a211oi_1 _245_ (
    .A1(_071_),
    .A2(_079_),
    .B1(_089_),
    .C1(rst),
    .Y(_036_)
  );
  sky130_fd_sc_hd__nand2_1 _246_ (
    .A(yin[7]),
    .B(_050_),
    .Y(_090_)
  );
  sky130_fd_sc_hd__nand2_1 _247_ (
    .A(y[7]),
    .B(_051_),
    .Y(_091_)
  );
  sky130_fd_sc_hd__a21oi_1 _248_ (
    .A1(_090_),
    .A2(_091_),
    .B1(rst),
    .Y(_035_)
  );
  sky130_fd_sc_hd__nand2_1 _249_ (
    .A(yin[0]),
    .B(_050_),
    .Y(_092_)
  );
  sky130_fd_sc_hd__nand2_1 _250_ (
    .A(y[0]),
    .B(_051_),
    .Y(_093_)
  );
  sky130_fd_sc_hd__a21oi_1 _251_ (
    .A1(_092_),
    .A2(_093_),
    .B1(rst),
    .Y(_034_)
  );
  sky130_fd_sc_hd__clkinv_1 _252_ (
    .A(x[4]),
    .Y(_048_)
  );
  sky130_fd_sc_hd__nand2_1 _253_ (
    .A(yin[1]),
    .B(_050_),
    .Y(_094_)
  );
  sky130_fd_sc_hd__nand2_1 _254_ (
    .A(y[1]),
    .B(_051_),
    .Y(_095_)
  );
  sky130_fd_sc_hd__a21oi_1 _255_ (
    .A1(_094_),
    .A2(_095_),
    .B1(rst),
    .Y(_033_)
  );
  sky130_fd_sc_hd__nand2_1 _256_ (
    .A(yin[2]),
    .B(_050_),
    .Y(_096_)
  );
  sky130_fd_sc_hd__nand2_1 _257_ (
    .A(y[2]),
    .B(_051_),
    .Y(_097_)
  );
  sky130_fd_sc_hd__a21oi_1 _258_ (
    .A1(_096_),
    .A2(_097_),
    .B1(rst),
    .Y(_032_)
  );
  sky130_fd_sc_hd__nand2_1 _259_ (
    .A(yin[3]),
    .B(_050_),
    .Y(_098_)
  );
  sky130_fd_sc_hd__nand2_1 _260_ (
    .A(y[3]),
    .B(_051_),
    .Y(_099_)
  );
  sky130_fd_sc_hd__a21oi_1 _261_ (
    .A1(_098_),
    .A2(_099_),
    .B1(rst),
    .Y(_031_)
  );
  sky130_fd_sc_hd__nand2_1 _262_ (
    .A(yin[4]),
    .B(_050_),
    .Y(_100_)
  );
  sky130_fd_sc_hd__clkinv_1 _263_ (
    .A(x[3]),
    .Y(_049_)
  );
  sky130_fd_sc_hd__nand2_1 _264_ (
    .A(y[4]),
    .B(_051_),
    .Y(_101_)
  );
  sky130_fd_sc_hd__a21oi_1 _265_ (
    .A1(_100_),
    .A2(_101_),
    .B1(rst),
    .Y(_030_)
  );
  sky130_fd_sc_hd__nand2_1 _266_ (
    .A(yin[5]),
    .B(_050_),
    .Y(_102_)
  );
  sky130_fd_sc_hd__nand2_1 _267_ (
    .A(y[5]),
    .B(_051_),
    .Y(_103_)
  );
  sky130_fd_sc_hd__a21oi_1 _268_ (
    .A1(_102_),
    .A2(_103_),
    .B1(rst),
    .Y(_029_)
  );
  sky130_fd_sc_hd__nand2_1 _269_ (
    .A(yin[6]),
    .B(_050_),
    .Y(_104_)
  );
  sky130_fd_sc_hd__nand2_1 _270_ (
    .A(y[6]),
    .B(_051_),
    .Y(_105_)
  );
  sky130_fd_sc_hd__a21oi_1 _271_ (
    .A1(_104_),
    .A2(_105_),
    .B1(rst),
    .Y(_028_)
  );
  sky130_fd_sc_hd__a22o_1 _272_ (
    .A1(quotient[0]),
    .A2(_074_),
    .B1(_087_),
    .B2(q[0]),
    .X(_027_)
  );
  sky130_fd_sc_hd__a22o_1 _273_ (
    .A1(quotient[1]),
    .A2(_074_),
    .B1(_087_),
    .B2(q[1]),
    .X(_026_)
  );
  sky130_fd_sc_hd__nor2b_1 _274_ (
    .A(busy),
    .B_N(start),
    .Y(_050_)
  );
  sky130_fd_sc_hd__a22o_1 _275_ (
    .A1(quotient[2]),
    .A2(_074_),
    .B1(_087_),
    .B2(q[2]),
    .X(_025_)
  );
  sky130_fd_sc_hd__and3_1 _276_ (
    .A(busy),
    .B(q[3]),
    .C(_068_),
    .X(_106_)
  );
  sky130_fd_sc_hd__a21oi_1 _277_ (
    .A1(quotient[3]),
    .A2(_072_),
    .B1(_106_),
    .Y(_107_)
  );
  sky130_fd_sc_hd__nor2_1 _278_ (
    .A(rst),
    .B(_107_),
    .Y(_024_)
  );
  sky130_fd_sc_hd__xnor2_1 _279_ (
    .A(q[4]),
    .B(_076_),
    .Y(_108_)
  );
  sky130_fd_sc_hd__nor2_1 _280_ (
    .A(quotient[4]),
    .B(_071_),
    .Y(_109_)
  );
  sky130_fd_sc_hd__a211oi_1 _281_ (
    .A1(_071_),
    .A2(_108_),
    .B1(_109_),
    .C1(rst),
    .Y(_023_)
  );
  sky130_fd_sc_hd__xor2_1 _282_ (
    .A(q[5]),
    .B(_077_),
    .X(_110_)
  );
  sky130_fd_sc_hd__nor2_1 _283_ (
    .A(quotient[5]),
    .B(_071_),
    .Y(_111_)
  );
  sky130_fd_sc_hd__a211oi_1 _284_ (
    .A1(_071_),
    .A2(_110_),
    .B1(_111_),
    .C1(rst),
    .Y(_022_)
  );
  sky130_fd_sc_hd__nand2_1 _285_ (
    .A(_042_),
    .B(start),
    .Y(_051_)
  );
  sky130_fd_sc_hd__a31o_1 _286_ (
    .A1(q[5]),
    .A2(q[4]),
    .A3(_076_),
    .B1(q[6]),
    .X(_112_)
  );
  sky130_fd_sc_hd__nand2_1 _287_ (
    .A(_078_),
    .B(_112_),
    .Y(_113_)
  );
  sky130_fd_sc_hd__nor2_1 _288_ (
    .A(quotient[6]),
    .B(_071_),
    .Y(_114_)
  );
  sky130_fd_sc_hd__a211oi_1 _289_ (
    .A1(_071_),
    .A2(_113_),
    .B1(_114_),
    .C1(rst),
    .Y(_021_)
  );
  sky130_fd_sc_hd__a22o_1 _290_ (
    .A1(remainder[0]),
    .A2(_074_),
    .B1(_087_),
    .B2(x[0]),
    .X(_020_)
  );
  sky130_fd_sc_hd__a22o_1 _291_ (
    .A1(remainder[1]),
    .A2(_074_),
    .B1(_087_),
    .B2(x[1]),
    .X(_019_)
  );
  sky130_fd_sc_hd__a22o_1 _292_ (
    .A1(remainder[2]),
    .A2(_074_),
    .B1(_087_),
    .B2(x[2]),
    .X(_018_)
  );
  sky130_fd_sc_hd__a22o_1 _293_ (
    .A1(remainder[3]),
    .A2(_074_),
    .B1(_087_),
    .B2(x[3]),
    .X(_017_)
  );
  sky130_fd_sc_hd__nand2_1 _294_ (
    .A(x[4]),
    .B(_071_),
    .Y(_115_)
  );
  sky130_fd_sc_hd__nand2_1 _295_ (
    .A(remainder[4]),
    .B(_072_),
    .Y(_116_)
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_0 (
    .CLK(clk),
    .D(_034_),
    .Q(y[0])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_1 (
    .CLK(clk),
    .D(_033_),
    .Q(y[1])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_2 (
    .CLK(clk),
    .D(_032_),
    .Q(y[2])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_3 (
    .CLK(clk),
    .D(_031_),
    .Q(y[3])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_4 (
    .CLK(clk),
    .D(_030_),
    .Q(y[4])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_5 (
    .CLK(clk),
    .D(_029_),
    .Q(y[5])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_6 (
    .CLK(clk),
    .D(_028_),
    .Q(y[6])
  );
  sky130_fd_sc_hd__dfxtp_1 y_reg_7 (
    .CLK(clk),
    .D(_035_),
    .Q(y[7])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_0 (
    .CLK(clk),
    .D(_027_),
    .Q(quotient[0])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_1 (
    .CLK(clk),
    .D(_026_),
    .Q(quotient[1])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_2 (
    .CLK(clk),
    .D(_025_),
    .Q(quotient[2])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_3 (
    .CLK(clk),
    .D(_024_),
    .Q(quotient[3])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_4 (
    .CLK(clk),
    .D(_023_),
    .Q(quotient[4])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_5 (
    .CLK(clk),
    .D(_022_),
    .Q(quotient[5])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_6 (
    .CLK(clk),
    .D(_021_),
    .Q(quotient[6])
  );
  sky130_fd_sc_hd__dfxtp_1 quotient_reg_7 (
    .CLK(clk),
    .D(_036_),
    .Q(quotient[7])
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
    .D(_037_),
    .Q(remainder[7])
  );
  sky130_fd_sc_hd__dfxtp_1 done_reg (
    .CLK(clk),
    .D(_038_),
    .Q(done)
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_0 (
    .CLK(clk),
    .D(_013_),
    .Q(x[0])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_1 (
    .CLK(clk),
    .D(_012_),
    .Q(x[1])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_2 (
    .CLK(clk),
    .D(_011_),
    .Q(x[2])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_3 (
    .CLK(clk),
    .D(_010_),
    .Q(x[3])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_4 (
    .CLK(clk),
    .D(_009_),
    .Q(x[4])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_5 (
    .CLK(clk),
    .D(_008_),
    .Q(x[5])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_6 (
    .CLK(clk),
    .D(_007_),
    .Q(x[6])
  );
  sky130_fd_sc_hd__dfxtp_1 x_reg_7 (
    .CLK(clk),
    .D(_039_),
    .Q(x[7])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_0 (
    .CLK(clk),
    .D(_006_),
    .Q(q[0])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_1 (
    .CLK(clk),
    .D(_005_),
    .Q(q[1])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_2 (
    .CLK(clk),
    .D(_004_),
    .Q(q[2])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_3 (
    .CLK(clk),
    .D(_003_),
    .Q(q[3])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_4 (
    .CLK(clk),
    .D(_002_),
    .Q(q[4])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_5 (
    .CLK(clk),
    .D(_001_),
    .Q(q[5])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_6 (
    .CLK(clk),
    .D(_000_),
    .Q(q[6])
  );
  sky130_fd_sc_hd__dfxtp_1 q_reg_7 (
    .CLK(clk),
    .D(_040_),
    .Q(q[7])
  );
  sky130_fd_sc_hd__dfxtp_1 busy_reg (
    .CLK(clk),
    .D(_041_),
    .Q(busy)
  );
  assign i[31:2] = { i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1], i[1] };
endmodule
