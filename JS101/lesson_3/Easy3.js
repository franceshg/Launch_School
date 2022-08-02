// Question 1

let numbers = [1, 2, 3, 4];

let otherArr = [];

numbers.splice(0, numbers.length);

while (numbers.length > 0) {
  numbers.shift();
}

function reduce(arr) {
  for (let i = 0; i = arr.length; i++) {
    arr.shift();
  }
}
reduce(numbers);

while(numbers.length) {
  numbers.pop();
}

numbers.length = 0;



// Question 2
// console.log([1, 2, 3] + [4, 5]) will return [1, 2, 34, 5]



// Question 3

/*
let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye!'
console.log(str1)

Expected output: 'hello there'
*/



//Question 4
/*
let arr = [{first: 'value1', second: 'value2',}  3,  4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42
console.log(arr1);

Expected output: [{first: 42, second: 'value2',}  3,  4, 5];
*/



// Question 5

function isColorValid(color) {
  if (color === 'blue' || color === 'green') {
    return color;
  }
}

Boolean(isColorValid('blue'));

function isColorValid(color) {
  if (color === 'blue' || color === 'green') {
    return (0 !== null);
  }
}

isColorValid('blue');

function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

const isColorValid = color => color === 'blue' || color === 'green';

const isColourValid = colour => ['green','blue'].includes(colour);


