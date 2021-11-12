class Walk {
    constructor(pos, size, color) {
      this.pos = pos;
      this.size = size;
      this.colorh = color.x;
      this.colorb = color.y;
      this. prev = pos.copy();
    }
  
    move() {
      strokeWeight(this.size/2) 
        // stroke(this.colorh, this.colorb / 2, this.colorb) 
        line(this.pos.x, this.pos.y,this.prev.x, this.prev.y)
        this.prev.set(this.pos);
            
        let step = p5.Vector.random2D();
        // add levy flight
        let r = random(100);
        if(r<5){
            step.mult(random(25,75))
        }else{
            step.setMag(5)
        }
        
       this.pos.add(step);
        
        strokeWeight(this.size)
        stroke(this.colorh, this.colorb / 2, this.colorb)
        point(this.pos.x, this.pos.y)
    }
  }
  