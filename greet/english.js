var greetings = require("./greetings.json");
greet=function(){
    console.log(greetings.en);
    //console.log(module)
}

module.exports = greet;