const model = require('./dbcon/dbcon');
const tokenI = require('../middleware/auth');

exports.deviceinsert = (req, res, next) => {
    const body = req;
    const token = req.headers['authorization'];

    try {
        const decoded = await tokenI.verifyToken(token);
    }
}