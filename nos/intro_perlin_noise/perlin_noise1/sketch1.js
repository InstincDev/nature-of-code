var xoff = 0;
function setup() {
  createCanvas(400, 400);
  smooth();
}

function draw() {
  background(51);
    // wild fast movement 
  // var x =random(width);
    var x = map(noise(xoff),0,1,0, width);
    // the smaller the num the slower and smoother the movement
    xoff += 0.01;
  ellipse(x, 200, 24, 24);
}
