let squares = document.getElementById("squares")

for (let i = 0; i < 100; i++){
    let random = [Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1] ;
    let newSquare = document.createElement("div");
    newSquare.style.height = 20 + "px";
    newSquare.style.width = 20 + "px";
    newSquare.style.backgroundColor = 'rgb('+ random[0] + ',' + random[1] + ',' + random[2] +')';
    newSquare.style.float = "left";
    squares.appendChild(newSquare)
}
