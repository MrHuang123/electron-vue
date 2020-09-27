const { ipcMain } = require('electron');

module.exports = $ => {
  ipcMain.on('sub-win-form-show', ()=>{
    $.winForm.show()
  })
  ipcMain.on('sub-win-form-hide', ()=>{
    $.winForm.hide()
  })
}