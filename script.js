let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {

  let opJogo = ['rock', 'paper', 'scissors'];
  let escolhaJogo = opJogo[Math.floor(Math.random()* opJogo.length)];
  return(escolhaJogo);
  
}

function playRound(playerSelection, computerSelection) {
  let result = '';
  if (playerSelection === 'rock' && computerSelection === 'paper'){
      computerPoints++;
      result = ("You lose! Paper beats Rock." + "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerPoints++;
      result = ("You lose! Rock beats Scissors." + "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerPoints++;
      result = ("You lose! Scissors beats Paper." + "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerPoints++;
      result = ("You won! Rock beats Scissors" + "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerPoints++;
      result = ("You won! Scissors beats Paper." + "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerPoints++;
      result =  ("You won! Paper beats Rock!" + "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);
    } else {
      result = ("It's a tie!"+ "<br><br>Computer Score: " + computerPoints + "<br>You: " + playerPoints);;
    }
    document.querySelector('#results').innerHTML = result;
    return
}

/*function game(){
    
  const playerSelection = String(prompt("Rock, Paper, Scissors?")).toLowerCase();
    const computerSelection = getComputerChoice();
    return (console.log(playRound(playerSelection, computerSelection)));
  } */

const computerChoice = getComputerChoice();
const btn1 = document.querySelector('#btn-rock');
const btn2 = document.querySelector('#btn-paper');
const btn3 = document.querySelector('#btn-scissors');

btn1.addEventListener('click', () => playRound('rock', computerChoice));
btn2.addEventListener('click', () => playRound('paper', computerChoice));
btn3.addEventListener('click', () => playRound('scissors', computerChoice));

const div = document.createElement('div');
div.id = "results";
document.body.appendChild(div);
