'use strict';

const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const config = require('./webpack.config.js');

let counter = 0;

const timer = () => setTimeout(() => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const smile = counter % 2 === 0 ? '🙉' : '🙈';
  process.stdout.write(`${smile}  \u001b[39m${counter++}s `);
  timer();
}, 1000);

timer();

config[0].devtool = ['sourcemap'];
config[0].plugins = (config[0].plugins || [])
    .filter(plugin => !(plugin instanceof webpack.optimize.UglifyJsPlugin));
config[0].plugins.push(new LiveReloadPlugin({
  appendScriptTag: true,
  ignore: /.*(\.css\.map|\.js\.map)$/,
}));

let compiler = webpack(config);

compiler.watch({
  aggregateTimeout: 300,
}, (err, stats) => {

  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  console.log(stats.toString({
    cache: true,
    chunkModules: false,
    colors: true,
    hash: false,
    version: false,
  }));

  counter = 0;
});
