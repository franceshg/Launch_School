const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_ROUNDS = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
let playerScore = 0;
let computerScore = 0;
let currentPlayer = '';
const FIRST_PLAYER_CHOICE_NAMES = {
  p : 'Player',
  c : 'Computer',
};
let computerSquare;
let playAgainAnswer = '';

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(` => ${msg}`);
}

function decideFirstPlayer() {
  prompt('Who should go first each round in this Game? Player (p), Computer (c), or Random (r)?');
  currentPlayer = readline.question();
  while (currentPlayer !== 'p' && currentPlayer !== 'c' && currentPlayer !== 'r') {
    prompt('This is not a valid choice. Please choose p for Player, c for Computer or r for Random');
    currentPlayer = readline.question();
  }

  if (currentPlayer === 'r') {
    let result = Math.floor(Math.random() * 2);
    if (result === 1) {
      currentPlayer = 'c';
    } else if (result === 0) {
      currentPlayer = 'p';
    }
  }

  prompt(`${FIRST_PLAYER_CHOICE_NAMES[currentPlayer]} will go first. Press any key to continue`);
  readline.keyIn();
}

function joinOr(arr, deliminator = ', ', finalDeliminator = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr}`;
    case 2:
      return arr.join(` ${finalDeliminator} `);
    default:
      return arr.slice(0, -1).join(deliminator) + `${deliminator}${finalDeliminator} ${arr.slice(-1)}`;
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let playerSquare;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    playerSquare = readline.question().trim();
    if (emptySquares(board).includes(playerSquare)) break;

    prompt('That is not a valid choice');
  }

  board[playerSquare] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function computerOffensiveMove(board) {
  for (let index = 0; index < WINNING_LINES.length; index++ ) {
    let line = WINNING_LINES[index];
    computerSquare = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (computerSquare) break;
  }
}

function computerDefensiveMove(board) {
  if (!computerSquare) {
    for (let index = 0; index < WINNING_LINES.length; index++ ) {
      let line = WINNING_LINES[index];
      computerSquare = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (computerSquare) break;
    }
  }
}

function computerRandomMove(board) {
  if (!computerSquare) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    computerSquare = emptySquares(board)[randomIndex];
  }
}

function computerChoosesSquare(board) {

  computerOffensiveMove(board);
  computerDefensiveMove(board);
  computerRandomMove(board);

  board[computerSquare] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if ([sq1, sq2, sq3].every(square => board[square] === HUMAN_MARKER)) {
      return 'Player';
    } else if ([sq1, sq2, sq3].every(square => board[square] === COMPUTER_MARKER)) {
      return 'Computer';
    }
  }

  return null;
}
function resetGame() {
  console.clear();
  playerScore = 0;
  computerScore = 0;
  currentPlayer = '';
}

function greeting() {

  prompt(`Welcome to Tic Tac Toe! This game is best of ${NUMBER_OF_ROUNDS} rounds.`);
  prompt('The grid choices are 1 - 9 from top left to bottom right.');
  prompt('Good luck!');
  prompt('Press any key to begin');
  readline.keyIn();
}

function nextRound() {
  prompt('Press any key to continue');
  readline.keyIn();
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'c') {
    return computerChoosesSquare(board);
  } else return playerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'c') {
    return 'p';
  } else return 'c';
}


function letsPlay(board, currentPlayer) {
  while (true) {
    displayBoard(board);
    chooseSquare(board,currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);

    if (someoneWon(board) || boardFull(board)) break;
  }
}

function addScores(board) {
  if (detectWinner(board) === 'Player') {
    playerScore += 1;
  } else if (detectWinner(board) === 'Computer') {
    computerScore += 1;
  }

  prompt(`The current score is:\nPlayer:${playerScore}\nComputer:${computerScore}`);
}

function playAgain() {
  prompt(`Play again? (y or n)`);
  playAgainAnswer = readline.question().toLowerCase();

  while (playAgainAnswer !== 'y' && playAgainAnswer !== 'n') {
    prompt('That is not a valid response. Please choose y to continue or n to exit');
    playAgainAnswer = readline.question().toLowerCase();
  }
}

// MAIN GAME BODY 

while (true) {
  resetGame();
  greeting();
  decideFirstPlayer();

  while (true) {
    let board = initializeBoard();
    letsPlay(board, currentPlayer);
    displayBoard(board);

    if (someoneWon(board)) {
      prompt (`${detectWinner(board)} won!`);
    } else {
      prompt ("It's a tie!");
    }

    addScores(board);

    if (playerScore === NUMBER_OF_ROUNDS) {
      prompt('Congratulations, player! You win!');
      break;
    } else if (computerScore === NUMBER_OF_ROUNDS) {
      prompt('The Computer wins!');
      break;
    }

    nextRound();
  }
  playAgain();

  if (playAgainAnswer === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!');