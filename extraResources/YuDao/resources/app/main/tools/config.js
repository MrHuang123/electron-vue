const path = require('path');
const tempPath = require('os').tmpdir();
const env = process.env.value === 'development' ? 'dev' : 'pro'

const baseUrl = env === 'dev' ? `http://localhost:10000` : `file://${path.join(__dirname, '../../render', 'index.html')}`;


exports.baseUrl = baseUrl;
exports.temp = path.join(tempPath,'../iol8');