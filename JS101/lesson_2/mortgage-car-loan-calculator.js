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
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

function isValidYear(year) {

}

function getLoan() {
  prompt('What is your loan amount?\n   Please enter the amount in a xxxx.xx number format');
  let loan = readline.question();

  while (invalidNumber(loan)) {
    prompt('Sorry that is not a valid entry. Please re-enter the loan amount in numbers only.');
    loan = readline.question();
  } 
  return loan;
}

function getAPR() {
  prompt('What is the Annual Percentage Rate?\n   Please enter in whole numbers only, ie 5 for 5%');
  let apr = readline.question();
  let monthlyRate = (apr / 12) / 100;


  while (invalidNumber(apr)) {
    prompt('Sorry that is not a valid entry. Please re-enter the APR as a number only.');
    apr = readline.question();
  }
  return monthlyRate;
}

function getLoanDuration() {
  prompt('What is the duration of your loan?\n   Please enter it in months');
  let durationMonths = readline.question();

  while (invalidNumber(durationMonths) || durationMonths === 0 || durationMonths.includes('.')) {
    prompt('Sorry that is not a valid entry. Please re-enter the duration in integers greater than 0 only');
    durationMonths = readline.question();
  }
  return durationMonths;
}

function calculateMonthlyPayment(loan, rate, duration) {
  let calculation;
  if (rate === 0) {
    calculation = loan / duration;
  } else {
    calculation = loan * (rate /
      (1 - Math.pow((1 + rate), (-duration))));
  }
  return calculation;
}

while (true) {
  console.clear();
  prompt('Welcome to the mortage/car loan calculator!');

  let loanAmount = getLoan();

  let APRMonthlyRate = getAPR();

  let loanDurationInMonths = getLoanDuration();

  let monthlyPayment = calculateMonthlyPayment(loanAmount, APRMonthlyRate, loanDurationInMonths)

  prompt(`For a loan of $${loanAmount} with an APR of ${APRMonthlyRate * 12 * 100}% paid over ${loanDurationInMonths / 12} years, your monthly payments will be:
   >> $${monthlyPayment.toFixed(2)}`);
    
  prompt('Would you like to make another calculation? (y/n)');
  let answer = readline.question();
  
  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question();
    }

  if (answer === 'n') {
    prompt('Thank you for using the calculator, bye!');
  break;
  }
}