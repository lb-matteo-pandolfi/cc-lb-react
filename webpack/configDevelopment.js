/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const { appSourceFolder, makeConfiguration } = require('./configBase')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const openBrowser = require('react-dev-utils/openBrowser')

require('dotenv').config()

module.exports = makeConfiguration({
  entry: path.resolve(appSourceFolder, 'index.tsx'),
  mode: 'development',
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  devServer: {
    onListening: () => {
      openBrowser(`http://localhost:3000`)
    },
    port: 3000,
    https: false,
    historyApiFallback: true,
    open: false,
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appSourceFolder, 'index.html'),
    }),
  ],
})
