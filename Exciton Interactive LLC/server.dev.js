const environment = process.env.NODE_ENV || "development";
const path = require("path");
const express = require("express");
const opn = require("opn");
const LOCAL_HOST_PORT = 3000;

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config");

/*********************************
 * Entry
 *********************************/
const webpackServer = "webpack/hot/dev-server";
const webpackClient = "webpack-hot-middleware/client";

config.entry = Object.entries(config.entry)
    .map(([k, entry]) => [k, Array.isArray(entry) ? entry : [entry]])
    .reduce((carry, [k, entry]) => ({
        ...carry,
        [k]: [...entry, webpackServer, webpackClient]
    }), {});

/*********************************
 * Output
 *********************************/
config.output.path = "/";
config.output.publicPath = `http://localhost:${LOCAL_HOST_PORT}/wwwroot/js/`;

/*********************************
 * HMR Plugin
 *********************************/
config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
);

/*********************************
 * Express
 *********************************/
const compiler = webpack(config);
const app = express();

app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'pug');

app.use(webpackDevMiddleware(compiler,
    {
        logLevel: 'debug',
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

app.get("/", (req, res) => res.render("index", {environment: environment}));
app.get("/charting", (req, res) => res.render("charting", {environment: environment}));
app.get("/forms", (req, res) => res.render("forms", {environment: environment}));

app.listen(LOCAL_HOST_PORT, () => console.log(`listening on ${LOCAL_HOST_PORT}`));

opn(`http://localhost:${LOCAL_HOST_PORT}`);