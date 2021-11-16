let moves = [];
let attractor;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  // colorMode(HSB);
  noStroke();
  moves.push(new Mover(createVector(200, 150), createVector(random(360), 100),50));
  moves.push(new Mover(createVector(250, 150), createVector(255, 200), 40));
  attractor = new Attractor(200,200,150);
}

function draw() {
  background(0); 

  for(mover of moves){
    
    mover.move();
    
    mover.show();
    attractor.attract(mover);
    attractor.show();
  }
  
  
}
function mousePressed(){
  moves.push(new Mover(
    createVector(mouseX, mouseY),
    createVector(random(255), 200),
    random(20,50)
  ));
}