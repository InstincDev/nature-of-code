
function setup() {
  createCanvas(400, 400);
  background(51);
}

// function draw() {
  
//   translate(width/2, height/2);
  
//   // creates random vector
//   // let v = createVector(random(-100,150), random(-100,150));
  
//   // correct way to make random vector
//   // square shape
//   v= p5.Vector.random2D();
  
//   // creates vectors in circular shape
//   // v.mult(100)
//   // star burst effect
//   v.mult(random(50,100))

//   strokeWeight(4);
//   stroke(255,250,random(1,255), 5);
//   line(0,0,v.x,v.y)
// }

function draw(){
  translate(width/2, height/2);
  
  // creates random vector
  // let v = createVector(random(-100,150), random(-100,150));
  
  // correct way to make random vector
  // square shape
  v= p5.Vector.random2D();
  
  // creates vectors in circular shape
  // v.mult(100)
  // star burst effect
  v.mult(random(50,100))

  strokeWeight(4);
  stroke(255,250,random(1,255), 5);
  line(0,0,v.x,v.y)

  noStroke();
  fill(255,150,random(1,255),18);
  ellipse(v.x,v.y, 25,25)
}
