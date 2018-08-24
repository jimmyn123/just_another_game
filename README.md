# Just Another Game version 2.0.1 
Trivia game with no winners but one loser

# Creators
Tre Cain, Nic Cook, Neth Horn, Jimmy Nguyen

## Problem Domain

We wanted to create a game for all of the trivia nerds of the world where the objective is not to win.

## Project Scope

This is a trivia game in which all players start with 500 points. Players can not get more points, they can only lose points. The objecective is to not be the player who loses all of his or her points first. There is no winner, just one loser.

1. The game starts from the INDEX page. From here, the player can adjust how many people will be playing and what their names will be. The INDEX page will contain a credits link which takes the user to the ABOUT US page. It also contains the RULES page that informs the user how to play the game.

2. When the user has selected the approriate number of players and everyone has entered their name, they can click on the "Start" button which will take them to the DISPLAY page. The player data will be loaded from localstorage in the display page. There will be a different amount of turns left depending on how many players are playing. Nine for three players or eight for two and four players.

3. The first player will be presented with a question and will be given the choice to answer it themself or pick a player to answer it instead. If the player picks someone else to answer they must pick amoung four possible answers. If that player gets it right, they player who picked them loses 200 points. If they get it wrong, the player who was picked loses 100 points. If the player decides to answer themselves, they lose 100 points if they are wrong and win nothing if they are right.

4. The game progresses until one player loses all of their points or until no more turns are left, in which case the person with the fewest points is the loser.


## User Stories

### Developer

*	As a developer, I want to make a fun game so that users can enjoy themselves.

*	As a developer, I want to make a game that will showcase my skills so that I can apply what I’ve learned.

*	As a developer, I want to channel my trivia geekiness into a game so I can share my joy with others.

*	As a developer, I am looking to make a game that is interesting so that users will play it over and over again.

*   As a developer, I want to create a scenario that decreases users points with each question answered incorrectly. 

*   As a developer, I want to create a scenario where users are able to team up and work to get other players out of the game.

### User

*	As a player who is bad at trivia, I want to be able to make others answer questions, so I can still win the game.

*	As a trivia fanatic, I want to be able to utilize my knowledge so that I can show my prowess.

*	As a competitor I want the game to have a mechanic of loss so I can make fun of my friends.

*	As a user, I am looking for a UI that is intuitive and easy to use so I will not have to spend a lot of time learning the game.

*	As a gamer, I am looking for a game that I can play quickly so that I do not always have to invest a lot of time.

* As a user, I am looking for accurate scoring and correct game management.
