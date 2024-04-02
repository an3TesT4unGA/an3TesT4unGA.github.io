let rows = 20;
let cols = 20;
let cellSize = 30;
let minesCount = 80;

let grid = [];
let gameOver = false;
let clickedCells = [];
let revealMode = true; // Flagging mode by default

function setup() {
  createCanvas(cols * cellSize, rows * cellSize + 40); // Increased canvas height to accommodate buttons
  initializeGrid();
  placeMines(minesCount);
  calculateNumbers();
  createButtons(); // Create flag and reveal buttons
}

function draw() {
  background(220);
  drawGrid();
}

function mousePressed() {
  if (!gameOver) {
    let i = floor(mouseY / cellSize);
    let j = floor(mouseX / cellSize);

    if (i < rows && j < cols) { // Check if mouse is within grid bounds
      if (revealMode) {
        if (!grid[i][j].revealed && !grid[i][j].flagged) {
          revealCell(i, j);
          clickedCells.push([i, j]);
          if (grid[i][j].mine) {
            gameOver = true;
            revealAllMines();
          }
        }
      } else {
        if (!grid[i][j].revealed) {
          grid[i][j].flagged = !grid[i][j].flagged;
        }
      }
    }
  }
}

function initializeGrid() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        revealed: false,
        mine: false,
        flagged: false,
        number: 0
      });
    }
    grid.push(row);
  }
}

function placeMines(count) {
  for (let i = 0; i < count; i++) {
    let x = floor(random(cols));
    let y = floor(random(rows));
    if (!grid[y][x].mine) {
      grid[y][x].mine = true;
    } else {
      i--;
    }
  }
}

function calculateNumbers() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!grid[i][j].mine) {
        let total = 0;
        for (let ii = -1; ii <= 1; ii++) {
          for (let jj = -1; jj <= 1; jj++) {
            let ni = i + ii;
            let nj = j + jj;
            if (ni >= 0 && nj >= 0 && ni < rows && nj < cols && grid[ni][nj].mine) {
              total++;
            }
          }
        }
        grid[i][j].number = total;
      }
    }
  }
}

function drawGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * cellSize;
      let y = i * cellSize;

      if (grid[i][j].revealed || isClicked(i, j)) {
        fill(220, 150, 180); // Darker pink
      } else {
        fill(255, 192, 203); // Light pink
      }
      rect(x, y, cellSize, cellSize);

      if (grid[i][j].revealed) {
        if (grid[i][j].mine) {
          fill(128, 0, 128); // Purple
          ellipse(x + cellSize / 2, y + cellSize / 2, cellSize * 0.8);
        } else {
          fill(200);
          rect(x, y, cellSize, cellSize);
          if (grid[i][j].number !== 0) {
            fill(0);
            textAlign(CENTER, CENTER);
            textSize(18);
            text(grid[i][j].number, x + cellSize / 2, y + cellSize / 2 + 8);
          }
        }
      } else {
        if (grid[i][j].flagged) {
          fill(255, 0, 0);
          rect(x + cellSize * 0.4, y + cellSize * 0.1, cellSize * 0.2, cellSize * 0.6);
          rect(x + cellSize * 0.1, y + cellSize * 0.4, cellSize * 0.8, cellSize * 0.2);
        }
      }
    }
  }
}

function revealCell(i, j) {
  if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j].revealed) {
    return;
  }

  grid[i][j].revealed = true;
  if (grid[i][j].number === 0) {
    for (let ii = -1; ii <= 1; ii++) {
      for (let jj = -1; jj <= 1; jj++) {
        revealCell(i + ii, j + jj);
      }
    }
  }
}

function revealAllMines() {
  explosionSound.play(); // Play explosion sound
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j].mine) {
        grid[i][j].revealed = true;
      }
    }
  }
}

function isClicked(i, j) {
  for (let c of clickedCells) {
    if (c[0] === i && c[1] === j) {
      return true;
    }
  }
  return false;
}

function createButtons() {
  let revealButton = createButton('Reveal');
  revealButton.position(10, rows * cellSize + 10);
  revealButton.mousePressed(() => {
    revealMode = true;
  });

  let flagButton = createButton('Flag');
  flagButton.position(revealButton.width + 20, rows * cellSize + 10);
  flagButton.mousePressed(() => {
    revealMode = false;
  });
}
