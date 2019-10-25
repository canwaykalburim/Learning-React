// 소문자 -> 대문자
const s = 'Keep On Asking, and It Will Be Given You.'
const r = s.replace(/[a-z]+/g, function(m) {
  return m.toUpperCase()
})
console.log(r)

// 배열의 숫자 정렬
const ar = [10, 1, 20, 43, 30, 11, 4]
ar.sort((a, b) => { return b - a })
console.log(ar)