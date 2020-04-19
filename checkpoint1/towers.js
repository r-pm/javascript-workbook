'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Your code here

}

const isLegal = (startStack, endStack) => {
  // move rules, sz rules 
  //returns true if all good 

}

const checkForWin = () => {
  // return true if win = 
  //if all pieces moved to c, in order 

}

const towersOfHanoi = (startStack, endStack) => {
  let fromStack = stacks[startStack]; 
  endStack = 
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

///TESTS