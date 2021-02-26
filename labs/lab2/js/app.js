let xPos = 400;
let yPos = 300;

let xSpeed = -5;
let ySpeed = 5;

function setup(){
    createCanvas(800, 600);
}


function draw() {
    background(100, 237 , 108);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;


    if(xPos == 0) {
        xSpeed = xSpeed * -1;
    }

    if(xPos == 800) {
        xSpeed = xSpeed * -1;
    }

    if(yPos == 0) {
        ySpeed = ySpeed * -1;
    }

    if(yPos == 600) {
        ySpeed = ySpeed * -1;
    }

    fill("#ffad0a")
    circle(xPos, yPos, 30);

}