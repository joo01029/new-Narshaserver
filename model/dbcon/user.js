module.exports = (sequelize, DataTypes)=>{
    const user = sequelize.define('user',{
        userId:{
            field:'userId',
            type:DataTypes.STRING,
            primaryKey:true
        },
        password:{
            field:'password',
            type:DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName:'user',
        timestamps:false,
    })
    return user;
}