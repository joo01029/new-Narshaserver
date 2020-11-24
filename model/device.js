module.exports = (sequelize, DataTypes) => {
    const device = sequelize.define('device', {
        deviceId: {
            field: 'deviceId',
            type: DataTypes.STRING(25),
            primaryKey: true,
            allowNUll: true
        },
        deviceName: {
            field: 'deviceName',
            type: DataTypes.STRING,
            allowNUll: false
        },
        userId: {
            field: 'userId',
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userId',
                onDeleted: 'cascade'
            }
        },
        typeId: {
            field: 'typeId',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'deviceType',
                key: 'typeId',
                onDeleted: 'cascade'
            }
        }
    }, {
        tableName: 'device',
        timestamps: false
    })
    return device;
}