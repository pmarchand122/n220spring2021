function setup(){
    createCanvas(800, 600)
    background(100)
}

var rectangleObject = { 
    x: 700,
    w: 50, 
    h: 200
}


var circleObject = {
    x: 200,
    y: 300,
    xSpeed: 5,
    ySpeed: 3,
}


function draw() {
    let collide = collideRect(rectangleObject, circleObject)


    circleObject.x = circleObject.x + circleObject.xSpeed;
    circleObject.y = circleObject.y + circleObject.ySpeed;

    
    
    if(collide == true){
        console.log(collide)
        circleObject.xSpeed = -5;
        console.log(circleObject.ySpeed)
      
    }


    if(circleObject.x == 0) {
        circleObject.xSpeed = circleObject.xSpeed * -1;
    }
        
    if(circleObject.y == 600) {
        circleObject.ySpeed = circleObject.ySpeed * -1;
        
    }
    if(circleObject.y == 0) {
        circleObject.ySpeed = circleObject.ySpeed * -1;
    }
    if(circleObject.x > 800) {
        circleObject.x = 200;
        circleObject.y = 300;
    }

    

    background(100)

    fill("#d3e9e5")

    circle(circleObject.x, circleObject.y, 30);
    
    rect(rectangleObject.x, mouseY, rectangleObject.w, rectangleObject.h)
   

}


function collideRect(rectangleObject, circleObject) {

    if(circleObject.y > mouseY && circleObject.y < mouseY + rectangleObject.h) {

        if(circleObject.x > rectangleObject.x && circleObject.x < rectangleObject.x + rectangleObject.h) {

              return true;

        }

   }

   return false;

}


