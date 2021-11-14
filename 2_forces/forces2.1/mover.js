class Mover {
  constructor(pos, size, color) {
    this.pos = pos;
    this.vel = createVector(0,0);
    this.vel.mult(random(3));
    this.acc = createVector(0,0);
    this.size = size;
    this.colorh = color.x;
    this.colorb = color.y;
  }

  
 
  // wall constraints
  edges() {
    if (this.pos.y >= height) {
      // return the ball to height so it wont get stuck!
      this.pos.y = height;
      // reverse ball direction
      this.vel.y *= -1;
    }
    if(this.pos.x >=width){
      // return ball to width so it wont get stuck!
      this.pos.x = width;
      // reverse ball direction
      this.vel.x *= -1;
    }else if(this.pos.x <= 0){
      // return ball to width so it wont get stuck!
      this.pos.x = this.pos.x;
      // reverse ball direction
      this.vel.x *= -1;
    }
  }

// Newton's Second Law - Force = Mass * Acceleration
     // without mass
      // add total force of wind AND gravity
  applyForce(force){
    this.acc.add(force);
  }

  move() {


    // apply the acceleration the the velocity
    this.vel.add(this.acc);

    // limit the velocity
    // this.vel.limit(0.5);

    // apply velocity to the pos
    this.pos.add(this.vel);
    // reset acceleration after every frame
  this.acc.set(0,0);
    
  }


  show() {
    fill(this.colorh, this.colorb / 2, this.colorb);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
