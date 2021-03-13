export default class Settings {
    constructor() {
        console.log('setings');
    }

    loadSettingsForm() {
        /* Settings */
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

        /* Rules */
        let rulesContainer = document.createElement('div');
        rulesContainer.classList.add('rules-container');

        let rulesTitle = document.createElement('div');
        rulesTitle.classList.add('settings-title');
        rulesTitle.innerText = 'How to Play';

        let rulesExplanation0 = document.createElement('div');
        rulesExplanation0.classList.add('rules-explanation');
        rulesExplanation0.innerHTML = `
            <p>
            Welcome to master mind (pigs and cows)! This is a code breaking game,
            where you need to guess the code that has been randomly generated.<br>
            </p>

            <p>
            For each guess you will be informed how many pigs and how many cows your
            guess contains.
            </p>

            <p>
            Pigs are digets that exist in the code but you guessed them in the wrong
            place.
            </p>

            <p>
            Cows are correct digits in the correct place.
            </p>

            <p>
                Lets look at an example. For this example the code is '4798'.
                The number to the left is the guess. The 2 numbers to the left are the pigs
                and cows respectivly.
            </p>
            <div>
                <ul class="code-list">
                    <li class="code-list-item past-code">
                        <div class="code-input">4217</div>
                        <button class="confirm-code-btn" disabled=""><i class="fas fa-check-square"></i></button>
                        <div class="pig">1</div><div class="cow">1</div>
                    </li>
                </ul>
            </div>

            <div class="rules-explanation">
                <p>
                    We have 1 cow. That is both codes start with 4. We also have 1 pig. That is
                    both codes contain 7, but the 7 in the guessed code is in the wrong location.
                </p>

                <p>
                    The game board will vary based on your game settings (although we
                    suggest you use the defaults).
                </p>
            </div>
        `;

{/* <div class="rules-explanation">
                    
                </div>
                <div>
                    <ul class="code-list">
                        <li class="code-list-item past-code">
                            <div class="code-input">4217</div>
                            <button class="confirm-code-btn" disabled=""><i class="fas fa-check-square"></i></button>
                            <div class="pig">1</div><div class="cow">1</div>
                        </li>
                    </ul>
                </div>

                <div class="rules-explanation">
                    <p>
                        We have 1 cow. That is both codes start with 4. We also have 1 pig. That is
                        both codes contain 7, but the 7 in the guessed code is in the wrong location.
                    </p>

                    <p>
                        The game board will vary based on your game settings (although we
                        suggest you use the defaults).
                    </p>
                </div>
            </div>
        </div> */}

        codeWidth.appendChild(codeWidthLabel);
        codeWidth.appendChild(codeWidthInput);
        codeHeight.appendChild(codeHeightLabel);
        codeHeight.appendChild(codeHeightInput);
        startGame.appendChild(startGameInput);
        settingsForm.appendChild(settingsTitle);
        settingsForm.appendChild(codeWidth);
        settingsForm.appendChild(codeHeight);
        settingsForm.appendChild(startGame);
        rulesContainer.appendChild(rulesTitle);
        rulesContainer.appendChild(rulesExplanation0);

        gameContainer.remove();
        gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');
        gameContainer.appendChild(settingsForm);
        gameContainer.appendChild(rulesContainer);
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