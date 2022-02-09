var http = require("http");
var fs = require("fs");
//this function is a event listner and gets two parameters when emit happens somewhere.
http.createServer(function(req,res){
       res.writeHead(200,{"Content-Type":"text/html"});
       fs.createReadStream(__dirname+'/index.html').pipe(res);
       
}).listen(8000,"127.0.0.1");