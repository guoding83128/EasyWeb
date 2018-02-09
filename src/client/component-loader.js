import React, { isValidElement } from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from '@client/redux-state';
import * as allComponents from '@client/component-library';

const getReactElement = ({ module, props }) => {
  let element;
  const Component = allComponents[module];
  const isReduxComponent = !isValidElement(Component);

  if (!Component) throw new Error(`Component ${module} does not exist in dictionary`);

  if (isReduxComponent) {
    element = (
      <Provider store={getStore()}>
        <Component {...props} />
      </Provider>
    );
  } else {
    element = <Component {...props} />;
  }

  return element;
};

const bootComponent = component => {
  const { renderTargetId, type } = component;
  const renderMethod = type === 'client' ? render : hydrate;

  return () => renderMethod(
    getReactElement(component),
    document.getElementById(renderTargetId)
  );
};

export const bootPageComponents = () => {
  window.gd.page_components.forEach(component => {
    window.requestAnimationFrame(bootComponent(component));
  });
};
