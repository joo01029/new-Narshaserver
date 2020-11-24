const device = require('express').Router();
const Device = require('../api/device');
const auth = require('../middleware/auth');

device.post('/device', auth.authmiddleware, Device.deviceInsert);
device.get('/device', auth.authmiddleware, Device.deviceSelect);

module.exports = device;