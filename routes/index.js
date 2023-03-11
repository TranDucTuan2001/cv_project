var express = require('express');
var router = express.Router();
var mainCotroller = require('../controller/index')
/* GET home page. */
router.get('/',mainCotroller.index);

module.exports = router;
