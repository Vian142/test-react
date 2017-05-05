var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var postCSSConfig = require('./postcss.config')
///////////////////////////////////////////////////////////////////////////////
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
///////////////////////////////////////////////////////////////////////////////
const isHot = !!process.env.HOT;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: _.compact([
      isHot && 'webpack-hot-middleware/client',
      path.join(__dirname, '/src/client')
    ])
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './src')
    },
    {
      test: /\.css$/,
      loader: 'style!css?camelCase&sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss?sourceMap',
      exclude: /node_modules.*\.css$|(\_+\w+\.css$)/,
      include: path.join(__dirname, './src')
    },
    {
      test: /node_modules.*\.css$|(\_+\w+\.css$)/,
      loader: 'style!css!postcss'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=fonts/[name]-[hash].[ext]&limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=fonts/[name]-[hash].[ext]&limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=fonts/[name]-[hash].[ext]&limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=fonts/[name]-[hash].[ext]'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=fonts/[name]-[hash].[ext]&limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.ico$/,
      loader: 'file?name=images/[name].[ext]'
    }, {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'),
      loader: 'file?name=images/[name]-[hash].[ext]'
    }]
  },
  postcss(bundler) {
    return {
      plugins: [
        /* autoprefix for different browser vendors */
        require('autoprefixer'),
        /* reset inherited rules */
        require('postcss-initial')({
          reset: 'inherited' // reset only inherited rules
        }),
        /* enable css @imports like Sass/Less */
        require('postcss-nested'),
        require('postcss-import')({
          root: path.join(__dirname),
          path: ['src/theme']
        }),
        require("postcss-cssnext")
      ]
    }
  }
};
