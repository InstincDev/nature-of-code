
let waves = []

class Wave{
  constructor(amp,period,phase){
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }
  evaluate(x){
    return sin(this.phase + TWO_PI* x / this.period) * this.amplitude;
  }

  update(){
    this.phase += 0.05;
  }
}


function setup() {
  createCanvas(600, 600);
  // create 5 different waves
  for(let i = 0; i< 5; i++){
    waves[i] = new Wave(random(20,80),random(100,600), random(0,TWO_PI))
  }
  
}

function draw() {
  background(0);
  //  merge waves into one
  for(let x = 0; x< width; x+=10){
    let y = 0;
    for(let wave of waves){
      y += wave.evaluate(x);
    }
    noStroke();
    fill(y,x,255)
    ellipse(x,y+ height/2,16);
  }
// move through the wave
  for(let wave of waves){
    wave.update();
  }
}

