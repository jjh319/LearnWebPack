var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none', // production , development, none  연습이기 때문에 none을 쓰고 원래는 production을 사용
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'], // 오른쪽에서 왼쪽으로 읽음
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};
