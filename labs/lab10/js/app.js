let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");

let squareArray = [square1, square2, square3]

for(var i = 0; i < squareArray.length; i++){
    squareArray[i].style.height = 200 + "px";
    squareArray[i].style.width = 200 + "px";
    squareArray[i].style.margin = 5 + "px";
    squareArray[i].style.backgroundColor = "grey";
    squareArray[i].style.float = "left";
}



function addColor(event) {
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;
}