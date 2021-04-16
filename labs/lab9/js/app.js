let numbers = document.getElementById("numbers");
let results = document.getElementById("results");

function average() {
    let numbersList = numbers.value;
    let splitList = numbersList.split(",");

    let sum = 0;
    let n = splitList.length;

    for (var i = 0; i < splitList.length; i++) {
        sum += Number(splitList[i])
    }

    let average = sum / n;

    results.innerHTML = "Average: " + average + " <br>" + "Sum: " + sum;

    numbers.value = ""

}