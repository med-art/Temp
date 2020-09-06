function setup() {
  createCanvas(windowWidth, windowHeight);
    pixelDensity(1); // Ignores retina displays
  background(100);
  fill(0);
}

function touchMoved(){
  ellipse(mouseX,mouseY,100,100);
}
