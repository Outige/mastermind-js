// Imports
import Game from './Game.js';
import Settings from './Settings.js';

/* 
    settings
*/
let settings = new Settings();
settings.loadSettingsForm(document);

// Selectors
let startGameButton = document.querySelector('.start-game');
let codeWidth = document.querySelector('.code-width').getElementsByTagName('input')[0];
let codeHeight = document.querySelector('.code-height').getElementsByTagName('input')[0];

// Event listeners
startGameButton.addEventListener('click', startButtonOnClick);

let game;
let currentInput;// = document.querySelector('.current-code').querySelector('.code-input');
let currentCompleteButton;// = document.querySelector('.current-code').querySelector('button');

function startButtonOnClick() {
    if (codeWidth.value > 0 && codeHeight.value > 0) {
        game = new Game(parseInt(codeWidth.value, 10),
        parseInt(codeHeight.value, 10), Game.randomCode(parseInt(codeWidth.value, 10)));
        game.refreshCodeListFromBoard(document);
        currentInput = document.querySelector('.current-code').querySelector('.code-input');
        currentCompleteButton = document.querySelector('.current-code').querySelector('button');
        currentCompleteButton.addEventListener('click', processCompleteButtonClick);
        currentInput.addEventListener('click', setDeafaultCurrentInput);
        currentInput.addEventListener('keypress', lookForReturnKeyPress);
        console.log(`code: ${game.code}`);
    }
}


/* Game */
// console.log(`code: ${game.code}`);

// game.refreshCodeListFromBoard(document);

// Selectors
// let currentInput = document.querySelector('.current-code').querySelector('.code-input');
// let currentCompleteButton = document.querySelector('.current-code').querySelector('button');

// Event listeners
// currentCompleteButton.addEventListener('click', processCompleteButtonClick);
// currentInput.addEventListener('click', setDeafaultCurrentInput);
// currentInput.addEventListener('keypress', lookForReturnKeyPress);

// Functions
function processCompleteButtonClick(event) {
    let guess = currentInput.innerText
    if (game.isValidGuess(guess) == true) {
        game.addGuessToBoard(guess);
        game.refreshCodeListFromBoard(document);
        if (game.calculateNumberOfCows(guess) === game.width) {
            alert("You Win!");
            return;
        } else if (game.board.length >= game.height) {
            alert("You Lose :(");
            return;
        }
        currentInput = document.querySelector('.current-code').querySelector('.code-input');
        currentCompleteButton = document.querySelector('.current-code').querySelector('button');
        currentCompleteButton.addEventListener('click', processCompleteButtonClick);
        currentInput.addEventListener('click', setDeafaultCurrentInput);
        currentInput.addEventListener('keypress', lookForReturnKeyPress);
        // currentInput.focus();
        // currentInput.innerText = String(currentInput.innerText).replace(/^\s+|\s+$/g, '');
    } else {
        currentInput.innerText = '0'.repeat(game.width);
        // currentInput.style.border = "solid red";
        currentInput.style.color = "red";
        // currentInput.style.borderRadius = "40px";
    }
}

function setDeafaultCurrentInput() {
    currentInput.style.color = "black";
    if (currentInput.innerText === '0'.repeat(game.width)) {
        currentInput.innerText = '';
    }
}

function lookForReturnKeyPress(event) {
    if (event.which === 13 || event.keyCode == 13) {
        currentInput.innerText = String(currentInput.innerText).replace(/^\s+|\s+$/g, '');
        processCompleteButtonClick(event);
    }
}