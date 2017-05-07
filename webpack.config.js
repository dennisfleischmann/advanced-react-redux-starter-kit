const path = require('path');

module.exports = {
  entry:
    './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/',

  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    port: 9000,
    inline: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  devtool: 'source-map',
};
