let rainDrops = [];
let smile = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(77, 167, 209);
  
  fill(100);
  
  // Floor
  strokeWeight(4);
  rect(0, 350, 400, 100);
  
  // Snowman body
  fill(255);
  stroke(0);
  strokeWeight(10);
  ellipse(200, 300, 150, 150); // Bottom circle
  strokeWeight(5);
  ellipse(200, 200, 100, 100); // Middle circle
  strokeWeight(2.5);
  ellipse(200, 120, 70, 70); // Top circle
  
  // Snowman's eyes
  fill(0);
  ellipse(180, 110, 10, 10); // Left eye
  ellipse(220, 110, 10, 10); // Right eye
  
  // Snowman's nose
  fill(255, 165, 0); // Orange color for carrot nose
  triangle(200, 120, 200, 130, 220, 130); // Carrot nose
  
  // Draw snowman's mouth
  noFill();
  arc(200, 130, smile, 20, 0, PI); // Smile animation
  
  smile += 0.5;
  if (smile >= 50) {
    smile = 40;
  }
  
  
  // Draw blue clouds
  stroke(0, 0, 50); // Blue color stroke
  strokeWeight(0); // Stroke weight
  fill(200);
  
  // First cloud
  ellipse(80, 100, 50, 50);
  ellipse(120, 100, 50, 50);
  ellipse(100, 80, 50, 50);
  
  // Second cloud
  ellipse(300, 150, 70, 70);
  ellipse(350, 150, 70, 70);
  ellipse(325, 120, 70, 70);
  

      
  // Draw snowman's arms
  stroke(0);
  strokeWeight(4);
  line(160, 200, 100, 160); // Left arm
  line(240, 200, 300, 160); // Right arm
  
     // Draw snowman's left arm
push();
translate(160, 200);
rotate(radians(sin(frameCount * 0.1) * 15));
line(0, 0, -60, -40); // Left arm
pop();

// Draw snowman's right arm
push();
translate(240, 200);
rotate(radians(sin(frameCount * 0.1) * 15));
line(0, 0, 60, -40); // Right arm
pop();
  

  
  // Draw snowman hat
  fill(0);
  rect(160, 70, 80, 20); // Hat base
  rect(180, 30, 40, 50); // Hat top
  
  // Draw scarf
  fill(90, 158, 65); // Green color for scarf
  rect(190, 155, 20, 60, 20); // Scarf down
  rect(160, 155, 100, 20, 25); // Scarf side
  
  // Draw raindrops
  for (let i = 0; i < rainDrops.length; i++) {
    fill(255);
    strokeWeight(0);
    ellipse(rainDrops[i].x, rainDrops[i].y, 15, 20);
    rainDrops[i].y += rainDrops[i].speed;

    if (rainDrops[i].y >= 400) {
      rainDrops.splice(i, 1);
    }
  }

  // Add new raindrops
  if (frameCount % 10 === 0) {
    rainDrops.push({ x: random(0, width), y: 0, speed: random(1, 3) });
  }
}
