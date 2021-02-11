function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(255,255,255)
    for(var i = 1; i <= 10; i++) {
        if(i == 1){
            xPos = 100;
            yPos = 100;
        } else if (i == 2) {
            xPos = 100;
            yPos = 150; 
        } else if (i == 3) {
            xPos = 100;
            yPos = 200;
        } else if (i == 4) {
            xPos = 100;
            yPos = 250;
        } else if (i == 5) {
            xPos = 150;
            yPos = 150;
        } else if (i == 6) {
            xPos = 150;
            yPos = 200;
        } else if (i == 7) {
            xPos = 150;
            yPos = 250;
        } else if (i == 8) {
            xPos = 200;
            yPos = 200;
        } else if (i == 9) {
            xPos = 200;
            yPos = 250;
        } else if (i == 10) {
            xPos = 250;
            yPos = 250;
        }
        fill(209, 40, 40)
        stroke(255, 255, 255)
        square(xPos, yPos, 50)
    }
}