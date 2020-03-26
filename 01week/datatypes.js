'use strict'

//1. Write a JavaScript program to display the current day and time.
let dateTime = new Date();
console.log('the date & time is: ', new Date)
//so Date () function exists & shows long form date w/ h,m,s time.
//can call 

//2. Write a JavaScript program to convert a number to a string.
const inputNumber = 10;
console.log(inputNumber.toString());
// .toString function will convert any number obj to string
//... but I don't see the ''?

//3. Write a JavaScript program to convert a string to the number.
const inputString = '10';
const outputNumber = parseInt(inputString, 10)
console.log(outputNumber)
//parseInt() function will convert (obj, at this base) to interger.
//in this case our inputString ... but still don't get why this conversion is useful
//we're just removing ' ' & returning same obj that was input

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are
console.log(typeof true)
console.log(typeof 'this thing')
console.log(typeof nanana)
//didn't see NaN in the possible return values for typeof() - does it need a diff function?

//5. Write a JavaScript program that adds 2 numbers together.
console.log(2 + 3);
// + is own function. can sum any numbers, booleans, or strings.

//6. Write a JavaScript program that runs only when 2 things are true.
let a = 5
let b = 1

if (a > 0, b > 0) { 
 a + b }

//7. Write a JavaScript program that runs when 1 of 2 things are true.
let a = 5
let b = 0

if (a > 0, b > 0) { 
 a + b }
else { a - b }

//8. Write a JavaScript program that runs when both things are not true.
let a = -5
let b = 0

if (a > 0, b > 0) { 
 a + b }
else { a - b }