import { connect } from 'react-redux';
import { changeUniversalComponentState } from '@client/actions/render-demo.action';
import { UniversalRenderComponent } from '@ui/render-demo'

const mapDispatchToProps = dispatch => {
  return {
    onChangeState: currState => {
      dispatch(changeUniversalComponentState(currState));
    }
  }
};

const mapStateToProps = ({ renderDemo }, ownProps) => {
  return {
    ...ownProps,
    componentState: renderDemo.universalState
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniversalRenderComponent);
