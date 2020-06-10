const express = require('express')
const app = express()
app.listen(3000, () => {
  console.log('서버 실행 완료 - http://localhost:3000')
})

// GET 메서드면 입력 양식 응답
app.get('/', (req, res) => {
  res.send('<form method="POST">' +
  '<textarea name="memo">테스트</textarea>' +
  '<br /><input type="submit" value="전송">' +
  '</form>')
})

// POST 메서드 받기
app.post('/', (req, res) => {
  res.send('POST 되었습니다')
})
