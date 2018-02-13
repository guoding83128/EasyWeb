import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLogo from '@ui/common/react-logo';
import './render-demo.css';

export default class UniversalRenderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ clicked: true });

    this.props.onChangeState(this.props.componentState);
  }

  renderLogo() {
    return <div className="logo"><ReactLogo /></div>;
  }

  render() {
    const buttonText = this.state.clicked
      ? this.props.componentState
      : 'Click me to see the state changing';

    return (
      <div className="base universal">
        {this.renderLogo()}
        <p>This is the universal rendering component</p>
        <button className="button" onClick={e => this.handleClick(e)}>{buttonText}</button>
      </div>
    );
  }
}

UniversalRenderComponent.propTypes = {
  componentState: PropTypes.string,
  onChangeState: PropTypes.func.isRequired
};

UniversalRenderComponent.defaultProps = {
  componentState: ''
};
