
let angles = [];
let angleV = [];
let r = 6;

function setup() {
  createCanvas(600, 600);
  let total = floor(width/(r*2));
  for(let i =0; i < total; i ++){
    // TWO_PI one cycle of wave, 2*TWO_PI 2 cycles
    angles[i] = map(i,0,total,0,2*TWO_PI);
    angleV[i] = 0.01+i/100
  }
}

function draw() {
  background(0);
  translate(300,300);
  
 beginShape();
  strokeWeight(2)
  for(let i = 0; i < angles.length; i++){
    let y = map(sin(angles[i]), -1,1,-280,280);
   let x = map(i,0,angles.length,-280,300);
     stroke(252,y,x);
     noFill();
    // line(x,0,x,y);
    circle(x,y,r *2);
    vertex(x,y);
    angles[i]+= 0.02
    // angles[i] += angleV[i]
  }
  endShape();
  
}

