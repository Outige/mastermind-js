export default class Settings {
    constructor() {
        console.log('setings');
    }

    loadSettingsForm(documnet) {
        let body = document.getElementsByTagName('body')[0];
        let gameContainer = document.querySelector('.game-container');

        let settingsForm = document.createElement('div');
        settingsForm.classList.add('settings-form');

        let settingsTitle = document.createElement('div');
        settingsTitle.classList.add('settings-title');
        settingsTitle.innerText = 'Game Settings';

        let codeWidth = document.createElement('div');
        codeWidth.classList.add('code-width');
        let codeWidthLabel = document.createElement('label');
        codeWidthLabel.innerText = 'Code Size';
        let codeWidthInput = document.createElement('input');
        codeWidthInput.type = 'number';
        codeWidthInput.value = 4;

        let codeHeight = document.createElement('div');
        codeHeight.classList.add('code-height');
        let codeHeightLabel = document.createElement('label');
        codeHeightLabel.innerText = 'Number of Guesses';
        let codeHeightInput = document.createElement('input');
        codeHeightInput.type = 'number';
        codeHeightInput.value = 8;

        let startGame = document.createElement('div');
        startGame.classList.add('start-game');
        let startGameInput = document.createElement('input');
        startGameInput.type = 'button';
        startGameInput.value = 'Start Game';

        codeWidth.appendChild(codeWidthLabel);
        codeWidth.appendChild(codeWidthInput);
        codeHeight.appendChild(codeHeightLabel);
        codeHeight.appendChild(codeHeightInput);
        startGame.appendChild(startGameInput);
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

//     <div class="settings-form">
    //     <div class="settings-title">
    //         Game settings
    //     </div>
    //     <div class="code-width">
    //         <label class="">Code Size</label>
    //         <input type="number" value="4">
    //     </div>
    //     <div class="code-height">
    //         <label for="">Number of Guesses</label>
    //         <input type="number" value="7">
    //     </div>
    //     <div class="start-game">
    //         <input type="button" value="Start Game">
    //     </div>

    // </div>
    }
}