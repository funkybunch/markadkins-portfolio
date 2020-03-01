const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

// webpack.config.js
module.exports = {
    mode: "production",
    entry: {
        app: "./public/js/app.js",
        error: "./public/js/error.js"
    },
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
        filename: "[name].min.js",
        publicPath: "/js/"
    }
};
