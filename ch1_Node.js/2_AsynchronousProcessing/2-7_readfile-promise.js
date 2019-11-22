const fs = require('fs')

// Promise를 반환 하는 함수 정의
function readFile_pr(fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (err, s) => {
      resolve(s)
    })
  })
}

// 차례대로 텍스트 파일을 읽어 들임
readFile_pr(`${__dirname}/text/a.txt`)
.then((text) => {
  console.log('a.txt를 읽어 들였습니다.', text)
  return readFile_pr(`${__dirname}/text/b.txt`)
})
.then((text) => {
  console.log('b.txt를 읽어 들였습니다.', text)
  return readFile_pr(`${__dirname}/text/c.txt`)
})
.then((text) => {
  console.log('c.txt를 읽어 들였습니다.', text)
})