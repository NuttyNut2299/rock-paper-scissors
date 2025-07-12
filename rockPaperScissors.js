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

// function returnTie () {
//     console.log("Tie!");
//     return "tie";
// }

// function returnHumanWin () {
//     console.log("Human Win!");
//     return "human";
// }

// function returnComputerWIn () {
//     console.log("Computer Win!");
//     return "computer";
// }

function playRound (humanChoice, computerChoice, roundNumber) {
    let result = "";

    console.log("-- Round " + roundNumber + " START! --");

    if (humanChoice.toLowerCase() === "rock") {
        console.log("Human picked Rock!");
        if (computerChoice == 0) {
            console.log("Computer picked Rock!");
            result = "tie";
        } else if (computerChoice == 1) {
            console.log("Computer picked Paper!");
            result = "computer";
        } else {
            console.log("Computer picked Scissors!");
            result = "human";
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        console.log("Human picked Paper!");
        if (computerChoice == 0) {
            console.log("Computer picked Rock!");
            result = "human";
        } else if (computerChoice == 1) {
            console.log("Computer picked Paper!");
            result = "tie";
        } else {
            console.log("Computer picked Scissors!");
            result = "computer";
        }
    } else {
        console.log("Human picked Scissors!");
        if (computerChoice == 0) {
            console.log("Computer picked Rock!");
            result = "computer";
        } else if (computerChoice == 1) {
            console.log("Computer picked Paper!");
            result = "human";
        } else {
            console.log("Computer picked Scissors!");
            result = "tie";
        }
    }

    console.log("-- Round " + roundNumber + " END! --");
    return result;
}

function playGame () {
    console.log("Let the competition begin!");
    
    for (let i = 1; i <= 5; i++) {
        const humanPick = getHumanChoice();
        const computerPick = getComputerChoice();
        const result = playRound(humanPick,computerPick,i);

        if (result === "human") {
            console.log("Human Win!");
            humanScore+=1;
        } else if (result === "computer") {
            console.log("Computer Win!");
            computerScore+=1;
        } else {
            console.log("Tie!");
        }

        console.log("Current Score! Human: " + humanScore + "! Computer: " + computerScore + "!");
    }

    if (humanScore > computerScore) {
        console.log("Human wins the ROCK PAPER SCISSORS COMPETITION!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the ROCK PAPER SCISSORS COMPETITION!");
    } else {
        console.log("Both human and computer tie in the ROCK PAPER SCISSORS COMPETITION!");
    }

    return "Until next time!";
}

// console.log("The computer picked " + getComputerChoice() + "!");

// console.log(getHumanChoice());

// console.log(playRound(humanPick,computerPick));

console.log(playGame());