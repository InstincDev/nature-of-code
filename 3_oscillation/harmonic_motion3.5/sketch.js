
let angle = 0

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  translate(200,200);
  fill(252,238,33)
  // controles the size
  let r = map(sin(angle),-1,1,20,30);
  circle(0,0,r *2)

  // controls the speed
  angle += 0.02;
}

