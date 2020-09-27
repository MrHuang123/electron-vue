const { ipcMain } = require('electron');
const Dialog = require('../tools/dialog');
const File = require('../tools/file.js');

const MyDialog = new Dialog();
const MyFile = new File();

module.exports = function(win) {
  // 保存文件名称确认
  ipcMain.on('sub-file-save-path', (e,defaultPath) => {
    MyDialog.save({defaultPath})
      .then(filename => {
        e.sender.send('sub-file-save-path', filename)
      })
      .catch(()=>{
        console.log('canceled')
      })
  })

  // 保存文件至自定义目录
  ipcMain.on('sub-file-save-data', async (e, {buffer, filename}) => {
    MyFile.save(filename, buffer)
      .then(()=>{
        e.sender.send('sub-file-save-status', 1);
      })
      .catch(()=>{
        e.sender.send('sub-file-save-status', 0);
      })
  })

  // 选择文件
  ipcMain.on('sub-file-open-path', (e, options) => {
    MyDialog.open(options)
      .then(files=>{
        files.forEach(file=>{
          MyFile.read(file)
            .then(payload=>{
              e.sender.send('sub-file-open-path', payload)
            })
            .catch(err=>{
              e.sender.send('sub-file-open-path', err)            
            })
        })
      })
      .catch(() => {
        e.sender.send('sub-file-open-path', {
          status: 0
        })
      })
  })
}