const electron = require('electron')
const { app, ipcMain, globalShortcut } = electron;

// 訂閲事件
const generateSubscribe = require('./main/subscribe/index')
// 窗口類別
const generateWins = require('./main/wins/index'); 
// 托盘相关
const generateTray = require('./main/tools/tray');

const Win = {
    winForm: null,//****登录窗口
    winHome: null, // 主窗口-翻译
    winMini: null, // mini窗口
    winManual: null,// 人工订单窗口
    tray: null,//托盤

    calSize: () => {},
    
    start: () => {
      if (!app.requestSingleInstanceLock()) {
        app.quit()
      } else {
        app.on('second-instance', () => {
          if (Win.winHome) {
            Win.winHome.show()
            Win.winHome.focus()
          }
        })
        Win.init()
      }
      
    },
    init: () => {
      app.on('ready', () => {
          let times = (electron.screen.getPrimaryDisplay().workAreaSize.height / 900).toFixed(2);
          times = Math.ceil(times*10)/10;
          Win.calSize = num => Math.ceil(times * num);
          // Win.calSize = num => num;
          // console.log()
          generateWins(Win);
          generateTray(Win);
          generateSubscribe(Win);
      })
      app.on('activate', () => {
        Win.winHome == null && Win.init()
      })
      app.on('window-all-closed', () => {
        process.platform !== 'darwin' && app.quit()
      })
      app.on('will-quit',(e)=>{

        globalShortcut.unregisterAll()
      })

      app.on('quit',()=>{
        ipcMain.removeAllListeners()
      })
    }
}


Win.start()
