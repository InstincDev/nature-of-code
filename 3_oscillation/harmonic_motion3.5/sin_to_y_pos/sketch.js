
let angle = 0

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  translate(200,200);
  fill(252,238,33)
  let y = map(sin(angle), -1,1,-2,200);
  let x = map(sin(angle), -1,1,-2,200);
  stroke(255);
  line(0,0,x,y)
  circle(x,y,32)

  // controls the speed
  angle += 0.01
}

