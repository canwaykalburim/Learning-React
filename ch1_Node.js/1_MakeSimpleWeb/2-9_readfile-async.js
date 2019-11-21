const fs = require('fs')

// 프로미스 비동기적으로 파일을 읽어 들이는 함수를 정의
function readFileEx(fname) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}

// 모든 파일을 읽어 들이는 async 함수를 정의
async function readAll() {
  const a = await readFileEx(`${__dirname}/text/a.txt`)
  console.log(a)
  const b = await readFileEx(`${__dirname}/text/b.txt`)
  console.log(b)
  const c = await readFileEx(`${__dirname}/text/c.txt`)
  console.log(c)
}

readAll()