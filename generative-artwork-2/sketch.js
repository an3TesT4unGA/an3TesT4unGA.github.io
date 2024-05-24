// Particle class to define the behavior of each particle
class Particle {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = p5.Vector.random2D().mult(random(1, 1)); // Random initial direction and speed
      this.acceleration = createVector(0, 0); // No initial acceleration
      this.size = random(1, 1); // Random size for the particles
      this.lifespan = random(10, 400); // Lifespan of the particle
      this.color = color(200, 131, 235, 150); // Random semi-transparent color
    }
  
    // Update the particle's position based on its velocity
    update() {
      this.velocity.add(this.acceleration); // Add acceleration to velocity
      this.position.add(this.velocity); // Move the particle
      this.acceleration.mult(0); // Reset acceleration
      this.lifespan -= 2; // Decrease lifespan
    }
  
    // Apply a force to the particle
    applyForce(force) {
      this.acceleration.add(force);
    }
  
    // Bounce off the edges of the canvas
    checkEdges() {
      if (this.position.x < 0 || this.position.x > width) {
        this.velocity.x *= -1; // Reverse x-direction
      }
      if (this.position.y < 0 || this.position.y > height) {
        this.velocity.y *= -2; // Reverse y-direction
      }
    }
  
    // Display the particle
    display() {
      noStroke();
      fill(this.color);
      ellipse(this.position.x, this.position.y, this.size); // Draw the particle
    }
  
    // Check if the particle is still alive
    isDead() {
      return this.lifespan < 0;
    }
  }
  
  let particles = [];
  
  function setup() {
    createCanvas(windowWidth, windowHeight); // Use the full window size
    background(5); // Start with a black background
  }
  
  function draw() {
    for (let i = 0; i < 1; i++) {
      // Add more particles per frame for more movement
      let p = new Particle(random(width), random(height)); // Start at random positions
      particles.push(p); // Add to the array
    }
  
    for (let p of particles) {
      let randomForce = p5.Vector.random2D().mult(0.3); // Random force to add variation
      p.applyForce(randomForce); // Apply a random force
      p.update(); // Update the particle's position
      p.checkEdges(); // Bounce off the edges
      p.display(); // Display the particle
    }
  
    // Remove dead particles to prevent memory overload
    particles = particles.filter((p) => !p.isDead());
  }
  
  function keyPressed() {
    if (keyCode === ENTER) {
      saveCanvas("generative_artwork", "png"); // Save the artwork when "Enter" is pressed
    }
  }
  