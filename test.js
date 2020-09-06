function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  canvas.addEventListener('touchmove', moved);
  canvas.addEventListener('mousemove', moved);
  // canvas.addEventListener('touchstart', moved);
  // canvas.addEventListener('mousedown', moved);
  // canvas.addEventListener('touchend', moved);
  // canvas.addEventListener('touchleave', moved);
  // canvas.addEventListener('mouseup', moved);

  strokeWeight(10);
  stroke(250);
}

function moved(e){

  clientX = e.touches[0].clientX;
clientY = e.touches[0].clientY;
  point(clientX,clientY);
}
