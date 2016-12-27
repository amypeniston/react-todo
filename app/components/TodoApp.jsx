var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;
      return (
        <div>
          
          <h1>Todo App</h1>
          <TodoList todos={todos}/>
        </div>
      );
  }
});

module.exports = TodoApp;
