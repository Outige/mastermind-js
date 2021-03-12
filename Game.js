export default class Game {
    constructor(width, height, code) {
        this.width = width;
        this.height = height;
        this.code = [...code];
        this.board = []

        console.log('new game');
    }

    // code is arr
    addGuessToBoard(guess) {
        this.board.push(guess);
    }

    calculateNumberOfPigs(guess) {
        // TODO: add error throw if guess isn't correct length. Also if error isn't num
        let pigs = 0;
        for (let i = 0; i < guess.length; i++) {
            for (let j = 0; j < guess.length; j++) {
                if (guess[i] === this.code[j] && i !== j) {
                    pigs++;
                }
            }
        }
        return pigs;
    }

    calculateNumberOfCows(guess) {
        // TODO: add error throw if guess isn't correct length. Also if error isn't num
        let cows = 0;
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === this.code[i]) {
                cows++;
            }
        }
        return cows;
    }

    // Validtion functions
    isValidGuess(guess) {
        let guessArr = [...guess];

        if (guessArr.length != this.width) {
            return false;
        }
        for (let x of guessArr) {
            if (isNaN(x)) {
                return false;
            }
        }

        return true;
    }

    isGameOver() {
        // TODO: also check if code is guessed correct. I think i've done so
        return  this.board.length >= this.height || this.calculateNumberOfCows(this.board[this.board.length-1]) === this.width;
    }

    // DOM generation
    generateCodeListFromBoard() {
        let codeList = document.createElement('ul');
        codeList.classList.add('code-list');

        // Add past codes
        for (let x of this.board) {
            let codeListItem = document.createElement('li');
            codeListItem.classList.add('code-list-item');
            codeListItem.classList.add('past-code');

            let codeInput = document.createElement('div');
            codeInput.classList.add('code-input');
            codeInput.innerText = `${x}`;

            let confirmCcodeBtn = document.createElement('button');
            confirmCcodeBtn.classList.add('confirm-code-btn');
            confirmCcodeBtn.innerHTML = '<i class="fas fa-check-square"></i>';
            confirmCcodeBtn.disabled = true;

            codeListItem.appendChild(codeInput);
            codeListItem.appendChild(confirmCcodeBtn);
            codeList.appendChild(codeListItem);
        }

        // Add current codes
        if (this.board.length < this.height ) {
            let codeListItem = document.createElement('li');
            codeListItem.classList.add('code-list-item');
            codeListItem.classList.add('current-code');

            let codeInput = document.createElement('div');
            codeInput.classList.add('code-input');
            codeInput.innerText = `${'0'.repeat(this.width)}`;
            codeInput.contentEditable = true;

            let confirmCcodeBtn = document.createElement('button');
            confirmCcodeBtn.classList.add('confirm-code-btn');
            confirmCcodeBtn.innerHTML = '<i class="fas fa-check-square"></i>';

            codeListItem.appendChild(codeInput);
            codeListItem.appendChild(confirmCcodeBtn);
            codeList.appendChild(codeListItem);
        }

        // Add future codes
        for (let i = this.board.length+1; i < this.height; i++) {
            let codeListItem = document.createElement('li');
            codeListItem.classList.add('code-list-item');
            codeListItem.classList.add('future-code');

            let codeInput = document.createElement('div');
            codeInput.classList.add('code-input');
            codeInput.innerText = `${'0'.repeat(this.width)}`;

            let confirmCcodeBtn = document.createElement('button');
            confirmCcodeBtn.classList.add('confirm-code-btn');
            confirmCcodeBtn.innerHTML = '<i class="fas fa-check-square"></i>';
            confirmCcodeBtn.disabled = true;

            codeListItem.appendChild(codeInput);
            codeListItem.appendChild(confirmCcodeBtn);
            codeList.appendChild(codeListItem);
        }

        // TODO: add the current and future codes
        return codeList;
    }

    // DOM manipulation
    refreshCodeListFromBoard(document) {
        let codeList = this.generateCodeListFromBoard();

        let gameContainer = document.getElementsByClassName('game-container')[0];
        let oldCodeList = document.getElementsByClassName('code-list')[0];
        oldCodeList.remove();
        gameContainer.appendChild(codeList);
    }

}