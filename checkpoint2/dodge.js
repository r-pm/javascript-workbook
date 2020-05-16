'use strict'
let people = [];
let players = [];

function recruitPeople() {
  fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(function(results){
    people = results.results //whole element added to people array
    people.forEach(element => { //displayPerson for ea elem in array
      displayPerson(element); 
  
    });
  })
}

window.onload = () => { //refresh registrants every onload 
  recruitPeople();
};

function displayPerson(person) {
  const li = document.createElement('li') //<li> that holds this person
  //img
  const img = document.createElement('img')
  img.setAttribute('src', person.picture.thumbnail)
  li.appendChild(img)
  //name
  const name = document.createElement('span')
  name.innerText = ' ' + person.name.first + ' ' + person.name.last + ' '
  li.appendChild(name)
  //age
  const age = document.createElement('span')
  age.innerText = ' , ' + person.dob.age +  ' '
  li.appendChild(age)
  //select button
  const select = document.createElement('button') 
  select.innerText = 'select player'
  li.appendChild(select)
  select.addEventListener('click', function (params) {
    let newPlayer = new Player(name.innerText, age.innerText) 
    displayPlayer(newPlayer);
    //display in html by creating new elem 
    console.log('select clicked', person)
      //remove li person from html
      li.remove();

  })
  //// does this have to go last?
  document.getElementById('people').appendChild(li)
  
}

class Player {
  constructor(name, age){
    this.name = name;
    this.age = age;

  }
  // displayPlayer();
  
}

function displayPlayer(player) {
  console.log('a player', player)

  //select for blue team & red team
  //event handlers for ea 
  //create a new instance of teammate with 'blue'

}

function displayTeammate(teammate) {
  //append teammate info to blue ul or red ul
  //based on team attribute 
  if(teammate.team == blue){
    //append to blu ul
  }else {//append to red
  }

  
}


class Teammate extends Player {
  constructor(name, age, team){
    super(name, age);
    this.team = team; ///how to connect to event list for select buttons 
  }
}


