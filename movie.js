const fs = require('fs')

let movie1 = process.argv[2]
let movie2 = process.argv[3]
let movie3 = process.argv[4]

fs.appendFile('movies.txt', `${movie1}, ${movie2}, ${movie3}, `, err => {
  if (err) { console.log(err) }
  console.log('Movies added!')
})

