
var pointsForPolylines = function(points){
	var array1 = [];
	var array2 = [];
	var i;
	var first = true;
	var secondPoint;

	for(i=0;i<points.length;i++){
		if(first){
			array1.push(points[i]);
			first=false;
		}
		else{
			array1.push(points[i]);
			array2.push(array1);
			array1 = [];
			array1.push(points[i]);
		}

	}
	return array2;
};


var polylines = function(x){
	var points = pointsForPolylines(x);
	var struct = STRUCT([]);
	var i;
	for(i=0;i<points.length;i++){
		struct = STRUCT([struct, POLYLINE(points[i])]);
	}
	return struct;
};

var createGrid = function(x){
	var struct = STRUCT([]);

	var start = x[0];
	var xStart = start[0];
	var yStart = start[1];
	var rows = x[1];
	var columns = x[2];

	var xEnd = xStart + columns;
	var yEnd = yStart + rows;

	for(var i=1;i<rows;i++){
		struct = STRUCT([struct, POLYLINE([[xStart,yStart+i],[xEnd,yStart+i]])]);
	}
	for(var j=1;j<columns;j++){
		struct = STRUCT([struct, POLYLINE([[xStart+j,yStart],[xStart+j,yEnd]])]);
	}
	return struct;
};

var perimeter = COLOR([0,0,0])(polylines([[0,0],[39,0],[39,4],[52,4],[52,6],
							[51,6],[51,16],[47,16],[47,17],[9,17],
							[9,22],[1,22],[1,2],[0,2],[0,0]]));
var bigPool = COLOR([0,0,0])(polylines([[1,1],[21,1],[21,10],[1,10]]));

var grid1 = createGrid([[0,0],1,22]);
var grid2 = createGrid([[21,0],17,15]);
var grid3 = createGrid([[1,10],7,21]);
var grid4 = createGrid([[35,4],13,5]);
var grid5 = createGrid([[39,4],12,8]);
var grid6 = createGrid([[46,4],1,6]);
var grid7 = createGrid([[0,0],2,1]);
var grid8 = createGrid([[35,0],1,4]);

var grids = STRUCT([grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8]);

var bigPool = COLOR([0,0,0])(polylines([[1,1],[21,1],[21,10],[1,10],[1,1]]));
var smallPool = COLOR([0,0,0])(polylines([[47,5],[47,16],[51,16],[51,5],[47,5]]));
var stairs = COLOR([0,0,0])(STRUCT([
	polylines([[36,1],[39,1],[39,4],[36,4],[36,1]]),
	POLYLINE([[36.5,1],[36.5,4]]),
	POLYLINE([[37,1],[37,4]]),
	POLYLINE([[37.5,1],[37.5,4]]),
	POLYLINE([[38,1],[38,4]]),
	POLYLINE([[38.5,1],[38.5,4]]),
	]));
var line1 = POLYLINE([[1,17],[9,17]]);
var line2 = POLYLINE([[39,17],[39,16],[47,16]]);

var lines = COLOR([0,0,0])(STRUCT([line1,line2]));

var project = STRUCT([perimeter, grids,bigPool, smallPool, stairs, lines]);
DRAW(project);

