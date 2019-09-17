const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    mode: 'production',
    entry: [
        './src/js/main.js',
        './src/js/helper-functions.js',
    "./src/less/button-style.less",
    './src/less/style.less'
    ],
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'less-loader'],
                  fallback: 'style-loader'
                })
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/styles.css'),
        new CopyWebpackPlugin([
            {from:'src/img', to:'./img'} 
        ]), 
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })
    ]
};

module.exports = config;