
let angle = 0;
let r = 150;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);
  fill(255,155,255);
  translate(200,200);
  
  let increment = 0.1;
  // map the shape according to mouseX
  // map(mouseX,0,width,0.01,PI)
 
  // create shape using individual verticies
  beginShape();
  // increment up to TWO_PI (complete circle)
  for(let a=0; a<TWO_PI; a+=increment){
    // add polar to cartesian coordinate transformation 
    // offset the radius by random
    let r1 = r + random(-15,15)
    let x = r1* cos(a);
    let y = r* sin(a);
    vertex(x,y)
  }
  endShape(CLOSE);

  
  
}

