console.log("Testing!")

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

}

/*
Pseudocode: This function computes the players signal choice 
            against the computers signal choice and returns 
            the resulting winner
    1. Compare the player choice agaisnt the computer choice
    2. return the winning choice based on the rules of rock paper 
       scissors
           -if there is a tie, return that result
*/
function playRound(playerSelection, computerSelection) {

}

/*
Pseudocode: This function plays 5 rounds of rock paper scissors
            tracking the score and reporting a winner or loser 
            at the end of the 5 rounds
    1. loop 5 times
    2. play the game each time
    3. retrieve the result of each round, if it's a tie, 
       replay the round without taking up a round of the 5
    4. update the score each time
    5. at the end of the 5 loops, display the winner and loser 
       (or a tie?)
*/

function game() {
    
}