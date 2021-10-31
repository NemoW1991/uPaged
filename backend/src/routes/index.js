const express = require('express');

const shiftController = require('../controller')

const router = express.Router();

router.get('/shifts', shiftController.index );

module.exports = router;