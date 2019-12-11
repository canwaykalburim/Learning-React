# 컴포넌트의 상태 관리하기

특정한 상태를 가지지 않는 컴포넌트를 스테이트리스 컴포넌트(Stateless Component)라 한다.

그러나 체크박스처럼 어떤 상태를 가지거나 외관상 크게 변화하는 컴포넌트의 경우 상태를 갖게 하고 관리해야 한다.

상태를 관리하려면 컴포넌트 자체가 상태를 값으로 기억하게 해야한다.  
상태를 만들 때는 컴포넌트의 *state* 객체를 사용한다.

그런데 *state* 객체는 한 번 값을 설정한 이후, 값을 변경할 때는 *setState()* 매서드를 사용해야 한다. 이는 *setState()* 매서드로 값을 변경해서 상태를 변화시켰을 때 자동으로 *render()* 매서드를 함께 호출해서 컴포넌트를 재구성하기 위함이다.

컴포넌트의 상태 초기화에는 클래스의 생성자 함수를 사용한다.  
생성자 함수 내부에서 *this.state*에 객체를 지정하면 된다.  

~~~JavaScript
class <컴포넌트의 이름> extends React.Component {
  // 상태 초기화
  constructor(props) {
    this.state = { <초깃값> }
  }
}
~~~

일반적인 객체 변수와 마찬가지로 *"this.state.<이름>"* 형태로도 값을 참조할 수 있다.  
다만 값을 변경할 때는 *this.setState()*를 사용한다.

~~~JS
// 상태 참조
console.log( this.state.<이름> )

// 상태 변경
this.setState( { <이름>: <새로운 값> } )
~~~