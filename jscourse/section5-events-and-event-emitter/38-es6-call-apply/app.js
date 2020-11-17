var obj = {
    name: 'John Doe',
    greet: function (par1){
        console.log(`Hello ${ this.name } ${ par1 }`)
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'}, 'val1');
obj.greet.apply({ name: 'Jane Doe'}, ['val1']);
