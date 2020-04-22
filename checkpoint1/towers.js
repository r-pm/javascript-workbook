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
let startDisks = stacks.a.length// count number of discs, changes to whatever stack selected 
let endDisks = stacks.c.length

//on single click, any #tower becomes the start stack 
//and it's discs counted 
document.getElementsByClassName("tower").addEventListener("click", assignStart);
const assignStart = (element) => {
  start = element.id;
  startDisks = stacks[start];
}

//on double click, any #tower becomes the end stack 
//and it's discs counted
//signals that we should now move the piece 
document.getElementsByClassName("tower").addEventListener("doubleclick", assignEnd);
const assignEnd = (element) => {
 end = element.id;
 endDisks = stacks[end];
 movePiece(start,end);
}

//compares the last disk of the start & end arrays 
//if the moving disk from the start stack is smaller than the destination stack disk, the move is done
//otherwise a previously hidden html element appears saying invalid
const movePiece = () => {
  let movingDisk = startDisks[startDisks.length-1]; 
  let destination = endDisks[endDisks.length-1] 
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

  describe('movePiece()', () => {
    it('should move a disk if it passes legal test, () => {
      assert.equal(movePiece(), );
    });
  });

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