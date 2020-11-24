const jwt = require('jsonwebtoken');
const user = require('../model/user');
const secrete = "shareboard";

exports.authrize = (req, res, next) => {
    const userId = req.body.userId;
    let extime = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60)
    jwt.sign({
        sub: userId,
        iat: Math.floor(Date.now() / 1000),
        exp: extime
    }, secrete, (err, token) => {
        if (err) {
            res.status(500).json({
                message: 'server can`t make token'
            })
        } else {
            res.json({
                result: 1,
                token,
                userId: userId
            })
        }
    })
}

exports.authmiddleware = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers['authorization'];


    if (!token) {
        console.log('no token');
        res.json({
            result: 0
        })
    }

    try {
        const decodedToken = jwt.verify(token, secrete);
        const userId = decodedToken.sub;
        console.log('auto login', userId);
        req.body.userId = userId;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            result: 0
        })
    }
}