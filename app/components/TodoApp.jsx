var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Feed the cat'
        },
        {
          id: 3,
          text: 'Do the dishes'
        },
        {
          id: 4,
          text: 'Fold the laundry'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
      return (
        <div>

          <h1>Todo App</h1>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      );
  }
});

module.exports = TodoApp;
