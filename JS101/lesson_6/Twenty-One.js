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

function prompt(msg) {
  console.log(` >> ${msg}`);
}

function greeting() {
  console.clear();
  prompt(`Welcome to Twenty-One!\n    The aim of the game is to get your card total to as close to 21 without going over.\n    If you go over 21, it's a bust, and you lose.
    \n    If at any point you choose to stay and keep your card total, the dealer will deal themselves cards until they reach 17 or bust.
    If the dealer stops before busting, whoever's card total is closer to 21, wins!
    \n    Jacks, Queens, and Kings are worth 10 points.\n    Ace is worth 1 or 11 depending on the other cards dealt.
    \n    Both player and dealer will be dealt two cards to begin. Only one of the dealer's cards will be revealed until it is their turn. 
    Good Luck!\n
    Press any key to begin`);
  readline.keyIn();
}

function initializeDeck(cards) {
  let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
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
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > 21) sum -= 10;
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

function startGame(cards) {
  console.clear();
  playersCards = [];
  dealersCards = [];
  dealersCards.push(dealCard(cards));
  dealersCards.push(dealCard(cards));
  prompt(`The dealer has been dealt a ${dealersCards[0].join(' ')} and a face down card\n`);

  playersCards.push(dealCard(cards));
  playersCards.push(dealCard(cards));
  prompt(`You have been dealt a ${playersCards[0].join(' ')} and a ${playersCards[1].join(' ')}`);
  prompt(`Your current total is ${total(playersCards)}\n`);
}

function busted(cards) {
  if (total(cards) > 21) {
    return true;
  }
  return false;
}

function playerMoves(cards) {
  while (true) {
    prompt('hit or stay?');
    let answer = readline.question();
    while (answer !== 'hit' && answer !== 'stay') {
      answer = readline.question(`That is not a valid entry. Please choose stay or hit\n`);
    }

    if (answer === 'hit') {
      playersCards.push(dealCard(cards));
      prompt(`You have been dealt a ${playersCards[playersCards.length - 1].join(' ')}`);
      prompt(`Your current total is ${total(playersCards)}\n`);
    }

    if (answer === 'stay') break;

    if (busted(playersCards)) {
      prompt('BUST');
      break;
    }
  }
}

function dealerMoves(cards) {
  while (true) {
    if (busted(playersCards)) break;
    prompt(`The dealer's face down card is revealed. It is a ${dealersCards[1].join(' ')}`);
    prompt(`The dealer's current total is ${total(dealersCards)}\n`);

    while (true) {
      if (busted(dealersCards)) {
        prompt('BUST');
        break;
      }
      if (total(dealersCards) >= 17) break;

      dealersCards.push(dealCard(cards));
      console.log(' ');
      readline.keyIn();
      prompt(`The dealer was dealt a ${dealersCards[dealersCards.length - 1].join(' ')}`);
      prompt(`The dealer's current total is ${total(dealersCards)}\n`);

    }
    break;
  }
}

function decideWinner(playersCards, dealersCards) {
  switch (true) {
    case (busted(playersCards)):
      prompt(`Dealer Wins!\n`);
      break;
    case (busted(dealersCards)):
      prompt(`Player Wins!\n`);
      break;
    case (total(dealersCards) > total(playersCards)):
      prompt(`DealerWins!\n`);
      break;
    case (total(playersCards) > total(dealersCards)):
      prompt(`Player Wins!\n`);
      break;
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
    decideWinner(playersCards, dealersCards);

    prompt(`Play again? (y or n)`);
    let answer = readline.question().toLowerCase();

    while (answer !== 'y' && answer !== 'n') {
      prompt('That is not a valid response. Please choose y to continue or n to exit');
      answer = readline.question().toLowerCase();
    }
    if (answer === 'n') {
      prompt('Thank you for playing Twenty-One!');
      break;
    }
  }

  break;
}
