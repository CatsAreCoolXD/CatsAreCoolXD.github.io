let w = 1080;
let h = 600;
let balls = [];
let gameOver = false;
let timeSurvived = "";
function setup(){
  background(220);
  createCanvas(w,h);
  textSize(50)
}
class Player{
  constructor(x, y, radius, speed){
    this.x = x;
    this.y = y;
    this.r = radius;
    this.s = speed;
  }
  update(){
    ellipse(this.x,this.y,2*this.r, 2*this.r)
    this.move()
  }
  move(){
    if (keyIsDown(UP_ARROW) && this.y > 0){
      this.y -= this.s;
    } else if (keyIsDown(DOWN_ARROW) && this.y < h){
      this.y += this.s;
    } else if (keyIsDown(LEFT_ARROW) && this.x > 0){
      this.x -= this.s;
    } else if (keyIsDown(RIGHT_ARROW) && this.x < w){
      this.x += this.s;
    }
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
    if (millis() > 3000){
      this.checkCollision(player);
    }
  }
  checkCollision(speler){
    let dx = speler.x - this.bx;
    let dy = speler.y - this.by;
    if (sqrt(dx*dx + dy*dy) <= this.br + speler.r){
      gameOver = true;
      timeSurvived = ((millis()/1000-3).toString()).substring(0,4);
    }
  }
}
function keyPressed(){
  if (key === "Q"){
    gameOver = true;
  }
}
let ballsAmount = 25;
for(var i = 0; i < ballsAmount; i++){
  balls.push(new Ball(Math.random()*w,Math.random()*h,25,Math.random()*5,Math.random()*5,Math.random()*255,Math.random()*255,Math.random()*255))
}
let player = new Player(w/2,h/2,25,5);
function draw(){
  background(220);
  if (!gameOver){
    player.update();
    for (var i = 0; i < balls.length; i++){
      balls[i].update();
    }
    noStroke();
    if (millis() < 3000){
      text(((4-millis()/1000).toString()).substring(0, 1), w/2, h/2);
    } else {
      if (millis()<4000){
        text("Start!", w/2, h/2);
      }
    }
  } else {
    noStroke();
    text("Game Over\n\nTime Survived: " + timeSurvived + " Seconds", w/2-275, h/2-75);
  }
}
