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
    database:'test',
});
mysql.connect(function(err){
    if(err){
        console.log(err)
        console.log("连接失败了")
        return
    }
    console.log("连接成功了")
})
router.get('/test/new_table',(req,res) => {
    var tempUrl = req._parsedOriginalUrl.query;
    var iterms = tempUrl.split("&");
    var arr,Json={};
    for(var i=0;i<iterms.length;i++){
        arr=iterms[i].split("=");
        Json[arr[0]]=arr[1];
    }
    //var _sql = "SELECT * FROM userinfo Where "+"user_name='"+Json.user_name+"'AND password='"+Json.password+"'";
    var _sql = "SELECT * FROM new_table";

    console.log(_sql)
    mysql.query(_sql,function(err,rows){
        console.log(rows)
        var data = {

        }
        if(err){
            console.log(err)
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
                data:rows
            }
            data.data[0].password="******";
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
