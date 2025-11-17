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

let cat1 = new Cat([255, 120, 80])
cat1.x = 200;
cat1.y = 200;
cat1.r = 0;
cat1.s = 1;


function draw(){
  background(150, 200, 255)

  // Cat moving across screen
  cat1.x = (frameCount * 2) % 500 - 50;
  cat1.y = 200 + sin(frameCount * 3) * 20;
  cat1.draw();
}
