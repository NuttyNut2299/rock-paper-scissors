var humanScore = 0;
var computerScore = 0;

// 0 is rock, 1 is paper, 2 is scissors
function getComputerChoice () {
    return Math.floor(Math.random() * 3);
}

// function getHumanChoice (choice) {
//     let choice = prompt("Pick: Rock, Paper, Scissors");

//     if (choice.toLowerCase() === "rock") {
//         return "rock";
//     } else if (choice.toLowerCase() === "paper") {
//         return "paper";
//     } else if (choice.toLowerCase() === "scissors") {
//         return "scissors";
//     } else {
//         return "scissors"; // default to scissors 
//     }

//     return choice;
// }

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

function playRound (humanChoice, computerChoice) {
    let result = "";

    // console.log("-- Round " + roundNumber + " START! --");

    if (humanChoice.toLowerCase() === "rock") {
        // console.log("Human picked Rock!");
        if (computerChoice === 0) {
            // console.log("Computer picked Rock!");
            choiceDisplay.textContent = "Human picked Rock! Computer picked Rock! Tie!";
            result = "tie";
        } else if (computerChoice === 1) {
            // console.log("Computer picked Paper!");
            choiceDisplay.textContent = "Human picked Rock! Computer picked Paper! Computer win!";
            result = "computer";
        } else {
            // console.log("Computer picked Scissors!");
            choiceDisplay.textContent = "Human picked Rock! Computer picked Scissors! Human win!";
            result = "human";
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        // console.log("Human picked Paper!");
        if (computerChoice === 0) {
            // console.log("Computer picked Rock!");
            choiceDisplay.textContent = "Human picked Paper! Computer picked Rock! Human win!";
            result = "human";
        } else if (computerChoice === 1) {
            // console.log("Computer picked Paper!");
            choiceDisplay.textContent = "Human picked Paper! Computer picked Paper! Tie!";
            result = "tie";
        } else {
            // console.log("Computer picked Scissors!");
            choiceDisplay.textContent = "Human picked Paper! Computer picked Scissors! Computer win!";
            result = "computer";
        }
    } else {
        // console.log("Human picked Scissors!");
        if (computerChoice === 0) {
            // console.log("Computer picked Rock!");
            choiceDisplay.textContent = "Human picked Scissors! Computer picked Rock! Computer win!";
            result = "computer";
        } else if (computerChoice === 1) {
            // console.log("Computer picked Paper!");
            choiceDisplay.textContent = "Human picked Scissors! Computer picked Paper! Human win!";
            result = "human";
        } else {
            // console.log("Computer picked Scissors!");
            choiceDisplay.textContent = "Human picked Scissors! Computer picked Scissors! Tie!";
            result = "tie";
        }
    }

    // console.log("-- Round " + roundNumber + " END! --");
    return result;
}

// function playGame () {
//     console.log("Let the competition begin!");
    
//     for (let i = 1; i <= 5; i++) {
//         const humanPick = getHumanChoice();
//         const computerPick = getComputerChoice();
//         const result = playRound(humanPick,computerPick,i);

//         if (result === "human") {
//             console.log("Human Win!");
//             humanScore+=1;
//         } else if (result === "computer") {
//             console.log("Computer Win!");
//             computerScore+=1;
//         } else {
//             console.log("Tie!");
//         }

//         console.log("Current Score! Human: " + humanScore + "! Computer: " + computerScore + "!");
//     }

//     if (humanScore > computerScore) {
//         console.log("Human wins the ROCK PAPER SCISSORS COMPETITION!");
//     } else if (humanScore < computerScore) {
//         console.log("Computer wins the ROCK PAPER SCISSORS COMPETITION!");
//     } else {
//         console.log("Both human and computer tie in the ROCK PAPER SCISSORS COMPETITION!");
//     }

//     return "Until next time!";
// }

function playGame(result) {
    if (result === "human") {
        humanScore+=1;
    } else if (result === "computer") {
        computerScore+=1;
    } else {
        // do nothing
    }
    scoreDisplay.textContent = "Human Score: " + humanScore + "! Computer Score: " + computerScore + "!";

    if (humanScore === 5) {
        winnerDisplay.textContent = "Human is the champion for winning 5 rounds!"
        disableButtons();
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Computer is the champion for winning 5 rounds!"
        disableButtons();
    } else {
        // do nothing
    }
}

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    choiceDisplay.textContent = "";
    scoreDisplay.textContent = "";
    winnerDisplay.textContent = "";
}

// console.log("The computer picked " + getComputerChoice() + "!");

// console.log(getHumanChoice());

// console.log(playRound(humanPick,computerPick));

// console.log(playGame());

const container = document.querySelector(".container");

const rules = document.createElement("h1");
rules.textContent = "Pick your choice! First to 5 wins";

container.appendChild(rules);

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

btnRock.setAttribute("style", "width: 200px; height: 50px; margin: 12px; font-size: 24px;");
btnPaper.setAttribute("style", "width: 200px; height: 50px; margin: 12px; font-size: 24px;");
btnScissors.setAttribute("style", "width: 200px; height: 50px; margin: 12px; font-size: 24px;");

const choiceDisplay = document.createElement("div");
const scoreDisplay = document.createElement("div");
const winnerDisplay = document.createElement("div");

scoreDisplay.textContent = "Human Score: " + humanScore + "! Computer Score: " + computerScore + "!";

container.appendChild(choiceDisplay);
container.appendChild(scoreDisplay);
container.appendChild(winnerDisplay);

const btnReset = document.createElement("button");

btnReset.textContent = "Reset Game";

container.appendChild(btnReset);

btnRock.addEventListener("click", () => {
    const result = playRound(btnRock.textContent, getComputerChoice());
    playGame(result);
});

btnPaper.addEventListener("click", () => {
    const result = playRound(btnPaper.textContent, getComputerChoice());
    playGame(result);
});

btnScissors.addEventListener("click", () => {
    const result = playRound(btnScissors.textContent, getComputerChoice());
    playGame(result);
});

btnReset.addEventListener("click", () => {
    resetGame();
});