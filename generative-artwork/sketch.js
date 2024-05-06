let gridSize = 101; // Set the grid size
let cellSize;
let grid;
let directions;
let dirIndex;
let x, y;

function setup() {
  createCanvas(1010, 1010); // Create canvas with enough space for the 51x51 grid
  background(255); // Set the background to white
  strokeWeight(2); // Set line thickness

  // Calculate cell size
  cellSize = width / gridSize;

  // Initialize the grid with all cells marked as unvisited
  grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));

  // Define the spiral directions: right, down, left, up
  directions = [
    [1, 0], // Right
    [0, 1], // Down
    [-1, 0], // Left
    [0, -1], // Up
  ];

  // Start at the top-left corner
  x = 0;
  y = 0;
  dirIndex = 0; // Start by moving to the right
}

function draw() {
  // Mark the current cell as visited, whether or not a shape is drawn
  grid[x][y] = true;

  let drawDie = floor(random(1, 7)); // Roll dice to determine if a shape should be drawn
  if (drawDie % 2 === 0) { // If the dice roll is even, draw a shape
    let shapeDie = floor(random(1, 7)); // Determine which shape to draw (1-6)
    let startX = x * cellSize;
    let startY = y * cellSize;

    // Draw the shape based on the dice roll
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

  // If the new position is out of bounds or the cell is already occupied, change direction
  if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize || grid[newX][newY]) {
    dirIndex = (dirIndex + 1) % 4; // Cycle through directions
    newX = x + directions[dirIndex][0];
    newY = y + directions[dirIndex][1];
  }

  // Update the current position for the next iteration
  x = newX;
  y = newY;

  // Stop drawing if the entire grid is filled or the spiral can't continue
  if (grid.every(row => row.every(cell => cell))) {
    noLoop(); // Ends the drawing loop if the grid is full or blocked
  }
}
