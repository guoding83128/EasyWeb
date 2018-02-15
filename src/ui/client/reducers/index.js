import { combineReducers } from 'redux';
import renderDemo from './render-demo.reducer'
import beerContainers from './beer-containers.reducer';

export default combineReducers({
  renderDemo,
  beerContainers
});
