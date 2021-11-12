let mover, newmove;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();
  newmove = new Mover(createVector(150, 150), 25, createVector(random(360), 100));
  mover = new Mover(createVector(100, 100), 25, createVector(250, 100));
}

function draw() {
  background(51); 
  
  mover.move();
  newmove.move()
  fill(255)
 ellipse(200,200,25,25)
}

// function mousePressed() {
//   
// }
