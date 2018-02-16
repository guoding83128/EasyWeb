import { createStore } from '@client/redux-state';
import BeerContainers from '@server/controllers/beer-containers.controller';

export default (req, res, next) => {
  createStore(res.locals.preloadedState);
  res.locals.BeerContainers = BeerContainers();
  res.render('pages/index.html');
};
