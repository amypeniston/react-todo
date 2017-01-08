var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} rel="form">
          <input placeholder="What do you have to do?" type="text" ref="todoText"></input>
          <button className="button expanded" type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
