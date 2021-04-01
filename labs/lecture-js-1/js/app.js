//application level variables

let txtGrassCount = document.getElementById("txtGrassCount");
let rowsCount = document.getElementById("rowsCount");


function setup() {

   createCanvas(400,300);

}



//interaction events

function drawGrass() {



   //bg

   background(91, 252, 236, 100);



   //input cleaning

   let grassCount = Number( txtGrassCount.value );
   let rowsCount = Number (rowsCount.value);


   for(let i = rowsCount; i < grassCount; i++) {

      fill("#abe332");

      let heightOffset = Math.random() * 30;

      rect(i*10, 30+heightOffset,10,100-heightOffset);

   }

}