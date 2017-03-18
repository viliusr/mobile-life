const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: {
    app: './index.jsx'
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([{ from: '../src/index.html', to: 'index.html' }]),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: 'src',
    port: 3000,
    inline: true,
    hot: true
  }
};