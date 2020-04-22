'use strict'

window.onload = (event) => {
  console.log('window loaded');
//something about how event handler on class name creates a pseudo array 
//so if i wanted to add event handler to each element in array
// Array.from(elements).forEach(function(element) {
// element.addEventListener('click', myFunction);
// });

  function assignStart(element) {
      //on single click, any #tower triggers the event assignStart 
    start = document.getElementById(this)
    element[this].addEventListener('click' , assignStart) ; 
    startLength = start.length;
    
  };

 
  function assignEnd(element) {
  end = element[this].addEventListener('double-click' , assignEnd) ; 
  endLength = end.length;
  movePiece(start,end);
    //signals we should now try to move the piece 
  };

};

//compares the last disk of the start & end arrays 
//if the moving disk from the start stack is smaller than the destination stack disk, the move is done
//otherwise a previously hidden html element appears saying invalid
//otherwise should include : moving to same spot, moving a larger disk on top
const movePiece = () => {
  let movingDisk = startLength[startLength.length-1]; 
  let destination = endLength[endLength.length-1]; 
  if (movingDisk < destination) {
    stacks[end].push(movingDisk);
    stacks[start].pop();  
  }else{
    document.getElementById("invalid").style.display = "block"
  }
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

///TESTS
// if (typeof describe === 'function') {

//   describe('movePiece()', () => {
//     it('should move a disk if it passes legal test', () => {
//       start = stacks.b;
//       end = stacks.b;
//       assert.equal(movePiece(),document.getElementById("invalid").style.display = "block");
//     });
//   });

//   describe('checkForWin()', () => {
//     it('should check for win after every move', () => {
//       stacks = {   
//         a: [1],  
//         b: [2],
//         c: [3],
//       };
//       assert.equal(checkForWin(), false);
//     });
//   });

// } else {

//   getPrompt();

// }
