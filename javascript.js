let computerScore= 0;
let playerScore= 0;
const computerSelection = computerPlay()


//Message Prompt asking to play
let message= prompt("Let's play a game of Rock, Paper, Scissors!","");
    if(message== 'Yes') {
        alert("Alright! Select your choice and we'll play!","");
    } else if (message== 'No') {
        alert("Ah man, maybe next time?");
    } else {
        alert("Cancelled.")
    }
//Entire Game
//function game() {

//Computers random choice
function computerPlay() {
   const choice= ["Rock", "Paper", "Scissors"];
   let randomChoice= choice[Math.floor(Math.random()*choice.length)];
   console.log(computerPlay);
}
//Single round of game, player choice is in console
function playRound(playerSelection, computerSelection) {
    if(playerSelection=== computerSelection){
        alert("It is a Tie, try again!");
        return;
    }
    //check for rock
    if(playerSelection=== "Rock"){
        if(computerSelection=== "Scissors") {
            alert("Rock beats Scissors, you win!");
            playerScore++;
            return;
        }else{
            alert("Paper beats Rock, you lose!")
            computerScore++;
            return;
        }
    }
    //check for paper
    if(playerSelection=== "Paper"){
        if(computerSelection=== "Scissors") {
            alert("Scissors beats Paper, you lose!");
            computerScore++
            return;
        }else{
            alert("Paper beats Rock, you win!")
            playerScore++;
            return;
        }
    }
    //check for scissors
    if(playerSelection=== "Scissors"){
        if(computerSelection=== "Rock") {
            alert("Rock beats Scissors, you lose!");
            computerScore++;
            return;
        }else{
            alert("Scissors beats Paper, you win!")
            playerScore++;
            return;
        }
    }


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