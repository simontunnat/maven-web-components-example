const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: glob.sync('./src/main/frontend/js/*/*.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/frontend/index.html'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};
