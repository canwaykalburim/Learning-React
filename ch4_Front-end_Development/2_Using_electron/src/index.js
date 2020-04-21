import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 컴포넌트를 정의함
export default class App extends Component {
  render() {
    return (<div>
      <h1>Hello</h1>
    </div>)
  }
}

// DOM의 내용을 변경함
ReactDOM.render(<App />, document.getElementById('root'))