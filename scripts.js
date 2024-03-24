//Setup variables
let computerChoice;
let playerChoice;

function cpuChoice(){
let ranSelection;
  let num = Math.random() * 100;
 
  if(num <33) {
  ranSelection = "rock";
  } else if (num >= 67) {
  ranSelection = "paper";
  }
  else {
  ranSelection = "scissors";  
  }
 
  return ranSelection;
}

/* computerChoice = cpuChoice(); */

console.log(cpuChoice());