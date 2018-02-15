const longPolling = () => dispatch => {
  fetch('/api/updateData')
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      dispatch(recvUpdateData(data));
    })
    .catch(err => {
      console.error('getUpdateData error', err);
    })
    .finally(() => {
      longPolling()(dispatch);
    });
};

export const RECV_UPDATE_DATA = 'RECV_UPDATE_DATA';
export const recvUpdateData = data => ({
  type: RECV_UPDATE_DATA,
  data
});

export const getUpdateData = () => dispatch => {
  longPolling()(dispatch);
};

export const RECV_CONTAINER_DATA = 'RECV_CONTAINER_DATA';
export const recvContainerData = data => ({
  type: RECV_CONTAINER_DATA,
  data
});

export const getContainerData = () => dispatch => {
  fetch('/api/currData')
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      // receive first whole data
      dispatch(recvContainerData(data));

      // set-up long-polling connection
      dispatch(getUpdateData());
    })
    .catch(err => {
      console.error('getContainerData error', err);
    });
};
