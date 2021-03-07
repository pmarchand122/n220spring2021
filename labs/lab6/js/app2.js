var circleObj = {
    x: 400,
    y: 300,
    r: 20,
    color: "#ce42f5"
}

function setup() {
    createCanvas(800, 600)
    background(150)
}

function draw() {
    fill(circleObj.color)
    circleObj.r += 1
    circle(circleObj.x, circleObj.y, circleObj.r)
}