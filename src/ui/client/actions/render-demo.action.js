export const CHANGE_CLIENT_COMPONENT_STATE = 'CHANGE_CLIENT_COMPONENT_STATE';
export const changeClientComponentState = currState => ({
  type: CHANGE_CLIENT_COMPONENT_STATE,
  nextState: new Date().toGMTString()
});

// async
export const CHANGE_UNIVERSAL_COMPONENT_STATE = 'CHANGE_UNIVERSAL_COMPONENT_STATE';
export const changeUniversalComponentState = currState => dispatch => {
  setTimeout(() => {
    dispatch({
      type: CHANGE_UNIVERSAL_COMPONENT_STATE,
      nextState: new Date().toGMTString()
    })
  }, 1000);
};
