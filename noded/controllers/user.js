exports.reg=function(req,res,next){
    // console.log('reging');
    res.render('reg');
}

exports.do_reg=function(req,res,next){
   var name=req.body.username;
   var pass=req.body.pass;
   console.log(name);
   console.log(pass);
}