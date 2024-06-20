let gridSize;
let cellSize;
let grid;
let directions;
let dirIndex;
let x, y;
let gridOffsetX, gridOffsetY;

function setup() {
  gridSize = prompt("Enter the grid size (e.g., 51 or 101):", "51");
  gridSize = parseInt(gridSize, 10);
  if (isNaN(gridSize) || gridSize <= 0) {
    gridSize = 51;
  }

  createCanvas(windowWidth, windowHeight); 
  background(255); 
  stroke(0); 
  strokeWeight(2); 
  
  // Calculate cell size and grid offsets to center the grid within the canvas
  cellSize = min(windowWidth, windowHeight) / gridSize;
  let totalGridSizePx = gridSize * cellSize; // Size of the entire grid in pixels
  
  gridOffsetX = (windowWidth - totalGridSizePx) / 2; // Center grid horizontally
  gridOffsetY = (windowHeight - totalGridSizePx) / 2; // Center grid vertically

  // Initialize the grid to track visited cells
  grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));

  // Define spiral directions
  directions = [
    [1, 0], // Right
    [0, 1], // Down
    [-1, 0], // Left
    [0, -1], // Up
  ];

  // Start at the top-left corner of the grid
  x = 0;
  y = 0;
  dirIndex = 0; // Start by moving to the right
  
  randomSeed(millis()); // Ensure unique random outcomes
}

function draw() {
  // Calculate drawing position based on grid offsets
  let startX = x * cellSize + gridOffsetX;
  let startY = y * cellSize + gridOffsetY;

  // Mark the current cell as visited
  grid[x][y] = true;

  let drawProbability = 0.5; // Probability of drawing a shape
  if (random() < drawProbability) { 
    let shapeDie = floor(random(1, 7)); // Randomly choose a shape to draw

    // Draw the selected shape
    switch (shapeDie) {
      case 1: // Horizontal line
        line(startX, startY + cellSize / 2, startX + cellSize, startY + cellSize / 2);
        break;
      case 2: // Vertical line
        line(startX + cellSize / 2, startY, startX + cellSize / 2, startY + cellSize);
        break;
      case 3: // Diagonal right (\)
        line(startX, startY, startX + cellSize, startY + cellSize);
        break;
      case 4: // Diagonal left (/)
        line(startX + cellSize, startY, startX, startY + cellSize);
        break;
      case 5: // X (cross)
        line(startX, startY, startX + cellSize, startY + cellSize);
        line(startX + cellSize, startY, startX, startY + cellSize);
        break;
      case 6: // Plus (+)
        line(startX + cellSize / 2, startY, startX + cellSize / 2, startY + cellSize);
        line(startX, startY + cellSize / 2, startX + cellSize, startY + cellSize / 2);
        break;
    }
  }

  // Calculate the next position in the current direction
  let newX = x + directions[dirIndex][0];
  let newY = y + directions[dirIndex][1];

  // If the new position is out of bounds or visited, change direction
  if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize || grid[newX][newY]) {
    dirIndex = (dirIndex + 1) % 4; // Change direction
    newX = x + directions[dirIndex][0];
    newY = y + directions[dirIndex][1];
  }

  // Update the current position for the next iteration
  x = newX;
  y = newY;

  // Stop the drawing loop if the grid is filled
  if (grid.every(row => row.every(cell => cell))) {
    noLoop(); // Stop the drawing loop
    saveCanvas('spiraldrawing', 'png'); // Save the final artwork
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Recalculate the cell size and offsets
  cellSize = min(windowWidth, windowHeight) / gridSize; 
  let totalGridSizePx = gridSize * cellSize; // Size of the entire grid
  
  gridOffsetX = (windowWidth - totalGridSizePx) / 2; // Center grid horizontally
  gridOffsetY = (windowHeight - totalGridSizePx) / 2; // Center grid vertically
}