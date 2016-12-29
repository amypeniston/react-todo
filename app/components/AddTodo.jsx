var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} rel="form">
          <input placeholder="What do you have to do?" type="text" ref="todoText"></input>
          <button className="button expanded" type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
