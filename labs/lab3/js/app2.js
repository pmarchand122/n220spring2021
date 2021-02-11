function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(255,255,255);
    for(var i = 1; i < 26; i++) {
        fill(0, 0, 0)
        circle(15 * i, 150, 5)
        if((i % 3) == 0) {
            fill(141, 50, 194)
            circle(15 * i, 150, 5)
        }
        if((i % 5) == 0) {
            fill(100, 237, 108)
            circle(15 * i, 150, 5)
        }
        if((i % 5) == 0 && (i % 3) == 0) {
            fill(84, 211, 240)
            circle(15 * i, 150, 5)
        }
    }
}

//var color = Math.random() * 255;