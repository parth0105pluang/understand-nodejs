function Greetr(){
    this.greeting = "Hello World";
    this.greet = function(){
        console.log(this.greeting);
    }
}
//console.log(Greetr);
module.exports=Greetr;
//console.log(module.exports);

