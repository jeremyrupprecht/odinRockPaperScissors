/* 
Author: Jeremy Rupprecht
Date: 2023-09-18
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
    // Game overs occur at 5 games
    if (roundCounter >= 5) {
        if (playerScore > computerScore) {
            return(`Game over! You won with a final score of ${playerScore} to the computers ${computerScore}`)
        } else {
            return(`Game over! You lost with a final score of ${playerScore} to the computers ${computerScore}`)
        }
    } else {
        return "";
    }
}

function getRoundWinner(playerSelection, computerSelection) {
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

function getEmojiHand(handSelection) {
    console.log(handSelection);
    if (handSelection === "Rock") {
        return "✊";
    } else if (handSelection === "Paper") {
        return "✋";
    } else {
        return "✌";
    }
}

function toggleVisibility(element) {
    if (element.style.display === "none") {
      element.style.display = "inline";
    } else {
      element.style.display = "none";
    }
}

function resetGame() {
    roundResult1.textContent = "Choose a hand";
    roundResult2.textContent = "First to score 5 points wins the game";
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    toggleVisibility(rockBtn);
    toggleVisibility(paperBtn);
    toggleVisibility(scissorsBtn);
    toggleVisibility(playAgainBtn);
    playerHandDisplay.textContent = "❔";
    computerHandDisplay.textContent = "❔";
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    // Keep this message as is (but hidden) to preserve spacing in the page,
    // as opposed to using "display: none" which alters the spacing of the page.
    gameOver.textContent = "Game over! You won with a final score of 0 to the computers 0";
    gameOver.style.visibility = "hidden";
}

function playRound(playerSelection) {
    //Play round
    let computerSelection = getRandomComputerChoice();
    let outputMsg = getRoundWinner(playerSelection, computerSelection);
    incrementScoreAndRound(outputMsg[0]);
    // Update UI
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    roundResult1.textContent = outputMsg[0];
    roundResult2.textContent = outputMsg[1];
    playerHandDisplay.textContent = getEmojiHand(playerSelection);
    computerHandDisplay.textContent = getEmojiHand(computerSelection);
    // Handle game over's, which occur at the end of 5 rounds
    let gameOverStatus = checkGameOver(roundCounter, playerScore, computerScore);
    if (gameOverStatus) {
        toggleVisibility(rockBtn);
        toggleVisibility(paperBtn);
        toggleVisibility(scissorsBtn);
        toggleVisibility(playAgainBtn);
        gameOver.textContent = gameOverStatus;
        gameOver.style.visibility = "visible";
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
const playerHandDisplay = document.querySelector("#playerHandDisplay");
const computerHandDisplay = document.querySelector("#computerHandDisplay");
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

