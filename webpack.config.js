const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

// webpack.config.js
module.exports = {
    mode: "production",
    entry: "./public/js/app.js",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "app.min.js",
        publicPath: "/js/"
    }
};
// webpack.config.js
module.exports = {
    mode: "production",
    entry: "./public/js/error.js",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "error.min.js",
        publicPath: "/js/"
    }
};