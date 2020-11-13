var Emitter = require('./emitter')

var emitter = new Emitter();

emitter.on('greet', function(){
    console.log("Hello world 1")
});

emitter.on('greet', function(){
    console.log("Hello world 2")
});

emitter.emit('greet');