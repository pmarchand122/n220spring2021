function setup() {
    var backgroundC = "#4ebde6";
    var startX = 30;

    createCanvas(800,600);

    background(backgroundC);

    fill(0, 200, 50)
    rect(70, 60, 300, 50);


    fill(214, 41, 67);
    circle(100, 100, 30);

    stroke(2);
    line(startX,40,200,20);
    
}

/*let xPos = 0;
let yPos = 40;

let xSpeed = 1;
let ySpeed = 1;

function setup(){
    createCanvas(400, 300);
}*/


/*function draw() {
    background(250, 0 , 0);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;


    if(xPos > 100) {
        fill(0, 250, 0)
    } else {
        fill(0, 0, 0)
    }


    circle(xPos, yPos, 30);
}*/

/*function draw() {
    background(62, 237, 108);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    if(keyIsDown(LEFT_ARROW)) {
        xSpeed = -1;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        xSpeed = 1;
    }

    if(keyIsDown(UP_ARROW)) {
        ySpeed = -1;
    }

    if(keyIsDown(DOWN_ARROW)) {
        ySpeed = 1;
    }


    circle(xPos, yPos, 30);
}*/
