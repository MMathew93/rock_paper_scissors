let computerScore= 0;
let playerScore= 0;

//Entire Game
/*function game(playerScore, computerScore) {
    for(playerScore= 0; playerScore>= 3; playerScore++) {
        if(playerScore== 3) {
        alert("You win! Hit refresh to reset and play again!");
    }else {
        for(computerScore= 0; computerScore>= 3; computerScore++) {
            if(computerScore== 3){
            alert("You lose! Hit refrsh to reset and play again!");
            }
         }
        }
    }
*/
//Computers random choice
function computerPlay() {
   const choice= ["rock", "paper", "scissors"];
   let randomChoice= choice[Math.floor(Math.random()*choice.length)];
   return (randomChoice);
}
//Single round of game, player choice is in console
function playRound(playerInput) {
    let playerSelection= playerInput.toLowerCase();
    let computerSelection= computerPlay();
    if(playerSelection=== computerSelection){
        alert("It is a Tie, try again!");
        return;
    }  
    //check for rock
    if(playerSelection=== "rock") {
        if(computerSelection=== "scissors") {
            alert("Rock beats Scissors, you win!");
            playerScore++;
        } else {
            alert("Paper beats Rock, you lose!")
            computerScore++;
        }
    }
        //check for paper
        if(playerSelection=== "paper") {
            if(computerSelection=== "scissors") {
            alert("Scissor beats paper, you lose!");
            computerScore++;
            }else {
                alert("Paper beats Rock, you win!")
                playerScore++;
    }
}
    //check for scissors
        if(playerSelection=== "scissors"){
            if(computerSelection=== "rock") {
            alert("Rock beats Scissors, you lose!");
            computerScore++;
            }else{
                alert("Scissors beats Paper, you win!")
                playerScore++;
    }
}
console.log(playerScore);
console.log(computerScore);
}
