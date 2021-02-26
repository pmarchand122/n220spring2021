let sunX = 300;

let age = 10;

function setup() {
    createCanvas(800, 600)
    background(100)
    drawPizza("#dba24a", "#e12301", 5, 400, 300); 

}



function drawPizza(pizzaColor, lineColor, numSlice, xHeight, yHeight) {

    fill(pizzaColor)
    stroke(lineColor)     
    circle(xHeight, yHeight, 200);

    
    for (var i = 0; i < numSlice; i++) {
        line(xHeight, yHeight, 200 * i - xHeight ,  200 * i + yHeight );
        
        line(xHeight, yHeight, 200 * i + xHeight ,  200 * i - yHeight );

        line(xHeight, yHeight, -10 * i - xHeight ,  -400 * i + yHeight );

        
        line(xHeight, yHeight, 100 * i + xHeight ,  300 * i - yHeight );

        
        
    }

}