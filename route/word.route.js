const { response } = require('express');
const express = require('express');
const router = express.Router();
const wordController = require('../controller/word.controller');


router.get('/', wordController.getAllWords);
router.get('/', wordController.createWord);



module.exports = router;