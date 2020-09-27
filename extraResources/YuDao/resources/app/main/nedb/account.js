const Base = require('./base');

// 默认数据
const data = {
  key: 'token',
  value: '',
  stamp: 'debug',
}

class Account extends Base {
  constructor(props){
    super(props)
    this.db = new this.DataBase(this.generateDb('account'));
    this.init();
  }
  init() {
    this.db.loadDatabase();
    this.find({})
      .then(doc=>{
        if (doc.length === 0) {
          this.insert(data)
            .then(res=>{
              console.log('successed for init data of account')
            })
        }
      })
      .catch(err=>{
        this.insert(data)
          console.log('catch error and successed for init data of account')
      })
  }
  clear() {
    this.remove({})
      .then(num=>{
        console.log(`successed for removed ${num} data`)
      })
  }
  changeStamp({options,stamp}) {
    return new Promise((resolve, reject) => {
      this.db.update(options, { $set: { stamp } }, { upsert: true}, (err, numReplaced, affectedDocuments) => {
        if(err) {
          reject(err)
        } else {
          resolve(numReplaced, affectedDocuments)
        }
      })
    })
  }
}

const account = new Account();

module.exports = account;