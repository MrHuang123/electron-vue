const electron = require('electron');
const { baseUrl } = require('../tools/config');
const { BrowserWindow } = electron;

module.exports = Win => {
  Win.winForm = new BrowserWindow({
    frame:false,
    show:false,
    transparent:true,
    alwaysOnTop:true,
    movable:true,
    resizable:false,
    useContentSize:false,
    center:true,
    height:480,
    width: 350,
  })
  Win.winForm.loadURL(`${baseUrl}#/account/login`)
  Win.winForm.once('ready-to-show', () => {
    Win.winForm.setContentSize(Win.calSize(350), Win.calSize(480))
  })
  Win.winForm.on('close', (e) => {
    Win.winForm.hide();
    e.preventDefault();
    return ;
  })
}
