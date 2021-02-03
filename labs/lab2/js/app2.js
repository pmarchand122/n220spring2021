function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(100, 237, 108)

    circle(mouseX, mouseY, 30);

    if(mouseX < 200) {
        fill("#34ebe8")
        circle(mouseX, mouseY, 30);
    }

    if(mouseX > 200) {
        fill("#eb3434")
        circle(mouseX, mouseY, 30);
    }
}


