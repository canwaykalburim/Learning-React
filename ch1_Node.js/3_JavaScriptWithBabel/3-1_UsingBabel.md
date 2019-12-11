# 바벨(Babel)이란?

자바스크립트 표준 규격은 조금씩 제정되고 있다. 이러한 규격에는 개발 효율을 높여주는 구문들이 있다.  

하지만 제안된 것들을 실제 웹 브라우저에서 사용할 수 있게 되기까지나 웹 브라우저에 추가 되어 테스트를 마치고 공식적인 발표가 있기까지는 시간이 걸린다. 게다가 해당 버전이 일반 사용자에게 보급될 때까지는 더 많은 시간이 걸린다.  
그래서 자바스크립트를 위한 다목적 컴파일러 **바벨(Babel)** 이 등장했다.

바벨을 사용하면 다음 세대의 자바스크립트로 작성된 코드를 현재 일반적으로 사용되는 코드로 변환 할 수 있다. 따라서 최신 표준 소스코드를 이전 표준의 코드로 변환해주는 도구라고 할 수 있다.  
이러한 것을 **트랜스파일러**라고 한다.  

바벨을 사용하면 곧바로 최신 표준을 사용해서 프로그램을 만들 수 있으며, 범용적인 구조로 돼 있어 ES2015를 변환해줄 뿐만 아니라 React의 JSX현식도 변환할 수 있다.  
이러한 것이 가능한 이유는 플러그인 때문인데, 플러그인을 조합하면 원하는 기능을 선택해서 사용할 수 있다.