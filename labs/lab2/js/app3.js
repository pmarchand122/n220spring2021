let xPos = 0;
let yPos = 300;

let xSpeed = 5;


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(100, 237, 108)
    xPos = xPos + xSpeed;

    if(xPos == 800) {
        xSpeed = xSpeed - 10;
    }

    if(xPos == 0) {
        xSpeed = xSpeed + 10;
    }

    fill("#ffad0a")
    circle(xPos, yPos, 30);
}