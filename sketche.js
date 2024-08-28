function setup() {
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
    stroke("white");
    fill("red");
    
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  
    
  