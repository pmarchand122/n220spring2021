var circlesObj = [
    { x: 0, y: 0, r: 1, color: "#ce42f5"},
    { x: 100, y: 0, r: 2, color: "#5ff5e3"},
    { x: 200, y: 0, r: 3, color: "#31f752"},
    { x: 300, y: 0, r: 4, color: "#f3ff4f"},
    { x: 400, y: 0, r: 5, color: "#ff5252"},
    { x: 500, y: 0, r: 6, color: "#9c1788"},
    { x: 600, y: 0, r: 7, color: "#1ea0d4"},
]


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200)
    for (var i = 0; i < circlesObj.length; i++) {
        fill(circlesObj[i].color)
        circle(circlesObj[i].x, circlesObj[i].y, circlesObj[i].r)
        circlesObj[i].x += 1;
        circlesObj[i].y += 1;
        circlesObj[i].r += 1;
    }
}