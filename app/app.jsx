var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state:', store.getState());
});

store.dispatch(actions.addTodo('Take a nap'));
store.dispatch(actions.setSearchText('nap'));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}/>
  </Router>,
  document.getElementById('app')
);
