function setup() {
    createCanvas(400, 300);
}

function draw() {
    noFill()
    //for loop syntax
    for(var i = 1; i < 26; i++) {
        
        stroke(0, 0, 0)
        circle(200, 150, i * 5);

    }
}


/*function draw() {
    background(100);
    noFill();

    //for loop syntax
    for(var i = 15; i > 0; i--) {
        var color = Math.random() * 255;
        fill(color);
        stroke(255 - (i * 15));
        circle(200,150,i*10);
    }
}*/