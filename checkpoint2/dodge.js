'use strict'
let people = [];

// window.onload = ?
function fetchPeople(){ 
  fetch('http://example.com/https://randomuser.me/api/?results=10')
  .then(response => response.json())
  console.log(response)
  .then(data => {people.push(data)});
    //how do i include only the attributes i need?s
};

///   onclick display list
function displayPeople(){
  let source = document.getElementById('people');
  source.appendChild()
  //appendChild ea person + wanted attributes to #people
  //add approval button to ea appendChild
  fetchPeople();
};

///   on click, pass person to class for newPlayer
//add event handler to approval button click
class newPlayer {
  constructor(name, age, sport, position){
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.position = position;
    this.team = null;

  }

  assignTeam(){
    if(){
      this.team = 'Blue'
    }else {this.team = 'Red'}
  };

  new Teammate;
}

///  display approved players array
function displayPlayers(){
  document.getElementById('players').appendChild 
  //remove from people[]?
  //create team assignment button for each 

};

///  onclick pass person to class Teammate with selected team attribute 
function assignTeam(){
  //event handler for team assignment button
  /*push to team arrays
    class teammate{
    team name:
  }* extend player class with team name
  */
};

class Teammate extends newPlayer {
  constructor(name, age, sport, position)
    this.team = blue or red 
}