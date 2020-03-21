let numOfSquares = 6;
let colors = [];
let pickedColor;

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector(".correct_color");
let messageDisplay = document.querySelector(".message");
let resetButton = document.querySelector(".reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares() {
    //loop through each square
    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener('click', function () {
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
}

function setUpModeButtons() {
    //eventlisteners for mode buttons
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            //apply selected class to selected button
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
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
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    //reset h1, button and message to default
    h1.style.backgroundColor = "#00838F";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

colorDisplay.textContent = pickedColor;

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
    reset();
});