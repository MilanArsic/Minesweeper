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
   if(this.revealed){
    if(this.mine){
      fill (100);
      ellipse(this.column + this.width * 0.5, this.row + this.height * 0.5, this.width * 0.5, this.height * 0.5);
       } else if (this.aroundCount > 0) {
        textAlign(CENTER);
        fill(0);
        text(this.aroundCount, this.column + this.width * 0.5, this.row + this.height-5);
       }
       else{
        fill (200);
        rect(this.column, this.row, this.width, this.height);
}
   } else if (this.flag) {
    image(flagImg, this.column, this.row);
    
   }
};
*/

/*Cell.prototype.countMines = function() {
  if (this.mine){
    this.aroundCount = -1;
    return;
  }
  var total = 0;

  //This will cause a problem if element or neighbour is outside the created grid
  //use the xoff and yoff
  for (var xoff = -1; xoff <= 1; xoff++) {
       var i = this.i + xoff;
       if (i < 0 || i >= cols) continue;

  for (var yoff = -1; yoff <= 1; yoff++) {
      var j = this.j + yoff;
      if (j < 0 || j >= rows) continue;

      var around = grid[i][j];
      if (around.mine) {
        total++;
      }
    }
  }
  
  this.aroundCount = total; 
};
*/

Cell.prototype.contains = function(column, row){
  return (column > this.column && x < this.column + this.width && row > this.row && y < this.row + this.height);
}; 
Cell.prototype.reveal = function(){
  this.revealed = true;
  if (this.aroundCount == 0) {
    this.fill();
  }
}
/*Cell.prototype.fill = function(){
  for (var xoff = -1; xoff <= 1; xoff++) {
    for (var yoff = -1; yoff <= 1; yoff++) {
    var i = this.i + xoff;
   var j = this.j + yoff;
   if (i > -1 && i < cols && j > -1 && j < rows){

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
