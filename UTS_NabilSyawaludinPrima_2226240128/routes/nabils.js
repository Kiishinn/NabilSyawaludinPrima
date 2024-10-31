var express = require('express');
var router = express.Router();
const NabilController = require('../controller/nabil');

router.post('/', NabilController.createdNabil)

module.exports = router;