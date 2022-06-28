'use strict';

//We APIs
//Timers
//Fetch
//Dom methods and properties (document.querySelector, document.querySelectorAll, etc)

let secretNumber;
let score;
let highscore = 0;
newGame();

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

function newGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').classList.remove('winner');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
}

const reduceScoreWithMessage = guess => {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  } else {
    displayMessage('😭 You lost!');
    document.querySelector('.score').textContent = '0';
  }
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  const highscoreElement = document.querySelector('.highscore');

  if (!guess) {
    displayMessage('⛔️ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct number!!!');
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').classList.add('winner');
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    reduceScoreWithMessage(guess);
  }
});

document.querySelector('.again').addEventListener('click', newGame);
