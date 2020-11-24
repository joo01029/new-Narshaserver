module.exports = (sequelize, DataTypes)=>{
    const clipboard = sequelize.define('clipboard',{
        boardId:{
            field:'boardId',
            type:DataTypes.INTEGER,
            autoincrement:true,
            primaryKey:true
        },
        deviceId:{
            field:'deviceId',
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'device',
                key:'deviceId',
                onDeleted:'set null'
            }
        },
        board:{
            field:'board',
            type:DataTypes.STRING,
            allowNull:false
        },
        date:{
            field:'data',
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.fn('NOW')
        }
    })
    return clipboard;
}