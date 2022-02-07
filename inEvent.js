var Emitter = require("events");
var eventConfig = require("./eventConfig").events;
var emtr = new Emitter();
emtr.on(eventConfig.GREET,function(){
    console.log("Someone said hello");
});
emtr.on(eventConfig.GREET,function(){
    console.log("Someone said holla");
});
emtr.emit("greet");