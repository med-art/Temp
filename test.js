function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(24);
}

function touchMoved(){
  ellipse(mouseX,mouseY,100,100);
}
