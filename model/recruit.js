'use strict'
module.exports = function(sequelize,DataTypes){
    var Recruit = sequelize.define('recruit',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        isNow:{
            type:DataTypes.STRING
        },
        date:{
            type:DataTypes.DATE
        },
        positionName:{
            type:DataTypes.STRING
        },
        requirements:{
            type:DataTypes.TEXT('long')
        },
        positionContent:{
            type:DataTypes.TEXT('long')
        },
        department:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName: true
    });

    Recruit.deleteById = function(id){
        return this.destroy({
            where: {
                id: id
            }
        })
    }

    Recruit.getUserById=function(id) {
        return this.findById(id);
    }

    Recruit.updateUserById = function(values, id) {
        return this.update(values, {
            where: {
                id: id
            }
        });
    }

    // // force: true 如果表已经存在，将会丢弃表
    // Recruit.sync({force: false}).then(() => {
    //   // 表已创建
      
    // });

    return Recruit;
};






