var greet = require("./greet");
var greet1 = require("./greet1").greet();
var greet3 = require("./greet3");
var Greet4 = require("./greet4");
console.log(Greet4);
//in case of greet 3 no copy created due to caching hence greet4 better.
var Grtr = new Greet4();
Grtr.greet();
greet.english();
greet.spanish();
//console.log(greet);