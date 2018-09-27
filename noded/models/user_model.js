var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'sunshine'
  });
  exports.sel_data=function(name,pass,callback){
    connection.connect();//打开数据库连接
    connection.query('select * from user', function (error, results, fields) {//调query查询
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
    //console.log(results);
    callback(results);//callback形参，results控制器下调的实参
    connection.end();
    }); 
  }