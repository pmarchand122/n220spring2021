let square = document.getElementById("square")

var size = 100;
square.style.height = size + "px";
square.style.width = size + "px";
square.style.backgroundColor = "green"

function clickSquare() {
    increase = size * 0.1
    size += increase
    square.style.height = size + "px";
    square.style.width = size + "px";
    console.log(size)
}

