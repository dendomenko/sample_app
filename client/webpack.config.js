/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack');
const pathLib = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild
  ? 'development'
  : 'production';

const config = {

  context: __dirname,
  entry: {

    vendor: [
      'babel-polyfill',
      'es5-shim/es5-shim',
      'es5-shim/es5-sham',
      'jquery',
      'turbolinks',
      'axios',
      'classnames',
      'immutable',
      'lodash',
      'react-dom',
      'react-redux',
      'react-on-rails',
      'react-router-redux',
      'redux-thunk',
      'redux-saga',
      'uikit',
      'shortid'
    ],

    app: ['./app/bundles/Application/clientRegistration']
    // './app/bundles/HelloWorld/startup/registration',

  },

  // output: {   filename: 'app-bundle.js',   path: pathLib.resolve(__dirname,
  // '../app/assets/webpack'), },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new WebpackNotifierPlugin(), new webpack.EnvironmentPlugin({NODE_ENV: 'development'}),
    new webpack
      .optimize
      .CommonsChunkPlugin({

        // This name 'vendor' ties into the entry definition
        name: 'vendor',

        // We don't want the default vendor.js name
        filename: 'vendor-bundle.js',

        // Passing Infinity just creates the commons chunk, but moves no modules into
        // it. In other words, we only put what's in the vendor entry definition in
        // vendor-bundle.js
        minChunks: Infinity
      })
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader'
      }, {
        test: /\.(woff2?|jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }, {
        test: require.resolve('uikit'),
        loader: 'expose-loader?UIkit'
      }, {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            query: 'jQuery'
          }, {
            loader: 'expose-loader',
            query: '$'
          }
        ]
      }, {
        test: require.resolve('turbolinks'),
        use: {
          loader: 'imports-loader?this=>window'
        }
      }, {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham'
          }
        }
      }, {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}