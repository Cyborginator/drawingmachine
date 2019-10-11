
let noiseOffSet = 0.0;
let strokeWidth = 5;
let strokeColor = 0;
let keyInput = 0;
let redColor = 0;
let greenColor = 0;
let blueColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(100, 200, 100);
  background(255);

  strokeWeight(strokeWeight);
}

function draw() {

  //background(100, 200, 100, 5);
  strokeWeight(strokeWidth);

  //noiseOffSet += 0.05;
  //strokeWidth = noise(noiseOffSet) * 10;

  /*
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
  */

  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    //stroke(random(255), random(255), random(255));
    stroke(strokeColor);
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
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

  else if(key == 'r') {
    strokeColor = color(255, 0, 0);
  }

  else if(key == 'g') {
    strokeColor = color(0, 255, 0);
  }

  else if(key == 'b') {
    strokeColor = color(0, 0, 255);
  }

  else if(key == 'p') {
    strokeColor = color(255, 0, 255);
  }

  else if(key == 'v') {
    strokeColor = color(150, 0, 255);
  }

  else if(key == 'y') {
    strokeColor = color(255, 255, 0);
  }

  else if(key == 't') {
    strokeColor = color(0, 255, 255);
  }

  else if(key == 'o') {
    strokeColor = color(255, 100, 0);
  }

  else if(key == 'd') {
    strokeColor = 0;
  }

  else if(key == 'w') {
    strokeColor = 255;
  }

  else if(key == 'a') {
    strokeColor = color(random(255), random(255), random(255));
  }

  else if(key == '[') {
    strokeWidth += 5;
  }

  else if(key == ']') {
    if(strokeWidth > 5) {
      strokeWidth -= 5;
    }
  }

  else if(key == '{') {
    strokeWidth += 20;
  }

  else if(key == '}') {
    if(strokeWidth > 5) {
      strokeWidth -= 20;
    }
  }

  else if(key == '1') {
    if(redColor < 255) {
      redColor += 5;
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }

  else if(key == '2') {
    if(redColor > 0) {
      redColor -= 5;
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }

  else if(key == '3') {
    if(greenColor < 255) {
      greenColor += 5;
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }

  else if(key == '4') {
    if(greenColor > 0) {
      greenColor -= 5;
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }

  else if(key == '5') {
    if(blueColor < 255) {
      blueColor += 5;
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }

  else if(key == '6') {
    if(blueColor > 0) {
      blueColor -= 5;
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }

/*
  else if(key == '1') {
    keyInput = key;
  }
  else if(key == '2') {
    keyInput = key;
  }
  else if(key == '3') {
    keyInput = key;
  }

  else if(key == 'u') {

    /*
    if(key == '1' && redColor < 255) {
      redColor += 5;
    }
    if(key == '2' && greenColor < 255) {
      greenColor += 5;
    }
    if(key == '3' && blueColor < 255) {
      blueColor += 5;
    }
    //

    if(keyInput == '1') {
      if(key == '+' && redColor < 255) {
        redColor += 5;
      }
      else if(key == '-' && redColor > 0) {
        redColor -= 5;
      }
    }
    if(keyInput == '2') {
      if(key == '+' && greenColor < 255) {
        greenColor += 5;
      }
      else if(key == '-' && greenColor > 0) {
        greenColor -= 5;
      }
    }
    if(keyInput == '3') {
      if(key == '+' && blueColor < 255) {
        blueColor += 5;
      }
      else if(key == '-' && blueColor > 0) {
        blueColor -= 5;
      }
    }
    strokeColor = color(redColor, greenColor, blueColor);
  }
*/
  return false;

}
