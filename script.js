// Main Game Functionality
//
// Simulates an entire game of rockpaperscissors up to a score of 5
function game(event) {
    let selection = event.target.innerText.toLowerCase();
    if (selection == "rock" | selection == "paper" | selection == "scissors") {
        newScore = playRound(selection, computerPlay());
        score[0] = newScore[0];
        score[1] = newScore[1];
        displayScoreboard(score);
        if (score[0] == 5 | score[1] == 5) {
            if (score[0] == 5) {
                displayMessage(`You Win This Round! Play again?`);
            } else {
                displayMessage(`You Lose This Round! Try again?`);
            }
            reset();
        }
    }
}

// Simulates a round of the game
function playRound(playerSelection, computerSelection) {
    let win = false;
    switch (playerSelection) {
        // Checks for tie
        case computerSelection:
            displayMessage('You tied with the computer. Go again!');
            return score;
        
        // Checks for win
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

// Simulates a computer action during a turn
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

// Helper Function: computerPlay()
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

// Display Functions
//
// Displays message to player
function displayMessage(message) {
    const messageDisplay = document.querySelector('.message');
    messageDisplay.textContent = message;
}

// Displays score
function displayScoreboard(score) {
    const scoreBoard = document.querySelector('.scoreboard');
    scoreBoard.textContent = `Player: ${score[0]} | Computer: ${score[1]}`;
}

// Reset Functions
//
// Resets game after one round
function reset() {
    showResetButton(true);
    toggleButtonsGrey(buttons);
}

// Shows or hides reset button at the end of a round
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

// Greys out buttons once round has ended
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

// Keeps track of scores for the round
const score = [0, 0]; // player score, computer score

// Action buttons for player input  
const buttons = document.querySelectorAll('.action-btn');
buttons.forEach(button => button.addEventListener('click', game));

