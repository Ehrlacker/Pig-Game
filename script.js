'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
//^# since it's an id
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
//^diceEl = element

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--new');
//^. since it's a class.
score0El.textContent = 0;
//^Sets te score to 0
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
//^The players scores are stored in an array.
//^of player 0, and player 1
let currentScore = 0;
//^Is a let so we can keep updating it.
let activePlayer = 0;
//player 1 is 0

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //^the class you want, .addEventListener, then the event you want,
  //then the function.
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.Display dice
  diceEl.classList.remove('hidden');
  //3.Check for a rolled 1: and if true, switch to next player.
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    //Add dice to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //^This = current score goes to whatever player is active.
  } else {
    //switch to next player

    //dice = random number variable
    //^This is saying whatever random # is chosen is the
    // dice # that will appear.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //^We're selecting the current player which at this point is 0
    //Then we set their textContent to 0, then we switch
    //from player 0 to player 1
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //^If active player is 0, then we want the new
    //active player to be 1, else, it should be 0.
    //If player rolls a 1,, their score goes to 0.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    //^Toggle adds the class if it isn't there,
    //if it is there, it will remove the class.
  }
});

btnHold.addEventListener('click', function () {
  //1)Add current score to active player's score
  scores[activePlayer] += currentScore;
  //^When player is 1, it will be scores 1
  //When player is 0, it will be score 0
  //Then we take that value and add that current score to it.
  //and assign it to scores at current active player.
  //ex... scores[1] = scores[1] + currentScore
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];
  //2)Check if score is already at least 100
  //If so, finish the game,
  //If not, switch to the next player.

  //Switch to next player.
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
