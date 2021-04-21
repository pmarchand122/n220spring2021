let answerDiv = document.getElementById("answerDiv");

function answer(event){
    let answer = event.target.getAttribute("data-answer")
    answerDiv.innerHTML = answer;
}