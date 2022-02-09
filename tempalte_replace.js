var http = require("http");
var fs = require("fs");
//this function is a event listner and gets two parameters when emit happens somewhere.
http.createServer(function(req,res){
       res.writeHead(200,{"Content-Type":"text/html"});
       var html = fs.readFileSync(__dirname+"/index.html").toString();
       var message = "Parth";
       html = html.replace(`{Message}`,message);
       res.end(html);
}).listen(8000,"127.0.0.1");