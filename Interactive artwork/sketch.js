let backgroundImage;
let boxImage;
let puzzlePieceImages = [];
let puzzlePiecePositions = [];
let targetPositions = [];

let selectedPiece = null;
let offsetX, offsetY;
let filename;

function preload() {
  backgroundImage = loadImage('./Background.png');
  boxImage = loadImage('./1st_box.png');

  // Load puzzle piece images
  for (let i = 1; i <= 9; i++) {
    filename = "./1st-puzzle/" + i + ".png"; // Corrected to remove the 'let' declaration
    puzzlePieceImages.push(loadImage(filename));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let boxWidth = boxImage.width;
  let boxHeight = boxImage.height;
  let startX = width / 2 - boxWidth / 2 + 50;
  let startY = height / 2 - boxHeight / 2 + 50;
  let spacingX = (boxWidth - 100) / 2;
  let spacingY = (boxHeight - 100) / 2;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      targetPositions.push(createVector(startX + j * spacingX, startY + i * spacingY));
    }
  }

  // Randomize puzzle piece positions
  puzzlePiecePositions = shuffle(targetPositions); // Removed 'slice()' from shuffle() function call
}

function draw() {
  // Display the background image
  image(backgroundImage, 0, 0, width, height);
  image(boxImage, width/2 - boxImage.width/2, height/2 - boxImage.height/2);

  // Display puzzle pieces at their positions
  for (let i = 0; i < puzzlePieceImages.length; i++) {
    image(puzzlePieceImages[i], puzzlePiecePositions[i].x - puzzlePieceImages[i].width / 2, 
    puzzlePiecePositions[i].y - puzzlePieceImages[i].height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    // Check if the mouse is over any puzzle piece
    for (let i = 0; i < puzzlePiecePositions.length; i++) {
        if (dist(mouseX, mouseY, puzzlePiecePositions[i].x, puzzlePiecePositions[i].y) < puzzlePieceImages[i].width / 2) {
         selectedPiece = puzzlePiecePositions[i];
        
         offsetX = mouseX - selectedPiece.x;
         offsetY = mouseY - selectedPiece.y;
         break;
        }
    }
}

function mouseDragged() {
    if (selectedPiece) {
        selectedPiece.x = mouseX - offsetX;
        selectedPiece.y = mouseY - offsetY;
    }
}

function mouseReleased() {
    if (selectedPiece) {
        for (let i = 0; i < targetPositions.length; i++) {
            if (dist(selectedPiece.x, selectedPiece.y, targetPositions[i].x, targetPositions[i].y) < 50) {
                selectedPiece.x = targetPositions[i].x;
                selectedPiece.y = targetPositions[i].y;
                break;
            }
        }
    }
    selectedPiece = null;
}
