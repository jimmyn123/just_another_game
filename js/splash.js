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

function submitUserNames() {
  var reg = /\s/;
  var isValid = true;
  var userNamesArray = [];
  var nameInputs = document.getElementsByTagName('input');
  for (var i = 0; i < nameInputs.length; i++) {
    var name = nameInputs[i].value;
    if (reg.test(name) || !name) {
      var rando = Math.floor(Math.random() * defaultNames.length);
      while (userNamesArray.includes(defaultNames[rando])) {
        rando = Math.floor(Math.random() * defaultNames.length);
      }
      name = defaultNames[rando];
      userNamesArray.push(defaultNames[rando]);
      isValid = false;
    } else {
      if (userNamesArray.includes(name)) {
        name = `${name}${i + 1}`;
      }
      userNamesArray.push(name);
    }
  }
  if (isValid) {
    var stringifiedArray = JSON.stringify(userNamesArray);
    localStorage.setItem('playerArr', stringifiedArray);
    window.location = 'views/display.html';
  } else {
    var validation = document.getElementById('validation');
    validation.textContent ='One or more of your names were invalid so here are some names we like!';
  }
}

startButton.addEventListener('click', function() {
  submitUserNames();
});


playerInputHandler();