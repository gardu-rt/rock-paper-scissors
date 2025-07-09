// get human choice
function getHumanChoice() {
    // prompt human for choice
    return prompt("Enter your choice: ").trim().toUpperCase();
}

// get computer choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const indexRandom = Math.floor(Math.random() * choices.length);
    return choices[indexRandom];
}

// play the round
function playRound(human, comp) {
    switch (comp) {
        case "ROCK":
            switch (human) {
                case "ROCK":
                    return "draw";
                case "PAPER":
                    return "human";
                case "SCISSORS":
                    return "computer";
            }
        case "PAPER":
            switch (human) {
                case "ROCK":
                    return "computer";
                case "PAPER":
                    return "draw";
                case "SCISSORS":
                    return "human";
            }
        case "SCISSORS":
            switch (human) {
                case "ROCK":
                    return "human";
                case "PAPER":
                    return "computer";
                case "SCISSORS":
                    return "draw";
            }
    }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const humanScore = document.querySelector("#human-score");
const compScore = document.querySelector("#computer-score");

const resultMessage = document.createElement("span");

const textHumanScore = document.createElement("span");
humanScore.appendChild(textHumanScore);
textHumanScore.textContent = 0;

const textCompScore = document.createElement("span");
compScore.appendChild(textCompScore);
textCompScore.textContent = 0;

function playGame(sign) {
    let humanScore = parseInt(textHumanScore.textContent);
    let computerScore = parseInt(textCompScore.textContent);
    const humanChoice = sign;
    const computerChoice = getComputerChoice();
    const message = `You pick ${humanChoice}, Computer pick ${computerChoice}.`;
    const whoIsWin = playRound(humanChoice, computerChoice);
    if (whoIsWin === "human") {
        displayResult(`${message} You WIN!`);
        humanScore += 1;
        textHumanScore.textContent = humanScore;
    } else if (whoIsWin === "computer") {
        displayResult(`${message} You LOSE!`);
        computerScore += 1;
        textCompScore.textContent = computerScore;
    } else {
        displayResult(`${message} Match DRAW!`);
    }

    announceWinner(humanScore, computerScore);
}

function displayResult(message) {
    resultMessage.textContent = message;
    result.appendChild(resultMessage);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});

function announceWinner(human, computer) {
    if (human === 5) {
        alert(`Congrats! You WIN!!!
            Your Total Score: ${human}
            Computer Total Score: ${computer}`);
        location.reload();
    } else if (computer === 5) {
        alert(`Game Over!!!
            Your Total Score: ${human}
            Computer Total Score: ${computer}`);
        location.reload();
    }
}