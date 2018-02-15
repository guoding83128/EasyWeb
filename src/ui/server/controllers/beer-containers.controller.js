import React from 'react';
import ComponentController from './component.controller';
import BeerContainer from '@client/connectors/beer-containers.connector';

export default (props = {}) => ComponentController({
  type: 'universal',
  name: 'BeerContainer',
  props: props,
  component: <BeerContainer {...props} />
});
