let mover1, mover2, gravity;
let movers=[]
function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();
  mover1 = movers.push(new Mover(createVector(300, 100), createVector(250, 100), 2));
  mover2 = movers.push(new Mover(
    createVector(100, 100),
    createVector(random(360), 100),
    5
  ));
  
}

function draw() {
  background(51);
  for(let moves of movers){
    // apply wind force when mouse is pressed
  if (mouseIsPressed) {
    let wind = createVector(0.9, 0);
    moves.applyForce(wind);
  }

  // create gravity vector
  gravity = createVector(0, 0.1);
  // scale gravity vector according to the mass of the ball
  let weightA = p5.Vector.mult(gravity, moves.mass);
  moves.show();
  
  // apply scaled gravity
  moves.applyForce(weightA);
  
  moves.friction();
  
  moves.move();
  
  moves.edges();
  }
  
}

function mousePressed(){
  movers.push(new Mover(
    createVector(mouseX, mouseY),
    createVector(random(360), 100),
    random(2,10)
  ));
}