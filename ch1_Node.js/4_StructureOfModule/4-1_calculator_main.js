// 모듈을 읽어 들임
const calculator = require(`${__dirname}/Module/calculator_module.js`)

// 모듈의 함수를 사용
console.log('731 + 2643 =', calculator.add(731, 2643))
console.log('711 * 1643 =', calculator.mul(711, 1643))