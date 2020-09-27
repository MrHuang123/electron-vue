const Base = require('./base');

const langCommon = [
  {name: "中文", code: "zh", firstLetter: "Z"},
  {name: "英语", code: "en", firstLetter: "Y"},
  {name: "韩语", code: "ko", firstLetter: "H"},
  {name: "日语", code: "ja", firstLetter: "R"},
  {name: "俄语", code: "ru", firstLetter: "E"},
  {name: "法语", code: "fr", firstLetter: "F"},
  {name: "西班牙语", code: "es", firstLetter: "X"},
  {name: "德语", code: "de", firstLetter: "D"},
  {name: "葡萄牙语", code: "pt", firstLetter: "P"},
  {name: "阿拉伯语", code: "ar", firstLetter: "A"},
  {name: "意大利语", code: "it", firstLetter: "Y"},
]

const langAll = [
  {code: "hmo", firstLetter: "m", id: 50, name: "苗族语"},
  {code: "kk", firstLetter: "h", id: 49, name: "哈萨克斯坦语"},
  {code: "my", firstLetter: "m", id: 44, name: "缅甸语"},
  {code: "sq", firstLetter: "a", id: 43, name: "阿尔巴尼亚"},
  {code: "hr", firstLetter: "k", id: 42, name: "克罗地亚语"},
  {code: "sv", firstLetter: "r", id: 41, name: "瑞典语"},
  {code: "he", firstLetter: "x", id: 39, name: "希伯莱语"},
  {code: "la", firstLetter: "l", id: 38, name: "拉丁语"},
  {code: "hu", firstLetter: "x", id: 37, name: "匈牙利语"},
  {code: "sk", firstLetter: "s", id: 36, name: "斯洛伐克语"},
  {code: "cs", firstLetter: "j", id: 35, name: "捷克语"},
  {code: "bg", firstLetter: "b", id: 34, name: "保加利亚语"},
  {code: "ro", firstLetter: "l", id: 33, name: "罗马尼亚语"},
  {code: "pl", firstLetter: "b", id: 32, name: "波兰语"},
  {code: "el", firstLetter: "x", id: 31, name: "希腊语"},
  {code: "fi", firstLetter: "f", id: 30, name: "芬兰语"},
  {code: "no", firstLetter: "n", id: 29, name: "挪威语"},
  {code: "da", firstLetter: "d", id: 28, name: "丹麦语"},
  {code: "uk", firstLetter: "w", id: 27, name: "乌克兰语"},
  {code: "ne", firstLetter: "n", id: 26, name: "尼泊尔语"},
  {code: "bn", firstLetter: "m", id: 24, name: "孟加拉语"},
  {code: "hi", firstLetter: "y", id: 23, name: "印度语"},
  {code: "lo", firstLetter: "l", id: 22, name: "老挝语"},
  {code: "vi", firstLetter: "y", id: 21, name: "越南语"},
  {code: "th", firstLetter: "t", id: 20, name: "泰语"},
  {code: "ms", firstLetter: "m", id: 19, name: "马来语"},
  {code: "id", firstLetter: "y", id: 18, name: "印尼语"},
  {code: "mn", firstLetter: "m", id: 17, name: "蒙古语"},
  {code: "tr", firstLetter: "t", id: 14, name: "土耳其语"},
  {code: "ar", firstLetter: "a", id: 13, name: "阿拉伯语"},
  {code: "pt", firstLetter: "p", id: 12, name: "葡萄牙语"},
  {code: "es", firstLetter: "x", id: 11, name: "西班牙语"},
  {code: "it", firstLetter: "y", id: 10, name: "意大利语"},
  {code: "nl", firstLetter: "h", id: 9, name: "荷兰语"},
  {code: "zh_cht", firstLetter: "z", id: 8, name: "中文繁体"},
  {code: "ko", firstLetter: "h", id: 7, name: "韩语"},
  {code: "ru", firstLetter: "e", id: 6, name: "俄语"},
  {code: "de", firstLetter: "d", id: 5, name: "德语"},
  {code: "fr", firstLetter: "f", id: 4, name: "法语"},
  {code: "ja", firstLetter: "r", id: 3, name: "日语"},
  {code: "en", firstLetter: "y", id: 2, name: "英语"},
  {code: "zh", firstLetter: "z", id: 1, name: "中文简体"},
  {code: "km", firstLetter: "g", id: 51, name: "高棉语"},
  {code: "so", firstLetter: "s", id: 52, name: "索马里语"},
  {code: "sr", firstLetter: "s", id: 53, name: "塞尔维亚语"},
  {code: "", firstLetter: "#", id: 999, name: "自动检测"},
]

const langImg = [
    {name: "中文", code: "zh", firstLetter: "z"},
    {name: "英语", code: "en", firstLetter: "y"},
    {name: "韩语", code: "ko", firstLetter: "h"},
    {name: "日语", code: "ja", firstLetter: "r"},
    {name: "俄语", code: "ru", firstLetter: "e"},
    {name: "法语", code: "fr", firstLetter: "f"},
    {name: "西班牙语", code: "es", firstLetter: "x"},
    {name: "德语", code: "de", firstLetter: "d"},
    {name: "葡萄牙语", code: "pt", firstLetter: "p"},
    {name: "意大利语", code: "it", firstLetter: "y"},
]

const langTr = [
    {name: "中文", code: "zh", firstLetter: "Z"},
    {name: "英语", code: "en", firstLetter: "Y"},
    {name: "韩语", code: "ko", firstLetter: "H"},
    {name: "日语", code: "ja", firstLetter: "R"},
    {name: "俄语", code: "ru", firstLetter: "E"},
    {name: "法语", code: "fr", firstLetter: "F"},
    {name: "西班牙语", code: "es", firstLetter: "X"},
    {name: "德语", code: "de", firstLetter: "D"},
    {name: "葡萄牙语", code: "pt", firstLetter: "P"},
    {name: "阿拉伯语", code: "ar", firstLetter: "A"},
    {name: "意大利语", code: "it", firstLetter: "Y"},
]

class Language extends Base {
  constructor(props) {
    super(props)
    this.db = new this.DataBase(this.generateDb('language'));
    this.init();
  }

  init() {
    this.db.loadDatabase();
    const data = [
      {
        key: 'langCommon',
        value: JSON.stringify(langCommon),
      },
      {
        key: 'langAll',
        value: JSON.stringify(langAll),
      },
      {
        key: 'langImg',
        value: JSON.stringify(langImg),
      },
      {
        key: 'langTr',
        value: JSON.stringify(langTr),
      }
    ];
    this.find({})
      .then(doc=>{
        if (doc.length===0) {
          this.insert(data)
            .then(res=>{
              console.log('successed for init data of language')
            })
        }
      })
      .catch(err=>{
        this.insert(data)
          .then(res=>{
            console.log('catch and successed for init data of language')
          })
      }) 
  }

  clear() {
    this.remove({})
      .then(res=>{
        console.log(`successed for removed ${res} data`)
      })
  }
  
}

const language = new Language();

module.exports = language;