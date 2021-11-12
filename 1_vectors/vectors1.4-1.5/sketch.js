
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  translate(width/2, height/2);
  let pos = createVector(200,200);

  let mouse = createVector(mouseX,mouseY);
  // Static function
  let v = p5.Vector.sub(mouse,pos)
  
  // magnitude
  // let m = v.mag();
  //    // changes the bg color by magnitude
  //   // background(m);
  // divide mag by v to normalize to length of 1
  // v.div(m)

// does the above
  // v.normalize()
//  scale up by 50 using mult()
  // v.mult(50)

  // OR 
  // just do this
  v.setMag(50)

  strokeWeight(4);
  stroke(255);
  line(0,0,v.x,v.y)
}


