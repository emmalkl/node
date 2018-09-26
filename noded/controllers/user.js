var crypto=require('crypto');//类库
var mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'sunshine'
});


exports.reg=function(req,res,next){
    // console.log('reging');
    res.render('reg');
}

exports.do_reg=function(req,res,next){
   var name=req.body.username;
   var pass=req.body.pass;
//    console.log(name);
   console.log(pass);//输出密码
   var mpass=xmd5(pass);
   //console.log(mpass);//输出加密码

    connection.connect();//打开数据库连接
    connection.query('select * from user', function (error, results, fields) {//调query查询
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
    console.log(results);
    }); 
    connection.end();
}
function xmd5(str){
   var hash=crypto.createHash('md5');//md5,hash算法
   hash.update(str);
   var md5str=hash.digest('hex');
   return md5str;
}

exports.checkname=function(req,res,next){
    var name=req.body.username;//ajax请求得到
    if(name=="haha"){
     var str='{"id":1,"name":"haha"}';
    //  res.send(str);

     res.json(str);

     /*  res.send('success');//response返回'success'  */
    }else{
       res.send('error');
    }
 }