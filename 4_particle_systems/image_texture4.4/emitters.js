class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  emit(num){
    for(let i =0; i < num; i++){
        this.particles.push(new Particle(this.pos.x, this.pos.y));       
    }
}

applyForce(force){
  for (let particle of this.particles) {
    particle.applyForce(force);  
  }
}

  update() {
    for (let particle of this.particles) {
      particle.update();
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() { for (let particle of this.particles) {
     particle.show();
    // noStroke();
    // fill(255);
    // ellipse(this.pos.x,this.pos.y, 30)
   
  }}
}
