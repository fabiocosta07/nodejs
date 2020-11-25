const { builtinModules } = require("module");

var buf = new Buffer.from('Hello');
console.log(buf.toJSON());
console.log(buf.toString());
console.log(buf[2]);
buf.write('ho')
console.log(buf.toString());