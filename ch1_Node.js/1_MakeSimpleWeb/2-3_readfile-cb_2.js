const fs = require('fs')

fs.readFile(`${__dirname}/text/test.txt`, 'utf-8', (err, data) => {
  console.log(data)
})