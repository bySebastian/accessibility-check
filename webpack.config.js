const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js',
    },
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};