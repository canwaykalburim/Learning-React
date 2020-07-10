// HTTP 서버 생성
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const portNo = 3001

server.listen(portNo, () => {
  console.log('서버 실행 완료:', 'http://localhost:' + portNo)
})

// Public 디렉토리 공개
app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
  res.redirect(302, '/public')
})

// 웹 소켓 서버 실행
const socketio = require('socket.io')
const io = socketio.listen(server)

// 클라이언트 접속시 이벤트 설정
io.on('connection', (socket) => {
  console.log('사용자 접속:', socket.client.id)
  // 메세지 받음
  socket.on('chat-msg', (msg) => {
    console.log('message:', msg)
    // 모든 클라이언트에 전송
    io.emit('chat-msg', msg)
  })
})