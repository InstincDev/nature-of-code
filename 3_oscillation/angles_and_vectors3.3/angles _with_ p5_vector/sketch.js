let walker = [];

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();
  
  walker.push(new Walk(createVector(10, 10), createVector(250, 100),50));
  walker.push(
    new Walk(createVector(width - 10, 10), createVector(150, 100), 25)
  );
  walker.push(
    new Walk(createVector(10, height - 10), createVector(50, 100), 25)
  );
  walker.push(
    new Walk(createVector(width - 10, height - 10), createVector(350, 100),25)
  );
}

function draw() {
  background(51);
  for (walk of walker) {
    if(keyIsDown(RIGHT_ARROW)){
      walk.angle += 0.3;
    }else if(keyIsDown(LEFT_ARROW)){
      walk.angle -= 0.3
    }
    
    
    walk.move();
    walk.show();
  }
}

function mousePressed() {
  walker.push(
    new Walk(createVector(mouseX, mouseY), createVector(random(360), 100),55)
  );
}
