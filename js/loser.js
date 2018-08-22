var h1 = document.getElementById('name');
var loser = JSON.parse(localStorage.getItem('loser'));
var numberOfPlayers = parseInt(localStorage.getItem('totalPlayers'));
var names = '';
loser.forEach(function(loser) {
  names += loser.name + ' '
});
if (numberOfPlayers === loser.length) {
  h1.innerText = 'EVERYBODY LOSES!!!!';
} else if (loser.length > 1) {
  h1.innerText = `Today\'s losers: ${names}`;
} else {
  h1.innerText = `Today\'s loser is ${names}`;
}