function Cell(column, row, width, height) {
  this.column = column;
  this.row = row;
  this.width = width;
  this.height = height;
 
  this.aroundCount = 0;

  this.mine = false;
  this.revealed = false;

  this.flag = false;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.column, this.row, this.width, this.height);

  if (this.flag) {
    image(flagImg, this.column, this.row);
    return;
  }

  if (!this.revealed) {
    return;
  }

  if (this.mine) {
    fill (100);
    ellipse(this.column + this.width * 0.5, this.row + this.height * 0.5, this.width * 0.5, this.height * 0.5);
    checkGame();

    return;
  }

  if (this.aroundCount != 0) {
    textAlign(CENTER);
    fill(0);
    text(this.aroundCount, this.column + this.width * 0.5, this.row + this.height-5);
    checkGame();

    return;
  }

  // it is just empty field
  fill (200);
  rect(this.column, this.row, this.width, this.height);
  checkGame();
}

Cell.prototype.countMines = function() {
  if (this.mine) {
    return;
  }

  for (var columnOffset = -1; columnOffset <= 1; columnOffset++) {
       var column = this.column + columnOffset;
       if (column < 0 || column >= maxCols) continue;
  for (var rowOffset = -1; rowOffset <= 1; rowOffset++) {
      var row = this.row + rowOffset;
      if (row < 0 || j >= maxRows) continue;
      var neighbourCell = grid[i][j];
      if (neighbourCell.mine) {
        this.aroundCount++;
      }
    }
  }
};

Cell.prototype.contains = function(column, row){
  return (column > this.column && x < this.column + this.width && row > this.row && y < this.row + this.height);
}; 

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

/*Cell.prototype.fill = function(){
  for (var columnOffset = -1; columnOffset <= 1; columnOffset++) {
    for (var rowOffset = -1; rowOffset <= 1; rowOffset++) {
    var column = this.column + columnOffset;
   var row = this.row + rowOffset;
   if (column > -1 && column < maxCols && row > -1 && j < maxRows){

      var around = grid[i][j];
      if (!around.mine && !around.revealed ) {
        around.reveal();
      }
    }
      }
   }
}
*/
Cell.prototype.toggleFlag = function() {
    this.flag = this.flag ? false : true;
  }

  Cell.prototype.isMine = function() {
    return this.mine;

  };
