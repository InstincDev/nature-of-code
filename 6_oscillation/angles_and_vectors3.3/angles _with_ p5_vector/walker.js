class Walk {
    constructor(pos, color, mass) {
      this.pos = pos;
      this.vel = createVector(1,1);
      
      this.acc = createVector(0,0);
      this.mass = mass
      this.size = sqrt(this.mass)*2;
      this.colorh = color.x;
      this.colorb = color.y;

      this.angle = PI/4;
      this.angleV = 0;
      this.angleA = 0;


    }

    // applyForce(force){
    //   let f = p5.Vector.div(force, this.mass);
    //   this.acc.add(f)
    // }
  
    move() {
      // this.vel.add(this.acc)
      
      // change angle as it moves
      this.angle+= 0.01;
      // sets velocity according to the angle
      this. vel = p5.Vector.fromAngle(this.angle);
      // this.vel.mult(5);
      this.pos.add(this.vel);
      

      this.acc.set(0,0);
  
      
    }

    show(){

      fill(this.colorh, this.colorb / 2, this.colorb, 0.5);
      push();
      translate(this.pos.x, this.pos.y)
      this.angle = this.vel.heading();
      rotate(this.angle)
      triangle(-this.size, -this.size/2, -this.size, this.size/2, this.size, 0);
      pop();
    }
  }