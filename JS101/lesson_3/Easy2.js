// Question 1

// input : string
// output: new string that replaces every occurance of the word
  // "important" with "urgent"

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.replaceAll('important', 'urgent'); // => few things in life are as urgent as house training your pet dinosaur.



// Question 2

let numbersArr = [1, 2, 3, 4, 5];

numbersArr.slice().reverse(); // => [5, 4, 3, 2, 1]; numbers is not mutated

[...numbersArr].sort((num1, num2) => num2 - num1) // => [5, 4, 3, 2, 1]; numbers is not mutated

let reversedNumber = [];
numbersArr.forEach((number) => {
  reversedNumber.unshift(number);
});  // => [5, 4, 3, 2, 1]; numbers is not mutated



// Question 3
// input: number, array
// output: true if number is included in array, else false

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; 
let number2 = 95; 5, 4

numbers.includes(number1); // => false
numbers.includes(number2); // => true



// Question 4

let famousWords = 'seven years ago...';

'Four score and ' + famousWords;

'Four score and '.concat(famousWords);



// Question 5
let arr = [1, 2, 3, 4, 5];

arr.splice(2,1);



// Question 6 TRY AGAIN
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newArray = [].concat(...flintstones);
// => ['Fred, 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']



// Question 7 TRY AGAIN
let flintstonesTwo = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Object.entries(flintstonesTwo).filter(pair => pair[0] === 'Barney').shift();



// Question 8
let nmbers = [1, 2, 3, 4];
let table = {field1: 1, field2: 2, field3: 3, field4: 4 };

Array.isArray(nmbers); //true
Array.isArray(table); //false



// Question 9
let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length, ' '); // => '       Flintstone Family Members'



// Question 10
// one line expression
// count number of LOWER-CASE 't' characters in a string

let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';

// let count1 = [...statement1.match(/t/g)].length
// let count2 = [...statement2.match(/t/g)].length

let count1 = statement1.split('').filter(char => char === 't').length;
let count2 = statement2.split('').filter(char => char === 't').length;
