'use strict';

const diceElement = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

let currentPlayer;
let playresScore;
let currentScore;
let isPlaying;

const newGame = () => {
  playresScore = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  isPlaying = true;
  document.getElementById('score--0').textContent = playresScore[0];
  document.getElementById('score--1').textContent = playresScore[1];
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;
  diceElement.classList.add('hidden');
  document.querySelector(`.player--0`).classList.add('player--active');
  document
    .querySelector(`.player--1`)
    .classList.remove('player--active', 'player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');
};

const rollDice = () => {
  if (isPlaying) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${randomDice}.png`;
    diceElement.classList.remove('hidden');
    if (randomDice === 1) {
      switchPlayer();
    } else {
      currentScore += randomDice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    }
  }
};

const holdCurrentScore = () => {
  if (currentScore > 0 && isPlaying) {
    playresScore[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      playresScore[currentPlayer];
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    if (playresScore[currentPlayer] >= 100) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
};

const switchPlayer = () => {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
  currentScore = 0;
};

rollDiceBtn.addEventListener('click', rollDice);
newGameBtn.addEventListener('click', newGame);
holdBtn.addEventListener('click', holdCurrentScore);
newGame();
