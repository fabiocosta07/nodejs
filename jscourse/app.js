var greet = require("./greet")
greet();
var greet2 = require("./greet2").greet
greet2();
var greet3 = require("./greet3")
greet3.greeting = "Hello changed"
greet3.greet();

var Greet = require("./greet4")
var greet = new Greet();
greet.greet();

var greet = require("./greet5")
greet.greet()