
let angle = 0;
let speed = 0.02;

let orbitRadius = 180;
let paused = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(16, 20, 38);

  let centerX = width / 2;
  let centerY = height / 2;

  // Draw the orbit path
  noFill();
  stroke(120, 140, 180);
  strokeWeight(2);
  circle(centerX, centerY, orbitRadius * 2);

  // Draw the sun
  noStroke();
  fill(255, 190, 60);
  circle(centerX, centerY, 100);

  // Calculate the planet position using cosine and sine
  let planetX = centerX + orbitRadius * cos(angle);
  let planetY = centerY + orbitRadius * sin(angle);

  // Draw the planet
  fill(70, 160, 255);
  circle(planetX, planetY, 40);

  // Calculate the moon position relative to the planet
  let moonX = planetX + 30 * cos(angle * 3);
  let moonY = planetY + 30 * sin(angle * 3);

  // Draw the moon
  fill(220);
  circle(moonX, moonY, 12);

  // Update angle only if the animation is running
  if (!paused) {
    angle += speed;
  }

  // Display animation information
  fill(255);
  noStroke();
  textSize(16);
  text("Speed: " + speed.toFixed(3), 20, 30);
  text(paused ? "PAUSED" : "RUNNING", 20, 55);

  textSize(14);
  text("SPACE = Pause/Resume", 20, height - 60);
  text("UP = Faster | DOWN = Slower", 20, height - 35);
}

// Keyboard controls
function keyPressed() {

  // Toggle pause
  if (key === ' ') {
    paused = !paused;
  }

  // Increase speed
  if (keyCode === UP_ARROW) {
    speed += 0.005;
  }

  // Decrease speed
  if (keyCode === DOWN_ARROW) {
    speed = max(0.005, speed - 0.005);
  }
}