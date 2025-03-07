
var humanScore = 0, computerScore = 0;
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}
function getHumanChoice() {
    choice = prompt("Enter your choice").toLowerCase();
    return choice
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissor") {
                humanScore++;
                break;
            }
            else if (computerChoice == "paper") {
                computerScore++;
                break;
            }
            else
                break;
        case "paper":
            if (computerChoice == "rock") {
                humanScore++;
                break;
            }
            else if (computerChoice == "scissor") {
                computerScore++;
                break;
            }
            else
                break;
        case "scissor":
            if (computerChoice == "paper") {
                humanScore++;
                break;
            }
            else if (computerChoice == "rock") {
                computerScore++;
                break;
            }
            else
                break;
    }

}
function playGame() {

    for (let i = 0; i < 5; i++) {

        var computerChoice = getComputerChoice();
        var humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
        console.log(humanChoice);
        console.log(computerChoice);
        console.log(humanScore, computerScore);
        if (humanScore > 3 || computerScore > 3) {
            break;
        }
    }
    if (humanScore > computerScore) {
        console.log("human wins");
    }
    else if (humanScore < computerScore) {
        console.log("computer wins");
    }
    else
        console.log("tie");

}
playGame();


