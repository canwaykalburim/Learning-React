// http모듈을 읽어 들임
const http = require('http')

// 웹 서버를 실행
const svr = http.createServer(handler)
svr.listen(8081)

// 서버 접근이 있을 때의 처리
function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)

  // HTTP 헤더를 출력
  res.writeHead(200, {'Content-Type': 'text/html'})
  // 응답 본문 출력
  res.end('<h1>Hello, world!</h1>\n')
}