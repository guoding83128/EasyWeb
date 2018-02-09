import ComponentController from './component.controller';

export default (props = {}) => ComponentController({
  type: 'client',
  name: 'ClientRenderComponent',
  props: props
});
