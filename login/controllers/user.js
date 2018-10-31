var User_model=require('../models/user_model.js')
exports.reg=function(req,res,next){
    res.render('reg');
}
exports.do_reg=function(req,res,next){
    var name=req.body.uname;
    var pass=req.body.pass;
    //异步处理   data也就是数据库输出来的数组
    User_model.insert_name(name,pass,function(err,data){
        // console.log(data);
        //一行受影响
        if(data.affectedRows==1){
            res.redirect('/login');
        }
    }) 
}
exports.login=function(req,res,next){
    res.render('login');
}
exports.do_login=function(req,res,next){
    var name=req.body.uname;
    var pass=req.body.pass;
    //验证
    User_model.get_name_by_pass(name,pass,function(err,data){
        // console.log(data);
        //如果登陆成功,里面写cookie/session       node下如何处理cookie/session 
        if(data.length>0){
            // req.session=data;
            // req.session.uid=data[0].USER_ID;
            req.session=data[0];
            res.redirect('/');
        }
    })
}