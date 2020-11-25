var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 10;
// unable to see, it holds just 2 32bits(buffer of 8 bytes(64bits)) numbers 
view[2] = 3;

console.log(view);