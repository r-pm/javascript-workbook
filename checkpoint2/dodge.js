'use strict'
let people = [];
let players = [];
///  input: fetch (random user)
// window.onload = 
function getInput() {
  fetch('http://example.com/https://randomuser.me/api/?results=6')
    .then(response => response.json())
    console.log(response)
    .then(data => console.log(data));
    ///   add to pool of people array
    //how do i include only the attributes i need?s
}; 


///   display: pool of people with onclick
///   include button to approve
function listPeople(){
  document.getElementById('people')
  //appendChild ea people item
  //appendChild approval button to ea item
};

///   on click, pass person to class for newPlayer
//add event handler to approval button click
function approvePlayer(){
  class newPlayer {
    constructor(){

    }
    players.push(this.newPlayer);

  }
};

///  display approved players array
function displayPlayers(){
  //appendChild players[]
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
