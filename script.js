let getComputerChoice = Math.random();
if (getComputerChoice < 0.34) {
    getComputerChoice = "Rock"
}
else if (getComputerChoice <= 0.67) {
    getComputerChoice = "Paper"
}
else {
    getComputerChoice = "Scissors"
}

console.log(getComputerChoice);

let getPlayerChoice = prompt("Please choose Rock,Paper or Scissors");
if (getPlayerChoice = "Rock" && getComputerChoice == "Rock") {
    console.log("DRAW")
}
else if (getPlayerChoice = "Rock" && getComputerChoice == "Paper") {
    console.log("Computer Wins")
}
else if (getPlayerChoice = "Rock" && getComputerChoice == "Scissors") {
    console.log("Player Wins")
}
else if (getPlayerChoice = "Paper" && getComputerChoice == "Rock") {
    console.log("Player Wins")
}
else if (getPlayerChoice = "Paper" && getComputerChoice == "Paper") {
    console.log("DRAW")
}
else if (getPlayerChoice = "Paper" && getComputerChoice == "Scissors") {
    console.log("Computer Wins")
}
else if (getPlayerChoice = "Scissors" && getComputerChoice == "Rock") {
    console.log("Computer Wins")
}
else if (getPlayerChoice = "Scissors" && getComputerChoice == "Paper") {
    console.log("Player Wins")
}
else if (getPlayerChoice = "Scissors" && getComputerChoice == "Scissors") {
    console.log("Ultimate Draw")
}


