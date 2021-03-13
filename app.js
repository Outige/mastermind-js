// Imports
import Game from './Game.js';

// BS moves
let code = '2317'
let game = new Game(4, 7, Game.randomCode(4));
console.log(`code: ${game.code}`);

// console.log('\nmove 1')
// let guess = '1238'
// game.addGuessToBoard(guess);
// console.log(`board ${game.board}`);
// console.log(`pigs: ${game.calculateNumberOfPigs(guess)}`);
// console.log(`cows: ${game.calculateNumberOfCows(guess)}`);

// console.log('\nmove 1')
// guess = '4568'
// game.addGuessToBoard(guess);
// console.log(`board ${game.board}`);
// console.log(`pigs: ${game.calculateNumberOfPigs(guess)}`);
// console.log(`cows: ${game.calculateNumberOfCows(guess)}`);


game.refreshCodeListFromBoard(document);

// Selectors
let currentInput = document.querySelector('.current-code').querySelector('.code-input');
let currentCompleteButton = document.querySelector('.current-code').querySelector('button');

// Event listeners
currentCompleteButton.addEventListener('click', processCompleteButtonClick);
currentInput.addEventListener('click', setDeafaultCurrentInput);
currentInput.addEventListener('keypress', lookForReturnKeyPress);

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