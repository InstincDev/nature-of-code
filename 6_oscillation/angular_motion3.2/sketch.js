
let angle = 0;
// angles acceleration
let angleA = 0.001;
// angle velocity
let angleV =0.1;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(RADIANS)
}

function draw() {

  // map the angular acceleration
  angleA = map(mouseX,0,width,-0.01,0.01)
  // constrain angle velocity
  angleV = constrain(angleV,-0.2,0.2)

  background(146,83,161);
  noStroke();
  fill(240,99,164);
  translate(200,200);
  rotate(angle);
  rect(0,0,256,32)

  angle += angleV;
  angleV += angleA;
}

