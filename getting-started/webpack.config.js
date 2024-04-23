// 웹팩 설정파일

var path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}; // package.json 에서 build 부분 입력과 동일하다
