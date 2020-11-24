const model = require('../model/dbcon');
const tokenI = require('../middleware/auth');

exports.deviceInsert = async (req, res, next) => {
    console.log(req.body);
    const { userId, deviceName, deviceId, typeId } = req.body;

    try {

        let deviceCheck = await model.Device.findOne({
            where: {
                deviceName: deviceName,
                userId: userId,
            }
        });

        if (deviceCheck) {
            return res.status(401).json({
                message: '이미 존재하는 디바이스명',
                code: 401,
            })
        }

        await model.Device.create({
            deviceName: deviceName,
            userId: userId,
            deviceId: deviceId,
            typeId: typeId,
        });

        console.log('디바이스 등록 성공');
        return res.status(200).json({
            message: '디바이스 등록 성공',
            code: 200,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: '서버 오류',
        });
    }
}