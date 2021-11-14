let mover, newmove, gravity;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();
  newmove = new Mover(
    createVector(100, 100),
    25,
    createVector(random(360), 100),
    5
  );
  mover = new Mover(createVector(150, 100), 25, createVector(250, 100), 2);
}

function draw() {
  background(51);
  // apply wind force when mouse is pressed
  if (mouseIsPressed) {
    let wind = createVector(0.9, 0);
    mover.applyForce(wind);
    newmove.applyForce(wind);
  }

  // create gravity vector
  gravity = createVector(0, 0.1);
  // scale gravity vector according to the mass of the ball
  let weightA = p5.Vector.mult(gravity, mover.mass);
  let weightB = p5.Vector.mult(gravity, newmove.mass);
  newmove.show();
  mover.show();
  // apply scaled gravity
  newmove.applyForce(weightB);
  mover.applyForce(weightA);
  newmove.move();
  mover.move();
  mover.edges();
  newmove.edges();

  fill(255);
  ellipse(200, 200, 25, 25);
}
