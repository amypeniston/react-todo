import React from 'react';

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with your Github account below:</p>
              <button className="button">Login With Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;
