var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app){
    app.get("/api/person/:id",jsonParser,function(req,res){
        // get data from database
        res.json({firstname:"Parth",lastname:"Sharma"});
   });
    app.post("/personjson",jsonParser,function(req,res){
        // save to database
   });
   app.delete("/personjson",jsonParser,function(req,res){
    // delete from database
});
}