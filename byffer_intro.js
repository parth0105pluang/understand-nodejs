// java script is synchronous and node js async.
var buf = new Buffer("Hello");//utf 8 is default can also be passes as a parameter
console.log(buf);
console.log(buf.toString());
//buffer are finite
buf.write('wo');
console.log(buf.toString());
/*
<Buffer 48 65 6c 6c 6f>
Hello
wollo
*/