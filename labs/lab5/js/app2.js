function setup(){
    createCanvas(800, 600)
    background(100)
}


let circleX = 200;
let circleY = 300;

let xSpeed = 5;
let ySpeed = 5;

let rectX = 000;
let rectY = 470;
let rectW = 800;
let rectH = 100;


function draw() {
    let collide = collideRect(circleX, circleY, rectX, rectY, rectW, rectH)

    circleX = circleX + xSpeed;
    circleY = circleY + ySpeed;
    
    if(collide == true){
        ySpeed = -5;
        console.log(ySpeed)
    } 
    if(circleX == 0) {
        xSpeed = xSpeed * -1;
    }
        
    if(circleX == 800) {
        xSpeed = xSpeed * -1;
    }
        
    if(circleY == 0) {
        ySpeed = ySpeed * -1;
    }

    

    background(100)
    fill("#ffad0a")

    circle(circleX, circleY, 30);
    
    rect(rectX, rectY, rectW, rectH)
   

}


function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}