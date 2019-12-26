const compression = require('compression');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const router = require('./router');

const app = express();

app.use(compression());

app.set('trust proxy', 1); // trust first proxy

const viewsPath = path.resolve('server/views');
const publicPath = path.resolve('public');

app.get('*.js.gz', (req, res, next) => {
  // req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.set('view cache', true);
app.set('views', viewsPath);
app.engine('handlebars', hbs.__express);
app.set('view engine', 'handlebars');

app.use(express.static(publicPath));

// route categories
app.use('/', router);

app.use((req, res, next) => {
  res.status(404).render('error404');
});

app.use((error, req, res) => {

  const env = req.app.get('env');

  if (env === 'development') {
    res.locals.message = error.message;
    res.locals.error = error;
    res.status(error.status || 500);
    res.render('error');
  } else {
    res.status(500).render('error500');
  }
});

module.exports = app;
