
let noiseOffSet = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 200, 100);

  strokeWeight(strokeWeight);
}

function draw() {

  background(100, 200, 100, 5);
  strokeWeight(strokeWidth);

  noiseOffSet += 0.05;
  strokeWidth = noise(noiseOffSet) * 10;

  let multiplierHeight = (windowHeight / 10);
  let multiplierWidth = (windowWidth / 10);

  push();
  stroke(0, 10, 255);
  for(let i = 0; i < 10; i++) {
    line(i * multiplierWidth, 0, windowWidth, i * multiplierWidth);
  }
  for(let i = 0; i < 10; i++) {
    line(0, i * multiplierHeight, i * multiplierHeight, windowHeight);
  }
  pop();

  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 255, true))
    stroke(random(255), random(255), random(255))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {

  if (key == 's') {
    // save this image
    saveCanvas('fileName', 'png');
  }

  else if (key == 'c') {
    // clear the image
    clear();
  }

  return false;

}
