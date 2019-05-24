import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  handleUsername = e => {
    this.props.actions.setUsername(e.target.value);
  };

  handlePassword = e => {
    this.props.actions.setPassword(e.target.value);
  };

  handleLogIn = e => {
    e.preventDefault();
    this.props.actions.handleLogin();
  };

  render() {
    return (
      <div className="loginDiv">
        <form className="loginForm">
          <div className="nameDiv">
            <input
              className="nameInput"
              placeholder="Username.."
              type="text"
              onChange={this.handleUsername}
            />
          </div>
          <div className="pswdDiv">
            <input
              className="pswdInput"
              placeholder="Password.."
              type="password"
              onChange={this.handlePassword}
            />
          </div>
          <button
            className="loginButton"
            type="submit"
            onClick={this.handleLogIn}
          >
            LogIn
          </button>
          <p>Not a member?</p>
          <Link to="/SignUp">
            <button className="signButton" type="submit">
              SignUp
            </button>
          </Link>
          <div className="loginErrDiv">{this.props.error}</div>
        </form>
      </div>
    );
  }
}

export default Login;
