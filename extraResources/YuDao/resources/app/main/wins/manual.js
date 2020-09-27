const { BrowserWindow } = require('electron');
const { baseUrl } = require('../tools/config');

module.exports = $ => {
  $.winManual = new BrowserWindow({
    frame: false,
    show: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    useContentSize: false,
    center: false,
    height: 600,
    width: 360,
    skipTaskbar: true,
  });
  $.winManual.loadURL(`${baseUrl}#/manual`);
  $.winManual.once('ready-to-show', () => {
    $.winManual.setContentSize($.calSize(360), $.calSize(600))
  })
  $.winManual.on('close', (e) => {
    $.winManual.hide();
    e.preventDefault();
    return ;
  })
}