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
        return "Rock"
    } else if (random >= 1 && random < 2) {
        return "Paper"
    } else {
        return "Scissors"
    }


}

function playRound(playerSelection, computerSelection) {

    // Account for case sensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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

function getPlayerChoice() {
    let choice = prompt("Enter One of Three Choices (Rock, Paper, or Scissors)");
    return choice;
}

/*
This function checks the player signal choice for null input, case sensitivty and spelling
*/
function checkPlayerChoiceValidity(choice) {

    if (choice === null) {
        return false
    }

    choice = choice.toLowerCase();

    switch(choice) {
        case "rock":
            return true

        case "paper":
            return true

        case "scissors":
            return true

        default:
            return false
    }
}

/*
This function plays 5 rounds of rock paper scissors. Round ties and invalid
player inputs do not count as full rounds and are replayed
*/

function playGame() {

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

    
}

playGame();