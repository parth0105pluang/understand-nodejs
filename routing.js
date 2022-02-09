var http = require("http");
var fs = require("fs");
//this function is a event listner and gets two parameters when emit happens somewhere.
http.createServer(function(req,res){
    
    if(req.url==="/api"){   
    res.writeHead(200,{"Content-Type":"application/json"});
       var obj = {
       "first-name":'Parth',
       "last-name":'Sharma'
       };
       res.end(JSON.stringify(obj));}


}).listen(8000,"127.0.0.1");