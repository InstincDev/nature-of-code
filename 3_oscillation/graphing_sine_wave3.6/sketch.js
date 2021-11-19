
let angles = [];
let angleV = [];
let r = 16;

function setup() {
  createCanvas(600, 600);
  let total = floor(width/(r*2));
  for(let i =0; i < total; i ++){
    angles[i] = 0;
    angleV[i] = 0.01+i/550
  }
}

function draw() {
  background(0);
  translate(300,300);
  
  stroke(252,238,33);
  strokeWeight(4)
  for(let i = 0; i < angles.length; i++){
    let y = map(sin(angles[i]), -1,1,-280,280);
   let x = map(i,0,angles.length,-270,300);
    fill(252,x,y);
    line(x,0,x,y);
    circle(x,y,r *2);
    angles[i] += angleV[i]
  }
  
  
}

