const path = require("path");
module.exports = {
    mode: "development",
    //devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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