const electron = require('electron')
const path = require('path')
const url = require('url')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// 일렉트론의 라이프 사이클을 정의
let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', function() {
  if(process.platform !== 'darwin')  app.quit()
})
app.on('activate', function() {
  if(mainWindow === null)  createWindow()
})

// 화면을 생성하고 콘텐츠를 읽어 들임
function createWindow() {
    mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
      width: 600,
      height: 800,
    })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // 화면이 닫혔을 때의 처리
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}