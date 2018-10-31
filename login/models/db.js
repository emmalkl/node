//封装,user_model.js里的（2）以及insert_name里的东西进行封装
var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
});
exports.query=function(sql,params,callback){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!    
      connection.query( sql,params, function (error, results, fields) {
        if (error) throw error;
        callback(error,results);
      connection.release();    
        });
  });
}