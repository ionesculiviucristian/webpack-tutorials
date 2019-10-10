/*********************************
 * Environment and imports
 *********************************/
const environment = process.env.NODE_ENV || "development";
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*********************************
 * Entry
 *********************************/
const entry = {
    "charting": "./Source/charting/charting.module.ts",
    "forms": "./Source/forms/forms.module.ts",
    "main": ["./Source/main.site.ts", "./Source/main.site.scss"]
};

/*********************************
 * Module
 *********************************/
const _module = {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                "ts-loader"
            ]
        },
        {
            test: /\.pug$/,
            use: [
                "raw-loader",
                "pug-html-loader"
            ]
        },
        {
            test: /\.component.scss$/,
            use: [
                "raw-loader",
                "postcss-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.site.scss$/,
            use: [
                environment === "development"
                ? "style-loader"
                : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"
            ]
        }
    ]
};

/*********************************
 * Optimization
 *********************************/
const optimization = {
    splitChunks: {
        cacheGroups: {
            commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
        }
    }
};

/*********************************
 * Output
 *********************************/
const output = {
    filename: "[name].bundle.js",
    path: __dirname + "/wwwroot/js/",
    pathinfo: true
};

if (environment === "production") {
    output.filename = "[name].bundle.min.js";
    output.pathinfo = false;
} else if (environment === "development") {
    output.publicPath = "/js/";
}

/*********************************
 * Plugins
 *********************************/
const plugins = [
    new MiniCssExtractPlugin({
        filename: environment === "development" ? "[name].css" : "../css/[name].bundle.min.css"
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
    }),
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }
    })
];

/*********************************
 * Resolve
 *********************************/
const resolve = {
    extensions: [".ts", ".js"]
};

/*********************************
 * Exports
 *********************************/
module.exports = {
    entry: entry,
    output: output,
    resolve: resolve,
    mode: environment,
    module: _module,
    optimization: optimization,
    plugins: plugins
};