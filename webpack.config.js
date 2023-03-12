module.exports = {
    mode: 'development',
    entry: [
      './src/index.js'
    ],
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
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    }
  }