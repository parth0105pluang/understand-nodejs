var fs = require("fs");
var zlib = require("zlib");
var readable = fs.createReadStream(__dirname+'/greet.txt');
var writeable = fs.createWriteStream(__dirname+'/greet_copy.txt');
/*readable.on("data",function(chunk){
  console.log(chunk.length);
  writeable.write(chunk);
});
*/
var compressed = fs.createWriteStream(__dirname+'/greet.txt.gz');
var gzip = zlib.createGzip();
readable.pipe(writeable);
readable.pipe(gzip).pipe(compressed);
