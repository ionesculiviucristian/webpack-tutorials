const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    //devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash]js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
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