import { connect } from 'react-redux';
import { changeClientComponentState } from '@client/actions/render-demo.action';
import { ClientRenderComponent } from '@ui/render-demo'

const mapDispatchToProps = dispatch => {
  return {
    onChangeState: currState => {
      dispatch(changeClientComponentState(currState));
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    componentState: state.renderDemo.clientState
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRenderComponent);
