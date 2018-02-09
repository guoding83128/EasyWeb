import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './render-demo.css';

export default class ClientRenderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ clicked: true });

    this.props.onChangeState(this.props.componentState);
  }

  render() {
    const buttonText = this.state.clicked
      ? this.props.componentState
      : 'Click me to see the state changing';

    return (
      <div className="base">
        <p>This is the client-side rendering component</p>
        <button className="button" onClick={e => this.handleClick(e)}>{buttonText}</button>
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
