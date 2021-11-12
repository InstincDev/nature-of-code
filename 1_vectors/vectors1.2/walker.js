class Walk {
    constructor(pos, size, color) {
      this.pos = pos;
      this.vel = createVector(1,-1)
      this.size = size;
      this.colorh = color.x;
      this.colorb = color.y;
    }
  
    move() {

      this.pos.add(this.vel);
      // does the same thing
      // this.pos.x = this.pos.x + this.vel.x;
      // this.pos.y = this.pos.y + this.vel.y;
  
      fill(this.colorh, this.colorb / 2, this.colorb, 0.5);
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  }