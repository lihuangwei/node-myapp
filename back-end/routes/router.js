let express = require('express');
let router = express.Router();
let goods = require('../controls/goods');

router.get('/goods-list', goods.getGoodsList);

module.exports = router;