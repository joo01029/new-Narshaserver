const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'shareboard',
    'root',
    'pure6671',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)
let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.deviceType = require('./deviceType')(sequelize, Sequelize);
db.device = require('./device')(sequelize, Sequelize);
db.clipboard = require('./clipboard')(sequelize, Sequelize);


db.device.belongsTo(db.user, {
    foreigKey: 'userId'
})

db.device.belongsTo(db.deviceType, {
    foreigKey: 'typeId'
})

db.clipboard.belongsTo(db.device,{
    foreignKey: 'deviceId'
})

module.exports = db;

sequelize.sync()
    .then(() => {
        console.log('database sync');
    })
    .catch((err) => {
        console.log(err);
    })