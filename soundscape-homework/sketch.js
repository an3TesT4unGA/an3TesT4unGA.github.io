let userHasClicked = false;

let chainsawSound;
let chickensSound;
let waterfallSound;

let circleChainsawX;
let circleChainsawY;

let circleChickensX;
let circleChickensY;

let circleWaterfallX;
let circleWaterfallY;

function preload() {
  soundFormats('mp3', 'ogg');
  chainsawSound = loadSound('assets/chainsaw.wav');
  chickensSound = loadSound('assets/chickens.wav');
  waterfallSound = loadSound('assets/waterfall.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(48);
  textAlign(CENTER);
  textStyle(BOLD);

  circleChainsawX = random(width);
  circleChainsawY = random(height);

  circleChickensX = random(width);
  circleChickensY = random(height);

  circleWaterfallX = random(width);
  circleWaterfallY = random(height);
}

function draw() {
  background('hotpink');

  // circle(circleChainsawX, circleChainsawY, 200);
  // circle(circleChickensX, circleChickensY, 200);
  // circle(circleWaterfallX, circleWaterfallY, 200);

  if (!userHasClicked) {
    text('Click to start', width / 2, height / 2);
  } else {


    if (!chainsawSound.isPlaying()) {
      chainsawSound.play();
    }

    let distanceChainsaw = dist(mouseX, mouseY, circleChainsawX, circleChainsawY);
    let volumeChainsaw = map(distanceChainsaw, 0, 300, 1, 0);
    volumeChainsaw = constrain(volumeChainsaw, 0, 1);
    chainsawSound.setVolume(volumeChainsaw);

  
    if (!chickensSound.isPlaying()) {
      chickensSound.play();
    }

    let distanceChickens = dist(mouseX, mouseY, circleChickensX, circleChickensY);
    let volumeChickens = map(distanceChickens, 0, 300, 1, 0);
    volumeChickens = constrain(volumeChickens, 0, 1);
    chickensSound.setVolume(volumeChickens);


    if (!waterfallSound.isPlaying()) {
      waterfallSound.play();
    }

    let distanceWaterfall = dist(mouseX, mouseY, circleWaterfallX, circleWaterfallY);
    let volumeWaterfall = map(distanceWaterfall, 0, 300, 1, 0);
    volumeWaterfall = constrain(volumeWaterfall, 0, 1);
    waterfallSound.setVolume(volumeWaterfall);
  }
}

function mouseClicked() {
  userHasClicked = true;
}
