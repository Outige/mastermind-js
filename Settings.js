export default class Settings {
    constructor() {
        console.log('setings');
    }

    loadSettingsForm(document) {
        return;
        let body = document.getElementsByTagName('body')[0];
        let gameContainer = document.querySelector('.game-container');

        let settingsForm = document.createElement('div');
        settingsForm.classList.add('settings-form');

        let settingsTitle = document.createElement('div');
        settingsTitle.classList.add('settings-title');
        settingsTitle.innerText = 'Game Settings';

        let codeWidth = document.createElement('div');
        codeWidth.classList.add('code-width');
        codeWidth.innerText = 'Code Size';

        let codeHeight = document.createElement('div');
        codeHeight.classList.add('code-height');
        codeHeight.innerText = 'Number of Guesses';

        let startGame = document.createElement('div');
        startGame.classList.add('start-game');
        startGame.innerText = 'Start Game';

        settingsForm.appendChild(settingsTitle);
        settingsForm.appendChild(codeWidth);
        settingsForm.appendChild(codeHeight);
        settingsForm.appendChild(startGame);

        gameContainer.remove();
        gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');
        gameContainer.appendChild(settingsForm);
        console.log(settingsForm);
        body.appendChild(gameContainer);
    }
}