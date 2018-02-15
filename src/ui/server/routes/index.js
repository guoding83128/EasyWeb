import homePage from './pages/index';
import demoPage from './pages/demo/server-render';
import {
  getContainerData,
  getUpdateData
} from './ajax/containerData';

var express = require('express');
var router = express.Router();
var error = require('./error');

/* GET home page. */
router.get('/', homePage);

// ajax call
router.get('/api/currData', getContainerData);
router.get('/api/updateData', getUpdateData);

// pages
router.get('/demo/server-render', demoPage);

/* page not found */
router.get('/*', error.returnError(404, 'No page found.'));

export default router;
