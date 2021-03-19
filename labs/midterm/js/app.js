var circlesObj = [
    { x: 200, r: 20, color: "#fff"},
    { x: 250, r: 20, color: "#fff"},
    { x: 300, r: 20, color: "#fff"},
    { x: 350, r: 20, color: "#fff"},
    { x: 400, r: 20, color: "#fff"},
    { x: 450, r: 20, color: "#fff"},
    { x: 500, r: 20, color: "#fff"},
    { x: 550, r: 20, color: "#fff"},
    { x: 600, r: 20, color: "#fff"},
    { x: 650, r: 20, color: "#fff"},
]

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200)
    for (var i = 0; i < circlesObj.length; i++) {
        fill(circlesObj[i].color)
        circle(circlesObj[i].x, mouseY, circlesObj[i].r)

        if (circlesObj[i].x == mouseX) {
            circlesObj[i].color = "#000"
            circlesObj[i-2].r = circlesObj[i].r + 0.25;
            circlesObj[i-1].r = circlesObj[i].r + 0.5;
            circlesObj[i].r = circlesObj[i].r + 1;
            circlesObj[i+1].r = circlesObj[i].r + 0.5;
            circlesObj[i+2].r = circlesObj[i].r + 0.25;
            
            if(circlesObj[i].r > 200) {
                circlesObj[i].r = circlesObj[i].r - 1;
            }
            
        } else {
            if (circlesObj[i].r > 20) {
                circlesObj[i].r = circlesObj[i].r - 1;
                console.log(circlesObj[i].r)
            }
        }
    }
    if (mouseIsPressed == true) {
        mouseY = mouseY + 1;
        if(mouseY == 600) {
            mouseY = mouseY - 1;
        }
    }
}