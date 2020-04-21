'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let stacks = {   //can connect stacks.[] to html?
  a: [3, 2, 1],  
  b: [],
  c: [],
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

let start = stacks.a; //tower we start moving from, changes to any stack clicked  
let end = stacks.c; ////tower we start moving from, changes to any stack dblclicked   
let startDisks = stacks.a.length//should count number of discs on whatever stack selected 
let endDisks = stacks.c.length

//triggered by double click on desired destination
//can i define a var through this and have that var called in seperate function?
//alt, can i nest this function inside other function & still have it respond to ondblclick?
const assignEnd = (element) => {//add event listener instead
 end = element.id;
 endDisks = stacks[end];
 movePiece(start,end);
}

const assignStart = (element) => {
  start = element.id;
  startDisks = stacks[start];
 }

const movePiece = () => {
  let movingDisk = startDisks[startDisks.length-1]; 
  let destination = endDisks[endDisks.length-1] 
 //what if it's empty tho?
  if (movingDisk < destination) {
  stacks[end].push(movingDisk);
  stacks[start].pop();
}
  else {document.getElementById("invalid").style.display = "block"}; 

  checkForWin(end);//should this be stacks.c instead OR NOTHING?
}

/*
const isLegal = (start, end) => {
 DID THIS INSIDE MOVE
}
*/

const checkForWin = () => {
  if ( stacks.c === [3, 2, 1]){
    print = "Finished!";
    return true;
  }
}


const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (start) => {
    rl.question('end stack: ', (end) => {
      movePiece(start, end);
      getPrompt();
    });
  });
}


if (typeof describe === 'function') {

 /* describe('movePiece()', () => {
    it('should do...', () => {
      assert.equal(name of function('test pass in'), 'result i expect');
    });
  });*/

  describe('checkForWin()', () => {
    it('should check for win after every move', () => {
      stacks = {   
        a: [],  
        b: [],
        c: [3, 2, 1],
      };
      assert.equal(checkForWin(), true);
    });
  });

} else {

  getPrompt();

}
///TESTS