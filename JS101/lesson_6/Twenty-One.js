/*
1. Initialize the deck
2. Deal cards to player and dealer
3. Player turn : hit or stay
   - repeat until bust or stay
4. If player busts, dealer wins
5. Dealer turn: hit or stay
  - repeat until total >= 17
6. If dealer busts, player wins
7. Compare cards and declare winner
*/
const readline = require('readline-sync');
let cards = [];
let playersCards = [];
let dealersCards = [];
let playerTotal = 0;
let dealerTotal = 0;
let gameTotal = 21;
let gameName = 'Twenty-One';
let playAgainAnswer = '';
let hitOrStayAnswer = '';
const highestDealerTotal = 17;
const ACE_VALUE = 11;
const FACE_CARD_VALUE = 10;
const ACE_CORRECTION_VALUE = 10;

function prompt(msg) {
  console.log(`--> ${msg}`);
}

function greeting() {
  console.clear();
  prompt(`Welcome to ${gameName}!\n    The aim of the game is to get your card total to as close to ${gameTotal} without going over.\n    If you go over ${gameTotal}, it's a bust, and you lose.
    \n    If at any point you choose to stay and keep your card total, the dealer will deal themselves cards until they reach ${highestDealerTotal} or bust.
    If the dealer stops before busting, whoever's card total is closer to ${gameTotal}, wins!
    \n    Jacks, Queens, and Kings are worth 10 points.\n    Ace is worth 1 or 11 depending on the other cards dealt.
    \n    Both player and dealer will be dealt two cards to begin. Only one of the dealer's cards will be revealed until it is their turn. 
    Good Luck!\n
    Press any key to begin`);
  readline.keyIn();
}

function initializeDeck(cards) {
  const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  for (let index = 0; index < suits.length; index++) {
    for (let id = 0; id < values.length; id++) {
      cards.push([values[id], suits[index]]);
    }
  }
  for (let index = 0; index < cards.length; index++) {
    cards[index].splice(1, 0, 'of');
  }
  console.log(cards);
}

function total(cards) {
  let values = cards.map(card => card[0]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'Ace') {
      sum += ACE_VALUE;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += FACE_CARD_VALUE;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > gameTotal) sum -= ACE_CORRECTION_VALUE;
  });

  return sum;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
}

function dealCard(cards) {
  return shuffle(cards)[0];
}

function dealStartingCards(player, cards) {
  player.push(dealCard(cards));
  player.push(dealCard(cards));
}

function startGame(cards) {
  console.clear();
  playersCards = [];
  dealersCards = [];
  dealStartingCards(dealersCards, cards);
  prompt(`The dealer has been dealt a ${dealersCards[0].join(' ')} and a face down card\n`);

  dealStartingCards(playersCards, cards);

  playerTotal = total(playersCards);
  dealerTotal = total(dealersCards);

  prompt(`You have been dealt a ${playersCards[0].join(' ')} and a ${playersCards[1].join(' ')}`);
  prompt(`Your current total is ${playerTotal}\n`);
}

function busted() {
  return (playerTotal > gameTotal) || (dealerTotal > gameTotal)
}

function promptHitOrStay() {
  prompt('hit or stay?');
  hitOrStayAnswer = readline.question().trim();
  while (hitOrStayAnswer !== 'hit' && hitOrStayAnswer !== 'stay') {
    hitOrStayAnswer = readline.question(`That is not a valid entry. Please choose stay or hit\n`);
  }
}

function playerMoves(cards) {
  while (true) {
    promptHitOrStay();

    if (hitOrStayAnswer === 'hit') {
      console.clear();
      playersCards.push(dealCard(cards));
      playerTotal = total(playersCards);
      prompt(`You have been dealt a ${playersCards[playersCards.length - 1].join(' ')}`);
      prompt(`Your current total is ${playerTotal}\n`);
    }

    if (hitOrStayAnswer === 'stay') break;

    if (busted()) {
      prompt('BUST');
      break;
    }
  }
}

function revealDealerCards() {
  prompt(`The dealer's face down card is revealed. It is a ${dealersCards[1].join(' ')}`);
  prompt(`The dealer's current total is ${dealerTotal}\n`);
}

function dealerHits(cards) {
  console.clear();
  dealersCards.push(dealCard(cards));
  dealerTotal = total(dealersCards);
}

function dealerResults() {
  prompt(`The dealer was dealt a ${dealersCards[dealersCards.length - 1].join(' ')}`);
  prompt(`The dealer's current total is ${dealerTotal}\n`);
}

function dealerMoves(cards) {
  while (true) {
    if (busted()) break;
    revealDealerCards();

    while (true) {
      if (busted()) {
        prompt('BUST');
        break;
      }
      if (dealerTotal >= highestDealerTotal) break;
    
      dealerHits(cards);

      dealerResults();

    }
    break;
  }
}

function decideWinner() {
  if ( dealerTotal === playerTotal) {
      prompt(`It's a tie!\n`);
  } else if ((playerTotal > gameTotal) || (dealerTotal > playerTotal) && (dealerTotal <= gameTotal)) {
      prompt(`Dealer Wins!\n`);
  } else {
    prompt(`Player Wins!\n`);
  }
}

function playAgain() {
  prompt(`Play again? (y or n)`);
  playAgainAnswer = readline.question().toLowerCase().trim();

  while (playAgainAnswer !== 'y' && playAgainAnswer !== 'n') {
    prompt('That is not a valid response. Please choose y to continue or n to exit');
    playAgainAnswer = readline.question().toLowerCase();
  }
}

// MAIN GAME BODY:

while (true) {
  greeting();
  initializeDeck(cards);

  while (true) {

    startGame(cards);
    playerMoves(cards);
    dealerMoves(cards);
    decideWinner();

    playAgain();    
    if (playAgainAnswer === 'n') {
      prompt('Thank you for playing Twenty-One!');
      break;
    }
  }

  break;
}
