const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        app: ['core-js/stable', './src/index.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(s[ac]ss)|css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",],
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
}