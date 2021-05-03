let replay = document.getElementById("replay");
let cards = document.getElementById("cards");

let card1= document.getElementById("card1");
let card2= document.getElementById("card2");
let card3= document.getElementById("card3");
let card4= document.getElementById("card4");
let card5= document.getElementById("card5");
let card6= document.getElementById("card6");
let card7= document.getElementById("card7");
let card8= document.getElementById("card8");

let cardPosition = [card1, card2, card3, card4, card5, card6, card7, card8];

for (var i = 0; i < cardPosition.length; i++){
    cardPosition[i].style.width = 80 + "px";
    cardPosition[i].style.height = 160 + "px";
    cardPosition[i].style.backgroundColor = "blue";
    cardPosition[i].style.marginLeft = 120 + "px";
    cardPosition[i].style.marginBottom = 120 + "px";
    cardPosition[i].style.float = "left";
    cardPosition[i].style.border = 2 + "px solid blue";
}


cards.style.width = 820 + "px";
cards.style.height = 300 + "px";
cards.style.justifyContent = "space-between";
cards.style.margin = "auto";



replay.style.marginRight = 100 + "px";
replay.style.paddingLeft = 490 + "px";

let letterClicked = [];

let letterSum = [];

let cardSum = [];




function flip(event){
    // letterClicked.shift();

    let letter1 = event.target.getAttribute("data-letter1");
    let letter2 = event.target.getAttribute("data-letter2");

    // letterClicked += letter;
    // letterClicked.shift;
    

    if(letter1){
        event.target.innerHTML = letter1;
        letterClicked.push(letter1)
        letterSum.push(0)
    }
    if(letter2){
        event.target.innerHTML = letter2;
        letterClicked.push(letter2)
        letterSum.push(1)
    }


    if(letterClicked.length > 2){
        letterClicked.shift();
    }

    if(letterSum.length > 2){
        letterSum.shift()
    }

    event.target.style.backgroundColor = "white";
    event.target.style.textAlign = "center";
    event.target.style.fontSize =  50 + "px";
    event.target.style.color = "blue";

    
    
    setTimeout(function(){
        if(letterClicked[1] == letterClicked[0]){
            event.target.innerHTML = "";
            event.target.style.border = 2 + "px solid white";
            cardSum.push(1);
            if(cardSum.length > 7){
                let button = document.createElement("button");
                button.style.width = 100 + "px";
                button.style.height = 50 + "px";
                button.innerHTML = "Replay?";
                button.addEventListener("click", restart);
                replay.append(button);
                };
            
            console.log(cardSum)
        }else {
            event.target.style.backgroundColor = "blue";
            letterClicked.shift();
        }
        
    }, 2000);

    
    
}

function restart(){

    for (var i = 0; i < cardPosition.length; i++){
        cardPosition[i].style.backgroundColor = "blue";
        cardPosition[i].style.border = 2 + "px solid blue";
    }
    cardSum = []
    replay.innerHTML = "";
    
}
