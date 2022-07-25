const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock' ];
const VALID_ENTRIES = ['r', 'p', 'sc', 'l', 'sp'];
const PLAYER_WINS = {
  r: ['sc', 'l'],
  p: ['r', 'sp'],
  sc: ['p', 'l'],
  sp: ['r', 'sc'],
  l: ['sp', 'p']
};

const TO_WHOLE_WORD = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  sp: "spock",
  l: "lizard"
};

const BEST_OF = 3;

let roundCount = 0;
let playerCounter = 0;
let computerCounter = 0;

function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function roundCounter() {
  roundCount += 1;
  prompt(`Round ${roundCount}!`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${TO_WHOLE_WORD[choice]}, computer chose ${TO_WHOLE_WORD[computerChoice]}`);
  if  (PLAYER_WINS[choice].includes(computerChoice)) {
    prompt('You win this round!');
  } else if (choice === computerChoice) {
    prompt("This round is a tie!");
  } else {
    prompt('Computer wins this round!');
  }
}

function gameCounter(choice, computerChoice) {
  if (PLAYER_WINS[choice].includes(computerChoice)) {
    playerCounter += 1;
  } else if (choice === computerChoice) {
    return gameCounter;
  } else {
    (computerCounter += 1);
  }
  return gameCounter;
}

function gameTotal() {
  if (playerCounter === BEST_OF) {
    prompt(`Congratulation! You are the winner of the best of ${BEST_OF}!`);
  } else if (computerCounter === BEST_OF ) {
    prompt(`The computer has won the best of ${BEST_OF}!`);
  }
}

function resetGame() {
  playerCounter = 0;
  computerCounter = 0;
  roundCount = 0;
  console.clear();
}

while (true) {
  resetGame();
  prompt(`Welcome to Rock, Paper, Scissors, Lizaard, Spock! Winner is the first to ${BEST_OF}.\nGood Luck!\n`);

  while (playerCounter < BEST_OF && computerCounter < BEST_OF) {
    roundCounter();

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}.\nPlease enter r for rock, p for paper, sc for scissors, l for lizard, or sp for spock.`);
    let choice = readline.question();

    while (!VALID_ENTRIES.includes(choice)) {
      prompt("That's not a valid choice.");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_ENTRIES.length);
    let computerChoice = VALID_ENTRIES[randomIndex];

    displayWinner(choice, computerChoice);
    gameCounter(choice, computerChoice);
    prompt(`The current score is:\nplayer:${playerCounter}\ncomputer:${computerCounter}\n`);
    gameTotal();
  }

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer === 'n') {
    prompt('Thank you for playing Rock Paper Scissors Lizard Spock');
    break;
  }
}
