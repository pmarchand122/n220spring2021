let Bill = document.getElementById("bill");

function total() {
    var bill = Number(Bill.value);
    var tip = bill * 0.20;
    var total = bill + tip;
    console.log("Tip: $" + tip + ". " + "Total: $" + total)
}