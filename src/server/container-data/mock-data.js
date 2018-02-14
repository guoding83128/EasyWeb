import { beerBrand, beerTemperatureRanges } from './constant';
import { pushUpdateData } from './data-manager';

let mockData;

const setNextUpdate = () => {
  setTimeout(() => {
    pushUpdateData({ y: new Date() });
    setNextUpdate();
  }, 5000);
}

export const mockDataInit = () => {
  mockData = {
    x: 1
  };

  setNextUpdate();
};

export const getMockData = () => mockData;
