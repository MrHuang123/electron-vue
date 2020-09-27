const subFile =  require('./file.js');
const subClipboard = require('./clipboard.js');
const subLanguage = require('./language');
const subAccount = require('./account');
const subTray = require('./tray');
const subScreen = require('./screenShot');
const subWinHome = require('./winHome');
const subWinForm = require('./winForm');
const subWinMini = require('./winMini');
const subWinManual = require('./winManual');

module.exports = function(win) {
  // 文件处理相关事件订阅
  subFile(win); 
  subClipboard(win);
  subLanguage(win);
  subAccount(win);
  subTray(win);
  subScreen(win);
  subWinHome(win);
  subWinForm(win);
  subWinMini(win);
  subWinManual(win);
}