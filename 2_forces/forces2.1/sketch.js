let mover, newmove, gravity;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();
  newmove = new Mover(
    createVector(150, 150),
    25,
    createVector(random(360), 100)
  );
  mover = new Mover(createVector(100, 100), 25, createVector(250, 100));
}

function draw() {
  background(51);
  // apply wind force when mouse is pressed
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
    newmove.applyForce(wind);
  }

  // create gravity vector
  gravity = createVector(0, 0.1);

  newmove.show();
  mover.show();
  // apply gravity
  newmove.applyForce(gravity);
  mover.applyForce(gravity);
  newmove.move();
  mover.move();
  mover.edges();
  newmove.edges();

  fill(255);
  ellipse(200, 200, 25, 25);
}
