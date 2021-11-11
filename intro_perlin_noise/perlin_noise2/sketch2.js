// // x points on the same noise line but at different points
// var xoff1 = 0;
// var xoff2 = 1000;

function setup() {
  createCanvas(400, 400);
  smooth();
}

function draw() {
  background(51);
  // wild fast movement
  // var x =random(width);
  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height);
  // the smaller the num the slower and smoother the movement
  xoff1 += 0.02;
  xoff2 += 0.07;
  noStroke();
  fill(255,155,255,x)
  ellipse(x, y, 24, 24);
}

