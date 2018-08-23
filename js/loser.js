'use strict';

var loser = JSON.parse(localStorage.getItem('loser'));
var numberOfPlayers = parseInt(localStorage.getItem('totalPlayers'));
var names = [];
var pTags = document.getElementsByTagName('p');

if (loser.length === numberOfPlayers) {
  displayLoser('HOLY CRAP!', 'Everyone\'s a loser today.', 'Nobody wins!!!');
} else if (loser.length > 1) {
  loser.forEach(function(player) {
    names.push(player.name);
  });
  displayLoser('Here are today\'s losers:', names.join(' and '), 'Reflect on your failure together');
} else {
  displayLoser(`${loser[0].name} remember today...`, 'It is the day you lost!', 'You got Played!!!');
}

function displayLoser(text1, text2, text3) {
  setTimeout(function() {
    pTags[0].classList.remove('hidden');
    pTags[0].innerText = text1;
  }, 500);
  setTimeout(function() {
    pTags[1].classList.remove('hidden');
    pTags[1].innerText = text2;
  }, 2500);
  setTimeout(function() {
    pTags[2].classList.remove('hidden');
    pTags[2].innerText = text3;
  }, 4500);
  setTimeout(displayBottomHalf, 6500);
}

function displayBottomHalf() {
  var bottomHalf = document.getElementById('bottom-half');
  bottomHalf.classList.remove('hidden');
}