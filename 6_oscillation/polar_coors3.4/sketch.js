
let angle = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  noFill();
  translate(200,200);
  let r = 150;
  circle(0,0,r *2)

  // point on the edge of circle
  strokeWeight(32);
  stroke(252,238,33);
  
  // use polar to cartesian coordinates
  // let angle = -PI/4; // 45 degree angle 
  let x = r * cos(angle);
  let y = r * sin(angle);
  
  // rotate point around circle
  angle += 0.01;
  point(x,y);
}

