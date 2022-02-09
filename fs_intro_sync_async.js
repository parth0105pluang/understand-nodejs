var fs = require("fs");//file system module
var greet = fs.readFileSync(__dirname+"/greet.txt");//reads synchronously
console.log(greet.toString());
//async function.
var greet2 = fs.readFile(__dirname+"/greet.txt",
function(err,data){
        console.log(data);
});
console.log("Done!");