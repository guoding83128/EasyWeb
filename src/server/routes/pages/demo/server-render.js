import ServerRenderComponent from '@server/controllers/server-render-component.controller';
import ClientRenderComponent from '@server/controllers/client-render-component.controller';
import UniversalRenderComponent from '@server/controllers/universal-render-component.controller';
import { createStore } from '@client/redux-state';

export default (req, res, next) => {
  createStore(res.locals.preloadedState);
  res.locals.ServerRenderComponent = ServerRenderComponent();
  res.locals.ClientRenderComponent = ClientRenderComponent();
  res.locals.UniversalRenderComponent = UniversalRenderComponent();
  res.render('pages/demo.html');
};
