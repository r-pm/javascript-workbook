'use strict';

let solution = ["D", "O", "G"];

let guessArray = [];

let guess = 'D'
// document.getElementById('guess');


function initializeBoard(){
  for(let i = 0; i < solution.length; i++)
    guessArray.push("__")
    console.log(guessArray)
  return guessArray
}


function playGuess(guess){
  function transform(guess){
    if(guess != [a-z][A-Z]){
      return 'try a letter';
    }else{
      let guess = guess.toUpperCase();
    }
  };

  for(let i = 0; i<solution.length; i++){
    if(solution[i]==guess){
      console.log("You guessed right!")
      guessArray.splice(i, 1, guess)
      // guessArray[i]=guess
    }
  }
  console.log(guessArray)
}
initializeBoard();
playGuess(guess);



