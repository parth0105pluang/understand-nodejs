'use strict'
// es-6 classes
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        console.log('Hello'+this.firstname+" "+this.lastname);
    }
}
var john = new Person("John","Doe");
john.greet();