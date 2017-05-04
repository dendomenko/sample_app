require( 'babel-polyfill' );

var fs                    = require( 'fs' );
var webpack               = require( 'webpack' );
var WebpackNotifierPlugin = require( 'webpack-notifier' );
var path                  = require( 'path' );
var ExtractTextPlugin     = require( 'extract-text-webpack-plugin' );
var ProgressPlugin        = require( 'webpack/lib/ProgressPlugin' );
var nodeModulesPath       = path.resolve( __dirname, 'node_modules' );
var mainPath              = path.resolve( __dirname, 'app', 'bundle.js' );
var publicPath            = path.resolve( __dirname, 'dist' );
var RewriteImportPlugin = require("less-plugin-rewrite-import");
var lessLoader = ExtractTextPlugin.extract(
    "css?sourceMap!less?sourceMap"
);
var sassLoader = ExtractTextPlugin.extract(
    'style-loader',
    'css!autoprefixer-loader?browsers=last 2 version!sass' );
var config     = {

    devtool : 'cheap-module-eval-source-map',
    progress: true,

    entry: {

        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'react-router',
            'react-router-redux',
            'react-router-dom',
            'axios',
            'immutable',
            'redux-immutable',
            'lodash',
            'redux-form',
            'shortid',
            'redux-saga',
            'history',
            'semantic-ui-react'
        ],

        bundle: [ 'babel-polyfill', 'webpack-hot-middleware/client?http://localhost.target.com:8080/__webpack_hmr', './app/js/index.js' ]
    },

    output: {

        filename: '[name].js',

        path: path.join( __dirname, 'dist' ),

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
                include: path.join( __dirname, 'app' ),
                loader : "babel-loader",
                exclude: [ nodeModulesPath ]

            },  {
                test: /\.less$/, // import css from 'foo.less';
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test  : /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
                loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack',
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },{

                test: /\.scss$/,

                include: path.join( __dirname, 'app' ),

                loader: sassLoader

            }
        ]

    },

    plugins: [

        new webpack
            .optimize
            .UglifyJsPlugin( {
                compress: {
                    warnings: false
                }
            } ),

        new webpack.DefinePlugin(
            {
                __DEVELOPMENT__: true,
            }
        ),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoErrorsPlugin(),

        new ProgressPlugin( function ( percentage, msg ) {

            if ( (percentage * 100) % 20 === 0 ) {

                console.info( (percentage * 100) + '%', msg );

            }

        } ),

        new ExtractTextPlugin( '[name].css' ),
        new WebpackNotifierPlugin( { title: 'Webpack has been done', alwaysNotify: true } ),
        new webpack
            .optimize
            .CommonsChunkPlugin( {

                // This name 'vendor' ties into the entry definition
                name: 'vendor',

                // We don't want the default vendor.js name
                filename: 'vendor-bundle.js',

                // Passing Infinity just creates the commons chunk, but moves no modules into
                // it. In other words, we only put what's in the vendor entry definition in
                // vendor-bundle.js
                minChunks: Infinity
            } )
    ],

    resolve: {

        // Allow to omit extensions when requiring these files

        extensions: [
            "", ".js", ".jsx"
        ],
        alias     : {
            utils      : path.resolve( __dirname, 'app/js/utils' ),
            api        : path.resolve( __dirname, 'app/js/api' ),
            components : path.resolve( __dirname, 'app/js/components' ),
            actions    : path.resolve( __dirname, 'app/js/actions' ),
            constants  : path.resolve( __dirname, 'app/js/constants' ),
            containers : path.resolve( __dirname, 'app/js/containers' ),
            reducers   : path.resolve( __dirname, 'app/js/reducers' ),
            react      : path.resolve( __dirname, 'node_modules/react' ),
            'react-dom': path.resolve( __dirname, 'node_modules/react-dom' )
        }
    }

}

module.exports = config;