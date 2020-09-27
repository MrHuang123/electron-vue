const { ipcMain } = require('electron');

module.exports = $ => {
  ipcMain.on('sub-tray-inform', (e, manMade) => {
    // 机翻人工订单
    if (manMade == 1 && $.winManual.isVisible()) {
      $.winManual.show();
      $.winManual.webContents.send('sub-tray-inform', manMade)
    } else if (manMade == 2 && $.winMini.isVisible()) {
      $.winMini.show();
      $.winMini.webContents.send('sub-tray-inform', manMade)
    } else {
      $.informManualOrder(manMade)
    }
  })
  ipcMain.on('sub-tray-close-blink', (e) => {
    $.winHome.webContents.send('sub-tray-close-blink')
  })
}