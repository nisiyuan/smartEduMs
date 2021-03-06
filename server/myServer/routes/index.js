var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* post home page. */
router.post('/', function(req, res, next) {
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

// 添加课程信息
router.post('/addcourse',(req,res) => {
    var query = req.body;
    // console.log("queryObj",req)
    // var _sql = "SELECT * from question_info Where courseid='"+query.courseId+"'";
    var _sql = "INSERT INTO course_info (name) VALUES ('"+query.name+"')";


    mysql.query(_sql,function(err,rows){
        console.log("FDFDFFDFDFDDFF")
 
        console.log("ADD",rows)
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
// 删除课程信息
router.post('/delecourse',(req,res) => {
    var query = req.body;
    var _sql = "delete from course_info where id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})


// 修改课程信息
router.post('/updcourse',(req,res) => {
    var query = req.body;
    console.log("fff",query)
    var _sql = "UPDATE course_info SET name='"+query.name+"' WHERE id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})

// 添加教师信息
router.post('/addteacher',(req,res) => {
    var query = req.body;
    console.log("fff",query)
    var _sql = "INSERT INTO user_info (name,school,contact) VALUES ('"+query.name+"','"+query.school+"','"+query.contact+"')";

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
            errcode:0
        }
        res.send(data)
    }) 
})


// 删除教师信息
router.post('/deleteacher',(req,res) => {
    var query = req.body;
    var _sql = "delete from user_info where id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})

// 修改教师信息
router.post('/updteacher',(req,res) => {
    var query = req.body;
    console.log("fff",query)
    var _sql = "UPDATE user_info SET name='"+query.name+"',school='"+query.school+"',contact='"+query.contact+"'  WHERE id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})


// 添加学生信息
router.post('/addstu',(req,res) => {
    var query = req.body;
    console.log("fff",query)
    var _sql = "INSERT INTO stu_info (name,school,contact) VALUES ('"+query.name+"','"+query.school+"','"+query.contact+"')";

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
            errcode:0
        }
        res.send(data)
    }) 
})


// 删除学生信息
router.post('/deletestu',(req,res) => {
    var query = req.body;
    var _sql = "delete from stu_info where id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})

// 修改学生信息
router.post('/updstu',(req,res) => {
    var query = req.body;
    var _sql = "UPDATE stu_info SET name='"+query.name+"',school='"+query.school+"',contact='"+query.contact+"'  WHERE id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})




// 添加成绩
router.post('/addscore',(req,res) => {
    var query = req.body;
    var _sql = "INSERT INTO score_info (name,school,account,score) VALUES ('"+query.name+"','"+query.school+"','"+query.account+"','"+query.score+"')";

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
            errcode:0
        }
        res.send(data)
    }) 
})


// 删除成绩信息
router.post('/deletescore',(req,res) => {
    var query = req.body;
    var _sql = "delete from score_info where id="+query.id+"";
   console.log("fasfds",req.body)
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
            errcode:0
        }
        res.send(data)
    }) 
})

// 修改成绩信息
router.post('/updscore',(req,res) => {
    var query = req.body;
    var _sql = "UPDATE score_info SET name='"+query.name+"',school='"+query.school+"',account='"+query.account+"',score='"+query.score+"'  WHERE id="+query.id+"";

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
            errcode:0
        }
        res.send(data)
    }) 
})




// 添加題目
router.post('/addquestion',(req,res) => {
    var query = req.body;
    var _sql = "INSERT INTO question_info (body,options,answer,analysis,courseid,type) VALUES ('"+query.body+"','"+query.opt+"','"+query.answer+"','"+query.analysis+"','"+query.courseId+"','"+query.type+"')";

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
            errcode:0
        }
        res.send(data)
    }) 
})
// 刪除題目
router.post('/delquestion',(req,res) => {
    var query = req.body;
    var _sql = "delete from question_info where id="+query.id+"";
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
            errcode:0
        }
        res.send(data)
    }) 
})
// 修改題目
router.post('/updquestion',(req,res) => {
    var query = req.body;
    var _sql = "UPDATE question_info SET body='"+query.body+"',options='"+query.options+"',answer='"+query.answer+"',analysis='"+query.analysis+"'  WHERE id="+query.id+"";
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
            errcode:0
        }
        res.send(data)
    }) 
})






module.exports = router;
