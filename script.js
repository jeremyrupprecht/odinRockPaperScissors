/* 
Author: Jeremy Rupprecht
Date: 2023-09-09
Description: 
    This script implements a trivial console only based version of the game Rock
    Paper Scissors. The game is played between a person and a computer where
    both pick between 3 choices of hand signal (rock, paper or scissors) at 
    the same time (each time counts as a single round). Rock beats scissors, 
    scissors beats paper, and paper beats rock. The player is prompted to 
    make their choice of signal, then this choice is computed against the choice
    of the computer. After 5 rounds, the resulting winner is displayed to the screen
*/

function getRandomComputerChoice() {
    let random = Math.random() * 3;
    if (random < 1) {
        return "Rock"
    } else if (random >= 1 && random < 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function incrementScoreAndRound(result) {
    if (result.includes("Won")) {
         playerScore += 1;
         roundCounter += 1;
     } else if (result.includes("Lost")) {
         computerScore += 1;
         roundCounter += 1;
     }
}

function checkGameOver(roundCounter, playerScore, computerScore) {
    if (roundCounter >= 5) {
        if (playerScore > computerScore) {
            return(`Game over! You won with a final score of: ${playerScore} to the computers: ${computerScore}`)
        } else {
            return(`Game over! You lost with a final score of: ${playerScore} to the computers: ${computerScore}`)
        }
    } else {
        return "";
    }
}

function getRoundWinner(playerSelection) {
    let computerSelection = getRandomComputerChoice();
    if (playerSelection === computerSelection) {
        return(["Its a Tie!",`${playerSelection} ties with ${computerSelection}`]);
    } else {
        // Rock beats scissors, scissors beats paper, and paper beats rock
        if ((playerSelection === "Rock" && computerSelection === "Scissors")
            || (playerSelection === "Scissors" && computerSelection === "Paper")
            || (playerSelection === "Paper" && computerSelection === "Rock")) {
            return(["You Won!",`${playerSelection} beats ${computerSelection}`]);
        } else {
            return(["You Lost!",`${playerSelection} beats ${computerSelection}`]);
        }
    }
}

function toggleButtonVisibility(element) {
    if (element.style.display === "none") {
      element.style.display = "inline";
    } else {
      element.style.display = "none";
    }
}

function resetGame() {
    roundResult1.textContent = "Choose a hand";
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    toggleButtonVisibility(rockBtn);
    toggleButtonVisibility(paperBtn);
    toggleButtonVisibility(scissorsBtn);
    toggleButtonVisibility(playAgainBtn);
    currentRound.textContent = `Round: ${roundCounter}`;
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    gameOver.textContent = "";
}

function playRound(playerSelection) {
    let outputMsg = getRoundWinner(playerSelection);
    incrementScoreAndRound(outputMsg[0]);
    // Update UI
    currentRound.textContent = `Round: ${roundCounter}`;
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    roundResult1.textContent = outputMsg[0];
    roundResult2.textContent = outputMsg[1];
    // Handle game over's, which occur at the end of 5 rounds
    let gameOverStatus = checkGameOver(roundCounter, playerScore, computerScore);
    gameOver.textContent = gameOverStatus;
    if (gameOverStatus) {
        toggleButtonVisibility(rockBtn);
        toggleButtonVisibility(paperBtn);
        toggleButtonVisibility(scissorsBtn);
        toggleButtonVisibility(playAgainBtn);
    }
}


let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundResult1 = document.querySelector("#displayRoundResult1");
const roundResult2 = document.querySelector("#displayRoundResult2");
const currentRound = document.querySelector("#currentRound");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const gameOver = document.querySelector("#displayGameOver");
const playAgainBtn = document.querySelector("#playAgain");
playAgainBtn.style.display = "none";

rockBtn.addEventListener("click", () => {
    playRound("Rock");
});

paperBtn.addEventListener("click", () => {
    playRound("Paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("Scissors");
});

playAgainBtn.addEventListener("click", () => {
    resetGame();
});

