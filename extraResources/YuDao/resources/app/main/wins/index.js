const generateWinForm = require('./form');
const generateWinMini = require('./mini');
const generateWinHome = require('./home');
const generateWinManual = require('./manual');

module.exports = $ => {
  generateWinHome($);
  generateWinForm($);
  generateWinMini($);
  generateWinManual($);
}