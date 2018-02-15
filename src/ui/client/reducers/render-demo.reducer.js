import {
  CHANGE_CLIENT_COMPONENT_STATE,
  CHANGE_UNIVERSAL_COMPONENT_STATE
} from '@client/actions/render-demo.action';

const initState = {
  clientState: 'init client state',
  universalState: 'init universal state'
}

export default (state = initState, action) => {
  switch(action.type) {
    case CHANGE_CLIENT_COMPONENT_STATE:
      return {
        ...state,
        clientState: action.nextState
      };

    case CHANGE_UNIVERSAL_COMPONENT_STATE:
      return {
        ...state,
        universalState: action.nextState
      }

    default:
      return state;
  }
};