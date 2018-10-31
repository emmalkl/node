var blog_model=require('../models/blog_model.js')
exports.index=function(req,res,next){
    blog_model.sel_all(function(err,data){
        // console.log(data);
        // console.log(req.session);
        res.render('index',{
            'blogs':data,
            'scon':req.session,
        })
    })
}