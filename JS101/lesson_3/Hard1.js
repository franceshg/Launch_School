// Question 1

// the second will return undefined but on line 8 Javascript will assume a semi colon after "return" 



// Question 2

//=> { first: [1, 2] }; because push mutated the array



// Question 3

// A => 
/* 
one is: [ 'one' ]
two is: [ 'two' ]
three is: [ 'three' ]
*/

// B => 
/*
one is: [ 'one']
two is: [ 'two' ]
three is: [ 'three' ]
*/

// C =>
/*
one is: [ 'two' ]
two is: [ 'three' ]
three is: [ 'one' ]
*/


// Question 4

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length === 4) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    } else {
      return true;
    }
  }

  return false;
}

console.log(isDotSeparatedIpAddress('10.4.5'));