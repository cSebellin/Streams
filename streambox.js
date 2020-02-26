const fs = require('fs')
const path = require('path')
const { Transform } = require('stream')
const request = require('request')
const JSONStream = require('JSONStream')
const es = require('event-stream')

function getDuplicateName(fileName) {
  const ext = path.extname(fileName)
  const base = path.basename(fileName, ext)

  return `${base}.duplicate${ext}`
}

function duplicate(fileName) {
  const outputFileName = getDuplicateName(fileName)

  const rstream = fs.createReadStream(fileName)
  const wstream = fs.createWriteStream(outputFileName)

  rstream.pipe(wstream)
  console.log(`File ${outputFileName} successfully duplicated!`)
}

function transform(fileName, re, cb, inStdout = true) {
  const outputFileName = getDuplicateName(fileName)
  const rstream = fs.createReadStream(fileName)

  if (inStdout) {
    let content = ''

    rstream.on('data', chunk => {
      content += chunk.toString().replace(re, cb)
    })

    rstream.on('end', () => {
      console.log(content)
    })
  } else {
    const wstream = fs.createWriteStream(outputFileName)

    const tstream = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().replace(re, cb))

        callback()
      }
    })

    rstream.pipe(tstream).pipe(wstream)
  }
}

function csv2json(fileName, key, split, value){

  const outputFileName = getDuplicateName(fileName)
  const wstream = fs.createWriteStream(outputFileName)
  let content = fs.createReadStream(fileName)
  const split = ';'
  let key = ''
  let value = ''
  

  if(ext === '.csv' ){
    rstream.on('data', chunk => {
      fileName.split(split)
        if (fileName.match('/[a-z]+/g')){
          key = key.push(fileName)
          }

        else if(fileName.match('/^[A-Z]/g')){
          value = value.push(fileName)
        }        
      
      content = key + split + value  
      content = Json.parse().replace(fileName)
      console.log(`Le fichier ${outputFileName} à bien été transformer.`)
    })
  }
  
  else{
    console.log(`L'extenion du fichier en correspond pas.`)
  }
  rstream.pipe(tstream).pipe(wstream)

}  

function catPipeWc(directory, type, cb){

}

module.exports = {
  duplicate,
  transform,
  csv2json,
  catPipeWc,
}
