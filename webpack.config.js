var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
// var postCSSConfig = require('./postcss.config')
///////////////////////////////////////////////////////////////////////////////
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
///////////////////////////////////////////////////////////////////////////////
const isHot = !!process.env.HOT;

module.exports = {
  devtool: 'source-map',
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
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'react',
          'stage-0'
        ]
      },
      include: [
        path.resolve(__dirname, './src/')
      ]
    },
    {
      test: /\.css$/,
      loader: [
        'style-loader', 'css-loader?camelCase&modules' +
        '&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
        'source-map-loader', 'postcss-loader'
      ],
      exclude: /node_modules.*\.css$|(\_+\w+\.css$)/,
      include: path.join(__dirname, './src')
    },
    {
      test: /node_modules.*\.css$|(\_+\w+\.css$)/,
      loader: 'style-loader!css-loader'
    },
    { 
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader",
      options: {
        name: '[name]-[hash].[ext]',
        outputPath: 'fonts/'
      }
    },
    { 
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader",
      options: {
        name: '[name]-[hash].[ext]',
        outputPath: 'fonts/'
      }
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }, {
      test: /\.ico$/,
      loader: 'file-loader?name=images/[name].[ext]'
    }, {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'),
      loader: 'file-loader?name=images/[name]-[hash].[ext]'
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
