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

// play 5 game and record score for each player
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const whoIsWin = playRound(humanChoice, computerChoice);
        const greetHuman = `You pick ${humanChoice}, Computer pick ${computerChoice}. You WIN!!!`;
        const greetComputer = `You pick ${humanChoice}, Computer pick ${computerChoice}. You LOSE!!!`;
        const draw = `You pick ${humanChoice}, Computer pick ${computerChoice}. Match DRAW!!!`;

        if (whoIsWin === "human") {
            console.log(greetHuman);
            humanScore += 1;
        } else if (whoIsWin === "computer") {
            console.log(greetComputer);
            computerScore += 1;
        } else {
            console.log(draw);
        }
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You WIN the Game!!!");
    } else if (humanScore < computerScore) {
        console.log("You LOSE the Game!!!");
    } else {
        console.log("Match DRAW!!!");
    }
}

playGame();
