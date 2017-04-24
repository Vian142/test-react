var path = require('path');
var webpack = require('webpack');
var postCSSConfig = require('./postcss.config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './src')
    },
    {
      test: /\.css$/,
      loader: 'style!css?camelCase&sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss',
      exclude: /node_modules.*\.css$|(\_+\w+\.css$)/,
      include: path.join(__dirname, './src')
    },
    {
      test: /node_modules.*\.css$|(\_+\w+\.css$)/,
      loader: 'style!css!postcss'
    }]
  },
  postcss() {
    return postCSSConfig;
  }
};
