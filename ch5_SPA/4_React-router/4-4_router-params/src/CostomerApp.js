import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const users = [
  {id: 1, name: '장호승', info: '서버 개발자'},
  {id: 2, name: '서동영', info: '프론트 엔드 개발자'},
  {id: 3, name: '소동현', info: '부사관 준비 중'}
]

const CustomerApp = () => (
  <Router>
    <div style={{margin: 20}}>
      <div>
        <Switch>
          <Route path='/user/:id' component={UserCard} />
          <Route component={UserList} />
        </Switch>
      </div>
    </div>
  </Router>
)

class UserList extends React.Component {
  render() {
    const ulist = users.map(e => (
      <li key={e.id}>
        <Link to={'/user/' + e.id}>{e.name}</Link>
      </li>
    ))
    return (<ul>{ulist}</ul>)
  }
}

class UserCard extends React.Component {
  render() {
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const user = users.filter(e => e.id === id)[0]
    return (
      <div>
        <div>{id}: {user.name} - {user.info}</div>
        <div><Link to='/' />→ 뒤로가기</div>
      </div>
    )
  }
}

export default CustomerApp