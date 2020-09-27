const m = require('../plugin/YudaoPC');
const { temp } = require('../tools/config');
const path = require('path');
const fs = require('fs');


module.exports = $ => {
  const isExist = fs.existsSync(path.join(temp, 'screen'));
  if (isExist) {
    console.log('has existed')
  } else {
    fs.mkdirSync(path.join(temp, 'screen'));
    console.log('successed create dir')
  }
  return new Promise((resolve,reject) => {
    const pic = path.join(temp,`/screen/screen_shot_${Date.now()}.jpg`);
    const isRegion = m.regionCapture(pic);
    if(isRegion) {
      fs.readFile(pic, (err,data) => {
        if(err) {
          reject({status:0, err})
        } else {
          resolve({
            status: 1,
            data: {
              content: data,
              filePath: pic,
              fileName: path.basename(pic),
            }
          })
        }
      })
    } else {
      reject({
        status: 0,
        err: '截屏失败'
      })
    }

  })
}