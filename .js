
var humanScore = 0, computerScore = 0;

const computerSelection = document.querySelector("#computerChoice");
const humanScorecard = document.querySelector("#humanScorecard");
const compScorecard = document.querySelector("#compScorecard");
const choiceButton = document.querySelector(".humanChoice");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * 3)];
    computerSelection.textContent = choice;
    return choice;
}

function declareWinner(winner) {
    alert(`Gameover ${winner} wins`);
}


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
    if (computerScore === 5)
        declareWinner("computer");
    else if (humanScore === 5)
        declareWinner("Human");
}



