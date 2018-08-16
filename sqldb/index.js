'use strict'

var config = require('../config');
var Sequelize = require('sequelize');
var db = {
    sequelize:new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password,config.sequelize)
};
// db.User = db.sequelize.import('../model/user.js');
// db.User.findAll().then(users => {
//   console.log(users)
// })

// 如果要返回 sequelize 实例，请使用模型选项。
// 这样，你可以轻松地将查询映射到预定义的sequelize模型，例如：
// console.log("124345")
// db.sequelize
//   .query('SELECT * FROM user',{ model: db.User })
//   .then(projects => {
//     // 每个记录现在将映射到项目的模型。
//     console.log(projects)
//   })

db.User = db.sequelize.import('../model/user.js');
db.News = db.sequelize.import('../model/news.js');
db.Recruit = db.sequelize.import('../model/recruit.js');

module.exports = db;