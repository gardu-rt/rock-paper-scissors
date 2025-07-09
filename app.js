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
const para = document.querySelector("p");
const result = document.createElement("span");

function playGame(sign) {
    const humanChoice = sign;
    const computerChoice = getComputerChoice();
    const message = `You pick ${humanChoice}, Computer pick ${computerChoice}.`;
    const whoIsWin = playRound(humanChoice, computerChoice);
    if (whoIsWin === "human") {
        displayResult(`${message} You WIN!`);
    } else if (whoIsWin === "computer") {
        displayResult(`${message} You LOSE!`);
    } else {
        displayResult(`${message} Match DRAW!`);
    }
}

function displayResult(message) {
    result.textContent = message;
    para.appendChild(result);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});