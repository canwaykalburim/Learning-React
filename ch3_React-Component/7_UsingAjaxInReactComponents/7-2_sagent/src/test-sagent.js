// 모듈 읽어 들임
const request = require('superagent')

// 지정한 URL에서 데이터 추출
const URL = 'http://localhost:3000/fruits.json'
request.get(URL).end(callbackGet)

// 데이터 추출했을 때의 처리
function callbackGet(err, res) {
  if(err) {
    // 추출하지 못 했을 떄의 처리
    return
  }
  console.log(res.body)
}