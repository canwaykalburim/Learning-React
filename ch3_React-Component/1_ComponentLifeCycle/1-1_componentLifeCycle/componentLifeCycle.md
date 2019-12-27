# 컴포넌트의 라이프사이클

리엑트의 컴포넌트는 생성, 파괴, 상태 변화 등의 시점에 자동으로 호출되는 메서드가 있다. 이러한 라이프 사이클을 파악하면 좀더 복잡한 컴포넌트를 만들 수 있다.  

## 라이프 사이클과 관련된 메서드

### 컴포넌트 생성과 DOM에 마운트(Mount)

컴포넌트가 생성되고, DOM에 마운트(추가)될 때 다음과 같은 순서로 메서드가 호출된다. 이러한 과정은 한 번만 반복된다.  

- constructor(props)  
  객체가 생성될 때 
- componentWillMount()  
  컴포넌트가 DOM에 마운트 되기 직전
- render()  
  컴포넌트가 렌더링될 때
- componentDidMount()  
  컴포넌트가 DOM에 마운트 된 직후

### 컴포넌트 업데이트

컴포넌트 프로퍼티가 변경되면 다음과 같은 메서드가 호출된다.  

- componentWillReceiveProps(nextProps)  
  컴포넌트의 프로퍼티가 변경될 때
- shouldComponentUpdate(nextProps, nextState)  
  컴포넌트의 외관을 변경해도 괜찮을지 판단할 때
- componentWillUpdate()  
  컴포넌트가 업데이트되기 직전
- render()  
  컴포넌트가 렌더링 될 때
- componentDidUpdate()

메서드 중 *componentWillReceiveProps()* 메서드는 새로운 속성을 받았을 때 호출 된다.  

프로퍼티 변경이 없다면 이 메서드가 호출되지 않는다. 이때 주목해야 할 것은 이 메서드 내부에서 *setState()* 메서드를 호출해 컴포넌트의 상태를 변경할 수 있다.  

다른 업데이트 계열에서의 라이프사이클에서 *setState()*를 호출하면 업데이트 이벤트가 재귀적으로 발생하므로 *setState()*는 *componentWillReceiveProps()* 메서드 내부에서만 사용하는 것이 좋다.  

또한 *shouldComponentUpdate()* 는 컴포넌트 외관을 변경해도 좋을지 판단할 떄 사용한다.  
이 메서드는 true 또는 false를 반환한다.  
성능 튜닝이 필효한 경우 등에 활용하면 좋다.  

### DOM에서 언마운트

컴포넌트가 DOM에서 언마운트(제거)될 때 다음과 같은 메서드가 호출된다.  

- componentWillUnmount()

### React-app으로 라이프사이클 확인하기

~~~JS
import React, { Component } from 'react';

class App extends Component {
  // 마운트
  constructor(props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  // 변경
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  // 언마운트
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    console.log('render')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState( {r: Math.random()} )
    }
    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
      </div>
    )
  }
}

export default App;
~~~