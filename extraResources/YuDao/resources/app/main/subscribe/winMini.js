const { ipcMain, clipboard } = require('electron');

module.exports = $ => {
  ipcMain.on('sub-win-mini-show', e=> {
    $.winMini.show();
    clipboard.clear();
    // $.winManual.webContents.send('sub-tray-inform', 1);
    $.winMini.webContents.send('sub-win-mini-open-listen');
  })
  ipcMain.on('sub-win-mini-hide', e=> {
    $.winMini.hide()
  })
  ipcMain.on('sub-win-mini-top', (e, isTop)=> {
    $.winMini.setAlwaysOnTop(isTop)
    e.sender.send('sub-win-mini-top', isTop)
  })
  ipcMain.on('sub-win-mini-open-listen', (e) => {
    $.winMini.show();
    // setTimeout(() => {
    $.winMini.webContents.send('sub-win-mini-open-listen');
    // }, 500)
  })
  ipcMain.on('sub-win-mini-visible', (e) => {
    const isVisible = $.winMini.isVisible();
    e.sender.send('sub-win-mini-visible', isVisible);
  })
}