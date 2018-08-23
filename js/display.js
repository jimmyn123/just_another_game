// setting global vars for later use.
var playerData = JSON.parse(localStorage.getItem('playerArr'));
var activePlayer = 0;
var pickedPlayer = 0;
var turnsRemaining;

// grabbing Id's from display.html file for later use
var playerScoreArea = document.getElementById('player-score-area');
var questionText = document.getElementById('question-text');
var questionHead = document.getElementById('question-head');
var answerDiv = document.getElementById('answer-div');

// creating empty arrays for later use
var playerBoxArray = [];
var usedQuestions = [];
var playerScores = [];

// generate player boxes
playerData.forEach(function (player) {
  new Player(player);
});

// creating new class tags in the list of classes for each html propery inside of the div in order to them.
playerArr.forEach(function (player) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('player');
  var newH3 = document.createElement('h3');
  newH3.classList.add('yellow');
  newH3.innerText = player.name;
  var newP = document.createElement('p');

  // setting the text inside of the new p tag to the score of each player,
  // then push thoses scores to the empty array of playerScores.
  // lastly appending all knew html properties to the new div
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

// function decreases turn
function decrementTurns() {
  turnsRemaining--;
  turnsRemainingTag.innerText = turnsRemaining;
}
// updating the status of playerBoxArray by adding and removing classes
function checkStatus() {
  playerBoxArray.forEach(function (playerBox) {
    playerBox.classList.remove('active-player');
    playerBox.classList.remove('picked-player');
  });
  playerBoxArray[activePlayer].classList.add('active-player');
  playerBoxArray[pickedPlayer].classList.add('picked-player');
}

// get random questions
function getRandomQuestion() {
  var qNum = Math.floor(Math.random() * allQuestions.length);
  while (usedQuestions.includes(qNum)) {
    qNum = Math.floor(Math.random() * allQuestions.length);
  }

  // initializing the question process
  var selectedQuestion = allQuestions[qNum];
  usedQuestions.push(qNum);
  questionHead.innerText = 'Here is your next category:';
  questionText.innerText = `${selectedQuestion.category}`;
  createPickerButton(selectedQuestion);
}

// clearing answers by removing the firstchild from answerDiv
function clearAnswers() {
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }
}
// creating the content for the answer pickers
function createPickerButton(question) {
  clearAnswers();
  for (var i = 0; i < playerData.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('individual-answers');
    var newP = document.createElement('p');
    newDiv.classList.add('small-answer-text');

    // filling text content for the p tag from playerData
    newP.innerText = i === activePlayer ? 'I\'ll answer.' : `Make ${playerData[i]} answer.`;
    newDiv.appendChild(newP);
    answerDiv.appendChild(newDiv);
    pickPlayerEvent(newDiv, question, i);
  }
}
// picking new player after question is populated
function pickPlayerEvent(newDiv, question, i) {
  newDiv.addEventListener('click', function () {
    pickedPlayer = i;
    checkStatus();
    displayQuestion(question);
  });
}
// populating the question element field
function displayQuestion(question) {
  questionHead.innerText = 'Question:';
  questionText.innerText = question.question;
  populateAnswers(question.answers);
  adjustAnswerText();
}
// populating answers at random
function populateAnswers(answers) {
  clearAnswers();
  var scrambledAnswers = [];
  var answerIndex = Math.floor(Math.random() * answers.length);
  for (var i = 0; i < answers.length; i++) {
    while (scrambledAnswers.includes(answerIndex)) {
      answerIndex = Math.floor(Math.random() * answers.length);
    }
    // creating div and p element to append answers too
    scrambledAnswers.push(answerIndex);
    var newAnswer = document.createElement('div');
    newAnswer.classList.add('individual-answers');
    var newPTag = document.createElement('p');
    newPTag.innerText = answers[answerIndex];
    newAnswer.appendChild(newPTag);
    answerDiv.appendChild(newAnswer);
    // calling event listener to select answer
    selectAnswerEvent(newAnswer, answers[answerIndex], answers[0]);
  }
}
// creating event listener for the answer div
function selectAnswerEvent(div, currentAnswer, correctAnswer) {
  div.addEventListener('click', function () {
    selectAnswer(currentAnswer, correctAnswer);
  });
}
// looping though possible response based off of click data
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
  // updating scores is answer is correct and creating continue button
  updateScores(isCorrect);
  var continueBtn = document.createElement('div');
  continueBtn.classList.add('individual-answers');
  var newP = document.createElement('p');
  newP.innerText = 'Continue';
  continueBtn.appendChild(newP);
  answerDiv.appendChild(continueBtn);
  advanceTurnEvent(continueBtn);
}

function advanceTurnEvent(div) {
  div.addEventListener('click', function () {
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
  playerArr.forEach(function (player) {
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