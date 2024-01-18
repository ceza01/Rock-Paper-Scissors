const rockChoice = 'rock';
const paperChoice = "paper";
const scissorsChoice = "scissors";

function getComputerChoice() {

  let opJogo = [rockChoice, paperChoice, scissorsChoice];
  let escolhaJogo = opJogo[Math.floor(Math.random()* opJogo.length)];
  return("The computer chose: " + escolhaJogo);
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === rockChoice && computerSelection === paperChoice){
      return("You lose! Paper beats Rock.");
    } else if (playerSelection === scissorsChoice && computerSelection === rockChoice) {
      return("You lose! Rock beats Scissors.");
    } else if (playerSelection === paperChoice && computerSelection === scissorsChoice) {
      return("You lose! Scissors beats Paper.");
    } else if (playerSelection === rockChoice && computerSelection === scissorsChoice) {
      return("You won! Rock beats Scissors");
    } else if (playerSelection === scissorsChoice && computerSelection === paperChoice) {
      return("You won! Rock beats Paper.");
    } else if (playerSelection === paperChoice && computerSelection === rockChoice) {
      return("You won! Paper beats Rock!");
    } else {
      return("It's a tie!");
    }
}

const playerSelection = rockChoice;
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));