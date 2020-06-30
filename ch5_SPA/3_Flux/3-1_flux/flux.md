# 플럭스(Flux)의 구조 이해

## 리엑트에 플럭스가 필요한 이유

플럭스를 이용하면 애플리 케이션을 특정 기능으로 분할하고 정보가 한 번에 흐르게 한 뒤 처리를 구현할 수 있기 때문이다.

## 플럭스의 구성 요소

플럭스는 일반적인 애플리케이션이 가지고 있는 기능을 4가지 역할로 분할하는데, 이를 플럭스의 구성 요소하고 한다.

- Action
- Dispatcher
- Store
- View

### Action

Action은 필요에 따라 어떤 기능을 실행한다.  
다만 Action은 이후 요소에 명령을 할 뿐 직접 처리하지는 않는다.

코드를 작성할 때 실제 처리를 Action에 작성할 수도 있지만, 구조를 제대로 지켜 애플리케이션을 만들고자 한다면 각 요소가 각각의 역할을 넘어선 안 된다.

### Dispatcher

Dispatcher는 Action으로부터 받은 명령을 Store에게 전달한다.

### Store

Store는 애플리케이션의 상태를 기록한다.  
이때 상태는 애플리케이션이 사용하는 데이터와 관련된 것을 나타낸다.  

그리고 애플리케이션의 상태를 나타내는 Store의 상태가 변경될 때 화면 출력에 반영한다.  
따라서 Store가 변화할 때 렌더링을 위해 View가 실행된다.

### View

View는 Store로 인해 상태가 변경될 때 화면의 출력을 변경한다.  

플럭스는 View에 리엑트를 사용한다.

## 구성 요소의 정보 전달 흐름

플럭스 구성 요소는 서로 정보를 전달할 때 일방통행을 한다는 규칙을 가지고 있다.  
정보는 Action -> Dispatcher -> Store -> View라는 순서로 흘러간다.  

플럭스에서는 모든 것이 Action으로부터 시작된다.  
View가 직접 Store의 값을 변경하는 것은 권한을 넘는 행위이다.

플럭스로 만들면 어떤 파일에서 어떤 처리가 이뤄지는지 파악 할 수 있다.  
특히 여러 명이 함께 공동 개발을 할 때 어디에서 어떤 코드가 사용되는지 쉽게 파악할 수 있으므로 쉽게 관리할 수 있고 버그도 줄일 수 있다.