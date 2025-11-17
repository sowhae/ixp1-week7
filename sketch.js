function setup(){
  createCanvas(400,400)
  angleMode(DEGREES)
}

class Jellyfish{
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

    // Bell/Head of jellyfish
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], 180);
    ellipse(200, 150, 70, 60);

    // Inner bell detail
    fill(this.color[0] + 30, this.color[1] + 30, this.color[2] + 30, 120);
    ellipse(200, 150, 50, 40);

    // Tentacles
    stroke(this.color[0], this.color[1], this.color[2], 150);
    strokeWeight(3);
    noFill();
    bezier(180, 180, 175, 200, 170, 220, 165, 250);
    bezier(190, 180, 188, 205, 186, 230, 184, 260);
    bezier(200, 180, 200, 210, 200, 240, 200, 270);
    bezier(210, 180, 212, 205, 214, 230, 216, 260);
    bezier(220, 180, 225, 200, 230, 220, 235, 250);

    // Spots on bell
    noStroke();
    fill(255, 255, 255, 100);
    ellipse(190, 145, 15, 12);
    ellipse(210, 150, 10, 8);

    pop()
  }
}

let jelly1 = new Jellyfish([255, 100, 150])
jelly1.x = 200;
jelly1.y = 200;
jelly1.r = 0;

let jelly2 = new Jellyfish([100, 200, 255])
jelly2.x = 100;
jelly2.y = 100;
jelly2.s = 0.6

let jelly3 = new Jellyfish([255, 180, 100])
jelly3.x = 300;
jelly3.y = 150;
jelly3.s = 0.8

let jelly4 = new Jellyfish([150, 255, 200])
jelly4.x = 80;
jelly4.y = 250;
jelly4.s = 0.7

let jelly5 = new Jellyfish([200, 150, 255])
jelly5.x = 320;
jelly5.y = 280;
jelly5.s = 0.5


function draw(){
  background(10, 20, 60) // Deep ocean blue

  // Jelly 1 - center pulsing
  jelly1.y = 200 + sin(frameCount * 1.5) * 40;
  jelly1.s = 0.8 + abs(sin(frameCount * 2)) * 0.4;
  jelly1.r = sin(frameCount * 2) * 8;
  jelly1.draw();

  // Jelly 2 - circular drift
  jelly2.x = 100 + cos(frameCount * 1.2) * 60;
  jelly2.y = 100 + sin(frameCount * 1.2) * 60;
  jelly2.r = cos(frameCount * 1.5) * 12;
  jelly2.draw();

  // Jelly 3 - wavy horizontal
  jelly3.x = 200 + sin(frameCount * 1.8) * 150;
  jelly3.y = 150 + sin(frameCount * 3) * 20;
  jelly3.r = sin(frameCount * 2.5) * 10;
  jelly3.draw();

  // Jelly 4 - vertical float
  jelly4.y = 200 + sin(frameCount) * 140;
  jelly4.x = 80 + cos(frameCount * 2) * 25;
  jelly4.r = -cos(frameCount * 2) * 15;
  jelly4.draw();

  // Jelly 5 - spiral motion
  jelly5.x = 320 + cos(frameCount * 1.5) * 70;
  jelly5.y = 200 + sin(frameCount * 1.5) * 120;
  jelly5.r = frameCount * 1.5;
  jelly5.draw();
}
