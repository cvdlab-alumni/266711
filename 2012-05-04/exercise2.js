//the fuselage of the Bristol M.1c

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);


var controls1 = [[0.8,2,0],[0,2,0.8],[0,0,1.6],[-1.6,0,0]];
var c1 = CUBIC_HERMITE(S0)(controls1);
var controls2 = [[-0.8,2,0],[0,2,0.8],[0,0,1.6],[1.6,0,0]];
var c2 = CUBIC_HERMITE(S0)(controls2);
var controls3 = [[-0.8,2,0],[0,2,-0.8],[0,0,-1.6],[1.6,0,0]];
var c3 = CUBIC_HERMITE(S0)(controls3);
var controls4 = [[0.8,2,0],[0,2,-0.8],[0,0,-1.6],[-1.6,0,0]];
var c4 = CUBIC_HERMITE(S0)(controls4);

var controls5 = [[0.3,4,0],[0,4,0.5],[0,0,0.6],[-1,0,0]];
var c5 = CUBIC_HERMITE(S0)(controls5);
var controls6 = [[-0.3,4,0],[0,4,0.5],[0,0,0.6],[1,0,0]];
var c6 = CUBIC_HERMITE(S0)(controls6);
var controls7 = [[-0.3,4,0],[0,4,-0.5],[0,0,-0.6],[1,0,0]];
var c7 = CUBIC_HERMITE(S0)(controls7);
var controls8 = [[0.3,4,0],[0,4,-0.5],[0,0,-0.6],[-1,0,0]];
var c8 = CUBIC_HERMITE(S0)(controls8);

var controls9 = [[0.1,5,0],[0,5,0.2],[0,0,0.2],[-0.4,0,0]];
var c9 = CUBIC_HERMITE(S0)(controls9);
var controls10 = [[-0.1,5,0],[0,5,0.2],[0,0,0.2],[0.4,0,0]];
var c10 = CUBIC_HERMITE(S0)(controls10);
var controls11 = [[-0.1,5,0],[0,5,-0.2],[0,0,-0.2],[0.4,0,0]];
var c11 = CUBIC_HERMITE(S0)(controls11);
var controls12 = [[0.1,5,0],[0,5,-0.2],[0,0,-0.2],[-0.4,0,0]];
var c12 = CUBIC_HERMITE(S0)(controls12);

var controls13 = [[0.7,1.8,0],[0,1.8,0.7],[0,0,1.4],[-1.4,0,0]];
var c13 = CUBIC_HERMITE(S0)(controls13);
var controls14 = [[-0.7,1.8,0],[0,1.8,0.7],[0,0,1.4],[1.4,0,0]];
var c14 = CUBIC_HERMITE(S0)(controls14);
var controls15 = [[-0.7,1.8,0],[0,1.8,-0.7],[0,0,-1.4],[1.4,0,0]];
var c15 = CUBIC_HERMITE(S0)(controls15);
var controls16 = [[0.7,1.8,0],[0,1.8,-0.7],[0,0,-1.4],[-1.4,0,0]];
var c16 = CUBIC_HERMITE(S0)(controls16);

var controls17 = [[0.8,0.8,0],[0,0.8,0.8],[0,0,1.6],[-1.6,0,0]];
var c17 = CUBIC_HERMITE(S0)(controls17);
var controls18 = [[-0.8,0.8,0],[0,0.8,0.8],[0,0,1.6],[1.6,0,0]];
var c18 = CUBIC_HERMITE(S0)(controls18);
var controls19 = [[-0.8,0.8,0],[0,0.8,-0.8],[0,0,-1.6],[1.6,0,0]];
var c19 = CUBIC_HERMITE(S0)(controls19);
var controls20 = [[0.8,0.8,0],[0,0.8,-0.8],[0,0,-1.6],[-1.6,0,0]];
var c20 = CUBIC_HERMITE(S0)(controls20);

var controls21 = [[0.5,0.6,0],[0,0.6,0.5],[0,0,1],[-1,0,0]];
var c21 = CUBIC_HERMITE(S0)(controls21);
var controls22 = [[-0.5,0.6,0],[0,0.6,0.5],[0,0,1],[1,0,0]];
var c22 = CUBIC_HERMITE(S0)(controls22);
var controls23 = [[-0.5,0.6,0],[0,0.6,-0.5],[0,0,-1],[1,0,0]];
var c23 = CUBIC_HERMITE(S0)(controls23);
var controls24 = [[0.5,0.6,0],[0,0.6,-0.5],[0,0,-1],[-1,0,0]];
var c24 = CUBIC_HERMITE(S0)(controls24);

var controls25 = [[0.1,0.3,0],[0,0.3,0.1],[0,0,0.2],[-0.2,0,0]];
var c25 = CUBIC_HERMITE(S0)(controls25);
var controls26 = [[-0.1,0.3,0],[0,0.3,0.1],[0,0,0.2],[0.2,0,0]];
var c26 = CUBIC_HERMITE(S0)(controls26);
var controls27 = [[-0.1,0.3,0],[0,0.3,-0.1],[0,0,-0.2],[0.2,0,0]];
var c27 = CUBIC_HERMITE(S0)(controls27);
var controls28 = [[0.1,0.3,0],[0,0.3,-0.1],[0,0,-0.2],[-0.2,0,0]];
var c28 = CUBIC_HERMITE(S0)(controls28);

var controls29 = [[0.8,0.8,0],[0.4,0.8,0.6],[0,0,1],[-1,0,0]];
var c29 = CUBIC_HERMITE(S0)(controls29);
var controls30 = [[-0.8,0.8,0],[-0.4,0.8,0.6],[0,0,1],[1,0,0]];
var c30 = CUBIC_HERMITE(S0)(controls30);
var controls31 = [[0.8,2,0],[0.4,2,0.6],[0,0,1.4],[-0.4,0,0]];
var c31 = CUBIC_HERMITE(S0)(controls31);
var controls32 = [[-0.8,2,0],[-0.4,2,0.6],[0,0,1.4],[0.4,0,0]];
var c32 = CUBIC_HERMITE(S0)(controls32);

var controls33 = [[0.4,0.8,0.6],[0,0.8,0.2],[0,0,-0.8],[-0.6,0,0]];
var c33 = CUBIC_HERMITE(S0)(controls33);
var controls34 = [[-0.4,0.8,0.6],[0,0.8,0.2],[0,0,-0.8],[0.6,0,0]];
var c34 = CUBIC_HERMITE(S0)(controls34);
var controls35 = [[0.4,2,0.6],[0,2,0.2],[0,0,-0.8],[-0.6,0,0]];
var c35 = CUBIC_HERMITE(S0)(controls35);
var controls36 = [[-0.4,2,0.6],[0,2,0.2],[0,0,-0.8],[0.6,0,0]];
var c36 = CUBIC_HERMITE(S0)(controls36);

var s1 = MAP(CUBIC_HERMITE(S1)([c1,c5,[0,0,0],[0,0,0]]))(domain2);
var s2 = MAP(CUBIC_HERMITE(S1)([c2,c6,[0,0,0],[0,0,0]]))(domain2);
var s3 = MAP(CUBIC_HERMITE(S1)([c3,c7,[0,0,0],[0,0,0]]))(domain2);
var s4 = MAP(CUBIC_HERMITE(S1)([c4,c8,[0,0,0],[0,0,0]]))(domain2);
var s5 = MAP(CUBIC_HERMITE(S1)([c5,c9,[0,0,0],[0,0,0]]))(domain2);
var s6 = MAP(CUBIC_HERMITE(S1)([c6,c10,[0,0,0],[0,0,0]]))(domain2);
var s7 = MAP(CUBIC_HERMITE(S1)([c7,c11,[0,0,0],[0,0,0]]))(domain2);
var s8 = MAP(CUBIC_HERMITE(S1)([c8,c12,[0,0,0],[0,0,0]]))(domain2);
var s9 = MAP(CUBIC_HERMITE(S1)([c1,c2,[0,0,0],[0,0,0]]))(domain2);
var s10 = MAP(CUBIC_HERMITE(S1)([c3,c4,[0,0,0],[0,0,0]]))(domain2);
var s11 = MAP(CUBIC_HERMITE(S1)([c17,c18,[0,0,0],[0,0,0]]))(domain2);
var s12 = MAP(CUBIC_HERMITE(S1)([c19,c20,[0,0,0],[0,0,0]]))(domain2);
var s13 = MAP(CUBIC_HERMITE(S1)([c3,c19,[0,0,0],[0,0,0]]))(domain2);
var s14 = MAP(CUBIC_HERMITE(S1)([c4,c20,[0,0,0],[0,0,0]]))(domain2);
var s15 = MAP(CUBIC_HERMITE(S1)([c33,c35,[0,0,0],[0,0,0]]))(domain2);
var s16 = MAP(CUBIC_HERMITE(S1)([c34,c36,[0,0,0],[0,0,0]]))(domain2);
var s17 = MAP(CUBIC_HERMITE(S1)([c17,c21,[0,0,0],[0,0,0]]))(domain2);
var s18 = MAP(CUBIC_HERMITE(S1)([c18,c22,[0,0,0],[0,0,0]]))(domain2);
var s19 = MAP(CUBIC_HERMITE(S1)([c19,c23,[0,0,0],[0,0,0]]))(domain2);
var s20 = MAP(CUBIC_HERMITE(S1)([c20,c24,[0,0,0],[0,0,0]]))(domain2);
var s21 = MAP(CUBIC_HERMITE(S1)([c21,c25,[0,0,0],[0,0,0]]))(domain2);
var s22 = MAP(CUBIC_HERMITE(S1)([c22,c26,[0,0,0],[0,0,0]]))(domain2);
var s23 = MAP(CUBIC_HERMITE(S1)([c23,c27,[0,0,0],[0,0,0]]))(domain2);
var s24 = MAP(CUBIC_HERMITE(S1)([c24,c28,[0,0,0],[0,0,0]]))(domain2);
var s25 = MAP(CUBIC_HERMITE(S1)([c31,c29,[0,0,0],[0,0,0]]))(domain2);
var s26 = MAP(CUBIC_HERMITE(S1)([c32,c30,[0,0,0],[0,0,0]]))(domain2);


var fuselage = STRUCT([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23,s24,s25,s26]);
DRAW(fuselage);



