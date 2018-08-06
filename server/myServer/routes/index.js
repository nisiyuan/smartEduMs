var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//ceshi
var _mysql = require('mysql');
var mysql = _mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password: 'admin',
    port:'3306',
    database:'edudb',
});
mysql.connect(function(err){
    if(err){
        console.log(err)
        console.log("连接失败了")
        return
    }
    console.log("连接成功了")
})
router.get('/login',(req,res) => {
    var query = req.query;
    console.log(query)
    //var _sql = "SELECT * FROM userinfo Where "+"user_name='"+Json.user_name+"'AND password='"+Json.password+"'";
    var _sql = "SELECT * from user_info Where id='"+query.user_name+"' AND pwd='"+query.password+"'";
    console.log(_sql)
    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {

        }
        if(err){
            console.log(err)
            data={
                errcode: 10000,
                errmsg:err
            }
            return
    
        }
        if(rows.length == 0){
            data={
                errcode: 10001,
                errmsg:"用户名或密码错误"
            }
        }else{
            data={
                errcode:0,
                data:{
                    type:rows[0].type
                }
            }
            //data.data[0].password="******";
        }
        res.send(data)
    }) 
})

// 获取学生信息
router.get('/stuinfo',(req,res) => {
    var query = req.query;
    console.log(query)
    //var _sql = "SELECT * FROM userinfo Where "+"user_name='"+Json.user_name+"'AND password='"+Json.password+"'";
    var _sql = "SELECT * from stu_info";
    console.log(_sql)
    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {

        }
        if(err){
            console.log(err)
            data={
                errcode: 10000,
                errmsg:err
            }
            return
        }
        data={
            errcode:0,
            list:rows
        }
        res.send(data)
    }) 
})

// 获取教师信息
router.get('/teacherinfo',(req,res) => {
    var query = req.query;
    console.log(query)
    var _sql = "SELECT id,name,school,contact from user_info Where type!='1'";
    console.log(_sql)
    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {

        }
        if(err){
            console.log(err)
            data={
                errcode: 10000,
                errmsg:err
            }
            return
        }
        data={
            errcode:0,
            list:rows
        }
        res.send(data)
    }) 
})

// 获取成绩信息
router.get('/scoreinfo',(req,res) => {
    var query = req.query;
    console.log(query)
    var _sql = "SELECT * from score_info";
    console.log(_sql)
    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {

        }
        if(err){
            console.log(err)
            data={
                errcode: 10000,
                errmsg:err
            }
            return
        }
        data={
            errcode:0,
            list:rows
        }
        res.send(data)
    }) 
})

// 获取成绩信息
router.get('/treeinfo',(req,res) => {
    var query = req.query;
    var _sql = "SELECT * from course_info";
    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {
        }
        if(err){
            console.log(err)
            data={
                errcode: 10000,
                errmsg:err
            }
            return
        }
        data={
            errcode:0,
            list:rows
        }
        res.send(data)
    }) 
})

// 获取课程信息
router.get('/coursedetail',(req,res) => {
    var query = req.query;
    var _sql = "SELECT * from question_info Where courseid='"+query.courseId+"'";

    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {
        }
        if(err){
            console.log(err)
            data={
                errcode: 10000,
                errmsg:err
            }
            return
        }
        data={
            errcode:0,
            list:rows
        }
        res.send(data)
    }) 
})

// mysql.end(function(err){
//     if(err){
//         return;
//     }
//     console.log("close succeed")
// })
//ceshi



module.exports = router;
