let rightArmHeight;
let armNumber;
function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(1080, 600);
  //Één cijfer geeft grijswaarden
  background(220);
  rightArmHeight = 300;
  armNumber = 0;
}
function draw() {
    background(220);
    noStroke();
    rect(1080/2-7.5, 100, 15, 200)
    circle(1080/2, 100, 100)
    strokeWeight(10);
    stroke(255,255,255);
    line(1080/2,300, 1080/2.5, 500)
    line(1080/2,300, 1080-1080/2.5, 500);
    line(1080/2,150,1080/2.5,300);
    line(1080/2,150,1080-1080/2.5,rightArmHeight-150);
    rightArmHeight = rightArmHeight+cos(armNumber)*3.5;
    armNumber += .1;
    stroke(0,255,0);
    circle(1080/2-25, 80, 10);
    stroke(0,255,0);
    circle(1080/2+25, 80, 10);
};
