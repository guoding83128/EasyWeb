import {
  RECV_CONTAINER_DATA,
  RECV_UPDATE_DATA
} from '@client/actions/beer-containers.action';

const initState = { containers: [], temperatureRanges: {} };

export default (state = initState, action) => {
  switch(action.type) {
    case RECV_CONTAINER_DATA:
    case RECV_UPDATE_DATA:
      return { ...action.data };

    default:
      return state;
  }
};
