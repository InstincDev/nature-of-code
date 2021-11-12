let walker = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  colorMode(HSB);
  background(51);
  walker.push(new Walk(createVector(10, 10), 10, createVector(250, 100)));
  walker.push(
    new Walk(createVector(width - 10, 10), 10, createVector(150, 100))
  );
  walker.push(
    new Walk(createVector(10, height - 10), 10, createVector(50, 100))
  );
  walker.push(
    new Walk(
      createVector(width - 10, height - 10),
      10,
      createVector(350, 100)
    )
  );
}

function draw() {
  for (let i = 0; i < walker.length; i++) {
    let walk = walker[i];
    walk.move();
  }
}

function mousePressed() {
  walker.push(
    new Walk(
      createVector(mouseX, mouseY),
      random(5,10),
      createVector(random(360), 100)
    )
  );
}
