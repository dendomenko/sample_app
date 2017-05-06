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


var config = {

    devtool: 'cheap-module-eval-source-map',
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

        bundle: ['babel-polyfill',
            'webpack-hot-middleware/client?http://localhost.target.com:8080/__webpack_hmr',
            './app/js/index.js'],
        styles: './app/assets/less/main.less'

    },

    output: {

        filename: '[name].js',

        path: path.join(__dirname, 'dist'),

        publicPath: '/dist/'

    },

    resolve: {

        // Allow to omit extensions when requiring these files
        modulesDirectories: ['node_modules'],
        extensions: [
            "", ".js", ".jsx"
        ],
        alias: {
            utils: path.resolve(__dirname, 'app/js/utils'),
            api: path.resolve(__dirname, 'app/js/api'),
            components: path.resolve(__dirname, 'app/js/components'),
            actions: path.resolve(__dirname, 'app/js/actions'),
            constants: path.resolve(__dirname, 'app/js/constants'),
            containers: path.resolve(__dirname, 'app/js/containers'),
            reducers: path.resolve(__dirname, 'app/js/reducers'),
            react: path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
        }
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

            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'postcss-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
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

        new webpack.DefinePlugin(
            {
                __DEVELOPMENT__: true,
            }
        ),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoErrorsPlugin(),

        new ProgressPlugin(function (percentage, msg) {

            if ((percentage * 100) % 20 === 0) {

                console.info((percentage * 100) + '%', msg);

            }

        }),

        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
        new WebpackNotifierPlugin({title: 'Webpack has been done', alwaysNotify: true}),
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
    ]



};

module.exports = config;