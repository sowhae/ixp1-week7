function setup(){
  createCanvas(400,400)
  angleMode(DEGREES)
}

class Balloon{
  constructor(color){
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.r = 0;
    this.s = 1;
  }
  draw(){
    push()
    translate(this.x,this.y)
    rotate(this.r)
    scale(this.s)
    translate(-200,-200)

    // String
    noFill();
    stroke(100);
    strokeWeight(2);
    bezier(200, 230, 195, 250, 205, 270, 200, 290);

    // Balloon body
    noStroke();
    fill(this.color);
    ellipse(200, 150, 80, 100);

    // Balloon knot
    fill(this.color[0] - 30, this.color[1] - 30, this.color[2] - 30);
    triangle(195, 200, 205, 200, 200, 230);

    // Shine/highlight
    fill(255, 255, 255, 150);
    ellipse(185, 135, 20, 25);

    pop()
  }
}

let balloon1 = new Balloon([255, 100, 100])
balloon1.x = 200;
balloon1.y = 200;
balloon1.r = 0;

let balloon2 = new Balloon([100, 150, 255])
balloon2.x = 100;
balloon2.y = 100;
balloon2.s = 0.7

let balloon3 = new Balloon([255, 200, 100])
balloon3.x = 300;
balloon3.y = 150;
balloon3.s = 0.6

let balloon4 = new Balloon([150, 255, 150])
balloon4.x = 80;
balloon4.y = 250;
balloon4.s = 0.8

let balloon5 = new Balloon([255, 150, 255])
balloon5.x = 320;
balloon5.y = 280;
balloon5.s = 0.5


function draw(){
  background(135, 206, 235) // Sky blue

  // Balloon 1 - center bobbing and scaling
  balloon1.y = 200 + sin(frameCount * 2) * 30;
  balloon1.s = 0.7 + abs(sin(frameCount * 1.5)) * 0.3;
  balloon1.r = sin(frameCount * 3) * 10;
  balloon1.draw();

  // Balloon 2 - circular motion top left
  balloon2.x = 100 + cos(frameCount * 1.5) * 50;
  balloon2.y = 100 + sin(frameCount * 1.5) * 50;
  balloon2.r = sin(frameCount * 2) * 15;
  balloon2.draw();

  // Balloon 3 - figure-8 pattern
  balloon3.x = 300 + sin(frameCount * 2) * 60;
  balloon3.y = 150 + sin(frameCount) * 40;
  balloon3.r = cos(frameCount * 2) * 12;
  balloon3.draw();

  // Balloon 4 - vertical drift left side
  balloon4.y = 200 + sin(frameCount * 1.2) * 120;
  balloon4.x = 80 + cos(frameCount * 0.8) * 30;
  balloon4.r = -sin(frameCount * 2.5) * 8;
  balloon4.draw();

  // Balloon 5 - horizontal drift bottom
  balloon5.x = 200 + cos(frameCount * 1.8) * 180;
  balloon5.y = 300 + sin(frameCount * 2.5) * 25;
  balloon5.r = sin(frameCount * 1.5) * 20;
  balloon5.draw();
}
