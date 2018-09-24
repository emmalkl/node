var http=require('http');

http.createServer(function(req,res){
   console.log(req.headers);

}).listen(3000);
console.log('server start');