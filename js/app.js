// Constructor for Player object which gets pushed to playerArr
var playerArr = [];

function Player(name) {
  this.name = name;
  this.score = 500;
  playerArr.push(this);
}

// Questions
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
  },
  {
    question: 'Botanically speaking, what is a chili pepper?',
    answers: [
      'A Berry',
      'A vegetable',
      'A legume',
      'A nut'
    ],
    category: 'Food'
  },
  {
    question: 'After helping kids catch Carmen Sandiego, Rockapella performed in commercials for what coffee brand?',
    answers: [
      'Folgiers',
      'Starbucks',
      'Maxwell House',
      'Eight O\'clock'
    ],
    category: 'Food'
  },
  {
    question: 'Which of these characters weren\'t among the original X-Men in the comics.',
    answers: [
      'Nightcrawler',
      'Beast',
      'Angel',
      'Iceman'
    ],
    category: 'Comics'
  },
  {
    question: 'Wolverine made his first appearance in what comic series?',
    answers: [
      'The Hulk',
      'Alpha Flight',
      'X-men',
      'The Avengers'
    ],
    category: 'Comics'
  },
  {
    question: 'Which classic puzzle game is the brain child of Alexy Pajitnov?',
    answers: [
      'Tetris',
      'Myst',
      'Bejeweled',
      'Lemmings'
    ],
    category: 'Video Games'
  },
  {
    question: 'Which of the following quotes from AFI\'s 100 best movie quotes didn\'t come from Casablanca?',
    answers: [
      '"Frankly, my dear, I don\'t give a damn."',
      '"Here\'s looking at you, kid."',
      '"Louis, I think this is the beginning of a beautiful friendship."',
      '"We\'ll always have Paris."'
    ],
    category: 'Classic Movies'
  }
];