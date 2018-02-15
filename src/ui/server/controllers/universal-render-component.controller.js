import React from 'react';
import ComponentController from './component.controller';
import UniversalRenderComponent from '@client/connectors/universal-render-component.connector';

export default (props = {}) => ComponentController({
  type: 'universal',
  name: 'UniversalRenderComponent',
  props: props,
  component: <UniversalRenderComponent {...props} />
});
