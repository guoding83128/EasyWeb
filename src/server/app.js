import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import middleware from './routes/middleware';
import routes from './routes';
import error from './routes/error'

const app = express();

nunjucks.configure(path.join(__dirname, './views'), {
  autoescape: true,
  express: app,
  watch: true
});

// middleware
app.use(middleware);

// static resource
app.use('/static', express.static(path.join(__dirname, '../../build/public/static')));

// route
app.use(routes);

// error handling
app.use(error.errorHandler);

global.window = {};

export default app;
