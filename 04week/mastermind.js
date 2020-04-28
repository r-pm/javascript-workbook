'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution =['abcd'];
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// function generateSolution() { //creates the randomized solution 
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, letters.length);
//     solution += letters[randomIndex];
//   }
// }

// function getRandomInt(min, max) { //creates rando interger to use in generate soln?
//   return Math.floor(Math.random() * (max - min)) + min;
// }


function generateHint(guess) {
  let countExact = 0; 
  let countLetter = 0; 
  // could i have used: for (let i of guess){} ? //
  for (let i= 0; i<= guess.length; i++) {
    for (let j= 0; j< 4; j++) {//for each [i] of array, compare every [j] of array  
      if(guess[i] == solution[i]){ //for exact match
        countExact ++;  //add to count 
        solution[i] = 'null';//take it off soln [] so it won't be double counted
        //add to board [] <- has all the exact matches    //<- the test seems to use board.length for hints?

        
      }else if(guess[i] == solution[j]){//for letter only match
        countLetter++;  //add to count
        solution[j] = 'null';//take off solution 
        // board.push(solution[j]);//add to board [] <- now has all the exact & letter only matches, including doubles, in order:exact,letter
      };
      return `${countExact} - ${countLetter}`;
    };
  };
}


function mastermind(guess) { 
  // console.log(solution);
  if(guess === solution){
    console.log('You guessed it!');
  }else{
    generateHint(guess);
  }

}


function getPrompt() {
  printBoard();
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  // generateSolution();
  getPrompt();
}
