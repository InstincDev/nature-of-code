// // x points on the same noise line but at different points
var xoff;
var yoff;
var inc = 0.01;
var x, n, s, y;
function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  yoff = 0;
  loadPixels();
  for (y = 0; y < height; y++) {
    xoff = 0;
    for (x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      //   var r = random(255)
      var r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}
