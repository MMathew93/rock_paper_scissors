
let computerScore= 0;
let playerScore= 0;

//Message Prompt asking to play
let message= prompt("Let's play a game of Rock, Paper, Scissors!","");
    if(message== 'Yes') {
        alert("Alright! Select your choice and we'll play!","");
    } else if (message== 'No') {
        alert("Ah man, maybe next time?");
    } else {
        alert("Cancelled.")
    }

//////////////Button stuff?//////////////////////
/*document.getElementById('rock').onclick = playerSelection;
document.getElementById('paper').onclick = playerSelection;
document.getElementById('scissors').onclick = playerSelection;
function user(){
    let playerSelection = this.id;
    console.log("User: " + playerSelection)
}
*/

//Computers random choice
const computerSelection= function computerPlay() {
   const choice= ["Rock", "Paper", "Scissors"];
   let randomChoice= choice[Math.floor(Math.random()*choice.length)];
   console.log(computerSelection);
   return (randomChoice);
}

//Single round of game, player choice is in console
const playRound= function playRound(playerSelection, computerSelection) {
    //playerSelection= playerSelection.toUpperCase();
    switch(playerSelection ||computerSelection) {
    case 'Rock||Scissors':
    case 'Paper||Rock':
    case 'Scissors||Paper':
    playerScore++;
    //Return 'Win';
   

    case 'Rock||Rock':
    case 'Paper||Paper':
    case 'Scissors||Scissors':
    //Return 'Draw';
   

    case 'Scissors||Rock':
    case 'Rock||Paper':
    case 'Paper||Scissors':
    computerScore++;
    //Return 'Lose';
    }
return playRound;
}

/*
###########SWITCH ATTEMPT###############//
switch(playerSelection +"|"+ computerSelection) {
    case "Rock|Scissors":
        text= "Rock beats Scissors, you won!"
    case "Paper|Rock":
        text= "Paper beats Rock, you won!"
    case "Scissors|Paper":
        text= "Scissors beats Paper, you won!"
    playerScore++;
    //Return 'Win';
   

    case "Rock|Rock":
        text= "Oh darn no one wins, let's try that again!"
    case "Paper|Paper":
        text= "Oh darn no one wins, let's try that again!"
    case "Scissors|Scissors":
        text= "Oh darn no one wins, let's try that again!"
    //Return 'Draw';
   

    case "Scissors|Rock":
        text= "Scissors loses to Rock, you lose!"
    case "Rock|Paper":
        text= "Rock loses to Paper, you lose!"
    case "Paper|Scissors":
        text= "Paper loses to Scissors, you lose!"
    computerScore++;
    //Return 'Lose';
    }

}
*/


//function computerPlay() {
    //const computerOptions= ["Rock", "Paper", "Scissors"];
    //const computerNumber= Math.floor(Math.random()* 3);
    //const computerChoice= computerOptions[computerNumber];