// Question 1

// output 'The Flintstones Rock!'   10 times  each line indented 1 space to the right of the line above it

/*
for loop i = 1, i > 10, i++ (loop ten times)
use pad Start to indent 1 space + i
*/

let str = 'The Flintstones Rock!';

function indentedOutput() {
  for (i = 1; i < 11; i++ ) {
    console.log(str.padStart(str.length + i, ' '));
  }
}

indentedOutput();



// Question 2

//input: string
//output: NEW string that swaps the CASE of ALL letters
// split the string, map for each char, if === toUpperCase() => toLowerCase() else toLowerCase(), join

let munstersDescription = 'The Munsters are creepy and spooky.'

console.log(munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(''));



// Question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while ( number > 0) {
    do {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    } while (divisor !== 0);
    return factors;
  }
}

console.log(factors(10));

// The purpose of number % divisor === 0 is so that the only numbers going in to the 
// factors array are whole integers.



// Question 4

// push mutates the argument represented by buffer, while concat does not



// Question 5

//console.log(0.3 + 0.6); => 0.89999999
//console.log(0.3+0.6 === 0.9) => false



// Question 6

// let nanArray == [NaN];
// console.log(nanArray[0] === NaN); => false
/*
most reliable way to check for NaN is NaN !== NaN will always return true. 
this is because NaN is not equal to itself 
OR
using the Number.isNaN() method.
*/



// Question 7

/*
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); => returns 50

console.log(answer - 8); => outputs 34
*/



// Question 8

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// yes the data for munsters changes because objects are passed by reference. because the function doesn't reassign the object, it mutates it
// thus, the object that gets changed by the function IS the munsters object. 
// the demoObject starts off pointing to the munsters object
// the program could replace it with another object, and the original data would be safe. 



// Question 9

//outputs 'paper';



// Question 10
// returns 'no'.

