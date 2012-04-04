//EXERCISE 1: 2d plan

//function that takes an array of points (as [x,y]), and creates
//a second array to support polylines function listed below
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


//function that takes an array output from pointsForPolylines
//and generates lines between the points using POLYLINE primitive
var polylines = function(x){
	var points = pointsForPolylines(x);
	var struct = STRUCT([]);
	var i;
	for(i=0;i<points.length;i++){
		struct = STRUCT([struct, POLYLINE(points[i])]);
	}
	return struct;
};

//function that creates a grid of lines, taking as input a three elements
//array([starting point, number of rows, number of columns])
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

//function that builds up all the elements of the plan, using the functions
//listed up as support
var buildUp = function(){
var perimeter = COLOR([0,0,0])(polylines([[0,0],[39,0],[39,4],[52,4],[52,6],
							[51,6],[51,16],[39,16],[39,17],[9,17],
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
var grid9 = createGrid([[1,17],5,8]);

var grids = STRUCT([grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8,grid9]);

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
var line2 = POLYLINE([[44.8,7],[44.8,14.1]]);
var line3 = POLYLINE([[5,22],[5,17]]);
var line4 = POLYLINE([[5,20.7],[9,20.7]]);
var line5 = POLYLINE([[7,22],[7,20.7]]);
var line6 = POLYLINE([[6.2,15.1],[26.8,15.1]]);
var line7 = POLYLINE([[39,16],[37.8,16]]);
var line8 = POLYLINE([[40,13.6],[30,13.6]]);
var line9 = polylines([[31,13.6],[31,7.4],[32,7.4],[32,13.6],[31,13.6]]);
var line10 = POLYLINE([[34,7.4],[25.1,7.4]]);
var line11 = POLYLINE([[42.5,11.5],[37.4,11.5]]);
var line12 = POLYLINE([[47,5.05],[41.2,5.05]]);
var line13 = POLYLINE([[47,5],[30,5]]);

var lines = COLOR([0,0,0])(STRUCT([line1,line2,line3,line4,line5,
									line6,line7,line8,line9,line10,
									line11,line12,line13]));


var bench = COLOR([0,0,0])(polylines([[6.9,14.1],[22.1,14.1],[22.1,14.6],[6.9,14.6],[6.9,14.1]]));

return STRUCT([perimeter, grids,bigPool, smallPool, stairs, lines, bench]);
};

//function that invokes buildUp(), and draws the project
var startProject = function(){
	var project = buildUp();
	DRAW(project);
};

//execution of starting function
startProject();




