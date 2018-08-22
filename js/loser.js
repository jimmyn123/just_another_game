var loser = JSON.parse(localStorage.getItem('loser'));
var numberOfPlayers = parseInt(localStorage.getItem('totalPlayers'));
var names = [];
var pTags = document.getElementsByTagName('p');
console.log(loser.length, numberOfPlayers);
console.log(loser.length === numberOfPlayers);

if (loser.length === numberOfPlayers) {
  pTags[0].innerText = 'Holy CRAP!';
  pTags[1].innerText = 'We have a house full of losers today.';
  pTags[2].innerText = 'Nobody wins!';
} else if (loser.length > 1) {
  loser.forEach(function(player) {
    names.push(player.name);
  });
  pTags[0].innerText = 'Here are today\'s losers:';
  pTags[1].innerText = names.join(' and ');
  pTags[2].innerText = 'You can reflect on your failure together.';
} else {
  pTags[0].innerText = `${loser[0].name}, Remember today...`;
  pTags[1].innerText = 'It is the day you have lost!';
  pTags[2].innerText = 'You Got Played!!!';
}
