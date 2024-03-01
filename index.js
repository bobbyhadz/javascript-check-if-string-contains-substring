// EXAMPLE 1 - Check if a String contains a Substring with String.includes()

const string = 'hello world';
const substring = 'hello';

console.log(string.includes(substring)); // 👉️ true

if (string.includes(substring)) {
  // 👉️ substring is contained in the string
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if String Doesn't contain a Substring in JavaScript

// const str = 'hello world';

// if (!str.includes('bye')) {
//   console.log('✅ string does not include substring');
// } else {
//   console.log('⛔️ string includes substring');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a String contains a Substring with String.indexOf()

// const string = 'hello world';
// const substring = 'hello';

// const index = string.indexOf(substring);
// console.log(index); // 👉️ 0

// if (string.indexOf(substring) !== -1) {
//   // 👉️ substring is contained in the string
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if String Doesn't contain a Substring using `indexOf()`
// const str = 'hello world';

// if (str.indexOf('bye') === -1) {
//   console.log('✅ string does not include substring');
// } else {
//   console.log('⛔️ string includes substring');
// }
