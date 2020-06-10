const express = require('express')
const app = express()
const port = 3000

// 루트 접근
app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6면체 주사위</a></p><br />' +
    '<a href="/dice/12">12면체 주사위</a></p>')
})

app.get('/dice/:num', (req, res) => {
  res.send('주사위의 값은... ' + dice(req.params.num) + '<br /><p><a href="/">돌아가기</a></p>')
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(port, () => {
  console.log("서버 실행 완료:", `http://localhost:${port}`)
})