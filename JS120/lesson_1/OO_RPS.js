/*
Step 1: Write a textual description of the problem or exercise

RPS is a two player game where each player chooses on of three possible moves:
rock, paper, scissors.
The winner is chosen by comparing their moves with the following rules:
- Rock crushes scissors, ie rock wins against scissors
- Scissors cuts paper, ie scissors wins against paper
- Paper wraps rock, ie paper wins against rock
- If the players chose the same move, the game is a tie.

-------
Step 2: Extract the significant nouns and verbs from the description
Nouns: player, move, rule
Verbs: choose, compare

-------
Step3: Organise and associate the verbs with the nouns
Player
  - choose
Move
Rule

???
  - compare

--------
Orchestration Engine:
we need an engine to orchestrate the objects. The engine is where the
procedural program flow should be. Let's call the engine object RPSGame
with a method named play.
*/
const readline = require('readline-sync');
const WINNING_SCORE = 3;
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors'] 
};
const CHOICES = Object.keys(WINNING_MOVES);

function createPlayer() {
  return {
    move: null,
    history: [],
    score: 0,

    addPoint() {
      this.score += 1;
    },

    reset() {
      this.score = 0;
      this.move = null;
    },
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choices: CHOICES,
    loss: null,

    choose() {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIndex];
      this.history.push(this.move);
    },

    modChoice() {
      let finalChoices = [];

      CHOICES.forEach(move => {
        if (!this.loss.includes(move)) {
          finalChoices.push(move);
        }
      });
      return this.choices.concat(finalChoices);
    },

    lastLoss(humanMove) {
      this.loss = WINNING_MOVES[humanMove];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, spock, or lizard: ');
        choice = readline.question();
        if (CHOICES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      this.history.push(choice);
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to rock, paper, scissors, spock, lizard. The winner will be the first to ${WINNING_SCORE}. Good luck!`);
  },

  displayGoodbyeMessage() {
    console.log(`\nThanks for playing rock, paper, scissors, spock, lizard. Goodbye!`);
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`\nYou chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}\n`);

    if (WINNING_MOVES[humanMove].includes(computerMove)) {
      console.log('You win this round!\n');
      this.human.addPoint();
      this.computer.lastLoss(humanMove);
      if (this.computer.loss !== null) {
        this.computer.choices = this.computer.modChoice();
      }

    } else if (WINNING_MOVES[computerMove].includes(humanMove)) {
      console.log('Computer wins this round!\n');
      this.computer.addPoint();
    } else {
      console.log("It's a tie\n");
    }
  },

  playAgain() {
    console.log('\nWould you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  resetScores() {
    this.human.reset();
    this.computer.reset();
  },

  play() {

    while (true) {
      this.displayWelcomeMessage();
      let humanScore = 0;
      let computerScore = 0;
      let round = 1;

      while (true) {
        console.log(`\n***  Round ${round}  ***\n`);
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        

        console.log(`The current score is: \nPlayer: ${this.human.score}\nComputer: ${this.computer.score}`);
        if (this.human.score === WINNING_SCORE || this.computer.score === WINNING_SCORE) break;
        
        round += 1;
        console.log('\n(Press any key to continue)');
        readline.keyIn();
        console.clear();
        }

      if (this.human.score === WINNING_SCORE) {
        console.log('\n> > > You win the game! < < <');
      } else if (this.computer.score === WINNING_SCORE) {
        console.log('\n> > > Computer wins the game! < < <');
      }

      if (this.playAgain()) {
        this.resetScores();
      } else {
        this.displayGoodbyeMessage();
        break;
      }
    }
  },
}



RPSGame.play();