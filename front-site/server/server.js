var path = require('path');
var webpack = require('webpack');
var express = require('express');
var compression = require('compression');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var configApp = require('../webpack.config');
///////////////////////////////////////////////////////////////////////////////
var addTest = require('./controllers/test.controller');
///////////////////////////////////////////////////////////////////////////////
var app = express();
var compiler = webpack(configApp);

const port = 4010;
///////////////////////////////////////////////////////////////////////////////
// Подключение к базе
mongoose.connect(config.mongoURL + config.DB, (error) => {
  if (error) {
    console.error('MongoDB error connect'); // eslint-disable-line no-console
    throw error;
  }
  console.log('MongoDB connect success');
});

///////////////////////////////////////////////////////////////////////////////
// Публичные директории
app.use('/images', express.static(path.join(__dirname, '../public/images'), { maxAge: '365 days' }));

///////////////////////////////////////////////////////////////////////////////
// Middleware
app.use(logger());
app.use(compression());
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: configApp.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

///////////////////////////////////////////////////////////////////////////////
// Роутеры

app.post('/addtest', addTest);


///////////////////////////////////////////////////////////////////////////////
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
