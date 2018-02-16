import { beerBrand, beerTemperatureRanges } from './constant';
import { pushUpdateData } from './data-manager';

let mockData;

const getRandNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandBeer = () => beerBrand[getRandNum(0, beerBrand.length - 1)];

const getRandTemperature = () => getRandNum(-8, 10);

const getRandTemperatureInRange = brand => (
  getRandNum(beerTemperatureRanges[brand].min, beerTemperatureRanges[brand].max)
);

const getOneBeerContainer = (id, brand, temperature) => {
  const selectBrand = brand || getRandBeer();
  return {
    containerId: id.toString(),
    brand: selectBrand,
    temperature: temperature || getRandTemperatureInRange(selectBrand)
  };
};

const mayUpdateData = () => {
  let changed = false;

  // 50% possibility not update
  if (Math.random() >= 0.5) {
    const selectContainer = mockData.containers[
      Math.floor(Math.random() * mockData.containers.length)
    ];
    const newTemperature = getRandTemperature();

    changed = newTemperature !== selectContainer.temperature;
    selectContainer.temperature = newTemperature;
  }

  return changed;
}

const setNextUpdate = () => {
  setTimeout(() => {
    if (mayUpdateData()) {
      pushUpdateData({ ...mockData });
    }
    setNextUpdate();
  }, 5000);
}

export const mockDataInit = () => {
  mockData = {
    containers: [
      getOneBeerContainer(1),
      getOneBeerContainer(2),
      getOneBeerContainer(3),
      getOneBeerContainer(4),
      getOneBeerContainer(5),
      getOneBeerContainer(6),
      getOneBeerContainer(7),
      getOneBeerContainer(8),
      getOneBeerContainer(9),
      getOneBeerContainer(10),
      getOneBeerContainer(11),
      getOneBeerContainer(12)
    ],
    temperatureRanges: beerTemperatureRanges
  };



  setNextUpdate();
};

export const getMockData = () => mockData;
