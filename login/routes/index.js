var express = require('express');
var router = express.Router();
var User=require('../controllers/user.js');
var Blog=require('../controllers/blog.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'nihao' });
// });
router.get('/',Blog.index);
router.get('/reg', User.reg);
router.post('/reg', User.do_reg);
router.get('/login', User.login);
router.post('/login', User.do_login);











/*

router.get('/reg', function(req, res, next) {
  res.render('reg');
});
router.post('/reg', function(req, res, next) {
  var name=req.body.uname;
  var pass=req.body.pass;
  //跳转登陆页面
  if(name=="haha"){
      res.redirect('/login');
  }
});
router.get('/login', function(req, res, next) {
  res.render('login',{'dialog':'haha'});
});
//end

*/
module.exports = router;
