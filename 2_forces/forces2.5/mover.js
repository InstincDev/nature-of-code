class Mover {
  constructor(pos, color, mass) {
    this.pos = pos;
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.mass = mass;
    this.size = sqrt(this.mass)*2;
    this.colorh = color.x;
    this.colorb = color.y;
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f)
  }

  move() {
    // let mouse = createVector(mouseX,mouseY);
    // this.acc = p5.Vector.sub(mouse,this.pos)
    // this.acc.setMag(0.1);

    // apply the acceleration the the velocity
    this.vel.add(this.acc);
    
    // limit the velocity
    // this.vel.limit(0.5);
    
    // apply velocity to the pos
    this.pos.add(this.vel);
    // reset acceleration after every frame
    this.acc.set(0,0);
    
  }

  show(){
    fill(this.colorh, this.colorb / 2, this.colorb);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

