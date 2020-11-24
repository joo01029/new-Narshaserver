const express = require('express');
const router = express.Router();

const hash = require('../middleware/hash');
const user = require('../api/user');
const auth = require('../middleware/auth');


router.post('/signin', hash, user.signin, auth.authrize);
router.post('/signup', hash, user.signup);
router.post('/autosignin', auth.authmiddleware, auth.authrize);

module.exports = router;