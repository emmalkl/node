var express = require('express');
var router = express.Router();
var User=require('../controllers/user.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  //相当于php ci语言
  //$this->load->view('index',$data);
  /*回调函数就是控制器*/ 
});

router.get('/xx',function(req, res, next){
  res.writeHead(200,{'Content-type':'text/plain'});
  res.end('haha loves hehe');
  // res.send('haha loves hehe');
});

router.get('/reg',User.reg);


'{"id":1,"name":"haha","age":15}'
$.post('/user/checkname',{'username':name},function(data){
   JSON.parse(data);
},'json')
function checkname(){
   $name=$this->input->post('username');
   $rs=$this->user_model->get_name($name);
   echo $rs;
}


module.exports = router;
