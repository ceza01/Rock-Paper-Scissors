let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {

  let opJogo = ['rock', 'paper', 'scissors'];
  let escolhaJogo = opJogo[Math.floor(Math.random()* opJogo.length)];
  return(escolhaJogo);
  
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === 'rock' && computerSelection === 'paper'){
      computerPoints++;
      return("You lose! Paper beats Rock.");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerPoints++;
      return("You lose! Rock beats Scissors.");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerPoints++;
      return("You lose! Scissors beats Paper.");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerPoints++;
      return("You won! Rock beats Scissors");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerPoints++;
      return("You won! Scissors beats Paper.");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerPoints++;
      return("You won! Paper beats Rock!");
    } else {
      return("It's a tie!");
    }
}

function game(){
    
  const playerSelection = String(prompt("Rock, Paper, Scissors?")).toLowerCase();
    const computerSelection = getComputerChoice();
    return (console.log(playRound(playerSelection, computerSelection)));
  }

for (let i=0; i < 5; i++) game(i);

if (playerPoints > computerPoints) {
  console.log("You won, nice!")
} else if (playerPoints < computerPoints){
  console.log("You lose, try again!")
} else {
  console.log("It's a tie! Play again.")
}