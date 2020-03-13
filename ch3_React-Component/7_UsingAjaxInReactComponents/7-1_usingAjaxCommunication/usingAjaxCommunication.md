# Ajax 통신 사용하기

리액트는 화면 출력과 관련된 라이브러리라 자체적으로 웹 서버와 통신할 때 사용하는 Ajax 통신 기능을 제공하지 않는다.
따라서 Ajax 통신을 하려면 별도의 라이브러리를 사용하야 한다.

## SuperAgent 설치

~~~
$ npm install --save superagent
~~~

## SuperAgent 기본 사용법

SuperAgent를 사용할 때는 다음과 같은 방법으로 처리 내용을 작성한다.
1. SuperAgnet 라이브러리를 읽어들임
2. request.get(url).end(callback) 형태로 사용함
3. 데이터를 응답받았을 때의 처리 내용을 콜백에 작성함

## SuperAgent의 다양한 기능

Get 메서드를 전송할 때 URL 매개변수를 지정하고 싶은 경우 query() 메서드를 호출한다.

~~~javascript
request.get(URL)
       .set(params)
       .end(callback)
~~~

또한 최근에는 요청을 전송할 때 헤더에 인증 정보 등을 추가하는 경우가 많은데, 헤더에 정보를 추가하고 싶을 때는 set() 메서드를 호출한다.

~~~javascript
request.get(URL)
       .set('API-KEY', 'xxxxxxxx')
       .end(callback)
~~~

그리고 POST 메서드를 전송할 때는 get() 이 아니라 post() 메서드를 호출한다.
이 경우에는 send() 메서드로 매개변수를 지정한다.

~~~javascript
request.post(URL)
       .set('Content-Type', 'application/json')
       .send( {name: 'foo', age:21} )
       .end(callback)
~~~

URL 매개변수를 지정하는 경우 query()를 사용하고, 요청 본문을 지정할 때는 send() 메서드를 사용한다. 이는 POST 메서드로 요청하는 경우 두 가지를 모두 활용할 수 있게 한다.

~~~javascript
request.post(URL)
       .set('Content-Type', 'application/json')
       .query( {mode:'sava', userid:100} )
       .send( {name: 'foo', age:21} )
       .end(callback)
~~~