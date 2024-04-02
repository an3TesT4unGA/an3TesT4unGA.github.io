let objects = [];
let targets = [];
let completed = false;
let mouseOffset;
let instructions = "Drag objects to their target areas.";
let discoMode = false;
const BUFFER = 10; // Constant for buffer distance
let customImage; // Variable to store the custom image

function preload() {
  // Load your custom image
  customImage = loadImage('path/to/your/image.png');
}

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
    fill(255); // Set text color to white
    textSize(24); // Set text size
    text("Congratulations! You've finished the level.", width / 2, height / 2); // Draw text at center
  } else {
    textSize(16); // Reset text size
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
  
  // Check for completion
  completed = checkCompletion();
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
    let obj;
    if (i === 0) {
      // Use custom image for the first object
      obj = new DraggableObject(x, y, w, h, customImage);
    } else {
      // Use regular shapes for other objects
      obj = new DraggableObject(x, y, w, h, null, shape);
    }
    obj.initialX = x; 
    obj.initialY = y; 
    objects.push(obj);
  }

  for (let obj of objects) {
    let targetX, targetY;
    do {
      targetX = random(width - maxSize);
      targetY = random(height - maxSize);
    } while (checkOverlap(targetX, targetY, obj.w, obj.h));
    
    targets.push(new TargetArea(targetX, targetY, obj.w, obj.h, obj.shape));
  }
}

function checkOverlap(x, y, w, h) {
  for (let target of targets) {
    if (x < target.x + target.w && x + w > target.x && y < target.y + target.h && y + h > target.y) {
      return true;
    }
  }
  return false;
}

function checkCompletion() {
  for (let obj of objects) {
    let placed = false;
    for (let target of targets) {
      if (target.contains(obj)) {
        placed = true;
        break;
      }
    }
    if (!placed) {
      return false;
    }
  }
  return true;
}

class DraggableObject {
  constructor(x, y, w, h, img, shape) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img; // Image property
    this.shape = shape;
    this.dragging = false;
  }
  
  display() {
    if (this.img) {
      image(this.img, this.x, this.y, this.w, this.h); // Draw image
    } else {
      fill(255, 0, 0); // Default to red if image is not provided
      rect(this.x, this.y, this.w, this.h);
    }
  }
  
  contains(px, py) {
    if (this.img) {
      return px > this.x && px < this.x + this.w &&
             py > this.y && py < this.y + this.h;
    } else {
      return px > this.x && px < this.x + this.w &&
             py > this.y && py < this.y + this.h;
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
