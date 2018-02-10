import React, { Component } from 'react';
import './render-demo.css';
import logo from './react.svg';

export default class ServerRenderComponent extends Component {
  render() {
    return (
      <div className="base server">
        <img src={logo} className="logo" alt="logo" />
        <p>This is the server-side rendering component</p>
      </div>
    );
  }
}
