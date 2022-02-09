//typed arrays javascript
var buffer = new ArrayBuffer(8);//storing 8 bytes
var view = new Int32Array(buffer);//using buffer with 2 32 bit numbers
view[0]=5;
view[1]=15;
console.log(view);
 
