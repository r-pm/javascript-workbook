'use strict'

// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! 
//You will be doing only front-end work in 421 and you need to brush up on your HTML elements**
console.log("is this shit working?")

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
const displayDate = () => {
  const currentDate = new Date();
  console.log("is this shit working?")
  document.getElementById("display-date-time").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let numberInput;

const displayString = () => {
  numberInput = document.getElementById("numberInput").value
  numberInput.toString();
  document.getElementById("display-to-string").innerHTML = numberInput;
}


// Write a JavaScript program to convert a string to the number.
var stringInput;

const stringToNumb = () => {
  // stringInput.Number();

  document.getElementById("display-to-numb").innerHTML = Number(stringInput);
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

const displayDataType = () => {
  let inputHolder = document.getElementById("data-type-input").value
  let dataType = typeof inputHolder
  document.getElementById("display-type").innerHTML = dataType;
}

  
// Write a JavaScript program that adds 2 numbers together.
//for this attempt i used the resource below

const sumTwo = () => {
  let input1 = document.getElementById("sum-input-1").value;
  let input2 = document.getElementById("sum-input-2").value;
  let sumTotal = input1 + input2;
  document.getElementById("display-sum").innerHTML = sumTotal;
 
}
//code above creates variables from inputs & simple addition function that will use them
//should return sumTotal to variable declared below

//all code above creates a new p within the #display-sum <button/> 
//that will display the sum created by inputs 


// Write a JavaScript program that runs only when 2 things are true.
//for this attempt I started building the function & built my way out
//last thing built was html element

const doIfOnlyTrue = () => {
  let true1 = document.getElementById("true-input-1").value;
  let true2 = document.getElementById("true-input-2").value;  
  if (true1 < 0 && true2 > 0){
    document.getElementById("display-only-true").innerHTML = true2 - true1;
  }

}



// Write a JavaScript program that runs when 1 of 2 things are true.

const doIfHalfTrue = () => {
  let true1 = document.getElementById("ambiv-input-1").value;
  let true2 = document.getElementById("ambiv-input-2").value;
  if (true1 < 0 || true2 < 0) {
    document.getElementById("display-only-true").innerHTML = true2 - true1;

  }

}


// Write a JavaScript program that runs when both things are not true. 

const doIfFalse = () => {
  let fals1 = document.getElementById("false-input-1").value;
  let fals2 = document.getElementById("false-input-2").value;
  if (!(fals1 > 0) && !(fals2 < 0)) {
    document.getElementById("display-false").innerHTML = fals2 - fals1

  }

}




// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
