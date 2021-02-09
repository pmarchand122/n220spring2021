function setup() {
    createCanvas(400, 300);
}

/*function draw() {
    background(100);

    noFill();

    //for loop syntax
    for(var i = 0; i < 15; i++) {
        stroke(255 - (i * 15));
        circle(200, i * 20, i * 5);
    }
    console.log("Afterwards: " + i);
}*/


function draw() {
    background(100);
    noFill();

    //for loop syntax
    for(var i = 15; i > 0; i--) {
        var color = Math.random() * 255;
        fill(color);
        stroke(255 - (i * 15));
        circle(200,150,i*10);
    }
}