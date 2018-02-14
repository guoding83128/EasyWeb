export const beerBrand = [
  'Pilsner',
  'IPA',
  'Lager',
  'Stout',
  'Wheat beer',
  'Pale Ale'
];

Object.freeze(beerBrand);

export const beerTemperatureRanges = {
  Pilsner: { min: -4, max: 6 },
  IPA: { min: -5, max: 6 },
  Lager: { min: -4, max: 7 },
  Stout: { min: -6, max: 8 },
  'Wheat beer': { min: -3, max: 5 },
  'Pale Ale': { min: -4, max: 6 }
};

Object.freeze(beerTemperatureRanges);
