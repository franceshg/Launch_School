/*
input: loan amount
       annual percentage rate (APR)
       loan duration

output: monthly payment amount
*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`>> ${msg} `);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 1;
}

while (true) {
  console.clear();
  prompt('Welcome to the mortage/car loan calculator!');

  prompt('What is your loan amount?\n   Please enter the amount in a xxxx.xx number format');
  let loan = readline.question();

  while (invalidNumber(loan)) {
    prompt('Sorry that is not a valid entry. Please re-enter the loan amount in numbers only.');
    loan = readline.question();
  }

  prompt('What is the Annual Percentage Rate?\n   Please enter in whole numbers only, ie 5 for 5%');
  let apr = readline.question();
  let monthlyRate = (apr / 12) / 100;


  while (invalidNumber(apr)) {
    prompt('Sorry that is not a valid entry. Please re-enter the APR as a number only.');
    apr = readline.question();
  }

  prompt('What is the duration of your loan?\n   Please enter it in months');
  let durationMonths = readline.question();

  while (invalidNumber(durationMonths) || durationMonths === 0) {
    prompt('Sorry that is not a valid entry. Please re-enter the duration in numbers greater than 0 only');
    durationMonths = readline.question();
  }

  let calculation;
  if (monthlyRate === 0) {
    calculation = loan / durationMonths;
  } else {
    calculation = loan * (monthlyRate /
      (1 - Math.pow((1 + monthlyRate), (-durationMonths))));
  }

  prompt(`For a loan of $${loan} with an APR of ${apr}% paid over ${durationMonths / 12} years, your monthly payments will be:
   >> $${calculation.toFixed(2)}`);
  prompt('Would you like to make another calculation? (y/n)');
  let answer = readline.question();

  while (answer[0].toLowerCase() !== 'y' && answer[0].toLowerCase() !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question();
  }

  if (answer[0] === 'n') {
    prompt('Thank you for using the calculator, bye!');
    break;
  }
}
