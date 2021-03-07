var Todos = require('../models/todoModels');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) =>{
        var starterTodos = [
            {
                username : 'test',
                todo : 'buy milk',
                isDone: false,
                hasAttachement: false,
            }
        ];
        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        });
    })
}