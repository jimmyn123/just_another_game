var playerScoreArea = document.getElementById('player-score-area');
var playerData = JSON.parse(localStorage.getItem('playerArr'));
var playerBoxArray = [];
var activePlayer = 0;
var pickedPlayer = 0;
var turnsRemaining;
var questionText = document.getElementById('question-text');
var questionHead = document.getElementById('question-head');
var answerDiv = document.getElementById('answer-div');
var usedQuestions = [];
var playerScores = [];

// generate player boxes
playerData.forEach(function(player, i) {
  new Player(player, i);
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
  playerScores.push(newP);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);
  playerScoreArea.appendChild(newDiv);
  playerBoxArray.push(newDiv);
  checkStatus();
});

// set turn remainging
turnsRemaining = playerArr.length === 3 ? 9 : 8;
var turnsRemainingTag = document.getElementById('turns-remaining');
turnsRemainingTag.innerText = turnsRemaining;

function decrementTurns() {
  turnsRemaining--;
  turnsRemainingTag.innerText = turnsRemaining;
}

function checkStatus() {
  playerBoxArray.forEach(function(playerBox) {
    playerBox.classList.remove('active-player');
    playerBox.classList.remove('picked-player');
  });
  playerBoxArray[activePlayer].classList.add('active-player');
  playerBoxArray[pickedPlayer].classList.add('picked-player');
}

// get questions
function getRandomQuestion() {
  var qNum = Math.floor(Math.random() * allQuestions.length);
  while (usedQuestions.includes(qNum)) {
    qNum = Math.floor(Math.random() * allQuestions.length);
  }
  var selectedQuestion = allQuestions[qNum];
  usedQuestions.push(qNum);
  questionHead.innerText = `Here is your next category:`
  questionText.innerText = `${selectedQuestion.category}`;
  createPickerButton(selectedQuestion);
}

function clearAnswers() {
  while(answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }
}

function createPickerButton(question) {
  clearAnswers();
  for (var i = 0; i < playerData.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('individual-answers');
    var newP = document.createElement('p');
    newDiv.classList.add('small-answer-text');
    newP.innerText = i === activePlayer ? 'I\'ll answer.' : `Make ${playerData[i]} answer.`;
    newDiv.appendChild(newP);
    answerDiv.appendChild(newDiv);
    pickPlayerEvent(newDiv, question, i);
  }
}

function pickPlayerEvent(newDiv, question, i) {
  newDiv.addEventListener('click', function() {
    pickedPlayer = i;
    checkStatus();
    displayQuestion(question);
  });
}

function displayQuestion(question) {
  questionHead.innerText = 'Question:';
  questionText.innerText = question.question;
  populateAnswers(question.answers);
  adjustAnswerText();
}

function populateAnswers(answers) {
  clearAnswers();
  var scrambledAnswers = [];
  var answerIndex = Math.floor(Math.random() * answers.length);
  for (var i = 0; i < answers.length; i++) {
    while (scrambledAnswers.includes(answerIndex)) {
      answerIndex = Math.floor(Math.random() * answers.length);
    }
    scrambledAnswers.push(answerIndex);
    var newAnswer = document.createElement('div');
    newAnswer.classList.add('individual-answers');
    var newPTag = document.createElement('p');
    newPTag.innerText = answers[answerIndex];
    newAnswer.appendChild(newPTag);
    answerDiv.appendChild(newAnswer);
    selectAnswerEvent(newAnswer, answers[answerIndex], answers[0]);
  }
}

function selectAnswerEvent(div, currentAnswer, correctAnswer) {
  div.addEventListener('click', function() {
    selectAnswer(currentAnswer, correctAnswer);
  });
}

function selectAnswer(pickedAnswer, correctAnswer) {
  clearAnswers();
  var isCorrect;
  if (pickedAnswer === correctAnswer) {
    questionHead.classList.add('correct-response');
    questionHead.innerText = 'CORRECT!!';
    questionText.innerText = 'Way to go!';
    isCorrect = true;
  } else {
    questionHead.classList.add('wrong-response');
    questionHead.innerText = 'WRONG!!!';
    questionText.innerText = 'I feel bad for you.';
    isCorrect = false;
  }
  updateScores(isCorrect);
  var continueBtn = document.createElement('div');
  continueBtn.classList.add('individual-answers');
  var newP = document.createElement('p');
  newP.innerText = 'Click me to continue.';
  continueBtn.appendChild(newP);
  answerDiv.appendChild(continueBtn);
  advanceTurnEvent(continueBtn);
}

function advanceTurnEvent(div) {
  div.addEventListener('click', function() {
    advanceTurn();
  });
}

function updateScores(isCorrect) {
  if (isCorrect) {
    if (pickedPlayer !== activePlayer) { playerArr[activePlayer].score -= 200; }
    playerScores[activePlayer].innerText = playerArr[activePlayer].score;
  } else {
    playerArr[pickedPlayer].score -= 100;
    playerScores[pickedPlayer].innerText = playerArr[pickedPlayer].score;
  }
}

function advanceTurn() {
  questionHead.classList.remove('correct-response');
  questionHead.classList.remove('wrong-response');
  activePlayer++;
  activePlayer = activePlayer % playerArr.length;
  pickedPlayer = activePlayer;
  decrementTurns();
  gameOverCheck();
  checkStatus();
  getRandomQuestion();
}

// check if game ending conditions are met
function gameOverCheck() {
  var gameOver = turnsRemaining > 0 ? false : true;
  var loser = [{ name: 'x', score: '600' }];
  playerArr.forEach(function(player) {
    if (player.score < loser[0].score) {
      loser = [player];
    } else if (player.score === loser[0].score) {
      loser.push(player);
    }
    if (player.score <= 0) { 
      gameOver = true;
    }
  });
  if (gameOver) {
    localStorage.setItem('loser', JSON.stringify(loser));
    localStorage.setItem('totalPlayers', playerArr.length);
    window.location = 'loser.html';
  }
}

// dynamically set the font size for lengthier answers
function adjustAnswerText() {
  var answerDivs = document.getElementsByClassName('individual-answers');

  for (var i = 0; i < answerDivs.length; i++) {
    answerDivs[i].classList.remove('small-answer-text');
    if (answerDivs[i].innerText.length > 14) {
      answerDivs[i].classList.add('small-answer-text');
    }
  }
}

getRandomQuestion();