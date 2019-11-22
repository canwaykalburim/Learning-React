const fs = require('fs')

fs.readFile(`${__dirname}/text/a.txt`, 'utf-8', (err, data) => {
  console.log('a.txt를 읽어 들였습니다.', data)

  fs.readFile(`${__dirname}/text/b.txt`, 'utf-8', (err, data) => {
    console.log('b.txt를 읽어 들였습니다.', data)

    fs.readFile(`${__dirname}/text/c.txt`, 'utf-8', (err, data) => {
      console.log('c.txt를 읽어 들였습니다.', data)
    })
  })
})