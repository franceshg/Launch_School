// function convertToUUID() {
//   let chars = '0123456789abcdef';
 
//   let arr = [];
//   for (let i = 0; i < 8; i++) {
//   arr.push(chars.charAt(Math.floor(Math.random() * 16)));
//   }
//   arr.push('-');
  
//   for (let i = 0; i < 4; i++) {
//     arr.push(chars.charAt(Math.floor(Math.random() * 16)));
//   }
//   arr.push('-');

//   for (let i = 0; i < 4; i++) {
//     arr.push(chars.charAt(Math.floor(Math.random() * 16)));
//   }
//   arr.push('-');

//   for (let i = 0; i < 4; i++) {
//     arr.push(chars.charAt(Math.floor(Math.random() * 16)));
//   }
//   arr.push('-');

//   for (let i = 0; i < 4; i++) {
//     arr.push(chars.charAt(Math.floor(Math.random() * 16)));
//   }
//   arr.push('-');

//   for (let i = 0; i < 12; i++) {
//     arr.push(chars.charAt(Math.floor(Math.random() * 16)));
//   }

//   return arr.join('');
// }

// console.log(convertToUUID());

function generateUUID() {
  let characters = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  })

  return uuid;
}

generateUUID();