const p1 = {
    Name: 'player 1',
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    wins: 0,
    winCount: document.querySelector('#bestOf-p1-display'),
}

const p2 = {
    Name: 'player 2',
    score: 0,
    wins: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    winCount: document.querySelector('#bestOf-p2-display')
}

const maxScore = document.querySelector('#maxScore');
const maxGameCount = document.querySelector('#bestOf');
const resetButton = document.querySelector('#reset');

let gameCount = 0;
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            gameCount++;
            player.wins += 1;
            player.display.textContent = player.score;
            player.winCount.textContent = player.wins;
            player.winCount.classList.add('has-text-success');
            player.winCount.classList.remove('has-text-danger');
            opponent.winCount.classList.add('has-text-danger');
            opponent.winCount.classList.remove('has-text-success');
            if (gameCount === parseInt(maxGameCount.value)) {
                player.button.disabled = true;
                opponent.button.disabled = true;
            } else {
                resetGame();
            }
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
    console.log(`player 1 Score: ${p1.score}, player 2 Score: ${p2.score}`);
})

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
    console.log(`player 1 Score: ${p1.score}, player 2 Score: ${p2.score}`);
})

maxGameCount.addEventListener('change', function () {
    maxGameCount.value = parseInt(this.value);
    resetAll();
})

maxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetAll();
})

resetButton.addEventListener('click', resetAll)

function resetGame() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
    }
}

function resetAll() {
    resetGame();
    gameCount = 0;
    for (let p of [p1, p2]) {
        p.wins = 0;
        p.winCount.textContent = 0;
        p.winCount.classList.remove('has-text-success');
        p.winCount.classList.remove('has-text-danger');
    }
}