'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: '123456',
        database: 'test',
        host: "localhost",
		port: "3306",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
};

module.exports = all;