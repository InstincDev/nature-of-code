let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);
  translate(200, 200);

  let y = map(sin(angle), -1, 1, -180, 180);
  let x = map(sin(angle), -1, 1, -18, 180);
  fill(255, y, x);
  stroke(255);
  line(0, 0, x, y);
  circle(x, y, 32);

  // controls the speed
  angle += 0.01;
}
