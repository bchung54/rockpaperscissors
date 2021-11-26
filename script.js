function computerPlay() {
    switch (getRandomInt(0,3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function playRound(playerSelection, computerSelection) {
    let win = false;
    switch (playerSelection) {
        case computerSelection:
            return "Draw"
        
        case "rock":
            if (computerSelection == "scissors") {
                win = true;
            }
            break;
        
        case "paper":
            if (computerSelection == "rock") {
                win = true;
            }
            break;
        
        case "scissors":
            if (computerSelection == "paper") {
                win = true;
            }
            break;
    }

    if (win) {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        let selection
        do {
            selection = prompt("Rock. Paper. Scissors. Shoot!").toLowerCase();
        }
        while (selection != "rock" & selection != "paper" & selection != "scissors");
        console.log(playRound(selection, computerPlay()));
    }
}

game(3);