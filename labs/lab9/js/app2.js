let words = document.getElementById("words");
let results = document.getElementById("results");



function filter() {
    let badWords = ["clear", "water", "tires"]
    let wordsList = words.value.toLowerCase();
    let splitList = wordsList.split(" ");
 
    let counter = 0;

    for (var i = 0; i < splitList.length; i++){

        for (var x = 0; x < badWords.length; x++){
            if (badWords[x] == splitList[i]){
                counter += 1;
            }
        }
    }

    if (counter > 0) {
        results.innerHTML = ("Bad words were found." + "<br>" + "Total: " + counter)
    } else {
        results.innerHTML = ("No bad words were found.")
    }
    
    words.value = ""
}