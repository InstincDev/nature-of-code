class Mover {
  constructor(pos, color, mass) {
    this.pos = pos;
    this.vel = createVector(0,0);
    this.vel.mult(random(3));
    this.acc = createVector(0,0);
    this.mass = mass;
    this.size = sqrt(this.mass)*10;
    this.colorh = color.x;
    this.colorb = color.y;
  }
  friction(){
    // check how far the ball is from the bottom
    let diff = height - (this.pos.y + this.size);
    // if diff is within 1 px
    if(diff<1){

      // Direction of Friction
      // copy the velocity vector
      let friction = this.vel.copy()
      // normalize it
      friction.normalize();
      // reverse the direction
      friction.mult(-1);


      // Magnitude of Friction
      let mu = 0.05;
      let normal= this.mass;
      friction.setMag(mu*normal);
      this.applyForce(friction)

      // this can also be done with this line of code
      // decreses velocity over time but does not take density into account
      // this.vel.mult(0.95);
    }
  }
  
 
  // wall constraints
  edges() {
    if (this.pos.y >= height-this.size/2) {
      // return the ball to height so it wont get stuck!
      this.pos.y = height-this.size/2;
      // reverse ball direction
      this.vel.y *= -1;
    }
    if(this.pos.x >=width-this.size/2){
      // return ball to width so it wont get stuck!
      this.pos.x = width-this.size/2;
      // reverse ball direction
      this.vel.x *= -1;
    }else if(this.pos.x <= this.size/2){
      // return ball to width so it wont get stuck!
      this.pos.x = this.size/2;
      // reverse ball direction
      this.vel.x *= -1;
    }
  }

// Newton's Second Law - Force = Mass * Acceleration
     // Including  mass
      // add total force of wind AND gravity
  applyForce(force){
    // create a static vector
    // so that the value of force is not changed before
    // it is applied to the second ball
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
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
