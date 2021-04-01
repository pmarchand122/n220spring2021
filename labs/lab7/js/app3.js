let response = document.getElementById("response");
let username = document.getElementById("username");
let password = document.getElementById("password");
let correctUsername = "Username";
let correctPassword = "Password";


function verify() {
    var inputUsername = username.value;
    var inputPassword = password.value;
    

    if(inputUsername == correctUsername && inputPassword == correctPassword) {
        response.innerHTML = "Success";
    } else {
        response.innerHTML = "Wrong Information";
    }
}