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
    question: 'Who played Rob Petrie\'s wife on The Dick Van Dyke Show?',
    answers: [
      'Mary Tyler Moore',
      'Rose Marie',
      'Elinor Donahue',
      'Vivian Vance'
    ],
    category: 'Classic TV'
  },
  {
    question: 'Where did the Fresh Prince of Bel Air move to Bel Air from?',
    answers: [
      'Philadelphia',
      'California',
      'Texas',
      'Florida'
    ],
    category: 'Classic TV'
  },
  {
    question: 'The Euro-pop dance hit "What is Love" is probably still stuck in your head. Whose fault is that?',
    answers: [
      'Haddaway',
      'Quad City DJs',
      'C + C Music Factory',
      'The Baha Men'
    ],
    category: '90s One-Hit Wonders'
  },
  {
    question: 'In Sgt. Pepper\'s Lonely Hearts Club Band, which Beatle is introduced as Billy Shears?',
    answers: [
      'Ringo',
      'John',
      'Paul',
      'George'
    ],
    category: '60\'s Music'
  },
  {
    question: 'Botanically speaking, what is a chili pepper?',
    answers: [
      'A berry',
      'A vegetable',
      'A legume',
      'A nut'
    ],
    category: 'Food'
  },
  {
    question: 'After helping kids catch Carmen Sandiego, Rockapella performed in commercials for what coffee brand?',
    answers: [
      'Folgers',
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
      '"...this is the beginning of a beautiful friendship."',
      '"We\'ll always have Paris."'
    ],
    category: 'Classic Movies'
  }
];