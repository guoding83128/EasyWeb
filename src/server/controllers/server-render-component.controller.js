import React from 'react';
import ComponentController from './component.controller';
import { ServerRenderComponent } from '@ui/render-demo';

export default (props = {}) => ComponentController({
  type: 'server',
  name: 'ServerRenderComponent',
  props: props,
  component: <ServerRenderComponent {...props} />
});
