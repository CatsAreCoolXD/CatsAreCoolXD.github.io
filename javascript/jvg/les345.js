let w = 1080;
let h = 600;
let ballsAmount = 500;
function setup(){
  background(220);
  createCanvas(w,h);
}
class ball{
  constructor(bx, by, br, bvx, bvy, r, g, b){
    this.bx = bx;
    this.by = by;
    this.br = br
    this.bvx = bvx;
    this.bvy = bvy;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  update(){
    noStroke();
    stroke(this.r, this.g, this.b);
    circle(this.bx,this.by,this.br);
    this.bx += this.bvx;
    this.by += this.bvy;
    if (this.bx+this.br > w){
      this.bvx *= -1
    } else if (this.bx < 0){
      this.bvx *= -1;
    }
    if (this.by+this.br > h){
      this.bvy *= -1
    } else if (this.by < 0){
      this.bvy *= -1;
    }
  }
}
balls = [];
for(var i = 0; i < ballsAmount; i++){
  balls.push(new ball(Math.random()*w,Math.random()*h,25,Math.random()*5,Math.random()*5,Math.random()*255,Math.random()*255,Math.random()*255))
}
function draw(){
  background(220);
  balls.forEach(function(b){
    b.update();
  })
}
