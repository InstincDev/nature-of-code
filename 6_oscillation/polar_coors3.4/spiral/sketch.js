
let angle = 0;
let r = 150;

function setup() {
  createCanvas(400, 400);
   background(0);
}

function draw() {
 
  // strokeWeight(4);
  // stroke(255);
  // noFill();
  // circle(0,0,r *2)
  strokeWeight(16);
  stroke(252,238,33);
  translate(200,200);
  
  // use polar to cartesian coordinates
  // let angle = -PI/4; // 45 degree angle 
  let x = r * cos(angle);
  let y = r * sin(angle);
  
  // rotate point around circle
  angle += 0.04;
  r -= 0.2
  // add randomness
  // r-= random(-2,2);
  point(x,y);
}

