'use strict'

// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! 
//You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-date-time").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numberInput = inputNumber;

const numbToString = () => {
  inputNumber.toString();

  document.getElementById("display-numbToString").innerHTML = inputNumber;
}


// Write a JavaScript program to convert a string to the number.
const stringInput;

const stringToNumb = () => {
  stringInput.Number();

  document.getElementById("display-stringToNumb").innerHTML = stringInput;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const dataType; 
document.getElementById("data-type-input").value = dataType;

const displayDataType() = => {
  return typeof dataType 
console.log(works)
  document.getElementById("display-type").innerHTML = dataType;
}

  
// Write a JavaScript program that adds 2 numbers together.
//for this attempt i used the resource below
const input1 = document.getElementById("sumInputOne").value
const input2 = document.getElementById("sumInputTwo").value

const sumTwo() = => {
  const sumTotal = input1 + input2
}
//code above creates variables from inputs & simple addition function that will use them
//should return sumTotal to variable declared below
const sumTotal = document.createElement("p");

const sumDisplay = document.getElementById("display-sum");
sumDisplay.appendChild(sumTotal)
//all code above creates a new p within the #display-sum <button/> 
//that will display the sum created by inputs 


// Write a JavaScript program that runs only when 2 things are true.
//for this attempt I started building the function & built my way out
//last thing built was html element
true1 = document.getElementById("").value;
true2 = document.getElementById("").value;

const doIfTrue() = => {
  if true1 < 0 
  if true2 > 0

  document.getElementById("display-twoTrue").innerHTML = return true2 - true1;

}





// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true. 
fals1 = document.getElementById("falseInput1").value;
fals2 = document.getElementById("falseInput2").value;
const doIfFlase() = => {
  !if fals1 > 0 
  !if fals2 < 0

  return fals2 - fals1

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
