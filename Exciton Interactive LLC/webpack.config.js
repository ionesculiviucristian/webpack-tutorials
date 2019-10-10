/*********************************
 * Environment and imports
 *********************************/
const environment = process.env.NODE_ENV || "development";
const isDev = environment === 'development';
const isProd = environment === 'production';
const isAnalyze = process.env.BUNDLE_ANALYZE !== undefined;
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*********************************
 * Entry
 *********************************/
const entry = {
    "charting": "./Source/charting/charting.module.ts",
    "forms": "./Source/forms/forms.module.ts",
    "main": ["./Source/main.site.ts", "./Source/main.site.scss"],
    "index-fa-all": "./Source/index-fa-all.ts",
    "index-fa-single": "./Source/index-fa-single.ts"
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
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ]
        }
    ]
};

/*********************************
 * Output
 *********************************/
const output = {
    filename: "[name].bundle.js",
    path: __dirname + "/wwwroot/js/",
    pathinfo: true
};

if (isDev) {
    output.publicPath = "/js/";
} else {
    output.filename = "[name].bundle.min.js";
    output.pathinfo = false;
}

/*********************************
 * Plugins
 *********************************/
const plugins = [
    new MiniCssExtractPlugin({
        filename: isDev ? "../css/[name].bundle.css" : "../css/[name].bundle.min.css"
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
    }),
];

if (isDev) {
    plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
}

if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
}

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
    plugins: plugins
};