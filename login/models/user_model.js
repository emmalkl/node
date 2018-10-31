var db=require('../models/db.js');


//连接数据库
/*(1)
ar mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
  });*/

/*(2)
var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
});*/

exports.insert_name=function(name,pass,callback){ 
    var sql="insert into t_users(USER_ID,ACCOUNT,PASSWORD) values(null,?,?)"
    db.query(sql,[name,pass],callback);

    //点击注册向数据库插入数据（连接池）    
/*    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!    
    connection.query('insert into t_users(USER_ID,ACCOUNT,PASSWORD) values(null,?,?)',[name,pass], function (error, results, fields) {
    connection.release();    
    if (error) throw error;     
    callback(error,results);
      });
    });
*/   


    /*connection.query('SELECT * from t_users', function (error, results, fields) {
        if (error) throw error;
        callback(error,results);
        //返回对象数组
        // console.log(results);
           // console.log('The solution is: ', results[0].solution);
        connection.end();
    });*/
}



exports.get_name_by_pass=function(name,pass,callback){
    var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[name,pass],callback);
}