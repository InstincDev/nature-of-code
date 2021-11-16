class Mover {
  constructor(pos, color, mass) {
    this.pos = pos;
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0,0);
    this.mass = mass;
    this.size = sqrt(this.mass)*2;
    this.colorh = color.x;
    this.colorb = color.y;
    this.angle = 0;
    this.angleV = 0;
    this.angleA = 0;
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f)
  }

  move() {

    // apply the acceleration the the velocity
    this.vel.add(this.acc);
    
    // limit the velocity
    // this.vel.limit(0.5);
    
  //   // apply velocity to the pos
    this.pos.add(this.vel);
  
  
    // //  set angle acc to acc of pos x 
    // this.angleA = this.acc.y/50;
  //   // velocity to acceleration
    // this.angleV += this.angleA;
  //   // angle to velocity
    // this.angle += this.angleV;

     // reset acceleration after every frame
    this.acc.set(0,0);
  }

  show(){
    strokeWeight(1)
    stroke(255);
    fill(255,100);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = this.vel.heading()
    rotate(this.angle);
      // fill(this.colorh, this.colorb / 2, this.colorb);
      // quick way to create a triangle with one value
    triangle(-this.size, -this.size/2, -this.size, this.size/2, this.size, 0);
    pop();
  }
}

