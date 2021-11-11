class Walk {
    constructor(pos, size, color) {
      this.x = pos.x;
      this.y = pos.y;
      this.size = size;
      this.colorh = color.x;
      this.colorb = color.y;
    }
  
    move() {
      this.x = this.x + random(-1,1);
      this.y = this.y + random(-1,1);
  
      fill(this.colorh, this.colorb / 2, this.colorb, 0.5);
      ellipse(this.x, this.y, this.size, this.size);
    }
  }