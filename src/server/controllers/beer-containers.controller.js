import React from 'react';
import ComponentController from './component.controller';
import BeerContainers from '@client/connectors/beer-containers.connector';

export default (props = {}) => ComponentController({
  type: 'universal',
  name: 'BeerContainers',
  props: props,
  component: <BeerContainers {...props} />
});
