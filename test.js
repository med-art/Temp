function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(24);
}

function touchMoved(){
  background(100);
  ellipse(mouseX,mouseY,100,100);
  text(frameRate(),10,10);
}
