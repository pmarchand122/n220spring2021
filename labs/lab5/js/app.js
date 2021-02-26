let colors = ["#B81D13", "#EFB700", "#008450"]

function setup() {
    createCanvas(800, 600);
    background(100)
}
function draw() {
    for (var i = 0; i < 3; i++) {
        fill(colors[i])
        circle(400, 250 + 80 * i, 40)
    }
}
