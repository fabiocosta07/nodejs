var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin123@cluster0.zg9sn.mongodb.net/test?retryWrites=true&w=majority')

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String
})

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John'
})

john.save(function(err){
    if (err) throw err

    console.log('person saved')
})

Person.find({_id:'600dc62be30853cf6ac9559c'},(err, users)=>{
    if (err) throw err;
    console.log(users)
})

Person.find({},(err, users)=>{
    if (err) throw err;
    console.log(users)
})