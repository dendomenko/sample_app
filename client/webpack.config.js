require('babel-polyfill');

var fs = require('fs');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'src', 'bundle.js');
var publicPath = path.resolve(__dirname, 'dist');

var config = {

    devtool: 'cheap-module-eval-source-map',

    progress: true,

    entry: {

        main: [

            // configuration for babel6

            'babel-polyfill',

            'webpack-hot-middleware/client?http://localhost.target.com:3000/__webpack_hmr',

            // example for single entry point. Multiple Entry bundle example will be added
            // later

            './app/js/index.js'

        ]

    },

    output: {

        filename: '[name].js',

        path: path.join(__dirname, 'dist'),

        publicPath: '/dist/'

    },

    module: {

        preLoaders: [
            {

                test: /\.jsx$|\.js$/,

                loader: 'eslint-loader',

                include: __dirname + '/app/'

            }
        ],

        loaders: [
            {

                test: /\.jsx?$/,

                include: path.join(__dirname, 'app'),

                loader: "babel-loader",

                exclude: [nodeModulesPath]

            }, {

                test: /\.scss$/,

                include: path.join(__dirname, 'app'),

                loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version!sass')

            }
        ]

    },

    plugins: [

        new webpack
            .optimize
            .UglifyJsPlugin({

                compress: {

                    warnings: false

                }

            }),

        new webpack.DefinePlugin({__DEVELOPMENT__: true}),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoErrorsPlugin(),

        new ProgressPlugin(function (percentage, msg) {

            if ((percentage * 100) % 20 === 0) {

                console.info((percentage * 100) + '%', msg);

            }

        }),

        new ExtractTextPlugin('[name].css'),
        new WebpackNotifierPlugin({title: 'Webpack has been done', alwaysNotify: true})

    ],

    resolve: {

        // Allow to omit extensions when requiring these files

        extensions: ["", ".js", ".jsx"]

    }

}

module.exports = config;