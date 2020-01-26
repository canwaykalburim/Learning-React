import React, {Component} from 'react'

// 우편번호 입력
export default class ZipInput extends Component {
  constructor(props) {
    super(props)
    const v = (this.props.value)
    ? this.props.value: ''
    // 상태 초기화
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }
  // 패턴 확인
  checkValue(s) {
    const zipPattern = /^\d{5}$/
    return zipPattern.test(s)
  }
  // 값이 사용자에 의해 변경됐을 때
  handleChange(e) {
    const v = e.target.value
    // 숫자 이외의 값 제거
    const newValue = v.replace(/[^0-9]+/g, '')
    const newIsOK = this.checkValue(newValue)
    // 상태 설정
    this.setState({
      value: newValue,
      isOK: newIsOK
    })
    // 이벤트 실행
    if(this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK = newIsOK
      })
    }
  }
  // 프로퍼티가 변경됐을 때
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }
  // 렌더링
  render() {
    const msg = this.renderStatusMessage()
    return (<div>
      <label> 우편 번호: <br />
        <input type="text" placeholder='우편 번호를 입력하세요' value={this.state.Value} onChange={e => this.handleChange(e)} />
        {msg}
      </label>
    </div>)
  }
  // 입력이 제대로 됐는지 출력하는 메세지
  renderStatusMessage() {
    // 스타일
    const so = {
      margin: '8px',
      padding: '8px',
      color: '#fff'
    }
    let msg = null
    if(this.state.isOK) {
      so.backgroundColor = 'green'
      msg = <span style={so}>OK</span>
    } else {
      if(this.state.value !== '') {
        so.backgroundColor = 'red'
        msg = <span style={so}>NG</span>
      }
    }
    return msg
  }
}