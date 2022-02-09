var express = require("express");
var app =express();
var port = process.env.PORT || 3000;
app.use("/assets",express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.get("/person/:id",function(req,res){
res.render("index",{ID:req.params.id});
});
app.get("/",function(req,res){
res.send('<html><h1>Hello</h1><link rel="stylesheet" href="assets/style.css"></html>');
});
app.use("/",function(req,res,next){
console.log("Request Url:"+req.url);
next();
})
app.get("/person/:id",function(req,res){
    res.send("You searched for :"+req.params.id+" th person");
});
app.listen(port);

