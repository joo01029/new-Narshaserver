module.exports = (sequelize, DataTypes) => {
    const clipboard = sequelize.define('clipboard', {
        boardId: {
            field: 'boardId',
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        deviceId: {
            field: 'deviceId',
            type: DataTypes.STRING(12),
            allowNull: false,
            references: {
                model: 'device',
                key: 'deviceId',
                onDeleted: 'set null',
                onUpdate: 'cascade',
            }
        },
        board: {
            field: 'board',
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            field: 'date',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.fn('NOW')
        }
    }, {
        tableName: 'clipboard',
        timestamps: false
    })
    return clipboard;
}