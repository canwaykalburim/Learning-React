import React, {Component} from 'react'

// 숫자 입력 컴포넌트
export default class ValueInput extends Component {
  constructor(props) {
    super(props)
    // 프로퍼티로 초깃값 설정
    this.state = {
      value: this.props.value
    }
  }
  // 값이 변경 됐을 때
  handleChange(e) {
    const v = e.target.value
    // 숫자 이외 값 제거
    const newValue = v.replace(/[^0-9.]+/g, '')
    // 상태 설정
    this.setState({value: newValue})
    // 이벤트 실행
    if(this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue
      })
    }
  }
  // 프로퍼티 변경 됐을 때
  componentWillReceiveProps(newtProps) {
    this.setState({value: nextProps.value})
  }
  // 렌더링
  render() {
    return (
      <div>
        <label> {this.props.title} : <br />
          <input type='text' value={this.state.value} onChange={e => this.handleChange(e)} />
        </label>
      </div>
    )
  }
}