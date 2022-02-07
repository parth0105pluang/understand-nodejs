'use strict'
var EventEmitter = require('events');
module.exports = class Greettr extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello world!";
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit("greet",data);
    }
    }

    /*
    in main app
    'use strict';
    var greeterr = require('./greeterr');
    var greeter = new greeterr();
    greeter.on("greet",function(data){
    console.log("Someone greeted: "+data);
    });
    greeter.greet("Tony");
    */