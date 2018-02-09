import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { base } from './render-demo.css';

export default class ClientRenderComponent extends Component {
  handleClick(e) {
    e.preventDefault();

    this.props.onChangeState(this.props.componentState);
  }

  render() {
    console.log(base);
    return (
      <div className={base} onClick={e => this.handleClick(e)}>
        <p>This is the client-side rendering component</p>
        <p>Click me to see the state changing</p>
        <p>{this.props.componentState}</p>
      </div>
    );
  }
}

ClientRenderComponent.propTypes = {
  componentState: PropTypes.string,
  onChangeState: PropTypes.func.isRequired
};

ClientRenderComponent.defaultProps = {
  componentState: ''
};
