/* eslint comma-dangle: ["error",
  {"functions": "never", "arrays": "only-multiline", "objects": "only-multiline"} ] */

// Common webpack configuration for server bundle

const webpack = require('webpack');
const path = require('path');

const cfg = {
  noParseTest: /\.min\.js$/,
  jsLoaderTest: /\.jsx?$/,
  cssLoaderTest: /\.css$/,
  scssLoaderTest: /\.scss$/,
  imagesLoaderTest: /\.(jpe?g|png|gif|svg|ico)$/,
  fontsLoaderTest: /\.(woff2?|ttf|eot|svg)$/,
  jsonLoaderTest: /\.json$/,
  cssLoaderParams: function (params) {
    return (JSON.stringify({modules: true, importLoaders: params.importLoaders, localIdentName: '[name]__[local]}__[hash:base64:5]'}))
  },
  sassLoaderParams: (JSON.stringify({
    includePaths: [process.cwd()]
  }))

}

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
        test: cfg.cssLoaderTest,
        loaders: [
          `css/locals?${cfg.cssLoaderParams({importLoaders: 0})}`]}, {
          test: cfg.scssLoaderTest,
          loaders: [
            `css/locals?${cfg.cssLoaderParams({importLoaders: 1})}`, `sass?${cfg.sassLoaderParams}`]}
        ]
      }
    };