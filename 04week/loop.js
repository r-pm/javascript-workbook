  // Use a do...while loop to console.log the numbers from 1 to 1000.
let result = [,];
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i <= 999);
console.log(result);

  // Create an object (an array with keys and values) called person with the following data:
let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

  // Use a for...in loop and if statement to console.log 
  //the value associated with the key birthDate if the birth year is an odd number.
for(birthDate in person){
  if(birthDate % 2 !== 0){
    console.log(person.birthDate);
  };
}

  // Create an arrayOfPersons that contains multiple objects. 
  //You can simply copy/paste the person object you made above multiple times. 
  //Feel free to change the values to reflect multiple people you might have in your database.
arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Bob",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Steve",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Marcus",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
]

  // Use .map() to map over the arrayOfPersons and console.log() their information.
let info = arrayOfPersons.map(arrayOfPersons);
console.log(info);

  // Use .filter() to filter the persons array and console.log only males in the array.
const males = arrayOfPersons.filter(arrayOfPersons.gender !="female");
console.log(males);

  // Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const thirty = arrayOfPersons.filter(arrayOfPersons.birthDate < "Jan 1, 1990");
console.log(thirty);
  