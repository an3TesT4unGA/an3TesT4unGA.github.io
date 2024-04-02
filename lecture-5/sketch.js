let objects = [];
let targets = [];
let completed = false;
let mouseOffset;
let instructions = "Drag objects to their target areas.";
let discoMode = false;
const BUFFER = 10; // Constant for buffer distance

function setup() {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  createCanvas(canvasWidth, canvasHeight);
  initializeGame();
  
  const resetButton = createButton('Reset');
  resetButton.position(10, canvasHeight - 40); // Position reset button relative to canvas size
  resetButton.mousePressed(resetGame);
}

function draw() {
  if (!discoMode) {
    background(240);
  } else {
    background(random(255), random(255), random(255)); // Simplified disco mode background
  }
  
  fill(0);
  textAlign(CENTER);
  
  if (completed) {
    text("Congratulations! You've finished the level.", width / 2, height / 2);
    discoMode = true;
  } else {
    text(instructions, width / 2, 20);
  }

  targets.forEach(target => target.display());
  
  objects.forEach(obj => {
    obj.display();
    if (obj.dragging) {
      obj.x = mouseX - mouseOffset.x;
      obj.y = mouseY - mouseOffset.y;
    }
  });
  
  const allCorrectlyPlaced = objects.every((obj, i) => targets[i].contains(obj));
  completed = allCorrectlyPlaced;
}

function mousePressed() {
  for (let obj of objects) {
    if (obj.contains(mouseX, mouseY)) {
      obj.dragging = true;
      mouseOffset = createVector(mouseX - obj.x, mouseY - obj.y);
      return;
    }
  }
}

function mouseReleased() {
  for (let obj of objects) {
    if (obj.dragging) {
      obj.dragging = false;
      let placed = false;
      for (let i = 0; i < targets.length; i++) {
        const centerX = targets[i].x + targets[i].w / 2;
        const centerY = targets[i].y + targets[i].h / 2;
        if (dist(obj.x + obj.w / 2, obj.y + obj.h / 2, centerX, centerY) < BUFFER) {
          obj.x = centerX - obj.w / 2;
          obj.y = centerY - obj.h / 2;
          placed = true;
          break;
        }
      }
      if (!placed) {
        obj.x = obj.initialX;
        obj.y = obj.initialY;
      }
    }
  }
}

function resetGame() {
  completed = false;
  initializeGame();
}

function initializeGame() {
  instructions = "Drag objects to their target areas.";
  objects = [];
  targets = [];
  
  const minObjects = 1;
  const maxObjects = 20;
  const numObjects = Math.floor(random(minObjects, maxObjects + 1));

  const minSize = 50; 
  const maxSize = 100; 

  const shapes = ['rectangle', 'ellipse'];

  for (let i = 0; i < numObjects; i++) {
    const x = random(width - maxSize);
    const y = random(height - maxSize);
    const w = random(minSize, maxSize);
    const h = random(minSize, maxSize);
    const shape = random(shapes);
    const obj = new DraggableObject(x, y, w, h, color(random(255), random(255), random(255)), shape);
    obj.initialX = x; 
    obj.initialY = y; 
    objects.push(obj);
  }

  for (let obj of objects) {
    const x = random(width - obj.w);
    const y = random(height - obj.h);
    targets.push(new TargetArea(x, y, obj.w, obj.h, obj.shape)); // Create target areas mirroring objects
  }
}

function checkOverlap(x, y, w, h) {
  return targets.some(target => x < target.x + target.w && x + w > target.x && y < target.y + target.h && y + h > target.y);
}

class DraggableObject {
  constructor(x, y, w, h, col, shape) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = col;
    this.shape = shape;
    this.dragging = false;
  }
  
  display() {
    fill(this.col);
    if (this.shape === 'rectangle') {
      rect(this.x, this.y, this.w, this.h);
    } else if (this.shape === 'ellipse') {
      ellipse(this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
    }
  }
  
  contains(px, py) {
    if (this.shape === 'rectangle') {
      return px > this.x && px < this.x + this.w &&
             py > this.y && py < this.y + this.h;
    } else if (this.shape === 'ellipse') {
      const dx = px - (this.x + this.w / 2);
      const dy = py - (this.y + this.h / 2);
      return dx * dx / (this.w * this.w / 4) + dy * dy / (this.h * this.h / 4) < 1;
    }
  }
}

class TargetArea {
  constructor(x, y, w, h, shape) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color(200);
    this.shape = shape; 
  }
  
  display() {
    fill(this.col);
    noStroke();
    if (this.shape === 'rectangle') {
      rect(this.x, this.y, this.w, this.h);
    } else if (this.shape === 'ellipse') {
      ellipse(this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
    }
  }
  
  contains(obj) {
    return obj.x > this.x && obj.x + obj.w < this.x + this.w &&
           obj.y > this.y && obj.y + obj.h < this.y + this.h;
  }
}
