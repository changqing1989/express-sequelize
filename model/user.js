'use strict'
module.exports = function(sequelize,DataTypes){
    var User = sequelize.define('user',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        name:{
            type:DataTypes.STRING
        },
        pwd:{
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.INTEGER
        },
        height:{
            type:DataTypes.INTEGER
        },
        weight:{
            type:DataTypes.INTEGER
        }
    },{
        freezeTableName: true
        // classMethods: {
        //     deleteById:function(){
        //         return "dd";
        //     }
        // },
    });

    User.deleteById = function(id){
        return this.destroy({
            where: {
                id: id
            }
        })
    }

    User.getUserById=function(id) {
        return this.findById(id);
    }

    User.updateUserById = function(values, id) {
        return this.update(values, {
            where: {
                id: id
            }
        });
    }


    User.findAll_ = function(){
        debugger;

        return this.findAndCountAll({
            offset: 2,
            limit: 2
        })
    }
    
    return User;
};



//静态方法
const classMethods = {
    //根据id查询
    getUserById: function(id) {
        return this.findById(id);
    },
    //获取所有
    getUsers: function(options) {
        debugger;
        return this.findAll(options);
    },
    //根据id更新数据
    updateUserById: function(values, id) {
        return this.update(values, {
            where: {
                id: id
            }
        });
    },
    //根据id删除数据
    deleteById: function(id) {
        return this.destroy({
            where: {
                id: id
            }
        })
    }
}