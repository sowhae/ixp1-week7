function setup(){
  createCanvas(400,400)
  angleMode(DEGREES)
}

class Cat{
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

    noStroke();

    // Tail
    fill(this.color);
    ellipse(140, 190, 15, 60);

    // Body
    fill(this.color);
    ellipse(175, 185, 60, 50);

    // Head
    fill(this.color);
    ellipse(200, 165, 55, 50);

    // Ears
    triangle(180, 145, 188, 125, 195, 145);
    triangle(205, 145, 212, 125, 220, 145);

    // Inner ears
    fill(255, 180, 200);
    triangle(183, 145, 188, 130, 192, 145);
    triangle(208, 145, 212, 130, 217, 145);

    // Eyes
    fill(255);
    ellipse(190, 165, 12, 14);
    ellipse(210, 165, 12, 14);

    // Pupils
    fill(40);
    ellipse(190, 167, 6, 8);
    ellipse(210, 167, 6, 8);

    // Nose
    fill(255, 150, 170);
    triangle(198, 173, 202, 173, 200, 177);

    // Whiskers
    stroke(100);
    strokeWeight(1);
    line(170, 170, 150, 168);
    line(170, 175, 150, 175);
    line(230, 170, 250, 168);
    line(230, 175, 250, 175);

    pop()
  }
}

let cat1 = new Cat([255, 150, 100])
cat1.x = 200;
cat1.y = 200;
cat1.r = 0;

let cat2 = new Cat([100, 100, 100])
cat2.x = 100;
cat2.y = 100;
cat2.s = 0.6

let cat3 = new Cat([255, 200, 150])
cat3.x = 300;
cat3.y = 150;
cat3.s = 0.7

let cat4 = new Cat([200, 180, 160])
cat4.x = 80;
cat4.y = 250;
cat4.s = 0.8

let cat5 = new Cat([180, 140, 120])
cat5.x = 320;
cat5.y = 280;
cat5.s = 0.5


function draw(){
  background(200, 230, 255)

  // Cat 1 - center bouncing
  cat1.y = 200 + abs(sin(frameCount * 3)) * 60;
  cat1.r = sin(frameCount * 4) * 15;
  cat1.draw();

  // Cat 2 - running in circle
  cat2.x = 200 + cos(frameCount * 2) * 100;
  cat2.y = 200 + sin(frameCount * 2) * 100;
  cat2.r = frameCount * 2;
  cat2.draw();

  // Cat 3 - pacing left and right
  cat3.x = 200 + sin(frameCount * 1.5) * 150;
  cat3.y = 100 + sin(frameCount * 5) * 10;
  cat3.r = sin(frameCount * 1.5) * 20;
  cat3.draw();

  // Cat 4 - jumping up and down
  cat4.y = 300 - abs(sin(frameCount * 2)) * 150;
  cat4.x = 80 + cos(frameCount) * 20;
  cat4.r = cos(frameCount * 3) * 10;
  cat4.draw();

  // Cat 5 - figure-8 pattern
  cat5.x = 320 + sin(frameCount) * 60;
  cat5.y = 200 + sin(frameCount * 2) * 100;
  cat5.r = -frameCount * 1.2;
  cat5.draw();
}
