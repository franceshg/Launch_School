// Question 1

/*
No error will be raised.
the Expected Output is: [1, 2, 3,<3 empty items>, 5];
Javascript will treat array slots 3 - 5 as empty slots.

In the bonus question, the line numbers[4] will return undefined, but it is empty, not valued at undefined. 
*/



// Question 2

/*
let str1 = 'Come over here!';
let str2 = "What's up, Doc?";

str1.endsWith('!'); // Expected return: true
str2.endsWith('!'); // Expected return: false
*/



// Question 3

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 402,
  Eddie: 10
};

ages.hasOwnProperty('Spot'); // Expected return: false



// Question 4

let munstersDescription = 'the Munsters are CREEPY and Spooky.';

let munstersReturn = munstersDescription.charAt(0).toUpperCase() + 
  munstersDescription.slice(1).toLowerCase();  // Expected Return: The munsters are creepy and spooky.



// Question 5

console.log(false == '0'); //Expected output: true
console.log(false === '0'); //Expected output: false



// Question 6

let additionalAges = {
  Marilyn: 22,
  Spot: 237
};

Object.assign(ages, additionalAges);



// Question 7

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino'); // Expected output: false
str2.includes('Dino'); // Expected output: true



// Question 8

let flinstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

flinstones.push('Dino'); //Expexted output: ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino']



// Question 9

flinstones.push('Dino', 'Happy'); //Expexted output: ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Happy'];



// Question 10

let advice = 'Few things in life are as important as house training your pet dinosaur.';

advice.slice(0, advice.indexOf('house')); 

