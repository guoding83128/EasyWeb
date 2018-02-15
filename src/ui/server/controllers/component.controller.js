import React from 'react';
import nunjucks from 'nunjucks';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import cuid from 'cuid';
import { getStore } from '@client/redux-state';

const clientRenderingTemplate = `
  <div id="{{ __id__ }}"></div>

  <script type="text/javascript">
    window.gd.page_components.push({
      module: '{{ module }}',
      props: {{ props | dump | safe }},
      renderTargetId: '{{ __id__ }}',
      type: '{{ type }}'
    })
  </script>
`;

const renderClient = (name, props) => nunjucks.renderString(
  clientRenderingTemplate,
  {
    __id__: `component_${cuid()}`,
    module: name,
    props,
    type: 'client'
  }
);

const universalRenderingTemplate = `
  <div id="{{ __id__ }}">{{ component | safe }}</div>

  <script type="text/javascript">
    window.gd.page_components.push({
      module: '{{ module }}',
      props: {{ props | dump | safe }},
      renderTargetId: '{{ __id__ }}',
      type: '{{ type }}'
    })
  </script>
`;

const renderUniversal = (name, props, component) => {
  const renderedComponent = renderToString(
    <Provider store={getStore()}>
      {component}
    </Provider>
  );

  return nunjucks.renderString(
    universalRenderingTemplate,
    {
      __id__: `component_${cuid()}`,
      module: name,
      props,
      component: renderedComponent,
      type: 'universal'
    }
  );
};

const renderServer = (name, props, component) => renderToStaticMarkup(component);

const renderMethod = {
  client: renderClient,
  server: renderServer,
  universal: renderUniversal
};

export default ({ type, name, props, component }) => (
  renderMethod[type](name, props, component)
);