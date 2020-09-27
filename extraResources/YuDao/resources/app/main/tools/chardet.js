const fs = require('fs')
const chardet = require('chardet')
const jschardet = require('jschardet')

// 讀取txt文件内容，並使用utf8編碼格式重寫文件；
module.exports = (path,cb) => {
  if(fs.existsSync(path) && fs.statSync(path).isFile() ){
    // 确定是文件，且不是文件夹所伪装
    const bf = fs.readFileSync(path)

    if(bf.length && bf[0].toString(16).toLowerCase() == 'ef' && bf[1].toString(16).toLowerCase() == 'bb' && bf[2].toString(16).toLowerCase() == 'bf'){
      fs.writeFileSync(path,bf.toString(),'utf8')
    }

    const info = jschardet.detect(bf);

    if(info.encoding == 'GB2312' || info.encoding == 'ascii'){
       let resBF = encoding.convert(bf,'UTF-8',info.encoding)

       fs.writeFileSync(path,resBF,'utf8')

    }

    if(info.encoding != 'UTF-8' && chardet.detectFileSync(path) != 'UTF-8'){
      if(bf.toString().indexOf('\r\n') > -1){
        // let resBF = encoding.convert(bf,'UTF-8','GBK')

        fs.writeFileSync(path,'','utf8')
      }
    }

    cb && cb()


  }else{
    console.log('不存在')
  }
}