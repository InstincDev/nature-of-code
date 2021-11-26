// extend from p5.Vector
class Particle extends p5.Vector{
    constructor(x,y){
        super(x,y);
        this.vel = p5.Vector.random2D();
        
    }

    update(){
        this.add(this.vel);
        this.x += random(-5,5);
        this.y += random(-5,5);
        this.color = random(255) 
        
    }

    show(){
        stroke(this.x,255, this.color);
        strokeWeight(24);
        point(this.x, this.y);
    }
}