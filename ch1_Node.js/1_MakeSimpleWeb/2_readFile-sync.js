const fs = require('fs')

// 동기적으로 파일 읽음
const data = fs.readFileSync(`${__dirname}/text/test.txt`, 'utf-8')
console.log(data)

// 비동기적으로 파일 읽음
fs.readFile(`${__dirname}/text/test.txt`, 'utf-8', readHandler)

// 읽어 들이기 완료했을 때의 처리
function readHandler(err, data) {
  console.log(data)
}