const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration:true,// 集成node环境
      contextIsolation: false,
      enableRemoteModule: true,   // 使用remote模块
    }
  })
   const urlLocation = isDev ? 'http://localhost:3000' :'dummyurl'
  mainWindow.loadURL(urlLocation)
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  // app.on('activate', () => {
  //   if (BrowserWindow.getAllWindows().length === 0) {
  //     createWindow()
  //   }
  // })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
