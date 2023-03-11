module.exports = {
    mode: 'development',
    entry: [
      './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
      },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
          }
        ]
    }    
  }