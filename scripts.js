//Setup variables
let computerChoice;
let playerChoice;

//creates a random selection for Rock paper or scissor 
function getCpuChoice(){
let ranSelection;
let num = Math.random() * 100;
 
  if(num <=33) {
  ranSelection = "rock";
  } else if (num >= 67) {
  ranSelection = "paper";
  }
  else {
  ranSelection = "scissors";  
  }
 
  return ranSelection;
}

//assign random selection to computer 
computerChoice = getCpuChoice(); 

//Allows player to enter their selection
playerChoice = prompt("Enter your choice: Rock, paper, scissor").toLowerCase();

console.log(playerChoice);