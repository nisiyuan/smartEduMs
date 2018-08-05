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
// mysql.end(function(err){
//     if(err){
//         return;
//     }
//     console.log("close succeed")
// })
//ceshi



module.exports = router;
