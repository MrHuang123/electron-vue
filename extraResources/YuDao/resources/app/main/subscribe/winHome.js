const { ipcMain } = require('electron');
// const { times } = require('../tools/screen'); 

module.exports = $ => {
  ipcMain.on('sub-win-home-show', (e) => {
    $.winHome.show()
  })
  ipcMain.on('sub-win-home-hide', () => {
    $.winHome.hide()
  })
  ipcMain.on('sub-win-home-minimize', e=>{
    $.winHome.minimize()
  })
  ipcMain.on('sub-win-home-maxmize', (e, isMax) => {
    isMax ? $.winHome.unmaximize() : $.winHome.maximize();
    e.sender.send('sub-win-home-maxmize', !isMax)
  })
  // 获取屏幕尺寸
  ipcMain.on('sub-win-home-times', (e) => {
    e.sender.send('sub-win-home-times', 1)
  })
}