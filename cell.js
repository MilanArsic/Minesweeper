function Cell(i,j,w) {
  this.i = i;
  this.j = j;
  this.x = i*w;
  this.y = j*w;
  this.w = w;
  this.aroundCount = 0;

  if (random (1) < 0.5){
  this.mine = true;
  } else {
    this.mine = false;
  }
  this.revealed = false;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
   if(this.revealed){
    if(this.mine){
      fill (100);
      ellipse(this.x + this.w*0.5, this.y+this.w*0.5, this.w*0.5);
       } else{
        fill (200);
        rect(this.x, this.y, this.w, this.w);
        textAlign(CENTER);
        fill(0);
        text(this.aroundCount, this.x + this.w*0.5, this.y + this.w);
       }
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
      var j = this.y + yoff;
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
};
