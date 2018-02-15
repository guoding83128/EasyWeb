import { connect } from 'react-redux';
import { getContainerData } from '@client/actions/beer-containers.action';
import { BeerContainer } from '@ui/beer-container'

const mapDispatchToProps = dispatch => {
  return {
    onGetContainerData: () => {
      dispatch(getContainerData());
    }
  }
};

const mapStateToProps = ({ beerContainers }, ownProps) => {
  return {
    ...ownProps,
    containerData: beerContainers
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerContainer);
