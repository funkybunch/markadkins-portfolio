const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const pages = [
    "/experience/bellese/",
    "/experience/accenture/",
    "/experience/digikomp/",
    "/experience/tad/"
];

let plugins = [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].min.css',
        chunkFilename: '[id].min.css'
    }),
    new HtmlWebpackPlugin({
        title: "Mark Adkins // Home",
        template: path.join(__dirname, 'src/index.html'),
        filename: path.join(__dirname, 'dist/index.html'),
        inject: true,
        minify: true
    }),
    new HtmlWebpackPlugin({
        title: "Mark Adkins // Page Not Found",
        template: path.join(__dirname, 'src/index.html'),
        filename: path.join(__dirname, 'dist/404.html'),
        inject: true,
        minify: true
    })
];

for(let i = 0; i < pages.length; i++) {
    let page = pages[i];
    plugins.push(
        new HtmlWebpackPlugin({
            title: "Mark Adkins // Portfolio",
            template: path.join(__dirname, 'src/index.html'),
            filename: path.join(__dirname, 'dist' + page + 'index.html'),
            inject: true,
            minify: true
        })
    );
}

// webpack.config.js
module.exports = {
    mode: "production",
    bail: true,
    entry: {
        app: "./src/js/app.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader"
                    },
                    {
                        loader: "vue-svg-inline-loader",
                        options: {
                            svgo: false,
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            publicPath: '/assets',
                            name: '[name].[ext]',
                            esModule: false,
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.8, 1],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 80
                            },
                            svgo: {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                    {
                                        removeEmptyAttrs: false,
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        watchContentBase: true,
        writeToDisk: true,
        hot: true,
        port: 3000
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",
        publicPath: "/"
    }
};
