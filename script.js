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

/*
This function generates the computers random signal choice
*/
function getRandomComputerChoice() {

    let random = Math.random() * 3;

    if (random < 1) {
        return "rock"
    } else if (random >= 1 && random < 2) {
        return "paper"
    } else {
        return "scissors"
    }


}

function incrementScoreAndRound(result, playerScore, computerScore, roundCounter) {
    if (result.includes("Win")) {
         playerScore += 1;
         roundCounter += 1;
     } else if (result.includes("Lose")) {
         computerScore += 1;
         roundCounter += 1;
     }

     return [playerScore, computerScore, roundCounter];
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
        return `Tie! ${playerSelection} ties ${computerSelection}, play again!`
    } else {
        // Rock beats scissors, scissors beats paper, and paper beats rock
        if ((playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "paper")
            || (playerSelection === "paper" && computerSelection === "rock")) {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    }
}

function playRound(playerSelection) {
    let outputMsg = getRoundWinner(playerSelection);
    roundResult.textContent = outputMsg;
    let updatedScoresAndRound = incrementScoreAndRound(outputMsg, playerScore, computerScore, roundCounter);
    playerScore = updatedScoresAndRound[0];
    computerScore = updatedScoresAndRound[1];
    roundCounter = updatedScoresAndRound[2];
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    currentRound.textContent = `Round: ${roundCounter}`;
    gameOver.textContent = checkGameOver(roundCounter, playerScore, computerScore);
}

/*
This function plays 5 rounds of rock paper scissors. Round ties and invalid
player inputs do not count as full rounds and are replayed
*/
function playGame() {



    /*

    let roundCounter = 0;
    let keepGameGoing = true;
    let playerScore = 0;
    let computerScore = 0;

    while (keepGameGoing) {

        let playerChoice = getPlayerChoice() 

        //If player choice is invalid, prompt the player again without incrementing the round counter
        if (!(checkPlayerChoiceValidity(playerChoice))) {
            console.log("Your choice is of the incorrect form or null, please choose either 'Rock' or 'Paper' or 'Scissors'")
            continue;
        }

        let computerChoice = getRandomComputerChoice();
        console.log(`Your choice is ${playerChoice}`)
        console.log(`The computer's choice is ${computerChoice}`)

        let result = playRound(playerChoice, computerChoice);

        //If the round is a tie, retry the round without incrementing the round counter
        console.log(result)
        if (result.includes("Tie")) {
           continue;
        } else if (result.includes("Win")) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }

        console.log(`The Current Scores are: Player: ${playerScore}, Computer: ${computerScore}`)

        roundCounter = roundCounter + 1;

        if (roundCounter >= 5) {
            keepGameGoing = false;

            if (playerScore > computerScore) {
                console.log(`Game over! You won with a final score of: ${playerScore} to the computers: ${computerScore}`)
            } else {
                console.log(`Game over! You lost with a final score of: ${playerScore} to the computers: ${computerScore}`)
            }

        }

    }

    */
}

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundResult = document.querySelector("#displayRoundResult");
const currentRound = document.querySelector("#currentRound");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const gameOver = document.querySelector("#displayGameOver");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});
