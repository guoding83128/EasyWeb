import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  RECV_UPDATE_DATA,
  recvUpdateData,
  RECV_CONTAINER_DATA,
  recvContainerData,
  getContainerData,
  getUpdateData
} from '@client/actions/beer-containers.action';
import {
  AJAX_API_GET_CONTAINER_DATA,
  AJAX_API_GET_UPDATED_CONTAINER_DATA
} from '@client/constants/api-url';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sync action creator', () => {
  it('recv whole data action', () => {
    const data = { x: 1 };
    expect(recvContainerData(data)).toEqual({
      type: RECV_CONTAINER_DATA,
      data
    })
  });

  it('recv updated data action', () => {
    const updatedData = { x: 2 };
    expect(recvUpdateData(updatedData)).toEqual({
      type: RECV_UPDATE_DATA,
      data: updatedData
    });
  });
});

describe('async actions creator', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ containers: [], temperatureRanges: {} });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('get containers data action creator', () => {
    const recvData = { x: 1 };

    fetchMock.getOnce(AJAX_API_GET_CONTAINER_DATA, {
      body: recvData,
      headers: { 'content-type': 'application/json' }
    });

    return store.dispatch(getContainerData())
      .then(() => {
        expect(store.getActions()).toContainEqual({
          type: RECV_CONTAINER_DATA,
          data: recvData
        });
      });
    
  });

  it('get containers updated data action creator once', () => {
    const updatedData = { x: 2 };

    fetchMock.getOnce(AJAX_API_GET_UPDATED_CONTAINER_DATA, {
      body: updatedData,
      headers: { 'content-type': 'application/json' }
    });

    return store.dispatch(getUpdateData())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: RECV_UPDATE_DATA, data: updatedData }
        ]);
      });
  });

});
