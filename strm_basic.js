var fs = require("fs");
var readable = fs.createReadStream(__dirname+'/greet.txt',{encoding:"utf8",highWaterMark:1024});
var writeable = fs.createWriteStream(__dirname+'/greet_copy.txt');
readable.on("data",function(chunk){
  console.log(chunk.length);
  writeable.write(chunk);
});