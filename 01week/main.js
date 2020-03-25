'use strict'

console.log("inside main.js")

let myDate = new Date();

console.log("today's date is", myDate)

let mySpan = document.getElementById("theTime");
mySpan.innerText = myDate.toString;

