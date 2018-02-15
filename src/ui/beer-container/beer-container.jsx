import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BeerContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetContainerData();
  }

  render() {
    console.log(this.props.containerData);
    return (
      <div>
        <p>This is the beer container show page</p>
      </div>
    );
  }
}

BeerContainer.propTypes = {
  containerData: PropTypes.object.isRequired,
  onGetContainerData: PropTypes.func.isRequired
};

BeerContainer.defaultProps = {
};
