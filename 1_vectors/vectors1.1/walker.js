class Walk {
    constructor(pos, size, color) {
      this.x = pos.x;
      this.y = pos.y;
      this.vel = createVector(1,0);
      this.size = size;
      this.colorh = color.x;
      this.colorb = color.y;
    }
  
    move() {
      this.x = this.x + this.vel.x;
      this.y = this.y + this.vel.y;
  
      fill(this.colorh, this.colorb / 2, this.colorb, 0.5);
      ellipse(this.x, this.y, this.size, this.size);
    }
  }