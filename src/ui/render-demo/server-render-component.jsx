import React, { Component } from 'react';
import './render-demo.css';

export default class ServerRenderComponent extends Component {
  render() {
    return (
      <div className="base">
        <p>This is the server-side rendering component</p>
      </div>
    );
  }
}
