let emitters = [];

function setup() {
  createCanvas(400, 400);
  emitters[0] = new Emitter(200, 60);
}

function draw() {
  background(0);

  for (let emitter of emitters) {
    emitter.emit(2);
    emitter.show();
    emitter.update();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
