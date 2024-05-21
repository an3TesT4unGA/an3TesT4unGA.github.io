let mouth;
let teeth = [];
let draggingTooth = null;
let offsetX = 0;
let offsetY = 0;
let snapRadius = 20; // Define snap radius
let originalPositions = [];

let screams = [];

let drillSound1;
let drillSound2;
let drillSound3;

// Load the mouth and individual tooth images
function preload() {
  mouth = loadImage('images/x-ray.png'); // Load mouth image
  // Load tooth images into an array
  let toothImages = [
    loadImage('images/1/1-1.png'),
    loadImage('images/1/1-2.png'),
    loadImage('images/1/1-3.png'),
    loadImage('images/1/1-4.png'),

    loadImage('images/2/2-1.png'),
    loadImage('images/2/2-2.png'),
    loadImage('images/2/2-3.png'),
    loadImage('images/2/2-4.png'),

    loadImage('images/3/3-1.png'),
    loadImage('images/3/3-2.png'),
    loadImage('images/3/3-3.png'),
    loadImage('images/3/3-4.png'),

    loadImage('images/4/4-1.png'),
    loadImage('images/4/4-2.png'),
    loadImage('images/4/4-3.png'),
    loadImage('images/4/4-4.png'),

    loadImage('images/5/5-1.png'),
    loadImage('images/5/5-2.png'),
    loadImage('images/5/5-3.png'),
    loadImage('images/5/5-4.png'),

    loadImage('images/6/6-1.png'),
    loadImage('images/6/6-2.png'),
    loadImage('images/6/6-3.png'),
    loadImage('images/6/6-4.png'),

    loadImage('images/7/7-1.png'),
    loadImage('images/7/7-2.png'),
    loadImage('images/7/7-3.png'),
    loadImage('images/7/7-4.png'),

    loadImage('images/8/8-1.png'),
    loadImage('images/8/8-2.png'),
    loadImage('images/8/8-3.png'),
    loadImage('images/8/8-4.png')
  ];

  // Initialize tooth positions and dimensions
  teeth = [
    { 
      image: toothImages[0], 
      x: random(width), 
      y: random(height), 
      correctX: 970, 
      correctY: 415, 
      isDragged: false 
    },
    { 
      image: toothImages[1], 
      x: random(width), 
      y: random(height), 
      correctX: 1018, 
      correctY: 415, 
      isDragged: false 
    },
    { 
      image: toothImages[2], 
      x: random(width), 
      y: random(height), 
      correctX: 980, 
      correctY: 585, 
      isDragged: false 
    },
    { 
      image: toothImages[3], 
      x: random(width), 
      y: random(height), 
      correctX: 1007, 
      correctY: 590, 
      isDragged: false 
    },


    { 
      image: toothImages[4], 
      x: random(width), 
      y: random(height), 
      correctX: 920, 
      correctY: 420, 
      isDragged: false 
    },
    { 
      image: toothImages[5], 
      x: random(width), 
      y: random(height), 
      correctX: 1068, 
      correctY: 425, 
      isDragged: false 
    },
    { 
      image: toothImages[6], 
      x: random(width), 
      y: random(height), 
      correctX: 940, 
      correctY: 579, 
      isDragged: false 
    },
    { 
      image: toothImages[7], 
      x: random(width), 
      y: random(height), 
      correctX: 1045, 
      correctY: 590, 
      isDragged: false 
    },


    { 
      image: toothImages[8], 
      x: random(width), 
      y: random(height), 
      correctX: 870, 
      correctY: 410, 
      isDragged: false 
    },
    { 
      image: toothImages[9], 
      x: random(width), 
      y: random(height), 
      correctX: 1108, 
      correctY: 410, 
      isDragged: false 
    },
    { 
      image: toothImages[10], 
      x: random(width), 
      y: random(height), 
      correctX: 905, 
      correctY: 590, 
      isDragged: false 
    },
    { 
      image: toothImages[11], 
      x: random(width), 
      y: random(height), 
      correctX: 1079, 
      correctY: 605, 
      isDragged: false 
    },


    { 
      image: toothImages[12], 
      x: random(width), 
      y: random(height), 
      correctX: 830, 
      correctY: 400, 
      isDragged: false 
    },
    { 
      image: toothImages[13], 
      x: random(width), 
      y: random(height), 
      correctX: 1153, 
      correctY: 415, 
      isDragged: false 
    },
    { 
      image: toothImages[14], 
      x: random(width), 
      y: random(height), 
      correctX: 855, 
      correctY: 595, 
      isDragged: false 
    },
    { 
      image: toothImages[15], 
      x: random(width), 
      y: random(height), 
      correctX: 1120, 
      correctY: 600, 
      isDragged: false 
    },


    { 
        image: toothImages[16], 
        x: random(width), 
        y: random(height), 
        correctX: 795, 
        correctY: 395, 
        isDragged: false 
      },
      { 
        image: toothImages[17], 
        x: random(width), 
        y: random(height), 
        correctX: 1200, 
        correctY: 415, 
        isDragged: false 
      },
      { 
        image: toothImages[18], 
        x: random(width), 
        y: random(height), 
        correctX: 805, 
        correctY: 589, 
        isDragged: false 
      },
      { 
        image: toothImages[19], 
        x: random(width), 
        y: random(height), 
        correctX: 1170, 
        correctY: 595, 
        isDragged: false 
      },


      { 
        image: toothImages[20], 
        x: random(width), 
        y: random(height), 
        correctX: 723, 
        correctY: 415, 
        isDragged: false 
      },
      { 
        image: toothImages[21], 
        x: random(width), 
        y: random(height), 
        correctX: 1250, 
        correctY: 440, 
        isDragged: false 
      },
      { 
        image: toothImages[22], 
        x: random(width), 
        y: random(height), 
        correctX: 718, 
        correctY: 583, 
        isDragged: false 
      },
      { 
        image: toothImages[23], 
        x: random(width), 
        y: random(height), 
        correctX: 1220, 
        correctY: 585, 
        isDragged: false 
      },


      { 
        image: toothImages[24], 
        x: random(width), 
        y: random(height), 
        correctX: 655, 
        correctY: 415, 
        isDragged: false 
      },
      { 
        image: toothImages[25], 
        x: random(width), 
        y: random(height), 
        correctX: 1325, 
        correctY: 415, 
        isDragged: false 
      },
      { 
        image: toothImages[26], 
        x: random(width), 
        y: random(height), 
        correctX: 630, 
        correctY: 577, 
        isDragged: false 
      },
      { 
        image: toothImages[27], 
        x: random(width), 
        y: random(height), 
        correctX: 1305, 
        correctY: 584, 
        isDragged: false 
      },


      { 
        image: toothImages[28], 
        x: random(width), 
        y: random(height), 
        correctX: 585, 
        correctY: 400, 
        isDragged: false 
      },
      { 
        image: toothImages[29], 
        x: random(width), 
        y: random(height), 
        correctX: 1382, 
        correctY: 405, 
        isDragged: false 
      },
      { 
        image: toothImages[30], 
        x: random(width), 
        y: random(height), 
        correctX: 563, 
        correctY: 560, 
        isDragged: false 
      },
      { 
        image: toothImages[31], 
        x: random(width), 
        y: random(height), 
        correctX: 1378, 
        correctY: 561, 
        isDragged: false 
      }
  ];

  // Load multiple scream sounds into the screams array
  for (let i = 1; i <= 5; i++) {
    screams.push(loadSound('2-scream-sound/scream1.mp3'));
    screams.push(loadSound('2-scream-sound/scream2.mp3'));
    screams.push(loadSound('2-scream-sound/scream3.mp3'));
    screams.push(loadSound('2-scream-sound/scream4.mp3'));
    screams.push(loadSound('2-scream-sound/scream5.mp3'));
  }
  
  drillSound1 = loadSound('1-drill-sound/drill1.mp3');
  drillSound2 = loadSound('1-drill-sound/drill2.mp3');
  drillSound3 = loadSound('1-drill-sound/drill3.mp3');
  


  // Store original positions of teeth
  originalPositions = teeth.map(tooth => ({ x: tooth.x, y: tooth.y }));
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Set canvas size
  
    // Adjust tooth positions based on canvas size
    teeth.forEach((tooth) => {
      let isValidPosition = false;
      while (!isValidPosition) {
        tooth.x = random(100, width - 100); // Random x-coordinate away from the edges
        tooth.y = random(100, height - 10); // Random y-coordinate away from the edges
        // Check if the tooth position overlaps with the x-ray image
        if (!isPointInsideImage(tooth.x, tooth.y, mouth)) {
          isValidPosition = true;
        }
      }
    });
  }
  
  // Function to check if a point (x, y) is inside an image
  function isPointInsideImage(x, y, image) {
    let xrayX = (width - image.width) / 2;
    let xrayY = (height - image.height) / 2;
    return x >= xrayX && x <= xrayX + image.width && y >= xrayY && y <= xrayY + image.height;
  }
  
  let allTeethPlacedCorrectly = false;
  let congratsMessage = "CONGRATULATIONS";

  function draw() {
    // Clear the canvas
    background(20);
    
    // Draw the mouth image
    let xrayX = (width - mouth.width) / 2;
    let xrayY = (height - mouth.height) / 2;
    image(mouth, xrayX, xrayY);
  
    // Draw each tooth at its current position
    teeth.forEach((tooth) => {
      image(tooth.image, tooth.x, tooth.y, tooth.image.width, tooth.image.height);
  
      // Draw the correct position of the tooth as a visual indicator
      if (!isToothInMouth(tooth)) {
          // If tooth is not in the mouth, draw the tooth image at the correct position
          push();
          tint(255, 255, 255, 100);
          image(tooth.image, tooth.correctX, tooth.correctY, tooth.image.width, tooth.image.height);
          pop();
        }
      });
  
      fill(255, 0, 0, redness); // Red color with opacity determined by redness
      rect(0, 0, width, height); // Cover the entire canvas
      
    // If a tooth is being dragged, follow the mouse
    if (draggingTooth) {
      draggingTooth.x = mouseX + offsetX;
      draggingTooth.y = mouseY + offsetY;
    }
    
    allTeethPlacedCorrectly = teeth.every(tooth => isToothInMouth(tooth));

    // Display "Congratulations" message if all teeth are placed correctly
    if (allTeethPlacedCorrectly) {
      textSize(64);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      text(congratsMessage, width / 2, height / 2);
    }
    // Display "Game Over" text if redness is 100%
    if (redness >= 255) {
      textSize(64);
      fill(255);
      textAlign(CENTER, CENTER);
      text('YOU FAILED', width / 2, height / 2);
    }
  }
  

function mousePressed() {
  // Check if the mouse is within any tooth's boundaries
  if (!draggingTooth) {
    teeth.forEach((tooth) => {
      if (
        mouseX >= tooth.x &&
        mouseX <= tooth.x + tooth.image.width &&
        mouseY >= tooth.y &&
        mouseY <= tooth.y + tooth.image.height
      ) {
        // Start dragging this tooth
        draggingTooth = tooth;
        offsetX = tooth.x - mouseX;
        offsetY = tooth.y - mouseY;
        tooth.isDragged = true;

        // Play drilling sound
        playDrillingSound(draggingTooth);

        // Break out of the loop after finding the first tooth to drag
        return;
      }
    });
  }
}

let incorrectTeethCount = 0;

function mouseReleased() {
  if (draggingTooth) {
    // Check if the tooth is placed correctly in the mouth
    if (isToothInMouth(draggingTooth)) {
      // Stop the drilling sound
      stopDrillingSound(draggingTooth);

      // Snap tooth to its correct position
      snappingToothPosition(draggingTooth);
    } else {
      // If not snapped to the correct position, remove it from the teeth array
      const index = teeth.findIndex(t => t === draggingTooth);
      teeth.splice(index, 1);

      // Trigger consequences for incorrect placement
      triggerIncorrectPlacementConsequences();

      // Play drilling sound on loop for incorrect placement
      playDrillingSound(draggingTooth);
    }

    draggingTooth.isDragged = false;
    draggingTooth = null; // Stop dragging
  }
}


let redness = 0; // Variable to keep track of redness level

function triggerIncorrectPlacementConsequences() {
  // Increase redness level by 20%
  redness += 51;
  
  // Select a random scream sound from the array
  let randomScream = random(screams);

  // Play the selected scream sound
  randomScream.play();

  
}

function playDrillingSound(tooth) {
  // Select a random drilling sound
  let randomDrillSound = random([drillSound1, drillSound2, drillSound3]);
  
  // Loop the selected drilling sound
  tooth.drillingSound = randomDrillSound;
  tooth.drillingSound.loop();
}

function stopDrillingSound(tooth) {
  // Stop the drilling sound associated with this tooth
  if (tooth.drillingSound) {
    tooth.drillingSound.stop();
    tooth.drillingSound = null;
  }
}

function stopDrillingSound() {
  // Stop all drilling sounds
  drillSound1.stop();
  drillSound2.stop();
  drillSound3.stop();
}

function resetToothPosition(tooth) {
  // Find the index of the tooth
  const index = teeth.findIndex(t => t === tooth);
  // Reset tooth position to its original position
  tooth.x = originalPositions[index].x;
  tooth.y = originalPositions[index].y;
}

function snappingToothPosition(tooth) {
  // Snap tooth to its correct position
  tooth.x = tooth.correctX;
  tooth.y = tooth.correctY;
}

function isToothInMouth(tooth) {
  // Calculate distance between tooth and its correct position
  let distance = dist(tooth.x, tooth.y, tooth.correctX, tooth.correctY);
  // Check if the distance is within the snap radius
  // Here, we also add a check if the distance is within 200 pixels
  return distance <= snapRadius && distance <= 200;
}