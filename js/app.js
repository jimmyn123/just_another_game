// Constructor for Player object which gets pushed to playerArr
var playerArr = [];

function Player(name, id) {
  this.name = name;
  this.score = 500;
  this.id = id;
  playerArr.push(this);
}

var allQuestions = [
  {
    question: 'What is the answer to this question?',
    answers: [
      'This one',
      'Ozzie Smith',
      'The Queen of England',
      'Norman Fell'
    ],
    category: 'Stuff'
  },
  {
    question: 'What the heck are you doing?',
    answers: [
      'Nothing',
      'Yo Momma',
      'Porn',
      'Norman Fell'
    ],
    category: 'That thing you do'
  }
];