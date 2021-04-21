let app = document.getElementById("app");
let colorDisplay = document.getElementById("colorDisplay");
let rgbDisplay = document.getElementById("rgbDisplay")

let redRow = document.getElementById("redRow");
let greenRow = document.getElementById("greenRow");
let blueRow = document.getElementById("blueRow");


let currentColor = [0, 0, 0]
let indexArray = [0, 1, 2]
let valueArray = [1, 5, 10]

function addColor(event){
    
    let number = event.target.getAttribute("data-number");
    let color = event.target.getAttribute("data-color");
    Number(number);
    Number(color);

    //Took the three if statements below and put them into a for loop
    for(var x=0; x < valueArray.length; x++){
        if (number == valueArray[x]){
            for (var i=0; i < indexArray.length; i++){
                if (color == indexArray[i]){
                    currentColor[color] += valueArray[x];
                }
            }
        }
    }
    // if (number == 1){
    //     for (var i=0; i < indexArray.length; i++){
    //         if (color == indexArray[i]){
    //             currentColor[color] += 1;
    //         }
    //     }
    // }

    // if (number == 5){
    //     for (var i=0; i < indexArray.length; i++){
    //         if (color == indexArray[i]){
    //             currentColor[color] += 5;
    //         }
    //     }
    // }

    // if (number == 10){
    //     for (var i=0; i < indexArray.length; i++){
    //         if (color == indexArray[i]){
    //             currentColor[color] += 10;
    //         }
    //     }
    // }

    //added this for fun
    for(var i=0; i < currentColor.length; i++){
        if(currentColor[i] > 255){
            currentColor[i] = 0;
        }
    }

    

    colorDisplay.style.backgroundColor = "rgb(" + currentColor[0] + "," + currentColor[1] + "," + currentColor[2] + ")";

    rgbDisplay.innerHTML = "current color: rgb(" + currentColor[0] + "," + currentColor[1] + "," + currentColor[2] + ")";
}



//css
redRow.style.display = "flex";
redRow.style.width = 150 + "px"
redRow.style.height = 30 + "px";
redRow.style.justifyContent = "center";
redRow.style.margin = "auto";

greenRow.style.display = "flex";
greenRow.style.width = 150 + "px"
greenRow.style.height = 30 + "px";
greenRow.style.justifyContent = "center";
greenRow.style.margin = "auto";

blueRow.style.display = "flex";
blueRow.style.width = 150 + "px"
blueRow.style.height = 30 + "px";
blueRow.style.justifyContent = "center";
blueRow.style.margin = "auto";

colorDisplay.style.width = 400 + "px";
colorDisplay.style.height = 200 + "px";
colorDisplay.style.backgroundColor = "black";
colorDisplay.style.margin = "auto";

rgbDisplay.style.width = 400 + "px";
rgbDisplay.style.height = 50 + "px";
rgbDisplay.style.textAlign = "center";
rgbDisplay.style.margin = "auto";
rgbDisplay.style.paddingTop = 50 + "px";
rgbDisplay.style.fontSize = 20 + "px";
rgbDisplay.innerHTML = "Current color: rgb(0,0,0)";

app.style.width = 800 + "px";
app.style.margin = "auto";
