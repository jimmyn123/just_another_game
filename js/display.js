// generate player boxes
var playerScoreArea = document.getElementById('player-score-area');
var playerData = JSON.parse(localStorage.getItem('playerArr'));

playerData.forEach(function(player) {
  new Player(player);
});

playerArr.forEach(function(player) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('player');
  var newH3 = document.createElement('h3');
  newH3.classList.add('yellow');
  newH3.innerText = player.name;
  var newP = document.createElement('p');
  newP.classList.add('white-smoke');
  newP.innerText = player.score;
  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);
  playerScoreArea.appendChild(newDiv);
});

// dynamically set the font size for lengthier answers
var answerDivs = document.getElementsByClassName('individual-answers');

for (var i = 0; i < answerDivs.length; i++) {
  answerDivs[i].classList.remove('small-answer-text');
  if (answerDivs[i].innerText.length > 14) {
    answerDivs[i].classList.add('small-answer-text');
  }
}