let emitters = [];
let img;

function preload(){
  img= loadImage('texture.png');
}

function setup() {
  createCanvas(400, 400);
  emitters[0] = new Emitter(200, 360);
}

function draw() {
  clear();
  background(0);
  // greater blur effect
  blendMode(ADD);
  let force = createVector(0,-0.1);
  let dir = map(mouseX, 0, width, -0.1,0.1);
  let wind = createVector(dir,0);
  for (let emitter of emitters) {
    emitter.emit(1);
    emitter.applyForce(force)
    emitter.applyForce(wind)
    emitter.show();
    emitter.update();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
