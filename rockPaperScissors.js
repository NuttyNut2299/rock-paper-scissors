function getComputerChoice () {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice () {
    let choice = prompt("Pick: Rock, Paper, Scissors");

    if (choice.toLowerCase() === "rock") {
        return "Rock";
    } else if (choice.toLowerCase() === "paper") {
        return "Paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        return "Nothing";
    }
}

console.log("The computer picked " + getComputerChoice() + "!");

console.log(getHumanChoice());