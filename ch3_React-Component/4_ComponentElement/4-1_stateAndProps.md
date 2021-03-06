# 상태와 프로퍼티

리액트 컴포넌트의 상태를 나타내는 것은 *this\.state\.ooo*이며 컴포넌트가 가지고 있는 다양한 값을 나타내는 프로퍼티는 *this\.props.ooo*이다.  

## 상태(State)

상태는 컴포넌트의 상태를 나타내며, 변화할 수 있는 데이터의 집합이이다. 또한 상태가 변화하면 컴포넌트를 다시 렌더링하게 된다.  

상태로 사용해야 하는 것은 컴포넌트의 상태를 나타내는 값이다.  
이러한 상태는 외부에 공개하지 않고, 컴포넌트가 스스로 관래야하 한다.

### 정리

- 상태(state)란 상태에 따라 변화하는 것
- 상태는 직접 변경 가능
- 상태가 변경되면 컴포넌트를 다시 렌더링함
- 상태는 외부에는 비공개하며, 컴포넌트 스스로 관리해야함

상태를 변경할 때는 *this.state.ooo*를 직접적으로 변경하지 않고, *this.setState()* 를 통해 값을 변경한다. 그리고 컴포넌트의 라이프사이클에서 볼 수 있는 것처럼 상태가 변화하면 다음과 같은 메서드가 자동으로 호출된다.

  - *shouldComponentUpdate(nextProps, nextState)*
  - *componentWillUpdate()*
  - *render()*
  - *componentDidUpdate()*

## 프로퍼티(Props)

프로퍼티는 외부에서 컴포넌트와 소통하는 창구 역할을 가지고 있다.  

일반적으로 프로퍼티의 값은 부모 요소에서 설정한다. 또한 한 번 설정된 프로퍼티는 기본적으로 컴포넌트 내부에서 변경하지 않는다.  

프로퍼티는 기본적으로 컴포넌트 내부에서 변경하지 않는다.  

프로퍼티는 초깃값(defaultProps) 설정과 자료형 유효성 검사(propTypes) 등을 사용할 수도 있다.

### 정리

- 프로퍼티는 읽기 전용이다.
- 프로퍼티는 부모 요소에서 설정한다.
- 초깃값과 자료형의 유효성 검사가 가능하다.

프로퍼티는 외부에서 변경하며, 이때 다음과 같은 매서드가 자동적으로 호출된다.

- *componentWillReceiveProps(nextProps)*

일반적으로 프로퍼티 변경은 컴포넌트 상태 변경을 함께 발생 시키게 된다. 따라서 위의 메서드 내부에서 *setState()* 메서드로 상태를 변경하면, 다음과 같은 메서드들이 함께 호출된다.

  - *shouldComponentUpdate(nextProps, nextState)*
  - *componentWillUpdate()*
  - *render()*
  - *componentDidUpdate()*

## 이벤트 복습

리액트 이벤트는 HTML/JavaScript의 이벤트와 다르다.  
무엇보다도 이벤트 이름 자체가 다르다.

자바스크립트 onclick 이벤트는 리액트에서 onClick이며, onchange 이벤트는 onChange 이벤트이다. 이처럼 *"onXxx"* 형태로 이벤트 이름을 사용하게 된다. 이러한 이벤트는 프로퍼티를 통해 지정한다.  

~~~ HTML
<div>
  <MyComponent onChange={handleChange} />
</div>
~~~

JSX로 이벤트를 지정할 때는 다음과 같이 한다. 