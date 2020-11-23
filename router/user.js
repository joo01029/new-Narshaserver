const express = require('express');
const router = express.Router();

const hash = require('../middleware/hash');
const user = require('../model/user');
const auth = require('../middleware/auth');


router.post('/signin', hash, user.signin, auth.authrize);
router.post('/signup', hash, user.signup);
router.post('/autosignin', aut,h.authmiddleware, auth.authrize);

module.exports = router;