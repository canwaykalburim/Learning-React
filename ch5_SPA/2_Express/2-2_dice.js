const express = require('express')
const app = express()
const portNo = 3000

// URL 따라 처리 분기
// 루트 접근
app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6면체 주사위</a><br />' +
    '<a href="/dice/12">12면체 주사위</a></p>')
})

// 주사위 페이지에 접근할 때
app.get('/dice/6', (req, res) => {
  res.send('주사위의 값은... ' + dice(6) + '<br /><p><a href="/">돌아가기</a></p>')
})

app.get('/dice/12', (req, res) => {
  res.send('주사위의 값은... ' + dice(12) + '<br /><p><a href="/">돌아가기</a></p>')
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

// 서버 실행
app.listen(portNo, () => {
  console.log('서버 실행 완료: ', `http://localhost:${portNo}`)
})