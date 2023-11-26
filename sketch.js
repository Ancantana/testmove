let messages = [
  "Hello. I'm ADA. I was created by An",
  "Hold down your mouse for a bit. You can let go once you feel ready",
  "Thank you. You have been assigned a number. Please press the space bar to retrieve your number"
];

let currentMessage = 0;
let assignedNumber;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(255);

  // Display the current message
  fill(0);
  text(messages[currentMessage], width / 2, height / 2, width - 40, height - 40);

  // Check for space bar press
  if (keyIsPressed && key === ' ' && currentMessage < messages.length - 1) {
    currentMessage++;
  }

  // Check for mouse hold
  if (currentMessage === 1) {
    if (mouseIsPressed) {
      let pressure = map(mouseY, 0, height, 0, 255); // Map mouseY to pressure
      background(255 - pressure); // Visualize pressure with background color
    } else {
      currentMessage++;
    }
  }

  // Display assigned number
  if (currentMessage === 2) {
    assignedNumber = floor(random(1, 31));
    text(assignedNumber, width / 2, height / 2);
  }
}

function keyPressed() {
  // Check for space bar press to move to the next message
  if (keyCode === 32 && currentMessage < messages.length - 1) {
    currentMessage++;
  }
}

