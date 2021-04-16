let element = document.getElementById("eventTest");
let element2 = document.getElementById("eventTest2");


//add the event listener function to the elements
element.addEventListener("click", itsClicked);
element2.addEventListener("click", itsClicked);

//get the attribute from eventTest2 (hard coded)
//let response = element2.getAttribute("data-response");
//console.log(response)

//event listener
function itsClicked(event) {
    console.log(event.target);

    event.target.style.backgroundColor = "#999";

    //get the attribute using event.target (soft coded)
    let response = event.target.getAttribute("data-response");

    event.target.innerHTML = response;
}

//---------------------------------------------------------------

let gameBody = document.getElementById("gameBody");

//make 4 'enemies'
for (var i = 0; i < 4; i++){
    let newEn = document.createElement("div");
    newEn.style.width = "30px";
    newEn.style.height = "30px";
    newEn.style.position = "absolute";
    //top is y axis
    newEn.style.top = (Math.random() * 100) + "px";
    //left is x axis
    newEn.style.left = (Math.random() * 100) + "px";
    //makes them circular
    newEn.style.borderRadius = "15px";
    newEn.style.backgroundColor = "#222";

    gameBody.appendChild(newEn);

    newEn.addEventListener("click", removeEnemy);
}

function removeEnemy(event){
    event.target.remove();
}