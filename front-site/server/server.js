import path from 'path';
import webpack from 'webpack';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import configApp from '../webpack.config';

///////////////////////////////////////////////////////////////////////////////
// Controllers
let Tests = require('./controllers/test.controller');
///////////////////////////////////////////////////////////////////////////////
const app = express();
let compiler = webpack(configApp);

const port = 4010;
///////////////////////////////////////////////////////////////////////////////
// Подключение к базе
mongoose.connect(config.db.url + config.db.name, (error) => {
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger());
app.use(compression());
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: configApp.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

///////////////////////////////////////////////////////////////////////////////
// Роутеры

app.get('/tests', Tests.getTests);

app.post('/addtest', Tests.addTest);


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
