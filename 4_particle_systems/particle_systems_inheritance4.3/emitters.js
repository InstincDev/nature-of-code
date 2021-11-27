class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  emit(num){
    for(let i =0; i < num; i++){
      // randomly emit particle or confetti
      if(random(1)<0.5){
        this.particles.push(new Confetti(this.pos.x, this.pos.y))
      }else{
        this.particles.push(new Particle(this.pos.x, this.pos.y))
      }
        
    }
}
  update() {
    for (let particle of this.particles) {
      let gravity = createVector(0, 0.04);
      particle.applyForce(gravity);
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
    noStroke();
    fill(255);
    ellipse(this.pos.x,this.pos.y, 30)
   
  }}
}
