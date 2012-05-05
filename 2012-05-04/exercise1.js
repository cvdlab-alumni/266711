//a wing of the Bristol M.1c

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


var wing = MAP(BEZIER(S1)(controls))(domain2);
DRAW(wing);