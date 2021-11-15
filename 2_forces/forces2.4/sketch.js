let mover1, mover2, gravity;
let movers=[];
// drag coefficient
let dragC = 0.25;

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

  // create water line
  fill(75)
  rect(0,height/2, width,height/2)



  for(let moves of movers){
  
  // create gravity vector
  gravity = createVector(0, 0.1);
  // scale gravity vector according to the mass of the ball
  let weight = p5.Vector.mult(gravity, moves.mass);
  
  
  // apply scaled gravity
  moves.applyForce(weight);
  
  if(moves.pos.y> height/2){
     moves.drag(dragC);
     moves.colorh = 190
  }
 
  moves.move();
  moves.edges();
  moves.show();
  }
  
}

function mousePressed(){
  movers.push(new Mover(
    createVector(mouseX, mouseY),
    createVector(random(360), 100),
    random(2,10)
  ));
}