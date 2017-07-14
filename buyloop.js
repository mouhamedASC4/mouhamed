// var counter = 1;
// while(counter < 11) {
//     console.log(counter);
//     counter++;
// }

var prompt = require('prompt-sync');
var money = 1000;
var items = [];

while (money <99){
    console.log("you have $+left. shirt = $100, computer = $500");
    var answer = prompt("which item do you want to buy? ");
    if (answer == "computer") {
        money-= 100;
        items.push("shirt");
        console.log("you bought a shirt");
    }
    else if (answer == "computer") {
        money -= 400;
        items.push("computer");
        console.log("you bought a computer");
        else

    