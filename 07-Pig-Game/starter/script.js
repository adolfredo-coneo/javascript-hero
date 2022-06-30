'use strict';

const scorePlayer1Element = document.getElementById('score--0');
const scorePlayer2Element = document.getElementById('score--1');
const currentScorePlayer1Element = document.getElementById('current--0');
const currentScorePlayer2Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

let currentPlayer = 0;
let scorePlayer1, scorePlayer2;
let currentScore;

const newGame = () => {
  (scorePlayer1 = 0), (scorePlayer2 = 0);
  (currentScore = 0);
  scorePlayer1Element.textContent = scorePlayer1;
  scorePlayer2Element.textContent = scorePlayer2;
  currentScorePlayer1Element.textContent = currentScore;
  currentScorePlayer2Element.textContent = currentScore;
  diceElement.classList.add('hidden');
};

const rollDice = () => {
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  diceElement.src = `dice-${randomDice}.png`;
  diceElement.classList.remove('hidden');
  if (randomDice === 1) {
    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${currentPlayer}`).classList.add('player--active');
    currentScorePlayer1Element.textContent = 0;
    currentScorePlayer2Element.textContent = 0;
    currentScore = 0;
  } else {
    currentScore += randomDice;
    if (currentPlayer === 0) {
      currentScorePlayer1Element.textContent = currentScore;
    } else {
      currentScorePlayer2Element.textContent = currentScore;
    }
  }
};

rollDiceBtn.addEventListener('click', rollDice);
newGameBtn.addEventListener('click', newGame);
newGame();
