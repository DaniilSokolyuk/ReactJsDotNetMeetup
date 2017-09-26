/*
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant 
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

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
            path: p('js'),
            sourcePrefix: '  ',
            filename: '[name].js'
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
                    loader: ExtractTextPlugin.extract([
                        'css?-minimize',
                    ]),
                },
            ],
        },
        resolve: {
            // Allow require('./blah') to require blah.jsx
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
            path: p('js/'),
            sourcePrefix: '  ',
            filename: '[name].js'
        },
        plugins,
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
        resolve: {
            // Allow require('./blah') to require blah.jsx
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: [
                './ClientApp',
                'node_modules',
            ],
        }
    }
];