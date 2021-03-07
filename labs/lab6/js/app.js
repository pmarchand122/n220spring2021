var rectangle = {
    height : 100,
    width : 400,
    xPos : 200,
    yPos : 250,
    color : "#ce42f5",
    drawRect : function() {
        fill(this.color)
        rect(this.xPos, this.yPos, this.width, this.height)
    }
}


function setup() {
    createCanvas(800, 600);
    background(100)
}


function draw() {
    rectangle.drawRect()
}