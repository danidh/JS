var number = 6;
var guessedNumber;

while (guessedNumber !== number) {
    guessedNumber = parseInt(prompt("Guess a number"));

    if (guessedNumber > number) {
        alert("Too high, try again");
    }

    else if (guessedNumber < number) {
        alert("Too low, try again");
    }

    else if (guessedNumber === number) {
        alert("You guessed it!!");
    }
}