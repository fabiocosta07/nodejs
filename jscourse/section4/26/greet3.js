function Greet(){
    this.greeting ="Hello 3 this is a greeting"
    this.greet = function(){
        console.log(this.greeting)
    }
}

module.exports = new Greet();