var path = require('path');
var webpack = require('webpack');
var express = require('express');
var compression = require('compression');
var configApp = require('./config');
var config = require('../webpack.config');
///////////////////////////////////////////////////////////////////////////////
var app = express();
var compiler = webpack(config);

const port = 4010;
///////////////////////////////////////////////////////////////////////////////



app.use('/images', express.static(path.join(__dirname, '../public/images'), {maxAge: '365 days'}));
///////////////////////////////////////////////////////////////////////////////
app.usee(compression());
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
///////////////////////////////////////////////////////////////////////////////
app.get('/*', function(req, res) {
  console.log(`Запрос ${req.url}`);
  res.sendFile(path.join(__dirname, '../index.html'));
});
///////////////////////////////////////////////////////////////////////////////
app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Запущен на http://localhost:${port}/`);
});
