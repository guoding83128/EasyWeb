import React, { Component } from 'react';
import ReactLogo from '@ui/common/react-logo';
import './render-demo.css';

export default class ServerRenderComponent extends Component {
  renderLogo() {
    return <div className="logo"><ReactLogo /></div>;
  }

  render() {
    return (
      <div className="base server">
        {this.renderLogo()}
        <p>This is the server-side rendering component</p>
      </div>
    );
  }
}
