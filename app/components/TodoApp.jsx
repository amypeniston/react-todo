var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Feed the cat',
          completed: false
        },
        {
          id: uuid(),
          text: 'Do the dishes',
          completed: true
        },
        {
          id: uuid(),
          text: 'Fold the laundry',
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    var newTodo = {
      id: uuid(),
      text: text,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
      return (
        <div>

          <h1>Todo App</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      );
  }
});

module.exports = TodoApp;
