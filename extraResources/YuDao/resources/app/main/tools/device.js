const m = require('../plugin/YudaoPC')
const path = require('path')
const fs = require('fs')
const address = require('address')


// 與本機設備有關
module.exports = Win => {
return{
      // liten
      listenPort(port,timestamp){
        m.listen(port,timestamp)
      },

      // 剪切板监听
      listenClipboard(){
        m.starClipboardMonitor()
      },

      // 取消监听
      stopListenClipboard(){
        m.stopClipboardMonitor()
      },

      starCrossWord(){
        m.starCrossWord("https://www.iol8.com/pc/mt/autoText")
      },

      stopCrossWord(){
        m.stopCrossWord()
      },
    }
}
