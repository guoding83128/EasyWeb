import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import middleware from './routes/middleware';
import routes from './routes';
import error from './routes/error'
import { dataEventInit } from '@server/container-data/data-manager';

export default appRootDir => {
  global.window = {};

  const app = express();

  nunjucks.configure(path.join(__dirname, './views'), {
    autoescape: true,
    express: app,
    watch: true
  });

  // data event
  dataEventInit();

  // middleware
  app.use(middleware);

  // static resource
  app.use(express.static(`${appRootDir}/build/public`));
  app.use('/static', express.static(`${appRootDir}/build/public/static`));

  // route
  app.use(routes);

  // error handling
  app.use(error.errorHandler);

  return app;
};
