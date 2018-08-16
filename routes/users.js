var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// var News  = require('../model/user');
var sqldb = require('../sqldb');

var User = sqldb.sequelize.import("../model/user");


// 增
router.put('/addUser',function(req,res){
    var form = req.body;
    // form.name = "cq";
    User.create(form).then(function(data){
        res.status(201).json(data);
    });
})

// 删
router.delete('/delete/:id',function(req,res){
    var id = req.params.id;
    // form.name = "cq";
    User.deleteById(id).then(function(data){
        res.status(200).json(data);
    });
})

// 查
router.get('/find/:id',function(req,res){
    var id = req.params.id;
    // form.name = "cq";
    User.getUserById(id).then(function(data){
        res.status(200).json(data);
    });
})

// 改
router.post('/updateUser',function(req,res){
    var form = req.body;
    // form.name = "cq";
    User.updateUserById(form,form.id).then(function(data){
        res.status(200).json(data);
    });
})


// 分页查询
router.get("/findAll",function(req,res){

    User.findAll_().then(result => {
        debugger;

        console.log(result.count);
        console.log(result.rows);

        res.status(200).json(result);
    })


})

module.exports = router;
