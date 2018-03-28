const path = require('path');	

module.exports = {
  entry: {
    reactBundle: './client/index',
    angularBundle: './client/admin/app.module.js'
  },
  output: {
    path: path.resolve('./public'),
    filename: '[name].js'
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
      },
      {
        test: /\.(html)$/,	
        use: [	
          'html-loader'
        ]
      }
        
    ]
  }
}