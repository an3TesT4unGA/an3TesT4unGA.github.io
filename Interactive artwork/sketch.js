let puzzleImage;
let puzzlePieces = [];
let selectedPiece = null;

function preload() {
    puzzleImage = loadImage('Interactive artwork/Flower-1.png');
}

function setup() {
    createCanvas(puzzleImage.width, puzzleImage.height);
}

function draw() {
    background(33, 21, 36);
    image(puzzleImage, 0, 0);

    for (let piece of puzzlePieces) {
        fill(255);
        rect(piece.x, piece.y, piece.width, piece.height);
    }
}