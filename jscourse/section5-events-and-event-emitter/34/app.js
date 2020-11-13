var Emitter = require('events')
var config = require('./config')
var emitter = new Emitter();

emitter.on(config.events.GREET, function(){
    console.log("Hello world 1")
});

emitter.on(config.events.GREET, function(){
    console.log("Hello world 2")
});

emitter.emit(config.events.GREET);