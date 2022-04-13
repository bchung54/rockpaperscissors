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
            return score;
        
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
        return [score[0] + 1, score[1]];
    } else {
        return [score[0], score[1] + 1];
    }
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function game(event) {
    let selection = event.target.innerText.toLowerCase();
    if (selection == "rock" | selection == "paper" | selection == "scissors") {
        newScore = playRound(selection, computerPlay());
        score[0] = newScore[0];
        score[1] = newScore[1];
        display.textContent = `Player: ${score[0]} Computer: ${score[1]}`;
        if (score[0] == 5) {
            display.textContent = `You Win! ${display.textContent}`;
        } else if (score[1] == 5) {
            display.textContent = `You Lose! ${display.textContent}`;
        }
    }
}

const score = [0, 0]; // player score, computer score
const display = document.querySelector('.scoreboard');
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', game));
//const rockButton = document.getElementById('rock');
//rockButton.addEventListener('click', playTurn);

