/* 

Problem solving:

1. Understand the problem/write it in english

    -Implement the game "Rock Paper Scissors", where 2 players,
    (a player and a computer opponent who makes random moves) pick
    between 3 choices of hand signal (rock, paper and scissors). 
    Rock beats scissors, scissors beats paper, and paper beats rock.
    The player is prompted to make their choice of signal, then 
    this choice is computed against the choice of the computer.
    Finally the resulting winner is displayed to the screen


2. Ask questions about the problem (UI? Input(s)? Output(s)? 
   How to get from Input to Output?)

   -UI? -->         Text-only, prompt based inputs
   -Input(s) -->    The player is prompted uing text prompts
   -Output(s) -->   A string showing the winner of the round
   -How to? -->     ...


3. Psuedocode/subproblems is provided for each function

*/

/*
Pseudocode: This function generates the computers signal choice
    1. generate a random number between 1-3 (or 0-2)
    2. return the string "Rock" or "Paper" or "Scissors"
       based on the random number

*/

function getComputerChoice() {

    // 1.

    let random = Math.random() * 3;

    // 2. 

    if (random < 1) {
        return "Rock"
    } else if (random >= 1 && random < 2) {
        return "Paper"
    } else {
        return "Scissors"
    }


}

/*
Pseudocode: This function computes the players signal choice 
            against the computers signal choice and returns 
            the resulting winner
    1. Compare the player choice agaisnt the computer choice
    2. return the winning choice based on the rules of rock paper 
       scissors
           -if there is a tie, return that result

    -note: Rock beats scissors, scissors beats paper, and paper beats rock
*/
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //1. and //2 combined
    if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} ties ${computerSelection}`
    } else {
        if ((playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "paper")
            || (playerSelection === "paper" && computerSelection === "rock")) {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    }
}

/*
Pseudocode: This function retrives input from the player

*/

function getPlayerChoice() {
    let choice = prompt("Enter One of Three Choices (Rock, Paper, or Scissors)");
    return choice;
}

/*
Pseudocode: ...

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
Pseudocode: This function plays 5 rounds of rock paper scissors
            tracking the score and reporting a winner or loser 
            at the end of the 5 rounds
    1. loop 5 times
    2. retrive player response (and check it for validity, ask the 
        player again if they enter in an invalid choice)
    3. play the game
    4. retrieve the result of each round, if it's a tie, 
       replay the round without taking up a round of the 5
    5. update the score each time
    6. at the end of the 5 loops, display the winner and loser 
       (or a tie?)
*/

function game() {

    // 1. 
    let gameCounter = 0;
    let keepGameGoing = true

    while (keepGameGoing) {

        // 2. If player choice is invalid, prompt the player again
        let pChoice = getPlayerChoice() 
        if (!(checkPlayerChoiceValidity(pChoice))) {
            console.log("Your choice is of the incorrect form or null, please choose either 'Rock' or 'Paper' or 'Scissors'")
            continue;
        }

        console.log(`Your choice is ${pChoice}`)

        gameCounter = gameCounter + 1;

        if (gameCounter >= 5) {
            keepGameGoing = false
        }

    }

    
}

// Player vs Computer logic testing
/*
console.log(playRound("Rock", "Rock"))
console.log(playRound("Rock", "Paper"))
console.log(playRound("Rock", "Scissors"))
console.log("------------------------------")
console.log(playRound("Paper", "Rock"))
console.log(playRound("Paper", "Paper"))
console.log(playRound("Paper", "Scissors"))
console.log("------------------------------")
console.log(playRound("Scissors", "Rock"))
console.log(playRound("Scissors", "Paper"))
console.log(playRound("Scissors", "Scissors"))
*/

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

game();