const { ipcMain } = require('electron');
const account = require('../nedb/account.js');

module.exports = $ => {
  // 獲取account信息
  ipcMain.on('sub-account-get-info', (e) => {
    account.find({ })
      .then(data=>{
        e.sender.send('sub-account-get-info', {status: 1, data})
      })
      .catch(err=>{
        e.sender.send('sub-account-get-info', {status: 0, err})
      })
  })

  // 更新token信息
  ipcMain.on('sub-account-update-token', (e, data)=> {
    account.update({ options: { key: 'token' }, data })
      .then(res => {
        e.sender.send('sub-account-update-token', {status: 1})
      })
      .catch(err => {
        e.sender.send('sub-account-update-token', {status: 0, err})
      })
  })

  // 更新stamp信息
  ipcMain.on('sub-account-update-stamp', (e, stamp) => {
    account.changeStamp({ options: { key: 'token'}, stamp })
      .then(res => {
        e.sender.send('sub-account-update-stamp', {status: 1})
      })
      .catch(err => {
        e.sender.send('sub-account-update-stamp', {status: 0, err})
      })
  })

  // 清空信息
  ipcMain.on('sub-account-clear', async e => {
    await account.clear();
    e.sender.send('sub-account-clear');
  })

  // 修改为phone
  ipcMain.on('sub-account-edit-tray', (e, phone = '') => {
    // account.update({  })
    $.generateMenu(phone)
  })

  // 登录完成
  ipcMain.on('sub-account-login', async (e, {token, phone}) => {
    account.update({ options: {}, data: token })
      .then(res => {
        console.log('successed to update token')
      })
    $.generateMenu(phone);
    $.winHome.webContents.send('sub-account-login', token);
    $.winMini.webContents.send('sub-account-login', token);
    $.winManual.webContents.send('sub-account-login', token);    
    // $.win.webContents.send('sub-account-login', token);
  })

  ipcMain.on('sub-account-logout', async (e) => {
    account.clear();
    $.generateMenu('');
    $.winHome.webContents.send('sub-account-logout');
    $.winMini.webContents.send('sub-account-logout');
    $.winManual.webContents.send('sub-account-logout');
  })

  // 更换企业
  ipcMain.on('sub-account-company-token', async (e, token) => {
    console.log(token)
    $.winHome.webContents.send('sub-account-company-token', token);
    $.winMini.webContents.send('sub-account-company-token', token);
    $.winManual.webContents.send('sub-account-company-token', token);
  })
}