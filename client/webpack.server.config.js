/* eslint comma-dangle: ["error",
  {"functions": "never", "arrays": "only-multiline", "objects": "only-multiline"} ] */

// Common webpack configuration for server bundle

const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild
  ? 'development'
  : 'production';

module.exports = {

  // the project dir
  context: __dirname,
  entry: [
    'babel-polyfill', './app/bundles/Application/serverRegistration'
  ],
  output: {
    filename: 'server-bundle.js',
    path: path.join(__dirname, '../app/assets/webpack')
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    alias: {
      libs: path.resolve(__dirname, 'app/libs')
    }
  },
  plugins: [new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'css/locals?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader'
          }, {
            loader: 'sass-resources-loader',
            options: {
              resources: './app/assets/styles/app-variables.scss'
            }
          }
        ]
      }
    ]
  }
};