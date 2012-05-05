//the Bristol M.1c placed on the airstrip

var airstrip = T([0,1,2])([-5,-65,-1.55])(SIMPLEX_GRID([[10],[80],[0.2]]));
var border1 = T([0,1,2])([-6,-65,-1.55])(SIMPLEX_GRID([[1],[80],[0.5]]));
var border2 = T([0,1,2])([5,-65,-1.55])(SIMPLEX_GRID([[1],[80],[0.5]]));
var borders = STRUCT([border1,border2]);

var drawFuselage = function(){
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
	DRAW(COLOR([0.8,0.1,0.1])(fuselage));
};

var drawRightWing = function(){
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);

	var p0 = [[1.5,0,0],[-0.48,0,0.3],[-0.48,0,-0.1],[1.5,0,0]];
	var p1 = p0.map(function (p) {return [p[0], p[1]+1.4, p[2]]});
	var p2 = [[1.5,1.8,0],[-0.38,1.8,0.3],[-0.38,1.8,-0.095],[1.5,1.8,0]];
	var p3 = [[1.5,2.2,0],[-0.23,2.2,0.3],[-0.23,2.2,-0.09],[1.5,2.2,0]];
	var p4 = [[1.5,2.6,0],[-0.05,2.6,0.2],[-0.05,2.6,-0.082],[1.5,2.6,0]];
	var p5 = [[1.5,3,0],[0.2,3,0.15],[0.2,3,-0.068],[1.5,3,0]];
	var p6 = [[1.5,3.25,0],[0.6,3.3,0.1],[0.6,3.3,-0.05],[1.5,3.25,0]];
	var p7 = [[1.4,3.35,0],[0.8,3.4,0.05],[0.8,3.4,-0.05],[1.4,3.35,0]];
	var p8 = [[1.35,3.45,0],[1,3.5,0.025],[1,3.5,-0.05],[1.35,3.45,0]];
	var p9 = [[1.3,3.5,0],[1.22,3.5,0],[1.22,3.5,0],[1.3,3.5,0]];

	var c0 = BEZIER(S0)(p0);
	var c1 = BEZIER(S0)(p1);
	var c2 = BEZIER(S0)(p2);
	var c3 = BEZIER(S0)(p3);
	var c4 = BEZIER(S0)(p4);
	var c5 = BEZIER(S0)(p5);
	var c6 = BEZIER(S0)(p6);
	var c7 = BEZIER(S0)(p7);
	var c8 = BEZIER(S0)(p8);
	var c9 = BEZIER(S0)(p9);

	var controls = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9];


	var wing = S([0])([1.2])(T([0,1,2])([-0.4,0.8,0.5])(R([0,1])(PI/2)(MAP(BEZIER(S1)(controls))(domain2))));
	DRAW(COLOR([0.8,0.1,0.1])(wing));
};

var drawLeftWing = function(){
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);

	var p0 = [[1.5,0,0],[-0.48,0,0.3],[-0.48,0,-0.1],[1.5,0,0]];
	var p1 = p0.map(function (p) {return [p[0], p[1]+1.4, p[2]]});
	var p2 = [[1.5,1.8,0],[-0.38,1.8,0.3],[-0.38,1.8,-0.095],[1.5,1.8,0]];
	var p3 = [[1.5,2.2,0],[-0.23,2.2,0.3],[-0.23,2.2,-0.09],[1.5,2.2,0]];
	var p4 = [[1.5,2.6,0],[-0.05,2.6,0.2],[-0.05,2.6,-0.082],[1.5,2.6,0]];
	var p5 = [[1.5,3,0],[0.2,3,0.15],[0.2,3,-0.068],[1.5,3,0]];
	var p6 = [[1.5,3.25,0],[0.6,3.3,0.1],[0.6,3.3,-0.05],[1.5,3.25,0]];
	var p7 = [[1.4,3.35,0],[0.8,3.4,0.05],[0.8,3.4,-0.05],[1.4,3.35,0]];
	var p8 = [[1.35,3.45,0],[1,3.5,0.025],[1,3.5,-0.05],[1.35,3.45,0]];
	var p9 = [[1.3,3.5,0],[1.22,3.5,0],[1.22,3.5,0],[1.3,3.5,0]];

	var c0 = BEZIER(S0)(p0);
	var c1 = BEZIER(S0)(p1);
	var c2 = BEZIER(S0)(p2);
	var c3 = BEZIER(S0)(p3);
	var c4 = BEZIER(S0)(p4);
	var c5 = BEZIER(S0)(p5);
	var c6 = BEZIER(S0)(p6);
	var c7 = BEZIER(S0)(p7);
	var c8 = BEZIER(S0)(p8);
	var c9 = BEZIER(S0)(p9);

	var controls = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9];


	var rotatedWing = T([2])([0.15])(R([0,2])(PI/40)(R([1,2])(PI)(MAP(BEZIER(S1)(controls))(domain2))));
	var wing = S([0])([1.2])(T([0,1,2])([0.4,0.8,0.5])(R([0,1])(PI/2)(rotatedWing)));
	DRAW(COLOR([0.8,0.1,0.1])(wing));
};

var drawStabilizers = function(){
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);

	var p0 = [[0.5,-0.005,0],[1.2,-0.015,0],[1.2,-0.015,0.2],[2,-0.05,1],[0.3,0,0.7],[0.2,0,0.5],[0,0,0],[0.5,-0.005,0]];
	var p1 = [[0.5,0.005,0],[1.2,0.015,0],[1.2,0.015,0.2],[2,0.05,1],[0.3,0,0.7],[0.2,0,0.5],[0,0,0],[0.5,0.005,0]];
	var p2 = [[0.5,-0.005,0]];
	var p3 = [[0.5,0.005,0]];

	var c0 = BEZIER(S0)(p0);
	var c1 = BEZIER(S0)(p1);
	var c2 = BEZIER(S0)(p2);
	var c3 = BEZIER(S0)(p3);

	var controls1 = [c0,c1];
	var controls2 = [c0,c2];
	var controls3 = [c1,c3];

	var verticalStab1 = MAP(BEZIER(S1)(controls1))(domain2);
	var verticalStab2 = MAP(BEZIER(S1)(controls2))(domain2);
	var verticalStab3 = MAP(BEZIER(S1)(controls3))(domain2);

	var verticalStabilizer = STRUCT([verticalStab1,verticalStab2,verticalStab3]);

	var controls4 = [[1,0,0],[0.5,1,0],[0,2,0],[-1,0,0]];
	var c4 = CUBIC_HERMITE(S0)(controls4);

	var controls5 = [[0.5,1,0],[1,0,0],[-2,0,0],[0,2,0]];
	var c5 = CUBIC_HERMITE(S0)(controls5);

	var controls6 = [[1,0,0.025],[0.5,1,0],[0,2,0],[-1,0,0]];
	var c6 = CUBIC_HERMITE(S0)(controls6);

	var controls7 = [[0.5,1,0],[1,0,0.025],[-2,0,0],[0,2,0]];
	var c7 = CUBIC_HERMITE(S0)(controls7);

	var s1 = MAP(CUBIC_HERMITE(S1)([c4,c5,[0,0,0],[0,0,0]]))(domain2);
	var s2 = MAP(CUBIC_HERMITE(S1)([c6,c7,[0,0,0],[0,0,0]]))(domain2);
	var s3 = MAP(CUBIC_HERMITE(S1)([c4,c6,[0,0,0],[0,0,0]]))(domain2);
	var s4 = MAP(CUBIC_HERMITE(S1)([c5,c7,[0,0,0],[0,0,0]]))(domain2);

	var leftHorizontalStabilizer = T([1])([-1])(STRUCT([s1,s2,s3,s4]));
	var rightHorizontalStabilizer = R([1,2])(PI)(leftHorizontalStabilizer);
	var horizontalStabilizers = STRUCT([leftHorizontalStabilizer,rightHorizontalStabilizer]);

	var stabilizers = STRUCT([horizontalStabilizers, verticalStabilizer]);
	var scaledStabs = S([0,1,2])([1.06,1.06,1.06])(T([1])([4.3])(R([0,1])(PI/2)(stabilizers)));

	DRAW(COLOR([0.8,0.1,0.1])(scaledStabs));

};

var drawPropellers = function(){
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);

	var p0 = [[1.5,0,0],[-0.48,0,0.3],[-0.48,0,-0.1],[1.5,0,0]];
	var p1 = [[1.5,0,0]];
	
	var c0 = BEZIER(S0)(p0);
	var c1 = BEZIER(S0)(p1);

	var propeller1 = MAP(BEZIER(S1)([c0,c1]))(domain2);
	var propeller2 = T([0])([3])(R([0,2])(PI)(propeller1));
	
	var propellers = R([0,2])([PI/6])(STRUCT([propeller1,propeller2]));
	var scaledPropellers = S([0,1,2])([0.7,1.1,1.1])(T([0,1,2])([-1.3,0.4,0.7])(propellers));

	DRAW(COLOR([0,0,0])(scaledPropellers));
};

var drawLandingGear = function(){
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);

	var p0 = [[0.5,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,0],[0.5,0,0]];
	var p1 = [[2,0,0],[4,0,0],[4,4,0],[0,4,0],[0,0,0],[2,0,0]].map(function (p) {return [p[0]-1.5, p[1]-1, p[2]]});
	var p2 = [[0.5,0,6],[1,0,6],[1,1,6],[0,1,6],[0,0,6],[0.5,0,6]].map(function (p) {return [p[0]-3, p[1], p[2]]});;
	var p3 = [[0.5,0.5,0]];
	var p4 = [[2,0,0],[4,0,0],[4,4,0],[0,4,0],[0,0,0],[2,0,0]].map(function (p) {return [p[0]-1.5, p[1]-1, p[2]-0.1]});
	var p5 = [[0.5,0.5,-0.1]];

	var c0 = BEZIER(S0)(p0);
	var c1 = BEZIER(S0)(p1);
	var c2 = BEZIER(S0)(p2);
	var c3 = BEZIER(S0)(p3);
	var c4 = BEZIER(S0)(p4);
	var c5 = BEZIER(S0)(p5);

	var part1 = MAP(BEZIER(S1)([c0,c2]))(domain2);
	var part2 = MAP(BEZIER(S1)([c1,c3]))(domain2);
	var part3 = MAP(BEZIER(S1)([c1,c4]))(domain2);
	var part4 = MAP(BEZIER(S1)([c4,c5]))(domain2);

	var landingGearRightPart = R([0,2])([PI/2])(STRUCT([part1,part2,part3,part4]));
	var landingGearLeftPart = R([0,1])([PI])(T([0,1])([-12,-0.75])(landingGearRightPart));
	var landingGear = STRUCT([landingGearLeftPart,landingGearRightPart]);
	var scaledLandingGear = S([0,1,2])([0.3,0.3,0.3])(T([0,1,2])([-6,3,-3])(landingGear));
	
	DRAW(COLOR([0,0,0])(scaledLandingGear));

};

drawFuselage();
drawRightWing();
drawLeftWing();
drawStabilizers();
drawPropellers();
drawLandingGear();
DRAW(COLOR([0,0.8,0.8])(borders));
DRAW(COLOR([1,1,1])(airstrip));