require('babel-polyfill');

var fs = require('fs');

var webpack = require('webpack');

var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ProgressPlugin = require('webpack/lib/ProgressPlugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var mainPath = path.resolve(__dirname, 'src', 'main.js');

var publicPath = path.resolve(__dirname, 'public');


/**
 *
 * TODO : should reworked
 */
var config = {

    progress: true,

    entry: {

        main: [

            // configuration for babel6

            'babel-polyfill',

            'webpack-hot-middleware/client?http://localhost.target.com:8080/__webpack_hmr',

            // example for single entry point. Multiple Entry bundle example will be added later

            './app/js/index.js'

        ]

    },

    output: {

        filename: '[name].js',

        path: path.join(__dirname, 'public'),

        publicPath: '/public/'

    },

    module: {

        preLoaders: [{

            test: /\.jsx$|\.js$/,

            loader: 'eslint-loader',

            include: __dirname + '/src/'

        }],

        loaders: [{

            test: /\.jsx?$/,

            include: path.join(__dirname, 'src'),

            loader: "babel-loader",

            exclude: [nodeModulesPath]

        }, {

            test: /\.scss$/,

            include: path.join(__dirname, 'src'),

            loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version!sass')

        }]

    },

    plugins: [

        new webpack.optimize.UglifyJsPlugin({

            compress: {

                warnings: false

            }

        }),

        new webpack.DefinePlugin({

            __DEVELOPMENT__: false,
            'process.env'  : {
                NODE_ENV: 'production',
            }

        }),

        new ExtractTextPlugin('[name].css')

    ],

    resolve: {

        // Allow to omit extensions when requiring these files

        extensions: ["", ".js", ".jsx"],

    }

}



module.exports = config;