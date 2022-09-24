/* 
input: object with nested arrays
output: all vowels from the strings in the arrays

crate variable vowels
uisng forEach, iterate through the object
using forEach, iterate through each key's values
using forEach, iterate through each letter of the strings, and if the letter is a vowel, allocate this vowel to the varialbe vowels
if not, do nothing
log vowels
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj).forEach(value => {
  value.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    })
    })
});

