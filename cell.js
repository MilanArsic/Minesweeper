function Cell(i,j,w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.aroundCount = 0;

  this.mine = false;
  this.revealed = false;

  this.flag = false;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
/* If this field is revealed
	 then a mine is shown,
	 if it's not, show a number on field */
   if(this.revealed){
    if(this.mine){
      fill (100);
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
       } 
       // NOT a Mine
       else if (this.aroundCount > 0) {
        textAlign(CENTER);
        fill(0);
        text(this.aroundCount, this.x + this.w * 0.5, this.y + this.w-5);
       }
       // NOT flagged
       else{
        fill (200);
        rect(this.x, this.y, this.w, this.w);
}
   } 
   // NOT revealed
   else if (this.flag) {
    image(flagImg, this.x, this.y);
    
   }
};

Cell.prototype.countMines = function() {
  if (this.mine){
    this.aroundCount = -1;
    return;
  }
  var total = 0;
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

Cell.prototype.contains = function(x, y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}; 
Cell.prototype.reveal = function(){
  this.revealed = true;
  if (this.aroundCount == 0) {
    this.fill();
  }
}
Cell.prototype.fill = function(){
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
Cell.prototype.toggleFlag = function() {
    this.flag = this.flag ? false : true;
  }

  Cell.prototype.isMine = function(x, y) {
    return this.mine;
  };
