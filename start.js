  
function makeArray(cols, rows){
    var arr = new Array(cols);
  for (var column=0; column < arr.length; column++){
    arr[column]= new Array(rows);
  }
  return arr;
}

var grid =[];
var maxCols;
var maxRows;

var totalMines;

var mines = [];
var flagImg;

function preload() {
  flagImg = loadImage('https://i.imgur.com/A0y5C3L.png');
}

function setup() { 
  createCanvas(201, 201);
  maxCols = 20;
  maxRows = 20;
  totalMines = 20;
  console.log(flagImg);
  grid = makeArray (maxCols, maxRows);
  for (var column=0; column < maxCols; column++) {
    for (var row=0;  row< maxRows; row++){
        grid[column][row] = new Cell(column,row,width,height);
    }
  }
}
  /* var options = [];
   for (let cell of grid) { 
      options.push([i, j]);
    }
   }
*/
/*
  for (var n = 0; n < totalMines; n++){
    var index = floor(random(options.length));
    var choice = options[index];
    var i = choice[0];
    var j = choice[1];
    options.splice(index, 1);
    grid[i][j].mine = true;
  }
   
 for (let cell of grid) {
        cell.countMines();
}
}
}
*/



function mousePressed(mouseX,mouseY) {
  if (mouseButton === 'left') {
      grid[mouseX][mouseY].reveal();
  }

  else if (mouseButton === 'right') {
      grid[mouseX][mouseY].toggleFlag();
  }
}



Cell.prototype.reveal = function()
{
if (this.revealed)
{
  return;
}

if (this.flag)
{
  return;
}

this.revealed = true;

if (this.mine)
{
  gameOver();
  return;
}

if (this.aroundCount == 0)
{
  this.fill();
}
}

 
function draw() {
  background(255);
  for (let cell of grid){
            cell.show();
    }
  }

  function gameOver() {
    for (let cell of grid) {
      cell.reveal();
    }
    console.log("You lose!");
  }
  
  function checkGame() {
    for (let cell of grid) {
      if (!cell.revealed && !cell.mine) {
        return;
      }
    }
    console.log("You win!");
  }
