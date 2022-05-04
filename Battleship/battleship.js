var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
//console.log(1);
ABCD

while (!isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number!");
    } else {
        console.log(guess);
        guesses++;    
        //console.log(guesses);
        if (guess == location1 || guess == location2 || guess == location3){
            alert("Hit!");
            hits++;
    //        console.log(hits);
            if (hits == 3){
            isSunk = true;
            alert("You sank my battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}
var stat = "You took " + guesses + "guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);
alert(stat);