let mover;


function setup(){
    createCanvas(400,400);
    particle = new Particle(200,200);
}

function draw(){
    bachground(0)

    if(mouseIsPressed){
        let wind = createVector(0.1,0);
        Particle.applyForce(wind);
    }

    let gravity = createVector(0,0.2);
    particle.applyForce(gravity);

    particle.update();
    particle.edges();
    particle.show();
}