const { ipcMain } = require('electron');
const language = require('../nedb/language')

module.exports = win => {

  // 获取语种
  ipcMain.on('sub-lang-find', (e, type) => {
    language.find({key: type})
      .then(res=>{
        e.sender.send('sub-lang-find', {status: 1, data: res})
      })
      .catch(err=>{
        e.sender.send('sub-lang-find', {status: 0, err})
      })
  })

  // 修改common语种
  ipcMain.on('sub-lang-update', (e, {type, data}) => {
    language.update({
      options: { key: type },
      data, 
    })
    .then((res)=>{
      e.sender.send('sub-lang-update', {status:1,data:res})
    })
    .catch(err=>{
      e.sender.send('sub-lang-update', {status: 0,err})
    })
  })

  // 清空语种存储
  ipcMain.on('sub-lang-clear', (e) => {
    language.clear();
    e.sender.send('sub-lang-clear')
  })
}