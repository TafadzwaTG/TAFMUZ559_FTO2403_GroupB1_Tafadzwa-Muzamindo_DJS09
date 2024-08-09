const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist') 
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
      }
    ]
  },
  devtool: 'source-map', 
};