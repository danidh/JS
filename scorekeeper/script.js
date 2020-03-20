let p1Btn = document.querySelector(".p1_btn");
let p2Btn = document.querySelector(".p2_btn");
let resetBtn = document.querySelector(".reset");
let p1Display = document.querySelector(".p1_score");
let p2Display = document.querySelector(".p2_score");
let maxScoreDisplay = document.querySelector(".max_score");     
let numInput = document.querySelector("input");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let maxScore = 5;

p1Btn.addEventListener('click', function(){
    if (!gameOver) 
    {
        p1Score++;
        if (p1Score === maxScore) 
        {
            gameOver = true;
            p1Display.classList.add("winner");
        }
    }
    updateScreen();
});
    
p2Btn.addEventListener('click', function(){
    if (!gameOver) 
    {
        p2Score++;
    if (p2Score === maxScore) 
    {
        gameOver = true;
        p2Display.classList.add("winner");
    }
    }
    updateScreen();
});

resetBtn.addEventListener('click', function(){
    resetScore();
});

numInput.addEventListener('change', function(){
    maxScoreDisplay.textContent = numInput.value;
    maxScore = parseInt(numInput.value);
    resetScore();
});



function resetScore() {
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    updateScreen();
}

function updateScreen() 
{
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}
