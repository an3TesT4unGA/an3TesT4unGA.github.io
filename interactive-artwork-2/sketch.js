let tower = [];
let blockWidth = 50;
let blockHeight = 20;
let baseHeight = 10;
let initialBlockSpeed = 2; // Initial speed of horizontal movement
let blockSpeedIncrease = 0.5; // Speed increase with each new block
let blockDirection = 1; // Direction of horizontal movement (-1 for left, 1 for right)
let gameOver = false;
let moveBlockTimer = 0;
let moveBlockDelay = 30; // Initial delay for moving block
let movingBlockX;

function setup() {
  createCanvas(400, 600);
  resetGame();
  movingBlockX = width / 2 - blockWidth / 2;
}

function draw() {
  background(220);
  
  if (!gameOver) {
    drawTower();
    fill(0);
    rect(width / 2 - blockWidth / 2, height - blockHeight * (tower.length), blockWidth, blockHeight); // Adjusted y-coordinate calculation
    fill(255, 0, 0);
    rect(movingBlockX, height - blockHeight * (tower.length + 1), blockWidth, blockHeight); // Adjusted y-coordinate calculation
    moveBlock();
  } else {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    text("Game Over!", width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode === 32 && !gameOver) {
    let x = movingBlockX;
    let y = height - blockHeight * (tower.length); // Adjusted y-coordinate calculation
    let block = { x, y };
    block.height = blockHeight;
    tower.push(block);
    checkGameOver();
    moveBlockTimer = moveBlockDelay;
    blockSpeedIncrease += 0.5; // Increase the speed increase
  }
}

function drawTower() {
  fill(0);
  for (let block of tower) {
    rect(block.x, block.y - block.height, blockWidth, block.height);
  }
}

function checkGameOver() {
  if (tower.length > 1) {
    let lastBlock = tower[tower.length - 1];
    let secondLastBlock = tower[tower.length - 2];
    let gap = abs(secondLastBlock.x + blockWidth / 2 - lastBlock.x - blockWidth / 2);
    if (gap > blockWidth / 2 || lastBlock.height !== blockHeight) {
      gameOver = true;
    }
  }
}

function resetGame() {
  tower = [];
  gameOver = false;
}

function moveBlock() {
  if (moveBlockTimer > 0) {
    moveBlockTimer--;
    return;
  }
  let newX = movingBlockX + blockDirection * (initialBlockSpeed + blockSpeedIncrease);
  if (newX < 0 || newX + blockWidth > width) {
    blockDirection *= -1;
  }
  movingBlockX += blockDirection * (initialBlockSpeed + blockSpeedIncrease);
}
