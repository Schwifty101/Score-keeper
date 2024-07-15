Here is the combined `README.md` file for all the provided files:

```markdown
# Projects README

This repository contains two separate projects: a Photo Blog and a Score Keeper application. Below are the details for each project.

## 1. Photo Blog

### Project Structure

- `photosite.html`: The main HTML file containing the structure and content of the photo blog.
- `photos.css`: The CSS file for styling the photo blog.

### Features

- Responsive Design: The gallery is designed to be responsive, with images arranged in a flexible layout.
- Custom Fonts: Utilizes the 'Raleway' font from Google Fonts for a clean and modern look.
- Creative Commons Licensed Photos**: All photos are licensed under Creative Commons 2.0.

### File Details

#### photosite.html

This file sets up the basic structure of the photo blog, including the navigation and photo gallery sections.

####HTML
<!DOCTYPE html>
<html>

<head>
    <title>Photo Blog</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="photos.css">
</head>

<body>
    <nav>Soban/Ahmad</nav>

    <section id="container">
        <!-- Photo credits and sources -->
        <img src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg">
        <img src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg">
        <img src="http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg">

        <img src="http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg">
        <img src="http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg">
        <img src="http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg">

        <img src="http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg">
        <img src="http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg">
        <img src="http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg">
    </section>
    <footer>
        <p>All Photos Licensed Under Creative Commons 2.0</p>
        <a href="https://creativecommons.org/licenses/by/2.0/legalcode">Creative Commons License</a>
    </footer>
</body>

</html>
```

#### photos.css

This file contains the styles for the photo blog, including layout and typography.

```css
img {
    width: 30%;
    margin-bottom: 2%;
}

#container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1% auto;
}

nav {
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    text-transform: uppercase;
    border-bottom: 2px solid #f1f1f1;
    width: 30%;
    margin: 0% 0% 0% 2.25%;
    padding: 1.2em 0;
}
```

### Getting Started

To view the photo blog, simply open the `photosite.html` file in your web browser.

### License

This project is licensed under the Creative Commons 2.0 License. See the [LICENSE](https://creativecommons.org/licenses/by/2.0/legalcode) file for more details.

### Credits

- Photos by Massimo Margagnoni, Giuseppe Milo, and GörlitzPhotography.
- Font: [Raleway](https://fonts.google.com/specimen/Raleway) by Google Fonts.

### Author

- **Soban Ahmad**

## 2. Score Keeper

### Project Structure

- `index.html`: The main HTML file containing the structure and content of the score keeper application.
- `script.js`: The JavaScript file for handling the logic of the score keeper application.

### Features

- **Score Keeping**: Allows users to keep track of scores for two players.
- **Best Of Feature**: Users can select the number of games to be played (best of 1, 3, or 5).
- **Responsive Design**: Utilizes Bulma CSS framework for responsive design.

### File Details

#### index.html

This file sets up the basic structure of the score keeper application, including the UI elements for displaying scores and controls for updating scores.

####html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Score Keeper</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css">
    <style>
        body {
            height: 100vh;
            display: flex;
            flex-direction: row;
            justify-self: center;
            align-items: center;
        }

        .container {
            width: 5%;
        }

        .button.is-info {
            margin: 0 0.4rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="card is-responsive">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://images.unsplash.com/photo-1705087917495-8530cbaa858e?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Table Tennis Image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <h2 class="is-size-4 mb-0"><span id="bestOf-p1-display">0</span> - <span
                                    id="bestOf-p2-display">0</span></h2>
                            <h1 class="title is-1 mt-0"><span id="p1Display">0</span> to <span id="p2Display">0</span>
                            </h1>
                            <p class="subtitle">Use the buttons below to keep track of score</p>

                            <div class="bestOf-container my-2">
                                <label for="bestOf" class="label is-large is-inline">Best Of</label>
                                <div class="select is-rounded">
                                    <select name="bestof" id="bestOf">
                                        <option value="1">1</option>
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                            <label for="maxScore" class="label is-large is-inline">Playing to</label>
                            <div class="select is-rounded">
                                <select name="maxScore" id="maxScore">
                                    <option value="3">3</option>
                                    <option value="5">5</option>
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <button class="button is-primary is-responsive card-footer-item is-size-6" id="p1Button">+1
                                Player 1</button>
                            <button class="button is-info is-responsive card-footer-item is-size-6" id="p2Button">+1
                                Player 2</button>
                            <button class="button is-danger is-responsive card-footer-item is-size-6"
                                id="reset">Reset</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
```

#### script.js

This file contains the JavaScript logic for updating scores, resetting the game, and handling user interactions.

```javascript
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
let isGameOver

 = false;

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
```

### Getting Started

To use the score keeper, open the `index.html` file in your web browser. 

### Author

- **Soban Ahmad**
```
