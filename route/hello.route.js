const { response } = require('express');
const express = require('express');
const router = express.Router();
const helloController = require('../controller/hello.controller');


router.get('/', helloController.hello);
router.get('/temp', helloController.temp);


module.exports = router;