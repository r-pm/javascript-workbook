'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {   ///need to connect to html stacks
  a: [3, 2, 1],  
  b: [],
  c: [],
};


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

let start = stacks.a; //tower we start moving from  
let end = stacks.c; //tower we end moving to 
let nDisks = stacks[element].length 
// nDisk should count total number of discs [#,#,#] in the stack selected?/being worked with 

const movePiece = (nDisks, start, end) => {
  let movingDisk = start.pop([nDisks-1]); //pop last (nDisks-1) value of the start tower
  let destination = end.pop([nDisks-1]); //pop the last value of the end tower
 //what if it's empty tho?
  if (movingDisk < destination) {
  end.push(movingDisk);
}
  else { print = "invalid move"} //connect this to an html elem
}

const isLegal = (start, end) => {
  //if number want to move smaller than last number of stack you want to move to 
  // 
}

const checkForWin = () => {
  if ( stacks.c === [3, 2, 1]){
    print = "Finished!";
    return true;
  }
//...this one seems easy enough
}


const play = (nDisks, start , via, end) => {

  if (nDisks == 1) {

  }

ELSE
play(nDisks - 1, start, end, via) // 1 to c , 
move disk from start to end // Step 2
play(disk - 1, via, start, end) // 2 to b 
UNTIL
IF nDisks is equal 1, THEN
move disk from start to end

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (start) => {
    rl.question('end stack: ', (end) => {
      playTowers(start, end);
      getPrompt();
    });
  });
}

getPrompt();

///TESTS