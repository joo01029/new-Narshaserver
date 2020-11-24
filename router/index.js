const express = require('express');
const router = express.Router();

const user = require('./user');
const device = require('./device');
router.use(user);
router.use(device);

module.exports = router;