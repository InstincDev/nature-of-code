
let angle; 
let bob;
let len; 
let origin;
let angleV =0; 
let angleA= 0; 
let gravity;

function setup(){
    createCanvas(600,400)
    angle = PI/4;
    bob = createVector();
    len = 275; 
    origin = createVector(300,0);
    gravity = 1
}

function draw(){
    background(51);
    let force = gravity * sin(angle);
    angleA = (-1 * force)/len;

    angleV += angleA;
    angle += angleV;
    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    stroke(255);
    strokeWeight(8);
    fill(bob.x,155,bob.y);
    line(origin.x,origin.y,bob.x,bob.y);
    circle(bob.x,bob.y,64);

}