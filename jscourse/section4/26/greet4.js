function Greet(){
    this.greeting ="Hello 4 this is a greeting"
    this.greet = function(){
        console.log(this.greeting)
    }
}

module.exports = Greet;