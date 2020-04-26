'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() { //creates the randomized solution 
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) { //creates rando interger to use in generate soln?
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
//letter correct, space correct count
//letter correct count
// 'you have' + countExact + 'exact guesses'
// 'you have' + countLetter + 'letter guesses'
//wants them returned 1-1

}


function mastermind(solution, guess) {
  const solution = 'abcd'; 
  let guess = 'abab'
  let countExact = 0 
  let countLetter = 0 

  guess.forEach((solution, i) => { //check for exact match, letter and index
    if(guess[i] == solution[i]){ 
      countExact ++; //add to count
      solution[i] = 'null'; 
    }
  })
 
  for (i= 0; i < guess.length; i++) {//check for letter only match
    for (j= 0; j < solution.length; j++) {//check for letter only match
      if(guess == solution){
        countLetter++;
        solution[j] = 'null';
      };
    };
  }
 
  else{
    return "none of your guesses are correct"
    //you have 10 guesses 
    //guess counter?
  }
  hint(); //return hint w/ count 
}



function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
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

  generateSolution();
  getPrompt();
}
