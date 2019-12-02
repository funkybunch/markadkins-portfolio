let path = require('path');

// webpack.config.js
module.exports = {
    mode: "production",
    entry: "./public/js/app.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.min.js",
        publicPath: "/js/"
    },
    module: {
        rules: [
            { test: /\.js/, use: "moon-loader" }
        ]
    }
};