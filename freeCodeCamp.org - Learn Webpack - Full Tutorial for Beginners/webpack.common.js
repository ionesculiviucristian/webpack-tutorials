const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', // 3. inject styles into DOM
                    'css-loader',   // 2. turns CSS into CommonJS
                    'sass-loader'   // 1. turns SASS into CSS
                ]
            },
        ],
    }
};