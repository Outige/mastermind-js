export default class Game {
    constructor(width, height, code) {
        this.width = width;
        this.height = height;
        this.code = [...code];
        this.board = []

        console.log('new game');
    }

    static randomCode(width) {
        let code = '';
        for (let i = 0; i < width; i++) {
            console.log(i);
            let x = Math.floor(Math.random() * 10);
            console.log(`${code} ${x}`);
            if (code.indexOf(x.toString()) > -1) {
                i--;
                console.log('me');
            } else {
                code += x;
            }
        }
        return code;
    }

    // code is arr
    addGuessToBoard(guess) {
        this.board.push(guess);
    }

    calculateNumberOfPigs(guess) {
        let cowArray = [];
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === this.code[i]) {
                cowArray.push(i);
            }
        }


        let pigs = 0;
        let pigArray = [];
        // 0220
        // 2317
        console.log(cowArray);
        for (let i = 0; i < guess.length; i++) {
            if (cowArray.indexOf(i) > -1) {
                continue;
            }
            for (let j = 0; j < guess.length; j++) {
                if (cowArray.indexOf(j) > -1 || pigArray.indexOf(j) > -1) {
                    continue;
                }
                if (guess[i] === this.code[j] && i !== j) {
                    pigs++;
                    pigArray.push(j);
                    break;
                }
            }
        }
        return pigs;
    }

    calculateNumberOfCows(guess) {
        console.log(guess);
        console.log(this.code);
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
        if (this.board.length === 0) {
            return false;
        }
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

            let pig = document.createElement('div');
            pig.classList.add('pig');
            pig.innerText = this.calculateNumberOfPigs(x);

            let cow = document.createElement('div');
            cow.classList.add('cow');
            cow.innerText = this.calculateNumberOfCows(x);

            codeListItem.appendChild(codeInput);
            codeListItem.appendChild(confirmCcodeBtn);
            codeListItem.appendChild(pig);
            codeListItem.appendChild(cow);
            codeList.appendChild(codeListItem);
        }

        // Add current codes
        if (this.board.length < this.height && !this.isGameOver()) {
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
            codeListItem.style.opacity = 0.25-((i- this.board.length)/this.height);

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
        if (oldCodeList != null || oldCodeList !== undefined) {
            oldCodeList.remove();
        }
        let settingsForm = document.querySelector('.settings-form');
        if (settingsForm !== null || settingsForm != undefined) {
            settingsForm.remove();
        }
        gameContainer.appendChild(codeList);
    }

}