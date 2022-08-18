// Question 1
// [1, 2, 3] 



// Question 2
// [undefined, undefined, undefined]



// Question 3
// [1, 4, 9]
// without braces surroudning the body of the arrow function, JS uses the computed value as the return value.



// Question 4
// > 11
// pop destructively removes the last element of the array from the calling array and returns i
// length is being accessed on the return value by pop



// Question 5
// > 2
// > 4
// > 6
// > true 



// Question 6
// fill method changes all the elements in an array with a given elemen from a start index to an end index
// it returns a modified array - is destructive
// we can find out by reading documentation or checking the code in node. 

// > let arr = [1, 2, 3, 4, 5];
// undefined

// > arr.fill(1, 1, 5);
// [1, 1, 1, 1, 1];

// > arr
// [1, 1, 1, 1, 1]



// Question 7
// [undefined, bear]
// map method in each iterations checks each element with the if statement on line 2
// here only the value with a length greater than 3 is 'bear', the first element 'ant', the condition evalutes as false and isn't returned



// Question 8

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

// names are keys, index are values
let flintstonesObject = {};
flintstones.forEach((name, index) => {
  flintstonesObject[name] = index; 
});



// Question 9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let results = 0;
Object.values(ages).forEach((num) => results += num);




// Question 10

let agesArr = Object.values(ages);

console.log(Math.min(...agesArr));



// Question 11
// object that expresses the frequency with which each letter occurs in a string

let statement = 'The Flintstones Rock';

let charsInStatement = statement.split('').filter(char => char !== ' ');
console.log(charsInStatement);



