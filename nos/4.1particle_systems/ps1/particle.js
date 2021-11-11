export default class Particle{
    constructor(x,y){
        thisl.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.r = 16;
    }

    applyForce(force){
        this.acc.add(force);
    }

    edges(){
        // if(this.pos.){

        // }
    }
}