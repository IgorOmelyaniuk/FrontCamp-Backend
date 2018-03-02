const webpack = require('webpack');	
const path = require('path');	
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './client/index'
    ],
    output: {
        path: path.resolve('./public'),
        filename: 'bundle.js'
    },
    devServer: {	
        hot: true,	
        port: 3600,	
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {	
                test: /\.(css)$/,	
                use: [	
                    'style-loader',	
                    'css-loader',	
                ]
            }
        ]
    },
    plugins: [	
        new webpack.HotModuleReplacementPlugin(),	
        new HtmlWebpackPlugin({	
            template: './client/index.html',	
            inject: 'body'	
        })	
    ]
}