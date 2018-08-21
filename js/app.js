// Constructor for Player object which gets pushed to playerArr
var playerArr = [];

var Player = function(name) {
  this.name = name;
  this.score = 500;
  playerArr.push(this);
};
