let txtExample = document.getElementById("txtExample");

let dvFound = document.getElementById("dvFound");

let nbaTeams = ["Pacers", "Bucks", "Nets", "Lakers", "Clippers", "Knicks"];

let teams = [
    { name: "Pacers", conference: "Eastern", seed: 8},
    { name: "Sixers", conference: "Eastern", seed: 2},
    { name: "Jazz", conference: "Western", seed: 1}
]

// //function breakString() {
//     let sentence = txtExample.value;
    
//     console.log(sentence)

//     let splitSentence = sentence.split(" ");
//     console.log(splitSentence)
// }

// function calcScores() {
//     let myArray = [2, 4, 6, 8, 10];

//     let sum = 0;

//     for(let i=0; i < myArray.length; i++) {
//         sum+= myArray[i];
//     }

//     console.log(sum);
// }

// function calcScores() {

//     var stringVals = txtExample.value;

//     let myArray = stringVals.split(",");

//     let sum = 0;

//     for(let i=0; i < myArray.length; i++) {
//         sum+= Number(myArray[i]);
//     }

//     console.log(sum);
// }

// function findPacers() {

//     let lookingFor = "Pacers";

//     for(let i = 0; i < nbaTeams.length; i++) {
//         if (nbaTeams[i].toUpperCase() == lookingFor.toUpperCase()){
//             dvFound.innerHTML = "found it at " + i;
//             break;
//         }
//     }
// }

// function findPacers() {

//     var find = nbaTeams.find(function(item){
//         return item == "Pacers";
//     })

//     console.log(find)
    
// }

function displayTeam() {

    for (let i = 0; i < teams.length; i++){
        let newTeam = document.createElement("div");
        newTeam.innerHTML = "The " + teams[i].name + " in the " + teams[i].conference + " conference are the " + teams[i].seed + " seed";
        dvFound.appendChild(newTeam)
    }
}