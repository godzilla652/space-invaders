const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
      main: './src/index.js',
      //analytics: ''/analytics.js''
    },

  output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist' )
    },
  plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
