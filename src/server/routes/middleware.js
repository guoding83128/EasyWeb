import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// add your middleware before routing here

const initLocals = (req, res, next) => {
  res.locals.preloadedState = {};
  res.locals.config = {};
  next();
};

export default [
  logger('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  cookieParser(),
  initLocals
];
