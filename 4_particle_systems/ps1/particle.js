class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y, color);
    this.vel = p5.Vector.random2D();
    // create random burst of particles
    this.vel.mult(random(1,5));
    this.acc = createVector(0, 0);
    this.r = random(2,5);
    this.color = random(10,255);
    this.lifetime = 255;
  }

  finished(){
      return this.lifetime < 0
  }

  applyForce(force) {
    this.acc.add(force);
  }

  // wall constraints
  edges() {
    if (this.pos.y >= height - this.r/2) {
      // return the ball to height so it wont get stuck!
      this.pos.y = height - this.r / 2;
      // reverse ball direction
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r / 2) {
      // return ball to width so it wont get stuck!
      this.pos.x = width - this.r / 2;
      // reverse ball direction
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r / 2) {
      // return ball to width so it wont get stuck!
      this.pos.x = this.r / 2;
      // reverse ball direction
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 5;
  }

  show() {
    stroke(this.lifetime);
    strokeWeight(2);
    fill(this.color,255,this.color, this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    line(200,20,this.pos.x,this.pos.y )


  }
}
