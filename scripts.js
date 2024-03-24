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

function playGame(pcChoice, playChoice) {
    let message;
    let mLost = "You Lost!";
    let mWin = "You Win!";
    let mTie = "ITS A TIE!";
    

    if(pcChoice === "rock" && playChoice === "paper") {
        message = mWin;

    } else if (pcChoice === "rock" && playChoice === "scissor") {
        message = mLost;

    }   else if (pcChoice === "rock" && playChoice === "rock") {
        message = mTie;

    }   else if (pcChoice === "paper" && playChoice === "paper") {
        message = mTie;

    }   else if (pcChoice === "paper" && playChoice === "rock") {
        message = mLost; 

    }   else if (pcChoice === "paper" && playChoice === "scissor") {
        message = mWin;

    }   else if (pcChoice === "scissor" && playChoice === "rock") {
        message = mWin;

    }   else if (pcChoice === "scissor" && playChoice === "paper") {
        message = mLost;
        
    }   else if (pcChoice === "scissor" && playChoice === "scissor") {
        message = mTie;
    }   

    return message;
}

console.log(playGame(computerChoice, playerChoice));