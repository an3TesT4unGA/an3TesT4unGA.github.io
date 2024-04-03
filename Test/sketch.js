let pieces = [];
let selectedPiece = null;
let offsetX, offsetY;

function setup() {
  createCanvas(800, 600);
  generatePieces(6); // Number of pieces to generate
}

function draw() {
  background(255);
  
  // Display all puzzle pieces
  for (let piece of pieces) {
    piece.display();
  }
}

function generatePieces(numPieces) {
  let margin = 20;
  let pieceSize = width / numPieces - margin;
  
  for (let i = 0; i < numPieces; i++) {
    let x = random(width - pieceSize);
    let y = random(height - pieceSize);
    let piece = new PuzzlePiece(x, y, pieceSize);
    pieces.push(piece);
  }
}

function mousePressed() {
  for (let piece of pieces) {
    if (piece.contains(mouseX, mouseY)) {
      selectedPiece = piece;
      offsetX = mouseX - selectedPiece.x;
      offsetY = mouseY - selectedPiece.y;
      break;
    }
  }
}

function mouseDragged() {
  if (selectedPiece !== null) {
    selectedPiece.x = mouseX - offsetX;
    selectedPiece.y = mouseY - offsetY;
  }
}

function mouseReleased() {
  selectedPiece = null;
}

class PuzzlePiece {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(random(255), random(255), random(255));
  }
  
  display() {
    stroke(0);
    fill(this.color);
    rect(this.x, this.y, this.size, this.size, 10);
  }
  
  contains(px, py) {
    return (px > this.x && px < this.x + this.size &&
            py > this.y && py < this.y + this.size);
  }
}
