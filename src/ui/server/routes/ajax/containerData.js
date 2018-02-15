import {
  getCurrentData,
  waitUpdataData
} from '@server/container-data/data-manager';

export const getContainerData = (req, res, next) => {
  getCurrentData()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
};

export const getUpdateData = (req, res, next) => {
  waitUpdataData()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
};
