function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function antenna(x=0, y=0, r=0, s=1){
  push();

  translate(x, y);
  rotate(r);
  scale(s);
  translate(-200,-400);

  line(200,400,200,370);
  circle(200,365,8);

  pop();
}

function wing(x=0, y=0, r=0, s=1){
  push();

  translate(x, y);
  rotate(r);
  scale(s);
  translate(-200,-350);

  strokeWeight(1/s);

  ellipse(200, 320, 40, 60);
  ellipse(200, 300, 30, 40);
  for (let i=1; i <= 3; i++){
    circle(200 + (i * 8), 320, 5);
  }
  pop();
}

function butterfly(x=0, y=0, r=0, s=1){
  push();

  translate(x, y);
  rotate(r);
  scale(s);
  translate(-200,-200);

  strokeWeight(1/s);

  // body
  ellipse(200, 200, 10, 40);
  circle(200, 185, 12);

  // antennae
  antenna(200, 200, 20, 0.8);
  antenna(200, 200, -20, 0.8);

  // wings
  wing(200, 200, 45, 1);
  wing(200, 200, -45, 1);
  wing(200, 210, 20, 0.7);
  wing(200, 210, -20, 0.7);

  pop();
}

function makeButterfly (x=0, y=0, r=0, s=1){
  return {
    x:x,
    y:y,
    r:r,
    s:s,
    draw(){
      this.r+= 2;
      //this.r=this.r+2
      // makes butterflies flutter
      this.y -= 0.5;
      // makes butterflies float up
    butterfly(this.x, this.y, this.r, this.s);
    }
  }
}

let butterflies= [];

function draw() {
  background(135, 206, 235);
  noFill();
  stroke(255, 100, 150);

  for (let i=0; i<butterflies.length; i++){
    let f =butterflies[i];
    f.draw();
  }
}

function mouseClicked(){
   print(mouseX, mouseY)
  butterflies.push(makeButterfly(mouseX, mouseY, 0 , random(0.2,1)));

}
