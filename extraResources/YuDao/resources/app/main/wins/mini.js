const { BrowserWindow } = require('electron');
const { baseUrl } = require('../tools/config');

module.exports = $ => {
  $.winMini = new BrowserWindow({
    frame: false,
    show: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    useContentSize: false,
    center: true,
    height: 560,
    width: 410,
    skipTaskbar: false,
  });
  $.winMini.loadURL(`${baseUrl}#/mini`);
  $.winMini.once('ready-to-show', () => {
    $.winMini.setContentSize($.calSize(410), $.calSize(560))
  })
  $.winMini.on('close', (e) => {
    $.winMini.hide();
    e.preventDefault();
    return ;
  })
}