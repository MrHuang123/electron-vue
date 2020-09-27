const { Tray, Menu, app } = require('electron');
const path = require('path');
const captureScreen = require('../tools/screenshot');
const setPos = require('../tools/setPos');

let win = null;

class AppTray {
  constructor(WIN) {
    win.tray = null;
    win.generateMenu = this.generateMenu.bind(this);
    win.informManualOrder = this.informManualOrder.bind(this);
    this.title = '语到翻译';
    this.init();
    this.timer = null;
  }
  // 初始化托盘
  init() {
    win.tray = new Tray(this.getIconPath('tray_no.png'));
    win.tray.setToolTip(this.title);
    this.generateMenu();
    this.listentDoubleClick()  
  }
  // 双击监听 
  listentDoubleClick() {
    win.tray.on('double-click', ()=>{
      win.winHome.show();
      win.winMini.hide();
    })
  }
  // 生成菜单
  generateMenu(phone='') {
    const contextMenu = [
      // this.buildScreen(),
      // this.buildSeparator(),
      this.buildMaxWin(),
      this.buildSeparator(),
      this.buildQuit(),
    ];
    !!phone ? contextMenu.unshift(
        this.buildForm(phone),
        this.buildSeparator(),
        this.buildOut(),
        this.buildSeparator()
      ) :
      contextMenu.unshift(
        this.buildForm(''),
        this.buildSeparator()
      )  
    win.tray.setContextMenu(Menu.buildFromTemplate(contextMenu));
  }
  // 闪烁
  informManualOrder(manMade) {
    clearInterval(this.timer);

    let time = 0;
    let trayEmpty =  this.getIconPath('tray_empty.png');
    let trayHas =  this.getIconPath('tray_has.png');

    this.timer = setInterval(() => {
      win.tray.setImage(time%2 ? trayEmpty : trayHas);
      time ++ ;
    }, 500)
    win.tray.on('double-click', () => {
      if (manMade == 1) {
        setPos(win);
        win.winManual.webContents.send('sub-tray-inform', manMade);
      } else {
        win.winMini.show();
        win.winHome.hide();
        win.winMini.webContents.send('sub-tray-inform', manMade);
      }
      clearInterval(this.timer);
      win.tray.setImage(this.getIconPath('tray_no.png'));
      this.listentDoubleClick();
    })
  }
  // 横向
  buildSeparator() {
    return {
      type: 'separator',
    }
  }
  // 登录
  buildForm( phone ) {
    const userMenuItem = {
      label: phone,
      type: 'normal',
      enabled: false,
      // click() {
      //   // console.log('clicked')
      // }
      // click() {
        
      //   win.winForm.show();
      //   win.winForm.center();
      // }
    };
    const visitorMenuItem = {
      label: '登录/注册',
      type: 'normal',
      click() {
        win.winForm.show();
        win.winForm.center();
      }
    };
    return !!phone ? userMenuItem : visitorMenuItem;
  }
  // 退出账号
  buildOut() {
    return {
      label: '退出登录',
      type: 'normal',
      async click() {
        win.winManual.hide();
        win.winMini.isVisible() ? win.winMini.show() : win.winHome.show();
        win.winHome.webContents.send('sub-account-logout');
        win.winMini.webContents.send('sub-account-logout');
        win.winManual.webContents.send('sub-account-logout');
        win.generateMenu('');
      }
    }
  }
  // 截屏翻译
  buildScreen() {
    return {
      label: '截屏翻译',
      type: 'normal',
      async click() {
        win.winHome.hide();
        await captureScreen(win)
          .then(res=>{
            win.winHome.show();
            win.winHome.webContents.send('sub-screen-capture', res)
          })
          .catch(err => {
            win.winHome.show();
            win.winHome.webContents.send('sub-screen-capture', err)
          })
        win.winHome.show();
      }
    }
  }
  // 大窗口
  buildMaxWin() {
    return {
      label: '显示大窗口',
      type: 'normal',
      click() {
        win.winHome.show()
      }
    }
  }
  // 退出
  buildQuit() {
    return {
      label: '退出',
      type: 'normal',
      click() {
        app.exit(0)
      }
    }
  }
  // 获取路径
  getIconPath(name) {
    return path.join(__dirname, '../icons', name)
  }
}

module.exports = $ => {
  win = $;
  new AppTray($);
}