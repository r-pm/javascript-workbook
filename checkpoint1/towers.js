'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {   
  a: [3, 2, 1],  
  b: [],
  c: [],
};

document.addEventListener('DOMContentLoaded', function()) {
let start = stacks.a; //tower we start moving from, changes to any stack clicked  
let end = stacks.c; ////tower we start moving from, changes to any stack dblclicked   
let startDisks = stacks[a].length//should count number of discs on whatever stack selected 
let endDisks = stacks[c].length
console.log(start)
}

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


//triggered by double click on desired destination
//can i define a var through this and have that var called in seperate function?
//alt, can i nest this function inside other function & still have it respond to ondblclick?
function assignEnd(element){
 end = element.id;
 endDisks = stacks[end];
 movePiece();
}

function assignStart(element){
  console.log('hit assign start')
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
  console.log(stacks , 'move this :')
}
  else { document.getElementById("text").style.display = flex}; //connect this to id "text"

  checkForWin(end);
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

/*
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
*/
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