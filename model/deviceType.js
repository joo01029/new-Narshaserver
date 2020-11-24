module.exports = (sequelize, DataTypes) => {
    const deviceType = sequelize.define('deviceType', {
        typeId: {
            field: 'typeId',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        typeName: {
            field: 'typeName',
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'deviceType',
        timestamps: false
    })
    return deviceType;
}