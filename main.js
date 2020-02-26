const { csv2json, catPipeWc } = require('./streambox')
const { upperCase } = require('voca')

if (process.argv.length !== 3) {
  console.log('usage: node main.js <FILENAME>')
  process.exit(1)
}

const fileName = process.argv[2]
// duplicate(fileName)

// transform(fileName, /Chopin/g, upperCase)
// transform(fileName, /Chopin/g, upperCase, false)
duplicate(filename)
csv2json(fileName,/[a-z]+/g,/;/,/^[A-Z]/)
