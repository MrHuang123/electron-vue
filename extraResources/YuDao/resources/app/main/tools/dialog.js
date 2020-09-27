const dialog = require('electron').dialog;

class Dialog {
  save(options) {
    return new Promise((resolve,reject)=>{
      dialog.showSaveDialog({
        title: '保存文件',
        ...options,
      }, res => {
        if(!res||res==='undefined') {
          reject()
        }else{
          resolve(res)
        }
      })
    })
  }
  open(options) {
    return new Promise((resolve,reject) => {
      console.log(options)
      dialog.showOpenDialog(Object.assign({},{
        title: '选择文件',
          properties: ['openfile'],
          filters: [{
          name: '请选择文件',
          extensions: ['doc','docx','txt']
        }]
      }, options),(res)=>{
        if(Array.isArray(res)&&res.length>0) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    })
  }
}

module.exports = Dialog;