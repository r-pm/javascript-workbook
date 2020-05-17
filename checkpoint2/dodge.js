'use strict'
let people = [];
let players = [];

function recruitPeople() {
  fetch('https://randomuser.me/api/?results=10')
  .then(function (response) {
    if(!response.ok){
      throw Error('server error');
    }
    return response.json()
  })
  .then(function(results){
    people = results.results //whole element added to people array
    people.forEach(element => { //displayPerson for ea elem in array
      displayPerson(element); 
  
    })
  }).catch(function (error) {
    alert('oops! something went wrong')
  })
}

window.onload = () => { //refresh registrants every onload 
  recruitPeople();
};

function displayPerson(person) {
  const li = document.createElement('li') //<li> that holds this person
  document.getElementById('people').appendChild(li)
  //img
  const img = document.createElement('img')
  img.setAttribute('src', person.picture.thumbnail)
  li.appendChild(img)
  //name
  const name = document.createElement('span')
  name.innerText = ' ' + person.name.first + ' ' + person.name.last + ' , '
  li.appendChild(name)
  //age
  const age = document.createElement('span')
  age.innerText =  person.dob.age +  ' '
  li.appendChild(age)
  //select button
  const select = document.createElement('button') 
  select.innerText = 'select player'
  li.appendChild(select)
  select.addEventListener('click', function (params) {    
    let newPlayer = new Player(name.innerText, person.phone, person.picture.thumbnail) 
    // console.log('this is newPlayer' , newPlayer)
    displayPlayer(newPlayer);
    console.log('select clicked', person)
      //remove li person from html
      li.remove();

  })
  
}

class Player {
  constructor(name, contact, img){
    this.name = name;
    this.contact = contact;
    this.img = img;

  }
  
}

function displayPlayer(player) {
  const li = document.createElement('li') //<li> that holds this player
  document.getElementById('players').appendChild(li)
  console.log('display a player', player)
  ///img
  const imgPlayer = document.createElement('img')
  imgPlayer.setAttribute('src', player.img)
  li.appendChild(imgPlayer)
  ///name
  const name = document.createElement('span')
  name.innerText = player.name 
  li.appendChild(name)
  ///contact
  const contact = document.createElement('span')
  contact.innerText = player.contact 
  li.appendChild(contact)
  ///button red
  const selectRed = document.createElement('button') 
  selectRed.innerText = 'red team'
  li.appendChild(selectRed)
   //event handlers red 
   selectRed.addEventListener('click', function () {    
    let newTeammate = new Teammate(player.name, player.contact, player.img, 'red') 
    displayTeammate(newTeammate);
    console.log('selected red', player)
    li.remove();

  })
  ///button blue 
  const selectBlue = document.createElement('button') 
  selectBlue.innerText = 'blue team'
  li.appendChild(selectBlue)
  //event handlers blue 
 selectBlue.addEventListener('click', function () {    
  let newTeammate = new Teammate(player.name, player.contact, player.img, 'blue') 
  displayTeammate(newTeammate);
  console.log('selected blue', player)
  li.remove();

})
}


class Teammate extends Player {
  constructor(name, contact, img, team){
    super(name, contact, img);
    this.team = team; 
}
}

function displayTeammate(teammate) {
  const li = document.createElement('li') //<li> that holds this teammate 
  if(teammate.team == 'blue'){
    document.getElementById('blue').appendChild(li)
  }else{ 
    document.getElementById('red').appendChild(li)

  }
 ///img
 const img = document.createElement('img')
 img.setAttribute('src', teammate.img)
 li.appendChild(img)
 ///name
 const name = document.createElement('span')
 name.innerText = teammate.name 
 li.appendChild(name)
 ///contact
 const contact = document.createElement('span')
 contact.innerText = teammate.contact 
 li.appendChild(contact)
  
}



///TESTING///

///Although I did not write test code, one thing that became aparrent 
///just by thinking through the process is that dividing up functional
///parts of code is helpful visually, but also for organization & 
///understanding of functionality, and eventually, testing. 

//In order to test:                                     
// New elements are created & appeneded correctly
// I would pass in a teammate with team = blue and confirm it is appended to ul id= blue, not id= red  

//Created elements hold the correct parts of results
//I would search for an email attribute in the people array. There should be none.

