let p1, p2;
function setup(){
    createCanvas(600,600);
     p1 = new Particle(300,300, true);
     p2 = new SquareP(300,300, false)

}

function draw(){
    background(0);
    p1.update();
    p2.update();
    p1.show();
    p2.show();
}