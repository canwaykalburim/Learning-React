# 리엑트로 이벤트 만드는 방법

1. *render()* 메서드 내부에서 이벤트 핸들러 정의하기  
   ~~~JS
   class <컴포넌트 이름> extends React.Component {
     render() {
        const handler = (e) => alert('Hello')
        return <button onClick={handler}>Click</button>
     }
   }
   ~~~

2. 클래스의 메서드로 정의하고, *this* 바인드
   ~~~JS
   class <컴포넌트 이름> extends React.Component {
     constructor() {
       this.classHandler = this.classHandler.bind(this)
     }
     classHandler() {
       alert('Hello')
     }
     render() {
       return <button onClick={this.classHandler}>Click</button>
     }
   }
   ~~~

3. 클래스 메서드로 정의하고, 화살표 함수로 호출
   ~~~JS
   class <컴포넌트> extends React.Component {
     classHandler() {
       alert('Hello')
     }
     render() {
       return <button onClick={e => this.classHandler(e)}>Click</button>
     }
   }
   ~~~   
