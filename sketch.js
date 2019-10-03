

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 200, 100);

  strokeWeight(5);
}

function draw() {

  background(100, 200, 100, 5);

  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
