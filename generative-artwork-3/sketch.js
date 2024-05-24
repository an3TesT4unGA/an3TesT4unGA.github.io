let img;
let branches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = createImage(width, height);
  generateInitialBranch();
  background(250);
}

function draw() {
  image(img, 0, 0);

  // Generate next branch if there are still branches to be drawn
  if (branches.length > 0) {
    generateNextBranch();
  }
}

function generateInitialBranch() {
  let x = width / 2;
  let y = height / 2;

  let angle = random(TWO_PI); // Random starting angle
  let len = 10; // Initial branch length

  branches.push({ x, y, angle, len });
}

function generateNextBranch() {
  let branch = branches.shift(); // Get the next branch to generate

  let newX = branch.x + cos(branch.angle) * branch.len;
  let newY = branch.y + sin(branch.angle) * branch.len;

 // Check if the new branch coordinates are within the canvas boundaries
 if (newX >= 0 && newX <= width && newY >= 0 && newY <= height) {
  let branchesCount = int(random(1, 3)); // Random number of branches per node
  for (let i = 0; i < branchesCount; i++) {
    let newAngle = branch.angle + random(-PI / 4, PI / 4); // Randomize branch angle
    let newLen = branch.len * random(0.5, 2); // Randomize branch length

    // Draw branch
    let weight = random(0.5, 2);
    strokeWeight(random);
 
    // Random shade of gray for each branchs
    stroke(0, 20);

    line(branch.x, branch.y, newX, newY);
    // Add new branch to the list for further generation
    branches.push({ x: newX, y: newY, angle: newAngle, len: newLen });
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('koks', 'png');
  }
}