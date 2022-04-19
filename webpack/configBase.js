/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ReactRefreshTypeScript = require('react-refresh-typescript')

// Defining main projects paths
const rootFolder = path.resolve(__dirname, '..')
const appSourceFolder = path.resolve(rootFolder, 'src')
const appDistributionFolder = path.resolve(rootFolder, 'build')

// Base webpack configuration
const makeConfiguration = (environment) => ({
  ...environment,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [
              environment.mode === 'development'
                ? ReactRefreshTypeScript()
                : null,
            ].filter(Boolean),
          }),
          // disable types checking here to use it in ForkTsCheckerWebpackPlugin to improve compiling performaces.
          // See: https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
          transpileOnly: true,
        },
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
          fallback: { crypto: false },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
          'file-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './static/media',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './static/fonts',
        },
      },
    ],
  },
  output: {
    path: appDistributionFolder,
    publicPath: `/`,
    ...environment.output,
  },
  resolve: {
    modules: [appSourceFolder, 'node_modules'],
    extensions: ['.mjs', '.json', '.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        baseUrl: path.resolve(rootFolder, './'),
        configFile: path.resolve(rootFolder, 'tsconfig.json'),
        logLevel: 'INFO',
      }),
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv({ systemvars: true }),
    ...(environment.plugins || []),
  ],
  target: 'web',
})

module.exports = {
  rootFolder,
  appSourceFolder,
  appDistributionFolder,
  makeConfiguration,
}
