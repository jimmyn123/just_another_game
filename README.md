# just_another_game
Trivia game with no winners but one loser

## Conflict Plan
* What will your group do when it encounters conflict?

* If conflicts arise, we will do our best to resolve them in a timely manner.

* How will you raise concerns to members who are not adequately contributing?

* In our group, everyone is an adult and will be treated like so. It is up to each member to decide what they want to work on and how much they can handle. If a member is not adequately contributing, we will make an effort to have a group talk about what is happening and what can be done so they can contribute more.

* What is your process to resolve conflicts?

* If a conflict between individuals arise, we will talk share our conflicting views and try to come to a compromise/decision. If neither side is convinced, we will bring it up in a group setting and let the group vote for a decision. If the votes are even, we can flip a coin.

* How and when will you escalate the conflict if your attempts are unsuccessful?

* We will try to keep discussions of conflicting ideas under 15 minutes so we do not waste time. If a conflict goes over 15 minutes, we will escalate it to a group discussion and vote.

## Communication Plan:
### How will you communicate after hours and on the weekend?

* After hours and on the weekend, we plan on being conscious of Slack. We will allow team members working on their own branches when we are not in the work space, but all merging will happen when we get together the following morning.

* We will use Slack to message each other regarding important details of the project. If need, we can exchange emails and phone numbers.

### What is your strategy for ensuring everyone's voices are heard?

* As a team we will try to include everyone’s ideas and vote on decisions. We will get together as a group at least once a day and voice our ideas.

### How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

* Psychological safety is a principle we have all been aware of since kids. We aim to be comfortable around each other, so no one is afraid of speaking up. On the other side of that, we will all aim to be receptive of each other’s ideas and to hear them out fully, so we do not pre-maturely reject them.

## User Stories

### Developer

*	As a developer, I want to make a fun game so that users can enjoy themselves.

*	As a developer, I want to make a game that will showcase my skills so that I can apply what I’ve learned.

*	As a developer, I want to channel my trivia geekiness into a game so I can share my joy with others.

*	As a developer, I want to be able to limit the amount of time the user has to answer a question so I can add an element of pressure in the game.

*	As a developer, I am looking to make a game that is interesting so that users will play it over and over again.

*   As a developer, I want to create a scenario that decreases users points with each question answered incorrectly. 

*   As a developer, I want to create a scenario where users are able to team up and work to get other players out of the game.

### User

*	As a player who is bad at trivia, I want to be able to make others answer questions, so I can still win the game.

*	As a trivia fanatic, I want to be able to utilize my knowledge so that I can show my prowess.

*	As a competitor I want the game to have a mechanic of loss so I can make fun of my friends.

*	As a user, I am looking for a UI that is intuitive and easy to use so I will not have to spend a lot of time           learning the game.

*	As a gamer, I am looking for a game that I can play quickly so that I do not always have to invest a lot of time.

* As a user, I am looking for accurate scoring and correct game management.

## Project Scope

This is a trivia game in which all players start with 500 points. Players can not get more points, they can only lose points. The objecective is to not be the player who loses all of his or her points first. There is no winner, just one loser.

1. The game starts from the INDEX page. From here, the player can adjust how many people will be playing and what their names will be. The INDEX page will contain a credits link which takes the user to the ABOUT US page.

2. When the user has selected the approriate number of players and everyone has entered their name, they can click on the "Start" button which will take them to the DISPLAY page and if this isn't the first time the user has played the game, this action will overwrite the player data that is already in localstorage. The player data will be loaded from localstorage in the display page. Initial player order will be randomized. Everyone will then pick a category they want added to that game's pool of questions (Two questions from each picked category are added to the pool in four-player games. Three for three-player and four for two-player).

3. The first player will be presented with a question and will be given the choice to answer it themself or pick a player to answer it instead. If the player picks someone else to answer they must pick amoung four possible answers. If that player gets it right, they player who picked them loses 200 points. If they get it wrong, the player who was picked loses 100 points. If the player decides to answer themselves, they lose 100 points if they are wrong and win nothing if they are right.

4. The game progresses until one player loses all of their points or until the question pool is exhausted, in which case the person with the fewest points is the loser.
