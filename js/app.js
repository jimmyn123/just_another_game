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
  },
  {
    question: 'What is love?',
    answers: [
      'Baby don\'t hurt me',
      'A many splendored thing',
      'Like a red red rose',
      'It makes the world go round'
    ],
    category: 'Love'
  },
  {
    question: 'What is the meaning of life',
    answers: [
      '42',
      'Be good and be good at it',
      'A fat boys',
      'Ask your doctor or pharmacist'
    ],
    category: 'Life'
  }
];