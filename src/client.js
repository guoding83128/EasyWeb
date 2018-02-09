import { bootPageComponents } from './client/component-loader';
import { createStore, getStore } from './client/redux-state';

createStore();

bootPageComponents();

getStore().dispatch({ type: 'INIT' });

if (module.hot) {
  module.hot.accept();
}
