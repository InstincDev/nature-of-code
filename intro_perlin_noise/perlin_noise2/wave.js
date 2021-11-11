
var xoff=0;

function setup() {
    createCanvas(400, 400);
    smooth();
  }

//   function draw() {
//     background(51);
//     stroke(255);
//     noFill();
//     beginShape();
//     for(var x = 0; x<width;x++){
//         stroke(255);

//         // vertex(x,random(height))
//         // var y = noise(0)*height
//         var y = noise(xoff)*height;
//         vertex(x,y)
        
//        xoff +=0.02;
//     }
//     endShape();
//     for(var x = 0; x<width;x++){
//         stroke(255);

//         // vertex(x,random(height))
//         // var y = noise(0)*height
//         var y = noise(xoff)*height;
        
//       ellipse(x,y,24,24)  
//        xoff +=0.02;
//     }
    
//     noLoop();
// }

var inc= 0.01;
var start = 0;
var x,n,s,y;
function draw() {
    background(51);
    stroke(255);
    noFill();
    beginShape();
    var xoff = start;
    for( x = 0; x<width;x++){
        stroke(255);
        n = map(noise(xoff),0,1,0,height);
        s = map(sin(xoff),-1,1,-50,50);
        y = s+n;

        vertex(x,y)
        xoff+=inc;
    }
    ellipse(x-20,y, 24,24);
    start+= inc;
    endShape();
}