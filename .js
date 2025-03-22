
var humanScore = 0, computerScore = 0;
const computerSelection = document.querySelector("#computerChoice");
const humanScorecard = document.querySelector("#humanScorecard");
const compScorecard = document.querySelector("#compScorecard");

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            computerSelection.textContent = "rock";
            return "rock";
        case 1:
            computerSelection.textContent = "paper";
            return "paper";
        case 2:
            computerSelection.textContent = "scissors";
            return "scissor";
    }
}


const choiceButton = document.querySelector(".humanChoice");
choiceButton.addEventListener("click", (event) => {
    humanChoice = event.target.textContent;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    humanScorecard.textContent = `Your score:${humanScore}`;
    compScorecard.textContent = `Computer score:${computerScore}`;
});


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



