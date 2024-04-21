let riverSound;
let userHasClicked = false;


function preload() {
  soundFormats('mp3', 'ogg');
  riverSound = loadSound('assets/river.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  riverSound.setVolume(0.5);
}

function draw() {
  background('hotpink');

  if(userHasClicked == false){
    text('Click to start', width/2, height/2)
  }
  else{
    background('blue')

    // put all the code after the user has clicked

    if(riverSound.isPlaying() == false){
      riverSound.play();
    }

    let targetVolume = map(
      mouseX,
      0,
      width,
      0,
      1
    )
    
    riverSound.setVolume(targetVolume);

  }
}

function mouseClicked(){
  userHasClicked = true;
}