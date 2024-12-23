// console.log("Hello, World!")

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function getComputerChoice() {
    const choices=["rock","paper","scissors"];
    return choices[getRandomInt(3)];
}

function getHumanChoice() {
    let choice = prompt("Rock Paper Scissors!");
    return choice;
}


function playGame(nums) {
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound() {
        c_choice = getComputerChoice().toLowerCase();
        h_choice = getHumanChoice().toLowerCase();
        if(c_choice=="rock"){
            if(h_choice=="scissors") computerScore++;
            else if(h_choice =="paper") humanScore++;
        }
        else if(c_choice=="scissors"){
            if(h_choice=="paper")computerScore++;
            else if(h_choice=="rock")humanScore++;
        }
        else if (c_choice=="paper"){
            if(h_choice=="rock")computerScore++;
            else if(h_choice=="scissor")humanScore++;
        }
        else{
            console.log("Invalid entry!")
        }
    }
    for(let i = 0; i<nums; i++)playRound();
    return [humanScore, computerScore];
}



// console.log(getComputerChoice());
// console.log(getHumanChoice());
let rounds = prompt("Enter the number of rounds: ")
let scores = playGame(rounds);
if(scores[0]>scores[1]){
    console.log("YOU WIN!");
    console.log("Scores: ","Your Score: ",scores[0]," Bot Score: ",scores[1]);
}
else if(scores[0]<scores[1]){
    console.log("BOT WINS!");
    console.log("Scores: ","Your Score: ",scores[0]," Bot Score: ",scores[1]);
}
else{
    console.log("IT'S A DRAW!")
    console.log("Scores: ","Your Score: ",scores[0]," Bot Score: ",scores[1]);

}
