'use strict';

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
  },
  {
    question: 'Who are the dynamic duo who created Batman?',
    answers: [
      'Bob Kane and Bill Finger',
      'Kevin Eastman and Peter Laird',
      'Jerry Siegel and Joe Shuster',
      'Todd McFarlane and Rob Liefeld'
    ],
    category: 'Comics'
  },
  {
    question: 'Besides Mortal Kombat, what video game drew ire from the US government that lead to the establishment of the ESRB?',
    answers: [
      'Night Trap',
      'Street Fighter II',
      'Killer Instinct',
      'Double Dragon'
    ],
    category: 'Video Games'
  },
  {
    question: 'What movie inexplicably won the Oscar for Best Picture over Citizen Kane in 1942?',
    answers: [
      'How Green Was My Valley?',
      'The Maltese Falcon',
      'The Grapes of Wrath',
      'Suspicion'
    ],
    category: 'Classic Movies'
  },
  {
    question: 'Sidney Poitier became the first black man to win an Oscar for Best Actor for what film?',
    answers: [
      'Lilies of the Field',
      'Porgy and Bess',
      'A Raisin in the Sun',
      'The Defiant Ones'
    ],
    category: 'Classic Movies'
  },
  {
    question: 'Who played the titular character in 1931\'s Dracula?',
    answers: [
      'Bela Lagosi',
      'Boris Karloff',
      'Max Schreck',
      'John Gilbert'
    ],
    category: 'Classic Movies'
  },
  {
    question: 'Which entertainer from the list below has won a Grammy, Oscar, Emmy, and Tony award?',
    answers: [
      'Whoopi Goldberg',
      'Julie Andrews',
      'Bette Midler',
      'Cher'
    ],
    category: 'Women in Movies'
  },
  {
    question: 'Sofia Coppola has directed several films, including all but which of the following?',
    answers: [
      'The Hurt Locker',
      'The Virgin Suicides',
      'Lost in Translation',
      'Marie Antoinette'
    ],
    category: 'Women in Movies'
  },
  {
    question: 'Chumbawumba, had a brief run-in with mainstream success with thier 1997 song titled what?',
    answers: [
      'Tubthumping',
      'Tubthumper',
      'Jumper',
      'Thubtumper'
    ],
    category: '90\'s One-Hit-Wonders'
  },
  {
    question: 'Getting a huge boost from Mya and Ol\' Dirty Bastard, what was the name of Pras\' one big hit?',
    answers: [
      'Ghetto Superstar',
      'Blue Angels',
      'Deja Vu',
      'Avenues'
    ],
    category: '90\'s One-Hit-Wonders'
  },
  {
    question: 'Which one-hit-wonder\'s one hit was the theme to the sitcom Friends?',
    answers: [
      'The Rembrandts',
      'Deep Blue Something',
      'The Verve Pipe',
      'The Breeders'
    ],
    category: '90\'s One-Hit-Wonders'
  },
  {
    question: 'Covered by Phil Collins in 1982, what group released "You Can\'t Hurry Love" in 1966?',
    answers: [
      'The Supremes',
      'The Ronettes',
      'The Shirellas',
      'The Byrds'
    ],
    category: '60\'s Music'
  },
  {
    question: 'Since establishing themselves in 1961, The Temptations have seen a number of singers come and go. Who was the first to leave the group?',
    answers: [
      'Elbridge "Al" Bryant',
      'David Ruffin',
      'Eddie Kendricks',
      'Dennis Edwards'
    ],
    category: '60\'s Music'
  },
  {
    question: 'Which of the following animated shows was NOT a spin-off?',
    answers: [
      'King of the Hill',
      'The Simpsons',
      'Bevis and Butt-Head',
      'Daria'
    ],
    category: 'Cartoons'
  },
  {
    question: 'What was the title to the opening theme to the anime Cowboy Bebop?',
    answers: [
      'Tank!',
      'The Real Folk Blues',
      'Freckles',
      'Cats on Mars'
    ],
    category: 'Cartoons'
  },
  {
    question: 'Who voiced Winston Zeddemore in the first three seasons of The Real Ghostbusters?',
    answers: [
      'Arsenio Hall',
      'Ernie Hudson',
      'Arthur Burghardt',
      'LeVar Burton'
    ],
    category: 'Cartoons'
  },
  {
    question: 'Which character is NOT voiced by Billy West?',
    answers: [
      'Rocco from Rocco\'s Modern Life',
      'Philip Fry from Futurama',
      'Stimpy from Ren and Stimpy',
      'Doug from Nickelodeon\'s Doug'
    ],
    category: 'Cartoons'
  },
  {
    question: 'What was the name of the fighting game staring a basketball player released in the 90s?',
    answers: [
      'Shaq Fu',
      'Micheal Jordan in the Windy City',
      'Barkley\'s Shut Up and Fight',
      'Killer Instinct w/ Dennis Rodman'
    ],
    category: 'Video Games'
  },
  {
    question: 'Which Star Trek TOS cast member never appeared in an epsiode of Star Trek: TNG?',
    answers: [
      'George Takei',
      'Leonard Nemoy',
      'James Doohan',
      'DeForest Kelley'
    ],
    category: 'Classic TV'
  },
  {
    question: 'Why is foie gras so controversial?',
    answers: [
      'It\'s made by force-feeding geese.',
      'It\'s dolphin.',
      'It\'s a grain harvested by slave labor.',
      'It\'s a pork product made from very scared pigs.'
    ],
    category: 'Food'
  },
  {
    question: 'Which of the following wasn\'t a spin-off of Happy Days?',
    answers: [
      'Love, American Style',
      'Mork & Mindy',
      'Laverne and Shirly',
      'Blansky\'s Beauties'
    ],
    category: 'Classic TV'
  },
  {
    question: 'What color are aircraft black boxes?',
    answers: [
      'Bright Orange',
      'Black',
      'Red',
      'Smoke Black'
    ],
    category: 'Travel'
  },
  {
    question: 'In which U.S. state was Tennessee Williams born?',
    answers: [
      'Mississippi',
      'Tennessee',
      'Alabama',
      'Texas'
    ],
    category: 'People'
  },
  {
    question: 'How long is New Zealand\'s Ninety Mile Beach?',
    answers: [
      '55 miles',
      '90 miles',
      '80 miles',
      '70 miles'
    ],
    category: 'Travel'
  },
  {
    question: 'What is the main ingredient of Bombay Duck?',
    answers: [
      'Fish',
      'Duck',
      'Shark',
      'Chicken'
    ],
    category: 'Food'
  },
  {
    question: 'Where did Spanish flu originate?',
    answers: [
      'The United States',
      'Spain',
      'Mexico',
      'Portugal'
    ],
    category: 'Travel'
  },
  {
    question: 'Which country was the Caesar salad invented in?',
    answers: [
      'Mexico',
      'The United States',
      'Albany',
      'Chile'
    ],
    category: 'Travel'
  },
  {
    question: 'What nationality was Cleopatra, Queen of Egypt?',
    answers: [
      'Greek',
      'Egyptian',
      'Mexican',
      'English'
    ],
    category: 'People'
  },
  {
    question: 'How long did the 100 years war last?',
    answers: [
      '116',
      '100',
      '98',
      '77'
    ],
    category: 'History'
  },
  {
    question: 'Which country do kiwifruit originate from?',
    answers: [
      'China',
      'Japan',
      'India',
      'Italy'
    ],
    category: 'Food'
  },
  {
    question: 'In which month does the German festival of Oktoberfest mostly take place?',
    answers: [
      'September',
      'November',
      'January',
      'October'
    ],
    category: 'Travel'
  },
  {
    question: 'What color is a purple finch?',
    answers: [
      'Raspberry red',
      'Purple',
      'Blue',
      'Brown'
    ],
    category: 'Animals'
  }
];
