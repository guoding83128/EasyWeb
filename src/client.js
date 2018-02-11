import { bootPageComponents } from '@client/component-loader';
import { createStore, getStore } from '@client/redux-state';
import { register } from '@client/service-worker/service-worker-init';

createStore();

bootPageComponents();

getStore().dispatch({ type: 'INIT' });

register();

if (module.hot) {
  module.hot.accept();
}
