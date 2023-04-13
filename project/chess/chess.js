function setup(){
  createCanvas(600,600);
  background(220);
}
var board = [];
for(var i = 0; i < 64; i++){
  board.push(0);
}
function draw(){
  for(var x = 0; x < 8; x++){
    for(var y = 0; y < 8; y++){
      fill(0, 200, 0);
      rect(x*75,y*75,75,75);
    }
  }
}
