let xPos = [0,0,0,0,0,0,0,0,0,0]
let yPos = [0,0,0,0,0,0,0,0,0,0]

function setup() {
    createCanvas(800, 600);
}

function draw() {

    background("#64ed6c")

    console.log(xPos);
    console.log(yPos);

    xPos.push(mouseX);
    yPos.push(mouseY);

    xPos.shift();
    yPos.shift();

    for (var i=0; i < xPos.length && i < yPos.length; i++) {
        fill("#45698c")
        circle(xPos[i], yPos[i], 20)
    }
}