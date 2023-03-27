let w = 1080;
let h = 600;
let gameOver = false;
class Player{
  constructor(x,y,gravity){
    this.x = x;
    this.y = y;
    this.velocity = 0;
    this.gravity = gravity;
    this.grounded = false;
  }
  update(){
    if (!this.grounded){
      this.velocity += this.gravity/35;
      this.y -= this.velocity;
    } else {
      gameOver = true;
      survivedTime = Math.ceil(millis/2000);
    }
    if (this.y+25 > h || this.y-25 < 0){
      this.grounded = true;
    }
  }
  draw(){
    fill(0);
    circle(this.x,this.y,25);
    fill(0);
  }
  flap(){
    this.velocity = 3;
  }
}
class Pillar {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.passed = false;
  }
  update(){
    this.x -= this.speed;
  }
  draw(){
    fill(0,255,0);
    rect(this.x,this.y,100, 600)
    fill(220)
  }
}
let player = new Player(w/2, h/2, -9.81);
let pillars = [];
function setup(){
  background(220);
  createCanvas(w,h);
  frameRate(60);
  setInterval(makePillar, 2000);
  textSize(50);
}
function makePillar(){
  baryCenter = Math.max(Math.min(h-Math.random()*(h), 500), 100)
  pillars.push(new Pillar(w,baryCenter+50))
  pillars.push(new Pillar(w,baryCenter-h-50))
  console.log(baryCenter);
}
let score = 0;
let survivedTime = 0;
makePillar();
function draw(){
  background(220);
  if (keyIsDown(32) && !gameOver){
    player.flap();
  }
  player.draw();
  for(var i = 0; i < pillars.length; i++){
    if (!gameOver){
      pillars[i].update();
    }
    pillars[i].draw();
    if (pillars[i].x < w/2 && pillars[i].x > w/2-100 && !gameOver){
      if (player.y > pillars[i].y && player.y < pillars[i].y+600){
        gameOver = true;
        survivedTime = Math.ceil(millis/2000);
      } else {
        if (!pillars[i].passed){
          score += 1;
          pillars[i].passed = true;
        }
      }
    }
  }
  if (gameOver){
    stroke(0);
    fill(255,0,0);
    text("Game Over!", w/2-200, h/2);
    text("Score: " + ceil(score/2).toString(), w/2-200, h/2+100);
    text("Press space to play again", w/2-200, h/2+200)
    if (keyIsDown(32) && ceil(millis()/2000) != survivedTime){
      gameOver = false;
      player = new Player(w/2, h/2, -9.81);
      pillars = [];
      score = 0;
    }
  }
  if (!gameOver){
    player.update();
    fill(0)
    text("Score: " + ceil(score.toString()/2), 25, 60);
  }
}
