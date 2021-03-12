import Game from './Game.js';

let code = '2368'
let game = new Game(4, 20, code);
console.log(`code: ${game.code}`);

console.log('\nmove 1')
let guess = '1238'
game.addGuessToBoard(guess);
console.log(`board ${game.board}`);
console.log(`pigs: ${game.calculateNumberOfPigs(guess)}`);
console.log(`cows: ${game.calculateNumberOfCows(guess)}`);