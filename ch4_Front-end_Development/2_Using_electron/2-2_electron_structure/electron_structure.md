# 일렉트론 구조

일렉트론은 기본적으로 웹 브라우저에서 사용하던 코드를 모두 실행할 수 있다.  

일렉트론은 메인(Main) 프로세스에서 렌더러(Renderer) 프로세스를 생성하는 구조를 띠고 있다.   
메인 프로세스는 애플리케이션을 실행할 때 함께 실행되는 프로세스이고 렌더러 프로세스는 브라우저 내부의 요소를 렌더링할 때 사용되는 프로세스이다.  
메인 프로세스와 렌더러 프로세스는 동시에 병렬적으로 실행되며, 서로 정보를 교환하기 위해 IPC 통신을 한다.

메인 프로세스와 렌더러 프로세스를 나눠서 사용하는 이유는 메인 프로세스와 렌더러 프로세스가 활용할 수 있는 API의 차이 때문이다.

또한 렌더러 프로세스는 웹 콘텐츠를 읽어 실행한다. 이때 로컨 컨텐츠뿐만 아니라 인터넷의 컨텐츠를 실행하게 될 수도 있다.

일렉트론은 사용자 컴퓨터에 악의적인 컨텐츠를 읽고 실행하는 등의 보안문제를 해결하기 위해 렌더러 프로세스에서 모든 기능을 사용할 수 없게 제한을 걸 수도 있다.

렌더러 프로세스 내부에서 Node.js 기능을 제한하고 싶을 때는 Browser Window를 생성한다.

~~~ JS
mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: { nodeIntegration: false }
})
~~~

## 일렉트론에서 사용할 수 있는 API

~~~ md
Electron Documentation (Docs / API)  
[URL] https://electron.atom.io/docs/api/
~~~