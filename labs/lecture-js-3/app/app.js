let response = document.getElementById("response");

function doThing(event) {

    let data = event.target.getAttribute("data-whatever");
    event.target.innerHTML = data

    if (data == "Money") {
        response.innerHTML = "You have cash!";
    } else if (data == "Candy") {
        response.innerHTML = "You won calories!";
    }
}