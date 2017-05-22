const fs = require('fs')
const marked = require('marked')
const spawn = require('child_process').spawn

const fileContents = getFileContents()

fs.writeFileSync('./result.html', marked(fileContents))

const open = spawn('open', ['./result.html'])

open.stdout.on('data', (data) => {
  console.log(data)
})

open.stderr.on('data', (data) => {
  console.error(data)
})

function getFileContents () {
  return fs.readFileSync('../js-style-comparison.md').toString()
}

// Sample Code

// In standard, we can't use array literals as the first statement on a line, since we have no
// semicolons to explictly separate statements.
const words = ['hello', 'world']

// Standard won't warn if you include parentheses around a single argument in a one line arrow function.
// This can be a preferable style, and is configurable in eslint.
words.forEach((word) => console.log(word))

const otherWords = ['these', 'are', 'some', 'words']

// Standard won't throw any errors or warning about parentheses for arrow function argument
// in multiline function bodies. The choice here should be consistent with the one liners above, though.
const reversedWords = otherWords.map(word => {
  const newWord = word.split('').reverse().join('')
  return newWord
})

console.log(reversedWords)
