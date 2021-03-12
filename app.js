import Game from './Game.js';

let code = '2368'
let game = new Game(4, 7, code);
console.log(`code: ${game.code}`);

console.log('\nmove 1')
let guess = '1238'
game.addGuessToBoard(guess);
console.log(`board ${game.board}`);
console.log(`pigs: ${game.calculateNumberOfPigs(guess)}`);
console.log(`cows: ${game.calculateNumberOfCows(guess)}`);

console.log('\nmove 1')
guess = '4568'
game.addGuessToBoard(guess);
console.log(`board ${game.board}`);
console.log(`pigs: ${game.calculateNumberOfPigs(guess)}`);
console.log(`cows: ${game.calculateNumberOfCows(guess)}`);


game.refreshCodeListFromBoard(document);