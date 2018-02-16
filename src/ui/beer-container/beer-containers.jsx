import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './beer-container';
import './container.css';

export default class BeerContainers extends Component {
  componentDidMount() {
    this.props.onGetContainerData();
  }

  render() {
    const { containers, temperatureRanges } = this.props.containerData;
    return (
      <div className="containersBase">
        <p className="containersTitle">Welcome to Beer Container online system</p>

        <div className="containerColors">
          <div className="normalColor color">
            Normal Temperature (Good)
          </div>
          <div className="warmColor color">
            A little bit warm
          </div>
          <div className="coldColor color">
            A little bit cold
          </div>
          <div className="hotColor color">
            HOT!
          </div>
          <div className="frozenColor color">
            FROZEN!
          </div>
        </div>

        <div className="containersGrid">
          {
            containers.map((container,idx) => (
              <Container key={idx} {...container} temperatureRanges={temperatureRanges} />
            ))
          }
        </div>
      </div>
    );
  }
}

BeerContainers.propTypes = {
  containerData: PropTypes.shape({
    containers: PropTypes.array,
    temperatureRanges: PropTypes.object
  }).isRequired,
  onGetContainerData: PropTypes.func.isRequired
};

BeerContainers.defaultProps = {
};
