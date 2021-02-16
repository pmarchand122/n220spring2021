/*let carProducers = ["Subaru", "Chevrolet", "Ford", "Honda", "Studebaker", "Toyota"]*/


//console.log(carProducers.length);

//GOOD CODE
/*for(var i = 0; i < carProducers.length; i++) {
    console.log("I own a " + carProducers[i]);
}*/


//BAD CODE
/*console.log("I own a " + carProducers[0]);
console.log("I own a " + carProducers[1]);
console.log("I own a " + carProducers[2]);
console.log("I own a " + carProducers[3]);
console.log("I own a " + carProducers[4]);*/





/*let colors = ["#765898", "#52D053", "#D3290F", "#E6770B", "#000000"];*/

/*function setup() {
    createCanvas(400, 300)

    for (var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        circle(30 + 40 * i, 150, 20)
    }
}*/





let positions = [0];

function setup() {
    createCanvas(400, 300);
}


function draw() {

    background(50,.9)

    console.log(positions);

    positions.push(mouseX);
    positions.shift();

    for(var i = 0; i < positions.length; i++) {
        noStroke();
        circle (positions[i], 150, 20)
    }
}