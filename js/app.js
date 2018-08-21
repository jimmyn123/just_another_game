// Constructor for Player object which gets pushed to playerArr
var playerArr = [];

function Player(name) {
  this.name = name;
  this.score = 500;
  playerArr.push(this);
}