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
            displayMessage('You tied with the computer. Go again!');
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
        displayMessage('You win this turn!');
        return [score[0] + 1, score[1]];
    } else {
        displayMessage('You lose this turn!');
        return [score[0], score[1] + 1];
    }
}

function game(event) {
    let selection = event.target.innerText.toLowerCase();
    if (selection == "rock" | selection == "paper" | selection == "scissors") {
        newScore = playRound(selection, computerPlay());
        score[0] = newScore[0];
        score[1] = newScore[1];
        displayScoreboard(score);
        if (score[0] == 5) {
            displayMessage(`You Win This Round! Would you like to play again?`);
            showResetButton(true);
            toggleButtonsGrey(buttons);
        } else if (score[1] == 5) {
            displayMessage(`You Lose This Round! Would you like to try again?`);
            showResetButton(true);
            toggleButtonsGrey(buttons);
        }
    }
}

function displayMessage(message) {
    const messageDisplay = document.querySelector('.message');
    messageDisplay.textContent = message;
}

function displayScoreboard(score) {
    const scoreBoard = document.querySelector('.scoreboard');
    scoreBoard.textContent = `Player: ${score[0]} | Computer: ${score[1]}`;
}

function showResetButton(display) {
    const messageDisplay = document.querySelector('.message');
    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-btn');
    resetButton.textContent = 'refresh';
    resetButton.addEventListener('click', function() {
        messageDisplay.textContent = 'Choose your first action of the new round';
        score[0] = 0;
        score[1] = 0;
        displayScoreboard(score);
        toggleButtonsGrey(false);
    })

    if (display) {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(resetButton);
    } else {
        messageDisplay.removeChild(messageDisplay.lastChild);
    }
}

function toggleButtonsGrey(grey) {
    if (grey){
        buttons.forEach(function(button){
            button.classList.add('grey');
            button.removeEventListener('click', game);
        });
    } else {
        buttons.forEach(function(button) {
            button.classList.remove('grey');
            button.addEventListener('click', game);
        });
    }
}

const score = [0, 0]; // player score, computer score
const buttons = document.querySelectorAll('.action-btn');
buttons.forEach(button => button.addEventListener('click', game));

