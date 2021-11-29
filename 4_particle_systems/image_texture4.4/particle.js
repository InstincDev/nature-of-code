class Particle extends p5.Vector{
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    // create random burst of particles
    this.vel.mult(random(0.5,2));
    this.acc = createVector(0, 0);
    this.r = 62;
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
    // length of particle trail
    // smaller num longer trail
    this.lifetime -= 7;
  }

  show() {
    // tint(150,40,80);
    imageMode(CENTER);
    image(img, this.x, this.y,this.r,this.r)
    //ellipse(this.x, this.y, this.r * 2);
  }
}
