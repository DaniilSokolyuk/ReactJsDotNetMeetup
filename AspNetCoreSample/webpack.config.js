const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

function p(name) {
    return path.resolve(__dirname, name);
}

const plugins = [
    new webpack.ProvidePlugin({
        'Promise': 'promise-polyfill',
    }),
    new ExtractTextPlugin('../css/[name].css', {
        allChunks: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    })
];

module.exports = [
    {
        name: 'client',
        entry: {
            client: 'client'
        },
        output: {
            path: p('wwwroot/js'),
            sourcePrefix: '  ',
            filename: '[name].js'
        },
        plugins,
        postcss: [
            autoprefixer({
                browsers: [
                    'Chrome >= 49',
                    'Firefox >= 45',
                    'IE >= 11',
                    'Opera >= 36',
                    'Safari >= 9',
                ],
            }),
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    include: [
                        p('ClientApp'),
                    ],
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-1'],
                    },
                },
                {
                    test: /\.styl$/,
                    include: p('ClientApp/css'),
                    loader: ExtractTextPlugin.extract([
                        'css?-minimize',
                        'postcss',
                        'stylus',
                    ]),
                },
                {
                    test: /\.css$/,
                    include: p('ClientApp/css'),
                    loader: ExtractTextPlugin.extract([
                        'css?-minimize',
                    ]),
                },
                {
                    test: /\.(png|jpg|svg|gif)/,
                    include: p('node_modules/react-photoswipe'),
                    loader: 'url-loader?hash=sha512&digest=hex&name=[name]_[hash].[ext]',
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: [
                './ClientApp',
                'node_modules',
            ],
        }
    },
    {
        name: 'server',
        entry: {
            server: 'server',
        },
        output: {
            path: p('wwwroot/js'),
            sourcePrefix: '  ',
            filename: '[name].js',
            libraryTarget: 'this'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    include: [
                        p('ClientApp'),
                    ],
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-1'],
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.DedupePlugin()
        ],
        resolve: {
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: [
                './ClientApp',
                'node_modules',
            ],
        }
    }
];