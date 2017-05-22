const fs = require('fs');
const marked = require('marked');
const spawn = require('child_process').spawn;

// Functions must be declared before they are used
function getFileContents() {
  return fs.readFileSync('../js-style-comparison.md').toString();
}

const fileContents = getFileContents();

fs.writeFileSync('./result.html', marked(fileContents));

const open = spawn('open', ['./result.html']);

open.stdout.on('data', (data) => {
  console.log(data);
});

open.stderr.on('data', (data) => {
  console.error(data);
});

// Sample Code

// Array literals like this are fair game since the airbnb preset enforces semicolons.
// Error on parentheses around a single arrow function argument for a one line function.
['hello', 'world'].forEach(word => console.log(word));

// In multiline arrow functions, you must include parens around a single argument, and you must
// include a return statement in the body of your function. If you just a single line with a return,
// the linter will give you an error for an `unexpected block statement`.
const reversedWords = ['these', 'are', 'some', 'words'].map((word) => {
  const newWord = word.split('').reverse().join('');
  return newWord;
});

console.log(reversedWords);
