var humanScore = 0;
var computerScore = 0;

// 0 is rock, 1 is paper, 2 is scissors
function getComputerChoice () {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice () {
    let choice = prompt("Pick: Rock, Paper, Scissors");

    // if (choice.toLowerCase() === "rock") {
    //     return "rock";
    // } else if (choice.toLowerCase() === "paper") {
    //     return "paper";
    // } else if (choice.toLowerCase() === "scissors") {
    //     return "scissors";
    // } else {
    //     return "scissors"; // default to scissors 
    // }

    return choice;
}

function returnTie () {
    console.log("Tie!");
}

function returnHumanWin () {
    console.log("Human Win!");
}

function returnComputerWIn () {
    console.log("Computer Win!");
}

function playRound (humanChoice, computerChoice) {
    console.log("-- Round START! --");
    if (humanChoice.toLowerCase() === "rock") {
        console.log("Human picked Rock!");
        if (computerChoice == 0) {
            console.log("Computer picked Rock!");
            returnTie(); // rock
        } else if (computerChoice == 1) {
            console.log("Computer picked Paper!");
            returnComputerWIn(); // paper
        } else {
            console.log("Computer picked Scissors!");
            returnHumanWin(); // scissors
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        console.log("Human picked Paper!");
        if (computerChoice == 0) {
            console.log("Computer picked Rock!");
            returnHumanWin();
        } else if (computerChoice == 1) {
            console.log("Computer picked Paper!");
            returnTie();
        } else {
            console.log("Computer picked Scissors!");
            returnComputerWin();
        }
    } else {
        console.log("Human picked Scissors!");
        if (computerChoice == 0) {
            console.log("Computer picked Rock!");
            returnComputerWIn();
        } else if (computerChoice == 1) {
            console.log("Computer picked Paper!");
            returnHumanWin();
        } else {
            console.log("Computer picked Scissors!");
            returnTie();
        }
    }
    return "-- Round END! --"
}

const humanPick = getHumanChoice();
const computerPick = getComputerChoice();

// console.log("The computer picked " + getComputerChoice() + "!");

// console.log(getHumanChoice());

console.log(playRound(humanPick,computerPick));