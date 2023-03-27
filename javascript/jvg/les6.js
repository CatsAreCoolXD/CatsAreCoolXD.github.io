let w = 1080;
let h = 600;
let balls = [];
let gameOver = false;
function setup(){
  background(220);
  createCanvas(w,h);
}
class Player{
  constructor(x, y, radius, speed){
    this.x = x;
    this.y = y;
    this.r = radius;
    this.s = speed;
  }
  update(){
    ellipse(this.x,this.y,2*this.r, 2*this.r);
  }
}
class Ball{
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
    this.checkCollision(player);
  }
  checkCollision(speler){
    let dx = speler.x - this.bx;
    let dy = speler.y - this.by;
    if (sqrt(dx*dx + dy*dy) <= this.br + speler.r){
      gameOver = true;
    }
  }
}
let ballsAmount = 3;
for(var i = 0; i < ballsAmount; i++){
  balls.push(new Ball(Math.random()*w,Math.random()*h,25,Math.random()*5,Math.random()*5,Math.random()*255,Math.random()*255,Math.random()*255))
}
let player = new Player(w/2,h/2,30);
function draw(){
  background(220);
  if (!gameOver){
    player.update();
    for (var i = 0; i < balls.length; i++){
      balls[i].update();
    }
  }
}
