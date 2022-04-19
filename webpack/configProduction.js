/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const {
  appDistributionFolder,
  appSourceFolder,
  rootFolder,
  makeConfiguration,
} = require('./configBase')

const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { makeChunkName } = require('./configUtils')

require('dotenv').config()

module.exports = makeConfiguration({
  entry: [path.resolve(appSourceFolder, 'index.tsx')],
  mode: 'production',
  output: {
    chunkFilename: 'static/js/[name].[chunkhash].chunk.js',
    filename: 'static/js/[name]-[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: path.resolve(appSourceFolder, 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(rootFolder, 'public'),
          to: path.resolve(appDistributionFolder),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            pure_getters: true,
            drop_console: true,
            unsafe_comps: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 400000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      name: makeChunkName,
      cacheGroups: {
        'react-components': {
          test: /[\\/]node_modules[\\/].*(react).*[\\/]/,
          priority: 30,
          enforce: false,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
