class Attractor{
    constructor(x,y,m){
        this.pos = createVector(x,y);
        this.mass = m;
        this.size = sqrt(this.mass) *2;
       
    }

    attract(mover){
        // the attractors pos - the objets pos
        let force = p5.Vector.sub(this.pos, mover.pos);
        //  magnitude of the distance squared
        // and then constrained 
        let distanceSq = constrain(force.magSq(), 125,2500);

        // gravitational constant
        let G = 1;
        // strangth of the gravitational force
        let strength = G * (this.mass * mover.mass) / distanceSq; 
        // set force to the strength of the gravitational force
        force.setMag(strength);
        // apply force to mover
        mover.applyForce(force);
    }

    show(){
        fill(255,255,255)
        ellipse(this.pos.x, this.pos.y, this.size)
    }
}