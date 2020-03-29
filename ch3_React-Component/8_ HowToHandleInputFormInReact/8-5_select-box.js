import React from 'react'
import ReactDOM from 'react-dom'

class SelectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      value: props.value
    }
  }
  render() {
    // 선택 박스 생성
    const options = this.state.items.map(i => {
      return (<option key={i} value={i}> {i}</option>)
    })
    // 입력 양식으로 선택 박스를 지정
    return (<div>
      <form onSubmit={e => this.doSubmit(e)}>
        <select value={this.state.value} 
          onChange={e => this.doChange(e)}>
          {options}
        </select><br />
        <input type='submit' />
      </form>
    </div>)
  }
  // 선택 박스를 번경했을 때
  doChange(e) {
    this.setState({ value: e.target.value })
  }
  // 입력 양식을 전송했을 때
  doSubmit(e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}

ReactDOM.render(<SelectForm item={['초콜렛', '과자', '콜라']} />, document.getElementById('root'))