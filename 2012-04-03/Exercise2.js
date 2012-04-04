//EXERCISE 2: 3d model

//function that creates and draws the entire floor
var getFloor = function(){
	var floorPiece1 = T([1])([1])(SIMPLEX_GRID([[1],[1],[1]]));
	var floorPiece2 = SIMPLEX_GRID([[39],[1],[1]]);
	var floorPiece3 = T([0,1])([21,1])(SIMPLEX_GRID([[15],[3],[1]]));
	var floorPiece4 = T([0,1])([21,4])(SIMPLEX_GRID([[31],[1],[1]]));
	var floorPiece5 = T([0,1])([51,5])(SIMPLEX_GRID([[1],[1],[1]]));
	var floorPiece6 = T([0,1])([39,5])(SIMPLEX_GRID([[8],[11],[1]]));
	var floorPiece7 = T([0,1])([21,5])(SIMPLEX_GRID([[18],[12],[1]]));
	var floorPiece8 = T([0,1])([1,10])(SIMPLEX_GRID([[20],[7],[1]]));
	var floorPiece9 = T([0,1])([1,17])(SIMPLEX_GRID([[8],[5],[1]]));

	var floor = STRUCT([floorPiece1, floorPiece2, floorPiece3, 
						floorPiece4,floorPiece5, floorPiece6,
						floorPiece7, floorPiece8, floorPiece9]);
	DRAW(floor);
}

//function that creates and draws the two pools
var getPools = function(){
	var bigPool = T([0,1])([1,1])(SIMPLEX_GRID([[20],[9],[0.7]]));
	var smallPool = T([0,1])([47,5])(SIMPLEX_GRID([[4],[11],[0.7]]));

	var pools = STRUCT([bigPool, smallPool]);
	DRAW(pools);
}

//function that creates and draws the stairs
var getStairs = function(){
	var step1 = T([0,1])([36,1])(SIMPLEX_GRID([[0.6],[3],[0.8]]));
	var step2 = T([0,1])([36.6,1])(SIMPLEX_GRID([[0.6],[3],[0.6]]));
	var step3 = T([0,1])([37.2,1])(SIMPLEX_GRID([[0.6],[3],[0.4]]));
	var step4 = T([0,1])([37.8,1])(SIMPLEX_GRID([[0.6],[3],[0.2]]));
	var step5 = T([0,1])([38.4,1])(SIMPLEX_GRID([[0.6],[3],[0]]));

	var steps = STRUCT([step1,step2,step3,step4,step5]);
	DRAW(steps);
}

//function that creates and draws all the walls (not the glasses)
var getWalls = function(){
	var wall1 = T([0,1,2])([5.3,15,0])(SIMPLEX_GRID([[20],[0.2],[4]]));
	var wall2 = T([0,1,2])([1,0.8,0])(SIMPLEX_GRID([[6.8],[0.2],[4]]));
	var wall3 = T([0,1,2])([0.8,0.8,0])(SIMPLEX_GRID([[0.2],[21.2],[4]]));
	var wall4 = T([0,1,2])([0.8,22,0])(SIMPLEX_GRID([[8.4],[0.2],[4]]));
	var wall5 = T([0,1,2])([9,17,0])(SIMPLEX_GRID([[0.2],[5],[4]]));
	var wall6 = T([0,1,2])([25,7,0])(SIMPLEX_GRID([[9],[0.2],[4]]));
	var wall8 = T([0,1,2])([37.7,16,0])(SIMPLEX_GRID([[13.3],[0.2],[4]]));
	var wall9 = T([0,1,2])([51,4.8,0])(SIMPLEX_GRID([[0.2],[11.4],[4]]));
	var wall10 = T([0,1,2])([41.2,4.8,0])(SIMPLEX_GRID([[9.8],[0.2],[4]]));
	var wall11 = T([0,1,2])([37.3,11.3,0])(SIMPLEX_GRID([[5],[0.2],[4]]));

	var walls = STRUCT([wall1,wall2,wall3,wall4,wall5,wall6,
						wall8,wall9,wall10,wall11]);
	DRAW(walls);
}

//function that creates and draws the two roofs
var getRoofs = function(){
	var roof1 = T([0,1,2])([24,4,4])(SIMPLEX_GRID([[23],[13],[0.4]]));
	var roof2 = T([0,1,2])([0,13,4])(SIMPLEX_GRID([[10],[10],[0.4]]));

	var roofs = STRUCT([roof1,roof2]);
	DRAW(roofs);
}

//function that creates and draws the columns
var getColumns = function(){
	var columns1 = T([0,1,2])([26,6.6,1])(SIMPLEX_GRID([
		REPLICA(4)([0.15, -6.2]),
		[0.15],
		[3]
		]));
	var columns2 = T([0,1,2])([26,14,1])(SIMPLEX_GRID([
		REPLICA(4)([0.15, -6.2]),
		[0.15],
		[3]
		]));

	var columns = STRUCT([columns1,columns2]);
	DRAW(columns);
}

//function that creates and draws the bench near the big pool
var getBench = function(){
	var bench_1 = T([0,1,2])([0.2,0,0])(SIMPLEX_GRID([REPLICA(8)([0.2,-2]),[0.5],[0.4]]));
	var bench_2 = T([0,1,2])([0,0,0.4])(SIMPLEX_GRID([[16],[0.5],[0.15]]));

	var bench = T([0,1,2])([6.8,14,1])(STRUCT([bench_1,bench_2]));
	DRAW(bench);
}

//function to create, rotate and draw borders and panels for glassed-walls (windows?)
var getGlasses = function(){
	var generateSmallLeftFrame = function(){
		var struct = STRUCT([]);
		var smallFrame_1 = SIMPLEX_GRID([[1],[0.1],[0.1]]);
		var smallFrame_2 = T([2])([2.9])(SIMPLEX_GRID([[1],[0.1],[0.1]]));
		var smallFrame_3 = T([2])([0.1])(SIMPLEX_GRID([[0.1],[0.1],[2.8]]));
		var smallFrame_4 = T([0,2])([0.95,0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		struct = STRUCT([smallFrame_1,smallFrame_2,smallFrame_3,smallFrame_4]);
		return struct;
	};
	var generateSmallMidFrame = function(){
		var struct = STRUCT([]);
		var smallFrame_1 = SIMPLEX_GRID([[1],[0.1],[0.1]]);
		var smallFrame_2 = T([2])([2.9])(SIMPLEX_GRID([[1],[0.1],[0.1]]));
		var smallFrame_3 = T([2])([0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		var smallFrame_4 = T([0,2])([0.95,0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		struct = STRUCT([smallFrame_1,smallFrame_2,smallFrame_3,smallFrame_4]);
		return struct;
	};
	var generateSmallRightFrame = function(){
		var struct = STRUCT([]);
		var smallFrame_1 = SIMPLEX_GRID([[1],[0.1],[0.1]]);
		var smallFrame_2 = T([2])([2.9])(SIMPLEX_GRID([[1],[0.1],[0.1]]));
		var smallFrame_3 = T([2])([0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		var smallFrame_4 = T([0,2])([0.9,0.1])(SIMPLEX_GRID([[0.1],[0.1],[2.8]]));
		struct = STRUCT([smallFrame_1,smallFrame_2,smallFrame_3,smallFrame_4]);
		return struct;
	};

	var generateBigLeftFrame = function(){
		var struct = STRUCT([]);
		var bigFrame_1 = SIMPLEX_GRID([[4],[0.1],[0.1]]);
		var bigFrame_2 = T([2])([2.9])(SIMPLEX_GRID([[4],[0.1],[0.1]]));
		var bigFrame_3 = T([2])([0.1])(SIMPLEX_GRID([[0.1],[0.1],[2.8]]));
		var bigFrame_4 = T([0,2])([3.95,0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		struct = STRUCT([bigFrame_1,bigFrame_2,bigFrame_3,bigFrame_4]);
		return struct;
	};
	var generateBigMidFrame = function(){
		var struct = STRUCT([]);
		var bigFrame_1 = SIMPLEX_GRID([[4],[0.1],[0.1]]);
		var bigFrame_2 = T([2])([2.9])(SIMPLEX_GRID([[4],[0.1],[0.1]]));
		var bigFrame_3 = T([2])([0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		var bigFrame_4 = T([0,2])([3.95,0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		struct = STRUCT([bigFrame_1,bigFrame_2,bigFrame_3,bigFrame_4]);
		return struct;
	};
	var generateBigRightFrame = function(){
		var struct = STRUCT([]);
		var bigFrame_1 = SIMPLEX_GRID([[4],[0.1],[0.1]]);
		var bigFrame_2 = T([2])([2.9])(SIMPLEX_GRID([[4],[0.1],[0.1]]));
		var bigFrame_3 = T([2])([0.1])(SIMPLEX_GRID([[0.05],[0.1],[2.8]]));
		var bigFrame_4 = T([0,2])([3.9,0.1])(SIMPLEX_GRID([[0.1],[0.1],[2.8]]));
		struct = STRUCT([bigFrame_1,bigFrame_2,bigFrame_3,bigFrame_4]);
		return struct;
	};

	var generateSmallPanels = function(n){
		return SIMPLEX_GRID([REPLICA(n)([0.95,-0.05]),[0.025],[2.8]]);
	};
	var generateBigPanels = function(n){
		return SIMPLEX_GRID([REPLICA(n)([3.95,-0.05]),[0.025],[2.8]]);
	};


	var glass1_1 = T([0,1,2])([29.2,4.85,1])(generateBigLeftFrame());
	var glass1_2 = T([0,1,2])([33.2,4.85,1])(generateBigMidFrame());
	var glass1_3 = T([0,1,2])([37.2,4.85,1])(generateBigRightFrame());
	var glass1_4 = T([0,1,2])([29.2,4.9,1.1])(generateBigPanels(3));
	var glass1 = STRUCT([glass1_1,glass1_2,glass1_3,glass1_4]);

	var glass2_1 = T([0,1,2])([29.2,4.85,1])(generateSmallLeftFrame());
	var glass2_2 = T([0,1,2])([30.2,4.85,1])(generateSmallRightFrame());
	var glass2_3 = T([0,1,2])([29.2,4.9,1.1])(generateSmallPanels(2));
	var glass2 = R(2)(PI/2)(T([0,1])([-29.2+4.9,-4.9-29.2])(STRUCT([glass2_1,glass2_2,glass2_3])));

	var glass3_1 = T([0,1,2])([31,7.9,1])(generateSmallLeftFrame());
	var glass3_2 = T([0,1,2])([32,7.9,1])(generateBigMidFrame());
	var glass3_3 = T([0,1,2])([36,7.9,1])(generateSmallRightFrame());
	var glass3_4 = T([0,1,2])([31.05,7.95,1.1])(SIMPLEX_GRID([[5.90],[0.025],[2.8]]));
	var glass3 = R(2)(PI/2)(T([0,1])([-31.7+7.95,-7.95-31.7])(STRUCT([glass3_1,glass3_2,glass3_3,glass3_4])));

	var glass4_1 = T([0,1,2])([32,7.9,1])(generateSmallLeftFrame());
	var glass4_2 = T([0,1,2])([33,7.9,1])(generateBigMidFrame());
	var glass4_3 = T([0,1,2])([37,7.9,1])(generateSmallRightFrame());
	var glass4_4 = T([0,1,2])([32.05,7.95,1.1])(SIMPLEX_GRID([[5.90],[0.025],[2.8]]));
	var glass4 = R(2)(PI/2)(T([0,1])([-32.7+7.95,-7.95-32.7])(STRUCT([glass4_1,glass4_2,glass4_3,glass4_4])));

	var glass5_1 = T([0,1,2])([30,13.2,1])(generateSmallLeftFrame());
	var glass5_2 = STRUCT([]);
	for(var i=0;i<9;i++){
		glass5_2 = STRUCT([glass5_2,
							T([0,1,2])([31+i,13.2,1])(generateSmallMidFrame())]);
	};
	var glass5_3 = T([0,1,2])([38,13.2,1])(generateSmallRightFrame());
	var glass5_4 = T([0,1,2])([30,13.25,1.1])(generateSmallPanels(10));
	var glass5 = STRUCT([glass5_1,glass5_2,glass5_3,glass5_4]);

	var glass6_1 = T([0,1,2])([40,13.15,1])(generateSmallMidFrame()); 
	var glass6_2 = T([0,1,2])([41,13.15,1])(generateSmallMidFrame()); 
	var glass6_3 = T([0,1,2])([42,13.15,1])(generateSmallMidFrame());
	var glass6_4 = T([0,1,2])([40,13.20,1.1])(generateSmallPanels(3));
	var glass6 = R(2)(PI/2)(T([0,1])([-40+13.20,-13.20-40])(STRUCT([glass6_1,glass6_2,glass6_3,glass6_4])));

	var glass7_1 = T([0,1,2])([44.5,7,1])(generateSmallLeftFrame());
	var glass7_2 = STRUCT([]);
	for(var i=0;i<5;i++){
		glass7_2 = STRUCT([glass7_2,
							T([0,1,2])([45.5+i,7,1])(generateSmallMidFrame())]);
	};
	var glass7_3 = T([0,1,2])([50.5,7,1])(generateSmallRightFrame());
	var glass7_4 = T([0,1,2])([44.5,7.05,1.1])(generateSmallPanels(7)); 
	var glass7 = R(2)(PI/2)(T([0,1])([-44.5+7.05,-7.05-44.5])(STRUCT([glass7_1,glass7_2,glass7_3,glass7_4])));

	DRAW(glass1);
	DRAW(glass2);
	DRAW(glass3);
	DRAW(glass4);
	DRAW(glass5);
	DRAW(glass6);
	DRAW(glass7);
};


//function that invokes all other drawing functions,
//must be executed in order to get the project
var startProject = function(){
	getFloor();
	getStairs();
	getPools();
	getBench();
	getWalls();
	getColumns();
	getGlasses();
	getRoofs();
};

//execution of starting function
startProject();


