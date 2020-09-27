const path = require('path');
const DataBase = require('nedb');
const { temp } = require('../../tools/config');

class Base {
  constructor(){
    this.db = null;
    this.path = path;
    this.DataBase = DataBase;
    this.temp = temp;
  }
  generateDb(name){
    return this.path.join(temp, name+'.db')
  }
  insert(data) {
    return new Promise((resolve, reject) => {
      this.db.insert(data, (err, newDoc)=>{
        if(err) {
          reject(err)
        }else {
          resolve(newDoc)
        }
      })
    })
  }
  find(options={}) {
    return new Promise((resolve, reject) => {
      this.db.find(options, (err, doc) => {
        if(err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }

  update({options,data}) {
    return new Promise((resolve, reject) => {
      this.db.update(options, { $set: { value: data } }, { upsert: true}, (err, numReplaced, affectedDocuments) => {
        if(err) {
          reject(err)
        } else {
          resolve(numReplaced, affectedDocuments)
        }
      })
    })
  }

  remove(options) {
    return new Promise((resolve, reject) => {
      this.db.remove(options, {multi: true}, (err, numRemoved) => {
        console.log(numRemoved)
        if(err) {
          reject(err)
        } else {
          resolve(numRemoved)
        }
      })
    })
  }
}

module.exports = Base;