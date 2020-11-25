function greet(callback){
    console.log('Hello')
    var data = {
        name: "John Doe"
    }
    callback(data);
}

greet(function(data){
    console.log('callback 1');
    console.log(data);
});

greet(function(data){
    console.log('callback 2');
    console.log(data.name);
});