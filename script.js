'use strict';

//Selecting elements
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
    current0El.textContent = currentScore; // CHANGE LATER
    //^This variable = the content of currentScore which is dice
  } else {
    //switch to next player
  }
  //dice = random number variable
  //^This is saying whatever random # is chosen is the
  // dice # that will appear.
});
