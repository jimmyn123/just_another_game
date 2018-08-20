// Player form logic
var numberOfPlayers = 2;
var numberOfPlayersSpan = document.getElementById('number-of-players');
var incrementPlayerBtn = document.getElementById('increment-player-button');
var decrementPlayerBtn = document.getElementById('decrement-player-button');
var playerForm = document.getElementById('player-form');
var startButton = document.getElementById('start-button');

var defaultNames = [
  'PoppinFresh',
  'ButterCup',
  'DeadSkunk',
  'LadyHaha',
  'SirWillipsBrightslymore',
  'Flappy',
  'Snookums',
  'Chauncy'
];

incrementPlayerBtn.addEventListener('click', function() {
  if (numberOfPlayers < 4) {
    numberOfPlayers++;
  }
  numberOfPlayersSpan.innerText = numberOfPlayers;
  playerInputHandler();
});

decrementPlayerBtn.addEventListener('click', function() {
  if (numberOfPlayers > 2) {
    numberOfPlayers--;
  }
  numberOfPlayersSpan.innerText = numberOfPlayers;
  playerInputHandler();
});

function playerInputHandler() {
  while (playerForm.firstChild) {
    playerForm.removeChild(playerForm.firstChild);
  }
  for (var i = 0; i < numberOfPlayers; i++) {
    var newPlayerInput = document.createElement('input');
    newPlayerInput.setAttribute('type', 'text');
    playerForm.appendChild(newPlayerInput);
  }
}

startButton.addEventListener('click', function() {
  var reg = /\s/;
  var isValid = true;
  var userNamesArray = [];
  var nameInputs = document.getElementsByTagName('input');
  for (var i = 0; i < nameInputs.length; i++) {
    if (!nameInputs[i].value) {
      alert('How hard can it be to make up a name. Here, I\'ll pick one for you.');
      var rando = Math.floor(Math.random() * defaultNames.length);
      nameInputs[i].value = defaultNames[rando];
      isValid = false;
    } else if (!reg.test(nameInputs[i].value)) {
      userNamesArray.push(nameInputs[i].value);
    } else {
      alert('One or more of your player names is invalid (no spaces please!)');
      isValid = false;
    }
  }
  if (isValid) {
    var stringifiedArray = JSON.stringify(userNamesArray);
    localStorage.setItem('playerArr', stringifiedArray);
    window.location = 'views/display.html';
  }
});

playerInputHandler();