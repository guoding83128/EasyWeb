import beerContainersReducer from '@client/reducers/beer-containers.reducer';
import {
  RECV_UPDATE_DATA,
  RECV_CONTAINER_DATA
} from '@client/actions/beer-containers.action';

describe('beer container reducer logic', () => {
  let initState;

  beforeEach(() => {
    initState = { x: 0 };
  });

  it('receive container data', () => {
    const action = { type: RECV_CONTAINER_DATA, data: { x: 1 } };

    expect(beerContainersReducer(initState, action)).toEqual({ x: 1 });
  });

  it('receive updated data', () => {
    const action = { type: RECV_UPDATE_DATA, data: { x: 2 } };

    expect(beerContainersReducer(initState, action)).toEqual({ x: 2 });
  });
});
