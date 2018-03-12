const path = require('path');	

module.exports = {
    entry: [
        './client/index'
    ],
    output: {
        path: path.resolve('./public'),
        filename: 'bundle.js'
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
    }
}