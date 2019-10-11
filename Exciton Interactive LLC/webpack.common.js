const mode = process.env.NODE_ENV || "development";
const isAnalyze = process.env.BUNDLE_ANALYZE !== undefined;
const isDev = mode === 'development';
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [
    new MiniCssExtractPlugin({
        filename: "../css/[name].bundle.css"
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
    })
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

module.exports = {
    module: {
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
        ],
    },
    mode,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/, name: "common", chunks: "all" }
            }
        }
    },
    output: {
        filename: isDev ? "[name].bundle.js" : "[name].bundle.min.js",
        path: __dirname + "/wwwroot/js/",
        pathinfo: isDev,
        publicPath: isDev ? "/js/" : undefined
    },
    plugins,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    }
};