const { ipcMain } = require('electron');
const captureScreen = require('../tools/screenshot');

module.exports = $ => {
  ipcMain.on('sub-screen-capture', async () => {
    $.winHome.hide();
    await captureScreen($)
            .then(res => {
              $.winHome.show();
              $.winHome.webContents.send('sub-screen-capture', res)
            })
            .catch(err => {
              $.winHome.show();
              $.winHome.webContents.send('captureScreenListen', err)
            })
  })
}