import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './container.css';

export default class BeerContainer extends Component {
  render() {
    const { min, max } = this.props.temperatureRanges[this.props.brand];
    let level = 'normalColor';
    if (this.props.temperature < min) {
      level = 'frozenColor';
    } else if (this.props.temperature > max) {
      level = 'hotColor';
    } else if (this.props.temperature === min) {
      level = 'coldColor';
    } else if (this.props.temperature === max) {
      level = 'warmColor';
    }

    return (
      <div className={`containerBase ${level}`}>
        <p className="containerTitle">{`Container-${this.props.containerId}`}</p>
        <p className="containerSubTitle">{`BEER ${this.props.brand}`}</p>
        <p className="temperature">{this.props.temperature} &#8457;</p>
      </div>
    );
  }
}

BeerContainer.propTypes = {
  temperatureRanges: PropTypes.object.isRequired,
  containerId: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
};

BeerContainer.defaultProps = {
};
