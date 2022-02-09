var express = require("express");
var app =express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()
app.use("/assets",express.static(__dirname+"/public"));
app.set("view engine","ejs");

app.get('/', function(req, res) {
	res.render('index');
});

app.get("/person/:id",function(req,res){
res.render("person",{ID:req.params.id,Qstr:req.query.qstr});
});

app.post("/person",urlencodedParser,function(req,res){
    res.send("Thank You!!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post("/personjson",jsonParser,function(req,res){
     res.send("Thankyou for the Json Data");
     console.log(req.body.firstname);
     console.log(req.body.lastname);
});

app.use("/",function(req,res,next){
console.log("Request Url:"+req.url);
next();
})



app.listen(port);

