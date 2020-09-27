const electron = require('electron');
const { app, BrowserWindow } = electron;
const { baseUrl } = require('../tools/config');
// const { calSize } = require('../tools/screen');

module.exports = Win => {
  Win.winHome = new BrowserWindow({
    frame: false,
    show: false,
    resizable: false, //窗口不能改变尺寸
    movable: true, //窗k口可移动
    alwaysOnTop: false, //默认不置顶
    transparent: false,
    width:800,
    height:530,
  })
  Win.winHome.loadURL(`${baseUrl}#/trans/machine`)
  Win.winHome.once('ready-to-show', () => {
    Win.winHome.setContentSize(Win.calSize(800), Win.calSize(530))
    Win.winHome.show()
    Win.winHome.flashFrame(true)
  })

  Win.winHome.once('ready', () => {
  })

  Win.winHome.on('close', (e) => {
    Win.winHome.hide();
    e.preventDefault();
    return ;
  })
  
}
