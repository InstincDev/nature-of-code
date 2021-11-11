class Walk{
    constructor(pos,size,inc,color){
        this.x = pos.x;
        this.y = pos.y;
        this.size = size;
        this.inc = inc;
        this.colorh = color.x;
        this.colorb = color.y;
    }

    move(){
        
    var r= floor(random(this.inc));
      
    switch(r){
        case 0:
            this.x-=2;
            break;
        case 1:
                this.x+=2;
            break;
        case 2:
           this.y-=2
            break;
        case 3:
           this.y+=2
            break;
    }
  


    fill(this.colorh, this.colorb/2,this.colorb,0.5)
    ellipse(this.x,this.y,this.size,this.size)
    }
}

let walker =[];

function setup(){
    createCanvas(400,400);
    ellipseMode(CENTER);
    colorMode(HSB);
    noStroke();
    background(51);
    x = 200;
    y = 200;
    walker.push(new Walk(createVector(10,10),25,4,createVector(250,100)));
    walker.push(new Walk(createVector(width-10,10),25,4,createVector(150,100)));
    walker.push(new Walk(createVector(10,height-10),25,4,createVector(50,100)));
    walker.push(new Walk(createVector(width-10,height-10),25,4,createVector(350,100)));
}

function draw(){
    
   for(let i=0;i<walker.length;i++){
       let walk = walker[i];
       walk.move();
   }
  
  

}

function mousePressed(){
    walker.push(new Walk(createVector(mouseX,mouseY),25,4,createVector(random(360),100)))

}