const { ipcMain } = require('electron');
const setPos = require('../tools/setPos');

module.exports = $ => {
  
  ipcMain.on('sub-win-manual-show', () => {
    setPos($);
    // const timer = setTimeout(() => {
      // clearTimeout(timer);
    $.winManual.webContents.send('sub-tray-inform', 1)
    // }, 400)
  })

  ipcMain.on('sub-win-manual-hide', e => {
    $.winManual.hide()
  })
}