function setup() {
    var backgroundC = "#0080ff";
    var backgroundCharacter = "#fff220";
    var black = "#000"
    var white = "#fff"
    var fishcolor = "#de5337"
    createCanvas(800,700);

    background(backgroundC);

    fill(backgroundCharacter)
    circle(400, 200, 100);

    fill(black)
    circle(395, 220, 40);

    fill(backgroundCharacter)
    noStroke()
    rect(350, 175, 100, 55)

    fill(black)
    circle(360, 180, 10);

    fill(black)
    circle(430, 180, 10);

    stroke(2)
    strokeWeight(8)
    line(400, 300, 400, 500)

    line(300, 380, 400, 350)
 
    line(500, 290, 400, 350)

    line(400, 500, 300, 600)

    line(400, 500, 500, 600)

    fill(white)
    triangle(500, 100, 300, 100, 400, 50)

    fill(black)
    rect(325, 100, 150, 30)

    strokeWeight(0)
    fill(fishcolor)
    ellipse(250, 380, 90, 30);

    fill(fishcolor)
    triangle(330, 400, 290, 380, 330, 360)

    fill(black)
    circle(230, 375, 3)





    
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
