let yPos = [0]
let frames = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(50)

    //console.log(yPos)
    console.log(frames)

    frames++
    if(frames == 10) {
        frames = 0;
        yPos.push(0)
    }

    for(var i = 0; i < yPos.length; i++) {
        noStroke()
        fill("#9cd3db")
        yPos[i]+=5
        circle(400, yPos[i], 20)
    }
}