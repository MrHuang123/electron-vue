const fs = require('fs');
const path = require('path');

class File {
  constructor() {
    
  }
  save(name, data) {
    return new Promise((resolve,reject)=>{

      fs.writeFile(name, data, 'utf8', err => {
        if(err) {
          reject();
        } else {
          resolve();
        }
      })
    })
  }
  read(filepath) {
    return new Promise((resolve,reject)=>{
      const fileName = path.basename(filepath);
      const fileExt = path.extname(filepath);
      fs.readFile(filepath,  (err, data)=>{
        if(err) {
          reject({
            status:0,
            data:'',
          })
        } else {
          resolve({
            status:1,
            fileName,
            fileExt,
            filePath:filepath,
            data,
          })
        }
      })
    })
  }
}

module.exports = File;