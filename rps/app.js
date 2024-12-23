// console.log("Hello, World!")

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function getComputerChoice() {
    const choices=["rock","paper","scissors"];
    return choices[getRandomInt(3)];
}

function playRound(choice) {
    let c_choice = getComputerChoice().toLowerCase();
    let h_choice = choice;
    let winner="draw";
    if(c_choice=="rock"){
        if(h_choice=="scissors") winner = "computer";
        else if(h_choice =="paper") winner = "human";
    }
    else if(c_choice=="scissors"){
        if(h_choice=="paper")winner = "computer";
        else if(h_choice=="rock")winner = "human";
    }
    else if (c_choice=="paper"){
        if(h_choice=="rock")winner = "computer";
        else if(h_choice=="scissor")winner = "human";
    }
    else{
        console.log("Invalid entry!")
    }
    console.log(winner);
    return winner;
}

let computer_score = 0;
let human_score = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");


rock.addEventListener("click",function (){
    playRound("rock");
});
paper.addEventListener("click",function (){
    playRound("paper");
});
scissor.addEventListener("click",function (){
    playRound("scissor");
});

if(human_score>computer_score);

// console.log(getComputerChoice());
// console.log(getHumanChoice());
// let rounds = prompt("Enter the number of rounds: ")

// let scores = [];
// if(scores[0]>scores[1]){
//     console.log("YOU WIN!");
//     console.log("Scores: ","Your Score: ",scores[0]," Bot Score: ",scores[1]);
// }
// else if(scores[0]<scores[1]){
//     console.log("BOT WINS!");
//     console.log("Scores: ","Your Score: ",scores[0]," Bot Score: ",scores[1]);
// }
// else{
//     console.log("IT'S A DRAW!")
//     console.log("Scores: ","Your Score: ",scores[0]," Bot Score: ",scores[1]);

// }
