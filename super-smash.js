var mashArray = ["place1","place2","place3","place4"];
var firstQuestion = [20,100];
var secondQuestion = ["character1","character2"];
var prompt = require ('prompt-sync')();
function askQuestion() {
    var firstAnswer = prompt("How many times will you strike? ")
    var secondAnswer = prompt("who will you choose to fight");
    firstQuestion.push(firstAnswer);
    secondQuestion.push(secondAnswer);
}
function recordAnswer() {
    
}
function rand(upperbound){
    return Math.floor(Math.random() *upperbound);
}

