const { ipcMain, clipboard } = require('electron');

module.exports = win => {
  
  // 清空剪切板
  ipcMain.on('sub-clipboard-clear', (e) => {
    const clipboardText = clipboard.readText();
    clipboard.clear();
    clipboard.writeText(' ');
    const timer1 = setTimeout(()=>{
      clearTimeout(timer1);
      clipboard.writeText(`${clipboardText}`);
    },400);
  })

  // 重写剪切板
  ipcMain.on('sub-clipboard-write', (e, text) => {
    clipboard.clear();
    clipboard.writeText(text);
    e.sender.send('sub-clipboard-write');
  })

  // 读取剪切板内容
  ipcMain.on('sub-clipboard-read', (e) => {
    const text = clipboard.readText();
    e.sender.send('sub-clipboard-read', text)
  })

}