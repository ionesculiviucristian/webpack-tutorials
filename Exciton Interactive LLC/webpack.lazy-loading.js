const common = require("./webpack.common");

common.entry = {
    "lazy-loading": "./Source/lazy-loading/lazy-loading.page.tsx"
};

common.output.chunkFilename = "[name].bundle.js";

module.exports = common;