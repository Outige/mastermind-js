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

    isGameOver() {
        // TODO: also check if code is guessed correct. I think i've done so
        return  this.board.length >= this.height || this.calculateNumberOfCows(this.board[this.board.length-1]) === this.width;
    }
}