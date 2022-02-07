'use strict';
var greeterr = require('./greeterr');
var greeter = new greeterr();
greeter.on("greet",function(data){
    console.log("Someone greeted: "+data);
});
greeter.greet("Tony");