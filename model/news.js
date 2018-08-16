'use strict'
module.exports = function(sequelize,DataTypes){
    var News = sequelize.define('news',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        title:{
            type:DataTypes.STRING
        },
        date:{
            type:DataTypes.DATE
        },
        detail:{
            type:DataTypes.STRING
        },
        img:{
            type:DataTypes.TEXT('long')
        },
        imgUrl:{
            type:DataTypes.STRING
        },
        type:{
            type:DataTypes.INTEGER
        }
    },{
        freezeTableName: true
    });

    News.deleteById = function(id){
        return this.destroy({
            where: {
                id: id
            }
        })
    }

    News.getUserById=function(id) {
        return this.findById(id);
    }

    News.updateUserById = function(values, id) {
        return this.update(values, {
            where: {
                id: id
            }
        });
    }

    // // force: true 如果表已经存在，将会丢弃表
    // News.sync({force: false}).then(() => {
    //   // 表已创建
      
    // });

    return News;
};






