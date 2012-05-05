//stabilizers for the Bristol M.1c

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

DRAW(verticalStabilizer);
DRAW(horizontalStabilizers);


