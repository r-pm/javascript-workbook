'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//my code below

function horizontalWin() {
  for(board[i] = 0; i < 3; i++) {
    if (board[i] === ['X', 'X', 'X'] || ['O','O','O']) {
        return true;
    } 
  }
//written out as if 
//  if ([0] === ['X', 'X', 'X'] || ['O','O','O']) {
//    return "Winner!"
//  }
 // else if ([1] === ['X', 'X', 'X'] || ['O','O','O']) {
//    return "Winner!"
//  }
  //else if ([2] === ['X', 'X', 'X'] || ['O','O','O']) {
    //return "Winner!"
 // }
}

function verticalWin() {
  for(board[i][0] = 0; i < 3 ; i++) {
    if (board[i][0] === 'X'){
      return true;
    } else if (board[i][0] === 'O'){
      return true;
    }
  }

  for(board[i][1] = 0; i < 3 ; i++) {
    if (board[i][1] === 'X'){
      return true;
    } else if (board[i][1] === 'O'){
      return true;
    }
  }

  for(board[i][2] = 0; i < 3 ; i++) {
    if (board[i][2] === 'X'){
      return true;
    } else if (board[i][2] === 'O'){
      return true;
    }
  }

function diagonalWin() {
  if ([2][0] && [1][1] && [0][2] === 'X') {
    return true;
  }
  else if ([2][0] && [1][1] && [0][2] === '0') {
    return true;
  }

  for([i][i] = 0; i < 3; i++) {
    if([i][i] === ['X']) {
        return true;
    } 
    else if ([i][i] === ['O']) {
       return true;
    }
  }
}

function checkForWin() {
  if ( diagonalWin() || verticallWin() || horizontalWin() == true) {
    return true; 
  } 
}


/*const handleClick = (element) => {
let coords = coordinates received from click
  console.log(document.getElementById('this'))
  document.getElementById('this').innerHTML = playerTurn
  this.onclick = null;
  //places player mark on clicked []
  //turned off onclick function for used []
 // let cords = document.getElementById(this).split 
}*/

function ticTacToe(row, column) {
  //call board [row][col] = playerTurn
  //call checkWin
  if (playerTurn == 'X') {
    playerTurn = 'O'
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
  

}

/*function resetBoard(board){
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}*/

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();
}