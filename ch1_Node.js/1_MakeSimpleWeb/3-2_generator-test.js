// 제너레이터 함수를 정의
function * counter() {
  yield 1
  yield 2
  yield 3
}

// 제너레이터 객체를 생성
const g = counter()
// next() 메서드 호출
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())