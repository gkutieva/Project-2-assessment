const todos = require('../data/todos');
var Todo = require('../data/todos');

module.exports = {
    index,
    show,
    create,
    delete: deleteTodo,
    update
}

function index(req, res) {
    res.render('index', {title: 'Unit 2 Assessment', todos});
}

function create(req, res) {
    todos.push(req.body.todo);
    res.redirect('/');
}

function show(req, res) {
    res.render('show', {title: 'todo', todo: todos[req.params.id], id: req.params.id})
}

function deleteTodo(req, res) {
    Todo.deleteTodo(req.params.id);
    res.redirect('/todos');
}

function update(req, res) {
    todos[req.params.id] = req.body.todo;
    res.redirect('/');
}
