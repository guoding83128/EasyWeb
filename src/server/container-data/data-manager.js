import events from 'events';
import { getMockData, mockDataInit } from './mock-data';

let messageBus;

const EVENT_NEW_DATA = 'EVENT_NEW_DATA';

export const dataEventInit = () => {
  if (messageBus) {
    messageBus.removeAllListeners();
  }
  messageBus = new events.EventEmitter();
  messageBus.setMaxListeners(50);

  mockDataInit();
};

export const waitUpdataData = () => {
  return new Promise((resolve, reject) => {
    try {
      messageBus.once(EVENT_NEW_DATA, newData => {
        // console.log('recv', newData);
        resolve(newData);
      });
    } catch(err) {
      reject(err);
    }
  });
};

export const pushUpdateData = newData => {
  messageBus.emit(EVENT_NEW_DATA, newData);
};

export const getCurrentData = () => {
  // get real data from device
  // here we fetch data from mock data stream
  return Promise.resolve(getMockData());
};
