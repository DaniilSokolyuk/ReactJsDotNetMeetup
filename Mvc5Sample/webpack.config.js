/*
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant 
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var path = require('path');

function p(name) {
    return path.resolve(__dirname, name);
}

module.exports = {
    context: path.join(__dirname, 'ClientApp'),
    entry: {
        server: './server',
        client: './client'
    },
    output: {
        path: path.join(__dirname, 'js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    p('./ClientApp'),
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
};