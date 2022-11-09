

function makeArray(cols, rows) {
    var arr = new Array(cols);
    for (var i=0; i<arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var Grid;
var cols = 15;
var rows = 15;

function Setup(){
    createCanvas (150, 150);
    Grid = makeArray(cols, rows);
    for (var i = 0; i < cols; i++){
       for (var j = 0; j< rows; j++){
        Grid[i][j] = new Cell();
       }     
        }
    }


function draw(){
    background(0);
    for (var i=0; i<cols; i++){
        for (var j=0; j<rows; j++){
            Grid[i][j]=show();
        }
    }
}

