const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-class-properties')]
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                }
            }
        ]
    },
    devServer: {
        contentBase: './build'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/css/', to: 'css/'}
        ]),
        new HtmlWebpackPlugin({
            title: 'JSGraph',
            template: 'index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['./css/graphStyle.css'],
            append: true
        })
    ]
};