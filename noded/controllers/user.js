var crypto=require('crypto');//类库
var User_model=require('../models/user_model.js')



exports.reg=function(req,res,next){
    // console.log('reging');
    res.render('reg');
}

exports.do_reg=function(req,res,next){
   var name=req.body.username;
   var pass=req.body.pass;
//    console.log(name);
   //console.log(pass);//输出密码
   var mpass=xmd5(pass);
   //console.log(mpass);//输出加密码

   //!!!!!!数据库相联系 function里的data就是user_model.js里的results
    User_model.sel_data(name,pass,function(data){//实参
        console.log(data);//打印出了results
    })
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