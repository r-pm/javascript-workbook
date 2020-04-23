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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
 let disc = startStack.pop(); 
 endStack.push(disc);
}


function isLegal(startStack, endStack) {
  let startDisc = startStack[startStack.length-1];
  let endDisc = endStack[endStack.length-1];

  if(startDisc == 0){
    false
    console.log('oops that tower is empty')  
  }else if(startDisc < endDisc){
    true;
  }else if(endStack == 0){
    true;
  }else{ 
    false;
    console.log('invalid, did nothing')  
  }
}

function checkForWin() {
  if (stacks = {
    a: [],
    b: [4, 3, 2, 1],
    c: []
  }){
    console.log('win!')
    return true;
  }else if (stacks = {
    a: [],
    b: [],
    c: [4, 3, 2, 1]
  }){
    console.log('win!')
    return true;
  }else {
    return false; 
  }
}

function towersOfHanoi(startStack, endStack) {
  let start = stacks[startStack];
  let end = stacks[endStack];
  if(isLegal == true){
    movePiece();
    checkForWin();
  }else{
    console.log('oops! invalid move')
    getPrompt();
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
