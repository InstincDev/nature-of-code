class Mover {
  constructor(pos, size, color) {
    this.pos = pos;
    // add velocity using static function
    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
    this.size = size;
    this.colorh = color.x;
    this.colorb = color.y;
  }

  move() {
    // calculate the acceleration
    let mouse = createVector(200,200);
    // add acceleration
    this.acc = p5.Vector.sub(mouse,this.pos);
    this.acc.setMag(0.1);
    // apply the acceleration the the velocity
    this.vel.add(this.acc);
    // limit the velocity
    // this.vel.limit(0.5);
    // apply velocity to the pos
    this.pos.add(this.vel);
    

    fill(this.colorh, this.colorb / 2, this.colorb);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

