const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

let getFiles = function (dir, files_, extension) {
    files_ = files_ || [];
    let files = fs.readdirSync(dir);
    let regular = new RegExp('.\\.' + extension + '$');

    for (let i in files) {

        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_, extension);
        } else if (regular.test(name)) {
            files_.push(name);
        }
    }
    return files_;
};


// Js файлы
let jsEntryArray = [path.resolve(__dirname, './src/index.js')];
getFiles(path.resolve(__dirname, './src/blocks'), jsEntryArray, 'js');

// Файлы стилей
let styleEntryArray = [];
getFiles(path.resolve(__dirname, './src/blocks'), styleEntryArray, 'scss');
getFiles(path.resolve(__dirname, './src/blocks'), styleEntryArray, 'css');

module.exports = {
    mode: 'development',
    entry: {
        libs: path.resolve(__dirname, './src/libs.js'),
        main: jsEntryArray,
        style: styleEntryArray,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Highcharts: 'highcharts'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        /* new CopyWebpackPlugin([
            {
              from: './dist/*.js',
              to: '',
            },
        ]), */
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: './dist/main.js', destination: '../../../public/js/main.js' },
                        { source: './dist/main.js.map', destination: '../../../public/js/main.js.map' },

                        { source: './dist/libs.js', destination: '../../../public/js/libs.js' },
                        { source: './dist/libs.js.map', destination: '../../../public/js/libs.js.map' },

                        { source: './dist/style.js', destination: '../../../public/js/style.js' },
                        { source: './dist/style.js.map', destination: '../../../public/js/style.js.map' },

                        { source: './dist/libs.css', destination: '../../../public/css/libs.css' },
                        { source: './dist/libs.css.map', destination: '../../../public/css/libs.css.map' },

                        { source: './dist/style.css', destination: '../../../public/css/style.css' },
                        { source: './dist/style.css.map', destination: '../../../public/css/style.css.map' },

                        { source: './dist/plugins', destination: '../../../public/css/plugins' },
                    ],
                }
            }
        }),
    ],
    devServer: {
        overlay: true,
    },
    externals: {
        "jquery": "jQuery"
    }
};