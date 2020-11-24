const model = require('../model/dbcon');

exports.signin = async (req, res, next) => {
    const { userId, hashPassword } = req.body;
    console.log(hashPassword)
    try {
        const finduser = await model.User.findOne({ raw: true, where: { userId: userId } });
        if (!finduser) {
            console.log('can`t found user');
            res.status(401).json({
                result: 0,
                message: "can't found userId"
            })
        }
        if (finduser.password == hashPassword) {
            next();
        } else {
            res.status(401).json({
                result: 0,
                message: 'password wrong'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            result: 0,
            message: 'server has error'
        })
    }
}

exports.signup = async (req, res, next) => {
    const { userId, hashPassword } = req.body;
    try {
        const finduser = await model.User.findOne({ raw: true, where: { userId: userId } });
        if (finduser) {
            console.log('user is already exists');
            res.status(401).json({
                result: 0,
                message: 'user is already exists'
            })
        }
        const createuser = await model.User.create({ userId: userId, password: hashPassword })
        res.json({
            result: 1
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            result: 0,
            message: 'server has error'
        })
    }
}