function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0,0);
}

function mouseMoved() {
  strokeWeight(windowWidth/250);
  stroke(255);
  fill(0);
  ellipse(mouseX, mouseY, 200);
}

function mouseDragged() {
  strokeWeight(3);
  stroke(255);
  fill(0);
  ellipse(mouseX, mouseY, 75);
}