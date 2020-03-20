let numOfSquares = 6;
let colors = generateColorArray(numOfSquares);
let pickedColor = pickColor();

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector(".correct_color");
let messageDisplay = document.querySelector(".message");
let resetButton = document.querySelector(".reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
        //apply selected class to selected button
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
    });
}

colorDisplay.textContent = pickedColor;

//loop through each square
for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //get color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare picked color to clicked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors();
        }
        else {
            this.style.backgroundColor = "#222222";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function reset() {
    //generate new colors
    colors = generateColorArray(numOfSquares);
    //pick new random color from colors array
    pickedColor = pickColor();
    //change colorDisplay to display new chosen color
    colorDisplay.textContent = pickedColor;
    //change page colors to new colors
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    //reset h1, button and message to default
    h1.style.backgroundColor = "#00838F";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

function changeColors(){
    //loop through each square
    for (let i = 0; i < squares.length; i++) {
    //change all colors to the picked color
    squares[i].style.backgroundColor = pickedColor;
    h1.style.backgroundColor = pickedColor;
    }
}

//pick a random color and return it
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColorArray(num) {
    //make array
    let arr = [];
    //repeat num times
    for (let i = 0; i < num; i++) {
        //generate color and push to array
        arr.push(generateColor());
    }
    //return array
    return arr;
}

function generateColor() {
    //pick a red from 0-255
    let red = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    let green = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
    
}

resetButton.addEventListener('click', function(){
    //generate new colors
    colors = generateColorArray(numOfSquares);
    //pick new random color from colors array
    pickedColor = pickColor();
    //change colorDisplay to display new chosen color
    colorDisplay.textContent = pickedColor;
    //change page colors to new colors
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    //reset h1, button and message to default
    h1.style.backgroundColor = "#00838F";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
});

// easyButton.addEventListener('click', function(){
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");

//     //generate new array with 3 random colors
//     numOfSquares = 3;
//     colors = generateColorArray(numOfSquares);
//     //pick new color from array
//     pickedColor = pickColor();
//     //display new pickedColor in colorDisplay
//     colorDisplay.textContent = pickedColor;
//     //loop through all squares
//     for (let i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = "#00838F";
// });

// hardButton.addEventListener('click', function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");

//     //generate new array with 6 random colors
//     numOfSquares = 6;
//     colors = generateColorArray(numOfSquares);
//     //pick new color from array
//     pickedColor = pickColor();
//     //display new pickedColor in colorDisplay
//     colorDisplay.textContent = pickedColor;
//     //loop through all squares
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";    
//     }
//     h1.style.backgroundColor = "#00838F";
// });