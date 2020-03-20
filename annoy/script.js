var userAnswer = prompt("Are we there yet?");

while(!userAnswer.includes("yes") && !userAnswer.includes("yeah")) {
    userAnswer = prompt("Are we there yet?");
}

alert("Yay, we made it!");