class Particle extends p5.Vector{
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    // create random burst of particles
    this.vel.mult(random(1,5));
    this.acc = createVector(0, 0);
    this.r = random(2,7);
    this.color = random(10,255);
    this.lifetime = 255;
  }

  finished(){
      return this.lifetime < 0
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 5;
  }

  show() {
    stroke(this.lifetime);
    strokeWeight(2);
    fill(this.color,255,this.color, this.lifetime);
    ellipse(this.x, this.y, this.r * 2);
  }
}
