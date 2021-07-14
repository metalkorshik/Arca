const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

let jsEntryArray = ['./webpack_source/src/index.js'];
getFiles('./webpack_source/src/js', jsEntryArray, 'js');

let styleEntryArray = [];
getFiles('./webpack_source/src/css', styleEntryArray, 'scss');
getFiles('./webpack_source/src/css', styleEntryArray, 'css');

module.exports = {
	mode: 'development',
	entry: {
		libs: './webpack_source/src/libs.js',
		main: jsEntryArray,
		style: styleEntryArray
	},
	output: {
		path: __dirname + '/public/dist',
		filename: '[name].js',
	},
	devtool: 'source-map',
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
                        options: {config: {path: './postcss.config.js'}}
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
                        options: {config: {path: './postcss.config.js'}}
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
        ]
    },
	plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
	devServer: {
        overlay: true,
    },
    externals: {
        "jquery": "jQuery"
    }
}