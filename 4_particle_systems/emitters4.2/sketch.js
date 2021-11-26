let emitters = [];
function setup() {
  createCanvas(400, 400);
  emitters[0] = new Emitter(200, 20);
}

function draw() {
  background(0);

  // if(mouseIsPressed){
  //     let wind = createVector(0.1,0);
  //     Particle.applyForce(wind);
  // }

  // for(let i =0; i < 5; i++){
  // particles.push(new Particle(200, 25, random(100,255)));
  // }
  for (let emitter of emitters) {
    emitter.emit(5);
    emitter.show();
    emitter.update();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
