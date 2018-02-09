import homePage from './pages/index';
import aboutPage from './pages/about';
import demoPage from './pages/demo/server-render';

var express = require('express');
var router = express.Router();
var error = require('./error');

/* GET home page. */
router.get('/', homePage);

router.get('/about', aboutPage);

router.get('/demo/server-render', demoPage);

/* page not found */
router.get('/*', error.returnError(404, 'No page found.'));

export default router;
