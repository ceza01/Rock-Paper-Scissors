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

const computerChoice = getComputerChoice();
const btn1 = document.querySelector('#btn-rock');
const btn2 = document.querySelector('#btn-paper');
const btn3 = document.querySelector('#btn-scissors');

btn1.addEventListener('click', () => playRound('rock', computerChoice));
btn2.addEventListener('click', () => playRound('paper', computerChoice));
btn3.addEventListener('click', () => playRound('scissors', computerChoice));