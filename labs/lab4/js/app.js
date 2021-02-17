let unit01 = ["#765898", "#52D053", "#000000"];

function setup() {
    createCanvas(800, 600);

    for (var i = 0; i < unit01.length; i++) {
      
        fill(unit01[i]);
        rect(200, 200 * i, 400, 200);
    }
    
}