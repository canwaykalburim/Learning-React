import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fs from 'fs'
import path from 'path'
import Mastodon from 'mastodon-api'
import {styles} from './styles.js'

// 컴포넌트 정의
export default class App extends Component {
  constructor(props) {
    super(props)
    this.apiUri = 'https://pawoo.net/api/v1'
    this.loadInfo()
    this.state = {
      tootdata: '',
      timelines: []
    }
  }
  // 컴포넌트가 마운트 될 떄의 처리
  componentWillMount() {
    this.loadTimeLines()
    setInterval(() => {
      this.loadTimeLines()
    }, 1000 * 30)
  }
  // API 클라이언트 생성
  loadInfo() {
    // 접근 토큰 추출
    const f = path.join('token.json')
    try {
      fs.statSync(f)
    } catch(err) {
      window.alert('접근 토큰을 등록해주세요.')
      window.close()
      return
    }
    this.token = fs.readFileSync(f)
    // API 클라이언트 생성
    this.mstdn = new Mastodon({
      access_token: this.token,
      timeout_ms: 60 * 1000,
      api_url: this.apiUri
    })
  }
  // 타임라인을 읽어들이기
  loadTimeLines() {
    this.mstdn.get('timelines/home', {})
    .then(res => {
      this.setState({timelines: res.data})
    })
  }
  // 텍스트 박스가 변경됐을 때의 처리
  handleText(e) {
    this.setState({tootdata: e.target.value})
  }
  // 전송 처리
  toot(e) {
    this.mstdn.post(
      'statuses',
      {status: this.state.tootdata},
      (err, data, res) => {
        if(err) {
          console.error(err)
        }
        this.setState({tootdata: ''})
        this.loadTimeLines()
      }
    )
  }
  // 렌더링
  render() {
    return(<div>
      <div style={StyleS.editorPad}>
        <h1 style={styles.title}>마스토돈 클라이언트</h1>
        <textarea style={styles.editor} value={this.state.tootdata}
        onChange={e => this.handleText(e)} />
        <div>
          <button onClick={e => this.toot(e)}>Toot</button>
        </div>
      </div>
      <div style={{marginTop: 120}}></div>
      {this.renderTimelines()}
    </div>)
  }
  // 타임라인 부분 생성
  renderTimelines() {
    const lines = this.state.timelines.map(e => {
      console.log(e)
      // 부스트가 있을 때의 처리
      let memo = null
      if(e.reblog) {
        memo = (<p style={styles.reblog}>
          {e.account.display_name}님이 부스트 했습니다.
          </p>)
        e = e.reblog
      }
      // Toot 렌더링 내용
      return(<div key={e.id} style={styles.content}>
        <img style={styles.avatar}
          src={e.account.avatar} />
        <div style={styles.ctext}>
          {memo}{e.account.display_name}
          <span dangerouslySetInnerHTML={{
            __html: e.content}} />
        </div>
        <div style={{clear: 'both'}}></div>
      </div>)
    })
    return(<div>
      <h2 style={styles.title}>타임라인</h2>
      {lines}</div>)
  }
}

// DOM 내용 변경
ReactDOM.render(<App />, document.getElementById('root'))
