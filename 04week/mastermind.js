'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution ='';
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

let countExact = 0; 
let countLetter = 0; 

function generateHint(guess) {
  // could i have used: for (let i of guess){} ? //
  for (let i= 0; i<= guess.length; i++) {//check for letter only match
    for (let j= 0; j< 4; j++) {//for each [i] of guess, compare every [j] of solution  
      if(guess[i] == solution[i]){ //for each [i]guess, compare [i]solution
        countExact ++;  //add to count 
        solution[i] = 'null';//change that particular solution[i] to an string imposs to match so it wont be double counted
        // board.push(solution[i])
        // solution.pop(solution[i]); 
        // console.log(countExact);
        // console.log(board);
      }
      else if(guess[i] == solution[j]){
        countLetter++;  //add to count
        solution[j] = 'null'; //remove so it wont be double counted if there is another letter match
        // board.push(solution[j]); <- the test seems to use board.length for hints?
        // console.log(board);
      };
    };
  };
  console.log('exact & letter:', countExact , countLetter);
//wants them returned '1-1'
}


function mastermind(guess) { 
  solution = 'abcd'; // Comment this out to generate a random solution
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

  generateSolution();
  getPrompt();
}
