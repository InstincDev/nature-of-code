// create child class using extends
class SquareP extends Particle{
    constructor(x,y){
        // use constructor from parent
        super(x,y);
        this.bright = random(255);
        this.r = 10;
    }
    
    // adds to the parent update()
    update(){
        // use parent update()
        super.update();
        // increase the size of particle
        this.r += random(-2,2);
    }

    // overrides the parent show()
    show(){
        stroke(255);
        strokeWeight(1);
        fill(this.bright);
        square(this.x, this.y, this.r)
    }

}