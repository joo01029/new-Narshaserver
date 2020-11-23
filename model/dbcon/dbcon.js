const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'shareboard',
    'root',
    'pure6671',
    {
        host:'localhost',
        dialect:'mysql',
    }
)

const user = require('./user');
const deviceType = require('./deviceType');
const device = require('./device');
const clipboard = require('./clipboard');

module.exports = {
    User:user(sequelize, Sequelize),
    DeviceType: deviceType(sequelize, Sequelize),
    Device:device(sequelize, Sequelize),
    Clipboard:clipboard(sequelize, Sequelize)
}

sequelize.sync()
    .then(()=>{
        console.log('database sync');
    })
    .catch((err)=>{
        console.log(err);
    })