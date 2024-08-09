const choices = ["rock", "paper", "scissors"];
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const winScoreDisplay = document.getElementById("win");
const drawScoreDisplay = document.getElementById("draw");
const loseScoreDisplay = document.getElementById("lose");
const rockDisplay = document.getElementById("rock");
const paperDisplay = document.getElementById("paper");
const scissorsDisplay = document.getElementById("scissors");
let winScore = 0;
let drawScore = 0;
let loseScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Draw!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }

    resultDisplay.textContent = result;
    computerDisplay.src = `static/images/${computerChoice}.png`;
    playerDisplay.src = `static/images/${playerChoice}.png`;
    playerDisplay.classList.add('visible');
    rockDisplay.style.display = 'none';
    paperDisplay.style.display = 'none';
    scissorsDisplay.style.display = 'none';

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "You win!":
            resultDisplay.classList.add("greenText");
            winScore++;
            winScoreDisplay.textContent = winScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            loseScore++;
            loseScoreDisplay.textContent = loseScore;
            break;
        case "Draw!":
            drawScore++;
            drawScoreDisplay.textContent = drawScore;
            break;
    }

    setTimeout(() => {
        resultDisplay.textContent = "Make your choice";
        resultDisplay.classList.remove("greenText", "redText");
        computerDisplay.src = `static/images/robot.png`;
        rockDisplay.style.display = 'flex';
        paperDisplay.style.display = 'flex';
        scissorsDisplay.style.display = 'flex';
        playerDisplay.classList.remove('visible');
    }, 1000);
}

