import { createStore } from '@client/redux-state';
import BeerContainer from '@server/controllers/beer-containers.controller';

export default (req, res, next) => {
  createStore(res.locals.preloadedState);
  res.locals.BeerContainer = BeerContainer();
  res.render('pages/index.html');
};
